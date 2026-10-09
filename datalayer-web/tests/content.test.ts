import { describe, expect, it } from 'vitest';
import { DEFAULT_NAVIGATION, DEFAULT_PAGES, DEFAULT_TEXTS } from '~/content/defaults';
import { navigationSchema, pageSchema, templateAnchors, textsSchema, type Link, type NavLink, type PageContent } from '~/content/schema';
import { checkPage, checkText, pageTexts, plainText } from '~/lib/textRules';

// Kontrola výchozího obsahu webu (app/content/defaults) – z něj migrace
// (20261009_cms_content_import, 20261009_lp_stihla_sablona, 20261009_ux_redukce…)
// zakládají a přepisují obsah v administraci. Hlídá integritu
// (schéma, cesty, odkazy, kotvy, menu) a pravidla českých textů
// z docs/HARD-RULES.md, která jde ověřit strojově (app/lib/textRules.ts –
// tatáž kontrola běží v editoru administrace). Trpný rod a styl hlídá autor.

// blog je od UX redukce skrytý – obsah na něj neodkazuje
const KNOWN_PATHS = new Set(['/', ...DEFAULT_PAGES.map((p) => `/${p.path}`)]);

/** Kotvy, na které jde odkázat: viditelné sekce, jejich záložky a kotvy šablony (skrytá sekce na webu chybí). */
function anchorsOf(page: PageContent): Set<string> {
  const visible = page.sections.filter((s) => !s.hidden);
  const blocks = visible.flatMap((s) => s.blocks);
  return new Set([...visible.map((s) => s.id), ...blocks.flatMap((b) => (b.type === 'tabs' ? b.items.map((t) => t.id) : [])), ...templateAnchors(page)]);
}

/** Interní odkaz musí mířit na známou stránku, kotva na existující místo. */
function expectLink(href: string, where: string, page?: PageContent) {
  if (/^(https:\/\/|mailto:|tel:)/.test(href)) return;
  if (href.startsWith('#')) {
    if (page) expect(anchorsOf(page), `${where}: kotva ${href} na stránce neexistuje`).toContain(href.slice(1));
    return;
  }
  expect(KNOWN_PATHS, `${where}: odkaz na neexistující ${href}`).toContain(href.split('#')[0]);
}

function navLinks(): { where: string; link: Link | NavLink }[] {
  const out: { where: string; link: Link | NavLink }[] = [];
  for (const item of DEFAULT_NAVIGATION.items) {
    if (item.type === 'link') out.push({ where: `menu › ${item.label}`, link: item });
    else {
      item.columns.forEach((c) => c.items.forEach((l) => out.push({ where: `menu › ${item.label} › ${l.label}`, link: l })));
      if (item.footerLink) out.push({ where: `menu › ${item.label} › odkaz dole`, link: item.footerLink });
    }
  }
  DEFAULT_NAVIGATION.footer.columns.forEach((c) => c.links.forEach((l) => out.push({ where: `patička › ${c.title} › ${l.label}`, link: l })));
  DEFAULT_NAVIGATION.footer.bottomLinks.forEach((l) => out.push({ where: `patička › ${l.label}`, link: l }));
  return out;
}

describe('výchozí stránky', () => {
  it('cesty jsou unikátní, homepage je jedna', () => {
    const paths = DEFAULT_PAGES.map((p) => p.path);
    expect(new Set(paths).size).toBe(paths.length);
    expect(DEFAULT_PAGES.filter((p) => p.kind === 'home').map((p) => p.path)).toEqual(['']);
  });

  it('každá služba a řešení je v menu', () => {
    const menuHrefs = new Set(navLinks().map((l) => l.link.href));
    for (const p of DEFAULT_PAGES.filter((x) => x.kind === 'service' || x.kind === 'solution')) {
      expect(menuHrefs, `/${p.path} chybí v menu (app/content/defaults/navigation.ts)`).toContain(`/${p.path}`);
    }
  });

  for (const page of DEFAULT_PAGES) {
    describe(page.path || '(homepage)', () => {
      it('odpovídá schématu', () => {
        expect(pageSchema.safeParse(page).success).toBe(true);
      });

      it('druh stránky odpovídá cestě', () => {
        if (page.path.startsWith('sluzby/')) expect(page.kind).toBe('service');
        else if (page.path.startsWith('reseni/')) expect(page.kind).toBe('solution');
        else if (page.path === '') expect(page.kind).toBe('home');
        else expect(['page', 'legal']).toContain(page.kind);
      });

      it('SEO: title, description, H1, OG obrázek', () => {
        expect(page.seo.title.length, page.seo.title).toBeGreaterThanOrEqual(25);
        expect(page.seo.title.length, page.seo.title).toBeLessThanOrEqual(70);
        expect(page.seo.title).toContain('datalayer.cz');
        expect(page.seo.description.length, page.seo.description).toBeGreaterThanOrEqual(100);
        expect(page.seo.description.length, page.seo.description).toBeLessThanOrEqual(170);
        expect(page.hero.h1.length).toBeLessThanOrEqual(75);
        expect(page.ogImage).toMatch(/^\/og\/[a-z0-9-]+\.png$/);
      });

      it('FAQ a formulář', () => {
        if (page.kind === 'service' || page.kind === 'solution') expect(page.faq.length).toBeGreaterThanOrEqual(3);
        // UX redukce: nejvýš čtyři otázky na stránku
        expect(page.faq.length, 'otázek ve FAQ').toBeLessThanOrEqual(4);
        expect(page.contact.formId).toMatch(/^[a-z0-9-]+$/);
        // formulář nemá pole Web – adresu webu připomene nápověda ve zprávě
        if (page.contact.enabled !== false) expect(page.contact.placeholder, 'nápověda ve zprávě').toMatch(/^Adresa webu a co řešíte/);
      });

      it('kotvy se neopakují a nekříží se šablonou', () => {
        const ids = [
          ...page.sections.map((s) => s.id),
          ...page.sections.flatMap((s) => s.blocks.flatMap((b) => (b.type === 'tabs' ? b.items.map((t) => t.id) : []))),
          ...templateAnchors(page),
        ];
        expect(new Set(ids).size, `duplicitní kotvy: ${ids.filter((x, i) => ids.indexOf(x) !== i).join(', ')}`).toBe(ids.length);
      });

      it('odkazy v textu, tlačítka a karty míří na existující stránky a kotvy', () => {
        for (const { where, text } of pageTexts(page)) {
          for (const m of text.matchAll(/href="([^"]+)"/g)) expectLink(m[1], where, page);
        }
        const links = [
          page.hero.primaryCta,
          ...page.sections.flatMap((s) => s.blocks.flatMap((b) => (b.type === 'cards' ? b.items.map((c) => c.link) : []))),
          ...page.sections.flatMap((s) => s.blocks.flatMap((b) => (b.type === 'tags' ? b.items.map((t) => (t.href ? { label: t.label, href: t.href } : undefined)) : []))),
        ].filter((l): l is Link => Boolean(l));
        for (const l of links) expectLink(l.href, `tlačítko „${l.label}“`, page);
      });

      it('bloky menu odkazují na existující nabídky', () => {
        const menus = new Set(DEFAULT_NAVIGATION.items.flatMap((i) => (i.type === 'menu' ? [i.id] : [])));
        for (const s of page.sections)
          for (const b of s.blocks)
            if (b.type === 'menuGrid') {
              expect(menus).toContain(b.menuId);
              if (b.extraMenuId) expect(menus).toContain(b.extraMenuId);
            }
      });

      if (page.kind !== 'legal') {
        // UX redukce (seo-analyza/2026-10-09_ux-redukce, kap. 5.1): jen bloky, které vedou
        // k formuláři – žádné tabulky, čísla v boxech, kód, postup ani přehledy z menu
        it('UX redukce: povolené bloky', () => {
          const allowed = new Set(['paragraphs', 'list', 'cards', 'proscons', 'flow', 'tabs', 'operator']);
          for (const s of page.sections)
            for (const b of s.blocks) {
              expect(allowed.has(b.type), `sekce ${s.id}: blok ${b.type}`).toBe(true);
              // záložky zůstaly jen u platforem na stránce E-shopy
              if (b.type === 'tabs') expect(`${page.path}#${s.id}`).toBe('reseni/e-shopy#platformy');
              if (b.type === 'cards') expect(b.items.length, 'karet v bloku').toBeLessThanOrEqual(8);
            }
          const flows = page.sections.flatMap((s) => s.blocks).filter((b) => b.type === 'flow');
          expect(flows.length, 'schémat toku dat').toBeLessThanOrEqual(1);
        });
      }

      if (page.kind === 'service' || page.kind === 'solution') {
        it('UX redukce: sekce a symptomy', () => {
          // pod hero nejvýš čtyři sekce – šablona sama přidá FAQ a kontakt
          expect(page.sections.length, 'sekcí z obsahu').toBeLessThanOrEqual(4);
          const first = page.sections[0];
          expect(first?.title, 'první sekce').toBe('Poznáváte se?');
          const symptoms = first?.blocks.find((b) => b.type === 'cards' && b.variant === 'symptoms');
          expect(symptoms, 'blok symptomů').toBeDefined();
          if (symptoms?.type === 'cards') expect(symptoms.items.length, 'karet „Poznáváte se?“').toBeLessThanOrEqual(4);
        });

        it('UX redukce: rozsah textu', () => {
          const words = pageTexts(page)
            .filter((t) => !t.where.startsWith('Schema') && !t.where.startsWith('SEO'))
            .reduce((n, t) => n + plainText(t.text).split(/\s+/).filter(Boolean).length, 0);
          // včetně odpovědí ve FAQ a kontaktního bloku
          expect(words, 'slov na stránce').toBeLessThanOrEqual(1200);
        });
      }

      it('pravidla českých textů (docs/HARD-RULES.md)', () => {
        const errors = checkPage(page).filter((i) => i.level === 'error');
        expect(errors.map((e) => `${e.where}: ${e.message}`)).toEqual([]);
      });
    });
  }
});

describe('web bez kontaktní osoby', () => {
  // rozhodnutí klienta 9. října 2026: web zatím nemá obličej ani kontaktní osobu
  const MENTION = /Novotn|\bVít(?:a|u|ovi|em)?(?=[\s.,;:!?)“"]|$)|Odpovídá přímo/u;

  it('stránky, menu a texty webu nikoho nejmenují', () => {
    for (const p of DEFAULT_PAGES) expect(JSON.stringify(p), `/${p.path}`).not.toMatch(MENTION);
    expect(JSON.stringify(DEFAULT_NAVIGATION)).not.toMatch(MENTION);
    expect(JSON.stringify(DEFAULT_TEXTS)).not.toMatch(MENTION);
  });

  it('kontaktní blok je bez osoby a fotky', () => {
    expect(DEFAULT_TEXTS.contact.personName).toBe('');
    expect(DEFAULT_TEXTS.contact.personPhoto ?? '').toBe('');
    for (const p of DEFAULT_PAGES) {
      const blocks = p.sections.flatMap((s) => s.blocks);
      expect(blocks.some((b) => b.type === 'person'), `/${p.path}: blok Osoba za webem`).toBe(false);
    }
  });
});

describe('jazykový audit a texty bez závazků', () => {
  const visible = (p: (typeof DEFAULT_PAGES)[number]) =>
    pageTexts(pageSchema.parse(p))
      .filter((t) => !t.where.startsWith('SEO') && !t.where.startsWith('Schema'))
      .map((t) => t.text);

  it('web neslibuje lhůty ani délku konzultace', () => {
    const PROMISE = /pracovního dne|pracovních dn|třicetiminut|třicet minut|do 24 hodin|do čtyřiadvaceti hodin|prvních třicet dní/i;
    for (const p of DEFAULT_PAGES) expect(JSON.stringify(p), `/${p.path}`).not.toMatch(PROMISE);
    expect(JSON.stringify(DEFAULT_TEXTS)).not.toMatch(PROMISE);
  });

  it('bez středových teček a hranatých závorek v textu (šipky jen v cestách menu v tabulkách)', () => {
    for (const p of DEFAULT_PAGES) {
      const page = pageSchema.parse(p);
      for (const { where, text } of pageTexts(page)) {
        expect(text, `/${p.path} › ${where}`).not.toMatch(/·|\[ /);
        if (!where.includes('řádek')) expect(plainText(text), `/${p.path} › ${where}`).not.toContain('→');
      }
    }
    expect(JSON.stringify(DEFAULT_TEXTS) + JSON.stringify(DEFAULT_NAVIGATION)).not.toMatch(/·|→/);
  });

  it('„zdarma“ nejvýš dvakrát na stránku', () => {
    for (const p of DEFAULT_PAGES) {
      const n = visible(p).join(' ').match(/zdarma/gi)?.length ?? 0;
      expect(n, `/${p.path}: „zdarma“ ${n}×`).toBeLessThanOrEqual(2);
    }
  });

  it('kontrola textů bere „DOPLNIT“ jako zástupný text, sloveso „doplnit“ ne', () => {
    expect(checkText('Vývojáři mezitím doplní datovou vrstvu a my umíme doplnit chybějící data.', 'test')).toEqual([]);
    expect(checkText('[DOPLNIT] počet projektů', 'test').some((i) => i.level === 'error')).toBe(true);
  });
});

describe('UX redukce webu', () => {
  // seo-analyza/2026-10-09_ux-redukce, kap. 3: třináct stránek, ostatní přesměrované
  const REMOVED = [
    '/sluzby',
    '/sluzby/google-tag-manager',
    '/sluzby/datova-vrstva',
    '/sluzby/dashboardy-a-reporting',
    '/sluzby/technicky-audit-webu',
    '/sluzby/sprava-webu-a-mereni',
    '/reseni/velke-firmy',
    '/jak-pracujeme',
  ];

  it('web má třináct stránek', () => {
    expect(DEFAULT_PAGES.map((p) => `/${p.path}`).sort()).toEqual(
      [
        '/',
        '/sluzby/audit-mereni',
        '/sluzby/implementace-ga4',
        '/sluzby/server-side-tracking',
        '/sluzby/cookie-lista-consent-mode',
        '/sluzby/mereni-konverzi',
        '/sluzby/bigquery',
        '/reseni/e-shopy',
        '/reseni/b2b-a-lead-generation',
        '/o-nas',
        '/kontakt',
        '/cookies',
        '/zpracovani-osobnich-udaju',
      ].sort(),
    );
  });

  it('obsah, menu ani texty neodkazují na zrušené stránky a blog', () => {
    const all = JSON.stringify([DEFAULT_PAGES, DEFAULT_NAVIGATION, DEFAULT_TEXTS]);
    // JSON: odkaz v poli href ("/cesta") i v HTML textu (href=\"/cesta\"), s kotvou i bez ní
    const forms = (path: string) => [`"${path}"`, `"${path}#`, `href=\\"${path}\\"`, `href=\\"${path}#`];
    for (const path of [...REMOVED, '/blog']) for (const f of forms(path)) expect(all.includes(f), `odkaz ${f}`).toBe(false);
  });

  it('menu: šest služeb bez popisků, E-shopy, B2B a O nás', () => {
    const [services, ...rest] = DEFAULT_NAVIGATION.items;
    expect(services.type).toBe('menu');
    if (services.type === 'menu') {
      const items = services.columns.flatMap((c) => c.items);
      expect(items).toHaveLength(6);
      for (const it of items) expect(it.tagline ?? '', it.label).toBe('') ;
      expect(services.footerLink).toBeUndefined();
    }
    expect(rest.map((i) => (i.type === 'link' ? i.href : i.id))).toEqual(['/reseni/e-shopy', '/reseni/b2b-a-lead-generation', '/o-nas']);
    expect(DEFAULT_NAVIGATION.footer.description).toBe('');
  });

  it('kontaktní formulář bez kroků po odeslání, s krátkým právním textem', () => {
    expect(DEFAULT_TEXTS.contact).not.toHaveProperty('nextSteps');
    expect(DEFAULT_TEXTS.contact.legal).toMatch(/^Údaje použijeme jen k odpovědi\./);
  });
});

describe('odkazy s kotvou na jiné stránky', () => {
  it('kotva na cílové stránce existuje (sekce nebo záložka)', () => {
    const anchors = new Map(DEFAULT_PAGES.map((p) => [`/${p.path}`, anchorsOf(p)]));
    const links: { where: string; href: string }[] = [];
    for (const p of DEFAULT_PAGES) {
      for (const { where, text } of pageTexts(p)) for (const m of text.matchAll(/href="([^"#]+)#([^"]+)"/g)) links.push({ where: `/${p.path} › ${where}`, href: `${m[1]}#${m[2]}` });
      for (const s of p.sections)
        for (const b of s.blocks) {
          if (b.type === 'cards') for (const c of b.items) if (c.link?.href.includes('#') && !c.link.href.startsWith('#')) links.push({ where: `/${p.path} › karta ${c.title}`, href: c.link.href });
        }
    }
    for (const l of links) {
      const [path, anchor] = l.href.split('#');
      expect(anchors.get(path)?.has(anchor), `${l.where}: ${l.href} – kotva na cílové stránce chybí`).toBe(true);
    }
  });
});

describe('výchozí menu a patička', () => {
  it('odpovídá schématu', () => {
    expect(navigationSchema.safeParse(DEFAULT_NAVIGATION).success).toBe(true);
  });

  it('odkazy míří na existující stránky', () => {
    for (const { where, link } of navLinks()) expectLink(link.href, where);
  });

  it('sloupce patičky převzaté z menu existují', () => {
    const menus = new Set(DEFAULT_NAVIGATION.items.flatMap((i) => (i.type === 'menu' ? [i.id] : [])));
    for (const c of DEFAULT_NAVIGATION.footer.columns) if (c.fromMenu) expect(menus).toContain(c.fromMenu);
  });

  it('pravidla českých textů', () => {
    const labels = [
      ...navLinks().flatMap(({ where, link }) => [
        { where, text: link.label },
        { where: `${where} › podtitulek`, text: 'tagline' in link ? (link.tagline ?? '') : '' },
      ]),
      ...DEFAULT_NAVIGATION.items.flatMap((i) => (i.type === 'menu' ? i.columns.map((c) => ({ where: `menu › ${i.label} › sloupec`, text: c.title ?? '' })) : [])),
      ...DEFAULT_NAVIGATION.footer.columns.map((c) => ({ where: 'patička › sloupec', text: c.title })),
      { where: 'patička › popis', text: DEFAULT_NAVIGATION.footer.description },
      { where: 'tlačítko v menu', text: DEFAULT_NAVIGATION.cta.label },
    ];
    const errors = labels.flatMap(({ where, text }) => checkText(text, where)).filter((i) => i.level === 'error');
    expect(errors.map((e) => `${e.where}: ${e.message}`)).toEqual([]);
  });
});

describe('výchozí texty webu', () => {
  it('odpovídají schématu', () => {
    expect(textsSchema.safeParse(DEFAULT_TEXTS).success).toBe(true);
  });

  it('pravidla českých textů', () => {
    // všechny textové hodnoty včetně seznamů (kroky postupu, odkazy) – adresy odkazů ne
    const strings = (v: unknown, where: string): { where: string; text: string }[] =>
      typeof v === 'string'
        ? [{ where, text: v }]
        : Array.isArray(v)
          ? v.flatMap((x, i) => strings(x, `${where}.${i}`))
          : v && typeof v === 'object'
            ? Object.entries(v).flatMap(([k, x]) => (k === 'href' ? [] : strings(x, `${where}.${k}`)))
            : [];
    const errors = strings(DEFAULT_TEXTS, 'texty').flatMap(({ where, text }) => checkText(text, where));
    expect(errors.filter((i) => i.level === 'error').map((e) => `${e.where}: ${e.message}`)).toEqual([]);
  });

  it('zástupné symboly v hláškách formuláře', () => {
    expect(DEFAULT_TEXTS.contact.successText).toContain('{email}');
    expect(DEFAULT_TEXTS.contact.successPhone).toContain('{phone}');
  });
});
