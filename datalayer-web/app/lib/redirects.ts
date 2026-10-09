// Přesměrování: staré URL ze stagingu → nová architektura webu
// (seo-analyza/03_landing-pages/00_architektura-webu.md, kap. 1.1), stránky zrušené
// UX redukcí (seo-analyza/2026-10-09_ux-redukce, kap. 3.3) a sjednocení tvaru URL
// (malá písmena, bez koncového lomítka).

/** Trvale přesunuté nebo zrušené cesty (porovnání bez ohledu na velikost písmen) → nové, 301. */
export const LEGACY_REDIRECTS: Record<string, string> = {
  '/sluzby/ga4': '/sluzby/implementace-ga4',
  '/sluzby/gtm': '/sluzby/implementace-ga4',
  '/sluzby/serverside': '/sluzby/server-side-tracking',
  '/sluzby/datalayer': '/sluzby/implementace-ga4',
  '/sluzby/audit': '/sluzby/audit-mereni',
  '/privacy': '/zpracovani-osobnich-udaju',
  '/zasady-cookies': '/cookies',
  // UX redukce 9. října 2026: sloučené a zrušené stránky
  '/sluzby/google-tag-manager': '/sluzby/implementace-ga4',
  '/sluzby/datova-vrstva': '/sluzby/implementace-ga4',
  '/sluzby/dashboardy-a-reporting': '/sluzby/bigquery',
  '/sluzby/technicky-audit-webu': '/sluzby/audit-mereni',
  '/sluzby/sprava-webu-a-mereni': '/',
  '/sluzby': '/',
  '/reseni/velke-firmy': '/',
  '/jak-pracujeme': '/o-nas',
};

/**
 * Dočasně skrytý blog (302): vrátí se, až bude mít aspoň tři skutečné články. Články,
 * které tu nejsou, zůstávají dostupné na své adrese, jen na ně web neodkazuje.
 */
export const TEMPORARY_REDIRECTS: Record<string, string> = {
  '/blog': '/',
  '/blog/ga4-bigquery-export': '/sluzby/bigquery',
  '/blog/server-side-gtm-uvod': '/sluzby/server-side-tracking',
};

/**
 * Cesty, kde se velikost písmen nemění: admin (ID dokumentů z Firestore mají
 * velká písmena), API a servisní endpointy.
 */
const CASE_SENSITIVE_PREFIXES = ['/admin', '/api/', '/migrate', '/assets/'];

/**
 * Vrátí cíl přesměrování (cesta + query) a kód, nebo `null`, když je adresa
 * v pořádku. Pořadí: koncové lomítko → zrušená nebo stará cesta (301) → skrytý
 * blog (302) → malá písmena (301).
 */
export function redirectFor(pathname: string, search = ''): { to: string; status: 301 | 302 } | null {
  let path = pathname;

  const keepCase = CASE_SENSITIVE_PREFIXES.some((p) => path === p.replace(/\/$/, '') || path.startsWith(p));

  // Koncové lomítko pryč (kromě kořene).
  if (path.length > 1 && path.endsWith('/')) path = path.replace(/\/+$/, '') || '/';

  const legacy = LEGACY_REDIRECTS[path.toLowerCase()];
  if (legacy) return { to: legacy + search, status: 301 };

  const temporary = TEMPORARY_REDIRECTS[path.toLowerCase()];
  if (temporary) return { to: temporary + search, status: 302 };

  if (!keepCase && path !== path.toLowerCase()) path = path.toLowerCase();

  return path !== pathname ? { to: path + search, status: 301 } : null;
}

/** Jen cíl přesměrování (bez kódu), nebo `null`. */
export function redirectTarget(pathname: string, search = ''): string | null {
  return redirectFor(pathname, search)?.to ?? null;
}
