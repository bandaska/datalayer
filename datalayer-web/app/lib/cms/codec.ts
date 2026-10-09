import { Timestamp } from '@google-cloud/firestore';
import type { PageContent } from '~/content/schema';

// Firestore neumí pole přímo v poli – řádky tabulky (string[][]) by zápis
// odmítl („Property array contains an invalid nested entity“). Při zápisu
// proto vnořené pole zabalíme do mapy { cells: […] } a při čtení rozbalíme.
// Převod je obecný, platí pro stránky, menu i texty.

const KEY = 'cells';

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && Object.getPrototypeOf(v) === Object.prototype;
}

function isWrapped(v: unknown): v is { cells: unknown[] } {
  return isPlainObject(v) && Object.keys(v).length === 1 && Array.isArray(v[KEY]);
}

/** Data pro zápis do Firestore: pole v poli → { cells: […] }. */
export function encodeNested(value: unknown): unknown {
  if (Array.isArray(value)) return value.map((v) => (Array.isArray(v) ? { [KEY]: encodeNested(v) } : encodeNested(v)));
  if (isPlainObject(value)) return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, encodeNested(v)]));
  return value;
}

/** Data přečtená z Firestore: { cells: […] } v poli → pole. Starší data bez obalu projdou beze změny. */
export function decodeNested(value: unknown): unknown {
  if (Array.isArray(value)) return value.map((v) => (isWrapped(v) ? decodeNested(v[KEY]) : decodeNested(v)));
  if (isPlainObject(value)) return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, decodeNested(v)]));
  return value;
}

/** Dokument stránky pro kolekci `pages` (uložení v editoru, import migrací). */
export function pageToDoc(page: PageContent, by: string, now: Timestamp = Timestamp.now()): Record<string, unknown> {
  return { ...(encodeNested(page) as Record<string, unknown>), updatedAt: now, updatedBy: by };
}
