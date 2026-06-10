import { firestore } from './firestore.server';

// Landing pages z Firestore kolekce `pages`. Slug = ID dokumentu
// (může obsahovat i víceúrovňovou cestu, viz routes/$.tsx).

export type Page = {
  slug: string;
  title: string;
  content: string; // HTML
  perex?: string;
};

const collection = () => firestore.collection('pages');

export async function getPageBySlug(slug: string): Promise<Page | null> {
  const doc = await collection().doc(slug).get();
  if (!doc.exists) return null;
  const d = doc.data() as Record<string, unknown>;
  return {
    slug: doc.id,
    title: (d.title as string) ?? '',
    content: (d.content as string) ?? '',
    perex: d.perex as string | undefined,
  };
}
