/**
 * Runner migrací (docs/migrace.md). Převzato z visibilitycz/reporting
 * (src/migrations/runner.ts): manifest určuje pořadí, evidence přeskakuje
 * hotové, zámek brání souběhu, běh se zastaví na první chybě.
 */
import { createHash } from 'node:crypto';
import { createMigrationContext } from './context';
import { MigrationError } from './errors';
import { MIGRATIONS } from './manifest';
import { firestoreStore, type MigrationStore } from './state';
import type { Migration, MigrationContext, MigrationTarget } from './types';

export interface MigrationStatus {
  id: string;
  description: string;
  targets: MigrationTarget[];
  applied: boolean;
  appliedAt: string | null;
  appliedBy: string | null;
  summary: string | null;
  /** Kód migrace se od aplikace změnil – automaticky se znovu nespouští, jen na vyžádání. */
  changed: boolean;
  /** Poslední pokus selhal (a od té doby neprošel). */
  failedAt: string | null;
  error: string | null;
}

export interface MigrationRunResult {
  id: string;
  status: 'applied' | 'skipped' | 'failed';
  durationMs?: number;
  summary?: string;
  error?: string;
}

/**
 * Otisk migrace – popis i kód `run`. Mění se při každé úpravě migrace, proto
 * se změna jen **hlásí**: datová migrace se nemá pustit podruhé jen proto, že
 * se v ní opravil komentář.
 */
export function migrationChecksum(migration: Migration): string {
  return createHash('sha256').update(`${migration.id}\n${migration.description}\n${migration.run.toString()}`).digest('hex');
}

export async function getMigrationStatus(
  migrations: Migration[] = MIGRATIONS,
  store: MigrationStore = firestoreStore(),
): Promise<MigrationStatus[]> {
  const state = await store.read();
  return migrations.map((m) => {
    const applied = state.applied[m.id];
    const failed = state.failed[m.id];
    return {
      id: m.id,
      description: m.description,
      targets: m.targets,
      applied: Boolean(applied),
      appliedAt: applied?.appliedAt ?? null,
      appliedBy: applied?.appliedBy ?? null,
      summary: applied?.summary ?? null,
      changed: Boolean(applied) && applied!.checksum !== migrationChecksum(m),
      failedAt: failed?.failedAt ?? null,
      error: failed?.error ?? null,
    };
  });
}

export interface RunOptions {
  /** Kdo běh spustil (e-mail admina, nebo `migracni-url`). */
  by: string;
  /** Vynucený (opakovaný) běh jedné migrace podle id. Bez něj všechny čekající. */
  only?: string;
  migrations?: Migration[];
  store?: MigrationStore;
  contextFor?: (id: string) => MigrationContext;
}

/**
 * Aplikuje čekající migrace v pořadí manifestu, nebo s `only` vynutí jednu.
 * Zastaví se na první chybě – pořadí je závazné. Stav se ukládá po každé
 * migraci, ať přežije i pád uprostřed běhu.
 */
export async function runMigrations(options: RunOptions): Promise<MigrationRunResult[]> {
  const migrations = options.migrations ?? MIGRATIONS;
  const store = options.store ?? firestoreStore();
  const contextFor = options.contextFor ?? createMigrationContext;
  if (options.only !== undefined && !migrations.some((m) => m.id === options.only)) {
    throw new MigrationError(404, 'Migrace není v manifestu');
  }

  const release = await store.acquireLock(options.by);
  try {
    // Stav se čte až pod zámkem – souběžný běh by jinak viděl starý.
    const state = await store.read();
    const results: MigrationRunResult[] = [];
    const targets = options.only ? migrations.filter((m) => m.id === options.only) : migrations;

    for (const migration of targets) {
      if (!options.only && state.applied[migration.id]) {
        results.push({ id: migration.id, status: 'skipped' });
        continue;
      }
      const started = Date.now();
      try {
        console.info('migrace: start', { migration: migration.id, by: options.by, targets: migration.targets });
        const summary = (await migration.run(contextFor(migration.id))) || undefined;
        const durationMs = Date.now() - started;
        state.applied[migration.id] = {
          checksum: migrationChecksum(migration),
          appliedAt: new Date().toISOString(),
          appliedBy: options.by,
          durationMs,
          ...(summary ? { summary } : {}),
        };
        delete state.failed[migration.id];
        await store.write(state);
        results.push({ id: migration.id, status: 'applied', durationMs, summary });
        console.info('migrace: aplikována', { migration: migration.id, durationMs });
      } catch (err) {
        const error = err instanceof Error ? err.message : String(err);
        state.failed[migration.id] = { failedAt: new Date().toISOString(), failedBy: options.by, error };
        await store.write(state).catch((writeErr) =>
          console.error('migrace: nepodařilo se uložit stav po chybě', { migration: migration.id, error: writeErr }),
        );
        results.push({ id: migration.id, status: 'failed', durationMs: Date.now() - started, error });
        console.error('migrace: selhala', { migration: migration.id, error });
        break; // pořadí je závazné – dál se nepokračuje
      }
    }
    return results;
  } finally {
    await release();
  }
}
