import type { PageInput } from '../../schema';

// Stránka odpovídá auditu z 2. listopadu 2026 (seo-analyza/2026-11-02_seo-ux-texty).
// Kapitola ke Kontaktu v podkladu chybí. H1 a perex pravidla G01 neporušují, proto
// zůstaly; podle G05 zmizela vlastní nápověda ve zprávě (formulář má pole Adresa webu
// a společnou nápovědu z Textů webu).
// Od UX redukce z 9. října 2026 (seo-analyza/2026-10-09_ux-redukce, kap. 5.2 a 6.3)
// zůstává jen hero (H1 a perex, ve kterém je i „zdarma a nezávazná“) a hned pod ním
// kontaktní blok s formulářem (contact.position = top). Nadpis a úvod
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
      'Napište nám, zavolejte nebo vyplňte formulář. Na úvodní konzultaci upřesníme zadání a navrhneme další postup.',
  },

  hero: {
    variant: 'simple',
    h1: 'Napište nám nebo rovnou zavolejte',
    subtitle: 'Na úvodní konzultaci upřesníme zadání a navrhneme další postup. Konzultace je nezávazná a zdarma.',
  },

  sections: [],

  faq: [],

  contact: {
    // formulář hned pod úvodem stránky; nadpis a úvod bloku tu šablona nezobrazí
    position: 'top',
    formId: 'kontakt',
    title: 'Napište nám, co řešíte',
    lead: 'Napište nám, zavolejte nebo vyplňte formulář.',
    placeholder: '',
    leadType: 'consultation',
  },
};
