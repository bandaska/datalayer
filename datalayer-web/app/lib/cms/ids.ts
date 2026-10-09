// Mapování cesty stránky na ID dokumentu ve Firestore (kolekce `pages`).
// ID dokumentu nesmí obsahovat „/“, proto se lomítko v cestě ukládá jako „__“.
// Homepage má prázdnou cestu a dokument `home`.

export function pageIdFromPath(path: string): string {
  const p = path.replace(/^\/+|\/+$/g, '');
  return p === '' ? 'home' : p.replace(/\//g, '__');
}

export function pathFromPageId(id: string): string {
  return id === 'home' ? '' : id.replace(/__/g, '/');
}

/** Cesta pro odkaz (s úvodním lomítkem). */
export function pageHref(path: string): string {
  return `/${path}`;
}

/** Cesty, které patří aplikaci a nesmí je obsadit stránka z administrace. */
export const RESERVED_PATHS = ['admin', 'api', 'blog', 'dekujeme', 'migrate', 'health', 'assets', 'og', 'home'];

export function isReservedPath(path: string): boolean {
  const first = path.split('/')[0];
  return RESERVED_PATHS.includes(first) || /\.(xml|txt|png|ico|js|css)$/.test(path);
}
