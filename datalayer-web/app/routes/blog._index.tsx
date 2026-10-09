import { Link, useLoaderData, useRouteLoaderData } from 'react-router';
import type { MetaFunction } from 'react-router';
import { DEFAULT_TEXTS } from '~/content/defaults/texts';
import type { RootData } from '~/lib/rootData';
import { ContactBlock } from '~/components/ContactBlock';
import { Breadcrumbs } from '~/components/landing/LandingPage';
import { getAll } from '~/lib/articles.server';
import { breadcrumbLd, seoMeta } from '~/lib/seo';
import { absoluteUrl } from '~/lib/site';
import { formatDate, perex } from '~/lib/text';

export const handle = { hasContact: true };

const CRUMBS = [
  { name: 'Úvod', path: '/' },
  { name: 'Blog', path: '/blog' },
];

export async function loader() {
  const posts = (await getAll()).map((p) => ({
    slug: p.slug,
    title: p.title,
    author: p.author,
    date: p.date,
    perex: p.description || perex(p.content, 150),
  }));
  return { posts };
}

export const meta: MetaFunction<typeof loader> = ({ data, matches }) => {
  const t = (matches.find((m) => m.id === 'root')?.data as RootData | undefined)?.texts.blog ?? DEFAULT_TEXTS.blog;
  return seoMeta({
    title: t.seoTitle,
    description: t.seoDescription,
    path: '/blog',
    jsonLd: [
      breadcrumbLd(CRUMBS),
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Blog datalayer.cz',
        url: absoluteUrl('/blog'),
        inLanguage: 'cs-CZ',
        blogPost: (data?.posts ?? []).map((p) => ({
          '@type': 'BlogPosting',
          headline: p.title,
          url: absoluteUrl(`/blog/${p.slug}`),
          datePublished: p.date,
        })),
      },
    ],
  });
};

export default function BlogIndex() {
  const { posts } = useLoaderData<typeof loader>();
  const root = useRouteLoaderData('root') as RootData | undefined;
  const t = root?.texts.blog ?? DEFAULT_TEXTS.blog;

  return (
    <>
      <header className="article-hero">
        <div className="container">
          <div className="article-container">
            <Breadcrumbs crumbs={CRUMBS} />
            {t.eyebrow ? <p className="eyebrow">{t.eyebrow}</p> : null}
            <h1 className="article-title">{t.title}</h1>
            {t.perex ? <p className="article-perex">{t.perex}</p> : null}
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          {posts.length === 0 ? <p className="text-muted">{t.empty}</p> : null}
          <div className="row g-4">
            {posts.map((post) => (
              <div key={post.slug} className="col-md-6 col-lg-4 d-flex align-items-stretch">
                <Link to={`/blog/${post.slug}`} className="card article-card h-100 text-decoration-none d-flex flex-column">
                  <div className="card-body p-4 d-flex flex-column flex-grow-1">
                    <div className="article-card-meta mb-3">
                      <span className="text-cyan">{formatDate(post.date)}</span>
                      {/* oddělovač, aby čtečky a vyhledávače nečetly datum a autora slitě */}
                      <span className="visually-hidden">, </span>
                      <span className="ms-3 text-muted">{post.author}</span>
                    </div>
                    <h2 className="article-card-title mb-3">{post.title}</h2>
                    <p className="article-card-text">{post.perex}</p>
                  </div>
                  <div className="card-footer p-4 pt-0 border-0 bg-transparent mt-auto">
                    <div className="border-top border-secondary pt-3">
                      <span className="btn-link-cyan">{t.readMore}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBlock formId="blog" title={t.ctaTitle} lead={t.ctaLead} placeholder={t.ctaPlaceholder} compact />
    </>
  );
}
