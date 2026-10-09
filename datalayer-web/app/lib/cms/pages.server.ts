import { Timestamp } from '@google-cloud/firestore';
import { DEFAULT_PAGES } from '~/content/defaults';
import { PAGE_KINDS, pageSchema, type PageContent, type PageKind } from '~/content/schema';
import { firestore } from '../firestore.server';
import { stripHtml, truncate } from '../text';
import { decodeNested, pageToDoc } from './codec';
import { isReservedPath, pageIdFromPath, pathFromPageId } from './ids';
import { isCmsInitialized } from './meta.server';
import { sanitizePage } from './sanitize.server';

// Stránky webu v kolekci `pages` (ID dokumentu = cesta, „/“ jako „__“).
// Dokument je buď strukturovaná stránka (schéma app/content/schema.ts), nebo
// starší jednoduchá stránka z dřívější administrace (title, perex, content) –
// ta se při čtení převede na stránku s jedním blokem volného textu a při
// uložení v novém editoru se uloží už strukturovaně.

export type PageSource = 'firestore' | 'legacy' | 'default';

export type LoadedPage = {
  id: string;
  page: PageContent;
  source: PageSource;
  updatedAt?: string;
  updatedBy?: string;
};

export class PageError extends Error {
  constructor(
    message: string,
    public readonly issues?: { path: string; message: string }[],
  ) {
    super(message);
    this.name = 'PageError';
  }
}

const col = () => firestore.collection('pages');

function isoOf(v: unknown): string | undefined {
  return v instanceof Timestamp ? v.toDate().toISOString() : undefined;
}

/** Starší stránka (slug, title, perex, content) → strukturovaná stránka. */
export function convertLegacyPage(id: string, d: Record<string, unknown>): PageContent {
  const title = String(d.title ?? id);
  const perex = String(d.perex ?? '');
  const content = String(d.content ?? '');
  const desc = perex || truncate(stripHtml(content), 155) || title;
  return pageSchema.parse({
    path: pathFromPageId(id),
    kind: 'page',
    navTitle: title.slice(0, 80) || id,
    tagline: '',
    pictogram: 'datalayer',
    seo: { title: `${title} | datalayer.cz`.slice(0, 90), description: desc.slice(0, 220) },
    hero: { variant: 'simple', h1: title.slice(0, 160) || id, subtitle: perex },
    sections: [{ id: 'obsah', title: '', blocks: [{ type: 'html', html: content }] }],
    faq: [],
    contact: { formId: `cms-${id}`.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/-$/, '').slice(0, 40), title: '', placeholder: '' },
  });
}

function fromDoc(id: string, raw: Record<string, unknown> | undefined): LoadedPage | null {
  if (!raw) return null;
  const data = decodeNested(raw) as Record<string, unknown>;
  if (!data.hero) {
    try {
      return { id, page: convertLegacyPage(id, data), source: 'legacy' };
    } catch (err) {
      console.error('stránky: starší stránku nejde převést', { id, err });
      return null;
    }
  }
  // cestu určuje ID dokumentu – uložené pole path jen opakuje
  const parsed = pageSchema.safeParse({ ...data, path: pathFromPageId(id) });
  if (!parsed.success) {
    console.error('stránky: dokument neodpovídá schématu', { id, issues: parsed.error.issues.slice(0, 5) });
    return null;
  }
  return { id, page: parsed.data, source: 'firestore', updatedAt: isoOf(data.updatedAt), updatedBy: typeof data.updatedBy === 'string' ? data.updatedBy : undefined };
}

function defaultPage(path: string): LoadedPage | null {
  const page = DEFAULT_PAGES.find((p) => p.path === path);
  return page ? { id: pageIdFromPath(path), page, source: 'default' } : null;
}

/** Stránka podle cesty (bez úvodního lomítka, homepage = ''). */
export async function getPageByPath(path: string): Promise<LoadedPage | null> {
  const id = pageIdFromPath(path);
  const snap = await col().doc(id).get();
  const stored = snap.exists ? fromDoc(id, snap.data()) : null;
  if (stored && stored.source !== 'legacy') return stored;
  if (await isCmsInitialized()) return stored;
  // Před importem má výchozí stránka přednost i před starší stránkou se
  // stejnou cestou – tak to fungovalo i dřív, kdy ji obsluhovala vlastní routa.
  return defaultPage(path) ?? stored;
}

export async function getPageById(id: string): Promise<LoadedPage | null> {
  return getPageByPath(pathFromPageId(id));
}

const KIND_ORDER: Record<PageKind, number> = Object.fromEntries(PAGE_KINDS.map((k, i) => [k, i])) as Record<PageKind, number>;

/** Všechny stránky (pro administraci, sitemapu a výběr v editoru). */
export async function listPages(): Promise<LoadedPage[]> {
  const snap = await col().get();
  let pages = snap.docs.map((d) => fromDoc(d.id, d.data())).filter((p): p is LoadedPage => Boolean(p));
  if (!(await isCmsInitialized())) {
    const byPath = new Map(pages.map((p) => [p.page.path, p]));
    for (const p of DEFAULT_PAGES) {
      const have = byPath.get(p.path);
      if (!have || have.source === 'legacy') byPath.set(p.path, { id: pageIdFromPath(p.path), page: p, source: 'default' });
    }
    pages = [...byPath.values()];
  }
  return pages.sort((a, b) => KIND_ORDER[a.page.kind] - KIND_ORDER[b.page.kind] || a.page.path.localeCompare(b.page.path, 'cs'));
}

function issuesOf(err: { issues: { path: (string | number)[]; message: string }[] }) {
  return err.issues.map((i) => ({ path: i.path.join('.'), message: i.message }));
}

/** Uloží stránku (celý dokument). Vstup projde schématem a čištěním HTML. */
export async function savePage(input: unknown, by: string): Promise<PageContent> {
  const parsed = pageSchema.safeParse(input);
  if (!parsed.success) throw new PageError('Stránka obsahuje chyby', issuesOf(parsed.error));
  const page = sanitizePage(parsed.data);
  if (page.path !== '' && isReservedPath(page.path)) throw new PageError(`Cesta /${page.path} patří aplikaci`);
  await col().doc(pageIdFromPath(page.path)).set(pageToDoc(page, by));
  return page;
}

export async function pageExists(path: string): Promise<boolean> {
  const snap = await col().doc(pageIdFromPath(path)).get();
  if (snap.exists) return true;
  return !(await isCmsInitialized()) && Boolean(defaultPage(path));
}

/** Nová stránka s minimálním obsahem – zbytek se doplní v editoru. */
export async function createPage(
  input: { path: string; kind: PageKind; navTitle: string },
  by: string,
): Promise<PageContent> {
  if (await pageExists(input.path)) throw new PageError(`Stránka /${input.path} už existuje`);
  return savePage(
    {
      path: input.path,
      kind: input.kind,
      navTitle: input.navTitle,
      tagline: '',
      pictogram: input.kind === 'legal' ? 'gov' : 'datalayer',
      published: false,
      seo: { title: `${input.navTitle} | datalayer.cz`, description: input.navTitle },
      hero: {
        variant: input.kind === 'legal' ? 'simple' : 'pictogram',
        h1: input.navTitle,
        subtitle: '',
        ...(input.kind === 'legal' ? {} : { primaryCta: { label: 'Konzultovat projekt', href: '#kontakt' } }),
      },
      sections: [],
      faq: [],
      contact: {
        enabled: input.kind !== 'legal',
        formId: `lp-${input.path.split('/').pop()}`.slice(0, 40),
        title: '',
        placeholder: '',
      },
    },
    by,
  );
}

export async function deletePage(path: string): Promise<void> {
  if (path === '') throw new PageError('Homepage nejde smazat');
  await col().doc(pageIdFromPath(path)).delete();
}

/** Shrnutí stránek pro odkazy (související stránky, výběr v menu). */
export type PageSummary = { path: string; label: string; tagline: string; pictogram: PageContent['pictogram']; kind: PageKind; published: boolean };

export function summarize(p: PageContent): PageSummary {
  return { path: p.path, label: p.navTitle, tagline: p.tagline, pictogram: p.pictogram, kind: p.kind, published: p.published };
}
