import type { PageInput } from '../../schema';

// Štíhlá šablona LP podle vyhodnocení webu (9. října 2026, kap. 3.1 a 5.13).
// Zdroj obsahu: seo-analyza/03_landing-pages/13_reseni-b2b-lead-generation.md.
// Mapa fází poptávky je na stránce jako časová osa, celá tabulka fází, identifikátory
// kliknutí, požadavky Mety a čtyři úrovně měření telefonátů zůstávají ve sbalených
// Technických detailech, dokud nevyjdou články E3 a E5. Reporting zastupuje
// ukázka „cena poptávky a cena zakázky“ s fiktivními daty, tabulku CRM řádek čipů.
// Dokud klient nedodá podklady, stránka neobsahuje počet projektů, výčet CRM,
// se kterými má tým praktickou zkušenost, případovou studii, délky kroků
// a partnerského poskytovatele call trackingu.
// Texty prošly jazykovým auditem z 9. října 2026 (seo-analyza/2026-10-09_jazykovy-audit,
// kap. 3.16): „lead“ hero zavádí jako poptávku, dál stránka píše „poptávka“; „lead“
// zůstává jen v názvu služby (H1, SEO, tlačítko, menu), v názvech událostí a produktů.

export const page: PageInput = {
  path: 'reseni/b2b-a-lead-generation',
  kind: 'solution',
  navTitle: 'B2B a lead generation',
  tagline: 'od formuláře po zakázku v CRM',
  pictogram: 'lead',

  seo: {
    title: 'Měření leadů a offline konverze z CRM | datalayer.cz',
    description:
      'Měříme leady od formuláře po zakázku v CRM a vracíme je do Google Ads a Mety: offline konverze, měření telefonátů, cena leadu i zakázky. Konzultace zdarma.',
  },

  hero: {
    eyebrow: 'řešení pro B2B a lead generation',
    h1: 'Měření leadů od formuláře až po zakázku v CRM',
    subtitle:
      'Lead je poptávka potenciálního zákazníka – z formuláře na webu nebo z telefonu. Měření leadů propojí web, kde poptávka vznikne, CRM, kde obchod zjistí její kvalitu a hodnotu, a reklamní systémy, které podle výsledku optimalizují kampaně. Formulář uloží do CRM zdroj a ID kliknutí a fáze obchodu putují zpět do Google Ads, Mety a LinkedInu jako offline konverze. Reklama se pak neučí z počtu formulářů, ale z poptávek, které obchod opravdu uzavřel.',
    primaryCta: { label: 'Probrat měření leadů', href: '#kontakt' },
    secondaryCta: { label: 'Ukázat, jak to funguje', href: '#jak-to-funguje' },
    microcopy: 'Úvodní konzultace zdarma a nezávazně',
  },

  trust: ['Zakázky z CRM zpět v reklamních systémech', 'Cena poptávky i zakázky podle kanálů', 'Osobní údaje jen jako hash a se souhlasem'],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Poznáváte se?',
      lead: 'Měření až do CRM má smysl, když reklama přivádí poptávky, ale nikdo neví, které z nich končí zakázkou.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'Hodně poptávek, málo zakázek',
              text: 'Kampaně hlásí rekordní počet poptávek a obchod tvrdí, že polovinu tvoří studenti, konkurence a spam.',
              pictogram: 'lead',
              tag: 'poptávky',
            },
            {
              title: 'Google Ads se řídí počtem formulářů',
              text: 'Chytré nabídky se učí, že dobrá poptávka je jakákoli poptávka, a přivádějí jich víc – levnějších, ale horších.',
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
      lead: 'Uzavřený okruh od kliknutí po zakázku a zpět stojí na šesti částech – od měření formulářů přes CRM po dashboard.',
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
              text: 'Formulář automaticky vyplní v CRM zdroj, kampaň, ID kliknutí a ID poptávky. Pole nastavíme sami, nebo je připravíme pro správce CRM.',
            },
            {
              tag: 'mapa-fazi-poptavky.pdf',
              title: 'Mapa fází poptávky',
              text: 'S obchodem dohodneme fáze, jejich hodnoty a pravidla pro změnu fáze; obchodníky krátce zaškolíme.',
            },
            {
              tag: 'offline konverze',
              title: 'Konverze zpět do reklamních systémů',
              text: 'Kvalifikované poptávky a zakázky s hodnotou pošleme do Google Ads přes Data Manager a do Mety a LinkedInu přes Conversions API.',
            },
            {
              tag: 'call tracking',
              title: 'Měření telefonátů',
              text: 'Úroveň měření zvolíme podle toho, kolik poptávek přichází telefonem – od kliknutí na číslo po dynamická čísla, která hovor zapíšou do CRM.',
            },
            {
              tag: 'dashboard',
              title: 'Dashboard od poptávky po zakázku',
              text: 'Náklady, poptávky a fáze z CRM spojíme v BigQuery a dashboard ukáže cenu poptávky, kvalifikované poptávky i zakázky podle kanálů.',
            },
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      eyebrow: 'jak to funguje',
      title: 'Od kliknutí na reklamu po zakázku a zpět',
      lead: 'Web, CRM a reklamní systémy tvoří jeden uzavřený okruh. CRM vrací výsledek obchodu tam, kde poptávka vznikla.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Po kliknutí na reklamu přijde návštěvník na web s ID kliknutí. Formulář pošle poptávku do GA4 a reklamních systémů a spolu se zdrojem do CRM. Obchod v CRM mění fáze a my je jednou denně vracíme do Google Ads, Mety a LinkedInu. BigQuery pak spojí náklady, poptávky a zakázky do dashboardu.',
          columns: [
            { label: 'reklama', items: ['Google Ads', 'Meta', 'LinkedIn', 'Sklik'], note: 'každé kliknutí má své ID' },
            { label: 'web a formulář', items: ['uloží ID kliknutí a UTM', 'pošle poptávku do GA4 a reklamních systémů'] },
            { label: 'CRM', items: ['zdroj, ID kliknutí a ID poptávky', 'fáze: kvalifikace, nabídka, zakázka'] },
            {
              label: 'návrat do reklamních systémů',
              items: ['Google Ads přes Data Manager', 'Meta a LinkedIn přes Conversions API'],
              note: 'jednou denně',
            },
            { label: 'BigQuery a dashboard', items: ['cena poptávky a zakázky podle kanálů'] },
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Na konkrétním CRM záleží méně, než se zdá – rozhoduje, jestli do něj dostaneme zdroj poptávky a jestli z něj jde pravidelně exportovat fáze.',
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
      eyebrow: 'fáze poptávky',
      title: 'Co kam posíláme v jednotlivých fázích poptávky',
      lead: 'Rané fáze slouží reklamním systémům k rychlému učení, pozdní k ověření, že reklama vydělává.',
      tone: 'white',
      blocks: [
        {
          type: 'flow',
          caption:
            'Časová osa fází poptávky: odeslaný formulář nebo hovor odejde hned z webu; kvalifikovanou poptávku, nabídku i zakázku posíláme z CRM jednou denně. Diskvalifikované poptávky a prohrané zakázky do reklamních systémů neposíláme.',
          columns: [
            {
              label: 'poptávka',
              items: ['GA4', 'Google Ads – sekundární konverze', 'Meta a LinkedIn'],
              note: 'hned z webu, s odhadem hodnoty',
            },
            {
              label: 'kvalifikovaná poptávka',
              items: ['GA4', 'Google Ads – primární konverze při dlouhém cyklu', 'Meta přes Conversions API'],
              note: 'z CRM jednou denně',
            },
            {
              label: 'nabídka',
              items: ['GA4', 'Google Ads – sekundární konverze', 'Meta volitelně'],
              note: 'z CRM s hodnotou nabídky',
            },
            {
              label: 'zakázka',
              items: ['GA4', 'Google Ads – primární konverze při krátkém cyklu', 'Meta a LinkedIn přes Conversions API'],
              note: 'skutečná hodnota bez DPH',
            },
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Google Ads přiřadí offline konverzi jen do devadesáti dní od kliknutí. U delších obchodů proto jako primární konverzi nastavíme kvalifikovanou poptávku a zakázky sledujeme v reportu.',
          ],
        },
        {
          type: 'list',
          style: 'check',
          title: 'Jaké osobní údaje posíláme a jaké nikdy',
          items: [
            '<strong>Kontakty jen jako hash.</strong> E-mail a telefon po normalizaci zahashujeme a pošleme jen do Google Ads, Mety a LinkedInu.',
            '<strong>Jen se souhlasem.</strong> Bez souhlasu <code>ad_user_data</code> v <a href="/sluzby/cookie-lista-consent-mode">Consent Mode v2</a> hash neodejde.',
            '<strong>Do GA4 nic čitelného.</strong> E-mail, jméno ani telefon v GA4 nebudou; obsah zprávy a citlivé údaje neposíláme nikam.',
          ],
        },
      ],
    },

    {
      id: 'srovnani',
      eyebrow: 'srovnání',
      title: 'Běžné měření poptávek vs. měření až do CRM',
      lead: 'Většina agentur měří odeslaný formulář. My měříme i to, co se s poptávkou stalo potom.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          head: ['Oblast', 'Běžné měření poptávek', 'Měření až do CRM'],
          highlightColumn: 2,
          rows: [
            ['Co je konverze', 'odeslaný formulář', 'poptávka, kvalifikovaná poptávka i zakázka'],
            ['Na co se učí reklama', 'na počet formulářů', 'na poptávky, ze kterých jsou zakázky'],
            ['Zdroj poptávky v CRM', 'chybí, nebo ho dopisuje obchodník', 'automaticky kampaň, klíčové slovo, ID kliknutí'],
            ['Telefonáty', 'v měření obvykle chybí', 'podle zvolené úrovně měření telefonátů'],
            ['Report', 'cena poptávky', 'cena poptávky, kvalifikované poptávky i zakázky'],
          ],
        },
        {
          type: 'figures',
          items: [
            { value: '286 Kč a 48 000 Kč', label: 'Meta: nejlevnější poptávka, ale nejdražší zakázka' },
            { value: '947 Kč a 9 000 Kč', label: 'LinkedIn: nejdražší poptávka, ale nejlevnější zakázka' },
          ],
          note: 'Cena poptávky a cena zakázky v příkladu s fiktivními daty za jedno čtvrtletí. Bez propojení s CRM byste rozpočet přesouvali opačným směrem.',
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak postupujeme',
      lead: 'Stejných pět kroků jako u všech našich služeb. Mapu fází poptávky, jejich hodnoty a pravidla navrhneme s obchodem na krátkém workshopu.',
      tone: 'white',
      blocks: [
        {
          type: 'process',
          implementation:
            'Upravíme formuláře a pole v CRM, napojíme Google Ads přes Data Manager a Metu s LinkedInem přes Conversions API, podle potřeby i měření telefonátů.',
          implementationFromClient: 'správce CRM, případně vývojář webu, a přístup správce do reklamních účtů',
          stepOverrides: [
            { text: 'Projdeme GA4, Google Tag Manager (GTM), souhlas a reklamní systémy a porovnáme je s CRM.' },
            {},
            {},
            {
              text: 'Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s CRM.',
              fromClient: 'testovací poptávka a export z CRM',
            },
          ],
        },
      ],
    },

    {
      id: 'jak-poznate',
      eyebrow: 'kontrola',
      title: 'Jak poznáte, že měření leadů funguje',
      lead: 'Celý okruh ověříme na testovacích poptávkách. Reklamní systémy uvidí první zakázky z nového měření, až je obchodníci uzavřou.',
      tone: 'dark',
      layout: 'split',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            'Každá nová poptávka má v CRM zdroj, kampaň a ID kliknutí.',
            'Testovací poptávka projde celým okruhem: web, GA4, CRM i reklamní systémy.',
            'Google Ads spáruje první offline konverze s kliknutím.',
            'Dashboard ukáže cenu poptávky, kvalifikované poptávky i zakázky podle kanálů.',
          ],
        },
      ],
    },
  ],

  techDetails: {
    summary: 'Mapa fází, identifikátory kliknutí a měření telefonátů',
    blocks: [
      {
        type: 'table',
        caption: 'Ukázka mapy fází poptávky',
        head: ['Fáze v CRM', 'Událost GA4', 'Reklamní systémy'],
        rows: [
          ['Odeslaný formulář nebo hovor', '<code>generate_lead</code>', 'Google Ads sekundárně, Meta i LinkedIn jako <code>Lead</code>'],
          ['Kontaktovaná', '<code>working_lead</code>', 'jen GA4'],
          ['Kvalifikovaná (SQL – sales qualified lead)', '<code>qualify_lead</code>', 'Google Ads primárně při dlouhém cyklu, Meta vlastní <code>QualifiedLead</code>'],
          ['Diskvalifikovaná', '<code>disqualify_lead</code>', 'jen GA4 a BigQuery, ne jako konverze'],
          ['Odeslaná nabídka', 'vlastní <code>proposal_sent</code>', 'Google Ads sekundárně, Meta volitelně'],
          ['Vyhraná zakázka', '<code>close_convert_lead</code>', 'Google Ads primárně při krátkém cyklu, Meta <code>Purchase</code> nebo vlastní <code>Won</code>'],
          ['Prohraná zakázka', '<code>close_unconvert_lead</code>', 'jen GA4 a BigQuery'],
        ],
      },
      {
        type: 'paragraphs',
        items: [
          'Web ukládá ID kliknutí <code>gclid</code>, u iOS <code>gbraid</code> nebo <code>wbraid</code>, dále <code>fbclid</code> a <code>li_fat_id</code> spolu s UTM, a to jen se souhlasem. E-mail před hashováním SHA-256 převedeme na malá písmena bez mezer, telefon do mezinárodního formátu s předvolbou, třeba +420. Raným fázím přiřazujeme očekávanou hodnotu – průměrnou zakázku × pravděpodobnost uzavření – a kontakty z jedné firmy spojujeme do jednoho obchodního případu, aby report nezapočítal jednu zakázku třikrát.',
          'U formulářů Lead Ads vyžaduje Conversions API pro CRM podle Mety alespoň 200 leadů měsíčně a denní nahrávání dat. Starší Offline Conversions API od verze Graph API v17.0 offline události nepřijímá, posíláme je proto přes Conversions API.',
          'Telefonáty měříme na čtyřech úrovních: kliknutí na číslo, volání z reklam Google Ads přes přesměrovací číslo, dynamická čísla od poskytovatele call trackingu a hovor jako poptávka v CRM. U dvou vyšších úrovní je potřeba volající informovat, pokud hovory nahráváte, a vybrat poskytovatele, který data zpracovává v EU.',
        ],
      },
    ],
  },

  faq: [
    {
      q: 'Jak dostaneme zakázky z CRM zpět do Google Ads?',
      a: 'U každé poptávky formulář do CRM uloží ID kliknutí a hash e-mailu nebo telefonu. Fáze s hodnotou pak jednou denně posíláme přes Google Ads Data Manager – z HubSpotu a Salesforce přímo, z ostatních CRM přes BigQuery nebo tabulku. Kombinaci ID kliknutí a hashe Google nazývá „rozšířené konverze pro potenciální zákazníky“ a pro nové implementace ji doporučuje, protože konverzi spáruje, i když ID kliknutí cestou zmizí. Od 15. června 2026 Google směruje nahrávání offline konverzí do Data Manager API, starší skripty proto převedeme.',
    },
    {
      q: 'Kolik to stojí a z čeho se cena skládá?',
      a: 'Cenu určuje počet formulářů a vstupních kanálů, třeba webu, telefonu nebo Lead Ads, dále CRM a jeho možnosti exportu, počet reklamních systémů, úroveň měření telefonátů a dashboard. Po úvodní konzultaci a krátkém auditu dostanete nabídku s pevným rozsahem, výstupy a termínem. Poplatky za call tracking nebo licence CRM platíte přímo poskytovatelům.',
    },
    {
      q: 'Jak dlouho to trvá a kdy uvidíme výsledky?',
      a: 'Termín dostanete spolu s nabídkou po krátkém auditu. Měření formulářů a zdroje v CRM funguje hned po implementaci, offline konverze uvidíte v reklamních systémech, až obchodníci uzavřou první zakázky z nových poptávek – podle délky cyklu za týdny až měsíce. S plným efektem počítejte po jednom až dvou obchodních cyklech.',
    },
    {
      q: 'Komu patří data, účty a nastavení?',
      a: 'Vám. Pracujeme přímo ve vašich účtech v GA4, GTM, reklamních systémech i CRM a přístupy po skončení projektu odeberete. Pole a automatizace v CRM nastavíme sami, nebo je připravíme pro správce CRM, a mapu fází s dokumentací předáme.',
    },
    {
      q: 'Je posílání dat z CRM do Googlu a Mety v souladu s GDPR?',
      a: 'Technicky to nastavujeme konzervativně: kontaktní údaje jen jako hash, jen se souhlasem <code>ad_user_data</code>, žádné osobní údaje v GA4 a jen nezbytná pole. Vy jste správce osobních údajů z CRM, Google u rozšířených konverzí vystupuje jako zpracovatel podle smluvních podmínek Google Ads Data Processing Terms a my jako zpracovatel podle zpracovatelské smlouvy. Právní titul pro předání údajů posoudí váš právník – nejsme advokátní kancelář, ale dodáme mu přesný popis datových toků.',
    },
    {
      q: 'Co od nás budete potřebovat?',
      a: 'Přístupy do GTM, GA4 a reklamních účtů, součinnost správce CRM a případně vývojáře webu pro úpravu formulářů. Hlavně ale krátký workshop s obchodem: bez dohody, co znamená „kvalifikovaná poptávka“ a kdy obchodník mění fázi, žádné měření fungovat nebude. Po spuštění je důležité, aby obchodníci fáze v CRM opravdu vyplňovali.',
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
    title: 'Zjistíme, kolik vás doopravdy stojí jedna zakázka',
    lead: 'Na úvodní konzultaci projdeme formuláře, CRM a kampaně a řekneme, co propojit jako první.',
    placeholder: 'Např. máme HubSpot a obchod říká, že polovina poptávek z Google Ads je nekvalitní…',
    leadType: 'consultation',
  },

  schema: {
    name: 'Měření leadů a offline konverze pro B2B',
    serviceType:
      'Měření formulářů, napojení CRM, offline a rozšířené konverze pro potenciální zákazníky, měření telefonátů, reporting od poptávky po zakázku',
    description:
      'Měření leadů od formuláře po zakázku v CRM a jejich návrat do Google Ads, Mety a LinkedInu: offline konverze, rozšířené konverze pro potenciální zákazníky, měření telefonátů a reporting ceny poptávky, ceny zakázky a poměru poptávek k zakázkám.',
    audience: 'B2B firmy a firmy, které získávají zákazníky přes poptávky',
  },
};
