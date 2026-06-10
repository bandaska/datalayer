import { Firestore } from '@google-cloud/firestore';

// Singleton, aby se při HMR ve vývoji nevytvářelo více klientů.
declare global {
  // eslint-disable-next-line no-var
  var __firestore__: Firestore | undefined;
}

export const firestore =
  global.__firestore__ ??
  new Firestore({
    // Na Cloud Run i lokálně (přes `gcloud auth application-default login`)
    // se projectId i přihlášení detekují automaticky (ADC). Lze přebít env.
    // Lokální Firestore emulátor se aktivuje proměnnou FIRESTORE_EMULATOR_HOST.
    projectId: process.env.FIRESTORE_PROJECT_ID || process.env.GOOGLE_CLOUD_PROJECT,
    ignoreUndefinedProperties: true,
  });

if (process.env.NODE_ENV !== 'production') {
  global.__firestore__ = firestore;
}
