import { Link, useLoaderData } from 'react-router';
import type { MetaFunction } from 'react-router';
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

export const meta: MetaFunction<typeof loader> = ({ data }) =>
  seoMeta({
    title: 'Blog o měření, GA4 a server-side trackingu | datalayer.cz',
    description:
      'Návody k GA4, Google Tag Manageru, Consent Mode v2, server-side trackingu a BigQuery. S diagramy, kódem a odkazy na dokumentaci, bez marketingových zkratek.',
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

export default function BlogIndex() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <>
      <header className="article-hero">
        <div className="container">
          <div className="article-container">
            <Breadcrumbs crumbs={CRUMBS} />
            <p className="eyebrow">[ Blog ]</p>
            <h1 className="article-title">Vysvětlujeme, jak měření doopravdy funguje</h1>
            <p className="article-perex">
              Návody k GA4, Google Tag Manageru, Consent Mode v2, server-side trackingu a BigQuery. Píšeme
              o tom, co sami řešíme na projektech, s diagramy, kódem a odkazy na dokumentaci.
            </p>
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          {posts.length === 0 ? <p className="text-muted">První články právě připravujeme.</p> : null}
          <div className="row g-4">
            {posts.map((post) => (
              <div key={post.slug} className="col-md-6 col-lg-4 d-flex align-items-stretch">
                <Link to={`/blog/${post.slug}`} className="card article-card h-100 text-decoration-none d-flex flex-column">
                  <div className="card-body p-4 d-flex flex-column flex-grow-1">
                    <div className="article-card-meta mb-3">
                      <span className="text-cyan">{formatDate(post.date)}</span>
                      <span className="ms-3 text-muted">{post.author}</span>
                    </div>
                    <h2 className="article-card-title mb-3">{post.title}</h2>
                    <p className="article-card-text">{post.perex}</p>
                  </div>
                  <div className="card-footer p-4 pt-0 border-0 bg-transparent mt-auto">
                    <div className="border-top border-secondary pt-3">
                      <span className="btn-link-cyan">Číst článek →</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBlock
        formId="blog"
        title="Řešíte totéž u sebe?"
        lead="Napište, na čem jste se zasekli. Ozveme se do jednoho pracovního dne a řekneme, kde začít."
        placeholder="Napište, na čem jste se zasekli…"
        compact
      />
    </>
  );
}
