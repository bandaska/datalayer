import type { PageInput } from '../../schema';

// Štíhlá šablona LP podle vyhodnocení webu (9. října 2026, kap. 3.1 a 5.7).
// Zdroj obsahu: seo-analyza/03_landing-pages/07_bigquery.md. „Co postavíme“
// a „Co dostanete“ tvoří šest karet výstupů, diagram architektury má nejvýš
// čtyři položky v uzlu a srovnání s rozhraním GA4 spolu s dřívějším seznamem
// „Kdy BigQuery zatím nepotřebujete“ tvoří blok Rozhodnutí. Náklady shrnují tři
// čísla. Ve sbalených Technických detailech zůstává ukázka SQL a poznámky
// ke zdrojům, limitu exportu, rozdílům proti GA4 a transformacím, dokud nevyjdou
// články F1–F3. Tabulka výsledku dotazu, srovnání transformačních nástrojů
// a rozpis nákladů poputují do článků F2, F3 a F5. Blok „Jak poznáte, že sklad
// funguje“ shrnuje kontroly z dosavadního postupu a FAQ.
// Do dodání podkladů od klienta stránka neobsahuje: případovou studii, počet
// projektů a certifikace, délky kroků a typickou délku projektu, preferovaný
// nástroj transformací, následnou údržbu modelu ani seznam platforem.
// Texty prošly jazykovým auditem z 9. října 2026 (seo-analyza/2026-10-09_jazykovy-audit,
// kap. 3.10): upozornění místo alertů, poptávka místo leadu, české štítky,
// bez šipek a středových teček a kroky 2 a 4 postupu přizpůsobené datovému skladu.

export const page: PageInput = {
  path: 'sluzby/bigquery',
  kind: 'service',
  navTitle: 'BigQuery a datový sklad',
  tagline: 'surová data bez limitů GA4',
  pictogram: 'bigquery',
  menuGroup: 'data',

  seo: {
    title: 'BigQuery a datový sklad pro marketing | datalayer.cz',
    description:
      'GA4 v BigQuery spojíme s náklady z Google Ads, Mety a Skliku i s daty e-shopu a CRM. Datový model, hlídané náklady a dashboard nad čísly, kterým věříte.',
  },

  hero: {
    eyebrow: 'data a reporting',
    h1: 'BigQuery a datový sklad pro marketing',
    subtitle:
      'BigQuery je datový sklad Googlu, do kterého GA4 umí každý den nebo průběžně exportovat všechny události bez vzorkování. Surová data z GA4 v něm spojíme s náklady z Google Ads, Mety a Skliku a s objednávkami, maržemi a vratkami z e-shopu, CRM nebo ERP. Vše běží ve vašem Google Cloudu, s hlídanými náklady a dashboardem, kterému věří i finanční ředitel.',
    primaryCta: { label: 'Konzultovat BigQuery', href: '#kontakt' },
    secondaryCta: { label: 'Ukázka datového modelu', href: '#architektura' },
    microcopy: 'Úvodní konzultace zdarma, provoz BigQuery platíte přímo Googlu',
  },

  trust: ['Data i fakturace ve vlastním Google Cloudu', 'Limity a rozpočtová upozornění od prvního dne', 'Dokumentace a slovník metrik'],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
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
              tag: 'uchovávání dat',
            },
            {
              title: 'ROAS počítáte z obratu, ne z marže',
              text: 'GA4 nezná nákupní ceny, storna ani vratky. Kampaň, která „vydělává“, může po odečtení vratek prodělávat.',
              pictogram: 'eshop',
              tag: 'marže',
            },
            {
              title: 'Náklady sčítá někdo ručně',
              text: 'Každé pondělí někdo stahuje náklady z Google Ads, Mety a Skliku do Excelu. Chyba v jednom řádku a porada řeší špatná čísla.',
              pictogram: 'conversion',
              tag: 'Excel',
            },
            {
              title: 'Poptávku z webu nikdo nespojí se zakázkou',
              text: 'Marketing vykazuje poptávky, obchod zakázky v CRM. Kolik tržeb přinesla která kampaň, neví nikdo.',
              pictogram: 'lead',
              tag: 'CRM',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      eyebrow: 'výstupy',
      title: 'Co uděláme a co dostanete',
      lead: 'Nejdřív se domluvíme, jaká rozhodnutí mají data podpořit, teprve pak stavíme tabulky. Výstupy zůstávají u vás i po skončení spolupráce.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'otázky a metriky',
              title: 'Měřicí plán pro data',
              text: 'Otázky, na které má sklad odpovídat, s metrikami, zdroji, klíči pro propojení a vlastníky v jednom dokumentu.',
            },
            {
              tag: 'events_*',
              title: 'Export GA4 do BigQuery',
              text: 'Denní, případně průběžný export v projektu na vašem účtu, s regionem dat a filtrem událostí. Porovnáme ho s datovou vrstvou.',
            },
            {
              tag: 'Google Ads, Meta, Sklik',
              title: 'Náklady a data firmy',
              text: 'Náklady z Google Ads, Mety a Skliku, data ze Search Console a objednávky, marže a vratky z e-shopu, ERP nebo CRM.',
            },
            {
              tag: 'raw, staging a marts',
              title: 'Datový model ve třech vrstvách',
              text: 'Reportovací tabulky pro konkrétní otázky a zdrojový kód transformací v Gitu – v Dataformu, dbt nebo plánovaných dotazech.',
            },
            {
              tag: 'rozpočet',
              title: 'Kontrola nákladů a přístupů',
              text: 'Dělení tabulek na oddíly a clustering, limity zpracovaných bajtů, rozpočtová upozornění a role pro každý přístup.',
            },
            {
              tag: 'metrics.md',
              title: 'Slovník metrik a dashboard',
              text: 'Definice tržby, marže, POAS nebo ceny za poptávku (CPL), napojení <a href="/sluzby/dashboardy-a-reporting">dashboardu</a> v Data Studiu (dříve Looker Studio) nebo Power BI a školení týmu.',
            },
          ],
        },
      ],
    },

    {
      id: 'architektura',
      eyebrow: 'architektura',
      title: 'Jak data tečou z webu a firemních systémů do reportu',
      lead: 'Data držíme ve třech vrstvách: surová beze změn; očištěná se sjednocenými názvy, měnami a časovými pásmy; reportovací s tabulkami pro konkrétní otázky.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Schéma architektury: web posílá data přes Google Tag Manager do GA4. GA4, reklamní systémy, Search Console, e-shop nebo ERP a CRM plní BigQuery, kde data držíme ve vrstvách raw, staging a marts. Z reportovacích tabulek čerpají dashboardy v Data Studiu nebo Power BI.',
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
            '<strong>Pravidla a správa přístupů pro celý sklad.</strong> Role, limity dotazů, rozpočtová upozornění a expirace starých dat.',
          ],
        },
      ],
    },

    {
      id: 'rozhodnuti',
      eyebrow: 'rozhodnutí',
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
        {
          type: 'figures',
          items: [
            { value: '6,25 dolaru', label: 'za TiB přečtených dat při platbě za objem dotazů (režim on-demand), první TiB měsíčně bez poplatku' },
            { value: 'řádově 0,02 dolaru', label: 'za GiB aktivního úložiště měsíčně, prvních deset GiB bez poplatku' },
            { value: 'jednotky dolarů', label: 'měsíčně v modelovém výpočtu pro e-shop se 100 000 událostmi v GA4 denně' },
          ],
          note: 'Ceny podle ceníku Google Cloudu k říjnu 2026, bez DPH. Fakturu dostáváte přímo od Googlu.',
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak postupujeme',
      lead: 'Stejných pět kroků jako u všech našich služeb. Export GA4 zapínáme hned na začátku, protože data zpětně Google nedoplní – čím dřív export běží, tím delší historii máte.',
      tone: 'white',
      blocks: [
        {
          type: 'process',
          implementation:
            'Propojíme GA4 s BigQuery, načteme náklady z reklamních systémů a data e-shopu, ERP či CRM, postavíme datový model a nastavíme limity, upozornění a role.',
          implementationFromClient: 'projekt v Google Cloudu s platebním účtem, roli Editor v GA4, přístupy pro čtení ke zdrojům a kontakt na vývojáře',
          stepOverrides: [
            {},
            { text: 'Otázky, na které má sklad odpovídat, převedeme na metriky, zdroje a klíče pro propojení.', fromClient: 'úvodní workshop a schválení plánu' },
            {},
            { text: 'Porovnáme tržby a objednávky v modelu s účetnictvím a export GA4 s datovou vrstvou.', fromClient: 'kontrolní čísla z účetnictví' },
          ],
        },
      ],
    },

    {
      id: 'overeni',
      eyebrow: 'kontrola',
      title: 'Jak poznáte, že sklad funguje',
      lead: 'Než model předáme, porovnáme ho s účetnictvím a rozdíly proti rozhraní GA4 popíšeme ve srovnávací tabulce. Sběr dat, ze kterého sklad čerpá, pak může hlídat služba <a href="/sluzby/sprava-webu-a-mereni">Správa webu a měření</a>.',
      tone: 'dark',
      layout: 'split',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            'Tržby a počet objednávek v modelu sedí s účetnictvím za kontrolní měsíc.',
            'Export GA4 odpovídá datové vrstvě a každý rozdíl proti rozhraní umíme vysvětlit.',
            'Každé číslo v dashboardu má definici ve slovníku metrik.',
            'Limity dotazů a rozpočtová upozornění hlídají výši faktury.',
          ],
        },
      ],
    },
  ],

  techDetails: {
    summary: 'Ukázka SQL a poznámky ke zdrojům',
    blocks: [
      {
        type: 'paragraphs',
        items: [
          'Pro představu: dotaz spočítá z exportu GA4 relace a tržby podle zdroje za posledních sedm dní. Filtr na <code>_TABLE_SUFFIX</code> zajistí, že BigQuery přečte jen sedm denních tabulek, ne celou historii – už tím držíme náklady na uzdě.',
        ],
      },
      {
        type: 'code',
        lang: 'sql',
        caption:
          'Ukázka pracuje s poli session_traffic_source_last_click, event_params.ga_session_id, user_pseudo_id a ecommerce.purchase_revenue podle schématu exportu GA4.',
        code: `-- Relace a tržby podle zdroje za posledních sedm dní (export GA4)
SELECT
  session_traffic_source_last_click.cross_channel_campaign.source AS zdroj,
  session_traffic_source_last_click.cross_channel_campaign.medium AS medium,
  COUNT(DISTINCT CONCAT(user_pseudo_id, '.',
    CAST((SELECT value.int_value FROM UNNEST(event_params)
          WHERE key = 'ga_session_id') AS STRING))) AS relace,
  ROUND(SUM(IF(event_name = 'purchase', ecommerce.purchase_revenue, 0)), 0) AS trzby
FROM \`vas-projekt.analytics_123456789.events_*\`
WHERE _TABLE_SUFFIX BETWEEN
      FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE('Europe/Prague'), INTERVAL 7 DAY))
  AND FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE('Europe/Prague'), INTERVAL 1 DAY))
GROUP BY zdroj, medium
ORDER BY trzby DESC;`,
      },
      {
        type: 'list',
        style: 'bullet',
        title: 'Co je dobré vědět o zdrojích a modelu',
        items: [
          '<strong>GA4:</strong> denní export obsahuje všechny události za předchozí den, průběžný export plní během dne tabulku <code>events_intraday</code>. Standardní property má limit jeden milion exportovaných událostí denně a při výrazném překročení může Google export pozastavit – proto zbytečné události vyřazujeme, nebo přejdeme na průběžný export, který limit nemá.',
          '<strong>Meta Ads:</strong> konektor Data Transfer Service má pevnou sadu tabulek a minimální interval čtyřiadvacet hodin. Druhá možnost je Marketing API.',
          '<strong>Search Console:</strong> hromadný export plní denně tabulky <code>searchdata_site_impression</code> a <code>searchdata_url_impression</code>, historii před zapnutím ale neobsahuje.',
          '<strong>Rozdíly proti rozhraní GA4:</strong> rozhraní odhaduje počty uživatelů a relací algoritmem HyperLogLog++ a může obsahovat modelovaná data, export obsahuje jen naměřené události. Denní tabulky může Google doplňovat ještě až dvaasedmdesát hodin.',
          '<strong>Transformace:</strong> pro tři až pět tabulek bez datového týmu stačí plánované dotazy, pro sklad s desítkami tabulek se hodí Dataform s verzováním v Gitu a testy. Když tým už pracuje v dbt, stavíme v dbt.',
        ],
      },
    ],
  },

  faq: [
    {
      q: 'Kolik stojí projekt a provoz BigQuery?',
      a: 'Cenu projektu stanovíme po úvodní konzultaci jako pevnou částku – rozhoduje počet a typ zdrojů, rozsah modelu, stav měření a počet dashboardů. Provoz platíte přímo Googlu: první TiB dotazů a deset GiB úložiště měsíčně jsou zdarma a v našem modelovém výpočtu pro e-shop se 100 000 událostmi denně vyjde provoz na jednotky dolarů měsíčně. Odhad spočítáme na začátku podle objemu dat a nastavíme limity, aby vás faktura nepřekvapila.',
    },
    {
      q: 'Jak dlouho to trvá a co od nás budete potřebovat?',
      a: 'Délka závisí hlavně na počtu a typu zdrojů – GA4 a Google Ads napojíme rychle, vlastní ERP bez API dá více práce. Potřebujeme projekt v Google Cloudu s platebním účtem nebo souhlas ho založit, roli Editor v GA4, přístupy pro čtení do reklamních systémů, export nebo API k e-shopu, ERP či CRM a kontakt na vývojáře nebo IT. Od týmu pak jednu až dvě hodiny na úvodní workshop a kontrolní čísla z účetnictví.',
    },
    {
      q: 'Získáme i historická data z GA4?',
      a: 'Surová data na úrovni událostí začnou do BigQuery proudit až po propojení GA4 – zpětně je export nedoplní, proto ho zapínáme hned na začátku. Starší agregované reporty umí dodatečně načíst konektor Data Transfer Service pro GA4, a to tak daleko, jak dovolí uchovávání dat v GA4 property. Pro meziroční srovnání to obvykle stačí, pro analýzy jednotlivých relací ne.',
    },
    {
      q: 'Musíme umět SQL?',
      a: 'Ne. Pro běžnou práci připravíme reportovací tabulky a dashboard, ve kterém filtrujete a třídíte klikáním. Analytikovi, který chce jít do detailu, předáme dokumentaci tabulek a příklady dotazů, a když budete chtít, přidáme školení na vašich datech.',
    },
    {
      q: 'Komu budou patřit data a účty?',
      a: 'Vám. Export i model stavíme v projektu Google Cloudu, který i s platebním účtem patří vaší organizaci, a zdrojový kód transformací předáme v repozitáři, ke kterému máte přístup. My dostaneme jen potřebné role, ideálně časově omezené, a po předání je můžete kdykoli odebrat. Žádná data neukládáme na vlastní infrastruktuře.',
    },
    {
      q: 'Jak je to s GDPR a osobními údaji v BigQuery?',
      a: 'Přímé identifikátory jako e-mail, telefon nebo jméno do skladu v čitelné podobě neposíláme. Pseudonymní identifikátory jako <code>user_pseudo_id</code> ale mohou patřit mezi osobní údaje, proto volíme umístění dat v EU, omezujeme přístupy rolemi a nastavujeme expiraci starých dat. Právní posouzení zajistí váš právník nebo pověřenec – nejsme advokátní kancelář.',
    },
  ],

  relatedArticles: [
    { slug: 'ga4-bigquery-export', title: 'Export GA4 do BigQuery: nastavení, limity a cena' },
    { slug: 'zpracovani-dat-v-bigquery', title: 'Zpracování dat v BigQuery: od eventů k reportům' },
    { slug: 'bigquery-cena', title: 'Kolik stojí BigQuery pro marketing' },
  ],

  relatedPages: ['sluzby/dashboardy-a-reporting', 'sluzby/audit-mereni', 'sluzby/mereni-konverzi'],

  contact: {
    formId: 'lp-bigquery',
    topics: ['bigquery'],
    title: 'Propojíme data do jednoho modelu',
    lead: 'Na úvodní konzultaci projdeme zdroje dat a řekneme, jestli BigQuery potřebujete už teď – a kolik by provoz stál u Googlu.',
    placeholder: 'Např. chceme spojit GA4, náklady z reklam a marže z ERP…',
    leadType: 'consultation',
  },

  schema: {
    name: 'BigQuery a datový sklad pro marketing',
    serviceType: 'Implementace BigQuery a datového skladu pro marketingová a e-commerce data',
    description:
      'Export GA4 do Google BigQuery, napojení nákladů z Google Ads, Mety a Skliku a dat z e-shopu, CRM a ERP, datový model pro marketing s relacemi, atribucí, maržemi a vratkami, kontrola nákladů a napojení dashboardů.',
    audience: 'E-shopy, velké firmy, B2B firmy',
  },
};
