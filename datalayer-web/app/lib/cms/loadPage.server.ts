import type { PageContent } from '~/content/schema';
import { existingSlugs, getAll } from '../articles.server';
import { getUserId } from '../auth.server';
import { highlightCode } from '../highlight.server';
import { perex } from '../text';
import { getPageByPath, summarize, type PageSummary } from './pages.server';

// Data jedné stránky webu pro loader: obsah, existující související články,
// nejnovější články (blok „Články“), shrnutí souvisejících stránek.
// Koncept (published: false) uvidí jen přihlášený správce.

export type ArticleTeaser = { slug: string; title: string; date: string; perex: string };

export type PageData = {
  page: PageContent;
  existing: string[];
  latest: ArticleTeaser[];
  related: PageSummary[];
  draft: boolean;
  hasContact: boolean;
  /** Obarvené bloky kódu (HTML z highlight.js) podle `kotva-sekce/pořadí-bloku`. */
  code: Record<string, string>;
};

function articlesWanted(page: PageContent): number {
  let n = 0;
  for (const s of page.sections) for (const b of s.blocks) if (b.type === 'articles') n = Math.max(n, b.count ?? 3);
  return n;
}

async function latestArticles(n: number): Promise<ArticleTeaser[]> {
  try {
    return (await getAll()).slice(0, n).map((a) => ({
      slug: a.slug,
      title: a.title,
      date: a.date,
      perex: a.description || perex(a.content, 140),
    }));
  } catch (err) {
    console.error('stránka: načtení článků selhalo', err);
    return [];
  }
}

/** Bloky kódu obarví server – prohlížeč dostane hotové HTML bez highlight.js. */
function highlightedCode(page: PageContent): Record<string, string> {
  const out: Record<string, string> = {};
  for (const s of page.sections) {
    s.blocks.forEach((b, i) => {
      if (b.type === 'code') out[`${s.id}/${i}`] = highlightCode(b.code, b.lang).html;
    });
  }
  return out;
}

async function relatedSummaries(paths: string[]): Promise<PageSummary[]> {
  const loaded = await Promise.all(paths.map((p) => getPageByPath(p).catch(() => null)));
  return loaded.filter((l): l is NonNullable<typeof l> => Boolean(l && l.page.published)).map((l) => summarize(l.page));
}

export async function loadPage(request: Request, path: string): Promise<PageData> {
  const res = await getPageByPath(path);
  if (!res) throw new Response('Stránka nenalezena', { status: 404 });
  const { page } = res;
  const draft = !page.published;
  if (draft && !(await getUserId(request))) throw new Response('Stránka nenalezena', { status: 404 });

  const wanted = articlesWanted(page);
  const [existing, latest, related] = await Promise.all([
    existingSlugs((page.relatedArticles ?? []).map((a) => a.slug)),
    wanted ? latestArticles(wanted) : Promise.resolve([]),
    relatedSummaries(page.relatedPages ?? []),
  ]);
  return { page, existing, latest, related, draft, hasContact: page.contact.enabled !== false, code: highlightedCode(page) };
}
