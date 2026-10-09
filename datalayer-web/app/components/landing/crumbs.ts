import type { LandingPageContent } from '~/content/types';
import type { Crumb } from '~/lib/seo';

/** Drobečková navigace obsahové stránky: Úvod › (Služby ›) název. */
export function crumbsFor(page: LandingPageContent): Crumb[] {
  const crumbs: Crumb[] = [{ name: 'Úvod', path: '/' }];
  if (page.kind === 'service') crumbs.push({ name: 'Služby', path: '/sluzby' });
  crumbs.push({ name: page.navTitle, path: `/${page.path}` });
  return crumbs;
}
