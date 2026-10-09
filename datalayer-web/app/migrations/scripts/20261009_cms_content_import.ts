import { Timestamp } from '@google-cloud/firestore';
import { DEFAULT_NAVIGATION, DEFAULT_PAGES, DEFAULT_TEXTS } from '~/content/defaults';
import { encodeNested, pageToDoc } from '~/lib/cms/codec';
import { pageIdFromPath } from '~/lib/cms/ids';
import { resetCmsMetaCache } from '~/lib/cms/meta.server';
import { sanitizePage, sanitizeTexts } from '~/lib/cms/sanitize.server';
import type { Migration } from '../types';

/**
 * Přesun obsahu webu z kódu (app/content/defaults) do Firestore, aby šel
 * celý upravovat v administraci (docs/cms.md):
 *
 * - `pages/<id>` – každá výchozí stránka, která v databázi ještě není.
 *   Stránku uloženou v novém editoru nechá být. Starší stránku ze dřívější
 *   administrace se stejnou cestou web dřív nezobrazoval (cestu obsluhovala
 *   vlastní routa) – migrace ji zazálohuje do `pages_backup` a nahradí.
 * - `content/navigation`, `content/texts` – jen když chybí.
 * - `content/meta.initialized = true` – od té chvíle web bere obsah jen
 *   z databáze, výchozí obsah z kódu už nepoužije (smazaná stránka zůstane
 *   smazaná).
 *
 * Idempotentní: druhý běh nic nezmění.
 */
export const migration: Migration = {
  id: '20261009_cms_content_import',
  description:
    'Přesun obsahu webu do administrace: uloží do databáze všechny stránky z kódu – homepage, služby, řešení, jak pracujeme, o nás, kontakt, zásady i cookies – a k nim menu, patičku a texty webu. Co už někdo uložil v administraci, nechá beze změny. Potom web čte obsah jen z administrace.',
  targets: ['firestore'],
  async run(ctx) {
    const db = ctx.firestore();
    const now = Timestamp.now();
    const by = 'migrace';
    let created = 0;
    let kept = 0;
    let replaced = 0;

    for (const page of DEFAULT_PAGES) {
      const id = pageIdFromPath(page.path);
      const ref = db.collection('pages').doc(id);
      const snap = await ref.get();
      if (snap.exists) {
        const data = snap.data() ?? {};
        if (data.hero) {
          kept++;
          continue;
        }
        await db.collection('pages_backup').doc(id).set({ ...data, backedUpAt: now });
        replaced++;
      } else {
        created++;
      }
      await ref.set(pageToDoc(sanitizePage(page), by, now));
    }

    const single = async (docId: string, value: object): Promise<string> => {
      const ref = db.collection('content').doc(docId);
      if ((await ref.get()).exists) return 'beze změny';
      await ref.set({ ...(encodeNested(value) as object), updatedAt: now, updatedBy: by });
      return 'nové';
    };
    const navigation = await single('navigation', DEFAULT_NAVIGATION);
    const texts = await single('texts', sanitizeTexts(DEFAULT_TEXTS));

    await db.collection('content').doc('meta').set({ initialized: true, initializedAt: now }, { merge: true });
    resetCmsMetaCache();
    ctx.log('obsah webu je v databázi', { created, kept, replaced, navigation, texts });

    const parts = [`stránky: ${created} nových, ${kept} beze změny`];
    if (replaced) parts.push(`starší stránky se stejnou cestou: ${replaced}, původní obsah leží v kolekci pages_backup`);
    parts.push(`menu a patička: ${navigation}`, `texty webu: ${texts}`);
    return parts.join('; ');
  },
};
