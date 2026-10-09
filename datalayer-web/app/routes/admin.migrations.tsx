import { Form, useActionData, useLoaderData, useNavigation } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { requireRole } from '~/lib/auth.server';
import { MigrationError } from '~/migrations/errors';
import { getMigrationStatus, runMigrations, type MigrationRunResult } from '~/migrations/runner';

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

const fmt = (iso: string | null) => (iso ? new Date(iso).toLocaleString('cs-CZ') : '–');

export default function AdminMigrations() {
  const { migrations } = useLoaderData<typeof loader>();
  const result = useActionData<typeof action>();
  const running = useNavigation().state === 'submitting';
  const pending = migrations.filter((m) => !m.applied).length;

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h1 className="h3 text-white mb-0">Migrace</h1>
        <Form method="post">
          <button type="submit" className="btn btn-cta btn-sm" disabled={running || pending === 0}>
            {running ? 'Běží…' : `Nasadit čekající (${pending})`}
          </button>
        </Form>
      </div>
      <p className="text-muted small mb-4">
        Připravené změny dat ve Firestore (nastavení, import článků, úpravy obsahu). Každá prošla pull requestem
        a testy. Runner je pouští v pořadí manifestu a na první chybě skončí. Aplikované migrace přeskočí,
        změněnou migraci pustíte znovu jen ručně.
      </p>

      {result?.error ? <div className="alert alert-warning">{result.error}</div> : null}
      {result?.results ? (
        <div className="admin-card mb-4">
          <h2 className="h6 text-white">Výsledek běhu</h2>
          <ul className="small mb-0">
            {result.results.map((r) => (
              <li key={r.id} className={r.status === 'failed' ? 'text-danger' : undefined}>
                <code>{r.id}</code>: {r.status === 'applied' ? 'aplikována' : r.status === 'skipped' ? 'přeskočena' : 'selhala'}
                {r.summary ? ` – ${r.summary}` : ''}
                {r.error ? ` – ${r.error}` : ''}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="admin-card p-0">
        <table className="table table-dark mb-0 align-middle">
          <thead>
            <tr>
              <th>Migrace</th>
              <th>Stav</th>
              <th>Aplikováno</th>
              <th className="text-end">Akce</th>
            </tr>
          </thead>
          <tbody>
            {migrations.map((m) => (
              <tr key={m.id}>
                <td>
                  <code className="small">{m.id}</code>
                  <div className="small text-muted">{m.description}</div>
                  {m.summary ? <div className="small text-cyan">{m.summary}</div> : null}
                  {m.error ? <div className="small text-danger">Chyba ({fmt(m.failedAt)}): {m.error}</div> : null}
                </td>
                <td className="small text-nowrap">
                  {m.applied ? (m.changed ? <span className="text-warning">změněná</span> : 'aplikovaná') : m.error ? <span className="text-danger">selhala</span> : 'čeká'}
                </td>
                <td className="small text-nowrap">
                  {fmt(m.appliedAt)}
                  {m.appliedBy ? <div className="text-muted">{m.appliedBy}</div> : null}
                </td>
                <td className="text-end">
                  {m.applied ? (
                    <Form
                      method="post"
                      onSubmit={(e) => {
                        if (!confirm(`Spustit migraci ${m.id} znovu?`)) e.preventDefault();
                      }}
                    >
                      <input type="hidden" name="id" value={m.id} />
                      <button type="submit" className="btn btn-outline-custom btn-sm" disabled={running}>
                        Spustit znovu
                      </button>
                    </Form>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
