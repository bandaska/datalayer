import type { PageInput } from '../../schema';

// Stránka prošla UX redukcí z 9. října 2026 (seo-analyza/2026-10-09_ux-redukce,
// kap. 3.2 a 5.2) a pohltila zrušenou stránku Dashboardy a reporting: dashboardy
// jsou výstup ve „Co uděláme“ a otázka „BigQuery, nebo přímé konektory“ ve FAQ.
// Zůstaly: hero s jedním tlačítkem, „Poznáváte se?“, výstupy, schéma architektury,
// rozhodnutí ano/ne bez čísel v boxech a čtyři otázky. Postup, kontrolní seznam,
// technické detaily a ceny Google Cloudu z boxů zmizely, kurzy ani školení Power BI
// stránka nenabízí.

export const page: PageInput = {
  path: 'sluzby/bigquery',
  kind: 'service',
  navTitle: 'BigQuery a dashboardy',
  tagline: 'surová data bez limitů GA4 a reporty',
  pictogram: 'bigquery',
  menuGroup: 'data',

  seo: {
    title: 'BigQuery, datový sklad a dashboardy pro marketing | datalayer.cz',
    description:
      'GA4 v BigQuery spojíme s náklady z Google Ads, Mety a Skliku i s daty e-shopu a CRM. Datový model a dashboard v Data Studiu nebo Power BI, který sedí s účetnictvím.',
  },

  hero: {
    h1: 'BigQuery a dashboardy pro marketing',
    subtitle:
      'BigQuery je datový sklad Googlu, do kterého GA4 umí exportovat všechny události bez vzorkování. Surová data z GA4 v něm spojíme s náklady z Google Ads, Mety a Skliku a s objednávkami, maržemi a vratkami z e-shopu, CRM nebo ERP. Nad nimi postavíme dashboard v Data Studiu (dříve Looker Studio) nebo Power BI, kterému věří i finanční ředitel. Vše běží ve vašem Google Cloudu, s hlídanými náklady.',
    primaryCta: { label: 'Konzultovat BigQuery', href: '#kontakt' },
  },

  sections: [
    {
      id: 'symptomy',
      title: 'Poznáváte se?',
      lead: 'GA4 je dobrý nástroj na sběr dat. Na řízení marketingu podle peněz mu ale chybí data, která firma drží jinde.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'Meziroční srovnání končí na čtrnácti měsících',
              text: 'V Průzkumech ve standardní verzi GA4 vidíte událostní data nejvýš čtrnáct měsíců zpět, takže sezónnost a kohorty porovnáte jen obtížně.',
              pictogram: 'monitor',
            },
            {
              title: 'ROAS počítáte z obratu, ne z marže',
              text: 'GA4 nezná nákupní ceny, storna ani vratky. Kampaň, která „vydělává“, může po odečtení vratek prodělávat.',
              pictogram: 'eshop',
            },
            {
              title: 'Náklady sčítá někdo ručně',
              text: 'Každé pondělí někdo stahuje náklady z Google Ads, Mety a Skliku do Excelu. Chyba v jednom řádku a porada řeší špatná čísla.',
              pictogram: 'conversion',
            },
            {
              title: 'Poptávku z webu nikdo nespojí se zakázkou',
              text: 'Marketing vykazuje poptávky, obchod zakázky v CRM. Kolik tržeb přinesla která kampaň, neví nikdo.',
              pictogram: 'lead',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      title: 'Co uděláme a co dostanete',
      lead: 'Nejdřív se domluvíme, jaká rozhodnutí mají data podpořit, teprve pak stavíme tabulky a grafy.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          items: [
            {
              title: 'Měřicí plán pro data',
              text: 'Otázky, na které má sklad odpovídat, s metrikami, zdroji, klíči pro propojení a vlastníky v jednom dokumentu.',
            },
            {
              title: 'Export GA4 do BigQuery',
              text: 'Denní, případně průběžný export v projektu na vašem účtu, s regionem dat a filtrem událostí. Zapneme ho hned na začátku, protože data zpětně Google nedoplní.',
            },
            {
              title: 'Náklady a data firmy',
              text: 'Náklady z Google Ads, Mety a Skliku, data ze Search Console a objednávky, marže a vratky z e-shopu, ERP nebo CRM.',
            },
            {
              title: 'Datový model ve třech vrstvách',
              text: 'Reportovací tabulky pro konkrétní otázky a zdrojový kód transformací v Gitu – v Dataformu, dbt nebo plánovaných dotazech.',
            },
            {
              title: 'Kontrola nákladů a přístupů',
              text: 'Dělení tabulek na oddíly a clustering, limity zpracovaných bajtů, rozpočtová upozornění a role pro každý přístup.',
            },
            {
              title: 'Strom KPI a slovník metrik',
              text: 'Tři až pět hlavních ukazatelů výkonu (KPI) pro vedení, pod nimi metriky pro marketing a obchod. U každé, třeba marže nebo POAS, definice, výpočet, zdroj a vlastník.',
            },
            {
              title: 'Dashboardy pro vedení i marketing',
              text: 'Manažerský přehled, marketingový a e-commerce dashboard nebo B2B pipeline v Data Studiu nebo Power BI. Nejdřív klikací prototyp na vašich datech, pak automatická aktualizace a týdenní přehled e-mailem.',
            },
            {
              title: 'Sladění s účetnictvím a školení',
              text: 'Vybraný měsíc porovnáme s účetnictvím řádek po řádku a každý rozdíl vysvětlíme. Předáme návod ke čtení dashboardu a proškolíme tým.',
            },
          ],
        },
      ],
    },

    {
      id: 'architektura',
      title: 'Jak data tečou z webu a firemních systémů do reportu',
      lead: 'Data držíme ve třech vrstvách: surová beze změn; očištěná se sjednocenými názvy, měnami a časovými pásmy; reportovací s tabulkami pro konkrétní otázky.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Schéma architektury: GA4, reklamní systémy, Search Console, e-shop, ERP a CRM plní BigQuery, kde data držíme ve vrstvách raw, staging a marts. Z reportovacích tabulek čerpají dashboardy v Data Studiu nebo Power BI.',
          columns: [
            { label: 'zdroje', items: ['web: Google Tag Manager a GA4', 'Google Ads, Meta, Sklik', 'Search Console', 'e-shop, ERP a CRM'] },
            {
              label: 'BigQuery – raw',
              items: ['events_YYYYMMDD', 'ads_*, meta_* a sklik_*', 'erp_orders a crm_deals'],
              note: 'Data beze změn, model kdykoli přepočítáme.',
            },
            {
              label: 'BigQuery – staging',
              items: ['sjednocené typy a měny', 'DPH a časová pásma', 'odstranění duplicit'],
              note: 'Transformace v Dataformu, dbt nebo plánovaných dotazech.',
            },
            {
              label: 'BigQuery – marts',
              items: ['sessions', 'channel_daily', 'orders_margin', 'leads_to_deals'],
              note: 'Tabulky pro konkrétní otázky, nad nimi běží dashboardy.',
            },
            { label: 'výstupy', items: ['Data Studio', 'Power BI', 'exporty zpět: marže do Google Ads, offline konverze'] },
          ],
        },
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Všechna data na jednom místě.</strong> Chování na webu, náklady kampaní a data e-shopu či CRM v jednom modelu.',
            '<strong>Každé číslo dohledáte</strong> v dashboardu až ke zdrojové události.',
          ],
        },
      ],
    },

    {
      id: 'rozhodnuti',
      title: 'Co v rozhraní GA4 nejde – a kdy BigQuery zatím nepotřebujete',
      lead: 'BigQuery rozhraní GA4 nenahrazuje. Doplňuje ho o delší historii, úplná data a spojení s daty firmy.',
      tone: 'light',
      blocks: [
        {
          type: 'proscons',
          yes: {
            title: 'Co v rozhraní GA4 nejde, v BigQuery ano',
            items: [
              { text: 'historie delší než čtrnáct měsíců, expiraci určujete vy' },
              { text: 'surové události bez „(other)“ a přesné počty uživatelů a relací' },
              { text: 'marže, storna a vratky z e-shopu nebo ERP' },
              { text: 'automatické načítání nákladů z Mety a Skliku každý den' },
              { text: 'spojení poptávky se zakázkou v CRM, vlastní atribuce, kohorty a LTV' },
            ],
          },
          no: {
            title: 'Doporučíme počkat, když…',
            items: [
              { text: 'máte jednotky až nízké desítky objednávek nebo poptávek týdně', note: 'stačí GA4 a dashboard nad přímými konektory' },
              { text: 'GA4 nesedí s e-shopem o desítky procent', note: 'nejdřív <a href="/sluzby/audit-mereni">audit měření</a>' },
              { text: 'podle dat ve firmě nikdo nebude rozhodovat', note: 'začneme jedním reportem pro vedení' },
            ],
          },
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Kolik stojí projekt a provoz?',
      a: 'Cenu projektu stanovíme po úvodní konzultaci jako pevnou částku – rozhoduje počet a typ zdrojů, rozsah modelu, stav měření a počet dashboardů. Provoz BigQuery a případné licence Data Studia Pro nebo Power BI platíte přímo Googlu nebo Microsoftu. V našem modelovém výpočtu pro e-shop se 100 000 událostmi v GA4 denně vyjde provoz BigQuery na jednotky dolarů měsíčně.',
    },
    {
      q: 'Potřebujeme BigQuery, nebo stačí dashboard nad přímými konektory?',
      a: 'Pro jednoduchý report nad GA4 a Google Ads stačí přímé konektory. BigQuery doporučujeme, když spojujete víc zdrojů, třeba Metu, Sklik, ERP a CRM, když potřebujete marži, vratky nebo delší historii, než dovolí GA4, nebo když report otevírá hodně lidí. Konektor GA4 v Data Studiu totiž při velkém provozu naráží na kvóty Google Analytics Data API.',
    },
    {
      q: 'Co od nás budete potřebovat?',
      a: 'Projekt v Google Cloudu s platebním účtem nebo souhlas ho založit, roli Editor v GA4, přístupy pro čtení do reklamních systémů a export nebo API k e-shopu, ERP či CRM. Od týmu pak jednu až dvě hodiny na úvodní workshop a kontrolní čísla z účetnictví za jeden měsíc. Projekt i reporty patří vaší organizaci, my dostaneme jen potřebné role, které můžete kdykoli odebrat.',
    },
    {
      q: 'Musíme umět SQL?',
      a: 'Ne. Pro běžnou práci připravíme reportovací tabulky a dashboard, ve kterém filtrujete a třídíte klikáním. Analytikovi, který chce jít do detailu, předáme dokumentaci tabulek a příklady dotazů.',
    },
  ],

  contact: {
    formId: 'lp-bigquery',
    title: 'Propojíme data do jednoho modelu a reportu',
    lead: 'Na úvodní konzultaci projdeme zdroje dat a současný reporting a řekneme, jestli BigQuery potřebujete už teď, nebo stačí dashboard nad přímými konektory.',
    placeholder: 'Adresa webu a co řešíte, např. „Report z GA4, Google Ads a ERP dnes skládáme ručně v Excelu“',
    leadType: 'consultation',
  },

  schema: {
    name: 'BigQuery a dashboardy pro marketing',
    serviceType: 'Implementace BigQuery, datového skladu a marketingových dashboardů v Data Studiu a Power BI',
    description:
      'Export GA4 do Google BigQuery, napojení nákladů z Google Ads, Mety a Skliku a dat z e-shopu, CRM a ERP, datový model pro marketing s relacemi, atribucí, maržemi a vratkami, kontrola nákladů a manažerské, marketingové, e-commerce a B2B dashboardy v Data Studiu (dříve Looker Studio) nebo Power BI, které sedí s účetnictvím.',
    audience: 'E-shopy, velké firmy, B2B firmy',
  },
};
