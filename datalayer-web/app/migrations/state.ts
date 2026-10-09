import { Timestamp } from '@google-cloud/firestore';
import { firestore } from '~/lib/firestore.server';
import { lockedError } from './errors';

/**
 * Evidence migrací a zámek běhu ve Firestore (v reportingu leží v bucketu,
 * tady je Firestore jediné úložiště webu):
 *
 *   _migrations/state   aplikované a selhané migrace
 *   _migrations/lock    zámek běhu (vzniká přes create(), tedy jen když neexistuje)
 */
export const STATE_DOC = '_migrations/state';
export const LOCK_DOC = '_migrations/lock';
/** Zámek starší než tohle je pozůstatek spadlé instance (požadavek na Cloud Run má strop 300 s). */
export const LOCK_TTL_MS = 15 * 60 * 1000;

export interface AppliedRecord {
  checksum: string;
  appliedAt: string;
  appliedBy: string;
  durationMs: number;
  summary?: string;
}

export interface FailedRecord {
  failedAt: string;
  failedBy: string;
  error: string;
}

export interface MigrationState {
  applied: Record<string, AppliedRecord>;
  failed: Record<string, FailedRecord>;
}

/** Úložiště evidence a zámku – výchozí Firestore, v testech paměťové. */
export interface MigrationStore {
  read(): Promise<MigrationState>;
  write(state: MigrationState): Promise<void>;
  /** Zabere zámek, nebo vyhodí 409. Nečeká. Vrací funkci, která uvolní jen tento zámek. */
  acquireLock(owner: string): Promise<() => Promise<void>>;
}

function isCode(err: unknown, code: number): boolean {
  return (err as { code?: unknown } | null)?.code === code;
}

const ALREADY_EXISTS = 6;

export function firestoreStore(now: () => number = Date.now): MigrationStore {
  const stateRef = () => firestore.doc(STATE_DOC);
  const lockRef = () => firestore.doc(LOCK_DOC);

  return {
    async read() {
      const snap = await stateRef().get();
      const d = (snap.data() ?? {}) as Partial<MigrationState>;
      return { applied: d.applied ?? {}, failed: d.failed ?? {} };
    },

    async write(state) {
      // Celý dokument se přepíše – smazané záznamy (např. vyřešené chyby) mají zmizet.
      await stateRef().set({ applied: state.applied, failed: state.failed });
    },

    async acquireLock(owner) {
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const res = await lockRef().create({ owner, lockedAt: Timestamp.fromMillis(now()) });
          return async () => {
            // Smaže jen svůj zámek – podle času zápisu.
            await lockRef()
              .delete({ lastUpdateTime: res.writeTime })
              .catch(() => {});
          };
        } catch (err) {
          if (!isCode(err, ALREADY_EXISTS)) throw err;
        }
        // Zámek existuje – je čerstvý, nebo po spadlé instanci?
        const snap = await lockRef().get();
        const lockedAt = snap.get('lockedAt');
        const created = lockedAt instanceof Timestamp ? lockedAt.toMillis() : NaN;
        if (attempt > 0 || !Number.isFinite(created) || now() - created < LOCK_TTL_MS) throw lockedError();
        // Prošlý zámek smaže jen ten, kdo viděl tutéž verzi dokumentu.
        if (snap.updateTime) await lockRef().delete({ lastUpdateTime: snap.updateTime }).catch(() => {});
      }
      throw lockedError();
    },
  };
}

/** Paměťové úložiště pro testy. */
export function memoryStore(initial?: MigrationState): MigrationStore & { state: MigrationState; locked: boolean } {
  const store = {
    state: initial ?? { applied: {}, failed: {} },
    locked: false,
    async read() {
      return JSON.parse(JSON.stringify(store.state)) as MigrationState;
    },
    async write(state: MigrationState) {
      store.state = JSON.parse(JSON.stringify(state)) as MigrationState;
    },
    async acquireLock() {
      if (store.locked) throw lockedError();
      store.locked = true;
      return async () => {
        store.locked = false;
      };
    },
  };
  return store;
}
