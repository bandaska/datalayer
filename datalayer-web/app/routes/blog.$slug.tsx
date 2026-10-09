import { useLoaderData, useRouteLoaderData } from 'react-router';
import { DEFAULT_TEXTS } from '~/content/defaults/texts';
import type { RootData } from '~/lib/rootData';
import type { LinksFunction, LoaderFunctionArgs, MetaFunction } from 'react-router';
import hljsStylesHref from 'highlight.js/styles/atom-one-dark.css?url';
import { ArticleContent } from '~/components/ArticleContent';
import { ContactBlock } from '~/components/ContactBlock';
import { Breadcrumbs } from '~/components/landing/LandingPage';
import { getBySlug } from '~/lib/articles.server';
import { cleanHtml } from '~/lib/sanitize.server';
import { ORGANIZATION_ID, breadcrumbLd, seoMeta } from '~/lib/seo';
import { absoluteUrl } from '~/lib/site';
import { formatDate, perex } from '~/lib/text';

export const handle = { hasContact: true };

// Styl zvýraznění kódu jen na stránce článku (ne na celém webu).
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: hljsStylesHref }];

export async function loader({ params }: LoaderFunctionArgs) {
  const article = await getBySlug(params.slug!);
  if (!article) {
    throw new Response('Článek neexistuje', { status: 404 });
  }
  return {
    article: {
      ...article,
      description: article.description || perex(article.content, 160),
      content: cleanHtml(article.content),
    },
  };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: 'Článek nenalezen | datalayer.cz' }];
  const { article } = data;
  const path = `/blog/${article.slug}`;
  const crumbs = [
    { name: 'Úvod', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: article.title, path },
  ];
  return seoMeta({
    title: `${article.title} | datalayer.cz`,
    description: article.description,
    path,
    type: 'article',
    jsonLd: [
      breadcrumbLd(crumbs),
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.description,
        url: absoluteUrl(path),
        mainEntityOfPage: absoluteUrl(path),
        datePublished: article.date,
        dateModified: article.updatedAt ?? article.date,
        inLanguage: 'cs-CZ',
        author: { '@type': 'Person', name: article.author },
        publisher: { '@id': ORGANIZATION_ID },
      },
    ],
  });
};

export default function BlogDetail() {
  const { article } = useLoaderData<typeof loader>();
  const root = useRouteLoaderData('root') as RootData | undefined;
  const t = root?.texts.blog ?? DEFAULT_TEXTS.blog;
  const crumbs = [
    { name: 'Úvod', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: article.title, path: `/blog/${article.slug}` },
  ];

  return (
    <>
      <header className="article-hero">
        <div className="container">
          <div className="article-container">
            <Breadcrumbs crumbs={crumbs} />
            <div className="article-meta">
              <span className="me-3">
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </span>
              <span className="me-3">{article.author}</span>
              {article.updatedAt && article.updatedAt.slice(0, 10) !== article.date.slice(0, 10) ? (
                <span className="me-3">
                  aktualizováno <time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time>
                </span>
              ) : null}
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

      <ContactBlock formId="blog" title={t.ctaTitle} lead={t.ctaLead} placeholder={t.ctaPlaceholder} compact />
    </>
  );
}
