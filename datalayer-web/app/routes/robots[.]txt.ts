import { absoluteUrl } from '~/lib/site';

// /robots.txt – povolí celý web kromě administrace a API a odkáže na sitemapu.
// Dokud je web zamčený heslem (ENABLE_AUTH=1), posílá server navíc hlavičku
// X-Robots-Tag: noindex (server.js).

export function loader() {
  const body = ['User-agent: *', 'Allow: /', 'Disallow: /admin', 'Disallow: /api/', '', `Sitemap: ${absoluteUrl('/sitemap.xml')}`, ''].join('\n');
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
}
