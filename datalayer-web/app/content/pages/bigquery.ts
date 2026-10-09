import type { LandingPageContent } from '../types';

// Zdroj: seo-analyza/03_landing-pages/07_bigquery.md (návrh v1, 8. října 2026).
// Do dodání podkladů od klienta stránka neobsahuje: případovou studii, počet
// projektů a certifikace v trust baru, délky kroků a typickou délku projektu,
// preferovaný nástroj transformací, následnou údržbu modelu ani seznam platforem.

export const page: LandingPageContent = {
  path: 'sluzby/bigquery',
  kind: 'service',
  navTitle: 'BigQuery a datový sklad',
  tagline: 'surová data bez limitů GA4',
  pictogram: 'bigquery',
  menuGroup: 'data',

  seo: {
    title: 'BigQuery a datový sklad pro marketing | datalayer.cz',
    description:
      'GA4 v BigQuery spojíme s náklady z Ads, Meta a Skliku i s daty e-shopu a CRM. Datový model, hlídané náklady a dashboard nad čísly, které věříte.',
  },

  hero: {
    eyebrow: 'bq · data a reporting',
    h1: 'BigQuery a datový sklad pro marketing',
    subtitle:
      'Surová data z GA4 spojíme s náklady z Google Ads, Mety a Skliku a s objednávkami, maržemi a vratkami z e-shopu, CRM nebo ERP. Ve vašem Google Cloudu, s hlídanými náklady a s dashboardem, kterému věří i finanční ředitel.',
    quickAnswer:
      '<strong>BigQuery</strong> je datový sklad Googlu, do kterého GA4 umí každý den nebo průběžně exportovat všechny události bez vzorkování. Pro marketing z něj stavíme jedno místo pravdy: chování na webu, náklady kampaní a data e-shopu či CRM v jednom modelu. Googlu platíte jen za uložená a zpracovaná data – první TiB dotazů a deset GiB úložiště měsíčně máte zdarma.',
    primaryCta: { label: 'Konzultovat BigQuery', href: '#kontakt' },
    secondaryCta: { label: 'Ukázka datového modelu', href: '#architektura' },
    microcopy:
      'Úvodní třicetiminutová konzultace zdarma · Data i účty zůstávají ve vašem projektu v Google Cloudu',
  },

  trust: [
    'Data, přístupy i fakturace zůstávají ve vašem projektu v Google Cloudu',
    'Umístění dat, třeba region EU, volíte už při propojení GA4',
    'Limity dotazů a rozpočtové alerty nastavíme hned první den',
    'Ke každému projektu dokumentace datového modelu a slovník metrik',
  ],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Poznáváte se v některé z těchto situací?',
      lead: 'GA4 je dobrý nástroj na sběr dat. Na řízení marketingu podle peněz mu ale chybí data, která firma drží jinde.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Meziroční srovnání končí na čtrnácti měsících',
              text: 'V Průzkumech standardní GA4 vidíte událostní data nejvýš čtrnáct měsíců zpět. Sezónnost, kohorty a dlouhé nákupní cykly tak porovnáte jen obtížně.',
              pictogram: 'monitor',
              tag: 'retention',
            },
            {
              title: 'V reportu přibývá „(other)“',
              text: 'U detailních reportů GA4 slučuje méně časté hodnoty do řádku „(other)“ a část dat skrývá kvůli prahování. V exportu do BigQuery tyto řádky nejsou.',
              pictogram: 'ga4',
              tag: '(other)',
            },
            {
              title: 'ROAS počítáte z obratu, ne z marže',
              text: 'GA4 nezná nákupní ceny, storna ani vratky. Kampaň, která „vydělává“, může po odečtení vratek prodělávat.',
              pictogram: 'eshop',
              tag: 'margin',
            },
            {
              title: 'Náklady sčítá někdo ručně',
              text: 'Každé pondělí kdosi stahuje náklady z Google Ads, Mety a Skliku do Excelu. Chyba v jednom řádku a porada řeší špatná čísla.',
              pictogram: 'conversion',
              tag: 'costs',
            },
            {
              title: 'Blížíte se limitu exportu',
              text: 'Standardní GA4 property má limit denního exportu milion událostí. Při výrazném překročení může Google denní export pozastavit.',
              pictogram: 'warn',
              tag: '1M/day',
            },
            {
              title: 'Lead z webu nikdo nespojí se zakázkou',
              text: 'Marketing vykazuje leady, obchod zakázky v CRM. Kolik tržeb přinesla která kampaň, neví nikdo.',
              pictogram: 'lead',
              tag: 'crm',
            },
          ],
        },
      ],
    },
    {
      id: 'co-postavime',
      eyebrow: 'řešení',
      title: 'Co postavíme: od exportu GA4 po model, kterému věří finance',
      lead: 'Nejdřív se domluvíme, jaká rozhodnutí mají data podpořit. Teprve pak stavíme tabulky. Každý krok má výstup, který zůstává u vás.',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'plan',
              title: 'Měřicí plán pro data',
              text: 'Sepíšeme otázky, na které má sklad odpovídat, třeba „marže podle kanálu po odečtení vratek“ nebo „kolik zakázek přinesla kampaň X“. Ke každé doplníme zdroje, klíče pro propojení – ID objednávky, <code>transaction_id</code>, ID leadu nebo GCLID – a vlastníka metriky.',
            },
            {
              tag: 'raw',
              title: 'Export GA4 do BigQuery',
              text: 'Propojíme GA4 s vaším projektem v Google Cloudu a zvolíme umístění dat, třeba EU. Zapneme denní a podle potřeby i průběžný, streamovaný export. Zbytečné události vyřadíme, aby se standardní property vešla do limitu. Nakonec ověříme, že export odpovídá datové vrstvě – když nesedí sběr, nesedí ani sklad.',
            },
            {
              tag: 'sources',
              title: 'Náklady a data firmy',
              text: 'Náklady a výkon načteme z Google Ads přes BigQuery Data Transfer Service, z Meta Ads přes konektor Data Transfer Service nebo Marketing API a ze Skliku přes Sklik API. Podle potřeby přidáme hromadný export ze Search Console. Napojíme objednávky, marže a vratky z e-shopu nebo ERP a leady a zakázky z CRM.',
            },
            {
              tag: 'marts',
              title: 'Datový model pro marketing',
              text: 'Ze surových událostí složíme relace podle <code>user_pseudo_id</code> a <code>ga_session_id</code>, přiřadíme zdroje návštěv, objednávky napojíme na marže a vratky a náklady na kampaně. Vzniknou přehledné reportovací tabulky, třeba <code>orders_margin</code>, <code>channel_daily</code> nebo <code>leads_to_deals</code>.',
            },
            {
              tag: 'guard',
              title: 'Automatizace a governance',
              text: 'Transformace poběží v Dataformu, v dbt, pokud ho používá váš tým, nebo jako plánované dotazy. Tabulky rozdělíme podle data a seřadíme podle často filtrovaných sloupců, v řeči BigQuery partitioning a clustering. Dotazům nastavíme limit zpracovaných bajtů, projektu rozpočtové alerty a každému přístupu roli.',
            },
            {
              tag: 'report',
              title: 'Napojení dashboardů a předání',
              text: 'Model napojíme na Data Studio (dříve Looker Studio) nebo Power BI, sepíšeme dokumentaci a slovník metrik a projdeme je s týmem. Jak dashboardy stavíme, popisuje stránka <a href="/sluzby/dashboardy-a-reporting">Dashboardy a reporting</a>.',
            },
          ],
        },
      ],
    },
    {
      id: 'architektura',
      eyebrow: 'architektura',
      title: 'Architektura: jak data tečou z webu a firemních systémů do reportu',
      lead: 'Data držíme ve třech vrstvách. Surová obsahuje data přesně tak, jak je poslaly zdroje. Očištěná sjednocuje názvy, měny a časová pásma. Reportovací drží tabulky pro konkrétní otázky. Každé číslo v dashboardu tak dohledáte až ke zdrojové události.',
      tone: 'light',
      blocks: [
        {
          type: 'flow',
          caption:
            'Schéma architektury: web posílá data přes GTM do GA4. GA4, reklamní systémy, Search Console, e-shop nebo ERP a CRM plní BigQuery, kde data držíme ve vrstvách raw, staging a marts. Z reportovacích tabulek čerpají dashboardy v Data Studiu nebo Power BI.',
          columns: [
            {
              label: 'Zdroje',
              items: [
                'Web: dataLayer a GTM s consent mode',
                'GA4',
                'Google Ads',
                'Meta Ads',
                'Sklik',
                'Search Console',
                'E-shop / ERP: objednávky, marže, vratky',
                'CRM: leady, zakázky',
              ],
            },
            {
              label: 'BigQuery · raw',
              items: ['events_YYYYMMDD', 'ads_* · meta_* · sklik_*', 'erp_orders · crm_deals'],
              note: 'Data beze změn, model kdykoli přepočítáme.',
            },
            {
              label: 'BigQuery · staging',
              items: ['sjednocené typy a měny', 'DPH a časová pásma', 'odstranění duplicit'],
              note: 'Transformace v Dataformu, dbt nebo plánovaných dotazech.',
            },
            {
              label: 'BigQuery · marts',
              items: ['sessions', 'channel_daily', 'orders_margin', 'leads_to_deals'],
              note: 'Tabulky pro konkrétní otázky, nad nimi běží dashboardy.',
            },
            {
              label: 'Výstupy',
              items: [
                'Data Studio (dříve Looker Studio)',
                'Power BI',
                'Exporty zpět: marže do Ads, offline konverze',
              ],
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Governance pod celým skladem',
          text: 'IAM role, partitioning, clustering, limit zpracovaných bajtů, rozpočtové alerty a dokumentace. Určují, kdo co vidí, kolik smí dotaz stát a kdy staré oddíly mažeme.',
        },
        {
          type: 'list',
          style: 'bullet',
          title: 'Co je dobré vědět o zdrojích',
          items: [
            '<strong>GA4:</strong> denní export obsahuje všechny události za předchozí den. Průběžný export plní během dne tabulku <code>events_intraday</code>.',
            '<strong>Meta Ads:</strong> konektor Data Transfer Service má pevnou sadu tabulek a minimální interval 24 hodin. Druhá možnost je Marketing API.',
            '<strong>Search Console:</strong> hromadný export plní denně tabulky <code>searchdata_site_impression</code> a <code>searchdata_url_impression</code>. Historii před zapnutím ale neobsahuje.',
          ],
        },
      ],
    },
    {
      id: 'ukazka-sql',
      eyebrow: 'sql',
      title: 'Jak vypadá práce s daty v BigQuery',
      lead: 'V BigQuery píšete dotazy v jazyce SQL. Umět ho nemusíte – reportovací tabulky připravíme tak, aby s nimi tým pracoval přímo v dashboardu.',
      tone: 'dark',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Pro představu: tento dotaz spočítá z exportu GA4 relace a tržby podle zdroje za posledních sedm dní. Filtr na <code>_TABLE_SUFFIX</code> zajistí, že BigQuery přečte jen sedm denních tabulek, ne celou historii. Tak mimo jiné držíme náklady na uzdě.',
          ],
        },
        {
          type: 'code',
          lang: 'sql',
          caption:
            'Ukázka pracuje s poli session_traffic_source_last_click, event_params.ga_session_id, user_pseudo_id a ecommerce.purchase_revenue podle schématu exportu GA4.',
          code: `-- Relace a tržby podle zdroje za posledních 7 dní (GA4 export)
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
          type: 'table',
          caption:
            'Výsledek dotazu v konzoli BigQuery – ukázková data. Ještě před spuštěním BigQuery odhadne, kolik dat dotaz přečte.',
          head: ['zdroj', 'medium', 'relace', 'trzby'],
          rows: [
            ['google', 'cpc', '18 412', '1 284 300'],
            ['(direct)', '(none)', '9 870', '812 600'],
            ['facebook', 'paid', '11 205', '534 900'],
            ['seznam', 'cpc', '4 318', '296 400'],
            ['google', 'organic', '12 944', '288 100'],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Čísla z dotazu mohou mírně nesedět s rozhraním GA4. Rozhraní počty uživatelů a relací odhaduje, používá modelování a vlastní atribuci.',
          ],
        },
      ],
    },
    {
      id: 'srovnani',
      eyebrow: 'srovnání',
      title: 'Co vám dá BigQuery navíc oproti rozhraní GA4',
      lead: 'BigQuery rozhraní GA4 nenahrazuje. Doplňuje ho o delší historii, úplná data a spojení s daty firmy.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          head: ['Oblast', 'Rozhraní GA4 ve verzi standard', 'GA4 + BigQuery s modelem od nás'],
          highlightColumn: 2,
          rows: [
            [
              'Jak daleko do historie',
              'Událostní data v Průzkumech a trychtýřích dva nebo čtrnáct měsíců. Standardní agregované reporty retence neomezuje.',
              'Tak dlouho, jak data budete chtít držet – expiraci oddílů určujete vy',
            ],
            [
              'Úplnost řádků',
              'U vysoké kardinality řádek „(other)“, u některých reportů prahování dat',
              'Surové události bez „(other)“. Data, která rozhraní skryje kvůli prahování, ale v exportu obvykle chybí také.',
            ],
            [
              'Počty uživatelů a relací',
              'Odhad algoritmem HyperLogLog++, u relací Google uvádí přesnost zhruba ±1,63 %',
              'Přesný výpočet z událostí',
            ],
            [
              'Modelovaná data z consent mode',
              'Reporty je mohou obsahovat',
              'V exportu nejsou – vidíte jen skutečně naměřené události',
            ],
            [
              'Marže, vratky, storna',
              'Ne, jen to, co pošlete v události',
              'Ano – z e-shopu nebo ERP, propojení přes ID objednávky',
            ],
            [
              'Náklady z Mety a Skliku',
              'Ne, import nákladů jen omezeně a ručně',
              'Ano – automatické načítání každý den',
            ],
            ['Spojení s CRM: lead → zakázka', 'Ne', 'Ano – přes ID leadu nebo GCLID'],
            [
              'Vlastní atribuce, kohorty, LTV',
              'Omezeně, jen předdefinované modely',
              'Libovolně, podle vlastních pravidel',
            ],
            ['Kdo data vlastní', 'Účet Google Analytics', 'Váš projekt v Google Cloudu'],
            [
              'Náklady',
              'Zdarma ve verzi standard',
              'Googlu platíte úložiště a dotazy nad bezplatný limit, nám naši práci',
            ],
          ],
        },
      ],
    },
    {
      id: 'transformace',
      eyebrow: 'transformace',
      title: 'Čím budeme data transformovat',
      lead: 'Volba nástroje závisí na velikosti modelu a na tom, kdo ho bude spravovat.',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          head: ['Kritérium', 'Plánované dotazy', 'Dataform', 'dbt'],
          rows: [
            [
              'Kde běží',
              'Přímo v BigQuery',
              'Služba Google Cloudu nad BigQuery',
              'Vlastní běhové prostředí nebo dbt Cloud',
            ],
            [
              'Cena nástroje',
              'Platíte jen zpracování dotazů',
              'Podle Googlu služba zdarma, platíte dotazy v BigQuery a logování',
              'dbt Core je open source, provoz a případné licence závisí na zvolené variantě',
            ],
            ['Verzování v Gitu, testy, závislosti', 'Ne, nebo ručně', 'Ano', 'Ano'],
            [
              'Dokumentace modelu',
              'Ručně',
              'Ano – popisy a graf závislostí',
              'Ano – popisy a graf závislostí',
            ],
            [
              'Kdy se hodí',
              'Malý model se třemi až pěti tabulkami, žádný datový tým',
              'Marketingový sklad s desítkami tabulek v BigQuery',
              'Váš datový tým už dbt používá, nebo sklad není jen v BigQuery',
            ],
          ],
        },
      ],
    },
    {
      id: 'naklady',
      eyebrow: 'náklady',
      title: 'Kolik stojí provoz BigQuery: platíte Googlu, ne nám',
      lead: 'Cenu naší práce na webu neuvádíme, provozní náklady BigQuery jsou ale veřejné. Fakturu za ně dostáváte přímo od Googlu. Platíte za dvě věci: kolik dat uložíte a kolik dat dotazy přečtou.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          caption: 'Ceny podle ceníku Google Cloudu k říjnu 2026, v amerických dolarech bez DPH.',
          head: ['Položka', 'Cena nebo limit', 'Poznámka'],
          rows: [
            [
              'Dotazy v režimu on-demand',
              '6,25 dolaru za TiB přečtených dat',
              'První TiB měsíčně zdarma, minimum deset MB na dotaz a tabulku',
            ],
            [
              'Úložiště – aktivní',
              'Řádově 0,02 dolaru za GiB měsíčně, sazba závisí na regionu',
              'Prvních deset GiB měsíčně zdarma',
            ],
            [
              'Úložiště – dlouhodobé',
              'Zhruba o polovinu levnější',
              'Oddíl, který devadesát dní zůstal beze změny',
            ],
            [
              'Streamovaný export GA4',
              '0,05 dolaru za GB, Google uvádí zhruba 600 000 událostí na GB',
              'Denní dávkový export je bez poplatku za načtení',
            ],
            [
              'Konektory Google Ads a GA4 v Data Transfer Service',
              'Bez poplatku za přenos',
              'Platíte jen uložená data a dotazy',
            ],
            [
              'Konektor Meta Ads v Data Transfer Service',
              'Podle spotřeby ve slot-hodinách',
              'Sazbu najdete v aktuálním ceníku Googlu',
            ],
            [
              'BigQuery sandbox',
              'Zdarma, bez platební karty',
              'Deset GiB úložiště, jeden TiB dotazů měsíčně, tabulky expirují po šedesáti dnech, bez streamování a bez Data Transfer Service',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Ukázkový výpočet',
          text: 'E-shop s přibližně 100 000 událostmi v GA4 denně, tedy zhruba 3 miliony měsíčně, vygeneruje podle odhadu Googlu kolem pěti GB exportu měsíčně. Za rok je to kolem šedesáti GB, po odečtení deseti GiB zdarma tedy desítky GB placeného úložiště – v řádu jednotek dolarů měsíčně. Streamovaný export by stál kolem 0,25 dolaru měsíčně. Dotazy dashboardů, které čtou malé reportovací tabulky místo surových dat, se obvykle vejdou do bezplatného TiB. <strong>Skutečná čísla záleží na velikosti událostí a na způsobu dotazování. Proto je na začátku spočítáme a nastavíme limity.</strong>',
        },
        {
          type: 'paragraphs',
          items: ['Google ceny průběžně upravuje, platí vždy aktuální ceník. Výpočet je orientační.'],
        },
      ],
    },
    {
      id: 'co-dostanete',
      eyebrow: 'výstupy',
      title: 'Co dostanete',
      lead: 'Výstupy jsou vaše a zůstávají u vás i po skončení spolupráce.',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          items: [
            {
              title: 'Měřicí plán pro data',
              text: 'Otázky, metriky, zdroje, klíče pro propojení a vlastníci v jednom dokumentu.',
            },
            {
              title: 'Funkční export GA4 → BigQuery',
              text: 'Export běží v projektu na vašem účtu. Ověříme ho proti datové vrstvě a nastavíme filtr událostí.',
            },
            {
              title: 'Načtené zdroje',
              text: 'Náklady z Google Ads, Mety a Skliku, Search Console, e-shop nebo ERP a CRM podle rozsahu.',
            },
            {
              title: 'Datový model ve třech vrstvách',
              text: 'Zdrojový kód transformací v Gitu – v Dataformu, dbt nebo plánovaných dotazech.',
            },
            {
              title: 'Slovník metrik',
              text: 'Jak počítáme relaci, tržbu, marži, POAS a CPL a který systém je zdroj pravdy pro které číslo.',
            },
            {
              title: 'Kontrola nákladů',
              text: 'Partitioning, clustering, limity zpracovaných bajtů, denní kvóty a rozpočtové alerty.',
            },
            {
              title: 'Přístupy a role',
              text: 'Kdo smí číst a kdo upravovat, servisní účty pro konektory a seznam všech přístupů v předávacím protokolu.',
            },
            {
              title: 'Napojení na dashboard a předání',
              text: 'Připojení Data Studia nebo Power BI, školení na šedesát až devadesát minut, záznam a dokumentace.',
            },
          ],
        },
      ],
    },
    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak postupujeme a co od vás potřebujeme',
      lead: 'Export GA4 zapínáme hned na začátku, protože zpětně ho Google nedoplní. Každý den navíc znamená den dat navíc.',
      tone: 'light',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Úvodní workshop a měřicí plán',
              text: 'Projdeme rozhodnutí, která má sklad podpořit, a systémy, ze kterých data vezmeme.',
              output: 'Měřicí plán pro data, seznam zdrojů',
              fromClient: 'Jednu až dvě hodiny s marketingem a někým z financí nebo IT, seznam systémů',
            },
            {
              title: 'Projekt v Google Cloudu a export GA4',
              text: 'Tento krok běží souběžně s workshopem.',
              output: 'Propojený export, region, filtr událostí',
              fromClient: 'Nový nebo zpřístupněný projekt, platební účet, roli Editor v GA4',
            },
            {
              title: 'Napojení nákladů a dat firmy',
              text: 'Načteme surová data z reklamních systémů, e-shopu nebo ERP a z CRM.',
              output: 'Surová data ze všech zdrojů v BigQuery',
              fromClient:
                'Přístupy pro čtení do Google Ads, Mety a Skliku, export nebo API k e-shopu, ERP či CRM, kontakt na vývojáře',
            },
            {
              title: 'Datový model a kontrola čísel',
              text: 'Postavíme reportovací tabulky a porovnáme je s účetnictvím.',
              output: 'Reportovací tabulky, porovnání s účetnictvím',
              fromClient: 'Kontrolní čísla: tržby a počet objednávek za vybraný měsíc',
            },
            {
              title: 'Governance a náklady',
              text: 'Určíme, kolik smí dotazy stát, kdo k datům smí a jak dlouho je držíme.',
              output: 'Limity, alerty, role, expirace',
              fromClient: 'Schválení rozpočtového limitu a seznamu uživatelů',
            },
            {
              title: 'Dashboard, dokumentace, školení',
              text: 'Napojíme dashboard, předáme dokumentaci a proškolíme tým.',
              output: 'Napojený dashboard, slovník metrik, záznam školení',
              fromClient: 'Účastníky školení a zpětnou vazbu k prototypu',
            },
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Aby sběr dat, ze kterého sklad čerpá, nepřestal fungovat, hlídá ho služba <a href="/sluzby/sprava-webu-a-mereni">Správa webu a měření</a>.',
          ],
        },
      ],
    },
    {
      id: 'pro-koho',
      eyebrow: 'pro koho',
      title: 'Co je jinak u e-shopu, velké firmy a B2B',
      tone: 'dark',
      blocks: [
        {
          type: 'tabs',
          group: 'bq_segment',
          items: [
            {
              id: 'eshop',
              label: 'E-shop',
              paragraphs: [
                'Řídíte se podle marže, ne podle obratu. Napojíme nákupní ceny, storna a vratky z e-shopu nebo ERP a spočítáme POAS po kanálech a kategoriích, kohorty zákazníků a hodnotu zákazníka v čase, tedy LTV.',
                'U krabicových e-shopových platforem řešíme hlavně export objednávek, u vlastního řešení napojíme databázi nebo API. Klíč je vždy stejný: ID objednávky v e-shopu musí odpovídat <code>transaction_id</code> v GA4.',
              ],
            },
            {
              id: 'velka-firma',
              label: 'Velká firma',
              paragraphs: [
                'Sklad musí zapadnout do pravidel IT. Pracujeme v organizaci a projektu Google Cloudu, které spravujete vy, s rolemi podle principu nejnižších oprávnění, s volbou regionu a s expirací dat podle interních pravidel.',
                'Když už máte centrální datový sklad, třeba v Azure, Snowflake nebo Keboole, připravíme webovou vrstvu dat jako čistý vstup pro BI tým. Nebo spolupracujeme s BI agenturou, kterou už máte. Více na stránce <a href="/reseni/velke-firmy">Měření pro velké firmy</a>.',
              ],
            },
            {
              id: 'b2b',
              label: 'B2B a leady',
              paragraphs: [
                'Lead z formuláře spojíme přes ID leadu nebo GCLID se stavem v CRM, které má API. Uvidíte cenu za kvalifikovaný lead i za zakázku podle kampaně a offline konverze můžete posílat zpět do Google Ads.',
                'Více na stránce <a href="/reseni/b2b-a-lead-generation">Měření pro B2B a lead generation</a>.',
              ],
            },
          ],
        },
        {
          type: 'list',
          style: 'bullet',
          title: 'Kdy BigQuery zatím nepotřebujete',
          items: [
            'Máte jednotky až nízké desítky objednávek nebo leadů týdně a jednu až dvě kampaně. Stačí GA4 a dashboard nad přímými konektory.',
            'Ještě nemáte spolehlivý sběr dat a GA4 nesedí s e-shopem o desítky procent. Začněte <a href="/sluzby/audit-mereni">auditem měření</a> – sklad nad děravými daty nepomůže.',
            'Podle dat ve firmě nikdo nebude rozhodovat. Pak začněme jedním reportem pro vedení.',
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'K čemu je BigQuery v marketingu?',
      a: 'BigQuery je datový sklad v Google Cloudu, ve kterém dotaz rychle projde i miliardy řádků. V marketingu slouží jako místo, kde se potkají data, která jinak žijí odděleně: události z GA4, náklady z reklamních systémů, objednávky, marže a vratky z e-shopu nebo ERP a leady a zakázky z CRM. Nad nimi pak počítáte věci, které GA4 sám neumí – marži podle kanálu, POAS, cenu za zakázku, kohorty nebo vlastní atribuci. Výsledky zobrazí dashboard v Data Studiu nebo Power BI, případně je pošleme zpátky do reklamních systémů.',
    },
    {
      q: 'Je BigQuery zdarma a kolik stojí?',
      a: 'Částečně. Google dává každý měsíc zdarma jeden TiB zpracovaných dotazů a deset GiB úložiště. Nad tento limit stojí dotazy 6,25 dolaru za TiB a aktivní úložiště řádově 0,02 dolaru za GiB měsíčně, podle ceníku Google Cloudu k říjnu 2026. Na vyzkoušení slouží BigQuery sandbox bez platební karty. Má ale limit deset GiB úložiště, tabulky v něm expirují po šedesáti dnech a nepodporuje streamování ani konektory Data Transfer Service. Pro trvalý provoz proto doporučujeme projekt s fakturací. V našem modelovém výpočtu pro e-shop se 100 000 událostmi denně vycházejí provozní náklady v řádu jednotek dolarů měsíčně. Rozhoduje hlavně způsob dotazování, proto je na začátku spočítáme pro vás.',
    },
    {
      q: 'Získáme i historická data z GA4, nebo jen od zapnutí exportu?',
      a: 'Surová data na úrovni událostí začnou do BigQuery proudit až po propojení GA4 s projektem – zpětně je export nedoplní. Proto ho zapínáme hned na začátku projektu, i když model stavíme později. Starší agregovaná data, tedy reporty podle dimenzí a metrik, umí dodatečně načíst konektor BigQuery Data Transfer Service pro GA4. Sahá tak daleko do minulosti, jak dovolí nastavení uchovávání dat v GA4 property. Pro meziroční srovnání to obvykle stačí, pro analýzy jednotlivých relací ne.',
    },
    {
      q: 'Proč se čísla v BigQuery liší od rozhraní GA4?',
      a: 'Protože rozhraní GA4 a export počítají jinak. Rozhraní odhaduje počty uživatelů a relací algoritmem HyperLogLog++, může obsahovat modelovaná data z consent mode, používá Google signály a vlastní atribuci a u velkých reportů slučuje řádky do „(other)“. Export obsahuje jen skutečně naměřené události a denní tabulky může Google ještě až 72 hodin doplňovat. Rozdíly v jednotkách procent jsou proto normální. Důležité je, aby byly stabilní a abychom je uměli vysvětlit. Projekt proto zahrnuje srovnávací tabulku, ve které každý rozdíl popíšeme.',
    },
    {
      q: 'Co když máme víc než milion událostí denně?',
      a: 'Standardní GA4 property má limit denního exportu milion událostí. Při jeho výrazném překročení může Google denní export pozastavit a pozastavené dny už znovu neexportuje. Řešení jsou tři: vyřadit z exportu události, které nepotřebujete, třeba technické nebo duplicitní; přejít na průběžný, streamovaný export, který limit nemá a stojí 0,05 dolaru za GB; nebo zvážit Analytics 360 s limitem až dvacet miliard událostí denně. Nejčastěji kombinujeme první dvě možnosti – a zároveň zkontrolujeme, proč událostí vzniká tolik.',
    },
    {
      q: 'Musíme umět SQL?',
      a: 'Ne. BigQuery sice ovládáte jazykem SQL, pro běžnou práci ale připravíme reportovací tabulky a dashboard, ve kterém filtrujete a třídíte klikáním. SQL se hodí analytikovi, který chce jít do detailu – i pro něj připravíme dokumentaci tabulek a příklady dotazů. Pokud chcete, aby tým se skladem pracoval samostatně, přidáme školení na vlastních datech. Do budoucna můžete nad daty využít i konverzační analýzu v Data Studiu. Ta ale stojí na kvalitním a dobře popsaném modelu.',
    },
    {
      q: 'Potřebujeme Dataform, dbt, nebo stačí plánované dotazy?',
      a: 'Záleží na velikosti modelu a na tom, kdo ho bude spravovat. Pro tři až pět tabulek bez datového týmu stačí plánované dotazy přímo v BigQuery. Pro marketingový sklad s desítkami tabulek se hodí Dataform. Podle Googlu je to služba zdarma – platíte jen dotazy v BigQuery – a nabízí verzování v Gitu, testy a dokumentaci. Pokud váš datový tým už používá dbt, stavíme v dbt, aby měl jeden způsob práce. Volbu vždy zdůvodníme v měřicím plánu.',
    },
    {
      q: 'Komu budou patřit data a účty?',
      a: 'Vám. Export i model stavíme v projektu Google Cloudu, který i s platebním účtem patří vaší organizaci. My dostaneme role potřebné pro práci, ideálně časově omezené nebo přes skupinu, kterou spravujete, a po předání je můžete kdykoli odebrat. Zdrojový kód transformací předáme v repozitáři, ke kterému máte přístup. Žádná data neukládáme na vlastní infrastruktuře a nic nefakturujeme za „pronájem“ skladu.',
    },
    {
      q: 'Jak je to s GDPR a osobními údaji v BigQuery?',
      a: 'Do skladu neposíláme přímé identifikátory v čitelné podobě, tedy e-mail, telefon ani jméno. Pseudonymní identifikátory jako <code>user_pseudo_id</code> nebo <code>user_id</code> ale mohou patřit mezi osobní údaje. Proto volíme umístění dat v EU, omezujeme přístupy rolemi a nastavujeme expiraci starých dat. Doporučíme, co přidat do záznamů o zpracování a do smluv s Googlem. Nejsme advokátní kancelář – právní posouzení zajišťuje váš právník nebo pověřenec pro ochranu osobních údajů.',
    },
    {
      q: 'Jak dlouho to trvá a co od nás budete potřebovat?',
      a: 'Délka projektu závisí hlavně na počtu a typu zdrojů – GA4 a Google Ads napojíme rychle, vlastní ERP bez API dá víc práce. Od vás potřebujeme projekt v Google Cloudu s platebním účtem, nebo souhlas ho založit, roli Editor v GA4, přístupy pro čtení do reklamních systémů, export nebo API k e-shopu, ERP či CRM a kontakt na vývojáře nebo IT. Na začátku jednu až dvě hodiny na workshop, v průběhu kontrolní čísla z účetnictví – tržby a počet objednávek za vybraný měsíc – a na konci zpětnou vazbu k dashboardu.',
    },
    {
      q: 'Jak stanovíte cenu?',
      a: 'Cenu stanovíme po úvodní konzultaci jako pevnou částku za projekt. Rozhoduje počet a typ zdrojů – GA4 a Google Ads jsou rychlé, vlastní ERP bez API pracnější. Roli hraje i rozsah modelu, tedy kolik otázek má sklad zodpovědět, stav měření a počet dashboardů. Když nesedí sběr, začínáme auditem. Provozní náklady BigQuery platíte přímo Googlu. Na začátku je odhadneme a nastavíme limity, aby vás faktura nepřekvapila.',
    },
  ],

  relatedArticles: [
    {
      slug: 'ga4-bigquery-export',
      title: 'GA4 → BigQuery export: nastavení, struktura tabulek, limity a cena',
    },
    { slug: 'ga4-bigquery-sql', title: 'SQL pro GA4 v BigQuery: dvanáct dotazů pro marketéra' },
    {
      slug: 'zpracovani-dat-v-bigquery',
      title: 'Zpracování dat v BigQuery: od surových eventů k reportovacím tabulkám',
    },
    {
      slug: 'propojeni-dat-eshop-crm-ga4',
      title: 'Propojení dat z e-shopu a CRM s GA4: marže, vratky, LTV',
    },
    { slug: 'bigquery-cena', title: 'Kolik stojí BigQuery pro marketing' },
  ],

  relatedPages: ['sluzby/dashboardy-a-reporting', 'sluzby/audit-mereni', 'sluzby/mereni-konverzi'],

  contact: {
    formId: 'lp-bigquery',
    topics: ['bigquery'],
    title: 'Pojďme spojit vaše data do jednoho místa',
    lead: 'Napište nám e-mail, nebo vyplňte formulář. Na úvodní třicetiminutové konzultaci projdeme zdroje dat a řekneme, jestli BigQuery potřebujete už teď – a kolik by provoz stál u Googlu.',
    placeholder:
      'Např. chceme spojit GA4, náklady z Google Ads, Mety a Skliku a marže z ERP. Máme cca 3 000 objednávek měsíčně…',
    leadType: 'consultation',
  },

  schema: {
    name: 'BigQuery a datový sklad pro marketing',
    serviceType: 'Implementace BigQuery a datového skladu pro marketingová a e-commerce data',
    description:
      'Export GA4 do Google BigQuery, napojení nákladů z Google Ads, Meta a Skliku a dat z e-shopu, CRM a ERP, datový model pro marketing s relacemi, atribucí, maržemi a vratkami, kontrola nákladů a napojení dashboardů.',
    audience: 'E-shopy, velké firmy, B2B firmy',
  },
};
