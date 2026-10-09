// Témata v kontaktním formuláři (čipy) – samostatně bez zod, aby je mohl použít
// formulář v prohlížeči i schéma obsahu.

/** Témata podle toho, jak klient o problému mluví (sedm čipů). */
export const TOPIC_VALUES = ['ga4', 'server-side', 'consent', 'konverze', 'bigquery', 'audit', 'jine'] as const;

export type TopicValue = (typeof TOPIC_VALUES)[number];

/** Dřívější témata (dvanáct čipů podle menu) → současná. Starší data v databázi tak projdou. */
export const LEGACY_TOPICS: Record<string, TopicValue> = {
  gtm: 'ga4',
  datalayer: 'ga4',
  'leady-crm': 'konverze',
  'tech-audit': 'audit',
  sprava: 'jine',
  governance: 'jine',
};
