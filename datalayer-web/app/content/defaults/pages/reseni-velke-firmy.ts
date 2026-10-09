import type { PageInput } from '../../schema';

// Štíhlá šablona LP podle vyhodnocení webu (9. října 2026, kap. 3.1 a 5.14).
// Zdroj obsahu: seo-analyza/03_landing-pages/14_reseni-velke-firmy.md.
// Governance, výstupy a předání tvoří jeden blok šesti karet, server-side a BigQuery
// v EU dvě karty pod diagramem a tabulku smluv checklist pro nákup a IT. Rozhodnutí
// pro více trhů, srovnání GA4 a GA4 360 a ukázka testu datové vrstvy zůstávají ve
// sbalených Technických detailech, dokud nevyjdou články; otázka GA4 360 je ve FAQ
// a tabulka RACI patří do článku C4. Dokud klient nedodá podklady, stránka neobsahuje
// reakční doby SLA (zůstává tabulka priorit), bezpečnostní přehled ke stažení, počet
// a typ enterprise projektů, loga a certifikace, subzpracovatele a pojištění, podklady
// pro výběrové řízení, případovou studii, délky fází, Terraform ani vztah ke GA4 360.

export const page: PageInput = {
  path: 'reseni/velke-firmy',
  kind: 'solution',
  navTitle: 'Velké firmy',
  tagline: 'governance, server-side ve vašem cloudu, SLA',
  pictogram: 'gov',

  seo: {
    title: 'Měření pro velké firmy: governance a BigQuery | datalayer.cz',
    description:
      'Governance měření pro velké firmy: měřicí plán, verzování GTM, práva, server-side na vašem Google Cloudu, BigQuery v EU, DPA a SLA. Úvodní schůzka zdarma.',
  },

  hero: {
    eyebrow: 'řešení pro velké firmy',
    h1: 'Měření pro velké firmy: řízené, auditovatelné, vaše',
    subtitle:
      'Měření, které projde bezpečnostním review, přežije release webu a dá stejná čísla na všech trzích. Stojí na governance – jednotném měřicím plánu, názvosloví, release procesu Tag Manageru a řízení přístupů – a na server-side a BigQuery ve vašem Google Cloudu s daty v EU. Smluvní rámec tvoří zpracovatelská smlouva a SLA, na kterém se dohodneme.',
    primaryCta: { label: 'Domluvit úvodní schůzku', href: '#kontakt' },
    secondaryCta: { label: 'Bezpečnost a soulad', href: '#bezpecnost' },
    microcopy: 'Rádi přizveme i IT a DPO · NDA před první schůzkou na požádání',
  },

  trust: ['Server-side a BigQuery ve vašem cloudu', 'Data v EU, region volíte vy', 'Zpracovatelská smlouva a NDA předem'],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Poznáváte se?',
      lead: 'Čím víc trhů, týmů a agentur, tím snáz se měření rozpadne.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'Každý trh měří jinak',
              text: 'Česko posílá <code>purchase</code>, Slovensko <code>nakup</code> a Maďarsko nemá měnu – čísla za skupinu nejdou sečíst.',
              pictogram: 'datalayer',
              tag: 'trhy',
            },
            {
              title: 'V GTM má admin přístup kdekdo',
              text: 'Pět agentur, dva bývalí zaměstnanci a jeden neznámý e-mail – a nikdo neví, kdo co publikoval.',
              pictogram: 'gtm',
              tag: 'gtm',
            },
            {
              title: 'Release webu rozbije měření',
              text: 'Vývoj přejmenuje třídu tlačítka, konverze zmizí a přijdete na to až při měsíčním reportu.',
              pictogram: 'warn',
              tag: 'release',
            },
            {
              title: 'IT a DPO blokují změny',
              text: 'Nikdo jim neumí říct, kam data tečou a v jakém regionu, a server-side projekt stojí půl roku.',
              pictogram: 'serverside',
              tag: 'dpo',
            },
          ],
        },
      ],
    },

    {
      id: 'governance',
      eyebrow: 'governance',
      title: 'Governance měření: pravidla, která přežijí změny týmů i agentur',
      lead: 'Ve velké firmě měření nerozbije jedna velká chyba, ale stovka drobných změn od různých lidí. Pravidla nastavíme a předáme jako dokumenty, které patří vám.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'tracking-plan.xlsx',
              title: 'Měřicí plán',
              text: 'Jeden verzovaný plán pro všechny domény a trhy: každá událost má vlastníka a nové požadavky jdou přes plán, ne rovnou do GTM.',
            },
            {
              tag: 'naming-convention.md',
              title: 'Názvosloví a datový slovník',
              text: 'Jednotné názvy událostí, parametrů, tagů v GTM, UTM i tabulek v BigQuery a slovník, co který parametr znamená.',
            },
            {
              tag: 'release-process.md',
              title: 'Verzování a release proces',
              text: 'Změny vznikají v pracovních prostorech, testujeme je na stagingu, publikuje je jen určená role a každá verze má odkaz na požadavek.',
            },
            {
              tag: 'access-matrix.xlsx',
              title: 'Přístupová práva',
              text: 'Princip nejnižších oprávnění v GA4, GTM i Google Cloudu, agentury přes skupiny a jednou za čtvrtletí kontrola přístupů.',
            },
            {
              tag: 'data-flow-inventory.xlsx',
              title: 'Dokumentace pro IT a DPO',
              text: 'Schéma architektury, inventář datových toků a runbook pro incidenty píšeme tak, aby v nich mohl pokračovat kdokoli jiný.',
            },
            {
              tag: 'workshopy',
              title: 'Předání a zaškolení týmů',
              text: 'Marketing, vývojáře i analytiky zaškolíme na skutečných datech, ne na demo účtu – od reportů GA4 po export v BigQuery.',
            },
          ],
        },
      ],
    },

    {
      id: 'architektura',
      eyebrow: 'architektura',
      title: 'Jak vypadá architektura pro více trhů',
      lead: 'Všechny domény posílají data ve stejném formátu. Souhlas řešíme pro každou doménu zvlášť a platí i na serveru.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Domény a zákaznický portál posílají data přes jednotnou datovou vrstvu do GTM a CMP předává souhlas každé domény přes Consent Mode v2. Server-side GTM v Google Cloud projektu firmy pošle data do GA4 a reklamních systémů, GA4 je exportuje do BigQuery v EU, kam tečou i data z CRM a ERP. Governance – měřicí plán, názvosloví, Git, IAM a monitoring – řídí všechny vrstvy.',
          columns: [
            {
              label: 'domény a aplikace',
              items: ['firma.cz · firma.sk · firma.hu', 'zákaznický portál'],
              note: 'souhlas z CMP pro každou doménu',
            },
            { label: 'datová vrstva a GTM', items: ['jednotná specifikace', 'testy v CI', 'staging a produkce'] },
            { label: 'sGTM ve vlastním projektu', items: ['Cloud Run v EU', 'metrics.firma.cz'], note: 'first-party' },
            { label: 'cíle', items: ['GA4', 'Google Ads · Meta · LinkedIn'] },
            { label: 'BigQuery v EU', items: ['export z GA4', 'data z CRM a ERP', 'BI, které už používáte'] },
          ],
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              tag: 'gcp',
              title: 'Server-side ve vašem Google Cloudu',
              text: 'Billing, IAM, auditní logy i region máte pod kontrolou vy. Když IT provozuje jiný cloud, server-side GTM poběží v jakémkoli prostředí s Dockerem.',
            },
            {
              tag: 'bigquery · eu',
              title: 'BigQuery a data v EU',
              text: 'Region datasetu, třeba multiregion EU nebo Frankfurt, volíte hned při propojení s GA4 – pozdější přesun hrozí mezerou v datech.',
            },
          ],
        },
      ],
    },

    {
      id: 'bezpecnost',
      eyebrow: 'bezpečnost',
      title: 'Bezpečnost a soulad: checklist pro nákup a IT',
      lead: 'Ve velkém projektu je víc smluvních vztahů, než se zdá. Pomůžeme je zmapovat, aby DPO a právní oddělení věděli, co schvalují.',
      tone: 'light',
      note: 'Nejsme advokátní kancelář – právní posouzení patří právnímu oddělení nebo DPO.',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Zpracovatelská smlouva</strong> podle čl. 28 GDPR ještě před přístupem k datům, NDA i před první schůzkou.',
            '<strong>IAM:</strong> jmenovité účty s dvoufázovým ověřením, agentury přes skupiny, ne přes osobní e-maily.',
            '<strong>Logy:</strong> auditní logy Google Cloudu vidí interní bezpečnostní tým.',
            '<strong>Lokalita dat:</strong> Cloud Run i BigQuery v regionu, který zvolíte, typicky v EU. Kopie dat na vlastní zařízení stahujeme jen po dohodě.',
            '<strong>Odchod:</strong> po skončení spolupráce odebereme přístupy a měření běží dál beze změny.',
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak postupujeme u velkého projektu',
      lead: 'Stejných pět kroků jako u všech našich služeb. Audit u velkého projektu zahrnuje všechny domény, kontejnery a účty i rozhovory s marketingem, IT, DPO a agenturami.',
      tone: 'white',
      blocks: [
        {
          type: 'process',
          implementation:
            'Nejdřív pilot na jednom trhu nebo doméně, celý včetně server-side a testů, potom další trhy a domény podle jeho výsledků.',
          implementationFromClient: 'vývojový tým, projekt v Google Cloudu a DNS',
        },
        {
          type: 'list',
          style: 'check',
          title: 'Jak zapadneme do vývoje',
          items: [
            'exporty kontejnerů GTM ukládáme do vašeho repozitáře v Gitu',
            'každá změna prochází review a publikuje ji jen určená role',
            'změny testujeme na stagingu a datovou vrstvu automatickým testem v CI',
            'publikaci navážeme na release webu a 48 hodin po ní zvýšíme dohled',
          ],
        },
      ],
    },

    {
      id: 'sla',
      eyebrow: 'SLA',
      title: 'SLA a podpora po spuštění',
      lead: 'Rozsah podpory a reakční doby dohodneme ve smlouvě podle toho, jak kritická jsou pro vás data. Vždy ale definujeme, co je kritická chyba.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          head: ['Priorita', 'Příklad'],
          rows: [
            ['<strong>P1 – kritická</strong>', 'výpadek měření nákupů či leadů, tagy před souhlasem'],
            ['<strong>P2 – vysoká</strong>', 'chybí parametr, vypadl jeden reklamní systém'],
            ['<strong>P3 – běžná</strong>', 'nový požadavek na měření, úprava reportu'],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Podporu nabízíme ve třech úrovních: konzultace s pevným počtem hodin, provoz a provoz s asistencí u každého releasu. Provoz zahrnuje monitoring, řešení incidentů a měsíční report kvality dat. Jak hlídáme měření v provozu, popisujeme u služby <a href="/sluzby/sprava-webu-a-mereni">Správa webu a měření</a>.',
          ],
        },
      ],
    },

    {
      id: 'jak-poznate',
      eyebrow: 'monitoring',
      title: 'Jak poznáte, že měření funguje',
      lead: 'Monitoring patří ke governance: o problému víte do 24 hodin, ne až z měsíčního reportu.',
      tone: 'dark',
      layout: 'split',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            'všechny trhy posílají stejné události s měnou a čísla za skupinu jdou sečíst',
            'u každé změny v GTM dohledáte, kdo ji kdy udělal a proč',
            'test datové vrstvy v CI zastaví build, když chybí měna, hodnota nebo položky',
            'denní kontroly v BigQuery hlídají nákupy, prázdnou měnu i <code>(not set)</code>',
          ],
        },
      ],
    },
  ],

  techDetails: {
    summary: 'Technické detaily: více trhů, GA4 360 a test datové vrstvy',
    blocks: [
      {
        type: 'table',
        caption: 'Rozhodnutí pro více trhů, která děláme na začátku',
        head: ['Rozhodnutí', 'Možnosti', 'Na čem záleží'],
        rows: [
          ['Počet GA4 properties', 'jedna pro všechny trhy, jedna na trh, nebo roll-up v GA4 360', 'jedna zjednoduší skupinový report, víc properties oddělí práva a limity'],
          ['Cross-domain měření', 'pro domény, mezi kterými lidé přecházejí', 'nastavení v datovém streamu, nejvýš sto podmínek, stejné ID značky'],
          ['Souhlas napříč doménami', 'lišta na každé doméně, nebo sdílení přes CMP', 'sdílet jen tam, kde to CMP a právní posouzení umožní'],
          ['Měna', 'jedna měna property, nebo podle trhu', 'každá událost nese <code>currency</code>, účetní report počítáme v BigQuery s vlastním kurzem'],
          ['Časové pásmo', 'podle centrály, nebo podle trhu', 'jedno pro celou skupinu, jinak dny v reportech nesedí'],
          ['Interní provoz', 'filtr IP, cookie pro zaměstnance, testovací prostředí', 'stejná pravidla pro všechny trhy'],
          ['Nežádoucí odkazující zdroje', 'platební brány, SSO, rezervační systémy', 'seznam udržujeme centrálně'],
          ['Kontejnery GTM', 'jeden pro všechny domény, nebo jeden na trh', 'často kombinace: společný kontejner a pracovní prostory trhů'],
        ],
      },
      {
        type: 'table',
        caption: 'GA4 standard a GA4 360',
        head: ['Limit nebo funkce', 'GA4 standard', 'GA4 360'],
        rows: [
          ['Uchování dat v exploracích', 'až čtrnáct měsíců', 'až padesát měsíců'],
          ['Parametry na událost', '25', 'sto'],
          ['Klíčové události', 'třicet', 'padesát'],
          ['Publika', 'sto', '400'],
          ['Vzorkování v exploracích', 'deset milionů událostí na dotaz', 'miliarda událostí na dotaz'],
          ['Nevzorkované explorace', 'ne', 'ano, dvacet tisíc tokenů denně'],
          ['Denní export do BigQuery', 'milion událostí', 'miliardy událostí a Fresh Daily'],
          ['Kvóta API', '200 000 tokenů denně', 'dva miliony tokenů denně'],
          ['Import dat', 'deset GB na property', 'jeden TB na property'],
          ['Roll-up a sub-properties', 'ne', 'ano'],
          ['SLA', 'ne', 'ano, ve smlouvě GA 360'],
        ],
      },
      {
        type: 'paragraphs',
        items: [
          'Licenci GA4 360 prodávají Google a jeho certifikovaní partneři, cenu určuje objem dat. Streaming export do BigQuery limit objemu nemá, funguje ale bez garance úplnosti a stojí 0,05 dolaru za GB.',
        ],
      },
      {
        type: 'code',
        lang: 'js',
        caption: 'Zjednodušená ukázka testu v Playwrightu: běží při každém buildu, a když vývojář omylem odstraní měnu, build neprojde.',
        code: `test('purchase má měnu, hodnotu a položky', async ({ page }) => {
  await page.goto(process.env.STAGING_URL + '/test-checkout?order=QA-1');
  const purchase = await page.evaluate(() =>
    window.dataLayer.find(e => e.event === 'purchase'));
  expect(purchase.ecommerce.currency).toMatch(/^(CZK|EUR|HUF)$/);
  expect(purchase.ecommerce.value).toBeGreaterThan(0);
  expect(purchase.ecommerce.items.length).toBeGreaterThan(0);
});`,
      },
    ],
  },

  faq: [
    {
      q: 'Potřebujeme Google Analytics 360?',
      a: 'Záleží na objemu dat a na tom, jak je používáte. GA4 360 dává smysl, když denně posíláte víc než milion událostí a potřebujete kompletní denní export do BigQuery, když chcete roll-up přes více značek nebo trhů, delší historii, nevzorkované explorace nebo smluvní SLA. Pokud většinu analýz děláte v BigQuery a limity standardní verze nepřekračujete, často stačí standardní GA4 se streamingem do BigQuery. Během discovery to spočítáme z reálných dat.',
    },
    {
      q: 'Kde budou naše data fyzicky ležet?',
      a: 'Server-side GTM a BigQuery nasadíme do regionu, který zvolíte – typicky do multiregionu EU, tedy Belgie a Nizozemska, nebo do Frankfurtu či Varšavy. Samotné GA4 sbírá data z EU zařízení přes servery v EU a IP adresy neukládá. Další zpracování řídí podmínky Googlu a předání do USA rámec EU–US Data Privacy Framework – posouzení nechte na DPO.',
    },
    {
      q: 'Jak spolupracujete s naším IT a agenturami?',
      a: 'Přizpůsobíme se nástroji, který používáte, ať je to Jira, Azure DevOps, nebo ServiceNow, i cyklu releasů a datovou vrstvu zařadíme do definice hotového. Agentury dál dělají kampaně: každá dostane vlastní pracovní prostor v GTM a přístup přes skupinu a publikaci schvaluje určená role. Nemusí tak čekat na nás a zároveň nemohou nechtěně rozbít měření ostatním.',
    },
    {
      q: 'Komu patří účty a data a co když spolupráci ukončíme?',
      a: 'Účty, kontejnery, Google Cloud projekt i data patří vám a měření poběží dál. Dokumentaci píšeme pro předání a nepoužíváme žádný vlastní skript ani server, bez kterého by měření nefungovalo. Při ukončení předáme aktuální stav, odebereme svoje přístupy a podle smlouvy smažeme případné pracovní kopie.',
    },
    {
      q: 'Jak u velkého projektu vzniká cena?',
      a: 'Discovery a audit nabízíme jako samostatnou fázi s pevným rozsahem. Z jejích výstupů navrhneme další fáze – pilot, rollout a provoz – s rozsahem a výstupy pro každou z nich. Cenu ovlivňuje hlavně počet domén a trhů, agentur a kontejnerů, server-side a BigQuery a požadovaná úroveň SLA. Náklady na Google Cloud a případné licence, třeba GA4 360, platíte přímo poskytovatelům.',
    },
    {
      q: 'Jak dlouho velký projekt trvá?',
      a: 'Délku určuje hlavně počet trhů a domén a kapacita vývoje. Po discovery ověříme řešení na pilotu – jednom trhu nebo doméně – a další trhy přidáváme podle jeho výsledků. Termíny jednotlivých fází navrhneme z výstupů discovery.',
    },
  ],

  relatedArticles: [
    { slug: 'merici-plan', title: 'Měřicí plán: jak naplánovat měření' },
    { slug: 'audit-gtm-kontejneru', title: 'Audit GTM kontejneru' },
    { slug: 'hosting-server-side-gtm', title: 'Kde provozovat server-side GTM' },
  ],

  relatedPages: ['sluzby/server-side-tracking', 'sluzby/bigquery', 'sluzby/sprava-webu-a-mereni'],

  contact: {
    formId: 'lp-velke-firmy',
    topics: ['server-side', 'bigquery'],
    title: 'Domluvme si úvodní schůzku s vaším marketingem i IT',
    lead: 'Na úvodní hodinové schůzce projdeme domény, trhy, agentury a omezení IT a navrhneme, jak by mohl vypadat discovery. NDA rádi pošleme předem.',
    placeholder: 'Např. máme čtyři trhy, tři agentury v GTM a chceme sjednotit měření…',
    leadType: 'consultation',
  },

  schema: {
    name: 'Měření pro velké firmy',
    serviceType: 'Governance měření, server-side tagging na Google Cloudu klienta, BigQuery, SLA a zaškolení týmů',
    description:
      'Governance webové analytiky pro velké firmy: měřicí plán, názvosloví, verzování a release proces Google Tag Manageru, přístupová práva, dokumentace, server-side měření a BigQuery v Google Cloud projektu klienta s daty v EU.',
    audience: 'Velké firmy a korporace',
  },
};
