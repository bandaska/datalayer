import type { PageInput } from '../../schema';

// Štíhlá šablona LP podle vyhodnocení webu (9. října 2026, kap. 3.1 a 5.12).
// Zdroj obsahu: seo-analyza/03_landing-pages/12_reseni-e-shopy.md (návrh v1).
// Jeden žebřík čtyř úrovní s doporučeným přístupem nahradil taby „Kde je váš
// e-shop teď?“, tabulku úrovní i srovnání nativní integrace, GTM a server-side.
// Výrazný box „Proč marži nikdy neposíláme do prohlížeče“ s mini diagramem
// patří kvůli limitu sedmi sekcí do sekce úrovní. Osm vrstev měření slouží
// jako rozcestník služeb i jako „Co uděláme a co dostanete“ – výstupy nesou
// štítky karet, měřicí plán, protokol validace a předání zmiňuje postup.
// Tabulka platforem vypadla jako duplicita záložek, záložky mají „umí“
// a „chybí“ a podrobnosti k platformám drží sbalené Technické detaily, dokud
// nevyjde článek D4. Kód a odrážky u diagramu vypadly podle plánu. Na záložky
// #shoptet, #upgates, #shopify a #woocommerce vedou odkazy z homepage, na
// #platformy tlačítko v hero. Do dodání podkladů klientem chybí: počet e-shopů
// a loga v pruhu důvěry, případová studie, délky kroků a úrovní a štítek
// „nejčastější start“. Texty prošly jazykovým auditem z 9. října 2026
// (seo-analyza/2026-10-09_jazykovy-audit, kap. 3.15 a 5.3).

export const page: PageInput = {
  path: 'reseni/e-shopy',
  kind: 'solution',
  navTitle: 'E-shopy',
  tagline: 'tržby, které sedí s administrací',
  pictogram: 'eshop',

  seo: {
    title: 'Měření e-shopu – GA4, GTM, souhlas a konverze | datalayer.cz',
    description:
      'Měření e-shopu na Shoptetu, Shopify, WooCommerce i vlastním řešení: GA4, cookie lišta, server-side měření, Google Ads, Meta, Sklik a Heureka. Konzultace zdarma.',
  },

  hero: {
    eyebrow: 'řešení pro e-shopy',
    h1: 'Měření e-shopu od datové vrstvy po marži v reportu',
    subtitle:
      'Kompletní měření e-shopu tvoří datová vrstva, GA4 s událostmi e-commerce, cookie lišta s Consent Mode v2 a konverze pro Google Ads, Metu, Sklik i Heureku. Podle velikosti e-shopu přidáme server-side měření, marži a BigQuery. Navážeme na to, co platforma změří sama, a doplníme zbytek tak, aby objednávky v reportech odpovídaly administraci.',
    primaryCta: { label: 'Konzultovat měření e-shopu', href: '#kontakt' },
    secondaryCta: { label: 'Co platforma změří sama', href: '#platformy' },
    microcopy: 'Úvodní konzultace zdarma, stačí adresa e-shopu',
  },

  trust: ['Šest platforem od Shoptetu po vlastní řešení', 'Každou implementaci porovnáme s administrací', 'Účty, kontejnery i data zůstávají vaše'],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
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
              tag: 'GA4',
            },
            {
              title: 'GA4 počítá jeden nákup dvakrát',
              text: 'Nativní integrace platformy a k tomu vlastní tag v Google Tag Manageru (GTM): tržby rostou jen na papíře a kampaně vypadají lépe, než jsou.',
              pictogram: 'warn',
              tag: 'purchase',
            },
            {
              title: 'Meta hlásí jiný počet nákupů než e-shop',
              text: 'Pixel běží bez Conversions API, bez deduplikace přes <code>event_id</code> nebo s nízkou kvalitou párování.',
              pictogram: 'conversion',
              tag: 'Meta',
            },
            {
              title: 'Řídíte reklamu podle obratu, ne podle zisku',
              text: 'ROAS a PNO vypadají dobře, ale po odečtení marže, dopravy a vratek některé kampaně prodělávají.',
              pictogram: 'dashboard',
              tag: 'POAS',
            },
          ],
        },
      ],
    },

    {
      id: 'stack',
      eyebrow: 'co uděláme',
      title: 'Z čeho se skládá kompletní měření e-shopu',
      lead: 'Osm vrstev, které na sebe navazují. Chyba ve spodní vrstvě zkreslí všechny nad ní, proto začínáme vždy odspodu.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          items: [
            {
              tag: 'datalayer-spec.md',
              title: 'Datová vrstva',
              text: 'Události od zobrazení produktu po nákup ve stejném formátu – z platformy, nebo jako zadání pro vývojáře.',
              link: { label: 'Datová vrstva', href: '/sluzby/datova-vrstva' },
            },
            {
              tag: 'GA4',
              title: 'GA4 e-commerce',
              text: 'Doporučené události od <code>view_item_list</code> po <code>refund</code> a tržby, které sedí s administrací.',
              link: { label: 'Implementace GA4', href: '/sluzby/implementace-ga4' },
            },
            {
              tag: 'souhlas',
              title: 'Cookie lišta a Consent Mode v2',
              text: 'Rovnocenné odmítnutí, čtyři signály souhlasu, které odejdou dřív, než web spustí první tag, a protokol z testu.',
              link: { label: 'Cookie lišta a Consent Mode', href: '/sluzby/cookie-lista-consent-mode' },
            },
            {
              tag: 'gtm-server',
              title: 'Server-side měření',
              text: 'Server-side GTM na subdoméně e-shopu a ve vašem Google Cloudu, vždy v souladu se souhlasem.',
              link: { label: 'Server-side tracking', href: '/sluzby/server-side-tracking' },
            },
            {
              tag: 'konverze',
              title: 'Konverze pro reklamní systémy',
              text: 'Google Ads, Meta s Conversions API, Sklik, Heureka a Seznam Nákupy vidí stejný nákup se stejnou hodnotou.',
              link: { label: 'Měření konverzí', href: '/sluzby/mereni-konverzi' },
            },
            {
              tag: 'marže',
              title: 'Marže a zisk',
              text: 'Hodnota konverze podle marže, kterou doplní server, ne prohlížeč.',
              link: { label: 'Proč ne v prohlížeči', href: '#urovne' },
            },
            {
              tag: 'BigQuery',
              title: 'BigQuery',
              text: 'Export GA4 spojíme s objednávkami, vratkami a náklady na reklamu – bez vzorkování.',
              link: { label: 'BigQuery', href: '/sluzby/bigquery' },
            },
            {
              tag: 'dashboard',
              title: 'Dashboard',
              text: 'Jeden report pro vedení: tržby, marže, náklady, PNO a POAS podle kanálů.',
              link: { label: 'Dashboardy a reporting', href: '/sluzby/dashboardy-a-reporting' },
            },
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      eyebrow: 'tok dat',
      title: 'Jak data tečou z e-shopu do reportu',
      lead: 'Každý nákup vzniká jednou – v datové vrstvě. Odtud ho GTM pošle do GA4 a přes server do reklamních systémů.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Schéma měření e-shopu: webový kontejner GTM pošle události podle souhlasu do GA4 a na server-side GTM, který přidá objednávky z backendu a marži a odešle konverze do reklamních systémů.',
          columns: [
            {
              label: 'prohlížeč',
              items: ['e-shop na kterékoli platformě', 'dataLayer: view_item … purchase', 'cookie lišta se signály souhlasu', 'webový kontejner GTM'],
            },
            {
              label: 'server na doméně e-shopu',
              items: ['server-side GTM na data.vas-eshop.cz', 'zaplacené a vrácené objednávky z backendu', 'marže z feedu nebo ERP'],
            },
            {
              label: 'reklamní a analytické systémy',
              items: ['GA4 z webového GTM', 'Google Ads s rozšířenými konverzemi', 'Meta Conversions API a Sklik', 'Heureka a Seznam Nákupy z webového GTM'],
            },
            {
              label: 'data a report',
              items: ['BigQuery: GA4, backend a Google Ads', 'dashboard v Data Studiu (dříve Looker Studio) nebo Power BI'],
            },
          ],
        },
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Nákup i bez děkovací stránky.</strong> Zaplacenou objednávku pošle server, i když zákazník zavře prohlížeč.',
            '<strong>Souhlas platí v každém kroku.</strong> Bez něj marketingová data neodejdou ani ze serveru.',
          ],
        },
      ],
    },

    {
      id: 'urovne',
      eyebrow: 'úrovně',
      title: 'Čtyři úrovně měření podle toho, co už váš e-shop má',
      lead: 'Úrovně na sebe navazují a skončit můžete u kterékoli, základ ale musí sedět vždy. Když nevíte, kde jste, začneme <a href="/sluzby/audit-mereni">auditem měření</a>, u migrace nebo nového e-shopu <a href="/sluzby/datova-vrstva">specifikací datové vrstvy</a>.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          items: [
            {
              tag: 'úroveň 1',
              title: 'Základ',
              text: 'Datová vrstva, GA4 e-commerce, Consent Mode v2 a konverze pro Google Ads, Metu, Sklik i Heureku. Čísla sedí s administrací.<br><strong>Přístup:</strong> nativní integrace, s více kanály GTM',
            },
            {
              tag: 'úroveň 2',
              title: 'Spolehlivé konverze',
              text: 'Server-side GTM, Meta Conversions API s deduplikací a nákup ze serveru po zaplacení. Pro e-shopy, kde reklama tvoří velkou část objednávek.<br><strong>Přístup:</strong> server-side GTM',
            },
            {
              tag: 'úroveň 3',
              title: 'Marže',
              text: 'Hodnota konverzí podle marže, kterou doplní server, data o košíku v Google Ads a vratky.<br><strong>Přístup:</strong> server-side GTM',
            },
            {
              tag: 'úroveň 4',
              title: 'Jeden report',
              text: 'GA4, objednávky, vratky a náklady na reklamu v BigQuery a dashboard, kterému věří marketing i finance.<br><strong>Přístup:</strong> BigQuery nad úrovní 1, lépe 2 a 3',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Proč marži nikdy neposíláme do prohlížeče',
          text: 'Co je v datové vrstvě, vidí každý, kdo otevře nástroje pro vývojáře – včetně konkurence. Proto do prohlížeče posíláme jen prodejní cenu; marži doplní server-side GTM z feedu nebo ERP těsně před odesláním konverze do Google Ads nebo Mety. Reklamní systémy se pak řídí hrubým ziskem a nákupní ceny zůstanou u vás.',
        },
        {
          type: 'flow',
          caption:
            'Příklad: prohlížeč pošle hodnotu objednávky 2 337 Kč, server-side GTM ji podle maržové tabulky přepočítá a do Google Ads odešle marži 811 Kč.',
          columns: [
            { label: 'prohlížeč', items: ['value: 2 337 Kč', 'jen prodejní cena'] },
            {
              label: 'server-side GTM',
              items: ['maržová tabulka z feedu nebo ERP', 'přepočet hodnoty na marži'],
              note: 'nákupní ceny server neopustí',
            },
            { label: 'Google Ads', items: ['value: 811 Kč', 'hodnota podle marže'] },
          ],
        },
      ],
    },

    {
      id: 'platformy',
      eyebrow: 'platformy',
      title: 'Co vaše platforma změří sama – a co chybí',
      lead: 'Většina platforem umí napojení na GA4 a reklamní systémy, ale jen v rozsahu, který si sama určila. Co chybí, doplníme: datovou vrstvu, server-side měření, české služby jako Sklik a Heureku i marži.',
      tone: 'white',
      note: 'Stav podle dokumentace platforem k říjnu 2026; při auditu ověříme, co platí dnes.',
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
                '<strong>Chybí:</strong> specifikace. Dodáme měřicí plán, datovou vrstvu ve formátu GA4 a automatický test pro každý release. Více u služby <a href="/sluzby/datova-vrstva">Datová vrstva</a>.',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak postupujeme',
      lead: 'Stejných pět kroků jako u ostatních služeb. Na konci dostanete protokol validace s porovnáním měření a administrace, dokumentaci a předávací hovor se záznamem.',
      tone: 'light',
      blocks: [
        {
          type: 'process',
          implementation:
            'Nastavíme datovou vrstvu nebo mapování platformy, GTM, GA4, Consent Mode v2 a reklamní systémy včetně Skliku a Heureky, podle úrovně i server-side GTM a marži.',
          implementationFromClient: 'úpravy šablony od vývojářů, pokud jsou potřeba, a DNS záznam pro server-side GTM',
        },
      ],
    },

    {
      id: 'jak-poznate',
      eyebrow: 'kontrolní seznam',
      title: 'Jak poznáte, že měření e-shopu funguje',
      lead: 'Když platí všech pět bodů, můžete jít dál k marži nebo BigQuery. Jinak doporučujeme začít <a href="/sluzby/audit-mereni">auditem měření</a>.',
      tone: 'dark',
      layout: 'split',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            'Každá objednávka se v GA4 objeví právě jednou, i po obnovení děkovací stránky.',
            'Rozdíl objednávek mezi GA4 a administrací je stabilní a umíte ho vysvětlit.',
            'Před souhlasem ani po odmítnutí web nespustí žádný marketingový tag.',
            'Google Ads, Meta a Sklik dostávají stejný nákup se stejnou hodnotou.',
            'Když měření přestane fungovat, upozorní vás na to monitoring.',
          ],
        },
      ],
    },
  ],

  techDetails: {
    summary: 'Na co si dát pozor u jednotlivých platforem',
    blocks: [
      {
        type: 'list',
        style: 'bullet',
        items: [
          '<strong>Shoptet:</strong> posílá signály <code>ad_user_data</code> a <code>ad_personalization</code> pod souhlasem „Profilace“. Nativní integrace nové parametry do dataLayeru nezapisuje a deduplikaci u Conversions API dokumentace nepopisuje.',
          '<strong>Upgates:</strong> umožňuje nastavit ID kontejneru zvlášť pro každou jazykovou verzi a vlastní konverzní kódy se zástupnými symboly pro cookies. Vlastní skripty mohou kolidovat se systémovými a podporu Consent Mode v2 ověříme přímo na liště šablony.',
          '<strong>Shopify:</strong> vlastní pixel odebírá standardní události Web Pixels od <code>product_viewed</code> po <code>checkout_completed</code> a převádí je do datové vrstvy, třeba <code>checkout_completed</code> na <code>purchase</code>. Tag Assistant s ním nefunguje, proto testujeme přes Shopify Pixel Helper a DebugView. Aplikace Google & YouTube propojí přímo jen jeden účet Google Ads.',
          '<strong>WooCommerce:</strong> datovou vrstvu napojíme na hooky WooCommerce a pluginy uklidíme tak, aby každou událost posílal jen jeden zdroj. Pozor na konflikty s cache a optimalizačními pluginy; rozsah Conversions API v pluginu Meta je potřeba ověřit.',
          '<strong>PrestaShop:</strong> chování modulů se liší mezi verzemi 1.7, 8.x a novějšími; moduly pro „one-page checkout“ navíc mění kroky pokladny.',
          '<strong>Vlastní řešení:</strong> nákup pošle backend přímo do GA4, Mety a Skliku a ve specifikaci určíme, jestli ceny posíláte s DPH, nebo bez DPH.',
        ],
      },
    ],
  },

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
      a: 'Ceník neuvádíme, protože dva e-shopy na stejné platformě mohou potřebovat jiný rozsah. Cenu určuje hlavně platforma, stav současného měření, počet reklamních systémů a trhů a zvolená úroveň. Provoz server-side GTM platíte přímo Googlu, který uvádí zhruba 45 dolarů měsíčně za server a doporučuje aspoň dva. Nabídku s pevným rozsahem a termínem dostanete po úvodní konzultaci a krátkém auditu.',
    },
    {
      q: 'Jak dlouho implementace trvá a musí do ní zasahovat náš vývojář?',
      a: 'Délka záleží hlavně na platformě, úrovni a počtu reklamních systémů; termín dostanete v nabídce. Na Shoptetu, Upgates a Shopify se většinou obejdeme bez vývojáře, u WooCommerce, PrestaShopu a vlastních řešení obvykle potřebujeme úpravu šablony nebo kód – vývojářům dodáme přesnou specifikaci a výsledek otestujeme. Nejvíc času zabere validace: měření necháme běžet a porovnáme ho s administrací.',
    },
    {
      q: 'Komu budou patřit účty, kontejnery a data?',
      a: 'Vám. GA4, GTM, Google Cloud, BigQuery i reklamní účty zakládáme na vaši firmu, nebo pracujeme ve stávajících. My v nich máme jen uživatelský přístup, který můžete kdykoli odebrat. Kontejnery předáme s dokumentací a nikde nenecháme proprietární skript ani server, na kterém by měření záviselo.',
    },
    {
      q: 'Je měření v souladu s GDPR a pravidly pro cookies?',
      a: 'Marketingové a analytické tagy web spustí až po souhlasu, odmítnutí je stejně snadné jako přijetí a Consent Mode v2 posílá Googlu správné signály. Vycházíme z § 89 odst. 3 zákona o elektronických komunikacích a doporučení Úřadu pro ochranu osobních údajů a do GA4 neposíláme osobní údaje v čitelné podobě. Nejsme advokátní kancelář – texty zásad a právní posouzení by měl schválit váš právník.',
    },
  ],

  relatedArticles: [
    { slug: 'ga4-pro-eshopove-platformy', title: 'GA4 na Shoptetu, Upgates, WooCommerce a Shopify' },
    { slug: 'ga4-ecommerce-datalayer', title: 'GA4 e-commerce dataLayer od view_item po purchase' },
    { slug: 'proc-nesedi-data', title: 'Proč nesedí čísla mezi GA4, Google Ads a administrací' },
  ],

  relatedPages: ['sluzby/server-side-tracking', 'sluzby/mereni-konverzi', 'sluzby/audit-mereni'],

  contact: {
    formId: 'lp-eshopy',
    topics: ['ga4', 'konverze'],
    title: 'Zjistíme, kde vašemu e-shopu utíkají objednávky',
    lead: 'Na úvodní konzultaci projdeme měření, platformu a reklamní kanály a řekneme, co opravit jako první.',
    placeholder: 'Např. jsme na Shoptetu a GA4 ukazuje o patnáct procent méně objednávek než administrace…',
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
