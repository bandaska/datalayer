// Jednoduchý limit frekvence odeslání formuláře podle IP (v paměti instance).
// Vzor: annanovotna.cz – nejvýš 3 zprávy za minutu a 15 za hodinu z jedné IP.
// Na Cloud Run má každá instance vlastní čítač, jako pojistka proti
// opakovanému odesílání to stačí (hlavní ochranu dělá Turnstile).

type Hit = number;
const hits = new Map<string, Hit[]>();

export const RATE_RULES = [
  { windowMs: 60_000, max: 3 },
  { windowMs: 3_600_000, max: 15 },
];

/** Vrací true, když IP limit překročila. Nic nezapisuje. */
export function isRateLimited(key: string, now = Date.now()): boolean {
  const list = (hits.get(key) ?? []).filter((t) => now - t < 3_600_000);
  hits.set(key, list);
  return RATE_RULES.some((r) => list.filter((t) => now - t < r.windowMs).length >= r.max);
}

/** Zaznamená úspěšné odeslání. */
export function recordHit(key: string, now = Date.now()): void {
  const list = hits.get(key) ?? [];
  list.push(now);
  hits.set(key, list);
  if (hits.size > 5000) {
    // úklid, ať mapa neroste bez omezení
    for (const [k, v] of hits) if (!v.some((t) => now - t < 3_600_000)) hits.delete(k);
  }
}

export function resetRateLimit(): void {
  hits.clear();
}

/** IP klienta za proxy Cloud Run (první adresa v X-Forwarded-For). */
export function clientIp(request: Request): string | null {
  const xff = request.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0]?.trim() || null;
  return request.headers.get('x-real-ip');
}
