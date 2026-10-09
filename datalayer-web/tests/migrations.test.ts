import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it, vi } from 'vitest';

// Firestore klient se v testech nevytváří – migrace dostávají falešný kontext.
vi.mock('~/lib/firestore.server', () => ({ firestore: {} }));

const { MIGRATIONS } = await import('~/migrations/manifest');
const { getMigrationStatus, migrationChecksum, runMigrations } = await import('~/migrations/runner');
const { memoryStore } = await import('~/migrations/state');
const { MigrationError } = await import('~/migrations/errors');
type Migration = import('~/migrations/types').Migration;
type MigrationContext = import('~/migrations/types').MigrationContext;

const SCRIPTS_DIR = path.join(__dirname, '..', 'app', 'migrations', 'scripts');

/**
 * Pravidlo z CLAUDE.md: každá migrace v `app/migrations/scripts/` je v manifestu – jinak by ji
 * tlačítko ani migrační URL nikdy nepustily. A naopak: manifest neodkazuje na nic, co neexistuje.
 */
describe('manifest migrací', () => {
  const files = fs.readdirSync(SCRIPTS_DIR).filter((f) => f.endsWith('.ts'));

  it('každý soubor je v manifestu, id = název souboru', async () => {
    for (const file of files) {
      const mod = (await import(path.join(SCRIPTS_DIR, file))) as { migration?: Migration };
      expect(mod.migration, `${file} musí exportovat \`migration\``).toBeDefined();
      expect(mod.migration!.id).toBe(file.replace(/\.ts$/, ''));
      expect(MIGRATIONS, `${file} chybí v app/migrations/manifest.ts – přidej ji na konec`).toContain(mod.migration);
    }
  });

  it('manifest: jen soubory ze scripts/, konvence názvů, chronologicky, bez duplicit, s popisem', () => {
    const ids = MIGRATIONS.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
    // datum v názvu nesmí jít v manifestu zpět (nová migrace patří na konec)
    const dates = ids.map((id) => id.slice(0, 8));
    expect([...dates].sort()).toEqual(dates);
    for (const m of MIGRATIONS) {
      expect(m.id).toMatch(/^\d{8}_[a-z0-9_]+$/);
      expect(files).toContain(`${m.id}.ts`);
      expect(m.description.trim()).not.toBe('');
      expect(m.targets.length).toBeGreaterThan(0);
    }
  });
});

describe('runner migrací', () => {
  const ctx = (() => ({ firestore: () => ({}), log: () => {} })) as unknown as (id: string) => MigrationContext;
  const migration = (id: string, run: Migration['run'] = async () => 'hotovo'): Migration => ({
    id,
    description: `Popis ${id}`,
    targets: ['firestore'],
    run,
  });

  it('aplikuje čekající v pořadí, hotové přeskočí, evidenci uloží', async () => {
    const store = memoryStore();
    const order: string[] = [];
    const list = [migration('20261001_a', async () => void order.push('a')), migration('20261002_b', async () => (order.push('b'), 'b ok'))];

    const first = await runMigrations({ by: 'admin@example.com', migrations: list, store, contextFor: ctx });
    expect(first.map((r) => r.status)).toEqual(['applied', 'applied']);
    expect(order).toEqual(['a', 'b']);
    expect(store.state.applied['20261002_b'].summary).toBe('b ok');
    expect(store.state.applied['20261001_a'].appliedBy).toBe('admin@example.com');

    const second = await runMigrations({ by: 'admin@example.com', migrations: list, store, contextFor: ctx });
    expect(second.map((r) => r.status)).toEqual(['skipped', 'skipped']);
    expect(order).toEqual(['a', 'b']);
    expect(store.locked).toBe(false);
  });

  it('zastaví se na první chybě, chybu zaeviduje, příští běh ji zkusí znovu', async () => {
    const store = memoryStore();
    let fail = true;
    const ran: string[] = [];
    const list = [
      migration('20261001_a', async () => {
        if (fail) throw new Error('rozbité');
        ran.push('a');
      }),
      migration('20261002_b', async () => void ran.push('b')),
    ];
    const first = await runMigrations({ by: 'x', migrations: list, store, contextFor: ctx });
    expect(first).toHaveLength(1);
    expect(first[0]).toMatchObject({ id: '20261001_a', status: 'failed', error: 'rozbité' });
    expect(store.state.failed['20261001_a'].error).toBe('rozbité');
    expect(ran).toEqual([]);

    fail = false;
    const second = await runMigrations({ by: 'x', migrations: list, store, contextFor: ctx });
    expect(second.map((r) => r.status)).toEqual(['applied', 'applied']);
    expect(store.state.failed['20261001_a']).toBeUndefined();
  });

  it('vynucený běh jedné migrace a neznámé id (404)', async () => {
    const store = memoryStore();
    let count = 0;
    const list = [migration('20261001_a', async () => void count++)];
    await runMigrations({ by: 'x', migrations: list, store, contextFor: ctx });
    await runMigrations({ by: 'x', migrations: list, store, contextFor: ctx, only: '20261001_a' });
    expect(count).toBe(2);
    await expect(runMigrations({ by: 'x', migrations: list, store, contextFor: ctx, only: 'nic' })).rejects.toMatchObject({ status: 404 });
  });

  it('souběh: zabraný zámek vrací 409', async () => {
    const store = memoryStore();
    store.locked = true;
    const err = await runMigrations({ by: 'x', migrations: [migration('20261001_a')], store, contextFor: ctx }).catch((e) => e);
    expect(err).toBeInstanceOf(MigrationError);
    expect(err.status).toBe(409);
  });

  it('stav hlásí změněnou migraci (jiný kód než při aplikaci)', async () => {
    const store = memoryStore();
    const m = migration('20261001_a');
    await runMigrations({ by: 'x', migrations: [m], store, contextFor: ctx });
    expect((await getMigrationStatus([m], store))[0]).toMatchObject({ applied: true, changed: false });
    const edited = { ...m, description: 'Jiný popis' };
    expect(migrationChecksum(edited)).not.toBe(migrationChecksum(m));
    expect((await getMigrationStatus([edited], store))[0]).toMatchObject({ applied: true, changed: true });
  });
});

describe('migrace 20261009_settings_defaults', () => {
  it('doplní jen chybějící pole a podruhé nic nemění', async () => {
    const { migration: m } = await import('~/migrations/scripts/20261009_settings_defaults');
    let doc: Record<string, unknown> | undefined;
    const ref = {
      get: async () => ({ data: () => doc }),
      set: async (data: Record<string, unknown>) => {
        doc = { ...(doc ?? {}), ...data };
      },
    };
    const fakeCtx = { firestore: () => ({ collection: () => ({ doc: () => ref }) }), log: () => {} } as unknown as MigrationContext;
    expect(await m.run(fakeCtx)).toContain('recipients');
    expect(doc?.recipients).toEqual(['one@datalayer.cz']);
    expect(await m.run(fakeCtx)).toBe('nastavení už existuje, beze změny');

    doc = { recipients: ['obchod@example.com'], gtmId: 'GTM-ABCD123', phone: '', linkedinUrl: '' };
    expect(await m.run(fakeCtx)).toBe('nastavení už existuje, beze změny');
    expect(doc.recipients).toEqual(['obchod@example.com']);
  });
});
