/** Chyba migrací s HTTP stavem pro routy (404 neznámá migrace, 409 souběh). */
export class MigrationError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = 'MigrationError';
  }
}

export function lockedError(): MigrationError {
  return new MigrationError(409, 'Migrace už právě běží, zkuste to za chvíli');
}
