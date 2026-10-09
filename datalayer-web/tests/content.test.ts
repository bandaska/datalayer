import { describe, expect, it } from 'vitest';
import { DEFAULT_NAVIGATION, DEFAULT_PAGES, DEFAULT_TEXTS } from '~/content/defaults';
import { navigationSchema, pageSchema, templateAnchors, textsSchema, type Link, type NavLink, type PageContent } from '~/content/schema';
import { checkPage, checkText, pageTexts, plainText } from '~/lib/textRules';

// Kontrola výchozího obsahu webu (app/content/defaults) – z něj migrace
// 20261009_cms_content_import a 20261009_lp_stihla_sablona zakládají a přepisují
// obsah v administraci. Hlídá integritu
// (schéma, cesty, odkazy, kotvy, menu) a pravidla českých textů
// z docs/HARD-RULES.md, která jde ověřit strojově (app/lib/textRules.ts –
// tatáž kontrola běží v editoru administrace). Trpný rod a styl hlídá autor.

const KNOWN_PATHS = new Set(['/', '/blog', ...DEFAULT_PAGES.map((p) => `/${p.path}`)]);

/** Kotvy, na které jde odkázat: viditelné sekce, jejich záložky a kotvy šablony (skrytá sekce na webu chybí). */
function anchorsOf(page: PageContent): Set<string> {
  const visible = page.sections.filter((s) => !s.hidden);
  const blocks = [...visible.flatMap((s) => s.blocks), ...(page.techDetails?.blocks ?? [])];
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

      it('FAQ, formulář a související stránky', () => {
        if (page.kind === 'service' || page.kind === 'solution') expect(page.faq.length).toBeGreaterThanOrEqual(3);
        expect(page.contact.formId).toMatch(/^[a-z0-9-]+$/);
        for (const r of page.relatedPages ?? []) expect(KNOWN_PATHS, `neznámá související stránka ${r}`).toContain(`/${r}`);
        for (const a of page.relatedArticles ?? []) expect(a.slug).toMatch(/^[a-z0-9-]+$/);
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
          page.hero.secondaryCta,
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

      if (page.kind === 'service' || page.kind === 'solution') {
        // štíhlá šablona LP (vyhodnocení webu, kap. 3.1): rozhodnutí a poptávka,
        // detaily sbalené v Technických detailech nebo v článcích
        it('štíhlá šablona: sekce, FAQ, tabulky, kód, úvod', () => {
          // pod hero nejvýš devět sekcí – šablona sama přidá FAQ, pruh Pokračujte a kontakt
          expect(page.sections.length, 'sekcí z obsahu').toBeLessThanOrEqual(7);
          expect(page.faq.length, 'otázek ve FAQ').toBeGreaterThanOrEqual(5);
          expect(page.faq.length, 'otázek ve FAQ').toBeLessThanOrEqual(6);
          const blocks = page.sections.flatMap((s) => s.blocks);
          expect(blocks.filter((b) => b.type === 'table').length, 'viditelných tabulek').toBeLessThanOrEqual(1);
          for (const b of blocks) {
            if (b.type === 'table') {
              expect(b.head.length, 'sloupců tabulky').toBeLessThanOrEqual(3);
              expect(b.rows.length, 'řádků tabulky').toBeLessThanOrEqual(6);
            }
            if (b.type === 'cards') expect(b.items.length, 'karet v bloku').toBeLessThanOrEqual(8);
          }
          expect(blocks.some((b) => b.type === 'code'), 'kód patří do Technických detailů').toBe(false);
          expect(page.hero.quickAnswer, 'úvod a rychlá odpověď jsou jeden odstavec').toBeUndefined();
          expect((page.trust ?? []).length, 'bodů důvěry').toBeLessThanOrEqual(3);
          // taby „Co je jinak u e-shopu, B2B a velké firmy“ zmizely ze všech služeb
          expect(blocks.some((b) => b.type === 'tabs' && b.items.some((t) => ['eshop', 'b2b', 'enterprise'].includes(t.id))), 'taby segmentů').toBe(false);
          expect((page.relatedArticles ?? []).length, 'článků v pruhu Pokračujte').toBeLessThanOrEqual(3);
          expect((page.relatedPages ?? []).length, 'stránek v pruhu Pokračujte').toBeLessThanOrEqual(3);
        });

        it('štíhlá šablona: rozsah textu', () => {
          const words = pageTexts(page)
            .filter((t) => !t.where.startsWith('Technické detaily') && !t.where.startsWith('Schema') && !t.where.startsWith('SEO'))
            .reduce((n, t) => n + plainText(t.text).split(/\s+/).filter(Boolean).length, 0);
          // cíl 1 300–1 800 slov včetně FAQ (kap. 3.1), s rezervou na kontaktní blok a nadpisy
          expect(words, 'slov na stránce').toBeLessThanOrEqual(1900);
        });

        it('štíhlá šablona: symptomy a postup', () => {
          const blocks = page.sections.flatMap((s) => s.blocks);
          const symptoms = blocks.find((b) => b.type === 'cards' && b.variant === 'symptoms');
          expect(symptoms, 'blok symptomů').toBeDefined();
          expect(blocks.some((b) => b.type === 'process'), 'jednotný postup').toBe(true);
        });
      }

      it('pravidla českých textů (docs/HARD-RULES.md)', () => {
        const errors = checkPage(page).filter((i) => i.level === 'error');
        expect(errors.map((e) => `${e.where}: ${e.message}`)).toEqual([]);
      });
    });
  }
});

describe('jednotný postup spolupráce', () => {
  it('kroky na stránce Jak pracujeme odpovídají pěti krokům z Textů webu', () => {
    const page = DEFAULT_PAGES.find((p) => p.path === 'jak-pracujeme')!;
    const steps = page.sections.flatMap((s) => s.blocks).find((b) => b.type === 'steps');
    expect(steps?.type === 'steps' ? steps.items.map((i) => i.title) : []).toEqual(DEFAULT_TEXTS.process.steps.map((st) => st.title));
  });

  it('kroky postupu se nevypisují ručně jinde než na stránce Jak pracujeme', () => {
    for (const p of DEFAULT_PAGES.filter((x) => x.path !== 'jak-pracujeme')) {
      const blocks = p.sections.filter((s) => !s.hidden).flatMap((s) => s.blocks);
      expect(blocks.some((b) => b.type === 'steps'), `/${p.path}: místo bloku Kroky použijte blok Postup spolupráce`).toBe(false);
    }
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
          if (b.type === 'tags') for (const t of b.items) if (t.href?.includes('#') && !t.href.startsWith('#')) links.push({ where: `/${p.path} › štítek ${t.label}`, href: t.href });
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

  it('postup spolupráce má pět kroků', () => {
    expect(DEFAULT_TEXTS.process.steps).toHaveLength(5);
  });

  it('zástupné symboly v hláškách formuláře', () => {
    expect(DEFAULT_TEXTS.contact.successText).toContain('{email}');
    expect(DEFAULT_TEXTS.contact.successPhone).toContain('{phone}');
  });
});
