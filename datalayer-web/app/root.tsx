import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  redirect,
  useLocation,
  useRouteError,
  useRouteLoaderData,
} from 'react-router';
import type { LinksFunction, LoaderFunctionArgs, MetaFunction } from 'react-router';

// Fonty hostujeme sami (Inter 400/600/800, Roboto Mono 400) – žádné Google Fonts.
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/800.css';
import '@fontsource/roboto-mono/400.css';
// Bootstrap z balíčku (žádné CDN), vlastní styly až za ním, ať mají přednost.
import bootstrapHref from 'bootstrap/dist/css/bootstrap.min.css?url';
import inter400LatinHref from '@fontsource/inter/files/inter-latin-400-normal.woff2?url';
import inter800LatinHref from '@fontsource/inter/files/inter-latin-800-normal.woff2?url';
import inter800LatinExtHref from '@fontsource/inter/files/inter-latin-ext-800-normal.woff2?url';
import appStylesHref from './app.css?url';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieBar } from './components/CookieBar';
import { PictogramSprite } from './components/Pictograms';
import { consentHeadScript } from './lib/consent';
import { redirectFor } from './lib/redirects';
import type { RootData } from './lib/rootData';
import { getNavigation, getTexts } from './lib/cms/singletons.server';
import { DEFAULT_TEXTS } from './content/defaults/texts';
import { getSettings } from './lib/settings.server';
import { CONTACT_EMAIL } from './lib/site';
import { turnstileSiteKey } from './lib/turnstile.server';

export const meta: MetaFunction = ({ error }) => [
  // chybová stránka má vlastní titulek (jazykový audit, kap. 3.27)
  { title: error ? 'Stránka neexistuje | datalayer.cz' : 'datalayer.cz' },
  {
    name: 'description',
    content: 'Webová analytika a měření pro e-shopy a firmy: GA4, Google Tag Manager, server-side tracking a Consent Mode v2.',
  },
];

export const links: LinksFunction = () => [
  { rel: 'icon', href: '/favicon.ico' },
  // písma nadpisu H1 a textu nad ohybem přednačíst – jinak se H1 překreslí až po
  // načtení písma a LCP se protáhne (vyhodnocení webu, kap. 6.1)
  { rel: 'preload', as: 'font', type: 'font/woff2', href: inter800LatinHref, crossOrigin: 'anonymous' },
  { rel: 'preload', as: 'font', type: 'font/woff2', href: inter800LatinExtHref, crossOrigin: 'anonymous' },
  { rel: 'preload', as: 'font', type: 'font/woff2', href: inter400LatinHref, crossOrigin: 'anonymous' },
  { rel: 'stylesheet', href: bootstrapHref },
  { rel: 'stylesheet', href: appStylesHref },
];

export async function loader({ request }: LoaderFunctionArgs): Promise<RootData> {
  // 301: staré a zrušené URL, velká písmena, koncové lomítko; 302: dočasně skrytý blog.
  const url = new URL(request.url);
  const target = redirectFor(url.pathname, url.search);
  if (target) throw redirect(target.to, target.status);

  const [settings, navigation, texts] = await Promise.all([getSettings(), getNavigation(), getTexts()]);
  // Metadata úprav (kdo a kdy) do prohlížeče neposíláme.
  const { updatedAt: _n, updatedBy: _nb, ...nav } = navigation;
  const { updatedAt: _t, updatedBy: _tb, ...txt } = texts;
  return {
    gtmId: settings.gtmId,
    phone: settings.phone,
    linkedinUrl: settings.linkedinUrl,
    email: CONTACT_EMAIL,
    operator: { name: settings.operatorName, id: settings.operatorId, address: settings.operatorAddress, registry: settings.operatorRegistry },
    turnstileSiteKey: turnstileSiteKey(),
    navigation: nav,
    texts: txt,
  };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useRouteLoaderData('root') as RootData | undefined;
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const gtmId = isAdmin ? '' : data?.gtmId ?? '';

  return (
    <html lang="cs">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#020d1e" />
        {/* Consent Mode v2 (výchozí „denied“) musí běžet před GTM. */}
        {isAdmin ? null : <script dangerouslySetInnerHTML={{ __html: consentHeadScript(gtmId) }} />}
        <Meta />
        <Links />
      </head>
      <body>
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}
        <PictogramSprite />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Admin běží bez veřejné hlavičky, patičky a cookie lišty.
  if (location.pathname.startsWith('/admin')) {
    return <Outlet />;
  }

  return (
    <div className={isHome ? 'page-home' : undefined}>
      <a className="skip-link" href="#obsah">
        Přeskočit na obsah
      </a>
      <Navbar />
      <main id="obsah">
        <Outlet />
      </main>
      <Footer />
      <CookieBar />
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error) && error.status === 404;
  const root = useRouteLoaderData('root') as RootData | undefined;
  const t = root?.texts.notFound ?? DEFAULT_TEXTS.notFound;

  return (
    <div className="page-home">
      <Navbar />
      <main id="obsah">
        <section className="article-hero text-center">
          <div className="container">
            <h1 className="article-title">{is404 ? t.title : 'Chyba'}</h1>
            <p className="article-perex mx-auto">{is404 ? t.text : 'Omlouváme se, na serveru nastala neočekávaná chyba.'}</p>
            <a href="/" className="btn btn-cta mt-3">
              {t.home}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
