import type { Pictogram } from './types';

// Struktura menu, patičky a rozcestníku služeb (architektura webu, kap. 1–2).
// Jen lehká metadata – obsah stránek je v `pages/` a načítá ho loader na
// serveru, aby nezvětšoval JavaScript v prohlížeči. Shodu cest s registrem
// stránek hlídá tests/content.test.ts.

export type MenuItem = { path: string; label: string; tagline: string; pictogram: Pictogram };

export const SERVICE_GROUPS: { id: 'sber' | 'data' | 'audity'; label: string; items: MenuItem[] }[] = [
  {
    id: 'sber',
    label: 'Sběr dat',
    items: [
      { path: '/sluzby/implementace-ga4', label: 'Implementace GA4', tagline: 'čísla, která sedí s tržbami', pictogram: 'ga4' },
      { path: '/sluzby/google-tag-manager', label: 'Google Tag Manager', tagline: 'pořádek v tazích a verzích', pictogram: 'gtm' },
      { path: '/sluzby/datova-vrstva', label: 'Datová vrstva', tagline: 'zadání pro vývojáře, které funguje', pictogram: 'datalayer' },
      { path: '/sluzby/server-side-tracking', label: 'Server-side tracking', tagline: 'měření na vaší doméně', pictogram: 'serverside' },
      { path: '/sluzby/cookie-lista-consent-mode', label: 'Cookie lišta a Consent Mode', tagline: 'souhlas legálně a bez ztráty dat', pictogram: 'consent' },
      { path: '/sluzby/mereni-konverzi', label: 'Měření konverzí', tagline: 'Ads, Meta, Sklik i Heureka vidí totéž', pictogram: 'conversion' },
    ],
  },
  {
    id: 'data',
    label: 'Data a reporting',
    items: [
      { path: '/sluzby/bigquery', label: 'BigQuery', tagline: 'surová data bez limitů GA4', pictogram: 'bigquery' },
      { path: '/sluzby/dashboardy-a-reporting', label: 'Dashboardy a reporting', tagline: 'Data Studio (dříve Looker Studio) i Power BI', pictogram: 'dashboard' },
    ],
  },
  {
    id: 'audity',
    label: 'Audity a správa',
    items: [
      { path: '/sluzby/audit-mereni', label: 'Audit měření', tagline: 'zjistíme, kde data utíkají', pictogram: 'audit' },
      { path: '/sluzby/technicky-audit-webu', label: 'Technický audit webu', tagline: 'rychlost, tagy a technické SEO', pictogram: 'perf' },
      { path: '/sluzby/sprava-webu-a-mereni', label: 'Správa webu a měření', tagline: 'hlídáme, aby měření nepřestalo fungovat', pictogram: 'monitor' },
    ],
  },
];

export const SOLUTIONS: MenuItem[] = [
  { path: '/reseni/e-shopy', label: 'E-shopy', tagline: 'tržby, které sedí s administrací', pictogram: 'eshop' },
  { path: '/reseni/b2b-a-lead-generation', label: 'B2B a lead generation', tagline: 'od formuláře po zakázku v CRM', pictogram: 'lead' },
  { path: '/reseni/velke-firmy', label: 'Velké firmy', tagline: 'jednotné měření napříč týmy', pictogram: 'gov' },
];

export const ALL_SERVICES: MenuItem[] = SERVICE_GROUPS.flatMap((g) => g.items);

/** Všechny stránky z menu (pro sitemapu a kontrolu odkazů). */
export const STATIC_PAGES: { path: string; label: string }[] = [
  { path: '/sluzby', label: 'Služby' },
  ...ALL_SERVICES,
  ...SOLUTIONS,
  { path: '/jak-pracujeme', label: 'Jak pracujeme' },
  { path: '/o-nas', label: 'O nás' },
  { path: '/kontakt', label: 'Kontakt' },
];

export function menuItem(path: string): MenuItem | undefined {
  const p = path.startsWith('/') ? path : `/${path}`;
  return [...ALL_SERVICES, ...SOLUTIONS].find((i) => i.path === p);
}
