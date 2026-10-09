import type { PageInput } from '../../schema';

// Stránka prošla UX redukcí z 9. října 2026 (seo-analyza/2026-10-09_ux-redukce,
// kap. 5.2). Zůstal hero s jedním tlačítkem, Poznáváte se? a Co uděláme a co
// dostanete. Schéma toku konverzí, nastavení po reklamních systémech, sekce
// o deduplikaci a rozdílech, postup, ověření, Technické detaily a odkazy na další
// stránky a články zmizely. FAQ má čtyři otázky: proč se čísla liší i po nastavení
// (zkrácená rušená sekce), Seznam Event Measurement, co potřebujeme od vývojářů
// a jaké přístupy, a z čeho se skládá cena. Čísla v prvním symptomu jsou
// ilustrační. Texty prošly jazykovým auditem z 9. října 2026.

export const page: PageInput = {
  path: 'sluzby/mereni-konverzi',
  kind: 'service',
  navTitle: 'Měření konverzí',
  tagline: 'Google Ads, Meta, Sklik i Heureka vidí totéž',
  pictogram: 'conversion',
  menuGroup: 'sber',

  seo: {
    title: 'Měření konverzí – Google Ads, Meta, Sklik, Heureka | datalayer.cz',
    description:
      'Nastavíme měření konverzí pro Google Ads, Metu (pixel a Conversions API), Sklik, Heureku i TikTok z jedné datové vrstvy, bez dvojího počítání. Konzultace zdarma.',
  },

  hero: {
    h1: 'Měření konverzí pro Google Ads, Metu, Sklik i Heureku',
    subtitle:
      'Měření konverzí předává reklamním systémům informaci, že návštěvník z reklamy nakoupil nebo poslal poptávku. Stavíme ho z jedné datové vrstvy, aby každá objednávka dorazila do Google Ads, Mety, Skliku i Heureky jednou, se stejným ID a hodnotou – a jen podle souhlasu návštěvníka. Reklamní systémy se pak učí z čísel, která sedí s administrací.',
    primaryCta: { label: 'Zkontrolovat moje konverze', href: '#kontakt' },
  },

  sections: [
    {
      id: 'symptomy',
      title: 'Poznáváte se?',
      lead: 'Část rozdílů mezi systémy je přirozená, část je chyba v nastavení.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'Každý systém hlásí jiné číslo',
              text: 'Administrace třeba ukáže 412 objednávek, GA4 371 a Meta 388 – a nevíte, který rozdíl je chyba.',
              pictogram: 'dashboard',
            },
            {
              title: 'Systémy počítají nákup dvakrát',
              text: 'Pixel i Conversions API bez společného ID nebo import z GA4 vedle konverzního tagu – a k tomu jednou cena s DPH, jednou bez.',
              pictogram: 'eshop',
            },
            {
              title: 'Sklik měří jen část',
              text: 'Starý konverzní kód bez předání souhlasu, retargeting zvlášť – a Seznam mezitím spouští nové měření Seznam Event Measurement (SEM).',
              pictogram: 'warn',
            },
            {
              title: 'Google Ads se učí z formulářů, ne ze zakázek',
              text: 'Reklama počítá každý odeslaný formulář, i když obchod v CRM ví, které poptávky jsou dobré.',
              pictogram: 'lead',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      title: 'Co uděláme a co dostanete',
      lead: 'Než nastavíme první tag, dohodneme s vámi, co je konverze a jaká je její hodnota. Pravidla zapíšeme do konverzní mapy, aby platila i pro agentury a budoucí dodavatele.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Konverzní mapa',
              text: 'Které akce jsou konverze, primární a sekundární akce, hodnoty, ID a konverzní okna – pro každý systém.',
            },
            {
              title: 'Zadání datové vrstvy',
              text: 'Pokud chybí nebo je neúplná: specifikace pro vývojáře s událostmi nákupu a poptávky. Navazuje na službu <a href="/sluzby/implementace-ga4">GA4 a Google Tag Manager</a>.',
            },
            {
              title: 'Nastavený Google Tag Manager (GTM)',
              text: 'Tagy, spouštěče a podmínky souhlasu s popisem verzí, volitelně Conversions API a Events API přes server-side GTM.',
            },
            {
              title: 'Backendové napojení',
              text: 'Zadání pro vývojáře: Ověřeno zákazníky, Seznam Nákupy a offline konverze přes Data Manager API.',
            },
            {
              title: 'Testovací protokol a porovnání s backendem',
              text: 'Výsledky testovacích objednávek pro každý systém. Po čtrnácti dnech srovnání backendu s reklamními systémy a vysvětlení rozdílů.',
            },
            {
              title: 'Přístupy a předání',
              text: 'Přehled rolí ve všech účtech a krátké zaškolení pro marketing a agentury, jak konverze číst.',
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Proč se čísla v reklamních systémech a v administraci liší i po nastavení?',
      a: 'Stejné ID objednávky zajistí, že ji každý systém započítá jen jednou, stejné číslo ale všechny ukazovat nebudou. Meta i Google Ads si připíšou stejný nákup, na kterém se podílely, Google Ads ho připisuje ke dni prokliku a GA4 ke dni nákupu a storno odečte backend, reklamní systém ne. Google Ads navíc ukazuje i modelované konverze, kdežto Meta a Sklik vidí jen lidi se souhlasem. Cíl je vysvětlitelný a stabilní rozdíl – jeho náhlá změna pak spustí kontrolu.',
    },
    {
      q: 'Co je Seznam Event Measurement a musím přejít?',
      a: 'Seznam Event Measurement, zkráceně SEM, je nové měření Seznamu: jeden skript <code>sul.js</code> nahrazuje kódy Skliku i měření pro Seznam Nákupy. Přechod budou podle Seznamu potřebovat všechny účty a podporu původních kódů Seznam ukončí v průběhu roku 2027. SEM je zatím v betě a přepnutí účtu je nevratné, proto ho nasazujeme souběžně a přepínáme až po ověření. Stav k říjnu 2026.',
    },
    {
      q: 'Co budete potřebovat od nás a od našich vývojářů?',
      a: 'Od vás potřebujeme role s oprávněním k úpravám konverzí a tagů, nikdy hesla – účty Google Ads, Meta Business, Sklik, Heureka i GTM zůstávají vaše. Pokud datová vrstva chybí nebo je neúplná, připravíme vývojářům zadání s událostmi nákupu a poptávky, nebo upravíme nastavení e-shopové platformy. Pro backendová napojení – Ověřeno zákazníky, Seznam Nákupy a offline konverze – dostanou vývojáři zadání od nás.',
    },
    {
      q: 'Z čeho se skládá cena?',
      a: 'Cena se odvíjí od počtu systémů, stavu datové vrstvy, platformy e-shopu, zapojení serveru nebo CRM a počtu domén a zemí. Provoz serveru, pokud ho využijete, platíte přímo poskytovateli.',
    },
  ],

  contact: {
    formId: 'lp-konverze',
    title: 'Nastavíme, aby reklamní systémy viděly stejné konverze jako vy',
    lead: 'Na úvodní konzultaci projdeme, jak objednávky nebo poptávky putují do reklamních systémů, a řekneme, kde je systémy počítají dvakrát a kde je nevidí vůbec.',
    placeholder: 'Adresa webu a co řešíte, např. „Meta hlásí víc nákupů, než jich máme v administraci“',
    leadType: 'consultation',
  },

  schema: {
    name: 'Měření konverzí pro Google Ads, Metu, Sklik a Heureku',
    serviceType: 'Nastavení a sjednocení měření konverzí v reklamních systémech',
    description:
      'Nastavení konverzí z jedné datové vrstvy pro Google Ads včetně rozšířených konverzí, Meta Pixel a Conversions API, Seznam Event Measurement pro Sklik a Seznam Nákupy, Heureku s měřením konverzí a Ověřeno zákazníky, TikTok, LinkedIn a Microsoft Ads. Sjednocení hodnot, deduplikace, testovací objednávky a porovnání s backendem.',
    audience: 'E-shopy, B2B firmy a velké firmy',
  },
};
