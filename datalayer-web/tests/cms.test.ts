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
        docs.set(key, opts?.merge ? { ...(docs.get(key) ?? {}), ...value } : { ...value });
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
