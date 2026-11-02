import type { PageInput } from '../../schema';

// Stránka odpovídá auditu z 2. listopadu 2026 (seo-analyza/2026-11-02_seo-ux-texty,
// kap. 6, GA01–GA04, a společná struktura G03): služba „Nastavení GA4 a GTM“, hero
// s tlačítkem „Probrat nastavení GA4 a GTM“ a kotvami, sekce „Kdy upravit nastavení
// GA4 a GTM“ (místo dřívější sekce se symptomy) s odkazem na audit měření, pět výstupů „Co zahrnuje
// implementace“, menší sekce „Navazující služby“ (školení, kontrola po změnách webu,
// export do BigQuery), průběh spolupráce, nové FAQ, související služby a kontakt.
// Vypadlo tvrzení, že vložení kódu rozbije čísla, „tři až osm klíčových událostí“,
// diagnóza „(not set) způsobuje platební brána“, karty monitoringu a dashboardu
// s automatickými testy, souběh dvou služeb GA4 a slib čísel shodných s tržbami.
// Dokud klient nedodá podklady, stránka neobsahuje případovou studii, počty
// implementací, délky kroků ani lhůty.

export const page: PageInput = {
  path: 'sluzby/implementace-ga4',
  kind: 'service',
  navTitle: 'Nastavení GA4 a GTM',
  tagline: 'měřicí plán, události a datová vrstva',
  pictogram: 'ga4',
  menuGroup: 'sber',

  seo: {
    title: 'Nastavení GA4 a Google Tag Manageru – datalayer.cz',
    description:
      'Nastavíme GA4 a Google Tag Manager, připravíme měřicí plán a zadání datové vrstvy. Výsledek otestujeme a předáme s dokumentací.',
  },

  hero: {
    h1: 'Nastavení Google Analytics 4 a Google Tag Manageru',
    subtitle:
      'Navrhneme měřicí plán, nastavíme události v GA4 a uspořádáme Google Tag Manager. Připravíme zadání datové vrstvy pro vývojáře, ověříme nákupy a formuláře a předáme dokumentaci. Můžeme navázat na stávající měření i připravit nové.',
    primaryCta: { label: 'Probrat nastavení GA4 a GTM', href: '#kontakt' },
    anchors: [
      { label: 'Rozsah služby', href: '#kdy' },
      { label: 'Výstupy', href: '#vystupy' },
      { label: 'Průběh', href: '#prubeh' },
      { label: 'Cena a dotazy', href: '#faq' },
    ],
  },

  sections: [
    {
      id: 'kdy',
      title: 'Kdy upravit nastavení GA4 a GTM',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          variant: 'symptoms',
          items: [
            {
              title: 'Nový web nebo změna platformy',
              text: 'Připravíme měření před spuštěním a ověříme ho po nasazení.',
              pictogram: 'ga4',
            },
            {
              title: 'Neúplné nebo duplicitní události',
              text: 'Prověříme, které akce web odesílá a zda odpovídají měřicímu plánu.',
              pictogram: 'warn',
            },
            {
              title: 'Nepřehledný Tag Manager',
              text: 'Zkontrolujeme účel tagů, spouštěče, proměnné a oprávnění.',
              pictogram: 'gtm',
            },
            {
              title: 'Chybějící měření formulářů',
              text: 'Nastavíme rozlišení formulářů a záznam jejich úspěšného odeslání.',
              pictogram: 'lead',
            },
          ],
        },
        {
          type: 'paragraphs',
          items: ['Není jasné, co změnit? <a href="/sluzby/audit-mereni">Začněte auditem měření.</a>'],
        },
      ],
    },

    {
      id: 'vystupy',
      title: 'Co zahrnuje implementace',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Měřicí plán',
              text: 'Události, jejich parametry a vazba na otázky, které potřebujete vyhodnocovat.',
            },
            {
              title: 'Zadání datové vrstvy',
              text: 'Specifikace pro vývojáře s příklady dat a pravidly pro odesílání událostí.',
            },
            {
              title: 'Nastavení GA4 a GTM',
              text: 'Události, klíčové akce, souhlasy a propojení podle dohodnutého rozsahu. Změny v GTM mají popis a verzi.',
            },
            {
              title: 'Testy a porovnání dat',
              text: 'Ověření dohodnutých nákupních a formulářových scénářů a kontrola proti zdrojovým záznamům.',
            },
            {
              title: 'Dokumentace a předání',
              text: 'Přehled účtů, událostí a nastavení pro správce webu a marketing.',
            },
          ],
        },
      ],
    },

    // dřívější karty „Monitoring po releasech“ a „Školení, BigQuery nebo dashboard“ (GA03)
    {
      id: 'navazujici-sluzby',
      title: 'Navazující služby',
      tone: 'light',
      blocks: [
        {
          type: 'paragraphs',
          items: ['Po dohodě doplníme školení, kontrolu měření po změnách webu nebo export do BigQuery. Rozsah a cenu těchto prací uvedeme samostatně.'],
        },
        {
          type: 'links',
          items: [{ label: 'BigQuery a reporting', href: '/sluzby/bigquery' }],
        },
      ],
    },

    {
      id: 'prubeh',
      title: 'Jak probíhá spolupráce',
      tone: 'dark',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Upřesnění zadání', text: 'Projdeme web, používané nástroje a otázky, které potřebujete vyřešit.' },
            {
              title: 'Nabídka a součinnost',
              text: 'Dostanete rozsah práce, cenu, výstupy a seznam potřebných přístupů. Domluvíme také zapojení vývojáře nebo agentury.',
            },
            { title: 'Realizace a kontrola', text: 'Provedeme dohodnuté práce a ověříme je na testovacích scénářích.' },
            { title: 'Předání', text: 'Projdeme výsledky a předáme dokumentaci. Další správu nebo monitoring sjednáme samostatně.' },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Na čem závisí cena implementace?',
      a: 'Na stavu datové vrstvy, počtu webů a událostí a rozsahu úprav. Nabídka oddělí naši práci, součinnost vývoje a případné licence nebo provoz dalších nástrojů.',
    },
    {
      q: 'Je nutné zakládat novou službu GA4?',
      a: 'Ne vždy. Nejprve posoudíme stávající nastavení, vlastnictví a použitelnost historie. Pokud je vhodné pokračovat v současné službě, opravíme ji a změny zdokumentujeme.',
    },
    {
      q: 'Je potřeba zapojit vývojáře?',
      a: 'Záleží na platformě a dostupných integracích. Vývojář bývá potřeba pro datovou vrstvu a úpravy webu. Dostane konkrétní zadání; nastavení GA4 a GTM a kontrolu výsledku zajistíme my.',
    },
    {
      q: 'Kdo spravuje účty po předání?',
      a: 'Vaše firma. Přístupy, dokumentaci a správu můžete ponechat internímu týmu nebo je svěřit dalšímu dodavateli. Průběžnou podporu lze domluvit samostatně.',
    },
  ],

  related: {
    items: [
      {
        label: 'Audit měření',
        href: '/sluzby/audit-mereni',
        text: 'Kontrola současného stavu a plán oprav, když není jasné, co v měření změnit.',
      },
      {
        label: 'Měření konverzí',
        href: '/sluzby/mereni-konverzi',
        text: 'Nastavení objednávek a poptávek pro Google Ads, Metu, Sklik a další reklamní systémy.',
      },
      {
        label: 'BigQuery a reporting',
        href: '/sluzby/bigquery',
        text: 'Export dat z GA4 do BigQuery a přehledy s dohodnutými metrikami.',
      },
    ],
  },

  contact: {
    formId: 'lp-ga4',
    title: 'Proberme nastavení analytiky',
    lead: 'Napište, jaký web provozujete a co nyní měříte. Upřesníme potřebné události, zapojení vývojáře a rozsah práce.',
    placeholder: '',
    leadType: 'consultation',
  },

  schema: {
    name: 'Nastavení GA4 a GTM',
    serviceType: 'Nastavení Google Analytics 4 a Google Tag Manageru',
    description:
      'Měřicí plán, zadání datové vrstvy pro vývojáře, nastavení událostí, klíčových akcí a souhlasů v GA4 a Google Tag Manageru, testy nákupních a formulářových scénářů, porovnání se zdrojovými záznamy a dokumentace k předání.',
    audience: 'E-shopy a B2B firmy',
  },
};
