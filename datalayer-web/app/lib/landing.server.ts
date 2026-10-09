import { getPage } from '~/content/registry.server';
import { existingSlugs } from './articles.server';

/** Data obsahové stránky pro loader: obsah z registru + existující články. */
export async function loadLanding(path: string) {
  const page = getPage(path);
  if (!page) throw new Response('Stránka nenalezena', { status: 404 });
  const existing = await existingSlugs((page.relatedArticles ?? []).map((a) => a.slug));
  return { page, existing };
}
