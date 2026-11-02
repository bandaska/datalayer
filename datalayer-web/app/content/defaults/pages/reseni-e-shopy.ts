import type { PageInput } from '../../schema';

// Stránka odpovídá auditu z 2. listopadu 2026 (seo-analyza/2026-11-02_seo-ux-texty,
// kap. 3 a 11, E01–E05; SEO podle kap. 17, S03 a S04). Zůstaly: hero s jedním tlačítkem,
// nově s kotvami, záložky platforem se stejnými kotvami (#shoptet, #upgates, #shopify,
// #woocommerce, #prestashop, #vlastni-reseni), čtyři otázky a související služby.
// Karty situací mají nadpis „Co má měření e-shopu zodpovědět“, místo „sedmi vrstev“
// jsou tři úrovně rozsahu s odkazy na služby a blok „Co při předání získáte“. Záložky
// popisují „Co prověříme“ a „Co lze doplnit“ místo „Umí / Chybí“; vypadly termíny
// platforem, univerzální soudy o pluginech a modulech, „po odečtení marže“ a výčet
// všech technologií v úvodu. Zvratný trpný rod z auditu je přepsaný na činný
// („Co web zapisuje do analytiky“, „Jak vyhodnocovat reklamu“).

export const page: PageInput = {
  path: 'reseni/e-shopy',
  kind: 'solution',
  navTitle: 'Pro e-shopy',
  tagline: 'měření objednávek, souhlasů a konverzí',
  pictogram: 'eshop',

  seo: {
    title: 'Webová analytika a měření e-shopu – datalayer.cz',
    description:
      'Měření e-shopu podle platformy a potřeb firmy. GA4, reklamní konverze, souhlasy a návazný reporting s ověřením testovacích objednávek.',
  },

  hero: {
    h1: 'Webová analytika a měření pro e-shopy',
    subtitle:
      'Nastavíme měření nákupů a reklamních konverzí podle vaší platformy a používaných nástrojů. Navážeme na funkční integrace, odstraníme zjištěné duplicity a porovnáme data s objednávkami. Serverové měření nebo reporting marže doplníme tam, kde mají konkrétní využití.',
    primaryCta: { label: 'Probrat měření e-shopu', href: '#kontakt' },
    anchors: [
      { label: 'Co řešíme', href: '#kdy' },
      { label: 'Rozsah', href: '#rozsah' },
      { label: 'Platformy', href: '#platformy' },
      { label: 'Cena a dotazy', href: '#faq' },
    ],
  },

  sections: [
    {
      id: 'kdy',
      title: 'Co má měření e-shopu zodpovědět',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          variant: 'symptoms',
          items: [
            {
              title: 'Co web zapisuje do analytiky',
              text: 'Zda události odpovídají nákupnímu procesu a zda web neposílá objednávky opakovaně.',
              pictogram: 'ga4',
            },
            {
              title: 'Jak vyhodnocovat reklamu',
              text: 'Které konverze a hodnoty reklamní systémy dostávají a podle čeho je porovnáváte.',
              pictogram: 'conversion',
            },
            {
              title: 'Co se děje po změně webu',
              text: 'Zda nová šablona, platební brána nebo plugin neovlivnily měření.',
              pictogram: 'warn',
            },
            {
              title: 'Jak souvisí reklama s hospodařením e-shopu',
              text: 'Jak do reportingu zahrnout náklady, storna, vratky a dohodnutou marži.',
              pictogram: 'dashboard',
            },
          ],
        },
      ],
    },

    {
      id: 'rozsah',
      title: 'Rozsah podle potřeb e-shopu',
      lead: 'Ne každý e-shop potřebuje všechny nástroje. Navrhneme návaznost podle současného stavu a toho, jak budete data používat.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Základní měření',
              text: 'Datová vrstva nebo funkční integrace platformy, GA4, měření nákupů a správné předávání souhlasů.<br>Související služby: <a href="/sluzby/implementace-ga4">Nastavení GA4 a GTM</a>, <a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode</a>',
            },
            {
              title: 'Konverze pro reklamu',
              text: 'Definice konverzí, jejich hodnoty a předání reklamním systémům. Serverová rozhraní doplníme podle potřeby.<br>Související služby: <a href="/sluzby/mereni-konverzi">Měření konverzí</a>, <a href="/sluzby/server-side-tracking">Server-side měření</a>',
            },
            {
              title: 'Reporting hospodaření a marketingu',
              text: 'Propojení nákladů, objednávek, storen a marže do společného přehledu.<br>Související služba: <a href="/sluzby/bigquery">BigQuery a reporting</a>',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Co při předání získáte',
          text: 'Přehled nastavení, výsledky testovacích nákupů, popis zjištěných rozdílů a dokumentaci pro další správu. Konkrétní rozsah uvedeme předem v nabídce.',
        },
      ],
    },

    {
      id: 'platformy',
      title: 'Měření podle e-shopové platformy',
      lead: 'Nejprve ověříme konkrétní verzi platformy, doplňky a současné nastavení. Funkční integrace zachováme a doplníme to, co vyžaduje měřicí plán.',
      tone: 'light',
      blocks: [
        {
          type: 'tabs',
          group: 'eshop_platforma',
          items: [
            {
              id: 'shoptet',
              label: 'Shoptet',
              paragraphs: [
                '<strong>Co prověříme:</strong> vestavěné integrace, předávání souhlasů a případný souběh s GTM. Ověříme události i hodnoty testovací objednávky.',
                '<strong>Co lze doplnit:</strong> další události, parametry a napojení podle možností používaného řešení.',
              ],
            },
            {
              id: 'upgates',
              label: 'Upgates',
              paragraphs: [
                '<strong>Co prověříme:</strong> nastavení analytiky, reklamních nástrojů a dat předávaných během nákupu.',
                '<strong>Co lze doplnit:</strong> chybějící části měřicího plánu a návaznost na reporting.',
              ],
            },
            {
              id: 'shopify',
              label: 'Shopify',
              paragraphs: [
                '<strong>Co prověříme:</strong> použité aplikace, pixely a možnosti měření nákupního procesu v konkrétním tarifu a konfiguraci.',
                '<strong>Co lze doplnit:</strong> vlastní události a návazná napojení v mezích aktuálních možností platformy.',
              ],
            },
            {
              id: 'woocommerce',
              label: 'WooCommerce',
              paragraphs: [
                '<strong>Co prověříme:</strong> pluginy, šablonu, měření objednávek a chování při platbě. Zkontrolujeme souběh více integrací.',
                '<strong>Co lze doplnit:</strong> úpravy událostí nebo serverové napojení podle potřeb e-shopu.',
              ],
            },
            {
              id: 'prestashop',
              label: 'PrestaShop',
              paragraphs: [
                '<strong>Co prověříme:</strong> použité moduly, verzi platformy, souhlasy a měření objednávek.',
                '<strong>Co lze doplnit:</strong> úpravy datové vrstvy a napojení nástrojů podle konkrétní sestavy modulů.',
              ],
            },
            {
              id: 'vlastni-reseni',
              label: 'Vlastní řešení',
              paragraphs: [
                '<strong>Co prověříme:</strong> současnou datovou vrstvu, integrace a dostupné události v nákupním procesu.',
                '<strong>Co lze doplnit:</strong> specifikaci pro vývojáře, doplnění událostí a testovací scénáře pro další změny webu.',
              ],
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Může stačit vestavěná integrace platformy?',
      a: 'Ano, pokud pokrývá potřebné události a funguje správně. Nejdřív ji ověříme; vlastní řešení navrhujeme podle skutečných potřeb.',
    },
    {
      q: 'Proč se počet objednávek liší mezi GA4 a administrací?',
      a: 'Systémy sledují odlišná data a rozdíly mohou souviset se souhlasy, blokováním měření, zpracováním objednávek i chybami implementace. Ověříme konkrétní příčiny a dohodneme způsob porovnávání.',
    },
    {
      q: 'Co určuje cenu měření e-shopu?',
      a: 'Platforma, současné integrace, počet reklamních systémů a rozsah událostí. Serverové měření, datový sklad a průběžný provoz uvedeme jako samostatné části nabídky.',
    },
    {
      q: 'Kdy je potřeba vývojář e-shopu?',
      a: 'Pokud je nutné upravit šablonu, datovou vrstvu nebo serverovou integraci. Součinnost určíme podle konkrétní platformy a zadání; nepředpokládáme ji automaticky u každého projektu.',
    },
  ],

  related: {
    items: [
      {
        label: 'Nastavení GA4 a GTM',
        href: '/sluzby/implementace-ga4',
        text: 'Připraví měřicí plán, události e-commerce v GA4 a zadání datové vrstvy, na kterých stojí ostatní části měření.',
      },
      {
        label: 'Měření konverzí',
        href: '/sluzby/mereni-konverzi',
        text: 'Navazuje na datovou vrstvu e-shopu a předá objednávky reklamním systémům a srovnávačům.',
      },
      {
        label: 'BigQuery a reporting',
        href: '/sluzby/bigquery',
        text: 'Spojí data z GA4 s objednávkami, vratkami a náklady na reklamu do reportu s dohodnutými definicemi tržeb a marže.',
      },
    ],
  },

  contact: {
    formId: 'lp-eshopy',
    title: 'Proberme měření vašeho e-shopu',
    lead: 'Pošlete adresu e-shopu, název platformy a používané reklamní systémy. Navrhneme, které části měření mají nyní největší smysl řešit.',
    placeholder: '',
    leadType: 'consultation',
  },

  schema: {
    name: 'Webová analytika a měření pro e-shopy',
    serviceType: 'Měření e-shopu: GA4, Google Tag Manager, souhlasy, reklamní konverze a reporting',
    description:
      'Měření e-shopu podle platformy a potřeb firmy: měření nákupů a reklamních konverzí, předávání souhlasů, porovnání dat s objednávkami a podle potřeby serverové měření nebo reporting marže.',
    audience: 'E-shopy',
  },
};
