// Události do dataLayeru (kontrakt: seo-analyza/03_landing-pages/00_architektura-webu.md, kap. 8).

export function pushEvent(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

/** SHA-256 v hex (Web Crypto). Prázdný vstup nebo chybějící API = prázdný řetězec. */
export async function sha256Hex(value: string): Promise<string> {
  if (!value || typeof crypto === 'undefined' || !crypto.subtle) return '';
  try {
    const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
    return Array.from(new Uint8Array(hash), (b) => b.toString(16).padStart(2, '0')).join('');
  } catch {
    return '';
  }
}
