import { Timestamp } from '@google-cloud/firestore';
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
