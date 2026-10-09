// Cloudflare Turnstile – ochrana formuláře proti robotům (vzor: annanovotna.cz,
// app/turnstile.php). Dokud nejsou nastavené OBA klíče (TURNSTILE_SITE_KEY
// a TURNSTILE_SECRET_KEY), je ověření vypnuté: widget se nevykreslí a kontrola
// vždy projde. Formulář tak funguje i bez Cloudflare (honeypot a limit
// frekvence platí vždy).

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export function turnstileEnabled(): boolean {
  return Boolean(process.env.TURNSTILE_SITE_KEY && process.env.TURNSTILE_SECRET_KEY);
}

/** Veřejný klíč widgetu pro klienta (prázdný = vypnuto). */
export function turnstileSiteKey(): string {
  return turnstileEnabled() ? String(process.env.TURNSTILE_SITE_KEY) : '';
}

/** Ověří token z pole `cf-turnstile-response`. Vypnutý Turnstile vrací vždy true. */
export async function verifyTurnstile(token: string, ip: string | null): Promise<boolean> {
  if (!turnstileEnabled()) return true;
  if (!token) return false;
  const body = new URLSearchParams({ secret: String(process.env.TURNSTILE_SECRET_KEY), response: token });
  if (ip) body.set('remoteip', ip);
  try {
    const res = await fetch(VERIFY_URL, { method: 'POST', body, signal: AbortSignal.timeout(8000) });
    if (!res.ok) return false;
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch (err) {
    console.error('turnstile: ověření selhalo', err);
    return false;
  }
}
