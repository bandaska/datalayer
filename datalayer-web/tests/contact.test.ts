import { beforeEach, describe, expect, it, vi } from 'vitest';

// Firestore, e-mail a Turnstile se v testech nahradí – testuje se postup
// formuláře: honeypot → limit → validace → Turnstile → uložení → e-mail.
const saved: { id: string; fields: Record<string, unknown> }[] = [];
const mails: { recipients: string[] }[] = [];
let saveOk = true;
let mailOk = true;
let human = true;

vi.mock('~/lib/messages.server', () => ({
  saveMessage: vi.fn(async (id: string, fields: Record<string, unknown>) => {
    if (!saveOk) return false;
    saved.push({ id, fields });
    return true;
  }),
  markMailResult: vi.fn(async () => {}),
}));
vi.mock('~/lib/mailer.server', () => ({
  sendLeadMail: vi.fn(async (_id: string, _f: unknown, recipients: string[]) => {
    mails.push({ recipients });
    return mailOk ? { sent: true } : { sent: false, error: 'SMTP není nastavené' };
  }),
}));
vi.mock('~/lib/settings.server', () => ({
  getSettings: vi.fn(async () => ({ recipients: ['obchod@example.com'], gtmId: '', phone: '', linkedinUrl: '' })),
}));
vi.mock('~/lib/turnstile.server', () => ({ verifyTurnstile: vi.fn(async () => human) }));

const { action } = await import('~/routes/api.kontakt');
const { resetRateLimit } = await import('~/lib/rateLimit.server');
const { normalizeEmail, normalizePhone, readContactFields, validateContact } = await import('~/lib/contact');

function post(fields: Record<string, string | string[]>, opts: { json?: boolean; ip?: string } = {}) {
  const fd = new FormData();
  for (const [k, v] of Object.entries(fields)) for (const item of Array.isArray(v) ? v : [v]) fd.append(k, item);
  const headers: Record<string, string> = { 'x-forwarded-for': opts.ip ?? '203.0.113.7' };
  if (opts.json !== false) headers['X-Requested-With'] = 'XMLHttpRequest';
  const request = new Request('https://datalayer.cz/api/kontakt', { method: 'POST', body: fd, headers });
  return action({ request, params: {}, context: {} } as Parameters<typeof action>[0]) as Promise<Response>;
}

const VALID = { jmeno: 'Jan Novák', email: 'jan@example.com', zprava: 'GA4 nesedí s e-shopem.', form_id: 'lp-ga4', tema: ['ga4', 'neexistuje'] };

beforeEach(() => {
  saved.length = 0;
  mails.length = 0;
  saveOk = true;
  mailOk = true;
  human = true;
  resetRateLimit();
});

describe('kontaktní formulář – server', () => {
  it('platná zpráva: uloží, pošle příjemcům z nastavení, vrátí leadId', async () => {
    const res = await post(VALID);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toMatchObject({ ok: true });
    expect(body.leadId).toMatch(/^L-/);
    expect(saved).toHaveLength(1);
    expect(saved[0].fields).toMatchObject({ formId: 'lp-ga4', temata: ['ga4'] });
    expect(mails[0].recipients).toEqual(['obchod@example.com']);
  });

  it('honeypot: tváří se úspěšně, nic neuloží', async () => {
    const res = await post({ ...VALID, website: 'http://spam.example' });
    expect((await res.json()).ok).toBe(true);
    expect(saved).toHaveLength(0);
    expect(mails).toHaveLength(0);
  });

  it('validace: 422 s chybami polí', async () => {
    const res = await post({ jmeno: '', email: 'spatny', zprava: '' });
    expect(res.status).toBe(422);
    const body = await res.json();
    expect(Object.keys(body.errors).sort()).toEqual(['email', 'jmeno', 'zprava']);
    expect(saved).toHaveLength(0);
  });

  it('Turnstile neprošel: 403', async () => {
    human = false;
    const res = await post(VALID);
    expect(res.status).toBe(403);
    expect(saved).toHaveLength(0);
  });

  it('selže e-mail, ale zpráva se uloží: úspěch', async () => {
    mailOk = false;
    const res = await post(VALID);
    expect(res.status).toBe(200);
    expect(saved).toHaveLength(1);
  });

  it('neuloží se ani neodešle: 500', async () => {
    mailOk = false;
    saveOk = false;
    const res = await post(VALID);
    expect(res.status).toBe(500);
  });

  it('limit frekvence: čtvrtá zpráva za minutu z jedné IP dostane 429', async () => {
    for (let i = 0; i < 3; i++) expect((await post(VALID, { ip: '198.51.100.1' })).status).toBe(200);
    expect((await post(VALID, { ip: '198.51.100.1' })).status).toBe(429);
    expect((await post(VALID, { ip: '198.51.100.2' })).status).toBe(200);
  });

  it('bez JavaScriptu přesměruje (303) na děkovací stránku, při chybě s kódem', async () => {
    const ok = await post(VALID, { json: false });
    expect(ok.status).toBe(303);
    expect(ok.headers.get('Location')).toBe('/dekujeme');
    const bad = await post({ jmeno: '' }, { json: false });
    expect(bad.status).toBe(303);
    expect(bad.headers.get('Location')).toBe('/dekujeme?chyba=422');
  });
});

describe('kontaktní formulář – pomocné funkce', () => {
  it('normalizace pro enhanced conversions', () => {
    expect(normalizeEmail(' Jan.Novak@Gmail.com ')).toBe('jannovak@gmail.com');
    expect(normalizeEmail('Jan.Novak@firma.cz')).toBe('jan.novak@firma.cz');
    expect(normalizePhone('777 123 456')).toBe('+420777123456');
    expect(normalizePhone('00421 905 123 456')).toBe('+421905123456');
    expect(normalizePhone('+420 (777) 123-456')).toBe('+420777123456');
    expect(normalizePhone('')).toBe('');
  });

  it('čtení polí: ořezání, neznámá témata pryč, bezpečné form_id', () => {
    const fd = new FormData();
    fd.append('jmeno', '  Jana  ');
    fd.append('form_id', 'lp-GA4<script>');
    fd.append('lead_type', 'hack');
    fd.append('tema', 'bigquery');
    fd.append('tema', 'x');
    const f = readContactFields(fd);
    expect(f.jmeno).toBe('Jana');
    expect(f.formId).toBe('lp-ga4script');
    expect(f.leadType).toBe('consultation');
    expect(f.temata).toEqual(['bigquery']);
    expect(validateContact({ jmeno: 'A', email: 'a@b.cz', zprava: 'x' })).toEqual({});
  });
});
