import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLocation,
  useRouteError,
} from 'react-router';
import type { LinksFunction, MetaFunction } from 'react-router';

import './app.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';

export const meta: MetaFunction = () => [
  { title: 'datalayer.cz' },
  {
    name: 'description',
    content:
      'Stavíme neprůstřelné datové základy. Specializovaná implementace GA4, GTM, Server-Side měření a BigQuery.',
  },
];

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
  },
  {
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  },
  {
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Roboto+Mono:wght@400;500&display=swap',
  },
];

// HubSpot konfigurace se čte z env na serveru a předá se klientovi přes loader.
export function loader() {
  return {
    hubspot: {
      portalId: process.env.HUBSPOT_PORTAL_ID || '147434044',
      formId: process.env.HUBSPOT_FORM_ID || '8aa3bd5d-8122-47d2-ae62-fa002f6691ca',
      region: process.env.HUBSPOT_REGION || 'eu1',
    },
  };
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          defer
        />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App({ loaderData }: { loaderData: ReturnType<typeof loader> }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const hubspot = loaderData.hubspot;

  return (
    <div className={isHome ? 'page-home' : undefined}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ContactForm portalId={hubspot.portalId} formId={hubspot.formId} region={hubspot.region} />
      <Footer />
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  return (
    <div className="page-home">
      <Navbar />
      <main>
        <section className="article-hero text-center">
          <div className="container">
            <h1 className="article-title">{is404 ? '404' : 'Chyba'}</h1>
            <p className="article-perex mx-auto">
              {is404
                ? 'Požadovaná stránka nebyla nalezena.'
                : 'Omlouváme se, došlo k neočekávané chybě.'}
            </p>
            <a href="/" className="btn btn-cta mt-3">
              [ Zpět na úvod ]
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
