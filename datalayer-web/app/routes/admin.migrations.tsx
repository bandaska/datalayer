import { Form, useActionData, useLoaderData, useNavigation } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { Card, PageHead, Pill, formatDateTime, type PillTone } from '~/components/admin/ui';
import { requireRole } from '~/lib/auth.server';
import { MigrationError } from '~/migrations/errors';
import { getMigrationStatus, runMigrations, type MigrationRunResult, type MigrationStatus } from '~/migrations/runner';

// Stránka Migrace (jen role admin) – připravené změny Firestore z manifestu
// (app/migrations/manifest.ts) se nasazují jedním kliknutím. Postup:
// docs/migrace.md. Tutéž akci umí migrační URL /migrate?run=1 (MIGRATION_TOKEN).

export async function loader({ request }: LoaderFunctionArgs) {
  await requireRole(request, 'admin');
  return { migrations: await getMigrationStatus() };
}

type ActionResult = { results?: MigrationRunResult[]; error?: string };

export async function action({ request }: ActionFunctionArgs): Promise<ActionResult> {
  const user = await requireRole(request, 'admin');
  const form = await request.formData();
  const id = String(form.get('id') ?? '') || undefined;
  try {
    return { results: await runMigrations({ by: user.email, only: id }) };
  } catch (err) {
    if (err instanceof MigrationError) return { error: err.message };
    throw err;
  }
}

/** Stav migrace v tabulce: aplikovaná / změněná / selhala / čeká. */
function statusOf(m: Pick<MigrationStatus, 'applied' | 'changed' | 'error'>): { tone: PillTone; label: string } {
  if (m.applied) return m.changed ? { tone: 'warn', label: 'změněná' } : { tone: 'ok', label: 'aplikovaná' };
  return m.error ? { tone: 'danger', label: 'selhala' } : { tone: 'info', label: 'čeká' };
}

const RESULT: Record<MigrationRunResult['status'], { tone: PillTone; label: string }> = {
  applied: { tone: 'ok', label: 'aplikovaná' },
  skipped: { tone: 'muted', label: 'přeskočená' },
  failed: { tone: 'danger', label: 'selhala' },
};

export default function AdminMigrations() {
  const { migrations } = useLoaderData<typeof loader>();
  const result = useActionData<typeof action>();
  const running = useNavigation().state === 'submitting';
  const pending = migrations.filter((m) => !m.applied).length;

  return (
    <>
      <PageHead
        title="Migrace"
        desc="Připravené změny dat ve Firestore, třeba nastavení, import článků nebo úpravy obsahu. Každá prošla pull requestem a testy. Runner je pouští v pořadí manifestu a na první chybě skončí. Aplikované migrace přeskočí, změněnou migraci pustíte znovu jen ručně."
        actions={
          <Form method="post">
            <button type="submit" className="btn btn-primary" disabled={running || pending === 0}>
              {running ? 'Běží…' : `Nasadit čekající (${pending})`}
            </button>
          </Form>
        }
      />

      {result?.error ? (
        <div className="alert alert-warning" role="alert">
          {result.error}
        </div>
      ) : null}
      {result?.results ? (
        <Card title="Výsledek běhu">
          {result.results.length === 0 ? (
            <p className="text-muted mb-0">Na nasazení nečekala žádná migrace.</p>
          ) : (
            <ul className="list-unstyled mb-0">
              {result.results.map((r) => (
                <li key={r.id} className="d-flex gap-2 align-items-baseline flex-wrap py-1">
                  <Pill tone={RESULT[r.status].tone}>{RESULT[r.status].label}</Pill>
                  <code>{r.id}</code>
                  {r.summary ? <span>{r.summary}</span> : null}
                  {r.error ? <span style={{ color: 'var(--a-danger)' }}>{r.error}</span> : null}
                </li>
              ))}
            </ul>
          )}
        </Card>
      ) : null}

      <Card flush>
        {migrations.length === 0 ? (
          <div className="adm-empty">Manifest zatím neobsahuje žádné migrace.</div>
        ) : (
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Migrace</th>
                  <th>Stav</th>
                  <th>Nasazení</th>
                  <th className="text-end">Akce</th>
                </tr>
              </thead>
              <tbody>
                {migrations.map((m) => {
                  const s = statusOf(m);
                  return (
                    <tr key={m.id}>
                      <td>
                        <div className="fw-semibold">{m.description}</div>
                        <code>{m.id}</code>
                        {m.summary ? <div className="small text-muted mt-1">{m.summary}</div> : null}
                        {m.error ? (
                          <div className="small mt-1" style={{ color: 'var(--a-danger)' }}>
                            Selhala {formatDateTime(m.failedAt)}: {m.error}
                          </div>
                        ) : null}
                      </td>
                      <td>
                        <Pill tone={s.tone}>{s.label}</Pill>
                        {m.applied && m.changed ? <div className="small text-muted mt-1">Kód se od nasazení změnil.</div> : null}
                      </td>
                      <td className="text-nowrap">
                        {formatDateTime(m.appliedAt)}
                        {m.appliedBy ? <div className="small text-muted">{m.appliedBy}</div> : null}
                      </td>
                      <td className="adm-table__actions">
                        {m.applied ? (
                          <Form
                            method="post"
                            className="d-inline"
                            onSubmit={(e) => {
                              if (!confirm(`Spustit migraci ${m.id} znovu?`)) e.preventDefault();
                            }}
                          >
                            <input type="hidden" name="id" value={m.id} />
                            <button type="submit" className="btn btn-sm btn-outline-secondary" disabled={running}>
                              Spustit znovu
                            </button>
                          </Form>
                        ) : null}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </>
  );
}
