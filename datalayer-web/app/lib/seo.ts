import type { MetaDescriptor } from 'react-router';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from './site';

// Jednotné meta tagy pro všechny stránky: title, description, canonical,
// Open Graph, Twitter Card a strukturovaná data (JSON-LD).

export type SeoInput = {
  title: string;
  description: string;
  /** Cesta stránky (např. `/sluzby/bigquery`) – z ní vzniká canonical a og:url. */
  path: string;
  /** Obrázek pro sdílení (cesta nebo absolutní URL), výchozí `/og/default.png`. */
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  /** Jeden nebo více JSON-LD objektů (každý se vloží jako samostatný <script>). */
  jsonLd?: object | object[];
};

export function seoMeta(input: SeoInput): MetaDescriptor[] {
  const url = absoluteUrl(input.path === '/' ? '/' : input.path.replace(/\/+$/, ''));
  const image = absoluteUrl(input.image ?? DEFAULT_OG_IMAGE);
  const tags: MetaDescriptor[] = [
    { title: input.title },
    { name: 'description', content: input.description },
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:type', content: input.type ?? 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: 'cs_CZ' },
    { property: 'og:title', content: input.title },
    { property: 'og:description', content: input.description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: input.title },
    { name: 'twitter:description', content: input.description },
    { name: 'twitter:image', content: image },
  ];
  if (input.noindex) tags.push({ name: 'robots', content: 'noindex, follow' });
  const ld = input.jsonLd ? (Array.isArray(input.jsonLd) ? input.jsonLd : [input.jsonLd]) : [];
  for (const item of ld) tags.push({ 'script:ld+json': item });
  return tags;
}

/** Odkaz na organizaci – sdílený `@id`, na který se odkazují ostatní schémata. */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function organizationLd(
  extra: { email?: string; telephone?: string; sameAs?: string[]; description?: string; legalName?: string; identifier?: string; address?: string } = {},
) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/dl.png`,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    description:
      extra.description ||
      'Webová analytika a měření pro e-shopy, B2B firmy a velké firmy: implementace GA4, Google Tag Manager, server-side tracking, Consent Mode v2, BigQuery a dashboardy.',
    areaServed: { '@type': 'Country', name: 'Česká republika' },
    availableLanguage: 'cs',
    knowsAbout: [
      'Google Analytics 4',
      'Google Tag Manager',
      'Server-side tagging',
      'Google Consent Mode v2',
      'BigQuery',
      'Měření konverzí',
    ],
    ...(extra.email ? { email: extra.email } : {}),
    ...(extra.telephone ? { telephone: extra.telephone } : {}),
    ...(extra.sameAs && extra.sameAs.length ? { sameAs: extra.sameAs } : {}),
    // identifikace provozovatele z Nastavení (až ji klient doplní)
    ...(extra.legalName ? { legalName: extra.legalName } : {}),
    ...(extra.identifier ? { identifier: { '@type': 'PropertyValue', propertyID: 'IČO', value: extra.identifier } } : {}),
    ...(extra.address ? { address: extra.address } : {}),
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'cs-CZ',
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

/** Z HTML odpovědi FAQ udělá čistý text pro JSON-LD (1:1 s viditelným textem). */
export function htmlToText(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: htmlToText(f.a) },
    })),
  };
}
