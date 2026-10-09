import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it, vi } from 'vitest';

// Každá routa administrace musí ověřit přihlášení sama – i v akci. Rodičovský
// layout (routes/admin.tsx) chrání jen načtení stránky; POST na akci by bez
// vlastní kontroly prošel (tak šlo dřív založit článek bez přihlášení).
// Firestore je prázdný objekt: kdyby routa sáhla na data před kontrolou, spadne.

vi.mock('~/lib/firestore.server', () => ({ firestore: {} }));

const ROUTES_DIR = path.join(__dirname, '..', 'app', 'routes');
const PUBLIC = new Set(['admin.login.tsx', 'admin.logout.tsx']);
const files = fs.readdirSync(ROUTES_DIR).filter((f) => f.startsWith('admin') && f.endsWith('.tsx') && !PUBLIC.has(f));

type Handler = (args: { request: Request; params: Record<string, string>; context: unknown }) => Promise<unknown>;

async function expectLoginRedirect(fn: Handler, method: 'GET' | 'POST') {
  const body = method === 'POST' ? new URLSearchParams({ intent: 'delete', slug: 'x', id: 'x', data: '{}' }) : undefined;
  const request = new Request('http://localhost/admin/test', { method, body });
  const result = await fn({ request, params: { id: 'x', slug: 'x' }, context: {} }).then(
    (v) => v,
    (e) => e,
  );
  expect(result).toBeInstanceOf(Response);
  expect((result as Response).status).toBe(302);
  expect((result as Response).headers.get('Location')).toBe('/admin/login');
}

describe('administrace bez přihlášení', () => {
  it('kontroluje všechny routy administrace', () => {
    expect(files.length).toBeGreaterThan(15);
  });

  for (const file of files) {
    it(`${file}: loader i akce přesměrují na přihlášení`, async () => {
      const mod = (await import(path.join(ROUTES_DIR, file))) as { loader?: Handler; action?: Handler };
      expect(mod.loader ?? mod.action, `${file} nemá loader ani akci`).toBeDefined();
      if (mod.loader) await expectLoginRedirect(mod.loader, 'GET');
      if (mod.action) await expectLoginRedirect(mod.action, 'POST');
    });
  }
});
