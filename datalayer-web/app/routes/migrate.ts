import type { LoaderFunctionArgs } from 'react-router';
import { MigrationError } from '~/migrations/errors';
import { getMigrationStatus, runMigrations } from '~/migrations/runner';
import { checkEnvToken, tokenFromRequest } from '~/lib/tokenGate';

// Migrační URL (docs/migrace.md) – stejná cesta k runneru jako tlačítko na
// stránce Migrace, jen pro CI nebo skript:
//   GET /migrate                    stav (nic nemění)
//   GET /migrate?run=1              aplikuje čekající
//   GET /migrate?run=1&id=<id>      vynutí konkrétní migraci znovu
// Token MIGRATION_TOKEN v hlavičce X-Service-Token (nebo ?token=). Bez
// proměnné nebo se špatným tokenem vrací 404.

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}

export async function loader({ request }: LoaderFunctionArgs) {
  const { token, fromHeader } = tokenFromRequest(request);
  const gate = checkEnvToken(process.env.MIGRATION_TOKEN, token);
  if (!gate.ok) {
    console.warn('migrate: odmítnuto', { reason: gate.reason });
    return new Response('Not Found', { status: 404 });
  }
  if (!fromHeader) console.warn('migrate: token v URL – raději posílejte hlavičku X-Service-Token');

  const url = new URL(request.url);
  try {
    if (url.searchParams.get('run') === '1') {
      const results = await runMigrations({ by: 'migracni-url', only: url.searchParams.get('id') || undefined });
      const failed = results.some((r) => r.status === 'failed');
      return json({ ok: !failed, results }, failed ? 500 : 200);
    }
    return json({ ok: true, migrations: await getMigrationStatus() });
  } catch (err) {
    if (err instanceof MigrationError) return json({ ok: false, error: err.message }, err.status);
    throw err;
  }
}
