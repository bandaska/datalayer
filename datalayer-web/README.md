# datalayer-web

Web datalayer.cz přepsaný z PHP/Nette na **Node.js + Express + React + React
Router 7 + Vite + TypeScript**, s úložištěm dat ve **Firestore (Native)** a
deployem na **Google Cloud Run z gitu**.

## Stack

- **Runtime:** Node.js 20+
- **Server:** Express 4 (SSR handler React Routeru) – `server.js`
- **Frontend:** React 19 + React Router 7 (framework mode, SSR) + Vite
- **Data:** Firestore (Native) – stránky webu (`pages`), menu a texty (`content`), blog
  (`articles`), zprávy z formuláře a nastavení. Free tier, serverless, bez DB instance a bez hesla.
- **Obsah:** celý obsah webu jde upravovat v administraci – stránky, menu, patička, texty
  formuláře a cookie lišty ([`docs/cms.md`](./docs/cms.md)); HTML čistí `sanitize-html`,
  kód v článcích nasvítí highlight.js
- **Konfigurace:** `.env` (viz `.env.example`); na Cloud Run env proměnné

## Struktura

```
server.js                 Express + SSR (produkce), bezpečnostní hlavičky, /health, heslo webu
react-router.config.ts    ssr: true
Dockerfile, cloudbuild.yaml
app/
  root.tsx                layout, Consent Mode v2 + GTM, 301 přesměrování, ErrorBoundary
  routes.ts               routování (architektura URL podle SEO analýzy)
  app.css                 styly webu
  admin.css               světlý vzhled administrace (jen /admin)
  content/
    schema.ts             schéma obsahu (zod): stránka, sekce, bloky, FAQ, menu, texty webu
    defaults/             výchozí obsah – homepage, 11 služeb, 3 řešení, rozcestník, jak
                          pracujeme, o nás, kontakt, zásady, cookies, menu a texty; z něj
                          migrace založí obsah v administraci (docs/cms.md)
  components/             Navbar (mega-menu), Footer, ContactBlock, CookieBar,
                          Pictograms (vlastní SVG piktogramy), landing/* (šablona stránky),
                          admin/* (editor stránek, bloků, menu a textů)
  lib/
    seo.ts                meta tagy, canonical, OG, JSON-LD (Organization, Service,
                          BreadcrumbList, FAQPage, BlogPosting)
    redirects.ts          301 ze starých URL, malá písmena, bez koncového lomítka
    consent.ts            Consent Mode v2 + cookie lišta (cookie dl_consent)
    contact.ts            formulář: témata, validace, normalizace pro enhanced conversions
    turnstile.server.ts   Cloudflare Turnstile
    mailer.server.ts      e-mail přes SMTP
    messages.server.ts    zprávy z formuláře (kolekce messages)
    settings*.ts          nastavení webu z administrace (settings/site)
    tokenGate.ts          brána tokenem pro /migrate
    textRules.ts          strojová kontrola pravidel českých textů (editor i testy)
    cms/                  stránky, menu a texty ve Firestore: čtení, uložení, čištění HTML,
                          převod pro Firestore, stav importu (docs/cms.md)
    articles/users/auth.server.ts …
  migrations/             migrace Firestore (manifest, runner, skripty) – docs/migrace.md
  routes/                 home, page (všechny ostatní stránky z administrace), blog,
                          dekujeme, api.kontakt, sitemap.xml, robots.txt, llms.txt,
                          migrate, admin*
scripts/                  seed.ts, create-admin.ts, og-images.ts
tests/                    vitest: obsah, CMS a migrace obsahu, migrace, token, přesměrování, formulář
docs/                     cms.md, migrace.md, HARD-RULES.md (pravidla českých textů)
public/                   favicon, dl.png, og/*.png (obrázky pro sdílení)
```

## SEO

Podle analýzy v `../seo-analyza/` (souhrn `00_SOUHRN.md`):

- **URL** česky a malými písmeny (`/sluzby/server-side-tracking`, `/reseni/e-shopy`…), staré adresy
  ze stagingu přesměrované 301 (`app/lib/redirects.ts`), sjednocené velikosti písmen a lomítka.
- Každá stránka má **title, description, canonical, Open Graph** (obrázek 1200×630 z `public/og/`)
  a **JSON-LD** – generuje `seoMeta()` ze stejných dat jako viditelný obsah (FAQ 1:1).
- **`/sitemap.xml`** (zveřejněné stránky bez noindex a články, s datem poslední úpravy), **`/robots.txt`**,
  **`/llms.txt`** (přehled pro AI vyhledávače).
- Výkon: bez HubSpotu, bez Font Awesome, bez CDN – Bootstrap i fonty (Inter 400/600/800, Roboto
  Mono 400) jsou z balíčků, highlight.js jen na stránce článku.
- Dokud je web zamčený heslem (`ENABLE_AUTH=1`), server posílá `X-Robots-Tag: noindex`.
- OG obrázky se generují skriptem: `npm i --no-save playwright && npm run og:images`.

## Kontaktní formulář a měření

Nativní formulář místo HubSpotu podle vzoru annanovotna.cz (`../seo-analyza/05_formulare/`):
honeypot → limit frekvence podle IP → validace → **Cloudflare Turnstile** → uložení do Firestore
(kolekce `messages`, čte se v administraci) → e-mail všem **příjemcům nastaveným v administraci**.
Bez JS funguje klasický POST s přesměrováním na `/dekujeme`.

Do dataLayeru jdou `lead_form_start`, `lead_form_error` a `generate_lead` (`form_id`, `lead_type`,
`lead_topics`, `lead_id`; SHA-256 hash e-mailu a telefonu jen se souhlasem s marketingovými
cookies). Cookie lišta s Google Consent Mode v2 (výchozí `denied`, kategorie Nezbytné /
Analytické / Marketingové, události `cookie_consent_update` a `cookie_consent_loaded`), GTM se
načte jen s ID z administrace. Další události: `cta_click`, `faq_open`, `tab_select`,
`code_copy`, `contact_click`.

## Admin

Administrace na `/admin` – světlý vzhled s kontrastními texty (`app/admin.css`), postranní menu
(na mobilu rozbalovací):

- **Přihlášení** (`/admin/login`) – cookie session podepsaná `SESSION_SECRET`,
  hesla hashovaná bcryptem, uživatelé v kolekci `users`.
- **Přehled** (`/admin`) – počty, nepřečtené zprávy, čekající migrace, naposledy upravené stránky.
- **Stránky** (`/admin/pages`) – homepage, služby, řešení, ostatní stránky i zásady: hero,
  sekce s bloky (odstavce, karty, kroky, tabulky, schéma, záložky, volný text…), FAQ, kontaktní
  blok, související stránky a články, SEO, strukturovaná data; koncept / zveřejněná, noindex,
  kontrola pravidel českých textů přímo v editoru ([`docs/cms.md`](./docs/cms.md)).
- **Menu a patička** (`/admin/navigation`) – hlavní menu s rozbalovacími sloupci, tlačítko,
  patička, lišta na mobilu.
- **Texty webu** (`/admin/texts`) – kontaktní formulář, cookie lišta, úvod blogu, děkovací
  stránka, 404, popis firmy pro vyhledávače.
- **Články** (`/admin/articles`) – výpis, vytvoření, editace, mazání (kolekce `articles`);
  WYSIWYG editor s přepínačem na surové HTML, funguje i bez JS (textarea).
- **Zprávy** (`/admin/messages`) – zprávy z kontaktního formuláře (detail, přečteno, smazání).
- **Nastavení** (`/admin/settings`, jen role `admin`) – příjemci formuláře, ID Google Tag
  Manageru, telefon a LinkedIn zobrazené na webu; přehled, jestli je nastavený Turnstile a SMTP.
- **Migrace** (`/admin/migrations`, jen role `admin`) – připravené změny dat ve Firestore
  (import článků, úpravy obsahu…) jedním kliknutím, viz [`docs/migrace.md`](./docs/migrace.md).
- **Uživatelé** (`/admin/users`, jen role `admin`) – výpis, vytvoření, mazání,
  **reset hesla**; role `admin` (vše) / `editor` (obsah webu a zprávy).
- **Můj účet** (`/admin/account`) – změna vlastního hesla (s ověřením stávajícího).

První admin se vytvoří skriptem:

```bash
GOOGLE_CLOUD_PROJECT=<id> npm run admin:create -- mail@vit.cz HesloMin8znaku "Jméno"
```

## Mapování z původní Nette aplikace

| Nette | Zde |
|---|---|
| `RouterFactory` | `app/routes.ts` |
| `@layout.latte` | `app/root.tsx` + `app/app.css` + komponenty |
| `HomePresenter` | `app/routes/home.tsx` (obsah ze stránky `home` v administraci) |
| `ServicesPresenter` (+ akce) | `app/routes/page.tsx` – stránky z administrace (kolekce `pages`) |
| `BlogPresenter::default` | `app/routes/blog._index.tsx` |
| `BlogPresenter::detail` | `app/routes/blog.$slug.tsx` |
| `ArticleService` | `app/lib/articles.server.ts` (Firestore) |
| `DbContentControl` | `app/components/ArticleContent.tsx` |
| `Error4xx/5xx` | `ErrorBoundary` v `root.tsx` |
| Basic auth v `BasePresenter` | `express-basic-auth` v `server.js` (`ENABLE_AUTH=1`) |
| MySQL + Nette Database | Firestore (Native) |
| – (nově) | Admin na `/admin`: stránky, menu, texty, články, zprávy, nastavení, migrace, uživatelé |

## Datový model (Firestore)

- **`articles/{slug}`** – `slug`, `title`, `author`, `date` (Timestamp),
  `description` (meta popis), `updatedAt`, `content` (HTML). Slug = ID dokumentu.
- **`messages/{leadId}`** – zprávy z kontaktního formuláře (jméno, e-mail, telefon, web, témata,
  zpráva, `formId`, `leadType`, stránka, `createdAt`, `read`, `mailSent`).
- **`settings/site`** – nastavení z administrace: `recipients`, `gtmId`, `phone`, `linkedinUrl`.
- **`_migrations/state`, `_migrations/lock`** – evidence a zámek migrací.
- **`pages/{id}`** – stránka webu podle schématu `app/content/schema.ts`; ID = cesta s `__` místo
  lomítka (`sluzby__bigquery`), homepage `home`. Starší dokumenty (`title`, `perex`, `content`)
  web převede za běhu a editor je při uložení uloží v novém formátu.
- **`content/navigation`, `content/texts`** – menu s patičkou a texty webu; **`content/meta`**
  – `initialized: true` po importu obsahu (do té doby web doplní chybějící obsah z kódu).

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

`.env` (lokálně) / proměnné služby Cloud Run (tajemství přes Secret Manager), vzor `.env.example`:

| Proměnná | K čemu |
|---|---|
| `GOOGLE_CLOUD_PROJECT` | projekt Firestore (na Cloud Run automaticky) |
| `SESSION_SECRET` | podpis cookie administrace (Secret Manager) |
| `ENABLE_AUTH`, `SITE_USER`, `SITE_PASS` | heslo celého webu; `ENABLE_AUTH=1` = zamčeno + `X-Robots-Tag: noindex` |
| `TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile ve formuláři (bez obou klíčů vypnutý) |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_SECURE`, `MAIL_FROM` | odesílání poptávek e-mailem (bez `SMTP_HOST` se zprávy jen ukládají) |
| `MIGRATION_TOKEN` | migrační URL `/migrate` (min. 32 znaků, nastavit jen na dobu potřeby) |

Příjemci formuláře, GTM ID, telefon a LinkedIn se **nenastavují v env**, ale v administraci
(`/admin/settings`). Firestore se autentizuje přes service account (ADC) – **žádné DB heslo**.
`cloudbuild.yaml` nasazuje s `--update-env-vars`, takže proměnné nastavené ručně na službě
(heslo webu, Turnstile, SMTP) deploy nepřepíše.

## Testy

```bash
npm test                 # vitest: migrace, brána tokenem, 301, formulář, kontrola obsahu
npm run typecheck && npm test && npm run build   # před každým pushem
```

## Poznámka k obsahu

Původně sloupec `content` (MySQL) obsahoval Latte markup renderovaný přes
`DbContentControl`. Zde se ve Firestore ukládá **HTML**, které se sanitizuje a
vykreslí (`ArticleContent`). Obsah lze editovat přímo v Cloud Console
(Firestore → Data) bez redeploye. Při migraci dat ze staré DB převeď případnou
Latte syntaxi na čisté HTML.
