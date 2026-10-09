import { Timestamp } from '@google-cloud/firestore';
import { DEFAULT_PAGES } from '~/content/defaults';
import { pageSchema, type PageInput } from '~/content/schema';
import { pageToDoc } from '~/lib/cms/codec';
import { pageIdFromPath } from '~/lib/cms/ids';
import { sanitizePage } from '~/lib/cms/sanitize.server';
import type { MigrationContext } from './types';

// Pomocné funkce pro časté migrace obsahu (import článků, úpravy textů).
// Všechny jsou idempotentní – opakovaný běh nic nezmění.

export type ArticleImport = {
  slug: string;
  title: string;
  author: string;
  /** Datum publikace `YYYY-MM-DD`. */
  date: string;
  /** Meta popis (140–160 znaků). */
  description: string;
  /** HTML obsahu (bloky jako v editoru: code-container, infobox…). */
  content: string;
};

/**
 * Založí článek, pokud ještě neexistuje. Existující článek nepřepisuje
 * (mohl ho mezitím někdo upravit v administraci), pokud není `overwrite`.
 * Vrací `created` / `updated` / `skipped`.
 */
export async function importArticle(
  ctx: MigrationContext,
  article: ArticleImport,
  options: { overwrite?: boolean } = {},
): Promise<'created' | 'updated' | 'skipped'> {
  if (!/^[a-z0-9-]+$/.test(article.slug)) throw new Error(`Neplatný slug článku: ${article.slug}`);
  const ref = ctx.firestore().collection('articles').doc(article.slug);
  const snap = await ref.get();
  if (snap.exists && !options.overwrite) return 'skipped';
  await ref.set(
    {
      slug: article.slug,
      title: article.title,
      author: article.author,
      date: Timestamp.fromDate(new Date(article.date)),
      description: article.description,
      content: article.content,
      updatedAt: Timestamp.now(),
    },
    { merge: true },
  );
  return snap.exists ? 'updated' : 'created';
}

/**
 * Založí stránku webu (kolekce `pages`, docs/cms.md), pokud ještě neexistuje.
 * Obsah projde schématem a čištěním HTML jako při uložení v administraci.
 * Existující stránku nepřepisuje (mohl ji mezitím někdo upravit), pokud
 * není `overwrite`. Vrací `created` / `updated` / `skipped`.
 */
export async function importPage(
  ctx: MigrationContext,
  input: PageInput,
  options: { overwrite?: boolean } = {},
): Promise<'created' | 'updated' | 'skipped'> {
  const page = sanitizePage(pageSchema.parse(input));
  const ref = ctx.firestore().collection('pages').doc(pageIdFromPath(page.path));
  const snap = await ref.get();
  if (snap.exists && !options.overwrite) return 'skipped';
  await ref.set(pageToDoc(page, 'migrace'));
  return snap.exists ? 'updated' : 'created';
}

/**
 * Nahradí v poli dokumentu přesné úseky textu (jen ty, které v něm ještě
 * jsou). Vrací počet provedených náhrad.
 */
export function replaceAll(text: string, replacements: [from: string, to: string][]): { text: string; count: number } {
  let out = text;
  let count = 0;
  for (const [from, to] of replacements) {
    if (from && out.includes(from)) {
      out = out.split(from).join(to);
      count++;
    }
  }
  return { text: out, count };
}

/** Porovnatelný tvar dokumentu: bez metadat, klíče seřazené, bez prázdných hodnot (Firestore je neukládá). */
export function comparable(doc: Record<string, unknown>): string {
  const norm = (v: unknown): unknown => {
    if (Array.isArray(v)) return v.map(norm);
    if (v instanceof Timestamp) return v.toMillis();
    if (typeof v === 'object' && v !== null) {
      return Object.fromEntries(
        Object.entries(v)
          .filter(([, x]) => x !== undefined)
          .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
          .map(([k, x]) => [k, norm(x)]),
      );
    }
    return v;
  };
  const { updatedAt: _at, updatedBy: _by, ...content } = doc;
  return JSON.stringify(norm(content));
}

/**
 * Přepíše výchozí stránky v databázi zněním z kódu (app/content/defaults), pokud se
 * liší. Původní dokument předtím uloží do `pages_backup/<id>@<migrationId>`, stav
 * Zveřejněná a noindex převezme z databáze, smazanou stránku znovu nezaloží.
 * Idempotentní – shodnou stránku přeskočí. Vrací počty pro souhrn migrace.
 */
export async function syncPagesWithDefaults(
  ctx: MigrationContext,
  migrationId: string,
): Promise<{ updated: number; edited: number; same: number; missing: string[] }> {
  const db = ctx.firestore();
  const now = Timestamp.now();
  const result = { updated: 0, edited: 0, same: 0, missing: [] as string[] };
  for (const input of DEFAULT_PAGES) {
    const id = pageIdFromPath(input.path);
    const ref = db.collection('pages').doc(id);
    const snap = await ref.get();
    const current = snap.exists ? (snap.data() ?? {}) : null;
    if (!current || !current.hero) {
      result.missing.push(input.path || '(homepage)');
      continue;
    }
    const page = sanitizePage(
      pageSchema.parse({
        ...input,
        published: typeof current.published === 'boolean' ? current.published : true,
        noindex: typeof current.noindex === 'boolean' ? current.noindex : (input.noindex ?? false),
      }),
    );
    const next = pageToDoc(page, 'migrace', now);
    if (comparable(current) === comparable(next)) {
      result.same++;
      continue;
    }
    const backup = db.collection('pages_backup').doc(`${id}@${migrationId}`);
    if (!(await backup.get()).exists) await backup.set({ ...current, backedUpAt: now, backedUpBy: migrationId });
    await ref.set(next);
    result.updated++;
    if (current.updatedBy !== 'migrace') result.edited++;
  }
  return result;
}
