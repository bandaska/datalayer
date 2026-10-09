import { Timestamp } from '@google-cloud/firestore';
import { DEFAULT_PAGES } from '~/content/defaults';
import { pageSchema } from '~/content/schema';
import { decodeNested, encodeNested, pageToDoc } from '~/lib/cms/codec';
import { pathFromPageId } from '~/lib/cms/ids';
import { sanitizePage } from '~/lib/cms/sanitize.server';
import { SITE_NAME } from '~/lib/site';
import type { Migration } from '../types';

const ID = '20261009_bez_kontaktni_osoby';

/** Zmínka o dosavadní kontaktní osobě – příjmení v kterémkoli pádě nebo samotné křestní jméno. */
export const PERSON_MENTION = /Novotn|\bVít(?:a|u|ovi|em)?(?=[\s.,;:!?)“"]|$)/u;

/** Obsah dokumentu bez metadat (kdo a kdy ho uložil). */
function content(doc: Record<string, unknown>): Record<string, unknown> {
  const { updatedAt: _at, updatedBy: _by, ...rest } = doc;
  return rest;
}

/** Cesty v datech, kde zmínka zůstala (pro souhrn migrace). */
function mentions(value: unknown, path = ''): string[] {
  if (typeof value === 'string') return PERSON_MENTION.test(value) ? [path || '(text)'] : [];
  if (Array.isArray(value)) return value.flatMap((v, i) => mentions(v, `${path}[${i}]`));
  if (value && typeof value === 'object' && !(value instanceof Timestamp)) {
    return Object.entries(value).flatMap(([k, v]) => mentions(v, path ? `${path}.${k}` : k));
  }
  return [];
}

/**
 * Web zatím nemá obličej ani kontaktní osobu (rozhodnutí klienta, 9. října 2026):
 *
 * - `content/texts` – vymaže kontaktní osobu u formuláře (jméno, doplněk, fotka),
 *   kontaktní blok pak kartu osoby nevykreslí.
 * - `pages/<id>` – výchozí stránku, která osobu zmiňuje (O nás, Kontakt, Jak
 *   pracujeme), přepíše novým zněním z kódu; původní dokument uloží do
 *   `pages_backup/<id>@20261009_bez_kontaktni_osoby`, stav zveřejnění nechá.
 *   Stránku bez výchozího znění jen nahlásí – tu upraví editor v administraci.
 * - `articles/<slug>` – autora s tímto jménem nahradí „datalayer.cz“; zmínku
 *   v textu článku jen nahlásí.
 * - Menu a patičku jen zkontroluje. Nastavení (provozovatel webu) nemění:
 *   identifikaci provozovatele vyžaduje zákon.
 *
 * Idempotentní: druhý běh nic nezmění.
 */
export const migration: Migration = {
  id: ID,
  description:
    'Web bez kontaktní osoby: z Textů webu vymaže kontaktní osobu u formuláře, stránky se zmínkou o ní (O nás, Kontakt, Jak pracujeme) přepíše novým zněním a původní uloží do kolekce pages_backup, autora článků změní na datalayer.cz. Co samo opravit nejde, vypíše.',
  targets: ['firestore'],
  async run(ctx) {
    const db = ctx.firestore();
    const now = Timestamp.now();
    const by = 'migrace';
    const manual: string[] = [];

    // texty webu: kontaktní osoba u formuláře
    let texts = 'beze změny';
    const textsRef = db.collection('content').doc('texts');
    const textsSnap = await textsRef.get();
    if (textsSnap.exists) {
      const data = decodeNested(textsSnap.data() ?? {}) as { contact?: Record<string, unknown> };
      const contact = data.contact ?? {};
      if (contact.personName || contact.personNote || contact.personPhoto) {
        await textsRef.set(
          { contact: encodeNested({ ...contact, personName: '', personNote: '', personPhoto: '' }), updatedAt: now, updatedBy: by },
          { merge: true },
        );
        texts = 'kontaktní osoba vymazaná';
      }
      const rest = mentions({ ...content(data), contact: { ...contact, personName: '', personNote: '', personPhoto: '' } });
      if (rest.length) manual.push(`texty webu (${rest.join(', ')})`);
    }

    // stránky se zmínkou: výchozí přepsat se zálohou, ostatní nahlásit
    let replaced = 0;
    let edited = 0;
    const pages = await db.collection('pages').get();
    for (const doc of pages.docs) {
      const current = doc.data() as Record<string, unknown>;
      if (!mentions(content(current)).length) continue;
      const path = pathFromPageId(doc.id);
      const input = DEFAULT_PAGES.find((p) => p.path === path);
      if (!input || !current.hero) {
        manual.push(`stránka /${path}`);
        continue;
      }
      const page = sanitizePage(
        pageSchema.parse({
          ...input,
          published: typeof current.published === 'boolean' ? current.published : true,
          noindex: typeof current.noindex === 'boolean' ? current.noindex : (input.noindex ?? false),
        }),
      );
      const next = pageToDoc(page, by, now);
      if (mentions(content(next)).length) {
        manual.push(`stránka /${path}`);
        continue;
      }
      const backup = db.collection('pages_backup').doc(`${doc.id}@${ID}`);
      if (!(await backup.get()).exists) await backup.set({ ...current, backedUpAt: now, backedUpBy: ID });
      await db.collection('pages').doc(doc.id).set(next);
      replaced++;
      if (current.updatedBy !== by) edited++;
    }

    // články: autor a zmínky v textu
    let authors = 0;
    const articles = await db.collection('articles').get();
    for (const doc of articles.docs) {
      const a = doc.data() as Record<string, unknown>;
      if (typeof a.author === 'string' && PERSON_MENTION.test(a.author)) {
        await db.collection('articles').doc(doc.id).set({ author: SITE_NAME }, { merge: true });
        authors++;
      }
      if (mentions({ title: a.title, description: a.description, content: a.content }).length) manual.push(`článek ${doc.id}`);
    }

    // menu a patička: jen kontrola
    const navSnap = await db.collection('content').doc('navigation').get();
    if (navSnap.exists && mentions(content(decodeNested(navSnap.data() ?? {}) as Record<string, unknown>)).length) manual.push('menu a patička');

    ctx.log('web bez kontaktní osoby', { texts, replaced, edited, authors, manual });
    const parts = [`texty webu: ${texts}`, `stránky: ${replaced} přepsaných`];
    if (replaced) parts.push(`původní znění leží v kolekci pages_backup${edited ? ` (${edited} z nich mělo úpravy z administrace)` : ''}`);
    parts.push(`autor článků změněný: ${authors}`);
    parts.push(manual.length ? `zmínku upravte v administraci: ${manual.join(', ')}` : 'jiné zmínky nezůstaly');
    return parts.join('; ');
  },
};
