// Definice nabízených služeb. Klíč = slug v URL (/sluzby/<slug>).
// Vychází z odkazů v původním Nette layoutu a homepage.

export type Service = {
  title: string;
  icon: string;
  perex: string;
  body: string[];
};

export const services: Record<string, Service> = {
  ga4: {
    title: 'GA4 Implementace',
    icon: 'fas fa-chart-bar',
    perex: 'Technická implementace funkcionálního ekosystému, nastavení eventů a cílů.',
    body: [
      'Kompletní technická implementace Google Analytics 4 od základu nebo migrace z Universal Analytics.',
      'Nastavení vlastních eventů, konverzí, e-commerce měření a propojení s reklamními platformami.',
    ],
  },
  gtm: {
    title: 'Google Tag Manager',
    icon: 'fas fa-tags',
    perex: 'Konfigurace, správa kontejnerů a pokročilé nastavení Google Tag Manageru.',
    body: [
      'Návrh a správa kontejnerů GTM, tagy, triggery a proměnné podle datové vrstvy.',
      'Verzování, testování a dokumentace nasazení.',
    ],
  },
  serverSide: {
    title: 'Server-Side Měření',
    icon: 'fas fa-server',
    perex: 'Server-Side implementace měření pro přesnější data a obcházení blokátorů.',
    body: [
      'Nasazení Server-Side GTM kontejneru pro přesnější a odolnější měření.',
      'Přesun zpracování z prohlížeče na server, prodloužení životnosti cookies, Facebook CAPI.',
    ],
  },
  audit: {
    title: 'GA4 Audit',
    icon: 'fas fa-cogs',
    perex: 'Technický audit existujícího nastavení a návrh oprav.',
    body: [
      'Hloubkový audit současného měřicího stacku a kvality dat.',
      'Identifikace chyb, duplicit a mezer s konkrétním návrhem nápravy.',
    ],
  },
  dataLayer: {
    title: 'Data Layer Design',
    icon: 'fas fa-project-diagram',
    perex: 'Návrh a specifikace datové vrstvy pro IT oddělení.',
    body: [
      'Návrh přesné specifikace datové vrstvy (dataLayer) jako jednotného zdroje pravdy.',
      'Dokumentace pro vývojáře a validace implementace.',
    ],
  },
  bigquery: {
    title: 'BigQuery & Data',
    icon: 'fas fa-search-dollar',
    perex: 'BigQuery export dat pro pokročilou analýzu a machine learning.',
    body: [
      'Napojení GA4 na BigQuery a práce se surovými daty bez samplingu.',
      'Datové modely, reporting a základ pro pokročilé analýzy a ML.',
    ],
  },
};
