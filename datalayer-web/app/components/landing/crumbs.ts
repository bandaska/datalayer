import type { PageContent } from '~/content/schema';
import type { Crumb } from '~/lib/seo';

/** Drobečková navigace stránky: Úvod › (Služby ›) název. Homepage žádnou nemá. */
export function crumbsFor(page: Pick<PageContent, 'kind' | 'navTitle' | 'path'>): Crumb[] {
  if (page.kind === 'home') return [];
  const crumbs: Crumb[] = [{ name: 'Úvod', path: '/' }];
  if (page.kind === 'service' && page.path !== 'sluzby') crumbs.push({ name: 'Služby', path: '/sluzby' });
  crumbs.push({ name: page.navTitle, path: `/${page.path}` });
  return crumbs;
}
