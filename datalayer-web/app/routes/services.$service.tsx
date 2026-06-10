import { Link, useLoaderData } from 'react-router';
import type { LoaderFunctionArgs, MetaFunction } from 'react-router';
import { services } from '~/lib/services';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: 'Služba nenalezena | datalayer.cz' }];
  return [
    { title: `${data.service.title} | datalayer.cz` },
    { name: 'description', content: data.service.perex },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const service = services[params.service!];
  if (!service) {
    throw new Response('Služba nenalezena', { status: 404 });
  }
  return { service };
}

export default function ServiceDetail() {
  const { service } = useLoaderData<typeof loader>();

  return (
    <>
      <header className="article-hero">
        <div className="container">
          <div className="article-container">
            <div className="article-meta">
              <i className={`${service.icon} me-2`} /> Služba
            </div>
            <h1 className="article-title">{service.title}</h1>
            <p className="article-perex">{service.perex}</p>
          </div>
        </div>
      </header>

      <section className="article-content">
        <div className="container article-container">
          {service.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="mt-4">
            <a href="#contact-form" className="btn btn-cta">
              [ Konzultovat projekt ]
            </a>{' '}
            <Link to="/sluzby" className="btn btn-outline-custom">
              Zpět na služby
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
