import type { LandingPageContent } from '~/content/types';
import { crumbsFor } from '~/components/landing/crumbs';
import { ORGANIZATION_ID, breadcrumbLd, faqLd } from './seo';
import { absoluteUrl } from './site';

/** JSON-LD obsahové stránky: BreadcrumbList, Service a FAQPage ze stejných dat jako obsah. */
export function landingJsonLd(page: LandingPageContent): object[] {
  const url = absoluteUrl(`/${page.path}`);
  const ld: object[] = [breadcrumbLd(crumbsFor(page))];
  if (page.schema) {
    ld.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: page.schema.name,
      serviceType: page.schema.serviceType,
      description: page.schema.description,
      url,
      provider: { '@id': ORGANIZATION_ID },
      areaServed: { '@type': 'Country', name: 'Česká republika' },
      availableLanguage: 'cs',
      ...(page.schema.audience ? { audience: { '@type': 'BusinessAudience', audienceType: page.schema.audience } } : {}),
    });
  }
  if (page.faq.length) ld.push(faqLd(page.faq));
  return ld;
}

/** Cesta OG obrázku stránky (generuje scripts/og-images.ts). */
export function ogImageFor(path: string): string {
  return `/og/${path.replace(/^\/+|\/+$/g, '').replace(/\//g, '-') || 'default'}.png`;
}
