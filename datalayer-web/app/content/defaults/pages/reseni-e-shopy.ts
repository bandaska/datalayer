import type { PageInput } from '../../schema';

// Stránka odpovídá auditu z 2. listopadu 2026 (seo-analyza/2026-11-02_seo-ux-texty).
// Kapitola k e-shopům v podkladu chybí, platí jen společná pravidla G01–G07 a závěr
// z kap. 1 (stránka je rozcestník podle typu firmy). Zůstaly: hero s jedním tlačítkem,
// „Z čeho se skládá kompletní měření e-shopu“ se sedmi kartami a odkazy na služby,
// záložky platforem s kotvami #shoptet, #upgates, #shopify, #woocommerce, #prestashop
// a #vlastni-reseni a čtyři otázky. Sekce se situacemi má konkrétní nadpis a kotvu
// #kdy, úvod se zkrátil. Zmizely sliby shody s administrací, „umí nic“, „release“
// a cena provozu serveru v dolarech (nesladěná se službou Server-side měření, kap. 7).
// Přibyly související služby před kontaktem.

export const page: PageInput = {
  path: 'reseni/e-shopy',
  kind: 'solution',
  navTitle: 'Pro e-shopy',
  tagline: 'měření objednávek, souhlasů a konverzí',
  pictogram: 'eshop',

  seo: {
    title: 'Měření e-shopu – GA4, GTM, souhlasy a konverze | datalayer.cz',
    description:
      'Měření e-shopu na Shoptetu, Shopify, WooCommerce i vlastním řešení: GA4, cookie lišta, konverze pro Google Ads, Metu, Sklik a Heureku a porovnání s objednávkami.',
  },

  hero: {
    h1: 'Měření e-shopu od datové vrstvy po marži v reportu',
    subtitle:
      'Pro e-shopy nastavíme a ověříme měření objednávek v Google Analytics 4 (GA4), cookie lištu se souhlasy a konverze pro reklamní systémy a srovnávače. Navážeme na to, co platforma změří sama, a chybějící části doplníme. Data porovnáme s objednávkami v administraci a vysvětlíme rozdíly. Podle potřeby přidáme server-side měření, marži a BigQuery.',
    primaryCta: { label: 'Probrat měření e-shopu', href: '#kontakt' },
  },

  sections: [
    {
      id: 'kdy',
      title: 'Kdy řešit měření e-shopu',
      lead: 'Když se čísla v GA4, reklamních systémech a administraci rozcházejí a není jasné proč, nebo když chcete řídit reklamu podle marže.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          variant: 'symptoms',
          items: [
            {
              title: 'GA4 ukazuje méně objednávek než administrace',
              text: 'Rozdíl se mění měsíc od měsíce a není jasné, kolik z něj připadá na odmítnuté cookies, platební bránu a chybu v nastavení.',
              pictogram: 'ga4',
            },
            {
              title: 'GA4 počítá jeden nákup dvakrát',
              text: 'Vedle nativní integrace platformy běží vlastní tag v Google Tag Manageru (GTM). Tržby pak rostou jen na papíře a kampaně vypadají lépe, než jsou.',
              pictogram: 'warn',
            },
            {
              title: 'Meta hlásí jiný počet nákupů než e-shop',
              text: 'Pixel může běžet bez Conversions API, bez deduplikace přes <code>event_id</code> nebo s nízkou kvalitou párování. Ověříme, která z možností platí.',
              pictogram: 'conversion',
            },
            {
              title: 'Řídíte reklamu podle obratu, ne podle zisku',
              text: 'ROAS a PNO vypadají dobře, ale po odečtení marže, dopravy a vratek může část kampaní prodělávat.',
              pictogram: 'dashboard',
            },
          ],
        },
      ],
    },

    {
      id: 'stack',
      title: 'Z čeho se skládá kompletní měření e-shopu',
      lead: 'Sedm částí, které na sebe navazují. Chyba ve spodní vrstvě zkreslí ty nad ní, proto kontrolu začínáme u datové vrstvy.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          items: [
            {
              title: 'Datová vrstva',
              text: 'Události od zobrazení produktu po nákup ve stejném formátu – z platformy, nebo jako zadání pro vývojáře.',
            },
            {
              title: 'GA4 e-commerce',
              text: 'Doporučené události od <code>view_item_list</code> po <code>refund</code>. Tržby porovnáme s objednávkami v administraci a vysvětlíme rozdíly.',
              link: { label: 'Nastavení GA4 a GTM', href: '/sluzby/implementace-ga4' },
            },
            {
              title: 'Cookie lišta a Consent Mode v2',
              text: 'Rovnocenné odmítnutí, čtyři signály souhlasu, které odejdou dřív, než web spustí první tag, a protokol z testu.',
              link: { label: 'Cookie lišta a Consent Mode', href: '/sluzby/cookie-lista-consent-mode' },
            },
            {
              title: 'Server-side měření',
              text: 'Server-side GTM na subdoméně e-shopu a ve vašem Google Cloudu. Předávání dat nastavíme podle volby návštěvníka a otestujeme.',
              link: { label: 'Server-side měření', href: '/sluzby/server-side-tracking' },
            },
            {
              title: 'Konverze pro reklamní systémy',
              text: 'Google Ads, Meta s Conversions API, Sklik, Heureka a Seznam Nákupy dostanou nákup se stejným ID a hodnotou. Předání ověříme testovací objednávkou.',
              link: { label: 'Měření konverzí', href: '/sluzby/mereni-konverzi' },
            },
            {
              title: 'Marže a zisk',
              text: 'Hodnota konverze podle marže, kterou doplní server těsně před odesláním do Google Ads nebo Mety. Do prohlížeče posíláme jen prodejní cenu, takže nákupní ceny zůstanou u vás.',
            },
            {
              title: 'BigQuery a reporting',
              text: 'Export GA4 spojíme s objednávkami, vratkami a náklady na reklamu a nad nimi postavíme report pro vedení: tržby, marže, PNO a POAS podle kanálů.',
              link: { label: 'BigQuery a reporting', href: '/sluzby/bigquery' },
            },
          ],
        },
      ],
    },

    {
      id: 'platformy',
      title: 'Co vaše platforma změří sama – a co chybí',
      lead: 'Většina platforem umí napojení na GA4 a reklamní systémy, ale jen v rozsahu, který si sama určila. Co chybí, doplníme: datovou vrstvu, server-side měření, české služby jako Sklik a Heureku i marži. Stav podle dokumentace k říjnu 2026, při auditu ověříme, co platí dnes.',
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
                '<strong>Umí:</strong> GA4 s událostmi e-commerce, vlastní dataLayer, cookie lištu s Consent Mode v2 a napojení Mety, Google Ads i Skliku z administrace.',
                '<strong>Chybí:</strong> formát GA4 <code>items</code> v dataLayeru, marže a vlastní parametry. Nativní události mají stejné názvy jako tagy v GTM, takže hrozí, že se nákup započítá dvakrát.',
              ],
            },
            {
              id: 'upgates',
              label: 'Upgates',
              paragraphs: [
                '<strong>Umí:</strong> GA4 přes doplněk Google Site Tag, GTM se systémovým dataLayerem pro produkt, košík a objednávku a cookie lištu s volbou kategorií.',
                '<strong>Chybí:</strong> server-side měření a události ze seznamů produktů a z kroků pokladny. Souběh GTM a Google Site Tag může zdvojit konverze.',
              ],
            },
            {
              id: 'shopify',
              label: 'Shopify',
              paragraphs: [
                '<strong>Umí:</strong> GA4 a Google Ads přes aplikaci Google & YouTube, cookie lištu s Consent Mode v2 a Metu přes aplikaci Facebook & Instagram.',
                '<strong>Chybí:</strong> plnohodnotný GTM v pokladně – běží jen jako vlastní pixel v sandboxu a Consent Mode v2 k němu musíte přidat ručně. Skripty na děkovací stránce skončily u plánu Plus 28. srpna 2025, u ostatních 26. srpna 2026.',
                'Postavíme vlastní pixel a testem ověříme, že aplikace a pixel neposílají stejný nákup dvakrát.',
              ],
            },
            {
              id: 'woocommerce',
              label: 'WooCommerce',
              paragraphs: [
                '<strong>Umí:</strong> měření až s pluginy. Rozšíření Google Analytics for WooCommerce pokryje hlavní události e-commerce a Consent Mode přes WP Consent API, plugin Meta přidá pixel a katalog.',
                '<strong>Chybí:</strong> nákup bez návratu z platební brány na děkovací stránku a pořádek v pluginech, které posílají stejné události vícekrát. Nákup proto odešleme ze serveru po zaplacení.',
              ],
            },
            {
              id: 'prestashop',
              label: 'PrestaShop',
              paragraphs: [
                '<strong>Umí:</strong> GA4 s měřením e-commerce přes oficiální modul Google Analytics.',
                '<strong>Chybí:</strong> GTM, Consent Mode a české služby jako Sklik nebo Heureka – řeší je moduly třetích stran různé kvality, které se mohou překrývat.',
              ],
            },
            {
              id: 'vlastni-reseni',
              label: 'Vlastní řešení',
              paragraphs: [
                '<strong>Umí:</strong> měření v rozsahu, který určí zadání pro vývojáře. Totéž platí pro platformy Magento, Adobe Commerce nebo Shopsys.',
                '<strong>Chybí:</strong> obvykle specifikace. Dodáme měřicí plán, datovou vrstvu ve formátu GA4 a automatický test, který měření ověří po každém nasazení změn. Více u služby <a href="/sluzby/implementace-ga4">Nastavení GA4 a GTM</a>.',
              ],
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Stačí nativní integrace GA4, kterou má Shoptet, Upgates nebo Shopify?',
      a: 'U menšího e-shopu s jedním reklamním kanálem často ano, stačí vyplnit ID. Limity se ukážou, když potřebujete vlastní parametry, marži nebo server-side měření, nebo když nativní integrace běží souběžně s tagy z GTM a GA4 započítá nákup dvakrát. Proto nejdřív zjistíme, co platforma skutečně posílá, a pak navrhneme, co nechat nativně a co převzít do GTM.',
    },
    {
      q: 'Proč GA4 ukazuje méně objednávek než administrace?',
      a: 'GA4 měří chování v prohlížeči, administrace eviduje objednávky. Část návštěvníků odmítne analytické cookies, někdo blokuje skripty nebo se z platební brány nevrátí a v administraci jsou i telefonické a testovací objednávky. Univerzální „normální“ rozdíl neexistuje, důležité je, aby byl stabilní a vysvětlitelný. Data proto porovnáme s objednávkami a rozdíly vysvětlíme.',
    },
    {
      q: 'Co ovlivňuje cenu měření e-shopu?',
      a: 'Cenu určuje hlavně platforma, stav současného měření, počet reklamních systémů a trhů a to, jestli přidáte server-side měření, marži nebo BigQuery. Provoz server-side měření platíte přímo poskytovateli cloudu, odhad nákladů připravíme podle objemu událostí. Nabídku s pevným rozsahem dostanete po úvodní konzultaci a krátkém auditu.',
    },
    {
      q: 'Je potřeba zapojit vývojáře?',
      a: 'Záleží na platformě. Na Shoptetu, Upgates a Shopify se většinou obejdeme bez vývojáře, u WooCommerce, PrestaShopu a vlastních řešení obvykle potřebujeme úpravu šablony nebo kód. Vývojářům dodáme přesnou specifikaci a výsledek otestujeme. Pracujeme ve vašich účtech a kontejnery předáme s dokumentací.',
    },
  ],

  related: {
    items: [
      {
        label: 'Měření konverzí',
        href: '/sluzby/mereni-konverzi',
        text: 'Navazuje na datovou vrstvu e-shopu a předá objednávky reklamním systémům a srovnávačům.',
      },
      {
        label: 'Nastavení GA4 a GTM',
        href: '/sluzby/implementace-ga4',
        text: 'Připraví měřicí plán, události e-commerce v GA4 a zadání datové vrstvy, na kterých stojí ostatní části měření.',
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
    lead: 'Napište, na jaké platformě e-shop běží a ve kterých reklamních systémech inzerujete. Na úvodní konzultaci upřesníme zadání a navrhneme další postup.',
    placeholder: '',
    leadType: 'consultation',
  },

  schema: {
    name: 'Měření pro e-shopy',
    serviceType: 'Implementace měření e-shopu: GA4, Google Tag Manager, Consent Mode v2, server-side měření a konverze',
    description:
      'Kompletní měření e-shopu: datová vrstva, GA4 e-commerce, cookie lišta s Consent Mode v2, server-side měření, konverze pro Google Ads, Metu, Sklik, Heureku a Seznam Nákupy, marže, BigQuery a report pro vedení.',
    audience: 'E-shopy',
  },
};
