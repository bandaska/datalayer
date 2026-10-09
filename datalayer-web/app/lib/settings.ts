// Nastavení webu editovatelné v administraci (/admin/settings).
// Sdílené typy a validace – ukládání řeší `settings.server.ts`.

export type SiteSettings = {
  /** Kam chodí zprávy z kontaktního formuláře (aspoň jedna adresa). */
  recipients: string[];
  /** ID kontejneru Google Tag Manageru, prázdné = GTM vypnutý. */
  gtmId: string;
  /** Telefon zobrazený na webu, prázdný = na webu se nezobrazí. */
  phone: string;
  /** Odkaz na LinkedIn, prázdný = na webu se nezobrazí. */
  linkedinUrl: string;
  /** Identifikace provozovatele (§ 435 občanského zákoníku, čl. 13 GDPR): jméno nebo firma. */
  operatorName: string;
  /** IČO provozovatele. */
  operatorId: string;
  /** Sídlo nebo místo podnikání. */
  operatorAddress: string;
  /** Zápis v rejstříku, např. „zapsaný v živnostenském rejstříku“ nebo spisová značka. */
  operatorRegistry: string;
  updatedAt?: string;
  updatedBy?: string;
};

export const DEFAULT_SETTINGS: SiteSettings = {
  recipients: [],
  gtmId: '',
  phone: '+420 704 664 774',
  linkedinUrl: '',
  operatorName: '',
  operatorId: '',
  operatorAddress: '',
  operatorRegistry: '',
};

const EMAIL_RE = /^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]{2,}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value.trim());
}

/** Rozdělí text z textarey (řádky, čárky, středníky) na seznam e-mailů. */
export function parseRecipients(raw: string): { valid: string[]; invalid: string[] } {
  const parts = raw
    .split(/[\s,;]+/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  const valid: string[] = [];
  const invalid: string[] = [];
  for (const p of parts) {
    if (isValidEmail(p)) {
      if (!valid.includes(p)) valid.push(p);
    } else invalid.push(p);
  }
  return { valid, invalid };
}

/** Tvar GTM-XXXXXXX – kontrola při uložení, ať překlep nevypne měření potichu. */
export function isValidGtmId(value: string): boolean {
  return /^GTM-[A-Z0-9]{4,10}$/.test(value);
}

export function normalizeGtmId(value: string): string {
  return value.trim().toUpperCase();
}

/** Telefon pro odkaz `tel:` – jen číslice a úvodní plus. */
export function phoneHref(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, '');
  return `tel:${digits}`;
}

/** IČO: osm číslic (mezery se ignorují). */
export function isValidOperatorId(value: string): boolean {
  return /^\d{8}$/.test(value.replace(/\s+/g, ''));
}

export function isValidLinkedinUrl(value: string): boolean {
  return /^https:\/\/([a-z]{2,3}\.)?linkedin\.com\/.+/i.test(value.trim());
}
