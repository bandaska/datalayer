import { describe, expect, it } from 'vitest';
import { PAGES } from '~/content/registry.server';
import { STATIC_PAGES, menuItem } from '~/content/menu';
import type { Block, LandingPageContent } from '~/content/types';

// Kontrola obsahových stránek: integrita (cesty, odkazy, formuláře, SEO)
// a pravidla českých textů z docs/HARD-RULES.md, která jde ověřit strojově
// (uvozovky, pomlčky, zástupné texty). Trpný rod a styl hlídá autor a revize.

const KNOWN_PATHS = new Set(['/', '/blog', '/zpracovani-osobnich-udaju', '/cookies', ...STATIC_PAGES.map((p) => p.path)]);

/** Všechny texty stránky kromě ukázek kódu a „konzolí“ (tam platí jiná pravidla). */
function texts(page: LandingPageContent): { where: string; text: string }[] {
  const out: { where: string; text: string }[] = [];
  const add = (where: string, text: string | undefined) => {
    if (text) out.push({ where, text });
  };
  add('seo.title', page.seo.title);
  add('seo.description', page.seo.description);
  add('navTitle', page.navTitle);
  add('tagline', page.tagline);
  const h = page.hero;
  [h.eyebrow, h.h1, h.subtitle, h.quickAnswer, h.microcopy, h.primaryCta.label, h.secondaryCta?.label].forEach((t, i) => add(`hero.${i}`, t));
  page.trust?.forEach((t, i) => add(`trust.${i}`, t));
  const block = (where: string, b: Block) => {
    switch (b.type) {
      case 'paragraphs':
        b.items.forEach((t, i) => add(`${where}.p${i}`, t));
        break;
      case 'list':
        add(`${where}.title`, b.title);
        b.items.forEach((t, i) => add(`${where}.li${i}`, t));
        break;
      case 'cards':
        b.items.forEach((c, i) => {
          add(`${where}.card${i}.title`, c.title);
          add(`${where}.card${i}.text`, c.text);
          add(`${where}.card${i}.link`, c.link?.label);
        });
        break;
      case 'steps':
        b.items.forEach((s, i) => [s.title, s.text, s.output, s.duration, s.fromClient].forEach((t, j) => add(`${where}.step${i}.${j}`, t)));
        break;
      case 'table':
        add(`${where}.caption`, b.caption);
        b.head.forEach((t, i) => add(`${where}.th${i}`, t));
        b.rows.forEach((r, i) => r.forEach((t, j) => add(`${where}.r${i}c${j}`, t)));
        break;
      case 'flow':
        add(`${where}.caption`, b.caption);
        b.columns.forEach((c, i) => [c.label, c.note, ...c.items].forEach((t, j) => add(`${where}.col${i}.${j}`, t)));
        break;
      case 'callout':
        add(`${where}.title`, b.title);
        add(`${where}.text`, b.text);
        break;
      case 'code':
        add(`${where}.caption`, b.caption);
        break;
      case 'tabs':
        b.items.forEach((t, i) => [t.label, ...(t.paragraphs ?? []), ...(t.bullets ?? [])].forEach((x, j) => add(`${where}.tab${i}.${j}`, x)));
        break;
    }
  };
  page.sections.forEach((s) => {
    add(`${s.id}.eyebrow`, s.eyebrow);
    add(`${s.id}.title`, s.title);
    add(`${s.id}.lead`, s.lead);
    s.blocks.forEach((b, i) => block(`${s.id}.b${i}`, b));
  });
  page.faq.forEach((f, i) => {
    add(`faq${i}.q`, f.q);
    add(`faq${i}.a`, f.a);
  });
  [page.contact.title, page.contact.lead, page.contact.placeholder].forEach((t, i) => add(`contact.${i}`, t));
  if (page.schema) [page.schema.name, page.schema.serviceType, page.schema.description, page.schema.audience].forEach((t, i) => add(`schema.${i}`, t));
  return out;
}

/** Text bez inline kódu a HTML značek (atributy a <code> mají vlastní pravidla). */
const plain = (t: string) => t.replace(/<code>[\s\S]*?<\/code>/g, '').replace(/<[^>]+>/g, '');

describe('registr obsahových stránek', () => {
  it('každá stránka z menu má obsah a cesty jsou unikátní', () => {
    const paths = PAGES.map((p) => `/${p.path}`);
    expect(new Set(paths).size).toBe(paths.length);
    for (const p of STATIC_PAGES) expect(paths, `chybí obsah pro ${p.path}`).toContain(p.path);
  });

  for (const page of PAGES) {
    describe(page.path, () => {
      it('druh stránky odpovídá cestě a menu', () => {
        if (page.path.startsWith('sluzby/')) {
          expect(page.kind).toBe('service');
          expect(menuItem(page.path), 'služba chybí v app/content/menu.ts').toBeDefined();
        } else if (page.path.startsWith('reseni/')) {
          expect(page.kind).toBe('solution');
          expect(menuItem(page.path)).toBeDefined();
        } else expect(page.kind).toBe('page');
      });

      it('SEO: title, description, H1', () => {
        expect(page.seo.title.length, page.seo.title).toBeGreaterThanOrEqual(25);
        expect(page.seo.title.length, page.seo.title).toBeLessThanOrEqual(70);
        expect(page.seo.title).toContain('datalayer.cz');
        expect(page.seo.description.length, page.seo.description).toBeGreaterThanOrEqual(100);
        expect(page.seo.description.length, page.seo.description).toBeLessThanOrEqual(170);
        expect(page.hero.h1.length).toBeLessThanOrEqual(75);
      });

      it('FAQ, kontakt a související stránky', () => {
        expect(page.faq.length).toBeGreaterThanOrEqual(3);
        expect(page.contact.formId).toMatch(/^[a-z0-9-]+$/);
        for (const r of page.relatedPages ?? []) expect(KNOWN_PATHS, `neznámá související stránka ${r}`).toContain(`/${r}`);
        for (const a of page.relatedArticles ?? []) expect(a.slug).toMatch(/^[a-z0-9-]+$/);
        const ids = page.sections.map((s) => s.id);
        for (const id of ids) expect(id).toMatch(/^[a-z0-9-]+$/);
        // kotvy sekcí a záložek sdílí jedno HTML id – nesmí se opakovat ani srazit
        // s pevnými kotvami šablony
        const tabIds = page.sections.flatMap((s) => s.blocks.flatMap((b) => (b.type === 'tabs' ? b.items.map((t) => t.id) : [])));
        const all = [...ids, ...tabIds, 'kontakt', 'faq', 'do-hloubky', 'navazujici', 'obsah', 'contact-form'];
        expect(new Set(all).size, `duplicitní kotvy: ${all.filter((x, i) => all.indexOf(x) !== i).join(', ')}`).toBe(all.length);
      });

      it('odkazy v textu míří jen na existující stránky', () => {
        for (const { where, text } of texts(page)) {
          for (const m of text.matchAll(/href="([^"]+)"/g)) {
            const href = m[1];
            if (href.startsWith('https://') || href.startsWith('mailto:')) continue;
            if (href.startsWith('#')) {
              // kotva na téže stránce musí existovat
              const anchors = new Set([...page.sections.map((s) => s.id), ...page.sections.flatMap((s) => s.blocks.flatMap((b) => (b.type === 'tabs' ? b.items.map((t) => t.id) : []))), 'kontakt', 'faq']);
              expect(anchors, `${where}: kotva ${href} na stránce neexistuje`).toContain(href.slice(1));
              continue;
            }
            const path = href.split('#')[0];
            expect(KNOWN_PATHS, `${where}: odkaz na neexistující ${href}`).toContain(path);
          }
        }
      });

      it('tlačítka a odkazy karet míří na existující kotvy a stránky', () => {
        const anchors = new Set([
          ...page.sections.map((s) => s.id),
          ...page.sections.flatMap((s) => s.blocks.flatMap((b) => (b.type === 'tabs' ? b.items.map((t) => t.id) : []))),
          'kontakt',
          'faq',
        ]);
        const links = [page.hero.primaryCta, page.hero.secondaryCta, ...page.sections.flatMap((s) => s.blocks.flatMap((b) => (b.type === 'cards' ? b.items.map((c) => c.link) : [])))].filter(
          (l): l is { label: string; href: string } => Boolean(l),
        );
        for (const l of links) {
          if (l.href.startsWith('#')) expect(anchors, `tlačítko „${l.label}“ míří na neexistující kotvu ${l.href}`).toContain(l.href.slice(1));
          else if (!l.href.startsWith('https://')) expect(KNOWN_PATHS, `tlačítko „${l.label}“ míří na ${l.href}`).toContain(l.href.split('#')[0]);
        }
      });

      it('pravidla českých textů: uvozovky „…“, pomlčka –, žádné zástupné texty', () => {
        for (const { where, text } of texts(page)) {
          const t = plain(text);
          expect(t, `${where}: em-dash — (použij –)`).not.toContain('—');
          expect(t, `${where}: rovné uvozovky "`).not.toMatch(/(^|[\s(])"|"([\s.,;:!?)]|$)/);
          expect(t, `${where}: anglické uvozovky ”`).not.toContain('”');
          expect((t.match(/„/g) ?? []).length, `${where}: nespárované uvozovky v „${t}“`).toBe((t.match(/“/g) ?? []).length);
          expect(t, `${where}: spojovník místo pomlčky`).not.toMatch(/\s-\s/);
          expect(t, `${where}: zástupný text`).not.toMatch(/\[DOPLNIT|\bDOPLNIT\b|\bTODO\b|lorem ipsum|XXX/);
          expect(t, `${where}: zakázaná formulace`).not.toMatch(/obcház\w* blokátor|neprůstřeln|funkcionální ekosystém|100 % dat|GDPR compliant|FB CAPI/i);
          expect(t, `${where}: „větší jak“`).not.toMatch(/\b(větší|menší|vyšší|nižší|lepší|horší|více|méně|víc|míň) jak\b/i);
        }
      });
    });
  }
});
