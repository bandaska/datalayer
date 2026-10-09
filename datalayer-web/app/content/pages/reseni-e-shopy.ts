import type { LandingPageContent } from '../types';

// Zdroj: seo-analyza/03_landing-pages/12_reseni-e-shopy.md (návrh v1, 8. 10. 2026).
// Vynecháno do dodání podkladů klientem: počet e-shopů a loga v trust baru,
// případová studie (MiniCase), orientační délky kroků a úrovní, štítek
// „nejčastější start“ u úrovní. Kalkulačka ztráty konverzí zatím neexistuje,
// sekundární CTA proto vede na tabulku platforem. Interaktivní checklist je
// statický seznam se slovním vyhodnocením. Sloupec „Co doplníme“ z tabulky platforem
// je kvůli délce stránky v záložkách platforem. U Shoptetu chybí ve sloupci „Co změří
// sama“ vložení GTM – zadání ho vede jako neověřené v primárním zdroji.

export const page: LandingPageContent = {
  path: 'reseni/e-shopy',
  kind: 'solution',
  navTitle: 'E-shopy',
  tagline: 'tržby, které sedí s administrací',
  pictogram: 'eshop',

  seo: {
    title: 'Měření e-shopu: GA4, GTM, consent a konverze | datalayer.cz',
    description:
      'Měření e-shopu na Shoptetu, Shopify, WooCommerce i vlastním řešení: GA4 e-commerce, consent, server-side, Ads, Meta, Sklik a Heureka. Konzultace zdarma.',
  },

  hero: {
    eyebrow: 'Řešení pro e-shopy',
    h1: 'Měření e-shopu od datové vrstvy po marži v reportu',
    subtitle:
      'Nastavíme GA4, Tag Manager, cookie lištu, server-side a konverze pro Google Ads, Metu, Sklik i Heureku tak, aby objednávky v reportech odpovídaly administraci e-shopu. A rozdíl, který zbude, umíme vysvětlit.',
    quickAnswer:
      '<strong>Kompletní měření e-shopu</strong> tvoří datová vrstva s údaji o produktech a objednávkách, GA4 s e-commerce událostmi, cookie lišta s Consent Mode v2 a konverze pro reklamní systémy. Podle velikosti e-shopu přidáváme server-side měření, marže a BigQuery. Na Shoptetu, Upgates, Shopify, WooCommerce i vlastním řešení navážeme na to, co platforma změří sama, a doplníme zbytek.',
    primaryCta: { label: 'Konzultovat měření e-shopu', href: '#kontakt' },
    secondaryCta: { label: 'Co platforma změří sama', href: '#platformy' },
    microcopy: 'Třicet minut zdarma · stačí adresa e-shopu · odpovídáme do jednoho pracovního dne',
  },

  trust: [
    'Šest platforem: Shoptet, Upgates, Shopify, WooCommerce, PrestaShop i vlastní řešení',
    'Každou implementaci ověřujeme proti administraci e-shopu',
    'Kontejnery, účty i data zůstávají ve vlastnictví e-shopu',
  ],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'problém',
      title: 'Poznáváte se v některém z těchto problémů?',
      lead: 'Většina e-shopů, které k nám přijdou, nemá „rozbité“ měření. Má měření, kterému nikdo nevěří – a přesto podle něj rozhoduje o statisících v reklamě.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'GA4 ukazuje méně objednávek než administrace',
              text: 'Rozdíl se mění měsíc od měsíce a nikdo neumí říct, kolik z něj tvoří souhlas, kolik platební brána a kolik chyba v měření.',
              pictogram: 'ga4',
              link: { label: 'Jak to řešíme', href: '#stack' },
            },
            {
              title: 'GA4 počítá jeden nákup dvakrát',
              text: 'Obnovení děkovací stránky, nativní integrace platformy a k tomu vlastní tag v GTM. Tržby v reportu rostou jen na papíře a kampaně vypadají lépe, než jsou.',
              pictogram: 'warn',
              link: { label: 'Jak to řešíme', href: '#platformy' },
            },
            {
              title: 'Po nasazení cookie lišty spadly konverze v Ads a Skliku',
              text: 'Lišta funguje, ale Consent Mode neposílá správné signály, nebo je posílá pozdě.',
              pictogram: 'consent',
              link: { label: 'Jak to řešíme', href: '#stack' },
            },
            {
              title: 'Meta hlásí jiný počet nákupů než e-shop',
              text: 'Pixel bez Conversions API, bez deduplikace přes <code>event_id</code> nebo s nízkou kvalitou párování.',
              pictogram: 'conversion',
              link: { label: 'Jak to řešíme', href: '#urovne' },
            },
            {
              title: 'Optimalizujete na obrat, ne na zisk',
              text: 'ROAS a PNO vypadají dobře, ale po odečtení marže, dopravy a vratek některé kampaně prodělávají.',
              pictogram: 'dashboard',
              link: { label: 'Jak to řešíme', href: '#marze' },
            },
            {
              title: 'Po redesignu nebo změně checkoutu měření tiše přestalo fungovat',
              text: 'Nikdo si toho tři týdny nevšiml. Na Shopify se to stalo mnoha e-shopům po konci skriptů na děkovací stránce.',
              pictogram: 'monitor',
              link: { label: 'Jak to řešíme', href: '#platformy' },
            },
          ],
        },
      ],
    },

    {
      id: 'kde-jste',
      eyebrow: 'první krok',
      title: 'Kde je váš e-shop teď?',
      tone: 'dark',
      blocks: [
        {
          type: 'tabs',
          group: 'eshop_situace',
          items: [
            {
              id: 'audit',
              label: 'E-shop běží, měření „nějak funguje“',
              paragraphs: [
                'Máte GA4, nějaký Tag Manager a pixely od několika agentur. Než cokoli přidáme, potřebujete vědět, co z toho platí.',
                '<strong>Doporučený první krok:</strong> <a href="/sluzby/audit-mereni">audit měření</a> – seznam chyb podle dopadu na peníze a návrh oprav.',
              ],
            },
            {
              id: 'migrace',
              label: 'Chystáte migraci platformy nebo redesign',
              paragraphs: [
                'Teď vás správné měření vyjde levněji než kdykoli potom. Po spuštění se do něj už nikomu nebude chtít sahat.',
                '<strong>Doporučený první krok:</strong> měřicí plán a specifikace datové vrstvy jako součást zadání pro vývojáře nebo agenturu, která web dělá.',
              ],
            },
            {
              id: 'novy',
              label: 'Stavíte nový e-shop nebo vlastní řešení',
              paragraphs: [
                'Vlastní vývoj bez zadání znamená, že každý vývojář pojmenuje události po svém.',
                '<strong>Doporučený první krok:</strong> <a href="/sluzby/datova-vrstva">specifikace datové vrstvy</a> a testovací scénáře ještě před vývojem.',
              ],
            },
            {
              id: 'zisk',
              label: 'Měření je v pořádku, chcete víc',
              paragraphs: [
                'Data sedí, ale reklamu řídíte podle obratu a reporty skládáte ručně v Excelu.',
                '<strong>Doporučený první krok:</strong> úroveň 3 nebo 4 – marže v reklamních systémech, BigQuery a dashboard. Obě úrovně popisujeme níže.',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'stack',
      eyebrow: 'stack',
      title: 'Z čeho se skládá kompletní měření e-shopu',
      lead: 'Měření e-shopu není jeden kód. Tvoří ho osm vrstev, které na sebe navazují, a chyba ve spodní vrstvě se propíše do všech nad ní. Proto začínáme vždy odspodu.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              tag: 'dataLayer',
              title: 'Datová vrstva',
              text: 'Zdroj pravdy o tom, co se na e-shopu stalo: zobrazení produktu, přidání do košíku, kroky pokladny, nákup. Každá událost nese ID produktu, cenu, množství a měnu ve stejném formátu. Platforma ji buď poskytuje, jako Shoptet nebo Upgates, nebo ji napíšeme jako zadání pro vývojáře.',
              pictogram: 'datalayer',
              link: { label: 'Datová vrstva', href: '/sluzby/datova-vrstva' },
            },
            {
              tag: 'ga4',
              title: 'GA4 e-commerce měření',
              text: 'Doporučené události Google Analytics 4 od <code>view_item_list</code> po <code>purchase</code> a <code>refund</code>, klíčové události, vlastní dimenze jako doprava, platba nebo nový zákazník, filtr interní návštěvnosti a uchování dat čtrnáct měsíců. Zkontrolujeme, že tržby v GA4 odpovídají administraci – bez DPH a dopravy, nebo s nimi, ale vždy stejně.',
              pictogram: 'ga4',
              link: { label: 'Implementace GA4', href: '/sluzby/implementace-ga4' },
            },
            {
              tag: 'consent',
              title: 'Cookie lišta a Consent Mode v2',
              text: 'Lišta s rovnocenným odmítnutím, výchozí stav „zamítnuto“ a čtyři signály Consent Mode v2: <code>ad_storage</code>, <code>analytics_storage</code>, <code>ad_user_data</code> a <code>ad_personalization</code>. Web je pošle dřív, než spustí první tag. Bez toho Google Ads v EHP nesmí použít data pro remarketing ani rozšířené konverze.',
              pictogram: 'consent',
              link: { label: 'Cookie lišta a Consent Mode', href: '/sluzby/cookie-lista-consent-mode' },
            },
            {
              tag: 'sgtm',
              title: 'Server-side měření na vaší doméně',
              text: 'Server-side Google Tag Manager na subdoméně e-shopu, třeba <code>data.vas-eshop.cz</code>, a na vašem Google Cloudu. Odolnější first-party měření, deduplikace událostí a kontrola nad tím, co odchází do Mety a Googlu – vždy v souladu se souhlasem návštěvníka.',
              pictogram: 'serverside',
              link: { label: 'Server-side tracking', href: '/sluzby/server-side-tracking' },
            },
            {
              tag: 'conversion',
              title: 'Konverze pro reklamní systémy',
              text: 'Google Ads s konverzemi, rozšířenými konverzemi a daty o košíku. Meta s Pixelem a Conversions API přes <code>event_id</code>. Sklik přes Seznam Event Measurement, Heureka s měřením konverzí a Ověřeno zákazníky, Seznam Nákupy (dříve Zboží.cz) a podle potřeby TikTok a Pinterest. Všechny systémy vidí stejný nákup se stejnou hodnotou.',
              pictogram: 'conversion',
              link: { label: 'Měření konverzí', href: '/sluzby/mereni-konverzi' },
            },
            {
              tag: 'margin',
              title: 'Marže a zisk (POAS)',
              text: 'Hodnota konverze podle marže místo obratu. Marži doplní server, ne prohlížeč. V Google Ads navíc využijeme data o košíku s náklady na zboží z Merchant Center, aby reporty ukazovaly hrubý zisk.',
              pictogram: 'eshop',
            },
            {
              tag: 'bq',
              title: 'BigQuery',
              text: 'Export GA4 do BigQuery a spojení s objednávkami, vratkami a náklady na reklamu. Surová data bez vzorkování a bez limitů rozhraní GA4.',
              pictogram: 'bigquery',
              link: { label: 'BigQuery', href: '/sluzby/bigquery' },
            },
            {
              tag: 'report',
              title: 'Dashboard',
              text: 'Jeden report pro vedení: tržby, marže, náklady, PNO a POAS podle kanálů, noví zákazníci a ti, kteří nakupují opakovaně. Nástroj: Data Studio (dříve Looker Studio), nebo Power BI, pokud ho firma používá.',
              pictogram: 'dashboard',
              link: { label: 'Dashboardy a reporting', href: '/sluzby/dashboardy-a-reporting' },
            },
          ],
        },
        {
          type: 'paragraphs',
          items: ['Spodní tři vrstvy – datová vrstva, GA4 a souhlas – tvoří základ.'],
        },
      ],
    },

    {
      id: 'tok-dat',
      eyebrow: 'tok dat',
      title: 'Jak data tečou z e-shopu do reportu',
      lead: 'Každý nákup vzniká jednou – v datové vrstvě. Odtud ho Tag Manager posílá do GA4 a přes server na vaší doméně do reklamních systémů.',
      tone: 'dark',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Marži doplní server, souhlas návštěvníka kontroluje každý krok. Na konci jsou všechna data v BigQuery a v jednom dashboardu.',
          ],
        },
        {
          type: 'flow',
          caption:
            'Schéma měření e-shopu. V prohlížeči zapíše e-shop události od zobrazení produktu po nákup do datové vrstvy. GTM web je podle signálů souhlasu z cookie lišty pošle do GA4 a first-party požadavkem na server-side GTM na doméně e-shopu. Konverze pro Heureku a Seznam Nákupy posílá GTM web přímo. Server přidá zaplacené a vrácené objednávky z backendu, doplní marži z feedu nebo ERP a pošle konverze do Google Ads, Meta Conversions API a Skliku. Data z GA4, backendu a Google Ads končí v BigQuery a odtud v dashboardu.',
          columns: [
            {
              label: 'Prohlížeč',
              items: [
                'e-shop: Shoptet, Upgates, Shopify, WooCommerce nebo vlastní řešení',
                'dataLayer: view_item … purchase',
                'cookie lišta s Consent Mode v2 posílá signály souhlasu',
                'GTM web',
              ],
              note: 'události v doporučeném formátu GA4, i když platforma používá vlastní',
            },
            {
              label: 'Server na doméně e-shopu',
              items: [
                'sGTM na data.vas-eshop.cz v Google Cloudu',
                'backend e-shopu: zaplacené a vrácené objednávky server-to-server',
                'marže z feedu nebo ERP',
              ],
              note: 'zaplacené objednávky pošle server, i když zákazník zavře prohlížeč; nákupní ceny zůstávají na serveru',
            },
            {
              label: 'Reklamní a analytické systémy',
              items: [
                'GA4 přímo z GTM web',
                'Google Ads s rozšířenými konverzemi',
                'Meta Conversions API s event_id',
                'Sklik přes Seznam Event Measurement',
                'Heureka a Seznam Nákupy z GTM web',
              ],
            },
            {
              label: 'Data a report',
              items: ['BigQuery: GA4, backend a Google Ads', 'dashboard: Data Studio (dříve Looker Studio) nebo Power BI'],
            },
          ],
        },
        {
          type: 'code',
          lang: 'js',
          caption: 'Ukázka: událost purchase v datové vrstvě, ukázková data',
          code: `dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: '2026-10458',
    value: 2337,
    currency: 'CZK',
    items: [
      { item_id: 'BTL-0420', item_name: 'Termoska 0,5 l', price: 489, quantity: 2 },
      { item_id: 'BAT-1180', item_name: 'Batoh 28 l', price: 1359, quantity: 1 }
    ]
  }
});`,
        },
      ],
    },

    {
      id: 'urovne',
      eyebrow: 'úrovně',
      title: 'Čtyři úrovně měření podle toho, kde je váš e-shop',
      lead: 'Ne každý e-shop potřebuje BigQuery. Každý ale potřebuje, aby základ seděl. Úrovně na sebe navazují – vyšší úroveň bez nižší nedává smysl, ale skončit můžete u kterékoli.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          head: [
            'Úroveň',
            '1 · Spolehlivý základ',
            '2 · Výkon a přesnost',
            '3 · Zisk místo obratu',
            '4 · Datový sklad a reporting',
          ],
          rows: [
            [
              'Pro koho',
              'E-shop, který spoléhá na nativní integrace platformy nebo začíná s placenou reklamou',
              'E-shop, pro který jsou Google Ads a Meta hlavní zdroj objednávek a každá konverze, která chybí, zhoršuje optimalizaci',
              'E-shop s rozdílnými maržemi napříč sortimentem, kde ROAS a PNO zkreslují ziskovost',
              'E-shop, který potřebuje spojit web, objednávky, vratky a náklady do jednoho reportu',
            ],
            [
              'Orientačně, ne podmínka',
              'reklama v řádu desítek tisíc korun měsíčně',
              'reklama ve statisících korun měsíčně, více kanálů',
              'více kategorií s rozdílnou marží, vlastní feed nebo ERP',
              'více trhů nebo kanálů, ruční reporting v Excelu',
            ],
            [
              'Co obsahuje',
              'audit stávajícího stavu<br>datová vrstva platformy, nebo specifikace pro vývojáře<br>GA4 e-commerce<br>cookie lišta a Consent Mode v2<br>Google Ads a rozšířené konverze<br>Meta Pixel<br>Sklik přes SEM<br>Heureka a Seznam Nákupy',
              'vše z úrovně 1<br>server-side GTM na doméně e-shopu a vlastním Google Cloudu<br>Meta Conversions API s deduplikací<br>nákup ze serveru po zaplacení<br>monitoring událostí',
              'vše z úrovně 2<br>hodnota konverzí podle marže, kterou doplní server<br>data o košíku a náklady na zboží v Google Ads<br>vratky a storna<br>nový zákazník, nebo opakovaný nákup',
              'GA4 → BigQuery<br>objednávky z e-shopu nebo ERP<br>náklady z Google Ads, Mety a Skliku<br>datový model<br>dashboard',
            ],
            [
              'Hlavní výstup',
              'Čísla v GA4 a reklamních systémech odpovídají administraci a rozdíl umíme vysvětlit',
              'Reklamní systémy zachytí vyšší podíl konverzí a Meta lépe páruje zákazníky',
              'Reklamní systémy optimalizují na hrubý zisk',
              'Jeden report, kterému věří marketing i finance',
            ],
            [
              'Co budeme potřebovat',
              'Přístupy do administrace, GTM, GA4, Google Ads, Mety, Skliku a Heureky',
              'Přístup do Google Cloudu, nebo projekt založíme na vás; DNS záznam pro subdoménu',
              'Zdroj marží – feed, ERP nebo export – a pravidla pro vratky',
              'Přístup k datům objednávek přes API, export nebo databázi',
            ],
            ['Navazuje na', '–', 'úroveň 1', 'úroveň 2, protože marži doplňuje server', 'úroveň 1, lépe 2 a 3'],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Cenu neuvádíme v ceníku, protože ji určuje hlavně platforma, stav současného měření a počet reklamních systémů. Po úvodní konzultaci dostanete nabídku s pevným rozsahem a výstupy.',
          ],
        },
      ],
    },

    {
      id: 'platformy',
      eyebrow: 'platformy',
      title: 'Co vaše platforma změří sama – a co chybí',
      lead: 'Většina e-shopových platforem dnes umí základní napojení na GA4 a reklamní systémy. Umí ho ale jen v rozsahu, který si určila platforma – a když k nativní integraci přidáte vlastní tagy, snadno vznikne dvojité měření.',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          caption:
            'Přehled vychází z veřejné dokumentace platforem, stav k říjnu 2026. Platformy své integrace mění, proto při auditu vždy ověřujeme aktuální stav na konkrétním e-shopu.',
          head: ['Platforma', 'Co změří sama', 'Na co si dát pozor'],
          rows: [
            [
              '<strong>Shoptet</strong>',
              'GA4 s e-commerce událostmi od <code>view_item_list</code> po <code>purchase</code>, včetně dopravy, platby a typu B2B nebo B2C<br>vlastní dataLayer: typ stránky, produkt, košík, objednávka<br>cookie lišta s Consent Mode v2, signály <code>ad_user_data</code> a <code>ad_personalization</code> pod souhlasem „Profilace“<br>Meta Pixel a Conversions API, rozšířené konverze Google Ads, konverze a retargeting Skliku – vše v administraci',
              'nativní události mají v dataLayeru stejné názvy jako tagy v GTM, takže hrozí dvojí nákup<br>původní dataLayer nemá formát GA4 <code>items</code> a nové parametry nativní integrace v něm nejsou<br>nativní integraci nejde rozšířit o marži ani vlastní parametry<br>deduplikaci u Conversions API dokumentace nepopisuje',
            ],
            [
              '<strong>Upgates</strong>',
              'GA4 přes doplněk Google Site Tag, část e-commerce událostí<br>GTM přes doplněk Google se systémovým dataLayerem: detail produktu, košík, dokončená objednávka; ID zvlášť pro každou jazykovou verzi<br>cookie lišta s volbou kategorií v aktuálních šablonách<br>vlastní konverzní kódy s dynamickými zástupci pro cookies',
              'souběh GTM a Google Site Tag může zdvojit konverze<br>systémový dataLayer pokrývá jen hlavní kroky<br>serverové měření Upgates podle své nápovědy systémově neumožňuje, jen přes doplňky třetích stran<br>vlastní skripty mohou kolidovat se systémovými',
            ],
            [
              '<strong>Shopify</strong>',
              'aplikace Google & YouTube: GA4, konverze a rozšířené konverze Google Ads<br>vestavěná cookie lišta s Consent Mode v2<br>standardní události Web Pixels od <code>product_viewed</code> po <code>checkout_completed</code><br>Meta přes aplikaci Facebook & Instagram',
              'GTM v pokladně jen jako vlastní pixel v sandboxu, Shopify ho nepodporuje a údržba je na vás<br>u vlastních pixelů je potřeba Consent Mode v2 přidat ručně<br>skripty na děkovací stránce skončily: u Plus 28. srpna 2025, u ostatních plánů 26. srpna 2026<br>aplikace Google & YouTube propojí přímo jen jeden účet Google Ads<br>standardní události nejde rozšířit o vlastní data',
            ],
            [
              '<strong>WooCommerce</strong>',
              'sám nic<br>rozšíření Google Analytics for WooCommerce: nákup, košík, seznamy, detail produktu a začátek pokladny; Consent Mode přes WP Consent API, vlastní lištu nemá<br>Meta for WooCommerce: Pixel a katalog',
              'nákup plugin změří jen při návratu z platební brány na děkovací stránku<br>více pluginů posílá stejné události vícekrát<br>konflikty s cache a optimalizačními pluginy<br>rozsah Conversions API v pluginu Meta je potřeba ověřit',
            ],
            [
              '<strong>PrestaShop</strong>',
              'oficiální modul Google Analytics s GA4 a e-commerce měřením<br>GTM a consent jen přes moduly třetích stran',
              'rozdíly mezi verzemi 1.7, 8.x a novějšími<br>kvalita modulů se liší<br>moduly pro „one-page checkout“ mění kroky pokladny',
            ],
            [
              '<strong>Vlastní řešení</strong><br>i Magento / Adobe Commerce, Shopsys a další',
              'nic – měření je přesně takové, jak ho naprogramujete',
              'bez specifikace pojmenuje každý vývojář události po svém<br>ceny s DPH, nebo bez DPH<br>release rozbije měření a nikdo to nezjistí',
            ],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Na všech platformách podle potřeby přidáme server-side měření, české služby jako Heureka, Seznam Nákupy a Seznam Event Measurement a marži. Co přesně uděláme na které platformě, popisujeme níže.',
          ],
        },
        {
          type: 'tabs',
          group: 'eshop_platforma',
          items: [
            {
              id: 'shoptet',
              label: 'Shoptet',
              paragraphs: [
                '<strong>Shoptet a Google Analytics 4: co změří Shoptet sám</strong>',
                'Shoptet má integrované měření do GA4, které posílá e-commerce události včetně dopravy, platby a rozlišení nákupu B2B a B2C. Pro většinu menších e-shopů je to rozumný základ. Potíž nastává, když chcete víc: vlastní parametry, marži nebo napojení dalších systémů přes Google Tag Manager.',
                'Shoptet zároveň plní vlastní dataLayer, jehož struktura neodpovídá formátu GA4, a nativní události mají stejné názvy jako ty, které byste posílali z GTM. Bez pečlivého nastavení GA4 započítá nákup dvakrát.',
                'Rozhodneme, co nechat na Shoptetu a co převzít do GTM, přemapujeme data a ověříme, že Tag Manager respektuje souhlas z cookie lišty Shoptetu.',
              ],
            },
            {
              id: 'upgates',
              label: 'Upgates',
              paragraphs: [
                '<strong>Upgates: GTM s datovou vrstvou a co v ní chybí</strong>',
                'Upgates umí vložit Google Tag Manager i GA4 přes doplňky a k GTM přidává systémovou datovou vrstvu s detailem produktu, košíkem a dokončenou objednávkou. Pro měření celého nákupního procesu ale chybí události ze seznamů produktů a z jednotlivých kroků pokladny.',
                'Pozor na souběh GTM a Google Site Tag – podle nápovědy Upgates může vést ke dvojím konverzím. Serverové měření Upgates systémově nenabízí, řeší ho doplněk třetí strany nebo vlastní server-side GTM.',
                'Doplníme události, které chybí, napojíme Consent Mode v2 na lištu šablony – podporu v2 ověříme přímo na ní – a nastavíme server-side tak, aby data i kontejner zůstaly vaše.',
              ],
            },
            {
              id: 'shopify',
              label: 'Shopify',
              paragraphs: [
                '<strong>GA4 a GTM na Shopify po konci checkout.liquid</strong>',
                'Rychlá cesta k GA4 a Google Ads na Shopify je aplikace Google & YouTube. Propojí GA4, nastaví konverze a zapne rozšířené konverze. Pokud potřebujete Google Tag Manager kvůli Meta CAPI přes server, Skliku, Heurece nebo vlastním parametrům, v pokladně funguje jen jako <strong>vlastní pixel (custom pixel)</strong> v izolovaném sandboxu.',
                'Shopify ukončilo checkout.liquid a skripty na děkovací stránce: u Shopify Plus 28. srpna 2025, u ostatních plánů skončily script tags 26. srpna 2026. Řada e-shopů tak během léta 2026 přišla o nákupy v GTM, aniž by si toho všimla.',
                'Postavíme vlastní pixel, který převede standardní události Shopify do datové vrstvy, například <code>checkout_completed</code> na <code>purchase</code>. Doplníme Consent Mode v2, napojíme server-side a ohlídáme, aby aplikace a pixel neposílaly stejný nákup dvakrát.',
              ],
            },
            {
              id: 'woocommerce',
              label: 'WooCommerce',
              paragraphs: [
                '<strong>WooCommerce a Google Analytics: pluginy, nebo vlastní datová vrstva</strong>',
                'WooCommerce sám neměří nic, všechno obstarávají pluginy. Oficiální rozšíření Google Analytics for WooCommerce pokrývá hlavní e-commerce události a Consent Mode přes WP Consent API. Nákup ale změří jen tehdy, když se zákazník z platební brány vrátí na děkovací stránku.',
                'Na většině webů navíc běží několik pluginů najednou a posílají stejné události. Navrhneme datovou vrstvu, která čerpá z hooků WooCommerce, nákup odešleme ze serveru ve chvíli, kdy zákazník objednávku zaplatí, a uklidíme pluginy tak, aby každou událost posílal jen jeden zdroj.',
              ],
            },
            {
              id: 'prestashop',
              label: 'PrestaShop',
              paragraphs: [
                '<strong>PrestaShop: oficiální modul a moduly třetích stran</strong>',
                'Oficiální modul Google Analytics pro PrestaShop podporuje GA4 a e-commerce měření. Tag Manager, Consent Mode a české služby řeší moduly třetích stran, jejichž kvalita a kompatibilita s verzí PrestaShopu se liší.',
                'Projdeme, které moduly máte, co posílají a jestli se nepřekrývají, a navrhneme datovou vrstvu, která přežije aktualizaci.',
              ],
            },
            {
              id: 'vlastni-reseni',
              label: 'Vlastní řešení',
              paragraphs: [
                '<strong>Vlastní e-shop: specifikace pro vývojáře a testy</strong>',
                'U vlastního řešení je měření přesně tak dobré, jak dobré bylo zadání. Dodáme měřicí plán a specifikaci datové vrstvy ve formátu GA4 e-commerce s událostmi, parametry, příklady JSON a akceptačními kritérii. K tomu testovací scénáře pro QA a nákup, který backend pošle přímo do GA4, Mety a Skliku.',
                'Pro vývojový tým připravíme automatický test, který při každém releasu ověří, že datová vrstva posílá to, co má. Stejně postupujeme u Magenta / Adobe Commerce, Shopsysu a dalších platforem. Víc na stránce <a href="/sluzby/datova-vrstva">Datová vrstva</a>.',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'srovnani',
      eyebrow: 'srovnání',
      title: 'Nativní integrace, Tag Manager, nebo server-side?',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          head: [
            'Kritérium',
            'Nativní integrace platformy',
            'Datová vrstva + GTM v prohlížeči',
            'Datová vrstva + GTM + server-side',
          ],
          rows: [
            ['Rychlost nasazení', 'hodiny, stačí vyplnit ID', 'dny až týdny', 'týdny'],
            ['Kontrola nad daty', 'nízká – rozsah určuje platforma', 'vysoká', 'ještě vyšší – víte, co přesně odchází komu'],
            ['Vlastní parametry, marže', 'ne', 'ano, bez nákupních cen', 'ano, včetně marže, kterou doplní server'],
            ['Napojení Skliku, Heureky a Seznam Nákupy', 'podle platformy', 'ano', 'ano'],
            ['Meta Conversions API', 'některé platformy, třeba Shoptet', 'ne', 'ano, s deduplikací'],
            [
              'Odolnost vůči ztrátě dat v prohlížeči, třeba kvůli ITP nebo blokování skriptů',
              'nízká',
              'nízká',
              'vyšší díky first-party požadavkům na doméně e-shopu; souhlas platí vždy',
            ],
            [
              'Náklady na provoz',
              'žádné',
              'žádné',
              'Google Cloud hradíte napřímo; Google uvádí zhruba 45 dolarů měsíčně za server a doporučuje alespoň dva',
            ],
            ['Údržba', 'platforma', 'vy nebo my', 'vy nebo my'],
            [
              '<strong>Kdy dává smysl</strong>',
              '<strong>malý e-shop, jeden reklamní kanál</strong>',
              '<strong>e-shop s více kanály a vlastními požadavky</strong>',
              '<strong>e-shop, kde reklama tvoří velkou část objednávek, a e-shopy s maržovou optimalizací</strong>',
            ],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Nativní integraci nezavrhujeme. U malého e-shopu s jedním reklamním kanálem je často rozumná volba – jen ji nesmíte kombinovat s vlastními tagy pro stejné události.',
          ],
        },
      ],
    },

    {
      id: 'marze',
      eyebrow: 'marže',
      title: 'Proč marži nikdy neposíláme do prohlížeče',
      lead: 'Co je v datové vrstvě, vidí každý, kdo otevře nástroje pro vývojáře – včetně konkurence. Proto do prohlížeče posíláme jen prodejní cenu.',
      tone: 'dark',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Marži doplní server-side Tag Manager z feedu nebo ERP těsně předtím, než odešle konverzi do Google Ads nebo Mety. Reklamní systémy pak optimalizují na hrubý zisk a nákupní ceny zůstanou u vás.',
            'V Google Ads lze navíc využít data o košíku: když v Merchant Center doplníte náklady na zboží, Google Ads ukáže hrubý zisk podle kampaní.',
          ],
        },
        {
          type: 'flow',
          caption:
            'Ukázkový příklad: prohlížeč pošle hodnotu objednávky 2 337 Kč podle prodejních cen. Server-side GTM ji podle maržové tabulky přepočítá a do Google Ads odešle hodnotu 811 Kč, tedy marži. Nákupní ceny zůstanou na serveru.',
          columns: [
            { label: 'Prohlížeč', items: ['value: 2 337 Kč', 'jen prodejní cena'] },
            {
              label: 'Server-side GTM',
              items: ['maržová tabulka z feedu nebo ERP', 'přepočet hodnoty na marži'],
              note: 'nákupní ceny server neopustí',
            },
            { label: 'Google Ads', items: ['value: 811 Kč', 'hodnota podle marže'] },
          ],
        },
      ],
    },

    {
      id: 'co-dostanete',
      eyebrow: 'výstupy',
      title: 'Co od nás dostanete',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              tag: 'merici-plan.xlsx',
              title: 'Měřicí plán',
              text: 'Byznysové cíle, události, parametry, klíčové události a kam která událost odchází.',
            },
            {
              tag: 'datalayer-spec.md',
              title: 'Specifikace datové vrstvy',
              text: 'Pro vývojáře u vlastních řešení a migrací: události, parametry, příklady JSON, akceptační kritéria.',
            },
            {
              tag: 'gtm',
              title: 'GTM kontejnery pro web a server',
              text: 'Názvy podle konvence, poznámky a verze. Nic „na zkoušku“.',
            },
            {
              tag: 'ga4',
              title: 'GA4 property',
              text: 'Klíčové události, vlastní definice, filtr interní návštěvnosti, uchování dat čtrnáct měsíců a propojení s Google Ads, Merchant Center a BigQuery.',
            },
            {
              tag: 'consent',
              title: 'Consent Mode v2',
              text: 'Konfigurace a testovací protokol: co web posílá před souhlasem, po souhlasu a po odmítnutí.',
            },
            {
              tag: 'ads',
              title: 'Reklamní systémy',
              text: 'Google Ads s rozšířenými konverzemi a daty o košíku, Meta Pixel a CAPI s deduplikací, Sklik přes SEM, Heureka a Seznam Nákupy.',
            },
            {
              tag: 'validace-YYYY-MM.pdf',
              title: 'Protokol validace',
              text: 'Testovací objednávky, porovnání s administrací a vysvětlení rozdílu.',
            },
            {
              tag: 'předání',
              title: 'Předání',
              text: 'Dokumentace, předávací hovor na šedesát až devadesát minut se záznamem, seznam přístupů a vlastníků účtů.',
            },
            {
              tag: 'L3–L4',
              title: 'Pro úroveň 3 a 4',
              text: 'Maržová tabulka na serveru, dataset v BigQuery a dashboard.',
            },
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak postupujeme',
      tone: 'dark',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Úvodní konzultace',
              text: 'Třicet minut zdarma. Projdeme e-shop, platformu, reklamní kanály a hlavní problém.',
              fromClient: 'Adresa e-shopu a kdo má na starosti marketing a vývoj',
            },
            {
              title: 'Audit současného stavu',
              text: 'Projdeme GTM, GA4, lištu a pixely a porovnáme data s administrací.',
              fromClient: 'Přístupy pro čtení, seznam pošleme',
            },
            {
              title: 'Měřicí plán',
              text: 'Události, parametry, cíle a volba úrovně 1–4.',
              fromClient: 'Jedna schůzka, na které plán schválíte',
            },
            {
              title: 'Implementace',
              text: 'Datová vrstva nebo mapování, GTM, GA4, consent, reklamní systémy a podle potřeby server-side.',
              fromClient: 'Úpravy šablony nebo kód od vývojářů, pokud jsou potřeba, a DNS záznam pro server-side',
            },
            {
              title: 'Validace',
              text: 'Testovací objednávky, běh měření a porovnání s administrací.',
              fromClient: 'Testovací objednávka a platba, export objednávek',
            },
            {
              title: 'Předání a podpora',
              text: 'Dokumentace, předávací hovor a dohled po předání.',
              fromClient: 'Kdo bude měření vlastnit',
            },
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Seznam přístupů pošleme s návodem, jak je udělit. Po skončení projektu je můžete odebrat. Obecný průběh spolupráce popisujeme na stránce <a href="/jak-pracujeme">Jak pracujeme</a>.',
          ],
        },
      ],
    },

    {
      id: 'checklist',
      eyebrow: 'checklist',
      title: 'Jak poznáte, že měření e-shopu funguje',
      lead: 'Projděte si deset bodů a spočítejte, kolik jich splňujete.',
      tone: 'light',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            'Každá objednávka se v GA4 objeví právě jednou, i po obnovení děkovací stránky.',
            'Tržby v GA4 počítáte stejně jako v administraci a víte, jestli jsou s DPH a s dopravou.',
            'Měna je u všech událostí <code>CZK</code> nebo správná měna trhu, nikdy prázdná.',
            'Rozdíl objednávek mezi GA4 a administrací je stabilní a umíte ho vysvětlit: souhlas, testy, storna.',
            'Před souhlasem web nespustí žádný marketingový tag. Po odmítnutí také ne.',
            'Consent Mode v2 posílá všechny čtyři signály ve výchozím stavu i po volbě návštěvníka.',
            'Google Ads, Meta a Sklik dostávají stejný nákup se stejnou hodnotou.',
            'Meta deduplikuje události z prohlížeče a ze serveru přes stejné <code>event_id</code>.',
            'Interní návštěvnost ani testovací objednávky se do dat nedostanou.',
            'Když měření přestane fungovat, dozvíte se to do 24 hodin, ne za měsíc.',
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Splňujete všech deset bodů? Měření je v dobré kondici a můžete jít dál k marži nebo BigQuery. Sedm až devět bodů znamená, že základ máte, ale pár věcí stojí peníze. Při šesti a méně doporučujeme začít <a href="/sluzby/audit-mereni">auditem měření</a>.',
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Nestačí nativní integrace GA4, kterou má Shoptet, Upgates nebo Shopify?',
      a: 'Pro menší e-shop s jedním reklamním kanálem často stačí. Nativní integrace posílá hlavní e-commerce události a nastavíte ji vyplněním ID. Limity se ukážou, když potřebujete vlastní parametry, marži, server-side nebo napojení Skliku či Heureky přes Tag Manager. Nebo když se nativní integrace potká s tagy z GTM a GA4 započítá nákup dvakrát. Při auditu proto nejdřív zjistíme, co platforma skutečně posílá, a teprve pak navrhneme, co nechat nativně a co převzít do GTM.',
    },
    {
      q: 'Proč GA4 nikdy neukáže všechny objednávky z administrace? Jaký rozdíl je normální?',
      a: 'GA4 měří chování v prohlížeči, administrace účtuje objednávky. Část návštěvníků odmítne analytické cookies, část blokuje skripty, někdo zaplatí a z platební brány se už nevrátí. V administraci jsou navíc i telefonické nebo testovací objednávky. Univerzální „normální“ procento neexistuje – záleží na podílu souhlasů, platebních metodách a platformě. Důležité je, aby byl rozdíl stabilní a abyste ho uměli vysvětlit. Pokud kolísá nebo ho nikdo neumí rozložit na příčiny, je v měření chyba.',
    },
    {
      q: 'Jak nastavit Google Tag Manager na Shopify po konci checkout.liquid?',
      a: 'V pokladně Shopify dnes GTM běží jen jako vlastní pixel (custom pixel) v sandboxu. Pixel odebírá standardní události Shopify, jako jsou <code>product_viewed</code> nebo <code>checkout_completed</code>, převede je do datové vrstvy a GTM z nich spustí tagy pro GA4 a reklamní systémy. Consent Mode v2 je u vlastního pixelu potřeba přidat ručně a nástroj Tag Assistant s ním nefunguje, takže testujeme přes Shopify Pixel Helper a DebugView. Skripty na děkovací stránce Shopify ukončilo u plánu Plus v srpnu 2025 a u ostatních plánů 26. srpna 2026.',
    },
    {
      q: 'Potřebuje můj e-shop server-side tracking?',
      a: 'Ne každý. Server-side dává smysl, když reklama tvoří velkou část objednávek nebo když chcete Meta Conversions API s deduplikací, marži v reklamních systémech či nákup, který server odešle hned po zaplacení. Server-side neobchází souhlas: když návštěvník marketingové cookies odmítne, server marketingová data neodešle. Pomáhá s technickou ztrátou dat a s kontrolou nad tím, co komu posíláte. Provoz na Google Cloudu hradíte napřímo; Google uvádí orientačně 45 dolarů měsíčně za server a doporučuje alespoň dva.',
    },
    {
      q: 'Jde optimalizovat reklamu na zisk, aniž by konkurence viděla naše marže?',
      a: 'Ano. Do prohlížeče posíláme jen prodejní cenu. Marži doplní server-side Tag Manager z feedu nebo ERP až na serveru a do Google Ads nebo Mety odejde konverze s hodnotou marže. V Google Ads lze navíc využít data o košíku: když v Merchant Center doplníte náklady na zboží, Google Ads ukáže hrubý zisk podle kampaní. Potřebujeme od vás zdroj marží a pravidlo, jak zacházet s dopravou, slevami a vratkami.',
    },
    {
      q: 'Kolik měření e-shopu stojí a z čeho se cena skládá?',
      a: 'Ceník neuvádíme, protože dva e-shopy na stejné platformě mohou potřebovat úplně jiný rozsah. Cenu určuje hlavně platforma, tedy jestli má nativní dataLayer, nebo jde o vlastní vývoj. Dále stav současného měření, počet reklamních systémů a trhů, úroveň 1–4 a to, jestli měření nastavujeme jednorázově, nebo ho dlouhodobě spravujeme. Provoz server-side na Google Cloudu platíte napřímo Googlu. Po úvodní konzultaci a krátkém auditu dostanete nabídku s pevným rozsahem, výstupy a termínem.',
    },
    {
      q: 'Jak dlouho implementace trvá a musí do ní zasahovat náš vývojář?',
      a: 'Délka záleží hlavně na platformě, úrovni a počtu reklamních systémů a termín dostanete v nabídce. Na Shoptetu, Upgates a Shopify se většinou obejdeme bez vývojáře – stačí přístupy do administrace. U WooCommerce, PrestaShopu a vlastních řešení obvykle potřebujeme úpravu šablony nebo kód. Vývojářům dodáme přesnou specifikaci a výsledek otestujeme. Čas si bere hlavně validace: měření necháme běžet, abychom ho mohli porovnat s administrací.',
    },
    {
      q: 'Co od nás budete potřebovat?',
      a: 'Přístupy: administrace e-shopu s rolí pro nastavení marketingu, Google Tag Manager, GA4, Google Ads a Merchant Center, Meta Business Manager, Sklik, Heureka a Seznam Nákupy. Dále kontakt na vývojáře nebo podporu platformy, možnost udělat testovací objednávku a export objednávek za zvolené období pro porovnání. U server-side přístup do Google Cloudu, nebo souhlas, že projekt založíme na vaši firmu, a DNS záznam pro subdoménu. Pošleme návod, jak přístupy udělit a po projektu odebrat.',
    },
    {
      q: 'Komu budou patřit účty, kontejnery a data?',
      a: 'Vám. GA4, Google Tag Manager, projekt v Google Cloudu, BigQuery i reklamní účty zakládáme na vaši firmu, nebo pracujeme ve stávajících. My v nich máme jen uživatelský přístup, který můžete kdykoli odebrat. Kontejnery předáváme s jasnými názvy a s dokumentací, aby v nich mohl pokračovat kdokoli jiný. Žádný proprietární skript ani server, bez kterého by měření přestalo fungovat.',
    },
    {
      q: 'Je měření v souladu s GDPR a pravidly pro cookies?',
      a: 'Měření nastavujeme konzervativně: marketingové a analytické tagy web spustí až po souhlasu, odmítnutí je rovnocenné přijetí a Consent Mode v2 posílá Googlu správné signály. Vycházíme z § 89 odst. 3 zákona o elektronických komunikacích a doporučení ÚOOÚ. Do GA4 neposíláme e-maily ani jiné osobní údaje v čitelné podobě. Nejsme advokátní kancelář – texty zásad a právní posouzení by měl schválit váš právník. Rádi mu dodáme technický popis toho, co web kam posílá. Víc na stránce <a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode</a>.',
    },
    {
      q: 'Měříte i Sklik, Heureku a Seznam Nákupy?',
      a: 'Ano, česká specifika jsou běžná součást měření e-shopu. Sklik přechází na Seznam Event Measurement – nový způsob měření konverzí a retargetingu přes kód, šablonu v GTM, plugin platformy nebo server-to-server. Přechod je zatím dobrovolný, ale Seznam avizuje, že ho budou muset udělat všechny účty. Nastavíme ho souběžně se starým měřením a ověříme data. U Heureky nastavujeme měření konverzí a Ověřeno zákazníky, pro Seznam Nákupy měření konverzí – vždy s ohledem na souhlas návštěvníka.',
    },
    {
      q: 'Měníme platformu nebo děláme redesign. Kdy se máme ozvat?',
      a: 'Ideálně ve chvíli, kdy vzniká zadání. Jako součást vývoje vyjde správné měření levněji než oprava po spuštění: dodáme specifikaci datové vrstvy, vývojáři ji implementují a my ji před spuštěním otestujeme. Pohlídáme také přenos historických dat, nová ID kontejnerů, cookie lištu a přesměrování, aby měření kampaní po spuštění fungovalo dál. Pokud už web běží, začneme auditem a opravíme, co při migraci vypadlo.',
    },
  ],

  relatedArticles: [
    { slug: 'ga4-pro-eshopove-platformy', title: 'GA4 na Shoptetu, Upgates, WooCommerce a Shopify' },
    {
      slug: 'ga4-ecommerce-datalayer',
      title: 'GA4 e-commerce dataLayer: události od view_item po purchase s ukázkami kódu',
    },
    { slug: 'proc-nesedi-data', title: 'Proč nesedí čísla: GA4 vs. Google Ads vs. Meta vs. administrace e-shopu' },
    { slug: 'meta-conversions-api', title: 'Meta Conversions API: nastavení, deduplikace event_id a Event Match Quality' },
    {
      slug: 'propojeni-dat-eshop-crm-ga4',
      title: 'Propojení dat z e-shopu a CRM s GA4: marže, vratky a hodnota zákazníka',
    },
  ],

  relatedPages: [
    'sluzby/server-side-tracking',
    'sluzby/mereni-konverzi',
    'sluzby/audit-mereni',
    'sluzby/implementace-ga4',
    'sluzby/datova-vrstva',
    'sluzby/cookie-lista-consent-mode',
    'sluzby/bigquery',
    'sluzby/dashboardy-a-reporting',
  ],

  contact: {
    formId: 'lp-eshopy',
    topics: ['ga4', 'konverze'],
    title: 'Ukažte nám svůj e-shop. Řekneme, kde utíkají objednávky',
    lead: 'Napište nám, nebo rovnou vyplňte formulář. Na úvodní třicetiminutové konzultaci projdeme měření, platformu a reklamní kanály a řekneme, co opravit jako první – nezávazně a zdarma.',
    placeholder:
      'Např. jsme na Shoptetu, GA4 ukazuje o patnáct procent méně objednávek než administrace a Meta hlásí ještě méně…',
    leadType: 'consultation',
  },

  schema: {
    name: 'Měření pro e-shopy',
    serviceType: 'Implementace měření e-shopu: GA4, Google Tag Manager, Consent Mode v2, server-side a konverze',
    description:
      'Kompletní měření e-shopu: datová vrstva, GA4 e-commerce, cookie lišta s Consent Mode v2, server-side měření, konverze pro Google Ads, Metu, Sklik, Heureku a Seznam Nákupy, marže, BigQuery a dashboard.',
    audience: 'E-shopy',
  },
};
