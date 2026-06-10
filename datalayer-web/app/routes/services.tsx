import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';
import { services } from '~/lib/services';

export const meta: MetaFunction = () => [
  { title: 'Služby | datalayer.cz' },
  {
    name: 'description',
    content: 'GA4, GTM, Server-Side měření, audity, Data Layer design a BigQuery.',
  },
];

export default function Services() {
  return (
    <>
      <header className="article-hero text-center">
        <div className="container">
          <div className="article-container mx-auto">
            <div className="article-meta mb-3">
              <span className="text-uppercase tracking-wider">Naše služby</span>
            </div>
            <h1 className="article-title">Technická expertíza pro vaše data</h1>
            <p className="article-perex mx-auto">
              Od auditu přes specifikaci datové vrstvy až po server-side měření a export do
              BigQuery.
            </p>
          </div>
        </div>
      </header>

      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row g-4">
            {Object.entries(services).map(([slug, s]) => (
              <div className="col-md-4" key={slug}>
                <Link to={`/sluzby/${slug}`} className="tech-card text-decoration-none">
                  <div className="tech-icon">
                    <i className={s.icon} />
                  </div>
                  <h5>{s.title}</h5>
                  <p className="text-muted small">{s.perex}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
