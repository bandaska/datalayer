import type { PageInput } from '../../schema';

// Kontakt podle auditu z 2. listopadu 2026, kap. 14 (seo-analyza/2026-11-02_seo-ux-texty):
// krátké záhlaví „Kontakt“ s jedním odstavcem (T01), hned pod ním e-mail, telefon a formulář
// (contact.position = top – nadpis a úvod bloku šablona nezobrazí, opakovaly by H1), pod
// formulářem „Co bude následovat“ (T02) a „Fakturační údaje“ z Nastavení (T03 – sekce se
// nevykreslí, dokud klient údaje nevyplní). Jméno kontaktní osoby (T02) čeká na podklady.

export const page: PageInput = {
  path: 'kontakt',
  kind: 'page',
  navTitle: 'Kontakt',
  tagline: 'e-mail, telefon a formulář',
  pictogram: 'lead',

  seo: {
    title: 'Kontakt a úvodní konzultace – datalayer.cz',
    description:
      'Napište na one@datalayer.cz nebo zavolejte na +420 704 664 774. Na nezávazné úvodní konzultaci upřesníme zadání a další postup.',
  },

  hero: {
    variant: 'simple',
    h1: 'Kontakt',
    subtitle:
      'Napište, co potřebujete vyřešit, nebo zavolejte. Na úvodní konzultaci upřesníme zadání a další postup. Konzultace je nezávazná a zdarma.',
  },

  sections: [
    {
      id: 'co-bude-nasledovat',
      title: 'Co bude následovat',
      tone: 'light',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Ozveme se na uvedený e-mail a upřesníme zadání. Pokud bude mít spolupráce smysl, připravíme návrh rozsahu, ceny a potřebné součinnosti.',
          ],
        },
      ],
    },
    {
      id: 'fakturacni-udaje',
      title: 'Fakturační údaje',
      tone: 'white',
      // údaje z Nastavení (Provozovatel webu); bez nich web sekci nevykreslí
      blocks: [{ type: 'operator' }],
    },
  ],

  faq: [],

  contact: {
    // formulář hned pod úvodem stránky; nadpis a úvod bloku tu šablona nezobrazí
    position: 'top',
    formId: 'kontakt',
    title: 'Kontakt',
    lead: 'Napište, co potřebujete vyřešit, nebo zavolejte.',
    placeholder: '',
    leadType: 'consultation',
  },
};
