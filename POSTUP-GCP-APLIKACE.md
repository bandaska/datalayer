# Step-by-step postup: nová datová integrační aplikace na GCP

Tento dokument popisuje kompletní postup vytvoření nové aplikace pro datalayer
běžící v Google Cloud Platform. Stack vychází z osvědčené architektury
předchozí GCP aplikace (Node.js + TypeScript + Prisma + React + Cloud Run).

Stávající web `datalayer.vn` (Nette PHP) zůstává beze změny — tato aplikace je
samostatný produkt (konektory na reklamní zdroje dat → zápis do BigQuery / SQL
destinací), nikoli refaktor PHP webu.

---

## Obsah

1. [Přehled architektury](#1-přehled-architektury)
2. [Předpoklady a nástroje](#2-předpoklady-a-nástroje)
3. [Příprava GCP projektu](#3-příprava-gcp-projektu)
4. [Struktura monorepa](#4-struktura-monorepa)
5. [Backend — základ (Express + TS + Zod)](#5-backend--základ-express--ts--zod)
6. [Datový model — Prisma](#6-datový-model--prisma)
7. [Šifrování credentials (AES-256)](#7-šifrování-credentials-aes-256)
8. [Auth — JWT + Google OAuth](#8-auth--jwt--google-oauth)
9. [Abstrakce providerů](#9-abstrakce-providerů)
10. [Abstrakce destinací](#10-abstrakce-destinací)
11. [Worker, scheduling a Cloud Tasks](#11-worker-scheduling-a-cloud-tasks)
12. [Notifikace (Gmail SMTP)](#12-notifikace-gmail-smtp)
13. [Frontend — React 19 + Vite](#13-frontend--react-19--vite)
14. [Lokální vývoj](#14-lokální-vývoj)
15. [Kontejnerizace a deploy na Cloud Run](#15-kontejnerizace-a-deploy-na-cloud-run)
16. [Migrace databáze](#16-migrace-databáze)
17. [CI/CD](#17-cicd)
18. [Konfigurace prostředí (env)](#18-konfigurace-prostředí-env)
19. [Lint a testy](#19-lint-a-testy)
20. [Spouštěcí checklist](#20-spouštěcí-checklist)

---

## 1. Přehled architektury

```
┌─────────────────────────────────────────────────────────────────┐
│                          GCP projekt                              │
│                                                                   │
│  ┌──────────────┐   HTTPS   ┌───────────────────────────────┐    │
│  │  Frontend    │──────────▶│  Cloud Run: API (Express)     │    │
│  │  (Cloud Run  │           │  - REST + Auth (JWT/OAuth)    │    │
│  │  static/CDN) │           │  - Provider OAuth callbacky   │    │
│  └──────────────┘           │  - Scheduler tick endpoint    │    │
│                             └───────┬───────────────┬───────┘    │
│                                     │               │            │
│                          ┌──────────▼──┐    ┌───────▼────────┐   │
│                          │ Cloud SQL   │    │  Cloud Tasks   │   │
│                          │ PostgreSQL  │    │  (fronty úloh) │   │
│                          │ (Prisma)    │    └───────┬────────┘   │
│                          └─────────────┘            │            │
│                                          push task  │            │
│                          ┌──────────────────────────▼────────┐   │
│                          │ Cloud Run: Worker (task handler)  │   │
│                          │ - discovery / sync / backfill     │   │
│                          │ - daily summary                   │   │
│                          └───────┬───────────────────┬───────┘   │
│                                  │ čte z providerů   │ zapisuje  │
│                       ┌──────────▼──────┐   ┌─────────▼────────┐  │
│                       │ Google/Meta/    │   │ BigQuery /       │  │
│                       │ TikTok/LinkedIn │   │ MySQL / Postgres │  │
│                       │ /GA4/Sklik/...  │   │ (destinations)   │  │
│                       └─────────────────┘   └──────────────────┘  │
└───────────────────────────────────────────────────────────────────┘
```

**Klíčové principy:**

- API a Worker jsou dvě nasazení (services) Cloud Run sdílející stejný kódový
  základ a Prisma client. Scheduler na API "tikne" a vytvoří úlohy v Cloud Tasks;
  Cloud Tasks je doručí jako HTTP POST na Worker handler.
- Stav úloh, scénářů a běhů se uchovává v PostgreSQL (Cloud SQL).
- Credentials providerů se ukládají šifrovaně (AES-256-GCM) v DB.
- BigQuery je primární destinace pro analytická data; MySQL/Postgres jako
  alternativy přes sdílenou abstrakci.

---

## 2. Předpoklady a nástroje

Nainstaluj a ověř:

```bash
node -v        # >= 20
npm -v
gcloud --version
docker --version
```

- **Node.js 20+** (doporučeno LTS), správa verzí přes `nvm`/`fnm`.
- **gcloud CLI** s přihlášením: `gcloud auth login` a
  `gcloud auth application-default login`.
- **Docker** pro build kontejnerů a lokální PostgreSQL.
- Účet GCP s fakturací; oprávnění Owner/Editor na projektu (pro setup).

---

## 3. Příprava GCP projektu

### 3.1 Vytvoření projektu a nastavení

```bash
export PROJECT_ID="datalayer-app"
export REGION="europe-west1"          # nebo europe-west3 (Frankfurt)

gcloud projects create "$PROJECT_ID" --name="Datalayer App"
gcloud config set project "$PROJECT_ID"
# fakturaci přiřaď v Console nebo:
gcloud billing projects link "$PROJECT_ID" --billing-account="XXXXXX-XXXXXX-XXXXXX"
```

### 3.2 Povolení API

```bash
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com \
  sqladmin.googleapis.com \
  cloudtasks.googleapis.com \
  bigquery.googleapis.com \
  secretmanager.googleapis.com \
  iam.googleapis.com
```

### 3.3 Artifact Registry (Docker images)

```bash
gcloud artifacts repositories create datalayer \
  --repository-format=docker --location="$REGION"
```

### 3.4 Cloud SQL (PostgreSQL)

```bash
gcloud sql instances create datalayer-pg \
  --database-version=POSTGRES_16 \
  --tier=db-custom-1-3840 \
  --region="$REGION"

gcloud sql databases create datalayer --instance=datalayer-pg
gcloud sql users create app --instance=datalayer-pg --password='<silne-heslo>'
```

### 3.5 Cloud Tasks fronty

```bash
gcloud tasks queues create sync-queue       --location="$REGION"
gcloud tasks queues create discovery-queue  --location="$REGION"
gcloud tasks queues create backfill-queue   --location="$REGION"
```

### 3.6 Service accounts a IAM

```bash
# Runtime SA pro Cloud Run služby
gcloud iam service-accounts create datalayer-run \
  --display-name="Datalayer Cloud Run runtime"

SA="datalayer-run@${PROJECT_ID}.iam.gserviceaccount.com"

# Role: Cloud SQL klient, BigQuery, Cloud Tasks enqueuer, Secret Manager
for ROLE in \
  roles/cloudsql.client \
  roles/bigquery.dataEditor \
  roles/bigquery.jobUser \
  roles/cloudtasks.enqueuer \
  roles/secretmanager.secretAccessor \
  roles/run.invoker; do
  gcloud projects add-iam-policy-binding "$PROJECT_ID" \
    --member="serviceAccount:${SA}" --role="$ROLE"
done
```

> `roles/run.invoker` umožní Cloud Tasks volat Worker s OIDC tokenem tohoto SA.

### 3.7 Secret Manager (citlivé hodnoty)

Citlivé proměnné (DB heslo, `ENCRYPTION_KEY`, JWT secret, OAuth client secrety,
Gmail hesla) ulož do Secret Manageru, ne do plain env:

```bash
printf '%s' "$(openssl rand -base64 32)" | \
  gcloud secrets create ENCRYPTION_KEY --data-file=-
printf '%s' "$(openssl rand -base64 48)" | \
  gcloud secrets create JWT_SECRET --data-file=-
# ... a tak dál pro každý secret
```

---

## 4. Struktura monorepa

```
datalayer-app/
├── package.json                  # workspaces: ["server", "web"]
├── docker-compose.yml            # lokální Postgres
├── .env.example
├── server/                       # backend (Express + Prisma + worker)
│   ├── package.json
│   ├── tsconfig.json
│   ├── .eslintrc.cjs             # legacy ESLint config
│   ├── Dockerfile
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   │       └── manual_0001_init.sql
│   └── src/
│       ├── index.ts              # entrypoint API
│       ├── app.ts                # Express app (routes, middleware)
│       ├── config/
│       │   ├── env.ts            # načtení + validace env (Zod)
│       │   └── providers.ts      # registr providerů
│       ├── lib/
│       │   ├── prisma.ts
│       │   ├── crypto.ts         # AES-256 šifrování credentials
│       │   ├── jwt.ts
│       │   └── cloudtasks.ts
│       ├── auth/
│       │   ├── routes.ts         # /auth/login, /auth/google, ...
│       │   └── middleware.ts
│       ├── providers/
│       │   ├── BaseProvider.ts
│       │   ├── oauth/            # google-ads, meta, tiktok, linkedin, bing, ga4
│       │   ├── token/            # sklik, windsor, catchr
│       │   └── pipedream/        # Pipedream Connect
│       ├── destinations/
│       │   ├── BaseDestination.ts
│       │   ├── BigQueryDestination.ts
│       │   ├── MySqlDestination.ts
│       │   └── PostgresDestination.ts
│       ├── worker/
│       │   ├── server.ts         # Express handler pro Cloud Tasks
│       │   ├── scheduler.ts      # tick → enqueue
│       │   ├── discovery.ts
│       │   ├── sync.ts
│       │   ├── backfill.ts
│       │   └── dailySummary.ts
│       ├── notifications/
│       │   └── mailer.ts         # nodemailer (Gmail SMTP + fallback)
│       └── utils/
│           └── logger.ts         # pino
└── web/                          # frontend (React 19 + Vite + RR7)
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    └── src/
        ├── main.tsx
        ├── router.tsx
        ├── api/
        ├── pages/
        └── components/
```

Inicializace:

```bash
mkdir datalayer-app && cd datalayer-app
npm init -y
# nastav workspaces v root package.json:  "workspaces": ["server", "web"]
git init
```

---

## 5. Backend — základ (Express + TS + Zod)

```bash
cd server
npm init -y
npm i express@4 zod pino pino-http jsonwebtoken cookie-parser cors \
  @prisma/client googleapis google-auth-library \
  @google-cloud/bigquery @google-cloud/tasks mysql2 pg \
  nodemailer node-cron axios
npm i -D typescript tsx @types/node @types/express @types/jsonwebtoken \
  @types/cookie-parser @types/cors @types/nodemailer prisma vitest \
  eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npx tsc --init
```

### 5.1 Validace env přes Zod (`src/config/env.ts`)

```ts
import { z } from 'zod';

const schema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(8080),
  DATABASE_URL: z.string().url(),
  ENCRYPTION_KEY: z.string().min(32),       // base64, 32 B klíč pro AES-256
  JWT_SECRET: z.string().min(32),
  GOOGLE_OAUTH_CLIENT_ID: z.string(),
  GOOGLE_OAUTH_CLIENT_SECRET: z.string(),
  GCP_PROJECT_ID: z.string(),
  GCP_REGION: z.string().default('europe-west1'),
  TASKS_WORKER_URL: z.string().url().optional(),
  GMAIL_USER: z.string().optional(),
  GMAIL_PASS: z.string().optional(),
  GMAIL_FALLBACK_USER: z.string().optional(),
  GMAIL_FALLBACK_PASS: z.string().optional(),
});

export const env = schema.parse(process.env);
```

### 5.2 Express app a entrypoint

`src/app.ts` sestaví Express s `pino-http`, `cors`, `cookie-parser`, připojí
auth a API routy a error handler. `src/index.ts`:

```ts
import { app } from './app';
import { env } from './config/env';
import { logger } from './utils/logger';

app.listen(env.PORT, () => logger.info(`API běží na :${env.PORT}`));
```

> **Cloud Run pozn.:** poslouchej na `process.env.PORT` (default 8080) a `0.0.0.0`.

---

## 6. Datový model — Prisma

```bash
npx prisma init --datasource-provider postgresql
```

`prisma/schema.prisma` (kostra dle zadaných entit):

```prisma
generator client {
  provider = "prisma-client-js"
}
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String?
  domain        String?           // pro Google OAuth login domén
  createdAt     DateTime @default(now())
  credentials   Credential[]
  scenarios     Scenario[]
  notificationPreferences NotificationPreference[]
  hiddenProviders HiddenProvider[]
}

model Credential {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  provider    String                 // klíč z providers.ts
  authMode    String                 // 'oauth' | 'token' | 'pipedream'
  data        String                 // AES-256 šifrovaný JSON (tokeny/secrety)
  label       String?
  createdAt   DateTime @default(now())
  accounts    Account[]
}

model Account {
  id           String   @id @default(cuid())
  credentialId String
  credential   Credential @relation(fields: [credentialId], references: [id])
  externalId   String                // ID účtu u providera (např. customerId)
  name         String?
  meta         Json?                 // např. MCC hierarchie
  scenarios    Scenario[]
}

model Scenario {
  id            String   @id @default(cuid())
  userId        String
  user          User     @relation(fields: [userId], references: [id])
  accountId     String
  account       Account  @relation(fields: [accountId], references: [id])
  name          String
  destination   Json                 // typ + konfigurace destinace
  schedule      String?              // cron výraz
  parserId      String?
  parser        Parser?  @relation(fields: [parserId], references: [id])
  enabled       Boolean  @default(true)
  runs          ScenarioRun[]
  taskLogs      TaskLog[]
}

model ScenarioRun {
  id          String   @id @default(cuid())
  scenarioId  String
  scenario    Scenario @relation(fields: [scenarioId], references: [id])
  status      String                 // 'running' | 'success' | 'failed'
  startedAt   DateTime @default(now())
  finishedAt  DateTime?
  rowsWritten Int?
  error       String?
}

model TaskLog {
  id          String   @id @default(cuid())
  scenarioId  String?
  scenario    Scenario? @relation(fields: [scenarioId], references: [id])
  type        String                 // 'discovery'|'sync'|'backfill'|'summary'
  status      String
  payload     Json?
  createdAt   DateTime @default(now())
}

model NotificationPreference {
  id        String  @id @default(cuid())
  userId    String
  user      User    @relation(fields: [userId], references: [id])
  channel   String                   // 'email'
  event     String                   // 'run_failed', 'daily_summary', ...
  enabled   Boolean @default(true)
}

model FbDataDeletionLog {
  id           String   @id @default(cuid())
  fbUserId     String
  confirmationCode String @unique
  status       String
  createdAt    DateTime @default(now())
}

model HiddenProvider {
  id       String @id @default(cuid())
  userId   String
  user     User   @relation(fields: [userId], references: [id])
  provider String
  @@unique([userId, provider])
}

model Parser {
  id        String   @id @default(cuid())
  name      String
  config    Json
  scenarios Scenario[]
}
```

Synchronizace schématu a generování klienta:

```bash
npx prisma db push      # nasdílí schema do DB (dev)
npx prisma generate
```

---

## 7. Šifrování credentials (AES-256)

`src/lib/crypto.ts` — AES-256-GCM s klíčem z env `ENCRYPTION_KEY`:

```ts
import crypto from 'node:crypto';
import { env } from '../config/env';

const KEY = Buffer.from(env.ENCRYPTION_KEY, 'base64'); // 32 B
const ALGO = 'aes-256-gcm';

export function encrypt(plaintext: string): string {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv(ALGO, KEY, iv);
  const enc = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return [iv, tag, enc].map((b) => b.toString('base64')).join('.');
}

export function decrypt(payload: string): string {
  const [iv, tag, enc] = payload.split('.').map((p) => Buffer.from(p, 'base64'));
  const decipher = crypto.createDecipheriv(ALGO, KEY, iv);
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(enc), decipher.final()]).toString('utf8');
}
```

Credential ukládej jako `encrypt(JSON.stringify(tokens))` do `Credential.data`.

---

## 8. Auth — JWT + Google OAuth

- **Vlastní JWT:** `src/lib/jwt.ts` (sign/verify s `JWT_SECRET`), token v
  httpOnly cookie. Middleware `requireAuth` v `src/auth/middleware.ts`.
- **Google OAuth (login domén):** `google-auth-library` `OAuth2Client`.
  Endpointy `/auth/google` (redirect) a `/auth/google/callback` (výměna kódu,
  ověření `hd`/domény, založení/načtení `User`, vydání JWT).

V GCP Console založ **OAuth 2.0 Client ID** (typ Web application), přidej
redirect URI API služby. Client ID/secret ulož do Secret Manageru.

---

## 9. Abstrakce providerů

`src/providers/BaseProvider.ts`:

```ts
export type AuthMode = 'oauth' | 'token' | 'pipedream';

export interface ProviderContext {
  credential: { data: Record<string, unknown> }; // dešifrovaný JSON
  account?: { externalId: string };
}

export abstract class BaseProvider {
  abstract readonly key: string;
  abstract readonly authMode: AuthMode;

  // OAuth toky
  getAuthUrl?(state: string): string;
  handleCallback?(code: string): Promise<Record<string, unknown>>;

  // Zjištění dostupných účtů (vč. MCC traverzu u Google Ads)
  abstract listAccounts(ctx: ProviderContext): Promise<Array<{ externalId: string; name: string; meta?: unknown }>>;

  // Stažení dat za období
  abstract fetchData(ctx: ProviderContext, range: { from: string; to: string }): Promise<unknown[]>;
}
```

Registr v `src/config/providers.ts`:

```ts
import { GoogleAdsProvider } from '../providers/oauth/googleAds';
import { MetaAdsProvider } from '../providers/oauth/metaAds';
// ... ostatní

export const providers = {
  google_ads: new GoogleAdsProvider(),
  meta_ads: new MetaAdsProvider(),
  facebook_pages: new FacebookPagesProvider(),
  tiktok_ads: new TikTokAdsProvider(),
  linkedin_ads: new LinkedInAdsProvider(),
  bing_ads: new BingAdsProvider(),
  ga4: new Ga4Provider(),
  sklik: new SklikProvider(),            // token-based
  // windsor_* (6×), catchr_* (6×), pipedream_* (6×)
} as const;

export type ProviderKey = keyof typeof providers;
```

Skupiny dle `authMode`:

- **`oauth`** — Google Ads (MCC traverz přes `listAccessibleCustomers` +
  hierarchie), Meta Ads, Facebook Pages, TikTok Ads, LinkedIn Ads, Bing/Microsoft
  Ads, GA4. Nativní OAuth toky, refresh tokeny ve `data`.
- **`token`** — Sklik, Windsor.ai (6 variant), Catchr.io (6 variant, volání přes
  MCP endpoint `https://api.catchr.io/mcp`). Statický token/API klíč.
- **`pipedream`** — Pipedream Connect (6 variant): napojení přes **Connect Link**
  a volání přes **Connect Proxy** s hlavičkami `x-pd-proxy-*`.

---

## 10. Abstrakce destinací

`src/destinations/BaseDestination.ts`:

```ts
export interface DestinationConfig { type: 'bigquery' | 'mysql' | 'postgres'; [k: string]: unknown; }

export abstract class BaseDestination {
  constructor(protected config: DestinationConfig) {}
  abstract ensureSchema(rows: unknown[]): Promise<void>;
  abstract write(table: string, rows: unknown[]): Promise<number>; // vrací počet řádků
}
```

- **BigQuery** (`@google-cloud/bigquery`): `dataset.table.insert(rows)`, příp.
  load job pro velké dávky; auto-create datasetu/tabulky podle schématu.
- **MySQL** (`mysql2/promise`): batch `INSERT` / `INSERT ... ON DUPLICATE KEY`.
- **PostgreSQL** (`pg`): batch insert přes `pg-format` nebo `COPY`.

---

## 11. Worker, scheduling a Cloud Tasks

**Vzor:** Scheduler na API/Worker pravidelně "tikne", projde aktivní scénáře a
pro každý naplánovaný běh vytvoří úlohu v Cloud Tasks. Cloud Tasks ji doručí
HTTP POSTem na Worker handler s OIDC tokenem.

`src/lib/cloudtasks.ts`:

```ts
import { CloudTasksClient } from '@google-cloud/tasks';
import { env } from '../config/env';

const client = new CloudTasksClient();

export async function enqueue(queue: string, path: string, body: unknown, scheduleTime?: Date) {
  const parent = client.queuePath(env.GCP_PROJECT_ID, env.GCP_REGION, queue);
  await client.createTask({
    parent,
    task: {
      httpRequest: {
        httpMethod: 'POST',
        url: `${env.TASKS_WORKER_URL}${path}`,
        headers: { 'Content-Type': 'application/json' },
        body: Buffer.from(JSON.stringify(body)).toString('base64'),
        oidcToken: { serviceAccountEmail: `datalayer-run@${env.GCP_PROJECT_ID}.iam.gserviceaccount.com` },
      },
      ...(scheduleTime && { scheduleTime: { seconds: Math.floor(scheduleTime.getTime() / 1000) } }),
    },
  });
}
```

`src/worker/server.ts` — samostatný Express, který vystaví:

- `POST /tasks/discovery` → `discovery.ts` (zjištění účtů u providerů)
- `POST /tasks/sync` → `sync.ts` (běžná synchronizace dat)
- `POST /tasks/backfill` → `backfill.ts` (zpětné doplnění období)
- `POST /tasks/daily-summary` → `dailySummary.ts` (souhrn + notifikace)

Scheduler tick (`src/worker/scheduler.ts`) běží buď přes:

- **Cloud Scheduler** → HTTP POST na `/tasks/tick` (doporučeno na Cloud Run), nebo
- **node-cron** uvnitř běžící instance (vhodné pro lokální dev / always-on).

Worker handler vždy: dešifruje credential → zavolá `provider.fetchData` →
zapíše přes `destination.write` → zapíše `ScenarioRun` a `TaskLog`.

> **Idempotence:** Cloud Tasks může úlohu doručit víckrát — handler musí být
> idempotentní (např. upsert dle období/účtu, kontrola existujícího běhu).

Cloud Scheduler:

```bash
gcloud scheduler jobs create http datalayer-tick \
  --location="$REGION" --schedule="*/15 * * * *" \
  --uri="https://<worker-url>/tasks/tick" \
  --oidc-service-account-email="datalayer-run@${PROJECT_ID}.iam.gserviceaccount.com"
```

---

## 12. Notifikace (Gmail SMTP)

`src/notifications/mailer.ts` — `nodemailer` s primárním a fallback účtem:

```ts
import nodemailer from 'nodemailer';
import { env } from '../config/env';

function transport(user?: string, pass?: string) {
  return nodemailer.createTransport({ service: 'gmail', auth: { user: user!, pass: pass! } });
}

export async function sendMail(opts: { to: string; subject: string; html: string }) {
  try {
    await transport(env.GMAIL_USER, env.GMAIL_PASS).sendMail({ from: env.GMAIL_USER, ...opts });
  } catch (e) {
    await transport(env.GMAIL_FALLBACK_USER, env.GMAIL_FALLBACK_PASS)
      .sendMail({ from: env.GMAIL_FALLBACK_USER, ...opts });
  }
}
```

> Použij Gmail **App Passwords** (ne hlavní heslo). Hesla v Secret Manageru.
> Respektuj `NotificationPreference` před odesláním.

---

## 13. Frontend — React 19 + Vite

```bash
cd ../web
npm create vite@latest . -- --template react-ts
npm i react@19 react-dom@19 react-router@7
```

- **React Router 7** (`createBrowserRouter`) v `src/router.tsx`.
- API klient v `src/api/` (fetch s `credentials: 'include'` kvůli JWT cookie).
- Stránky: login, dashboard, seznam credentials/účtů, editor scénářů, logy běhů,
  nastavení notifikací.

`vite.config.ts` s proxy na API v devu:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { proxy: { '/api': 'http://localhost:8080' } },
});
```

Build (`npm run build`) → statické soubory do `web/dist`, servírované buď z API
(express static) nebo samostatným Cloud Run / bucket + CDN.

---

## 14. Lokální vývoj

`docker-compose.yml` pro PostgreSQL:

```yaml
services:
  db:
    image: postgres:16
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: app
      POSTGRES_DB: datalayer
    ports: ["5432:5432"]
    volumes: ["pgdata:/var/lib/postgresql/data"]
volumes:
  pgdata:
```

```bash
cp .env.example .env        # vyplň hodnoty
docker compose up -d db
cd server && npx prisma db push && npm run dev   # tsx watch src/index.ts
# v druhém terminálu worker:  npm run dev:worker  (tsx watch src/worker/server.ts)
cd ../web && npm run dev
```

Pro lokální přístup ke Cloud SQL místo dockeru lze použít **Cloud SQL Auth Proxy**.

---

## 15. Kontejnerizace a deploy na Cloud Run

`server/Dockerfile` (multi-stage):

```dockerfile
FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate && npm run build      # tsc → dist/

FROM node:20-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma
EXPOSE 8080
CMD ["node", "dist/index.js"]              # worker: dist/worker/server.js
```

Build & push přes Cloud Build a deploy obou služeb:

```bash
# API
gcloud builds submit server \
  --tag "${REGION}-docker.pkg.dev/${PROJECT_ID}/datalayer/api:latest"

gcloud run deploy datalayer-api \
  --image "${REGION}-docker.pkg.dev/${PROJECT_ID}/datalayer/api:latest" \
  --region "$REGION" --service-account "$SA" \
  --add-cloudsql-instances "${PROJECT_ID}:${REGION}:datalayer-pg" \
  --set-secrets "ENCRYPTION_KEY=ENCRYPTION_KEY:latest,JWT_SECRET=JWT_SECRET:latest" \
  --set-env-vars "GCP_PROJECT_ID=${PROJECT_ID},GCP_REGION=${REGION}" \
  --allow-unauthenticated

# Worker (stejný image, jiný CMD/entrypoint nebo jiný env, BEZ veřejného přístupu)
gcloud run deploy datalayer-worker \
  --image "${REGION}-docker.pkg.dev/${PROJECT_ID}/datalayer/api:latest" \
  --region "$REGION" --service-account "$SA" \
  --add-cloudsql-instances "${PROJECT_ID}:${REGION}:datalayer-pg" \
  --command "node" --args "dist/worker/server.js" \
  --no-allow-unauthenticated          # volá jen Cloud Tasks/Scheduler s OIDC
```

> `DATABASE_URL` pro Cloud SQL přes unix socket:
> `postgresql://app:PASS@localhost/datalayer?host=/cloudsql/PROJECT:REGION:datalayer-pg`

---

## 16. Migrace databáze

Dle zvyklostí předchozí aplikace: **schema přes `prisma db push` + `prisma generate`**,
a **manuální idempotentní SQL** pro nestandardní zásahy:

- `prisma/migrations/manual_0001_*.sql`, `manual_0002_*.sql`, …
- Každý skript napsán idempotentně (`CREATE TABLE IF NOT EXISTS`,
  `ALTER TABLE ... ADD COLUMN IF NOT EXISTS`, `CREATE INDEX IF NOT EXISTS`).
- Aplikace manuálních migrací při deployi (např. krok v CI nebo `psql -f`).

```bash
psql "$DATABASE_URL" -f prisma/migrations/manual_0001_init.sql
npx prisma db push
npx prisma generate
```

---

## 17. CI/CD

Cloud Build trigger (`cloudbuild.yaml`) napojený na GitHub repo: na push do
hlavní větve build image → push do Artifact Registry → `gcloud run deploy` API i
Worker. Případně GitHub Actions s `google-github-actions/deploy-cloudrun`.

Kroky pipeline:

1. `npm ci` (server + web)
2. lint (`eslint`) + `prisma generate`
3. `vitest run`
4. `npm run build` (server tsc, web vite)
5. build & push Docker image
6. deploy API + Worker
7. (volitelně) aplikace manuálních SQL migrací

---

## 18. Konfigurace prostředí (env)

`.env.example`:

```env
NODE_ENV=development
PORT=8080
DATABASE_URL=postgresql://app:app@localhost:5432/datalayer
ENCRYPTION_KEY=             # base64 32 B (openssl rand -base64 32)
JWT_SECRET=                 # openssl rand -base64 48
GCP_PROJECT_ID=datalayer-app
GCP_REGION=europe-west1
TASKS_WORKER_URL=https://datalayer-worker-xxxx.run.app
GOOGLE_OAUTH_CLIENT_ID=
GOOGLE_OAUTH_CLIENT_SECRET=
GMAIL_USER=
GMAIL_PASS=
GMAIL_FALLBACK_USER=
GMAIL_FALLBACK_PASS=
# provider-specific (příklady):
GOOGLE_ADS_DEVELOPER_TOKEN=
META_APP_ID=
META_APP_SECRET=
PIPEDREAM_CLIENT_ID=
PIPEDREAM_CLIENT_SECRET=
PIPEDREAM_PROJECT_ID=
```

V produkci tyto hodnoty pochází ze Secret Manageru (`--set-secrets`), ne z `.env`.

---

## 19. Lint a testy

- **ESLint** v legacy formátu (`.eslintrc.cjs`) s `@typescript-eslint`.
- **Vitest** — `vitest.config.ts`, testy zatím prázdné (kostra `src/**/*.test.ts`).

```jsonc
// server/package.json (scripts)
{
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "dev:worker": "tsx watch src/worker/server.ts",
    "build": "tsc -p tsconfig.json",
    "lint": "eslint \"src/**/*.ts\"",
    "test": "vitest run",
    "prisma:push": "prisma db push",
    "prisma:generate": "prisma generate"
  }
}
```

---

## 20. Spouštěcí checklist

- [ ] GCP projekt + fakturace + povolená API
- [ ] Artifact Registry, Cloud SQL (Postgres), Cloud Tasks fronty
- [ ] Service account + IAM role (SQL client, BigQuery, Tasks enqueuer, Secret accessor, Run invoker)
- [ ] Secrety v Secret Manageru (ENCRYPTION_KEY, JWT_SECRET, OAuth, Gmail)
- [ ] Monorepo (`server` + `web`) + git
- [ ] Backend: Express + Zod env + Prisma client + crypto + JWT/OAuth
- [ ] Prisma schema (11 entit) → `db push` + `generate`
- [ ] BaseProvider + registr providerů (oauth / token / pipedream)
- [ ] BaseDestination + BigQuery/MySQL/Postgres
- [ ] Worker handler + scheduler + Cloud Tasks enqueue (idempotence!)
- [ ] Notifikace (nodemailer Gmail + fallback)
- [ ] Frontend React 19 + RR7 + Vite, build do `dist`
- [ ] Dockerfile, Cloud Build, deploy API + Worker na Cloud Run
- [ ] Cloud Scheduler tick → `/tasks/tick`
- [ ] OAuth redirect URIs nastavené v Google Console
- [ ] Manuální idempotentní SQL migrace připravené
- [ ] ESLint + Vitest scaffolding
- [ ] CI/CD pipeline

---

*Dokument popisuje doporučený postup; konkrétní názvy služeb, regiony a tiery
uprav dle reálných potřeb projektu.*
