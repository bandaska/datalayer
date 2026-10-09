import type { PageInput } from '../../schema';

// Zdroj: seo-analyza/03_landing-pages/13_reseni-b2b-lead-generation.md
// Dokud klient nedodá podklady, stránka neobsahuje: počet projektů v trust baru,
// výčet CRM, se kterými má tým praktickou zkušenost, případovou studii (MiniCase),
// délky kroků postupu a partnerského poskytovatele call trackingu.
// Mini-kalkulačka ceny zakázky ze zadání zatím nemá odpovídající blok.

export const page: PageInput = {
  path: 'reseni/b2b-a-lead-generation',
  kind: 'solution',
  navTitle: 'B2B a lead generation',
  tagline: 'od formuláře po zakázku v CRM',
  pictogram: 'lead',

  seo: {
    title: 'Měření leadů a offline konverze z CRM | datalayer.cz',
    description:
      'Měříme leady od formuláře po zakázku v CRM a vracíme je do Google Ads a Mety: offline a rozšířené konverze, call tracking, CPL a CPO. Konzultace zdarma.',
  },

  hero: {
    eyebrow: 'řešení pro B2B a lead generation',
    h1: 'Měření leadů od formuláře až po zakázku v CRM',
    subtitle:
      'Propojíme formuláře, telefonáty a CRM s Google Ads, Metou a LinkedInem. Reklama se pak neučí z počtu vyplněných formulářů, ale z toho, které poptávky obchod opravdu uzavřel.',
    quickAnswer:
      'Měření leadů pro B2B spojuje tři místa: web, kde lead vznikne, CRM, kde obchod zjistí jeho kvalitu a hodnotu, a reklamní systémy, které z výsledku optimalizují. Formulář uloží zdroj a ID kliknutí do CRM, odtud fáze obchodu putují zpět jako offline a rozšířené konverze a report ukáže cenu leadu i cenu zakázky.',
    primaryCta: { label: 'Probrat měření leadů', href: '#kontakt' },
    secondaryCta: { label: 'Ukázat, jak to funguje', href: '#jak-to-funguje' },
    microcopy: 'Třicet minut zdarma · odpověď do jednoho pracovního dne',
  },

  trust: [
    'Google Ads · Meta · LinkedIn · Sklik',
    'Offline a rozšířené konverze z CRM',
    'Osobní údaje jen jako hash a se souhlasem',
  ],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'problém',
      title: 'Poznáváte se v některém z těchto problémů?',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Hodně leadů, málo zakázek',
              text: 'Kampaně hlásí rekordní počet poptávek, obchod tvrdí, že polovina jsou studenti, konkurence a spam. Kdo má pravdu, nikdo neví.',
              pictogram: 'lead',
            },
            {
              title: 'Google Ads optimalizuje na formulář',
              text: 'Chytré nabídky se učí, že dobrý lead je jakýkoliv lead. Proto přivádějí víc levných a horších.',
              pictogram: 'conversion',
            },
            {
              title: 'V CRM chybí zdroj',
              text: 'Obchodník vidí jméno a telefon, ale ne kampaň, klíčové slovo ani to, že zákazník přišel z LinkedInu.',
              pictogram: 'datalayer',
              console: ['lead_id: L-26-0912', 'firma: ACME Stavby s.r.o.', '⚠ source: null'],
            },
            {
              title: 'Telefonáty nikdo neměří',
              text: 'Polovina poptávek přijde telefonem, ale v reportech chybí.',
              pictogram: 'warn',
            },
            {
              title: 'Obchodní cyklus trvá měsíce',
              text: 'Obchod uzavře zakázku po třech měsících a reklamní systém se o ní nikdy nedozví.',
              pictogram: 'monitor',
            },
            {
              title: 'Report pro vedení skládáte ručně',
              text: 'Náklady z Ads, leady z GA4, zakázky z CRM – každý měsíc jiný Excel a jiná čísla.',
              pictogram: 'dashboard',
            },
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      eyebrow: 'jak to funguje',
      title: 'Jak to funguje: od kliknutí na reklamu po zakázku a zpět',
      lead: 'Web, CRM a reklamní systémy tvoří jeden okruh. CRM vrací výsledek obchodu tam, kde lead vznikl.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Schéma toku dat: klik na reklamu přinese na web ID kliknutí. Formulář pošle lead do GA4, do reklamních systémů a se zdrojem do CRM. Obchod v CRM mění fáze, export je jednou denně vrací do Google Ads, Mety a LinkedInu a BigQuery spojí náklady, leady a zakázky do dashboardu.',
          columns: [
            {
              label: 'Reklama',
              items: ['Google Ads', 'Meta', 'LinkedIn', 'Sklik'],
              note: 'klik s gclid, gbraid, wbraid, fbclid, li_fat_id',
            },
            {
              label: 'Web a formulář',
              items: ['uloží ID kliknutí a UTM', 'generate_lead s lead_id a hashem'],
            },
            {
              label: 'GTM web + sGTM',
              items: ['GA4', 'Google Ads, Meta CAPI, LinkedIn'],
              note: 'lead hned po odeslání',
            },
            {
              label: 'CRM',
              items: ['zdroj, click ID, lead_id', 'kvalifikovaný lead → nabídka → zakázka'],
            },
            {
              label: 'Návrat do reklam',
              items: ['Google Ads přes Data Manager', 'Meta a LinkedIn přes Conversions API'],
              note: 'jednou denně',
            },
            {
              label: 'BigQuery a dashboard',
              items: ['CPL · CPQL · CPO · lead-to-deal'],
            },
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: 'Klik na reklamu',
              text: 'Reklamní systém přidá do URL identifikátor kliknutí: <code>gclid</code>, u iOS <code>gbraid</code> nebo <code>wbraid</code>, dále <code>fbclid</code> či <code>li_fat_id</code>. Web ho uloží spolu s UTM parametry – jen pokud to souhlas návštěvníka dovoluje.',
            },
            {
              title: 'Odeslání formuláře',
              text: 'Formulář pošle událost <code>generate_lead</code> s ID leadu a hashovaným e-mailem a telefonem. GA4 a reklamní systémy dostanou lead okamžitě.',
            },
            {
              title: 'Zápis do CRM',
              text: 'Skrytá pole předají do CRM zdroj, kampaň, ID kliknutí a stejné <code>lead_id</code>. Obchodník vidí, odkud poptávka přišla.',
            },
            {
              title: 'Práce obchodu',
              text: 'Obchod lead kvalifikuje, pošle nabídku a zakázku uzavře, nebo ztratí. Každá změna fáze je datový bod.',
            },
            {
              title: 'Návrat do reklam',
              text: 'Jednou denně export z CRM pošle fáze a hodnoty do Google Ads jako offline a rozšířené konverze, do Mety a LinkedInu přes Conversions API.',
            },
            {
              title: 'Report',
              text: 'BigQuery spojí náklady, leady a zakázky a dashboard ukáže cenu leadu, kvalifikovaného leadu i zakázky po kanálech.',
            },
          ],
        },
      ],
    },

    {
      id: 'co-nastavime',
      eyebrow: 'co nastavíme',
      title: 'Co přesně nastavíme',
      lead: 'Okruh od formuláře po zakázku stojí na sedmi stavebních blocích.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              tag: 'form',
              title: 'Měření formulářů v GA4 a GTM',
              text: 'Měříme celý formulář, ne jen stránku „děkujeme“: začátek vyplňování <code>lead_form_start</code>, chyby validace <code>lead_form_error</code> a odeslání jako doporučenou událost GA4 <code>generate_lead</code>. Uvidíte, na kterém poli lidé odcházejí a které landing page přivádějí poptávky. U formulářů třetích stran zvolíme spolehlivé zachycení, nebo doporučíme nativní formulář.',
            },
            {
              tag: 'crm',
              title: 'CRM integrace: zdroj a click ID v každém kontaktu',
              text: 'Do CRM přidáme pole pro zdroj, médium, kampaň, vstupní stránku, ID kliknutí a <code>lead_id</code> a formulář je vyplní automaticky. Obchodník vidí, odkud poptávka přišla, a my můžeme data později poslat zpět do reklam. Pole a automatizace nastavíme sami, nebo je připravíme pro CRM admina.',
            },
            {
              tag: 'quality',
              title: 'Kvalita leadů: fáze, které dávají smysl',
              text: 'S obchodem nastavíme jednoduchou mapu fází – od nového leadu po vyhranou nebo prohranou zakázku – a pravidla, kdy fázi změnit. Fáze propisujeme do GA4 jako doporučené události, třeba <code>qualify_lead</code> nebo <code>close_convert_lead</code>. Bez disciplíny v CRM nefunguje žádné měření, proto přidáme i krátké zaškolení obchodu.',
            },
            {
              tag: 'ads',
              title: 'Offline konverze v Google Ads a rozšířené konverze pro potenciální zákazníky',
              text: 'Vyhrané zakázky a kvalifikované leady posíláme do Google Ads i s hodnotou. ID kliknutí kombinujeme s hashovaným e-mailem a telefonem. Tomu Google říká rozšířené konverze pro potenciální zákazníky a pro nové implementace je doporučuje. Od června 2026 Google směruje nahrávání do Data Manageru, proto nastavíme pravidelný import z CRM, BigQuery nebo tabulky.',
              link: { label: 'Měření konverzí', href: '/sluzby/mereni-konverzi' },
            },
            {
              tag: 'capi',
              title: 'Meta a LinkedIn: serverové události z CRM',
              text: 'Lead z webu posíláme do Mety přes Pixel i Conversions API se stejným <code>event_id</code>, aby ho Meta nezapočítala dvakrát. Další fáze z CRM posíláme jako serverové události. Pro Lead Ads nastavíme Conversions API pro CRM, které umožní optimalizaci na kvalitu leadu, a pro kampaně na LinkedInu jeho Conversions API.',
              link: { label: 'Server-side tracking', href: '/sluzby/server-side-tracking' },
            },
            {
              tag: 'call',
              title: 'Call tracking',
              text: 'Telefonáty měříme podle toho, jak velkou část poptávek tvoří: od kliku na číslo přes volání z reklam Google Ads až po dynamická čísla s napojením na CRM. Čtyři úrovně popisujeme níže.',
            },
            {
              tag: 'report',
              title: 'Reporting pipeline',
              text: 'Náklady z reklam, leady z GA4 a fáze z CRM spojíme v BigQuery a postavíme nad nimi dashboard v Data Studiu (dříve Looker Studio) nebo v Power BI: cena leadu, kvalifikovaného leadu a zakázky a podíl uzavřených obchodů podle kanálů a kampaní.',
              link: { label: 'Dashboardy a reporting', href: '/sluzby/dashboardy-a-reporting' },
            },
          ],
        },
      ],
    },

    {
      id: 'mapa-fazi',
      eyebrow: 'mapa fází',
      title: 'Mapa fází leadu: co kam posíláme',
      lead: 'Každá firma pojmenovává fáze jinak. Princip je ale stejný: rané fáze slouží reklamním systémům k rychlému učení, pozdní fáze k ověření, že reklama vydělává.',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          caption: 'Ukázka mapy fází, jak ji navrhujeme',
          head: ['Fáze v CRM', 'Událost GA4', 'Konverzní akce v Google Ads', 'Meta / LinkedIn', 'Hodnota', 'Kdy posíláme'],
          rows: [
            [
              'Odeslaný formulář nebo hovor',
              '<code>generate_lead</code>',
              '„Lead – formulář“, sekundární',
              '<code>Lead</code> přes Pixel a CAPI / Lead',
              'odhad: průměrná hodnota × pravděpodobnost uzavření',
              'okamžitě z webu',
            ],
            ['Kontaktovaný', '<code>working_lead</code>', '–', '–', '–', 'z CRM, denně'],
            [
              'Kvalifikovaný (SQL)',
              '<code>qualify_lead</code>',
              '„Kvalifikovaný lead“, <strong>primární</strong> při dlouhém cyklu',
              'vlastní <code>QualifiedLead</code> přes CAPI',
              'podle segmentu',
              'z CRM, denně',
            ],
            [
              'Diskvalifikovaný',
              '<code>disqualify_lead</code>',
              'neposíláme jako konverzi',
              '–',
              '–',
              'z CRM, jen do GA4 a BigQuery',
            ],
            [
              'Odeslaná nabídka',
              'vlastní <code>proposal_sent</code>',
              '„Nabídka“, sekundární',
              'volitelně',
              'hodnota nabídky',
              'z CRM, denně',
            ],
            [
              'Vyhraná zakázka',
              '<code>close_convert_lead</code>',
              '„Zakázka“, <strong>primární</strong> při krátkém cyklu',
              '<code>Purchase</code> nebo vlastní <code>Won</code> přes CAPI',
              'skutečná hodnota zakázky bez DPH',
              'z CRM, denně',
            ],
            [
              'Prohraná zakázka',
              '<code>close_unconvert_lead</code>',
              '–',
              '–',
              '–',
              'z CRM, jen do GA4 a BigQuery',
            ],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Primární konverzi, na kterou se učí chytré nabízení, volíme podle délky cyklu a počtu konverzí: čím delší cyklus a čím méně zakázek, tím dřívější fázi. Ostatní fáze sledujeme jako sekundární, aby report ukazoval celý trychtýř.',
          ],
        },
      ],
    },

    {
      id: 'dlouhy-cyklus',
      eyebrow: 'dlouhý cyklus',
      title: 'Co když obchod trvá týdny nebo měsíce?',
      lead: 'V B2B obchodníci často uzavřou zakázku až po týdnech nebo měsících. Reklamní systémy přitom potřebují zpětnou vazbu rychle a mají časová okna. S tím počítáme od začátku.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              tag: '01',
              title: 'Identifikátory uložíme hned',
              text: 'ID kliknutí a hash kontaktu zapíše formulář do CRM už při odeslání. Později je nikdo nedohledá.',
            },
            {
              tag: '02',
              title: 'Hlídáme časová okna',
              text: 'Google Ads přiřadí offline konverzi jen v konverzním okně, tedy nejdéle devadesát dní od kliknutí. Delší obchody optimalizujeme na dřívější fázi a zakázky sledujeme v reportu.',
            },
            {
              tag: '03',
              title: 'Hodnota místo počtu',
              text: 'Raným fázím přiřadíme očekávanou hodnotu: průměrná zakázka × pravděpodobnost uzavření v dané fázi. Chytré nabízení pak upřednostní leady s šancí na velkou zakázku.',
            },
            {
              tag: '04',
              title: 'Kupní skupina, ne jeden člověk',
              text: 'V B2B rozhoduje víc lidí z jedné firmy. Kontakty párujeme na firmu a obchodní případ, aby report nezapočítal jednu zakázku třikrát a ukázal i nepřímý vliv kampaní.',
            },
          ],
        },
      ],
    },

    {
      id: 'reporting',
      eyebrow: 'reporting',
      title: 'Reporting pipeline: cena leadu, cena zakázky a co mezi tím',
      lead: 'Report odpovídá na tři otázky: kolik stojí zakázka z každého kanálu, kde trychtýř ztrácí nejvíc leadů a kolik peněz leží v rozpracovaných obchodech. Data načítá automaticky, bez ručního Excelu.',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          caption:
            'Ukázkový příklad s fiktivními daty za třetí čtvrtletí. CPL = cena leadu, CPQL = cena kvalifikovaného leadu, CPO = cena zakázky.',
          head: ['Kanál', 'Náklady', 'Leady', 'CPL', 'Kvalifikované', 'CPQL', 'Zakázky', 'CPO'],
          rows: [
            ['Google Ads – Search', '92 000 Kč', '180', '511 Kč', '82', '1 122 Kč', '8', '11 500 Kč'],
            ['Meta', '48 000 Kč', '168', '286 Kč', '34', '1 412 Kč', '1', '48 000 Kč'],
            ['LinkedIn', '36 000 Kč', '38', '947 Kč', '27', '1 333 Kč', '4', '9 000 Kč'],
            ['Sklik', '10 000 Kč', '26', '385 Kč', '15', '667 Kč', '1', '10 000 Kč'],
            [
              '<strong>Celkem</strong>',
              '<strong>186 000 Kč</strong>',
              '<strong>412</strong>',
              '<strong>451 Kč</strong>',
              '<strong>158</strong>',
              '<strong>1 177 Kč</strong>',
              '<strong>14</strong>',
              '<strong>13 286 Kč</strong>',
            ],
          ],
        },
        {
          type: 'list',
          style: 'bullet',
          title: 'Trychtýř ve stejném období',
          items: [
            'Leady: 412',
            'Kvalifikované: 158, tedy 38 % leadů',
            'Nabídky: 47, tedy 11 % leadů',
            'Zakázky: 14, tedy 3,4 % leadů, v celkové hodnotě 2,94 mil. Kč',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Co z ukázky plyne',
          text: 'Meta má nejlevnější lead, ale nejdražší zakázku. LinkedIn má nejdražší lead, ale nejlevnější zakázku. Bez propojení s CRM byste rozpočet přesouvali opačným směrem.',
        },
      ],
    },

    {
      id: 'crm',
      eyebrow: 'CRM',
      title: 'Napojení CRM: HubSpot, Salesforce, Pipedrive, Raynet a další',
      lead: 'Na konkrétním CRM záleží méně, než se zdá. Rozhoduje, jestli do něj dostaneme zdroj leadu a jestli z něj umíme pravidelně exportovat fáze.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          head: ['CRM', 'Zdroj a click ID do CRM', 'Návrat do Google Ads', 'Meta a LinkedIn', 'Reporting'],
          rows: [
            [
              '<strong>HubSpot</strong>',
              'Skrytá pole, vlastnosti kontaktu a dealu',
              'Nativně v Data Manageru, podmínky podle fáze životního cyklu',
              'CAPI přes sGTM nebo integraci, možnosti ověříme podle tarifu',
              'Data Studio, Power BI, BigQuery',
            ],
            [
              '<strong>Salesforce</strong>',
              'Pole na Lead a Opportunity, Web-to-Lead nebo API',
              'Nativně v Data Manageru',
              'CAPI',
              'BigQuery, Power BI',
            ],
            [
              '<strong>Pipedrive</strong>',
              'Vlastní pole přes API nebo webhook',
              'Export do BigQuery nebo Google Sheets, odtud Data Manager',
              'CAPI ze sGTM nebo z exportu',
              'BigQuery, Data Studio',
            ],
            [
              '<strong>Raynet</strong>',
              'Vlastní pole přes API',
              'Export do BigQuery nebo Sheets, odtud Data Manager; API ověříme na konkrétním tarifu',
              'CAPI ze sGTM nebo z exportu',
              'BigQuery, Power BI',
            ],
            [
              '<strong>Microsoft Dynamics 365</strong>',
              'Pole na Lead a Opportunity',
              'Export do BigQuery, přes SFTP nebo HTTP, odtud Data Manager',
              'CAPI',
              'Power BI',
            ],
            [
              '<strong>Vlastní CRM, ERP nebo tabulka</strong>',
              'Podle možností systému: API, databáze, export',
              'BigQuery, MySQL, PostgreSQL, SFTP nebo Sheets, odtud Data Manager',
              'CAPI ze serveru',
              'BigQuery a dashboard',
            ],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Google Ads Data Manager načítá data mimo jiné z Google Sheets, BigQuery, Cloud Storage, SFTP, HTTP, MySQL, PostgreSQL, Snowflake, Redshift, HubSpotu a Salesforce. Pro ostatní CRM používáme mezikrok přes BigQuery nebo tabulku.',
          ],
        },
      ],
    },

    {
      id: 'call-tracking',
      eyebrow: 'call tracking',
      title: 'Call tracking: měření telefonátů, které vedou k zakázkám',
      lead: 'V řadě B2B oborů přijde velká část poptávek telefonem. Měřit je můžeme na čtyřech úrovních – podle toho, kolik hovorů máte a jak přesná data potřebujete.',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          head: ['Úroveň', 'Co měří', 'Jak', 'Pro koho'],
          rows: [
            [
              '<strong>1 · Klik na číslo</strong>',
              'Kliky na telefonní číslo na mobilu',
              'Událost <code>contact_click</code> v GA4, sekundární konverze v Google Ads',
              'Každý web – základ',
            ],
            [
              '<strong>2 · Volání z reklam Google Ads</strong>',
              'Hovory z rozšíření s voláním a z reklam jen s voláním',
              'Přesměrovací číslo Google, v ČR dostupné; konverze od minimální délky hovoru',
              'Firmy s reklamou ve vyhledávání',
            ],
            [
              '<strong>3 · Dynamická čísla na webu</strong>',
              'Kanál, kampaň a stránka, které vedly k hovoru',
              'Poskytovatel call trackingu přidělí návštěvě číslo z poolu, hovor spáruje se zdrojem a pošle do GA4 a CRM',
              'Firmy, kde telefon tvoří významnou část poptávek',
            ],
            [
              '<strong>4 · Hovor jako lead v CRM</strong>',
              'Kvalita a výsledek hovoru',
              'Ústředna nebo call tracking zapíše hovor do CRM jako lead se zdrojem. Dál s ním pracujeme stejně jako s formulářem',
              'B2B s obchodním týmem',
            ],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'U třetí a čtvrté úrovně je potřeba volající informovat, pokud hovory nahráváte, a vybrat poskytovatele, který data zpracovává v EU. Konkrétního poskytovatele doporučíme podle ústředny a CRM, které používáte.',
          ],
        },
      ],
    },

    {
      id: 'osobni-udaje',
      eyebrow: 'osobní údaje',
      title: 'Osobní údaje: co posíláme a co nikdy',
      tone: 'light',
      blocks: [
        {
          type: 'list',
          style: 'check',
          title: 'Posíláme',
          items: [
            'E-mail a telefon jen jako SHA-256 hash po normalizaci: malá písmena, bez mezer, telefon ve formátu +420…',
            'Hash jen do Google Ads, Mety a LinkedInu a jen se souhlasem <code>ad_user_data</code> v <a href="/sluzby/cookie-lista-consent-mode">Consent Mode v2</a>.',
            'ID kliknutí a ID leadu.',
            'Hodnotu a fázi obchodu.',
          ],
        },
        {
          type: 'list',
          style: 'cross',
          title: 'Nikdy',
          items: [
            'E-mail, jméno ani telefon v čitelné podobě do GA4 – podmínky Google Analytics to zakazují.',
            'Obsah zprávy z formuláře.',
            'Citlivé údaje, například o zdraví nebo financích jednotlivce.',
            'Data bez souhlasu tam, kde je souhlas potřeba.',
          ],
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Kdo za co odpovídá',
          text: 'Vy jste správce údajů z CRM. Google u rozšířených konverzí vystupuje jako zpracovatel podle Google Ads Data Processing Terms, my jako zpracovatel podle zpracovatelské smlouvy. Právní posouzení patří vašemu právníkovi: ten rozhodne o právním titulu pro předání údajů i o textech zásad. Nejsme advokátní kancelář.',
        },
      ],
    },

    {
      id: 'srovnani',
      eyebrow: 'srovnání',
      title: 'Běžné měření leadů vs. měření až do CRM',
      lead: 'Většina agentur měří odeslaný formulář. My měříme i to, co se s poptávkou stalo potom.',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          head: ['Oblast', 'Běžné měření leadů', 'Měření až do CRM'],
          highlightColumn: 2,
          rows: [
            [
              'Co je konverze',
              'Odeslaný formulář nebo stránka „děkujeme“',
              'Formulář, kvalifikovaný lead, nabídka i zakázka – každá s hodnotou',
            ],
            ['Na co se učí Google Ads a Meta', 'Na počet formulářů', 'Na leady, ze kterých jsou zakázky'],
            [
              'Zdroj leadu v CRM',
              'Chybí, nebo ho obchodník dopisuje ručně',
              'Automaticky: kampaň, klíčové slovo, click ID',
            ],
            ['Telefonáty', 'Nikdo je neměří', 'Podle zvolené úrovně call trackingu'],
            ['Report', 'Cena za lead', 'Cena za lead, za kvalifikovaný lead i za zakázku, po kanálech'],
            ['Osobní údaje', 'Často e-mail v URL nebo v GA4', 'Jen hash, se souhlasem, ve smluvním rámci'],
            [
              'Kdo to dnes nabízí',
              'Většina PPC agentur jako součást správy kampaní',
              'Samostatné řešení s mapou fází, implementací a dokumentací',
            ],
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
          type: 'table',
          head: ['Výstup', 'Popis'],
          rows: [
            [
              '<code>mapa-fazi-leadu.pdf</code>',
              'Fáze leadu, pravidla jejich změny, vazba na GA4, Google Ads, Metu a LinkedIn, hodnoty',
            ],
            [
              '<code>merici-plan.xlsx</code>',
              'Formuláře, telefonáty, události, parametry, primární a sekundární konverzní akce',
            ],
            [
              'Specifikace formulářů',
              'Kontrakt <code>dataLayer</code> pro <code>lead_form_start</code>, <code>lead_form_error</code> a <code>generate_lead</code> s <code>lead_id</code> a hashem, skrytá pole, uložení click ID',
            ],
            ['Úprava CRM', 'Pole, automatizace a export. Nastavíme je sami, nebo je připravíme pro admina.'],
            [
              'Napojení reklamních systémů',
              'Google Ads přes Data Manager, Meta CAPI, LinkedIn CAPI, podle potřeby Sklik',
            ],
            ['Call tracking', 'Nastavení zvolené úrovně'],
            ['Dashboard pipeline', 'Data Studio nebo Power BI nad BigQuery'],
            ['Dokumentace a zaškolení obchodu', 'Jak vyplňovat fáze, aby data dávala smysl'],
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
              text: 'Zdarma projdeme formuláře, CRM, kanály a délku obchodního cyklu.',
              fromClient: 'Lidé, kteří mají na starosti marketing, obchod a CRM',
            },
            {
              title: 'Audit',
              text: 'Zkontrolujeme formuláře, GTM, GA4, konverzní akce, pole v CRM a kvalitu dat.',
              fromClient: 'Přístupy pro čtení: web, GTM, GA4, Google Ads, Meta, CRM',
            },
            {
              title: 'Workshop s obchodem',
              text: 'Společně navrhneme mapu fází leadu, hodnoty a pravidla.',
              fromClient: 'Obchodní ředitel nebo zkušený obchodník',
            },
            {
              title: 'Implementace web + CRM',
              text: 'Formuláře, uložení click ID, datová vrstva, pole a automatizace v CRM.',
              fromClient: 'CRM admin, případně vývojář webu',
            },
            {
              title: 'Napojení reklam',
              text: 'Data Manager, Conversions API a call tracking.',
              fromClient: 'Admin přístup do reklamních účtů',
            },
            {
              title: 'Validace',
              text: 'Testovací leady, první offline konverze, kontrola párování.',
              fromClient: 'Obchod, který fáze v CRM opravdu mění',
            },
            {
              title: 'Report a předání',
              text: 'Dashboard, dokumentace a zaškolení.',
            },
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'První zakázky uvidí reklamní systémy až poté, co obchodníci uzavřou první obchody z nově měřených leadů. Plný efekt počítejte po jednom až dvou obchodních cyklech. Obecný průběh spolupráce popisujeme na stránce <a href="/jak-pracujeme">Jak pracujeme</a>.',
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Co jsou rozšířené konverze pro potenciální zákazníky a proč je používat?',
      a: 'Je to vylepšená forma importu offline konverzí v Google Ads. Formulář na webu uloží e-mail nebo telefon zájemce jako hash. Když obchod lead uzavře, pošlete do Google Ads stejný hash s výsledkem. Google ho spáruje s přihlášeným účtem, který klikl na reklamu – i když ID kliknutí cestou zmizelo. Pro nové implementace Google tuto metodu doporučuje místo samotného importu přes GCLID. Rozšířené konverze pro web a pro leady dnes zapínáte jedním nastavením. Metoda funguje jen tam, kde návštěvník udělil souhlas <code>ad_user_data</code>.',
    },
    {
      q: 'Jak dostat zakázky z CRM zpět do Google Ads?',
      a: 'Potřebujete tři věci: automatické značkování v Google Ads, ID kliknutí nebo hash kontaktu u každého leadu v CRM a pravidelný export fází s hodnotou. Export nastavíme přes Google Ads Data Manager – přímo z HubSpotu či Salesforce, nebo přes BigQuery, Google Sheets nebo SFTP. Od 15. června 2026 Google omezil nahrávání offline konverzí přes Google Ads API a směruje ho do Data Manager API, takže starší skripty je potřeba převést. Novou konverzní akci je dobré založit dřív, než začnete ID sbírat.',
    },
    {
      q: 'Funguje to i s Pipedrive, Raynetem nebo naším vlastním CRM?',
      a: 'Ano. Nativní konektory v Google Ads Data Manageru existují pro HubSpot a Salesforce. U ostatních CRM data vyexportujeme přes API nebo webhook do BigQuery či do tabulky a odtud je Data Manager načte. Podmínka je, aby CRM umělo uložit vlastní pole pro zdroj, ID kliknutí a ID leadu a aby šlo fáze obchodu pravidelně exportovat. U Raynetu a dalších systémů ověříme dostupnost API na konkrétním tarifu ještě před nabídkou.',
    },
    {
      q: 'Co když náš obchodní cyklus trvá déle než devadesát dní?',
      a: 'Google Ads přiřadí offline konverzi jen v konverzním okně, které trvá nejvýše devadesát dní od kliknutí. U delších cyklů proto jako primární konverzi pro chytré nabízení použijeme dřívější fázi – typicky kvalifikovaný lead s očekávanou hodnotou. Vyhrané zakázky sledujeme v reportu nad BigQuery. Reklama se tak učí rychle a vy přesto vidíte, kolik stojí skutečná zakázka.',
    },
    {
      q: 'Jak to funguje s Metou, tedy s Facebookem a Instagramem?',
      a: 'Leady z webového formuláře posíláme do Mety přes Pixel i Conversions API se stejným <code>event_id</code>, aby je Meta nezapočítala dvakrát. Další fáze z CRM posíláme jako serverové události s hashovaným e-mailem a telefonem. Pokud používáte formuláře přímo v Metě, tedy Lead Ads, nastavíme Conversions API pro CRM, které umí optimalizovat na kvalitu leadu. Meta pro něj vyžaduje mimo jiné alespoň 200 leadů měsíčně a denní nahrávání dat. Starší Offline Conversions API Meta už nepodporuje: od verze Graph API v17.0 nepřijímá offline události a dokumentace ho vede jako legacy. Offline a CRM události proto posíláme přes Conversions API.',
    },
    {
      q: 'Je posílání dat z CRM do Googlu a Mety v souladu s GDPR?',
      a: 'Technicky to nastavujeme konzervativně: kontaktní údaje jen jako hash, jen se souhlasem <code>ad_user_data</code>, žádné osobní údaje v GA4 a jen nezbytná pole. Google u rozšířených konverzí vystupuje jako zpracovatel podle Google Ads Data Processing Terms, my jako zpracovatel na základě zpracovatelské smlouvy. Právní posouzení patří vašemu právníkovi: ten rozhodne, zda máte pro předání údajů reklamním systémům právní titul a jak o něm informujete. Nejsme advokátní kancelář, ale právníkovi dodáme přesný popis datových toků.',
    },
    {
      q: 'Jak měřit telefonáty?',
      a: 'Záleží na tom, kolik poptávek přichází telefonem. Základ je měření kliků na telefonní číslo. Pro reklamu ve vyhledávání můžete použít přesměrovací čísla Google. V ČR jsou dostupná a hovory delší než zvolený limit počítají jako konverze. Pokud telefon tvoří velkou část poptávek, doporučíme dynamická čísla od poskytovatele call trackingu: systém každý hovor spáruje s kanálem a kampaní a zapíše ho do CRM jako lead.',
    },
    {
      q: 'Jaký je dobrý konverzní poměr leadů a kolik jich potřebujeme?',
      a: 'Univerzální číslo neexistuje. Podíl leadů, ze kterých je zakázka, se liší podle oboru, ceny a kanálu – mezi kanály často i několikanásobně. Proto ho měříme pro každý kanál zvlášť. Pro reklamní systémy platí: čím méně konverzí dané fáze měsíčně máte, tím dřívější fázi je lepší použít pro optimalizaci. U Lead Ads s optimalizací na kvalitu Meta požaduje alespoň 200 leadů měsíčně.',
    },
    {
      q: 'Kolik to stojí a z čeho se cena skládá?',
      a: 'Cenu určuje počet formulářů a vstupních kanálů, jako je web, telefon nebo Lead Ads, dále CRM a jeho možnosti exportu, počet reklamních systémů, úroveň call trackingu a to, jestli chcete dashboard. Ceník neuvádíme. Po úvodní konzultaci a krátkém auditu dostanete nabídku s pevným rozsahem, výstupy a termínem. Poplatky za call tracking nebo licence CRM platíte přímo poskytovatelům.',
    },
    {
      q: 'Co od nás budete potřebovat?',
      a: 'Přístupy do webu nebo GTM, GA4, Google Ads, Meta Business Manageru, případně LinkedIn Campaign Manageru. Dále administrátora CRM, nebo pro nás dočasný přístup. Hlavně ale potřebujeme krátký workshop s obchodem: bez dohody, co znamená „kvalifikovaný lead“ a kdy obchodník mění fázi, žádné měření fungovat nebude. Po spuštění je důležité, aby obchodníci fáze v CRM opravdu vyplňovali.',
    },
    {
      q: 'Za jak dlouho uvidíme výsledky?',
      a: 'Měření formulářů a zdroje v CRM funguje hned po implementaci. Offline konverze uvidíte v reklamních systémech, až obchodníci uzavřou první zakázky z nově měřených leadů – podle délky cyklu za týdny až měsíce. Chytré nabízení se pak přizpůsobuje další týdny. Plný efekt počítejte po jednom až dvou obchodních cyklech.',
    },
    {
      q: 'Měříte i LinkedIn?',
      a: 'Ano. Pro B2B kampaně nastavíme LinkedIn Insight Tag, který spustíme jen se souhlasem, a LinkedIn Conversions API. Přes něj posíláme ze serveru online i offline konverze. Do reportu přidáme náklady z LinkedIn Campaign Manageru, abyste viděli, kolik stojí zakázka z LinkedInu ve srovnání s Google Ads a Metou.',
    },
  ],

  relatedArticles: [
    { slug: 'mereni-formularu-a-leadu', title: 'Měření formulářů a leadů: od formuláře po zakázku v CRM' },
    { slug: 'offline-konverze-z-crm', title: 'Offline konverze z CRM do Google Ads a Meta' },
    { slug: 'rozsirene-konverze', title: 'Rozšířené konverze (enhanced conversions) pro web i leady' },
    { slug: 'mereni-telefonatu', title: 'Měření telefonátů a call tracking v ČR' },
    { slug: 'marketingovy-dashboard', title: 'Marketingový dashboard: jaké KPI sledovat v e-shopu a v B2B' },
    { slug: 'osobni-udaje-v-analytice', title: 'Osobní údaje v analytice: co smíte poslat do GA4, Google Ads a Meta' },
  ],

  relatedPages: [
    'sluzby/mereni-konverzi',
    'sluzby/bigquery',
    'sluzby/dashboardy-a-reporting',
    'sluzby/server-side-tracking',
    'sluzby/cookie-lista-consent-mode',
    'sluzby/audit-mereni',
  ],

  contact: {
    formId: 'lp-b2b',
    topics: ['konverze', 'leady-crm'],
    title: 'Pojďme zjistit, kolik vás stojí zakázka, ne lead',
    lead: 'Napište nám, nebo rovnou vyplňte formulář. Na úvodní třicetiminutové konzultaci projdeme formuláře, CRM a kampaně a řekneme, co propojit jako první – nezávazně a zdarma.',
    placeholder:
      'Např. máme HubSpot, leady z Google Ads a LinkedInu, obchod říká, že polovina je nekvalitních, a chceme posílat zakázky zpět do reklam…',
    leadType: 'consultation',
  },

  schema: {
    name: 'Měření leadů a offline konverze pro B2B',
    serviceType:
      'Měření formulářů, napojení CRM, offline a rozšířené konverze pro leady, call tracking, reporting pipeline',
    description:
      'Měření leadů od formuláře po zakázku v CRM a jejich návrat do Google Ads, Mety a LinkedInu: offline konverze, rozšířené konverze pro potenciální zákazníky, call tracking a reporting CPL, CPO a lead-to-deal.',
    audience: 'B2B a lead generation firmy',
  },
};
