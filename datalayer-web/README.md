# datalayer-web

Web datalayer.cz přepsaný z PHP/Nette na **Node.js + Express + React + React
Router 7 + Vite + TypeScript**, s úložištěm dat ve **Firestore (Native)** a
deployem na **Google Cloud Run z gitu**.

## Stack

- **Runtime:** Node.js 20+
- **Server:** Express 4 (SSR handler React Routeru) – `server.js`
- **Frontend:** React 19 + React Router 7 (framework mode, SSR) + Vite
- **Data:** Firestore (Native) – kolekce `articles` (blog) a `pages` (landing
  pages). Free tier, serverless, bez DB instance a bez hesla.
- **Obsah:** HTML z Firestore, sanitizace (`sanitize-html`) + highlight.js
- **Konfigurace:** `.env` (viz `.env.example`); na Cloud Run env proměnné

## Struktura

```
server.js                 Express + SSR (produkce)
react-router.config.ts    ssr: true
vite.config.ts
Dockerfile                build image pro Cloud Run
cloudbuild.yaml           CI/CD pipeline (deploy z gitu)
scripts/seed.ts           naplnění Firestore ukázkovými daty
app/
  root.tsx                layout (= @layout.latte) + ErrorBoundary
  routes.ts               routování
  app.css                 přenesené styly
  lib/
    firestore.server.ts   Firestore klient
    articles.server.ts    blog (= ArticleService) – kolekce `articles`
    pages.server.ts       landing pages – kolekce `pages`
    sanitize.server.ts    sanitizace HTML obsahu
    services.ts, text.ts  služby + helpery (date/stripHtml/truncate)
    auth.server.ts        cookie session + requireUser (admin)
    users.server.ts       uživatelé adminu (bcrypt) – kolekce `users`
  components/             Navbar, Footer, ContactForm, ArticleContent, ArticleFormFields
  routes/                 home, blog._index, blog.$slug, services(.$service),
                          privacy, $ (catch-all landing pages),
                          admin* (login, dashboard, články CRUD, uživatelé)
scripts/                  seed.ts, create-admin.ts
public/                   favicon, dl.png, robots.txt
```

## Admin

Jednoduchá administrace na `/admin` (SSR formuláře přes React Router actions):

- **Přihlášení** (`/admin/login`) – cookie session podepsaná `SESSION_SECRET`,
  hesla hashovaná bcryptem, uživatelé v kolekci `users`.
- **Články** (`/admin/articles`) – výpis, vytvoření, editace, mazání (kolekce
  `articles`). Obsah je HTML, sanitizuje se při zobrazení.
- **Uživatelé** (`/admin/users`, jen role `admin`) – výpis, vytvoření, mazání;
  role `admin` (vše) / `editor` (jen články).

První admin se vytvoří skriptem:

```bash
GOOGLE_CLOUD_PROJECT=<id> npm run admin:create -- mail@vit.cz HesloMin8znaku "Jméno"
```

## Mapování z původní Nette aplikace

| Nette | Zde |
|---|---|
| `RouterFactory` | `app/routes.ts` |
| `@layout.latte` | `app/root.tsx` + `app/app.css` + komponenty |
| `HomePresenter` | `app/routes/home.tsx` |
| `ServicesPresenter` (+ akce) | `app/routes/services.tsx` + `services.$service.tsx` |
| `BlogPresenter::default` | `app/routes/blog._index.tsx` |
| `BlogPresenter::detail` | `app/routes/blog.$slug.tsx` |
| `ArticleService` | `app/lib/articles.server.ts` (Firestore) |
| `DbContentControl` | `app/components/ArticleContent.tsx` |
| `Error4xx/5xx` | `ErrorBoundary` v `root.tsx` |
| Basic auth v `BasePresenter` | `express-basic-auth` v `server.js` (`ENABLE_AUTH=1`) |
| MySQL + Nette Database | Firestore (Native) |
| — (nově) | Admin na `/admin`: login, správa článků a uživatelů |

## Datový model (Firestore)

- **`articles/{slug}`** — `slug`, `title`, `author`, `date` (Timestamp),
  `content` (HTML). Slug = ID dokumentu.
- **`pages/{slug}`** — `slug`, `title`, `perex?`, `content` (HTML). Dostupné na
  cestě `/{slug}` přes catch-all route `routes/$.tsx`.

## Lokální vývoj

Doporučeno přes **Firestore emulátor** (nezapisuje do produkce):

```bash
npm install
cp .env.example .env

# Emulátor (vyžaduje Javu); v jednom terminálu:
npx firebase-tools emulators:start --only firestore --project demo-datalayer

# V druhém terminálu:
export GOOGLE_CLOUD_PROJECT=demo-datalayer
export FIRESTORE_EMULATOR_HOST=localhost:8080
npm run db:seed          # ukázková data
npm run admin:create -- mail@vit.cz Heslo123 "Vít"   # přihlášení do /admin
npm run dev              # http://localhost:3000  (admin na /admin)
```

Bez emulátoru lze pracovat proti reálnému projektu (přihlas se
`gcloud auth application-default login` a nastav `GOOGLE_CLOUD_PROJECT`).

## Produkční build (lokálně)

```bash
npm run build
npm start                # NODE_ENV=production node server.js
```

## Deploy na Cloud Run

Podrobně viz **[`DEPLOY.md`](./DEPLOY.md)** (CLI) nebo
**[`DEPLOY-GUI.md`](./DEPLOY-GUI.md)** (Cloud Console). Ve zkratce:

1. Povol API (run, cloudbuild, artifactregistry, firestore).
2. Vytvoř Firestore databázi: `gcloud firestore databases create --location=$REGION`.
3. Runtime SA s rolí `roles/datastore.user`.
4. Seed dat: `GOOGLE_CLOUD_PROJECT=$PROJECT_ID npm run db:seed`.
5. Deploy:

   ```bash
   cd datalayer-web
   gcloud run deploy datalayer-web --source . --region $REGION \
     --service-account "$RUN_SA" \
     --set-env-vars NODE_ENV=production,GOOGLE_CLOUD_PROJECT=$PROJECT_ID \
     --port 8080 --allow-unauthenticated
   ```

Pro deploy z gitu nastav Cloud Build trigger na `datalayer-web/cloudbuild.yaml`.

## Konfigurace

`.env` (lokálně) / env proměnné Cloud Run: `GOOGLE_CLOUD_PROJECT`,
`SESSION_SECRET` (podpis admin cookie – v produkci nastav náhodný řetězec a
ideálně přes Secret Manager), volitelně `ENABLE_AUTH` + `SITE_USER`/`SITE_PASS`
(basic auth), HubSpot ID. Firestore se autentizuje přes service account (ADC) —
**žádné DB heslo**. `.env` je v `.gitignore` a necommituje se.

## Poznámka k obsahu

Původně sloupec `content` (MySQL) obsahoval Latte markup renderovaný přes
`DbContentControl`. Zde se ve Firestore ukládá **HTML**, které se sanitizuje a
vykreslí (`ArticleContent`). Obsah lze editovat přímo v Cloud Console
(Firestore → Data) bez redeploye. Při migraci dat ze staré DB převeď případnou
Latte syntaxi na čisté HTML.
