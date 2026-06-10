import { PrismaClient } from '@prisma/client';

// Singleton, aby se při HMR ve vývoji nevytvářelo mnoho připojení.
declare global {
  // eslint-disable-next-line no-var
  var __db__: PrismaClient | undefined;
}

export const db = global.__db__ ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.__db__ = db;
}
