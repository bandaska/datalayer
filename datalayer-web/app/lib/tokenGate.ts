/**
 * Brána pro servisní endpoint `/migrate` – převzatá z visibilitycz/reporting
 * (src/utils/tokenGate.ts).
 *
 * Token se bere **výhradně z env** (min. 32 znaků) a porovnává v konstantním
 * čase. Bez nastavené proměnné se endpoint chová, jako by neexistoval (404) –
 * nastavení env je tím pádem hlavní vypínač: na Cloud Run se nastaví jen na
 * dobu, kdy je endpoint potřeba.
 */
import crypto from 'node:crypto';

function sha256(value: string): Buffer {
  return crypto.createHash('sha256').update(value).digest();
}

/** Minimální délka tokenu. */
export const MIN_TOKEN_LENGTH = 32;

export type TokenGateReason = 'no-env' | 'too-short' | 'no-token' | 'mismatch';

export interface TokenGateResult {
  ok: boolean;
  reason?: TokenGateReason;
}

/**
 * Ověří token z požadavku proti hodnotě v env. Důvody selhání se rozlišují
 * kvůli logu – navenek se **všechny** projeví stejně (404), aby se endpoint
 * nedal odhalit podle chybové odpovědi.
 */
export function checkEnvToken(expected: string | undefined, provided: unknown): TokenGateResult {
  if (!expected) return { ok: false, reason: 'no-env' };
  if (expected.length < MIN_TOKEN_LENGTH) return { ok: false, reason: 'too-short' };
  if (typeof provided !== 'string' || provided.length === 0) return { ok: false, reason: 'no-token' };
  return crypto.timingSafeEqual(sha256(provided), sha256(expected)) ? { ok: true } : { ok: false, reason: 'mismatch' };
}

/** Hlavička, kterou servisní endpoint přijímá místo query parametru. */
export const TOKEN_HEADER = 'x-service-token';

/**
 * Token z požadavku – **přednostně z hlavičky**. Query parametr `?token=`
 * zůstává kvůli kliknutí z prohlížeče, ale Cloud Run zapisuje celé URL do
 * logu, takže kdo může, ať posílá `X-Service-Token`.
 */
export function tokenFromRequest(request: Request): { token: string | null; fromHeader: boolean } {
  const header = request.headers.get(TOKEN_HEADER);
  if (header) return { token: header, fromHeader: true };
  return { token: new URL(request.url).searchParams.get('token'), fromHeader: false };
}
