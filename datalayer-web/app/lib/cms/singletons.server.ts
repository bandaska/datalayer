import { Timestamp } from '@google-cloud/firestore';
import type { ZodType, ZodTypeDef } from 'zod';
import { DEFAULT_NAVIGATION, DEFAULT_TEXTS } from '~/content/defaults';
import { navigationSchema, textsSchema, type Navigation, type SiteTexts } from '~/content/schema';
import { firestore } from '../firestore.server';
import { decodeNested, encodeNested } from './codec';
import { PageError } from './pages.server';
import { sanitizeTexts } from './sanitize.server';

// Navigace (`content/navigation`) a texty webu (`content/texts`) – jeden
// dokument každý. Čte je každá stránka, proto krátká cache v paměti instance.
// Chybějící nebo neplatný dokument = výchozí obsah z kódu, web běží dál.

type Store<T> = {
  get(options?: { fresh?: boolean }): Promise<T & { updatedAt?: string; updatedBy?: string }>;
  save(input: unknown, by: string): Promise<T>;
};

const CACHE_MS = 30_000;

function singleton<T extends object>(
  docId: string,
  // vstup může mít pole s výchozí hodnotou (starší dokumenty bez nových polí)
  schema: ZodType<T, ZodTypeDef, unknown>,
  fallback: T,
  clean: (v: T) => T = (v) => v,
): Store<T> {
  let cache: { value: T & { updatedAt?: string; updatedBy?: string }; at: number } | null = null;
  const ref = () => firestore.collection('content').doc(docId);

  return {
    async get(options = {}) {
      if (!options.fresh && cache && Date.now() - cache.at < CACHE_MS) return cache.value;
      try {
        const snap = await ref().get();
        const data = snap.data();
        if (!data) {
          cache = { value: { ...fallback }, at: Date.now() };
          return cache.value;
        }
        const parsed = schema.safeParse(decodeNested(data));
        if (!parsed.success) {
          console.error(`cms: content/${docId} neodpovídá schématu`, parsed.error.issues.slice(0, 5));
          return cache?.value ?? { ...fallback };
        }
        const updatedAt = data.updatedAt instanceof Timestamp ? data.updatedAt.toDate().toISOString() : undefined;
        cache = { value: { ...parsed.data, updatedAt, updatedBy: typeof data.updatedBy === 'string' ? data.updatedBy : undefined }, at: Date.now() };
        return cache.value;
      } catch (err) {
        console.error(`cms: čtení content/${docId} selhalo`, err);
        return cache?.value ?? { ...fallback };
      }
    },

    async save(input, by) {
      const parsed = schema.safeParse(input);
      if (!parsed.success) {
        throw new PageError(
          'Obsah obsahuje chyby',
          parsed.error.issues.map((i) => ({ path: i.path.join('.'), message: i.message })),
        );
      }
      const value = clean(parsed.data);
      await ref().set({ ...(encodeNested(value) as object), updatedAt: Timestamp.now(), updatedBy: by });
      cache = null;
      return value;
    },
  };
}

export const navigationStore = singleton<Navigation>('navigation', navigationSchema, DEFAULT_NAVIGATION);
export const textsStore = singleton<SiteTexts>('texts', textsSchema, DEFAULT_TEXTS, sanitizeTexts);

export const getNavigation = () => navigationStore.get();
export const getTexts = () => textsStore.get();
