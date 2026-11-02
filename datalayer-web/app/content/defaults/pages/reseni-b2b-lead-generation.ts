import type { PageInput } from '../../schema';

// Stránka odpovídá auditu z 2. listopadu 2026 (seo-analyza/2026-11-02_seo-ux-texty,
// kap. 3 a 12, L01–L05; SEO podle kap. 17, S03 a S04). Zůstaly: hero s jedním tlačítkem,
// nově s kotvami, karty situací (nadpis „Co potřebuje marketing vědět o výsledcích
// obchodu“), šest karet výstupů, čtyři otázky a související služby Měření konverzí
// a BigQuery a reporting. Sekci „Jak měření poptávek funguje“ s technickou poznámkou
// nahradil postup „Od formuláře k zakázce“ ve čtyřech krocích; jediná zmínka o „leadu“
// je v jeho úvodu, cesta stránky se nemění. Vypadly: příběh o studentech, konkurenci
// a spamu, „levnější, ale horší“ poptávky, detekce pole, na kterém návštěvník odešel,
// BigQuery v každé zakázce, konkrétní API (Data Manager, Conversions API), datum
// migrace Googlu a jednotný limit devadesáti dní. Zvratný trpný rod z auditu je
// přepsaný („Jak propojit CRM s reklamními systémy?“, „Jak zacházíme s kontaktními údaji?“).

export const page: PageInput = {
  path: 'reseni/b2b-a-lead-generation',
  kind: 'solution',
  navTitle: 'Pro B2B firmy',
  tagline: 'od formuláře po zakázku v CRM',
  pictogram: 'lead',

  seo: {
    title: 'Měření B2B poptávek a offline konverzí – datalayer.cz',
    description:
      'Propojíme poptávky z webu s výsledky v CRM. Nastavíme vyhodnocení kvality poptávek, reporting zakázek a vybrané offline konverze.',
  },

  hero: {
    h1: 'Měření poptávek a zakázek pro B2B firmy',
    subtitle:
      'Propojíme měření webových poptávek s výsledky obchodu v CRM. Uvidíte, ze kterých zdrojů přicházejí kvalifikované poptávky a zakázky. Podle možností systémů nastavíme také předávání vybraných výsledků zpět do reklamy jako offline konverze.',
    primaryCta: { label: 'Probrat měření poptávek', href: '#kontakt' },
    anchors: [
      { label: 'Co řešíme', href: '#kdy' },
      { label: 'Postup', href: '#postup' },
      { label: 'Výstupy', href: '#vystupy' },
      { label: 'Cena a dotazy', href: '#faq' },
    ],
  },

  sections: [
    {
      id: 'kdy',
      title: 'Co potřebuje marketing vědět o výsledcích obchodu',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          variant: 'symptoms',
          items: [
            {
              title: 'Které poptávky jsou relevantní',
              text: 'Samotný počet formulářů nevypovídá o jejich obchodní kvalitě.',
              pictogram: 'lead',
            },
            {
              title: 'Odkud poptávka přišla',
              text: 'Zdroj a dostupné identifikátory potřebujete uchovat při předání do CRM.',
              pictogram: 'datalayer',
            },
            {
              title: 'Jak se poptávka vyvíjí',
              text: 'Kvalifikace, nabídka a uzavřená zakázka mají odlišný význam pro vyhodnocení.',
              pictogram: 'monitor',
            },
            {
              title: 'Co lze vracet do reklamy',
              text: 'Předávání konverzí závisí na dostupných údajích, souhlasech a limitech cílových systémů.',
              pictogram: 'conversion',
            },
          ],
        },
      ],
    },

    {
      id: 'postup',
      title: 'Od formuláře k zakázce',
      lead: 'Poptávku potenciálního zákazníka označují marketingové nástroje také jako lead. Z webu putuje do CRM, tedy systému, ve kterém obchod eviduje poptávky a zákazníky.',
      tone: 'white',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Poptávka z webu', text: 'Zájem potenciálního zákazníka z formuláře na webu nebo z telefonu.' },
            { title: 'Záznam v CRM', text: 'CRM uchová dostupný zdroj poptávky a další dohodnuté údaje.' },
            { title: 'Vyhodnocení obchodem', text: 'Obchod posoudí kvalitu poptávky a podle dohodnutých pravidel mění její fáze.' },
            {
              title: 'Reporting a vybrané konverze pro reklamu',
              text: 'Report propojí náklady s fázemi poptávky. Vybrané výsledky podle možností systémů předáme do reklamy jako offline konverze.',
            },
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Nejdřív s marketingem a obchodem dohodneme, co znamená kvalifikovaná poptávka a kdo aktualizuje její stav. Potom nastavíme předávání dat. Bez používaných pravidel v CRM nebude technická integrace sama stačit.',
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      title: 'Co zahrnuje řešení',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Měření formulářů',
              text: 'Rozlišení formulářů a jejich úspěšného odeslání. Detailnější sledování chyb a jednotlivých kroků domluvíme podle potřeby.',
            },
            {
              title: 'Předání do CRM',
              text: 'Uložení dostupného zdroje, identifikátoru poptávky a dalších dohodnutých údajů.',
            },
            {
              title: 'Pravidla obchodních fází',
              text: 'Definice kvalifikace, nabídky a zakázky včetně odpovědnosti za aktualizaci.',
            },
            {
              title: 'Offline konverze',
              text: 'Předávání vybraných výsledků podporovaným reklamním systémům a kontrola jejich přijetí.',
            },
            {
              title: 'Telefonické poptávky',
              text: 'Podle rozsahu od měření kliknutí na číslo až po napojení služby pro měření hovorů. Kliknutí na číslo samo nepotvrzuje uskutečněný hovor.',
            },
            {
              title: 'Report výsledků',
              text: 'Přehled nákladů a jednotlivých fází poptávky podle dostupných dat. Datový sklad zapojíme, pokud je pro propojení potřebný.',
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Jak propojit CRM s reklamními systémy?',
      a: 'Podle možností konkrétního CRM a cílových platforem. Může jít o podporovaný konektor, API nebo pravidelný export. Před realizací ověříme dostupná pole, identifikátory a možnosti párování.',
    },
    {
      q: 'Co ovlivňuje cenu?',
      a: 'Počet formulářů a zdrojů poptávek, možnosti CRM, počet reklamních systémů a rozsah reportingu. Licence CRM, měření hovorů a případný cloud jsou samostatné položky.',
    },
    {
      q: 'Koho je potřeba zapojit na straně firmy?',
      a: 'Marketing, obchod a správce CRM; podle rozsahu také vývojáře webu. Obchod určí význam jednotlivých fází a bude jejich stav průběžně udržovat.',
    },
    {
      q: 'Jak zacházíme s kontaktními údaji?',
      a: 'Předem určíme nezbytná pole, účely a příjemce dat. Implementaci nastavíme podle odsouhlasených pravidel a dodáme popis datových toků. Hashování není anonymizace; přípustnost předání je potřeba posoudit pro konkrétní řešení.',
    },
  ],

  related: {
    items: [
      {
        label: 'Měření konverzí',
        href: '/sluzby/mereni-konverzi',
        text: 'Určí, které poptávky jsou konverze a jakou mají hodnotu, a nastaví jejich předání reklamním systémům.',
      },
      {
        label: 'BigQuery a reporting',
        href: '/sluzby/bigquery',
        text: 'Spojí náklady na reklamu s poptávkami a fázemi obchodu z CRM do společného reportu.',
      },
    ],
  },

  contact: {
    formId: 'lp-b2b',
    title: 'Proberme propojení webu a CRM',
    lead: 'Napište, jaké CRM používáte, odkud přicházejí poptávky a jak je obchod vyhodnocuje. Navrhneme první krok i potřebnou součinnost.',
    placeholder: '',
    leadType: 'consultation',
  },

  schema: {
    name: 'Měření poptávek a zakázek pro B2B firmy',
    serviceType: 'Měření formulářů, předání poptávek do CRM, offline konverze a reporting od poptávky po zakázku',
    description:
      'Propojení měření webových poptávek s výsledky obchodu v CRM: přehled zdrojů kvalifikovaných poptávek a zakázek a podle možností systémů předávání vybraných výsledků zpět do reklamy jako offline konverze.',
    audience: 'B2B firmy a firmy, které získávají zákazníky přes poptávky',
  },
};
