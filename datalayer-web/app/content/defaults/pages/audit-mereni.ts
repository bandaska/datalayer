import type { PageInput } from '../../schema';

// Stránka prošla UX redukcí z 9. října 2026 (seo-analyza/2026-10-09_ux-redukce,
// kap. 3.2 a 5.2): zůstal hero s jedním tlačítkem, „Poznáváte se?“, „Co od nás
// dostanete“ a ukázka reportu s fiktivními nálezy (bez štítků priorit, fiktivní
// data uvádí úvod sekce). Záložky „Co kontrolujeme“, postup, Technické detaily
// a pás Pokračujte zmizely, přístupy shrnuje FAQ. Nabídka rychlé kontroly se
// přesunula do úvodu kontaktního bloku – drží znění zrušené sekce (heslo
// „Rychlá kontrola měření“, tři až pět nálezů e-mailem, nebo v krátkém hovoru).
// Rychlá kontrola nemá vlastní formulář (leadType audit). Dokud klient nedodá
// podklady, stránka neobsahuje případovou studii, počet auditů, délku auditu
// ani ukázkový PDF report.

export const page: PageInput = {
  path: 'sluzby/audit-mereni',
  kind: 'service',
  navTitle: 'Audit měření',
  tagline: 'zjistíme, kde data utíkají',
  pictogram: 'audit',
  menuGroup: 'audity',

  seo: {
    title: 'Audit měření – GA4, GTM, souhlas a konverze | datalayer.cz',
    description:
      'Nevěříte číslům v GA4? Audit měření prověří GA4, GTM, souhlas i konverze v Google Ads a Metě a porovná je s e-shopem. Nálezy s prioritou A, B a C.',
  },

  hero: {
    h1: 'Audit měření GA4, GTM, souhlasu a konverzí',
    subtitle:
      'Audit měření je nezávislá kontrola, jestli analytická a reklamní data odpovídají skutečnosti. Prověříme GA4, Google Tag Manager (GTM), souhlas návštěvníků a konverze v Google Ads, Metě a Skliku a porovnáme je s objednávkami v administraci nebo poptávkami v CRM. Nálezy seřadíme podle dopadu a navrhneme plán oprav.',
    primaryCta: { label: 'Objednat audit měření', href: '#kontakt' },
  },

  sections: [
    {
      id: 'symptomy',
      title: 'Poznáváte se?',
      lead: 'Audit se vyplatí, když čísla přestanou sedět nebo když chystáte velkou změnu.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'Čísla nesedí',
              text: 'GA4, Google Ads, Meta a administrace ukazují čtyři různá čísla a nikdo neumí vysvětlit proč.',
              pictogram: 'warn',
            },
            {
              title: 'Po nové cookie liště spadly konverze',
              text: 'Propad o desítky procent přišel hned po nasazení lišty nebo po změně jejího nastavení.',
              pictogram: 'consent',
            },
            {
              title: 'Měníte agenturu nebo přebíráte web',
              text: 'Potřebujete vědět, co přebíráte: kdo má přístupy, jak vypadá nastavení a co nefunguje.',
              pictogram: 'gtm',
            },
            {
              title: 'Chystáte redesign, migraci nebo server-side měření',
              text: 'Než postavíte nové měření, je dobré vědět, které chyby nepřenést.',
              pictogram: 'serverside',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      title: 'Co od nás dostanete',
      lead: 'Report vlastníte vy a poslouží i při jednání s agenturou nebo dodavatelem webu.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Report z auditu',
              text: 'Manažerské shrnutí na jedné straně a nálezy s důkazem, dopadem, prioritou a pracností.',
            },
            {
              title: 'Plán oprav',
              text: 'Pořadí podle priorit A, B a C, závislosti a kdo co opraví – třeba „nejdřív datová vrstva, pak tagy“.',
            },
            {
              title: 'Porovnání čísel',
              text: 'GA4 vs. administrace nebo CRM vs. reklamní systémy, s vysvětlením každého rozdílu.',
            },
            {
              title: 'Inventura GTM a protokol testů',
              text: 'Všechny tagy s doporučením ponechat, upravit, nebo smazat a výsledky testovacích scénářů se snímky obrazovky.',
            },
            {
              title: 'Prezentace výsledků',
              text: 'Nálezy projdeme s marketingem, vývojem a vedením.',
            },
          ],
        },
      ],
    },

    {
      id: 'ukazka-reportu',
      title: 'Jak vypadá report z auditu',
      lead: 'Výřez z tabulky nálezů, data jsou fiktivní. U každého nálezu v reportu najdete prioritu A, B, nebo C, důkaz, doporučení, pracnost a to, kdo ho opraví.',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Web po návratu z brány neodešle nákup',
              text: 'GA4 nevidí šestnáct procent plateb kartou a kampaně vypadají hůř.',
            },
            {
              title: 'Meta Pixel běží před volbou v cookie liště',
              text: 'Data bez souhlasu a možný rozpor s § 89 odst. 3 zákona o elektronických komunikacích – ten by měl posoudit právník.',
            },
            {
              title: 'Google Ads počítá nákup dvakrát',
              text: 'Import z GA4 i tag Google Ads jako primární akce nadhodnotí konverze a zkreslí optimalizaci nabídek.',
            },
            {
              title: 'Platební brány jako referral',
              text: 'GA4 přepíše zdroj nákupu na platební bránu.',
            },
            {
              title: 'Sedmatřicet nepoužívaných tagů a chybějící pravidla pojmenování',
              text: 'Pomalejší správa kontejneru a vyšší riziko chyb.',
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Kolik audit měření stojí?',
      a: 'Cenu ovlivňuje počet systémů, jako jsou GA4, GTM, Google Ads, Meta, Sklik nebo srovnávače, dále počet webů a domén, typ webu a to, jestli chcete i porovnání s CRM. Po úvodním hovoru dostanete nabídku s pevným rozsahem. Rychlá kontrola zvenku je zdarma.',
    },
    {
      q: 'Jaké přístupy potřebujete a je to bezpečné?',
      a: 'Stačí přístupy pro čtení: role Čtenář v GA4, oprávnění Číst v GTM, přístup Jen pro čtení v Google Ads a obdobně v Metě a Skliku. Nic neměníme a od e-shopu potřebujeme export objednávek <strong>bez osobních údajů zákazníků</strong> a možnost testovacího nákupu. Na požádání podepíšeme dohodu o mlčenlivosti (NDA) a po auditu doporučíme přístupy odebrat.',
    },
    {
      q: 'Posoudíte i právní stránku cookie lišty?',
      a: 'Ne, nejsme advokátní kancelář. Ověřujeme technickou stránku: co web spustí před souhlasem a po něm a jestli tagy respektují volbu návštěvníka. Pro orientaci: § 89 odst. 3 zákona č. 127/2005 Sb. vyžaduje k ukládání údajů, které nejsou nezbytné pro poskytnutí služby, předchozí souhlas. Texty lišty a zásady by měl posoudit váš právník.',
    },
    {
      q: 'Kdo nálezy opraví – vy, nebo naši vývojáři?',
      a: 'Jak chcete. Report píšeme tak, aby podle něj mohl opravy udělat kdokoli: váš vývojář, agentura, nebo my. Nálezy v GTM, GA4 a nastavení souhlasu většinou opravujeme sami, úpravy datové vrstvy připravíme jako zadání pro vývojáře a jejich práci zkontrolujeme.',
    },
  ],

  contact: {
    formId: 'lp-audit',
    title: 'Zjistíme, kde utíkají data',
    lead: 'Nevíte, jestli audit potřebujete? Pošlete adresu webu a do zprávy napište „Rychlá kontrola měření“. Podíváme se na web zvenku a tři až pět nejvýraznějších nálezů vám pošleme e-mailem, nebo je probereme v krátkém hovoru.',
    placeholder: 'Adresa webu a co řešíte, např. „nevěříme číslům v GA4 a chceme vědět, kde je chyba“',
    leadType: 'audit',
  },

  schema: {
    name: 'Audit měření',
    serviceType: 'Audit webové analytiky a měření konverzí',
    description:
      'Nezávislá kontrola GA4, Google Tag Manageru, souhlasu návštěvníků v Consent Mode v2 a konverzí v Google Ads, Metě a Skliku; čísla porovnáme s administrací e-shopu nebo CRM. Výsledek tvoří report s nálezy podle priority A, B a C a plán oprav.',
    audience: 'E-shopy, B2B firmy, velké firmy',
  },
};
