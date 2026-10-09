import type { Firestore } from '@google-cloud/firestore';

// Kontrakt migrací (docs/migrace.md). Vzor: visibilitycz/reporting,
// src/migrations/types.ts – tady jen Firestore, protože web jinou databázi nemá.

/** Úložiště, na která migrace sahá – pro přehled v administraci a v logu. */
export type MigrationTarget = 'firestore';

/** Co migrace dostane do ruky. Klient je týž singleton jako ve zbytku aplikace. */
export interface MigrationContext {
  firestore(): Firestore;
  /** Záznam do logu běhu (Cloud Logging) – s id migrace. */
  log(message: string, meta?: Record<string, unknown>): void;
}

/**
 * Připravená změna dat nebo struktury ve Firestore (nastavení, import článků,
 * úprava obsahu…).
 *
 * `run` **musí být idempotentní**: `set(…, { merge: true })`, nebo přečíst
 * a zapsat jen chybějící / změněné; dávky po nejvýš 500 zápisech. Evidence
 * aplikovaných migrací slouží k přeskakování hotových a k přehledu, ne jako
 * jediná pojistka – běh může spadnout uprostřed a pak se pouští znovu.
 */
export interface Migration {
  /** `YYYYMMDD_nazev` – shodné s názvem souboru v `app/migrations/scripts/`. */
  id: string;
  /** Česky, co změna dělá a proč – zobrazuje se v administraci. */
  description: string;
  targets: MigrationTarget[];
  /** Provede změnu. Vrácený text je shrnutí výsledku (zobrazí se v administraci a uloží do evidence). */
  run(ctx: MigrationContext): Promise<string | void>;
}
