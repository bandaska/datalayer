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
      return { ...b, items: b.items.map((s) => ({ ...s, text: cleanInline(s.text), substeps: inlArr(s.substeps) })) };
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
    case 'proscons': {
      const col = (c: typeof b.yes) => ({ ...c, items: c.items.map((it) => ({ ...it, text: cleanInline(it.text), note: inl(it.note) })) });
      return { ...b, yes: col(b.yes), no: col(b.no) };
    }
    case 'figures':
      return { ...b, note: inl(b.note) };
    case 'process':
      // Prázdný přepis kroku musí zůstat `{}`: objekt jen s undefined by Firestore z pole
      // vypustil a přepisy dalších kroků by se posunuly o jedno místo.
      return {
        ...b,
        implementation: inl(b.implementation),
        stepOverrides: b.stepOverrides?.map(({ text, fromClient }) => ({
          ...(text ? { text: cleanInline(text) } : {}),
          ...(fromClient ? { fromClient } : {}),
        })),
      };
    case 'person':
      return { ...b, paragraphs: inlArr(b.paragraphs) };
    default:
      return b;
  }
}

export function sanitizePage(page: PageContent): PageContent {
  return {
    ...page,
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
    process: { ...t.process, steps: t.process.steps.map((st) => ({ ...st, text: cleanInline(st.text) })) },
  };
}
