import type { Navigation } from '../schema';

// Výchozí navigace po UX redukci (seo-analyza/2026-10-09_ux-redukce, kap. 6.2 a 6.5)
// a auditu z 2. listopadu 2026 (seo-analyza/2026-11-02_seo-ux-texty, G02 a G07) –
// po migraci se edituje v administraci (Navigace). Služby jsou jeden seznam šesti
// služeb bez popisků a piktogramů v doporučeném pořadí, segmenty přímé odkazy, blog
// v menu ani v patičce není. Menu „sluzby“ používá i sloupec Služby v patičce.

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
            { label: 'Nastavení GA4 a GTM', href: '/sluzby/implementace-ga4' },
            { label: 'Cookie lišta a Consent Mode', href: '/sluzby/cookie-lista-consent-mode' },
            { label: 'Měření konverzí', href: '/sluzby/mereni-konverzi' },
            { label: 'Server-side měření', href: '/sluzby/server-side-tracking' },
            { label: 'BigQuery a reporting', href: '/sluzby/bigquery' },
          ],
        },
      ],
    },
    { type: 'link', label: 'Pro e-shopy', href: '/reseni/e-shopy' },
    { type: 'link', label: 'Pro B2B firmy', href: '/reseni/b2b-a-lead-generation' },
    { type: 'link', label: 'O datalayer.cz', href: '/o-nas' },
  ],
  cta: { label: 'Domluvit konzultaci' },
  footer: {
    description: '',
    columns: [
      { title: 'Služby', fromMenu: 'sluzby', links: [] },
      {
        title: 'Řešení',
        links: [
          { label: 'Pro e-shopy', href: '/reseni/e-shopy' },
          { label: 'Pro B2B firmy', href: '/reseni/b2b-a-lead-generation' },
        ],
      },
      {
        title: 'datalayer.cz',
        links: [
          { label: 'O datalayer.cz', href: '/o-nas' },
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
