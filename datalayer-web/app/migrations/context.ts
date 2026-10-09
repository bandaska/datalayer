import { firestore } from '~/lib/firestore.server';
import type { MigrationContext } from './types';

/** Kontext pro konkrétní migraci: Firestore aplikace a log s id migrace. */
export function createMigrationContext(id: string): MigrationContext {
  return {
    firestore: () => firestore,
    log: (message, meta) => console.info(`migrace ${id}: ${message}`, meta ?? {}),
  };
}
