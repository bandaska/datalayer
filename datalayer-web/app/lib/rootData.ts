import type { Navigation, SiteTexts } from '~/content/schema';

// Data kořenového loaderu (app/root.tsx), která čtou komponenty přes
// useRouteLoaderData('root'): kontakty z nastavení, GTM, Turnstile,
// navigace (menu, patička) a texty webu z administrace.

export type RootData = {
  gtmId: string;
  phone: string;
  linkedinUrl: string;
  email: string;
  /** Identifikace provozovatele z Nastavení (prázdné jméno = zatím nevyplněno). */
  operator: { name: string; id: string; address: string; registry: string };
  turnstileSiteKey: string;
  navigation: Navigation;
  texts: SiteTexts;
};
