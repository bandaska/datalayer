import type { PageInput } from '../../schema';

// Štíhlá šablona LP podle vyhodnocení webu (9. října 2026, kap. 3.1 a 5.14).
// Zdroj obsahu: seo-analyza/03_landing-pages/14_reseni-velke-firmy.md.
// Governance, výstupy a předání tvoří jeden blok šesti karet, server-side a BigQuery
// v EU dvě karty pod diagramem a tabulku smluv kontrolní seznam pro nákup a IT. Rozhodnutí
// pro více trhů, srovnání GA4 a GA4 360 a ukázka testu datové vrstvy zůstávají ve
// sbalených Technických detailech, dokud nevyjdou články; otázka GA4 360 je ve FAQ
// a tabulka RACI patří do článku C4. Dokud klient nedodá podklady, stránka neobsahuje
// reakční doby SLA (zůstává tabulka priorit), bezpečnostní přehled ke stažení, počet
// a typ enterprise projektů, loga a certifikace, subzpracovatele a pojištění, podklady
// pro výběrové řízení, případovou studii, délky fází, Terraform ani vztah ke GA4 360.
// Texty prošly jazykovým auditem z 9. října 2026 (seo-analyza/2026-10-09_jazykovy-audit,
// kap. 3.17): zkratky GTM, SLA, DPO, CMP, IAM a CI rozepsané při prvním výskytu,
// discovery jako úvodní analýza, kroky 1 a 4 postupu vlastním zněním (stepOverrides).

export const page: PageInput = {
  path: 'reseni/velke-firmy',
  kind: 'solution',
  navTitle: 'Velké firmy',
  tagline: 'governance, server-side měření ve vašem cloudu, SLA',
  pictogram: 'gov',

  seo: {
    title: 'Měření pro velké firmy: governance a BigQuery | datalayer.cz',
    description:
      'Governance měření pro velké firmy: měřicí plán, verzování GTM, práva, server-side GTM a BigQuery ve vašem cloudu v EU, zpracovatelská smlouva a SLA.',
  },

  hero: {
    eyebrow: 'řešení pro velké firmy',
    h1: 'Řízené a auditovatelné měření pro velké firmy, které zůstane vaše',
    subtitle:
      'Postavíme měření, které projde bezpečnostním posouzením, přežije release webu a dá stejná čísla na všech trzích. Stojí na governance – jednotném měřicím plánu, názvosloví, postupu pro publikaci verzí v Google Tag Manageru (GTM) a řízení přístupů – a na server-side měření a BigQuery ve vašem Google Cloudu s daty v EU. Smluvní rámec tvoří zpracovatelská smlouva a smlouva o úrovni služeb (SLA) s podmínkami, na kterých se dohodneme.',
    primaryCta: { label: 'Domluvit úvodní schůzku', href: '#kontakt' },
    secondaryCta: { label: 'Bezpečnost a soulad', href: '#bezpecnost' },
    microcopy: 'Úvodní schůzka je zdarma. Rádi na ni přizveme i IT a pověřence pro ochranu osobních údajů (DPO).',
  },

  trust: ['Server-side měření a BigQuery ve vašem cloudu', 'Data v EU, region volíte vy', 'Zpracovatelská smlouva a NDA předem'],

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
              title: 'Přístup správce do GTM má kdekdo',
              text: 'Pět agentur, dva bývalí zaměstnanci a jeden neznámý e-mail – a nikdo neví, kdo co publikoval.',
              pictogram: 'gtm',
              tag: 'gtm',
            },
            {
              title: 'Release webu rozbije měření',
              text: 'Vývoj přejmenuje třídu tlačítka, konverze zmizí a přijdete na to až při měsíčním reportu.',
              pictogram: 'warn',
              tag: 'vývoj',
            },
            {
              title: 'IT a DPO blokují změny',
              text: 'Nikdo jim neumí říct, kam data tečou a v jakém regionu, a projekt server-side měření stojí půl roku.',
              pictogram: 'serverside',
              tag: 'GDPR',
            },
          ],
        },
      ],
    },

    {
      id: 'governance',
      eyebrow: 'governance',
      title: 'Pravidla měření, která přežijí změny týmů i agentur',
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
              text: 'Jeden verzovaný plán pro všechny domény a trhy: každá událost má vlastníka a nové požadavky jdou nejdřív do plánu, teprve potom do GTM.',
            },
            {
              tag: 'naming-convention.md',
              title: 'Názvosloví a datový slovník',
              text: 'Jednotné názvy událostí, parametrů, tagů v GTM, UTM i tabulek v BigQuery a slovník s významem každého parametru.',
            },
            {
              tag: 'release-process.md',
              title: 'Verzování a publikace změn',
              text: 'Změny vznikají v pracovních prostorech, testujeme je v testovacím prostředí, publikuje je jen určená role a každá verze má odkaz na požadavek.',
            },
            {
              tag: 'access-matrix.xlsx',
              title: 'Přístupová práva',
              text: 'Princip minimálních oprávnění v GA4, GTM i Google Cloudu, agentury přes skupiny a jednou za čtvrtletí kontrola přístupů.',
            },
            {
              tag: 'data-flow-inventory.xlsx',
              title: 'Dokumentace pro IT a DPO',
              text: 'Schéma architektury, inventář datových toků a provozní příručku pro incidenty (runbook) píšeme tak, aby podle nich mohl pokračovat kdokoli jiný.',
            },
            {
              tag: 'workshopy',
              title: 'Předání a zaškolení týmů',
              text: 'Marketing, vývojáře i analytiky zaškolíme na skutečných datech firmy – od reportů GA4 po export v BigQuery.',
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
            'Domény a zákaznický portál posílají data přes jednotnou datovou vrstvu do GTM. Cookie lišta, tedy nástroj pro správu souhlasů (CMP), předává souhlas každé domény přes Consent Mode v2. Server-side GTM v projektu firmy v Google Cloudu pošle data do GA4 a reklamních systémů a GA4 je exportuje do BigQuery v EU, kam tečou i data z CRM a ERP. Governance – měřicí plán, názvosloví, Git, správa identit a přístupů (IAM) a monitoring – řídí všechny vrstvy.',
          columns: [
            {
              label: 'domény a aplikace',
              items: ['firma.cz, firma.sk, firma.hu', 'zákaznický portál'],
              note: 'souhlas z cookie lišty pro každou doménu',
            },
            {
              label: 'datová vrstva a GTM',
              items: ['jednotná specifikace', 'testy v průběžné integraci (CI)', 'testovací a produkční prostředí'],
            },
            { label: 'server-side GTM ve vlastním projektu', items: ['Cloud Run v EU', 'metrics.firma.cz'], note: 'na vlastní subdoméně' },
            { label: 'cíle', items: ['GA4', 'Google Ads, Meta, LinkedIn'] },
            { label: 'BigQuery v EU', items: ['export z GA4', 'data z CRM a ERP', 'BI nástroje, které už používáte'] },
          ],
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              tag: 'google cloud',
              title: 'Server-side GTM ve vašem Google Cloudu',
              text: 'Fakturaci, IAM, auditní logy i region máte pod kontrolou vy. Když IT provozuje jiný cloud, server-side GTM poběží v jakémkoli prostředí s Dockerem.',
            },
            {
              tag: 'bigquery',
              title: 'BigQuery a data v EU',
              text: 'Region datasetu, třeba multiregion EU nebo Frankfurt, volíte hned při propojení s GA4 – při pozdějším přesunu hrozí mezera v datech.',
            },
          ],
        },
      ],
    },

    {
      id: 'bezpecnost',
      eyebrow: 'bezpečnost',
      title: 'Bezpečnost a soulad pro nákupní oddělení a IT',
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
            '<strong>Umístění dat:</strong> Cloud Run i BigQuery v regionu, který zvolíte, obvykle v EU. Kopie dat na vlastní zařízení stahujeme jen po dohodě.',
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
            'Nejdřív nasadíme pilot na jednom trhu nebo doméně, celý včetně server-side měření a testů, potom přidáme další trhy a domény podle jeho výsledků.',
          implementationFromClient: 'vývojový tým, projekt v Google Cloudu a DNS',
          stepOverrides: [
            { text: 'Projdeme GA4, GTM, souhlas a reklamní systémy na všech doménách a porovnáme je se zdrojovými systémy – e-shopem, CRM nebo ERP.' },
            {},
            {},
            {
              text: 'Projdeme testovací scénáře, zkontrolujeme každou událost na všech trzích a porovnáme čísla se zdrojovými systémy.',
              fromClient: 'testovací data a export ze zdrojových systémů',
            },
          ],
        },
        {
          type: 'list',
          style: 'check',
          title: 'Jak zapadneme do vývoje',
          items: [
            'Exporty kontejnerů GTM ukládáme do vašeho repozitáře v Gitu.',
            'Každá změna prochází kontrolou a publikuje ji jen určená role.',
            'Změny testujeme v testovacím prostředí a datovou vrstvu kontrolujeme automatickým testem v CI.',
            'Publikaci navážeme na release webu a 48 hodin po ní zvýšíme dohled.',
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
            ['<strong>P1 – kritická</strong>', 'výpadek měření nákupů či poptávek, tagy před souhlasem'],
            ['<strong>P2 – vysoká</strong>', 'chybí parametr, vypadl jeden reklamní systém'],
            ['<strong>P3 – běžná</strong>', 'nový požadavek na měření, úprava reportu'],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Podporu nabízíme ve třech úrovních: konzultace s pevným počtem hodin, samotný provoz a provoz s asistencí u každého releasu. Provoz zahrnuje monitoring, řešení incidentů a měsíční report kvality dat. Jak hlídáme měření v provozu, popisujeme u služby <a href="/sluzby/sprava-webu-a-mereni">Správa webu a měření</a>.',
          ],
        },
      ],
    },

    {
      id: 'jak-poznate',
      eyebrow: 'monitoring',
      title: 'Jak poznáte, že měření funguje',
      lead: 'Monitoring patří k pravidlům governance – na problém vás upozorní dřív, než se objeví v měsíčním reportu.',
      tone: 'dark',
      layout: 'split',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            'Všechny trhy posílají stejné události s měnou a čísla za skupinu jdou sečíst.',
            'U každé změny v GTM dohledáte, kdo ji kdy udělal a proč.',
            'Test datové vrstvy v CI zastaví build, když chybí měna, hodnota nebo položky.',
            'Denní kontroly v BigQuery hlídají nákupy, prázdnou měnu i <code>(not set)</code>.',
          ],
        },
      ],
    },
  ],

  techDetails: {
    summary: 'Více trhů, GA4 360 a test datové vrstvy',
    blocks: [
      {
        type: 'table',
        caption: 'Rozhodnutí pro více trhů, která padnou na začátku',
        head: ['Rozhodnutí', 'Možnosti', 'Na čem záleží'],
        rows: [
          ['Počet property GA4', 'jedna pro všechny trhy, jedna na trh, nebo roll-up v GA4 360', 'jedna zjednoduší skupinový report, víc property oddělí práva a limity'],
          ['Měření napříč doménami', 'pro domény, mezi kterými lidé přecházejí', 'nastavení v datovém streamu, nejvýš sto podmínek, stejné ID tagu Google'],
          ['Souhlas napříč doménami', 'lišta na každé doméně, nebo sdílení přes CMP', 'sdílet jen tam, kde to CMP a právní posouzení umožní'],
          ['Měna', 'jedna měna property, nebo podle trhu', 'každá událost nese <code>currency</code>, účetní report počítáme v BigQuery s vlastním kurzem'],
          ['Časové pásmo', 'podle centrály, nebo podle trhu', 'jedno pro celou skupinu, jinak dny v reportech nesedí'],
          ['Interní návštěvnost', 'filtr IP, cookie pro zaměstnance, testovací prostředí', 'stejná pravidla pro všechny trhy'],
          ['Nežádoucí odkazující zdroje', 'platební brány, jednotné přihlášení (SSO), rezervační systémy', 'seznam udržujeme centrálně'],
          ['Kontejnery GTM', 'jeden pro všechny domény, nebo jeden na trh', 'často kombinace: společný kontejner a pracovní prostory trhů'],
        ],
      },
      {
        type: 'table',
        caption: 'GA4 standard a GA4 360',
        head: ['Limit nebo funkce', 'GA4 standard', 'GA4 360'],
        rows: [
          ['Uchování dat v průzkumech', 'až čtrnáct měsíců', 'až padesát měsíců'],
          ['Parametry na událost', 'pětadvacet', 'sto'],
          ['Klíčové události', 'třicet', 'padesát'],
          ['Publika', 'sto', '400'],
          ['Vzorkování v průzkumech', 'deset milionů událostí na dotaz', 'miliarda událostí na dotaz'],
          ['Nevzorkované průzkumy', 'ne', 'ano, dvacet tisíc tokenů denně'],
          ['Denní export do BigQuery', 'milion událostí', 'miliardy událostí a Fresh Daily'],
          ['Kvóta API', '200 000 tokenů denně', '2 000 000 tokenů denně'],
          ['Import dat', 'deset GB na property', 'jeden TB na property'],
          ['Roll-up a sub-property', 'ne', 'ano'],
          ['SLA', 'ne', 'ano, ve smlouvě GA4 360'],
        ],
      },
      {
        type: 'paragraphs',
        items: [
          'Licenci GA4 360 prodávají Google a jeho certifikovaní partneři, cenu určuje objem dat. Streamovaný export do BigQuery limit objemu nemá, funguje ale bez garance úplnosti a stojí 0,05 dolaru za GB.',
        ],
      },
      {
        type: 'code',
        lang: 'js',
        caption: 'Zjednodušená ukázka testu v Playwrightu: běží při každém buildu a když vývojář omylem odstraní měnu, build neprojde.',
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
      a: 'Záleží na objemu dat a na tom, jak je používáte. GA4 360 má smysl, když denně posíláte víc než milion událostí a potřebujete kompletní denní export do BigQuery, když chcete roll-up přes více značek nebo trhů, delší historii, nevzorkované průzkumy nebo smluvní SLA. Pokud většinu analýz děláte v BigQuery a limity standardní verze nepřekračujete, často stačí standardní GA4 se streamovaným exportem do BigQuery. Během úvodní analýzy (discovery) to spočítáme z reálných dat.',
    },
    {
      q: 'Kde budou naše data fyzicky ležet?',
      a: 'Server-side GTM a BigQuery nasadíme do regionu, který zvolíte – obvykle do multiregionu EU, tedy Belgie a Nizozemska, nebo do Frankfurtu či Varšavy. Samotné GA4 sbírá data ze zařízení v EU přes servery v EU a IP adresy neukládá. Další zpracování se řídí podmínkami Googlu, předání do USA rámcem EU–US Data Privacy Framework – posouzení nechte na DPO.',
    },
    {
      q: 'Jak spolupracujete s naším IT a agenturami?',
      a: 'Přizpůsobíme se nástroji, který používáte, třeba Jiře, Azure DevOps nebo ServiceNow, i cyklu releasů. Datovou vrstvu zařadíme do definice hotového. Agentury dál dělají kampaně: každá dostane vlastní pracovní prostor v GTM a přístup přes skupinu; publikaci schvaluje určená role. Nemusí tak čekat na nás a zároveň nemohou nechtěně rozbít měření ostatním.',
    },
    {
      q: 'Komu patří účty a data a co když spolupráci ukončíme?',
      a: 'Účty, kontejnery, projekt v Google Cloudu i data patří vám a měření poběží dál. Dokumentaci píšeme tak, aby šla předat, a nepoužíváme žádný vlastní skript ani server, bez kterého by měření nefungovalo. Při ukončení předáme aktuální stav, odebereme svoje přístupy a podle smlouvy smažeme případné pracovní kopie.',
    },
    {
      q: 'Jak u velkého projektu vzniká cena?',
      a: 'Úvodní analýzu a audit nabízíme jako samostatnou fázi s pevným rozsahem. Podle jejích výstupů navrhneme další fáze – pilot, nasazení na další trhy a provoz – s rozsahem a výstupy pro každou z nich. Cenu ovlivňuje hlavně počet domén a trhů, agentur a kontejnerů, dále server-side měření, BigQuery a požadovaná úroveň SLA. Náklady na Google Cloud a případné licence, třeba GA4 360, platíte přímo poskytovatelům.',
    },
    {
      q: 'Jak dlouho velký projekt trvá?',
      a: 'Délku určuje hlavně počet trhů a domén, dále kapacita vývoje. Po úvodní analýze ověříme řešení na pilotu – jednom trhu nebo doméně – a další trhy přidáváme podle jeho výsledků. Termíny jednotlivých fází navrhneme podle výstupů úvodní analýzy.',
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
    title: 'Probereme měření s vaším marketingem i IT',
    lead: 'Na úvodní schůzce projdeme domény, trhy, agentury a omezení IT a navrhneme, jak by mohla vypadat úvodní analýza. NDA rádi pošleme předem.',
    placeholder: 'Např. máme čtyři trhy, tři agentury v GTM a chceme sjednotit měření…',
    leadType: 'consultation',
  },

  schema: {
    name: 'Měření pro velké firmy',
    serviceType: 'Governance měření, server-side měření v Google Cloudu klienta, BigQuery, SLA a zaškolení týmů',
    description:
      'Governance webové analytiky pro velké firmy: měřicí plán, názvosloví, verzování a postup při publikaci v Google Tag Manageru, přístupová práva, dokumentace, server-side měření a BigQuery v projektu klienta v Google Cloudu s daty v EU.',
    audience: 'Velké firmy a korporace',
  },
};
