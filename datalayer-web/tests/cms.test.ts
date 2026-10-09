import { beforeEach, describe, expect, it, vi } from 'vitest';

// Obsah webu v administraci (docs/cms.md): mapování cest na dokumenty, čtení
// stránek před importem a po něm, převod starších stránek, ukládání a migrace
// 20261009_cms_content_import. Firestore nahrazuje jednoduchá databáze v paměti.

type Doc = Record<string, unknown>;

const { db, docs } = vi.hoisted(() => {
  const docs = new Map<string, Doc>();
  // jako Firestore: pole přímo v poli zápis odmítne
  const check = (v: unknown, path: string): void => {
    if (Array.isArray(v)) {
      v.forEach((x, i) => {
        if (Array.isArray(x)) throw new Error(`3 INVALID_ARGUMENT: Property array contains an invalid nested entity (${path}.${i})`);
        check(x, `${path}.${i}`);
      });
    } else if (typeof v === 'object' && v !== null && Object.getPrototypeOf(v) === Object.prototype) {
      for (const [k, x] of Object.entries(v)) check(x, path ? `${path}.${k}` : k);
    }
  };
  // jako Firestore s ignoreUndefinedProperties: pole s undefined vynechá a objekt, kterému
  // zůstala jen undefined, z pole vypustí úplně (prázdné `{}` naopak uloží)
  const store = (v: unknown): unknown => {
    if (Array.isArray(v)) return v.filter((x) => !(isMap(x) && Object.keys(x).length && Object.values(x).every((y) => y === undefined))).map(store);
    if (isMap(v)) return Object.fromEntries(Object.entries(v).filter(([, x]) => x !== undefined).map(([k, x]) => [k, store(x)]));
    return v;
  };
  const isMap = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && Object.getPrototypeOf(v) === Object.prototype;
  const docRef = (col: string, id: string) => {
    const key = `${col}/${id}`;
    return {
      get: async () => ({
        exists: docs.has(key),
        data: () => docs.get(key),
        get: (field: string) => docs.get(key)?.[field],
      }),
      set: async (value: Doc, opts?: { merge?: boolean }) => {
        check(value, '');
        const stored = store(value) as Doc;
        docs.set(key, opts?.merge ? { ...(docs.get(key) ?? {}), ...stored } : stored);
      },
      delete: async () => {
        docs.delete(key);
      },
    };
  };
  const db = {
    collection: (col: string) => ({
      doc: (id: string) => docRef(col, id),
      get: async () => ({
        docs: [...docs.entries()]
          .filter(([k]) => k.startsWith(`${col}/`) && !k.slice(col.length + 1).includes('/'))
          .map(([k, v]) => ({ id: k.slice(col.length + 1), data: () => v })),
      }),
    }),
  };
  return { db, docs };
});

vi.mock('~/lib/firestore.server', () => ({ firestore: db }));

const { DEFAULT_NAVIGATION, DEFAULT_PAGES, DEFAULT_TEXTS } = await import('~/content/defaults');
const { pageSchema, navigationSchema, textsSchema } = await import('~/content/schema');
const { isReservedPath, pageIdFromPath, pathFromPageId } = await import('~/lib/cms/ids');
const { resetCmsMetaCache } = await import('~/lib/cms/meta.server');
const { PageError, convertLegacyPage, createPage, deletePage, getPageByPath, listPages, savePage } = await import('~/lib/cms/pages.server');
const { sanitizePage, sanitizeTexts } = await import('~/lib/cms/sanitize.server');
const { decodeNested, encodeNested } = await import('~/lib/cms/codec');
const { navigationStore, textsStore } = await import('~/lib/cms/singletons.server');
const { migration } = await import('~/migrations/scripts/20261009_cms_content_import');
const { migration: slimMigration } = await import('~/migrations/scripts/20261009_lp_stihla_sablona');
const { migration: noPersonMigration } = await import('~/migrations/scripts/20261009_bez_kontaktni_osoby');
const { migration: auditMigration } = await import('~/migrations/scripts/20261009_jazykovy_audit');
const { migration: uxMigration, REMOVED_PAGES } = await import('~/migrations/scripts/20261009_ux_redukce');
const { importPage } = await import('~/migrations/helpers');
type MigrationContext = import('~/migrations/types').MigrationContext;

const ctx = { firestore: () => db, log: () => {} } as unknown as MigrationContext;
const stored = (path: string) => docs.get(`pages/${pageIdFromPath(path)}`);
const kontakt = DEFAULT_PAGES.find((p) => p.path === 'kontakt')!;

beforeEach(() => {
  docs.clear();
  resetCmsMetaCache();
});

describe('cesty a ID dokumentů', () => {
  it('homepage = home, lomítko = __, převod tam a zpět', () => {
    expect(pageIdFromPath('')).toBe('home');
    expect(pageIdFromPath('/sluzby/bigquery/')).toBe('sluzby__bigquery');
    for (const p of DEFAULT_PAGES) expect(pathFromPageId(pageIdFromPath(p.path))).toBe(p.path);
  });

  it('cesty aplikace nejde obsadit stránkou', () => {
    for (const p of ['admin', 'admin/pages', 'blog', 'blog/clanek', 'api/kontakt', 'dekujeme', 'migrate', 'sitemap.xml', 'og/x.png', 'home']) {
      expect(isReservedPath(p), p).toBe(true);
    }
    for (const p of ['sluzby/bigquery', 'kontakt', 'kampan-ga4']) expect(isReservedPath(p), p).toBe(false);
  });
});

describe('čištění HTML při uložení', () => {
  it('odstraní skripty a obsluhy událostí, nechá formátování a odkazy', () => {
    const page = sanitizePage({
      ...kontakt,
      sections: [
        {
          id: 'test',
          title: 'Test',
          tone: 'light',
          lead: 'Úvod <img src=x onerror="alert(1)"><strong>tučně</strong>',
          blocks: [
            { type: 'paragraphs', items: ['<a href="/kontakt" onclick="x()">odkaz</a><script>alert(1)</script>'] },
            { type: 'html', html: '<h2>Nadpis</h2><p>Text</p><script>alert(1)</script><iframe src="https://example.com"></iframe>' },
          ],
        },
      ],
      faq: [{ q: 'Otázka', a: '<em>Odpověď</em><a href="javascript:alert(1)">x</a>' }],
    });
    const s = page.sections[0];
    expect(s.lead).toBe('Úvod <strong>tučně</strong>');
    const [p, h] = s.blocks;
    expect(p.type === 'paragraphs' && p.items[0]).toBe('<a href="/kontakt">odkaz</a>');
    expect(h.type === 'html' && h.html).toBe('<h2>Nadpis</h2><p>Text</p>');
    expect(page.faq[0].a).not.toContain('javascript');
  });

  it('texty webu: cookie lišta bez skriptů', () => {
    const t = sanitizeTexts({ ...DEFAULT_TEXTS, cookieBar: { ...DEFAULT_TEXTS.cookieBar, text: 'Text<script>alert(1)</script>' } });
    expect(t.cookieBar.text).toBe('Text');
  });
});

describe('převod pro Firestore (pole v poli)', () => {
  it('řádky tabulky zabalí a při čtení vrátí beze změny', () => {
    const withTable = DEFAULT_PAGES.find((p) => p.sections.some((s) => s.blocks.some((b) => b.type === 'table')))!;
    const encoded = encodeNested(withTable);
    expect(JSON.stringify(encoded)).toContain('{"cells":[');
    expect(decodeNested(encoded)).toEqual(withTable);
    expect(decodeNested(withTable)).toEqual(withTable);
  });

  it('stránka s tabulkou projde uložením i čtením', async () => {
    const withTable = DEFAULT_PAGES.find((p) => p.path === 'sluzby/implementace-ga4')!;
    await savePage(withTable, 'x');
    const loaded = await getPageByPath(withTable.path);
    expect(loaded?.source).toBe('firestore');
    expect(loaded?.page.sections).toEqual(sanitizePage(withTable).sections);
  });

  it('přepisy kroků postupu drží pořadí i s prázdnými položkami', async () => {
    // výchozí obsah blok Postup po UX redukci nemá – stránka s ním jen pro test
    const base = DEFAULT_PAGES.find((p) => p.path === 'sluzby/bigquery')!;
    const withOverrides = [
      {
        ...base,
        sections: [
          ...base.sections,
          { id: 'postup', title: 'Postup', blocks: [{ type: 'process' as const, stepOverrides: [{}, { text: 'Vlastní krok 2' }, {}, { fromClient: 'export z CRM' }] }] },
        ],
      },
    ];
    for (const page of withOverrides) {
      await savePage(page, 'x');
      const loaded = await getPageByPath(page.path);
      const overrides = (sections: typeof page.sections) =>
        sections.flatMap((s) => s.blocks).flatMap((b) => (b.type === 'process' ? [b.stepOverrides] : []))[0];
      expect(overrides(loaded!.page.sections), page.path).toHaveLength(overrides(page.sections)!.length);
      expect(overrides(loaded!.page.sections), page.path).toEqual(overrides(sanitizePage(page).sections));
    }
  });
});

describe('starší stránky z dřívější administrace', () => {
  it('převod na stránku s jedním blokem volného textu', () => {
    const page = convertLegacyPage('kampan-ga4', { title: 'Kampaň GA4', perex: 'Krátký úvod.', content: '<p>Obsah</p>' });
    expect(page.path).toBe('kampan-ga4');
    expect(page.kind).toBe('page');
    expect(page.hero).toMatchObject({ variant: 'simple', h1: 'Kampaň GA4', subtitle: 'Krátký úvod.' });
    expect(page.sections[0].blocks[0]).toEqual({ type: 'html', html: '<p>Obsah</p>' });
    expect(page.contact.formId).toMatch(/^[a-z0-9-]+$/);
  });
});

describe('čtení stránek před importem obsahu', () => {
  it('chybějící stránka = výchozí z kódu, neznámá = 404', async () => {
    expect((await getPageByPath('kontakt'))?.source).toBe('default');
    expect(await getPageByPath('neexistuje')).toBeNull();
  });

  it('uložená stránka má přednost před výchozí', async () => {
    await savePage({ ...kontakt, hero: { ...kontakt.hero, h1: 'Upravený nadpis' } }, 'test@example.com');
    const loaded = await getPageByPath('kontakt');
    expect(loaded?.source).toBe('firestore');
    expect(loaded?.page.hero.h1).toBe('Upravený nadpis');
    expect(loaded?.updatedBy).toBe('test@example.com');
  });

  it('starší stránka se stejnou cestou výchozí stránku nepřebije, jiná cesta funguje', async () => {
    docs.set('pages/kontakt', { slug: 'kontakt', title: 'Stará', content: '<p>x</p>' });
    docs.set('pages/kampan-ga4', { slug: 'kampan-ga4', title: 'Kampaň', content: '<p>x</p>' });
    expect((await getPageByPath('kontakt'))?.source).toBe('default');
    expect((await getPageByPath('kampan-ga4'))?.source).toBe('legacy');
    const list = await listPages();
    expect(list.filter((p) => p.page.path === 'kontakt')).toHaveLength(1);
    expect(list.find((p) => p.page.path === 'kontakt')?.source).toBe('default');
    expect(list).toHaveLength(DEFAULT_PAGES.length + 1);
  });
});

describe('ukládání stránek', () => {
  it('neplatná data vrátí chyby po polích', async () => {
    const err = await savePage({ ...kontakt, seo: { title: '', description: '' } }, 'x').catch((e) => e);
    expect(err).toBeInstanceOf(PageError);
    expect((err as InstanceType<typeof PageError>).issues?.map((i) => i.path)).toContain('seo.title');
  });

  it('cesta aplikace a nebezpečný odkaz neprojdou', async () => {
    await expect(savePage({ ...kontakt, path: 'admin/x' }, 'x')).rejects.toThrow(/patří aplikaci/);
    const bad = { ...kontakt, hero: { ...kontakt.hero, primaryCta: { label: 'Klik', href: 'javascript:alert(1)' } } };
    await expect(savePage(bad, 'x')).rejects.toBeInstanceOf(PageError);
  });

  it('kotva sekce nesmí kolidovat se šablonou', async () => {
    const page = { ...kontakt, sections: [...kontakt.sections, { id: 'kontakt', title: 'X', tone: 'light' as const, blocks: [] }] };
    const err = await savePage(page, 'x').catch((e) => e);
    expect((err as InstanceType<typeof PageError>).issues?.[0].message).toMatch(/šablona/);
  });

  it('nová stránka je koncept, druhou se stejnou cestou nejde založit', async () => {
    const page = await createPage({ path: 'sluzby/nova-sluzba', kind: 'service', navTitle: 'Nová služba' }, 'x');
    expect(page.published).toBe(false);
    expect(stored('sluzby/nova-sluzba')).toBeDefined();
    await expect(createPage({ path: 'sluzby/nova-sluzba', kind: 'service', navTitle: 'Znovu' }, 'x')).rejects.toThrow(/existuje/);
    await expect(createPage({ path: 'kontakt', kind: 'page', navTitle: 'Kontakt' }, 'x')).rejects.toThrow(/existuje/);
  });

  it('homepage nejde smazat', async () => {
    await expect(deletePage('')).rejects.toThrow(/Homepage/);
  });
});

describe('menu a texty webu', () => {
  it('bez dokumentu platí výchozí obsah, uložení projde schématem', async () => {
    expect((await navigationStore.get({ fresh: true })).cta).toEqual(DEFAULT_NAVIGATION.cta);
    await navigationStore.save({ ...DEFAULT_NAVIGATION, cta: { label: 'Ozvěte se' } }, 'test@example.com');
    const nav = await navigationStore.get({ fresh: true });
    expect(nav.cta.label).toBe('Ozvěte se');
    expect(nav.updatedBy).toBe('test@example.com');
    const bad = { ...DEFAULT_NAVIGATION, items: [{ type: 'link', label: 'X', href: 'javascript:alert(1)' }] };
    await expect(navigationStore.save(bad, 'x')).rejects.toBeInstanceOf(PageError);
  });

  it('texty webu se při uložení čistí', async () => {
    await textsStore.save({ ...DEFAULT_TEXTS, contact: { ...DEFAULT_TEXTS.contact, legal: 'Zásady<script>x</script>' } }, 'x');
    expect((docs.get('content/texts') as { contact: { legal: string } }).contact.legal).toBe('Zásady');
  });
});

describe('migrace 20261009_cms_content_import', () => {
  it('uloží všechny stránky, menu a texty a přepne web na obsah z databáze', async () => {
    const summary = await migration.run(ctx);
    expect(summary).toContain(`stránky: ${DEFAULT_PAGES.length} nových, 0 beze změny`);
    for (const p of DEFAULT_PAGES) {
      const doc = stored(p.path);
      expect(doc, p.path).toBeDefined();
      expect(doc?.updatedBy).toBe('migrace');
      expect(pageSchema.safeParse({ ...(decodeNested(doc) as object), path: p.path }).success, p.path).toBe(true);
    }
    expect(navigationSchema.safeParse(decodeNested(docs.get('content/navigation'))).success).toBe(true);
    expect(textsSchema.safeParse(decodeNested(docs.get('content/texts'))).success).toBe(true);
    expect(docs.get('content/meta')?.initialized).toBe(true);

    // po importu web výchozí obsah z kódu nepoužívá – smazaná stránka zůstane smazaná
    await deletePage('kontakt');
    expect(await getPageByPath('kontakt')).toBeNull();
    expect((await listPages()).length).toBe(DEFAULT_PAGES.length - 1);
  });

  it('je idempotentní a nepřepíše úpravy z administrace', async () => {
    await savePage({ ...kontakt, hero: { ...kontakt.hero, h1: 'Z administrace' } }, 'editor@example.com');
    await navigationStore.save({ ...DEFAULT_NAVIGATION, cta: { label: 'Vlastní' } }, 'editor@example.com');
    const first = await migration.run(ctx);
    expect(first).toContain(`${DEFAULT_PAGES.length - 1} nových, 1 beze změny`);
    expect(first).toContain('menu a patička: beze změny');
    expect((stored('kontakt')?.hero as { h1: string }).h1).toBe('Z administrace');
    expect((docs.get('content/navigation') as { cta: { label: string } }).cta.label).toBe('Vlastní');

    const snapshot = JSON.stringify([...docs.entries()].filter(([k]) => k.startsWith('pages/')));
    const second = await migration.run(ctx);
    expect(second).toContain(`stránky: 0 nových, ${DEFAULT_PAGES.length} beze změny`);
    expect(JSON.stringify([...docs.entries()].filter(([k]) => k.startsWith('pages/')))).toBe(snapshot);
  });

  it('starší stránku se stejnou cestou zazálohuje a nahradí', async () => {
    const legacy = { slug: 'o-nas', title: 'Starý text', content: '<p>Starý</p>' };
    docs.set('pages/o-nas', legacy);
    const summary = await migration.run(ctx);
    expect(summary).toContain('pages_backup');
    expect(docs.get('pages_backup/o-nas')).toMatchObject(legacy);
    expect(stored('o-nas')?.hero).toBeDefined();
  });
});

describe('migrace 20261009_lp_stihla_sablona', () => {
  const OLD_COOKIE_TEXT =
    'Nezbytné cookies drží web v chodu. Analytické a marketingové cookies použijeme jen se souhlasem: pomáhají nám měřit návštěvnost a vyhodnocovat kampaně. Volbu můžete kdykoli změnit odkazem Nastavení cookies v patičce. Podrobnosti najdete v <a href="/cookies">zásadách cookies</a>.';
  const ssPath = 'sluzby/server-side-tracking';

  /** Stav po importu obsahu z předchozího kola: stránky se starším zněním, původní texty a menu. */
  async function seedOldContent() {
    await migration.run(ctx);
    for (const p of DEFAULT_PAGES) {
      const doc = stored(p.path)!;
      docs.set(`pages/${pageIdFromPath(p.path)}`, { ...doc, hero: { ...(doc.hero as object), h1: `Starší znění ${p.path}` } });
    }
    const texts = docs.get('content/texts')!;
    docs.set('content/texts', { ...texts, cookieBar: { ...(texts.cookieBar as object), text: OLD_COOKIE_TEXT } });
    const nav = decodeNested(docs.get('content/navigation')) as typeof DEFAULT_NAVIGATION;
    // menu z tehdejšího kola mělo Dashboardy s vysvětlivkou (výchozí menu je po UX redukci nemá)
    const items = nav.items.map((i, idx) =>
      i.type === 'menu' && idx === 0
        ? { ...i, columns: [{ ...i.columns[0], items: [...i.columns[0].items, { label: 'Dashboardy a reporting', href: '/sluzby/dashboardy-a-reporting', tagline: 'Data Studio (dříve Looker Studio) i Power BI' }] }] }
        : i,
    );
    docs.set('content/navigation', encodeNested({ ...nav, items }) as Doc);
  }

  it('přepíše stránky novým zněním a původní uloží do pages_backup', async () => {
    await seedOldContent();
    const summary = await slimMigration.run(ctx);
    expect(summary).toContain(`stránky: ${DEFAULT_PAGES.length} přepsaných, 0 beze změny`);
    expect(summary).toContain('pages_backup');
    for (const p of DEFAULT_PAGES) {
      const page = await getPageByPath(p.path);
      expect(page?.page.hero.h1, p.path).toBe(pageSchema.parse(p).hero.h1);
      expect(stored(p.path)?.updatedBy).toBe('migrace');
      expect((docs.get(`pages_backup/${pageIdFromPath(p.path)}@20261009_lp_stihla_sablona`)?.hero as { h1: string }).h1).toBe(`Starší znění ${p.path}`);
    }
    // nový obsah prošel zápisem bez polí v poli (tabulky)
    expect(pageSchema.safeParse({ ...(decodeNested(stored(ssPath)) as object), path: ssPath }).success).toBe(true);
    expect(summary).toContain('cookie lišta: kratší text');
    expect(((decodeNested(docs.get('content/texts')) as { cookieBar: { text: string } }).cookieBar.text)).toBe(DEFAULT_TEXTS.cookieBar.text);
    expect(textsSchema.safeParse(decodeNested(docs.get('content/texts'))).success).toBe(true);
    expect(summary).toContain('menu: popisek Dashboardů bez vysvětlivky');
    expect(JSON.stringify(docs.get('content/navigation'))).not.toContain('dříve Looker Studio');
    expect(navigationSchema.safeParse(decodeNested(docs.get('content/navigation'))).success).toBe(true);
  });

  it('nechá stav zveřejnění, smazanou stránku nezaloží a podruhé nic nemění', async () => {
    await seedOldContent();
    const doc = stored(ssPath)!;
    docs.set(`pages/${pageIdFromPath(ssPath)}`, { ...doc, published: false, noindex: true, updatedBy: 'editor@example.com' });
    docs.delete(`pages/${pageIdFromPath('kontakt')}`);

    const first = await slimMigration.run(ctx);
    expect(first).toContain(`stránky: ${DEFAULT_PAGES.length - 1} přepsaných`);
    expect(first).toContain('1 z nich mělo úpravy z administrace');
    expect(first).toContain('nezaloženo: kontakt');
    expect(stored(ssPath)).toMatchObject({ published: false, noindex: true, updatedBy: 'migrace' });
    expect(stored('kontakt')).toBeUndefined();

    const snapshot = JSON.stringify([...docs.entries()].filter(([k]) => !k.startsWith('migrations')));
    const second = await slimMigration.run(ctx);
    expect(second).toContain(`stránky: 0 přepsaných, ${DEFAULT_PAGES.length - 1} beze změny`);
    expect(second).toContain('cookie lišta: beze změny');
    expect(second).toContain('menu: beze změny');
    expect(JSON.stringify([...docs.entries()].filter(([k]) => !k.startsWith('migrations')))).toBe(snapshot);
  });

  it('vlastní text cookie lišty a vlastní menu z administrace nepřepíše', async () => {
    await migration.run(ctx);
    await textsStore.save({ ...DEFAULT_TEXTS, cookieBar: { ...DEFAULT_TEXTS.cookieBar, text: 'Vlastní text lišty.' } }, 'editor@example.com');
    const summary = await slimMigration.run(ctx);
    expect(summary).toContain('stránky: 0 přepsaných');
    expect(summary).toContain('cookie lišta: vlastní znění z administrace, beze změny');
    expect((docs.get('content/texts') as { cookieBar: { text: string } }).cookieBar.text).toBe('Vlastní text lišty.');
  });
});

describe('migrace 20261009_bez_kontaktni_osoby', () => {
  it('vymaže kontaktní osobu z textů, stránky přepíše se zálohou, autora článků změní', async () => {
    await migration.run(ctx);
    // stav po předchozím kole: osoba v textech, na stránce O nás a jako autor článku
    const texts = docs.get('content/texts')!;
    docs.set('content/texts', { ...texts, contact: { ...(texts.contact as object), personName: 'Odpovídá Vít Novotný', personNote: 'obvykle do jednoho pracovního dne' } });
    const onas = stored('o-nas')!;
    docs.set('pages/o-nas', { ...onas, hero: { ...(onas.hero as object), subtitle: 'Za datalayer.cz stojí Vít Novotný, tracking & data engineer.' }, updatedBy: 'editor@example.com' });
    docs.set('pages/vlastni-stranka', { ...onas, path: 'vlastni-stranka', hero: { ...(onas.hero as object), h1: 'Napište Vítovi' } });
    docs.set('articles/clanek', { slug: 'clanek', title: 'Článek', author: 'Vít Novotný', content: '<p>Text bez jména.</p>' });
    docs.set('articles/zminka', { slug: 'zminka', title: 'Rozhovor', author: 'Jiný autor', content: '<p>Ptali jsme se Víta Novotného.</p>' });

    const summary = await noPersonMigration.run(ctx);
    expect(summary).toContain('texty webu: kontaktní osoba vymazaná');
    expect(summary).toContain('stránky: 1 přepsaných');
    expect(summary).toContain('1 z nich mělo úpravy z administrace');
    expect(summary).toContain('autor článků změněný: 1');
    expect(summary).toContain('stránka /vlastni-stranka');
    expect(summary).toContain('článek zminka');

    const contact = (decodeNested(docs.get('content/texts')) as { contact: { personName: string; personNote: string } }).contact;
    expect(contact.personName).toBe('');
    expect(contact.personNote).toBe('');
    expect(textsSchema.safeParse(decodeNested(docs.get('content/texts'))).success).toBe(true);
    expect(JSON.stringify(stored('o-nas'))).not.toContain('Novotn');
    expect(stored('o-nas')?.updatedBy).toBe('migrace');
    expect((docs.get('pages_backup/o-nas@20261009_bez_kontaktni_osoby')?.hero as { subtitle: string }).subtitle).toContain('Vít Novotný');
    expect(docs.get('articles/clanek')?.author).toBe('datalayer.cz');
    expect(docs.get('articles/zminka')?.author).toBe('Jiný autor');

    // podruhé už nic nemění (zmínky mimo výchozí obsah dál jen hlásí)
    const snapshot = JSON.stringify([...docs.entries()].filter(([k]) => !k.startsWith('migrations')));
    const second = await noPersonMigration.run(ctx);
    expect(second).toContain('texty webu: beze změny');
    expect(second).toContain('stránky: 0 přepsaných');
    expect(second).toContain('autor článků změněný: 0');
    expect(JSON.stringify([...docs.entries()].filter(([k]) => !k.startsWith('migrations')))).toBe(snapshot);
  });

  it('obsah bez zmínek nechá být', async () => {
    await migration.run(ctx);
    const summary = await noPersonMigration.run(ctx);
    expect(summary).toBe('texty webu: beze změny; stránky: 0 přepsaných; autor článků změněný: 0; jiné zmínky nezůstaly');
  });
});

describe('migrace 20261009_jazykovy_audit', () => {
  const OLD_NEXT = [
    'Do jednoho pracovního dne navrhneme termín.',
    'Na třicet minut projdeme web a cíle.',
    'Do dvou pracovních dnů po konzultaci dostanete shrnutí a návrh dalšího kroku.',
  ];

  it('stránky, texty, menu, telefon a články uvede do nového znění, úpravy z administrace nechá', async () => {
    await migration.run(ctx);
    // stav z předchozího kola: staré výchozí texty, jeden vlastní text, starý popisek v menu, starší stránka a článek
    const texts = decodeNested(docs.get('content/texts')) as Record<string, Record<string, unknown>>;
    texts.contact = { ...texts.contact, note: 'Ozveme se do jednoho pracovního dne.', nextSteps: OLD_NEXT, successTitle: 'Vlastní nadpis z administrace' };
    texts.page = { ...texts.page, faqLead: 'Nenašli jste odpověď? <a href="#kontakt">Napište nám</a>.' };
    docs.set('content/texts', encodeNested(texts) as Doc);
    // menu z tehdejšího kola s popisky (výchozí menu je po UX redukci nemá)
    const nav = decodeNested(docs.get('content/navigation')) as typeof DEFAULT_NAVIGATION;
    const first = nav.items[0];
    if (first.type === 'menu') first.columns[0].items[0] = { ...first.columns[0].items[0], tagline: 'Ads, Meta, Sklik i Heureka vidí totéž' };
    docs.set('content/navigation', encodeNested(nav) as Doc);
    const home = stored('')!;
    docs.set('pages/home', { ...home, hero: { ...(home.hero as object), microcopy: 'Úvodní třicetiminutová konzultace zdarma · odpověď do jednoho pracovního dne' } });
    docs.set('settings/site', { recipients: ['a@example.com'], phone: '' });
    docs.set('articles/server-side-gtm-uvod', { slug: 'server-side-gtm-uvod', title: 'Server-Side GTM: proč a jak začít', author: 'datalayer.cz', content: '<p>Server-Side Google Tag Manager posouvá měření z prohlížeče na server.</p><p>Server-side měření je dnes standard pro datově řízené e-shopy.</p>' });

    const summary = await auditMigration.run(ctx);
    expect(summary).toContain('stránky: 1 přepsaných');
    expect(summary).toContain('texty webu: 3 polí');
    expect(summary).toContain('menu a patička: 1 popisků');
    expect(summary).toContain('telefon: +420 704 664 774');
    expect(summary).toContain('server-side-gtm-uvod (3)');

    const after = decodeNested(docs.get('content/texts')) as typeof DEFAULT_TEXTS;
    expect(after.contact.note).toBe('');
    // kroky po odeslání a výzvu pod FAQ šablona po UX redukci nemá – pole zmizí
    expect(after.contact).not.toHaveProperty('nextSteps');
    expect(after.contact.successTitle).toBe('Vlastní nadpis z administrace');
    expect(after.page).not.toHaveProperty('faqLead');
    expect(textsSchema.safeParse(after).success).toBe(true);
    expect(JSON.stringify(docs.get('content/navigation'))).toContain('Google Ads, Meta, Sklik i Heureka vidí totéž');
    expect(stored('')?.hero).not.toHaveProperty('microcopy');
    expect((docs.get('pages_backup/home@20261009_jazykovy_audit')?.hero as { microcopy: string }).microcopy).toContain('pracovního dne');
    expect(docs.get('settings/site')).toMatchObject({ recipients: ['a@example.com'], phone: '+420 704 664 774' });
    const article = docs.get('articles/server-side-gtm-uvod')!;
    expect(article.title).toBe('Server-side GTM: proč a jak začít');
    expect(article.content).toContain('Server-side Google Tag Manager posouvá');
    expect(article.content).toContain('běžné u e-shopů, které se rozhodují podle dat');

    const snapshot = JSON.stringify([...docs.entries()].filter(([k]) => !k.startsWith('migrations')));
    const second = await auditMigration.run(ctx);
    expect(second).toBe('stránky: 0 přepsaných, ' + DEFAULT_PAGES.length + ' beze změny; texty webu: 0 polí; menu a patička: 0 popisků; telefon: beze změny; články: beze změny');
    expect(JSON.stringify([...docs.entries()].filter(([k]) => !k.startsWith('migrations')))).toBe(snapshot);
  });
});

describe('migrace 20261009_ux_redukce', () => {
  it('zkrátí stránky, zrušené smaže se zálohou, menu nahradí a texty formuláře uklidí', async () => {
    await migration.run(ctx);
    // stav před redukcí: zrušené stránky v databázi, úvod s nadtitulkem, staré menu a texty
    docs.set('pages/jak-pracujeme', { path: 'jak-pracujeme', kind: 'page', hero: { h1: 'Jak pracujeme' }, updatedBy: 'migrace' });
    docs.set('pages/sluzby__google-tag-manager', { path: 'sluzby/google-tag-manager', kind: 'service', hero: { h1: 'GTM' }, updatedBy: 'editor@example.com' });
    const home = stored('')!;
    docs.set('pages/home', { ...home, hero: { ...(home.hero as object), eyebrow: 'Webová analytika a měření', secondaryCta: { label: 'Jak pracujeme', href: '/jak-pracujeme' } } });
    const oldNav = { ...DEFAULT_NAVIGATION, items: [...DEFAULT_NAVIGATION.items, { type: 'link', label: 'Blog', href: '/blog' }], footer: { ...DEFAULT_NAVIGATION.footer, description: 'Webová analytika a měření.' } };
    docs.set('content/navigation', encodeNested(oldNav) as Doc);
    const texts = decodeNested(docs.get('content/texts')) as Record<string, Record<string, unknown>>;
    texts.contact = {
      ...texts.contact,
      eyebrow: 'Kontakt',
      nextSteps: ['Domluvíme termín callu', 'Projdeme web a cíle', 'Připravíme návrh na míru'],
      legal: 'Údaje použijeme jen k odpovědi na zprávu a případné nabídce. <a href="/zpracovani-osobnich-udaju">Jak s nimi zacházíme</a>. Žádný newsletter, žádný spam.',
      defaultPlaceholder: 'Vlastní nápověda z administrace',
    };
    texts.page = { ...texts.page, faqLead: '', continueLabel: 'pokračujte' };
    texts.notFound = { ...texts.notFound, services: 'Přehled služeb' };
    texts.thankYou = { ...texts.thankYou, links: [{ label: 'Jak pracujeme', href: '/jak-pracujeme' }, { label: 'Přehled služeb', href: '/sluzby' }, { label: 'Kontakt', href: '/kontakt' }] };
    docs.set('content/texts', encodeNested(texts) as Doc);

    const summary = await uxMigration.run(ctx);
    expect(summary).toContain('stránky: 1 přepsaných');
    expect(summary).toContain('zrušené stránky: 2 smazaných (/sluzby/google-tag-manager, /jak-pracujeme)');
    expect(summary).toContain('menu a patička: zkrácené');
    expect(summary).toContain('contact.legal');

    expect(stored('jak-pracujeme')).toBeUndefined();
    expect(stored('sluzby/google-tag-manager')).toBeUndefined();
    expect(docs.get('pages_backup/sluzby__google-tag-manager@20261009_ux_redukce')).toMatchObject({ updatedBy: 'editor@example.com' });
    expect(stored('')?.hero).not.toHaveProperty('eyebrow');
    expect((docs.get('pages_backup/home@20261009_ux_redukce')?.hero as { eyebrow: string }).eyebrow).toBe('Webová analytika a měření');
    for (const path of REMOVED_PAGES) expect(await getPageByPath(path), path).toBeNull();

    expect(decodeNested(docs.get('content/navigation'))).toMatchObject({ items: DEFAULT_NAVIGATION.items, footer: { description: '' } });
    expect(JSON.stringify(docs.get('content_backup/navigation@20261009_ux_redukce'))).toContain('/blog');
    expect(navigationSchema.safeParse(decodeNested(docs.get('content/navigation'))).success).toBe(true);

    const after = decodeNested(docs.get('content/texts')) as Record<string, Record<string, unknown>>;
    expect(after.contact.legal).toBe(DEFAULT_TEXTS.contact.legal);
    expect(after.contact.defaultPlaceholder).toBe('Vlastní nápověda z administrace');
    expect(after.contact).not.toHaveProperty('eyebrow');
    expect(after.contact).not.toHaveProperty('nextSteps');
    expect(after.page).not.toHaveProperty('continueLabel');
    expect(after.notFound).not.toHaveProperty('services');
    expect(after.thankYou.links).toEqual([{ label: 'Kontakt', href: '/kontakt' }]);
    expect(textsSchema.safeParse(after).success).toBe(true);

    const snapshot = JSON.stringify([...docs.entries()].filter(([k]) => !k.startsWith('migrations')));
    const second = await uxMigration.run(ctx);
    expect(second).toBe(`stránky: 0 přepsaných, ${DEFAULT_PAGES.length} beze změny; zrušené stránky: žádné; menu a patička: beze změny; texty webu: beze změny`);
    expect(JSON.stringify([...docs.entries()].filter(([k]) => !k.startsWith('migrations')))).toBe(snapshot);
  });
});

describe('pomocná funkce importPage pro další migrace', () => {
  it('založí stránku, existující bez overwrite nechá být', async () => {
    const input = { ...kontakt, path: 'reseni/nove-reseni', kind: 'solution' as const };
    expect(await importPage(ctx, input)).toBe('created');
    expect(await importPage(ctx, { ...input, navTitle: 'Jiný' })).toBe('skipped');
    expect(stored('reseni/nove-reseni')?.navTitle).toBe(kontakt.navTitle);
    expect(await importPage(ctx, { ...input, navTitle: 'Jiný' }, { overwrite: true })).toBe('updated');
    expect(stored('reseni/nove-reseni')?.navTitle).toBe('Jiný');
  });
});
