import type { PageInput } from '../../schema';

// Štíhlá šablona LP podle vyhodnocení webu (9. října 2026, kap. 3.1 a 5.1)
// a vzorové stránky server-side-tracking.ts. Zdroj obsahu:
// seo-analyza/03_landing-pages/01_implementace-ga4.md. Rozpis nastavení
// property a tři hlavní limity GA4 (dřív tabulka s deseti řádky) zůstávají ve
// sbalených Technických detailech, dokud nevyjde článek D1. Taby „Kde s GA4
// právě jste?“ nahradila jedna věta v postupu, firemní školení je karta ve
// výstupech, taby segmentů stránka nemá. Dokud klient nedodá podklady, stránka
// neobsahuje případovou studii, počet implementací a loga, délky kroků
// a typickou délku projektu, ukázku měřicího plánu ani formát a délku školení.
// Kontaktní text nevyzývá „zavolejte“, dokud chybí telefon.

export const page: PageInput = {
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
      'Implementace GA4 je víc než vložit měřicí kód. Nastavíme Google Analytics 4 od nuly, nebo opravíme to, které už máte: měřicí plán, datovou vrstvu, e-commerce, leady, Consent Mode v2 a propojení s Google Ads, Search Console a BigQuery. Výsledek ověříme testovacími scénáři a porovnáním s administrací e-shopu nebo s CRM.',
    primaryCta: { label: 'Konzultovat nastavení GA4', href: '#kontakt' },
    secondaryCta: { label: 'Co přesně nastavíme', href: '#vystupy' },
    microcopy: 'Úvodní třicetiminutová konzultace zdarma · odpovíme do jednoho pracovního dne',
  },

  trust: ['Čísla ověříme proti administraci nebo CRM', 'Měřicí plán a dokumentace k předání', 'Účty i data zůstávají vaše'],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Poznáváte se?',
      lead: 'Když někdo GA4 jen „vloží“ do webu, čísla obvykle během prvních měsíců přestanou dávat smysl. Nevíte, co z toho platí u vás? Začněte <a href="/sluzby/audit-mereni">auditem měření</a>.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'GA4 ukazuje jiné tržby než e-shop',
              text: 'Čísla se liší, nikdo neví, které platí, a vedení pak nevěří ani reportům z reklam.',
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
              text: 'GA4 ztratí zdroj návštěvy na platební bráně nebo mezi doménami a kampaně pak vypadají hůř, než jsou.',
              pictogram: 'warn',
              tag: '(not set)',
            },
            {
              title: 'Poptávky jen jako „děkovací stránka“',
              text: 'Nevíte, který formulář a která kampaň přinesly zakázku, protože data končí v GA4, ne v CRM.',
              pictogram: 'lead',
              tag: 'generate_lead',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      eyebrow: 'výstupy',
      title: 'Co uděláme a co dostanete',
      lead: 'Ne jen „hotové GA4“, ale i dokumenty, podle kterých může měření převzít kdokoli jiný.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'measurement-plan.xlsx',
              title: 'Měřicí plán',
              text: 'Jaké otázky mají data zodpovědět, jaké události k tomu potřebujeme a kde je v GA4 najdete.',
            },
            {
              tag: 'datalayer-spec.md',
              title: 'Specifikace datové vrstvy',
              text: 'Zadání pro vývojáře s ukázkami kódu. Víc o službě <a href="/sluzby/datova-vrstva">Datová vrstva</a>.',
            },
            {
              tag: 'gtm · ga4-config.pdf',
              title: 'GA4 a GTM podle plánu',
              text: 'E-commerce, leady, tři až osm klíčových událostí, filtry, Consent Mode v2 a propojení. Kontejner má verze s popisem změn.',
            },
            {
              tag: 'qa-protocol.pdf',
              title: 'Testovací protokol',
              text: 'Nákup kartou, převodem i s kupónem, návrat z platební brány a obnovení děkovací stránky.',
            },
            {
              tag: 'reconciliation.xlsx',
              title: 'Porovnání s administrací nebo CRM',
              text: 'GA4 porovnáme s objednávkami či poptávkami za stejné období a vysvětlíme rozdíly.',
            },
            {
              tag: '+ optional',
              title: 'Volitelně: školení GA4',
              text: 'Firemní školení na vašich datech, export do BigQuery nebo dashboard v Data Studiu (dříve Looker Studio).',
            },
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      eyebrow: 'diagram',
      title: 'Jak data tečou z webu do GA4 a dál',
      lead: 'Web zapisuje události do datové vrstvy, Google Tag Manager je podle souhlasu návštěvníka pošle do GA4 a GA4 je sdílí s Google Ads, Search Console a BigQuery.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Schéma toku dat: web → Google Tag Manager se souhlasem z cookie lišty → GA4 → propojení a reporting. Na konci porovnáme čísla v GA4 s administrací e-shopu nebo CRM.',
          columns: [
            { label: 'Web / e-shop', items: ['dataLayer', 'view_item · add_to_cart', 'purchase · generate_lead'] },
            {
              label: 'Google Tag Manager',
              items: ['Google tag', 'události GA4'],
              note: 'Cookie lišta předává souhlas přes Consent Mode v2.',
            },
            { label: 'GA4 property', items: ['klíčové události', 'filtry', 'retence'] },
            {
              label: 'Propojení a reporting',
              items: [
                'Google Ads – klíčové události a publika',
                'Search Console – organické dotazy',
                'BigQuery – surová data bez limitů rozhraní',
                'Data Studio a Power BI',
              ],
            },
          ],
        },
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Souhlas.</strong> Consent Mode v2 se všemi čtyřmi signály napojíme na cookie lištu, režim basic, nebo advanced probereme společně.',
            '<strong>Čistá data.</strong> Filtry vyřadí interní návštěvnost a cizí domény a platební brána nepřebije zdroj návštěvy.',
            '<strong>Konverze jednou.</strong> Ohlídáme, aby Google Ads nepočítal stejnou konverzi dvakrát, z importu GA4 i z vlastního tagu.',
          ],
        },
      ],
    },

    {
      id: 'rozhodnuti',
      eyebrow: 'rozhodnutí',
      title: 'Opravit stávající GA4, nebo založit novou property?',
      lead: 'Většinou opravujeme property, kterou už máte, protože v ní zůstane historie, a opravy označíme v GA4 anotací s datem. Při přechodu na novou necháme obě property jeden až tři měsíce běžet souběžně, pak přepneme reporty.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'Opravíme stávající, když…',
              text: '',
              bullets: [
                'property je na firemním účtu a máte administrátorský přístup',
                'historická data mají hodnotu, třeba pro meziroční srovnání',
                'stačí přidat události, filtry a propojení',
                'velké firmě stačí upravit oprávnění a dokumentaci',
              ],
            },
            {
              title: 'Založíme novou, když…',
              text: '',
              bullets: [
                'property patří agentuře nebo bývalému dodavateli a převod nejde',
                'historie je tak chybná, že by spíš škodila',
                'jedna property míchá weby, které spolu nesouvisejí, nebo testovací a produkční data',
                'velká firma potřebuje novou architekturu, třeba roll-up v GA4 360',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak implementace probíhá',
      lead: 'Stejných pět kroků jako u všech našich služeb, ať začínáte od nuly, opravujete stávající GA4, nebo měníte platformu. Nejvíc času obvykle zabere úprava datové vrstvy u vývojářů, ne nastavení GA4.',
      tone: 'white',
      blocks: [
        {
          type: 'process',
          implementation:
            'Nastavíme GTM a GA4: e-commerce a klíčové události, filtry, Consent Mode v2 a propojení s Google Ads, Search Console a BigQuery.',
          implementationFromClient: 'datová vrstva od vývojářů a testovací prostředí',
        },
      ],
    },

    {
      id: 'jak-poznate',
      eyebrow: 'kontrola',
      title: 'Jak poznáte, že GA4 funguje',
      lead: 'Po spuštění sedm až čtrnáct dní sbíráme data a porovnáme je s administrací e-shopu nebo s CRM. Měření je v pořádku, když platí tohle:',
      tone: 'dark',
      layout: 'split',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            'rozdíl tržeb proti administraci umíme vysvětlit, třeba odmítnutým souhlasem nebo storny',
            'žádný nákup dvakrát, ani po obnovení děkovací stránky',
            'návštěvy z kampaní mají zdroj, ne (not set)',
            'Google Ads a GA4 počítají každou konverzi jednou a se stejnou hodnotou',
          ],
        },
      ],
    },
  ],

  techDetails: {
    summary: 'Technické detaily: nastavení property a limity GA4',
    blocks: [
      {
        type: 'list',
        style: 'check',
        title: 'Co nastavíme v property',
        items: [
          'Retenci dat na maximum, u standardní GA4 čtrnáct měsíců. Filtr interní návštěvnosti necháme nejdřív v režimu <em>Testování</em>, protože aktivní filtr mění data trvale.',
          'Filtr hostitelů, aby GA4 bralo data jen z vlastních domén, a nežádoucí referraly pro platební brány GoPay, Comgate, ThePay a banky.',
          'Redakci e-mailů a parametrů URL, aby do GA4 netekly osobní údaje, a seskupení kanálů pro Heureku, Zboží.cz, Sklik a e-mailing včetně kontroly kanálu AI Assistant.',
          'Jednoznačné <code>transaction_id</code>, parametr <code>customer_type</code> pro první a opakovaný nákup a vratky ze serveru jako <code>refund</code>. Hodnotu posíláme s DPH, nebo bez podle dohody, stejně v GA4, Google Ads i Metě.',
          'Měření napříč doménami, User-ID jen s interním ID, nikdy s e-mailem, a volbu identity pro přehledy.',
        ],
      },
      {
        type: 'list',
        style: 'bullet',
        title: 'Limity GA4, se kterými počítáme',
        items: [
          'Explorace: standardní GA4 drží data na úrovni událostí dva, nebo čtrnáct měsíců, velké property jen dva, GA4 360 až padesát měsíců. Delší historii řešíme exportem do BigQuery, agregované přehledy retence neomezuje.',
          'Denní export do BigQuery: standardní GA4 zvládne milion událostí denně, GA4 360 miliardy. Velké e-shopy řeší streaming, nebo GA4 360.',
          'Na jednu událost pětadvacet parametrů, na property třicet klíčových událostí a sto publik, u GA4 360 sto parametrů, padesát klíčových událostí a 400 publik. Události proto navrhujeme úsporně.',
        ],
      },
      {
        type: 'paragraphs',
        items: ['Zdroj limitů: nápověda Google Analytics, stav v říjnu 2026.'],
      },
    ],
  },

  faq: [
    {
      q: 'Kolik stojí implementace GA4?',
      a: 'Cenu určuje rozsah, ne balíček: hlavně jestli web už má datovou vrstvu, kolik typů konverzí a domén měříme a jestli chcete i BigQuery, dashboardy nebo školení. Po úvodní konzultaci a krátké analýze dostanete nabídku s pevným rozsahem a seznamem výstupů. GA4 i GTM jsou zdarma, platíte jen BigQuery nad rámec bezplatných limitů, nebo licenci GA4 360.',
    },
    {
      q: 'Jak dlouho implementace GA4 trvá?',
      a: 'Záleží hlavně na stavu webu. Nejvíc času obvykle nezabere nastavení GA4 a GTM, ale úprava datové vrstvy u vývojářů a sedm až čtrnáct dní sběru dat, kdy porovnáváme GA4 s administrací. Když web už má datovou vrstvu podle schématu GA4, jde to rychleji.',
    },
    {
      q: 'Komu budou patřit účty a data?',
      a: 'Vám. Property GA4, kontejner GTM i projekt BigQuery zakládáme na firemních účtech a my v nich máme jen oprávnění, která nám přidělíte. Pokud dnes účty patří agentuře nebo bývalému dodavateli, pomůžeme s převodem administrátorských práv, nebo s bezpečným přechodem na nové účty.',
    },
    {
      q: 'Je GA4 v souladu s GDPR? Potřebujeme cookie lištu?',
      a: 'GA4 ukládá do prohlížeče analytické cookies a k tomu podle § 89 odst. 3 zákona o elektronických komunikacích potřebujete předchozí souhlas. Měření proto napojujeme na cookie lištu a Consent Mode v2 a do GA4 neposíláme osobní údaje, ani v URL. Nejsme advokátní kancelář, zásady a texty lišty by měl posoudit váš právník – technickou část řeší služba <a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode v2</a>.',
    },
    {
      q: 'Budeme potřebovat vývojáře?',
      a: 'Obvykle ano, ale jen kvůli datové vrstvě: vývojáři ji nasadí podle naší specifikace a připraví testovací prostředí, GA4 a GTM nastavíme my. U Shoptetu, Shopify nebo WooCommerce zkontrolujeme vestavěnou integraci a rozhodneme, jestli ji použít, rozšířit, nebo nahradit vlastní datovou vrstvou.',
    },
    {
      q: 'Proč GA4 ukazuje jiná čísla než e-shop nebo Google Ads?',
      a: 'Nějaký rozdíl je normální: GA4 nevidí návštěvníky, kteří odmítli souhlas nebo měření blokují, ani objednávky po telefonu a storna, a Google Ads připisuje konverze k datu kliknutí. Problém je rozdíl, který nikdo neumí vysvětlit nebo který se mění ze dne na den. Pak jde obvykle o zdvojené nákupy, chybějící souhlas, ztracené zdroje návštěv nebo jinou definici hodnoty.',
    },
  ],

  relatedArticles: [
    { slug: 'nastaveni-ga4-pruvodce', title: 'Nastavení GA4 krok za krokem' },
    { slug: 'proc-nesedi-data', title: 'Proč nesedí čísla v GA4' },
    { slug: 'ga4-checklist-kvality-dat', title: 'Checklist kvality dat v GA4' },
  ],

  relatedPages: ['sluzby/datova-vrstva', 'sluzby/google-tag-manager', 'sluzby/bigquery'],

  contact: {
    formId: 'lp-ga4',
    topics: ['ga4'],
    title: 'Nastavíme GA4 tak, aby čísla seděla s tržbami',
    lead: 'Na třicetiminutové konzultaci zdarma projdeme GA4 a řekneme, co opravit jako první.',
    placeholder: 'Např. e-commerce data v GA4 nesedí s administrací e-shopu…',
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
