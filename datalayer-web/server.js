import { createRequestHandler } from '@react-router/express';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import basicAuth from 'express-basic-auth';

const app = express();

app.disable('x-powered-by');
app.use(compression());
app.use(morgan('tiny'));

// Vývojová HTTP Basic Auth ochrana (ekvivalent původního BasePresenter::startup).
// Zapne se nastavením ENABLE_AUTH=1.
if (process.env.ENABLE_AUTH === '1') {
  app.use(
    basicAuth({
      users: { [process.env.SITE_USER || 'vn']: process.env.SITE_PASS || '555' },
      challenge: true,
      realm: 'datalayer.cz',
    }),
  );
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
