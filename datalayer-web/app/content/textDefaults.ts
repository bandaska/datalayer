// Výchozí hodnoty textů webu, které přibyly později – samostatně bez zod, aby je
// mohly použít komponenty v prohlížeči i schéma (doplní je do starších dokumentů
// content/texts v databázi).

/** Jednotný postup spolupráce – stejných pět kroků na celém webu (blok „Postup spolupráce“). Nadpis a úvod sekce má každá stránka vlastní. */
export const DEFAULT_PROCESS = {
  steps: [
    {
      title: 'Audit',
      text: 'Projdeme GA4, GTM, souhlas a reklamní systémy a porovnáme je s administrací nebo CRM.',
      output: 'report s prioritami A, B a C',
      fromClient: 'přístupy pro čtení',
    },
    {
      title: 'Měřicí plán',
      text: 'Obchodní cíle převedeme na události, parametry a pravidla pojmenování.',
      output: 'měřicí plán a specifikace datové vrstvy',
      fromClient: 'hodinová schůzka a schválení plánu',
    },
    {
      title: 'Implementace',
      text: 'Nasadíme GTM na webu i serveru, Consent Mode v2 a konverze do reklamních systémů.',
      output: 'verzované kontejnery',
      fromClient: 'datová vrstva od vývojářů a přístupy pro úpravy',
    },
    {
      title: 'Validace',
      text: 'Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s administrací nebo CRM.',
      output: 'protokol testů',
      fromClient: 'testovací objednávka nebo poptávka a export z administrace nebo CRM',
    },
    {
      title: 'Předání a podpora',
      text: 'Předáme dokumentaci, proškolíme tým a budeme hlídat, aby měření po dalším releasu nepřestalo fungovat.',
      output: 'dokumentace a monitoring',
      fromClient: 'předávací schůzka',
    },
  ],
};

export const DEFAULT_PAGE_TEXTS = {
  faqTitle: 'Časté otázky',
  // výzvu pod nadpisem FAQ jazykový audit doporučil vypustit (kontaktní blok je hned pod ní)
  faqLead: '',
  continueLabel: 'pokračujte',
};

// kroky bez slibů lhůt a délek (zadání klienta)
export const DEFAULT_NEXT_STEPS = ['Domluvíme termín callu', 'Projdeme web a cíle', 'Připravíme návrh na míru'];

export const DEFAULT_THANK_YOU_LINKS = [
  { label: 'Jak pracujeme', href: '/jak-pracujeme' },
  { label: 'Přehled služeb', href: '/sluzby' },
];
