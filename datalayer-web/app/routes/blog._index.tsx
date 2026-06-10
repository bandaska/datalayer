import { Link, useLoaderData } from 'react-router';
import type { MetaFunction } from 'react-router';
import { getAll } from '~/lib/articles.server';
import { formatDate, perex } from '~/lib/text';

export const meta: MetaFunction = () => [
  { title: 'Blog | datalayer.cz' },
  {
    name: 'description',
    content: 'Technické návody, strategie měření a novinky o GA4 a Server-Side GTM.',
  },
];

export async function loader() {
  return { posts: await getAll() };
}

export default function BlogIndex() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <>
      <header className="article-hero text-center">
        <div className="container">
          <div className="article-container mx-auto">
            <div className="article-meta mb-3">
              <span className="text-uppercase tracking-wider">Blog &amp; Case Studies</span>
            </div>
            <h1 className="article-title">Nejnovější poznatky ze světa dat</h1>
            <p className="article-perex mx-auto">
              Technické návody, strategie měření a novinky o GA4 a Server-Side GTM. Sdílíme to, co
              sami denně řešíme na projektech.
            </p>
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="col-md-6 col-lg-4 d-flex align-items-stretch"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="card article-card h-100 text-decoration-none d-flex flex-column"
                >
                  <div className="card-body p-4 d-flex flex-column flex-grow-1">
                    <div className="article-card-meta mb-3">
                      <span className="text-cyan">
                        <i className="far fa-calendar-alt me-1" /> {formatDate(post.date)}
                      </span>
                      <span className="ms-3 text-muted">
                        <i className="far fa-user me-1" /> {post.author}
                      </span>
                    </div>
                    <h3 className="article-card-title mb-3">{post.title}</h3>
                    <p className="article-card-text">{perex(post.content, 150)}</p>
                  </div>
                  <div className="card-footer p-4 pt-0 border-0 bg-transparent mt-auto">
                    <div className="border-top border-secondary pt-3">
                      <span className="btn-link-cyan">
                        Číst článek <i className="fas fa-arrow-right ms-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
