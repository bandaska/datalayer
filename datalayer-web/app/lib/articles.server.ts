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
  return {
    id: doc.id,
    title: (d.title as string) ?? '',
    slug: (d.slug as string) ?? doc.id,
    author: (d.author as string) ?? '',
    date: date.toISOString(),
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
  content: string;
};

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
    content: input.content,
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
      content: input.content,
    },
    { merge: true },
  );
}

export async function deleteArticle(slug: string): Promise<void> {
  await collection().doc(slug).delete();
}
