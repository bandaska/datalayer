// Výchozí hodnoty textů webu, které přibyly později – samostatně bez zod, aby je
// mohly použít komponenty v prohlížeči i schéma (doplní je do starších dokumentů
// content/texts v databázi).

/** Jednotný postup spolupráce – stejných pět kroků na celém webu (blok „Postup spolupráce“). Nadpis a úvod sekce má každá stránka vlastní. */
export const DEFAULT_PROCESS = {
  steps: [
    {
      title: 'Audit',
      text: 'Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.',
      output: 'report s prioritami A/B/C',
      fromClient: 'přístupy pro čtení',
    },
    {
      title: 'Měřicí plán',
      text: 'Byznys cíle převedeme na události, parametry a pravidla pojmenování.',
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
      text: 'Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.',
      output: 'protokol testů',
      fromClient: 'testovací objednávka a export z administrace',
    },
    {
      title: 'Předání a podpora',
      text: 'Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.',
      output: 'dokumentace a monitoring',
      fromClient: 'předávací schůzka',
    },
  ],
};

export const DEFAULT_PAGE_TEXTS = {
  faqTitle: 'Časté otázky',
  faqLead: 'Nenašli jste odpověď? <a href="#kontakt">Napište nám</a>.',
  continueLabel: 'pokračujte',
};

export const DEFAULT_NEXT_STEPS = [
  'Do jednoho pracovního dne navrhneme termín.',
  'Na třicet minut projdeme web a cíle.',
  'Do dvou pracovních dnů po konzultaci dostanete shrnutí a návrh dalšího kroku.',
];

export const DEFAULT_THANK_YOU_LINKS = [
  { label: 'Jak pracujeme', href: '/jak-pracujeme' },
  { label: 'Přehled služeb', href: '/sluzby' },
];
