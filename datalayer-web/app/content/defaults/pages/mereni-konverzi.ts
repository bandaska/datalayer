import type { PageInput } from '../../schema';

// Stránka odpovídá auditu z 2. listopadu 2026 (seo-analyza/2026-11-02_seo-ux-texty,
// kap. 3 a 9, K01–K05). Zůstal hero s jedním tlačítkem, nově s kotvami, karty situací
// pod nadpisem „Co při nastavení konverzí řešíme“ místo dřívější obecné výzvy, čtyři výstupy
// s menším blokem „Podle konkrétního zadání“ (serverová API, offline konverze, Heureka
// odděleně od Ověřeno zákazníky, další integrace), vysvětlení „Proč reporty nemusí
// ukazovat stejné číslo“, společný průběh spolupráce (G03), FAQ a kontakt z K05
// a související služby. Vypadly sliby shody čísel ve všech systémech a porovnání
// po čtrnácti dnech (nově za domluvené období). Termín ukončení kódů Seznamu v roce
// 2027, tvrzení o modelování konverzí a o dni přiřazení konverzí stránka neuvádí:
// v dosavadním obsahu neměly oficiální zdroj.

export const page: PageInput = {
  path: 'sluzby/mereni-konverzi',
  kind: 'service',
  navTitle: 'Měření konverzí',
  tagline: 'konverze pro reklamní systémy a srovnávače',
  pictogram: 'conversion',
  menuGroup: 'sber',

  seo: {
    title: 'Měření konverzí: Google Ads, Meta a Sklik – datalayer.cz',
    description:
      'Nastavíme konverze pro Google Ads, Metu, Sklik a Heureku. Ověříme události, hodnoty i duplicity a vysvětlíme rozdíly mezi reporty.',
  },

  hero: {
    h1: 'Měření konverzí pro Google Ads, Metu a Sklik',
    subtitle:
      'Nastavíme měření objednávek a poptávek pro reklamní systémy a srovnávače včetně Heureky. Sjednotíme definice konverzí, hodnoty a identifikátory a otestujeme jejich předání. Vysvětlíme, proč se výsledky jednotlivých platforem mohou lišit.',
    primaryCta: { label: 'Probrat měření konverzí', href: '#kontakt' },
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
      title: 'Co při nastavení konverzí řešíme',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          variant: 'symptoms',
          items: [
            {
              title: 'Význam konverze',
              text: 'Která akce je hlavním výsledkem kampaně a které události slouží pouze jako doplňující informace.',
              pictogram: 'dashboard',
            },
            {
              title: 'Hodnota objednávky',
              text: 'Zda předávat tržbu, nebo jinou dohodnutou hodnotu, v jaké měně a jak pracovat s DPH.',
              pictogram: 'eshop',
            },
            {
              title: 'Duplicitní záznamy',
              text: 'Zda souběh integrací nebo opakované načtení stránky nezpůsobuje nesprávné započítání.',
              pictogram: 'warn',
            },
            {
              title: 'Kvalita poptávek',
              text: 'Jak doplnit výsledek z CRM, aby bylo možné vyhodnotit i další fáze obchodu.',
              pictogram: 'lead',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      title: 'Co bude výsledkem',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'Konverzní mapa',
              text: 'Seznam akcí, jejich významu, hodnot, zdrojů a použití v jednotlivých reklamních systémech.',
            },
            {
              title: 'Nastavení a potřebné zadání',
              text: 'Úpravy měřicích nástrojů a specifikace pro vývojáře, pokud je třeba doplnit web nebo serverovou integraci.',
            },
            {
              title: 'Ověření předávání',
              text: 'Testovací protokol pro dohodnuté systémy včetně identifikátorů, hodnot a souhlasů.',
            },
            {
              title: 'Porovnání a předání',
              text: 'Kontrola dostupných výsledků za domluvené období, vysvětlení rozdílů a dokumentace pro správu kampaní.',
            },
          ],
        },
        {
          type: 'list',
          style: 'bullet',
          title: 'Podle konkrétního zadání',
          items: [
            '<strong>Serverová API.</strong> Předání konverzí ze serveru, například přes Conversions API Mety a serverový kontejner Google Tag Manageru, zkráceně GTM.',
            '<strong>Offline konverze.</strong> Nahrání výsledků, které vznikají mimo web, třeba uzavřených zakázek z CRM, do Google Ads přes Data Manager API.',
            '<strong>Heureka.</strong> Měření konverzí pro Heureku a službu Ověřeno zákazníky řešíme odděleně. Nemají stejný účel ani rozsah a nemusí pro ně platit stejná pravidla práce s údaji zákazníků.',
            '<strong>Další integrace.</strong> Seznam Nákupy, TikTok, LinkedIn, Microsoft Ads a další systémy podle toho, kde inzerujete.',
          ],
        },
      ],
    },

    {
      id: 'rozdily',
      title: 'Proč reporty nemusí ukazovat stejné číslo',
      tone: 'dark',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Administrace eviduje objednávky, reklamní platformy si připisují konverze podle vlastních pravidel a nastavení. Rozdíly ovlivňuje také časové období, souhlasy a způsob zpracování dat. Cílem je správné předání událostí a srozumitelné vyhodnocení, nikoli vynucená shoda všech reportů.',
          ],
        },
      ],
    },

    {
      id: 'prubeh',
      title: 'Jak probíhá spolupráce',
      tone: 'light',
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
      q: 'Budou všechny systémy ukazovat stejné počty?',
      a: 'Ne nutně. Každý systém pracuje s jinou atribucí a může konverze zobrazovat za jiné období. Ověříme správnost předávání a vysvětlíme zjištěné rozdíly vůči zdrojovým datům.',
    },
    {
      q: 'Je potřeba upravit současné měření Skliku a Seznamu?',
      a: 'Nejprve ověříme používanou integraci a aktuální možnosti daného účtu. Pokud je potřeba přechod na jiné řešení, připravíme postup a testy před přepnutím.',
    },
    {
      q: 'Jaké přístupy a součinnost jsou potřeba?',
      a: 'Role v reklamních účtech a GTM a podle stavu webu také spolupráce vývojáře. Rozsah oprávnění stanovíme podle práce. Hesla si nepředáváme.',
    },
    {
      q: 'Co ovlivňuje cenu?',
      a: 'Počet reklamních systémů, typy konverzí, stav datové vrstvy a napojení serveru nebo CRM. Případné provozní náklady jsou v nabídce zvlášť.',
    },
  ],

  related: {
    items: [
      {
        label: 'Nastavení GA4 a GTM',
        href: '/sluzby/implementace-ga4',
        text: 'Datová vrstva a události nákupu a poptávky, ze kterých konverze pro reklamní systémy vycházejí.',
      },
      {
        label: 'Měření pro B2B firmy',
        href: '/reseni/b2b-a-lead-generation',
        text: 'Měření poptávek z webu a jejich propojení s výsledkem obchodu v CRM.',
      },
      {
        label: 'Server-side měření',
        href: '/sluzby/server-side-tracking',
        text: 'Serverový kontejner GTM, přes který jde konverze předávat serverovým API reklamních systémů.',
      },
    ],
  },

  contact: {
    formId: 'lp-konverze',
    title: 'Proberme nastavení konverzí',
    lead: 'Napište, ve kterých systémech inzerujete a co má být hlavním výsledkem kampaní. Navrhneme rozsah kontroly nebo implementace.',
    placeholder: '',
    leadType: 'consultation',
  },

  schema: {
    name: 'Měření konverzí',
    serviceType: 'Nastavení a sjednocení měření konverzí v reklamních systémech',
    description:
      'Nastavení měření konverzí pro Google Ads, Metu, Sklik, Heureku a další reklamní systémy: konverzní mapa, sjednocení hodnot a identifikátorů, testovací protokol předání, porovnání se zdrojovými daty za domluvené období a dokumentace. Podle zadání také serverová API, offline konverze a Ověřeno zákazníky.',
    audience: 'E-shopy a B2B firmy',
  },
};
