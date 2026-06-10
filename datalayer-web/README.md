# datalayer-web

Web datalayer.cz přepsaný z PHP/Nette na **Node.js + Express + React + React
Router 7 + Vite + TypeScript**, s **PostgreSQL** (Prisma) a deployem na
**Google Cloud Run z gitu**.

## Stack

- **Runtime:** Node.js 20+
- **Server:** Express 4 (SSR handler React Routeru) – `server.js`
- **Frontend:** React 19 + React Router 7 (framework mode, SSR) + Vite
- **DB:** PostgreSQL přes Prisma 6
- **Obsah článků:** HTML z DB, sanitizace (`sanitize-html`) + highlight.js
- **Credentials:** vše v `.env` (viz `.env.example`)

## Struktura

```
server.js                 Express + SSR (produkce)
react-router.config.ts    ssr: true
vite.config.ts
Dockerfile                build image pro Cloud Run
cloudbuild.yaml           CI/CD pipeline (deploy z gitu)
prisma/schema.prisma      datový model (PostgreSQL)
prisma/seed.ts            ukázková data
app/
  root.tsx                layout (= @layout.latte) + ErrorBoundary
  routes.ts               routování
  app.css                 přenesené styly
  lib/                    db, articles (= ArticleService), services, text helpery
  components/             Navbar, Footer, ContactForm, ArticleContent
  routes/                 home, blog._index, blog.$slug, services, privacy
public/                   favicon, dl.png, robots.txt
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
| `ArticleService` | `app/lib/articles.server.ts` |
| `DbContentControl` | `app/components/ArticleContent.tsx` |
| `Error4xx/5xx` | `ErrorBoundary` v `root.tsx` |
| Basic auth v `BasePresenter` | `express-basic-auth` v `server.js` (`ENABLE_AUTH=1`) |
| MySQL + Nette Database | PostgreSQL + Prisma |

## Lokální vývoj

```bash
npm install
cp .env.example .env          # vyplň DATABASE_URL atd.

# Postgres (Docker):
docker run --name datalayer-pg -e POSTGRES_USER=datalayer \
  -e POSTGRES_PASSWORD=datalayer -e POSTGRES_DB=datalayer \
  -p 5432:5432 -d postgres:16

npx prisma db push            # vytvoří schéma
npm run db:seed               # ukázková data (volitelné)
npm run dev                   # http://localhost:3000
```

## Produkční build (lokálně)

```bash
npm run build
npm start                     # NODE_ENV=production node server.js
```

## Deploy na Google Cloud Run z gitu

Jednorázová příprava GCP:

```bash
export PROJECT_ID=...; export REGION=europe-west1
gcloud config set project $PROJECT_ID
gcloud services enable run.googleapis.com cloudbuild.googleapis.com \
  artifactregistry.googleapis.com sqladmin.googleapis.com secretmanager.googleapis.com

# Artifact Registry pro image:
gcloud artifacts repositories create datalayer --repository-format=docker --location=$REGION

# Cloud SQL Postgres:
gcloud sql instances create datalayer-pg --database-version=POSTGRES_16 \
  --tier=db-custom-1-3840 --region=$REGION
gcloud sql databases create datalayer --instance=datalayer-pg
gcloud sql users create app --instance=datalayer-pg --password='HESLO'

# DATABASE_URL jako secret (Cloud SQL přes unix socket):
printf '%s' 'postgresql://app:HESLO@localhost/datalayer?host=/cloudsql/'"$PROJECT_ID:$REGION:datalayer-pg"'&schema=public' \
  | gcloud secrets create DATABASE_URL --data-file=-
```

**Deploy z gitu** – dvě varianty:

1. **Cloud Build trigger (doporučeno):** v Cloud Console → Cloud Build → Triggers
   připoj GitHub repo a nastav build podle `cloudbuild.yaml`. Každý push do
   sledované větve postaví image a nasadí na Cloud Run. Nastav substituce
   `_REGION`, `_SERVICE`, `_AR_REPO`.

2. **Přímý deploy ze zdroje:**

   ```bash
   gcloud run deploy datalayer-web \
     --source . \
     --region $REGION \
     --allow-unauthenticated \
     --add-cloudsql-instances $PROJECT_ID:$REGION:datalayer-pg \
     --set-secrets DATABASE_URL=DATABASE_URL:latest \
     --set-env-vars NODE_ENV=production
   ```

Migrace schématu na produkční DB se provede přes `prisma migrate deploy`
(v build kroku nebo jednorázově s připojením k Cloud SQL).

## Credentials

Veškeré citlivé hodnoty jsou v `.env` (lokálně) / Secret Manageru (produkce):
`DATABASE_URL`, volitelně `SITE_USER`/`SITE_PASS` (basic auth), HubSpot ID.
`.env` je v `.gitignore` a **necommituje se**.

## Poznámka k obsahu článků

Původně sloupec `content` obsahoval Latte markup renderovaný přes
`DbContentControl`. Zde se očekává **HTML**, které se sanitizuje a vykreslí
(`ArticleContent`). Při migraci dat z MySQL převeď případnou Latte syntaxi na
čisté HTML. Pro budoucí psaní lze přejít na Markdown.
