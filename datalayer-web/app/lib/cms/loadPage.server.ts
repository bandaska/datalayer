import type { PageContent } from '~/content/schema';
import { getAll } from '../articles.server';
import { getUserId } from '../auth.server';
import { highlightCode } from '../highlight.server';
import { perex } from '../text';
import { getPageByPath } from './pages.server';

// Data jedné stránky webu pro loader: obsah bez skrytých sekcí a nejnovější
// články (blok „Články“). Koncept (published: false) uvidí jen přihlášený správce.

export type ArticleTeaser = { slug: string; title: string; date: string; perex: string };

export type PageData = {
  page: PageContent;
  latest: ArticleTeaser[];
  draft: boolean;
  hasContact: boolean;
  /** Obarvené bloky kódu (HTML z highlight.js) podle `kotva-sekce/pořadí-bloku`. */
  code: Record<string, string>;
};

function articlesWanted(page: PageContent): number {
  let n = 0;
  // načíst aspoň tolik, kolik blok potřebuje k zobrazení (minCount), jinak by se nikdy neukázal
  for (const s of page.sections) for (const b of s.blocks) if (b.type === 'articles') n = Math.max(n, b.count ?? 3, b.minCount ?? 3);
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
  const add = (sectionId: string, blocks: PageContent['sections'][number]['blocks']) =>
    blocks.forEach((b, i) => {
      if (b.type === 'code') out[`${sectionId}/${i}`] = highlightCode(b.code, b.lang).html;
    });
  for (const s of page.sections) add(s.id, s.blocks);
  return out;
}

export async function loadPage(request: Request, path: string): Promise<PageData> {
  const res = await getPageByPath(path);
  if (!res) throw new Response('Stránka nenalezena', { status: 404 });
  // skrytá sekce (čeká např. na nasazení měření) do prohlížeče vůbec nedorazí – ani v datech pro hydrataci
  const page: PageContent = { ...res.page, sections: res.page.sections.filter((s) => !s.hidden) };
  const draft = !page.published;
  if (draft && !(await getUserId(request))) throw new Response('Stránka nenalezena', { status: 404 });

  const wanted = articlesWanted(page);
  const latest = wanted ? await latestArticles(wanted) : [];
  return { page, latest, draft, hasContact: page.contact.enabled !== false, code: highlightedCode(page) };
}
