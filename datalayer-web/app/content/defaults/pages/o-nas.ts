import type { PageInput } from '../../schema';

// O datalayer.cz podle auditu z 2. listopadu 2026, kap. 13 (seo-analyza/2026-11-02_seo-ux-texty):
// textové záhlaví bez obecné ikony (O01), „Jak přistupujeme k zakázkám“ (O03), „Účty, přístupy
// a předání“ (O04) a do dodání skutečných ukázek práce blok „Jaké výstupy předáváme“ (O05).
// Sekce „Kdo bude na projektu pracovat“ (O02) a „Ukázky naší práce“ čekají na podklady klienta
// (jména, role, reference) – zástupné údaje se nepublikují. „Kdo web provozuje“ ukáže
// identifikaci provozovatele z Nastavení, až ji klient vyplní; do té doby se nevykreslí.

export const page: PageInput = {
  path: 'o-nas',
  kind: 'page',
  navTitle: 'O datalayer.cz',
  tagline: 'přístup a spolupráce',
  pictogram: 'gov',

  seo: {
    title: 'O datalayer.cz – přístup a spolupráce',
    description:
      'Jak datalayer.cz přistupuje k analytice, přístupům a předání práce. Seznamte se s principy spolupráce a odpovědností za projekt.',
  },

  hero: {
    // čisté textové záhlaví – bez fotografie lidí nemá smysl ilustrační ikona (O01)
    variant: 'simple',
    h1: 'O datalayer.cz',
    subtitle:
      'Pomáháme firmám nastavit, ověřit a používat data z webové analytiky a marketingových nástrojů. Pracujeme v účtech klienta a výsledky předáváme s dokumentací.',
    primaryCta: { label: 'Domluvit konzultaci', href: '#kontakt' },
  },

  sections: [
    {
      id: 'pristup',
      title: 'Jak přistupujeme k zakázkám',
      tone: 'light',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Začínáme tím, jaké otázky potřebujete z dat zodpovědět. Potom prověříme zdroje, současné nastavení a potřebnou součinnost. Rozsah, cenu a výstupy domluvíme před zahájením práce.',
            'Implementaci ověřujeme na dohodnutých scénářích. Při předání vysvětlíme nastavení, zjištěné rozdíly i omezení dostupných dat.',
          ],
        },
      ],
    },
    {
      id: 'ucty',
      title: 'Účty, přístupy a předání',
      tone: 'white',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Účty spravuje klient.</strong> Pracujeme s přidělenými rolemi a potřebnými oprávněními.',
            '<strong>Rozsah dat má svůj účel.</strong> Určíme, která data řešení potřebuje a kam je předáváme.',
            '<strong>Souhlasy jsou součástí návrhu.</strong> Technické nastavení vychází z dohodnutých pravidel pro jednotlivé nástroje.',
            '<strong>Nastavení je zdokumentované.</strong> Předáme popis řešení a podklady pro další správu.',
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Do GA4 neposíláme e-mailové adresy ani telefonní čísla. Předávání kontaktních údajů do reklamních nástrojů řešíme odděleně podle konkrétního účelu a nastavení.',
          ],
        },
      ],
    },
    {
      id: 'vystupy',
      title: 'Jaké výstupy předáváme',
      tone: 'light',
      lead: 'Ke každé zakázce patří dokumentace, na kterou může navázat váš tým nebo další dodavatel.',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Podle rozsahu práce předáváme měřicí plán nebo zadání datové vrstvy, popis nastavení a změn, výsledky dohodnutých testovacích scénářů a vysvětlení zjištěných rozdílů v datech. Formát výstupu auditu ukazuje modelová ukázka se smyšlenými nálezy. Nejde o výsledky konkrétního klienta.',
          ],
        },
        { type: 'links', items: [{ label: 'Prohlédnout modelovou ukázku auditu', href: '/sluzby/audit-mereni#ukazka-reportu' }] },
      ],
    },
    {
      id: 'provozovatel',
      title: 'Kdo web provozuje',
      tone: 'white',
      // bez údajů v Nastavení (Provozovatel webu) web sekci nevykreslí
      blocks: [{ type: 'operator' }],
    },
  ],

  faq: [],

  contact: {
    formId: 'o-nas',
    title: 'Napište, co potřebujete vyřešit',
    lead: 'Společně upřesníme zadání a domluvíme, zda a v jakém rozsahu vám můžeme pomoci.',
    placeholder: '',
    leadType: 'consultation',
  },
};
