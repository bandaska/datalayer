import { Timestamp } from '@google-cloud/firestore';
import { firestore } from './firestore.server';

// Obsah blogu z Firestore kolekce `articles`. Slug = ID dokumentu.
// Ekvivalent původní App\Model\ArticleService.

export type Article = {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string; // ISO string – serializovatelné do loaderu
  /** Datum poslední úpravy (ISO) – `dateModified` ve strukturovaných datech. */
  updatedAt?: string;
  /** Meta popis (140–160 znaků); prázdný = vezme se začátek textu. */
  description: string;
  content: string;
};

const collection = () => firestore.collection('articles');

function toEntity(
  doc: FirebaseFirestore.DocumentSnapshot | FirebaseFirestore.QueryDocumentSnapshot,
): Article {
  const d = doc.data() as Record<string, unknown>;
  const raw = d.date;
  const date =
    raw instanceof Timestamp ? raw.toDate() : new Date((raw as string) ?? Date.now());
  const updated = d.updatedAt;
  return {
    id: doc.id,
    title: (d.title as string) ?? '',
    slug: (d.slug as string) ?? doc.id,
    author: (d.author as string) ?? '',
    date: date.toISOString(),
    updatedAt: updated instanceof Timestamp ? updated.toDate().toISOString() : undefined,
    description: (d.description as string) ?? '',
    content: (d.content as string) ?? '',
  };
}

export async function getAll(): Promise<Article[]> {
  const snap = await collection().orderBy('date', 'desc').get();
  return snap.docs.map(toEntity);
}

export async function getBySlug(slug: string): Promise<Article | null> {
  const doc = await collection().doc(slug).get();
  return doc.exists ? toEntity(doc) : null;
}

export type ArticleInput = {
  slug: string;
  title: string;
  author: string;
  date: string; // 'YYYY-MM-DD' nebo ISO
  description: string;
  content: string;
};

/** Ze zadaných slugů vrátí ty, které na blogu existují (pro odkazy „Do hloubky“). */
export async function existingSlugs(slugs: string[]): Promise<string[]> {
  const unique = [...new Set(slugs)].filter(Boolean);
  if (!unique.length) return [];
  try {
    const snaps = await firestore.getAll(...unique.map((s) => collection().doc(s)));
    return snaps.filter((s) => s.exists).map((s) => s.id);
  } catch (err) {
    console.error('články: kontrola existence selhala', err);
    return [];
  }
}

export async function slugExists(slug: string): Promise<boolean> {
  const doc = await collection().doc(slug).get();
  return doc.exists;
}

/** Vytvoří článek. Slug = ID dokumentu (musí být unikátní). */
export async function createArticle(input: ArticleInput): Promise<void> {
  await collection().doc(input.slug).create({
    slug: input.slug,
    title: input.title,
    author: input.author,
    date: Timestamp.fromDate(new Date(input.date)),
    description: input.description,
    content: input.content,
    updatedAt: Timestamp.now(),
  });
}

/** Aktualizuje existující článek (slug je neměnný). */
export async function updateArticle(
  slug: string,
  input: Omit<ArticleInput, 'slug'>,
): Promise<void> {
  await collection().doc(slug).set(
    {
      title: input.title,
      author: input.author,
      date: Timestamp.fromDate(new Date(input.date)),
      description: input.description,
      content: input.content,
      updatedAt: Timestamp.now(),
    },
    { merge: true },
  );
}

export async function deleteArticle(slug: string): Promise<void> {
  await collection().doc(slug).delete();
}
