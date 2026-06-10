import { db } from './db.server';

// Ekvivalent původní App\Model\ArticleService.

export type Article = {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string; // ISO string – serializovatelné do loaderu
  content: string;
};

type Row = {
  id: number;
  title: string;
  slug: string;
  date: Date;
  content: string;
  author: { name: string } | null;
};

function toEntity(row: Row): Article {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    author: row.author?.name ?? '',
    date: row.date.toISOString(),
    content: row.content,
  };
}

export async function getAll(): Promise<Article[]> {
  const rows = await db.article.findMany({
    orderBy: { date: 'desc' },
    include: { author: { select: { name: true } } },
  });
  return rows.map(toEntity);
}

export async function getBySlug(slug: string): Promise<Article | null> {
  const row = await db.article.findUnique({
    where: { slug },
    include: { author: { select: { name: true } } },
  });
  return row ? toEntity(row) : null;
}
