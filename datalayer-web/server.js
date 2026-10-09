import { createRequestHandler } from '@react-router/express';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import basicAuth from 'express-basic-auth';

const app = express();
const authEnabled = process.env.ENABLE_AUTH === '1';

app.disable('x-powered-by');
// Cloud Run je za proxy – kvůli správné IP (limit frekvence formuláře) a protokolu.
app.set('trust proxy', true);
app.use(compression());
app.use(morgan('tiny'));

// Bezpečnostní hlavičky (SEO audit, kap. 3.5). CSP zatím ne – GTM a tagy
// třetích stran by ji musely mít podrobně vyladěnou.
app.use((req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');
  // Zamčený web (vývoj / pilot) se nesmí dostat do vyhledávačů. Po vypnutí
  // hesla (ENABLE_AUTH≠1) hlavička sama zmizí.
  if (authEnabled) res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  next();
});

// Kontrola běhu pro monitoring – i když je web zamčený.
app.get('/health', (req, res) => {
  res.json({ ok: true });
});

// Vývojová HTTP Basic Auth ochrana (ekvivalent původního BasePresenter::startup).
// Zapne se nastavením ENABLE_AUTH=1. Migrační URL /migrate má vlastní bránu
// tokenem (MIGRATION_TOKEN), proto heslo nevyžaduje.
if (authEnabled) {
  const auth = basicAuth({
    users: { [process.env.SITE_USER || 'vn']: process.env.SITE_PASS || '555' },
    challenge: true,
    realm: 'datalayer.cz',
  });
  app.use((req, res, next) => (req.path === '/migrate' ? next() : auth(req, res, next)));
}

// Statická aktiva z buildu (hashované soubory lze cachovat dlouho).
app.use(
  '/assets',
  express.static('build/client/assets', { immutable: true, maxAge: '1y' }),
);
app.use(express.static('build/client', { maxAge: '1h' }));

// SSR handler React Routeru.
const build = await import('./build/server/index.js');
app.all(
  '*',
  createRequestHandler({ build, mode: process.env.NODE_ENV }),
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`datalayer-web běží na portu ${port}`);
});
