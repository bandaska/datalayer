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

function toPage(
  doc: FirebaseFirestore.DocumentSnapshot | FirebaseFirestore.QueryDocumentSnapshot,
): Page {
  const d = doc.data() as Record<string, unknown>;
  return {
    slug: doc.id,
    title: (d.title as string) ?? '',
    content: (d.content as string) ?? '',
    perex: (d.perex as string) || undefined,
  };
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  const doc = await collection().doc(slug).get();
  return doc.exists ? toPage(doc) : null;
}

export async function getAllPages(): Promise<Page[]> {
  const snap = await collection().orderBy('slug').get();
  return snap.docs.map(toPage);
}

export type PageInput = {
  slug: string;
  title: string;
  perex: string;
  content: string;
};

export async function pageSlugExists(slug: string): Promise<boolean> {
  const doc = await collection().doc(slug).get();
  return doc.exists;
}

export async function createPage(input: PageInput): Promise<void> {
  await collection().doc(input.slug).create({
    slug: input.slug,
    title: input.title,
    perex: input.perex,
    content: input.content,
  });
}

export async function updatePage(
  slug: string,
  input: Omit<PageInput, 'slug'>,
): Promise<void> {
  await collection().doc(slug).set(
    { title: input.title, perex: input.perex, content: input.content },
    { merge: true },
  );
}

export async function deletePage(slug: string): Promise<void> {
  await collection().doc(slug).delete();
}
