import type { PageInput } from '../../schema';

// Stránka prošla UX redukcí z 9. října 2026 (seo-analyza/2026-10-09_ux-redukce,
// kap. 5.2). Zůstaly: hero s jedním tlačítkem, „Poznáváte se?“, „Co uděláme
// a co dostanete“ bez štítků (pravidlo devadesáti dní z mapy fází je v kartě
// offline konverzí) a čtyři otázky. Schéma okruhu, fáze poptávky, srovnání
// s běžným měřením, postup, kontrolní seznam a technické detaily zmizely.
// „Lead“ zůstává jen v názvu služby (H1, SEO, tlačítko, menu), jinak „poptávka“.

export const page: PageInput = {
  path: 'reseni/b2b-a-lead-generation',
  kind: 'solution',
  navTitle: 'B2B a lead generation',
  tagline: 'od formuláře po zakázku v CRM',
  pictogram: 'lead',

  seo: {
    title: 'Měření leadů a offline konverze z CRM | datalayer.cz',
    description:
      'Měříme leady od formuláře po zakázku v CRM a vracíme je do Google Ads, Mety a LinkedInu: offline konverze, měření telefonátů, cena leadu i zakázky.',
  },

  hero: {
    h1: 'Měření leadů od formuláře až po zakázku v CRM',
    subtitle:
      'Lead je poptávka potenciálního zákazníka – z formuláře na webu nebo z telefonu. Měření leadů propojí web, kde poptávka vznikne, CRM, kde obchod zjistí její kvalitu a hodnotu, a reklamní systémy, které podle výsledku optimalizují kampaně. Formulář uloží do CRM zdroj a ID kliknutí a fáze obchodu putují zpět do Google Ads, Mety a LinkedInu jako offline konverze. Reklama se pak neučí z počtu formulářů, ale z poptávek, které obchod opravdu uzavřel.',
    primaryCta: { label: 'Probrat měření leadů', href: '#kontakt' },
  },

  sections: [
    {
      id: 'symptomy',
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
            },
            {
              title: 'Google Ads se řídí počtem formulářů',
              text: 'Chytré nabídky se učí, že dobrá poptávka je jakákoli poptávka, a přivádějí jich víc – levnějších, ale horších.',
              pictogram: 'conversion',
            },
            {
              title: 'V CRM chybí zdroj',
              text: 'Obchodník vidí jméno a telefon, ale ne kampaň, klíčové slovo ani to, že zákazník přišel z LinkedInu.',
              pictogram: 'datalayer',
            },
            {
              title: 'Obchodní cyklus trvá měsíce',
              text: 'Obchod uzavře zakázku po třech měsících a reklamní systém se o ní nikdy nedozví.',
              pictogram: 'monitor',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      title: 'Co uděláme a co dostanete',
      lead: 'Uzavřený okruh od kliknutí po zakázku a zpět stojí na šesti částech – od měření formulářů přes CRM po dashboard.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Měřicí plán a formuláře',
              text: 'Měříme začátek vyplňování, chyby i odeslání formuláře, takže uvidíte, na kterém poli lidé odcházejí.',
            },
            {
              title: 'Zdroj a ID kliknutí v CRM',
              text: 'Formulář automaticky vyplní v CRM zdroj, kampaň, ID kliknutí a ID poptávky. Pole nastavíme sami, nebo je připravíme pro správce CRM.',
            },
            {
              title: 'Mapa fází poptávky',
              text: 'S obchodem dohodneme fáze, jejich hodnoty a pravidla pro změnu fáze; obchodníky krátce zaškolíme.',
            },
            {
              title: 'Konverze zpět do reklamních systémů',
              text: 'Kvalifikované poptávky a zakázky s hodnotou pošleme do Google Ads přes Data Manager a do Mety a LinkedInu přes Conversions API. Google Ads přiřadí offline konverzi jen do devadesáti dní od kliknutí, u delších obchodů proto jako primární konverzi nastavíme kvalifikovanou poptávku.',
            },
            {
              title: 'Měření telefonátů',
              text: 'Úroveň měření zvolíme podle toho, kolik poptávek přichází telefonem – od kliknutí na číslo po dynamická čísla, která hovor zapíšou do CRM.',
            },
            {
              title: 'Dashboard od poptávky po zakázku',
              text: 'Náklady, poptávky a fáze z CRM spojíme v BigQuery a dashboard ukáže cenu poptávky, kvalifikované poptávky i zakázky podle kanálů.',
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Jak dostaneme zakázky z CRM zpět do Google Ads?',
      a: 'U každé poptávky formulář do CRM uloží ID kliknutí a hash e-mailu nebo telefonu. Fáze s hodnotou pak jednou denně posíláme přes Google Ads Data Manager – z HubSpotu a Salesforce přímo, z ostatních CRM přes BigQuery nebo tabulku. Kombinaci ID kliknutí a hashe Google nazývá „rozšířené konverze pro potenciální zákazníky“ a pro nové implementace ji doporučuje, protože konverzi spáruje, i když ID kliknutí cestou zmizí. Od 15. června 2026 Google směruje nahrávání offline konverzí do Data Manager API, starší skripty proto převedeme.',
    },
    {
      q: 'Kolik to stojí a z čeho se cena skládá?',
      a: 'Cenu určuje počet formulářů a vstupních kanálů, třeba webu, telefonu nebo Lead Ads, dále CRM a jeho možnosti exportu, počet reklamních systémů, úroveň měření telefonátů a dashboard. Po úvodní konzultaci a krátkém auditu dostanete nabídku s pevným rozsahem a výstupy. Poplatky za call tracking nebo licence CRM platíte přímo poskytovatelům.',
    },
    {
      q: 'Co od nás budete potřebovat?',
      a: 'Přístupy do GTM, GA4 a reklamních účtů, součinnost správce CRM a případně vývojáře webu pro úpravu formulářů. Hlavně ale krátký workshop s obchodem: bez dohody, co znamená „kvalifikovaná poptávka“ a kdy obchodník mění fázi, žádné měření fungovat nebude. Pracujeme přímo ve vašich účtech, přístupy po skončení projektu odeberete a mapu fází s dokumentací vám předáme.',
    },
    {
      q: 'Je posílání dat z CRM do Googlu a Mety v souladu s GDPR?',
      a: 'Technicky to nastavujeme konzervativně: kontaktní údaje jen jako hash, jen se souhlasem <code>ad_user_data</code>, žádné osobní údaje v GA4 a jen nezbytná pole. Vy jste správce osobních údajů z CRM, Google u rozšířených konverzí vystupuje jako zpracovatel podle smluvních podmínek Google Ads Data Processing Terms a my jako zpracovatel podle zpracovatelské smlouvy. Právní titul pro předání údajů posoudí váš právník – nejsme advokátní kancelář, ale dodáme mu přesný popis datových toků.',
    },
  ],

  contact: {
    formId: 'lp-b2b',
    title: 'Zjistíme, kolik vás doopravdy stojí jedna zakázka',
    lead: 'Na úvodní konzultaci projdeme formuláře, CRM a kampaně a řekneme, co propojit jako první.',
    placeholder: 'Adresa webu a co řešíte, např. „Máme HubSpot a obchod říká, že polovina poptávek z Google Ads je nekvalitní“',
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
