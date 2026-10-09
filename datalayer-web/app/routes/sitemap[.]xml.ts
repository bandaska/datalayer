import { getAll } from '~/lib/articles.server';
import { listPages } from '~/lib/cms/pages.server';
import { absoluteUrl } from '~/lib/site';

// /sitemap.xml – zveřejněné stránky z administrace (bez noindex), blog, články.

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function loader() {
  const urls: { loc: string; lastmod?: string }[] = [];
  try {
    const [pages, articles] = await Promise.all([listPages(), getAll()]);
    for (const p of pages) {
      if (!p.page.published || p.page.noindex) continue;
      urls.push({ loc: `/${p.page.path}`, lastmod: p.updatedAt?.slice(0, 10) });
    }
    urls.push({ loc: '/blog' });
    for (const a of articles) urls.push({ loc: `/blog/${a.slug}`, lastmod: (a.updatedAt ?? a.date).slice(0, 10) });
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
