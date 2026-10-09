import type { Topic } from '~/content/types';

// Kontaktní formulář – sdílené definice (klient i server).
// Specifikace: seo-analyza/05_formulare/specifikace-formularu.md.

/** Témata ve formuláři (chips) v pořadí zobrazení. */
export const TOPICS: { value: Topic; label: string }[] = [
  { value: 'ga4', label: 'GA4' },
  { value: 'gtm', label: 'Tag Manager' },
  { value: 'datalayer', label: 'Datová vrstva' },
  { value: 'server-side', label: 'Server-side' },
  { value: 'consent', label: 'Cookie lišta a consent' },
  { value: 'konverze', label: 'Konverze v Ads / Meta / Sklik' },
  { value: 'bigquery', label: 'BigQuery a dashboardy' },
  { value: 'audit', label: 'Audit měření' },
  { value: 'leady-crm', label: 'Leady a CRM' },
  { value: 'tech-audit', label: 'Technický audit webu' },
  { value: 'sprava', label: 'Správa webu a měření' },
  { value: 'governance', label: 'Governance' },
];

const TOPIC_VALUES = new Set<string>(TOPICS.map((t) => t.value));

export function topicLabel(value: string): string {
  return TOPICS.find((t) => t.value === value)?.label ?? value;
}

export const LEAD_TYPES = ['consultation', 'audit', 'quick_check'] as const;
export type LeadType = (typeof LEAD_TYPES)[number];

export type ContactFields = {
  jmeno: string;
  email: string;
  telefon: string;
  web: string;
  zprava: string;
  temata: string[];
  formId: string;
  leadType: LeadType;
  page: string;
};

export type ContactErrors = Partial<Record<'jmeno' | 'email' | 'zprava', string>>;

export const CONTACT_MESSAGES = {
  jmeno: 'Napište prosím, jak vám máme říkat.',
  email: 'Zkontrolujte prosím e-mail – bez něj se vám nemůžeme ozvat.',
  zprava: 'Napište prosím pár slov o tom, co řešíte.',
  invalid: 'Zkontrolujte prosím zvýrazněná pole.',
  spam: 'Ověření proti spamu selhalo. Zkuste to prosím znovu.',
  rate: 'Odeslali jste několik zpráv za sebou. Zkuste to prosím za chvíli.',
  failed: 'Zprávu se teď nepodařilo zpracovat. Zkuste to prosím později, nebo nám napište e-mail.',
  ok: 'Děkujeme, ozveme se do jednoho pracovního dne.',
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Načte a ořízne pole z FormData (délkové limity jako v PHP vzoru). */
export function readContactFields(fd: FormData): ContactFields {
  const get = (k: string, max: number) => String(fd.get(k) ?? '').trim().slice(0, max);
  const leadType = get('lead_type', 20);
  return {
    jmeno: get('jmeno', 120),
    email: get('email', 200),
    telefon: get('telefon', 40),
    web: get('web', 200),
    zprava: get('zprava', 5000),
    temata: fd
      .getAll('tema')
      .map(String)
      .filter((t) => TOPIC_VALUES.has(t)),
    formId: get('form_id', 40).toLowerCase().replace(/[^a-z0-9-]/g, '') || 'kontakt',
    leadType: (LEAD_TYPES as readonly string[]).includes(leadType) ? (leadType as LeadType) : 'consultation',
    page: get('page', 300),
  };
}

export function validateContact(f: Pick<ContactFields, 'jmeno' | 'email' | 'zprava'>): ContactErrors {
  const errors: ContactErrors = {};
  if (!f.jmeno) errors.jmeno = CONTACT_MESSAGES.jmeno;
  if (!EMAIL_RE.test(f.email)) errors.email = CONTACT_MESSAGES.email;
  if (!f.zprava) errors.zprava = CONTACT_MESSAGES.zprava;
  return errors;
}

// ---------- normalizace pro enhanced conversions (hash v prohlížeči) ----------

/** E-mail: malá písmena bez mezer; u gmail.com / googlemail.com bez teček v lokální části. */
export function normalizeEmail(value: string): string {
  const e = (value || '').trim().toLowerCase();
  const at = e.lastIndexOf('@');
  if (at < 1) return e;
  let local = e.slice(0, at);
  const domain = e.slice(at + 1);
  if (domain === 'gmail.com' || domain === 'googlemail.com') local = local.replace(/\./g, '');
  return `${local}@${domain}`;
}

/** Telefon do tvaru E.164 (české číslo bez předvolby → +420, prefix 00 → +). */
export function normalizePhone(value: string): string {
  if (!value) return '';
  const s = value.replace(/[^\d+]/g, '');
  if (s.startsWith('+')) return `+${s.slice(1).replace(/\D/g, '')}`;
  const d = s.replace(/\D/g, '');
  if (d.startsWith('00')) return `+${d.slice(2)}`;
  if (d.length === 9) return `+420${d}`;
  return d ? `+${d}` : '';
}

/** ID poptávky – vrací se do dataLayeru (deduplikace, offline konverze z CRM). */
export function newLeadId(now = Date.now()): string {
  return `L-${now.toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}
