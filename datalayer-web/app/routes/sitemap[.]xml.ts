import { articleModified, getAll } from '~/lib/articles.server';
import { listPages } from '~/lib/cms/pages.server';
import { redirectFor } from '~/lib/redirects';
import { BLOG_PUBLIC, absoluteUrl } from '~/lib/site';

// /sitemap.xml – zveřejněné stránky z administrace (bez noindex a bez adres, které
// web přesměrovává), blog a články, jen když je blog veřejný.

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function loader() {
  const urls: { loc: string; lastmod?: string }[] = [];
  try {
    const [pages, articles] = await Promise.all([listPages(), getAll()]);
    for (const p of pages) {
      if (!p.page.published || p.page.noindex || redirectFor(`/${p.page.path}`)) continue;
      urls.push({ loc: `/${p.page.path}`, lastmod: p.updatedAt?.slice(0, 10) });
    }
    const indexed = BLOG_PUBLIC ? articles.filter((a) => !a.noindex) : [];
    // blog: datum nejnovějšího článku; články: datum podstatné aktualizace, jinak vydání
    const newest = indexed.map(articleModified).sort().pop();
    if (BLOG_PUBLIC) urls.push({ loc: '/blog', lastmod: newest?.slice(0, 10) });
    for (const a of indexed) urls.push({ loc: `/blog/${a.slug}`, lastmod: articleModified(a).slice(0, 10) });
  } catch (err) {
    console.error('sitemap: načtení obsahu z Firestore selhalo', err);
  }

  const seen = new Set<string>();
  const body = urls
    .filter((u) => (seen.has(u.loc) ? false : (seen.add(u.loc), true)))
    .map((u) => `  <url><loc>${esc(absoluteUrl(u.loc))}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`)
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
}
