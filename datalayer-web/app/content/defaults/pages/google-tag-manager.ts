import type { PageInput } from '../../schema';

// Štíhlá šablona LP podle vyhodnocení webu (9. října 2026, kap. 3.1 a 5.2)
// a vzorové stránky server-side-tracking.ts. Zdroj obsahu:
// seo-analyza/03_landing-pages/02_google-tag-manager.md. Jádro stránky tvoří
// taby „Nastavení, audit, nebo správa?“ – kotva #audit slouží tlačítku v hero
// a budoucímu článku C4. Ze tří tabulek pravidel zbyla karta s ukázkou
// názvosloví a třemi pravidly, výkon shrnuje karta ve výstupech, souhlas FAQ
// a přesun kódů tři kroky v postupu. Konvence názvosloví, oprávnění a mapování
// tagů na souhlas zůstávají ve sbalených Technických detailech, dokud nevyjdou
// články C4 a A1. Jediná tabulka „Kde mají měřicí kódy žít?“ má kvůli limitu
// tří sloupců jen dvě varianty, server-side GTM shrnuje věta pod ní. Přesun
// kódů drží fakta ze zadání LP – přepnutí v jednom nasazení, ne „paralelní
// běh“ z plánu, protože souběh kódů natvrdo a GTM by zdvojil konverze. Dokud
// klient nedodá podklady, stránka neobsahuje případovou studii, počet
// kontejnerů, délky kroků a auditu, reakční dobu a SLA u správy, formát
// školení ani šablonu názvosloví ke stažení. H2 kontaktu drží tabulku 3.5
// specifikace formulářů (návrh „Dáme váš Tag Manager do pořádku“ klient zatím
// nepřijal).

export const page: PageInput = {
  path: 'sluzby/google-tag-manager',
  kind: 'service',
  navTitle: 'Google Tag Manager',
  tagline: 'pořádek v tazích a verzích',
  pictogram: 'gtm',
  menuGroup: 'sber',

  seo: {
    title: 'Google Tag Manager – nastavení, audit, správa | datalayer.cz',
    description:
      'Desítky tagů, které nikdo nezná? Nastavíme, zaudítujeme a spravujeme Google Tag Manager: názvosloví, verze, práva, consent i výkon. Konzultace zdarma.',
  },

  hero: {
    eyebrow: 'gtm · sběr dat',
    h1: 'Google Tag Manager: nastavení, audit a správa',
    subtitle:
      'Google Tag Manager je bezplatný nástroj Googlu, přes který vložíte na web měřicí a marketingové kódy, tedy tagy, bez zásahu do zdrojového kódu. Nový kontejner nastavíme, stávající zkontrolujeme a uklidíme, nebo ho budeme dlouhodobě spravovat – vždy s pravidly pro názvy, verze, oprávnění a Consent Mode v2, aby se v něm vyznal i další člověk.',
    primaryCta: { label: 'Konzultovat GTM', href: '#kontakt' },
    secondaryCta: { label: 'Chci audit kontejneru', href: '#audit' },
    microcopy: 'Úvodní třicetiminutová konzultace zdarma · odpovíme do jednoho pracovního dne',
  },

  trust: ['Každá změna jako verze s popisem', 'Kontejner zůstává na vašem účtu', 'Consent Mode v2 v každém kontejneru'],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Poznáváte svůj Tag Manager?',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'Desítky tagů, které nikdo nezná',
              text: 'Agentury se střídaly, tagy s názvy jako „New Tag (3)“ zůstaly a nikdo neví, které z nich jsou potřeba.',
              pictogram: 'gtm',
              tag: 'tags: 120',
            },
            {
              title: 'Publikuje každý, bez popisu',
              text: 'Verze 87 nemá popis, a když spadly konverze, nikdo neví, co se změnilo.',
              pictogram: 'monitor',
              tag: 'v87 ?',
            },
            {
              title: 'Kódy na třech místech',
              text: 'Část kódů žije v šabloně webu, část v pluginu a část v GTM, takže reklamní systémy počítají konverze dvakrát.',
              pictogram: 'conversion',
              tag: 'duplicate',
            },
            {
              title: 'Tagy běží před souhlasem',
              text: 'GTM spouští reklamní pixely dřív, než návštěvník klikne na cookie lištu.',
              pictogram: 'consent',
              tag: 'consent',
            },
          ],
        },
      ],
    },

    {
      id: 'spoluprace',
      eyebrow: 'služby',
      title: 'Nastavení, audit, nebo správa?',
      tone: 'dark',
      blocks: [
        {
          type: 'tabs',
          group: 'gtm_sluzba',
          items: [
            {
              id: 'nastaveni',
              label: 'Nastavení nového kontejneru',
              paragraphs: [
                '<strong>Kdy se hodí:</strong> nový web, redesign, přechod z kódů natvrdo, nebo kontejner tak chaotický, že je levnější začít znovu.',
              ],
              bullets: [
                'návrh kontejneru podle měřicího plánu: které tagy, spouštěče a proměnné a proč',
                'Google tag pro GA4 a Google Ads, šablona cookie lišty a Consent Mode v2',
                'tagy Google Ads, Mety, Skliku, Heureky, TikToku nebo LinkedInu podle potřeby',
                'složky, názvosloví, vývojové prostředí pro testy a dokumentace',
              ],
            },
            {
              id: 'audit',
              label: 'Audit a úklid',
              paragraphs: [
                '<strong>Kdy se hodí:</strong> převzetí kontejneru od agentury, konverze, které nesedí, pomalý web, redesign nebo nasazení server-side. Audit samotného GTM je užší než <a href="/sluzby/audit-mereni">audit měření</a>, který prověří i GA4 a reklamní systémy.',
              ],
              bullets: [
                'inventura tagů, spouštěčů a proměnných: co je duplicitní a co nikdy neběží',
                'názvosloví, Custom HTML a šablony třetích stran',
                'kontrola souhlasu u každého tagu a pořadí spouštění',
                'verze, oprávnění, kódy mimo GTM a dopad na rychlost webu',
              ],
            },
            {
              id: 'sprava',
              label: 'Průběžná správa',
              paragraphs: [
                '<strong>Kdy se hodí:</strong> marketing průběžně potřebuje nové tagy a GTM interně nikdo nespravuje, nebo velká firma chce externího „strážce“ pravidel. Navazuje služba <a href="/sluzby/sprava-webu-a-mereni">Správa webu a měření</a>.',
              ],
              bullets: [
                'nové tagy na požadavek: ticket, workspace, test, verze s popisem a publikace',
                'měsíční kontrola, že klíčové tagy běží',
                'revize oprávnění',
                'aktualizace šablon a reakce na změny platforem, třeba Seznamu nebo Google tagu',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      eyebrow: 'výstupy',
      title: 'Co uděláme a co dostanete',
      lead: 'Kontejner s dokumentací, ve které se nový člověk nebo agentura zorientuje za hodinu, ne za týden.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'gtm-container',
              title: 'Publikovaný kontejner',
              text: 'Každá verze má datum a popis změny. Po auditu publikujeme úklid po dohodě.',
            },
            {
              tag: 'container-card',
              title: 'Karta kontejneru',
              text: 'Seznam tagů s účelem, vlastníkem, kategorií souhlasu a datem poslední kontroly.',
            },
            {
              tag: 'inventory · A/B/C',
              title: 'Inventura a report nálezů',
              text: 'U auditu tabulka všech tagů s doporučením ponechat, upravit, nebo smazat a nálezy podle priority A, B a C.',
            },
            {
              console: ['GA4 – Event – purchase', 'CE – purchase', 'DLV – ecommerce.transaction_id'],
              tag: 'naming',
              title: 'Pravidla kontejneru',
              text: 'Ze šesti pravidel, která zavádíme do každého kontejneru:',
              bullets: ['jednotné názvy a složky podle platformy', 'osobní účty a revize oprávnění každé čtvrtletí', 'šablony místo Custom HTML'],
            },
            {
              tag: 'perf',
              title: 'Rychlejší web',
              text: 'Rychlost hlídáme při nastavení i úklidu:',
              bullets: [
                'nepoužívané tagy pryč, velikost kontejneru pod kontrolou',
                'těžké skripty jen tam, kde je potřebujete',
                'jeden Google tag pro GA4 i Google Ads, bez duplicit',
              ],
            },
            {
              tag: 'qa · changelog',
              title: 'Testovací protokol a předání',
              text: 'Kontrola v Tag Assistantu a náhledu, hodinové zaškolení týmu. Při správě changelog a měsíční přehled změn.',
            },
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      eyebrow: 'diagram',
      title: 'Co se děje uvnitř kontejneru',
      lead: 'Web zapíše událost do datové vrstvy a spouštěč rozhodne, kterých tagů se týká. Kontrola souhlasu pak rozhodne, jestli je GTM smí spustit.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Schéma GTM: událost z datové vrstvy → spouštěč → kontrola souhlasu z cookie lišty → tagy GA4, Google Ads a Meta, volitelně server-side GTM. Celé nastavení drží verze s popisem, workspaces a oprávnění.',
          columns: [
            { label: 'dataLayer', items: ['event: purchase'], note: 'Web zapíše událost do datové vrstvy.' },
            {
              label: 'Spouštěč',
              items: ['CE – purchase'],
              note: 'GTM spustí tag jen při události purchase, ne při každém načtení stránky.',
            },
            { label: 'Kontrola souhlasu', items: ['Consent Initialization', 'výchozí stav denied', 'update z cookie lišty'] },
            {
              label: 'Tagy',
              items: [
                'GA4 – Event – purchase: analytics_storage',
                'Google Ads – Conversion: ad_storage + ad_user_data',
                'Meta – Event – Purchase: ad_storage',
                'server-side GTM, volitelně',
              ],
              note: 'Bez souhlasu tag čeká. Jen tagy Google v advanced režimu pošlou cookieless ping.',
            },
            { label: 'Governance', items: ['verze s popisem', 'workspaces', 'oprávnění'] },
          ],
        },
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Jedna událost pro všechny tagy.</strong> Web zapíše nákup jednou a GTM ho předá GA4, Google Ads i Metě se stejnou hodnotou.',
            '<strong>Verze s popisem.</strong> Při problému víte, co se změnilo, a vrátíte se o verzi zpět.',
            '<strong>Základ pro GA4.</strong> Přes kontejner nasazujeme i <a href="/sluzby/implementace-ga4">implementaci GA4</a> a konverze reklamních systémů.',
          ],
        },
      ],
    },

    {
      id: 'rozhodnuti',
      eyebrow: 'rozhodnutí',
      title: 'Kde mají měřicí kódy žít?',
      lead: 'Pro většinu webů je Google Tag Manager výchozí volba. Kódy natvrdo v šabloně nechte jen u kritických skriptů webu.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          head: ['Kritérium', 'Kódy natvrdo v šabloně', 'Google Tag Manager'],
          highlightColumn: 2,
          rows: [
            ['Změna tagu', 'vývojář a nasazení webu', 'marketing nebo analytik, bez nasazení'],
            ['Kontrola souhlasu', 'ručně v kódu, často chybí', 'centrálně přes Consent Mode'],
            ['Historie změn', 'Git webu, pokud vůbec', 'verze kontejneru s popisem'],
            ['Náklady na provoz', 'žádné', 'žádné, kromě placeného GTM 360'],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Třetí možnost je GTM se server-side GTM: část tagů poběží na serveru a v prohlížeči zůstane méně skriptů, server ale potřebuje hosting a správu. Vyplatí se hlavně e-shopům a firmám s větším rozpočtem na reklamu, víc na stránce <a href="/sluzby/server-side-tracking">Server-side tracking</a>.',
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak spolupráce probíhá',
      lead: 'Stejných pět kroků jako u všech našich služeb. U auditu znamená třetí krok úklid v samostatném workspace, u správy pokračujeme měsíční kontrolou.',
      tone: 'white',
      blocks: [
        {
          type: 'process',
          implementation:
            'Kontejner nastavíme nebo uklidíme v samostatném workspace, napojíme tagy na datovou vrstvu a souhlas a před publikací vše otestujeme.',
          implementationFromClient: 'administrátorská práva k GTM, testovací prostředí a přístup do cookie lišty',
        },
        {
          type: 'list',
          style: 'check',
          title: 'Přesun kódů z webu do GTM bez výpadku dat',
          items: [
            '<strong>Příprava:</strong> ke každému kódu na webu najdeme náhradu v GTM a otestujeme ji ve workspace.',
            '<strong>Přepnutí:</strong> kódy z webu odstraníme ve stejném nasazení, ve kterém publikujeme kontejner.',
            '<strong>Porovnání:</strong> sedm až čtrnáct dní srovnáváme konverze s obdobím před přesunem.',
          ],
        },
      ],
    },
  ],

  techDetails: {
    summary: 'Technické detaily: názvosloví, oprávnění a souhlas v GTM',
    blocks: [
      {
        type: 'table',
        caption: 'Názvosloví – ukázka konvence',
        head: ['Prvek', 'Formát', 'Příklady'],
        rows: [
          [
            'Tag',
            '<code>{Platforma} – {Typ} – {Událost}</code>',
            '<code>GA4 – Event – purchase</code> · <code>Google Ads – Conversion – Nákup</code> · <code>Sklik – SEM – purchase</code>',
          ],
          ['Spouštěč', '<code>{Typ} – {Podmínka}</code>', '<code>CE – purchase</code> · <code>Click – Link – tel:</code> · <code>Consent Init – All Pages</code>'],
          ['Proměnná', '<code>{Typ} – {Název}</code>', '<code>DLV – ecommerce.transaction_id</code> · <code>Const – GA4 ID</code>'],
          ['Složky', 'podle platformy', '<code>01 GA4</code> · <code>02 Google Ads</code> · <code>90 Consent</code> · <code>99 Utility</code>'],
          ['Verze', '<code>RRRR-MM-DD – změna</code>', '<code>2026-10-08 – deduplikace purchase podle transaction_id</code>'],
        ],
      },
      {
        type: 'paragraphs',
        items: ['Zkratky: CE je vlastní událost neboli custom event, DLV proměnná datové vrstvy.'],
      },
      {
        type: 'list',
        style: 'check',
        title: 'Oprávnění',
        items: [
          'Administrátor účtu je vlastník za firmu, aspoň dva lidé, ne agentura.',
          'Publikovat smí jeden až dva lidé. Agentura pracuje ve vlastním workspace s právem Upravit.',
          'Vývojář a dočasný dodavatel mají jen Číst a po skončení práce jim oprávnění odeberete.',
          'Bezplatný GTM má tři workspaces, schvalovací workflow a zóny nabízí jen Tag Manager 360.',
        ],
      },
      {
        type: 'list',
        style: 'check',
        title: 'Tagy a souhlas: standardní nastavení',
        items: [
          'Google tag a GA4: <code>analytics_storage</code>, pro reklamní funkce i <code>ad_storage</code> a <code>ad_user_data</code>.',
          'Google Ads: <code>ad_storage</code>, <code>ad_user_data</code> a <code>ad_personalization</code>.',
          'Meta Pixel: <code>ad_storage</code>. Hotjar a Microsoft Clarity: <code>analytics_storage</code>. Sklik podle dokumentace Seznamu.',
          'Pro návštěvníky z EHP začínají všechny čtyři signály na <code>denied</code>. Finální mapování určí CMP a právní posouzení.',
        ],
      },
    ],
  },

  faq: [
    {
      q: 'Kolik stojí nastavení nebo audit GTM?',
      a: 'Cenu stanovujeme podle rozsahu: u nastavení rozhoduje počet platforem a událostí a to, jestli web má datovou vrstvu, u auditu velikost kontejneru a počet webů. Po úvodní konzultaci dostanete nabídku s pevným rozsahem. Samotný Google Tag Manager je zdarma, peníze stojí jen verze Tag Manager 360 a případný server pro server-side měření, který hradíte napřímo poskytovateli.',
    },
    {
      q: 'Jak dlouho trvá nastavení nebo audit?',
      a: 'Nastavení trvá podle toho, jestli web už má datovou vrstvu, nebo ji vývojáři musí teprve připravit. Délku auditu určuje hlavně velikost kontejneru a počet webů. Po přesunu kódů z webu ještě sedm až čtrnáct dní porovnáváme konverze s obdobím před migrací.',
    },
    {
      q: 'Komu patří kontejner a kdo k němu bude mít přístup?',
      a: 'Kontejner zakládáme na firemním účtu GTM a administrátor jste vy, ideálně dva lidé z firmy. My i agentury dostáváme jen oprávnění, která potřebujeme: pro audit čtení, pro správu úpravy nebo publikaci. Po skončení spolupráce nám oprávnění jednoduše odeberete.',
    },
    {
      q: 'Jak v GTM řešíte souhlas s cookies?',
      a: 'Šablona cookie lišty běží na spouštěči Consent Initialization, takže GTM zná výchozí stav souhlasu dřív než jakýkoli tag. Tagy Google mají vestavěné kontroly souhlasu, ostatním tagům, třeba Metě nebo Hotjaru, nastavujeme dodatečné kontroly a vše ověřujeme v Tag Assistantu. Lištu, texty a režim basic, nebo advanced řeší služba <a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode v2</a>, kategorie souhlasu by měl posoudit váš právník.',
    },
    {
      q: 'Musí do toho zasahovat náš vývojář?',
      a: 'Většinou jen na začátku: vloží kód kontejneru a doplní datovou vrstvu, tedy údaje o produktech, objednávkách a formulářích, které GTM sám spolehlivě nezjistí. Specifikaci mu připravíme a jeho práci otestujeme. U platforem jako Shoptet nebo Shopify část datové vrstvy už existuje a vývojáře někdy nepotřebujete vůbec.',
    },
    {
      q: 'Zpomalí Google Tag Manager web?',
      a: 'Samotný kontejner web výrazně nezpomalí. Zpomalují ho tagy uvnitř, hlavně těžké skripty třetích stran, třeba chaty, heatmapy nebo desítky pixelů na všech stránkách. Proto mažeme nepoužívané tagy, omezujeme Custom HTML, hlídáme ukazatel velikosti kontejneru a část tagů můžeme přesunout i na server.',
    },
  ],

  relatedArticles: [
    { slug: 'google-tag-manager-pruvodce', title: 'Průvodce Google Tag Managerem' },
    { slug: 'audit-gtm-kontejneru', title: 'Audit GTM kontejneru: nejčastější chyby' },
    { slug: 'consent-mode-v2-pruvodce', title: 'Consent Mode v2 v praxi' },
  ],

  relatedPages: ['sluzby/datova-vrstva', 'sluzby/server-side-tracking', 'sluzby/cookie-lista-consent-mode'],

  contact: {
    formId: 'lp-gtm',
    topics: ['ga4'],
    title: 'Uklidíme váš Tag Manager',
    lead: 'Na třicetiminutové konzultaci zdarma se podíváme na kontejner a řekneme, co řešit jako první.',
    placeholder: 'Např. v GTM máme 120 tagů a nikdo neví, co dělají…',
    leadType: 'consultation',
  },

  schema: {
    name: 'Google Tag Manager – nastavení, audit a správa',
    serviceType: 'Implementace, audit a správa Google Tag Manageru',
    description:
      'Nastavení nového kontejneru GTM, audit a úklid existujícího a průběžná správa: názvosloví, verze, workspaces, oprávnění, dokumentace, Consent Mode v2 a výkon.',
  },
};
