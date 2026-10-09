import type { PageInput } from '../../schema';

// Stránka prošla UX redukcí z 9. října 2026 (seo-analyza/2026-10-09_ux-redukce,
// kap. 5.2). Zůstaly: hero s jedním tlačítkem, „Poznáváte se?“, „Z čeho se skládá
// kompletní měření e-shopu“ jako „Co uděláme“ (bez štítků, BigQuery a dashboard
// v jedné kartě, myšlenka „marže jen ze serveru“ v kartě Marže), záložky platforem
// s kotvami #shoptet, #upgates, #shopify, #woocommerce, #prestashop a #vlastni-reseni
// a čtyři otázky. Schéma, čtyři úrovně, postup, kontrolní seznam a technické detaily
// k platformám zmizely.

export const page: PageInput = {
  path: 'reseni/e-shopy',
  kind: 'solution',
  navTitle: 'E-shopy',
  tagline: 'tržby, které sedí s administrací',
  pictogram: 'eshop',

  seo: {
    title: 'Měření e-shopu – GA4, GTM, souhlas a konverze | datalayer.cz',
    description:
      'Měření e-shopu na Shoptetu, Shopify, WooCommerce i vlastním řešení: GA4, cookie lišta, server-side měření a konverze pro Google Ads, Metu, Sklik a Heureku.',
  },

  hero: {
    h1: 'Měření e-shopu od datové vrstvy po marži v reportu',
    subtitle:
      'Kompletní měření e-shopu tvoří datová vrstva, GA4 s událostmi e-commerce, cookie lišta s Consent Mode v2 a konverze pro Google Ads, Metu, Sklik i Heureku. Podle velikosti e-shopu přidáme server-side měření, marži a BigQuery. Navážeme na to, co platforma změří sama, a doplníme zbytek tak, aby objednávky v reportech odpovídaly administraci.',
    primaryCta: { label: 'Konzultovat měření e-shopu', href: '#kontakt' },
  },

  sections: [
    {
      id: 'symptomy',
      title: 'Poznáváte se?',
      lead: 'Většina e-shopů, které k nám přijdou, nemá rozbité měření. Má měření, kterému nikdo nevěří, a přesto podle něj rozhoduje o reklamě.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'GA4 ukazuje méně objednávek než administrace',
              text: 'Rozdíl se mění měsíc od měsíce a nikdo neumí říct, kolik z něj tvoří souhlas, kolik platební brána a kolik chyba měření.',
              pictogram: 'ga4',
            },
            {
              title: 'GA4 počítá jeden nákup dvakrát',
              text: 'Nativní integrace platformy a k tomu vlastní tag v Google Tag Manageru (GTM): tržby rostou jen na papíře a kampaně vypadají lépe, než jsou.',
              pictogram: 'warn',
            },
            {
              title: 'Meta hlásí jiný počet nákupů než e-shop',
              text: 'Pixel běží bez Conversions API, bez deduplikace přes <code>event_id</code> nebo s nízkou kvalitou párování.',
              pictogram: 'conversion',
            },
            {
              title: 'Řídíte reklamu podle obratu, ne podle zisku',
              text: 'ROAS a PNO vypadají dobře, ale po odečtení marže, dopravy a vratek některé kampaně prodělávají.',
              pictogram: 'dashboard',
            },
          ],
        },
      ],
    },

    {
      id: 'stack',
      title: 'Z čeho se skládá kompletní měření e-shopu',
      lead: 'Sedm vrstev, které na sebe navazují. Chyba ve spodní vrstvě zkreslí všechny nad ní, proto začínáme vždy odspodu.',
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
              text: 'Doporučené události od <code>view_item_list</code> po <code>refund</code> a tržby, které sedí s administrací.',
              link: { label: 'GA4 a Google Tag Manager', href: '/sluzby/implementace-ga4' },
            },
            {
              title: 'Cookie lišta a Consent Mode v2',
              text: 'Rovnocenné odmítnutí, čtyři signály souhlasu, které odejdou dřív, než web spustí první tag, a protokol z testu.',
              link: { label: 'Cookie lišta a Consent Mode', href: '/sluzby/cookie-lista-consent-mode' },
            },
            {
              title: 'Server-side měření',
              text: 'Server-side GTM na subdoméně e-shopu a ve vašem Google Cloudu, vždy v souladu se souhlasem.',
              link: { label: 'Server-side tracking', href: '/sluzby/server-side-tracking' },
            },
            {
              title: 'Konverze pro reklamní systémy',
              text: 'Google Ads, Meta s Conversions API, Sklik, Heureka a Seznam Nákupy vidí stejný nákup se stejnou hodnotou.',
              link: { label: 'Měření konverzí', href: '/sluzby/mereni-konverzi' },
            },
            {
              title: 'Marže a zisk',
              text: 'Hodnota konverze podle marže, kterou doplní server těsně před odesláním do Google Ads nebo Mety. Do prohlížeče posíláme jen prodejní cenu, takže nákupní ceny zůstanou u vás.',
            },
            {
              title: 'BigQuery a dashboard',
              text: 'Export GA4 spojíme s objednávkami, vratkami a náklady na reklamu a nad nimi postavíme report pro vedení: tržby, marže, PNO a POAS podle kanálů.',
              link: { label: 'BigQuery a dashboardy', href: '/sluzby/bigquery' },
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
                'Postavíme vlastní pixel a ohlídáme, aby aplikace a pixel neposílaly stejný nákup dvakrát.',
              ],
            },
            {
              id: 'woocommerce',
              label: 'WooCommerce',
              paragraphs: [
                '<strong>Umí:</strong> bez pluginů nic. Rozšíření Google Analytics for WooCommerce pokryje hlavní události e-commerce a Consent Mode přes WP Consent API, plugin Meta přidá pixel a katalog.',
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
                '<strong>Umí:</strong> nic – měření je přesně tak dobré, jak dobré bylo zadání, i u platforem Magento, Adobe Commerce nebo Shopsys.',
                '<strong>Chybí:</strong> specifikace. Dodáme měřicí plán, datovou vrstvu ve formátu GA4 a automatický test pro každý release. Více u služby <a href="/sluzby/implementace-ga4">GA4 a Google Tag Manager</a>.',
              ],
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Nestačí nativní integrace GA4, kterou má Shoptet, Upgates nebo Shopify?',
      a: 'Pro menší e-shop s jedním reklamním kanálem často stačí – nastavíte ji vyplněním ID. Limity se ukážou, když potřebujete vlastní parametry, marži nebo server-side měření, nebo když se nativní integrace potká s tagy z GTM a GA4 započítá nákup dvakrát. Při auditu proto nejdřív zjistíme, co platforma skutečně posílá, a pak navrhneme, co nechat nativně a co převzít do GTM.',
    },
    {
      q: 'Proč GA4 nikdy neukáže všechny objednávky z administrace?',
      a: 'GA4 měří chování v prohlížeči, administrace účtuje objednávky. Část návštěvníků odmítne analytické cookies, někdo blokuje skripty nebo se z platební brány nevrátí a v administraci jsou i telefonické a testovací objednávky. Univerzální „normální“ rozdíl neexistuje – důležité je, aby byl stabilní a abyste ho uměli vysvětlit.',
    },
    {
      q: 'Kolik měření e-shopu stojí?',
      a: 'Dva e-shopy na stejné platformě mohou potřebovat jiný rozsah, cenu proto určuje hlavně platforma, stav současného měření, počet reklamních systémů a trhů a to, jestli přidáte server-side měření, marži nebo BigQuery. Provoz server-side GTM platíte přímo Googlu, který uvádí zhruba 45 dolarů měsíčně za server a doporučuje aspoň dva. Nabídku s pevným rozsahem dostanete po úvodní konzultaci a krátkém auditu.',
    },
    {
      q: 'Musí do implementace zasahovat náš vývojář?',
      a: 'Na Shoptetu, Upgates a Shopify se většinou obejdeme bez vývojáře, u WooCommerce, PrestaShopu a vlastních řešení obvykle potřebujeme úpravu šablony nebo kód. Vývojářům dodáme přesnou specifikaci a výsledek otestujeme. Pracujeme ve vašich účtech a kontejnery předáme s dokumentací.',
    },
  ],

  contact: {
    formId: 'lp-eshopy',
    title: 'Zjistíme, kde vašemu e-shopu utíkají objednávky',
    lead: 'Na úvodní konzultaci projdeme měření, platformu a reklamní kanály a řekneme, co opravit jako první.',
    placeholder: 'Adresa webu a co řešíte, např. „Jsme na Shoptetu a GA4 ukazuje o patnáct procent méně objednávek než administrace“',
    leadType: 'consultation',
  },

  schema: {
    name: 'Měření pro e-shopy',
    serviceType: 'Implementace měření e-shopu: GA4, Google Tag Manager, Consent Mode v2, server-side měření a konverze',
    description:
      'Kompletní měření e-shopu: datová vrstva, GA4 e-commerce, cookie lišta s Consent Mode v2, server-side měření, konverze pro Google Ads, Metu, Sklik, Heureku a Seznam Nákupy, marže, BigQuery a dashboard.',
    audience: 'E-shopy',
  },
};
