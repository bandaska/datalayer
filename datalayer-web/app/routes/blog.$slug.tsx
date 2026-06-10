import { useLoaderData } from 'react-router';
import type { LoaderFunctionArgs, MetaFunction } from 'react-router';
import sanitizeHtml from 'sanitize-html';
import { getBySlug } from '~/lib/articles.server';
import { ArticleContent } from '~/components/ArticleContent';
import { formatDate, perex } from '~/lib/text';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: 'Článek nenalezen | datalayer.cz' }];
  return [
    { title: `${data.article.title} | datalayer.cz` },
    { name: 'description', content: perex(data.article.content, 160) },
  ];
};

// Whitelist tagů a atributů pro obsah článku (původně Latte/HTML v DB).
function cleanHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'img',
      'figure',
      'figcaption',
      'span',
      'button',
      'i',
      'h1',
      'h2',
    ]),
    allowedAttributes: {
      '*': ['class', 'id', 'style'],
      a: ['href', 'target', 'rel'],
      img: ['src', 'alt', 'width', 'height'],
      button: ['type'],
    },
    allowedSchemes: ['http', 'https', 'mailto', 'data'],
  });
}

export async function loader({ params }: LoaderFunctionArgs) {
  const article = await getBySlug(params.slug!);
  if (!article) {
    throw new Response('Článek nebyl nalezen', { status: 404 });
  }
  return { article: { ...article, content: cleanHtml(article.content) } };
}

export default function BlogDetail() {
  const { article } = useLoaderData<typeof loader>();

  return (
    <>
      <header className="article-hero">
        <div className="container">
          <div className="article-container">
            <div className="article-meta">
              <span className="me-3">
                <i className="far fa-calendar-alt me-1" /> {formatDate(article.date)}
              </span>
              <span className="me-3">
                <i className="far fa-user me-1" /> {article.author}
              </span>
            </div>
            <h1 className="article-title">{article.title}</h1>
          </div>
        </div>
      </header>

      <section className="article-content">
        <div className="container article-container">
          <div className="article-body-db">
            <ArticleContent html={article.content} />
          </div>
        </div>
      </section>
    </>
  );
}
