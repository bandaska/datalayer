import { describe, expect, it } from 'vitest';
import { DEFAULT_NAVIGATION, DEFAULT_PAGES, DEFAULT_TEXTS } from '~/content/defaults';
import { navigationSchema, pageSchema, templateAnchors, textsSchema, type Link, type NavLink, type PageContent } from '~/content/schema';
import { checkPage, checkText, pageTexts } from '~/lib/textRules';

// Kontrola výchozího obsahu webu (app/content/defaults) – z něj migrace
// 20261009_cms_content_import založí obsah v administraci. Hlídá integritu
// (schéma, cesty, odkazy, kotvy, menu) a pravidla českých textů
// z docs/HARD-RULES.md, která jde ověřit strojově (app/lib/textRules.ts –
// tatáž kontrola běží v editoru administrace). Trpný rod a styl hlídá autor.

const KNOWN_PATHS = new Set(['/', '/blog', ...DEFAULT_PAGES.map((p) => `/${p.path}`)]);

function anchorsOf(page: PageContent): Set<string> {
  return new Set([
    ...page.sections.map((s) => s.id),
    ...page.sections.flatMap((s) => s.blocks.flatMap((b) => (b.type === 'tabs' ? b.items.map((t) => t.id) : []))),
    'kontakt',
    'faq',
  ]);
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

      it('pravidla českých textů (docs/HARD-RULES.md)', () => {
        const errors = checkPage(page).filter((i) => i.level === 'error');
        expect(errors.map((e) => `${e.where}: ${e.message}`)).toEqual([]);
      });
    });
  }
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
    const errors = Object.entries(DEFAULT_TEXTS).flatMap(([group, fields]) =>
      Object.entries(fields as Record<string, string>).flatMap(([key, text]) => checkText(text, `${group}.${key}`)),
    );
    expect(errors.filter((i) => i.level === 'error').map((e) => `${e.where}: ${e.message}`)).toEqual([]);
  });

  it('zástupné symboly v hláškách formuláře', () => {
    expect(DEFAULT_TEXTS.contact.successText).toContain('{email}');
    expect(DEFAULT_TEXTS.contact.successPhone).toContain('{phone}');
  });
});
