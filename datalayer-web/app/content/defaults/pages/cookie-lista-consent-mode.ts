import type { PageInput } from '../../schema';

// Stránka odpovídá auditu z 2. listopadu 2026 (seo-analyza/2026-11-02_seo-ux-texty,
// kap. 3 a 8, C01–C04). Hero má nový nadpis, úvod, tlačítko „Probrat nastavení
// cookies“ a kotvy na sekce. Dřívější karty se symptomy nahradila sekce Co je potřeba ověřit
// se čtyřmi kartami bez hodnocení režimu basic jako chyby. Dlouhou mřížku Co uděláme
// a co dostanete nahradily dvě varianty služby a čtyři výstupy; Seznam Event
// Measurement zůstal jen v rozbalovací technické poznámce, osm scénářů se záznamem
// HAR vypadlo. Přibyl průběh spolupráce (G03) a související služby, FAQ a kontakt
// mají znění ze C04. Odpověď o povinnosti lišty odkazuje na otázky a odpovědi
// ÚOOÚ; paragrafy zákona, slib „nastavíme kteroukoli CMP“ a slogan o legálním
// souhlasu vypadly.

export const page: PageInput = {
  path: 'sluzby/cookie-lista-consent-mode',
  kind: 'service',
  navTitle: 'Cookie lišta a Consent Mode',
  tagline: 'nastavení a ověření souhlasů',
  pictogram: 'consent',
  menuGroup: 'sber',

  seo: {
    title: 'Nastavení cookie lišty a Consent Mode v2 | datalayer.cz',
    description:
      'Propojíme cookie lištu s GA4, GTM a reklamními nástroji. Ověříme chování před volbou, po souhlasu, odmítnutí i změně nastavení a předáme testovací protokol.',
  },

  hero: {
    h1: 'Nastavení cookie lišty a Consent Mode v2',
    subtitle:
      'Propojíme cookie lištu s GA4, Google Tag Managerem a reklamními nástroji. Ověříme jejich chování před volbou návštěvníka, po souhlasu, odmítnutí i změně nastavení. Dostanete testovací protokol a popis předávání dat.',
    primaryCta: { label: 'Probrat nastavení cookies', href: '#kontakt' },
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
      title: 'Co je potřeba ověřit',
      lead: 'To, že web lištu zobrazí, ještě neznamená, že nástroje volbu návštěvníka respektují. Ani platforma pro správu souhlasů neboli CMP s certifikací od Googlu to sama nezaručí. Rozhoduje způsob nasazení.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          variant: 'symptoms',
          items: [
            {
              title: 'Chování před volbou návštěvníka',
              text: 'Které nástroje web načítá a jaké požadavky odesílá.',
              pictogram: 'warn',
            },
            {
              title: 'Přijetí a odmítnutí cookies',
              text: 'Zda měřicí nástroje správně reagují na udělení i neudělení souhlasu.',
              pictogram: 'ga4',
            },
            {
              title: 'Změna a uložení volby',
              text: 'Zda lze nastavení snadno změnit a zda web volbu respektuje i při dalších návštěvách.',
              pictogram: 'gov',
            },
            {
              title: 'Kódy mimo Tag Manager',
              text: 'Zda pravidla respektují i pluginy, vložená videa, chaty a přímé integrace.',
              pictogram: 'gtm',
            },
          ],
        },
      ],
    },

    {
      id: 'varianty',
      title: 'Dvě varianty služby',
      lead: 'Nejprve ověříme možnosti zvolené CMP nebo lišty e-shopové platformy.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'Kontrola stávajícího nastavení',
              text: 'Prověříme lištu, nástroje a datové požadavky v dohodnutých scénářích. Dostanete nálezy a plán oprav.',
            },
            {
              title: 'Nové nastavení nebo změna lišty',
              text: 'Posoudíme vhodné řešení, nastavíme předávání souhlasů a otestujeme navazující měřicí nástroje.',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      title: 'Výstupy služby',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'Inventura nástrojů',
              text: 'Přehled prověřených cookies, tagů a kódů včetně integrací mimo GTM.',
            },
            {
              title: 'Mapa souhlasů',
              text: 'Přiřazení nástrojů k účelům a pravidlům spuštění.',
            },
            {
              title: 'Nastavení a testy',
              text: 'Výsledky scénářů před volbou, po přijetí, odmítnutí a změně souhlasu.',
            },
            {
              title: 'Dokumentace',
              text: 'Popis implementace, zjištěných datových toků a podklady pro právní texty.',
            },
          ],
        },
        {
          type: 'details',
          summary: 'Technická poznámka: souhlas pro měření Seznamu',
          items: [
            'Pokud zakázka zahrnuje Sklik, předáme souhlas i měření Seznam Event Measurement – přes standard IAB TCF, tedy Transparency and Consent Framework, nebo ve formátu Google Consent Mode.',
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
      q: 'Kdy je potřeba cookie lišta se souhlasem?',
      a: 'Rozhoduje, jaké technologie web používá a k jakým účelům. Prověříme technické chování webu a připravíme přehled pro právní posouzení. Samotná přítomnost lišty správné nastavení nezaručuje. Výklad Úřadu pro ochranu osobních údajů shrnují jeho <a href="https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies">otázky a odpovědi k cookies</a>.',
    },
    {
      q: 'Jaký je rozdíl mezi režimy basic a advanced?',
      a: 'V režimu basic se Google tagy bez souhlasu nespouštějí. V režimu advanced mohou předávat požadavky bez cookies i při neuděleném souhlasu. Vhodný režim zvolíme podle požadavků projektu a jeho právního posouzení.',
    },
    {
      q: 'Proč se po změně lišty změnila data?',
      a: 'Část změny může souviset s volbou návštěvníků, část s implementací. Ověříme načasování výchozího stavu, aktualizaci souhlasu a chování jednotlivých nástrojů. Samotný pokles konverzí neprokazuje chybu.',
    },
    {
      q: 'Co ovlivňuje cenu?',
      a: 'Počet domén, jazyků a nástrojů, stav současné lišty a rozsah úprav. Licenci poskytovatele lišty a naši práci uvedeme odděleně.',
    },
  ],

  related: {
    items: [
      {
        label: 'Audit měření',
        href: '/sluzby/audit-mereni',
        text: 'Kromě cookie lišty prověří i GA4, Google Tag Manager a měření reklamních konverzí.',
      },
      {
        label: 'Server-side měření',
        href: '/sluzby/server-side-tracking',
        text: 'Pokud měření běží přes vlastní server, stav souhlasu z lišty potřebuje i server-side GTM.',
      },
    ],
  },

  contact: {
    formId: 'lp-consent',
    title: 'Proberme cookie lištu a měření',
    lead: 'Pošlete adresu webu a informaci, jakou lištu používáte. Upřesníme, zda potřebujete kontrolu současného stavu, opravu nebo nové nastavení.',
    placeholder: '',
    leadType: 'consultation',
  },

  schema: {
    name: 'Nastavení cookie lišty a Google Consent Mode v2',
    serviceType: 'Nastavení a kontrola cookie lišty, Consent Mode v2 a Google Tag Manageru',
    description:
      'Technické nastavení a ověření cookie lišty, Google Consent Mode v2 a navazujících měřicích a reklamních nástrojů: kontrola stávajícího nastavení nebo nové nastavení lišty, inventura nástrojů, mapa souhlasů, testy chování před volbou, po přijetí, odmítnutí a změně souhlasu a dokumentace pro právní posouzení.',
    audience: 'E-shopy a B2B firmy',
  },
};
