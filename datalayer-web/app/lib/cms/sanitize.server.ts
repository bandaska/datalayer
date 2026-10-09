import type { Block, PageContent, SiteTexts } from '~/content/schema';
import { cleanHtml, cleanInline } from '../sanitize.server';

// Před uložením z administrace (a při importu) vyčistí pole, která web vykresluje
// jako HTML. Ostatní pole React vypisuje jako text, tam čištění není potřeba.

const inl = (v: string | undefined) => (v === undefined ? v : cleanInline(v));
const inlArr = (v: string[] | undefined) => v?.map(cleanInline);

function cleanBlock(b: Block): Block {
  switch (b.type) {
    case 'paragraphs':
      return { ...b, items: b.items.map(cleanInline) };
    case 'list':
      return { ...b, items: b.items.map(cleanInline) };
    case 'cards':
      return { ...b, items: b.items.map((c) => ({ ...c, text: cleanInline(c.text), bullets: inlArr(c.bullets) })) };
    case 'steps':
      return { ...b, items: b.items.map((s) => ({ ...s, text: cleanInline(s.text) })) };
    case 'table':
      return { ...b, head: b.head.map(cleanInline), rows: b.rows.map((r) => r.map(cleanInline)) };
    case 'flow':
      return { ...b, columns: b.columns.map((c) => ({ ...c, items: c.items.map(cleanInline) })) };
    case 'callout':
      return { ...b, text: cleanInline(b.text) };
    case 'tabs':
      return { ...b, items: b.items.map((t) => ({ ...t, paragraphs: inlArr(t.paragraphs), bullets: inlArr(t.bullets) })) };
    case 'html':
      return { ...b, html: cleanHtml(b.html) };
    default:
      return b;
  }
}

export function sanitizePage(page: PageContent): PageContent {
  return {
    ...page,
    hero: { ...page.hero, quickAnswer: inl(page.hero.quickAnswer) },
    sections: page.sections.map((s) => ({ ...s, lead: inl(s.lead), blocks: s.blocks.map(cleanBlock) })),
    faq: page.faq.map((f) => ({ ...f, a: cleanInline(f.a) })),
  };
}

export function sanitizeTexts(t: SiteTexts): SiteTexts {
  return {
    ...t,
    contact: { ...t.contact, legal: cleanInline(t.contact.legal) },
    cookieBar: {
      ...t.cookieBar,
      text: cleanInline(t.cookieBar.text),
      necessary: cleanInline(t.cookieBar.necessary),
      analytics: cleanInline(t.cookieBar.analytics),
      marketing: cleanInline(t.cookieBar.marketing),
    },
  };
}
