// 301 přesměrování: staré URL ze stagingu → nová architektura webu
// (seo-analyza/03_landing-pages/00_architektura-webu.md, kap. 1.1) a sjednocení
// tvaru URL (malá písmena, bez koncového lomítka).

/** Staré cesty (porovnání bez ohledu na velikost písmen) → nové. */
export const LEGACY_REDIRECTS: Record<string, string> = {
  '/sluzby/ga4': '/sluzby/implementace-ga4',
  '/sluzby/gtm': '/sluzby/google-tag-manager',
  '/sluzby/serverside': '/sluzby/server-side-tracking',
  '/sluzby/datalayer': '/sluzby/datova-vrstva',
  '/sluzby/audit': '/sluzby/audit-mereni',
  '/privacy': '/zpracovani-osobnich-udaju',
  '/zasady-cookies': '/cookies',
};

/**
 * Cesty, kde se velikost písmen nemění: admin (ID dokumentů z Firestore mají
 * velká písmena), API a servisní endpointy.
 */
const CASE_SENSITIVE_PREFIXES = ['/admin', '/api/', '/migrate', '/assets/'];

/**
 * Vrátí cílovou URL (cesta + query), kam přesměrovat, nebo `null`, když je
 * adresa v pořádku. Pořadí: starý odkaz → malá písmena → koncové lomítko.
 */
export function redirectTarget(pathname: string, search = ''): string | null {
  let path = pathname;

  const keepCase = CASE_SENSITIVE_PREFIXES.some((p) => path === p.replace(/\/$/, '') || path.startsWith(p));

  // Koncové lomítko pryč (kromě kořene).
  if (path.length > 1 && path.endsWith('/')) path = path.replace(/\/+$/, '') || '/';

  const legacy = LEGACY_REDIRECTS[path.toLowerCase()];
  if (legacy) return legacy + search;

  if (!keepCase && path !== path.toLowerCase()) path = path.toLowerCase();

  return path !== pathname ? path + search : null;
}
