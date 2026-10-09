import type { PageInput } from '../../schema';

// Štíhlá šablona LP podle vyhodnocení webu (9. října 2026, kap. 3.1 a 5.4)
// a prototypu seo-analyza/prototyp/lp-server-side-stihla.html. Zdroj obsahu:
// seo-analyza/03_landing-pages/04_server-side-tracking.md. Hybridní
// architektura a rozpis nákladů zůstávají ve sbalených Technických detailech,
// dokud nevyjdou články B2 a B3. Dokud klient nedodá podklady, stránka
// neobsahuje případovou studii, délky kroků ani ilustrační monitoring
// s vymyšlenými čísly. Texty prošly jazykovým auditem z 9. října 2026
// (seo-analyza/2026-10-09_jazykovy-audit, kap. 3.7 a 5.2).

export const page: PageInput = {
  path: 'sluzby/server-side-tracking',
  kind: 'service',
  navTitle: 'Server-side tracking',
  tagline: 'měření na vaší doméně',
  pictogram: 'serverside',
  menuGroup: 'sber',

  seo: {
    title: 'Server-side tracking – měření na vaší doméně | datalayer.cz',
    description:
      'Server-side GTM na vaší doméně a ve vašem Google Cloudu. Meta Conversions API, Google Ads, GA4 i Sklik přes server, v souladu se souhlasem. Konzultace zdarma.',
  },

  hero: {
    eyebrow: 'sběr dat',
    h1: 'Server-side tracking na vaší doméně a ve vašem cloudu',
    subtitle:
      'Prohlížeč pošle každou událost jen jednou – na server-side Google Tag Manager (GTM) na vaší doméně. Ten ji podle souhlasu návštěvníka předá do GA4, Google Ads, Meta Conversions API (CAPI) nebo Skliku. Máte pod kontrolou, co a komu odchází; povinnost získat souhlas se nemění.',
    primaryCta: { label: 'Konzultovat architekturu', href: '#kontakt' },
    secondaryCta: { label: 'Jak to funguje', href: '#jak-to-funguje' },
    microcopy: 'Úvodní konzultace zdarma, provoz serveru platíte přímo Googlu nebo poskytovateli hostingu',
  },

  trust: ['Server ve vašem Google Cloudu', 'Kontejnery a přístupy zůstávají vaše', 'Monitoring je součástí nasazení'],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Poznáváte se?',
      lead: 'Server-side měření má smysl, když základní měření funguje, ale naráží na limity prohlížeče, na požadavky IT na rychlost nebo na kontrolu nad daty.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'Meta vidí méně nákupů než e-shop',
              text: 'Pixel zachytí jen část objednávek a kampaně se učí z neúplných dat.',
              pictogram: 'conversion',
              tag: 'Meta',
            },
            {
              title: 'Zákazníci ze Safari se „rozpadají“',
              text: 'Safari zkracuje cookies z JavaScriptu na sedm dní a vracející se zákazník vypadá jako nový.',
              pictogram: 'warn',
              tag: 'Safari',
            },
            {
              title: 'IT tlačí na rychlost a bezpečnost',
              text: 'Desítka cizích skriptů zpomaluje web a komplikuje bezpečnostní politiku.',
              pictogram: 'perf',
              tag: 'rychlost',
            },
            {
              title: 'Pověřenec pro ochranu osobních údajů chce vědět, co komu odchází',
              text: 'Bez prostředníka nemáte jak doložit ani omezit, co skripty posílají.',
              pictogram: 'gov',
              tag: 'osobní údaje',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      eyebrow: 'výstupy',
      title: 'Co uděláme a co dostanete',
      lead: 'Dostanete zdokumentovanou architekturu, kterou převezme váš tým nebo kdokoli jiný.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'architecture.pdf',
              title: 'Návrh architektury',
              text: 'Co jde přes server, co zůstává v prohlížeči a kde se rozhoduje o souhlasu.',
            },
            {
              tag: 'Cloud Run',
              title: 'Server ve vašem Google Cloudu',
              text: 'Cloud Run s nejméně dvěma servery, doména, certifikát a upozornění na rozpočet.',
            },
            {
              tag: 'gtm-web, gtm-server',
              title: 'Kontejnery GTM',
              text: 'Webový i serverový kontejner s verzemi a jednotnými názvy.',
            },
            {
              tag: 'events.csv',
              title: 'Mapa událostí a deduplikace',
              text: 'Stejné ID objednávky pro všechny platformy, žádná konverze dvakrát.',
            },
            {
              tag: 'matice-souhlasu',
              title: 'Matice souhlasu',
              text: 'Který tag smí běžet při jakém souhlasu – podklad pro pověřence.',
            },
            {
              tag: 'runbook.md',
              title: 'Monitoring a provozní příručka',
              text: 'Upozornění na výpadek a pokles událostí, postup při výpadku i plán pro odchod k jinému dodavateli.',
            },
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      eyebrow: 'architektura',
      title: 'Jak server-side měření funguje',
      lead: 'Místo pěti skriptů, které posílají data každý zvlášť, odejde z prohlížeče jedna událost na váš server. Ten ji rozešle dál.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Prohlížeč a backend posílají události na server-side GTM na vaší doméně. Server je podle souhlasu návštěvníka předá platformám.',
          columns: [
            { label: 'zdroje', items: ['prohlížeč: dataLayer a souhlas', 'backend nebo CRM: platby, storna, poptávky'] },
            { label: 'sgtm.vasweb.cz', items: ['server-side GTM', 'Cloud Run ve vašem cloudu', 'rozhodnutí podle souhlasu'] },
            { label: 'platformy', items: ['GA4 a Google Ads', 'Meta CAPI', 'Sklik a TikTok'] },
          ],
        },
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Kontrola nad daty.</strong> Osobní údaje před odesláním odstraníte nebo zahashujete.',
            '<strong>Spolehlivější konverze.</strong> Meta CAPI, rozšířené konverze Google Ads a platby z backendu.',
            '<strong>Souhlas platí dál.</strong> Kdo cookies odmítne, toho neměříme ani touto cestou.',
          ],
        },
      ],
    },

    {
      id: 'rozhodnuti',
      eyebrow: 'rozhodnutí',
      title: 'Kdy se server-side měření vyplatí',
      lead: 'Server-side měření není první krok. Když se vám nevyplatí, řekneme to rovnou.',
      tone: 'light',
      blocks: [
        {
          type: 'proscons',
          yes: {
            title: 'Má smysl, když…',
            items: [
              { text: 'reklama tvoří velkou část objednávek nebo poptávek' },
              { text: 'potřebujete Meta CAPI, Sklik nebo TikTok s deduplikací' },
              { text: 'chcete posílat události z backendu – platby, storna, CRM' },
              { text: 'IT nebo pověřenec požaduje kontrolu nad odchozími daty' },
              { text: 'někdo bude mít server na starosti a bude ho hlídat' },
            ],
          },
          no: {
            title: 'Doporučíme počkat, když…',
            items: [
              { text: 'nesedí základní měření', note: 'nejdřív <a href="/sluzby/audit-mereni">audit měření</a>' },
              { text: 'chybí funkční cookie lišta', note: 'nejdřív <a href="/sluzby/cookie-lista-consent-mode">Consent Mode v2</a>' },
              { text: 'inzerujete jen v Google Ads', note: 'často stačí Google Tag Gateway' },
              { text: 'máte malý rozpočet a návštěvnost' },
              { text: 'čekáte měření bez souhlasu – to server-side GTM nedělá' },
            ],
          },
        },
        {
          type: 'table',
          caption: 'Kde server poběží',
          head: ['Kritérium', 'Google Cloud ve vašem projektu', 'Spravovaný hosting – Stape, DataNostro'],
          rows: [
            ['Kdo vlastní účet', 'vy, faktury chodí od Googlu', 'vy, nebo agentura'],
            ['Provoz a aktualizace', 'Cloud Run škáluje sám, aktualizace řešíme my nebo IT', 'řeší poskytovatel'],
            ['Audit a přístupy', 'vlastní správa přístupů (IAM) a logy', 'v rozhraní poskytovatele'],
            ['Odchod k jinému dodavateli', 'nic nestěhujete', 'export kontejneru a změna DNS'],
            ['Volíme pro', 'velké firmy, regulované obory, víc domén', 'rychlý start, menší e-shopy'],
          ],
        },
        {
          type: 'figures',
          items: [
            { value: 'zhruba 45 dolarů', label: 'měsíčně za jeden server Cloud Run podle Googlu, pro produkci potřebujete aspoň dva' },
            { value: '110–150 dolarů', label: 'realistický měsíční provoz včetně load balanceru a logů, ceník k říjnu 2026' },
            { value: 'od 349 Kč', label: 'měsíčně spravovaný hosting DataNostro za 500 tisíc požadavků' },
          ],
          note: 'Před spuštěním spočítáme odhad pro vaši návštěvnost a nastavíme upozornění na rozpočet.',
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak nasazení probíhá',
      lead: 'Stejných pět kroků jako u všech našich služeb. Starý i nový způsob měření běží souběžně, dokud čísla nesedí.',
      tone: 'white',
      blocks: [
        {
          type: 'process',
          implementation:
            'Nasadíme server do vašeho Google Cloudu, napojíme web a platformy – GA4, Google Ads, Meta CAPI a Sklik – a nastavíme deduplikaci.',
          implementationFromClient: 'fakturační účet Google Cloud, úprava DNS, role v reklamních účtech',
        },
      ],
    },

    {
      id: 'monitoring',
      eyebrow: 'monitoring',
      title: 'Jak poznáte, že server-side měření funguje',
      lead: 'Když server vypadne, nepřestane měřit jeden tag, ale všechny platformy najednou. Proto monitoring patří ke každému nasazení a neplatíte za něj příplatek.',
      tone: 'dark',
      layout: 'split',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            'upozornění při výpadku měřicího endpointu a při vyšší chybovosti serveru',
            'denní srovnání objednávek: backend, server, GA4 a Meta',
            'kontrola deduplikace a kvality shody událostí v Metě',
            'upozornění na rozpočet v Google Cloudu a přehled publikovaných verzí kontejneru',
          ],
        },
      ],
    },
  ],

  techDetails: {
    summary: 'Co jde přes server a co zůstává v prohlížeči',
    blocks: [
      {
        type: 'table',
        caption: 'Platformy v hybridní architektuře',
        head: ['Platforma', 'Přes server', 'V prohlížeči a deduplikace'],
        rows: [
          ['GA4', 'Událost přes klienta GA4 v server-side GTM', 'Google tag posílá data na vaši doménu'],
          ['Google Ads', 'Konverze a rozšířené konverze s hashovanými údaji', 'Google tag a zachycení <code>gclid</code>, deduplikace přes <code>transaction_id</code>'],
          ['Meta', 'CAPI s hashovaným e-mailem a telefonem', 'Meta Pixel souběžně, stejné <code>event_name</code> a <code>event_id</code>'],
          ['Sklik', 'Seznam Event Measurement ze serveru na server', 'Povinný <code>sul.js</code>, stejnou událost posíláme jen jednou cestou'],
          ['TikTok a LinkedIn', 'Events API a Conversions API', 'TikTok Pixel a LinkedIn Insight Tag se stejným <code>event_id</code>'],
        ],
      },
      {
        type: 'paragraphs',
        items: [
          'Náklady na provoz Cloud Run tvoří servery, malý náhledový server pro ladění, logy, síť a případně load balancer pro endpoint na stejné doméně. Při více než zhruba milionu požadavků měsíčně mohou logy podle Googlu náklady výrazně zvýšit, proto nastavujeme rozumnou úroveň logování. Region <code>europe-west3</code> ve Frankfurtu patří do dražšího pásma. V sezónních špičkách, třeba na Black Friday, může být krátkodobě potřeba víc serverů.',
        ],
      },
    ],
  },

  faq: [
    {
      q: 'Je server-side měření legální? Potřebuji pořád cookie lištu?',
      a: 'Lištu potřebujete dál. Server-side měření je jen jiná technická cesta: ukládání a čtení netechnických údajů dál vyžaduje předchozí souhlas podle § 89 odst. 3 zákona o elektronických komunikacích. Server proto s každou událostí dostane stav souhlasu a podle něj data pošle, nebo ne. Nejsme advokátní kancelář – právní posouzení zajistí váš právník.',
    },
    {
      q: 'Pomůže server-side měření proti adblockům a omezením v Safari?',
      a: 'Obcházet volbu návštěvníka není cíl. Server-side měření pomůže tam, kde limity prohlížeče dopadají i na souhlasící návštěvníky: cookies, které nastaví server vaší domény, omezuje ochrana proti sledování v Safari (ITP) méně přísně než cookies z JavaScriptu. Kdo měření odmítne, toho neměříme.',
    },
    {
      q: 'Kolik stojí implementace a provoz serveru?',
      a: 'Cena implementace se odvíjí od rozsahu – rozhoduje počet platforem a domén, stav datové vrstvy a požadavky IT. Fakturu za provoz dostáváte přímo od Googlu nebo poskytovatele hostingu: u Cloud Run realisticky 110–150 dolarů měsíčně, spravovaný hosting stojí od stovek korun. Odhad pro vaši návštěvnost připravíme ještě před spuštěním.',
    },
    {
      q: 'Jak dlouho trvá nasazení a co od nás potřebujete?',
      a: 'Délku určuje hlavně to, jak dlouho musí staré a nové měření běžet souběžně, než se čísla shodnou, a u velkých firem i bezpečnostní revize. Harmonogram naplánujeme v prvním kroku. Potřebujeme přístupy do GTM, GA4 a reklamních účtů přes role, fakturační účet Google Cloud, úpravu DNS a vývojáře pro případné úpravy datové vrstvy.',
    },
    {
      q: 'Google Tag Gateway, nebo server-side GTM?',
      a: 'Gateway načítá Google tag z vaší domény přes síť pro doručování obsahu (CDN). Je jednodušší a levnější, ale jen pro tagy Google a bez úprav dat. Pokud chcete Metu, Sklik, kontrolu nad osobními údaji nebo události z backendu, potřebujete server-side GTM. Obojí lze kombinovat.',
    },
    {
      q: 'Komu patří data, účty a kontejnery?',
      a: 'Vám. Server běží ve vašem Google Cloudu, kontejnery i reklamní účty jsou vaše a my dostáváme jen role. Po skončení spolupráce odebereme své přístupy podle provozní příručky a měření běží dál beze změny.',
    },
  ],

  relatedArticles: [
    { slug: 'server-side-tracking-pruvodce', title: 'Průvodce server-side trackingem' },
    { slug: 'propojeni-client-side-a-server-side', title: 'Propojení client-side a server-side měření' },
    { slug: 'hosting-server-side-gtm', title: 'Stape, Cloud Run, nebo český hosting?' },
  ],

  relatedPages: ['sluzby/mereni-konverzi', 'sluzby/cookie-lista-consent-mode', 'sluzby/sprava-webu-a-mereni'],

  contact: {
    formId: 'lp-server-side',
    topics: ['server-side'],
    title: 'Probereme, jestli se vám server-side měření vyplatí',
    lead: 'Na úvodní konzultaci projdeme vaše měření a řekneme, jestli je server-side GTM další krok, nebo je potřeba nejdřív opravit základ.',
    placeholder: 'Např. Meta vidí o třetinu méně nákupů než e-shop…',
    leadType: 'consultation',
  },

  schema: {
    name: 'Server-side tracking se serverovým Google Tag Managerem',
    serviceType: 'Server-side tracking a měření konverzí',
    description:
      'Návrh a nasazení server-side Google Tag Manageru na doméně a v Google Cloudu klienta: GA4, Google Ads, Meta Conversions API, Seznam Event Measurement a TikTok Events API přes server, deduplikace, monitoring a dokumentace. Vždy v souladu se souhlasem návštěvníka.',
    audience: 'E-shopy, B2B firmy a velké firmy',
  },
};
