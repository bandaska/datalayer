import type { PageInput } from '../../schema';

// Zdroj: seo-analyza/03_landing-pages/14_reseni-velke-firmy.md
// Dokud klient nedodá podklady, stránka neobsahuje: počet a typ enterprise projektů
// v trust baru, loga a certifikace, PDF „Přehled pro IT a bezpečnost“ (CTA i odkaz pod
// formulářem), reakční doby SLA, seznam subzpracovatelů a pojištění, podklady pro
// výběrové řízení, případovou studii (MiniCase), délky fází, Terraform, vztah ke GA4 360
// a samostatnou nabídku školení (sekci jsme zkrátili na předání a zaškolení týmů).

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
      'Měření, které projde bezpečnostním review, přežije release webu a dá stejná čísla na všech trzích. Navrhneme pravidla, nasadíme server-side ve vašem Google Cloudu a předáme dokumentaci, se kterou mohou pracovat interní týmy i další agentury.',
    quickAnswer:
      'Měření pro velkou firmu stojí na governance: jednotném měřicím plánu a názvosloví, verzování a release procesu Tag Manageru, řízení přístupů a dokumentaci. Technicky stojí na server-side měření a BigQuery ve vašem Google Cloud projektu s daty v EU. Smluvní rámec tvoří zpracovatelská smlouva a podporu po spuštění popisuje SLA, na kterém se dohodneme.',
    primaryCta: { label: 'Domluvit úvodní schůzku', href: '#kontakt' },
    secondaryCta: { label: 'Bezpečnost a soulad', href: '#bezpecnost' },
    microcopy: 'Rádi přizveme i IT a DPO · NDA před první schůzkou na požádání',
  },

  trust: [
    'Server-side a BigQuery ve vašem Google Cloudu, ne u nás',
    'Data v EU – region BigQuery a Cloud Run volíte vy',
    'Zpracovatelská smlouva a NDA ještě před přístupem k datům',
  ],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'problém',
      title: 'Poznáváte se?',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Každý trh měří jinak',
              text: 'Česko posílá <code>purchase</code>, Slovensko <code>nakup</code>, Maďarsko nemá měnu. Čísla za skupinu nejdou sečíst.',
              pictogram: 'datalayer',
            },
            {
              title: 'V GTM má admin přístup kdekdo',
              text: 'Pět agentur, dva bývalí zaměstnanci a jeden neznámý e-mail. Nikdo neví, kdo co publikoval.',
              pictogram: 'gtm',
            },
            {
              title: 'Release webu rozbije měření',
              text: 'Vývoj přejmenuje třídu tlačítka a konverze zmizí. Přijdete na to až při měsíčním reportu.',
              pictogram: 'ga4',
            },
            {
              title: 'IT a DPO blokují změny',
              text: 'Nikdo jim neumí říct, kam data tečou, na jakém serveru a v jakém regionu. Server-side projekt stojí půl roku.',
              pictogram: 'serverside',
            },
            {
              title: 'Report pro vedení podle toho, kdo ho dělal',
              text: 'GA4, BI tým a mediální agentura mají tři různá čísla tržeb.',
              pictogram: 'dashboard',
            },
            {
              title: 'Narážíte na limity GA4',
              text: 'Denní export do BigQuery končí na milionu událostí, explorace nevidí data starší než čtrnáct měsíců a GA4 v nich vzorkuje.',
              pictogram: 'bigquery',
            },
          ],
        },
      ],
    },

    {
      id: 'governance',
      eyebrow: 'governance',
      title: 'Governance měření: pravidla, která přežijí změny týmů i agentur',
      lead: 'Ve velké firmě měření nerozbije jedna velká chyba, ale stovka drobných změn od různých lidí. Governance jsou jednoduchá pravidla: kdo co smí měnit, jak to pojmenuje, otestuje a zdokumentuje.',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'tracking-plan.xlsx',
              title: 'Měřicí plán',
              text: 'Jeden verzovaný plán pro všechny domény a trhy: byznysové otázky → KPI → události → parametry → kam která událost odchází. Každá událost má vlastníka a verzi. Nové požadavky marketingu jdou přes plán, ne rovnou do GTM.',
            },
            {
              tag: 'naming-convention.md',
              title: 'Názvosloví a datový slovník',
              text: 'Pravidla pro názvy událostí a parametrů – přednostně doporučené události GA4, <code>snake_case</code>, bez diakritiky – i pro tagy, spouštěče a proměnné v GTM, třeba <code>GA4 – event – purchase</code>. Dále pro UTM parametry a tabulky v BigQuery. Slovník <code>data-dictionary.xlsx</code> říká, co který parametr znamená a v jaké jednotce je.',
            },
            {
              tag: 'release-process.md',
              title: 'Verzování a release proces',
              text: 'Změny v GTM vznikají v pracovních prostorech a testujeme je na stagingu. Publikovat je smí jen určená role a každá verze má popis a odkaz na požadavek v Jiře nebo ServiceNow. Exporty kontejnerů ukládáme do Gitu, takže dohledáte, kdo co kdy změnil.',
            },
            {
              tag: 'access-matrix.xlsx',
              title: 'Přístupová práva',
              text: 'Princip nejnižších oprávnění: v GA4 role od Viewer po Administrator a pro externí partnery omezení „bez nákladů“ a „bez tržeb“, v GTM publikace jen pro jednoho až dva lidi, v Google Cloudu IAM podle skupin. Agentury dostávají přístup přes skupiny, ne přes osobní e-maily. Jednou za čtvrtletí přístupy zkontrolujeme a neaktivní účty odebereme.',
            },
            {
              tag: 'architecture.pdf',
              title: 'Dokumentace',
              text: 'Schéma architektury, inventář datových toků <code>data-flow-inventory.xlsx</code> – co kam odchází, jaké kategorie údajů a s jakou podmínkou souhlasu – a <code>runbook.md</code> s postupy pro incidenty a předání. Dokumentace patří vám a píšeme ji tak, aby v ní mohl pokračovat kdokoliv jiný.',
            },
            {
              tag: 'testy + alerty',
              title: 'Monitoring a kontrola kvality',
              text: 'Automatický test datové vrstvy při každém releasu. Denní kontroly v BigQuery hlídají počet nákupů, podíl prázdné měny a podíl <code>(not set)</code> a při propadu pošlou upozornění. O problému víte do 24 hodin, ne až z měsíčního reportu.',
              link: { label: 'Správa webu a měření', href: '/sluzby/sprava-webu-a-mereni' },
            },
          ],
        },
      ],
    },

    {
      id: 'architektura',
      eyebrow: 'architektura',
      title: 'Jak vypadá architektura měření pro více trhů',
      tone: 'light',
      blocks: [
        {
          type: 'flow',
          caption:
            'Schéma architektury pro více trhů: domény firma.cz, firma.sk, firma.hu a zákaznický portál posílají data přes jednotnou datovou vrstvu do GTM, CMP předává souhlas každé domény přes Consent Mode v2. Server-side GTM v Google Cloud projektu firmy na subdoméně metrics.firma.cz posílá data do GA4 a reklamních systémů. GA4 exportuje do BigQuery v EU, kam tečou i data z CRM a ERP, a nad nimi stojí Power BI nebo Data Studio (dříve Looker Studio). Governance – měřicí plán, názvosloví, Git, IAM a monitoring – řídí datovou vrstvu, GTM, sGTM i BigQuery.',
          columns: [
            {
              label: 'Domény a aplikace',
              items: ['firma.cz', 'firma.sk', 'firma.hu', 'zákaznický portál'],
              note: 'CMP: souhlas pro každou doménu',
            },
            {
              label: 'Jednotná datová vrstva',
              items: ['specifikace v2.x', 'testy v CI'],
            },
            {
              label: 'GTM web',
              items: ['prostředí staging a prod', 'Consent Mode v2'],
            },
            {
              label: 'sGTM ve vlastním GCP projektu',
              items: ['Cloud Run', 'region EU', 'metrics.firma.cz'],
              note: 'first-party',
            },
            {
              label: 'Cíle',
              items: ['GA4: property nebo roll-up v GA4 360', 'Google Ads · Meta · LinkedIn'],
            },
            {
              label: 'BigQuery v EU a BI',
              items: ['export z GA4', 'CRM a ERP', 'Power BI nebo Data Studio (dříve Looker Studio)'],
            },
            {
              label: 'Governance',
              items: ['měřicí plán', 'názvosloví', 'Git', 'IAM', 'monitoring'],
              note: 'řídí datovou vrstvu, GTM, sGTM i BigQuery',
            },
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Všechny domény posílají data ve stejném formátu. Souhlas řešíme pro každou doménu zvlášť. Server-side kontejner běží ve vašem Google Cloud projektu na vlastní subdoméně, data končí v BigQuery v EU a nad nimi stojí BI, které už používáte.',
          ],
        },
      ],
    },

    {
      id: 'vice-domen',
      eyebrow: 'více trhů',
      title: 'Více domén a trhů: rozhodnutí, která děláme na začátku',
      lead: 'Většina problémů skupinových reportů vznikne v prvním týdnu projektu, když tato rozhodnutí nikdo neudělá vědomě.',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          head: ['Rozhodnutí', 'Možnosti', 'Na čem záleží a co doporučujeme'],
          rows: [
            [
              'Kolik GA4 properties',
              'Jedna pro všechny trhy, jedna na trh, nebo v GA4 360 roll-up a sub-properties',
              'Jedna property zjednoduší skupinový report, oddělené properties oddělí práva a limity. V GA4 360 obojí spojí roll-up.',
            ],
            [
              'Cross-domain měření',
              'Zapnout pro domény, mezi kterými lidé přecházejí: e-shop, platební brána, portál',
              'V GA4 ho nastavíte v datovém streamu v části „Configure your domains“, nejvýš pro sto podmínek. Na všech doménách stejné ID značky.',
            ],
            [
              'Souhlas napříč doménami',
              'Samostatná lišta na každé doméně, nebo sdílení souhlasu přes CMP',
              'Souhlas platí pro doménu, kde ho návštěvník udělil. Sdílení řešíme jen tam, kde to CMP a právní posouzení umožní.',
            ],
            [
              'Měna',
              'Jedna měna property, nebo měna podle trhu',
              'Každá událost nese <code>currency</code> a GA4 hodnoty přepočte na měnu property. Účetní report počítáme v BigQuery s vlastním kurzem.',
            ],
            [
              'Časové pásmo',
              'Podle centrály, nebo podle trhu',
              'Jedno pásmo pro celou skupinu, jinak dny v reportech nebudou sedět.',
            ],
            [
              'Interní provoz a testy',
              'Filtr IP, cookie pro zaměstnance, testovací prostředí',
              'Stejná pravidla pro všechny trhy.',
            ],
            [
              'Nežádoucí odkazující zdroje',
              'Platební brány, SSO, rezervační systémy',
              'Seznam udržujeme centrálně.',
            ],
            [
              'Kontejnery GTM',
              'Jeden pro všechny domény, nebo jeden na trh',
              'Jeden kontejner znamená jednotnost, víc kontejnerů autonomii trhů. Často volíme kombinaci: společný kontejner a pracovní prostory pro jednotlivé trhy.',
            ],
          ],
        },
      ],
    },

    {
      id: 'server-side',
      eyebrow: 'server-side',
      title: 'Server-side na vašem Google Cloudu, ne na našem',
      tone: 'light',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Server-side Tag Manager nasadíme do Google Cloud projektu, který patří vám. Billing platíte přímo Googlu, přístupy řídí interní IAM, auditní logy vidí bezpečnostní tým a region si vyberete sami. Náš server nepotřebujete a nejste na nás závislí – kontejner i infrastruktura zůstanou, i kdybychom spolupráci ukončili. Pokud IT provozuje jiný cloud, server-side GTM poběží v jakémkoliv prostředí s Dockerem.',
          ],
        },
        {
          type: 'list',
          style: 'bullet',
          title: 'Parametry provozu podle doporučení Googlu',
          items: [
            'Cloud Run, nejméně dvě instance kvůli dostupnosti, každý server s 1 vCPU a 0,5 GB paměti.',
            'Google uvádí orientačně 45 dolarů měsíčně za server. Autoscaling na dva až deset serverů zvládne zhruba 35–350 požadavků za sekundu.',
            'Samostatný preview server pro ladění.',
            'Vlastní subdoména, třeba <code>metrics.firma.cz</code>, pro first-party požadavky.',
            'Pro globální provoz nasazení do více regionů.',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Souhlas platí i na serveru',
          text: 'Tagy na serveru respektují signály Consent Mode a volby z CMP. Server-side mění, kam a v jaké podobě data odcházejí – ne to, jestli se návštěvníka na souhlas ptáte. Podrobnosti najdete u služby <a href="/sluzby/server-side-tracking">Server-side tracking</a>.',
        },
      ],
    },

    {
      id: 'bigquery-eu',
      eyebrow: 'data v EU',
      title: 'BigQuery a data residency: kde data fyzicky leží',
      tone: 'dark',
      blocks: [
        {
          type: 'list',
          style: 'bullet',
          items: [
            '<strong>Region volíte při propojení GA4 s BigQuery.</strong> Multiregion <code>EU</code> ukládá data v Belgii nebo Nizozemsku. Zvolit můžete i jeden region, třeba <code>europe-west3</code> ve Frankfurtu nebo <code>europe-central2</code> ve Varšavě. Pozdější změna znamená přesun datasetu a riziko mezery v datech, proto ji řešíme hned na začátku.',
            '<strong>Limity exportu.</strong> Standardní GA4 omezuje denní export do BigQuery na milion událostí. Průběžný streaming export limit objemu nemá, funguje ale jako „best effort“ bez garance úplnosti a stojí 0,05 dolaru za GB. GA4 360 zvládne denní export v řádu miliard událostí a navíc nabízí export „Fresh Daily“.',
            '<strong>GA4 a EU.</strong> Google Analytics sbírá data z EU zařízení přes servery v EU a IP adresy uživatelů z EU neukládá. Kde data dál zpracovává, Google v dokumentaci k datům z EU neuvádí. Pro předávání do USA platí rámec EU–US Data Privacy Framework. Tribunál EU ho potvrdil 3. září 2025 a žalobce podal proti rozsudku odvolání k Soudnímu dvoru – vývoj by měl sledovat DPO.',
            '<strong>Granulární data o lokalitě a zařízení</strong> můžete v GA4 pro vybrané regiony vypnout – za cenu méně přesného modelování konverzí.',
          ],
        },
        {
          type: 'paragraphs',
          items: ['Datový sklad nad těmito daty postavíme ve službě <a href="/sluzby/bigquery">BigQuery</a>.'],
        },
      ],
    },

    {
      id: 'bezpecnost',
      eyebrow: 'bezpečnost',
      title: 'Bezpečnost a soulad: smlouvy a odpovědnosti',
      lead: 'Ve velkém projektu je víc smluvních vztahů, než se zdá. Pomůžeme je zmapovat, aby DPO a právní oddělení věděli, co schvalují.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          head: ['Dokument', 'Mezi kým', 'Co řeší'],
          rows: [
            [
              '<strong>Zpracovatelská smlouva (DPA)</strong> podle čl. 28 GDPR',
              'vy jako správce ↔ datalayer.cz jako zpracovatel',
              'Předmět a doba zpracování, kategorie údajů, technická a organizační opatření, subzpracovatelé, součinnost, audit, výmaz po skončení',
            ],
            [
              '<strong>NDA</strong>',
              'vy ↔ datalayer.cz',
              'Důvěrnost obchodních informací, podle potřeby už před první schůzkou',
            ],
            [
              '<strong>Google Ads Data Processing Terms</strong>',
              'vy ↔ Google',
              'Google Analytics, rozšířené konverze a Customer Match – Google jako zpracovatel',
            ],
            [
              '<strong>Google Cloud Data Processing Addendum</strong>',
              'vy ↔ Google Cloud',
              'Server-side GTM a BigQuery: Google jako zpracovatel, certifikace ISO 27001 a SOC 2/3, oznámení nového subzpracovatele třicet dní předem',
            ],
            [
              '<strong>Podmínky Mety, LinkedInu a dalších platforem</strong>',
              'vy ↔ platforma',
              'Conversions API a pixely',
            ],
            [
              '<strong>Záznamy o činnostech zpracování, případně DPIA</strong>',
              'vy, konkrétně DPO',
              'Dodáme technický popis datových toků v <code>data-flow-inventory.xlsx</code>',
            ],
          ],
        },
        {
          type: 'list',
          style: 'check',
          title: 'Jak přistupujeme k datům',
          items: [
            'Pracujeme přímo ve vašich systémech, na jmenovitých účtech s dvoufázovým ověřením.',
            'Kopie dat na vlastní zařízení nestahujeme, pokud to projekt nevyžaduje a nedohodneme se jinak.',
            'Přístupy odebíráme hned po skončení spolupráce.',
          ],
        },
        {
          type: 'callout',
          tone: 'warn',
          text: 'Nejsme advokátní kancelář. Popisujeme technické a smluvní souvislosti, právní posouzení patří vašemu právnímu oddělení nebo DPO.',
        },
      ],
    },

    {
      id: 'spoluprace-s-it',
      eyebrow: 'spolupráce s IT',
      title: 'Spolupráce s IT: měření jako součást vývoje, ne záplata po něm',
      lead: 'Ve velké firmě měření nejčastěji rozbije release, protože datová vrstva chybí v zadání a nikdo ji netestuje. Navrhneme, aby patřila do definice hotového, tedy do „Definition of Done“.',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          caption: 'Kdo co dělá při změně měření: R dělá, A schvaluje, C konzultuje, I dostává informace.',
          head: ['Činnost', 'Marketing', 'IT / vývoj', 'datalayer.cz', 'DPO / právní', 'Agentury'],
          rows: [
            ['Požadavek na nové měření', 'R', 'I', 'C', 'I', 'C'],
            ['Úprava měřicího plánu', 'A', 'C', 'R', 'C', 'I'],
            ['Specifikace datové vrstvy', 'I', 'A', 'R', '–', 'I'],
            ['Implementace datové vrstvy', 'I', 'R', 'C', '–', '–'],
            ['Změny v GTM', 'C', 'I', 'R/A', '–', 'R v pracovním prostoru'],
            ['Publikace GTM', 'I', 'C', 'R', '–', '–'],
            ['Server-side infrastruktura', '–', 'A', 'R', 'I', '–'],
            ['Consent a CMP', 'C', 'R', 'R', 'A', 'I'],
            ['Testy a validace', 'I', 'R, tým QA', 'R', '–', 'I'],
            ['Monitoring a incidenty', 'I', 'C', 'R', 'I', 'I'],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: 'Specifikace', text: 'Změna ve specifikaci a v měřicím plánu.' },
            { title: 'Staging', text: 'Vývoj změnu implementuje na stagingu.' },
            { title: 'Test v CI', text: 'Automatický test datové vrstvy.' },
            { title: 'Úpravy GTM', text: 'Změny v pracovním prostoru a náhled na stagingu.' },
            { title: 'Schválení', text: 'Určená role změnu schválí.' },
            { title: 'Publikace', text: 'Verze s popisem a odkazem na požadavek.' },
            { title: 'Monitoring', text: 'Zvýšený dohled 48 hodin po publikaci.' },
          ],
        },
        {
          type: 'code',
          lang: 'js',
          caption: 'Ukázka testu v Playwrightu, zjednodušeně',
          code: `test('purchase má měnu, hodnotu a položky', async ({ page }) => {
  await page.goto(process.env.STAGING_URL + '/test-checkout?order=QA-1');
  const purchase = await page.evaluate(() =>
    window.dataLayer.find(e => e.event === 'purchase'));
  expect(purchase.ecommerce.currency).toMatch(/^(CZK|EUR|HUF)$/);
  expect(purchase.ecommerce.value).toBeGreaterThan(0);
  expect(purchase.ecommerce.items.length).toBeGreaterThan(0);
});`,
        },
        {
          type: 'paragraphs',
          items: [
            'Test běží při každém buildu. Když vývojář omylem odstraní měnu, build neprojde a o chybě se nedozvíte až z reportu.',
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
            ['<strong>P1 – kritická</strong>', 'Výpadek měření nákupů nebo leadů, tagy běží před souhlasem'],
            ['<strong>P2 – vysoká</strong>', 'V části událostí chybí parametr, vypadl jeden reklamní systém'],
            ['<strong>P3 – běžná</strong>', 'Nový požadavek na měření, úprava reportu'],
          ],
        },
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Konzultace',
              text: 'Pevný počet hodin měsíčně, revize požadavků, účast na plánování.',
            },
            {
              title: 'Provoz',
              text: 'Monitoring, alerty, řešení incidentů P1–P3 a měsíční report kvality dat.',
            },
            {
              title: 'Provoz + release',
              text: 'Navíc asistence u každého releasu, správa pracovních prostorů agentur a čtvrtletní audit přístupů.',
            },
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Jak hlídáme měření v provozu, popisujeme u služby <a href="/sluzby/sprava-webu-a-mereni">Správa webu a měření</a>.',
          ],
        },
      ],
    },

    {
      id: 'skoleni',
      eyebrow: 'předání',
      title: 'Předání a zaškolení týmů: GA4, Tag Manager a BigQuery',
      lead: 'Governance funguje, jen když jí rozumějí lidé, kteří s měřením pracují. Při předání školíme na skutečných datech a nastavení, ne na demo účtu.',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Marketing a e-commerce',
              text: 'Reporty a explorace v GA4, UTM konvence a jak číst rozdíly mezi GA4 a reklamními systémy.',
              pictogram: 'ga4',
            },
            {
              title: 'Vývojáři a QA',
              text: 'Datová vrstva, specifikace, testy, release proces a ladění v GTM Preview.',
              pictogram: 'datalayer',
            },
            {
              title: 'Analytici a BI',
              text: 'Struktura exportu GA4 v BigQuery, SQL dotazy a datový model pro Power BI nebo Data Studio.',
              pictogram: 'bigquery',
            },
          ],
        },
      ],
    },

    {
      id: 'ga4-360',
      eyebrow: 'GA4 360',
      title: 'Potřebujete Google Analytics 360?',
      lead: 'GA4 360 je placená verze s vyššími limity a smluvní úrovní služeb. Pro řadu velkých firem je správná volba, pro jiné stačí standardní GA4 s BigQuery. Rozhodujeme podle dat, ne podle velikosti firmy.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          head: ['Limit nebo funkce', 'GA4 standard', 'GA4 360'],
          rows: [
            ['Uchování dat v exploracích', 'až 14 měsíců', 'až 50 měsíců'],
            ['Parametry na událost', '25', '100'],
            ['Klíčové události', '30', '50'],
            ['Publika', '100', '400'],
            ['Vzorkování v exploracích', '10 mil. událostí na dotaz', '1 mld. událostí na dotaz'],
            ['Nevzorkované explorace', 'ne', 'ano, 20 tis. tokenů denně'],
            ['Denní export do BigQuery', '1 mil. událostí', 'miliardy událostí a Fresh Daily'],
            ['Kvóta API', '200 000 tokenů denně', '2 mil. tokenů denně'],
            ['Import dat', '10 GB na property', '1 TB na property'],
            ['Roll-up a sub-properties', 'ne', 'ano'],
            ['SLA', 'ne', 'ano, ve smlouvě GA 360'],
          ],
        },
        {
          type: 'list',
          style: 'check',
          title: 'Dává smysl, když',
          items: [
            'Denně posíláte víc než milion událostí a potřebujete kompletní denní export.',
            'Potřebujete skupinový pohled přes více značek nebo trhů a zároveň oddělená práva – tedy roll-up a sub-properties.',
            'Chcete delší historii v rozhraní nebo nevzorkované explorace.',
            'IT vyžaduje smluvní SLA.',
          ],
        },
        {
          type: 'list',
          style: 'cross',
          title: 'Nedává smysl, když',
          items: [
            'Většinu analýz stejně děláte v BigQuery a streaming export stačí.',
            'Limity standardní verze reálně nepřekračujete.',
          ],
        },
        {
          type: 'paragraphs',
          items: ['Licenci GA4 360 prodávají Google a jeho certifikovaní partneři. Cenu určuje objem dat.'],
        },
      ],
    },

    {
      id: 'co-dostanete',
      eyebrow: 'výstupy',
      title: 'Co od nás dostanete',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          head: ['Výstup', 'Popis'],
          rows: [
            [
              '<code>discovery-report.pdf</code>',
              'Stav měření na všech doménách, v kontejnerech a účtech, rozhovory se stakeholdery, rizika a priority',
            ],
            ['<code>tracking-plan.xlsx</code>', 'Skupinový měřicí plán s vlastníky a verzemi'],
            ['<code>naming-convention.md</code> a datový slovník', 'Názvosloví událostí, parametrů, GTM, UTM a BigQuery'],
            ['<code>access-matrix.xlsx</code>', 'Role a oprávnění v GA4, GTM, Google Cloudu a reklamních účtech'],
            ['<code>release-process.md</code> a testy', 'Release proces, RACI, automatické testy datové vrstvy'],
            ['Architektura a infrastruktura', 'sGTM v Google Cloud projektu klienta, dataset BigQuery v EU'],
            ['<code>data-flow-inventory.xlsx</code>', 'Inventář datových toků pro DPO'],
            ['Monitoring', 'Denní kontroly a alerty'],
            ['Školení a předání', 'Workshopy podle rolí, dokumentace, runbook'],
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak postupujeme u velkého projektu',
      tone: 'light',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Úvodní schůzka a NDA',
              text: 'Cíle, rozsah, stakeholdeři a omezení.',
              fromClient: 'Marketing, ideálně i IT',
            },
            {
              title: 'Discovery a audit',
              text: 'Audit všech domén, kontejnerů a účtů. Rozhovory s marketingem, IT, DPO a agenturami.',
              fromClient: 'Přístupy pro čtení a čas na rozhovory',
            },
            {
              title: 'Návrh governance',
              text: 'Měřicí plán, názvosloví, role, release proces a architektura.',
              fromClient: 'Schvalovací schůzka s vlastníky',
            },
            {
              title: 'Pilot',
              text: 'Jeden trh nebo doména end-to-end, včetně server-side a testů.',
              fromClient: 'Vývojový tým, GCP projekt, DNS',
            },
            {
              title: 'Rollout',
              text: 'Další trhy a domény podle výsledků pilotu.',
              fromClient: 'Kapacita vývoje',
            },
            {
              title: 'Provoz a SLA',
              text: 'Monitoring, asistence u releasů, čtvrtletní revize.',
              fromClient: 'Kontaktní osoba',
            },
          ],
        },
        {
          type: 'paragraphs',
          items: ['Obecný průběh spolupráce popisujeme na stránce <a href="/jak-pracujeme">Jak pracujeme</a>.'],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Může server-side GTM běžet v našem vlastním cloudu?',
      a: 'Ano. Preferujeme Google Cloud Run ve vašem Google Cloud projektu, protože ho Google podporuje přímo a snadno ho napojíme na BigQuery. Server-side GTM je ale kontejner Dockeru a poběží v jakémkoliv prostředí, které Docker podporuje, včetně infrastruktury v jiném cloudu. Potřebuje cluster tagovacích serverů a jeden samostatný preview server. Architekturu doladíme s IT tak, aby odpovídala interním bezpečnostním standardům.',
    },
    {
      q: 'Kde budou naše data fyzicky ležet?',
      a: 'Server-side GTM a BigQuery nasazujeme do regionu, který zvolíte. Typicky jde o multiregion EU, tedy Belgii a Nizozemsko, nebo o konkrétní region jako Frankfurt či Varšava. Region BigQuery volíte při propojení s GA4 a pozdější změna je pracná. Samotné GA4 sbírá data z EU zařízení přes servery v EU a IP adresy neukládá. Další zpracování řídí podmínky Googlu a předání do USA rámec EU–US Data Privacy Framework. Posouzení nechte na DPO.',
    },
    {
      q: 'Podepíšete zpracovatelskou smlouvu a NDA?',
      a: 'Ano, standardně. NDA můžeme podepsat i před první schůzkou. Zpracovatelskou smlouvu podle čl. 28 GDPR uzavíráme dřív, než získáme přístup k datům, a rádi vyjdeme z vaší šablony. Uvádíme v ní subzpracovatele, technická a organizační opatření a postup po skončení spolupráce. Pracujeme ve vašich účtech na jmenovitých přístupech a po skončení je odebíráme.',
    },
    {
      q: 'Potřebujeme GA4 360?',
      a: 'Záleží na objemu a na tom, jak data používáte. GA4 360 dává smysl, když denně posíláte víc než milion událostí a potřebujete kompletní denní export do BigQuery, když chcete roll-up přes více značek nebo trhů, delší historii, nevzorkované explorace nebo smluvní SLA. Pokud většinu analýz děláte v BigQuery a limity standardní verze nepřekračujete, často stačí standardní GA4 se streamingem do BigQuery. Během discovery to spočítáme z reálných dat.',
    },
    {
      q: 'Jak spolupracujete s našimi agenturami?',
      a: 'Agentury dál dělají kampaně, my hlídáme jednotné měření. Každá agentura dostane vlastní pracovní prostor v GTM a přístup přes skupinu, změny procházejí měřicím plánem a publikaci schvaluje určená role. Agentury tak nemusí čekat na nás a zároveň nemohou nechtěně rozbít měření ostatním. Dokumentace a názvosloví jsou pro všechny stejné.',
    },
    {
      q: 'Jak zapadnete do našeho release procesu?',
      a: 'Přizpůsobíme se nástroji, který používáte, ať je to Jira, Azure DevOps, nebo ServiceNow, i cyklu releasů. Datová vrstva bude patřit do zadání a do definice hotového, automatický test poběží v CI pipeline a změny v GTM publikujeme v návaznosti na release webu. Exporty kontejnerů ukládáme do vašeho repozitáře, takže každá změna má historii a odkaz na požadavek.',
    },
    {
      q: 'Co když spolupráci ukončíme?',
      a: 'Měření poběží dál. Účty, kontejnery, Google Cloud projekt i data patří vám. Dokumentaci píšeme pro předání a nepoužíváme žádný vlastní skript ani server, bez kterého by měření nefungovalo. Při ukončení předáme aktuální stav, odebereme svoje přístupy a podle smlouvy smažeme případné pracovní kopie.',
    },
    {
      q: 'Jaké SLA nabízíte?',
      a: 'Reakční doby a rozsah dohodneme ve smlouvě podle toho, jak kritická jsou data pro byznys. Vždy definujeme priority: P1 je například výpadek měření nákupů či leadů nebo spouštění tagů před souhlasem, P2 částečný výpadek a P3 běžné požadavky. Podpora zahrnuje monitoring a měsíční report kvality dat. Konkrétní parametry navrhneme po discovery.',
    },
    {
      q: 'Jak u velkého projektu vzniká cena?',
      a: 'Discovery a audit nabízíme jako samostatnou fázi s pevným rozsahem. Z jejích výstupů vznikne návrh dalších fází – pilotu, rolloutu a provozu – s rozsahem, výstupy a termíny pro každou z nich. Cenu ovlivňuje hlavně počet domén a trhů, počet agentur a kontejnerů, server-side a BigQuery a požadovaná úroveň SLA. Náklady na Google Cloud a případné licence, třeba GA4 360, platíte přímo poskytovatelům.',
    },
    {
      q: 'Zúčastníte se výběrového řízení?',
      a: 'Ano. Dodáme harmonogram, rozsah po fázích a návrh SLA. Pokud zadávací dokumentace vyžaduje konkrétní formát nebo kvalifikační předpoklady, napište nám je předem – řekneme, co z toho splňujeme.',
    },
    {
      q: 'Školíte i naše týmy?',
      a: 'Ano, zaškolení týmů patří k předání. Marketing učíme práci s reporty a exploracemi GA4 a UTM konvencím, vývojáře datové vrstvě a testům, analytiky exportu GA4 v BigQuery a stavbě datového modelu pro Power BI nebo Data Studio. Školíme na vašich datech a nastavení.',
    },
    {
      q: 'Jak zajistíte, že měření nepřestane fungovat po releasu?',
      a: 'Kombinací tří věcí. Automatický test datové vrstvy v CI zastaví build, když chybí klíčové údaje. V release procesu publikujeme změny v GTM až po ověření na stagingu. A denní kontroly v BigQuery pošlou upozornění při propadu. O problému tak víte do 24 hodin, často dřív, než se dostane na produkci.',
    },
  ],

  relatedArticles: [
    { slug: 'merici-plan', title: 'Měřicí plán: jak naplánovat měření dřív, než napíšete první tag' },
    { slug: 'audit-gtm-kontejneru', title: 'Audit GTM kontejneru: nejčastější chyby a jak udržet pořádek' },
    {
      slug: 'hosting-server-side-gtm',
      title: 'Kde provozovat server-side GTM: Stape, Google Cloud Run, nebo český hosting?',
    },
    { slug: 'ga4-bigquery-export', title: 'GA4 → BigQuery export: nastavení, struktura tabulek, limity a cena' },
    { slug: 'jak-vybrat-dodavatele-mereni', title: 'Jak vybrat dodavatele měření' },
    {
      slug: 'zpracovani-dat-v-bigquery',
      title: 'Zpracování dat v BigQuery: od surových eventů k reportovacím tabulkám',
    },
  ],

  relatedPages: [
    'sluzby/server-side-tracking',
    'sluzby/bigquery',
    'sluzby/sprava-webu-a-mereni',
    'sluzby/audit-mereni',
    'sluzby/datova-vrstva',
    'sluzby/dashboardy-a-reporting',
    'reseni/b2b-a-lead-generation',
  ],

  contact: {
    formId: 'lp-velke-firmy',
    topics: ['server-side', 'bigquery', 'governance'],
    title: 'Domluvme si úvodní schůzku s vaším marketingem i IT',
    lead: 'Napište nám, nebo rovnou vyplňte formulář. Na úvodní hodinové schůzce projdeme domény, trhy, agentury a omezení IT a navrhneme, jak by mohl vypadat discovery. NDA rádi pošleme předem.',
    placeholder:
      'Např. máme čtyři trhy, tři agentury v GTM a chceme sjednotit měření a přesunout server-side do našeho Google Cloudu…',
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
