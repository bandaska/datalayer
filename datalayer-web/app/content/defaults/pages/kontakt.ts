import type { PageInput } from '../../schema';

// Stránka Kontakt prošla UX redukcí z 9. října 2026 (seo-analyza/2026-10-09_ux-redukce,
// kap. 5.2 a 6.3): zůstal jen hero (H1 a perex, ve kterém je i „zdarma a nezávazná“)
// a hned pod ním kontaktní blok s formulářem (contact.position = top). Nadpis a úvod
// kontaktního bloku šablona na této stránce nezobrazí (opakují H1 a perex), title je ale
// povinný. „Jak se připravit na konzultaci“ a FAQ vypadly. Telefon web bere z Nastavení,
// proto H1 zve „nebo rovnou zavolejte“. Web zatím nemá kontaktní osobu (rozhodnutí
// klienta), stránka proto neuvádí, kdo odpovídá; neslibuje lhůty ani délku konzultace.

export const page: PageInput = {
  path: 'kontakt',
  kind: 'page',
  navTitle: 'Kontakt',
  tagline: 'e-mail, telefon a formulář',
  pictogram: 'lead',

  seo: {
    title: 'Kontakt – konzultace měření zdarma | datalayer.cz',
    description:
      'Napište nám, zavolejte nebo vyplňte formulář. Na úvodní konzultaci projdeme vaše měření a řekneme, co opravit jako první.',
  },

  hero: {
    variant: 'simple',
    h1: 'Napište nám nebo rovnou zavolejte',
    subtitle: 'Na úvodní konzultaci projdeme vaše měření a řekneme, co opravit jako první. Konzultace je zdarma a nezávazná.',
  },

  sections: [],

  faq: [],

  contact: {
    // formulář hned pod úvodem stránky; nadpis a úvod bloku tu šablona nezobrazí
    position: 'top',
    formId: 'kontakt',
    title: 'Napište nám, co řešíte',
    lead: 'Napište nám, zavolejte nebo vyplňte formulář.',
    placeholder: 'Adresa webu a co řešíte, např. „Po nasazení cookie lišty spadly konverze v Google Ads“',
    leadType: 'consultation',
  },
};
