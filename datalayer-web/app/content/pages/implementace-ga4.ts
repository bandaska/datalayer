import type { LandingPageContent } from '../types';

// Zdroj: seo-analyza/03_landing-pages/01_implementace-ga4.md (návrh v1, 8. 10. 2026).
// Dokud klient nedodá podklady, stránka neobsahuje: případovou studii (MiniCase),
// počet implementací a loga v trust baru, délky kroků a typickou délku projektu,
// ukázku měřicího plánu (CTA v sekci výstupů), formát a délku firemního školení
// ani kartu „GA4 pro vedení“. Kontaktní text nevyzývá „zavolejte“, dokud chybí
// telefon. Články odkazuje jen relatedArticles (zatím neexistují).

export const page: LandingPageContent = {
  path: 'sluzby/implementace-ga4',
  kind: 'service',
  navTitle: 'Implementace GA4',
  tagline: 'čísla, která sedí s tržbami',
  pictogram: 'ga4',
  menuGroup: 'sber',

  seo: {
    title: 'Implementace GA4 a nastavení Google Analytics | datalayer.cz',
    description:
      'GA4 ukazuje jiná čísla než e-shop? Nastavíme Google Analytics 4 od nuly i opravíme stávající: e-commerce, leady, Ads, BigQuery. Konzultace zdarma.',
  },

  hero: {
    eyebrow: 'ga4 · sběr dat',
    h1: 'Implementace GA4, která sedí s vašimi tržbami',
    subtitle:
      'Nastavíme Google Analytics 4 od nuly, nebo opravíme to, které už máte: e-commerce, leady, klíčové události a propojení s Google Ads, Search Console a BigQuery. Výsledek ověříme proti administraci e-shopu nebo CRM.',
    quickAnswer:
      '<strong>Co obnáší implementace GA4?</strong> Víc než vložit měřicí kód. Patří k ní měřicí plán, datová vrstva a nasazení přes Google Tag Manager, e-commerce a klíčové události, Consent Mode v2, filtry interní návštěvnosti, retence dat a propojení s Google Ads, Search Console a BigQuery. Hotové měření ověřujeme testovacími scénáři a porovnáním s tržbami v administraci.',
    primaryCta: { label: 'Konzultovat nastavení GA4', href: '#kontakt' },
    secondaryCta: { label: 'Co přesně nastavíme', href: '#co-nastavime' },
    microcopy:
      'Úvodní třicetiminutová konzultace zdarma · účty i data zůstávají vaše · odpovíme do jednoho pracovního dne',
  },

  trust: [
    'Ověření proti administraci – čísla porovnáme s e-shopem nebo CRM',
    'Měřicí plán a dokumentace – jako dokument, ne jen nastavení',
    'Účty i data patří vám – property, kontejner i BigQuery na firemním účtu',
  ],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Poznáváte se v některé z těchto situací?',
      lead: 'Když někdo GA4 jen „vloží“ do webu, čísla obvykle během prvních měsíců přestanou dávat smysl. Nejčastěji vidíme tohle:',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'GA4 ukazuje jiné tržby než e-shop',
              text: 'Čísla se liší a nikdo neví, které platí. Vedení pak nevěří ani reportům z reklam.',
              pictogram: 'ga4',
              tag: '≠ revenue',
            },
            {
              title: 'GA4 započítá nákup dvakrát',
              text: 'Po obnovení děkovací stránky nebo návratu z platební brány vznikne druhý <code>purchase</code>.',
              pictogram: 'eshop',
              tag: 'purchase ×2',
            },
            {
              title: 'Návštěvy z reklam padají do (not set)',
              text: 'GA4 ztratí zdroj návštěvy na platební bráně nebo při přechodu mezi doménami. Kampaně pak vypadají hůř, než jsou.',
              pictogram: 'warn',
              tag: '(not set)',
            },
            {
              title: 'Explorace končí po dvou měsících',
              text: 'Retence dat zůstala na dvou měsících, takže meziroční srovnání v exploracích nejde.',
              pictogram: 'monitor',
              tag: 'retention',
            },
            {
              title: 'Google Ads a GA4 počítají konverze jinak',
              text: 'Konverze jdou do Google Ads z importu GA4 i z vlastního tagu zároveň, nebo s jiným oknem a hodnotou.',
              pictogram: 'conversion',
              tag: 'key_event',
            },
            {
              title: 'Poptávky jen jako „děkovací stránka“',
              text: 'Nevíte, který formulář a která kampaň přinesly zakázku. Data končí v GA4, ne v CRM.',
              pictogram: 'lead',
              tag: 'generate_lead',
            },
          ],
        },
        {
          type: 'paragraphs',
          items: ['Nevíte, co z toho platí u vás? Začněte <a href="/sluzby/audit-mereni">auditem měření</a>.'],
        },
      ],
    },

    {
      id: 'co-nastavime',
      eyebrow: 'řešení',
      title: 'Co v GA4 nastavíme',
      lead: 'Každý projekt začíná měřicím plánem: jaké otázky mají data zodpovědět a jaké události k tomu potřebujeme. Pak nastavíme tohle:',
      tone: 'dark',
      blocks: [
        {
          type: 'list',
          style: 'check',
          title: 'Základ property – aby data byla čistá od prvního dne',
          items: [
            'Účet a property na jméno firmy, měna CZK i měny dalších trhů, časové pásmo a retence dat na maximum, u standardní GA4 čtrnáct měsíců.',
            'Filtr interní a vývojářské návštěvnosti. Nejdřív ho necháme v režimu <em>Testování</em> a aktivujeme ho až po ověření, protože aktivní filtr mění data trvale.',
            'Filtr hostitelů, novinka GA4 z roku 2026: data jen z vlastních domén, bez spamu a kopií webu.',
            'Nežádoucí referraly, tedy platební brány GoPay, Comgate, ThePay a banky. K tomu redakce e-mailů a parametrů URL, aby do GA4 netekly osobní údaje.',
            'Seskupení kanálů pro české zdroje jako Heureka, Zboží.cz, Sklik nebo e-mailing a kontrola nového kanálu AI Assistant.',
          ],
        },
        {
          type: 'list',
          style: 'check',
          title: 'E-commerce měření – celý nákupní trychtýř',
          items: [
            'Doporučené události GA4 od zobrazení seznamu produktů po nákup: <code>view_item_list</code>, <code>select_item</code>, <code>view_item</code>, <code>add_to_cart</code>, <code>remove_from_cart</code>, <code>view_cart</code>, <code>begin_checkout</code>, <code>add_shipping_info</code>, <code>add_payment_info</code>, <code>purchase</code>, volitelně promo akce a seznam přání.',
            'Jednoznačné <code>transaction_id</code> proti zdvojení nákupů a parametr <code>customer_type</code>, který odliší první nákup zákazníka od opakovaného.',
            'Shoda hodnoty: dohodneme, jestli posílat tržby s DPH, nebo bez. Google doporučuje hodnotu bez dopravy a daně. Stejnou logiku pak nastavíme v Google Ads i Meta.',
            'Vratky a storna posíláme ze serveru jako <code>refund</code>, protože prohlížeč je spolehlivě nezachytí.',
          ],
        },
        {
          type: 'list',
          style: 'check',
          title: 'Klíčové události a leady – měříme to, co je pro vás obchod',
          items: [
            'Tři až osm klíčových událostí místo „všechno je konverze“. Mikrokonverze necháme jako běžné události: klik na telefon nebo e-mail, registraci a přihlášení k newsletteru.',
            'Poptávkové formuláře měříme jako <code>generate_lead</code> s identifikací formuláře a tématu. U B2B přidáme i události z CRM, třeba kvalifikovaný lead nebo uzavřený obchod, abyste mohli hodnotit kampaně podle zakázek.',
            'Jednotné názvy událostí a parametrů podle měřicího plánu, žádné <code>Klik_Tlacitko_2</code>.',
          ],
        },
        {
          type: 'list',
          style: 'check',
          title: 'Propojení – data tam, kde je potřebujete',
          items: [
            '<strong>Google Ads:</strong> import klíčových událostí, sdílení publik pro remarketing a automatické značkování. Ohlídáme, aby Google Ads nepočítal stejnou konverzi dvakrát, z importu GA4 i z vlastního tagu.',
            '<strong>Search Console:</strong> organické dotazy a vstupní stránky přímo v GA4.',
            '<strong>BigQuery:</strong> denní export nebo streaming surových událostí bez limitů rozhraní GA4. Podrobnosti najdete na stránce <a href="/sluzby/bigquery">BigQuery a datový sklad</a>.',
            '<strong>Data Studio (dříve Looker Studio) a Power BI:</strong> napojení pro reporting. Víc na stránce <a href="/sluzby/dashboardy-a-reporting">Dashboardy a reporting</a>.',
          ],
        },
        {
          type: 'list',
          style: 'check',
          title: 'Identita a domény – jeden zákazník, ne tři uživatelé',
          items: [
            'Měření napříč doménami, třeba e-shop s rezervačním systémem nebo více jazykových domén, přes nastavení domén v Google tagu.',
            'User-ID pro přihlášené uživatele: interní ID, nikdy e-mail ani jiný údaj, podle kterého by třetí strana poznala, o koho jde.',
            'Volba identity pro přehledy, tedy blended, nebo observed, podle toho, jak chcete data číst.',
          ],
        },
        {
          type: 'list',
          style: 'check',
          title: 'Souhlas – legálně a bez zbytečné ztráty dat',
          items: [
            'Consent Mode v2 se všemi čtyřmi signály: <code>ad_storage</code>, <code>analytics_storage</code>, <code>ad_user_data</code> a <code>ad_personalization</code>. Napojíme ho na cookie lištu.',
            'Kontrola v administraci GA4 v sekci Nastavení souhlasu. Volbu režimu basic, nebo advanced probereme společně.',
            'Lištu a právní stránku řeší samostatná služba <a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode v2</a>.',
          ],
        },
      ],
    },

    {
      id: 'situace',
      eyebrow: 'situace',
      title: 'Kde s GA4 právě jste?',
      tone: 'light',
      blocks: [
        {
          type: 'tabs',
          group: 'ga4_situace',
          items: [
            {
              id: 'novy',
              label: 'Začínáme od nuly',
              paragraphs: [
                'Nový web nebo e-shop je ideální chvíle. Datovou vrstvu zadáme vývojářům rovnou do vývoje, takže měření bude hotové se spuštěním webu, ne o tři měsíce později.',
              ],
            },
            {
              id: 'oprava',
              label: 'GA4 máme, ale nevěříme mu',
              paragraphs: [
                'Nejdřív zjistíme, co je špatně. Většinou jde o kombinaci chyb: zdvojené nákupy, chybějící souhlas a ztracené zdroje návštěv. Opravujeme ve stávající property, aby zůstala historie.',
                'Kontrolu GA4 zahrnuje <a href="/sluzby/audit-mereni">audit měření</a>.',
              ],
            },
            {
              id: 'migrace',
              label: 'Měníme platformu nebo doménu',
              paragraphs: [
                'Redesign, nová platforma nebo doména: při migraci měření vypadává nejčastěji. Připravíme seznam událostí, který musí nový web splnit, otestujeme ho na testovacím prostředí a po spuštění porovnáme data se starým webem.',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'jak-tecou-data',
      eyebrow: 'diagram',
      title: 'Jak data tečou z webu do GA4 a dál',
      lead: 'E-shop nebo web zapisuje události do datové vrstvy, Google Tag Manager je podle souhlasu návštěvníka pošle do GA4 a GA4 je sdílí s Google Ads, Search Console a BigQuery. Na konci vždy kontrolujeme, že čísla odpovídají administraci nebo CRM.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Schéma toku dat: datová vrstva webu → Google Tag Manager se souhlasem z cookie lišty → GA4 → Google Ads, Search Console a BigQuery → reporting. Nakonec porovnáme čísla v GA4 s administrací e-shopu nebo CRM.',
          columns: [
            {
              label: 'Web / e-shop',
              items: ['dataLayer', 'view_item · add_to_cart', 'purchase · generate_lead'],
            },
            {
              label: 'Google Tag Manager',
              items: ['Google tag', 'události GA4'],
              note: 'Cookie lišta předává souhlas přes Consent Mode v2.',
            },
            {
              label: 'GA4 property',
              items: ['klíčové události', 'filtry', 'retence'],
              note: 'Kontrola shody: čísla porovnáme s administrací e-shopu nebo CRM.',
            },
            {
              label: 'Propojení',
              items: [
                'Google Ads – import klíčových událostí, publika',
                'Search Console – organické dotazy',
                'BigQuery – surová data bez limitů rozhraní',
              ],
            },
            {
              label: 'Reporting',
              items: ['Data Studio (dříve Looker Studio)', 'Power BI'],
            },
          ],
        },
      ],
    },

    {
      id: 'opravit-nebo-znovu',
      eyebrow: 'srovnání',
      title: 'Opravit stávající GA4, nebo založit novou property?',
      lead: 'Většinou opravujeme existující property, protože v ní zůstane historie. Novou zakládáme, jen když platí některý bod v pravém sloupci.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          head: ['Kritérium', 'Opravit stávající property', 'Založit novou property'],
          highlightColumn: 1,
          rows: [
            [
              'Vlastnictví',
              'Property je na firemním účtu a máte administrátorský přístup',
              'Property patří agentuře nebo bývalému dodavateli a převod nejde',
            ],
            [
              'Historie',
              'Historická data mají hodnotu, třeba pro meziroční srovnání',
              'Historie je tak chybná, že by spíš škodila, například celý rok dvojnásobné tržby',
            ],
            [
              'Struktura',
              'Stačí přejmenovat nebo přidat události, filtry a propojení',
              'Jedna property míchá nesouvisející weby, testovací a produkční data',
            ],
            [
              'Velká firma',
              'Stačí upravit oprávnění a dokumentaci',
              'Firma potřebuje novou architekturu, třeba sub-property a roll-up v GA4 360',
            ],
            [
              'Co uděláme',
              'Opravy a anotace v GA4 s datem změny, aby bylo vidět, od kdy jsou data spolehlivá',
              'Starou a novou property necháme jeden až tři měsíce běžet souběžně, pak přepneme reporty',
            ],
          ],
        },
      ],
    },

    {
      id: 'limity-ga4',
      eyebrow: 'limity',
      title: 'Na jaké limity GA4 myslíme dopředu',
      lead: 'Podle těchto limitů rozhodujeme, kdy navrhnout export do BigQuery a kdy GA4 360.',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          caption:
            'Limity platí pro jednu property, pokud tabulka neuvádí jinak. Zdroj: nápověda Google Analytics, stav v říjnu 2026.',
          head: ['Limit', 'GA4 standard', 'GA4 360', 'Co to znamená v praxi'],
          rows: [
            [
              'Uchovávání dat pro explorace',
              '2 nebo 14 měsíců, u Large a XL property jen 2',
              'až 50 měsíců (2, 14, 26, 38 nebo 50), u XL property jen 2',
              'Delší historii na úrovni událostí řešíme exportem do BigQuery. Standardní agregované přehledy retence neomezuje.',
            ],
            [
              'Parametry na jednu událost',
              '25',
              '100',
              'Událost navrhujeme úsporně, zbytek patří do datové vrstvy a BigQuery.',
            ],
            [
              'Vlastní dimenze s rozsahem události / uživatele / položky',
              '50 / 25 / 10',
              '125 / 100 / 25',
              'Registrujeme jen dimenze, které opravdu používáte v reportech.',
            ],
            [
              'Uživatelské vlastnosti',
              '25',
              '100',
              'Typ zákazníka, segment B2B nebo přihlášení. Žádné osobní údaje.',
            ],
            ['Klíčové události', '30', '50', 'Za klíčové označíme jen obchodně důležité akce.'],
            ['Publika', '100', '400', 'Publika pro remarketing navrhujeme s Google Ads specialistou.'],
            [
              'Délka názvu události / parametru',
              '40 znaků',
              '40 znaků',
              'Názvy podle měřicího plánu, ve formátu <code>snake_case</code>.',
            ],
            [
              'Délka hodnoty parametru',
              '100 znaků (<code>page_location</code> 1 000)',
              '500 znaků (<code>page_location</code> 1 000)',
              'Dlouhé texty, třeba názvy produktů, zkracujeme vědomě.',
            ],
            [
              'Denní export do BigQuery',
              '1 mil. událostí denně',
              'miliardy událostí',
              'Velké e-shopy řeší streaming, nebo GA4 360.',
            ],
            [
              'Vzorkování v exploracích',
              '10 mil. událostí na dotaz',
              '1 mld. událostí na dotaz',
              'Přesná čísla pro velké weby počítáme v BigQuery.',
            ],
          ],
        },
      ],
    },

    {
      id: 'co-dostanete',
      eyebrow: 'výstupy',
      title: 'Co od nás dostanete',
      lead: 'Na konci projektu nedostanete jen „hotové GA4“, ale i dokumenty, podle kterých může měření převzít kdokoli jiný.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'Měřicí plán',
              text: 'Otázky → metriky → události → kde je v GA4 najdete.',
              tag: 'measurement-plan.xlsx',
            },
            {
              title: 'Specifikace datové vrstvy',
              text: 'Zadání pro vývojáře s ukázkami kódu. Víc o službě <a href="/sluzby/datova-vrstva">Datová vrstva</a>.',
              tag: 'datalayer-spec.md',
            },
            {
              title: 'GTM kontejner',
              text: 'Verze s popisem změn a jednotné názvy.',
              tag: 'gtm-container v12',
            },
            {
              title: 'GA4 property',
              text: 'Checklist konfigurace: retence, filtry, kanály a propojení.',
              tag: 'ga4-config.pdf',
            },
            {
              title: 'Testovací protokol',
              text: 'Nákup kartou, převodem i s kupónem, návrat z platební brány a obnovení děkovací stránky.',
              tag: 'qa-protocol.pdf',
            },
            {
              title: 'Porovnání s administrací nebo CRM',
              text: 'Po sedmi až čtrnácti dnech porovnáme GA4 s objednávkami či poptávkami a vysvětlíme rozdíly.',
              tag: 'reconciliation.xlsx',
            },
            {
              title: 'Předání',
              text: 'Hodina až hodina a půl pro marketing a vedení: kde co najdete.',
              tag: 'handover',
            },
            {
              title: 'Volitelně',
              text: 'Export do BigQuery, dashboard v Data Studiu (dříve Looker Studio) nebo školení GA4.',
              tag: '+ optional',
            },
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak implementace probíhá a co od vás potřebujeme',
      lead: 'Nejvíc času obvykle zabere úprava datové vrstvy na straně vývojářů, ne nastavení GA4.',
      tone: 'dark',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Úvodní konzultace',
              text: 'Za třicet minut zdarma projdeme cíle, web a současný stav měření.',
              fromClient: 'URL webu a kontakt na člověka, který o měření rozhoduje.',
            },
            {
              title: 'Analýza stavu',
              text: 'Zkontrolujeme GA4, GTM, souhlas a reklamní účty.',
              fromClient: 'Přístupy pro čtení do GA4, GTM a Google Ads.',
            },
            {
              title: 'Měřicí plán a specifikace',
              text: 'Navrhneme události, parametry a klíčové události a připravíme zadání pro vývojáře.',
              fromClient: 'Schválení KPI a kontakt na vývojáře.',
            },
            {
              title: 'Implementace',
              text: 'Nastavíme GTM a GA4, propojení, filtry a souhlas.',
              fromClient: 'Nasazení datové vrstvy u vývojářů a testovací prostředí.',
            },
            {
              title: 'Validace a spuštění',
              text: 'Projdeme testovací scénáře a publikujeme. Pak sedm až čtrnáct dní sbíráme data a porovnáme je s administrací.',
              fromClient: 'Testovací objednávky a jejich storno, export objednávek nebo leadů.',
            },
            {
              title: 'Předání',
              text: 'Dokumentaci předáme na společné schůzce, volitelně se školením.',
              fromClient: 'Účast lidí, kteří budou s daty pracovat.',
            },
          ],
        },
      ],
    },

    {
      id: 'pro-koho',
      eyebrow: 'pro koho',
      title: 'Co je jinak u e-shopu, B2B a velké firmy',
      tone: 'light',
      blocks: [
        {
          type: 'tabs',
          group: 'ga4_segment',
          items: [
            {
              id: 'eshop',
              label: 'E-shop',
              paragraphs: [
                'Měříme celý nákupní trychtýř včetně vratek a typu zákazníka. Integrace platforem Shoptet, Upgates, Shopify nebo WooCommerce umějí základ, ale často posílají jiné hodnoty nebo se bijí s kódem v GTM. Rozhodneme, kdy je použít a kdy je nahradit vlastní datovou vrstvou.',
                'Víc na stránce <a href="/reseni/e-shopy">Měření pro e-shopy</a>.',
              ],
            },
            {
              id: 'b2b',
              label: 'B2B a leady',
              paragraphs: [
                'Formulář není konec cesty. Každý formulář odlišíme přes <code>form_id</code>, přidáme téma poptávky a připravíme návrat dat z CRM, tedy kvalifikovaný lead a zakázku. Google Ads tak může optimalizovat na obchody, ne na vyplněné formuláře.',
                'Víc na stránce <a href="/reseni/b2b-a-lead-generation">Měření pro B2B a lead generation</a>.',
              ],
            },
            {
              id: 'velka-firma',
              label: 'Velká firma',
              paragraphs: [
                'Více domén, týmů a dodavatelů potřebuje pravidla: pojmenování, oprávnění podle rolí, dokumentaci a schvalování změn. Pomůžeme rozhodnout, jestli dává smysl GA4 360 a jak napojit BigQuery.',
                'Víc na stránce <a href="/reseni/velke-firmy">Měření pro velké firmy</a>.',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'skoleni',
      eyebrow: 'školení',
      title: 'Firemní školení GA4 pro váš tým',
      lead: 'Školíme na vlastních datech firmy. Ukážeme, kde v GA4 najdete odpovědi na otázky, které řešíte každý týden, a co čísla znamenají.',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'Předávací workshop',
              tag: 'součást implementace',
              text: 'Hodina až hodina a půl pro marketing: kde co v GA4 najdete, jak číst e-commerce a leady a co dělat, když čísla nesedí.',
            },
            {
              title: 'Firemní školení GA4 na vašich datech',
              text: 'Pro marketing a PPC: přehledy a explorace, trychtýře, publika, atribuce a UTM parametry. Obsah přizpůsobíme tomu, kdo s daty pracuje.',
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Kolik stojí implementace GA4 a z čeho se skládá cena?',
      a: 'Cenu určuje rozsah, ne balíček. Rozhoduje hlavně stav webu: jestli už má datovou vrstvu, nebo ji vývojáři musí teprve připravit. Dál rozhoduje počet typů konverzí, třeba nákupy, formuláře a registrace, počet domén a platforem, které měření propojuje, a to, jestli chcete i BigQuery, dashboardy nebo školení. Po úvodní konzultaci a krátké analýze dostanete nabídku s pevným rozsahem a seznamem výstupů. GA4 i GTM jsou zdarma. Platíte jen za BigQuery nad rámec bezplatných limitů, nebo za licenci GA4 360.',
    },
    {
      q: 'Jak dlouho implementace GA4 trvá?',
      a: 'Záleží hlavně na stavu webu. Nejvíc času obvykle nezabere nastavení GA4 a GTM, ale úprava datové vrstvy u vývojářů a sedm až čtrnáct dní sběru dat, kdy porovnáváme GA4 s administrací. Když web už má datovou vrstvu podle schématu GA4, jde to rychleji. Velké firmy s více doménami a schvalováním změn počítají s delším projektem.',
    },
    {
      q: 'Opravíte GA4, které už máme, nebo musíme začít znovu?',
      a: 'Většinou opravujeme stávající property, protože v ní zůstanou historická data. Do GA4 přidáme anotaci s datem oprav, aby bylo jasné, od kdy čísla platí. Novou property doporučujeme, jen když stará nepatří vám a nejde ji převést, když míchá nesouvisející weby, nebo když jsou historická data tak chybná, že by škodila. Pak necháme obě běžet souběžně, dokud nepřepneme reporty.',
    },
    {
      q: 'Proč GA4 ukazuje jiná čísla než e-shop nebo Google Ads?',
      a: 'Nějaký rozdíl je normální. GA4 nevidí návštěvníky, kteří odmítli souhlas nebo měření blokují, ani objednávky po telefonu a storna. Google Ads připisuje konverze k datu kliknutí a podle jiného atribučního modelu. Problém je rozdíl, který nikdo neumí vysvětlit nebo který se mění ze dne na den. Pak jde obvykle o zdvojené nákupy, chybějící souhlas, ztracené zdroje návštěv nebo jinou definici hodnoty.',
    },
    {
      q: 'Je GA4 v souladu s GDPR? Potřebujeme cookie lištu?',
      a: 'GA4 ukládá do prohlížeče analytické cookies. Podle § 89 odst. 3 zákona č. 127/2005 Sb. je k ukládání údajů, které nejsou nezbytné pro poskytnutí služby, potřeba předchozí souhlas. Měření proto napojujeme na cookie lištu a Consent Mode v2 a do GA4 neposíláme osobní údaje, a to ani v URL. Nejsme advokátní kancelář a tahle odpověď není právní rada. Zásady a texty lišty by měl posoudit váš právník. Technickou část řeší služba <a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode v2</a>.',
    },
    {
      q: 'Jak dlouho GA4 uchovává data a co s tím?',
      a: 'Standardní GA4 uchovává data na úrovni událostí dva, nebo čtrnáct měsíců, velké property jen dva. Omezení platí pro explorace a trychtýře, standardní agregované přehledy neovlivňuje. Pokud chcete data držet déle nebo je propojit s dalšími zdroji, doporučujeme denní export do BigQuery. Data pak leží ve firemním projektu Google Cloud bez časového limitu. GA4 360 uchová data až padesát měsíců.',
    },
    {
      q: 'Měříte GA4 i na Shoptetu, Shopify nebo WooCommerce?',
      a: 'Ano. Vestavěné integrace platforem stačí na základ, ale často posílají jinou hodnotu, než potřebujete, třeba s DPH nebo bez dopravy. Jindy jim chybí parametry produktů nebo posílají stejné události jako kód v GTM. Zkontrolujeme, co integrace posílá, a rozhodneme, jestli ji použít, rozšířit, nebo nahradit vlastní datovou vrstvou. Víc na stránce <a href="/reseni/e-shopy">Měření pro e-shopy</a>.',
    },
    {
      q: 'Co od nás budete potřebovat?',
      a: 'Na začátku přístup pro čtení do GA4, Google Tag Manageru a Google Ads, případně i do Meta a Skliku, a kontakt na správce webu. Pro implementaci práva pro úpravy v GA4 a GTM, testovací prostředí a možnost udělat testovací objednávku nebo odeslat testovací formulář. Pro porovnání dat export objednávek či poptávek za stejné období. Od marketingu a vedení stačí jedna schůzka nad měřicím plánem.',
    },
    {
      q: 'Komu budou patřit účty a data?',
      a: 'Vám. Property GA4, kontejner GTM i projekt BigQuery zakládáme na firemních účtech a my v nich máme jen oprávnění, která nám přidělíte. Po skončení spolupráce je odeberete a nic nemusíte převádět. Pokud dnes účty patří agentuře nebo bývalému dodavateli, pomůžeme s převodem administrátorských práv, nebo s bezpečným přechodem na nové účty.',
    },
    {
      q: 'Potřebujeme Google Analytics 360?',
      a: 'Většina e-shopů a B2B firem vystačí se standardní GA4, pokud data dlouhodobě ukládá do BigQuery. GA4 360 dává smysl, když narazíte na limity: denní export nad milion událostí, uchovávání v GA4 déle než čtrnáct měsíců, víc než třicet klíčových událostí nebo sto publik, sub-property pro značky či trhy nebo smluvní SLA. Rozhodnutí podložíme čísly z vaší property.',
    },
    {
      q: 'Co je klíčová událost a čím se liší od konverze?',
      a: 'Klíčová událost je v GA4 událost, kterou jste označili za důležitou pro byznys, třeba nákup nebo odeslání poptávky. Dřív jí GA4 říkalo konverze a Universal Analytics „cíl“. Konverzemi dnes Google nazývá akce, které sdílíte s Google Ads a podle kterých Google Ads optimalizuje kampaně. Z klíčových událostí vybereme ty, které mají jít do Google Ads, a ohlídáme, aby je Google Ads nepočítal dvakrát.',
    },
    {
      q: 'Nabízíte školení GA4 pro náš tým?',
      a: 'Ano. Krátký předávací workshop patří ke každé implementaci. Navíc nabízíme firemní školení GA4 na vašich datech: přehledy, explorace, trychtýře, publika, atribuce a UTM parametry. Obsah přizpůsobíme tomu, kdo s daty pracuje. Pro PPC specialisty bude jiný než pro vedení.',
    },
  ],

  relatedArticles: [
    { slug: 'nastaveni-ga4-pruvodce', title: 'Nastavení GA4 krok za krokem' },
    { slug: 'merici-plan', title: 'Měřicí plán: jak naplánovat měření' },
    { slug: 'proc-nesedi-data', title: 'Proč nesedí čísla v GA4' },
    { slug: 'ga4-pro-eshopove-platformy', title: 'GA4 na e-shopových platformách' },
    { slug: 'ga4-bigquery-export', title: 'GA4 → BigQuery export' },
  ],

  relatedPages: ['sluzby/datova-vrstva', 'sluzby/google-tag-manager', 'sluzby/bigquery'],

  contact: {
    formId: 'lp-ga4',
    topics: ['ga4'],
    title: 'Nastavíme GA4 tak, aby čísla seděla s tržbami',
    lead: 'Napište nám, nebo vyplňte formulář. Na úvodní třicetiminutové konzultaci projdeme GA4 a řekneme, co opravit jako první. Nezávazně a zdarma.',
    placeholder: 'Např. máme GA4, ale e-commerce data nesedí s administrací e-shopu…',
    leadType: 'consultation',
  },

  schema: {
    name: 'Implementace GA4',
    serviceType: 'Implementace a nastavení Google Analytics 4',
    description:
      'Nastavení Google Analytics 4 od nuly i oprava existující property: měřicí plán, e-commerce a klíčové události, Consent Mode v2, propojení s Google Ads, Search Console a BigQuery, ověření proti administraci e-shopu nebo CRM.',
    audience: 'E-shopy, B2B a lead-gen firmy, velké firmy',
  },
};
