import { useLoaderData, useRouteLoaderData } from 'react-router';
import { DEFAULT_TEXTS } from '~/content/defaults/texts';
import type { RootData } from '~/lib/rootData';
import type { LoaderFunctionArgs, MetaFunction } from 'react-router';
import { ArticleContent } from '~/components/ArticleContent';
import { ContactBlock } from '~/components/ContactBlock';
import { Breadcrumbs } from '~/components/landing/LandingPage';
import { articleModified } from '~/lib/articleDates';
import { getBySlug } from '~/lib/articles.server';
import { highlightCodeBlocks } from '~/lib/highlight.server';
import { cleanHtml } from '~/lib/sanitize.server';
import { ORGANIZATION_ID, breadcrumbLd, seoMeta } from '~/lib/seo';
import { SITE_NAME, absoluteUrl } from '~/lib/site';
import { formatDate, perex } from '~/lib/text';

export const handle = { hasContact: true };

/** Starší boxy „Tip“ mají nadpis v <h5> – zobrazit ho jako odstavec, ať nadpisy nepřeskakují úrovně. */
function infoboxTitles(html: string): string {
  return html.replace(/(<div class="infobox-content">\s*)<h5>([\s\S]*?)<\/h5>/g, '$1<p class="infobox-title"><strong>$2</strong></p>');
}

export async function loader({ params }: LoaderFunctionArgs) {
  const article = await getBySlug(params.slug!);
  if (!article) {
    throw new Response('Článek neexistuje', { status: 404 });
  }
  return {
    article: {
      ...article,
      description: article.description || perex(article.content, 160),
      // kód obarví server, prohlížeč highlight.js nestahuje; nadpis boxu „Tip“ jako
      // odstavec (h5 by porušil pořadí nadpisů)
      content: highlightCodeBlocks(infoboxTitles(cleanHtml(article.content))),
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
    noindex: article.noindex,
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
        dateModified: articleModified(article),
        inLanguage: 'cs-CZ',
        // autor „datalayer.cz“ = organizace (web zatím nemá kontaktní osobu), jinak osoba
        author: article.author === SITE_NAME ? { '@type': 'Organization', '@id': ORGANIZATION_ID, name: SITE_NAME } : { '@type': 'Person', name: article.author },
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
              {/* „aktualizováno“ jen po podstatné změně textu, kterou zadá editor – ne po každém uložení */}
              {articleModified(article) !== article.date && article.modifiedDate ? (
                <span className="me-3">
                  aktualizováno <time dateTime={article.modifiedDate}>{formatDate(article.modifiedDate)}</time>
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
