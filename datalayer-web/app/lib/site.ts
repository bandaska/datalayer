// Základní údaje webu – sdílené serverem i klientem.

export const SITE_NAME = 'datalayer.cz';

/**
 * Produkční adresa – základ pro canonical, Open Graph, sitemapu a JSON-LD.
 * Canonical vždy míří na produkci, i když stránka běží na stagingu.
 */
export const SITE_URL = 'https://datalayer.cz';

/** Výchozí kontaktní e-mail (zobrazený na webu, záložní příjemce formuláře). */
export const CONTACT_EMAIL = 'one@datalayer.cz';

/** Výchozí OG obrázek (1200×630) pro stránky bez vlastního. */
export const DEFAULT_OG_IMAGE = '/og/default.png';

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
