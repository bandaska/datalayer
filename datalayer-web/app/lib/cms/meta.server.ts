import { firestore } from '../firestore.server';

// Stav převodu obsahu do administrace: dokument `content/meta`.
// Dokud migrace obsah nenaimportuje (`initialized: true`), web zobrazuje výchozí
// obsah z kódu (app/content/defaults). Potom platí jen obsah z Firestore –
// smazaná stránka se tak už neobjeví znovu.

let initialized = false;
let checkedAt = 0;

export async function isCmsInitialized(): Promise<boolean> {
  if (initialized) return true;
  if (Date.now() - checkedAt < 30_000) return false;
  try {
    const snap = await firestore.collection('content').doc('meta').get();
    initialized = snap.get('initialized') === true;
  } catch (err) {
    console.error('cms: čtení content/meta selhalo', err);
  }
  checkedAt = Date.now();
  return initialized;
}

/** Jen pro testy. */
export function resetCmsMetaCache(): void {
  initialized = false;
  checkedAt = 0;
}
