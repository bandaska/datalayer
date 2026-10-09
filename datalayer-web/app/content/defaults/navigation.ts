import type { Navigation } from '../schema';

// Výchozí navigace po UX redukci (seo-analyza/2026-10-09_ux-redukce, kap. 6.2 a 6.5) –
// po migraci se edituje v administraci (Navigace). Služby jsou jeden seznam šesti
// služeb bez popisků a piktogramů, segmenty přímé odkazy, blog v menu ani v patičce
// není. Menu „sluzby“ používá i sloupec Služby v patičce.

export const DEFAULT_NAVIGATION: Navigation = {
  items: [
    {
      type: 'menu',
      id: 'sluzby',
      label: 'Služby',
      columns: [
        {
          items: [
            { label: 'Audit měření', href: '/sluzby/audit-mereni' },
            { label: 'GA4 a Google Tag Manager', href: '/sluzby/implementace-ga4' },
            { label: 'Server-side tracking', href: '/sluzby/server-side-tracking' },
            { label: 'Cookie lišta a Consent Mode', href: '/sluzby/cookie-lista-consent-mode' },
            { label: 'Měření konverzí', href: '/sluzby/mereni-konverzi' },
            { label: 'BigQuery a dashboardy', href: '/sluzby/bigquery' },
          ],
        },
      ],
    },
    { type: 'link', label: 'E-shopy', href: '/reseni/e-shopy' },
    { type: 'link', label: 'B2B', href: '/reseni/b2b-a-lead-generation' },
    { type: 'link', label: 'O nás', href: '/o-nas' },
  ],
  cta: { label: 'Konzultovat projekt' },
  footer: {
    description: '',
    columns: [
      { title: 'Služby', fromMenu: 'sluzby', links: [] },
      {
        title: 'Pro koho',
        links: [
          { label: 'E-shopy', href: '/reseni/e-shopy' },
          { label: 'B2B a lead generation', href: '/reseni/b2b-a-lead-generation' },
        ],
      },
      {
        title: 'O nás',
        links: [
          { label: 'O nás', href: '/o-nas' },
          { label: 'Kontakt', href: '/kontakt' },
        ],
      },
    ],
    contactTitle: 'Kontakt',
    bottomLinks: [
      { label: 'Zpracování osobních údajů', href: '/zpracovani-osobnich-udaju' },
      { label: 'Cookies', href: '/cookies' },
    ],
    cookieSettingsLabel: 'Nastavení cookies',
  },
  mobileBar: { callLabel: 'Zavolat', writeLabel: 'Napsat' },
};
