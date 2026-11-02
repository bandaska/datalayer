import type { PageInput } from '../../schema';

// Stránka odpovídá auditu z 2. listopadu 2026 (seo-analyza/2026-11-02_seo-ux-texty,
// kap. 3 a 10, BQ01–BQ06). Služba se jmenuje BigQuery a reporting. Zůstal hero
// s jedním tlačítkem, nově s kotvami, karty situací pod nadpisem „Kdy propojit data do
// společného reportingu“ místo dřívější obecné výzvy, šest výstupů s blokem „Provoz a správa“,
// schéma ve třech uzlech s technickou poznámkou o vrstvách raw, staging a marts
// a modelovým přehledem pro vedení bez čísel, sekce „Kdy stačí jednodušší řešení“ na místě
// dřívějšího rozhodování ano/ne, vlastní průběh spolupráce z BQ05, FAQ a kontakt z BQ06
// a související služby. Vypadly rozhodovací boxy ano/ne, strom KPI, modelový výpočet
// ceny provozu, jména tabulek a nástrojů v hlavním textu (jsou v rozbalovací poznámce) a sliby
// „úplná data“, „přesné počty uživatelů“, „každé číslo až ke zdrojové události“
// i tvrzení, že veškerá historie GA4 končí po čtrnácti měsících.

export const page: PageInput = {
  path: 'sluzby/bigquery',
  kind: 'service',
  navTitle: 'BigQuery a reporting',
  tagline: 'společný datový model a reporty',
  pictogram: 'bigquery',
  menuGroup: 'data',

  seo: {
    title: 'BigQuery a reporting pro marketing a vedení firmy | datalayer.cz',
    description:
      'Propojíme data z GA4, reklamních systémů, e-shopu a CRM. V BigQuery připravíme společný datový model a reporty v Data Studiu nebo Power BI.',
  },

  hero: {
    h1: 'BigQuery a reporting pro marketing a vedení firmy',
    subtitle:
      'Propojíme data z GA4, reklamních systémů, e-shopu a CRM. V BigQuery připravíme společný datový model a reporty v Data Studiu nebo Power BI. Dohodneme definice metrik, způsob aktualizace a kontrolu nákladů na provoz.',
    primaryCta: { label: 'Probrat firemní reporting', href: '#kontakt' },
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
      title: 'Kdy propojit data do společného reportingu',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          variant: 'symptoms',
          items: [
            {
              title: 'Více zdrojů a ruční příprava',
              text: 'Report vzniká skládáním exportů z reklamy, e-shopu a firemních systémů.',
              pictogram: 'conversion',
            },
            {
              title: 'Náklady, marže a vratky',
              text: 'Pro vyhodnocení potřebujete údaje, které samotná webová analytika neobsahuje.',
              pictogram: 'eshop',
            },
            {
              title: 'Poptávky a zakázky',
              text: 'Chcete spojit výdaje na marketing s výsledky obchodu v CRM.',
              pictogram: 'lead',
            },
            {
              title: 'Vlastní historie a výpočty',
              text: 'Potřebujete dlouhodobě uchovávat exportovaná data a používat vlastní definice metrik.',
              pictogram: 'monitor',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      title: 'Co dostanete',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            { title: 'Zadání reportingu', text: 'Otázky pro vedení a marketing, seznam metrik a zdrojů dat.' },
            { title: 'Datové integrace', text: 'Napojení dohodnutých zdrojů a popis intervalů jejich aktualizace.' },
            { title: 'Datový model', text: 'Pravidla pro propojení záznamů, měny, DPH a zpracování storen nebo vratek.' },
            { title: 'Slovník metrik', text: 'Definice výpočtů, zdroj a odpovědnost za každou hlavní metriku.' },
            { title: 'Reporty', text: 'Přehledy podle potřeb uživatelů s filtrováním a informací o poslední aktualizaci.' },
            { title: 'Kontrola a předání', text: 'Porovnání vybraných výsledků se zdrojovými systémy, dokumentace a zaškolení.' },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Provoz a správa',
          text: 'Nastavíme přístupy a kontrolu nákladů podle dohodnutého provozního modelu. V nabídce oddělíme implementaci, cloud, konektory, licence a případnou průběžnou správu.',
        },
      ],
    },

    {
      id: 'architektura',
      title: 'Jak se data dostanou do reportu',
      lead: 'U reportovaných metrik zdokumentujeme zdroje a výpočty. Kvalita výsledku závisí také na dostupnosti a kvalitě vstupních dat.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Schéma: BigQuery sjednotí data z GA4, reklamních systémů, Search Console, e-shopu, ERP a CRM. Z připravených tabulek pak čerpají reporty a exporty do dalších systémů.',
          columns: [
            { label: 'Zdroje dat', items: ['web: Google Tag Manager a GA4', 'Google Ads, Meta a Sklik', 'Search Console', 'e-shop, ERP a CRM'] },
            {
              label: 'Sjednocení v BigQuery',
              items: ['sjednocené typy, měny, DPH a časová pásma', 'odstranění duplicit', 'propojení záznamů z různých zdrojů', 'tabulky pro konkrétní otázky'],
            },
            {
              label: 'Reporty a další využití',
              items: ['reporty v Power BI nebo v Data Studiu, dříve Looker Studio', 'exporty zpět do reklamních systémů, třeba marže do Google Ads nebo offline konverze'],
            },
          ],
        },
        {
          type: 'details',
          summary: 'Technické uspořádání datového skladu',
          items: [
            '<strong>Tři vrstvy.</strong> Vrstva <code>raw</code> drží data beze změn, takže model jde kdykoli přepočítat. Vrstva <code>staging</code> sjednocuje typy, měny, DPH a časová pásma a odstraňuje duplicity. Vrstva <code>marts</code> obsahuje tabulky pro konkrétní otázky, nad kterými běží reporty.',
            '<strong>Tabulky.</strong> Například <code>events_YYYYMMDD</code> z exportu GA4, <code>ads_*</code>, <code>meta_*</code> a <code>sklik_*</code> s náklady kampaní, <code>erp_orders</code> a <code>crm_deals</code> s daty firmy a reportovací <code>sessions</code>, <code>channel_daily</code>, <code>orders_margin</code> a <code>leads_to_deals</code>.',
            '<strong>Transformace.</strong> Dataform, dbt nebo plánované dotazy, zdrojový kód transformací v Gitu.',
            '<strong>Export GA4.</strong> Denní, případně průběžný export v projektu Google Cloudu na účtu vaší firmy, s regionem dat a filtrem událostí. Zapínáme ho hned na začátku, protože data zpětně Google nedoplní. Export neobsahuje automaticky všechny údaje a modelování z rozhraní GA4, proto se jeho výsledky od přehledů v GA4 mohou lišit, viz nápověda Googlu k <a href="https://support.google.com/analytics/answer/9358801?hl=en">omezení exportu</a>.',
            '<strong>Kontrola nákladů.</strong> Dělení tabulek na oddíly a clustering, limity zpracovaných bajtů, rozpočtová upozornění a role pro každý přístup.',
          ],
        },
        {
          type: 'table',
          caption: 'Modelový přehled pro vedení: ukázka sloupců a jejich definic, nejde o skutečná data',
          // sloupce přehledu jako řádky – šest úzkých sloupců by se na tabletu a mobilu špatně četlo
          head: ['Sloupec přehledu', 'Co obsahuje'],
          rows: [
            ['Období', 'Týden nebo měsíc, za který report sčítá údaje.'],
            ['Náklady na reklamu', 'Výdaje v Google Ads, Metě a Skliku za období podle definice ve slovníku metrik, například bez DPH.'],
            ['Tržby po stornu', 'Tržby z objednávek po odečtení storen a vratek ve společné měně.'],
            [
              'Příspěvková marže',
              'Tržby po stornu minus variabilní náklady podle slovníku metrik, třeba nákupní cena zboží a náklady na reklamu. Nejde o zisk, fixní náklady firmy v ní nejsou.',
            ],
            ['Zdroj dat', 'Systém, ze kterého údaj pochází, třeba e-shop, ERP nebo reklamní systém.'],
            ['Poslední aktualizace', 'Datum a čas posledního úspěšného načtení dat ze zdroje.'],
          ],
        },
      ],
    },

    {
      id: 'jednodussi-reseni',
      title: 'Kdy stačí jednodušší řešení',
      tone: 'light',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Pro jednoduchý přehled nad několika dostupnými zdroji může stačit report s přímými konektory. BigQuery doporučíme, pokud potřebujete vlastní datový model, spojení firemních dat nebo náročnější historii a výpočty. Rozhoduje využití reportu, nejen velikost firmy.',
          ],
        },
      ],
    },

    {
      id: 'prubeh',
      title: 'Jak probíhá spolupráce',
      tone: 'white',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Zadání a metriky', text: 'Domluvíme otázky, zdroje a kontrolní údaje.' },
            { title: 'Návrh přehledu', text: 'Připravíme strukturu reportu a ověříme ji s budoucími uživateli.' },
            { title: 'Napojení a kontrola', text: 'Zprovozníme datové toky a porovnáme výsledky se zdrojovými systémy.' },
            { title: 'Předání a provoz', text: 'Předáme dokumentaci, vysvětlíme používání a domluvíme odpovědnost za údržbu.' },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Co ovlivňuje cenu projektu a provozu?',
      a: 'Počet zdrojů, způsob jejich napojení, objem dat, složitost výpočtů a počet reportů. Cloud, konektory a případné licence uvedeme samostatně. Odhad provozu připravíme pro konkrétní řešení.',
    },
    {
      q: 'Je vždy potřeba BigQuery?',
      a: 'Ne. Nejdřív posoudíme otázky a dostupné zdroje. Pokud stačí report nad přímým propojením nástrojů, navrhneme jednodušší variantu.',
    },
    {
      q: 'Jakou součinnost potřebuje realizační tým?',
      a: 'Přístupy k dohodnutým zdrojům, odpovědnou osobu za definice metrik a kontrolní údaje. Potřebné role a exporty upřesníme před zahájením.',
    },
    {
      q: 'Je pro práci s reporty potřeba SQL?',
      a: 'Pro běžné používání připravíme přehledy s filtry a vysvětlením metrik. Analytikům můžeme předat také datový model a příklady dotazů.',
    },
  ],

  related: {
    items: [
      {
        label: 'Nastavení GA4 a GTM',
        href: '/sluzby/implementace-ga4',
        text: 'Události a parametry v GA4, ze kterých vychází export do BigQuery.',
      },
      {
        label: 'Řešení pro e-shopy',
        href: '/reseni/e-shopy',
        text: 'Měření objednávek podle e-shopové platformy, ze kterého vychází reporting tržeb a marže.',
      },
      {
        label: 'Řešení pro B2B firmy',
        href: '/reseni/b2b-a-lead-generation',
        text: 'Propojení poptávek z webu se zakázkami v CRM, ze kterého vychází reporting obchodních výsledků.',
      },
    ],
  },

  contact: {
    formId: 'lp-bigquery',
    title: 'Proberme vaše reporty a zdroje dat',
    lead: 'Napište, jaké přehledy dnes připravujete a která data spojujete ručně. Navrhneme, zda stačí upravit reporting, nebo má smysl datový sklad.',
    placeholder: '',
    leadType: 'consultation',
  },

  schema: {
    name: 'BigQuery a reporting',
    serviceType: 'Datový sklad v BigQuery a reporting pro marketing a vedení firmy',
    description:
      'Propojení dat z GA4, reklamních systémů, e-shopu, ERP a CRM v Google BigQuery, společný datový model se slovníkem metrik, reporty v Data Studiu nebo Power BI, porovnání vybraných výsledků se zdrojovými systémy, dokumentace a kontrola nákladů na provoz.',
    audience: 'E-shopy, velké firmy, B2B firmy',
  },
};
