import type { PageInput } from '../../schema';

// Štíhlá šablona LP podle vyhodnocení webu (9. října 2026, kap. 3.1 a 5.13).
// Zdroj obsahu: seo-analyza/03_landing-pages/13_reseni-b2b-lead-generation.md.
// Mapa fází leadu je na stránce jako časová osa, celá tabulka fází, identifikátory
// kliknutí, požadavky Mety a čtyři úrovně call trackingu zůstávají ve sbalených
// Technických detailech, dokud nevyjdou články E3 a E5. Reporting pipeline zastupuje
// ukázka „cena leadu → cena zakázky“ s fiktivními daty, tabulku CRM řádek čipů.
// Dokud klient nedodá podklady, stránka neobsahuje počet projektů, výčet CRM,
// se kterými má tým praktickou zkušenost, případovou studii, délky kroků
// a partnerského poskytovatele call trackingu.

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
      'Měření leadů propojí web, kde poptávka vznikne, CRM, kde obchod zjistí její kvalitu a hodnotu, a reklamní systémy, které z výsledku optimalizují. Formulář uloží zdroj a ID kliknutí do CRM a fáze obchodu putují zpět do Google Ads, Mety a LinkedInu jako offline konverze. Reklama se pak neučí z počtu formulářů, ale z poptávek, které obchod opravdu uzavřel.',
    primaryCta: { label: 'Probrat měření leadů', href: '#kontakt' },
    secondaryCta: { label: 'Ukázat, jak to funguje', href: '#jak-to-funguje' },
    microcopy: 'Třicet minut zdarma · odpověď do jednoho pracovního dne',
  },

  trust: ['Zakázky z CRM zpět v reklamách', 'Cena leadu i zakázky po kanálech', 'Osobní údaje jen jako hash a se souhlasem'],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Poznáváte se?',
      lead: 'Měření do CRM dává smysl, když reklama přivádí poptávky, ale nikdo neví, které z nich končí zakázkou.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'Hodně leadů, málo zakázek',
              text: 'Kampaně hlásí rekordní počet poptávek a obchod tvrdí, že polovina jsou studenti, konkurence a spam.',
              pictogram: 'lead',
              tag: 'leady',
            },
            {
              title: 'Google Ads optimalizuje na formulář',
              text: 'Chytré nabídky se učí, že dobrý lead je jakýkoli lead, a přivádějí víc levných a horších.',
              pictogram: 'conversion',
              tag: 'google ads',
            },
            {
              title: 'V CRM chybí zdroj',
              text: 'Obchodník vidí jméno a telefon, ale ne kampaň, klíčové slovo ani to, že zákazník přišel z LinkedInu.',
              pictogram: 'datalayer',
              tag: 'crm',
            },
            {
              title: 'Obchodní cyklus trvá měsíce',
              text: 'Obchod uzavře zakázku po třech měsících a reklamní systém se o ní nikdy nedozví.',
              pictogram: 'monitor',
              tag: 'cyklus',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      eyebrow: 'výstupy',
      title: 'Co uděláme a co dostanete',
      lead: 'Okruh od kliknutí po zakázku stojí na šesti stavebních blocích – od měření formulářů přes CRM po dashboard.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'merici-plan.xlsx',
              title: 'Měřicí plán a formuláře',
              text: 'Měříme začátek vyplňování, chyby i odeslání formuláře, takže uvidíte, na kterém poli lidé odcházejí.',
            },
            {
              tag: 'crm',
              title: 'Zdroj a ID kliknutí v CRM',
              text: 'Formulář automaticky vyplní v CRM zdroj, kampaň, ID kliknutí a ID leadu. Pole nastavíme sami, nebo je připravíme pro CRM admina.',
            },
            {
              tag: 'mapa-fazi-leadu.pdf',
              title: 'Mapa fází leadu',
              text: 'S obchodem dohodneme fáze, pravidla jejich změny a hodnoty a obchodníky krátce zaškolíme.',
            },
            {
              tag: 'data manager · capi',
              title: 'Konverze zpět do reklam',
              text: 'Kvalifikované leady a zakázky s hodnotou pošleme do Google Ads přes Data Manager a do Mety a LinkedInu přes Conversions API.',
            },
            {
              tag: 'call tracking',
              title: 'Měření telefonátů',
              text: 'Telefonáty měříme podle toho, kolik poptávek tvoří – od kliku na číslo po dynamická čísla, která hovor zapíšou do CRM.',
            },
            {
              tag: 'dashboard',
              title: 'Dashboard pipeline',
              text: 'Náklady, leady a fáze z CRM spojíme v BigQuery a dashboard ukáže cenu leadu, kvalifikovaného leadu i zakázky po kanálech.',
            },
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      eyebrow: 'jak to funguje',
      title: 'Od kliknutí na reklamu po zakázku a zpět',
      lead: 'Web, CRM a reklamní systémy tvoří jeden okruh. CRM vrací výsledek obchodu tam, kde lead vznikl.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Klik na reklamu přinese na web ID kliknutí. Formulář pošle lead do GA4 a reklamních systémů a se zdrojem do CRM. Obchod v CRM mění fáze, jednou denně je vracíme do Google Ads, Mety a LinkedInu a BigQuery spojí náklady, leady a zakázky do dashboardu.',
          columns: [
            { label: 'reklama', items: ['Google Ads', 'Meta', 'LinkedIn', 'Sklik'], note: 'klik nese ID kliknutí' },
            { label: 'web a formulář', items: ['uloží ID kliknutí a UTM', 'pošle lead do GA4 a reklam'] },
            { label: 'CRM', items: ['zdroj, ID kliknutí a ID leadu', 'kvalifikace → nabídka → zakázka'] },
            {
              label: 'návrat do reklam',
              items: ['Google Ads přes Data Manager', 'Meta a LinkedIn přes Conversions API'],
              note: 'jednou denně',
            },
            { label: 'BigQuery a dashboard', items: ['cena leadu a zakázky po kanálech'] },
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Na konkrétním CRM záleží méně, než se zdá – rozhoduje, jestli do něj dostaneme zdroj leadu a jestli z něj jde pravidelně exportovat fáze.',
          ],
        },
        {
          type: 'tags',
          items: [
            { label: 'HubSpot' },
            { label: 'Salesforce' },
            { label: 'Pipedrive' },
            { label: 'Raynet' },
            { label: 'Microsoft Dynamics 365' },
            { label: 'vlastní CRM nebo ERP' },
          ],
        },
      ],
    },

    {
      id: 'faze-leadu',
      eyebrow: 'fáze leadu',
      title: 'Fáze leadu: co kam posíláme',
      lead: 'Rané fáze slouží reklamním systémům k rychlému učení, pozdní k ověření, že reklama vydělává.',
      tone: 'white',
      blocks: [
        {
          type: 'flow',
          caption:
            'Časová osa fází leadu: odeslaný formulář nebo hovor odejde hned z webu, kvalifikovaný lead, nabídku i zakázku posíláme z CRM jednou denně. Diskvalifikované leady a prohrané zakázky do reklam neposíláme.',
          columns: [
            {
              label: 'lead',
              items: ['GA4', 'Google Ads – sekundární konverze', 'Meta a LinkedIn'],
              note: 'hned z webu, s odhadem hodnoty',
            },
            {
              label: 'kvalifikovaný lead',
              items: ['GA4', 'Google Ads – hlavní konverze při dlouhém cyklu', 'Meta přes Conversions API'],
              note: 'z CRM jednou denně',
            },
            {
              label: 'nabídka',
              items: ['GA4', 'Google Ads – sekundární konverze', 'Meta volitelně'],
              note: 'z CRM s hodnotou nabídky',
            },
            {
              label: 'zakázka',
              items: ['GA4', 'Google Ads – hlavní konverze při krátkém cyklu', 'Meta a LinkedIn přes Conversions API'],
              note: 'skutečná hodnota bez DPH',
            },
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Google Ads přiřadí offline konverzi jen do devadesáti dní od kliknutí. U delších obchodů proto optimalizujeme na kvalifikovaný lead a zakázky sledujeme v reportu.',
          ],
        },
        {
          type: 'list',
          style: 'check',
          title: 'Osobní údaje: co posíláme a co nikdy',
          items: [
            '<strong>Kontakty jen jako hash.</strong> E-mail a telefon po normalizaci zahashujeme a pošleme jen do Google Ads, Mety a LinkedInu.',
            '<strong>Jen se souhlasem.</strong> Bez souhlasu <code>ad_user_data</code> v <a href="/sluzby/cookie-lista-consent-mode">Consent Mode v2</a> hash neodejde.',
            '<strong>Do GA4 nic čitelného.</strong> E-mail, jméno ani telefon v GA4 nebudou, obsah zprávy a citlivé údaje neposíláme nikam.',
          ],
        },
      ],
    },

    {
      id: 'srovnani',
      eyebrow: 'srovnání',
      title: 'Běžné měření leadů vs. měření až do CRM',
      lead: 'Většina agentur měří odeslaný formulář. My měříme i to, co se s poptávkou stalo potom.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          head: ['Oblast', 'Běžné měření leadů', 'Měření až do CRM'],
          highlightColumn: 2,
          rows: [
            ['Co je konverze', 'odeslaný formulář', 'lead, kvalifikovaný lead i zakázka'],
            ['Na co se učí reklama', 'na počet formulářů', 'na leady, ze kterých jsou zakázky'],
            ['Zdroj leadu v CRM', 'chybí, nebo ho dopisuje obchodník', 'automaticky kampaň, klíčové slovo, ID kliknutí'],
            ['Telefonáty', 'nikdo je neměří', 'podle zvolené úrovně call trackingu'],
            ['Report', 'cena za lead', 'cena leadu, kvalifikovaného leadu i zakázky'],
          ],
        },
        {
          type: 'figures',
          items: [
            { value: '286 Kč → 48 000 Kč', label: 'Meta: nejlevnější lead, ale nejdražší zakázka' },
            { value: '947 Kč → 9 000 Kč', label: 'LinkedIn: nejdražší lead, ale nejlevnější zakázka' },
          ],
          note: 'Cena leadu → cena zakázky v ukázkovém příkladu s fiktivními daty za jedno čtvrtletí. Bez propojení s CRM byste rozpočet přesouvali opačným směrem.',
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak postupujeme',
      lead: 'Stejných pět kroků jako u všech našich služeb. Mapu fází leadu, hodnoty a pravidla navrhneme s obchodem na krátkém workshopu.',
      tone: 'white',
      blocks: [
        {
          type: 'process',
          implementation:
            'Upravíme formuláře a pole v CRM, napojíme Google Ads přes Data Manager a Metu s LinkedInem přes Conversions API, podle potřeby i call tracking.',
          implementationFromClient: 'CRM admin, případně vývojář webu, a admin přístup do reklamních účtů',
        },
      ],
    },

    {
      id: 'jak-poznate',
      eyebrow: 'kontrola',
      title: 'Jak poznáte, že měření leadů funguje',
      lead: 'Okruh ověříme na testovacích leadech. Zakázky uvidí reklamní systémy, až obchod uzavře první obchody z nového měření.',
      tone: 'dark',
      layout: 'split',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            'každý nový lead má v CRM zdroj, kampaň a ID kliknutí',
            'testovací lead projde celým okruhem: web, GA4, CRM i reklamy',
            'Google Ads spáruje první offline konverze s kliknutím',
            'dashboard ukáže cenu leadu, kvalifikovaného leadu i zakázky po kanálech',
          ],
        },
      ],
    },
  ],

  techDetails: {
    summary: 'Technické detaily: mapa fází, identifikátory a call tracking',
    blocks: [
      {
        type: 'table',
        caption: 'Ukázka mapy fází leadu',
        head: ['Fáze v CRM', 'Událost GA4', 'Reklamní systémy'],
        rows: [
          ['Odeslaný formulář nebo hovor', '<code>generate_lead</code>', 'Google Ads sekundárně, Meta i LinkedIn jako <code>Lead</code>'],
          ['Kontaktovaný', '<code>working_lead</code>', 'jen GA4'],
          ['Kvalifikovaný, SQL', '<code>qualify_lead</code>', 'Google Ads primárně při dlouhém cyklu, Meta vlastní <code>QualifiedLead</code>'],
          ['Diskvalifikovaný', '<code>disqualify_lead</code>', 'jen GA4 a BigQuery, ne jako konverze'],
          ['Odeslaná nabídka', 'vlastní <code>proposal_sent</code>', 'Google Ads sekundárně, Meta volitelně'],
          ['Vyhraná zakázka', '<code>close_convert_lead</code>', 'Google Ads primárně při krátkém cyklu, Meta <code>Purchase</code> nebo vlastní <code>Won</code>'],
          ['Prohraná zakázka', '<code>close_unconvert_lead</code>', 'jen GA4 a BigQuery'],
        ],
      },
      {
        type: 'paragraphs',
        items: [
          'Web ukládá ID kliknutí <code>gclid</code>, u iOS <code>gbraid</code> nebo <code>wbraid</code>, dále <code>fbclid</code> a <code>li_fat_id</code> spolu s UTM, a to jen se souhlasem. E-mail a telefon před hashováním SHA-256 převedeme na malá písmena bez mezer a telefon do formátu +420. Raným fázím přiřazujeme očekávanou hodnotu – průměrnou zakázku × pravděpodobnost uzavření – a kontakty z jedné firmy párujeme na obchodní případ, aby report nezapočítal jednu zakázku třikrát.',
          'Conversions API pro CRM u formulářů Lead Ads vyžaduje podle Mety alespoň 200 leadů měsíčně a denní nahrávání dat. Starší Offline Conversions API od verze Graph API v17.0 offline události nepřijímá, posíláme je proto přes Conversions API.',
          'Telefonáty měříme na čtyřech úrovních: klik na číslo, volání z reklam Google Ads přes přesměrovací číslo, dynamická čísla od poskytovatele call trackingu a hovor jako lead v CRM. U dvou vyšších úrovní je potřeba volající informovat, pokud hovory nahráváte, a vybrat poskytovatele, který data zpracovává v EU.',
        ],
      },
    ],
  },

  faq: [
    {
      q: 'Jak dostanete zakázky z CRM zpět do Google Ads?',
      a: 'U každého leadu uloží formulář do CRM ID kliknutí a hash e-mailu nebo telefonu. Fáze s hodnotou pak jednou denně posíláme přes Google Ads Data Manager – z HubSpotu a Salesforce přímo, z ostatních CRM přes BigQuery nebo tabulku. Kombinaci ID kliknutí a hashe Google říká rozšířené konverze pro potenciální zákazníky a pro nové implementace ji doporučuje, protože konverzi spáruje, i když ID kliknutí cestou zmizí. Od 15. června 2026 Google směruje nahrávání offline konverzí do Data Manager API, starší skripty proto převedeme.',
    },
    {
      q: 'Kolik to stojí a z čeho se cena skládá?',
      a: 'Cenu určuje počet formulářů a vstupních kanálů, třeba webu, telefonu nebo Lead Ads, dále CRM a jeho možnosti exportu, počet reklamních systémů, úroveň call trackingu a dashboard. Po úvodní konzultaci a krátkém auditu dostanete nabídku s pevným rozsahem, výstupy a termínem. Poplatky za call tracking nebo licence CRM platíte přímo poskytovatelům.',
    },
    {
      q: 'Jak dlouho to trvá a kdy uvidíme výsledky?',
      a: 'Termín dostanete spolu s nabídkou po krátkém auditu. Měření formulářů a zdroje v CRM funguje hned po implementaci, offline konverze uvidíte v reklamách, až obchodníci uzavřou první zakázky z nových leadů – podle délky cyklu za týdny až měsíce. Plný efekt počítejte po jednom až dvou obchodních cyklech.',
    },
    {
      q: 'Komu patří data, účty a nastavení?',
      a: 'Vám. Pracujeme přímo ve vašich účtech GA4, GTM, reklamních systémů i CRM a přístupy po skončení projektu odeberete. Pole a automatizace v CRM nastavíme sami, nebo je připravíme pro CRM admina, a mapu fází s dokumentací předáme.',
    },
    {
      q: 'Je posílání dat z CRM do Googlu a Mety v souladu s GDPR?',
      a: 'Technicky to nastavujeme konzervativně: kontaktní údaje jen jako hash, jen se souhlasem <code>ad_user_data</code>, žádné osobní údaje v GA4 a jen nezbytná pole. Vy jste správce údajů z CRM, Google u rozšířených konverzí vystupuje jako zpracovatel podle Google Ads Data Processing Terms a my jako zpracovatel podle zpracovatelské smlouvy. Právní titul pro předání údajů posoudí váš právník – nejsme advokátní kancelář, ale dodáme mu přesný popis datových toků.',
    },
    {
      q: 'Co od nás budete potřebovat?',
      a: 'Přístupy do GTM, GA4 a reklamních účtů a administrátora CRM, případně vývojáře webu pro úpravu formulářů. Hlavně ale krátký workshop s obchodem: bez dohody, co znamená „kvalifikovaný lead“ a kdy obchodník mění fázi, žádné měření fungovat nebude. Po spuštění je důležité, aby obchodníci fáze v CRM opravdu vyplňovali.',
    },
  ],

  relatedArticles: [
    { slug: 'mereni-formularu-a-leadu', title: 'Měření formulářů a leadů' },
    { slug: 'offline-konverze-z-crm', title: 'Offline konverze z CRM do Google Ads a Mety' },
    { slug: 'mereni-telefonatu', title: 'Měření telefonátů a call tracking' },
  ],

  relatedPages: ['sluzby/mereni-konverzi', 'sluzby/bigquery', 'sluzby/dashboardy-a-reporting'],

  contact: {
    formId: 'lp-b2b',
    topics: ['konverze'],
    title: 'Pojďme zjistit, kolik vás stojí zakázka, ne lead',
    lead: 'Na třicetiminutové konzultaci zdarma projdeme formuláře, CRM a kampaně a řekneme, co propojit jako první.',
    placeholder: 'Např. máme HubSpot a obchod říká, že polovina leadů z Google Ads je nekvalitních…',
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
