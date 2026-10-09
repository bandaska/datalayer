import type { PageContent, SiteTexts } from '~/content/schema';
import { crumbsFor } from '~/components/landing/crumbs';
import type { RootData } from './rootData';
import { ORGANIZATION_ID, breadcrumbLd, faqLd, organizationLd, websiteLd } from './seo';
import { CONTACT_EMAIL, absoluteUrl } from './site';

/** JSON-LD stránky ze stejných dat jako obsah: BreadcrumbList, Service, FAQPage (homepage: Organization, WebSite). */
export function pageJsonLd(page: PageContent, root?: Pick<RootData, 'email' | 'phone' | 'linkedinUrl'> & { texts?: SiteTexts; operator?: RootData['operator'] }): object[] {
  const ld: object[] = [];
  if (page.kind === 'home') {
    ld.push(
      organizationLd({
        email: root?.email || CONTACT_EMAIL,
        telephone: root?.phone || undefined,
        sameAs: root?.linkedinUrl ? [root.linkedinUrl] : undefined,
        description: root?.texts?.organization.description,
        legalName: root?.operator?.name || undefined,
        identifier: root?.operator?.id || undefined,
        address: root?.operator?.address || undefined,
      }),
      websiteLd(),
    );
  } else {
    ld.push(breadcrumbLd(crumbsFor(page)));
  }
  if (page.schema) {
    const url = absoluteUrl(`/${page.path}`);
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

/** Obrázek pro sdílení: z administrace, jinak výchozí. */
export function ogImageOf(page: PageContent): string {
  return page.ogImage || '/og/default.png';
}
