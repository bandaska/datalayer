import type { Navigation } from '../schema';

// Výchozí navigace (architektura webu, kap. 2) – po migraci se edituje
// v administraci (Navigace). Menu „sluzby“ používá i přehled služeb na homepage
// a rozcestníku (blok menuGrid) a sloupec Služby v patičce.

export const DEFAULT_NAVIGATION: Navigation = {
  items: [
    {
      type: 'menu',
      id: 'sluzby',
      label: 'Služby',
      columns: [
        {
          title: 'Sběr dat',
          items: [
            { label: 'Implementace GA4', href: '/sluzby/implementace-ga4', tagline: 'čísla, která sedí s tržbami', pictogram: 'ga4' },
            { label: 'Google Tag Manager', href: '/sluzby/google-tag-manager', tagline: 'pořádek v tazích a verzích', pictogram: 'gtm' },
            { label: 'Datová vrstva', href: '/sluzby/datova-vrstva', tagline: 'zadání pro vývojáře, které funguje', pictogram: 'datalayer' },
            { label: 'Server-side tracking', href: '/sluzby/server-side-tracking', tagline: 'měření na vaší doméně', pictogram: 'serverside' },
            {
              label: 'Cookie lišta a Consent Mode',
              href: '/sluzby/cookie-lista-consent-mode',
              tagline: 'souhlas podle zákona a bez zbytečné ztráty dat',
              pictogram: 'consent',
            },
            { label: 'Měření konverzí', href: '/sluzby/mereni-konverzi', tagline: 'Google Ads, Meta, Sklik i Heureka vidí totéž', pictogram: 'conversion' },
          ],
        },
        {
          title: 'Data a reporting',
          items: [
            { label: 'BigQuery', href: '/sluzby/bigquery', tagline: 'surová data bez limitů GA4', pictogram: 'bigquery' },
            {
              label: 'Dashboardy a reporting',
              href: '/sluzby/dashboardy-a-reporting',
              tagline: 'Data Studio i Power BI',
              pictogram: 'dashboard',
            },
          ],
        },
        {
          title: 'Audity a správa',
          items: [
            { label: 'Audit měření', href: '/sluzby/audit-mereni', tagline: 'zjistíme, kde data utíkají', pictogram: 'audit' },
            { label: 'Technický audit webu', href: '/sluzby/technicky-audit-webu', tagline: 'rychlost, tagy a technické SEO', pictogram: 'perf' },
            {
              label: 'Správa webu a měření',
              href: '/sluzby/sprava-webu-a-mereni',
              tagline: 'hlídáme, aby měření nepřestalo fungovat',
              pictogram: 'monitor',
            },
          ],
        },
      ],
      footerLink: { label: 'Všechny služby', href: '/sluzby' },
    },
    {
      type: 'menu',
      id: 'reseni',
      label: 'Řešení',
      columns: [
        {
          items: [
            { label: 'E-shopy', href: '/reseni/e-shopy', tagline: 'tržby, které sedí s administrací', pictogram: 'eshop' },
            { label: 'B2B a lead generation', href: '/reseni/b2b-a-lead-generation', tagline: 'od formuláře po zakázku v CRM', pictogram: 'lead' },
            { label: 'Velké firmy', href: '/reseni/velke-firmy', tagline: 'jednotné měření napříč týmy', pictogram: 'gov' },
          ],
        },
      ],
      footerLink: { label: 'Jak pracujeme', href: '/jak-pracujeme' },
    },
    { type: 'link', label: 'Blog', href: '/blog' },
    { type: 'link', label: 'O nás', href: '/o-nas' },
  ],
  cta: { label: 'Konzultovat projekt' },
  footer: {
    description:
      'Webová analytika a měření pro e-shopy, B2B firmy a velké firmy. Od datové vrstvy po BigQuery, s dokumentací a s daty, která vlastníte vy.',
    columns: [
      { title: 'Služby', fromMenu: 'sluzby', links: [] },
      { title: 'Řešení', fromMenu: 'reseni', links: [{ label: 'Jak pracujeme', href: '/jak-pracujeme' }] },
      {
        title: 'O nás',
        links: [
          { label: 'Blog', href: '/blog' },
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
