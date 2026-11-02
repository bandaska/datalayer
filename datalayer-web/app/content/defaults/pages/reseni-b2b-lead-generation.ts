import type { PageInput } from '../../schema';

// Stránka odpovídá auditu z 2. listopadu 2026 (seo-analyza/2026-11-02_seo-ux-texty).
// Kapitola k B2B v podkladu chybí, platí jen společná pravidla G01–G07 a závěr
// z kap. 1 (stránka je rozcestník podle typu firmy). Zůstaly: hero s jedním tlačítkem,
// „Co uděláme a co dostanete“ se šesti kartami (pravidlo devadesáti dní je v kartě
// offline konverzí) a čtyři otázky. Sekce se situacemi má konkrétní nadpis a kotvu
// #kdy. Úvod jen vysvětlí nabídku, definice poptávky a okruh web – CRM – reklamní
// systémy jsou v sekci #jak-to-funguje (G06), podrobnosti o rozšířených konverzích
// a Data Manager API z FAQ v technické poznámce pod ní (G04). „Lead“ zůstal jen jako
// odborný název v definici a v SEO popisu, jinak „poptávka“; cesta stránky se nemění.
// Přibyly související služby před kontaktem.

export const page: PageInput = {
  path: 'reseni/b2b-a-lead-generation',
  kind: 'solution',
  navTitle: 'Pro B2B firmy',
  tagline: 'od formuláře po zakázku v CRM',
  pictogram: 'lead',

  seo: {
    title: 'Měření poptávek a offline konverze z CRM | datalayer.cz',
    description:
      'Měření poptávek a leadů od formuláře po zakázku v CRM a jejich návrat do Google Ads, Mety a LinkedInu: offline konverze, měření telefonátů a cena zakázky.',
  },

  hero: {
    h1: 'Měření poptávek od formuláře až po zakázku v CRM',
    subtitle:
      'Propojíme web, reklamní systémy a CRM, tedy systém, ve kterém obchod eviduje poptávky a zákazníky. Nastavíme měření formulářů a telefonátů, ukládání zdroje poptávky do CRM a předání výsledků obchodu zpět do Google Ads, Mety a LinkedInu. Kampaně pak jde vyhodnotit podle kvalifikovaných poptávek a zakázek, nejen podle počtu formulářů.',
    primaryCta: { label: 'Probrat měření poptávek', href: '#kontakt' },
  },

  sections: [
    {
      id: 'kdy',
      title: 'Kdy propojit měření poptávek s CRM',
      lead: 'Měření až do CRM má smysl, když reklama přivádí poptávky, ale není jasné, které z nich končí zakázkou.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          variant: 'symptoms',
          items: [
            {
              title: 'Hodně poptávek, málo zakázek',
              text: 'Kampaně hlásí hodně poptávek a obchod upozorňuje, že velkou část z nich tvoří studenti, konkurence nebo spam.',
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
              text: 'Obchod uzavře zakázku po třech měsících a bez napojení CRM se o ní reklamní systém nedozví.',
              pictogram: 'monitor',
            },
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      title: 'Jak měření poptávek funguje',
      lead: 'Poptávka, v reklamních systémech lead, je zájem potenciálního zákazníka z formuláře na webu nebo z telefonu. Měření ji sleduje ve třech místech.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Web',
              text: 'Tady poptávka vznikne. Formulář uloží do CRM zdroj, kampaň a ID kliknutí.',
            },
            {
              title: 'CRM',
              text: 'Obchod tu zjistí kvalitu a hodnotu poptávky a podle dohodnutých pravidel mění její fáze.',
            },
            {
              title: 'Reklamní systémy',
              text: 'Fáze obchodu pošleme zpět do Google Ads, Mety a LinkedInu jako offline konverze. Kampaně se pak učí z poptávek, které obchod uzavřel, ne z počtu formulářů.',
            },
          ],
        },
        {
          type: 'details',
          summary: 'Technická poznámka: rozšířené konverze a Data Manager API',
          items: [
            'Kombinaci ID kliknutí a hashe e-mailu nebo telefonu Google nazývá „rozšířené konverze pro potenciální zákazníky“ a pro nové implementace ji doporučuje, protože konverzi spáruje, i když ID kliknutí cestou zmizí.',
            'Od 15. června 2026 Google směruje nahrávání offline konverzí do Data Manager API, starší skripty proto převedeme.',
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      title: 'Co uděláme a co dostanete',
      lead: 'Uzavřený okruh od kliknutí po zakázku a zpět stojí na šesti částech – od měření formulářů přes CRM po report.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Měřicí plán a formuláře',
              text: 'Měříme začátek vyplňování, chyby i odeslání formuláře, takže je vidět, na kterém poli lidé formulář opouštějí.',
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
              title: 'Report od poptávky po zakázku',
              text: 'Náklady, poptávky a fáze z CRM spojíme v BigQuery a report ukáže cenu poptávky, kvalifikované poptávky i zakázky podle kanálů.',
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Jak se zakázky z CRM dostanou zpět do Google Ads?',
      a: 'Zakázky posíláme do Google Ads jako offline konverze. U každé poptávky formulář uloží do CRM ID kliknutí a hash e-mailu nebo telefonu. Fáze s hodnotou pak jednou denně posíláme přes Google Ads Data Manager – z HubSpotu a Salesforce přímo, z ostatních CRM přes BigQuery nebo tabulku.',
    },
    {
      q: 'Co ovlivňuje cenu?',
      a: 'Cenu určuje počet formulářů a vstupních kanálů, třeba webu, telefonu nebo formulářů přímo v reklamách, dále CRM a jeho možnosti exportu, počet reklamních systémů, úroveň měření telefonátů a report. Po úvodní konzultaci a krátkém auditu dostanete nabídku s pevným rozsahem a výstupy. Poplatky za call tracking nebo licence CRM platíte přímo poskytovatelům.',
    },
    {
      q: 'Jaká součinnost je potřeba?',
      a: 'Přístupy do Google Tag Manageru, Google Analytics 4 a reklamních účtů, součinnost správce CRM a případně vývojáře webu pro úpravu formulářů. Důležitý je i krátký workshop s obchodem, na kterém dohodneme, co znamená „kvalifikovaná poptávka“ a kdy obchodník mění fázi. Pracujeme přímo ve vašich účtech, přístupy po skončení projektu odeberete a mapu fází s dokumentací předáme.',
    },
    {
      q: 'Je posílání dat z CRM do Googlu a Mety v souladu s GDPR?',
      a: 'Technické nastavení připravíme konzervativně, právní titul pro předání údajů ale posoudí váš právník. Kontaktní údaje posíláme jen jako hash a jen se souhlasem <code>ad_user_data</code>, do GA4 žádné osobní údaje nejdou a předáváme jen nezbytná pole. Správce osobních údajů z CRM je vaše firma, Google u rozšířených konverzí vystupuje jako zpracovatel podle smluvních podmínek Google Ads Data Processing Terms a my jako zpracovatel podle zpracovatelské smlouvy. Nejsme advokátní kancelář, právníkovi ale dodáme přesný popis datových toků.',
    },
  ],

  related: {
    items: [
      {
        label: 'Měření konverzí',
        href: '/sluzby/mereni-konverzi',
        text: 'Určí, které poptávky jsou konverze a jakou mají hodnotu, a nastaví jejich předání reklamním systémům.',
      },
      {
        label: 'BigQuery a reporting',
        href: '/sluzby/bigquery',
        text: 'Spojí náklady na reklamu s poptávkami a fázemi obchodu z CRM do společného reportu.',
      },
      {
        label: 'Server-side měření',
        href: '/sluzby/server-side-tracking',
        text: 'Předá události ze serveru a CRM, například změny stavu poptávky, reklamním systémům podle nastavených pravidel.',
      },
    ],
  },

  contact: {
    formId: 'lp-b2b',
    title: 'Proberme měření poptávek',
    lead: 'Napište, jaké CRM používáte a odkud poptávky přicházejí. Na úvodní konzultaci upřesníme zadání a navrhneme další postup.',
    placeholder: '',
    leadType: 'consultation',
  },

  schema: {
    name: 'Měření poptávek a offline konverze pro B2B',
    serviceType:
      'Měření formulářů, napojení CRM, offline a rozšířené konverze pro potenciální zákazníky, měření telefonátů, reporting od poptávky po zakázku',
    description:
      'Měření poptávek od formuláře po zakázku v CRM a jejich návrat do Google Ads, Mety a LinkedInu: offline konverze, rozšířené konverze pro potenciální zákazníky, měření telefonátů a reporting ceny poptávky, ceny zakázky a poměru poptávek k zakázkám.',
    audience: 'B2B firmy a firmy, které získávají zákazníky přes poptávky',
  },
};
