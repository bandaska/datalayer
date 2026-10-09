import type { PageContent } from '~/content/schema';
import type { Crumb } from '~/lib/seo';

/**
 * Drobečková navigace stránky pro strukturovaná data: Úvod › název. Homepage žádnou
 * nemá. Na webu se nezobrazuje a úroveň „Služby“ nemá – rozcestník web od UX redukce nemá.
 */
export function crumbsFor(page: Pick<PageContent, 'kind' | 'navTitle' | 'path'>): Crumb[] {
  if (page.kind === 'home') return [];
  return [
    { name: 'Úvod', path: '/' },
    { name: page.navTitle, path: `/${page.path}` },
  ];
}
