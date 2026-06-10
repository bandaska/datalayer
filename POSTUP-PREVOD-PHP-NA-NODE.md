# Step-by-step postup: převod webu datalayer.cz z PHP/Nette na Node + React

Tento dokument popisuje převod stávající aplikace `datalayer.vn` (Nette PHP)
na stack **Node.js + Express + React + React Router + Vite + TypeScript**.
Cílem je zachovat funkčnost a vzhled webu, ale přepsat jej na technologie, které
už používáš (Node, Express, React, React Router).

> **Pozn. ke stacku:** Z minulého (nesouvisejícího) GCP projektu přebíráme jen
> obecné technologie — **Node, Express, React, React Router, Vite, TypeScript** a
> pro DB **Prisma** (ovšem s MySQL providerem, protože web běží na MySQL).
> Nepřebíráme GCP/Cloud Run/BigQuery/providery — to s tímto webem nesouvisí.

---

## Obsah

1. [Cíl a rozsah](#1-cíl-a-rozsah)
2. [Analýza stávající PHP aplikace](#2-analýza-stávající-php-aplikace)
3. [Cílová architektura a volba technologií](#3-cílová-architektura-a-volba-technologií)
4. [Předpoklady](#4-předpoklady)
5. [Inicializace projektu](#5-inicializace-projektu)
6. [Databázová vrstva (Prisma + MySQL)](#6-databázová-vrstva-prisma--mysql)
7. [Mapování rout (presenter → React Router)](#7-mapování-rout-presenter--react-router)
8. [Převod layoutu (@layout.latte → root.tsx)](#8-převod-layoutu-layoutlatte--roottsx)
9. [Převod jednotlivých stránek](#9-převod-jednotlivých-stránek)
10. [Klíčová výzva: obsah článků uložený jako Latte](#10-klíčová-výzva-obsah-článků-uložený-jako-latte)
11. [Zvýraznění kódu + tlačítko Copy v Reactu](#11-zvýraznění-kódu--tlačítko-copy-v-reactu)
12. [Přístupová ochrana (HTTP Basic Auth)](#12-přístupová-ochrana-http-basic-auth)
13. [Kontaktní formulář (HubSpot)](#13-kontaktní-formulář-hubspot)
14. [SEO a meta tagy](#14-seo-a-meta-tagy)
15. [Statická aktiva, fonty, favicon](#15-statická-aktiva-fonty-favicon)
16. [Lokální vývoj](#16-lokální-vývoj)
17. [Build a produkční běh (Express)](#17-build-a-produkční-běh-express)
18. [Migrace dat](#18-migrace-dat)
19. [Mapování souborů PHP → Node](#19-mapování-souborů-php--node)
20. [Fázový plán a checklist](#20-fázový-plán-a-checklist)
21. [Rizika a poznámky](#21-rizika-a-poznámky)

---

## 1. Cíl a rozsah

Přepsat marketingový + blogový web datalayer.cz tak, aby:

- běžel na **Node.js + Express** místo PHP/Nette,
- frontend byl v **Reactu** s **React Router 7**,
- zachoval URL strukturu (`/`, `/blog`, `/blog/<slug>`, sekce služeb) kvůli SEO,
- zachoval vizuál (Bootstrap 5 + vlastní CSS, branding cyan/dark),
- zachoval blog napojený na stávající MySQL databázi (`articles`, `authors`),
- zachoval zvýrazňování kódu v článcích, tlačítko Copy a kontaktní formulář.

---

## 2. Analýza stávající PHP aplikace

Co aplikace dnes obsahuje (zjištěno ze zdrojových kódů v `datalayer.vn/`):

| Oblast | Stav v Nette |
|---|---|
| **Routování** | `RouterFactory`: `blog/<slug>`→`Blog:detail`, `blog[/]`→`Blog:default`, fallback `<presenter>/<action>[/<id>]`→`Home:default` |
| **Presentery** | `Home` (statická marketingová stránka), `Services` (statická, odkazy na `ga4`/`gtm`/`bigquery`), `Blog` (výpis + detail), `Error4xx`/`Error5xx` |
| **Model** | `ArticleService` (čte tabulku `articles` přes Nette Database Explorer), entita `Article` (`id, title, slug, author, date, content`) |
| **DB** | MySQL (`mysql:host=mysql.next01.exon.io;dbname=usagjqhc_datalayer`), tabulky `articles` + `authors` (autor přes `ref("author")->name`) |
| **Šablony** | Latte: `@layout.latte` (373 ř., inline CSS + nav + footer + kontakt), `Home/default.latte`, `Blog/default.latte`, `Blog/detail.latte` |
| **Obsah článků** | Sloupec `content` obsahuje **Latte/HTML markup**, renderuje se dynamicky přes `DbContentControl` (zapíše do temp `.latte` a vyrenderuje) |
| **Komponenta** | `DbContentControl` + `DbContentControlFactory` (render DB obsahu) |
| **Frontend assety** | Bootstrap 5.3, Font Awesome 6, Google Fonts (Inter, Roboto Mono), highlight.js 11.9 — vše z CDN; Vite + `@nette/vite-plugin` (`main.js`) |
| **JS chování** | `hljs.highlightAll()`, `copyCode()` pro tlačítko Copy, Bootstrap bundle (navbar dropdown/collapse) |
| **Přístup** | HTTP Basic Auth gate v `BasePresenter::startup()` (uživatel `vn` / heslo `555`) — vývojová ochrana |
| **Kontakt** | Vložený HubSpot formulář (embed script) |
| **Flash zprávy** | Bootstrap alerty z `$flashes` |
| **Chyby/sledování** | Tracy (e-mail notifikace na `mail@vitnovotny.cz`) |

Odkazované, ale zatím neimplementované akce: `Home:privacy`, `Services:ga4`,
`Services:gtm`, `Services:bigquery`, `Services:default` (presenter je prázdný).

---

## 3. Cílová architektura a volba technologií

**Doporučení: React Router 7 ve "framework mode" (SSR) na vlastním Express serveru.**

Proč právě takto:

- Web je marketing + blog → **SEO je důležité**, takže čisté client-side SPA
  není ideální. React Router 7 (nástupce Remixu) umí **server-side rendering**,
  **data loadery** a **meta tagy** out-of-the-box.
- React Router 7 přesně odpovídá zadanému stacku (React 19 + React Router 7 +
  Vite + TS) a běží na **Express serveru** přes `@react-router/express` — tedy
  "pro backend Express" je splněno.
- **Loadery elegantně nahradí Nette presentery**: `renderDefault()` → `loader()`
  dané route, `actionDetail($slug)` → `loader({ params })`.

```
Prohlížeč
   │  HTTP (HTML + hydratace)
   ▼
Express server (Node + TS)
   ├─ HTTP Basic Auth middleware (vývojová ochrana)
   ├─ @react-router/express  ── SSR React Router 7 app
   │     ├─ root.tsx               (= @layout.latte: nav, footer, kontakt, CSS)
   │     ├─ routes/home.tsx        (= HomePresenter)
   │     ├─ routes/services.*.tsx  (= ServicesPresenter + akce)
   │     ├─ routes/blog._index.tsx (= Blog:default, loader → seznam článků)
   │     └─ routes/blog.$slug.tsx  (= Blog:detail, loader → článek dle slug)
   ├─ (volitelné) /api/* JSON endpointy
   └─ statická aktiva (/public)
        │
        ▼ loadery čtou data
   Prisma Client (MySQL) ── stávající DB (articles, authors)
```

**Alternativa (jednodušší, horší SEO):** čisté Vite SPA (React + React Router v
*declarative* módu) + samostatné Express JSON API (`/api/articles`). Volit jen
pokud SEO blogu není priorita. Dále v dokumentu jdeme cestou **SSR (doporučeno)**.

**DB přístup:** **Prisma 6** s `provider = "mysql"` namířený na stávající
databázi (introspekce přes `prisma db pull`). Lehčí alternativa je ovladač
`mysql2` přímo — schéma je malé (2 tabulky), ale Prisma dává typovou bezpečnost
a je ve stacku.

---

## 4. Předpoklady

```bash
node -v   # >= 20
npm -v
```

- Node.js 20+ (LTS).
- Přístup ke stávající MySQL databázi (host/uživatel/heslo z `config/common.neon`).
  V novém projektu je přesuneme do `.env` (do gitu **nepatří**).
- Volitelně lokální MySQL (Docker) pro vývoj na kopii dat.

---

## 5. Inicializace projektu

Nejjednodušší je vyjít z oficiální šablony React Router 7:

```bash
npx create-react-router@latest datalayer-web
cd datalayer-web
```

Šablona přináší Vite, TypeScript, React 19, React Router 7 a SSR. Doinstalujeme
Express server adaptér a DB:

```bash
npm i express compression morgan
npm i @react-router/express
npm i -D @types/express @types/compression @types/morgan
npm i @prisma/client
npm i -D prisma
# vývojová basic-auth ochrana:
npm i express-basic-auth
# sanitizace HTML obsahu článků:
npm i sanitize-html
npm i -D @types/sanitize-html
# zvýraznění kódu:
npm i highlight.js
```

Cílová struktura:

```
datalayer-web/
├── server.ts                  # Express + @react-router/express
├── vite.config.ts
├── react-router.config.ts     # ssr: true
├── .env / .env.example
├── prisma/
│   └── schema.prisma          # introspektované z MySQL
├── public/                    # favicon, robots.txt, dl.png, obrázky
└── app/
    ├── root.tsx               # layout (nav, footer, kontakt, global CSS)
    ├── routes.ts              # definice rout
    ├── app.css                # přenesené CSS z @layout.latte
    ├── lib/
    │   ├── db.server.ts       # Prisma client (jen server)
    │   └── articles.server.ts # ekvivalent ArticleService
    ├── components/
    │   ├── Navbar.tsx
    │   ├── Footer.tsx
    │   ├── ContactForm.tsx    # HubSpot embed
    │   └── ArticleContent.tsx # render DB obsahu + highlight + copy
    └── routes/
        ├── home.tsx
        ├── services.tsx
        ├── services.$service.tsx
        ├── blog._index.tsx
        ├── blog.$slug.tsx
        └── privacy.tsx
```

---

## 6. Databázová vrstva (Prisma + MySQL)

`.env`:

```env
DATABASE_URL="mysql://usagjqhc_datalayer:HESLO@mysql.next01.exon.io:3306/usagjqhc_datalayer"
SESSION_USER="vn"
SESSION_PASS="555"
```

Introspekce stávající databáze (nevytváříme schéma znovu, jen ho načteme):

```bash
npx prisma init --datasource-provider mysql   # přepíše-li .env, hodnoty obnov
npx prisma db pull        # introspektuje articles, authors → schema.prisma
npx prisma generate
```

Očekávané schéma (přibližně — `db pull` doplní reálné sloupce):

```prisma
model articles {
  id      Int      @id @default(autoincrement())
  title   String
  slug    String   @unique
  author  Int                      // FK na authors.id
  date    DateTime
  content String   @db.Text        // HTML/Latte markup článku
  authors authors  @relation(fields: [author], references: [id])
}

model authors {
  id       Int        @id @default(autoincrement())
  name     String
  articles articles[]
}
```

`app/lib/db.server.ts`:

```ts
import { PrismaClient } from '@prisma/client';
// singleton kvůli HMR v devu
export const db = global.__db ?? (global.__db = new PrismaClient());
```

`app/lib/articles.server.ts` (ekvivalent `ArticleService`):

```ts
import { db } from './db.server';

export type Article = {
  id: number; title: string; slug: string;
  author: string; date: Date; content: string;
};

export async function getAll(): Promise<Article[]> {
  const rows = await db.articles.findMany({
    orderBy: { date: 'desc' },
    include: { authors: true },
  });
  return rows.map(toEntity);
}

export async function getBySlug(slug: string): Promise<Article | null> {
  const row = await db.articles.findUnique({
    where: { slug }, include: { authors: true },
  });
  return row ? toEntity(row) : null;
}

function toEntity(row: any): Article {
  return {
    id: row.id, title: row.title, slug: row.slug,
    author: row.authors?.name ?? '', date: row.date, content: row.content,
  };
}
```

> `.server.ts` suffix zajistí, že kód (a přihlašovací údaje k DB) nikdy
> nedoputuje do klientského bundlu.

---

## 7. Mapování rout (presenter → React Router)

`app/routes.ts`:

```ts
import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),                       // /            (Home:default)
  route('blog', 'routes/blog._index.tsx'),        // /blog        (Blog:default)
  route('blog/:slug', 'routes/blog.$slug.tsx'),   // /blog/<slug> (Blog:detail)
  route('sluzby', 'routes/services.tsx'),         // /sluzby      (Services:default)
  route('sluzby/:service', 'routes/services.$service.tsx'), // ga4/gtm/bigquery
  route('privacy', 'routes/privacy.tsx'),         // Home:privacy
] satisfies RouteConfig;
```

Mapování chování:

| Nette | React Router 7 |
|---|---|
| `RouterFactory` | `app/routes.ts` |
| `renderDefault()` / příprava `$template` | `loader()` + výchozí export komponenty |
| `actionDetail($slug)` + `$this->error()` | `loader({ params })` + `throw new Response(null,{status:404})` |
| `$this->template->title` | export `meta()` na route |
| `Error4xx/5xx` presentery | `ErrorBoundary` v `root.tsx` / route |
| `n:href="Blog:detail slug=>..."` | `<Link to={\`/blog/${slug}\`}>` |
| `$flashes` | flash přes session/cookie (nebo vypustit, pokud se nepoužívá) |

---

## 8. Převod layoutu (@layout.latte → root.tsx)

`@layout.latte` se rozpadne na:

- **`app/root.tsx`** — kostra dokumentu (`<html><head><body>`), `<Navbar/>`,
  `<main><Outlet/></main>`, `<ContactForm/>`, `<Footer/>`, načtení CSS/JS.
- **`app/app.css`** — celý inline `<style>` blok z layoutu (proměnné `--brand-*`,
  navbar, hero, code-container, footer, responsive). Importuje se v `root.tsx`.
- **`<Navbar/>`**, **`<Footer/>`**, **`<ContactForm/>`** komponenty.

`app/root.tsx` (kostra):

```tsx
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import './app.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';

export function links() {
  return [
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' },
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' },
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Roboto+Mono:wght@400;500&display=swap' },
  ];
}

export default function App() {
  return (
    <html lang="cs">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <main><Outlet /></main>
        <ContactForm />
        <Footer />
        {/* Bootstrap bundle kvůli dropdownu/collapse v navbaru */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
```

> `class=` → `className=`, `for=` → `htmlFor=`, self-closing tagy. Třídu
> `page-home` na `<body>` (z `isLinkCurrent('Home:*')`) lze řešit `useLocation()`
> a podmíněným `className`.

---

## 9. Převod jednotlivých stránek

**Home (`routes/home.tsx`)** — statický marketingový obsah z `Home/default.latte`.
SVG z bloku `n:syntax="off"` se přepíše 1:1 do JSX (pozor na `stroke-width` →
`strokeWidth`, `fill-opacity` → `fillOpacity`, `class` → `className`).
Odkazy `n:href` → `<Link>`.

**Services (`routes/services.tsx` + `routes/services.$service.tsx`)** — presenter
je dnes prázdný; layout odkazuje na `ga4`, `gtm`, `bigquery`. Vytvoříme přehled
služeb a detail dle parametru `:service` (např. mapa obsahu v objektu).

**Blog výpis (`routes/blog._index.tsx`)** — ekvivalent `Blog:renderDefault`:

```tsx
import { Link } from 'react-router';
import { getAll } from '../lib/articles.server';
import type { Route } from './+types/blog._index';

export async function loader() {
  return { posts: await getAll() };
}
export function meta() { return [{ title: 'Blog | datalayer.cz' }]; }

export default function BlogIndex({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;
  return (
    <section className="section-padding">
      <div className="container"><div className="row g-4">
        {posts.map((post) => (
          <div key={post.slug} className="col-md-6 col-lg-4 d-flex align-items-stretch">
            <Link to={`/blog/${post.slug}`} className="card article-card h-100 ...">
              {/* datum, autor, titulek, perex = stripHtml+truncate */}
            </Link>
          </div>
        ))}
      </div></div>
    </section>
  );
}
```

> Filtr `{$post->content|stripHtml|truncate:150}` přepíšeme pomocnou funkcí
> (odstranit HTML tagy regexem/`sanitize-html` a oříznout na 150 znaků).

**Blog detail (`routes/blog.$slug.tsx`)** — ekvivalent `Blog:actionDetail` +
`renderDetail`:

```tsx
import { getBySlug } from '../lib/articles.server';
import { ArticleContent } from '../components/ArticleContent';
import type { Route } from './+types/blog.$slug';

export async function loader({ params }: Route.LoaderArgs) {
  const article = await getBySlug(params.slug);
  if (!article) throw new Response('Článek nebyl nalezen', { status: 404 });
  return { article };
}
export function meta({ data }: Route.MetaArgs) {
  return [{ title: `${data?.article.title} | datalayer.cz` }];
}

export default function BlogDetail({ loaderData }: Route.ComponentProps) {
  const { article } = loaderData;
  return (
    <>
      <header className="article-hero">{/* datum, autor, titulek */}</header>
      <section className="article-content">
        <div className="container article-container">
          <div className="article-body-db">
            <ArticleContent html={article.content} />
          </div>
        </div>
      </section>
    </>
  );
}
```

**Error stránky** — `ErrorBoundary` v `root.tsx` (nahrazuje `Error4xx`/`Error5xx`),
s `isRouteErrorResponse()` rozliš 404 vs 500.

---

## 10. Klíčová výzva: obsah článků uložený jako Latte

Toto je největší rozdíl oproti PHP. Dnes `DbContentControl` bere sloupec
`content` (Latte/HTML), zapíše ho jako `.latte` šablonu a **vyrenderuje přes
Latte engine** s předaným `$article`. V Node Latte engine nemáme.

Realisticky obsah článků je z drtivé většiny **statické HTML** (bloky
`code-container`, `<pre><code>`, obrázky, odstavce) — Latte se tam nejspíš
využívá minimálně. Doporučený postup:

**A) Migrace obsahu na čisté HTML (doporučeno, jednorázově).**
1. Projít všechny řádky `articles.content` skriptem a zjistit, zda obsahují
   Latte syntaxi (`{...}`, `n:...`, `{$article->...}`).
2. Pokud ano, vyrenderovat je naposled stávajícím Nette/Latte (nebo ručně
   nahradit za hodnoty) a uložit výsledné **HTML** zpět do DB.
3. Od té chvíle je `content` čisté HTML.

**B) Render HTML v Reactu se sanitizací.**

`app/components/ArticleContent.tsx`:

```tsx
import sanitizeHtml from 'sanitize-html';
import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';

export function ArticleContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const clean = sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'figure', 'figcaption', 'pre', 'code', 'span', 'button', 'i']),
    allowedAttributes: { '*': ['class', 'id', 'style'], a: ['href', 'target', 'rel'], img: ['src', 'alt'] },
  });
  useEffect(() => {
    ref.current?.querySelectorAll('pre code').forEach((el) => hljs.highlightElement(el as HTMLElement));
  }, [clean]);
  return <div ref={ref} dangerouslySetInnerHTML={{ __html: clean }} />;
}
```

**C) Pro budoucí psaní článků** zvaž přechod na **Markdown** (`react-markdown` +
`rehype-highlight`) — bezpečnější a pohodlnější než HTML v DB. To je volitelné
vylepšení, ne nutnost pro migraci.

> **Bezpečnost:** `dangerouslySetInnerHTML` bez sanitizace = XSS riziko. Proto
> vždy přes `sanitize-html`. Obsah je sice "důvěryhodný" (z vlastní DB), ale
> sanitizace je levná pojistka.

---

## 11. Zvýraznění kódu + tlačítko Copy v Reactu

Stávající layout používá `hljs.highlightAll()` a globální funkci `copyCode()`.
V Reactu:

- **Highlight** — provádí `ArticleContent` přes `hljs.highlightElement` v
  `useEffect` (viz výše). CSS téma `atom-one-dark` zůstává z CDN.
- **Copy tlačítko** — protože obsah přichází jako HTML string, navěs listener
  v `useEffect` na `.btn-copy` uvnitř článku (delegace), který zkopíruje text
  z nejbližšího `<code>`:

```tsx
useEffect(() => {
  const root = ref.current;
  const onClick = (e: Event) => {
    const btn = (e.target as HTMLElement).closest('.btn-copy');
    if (!btn) return;
    const code = btn.closest('.code-container')?.querySelector('code')?.textContent ?? '';
    navigator.clipboard.writeText(code);
    /* dočasně přepnout text tlačítka na "Copied!" */
  };
  root?.addEventListener('click', onClick);
  return () => root?.removeEventListener('click', onClick);
}, []);
```

---

## 12. Přístupová ochrana (HTTP Basic Auth)

`BasePresenter` dnes vynucuje Basic Auth (`vn`/`555`) jako vývojovou ochranu.
V Express to je jednořádkový middleware před React Router handlerem
(`server.ts`):

```ts
import basicAuth from 'express-basic-auth';

if (process.env.NODE_ENV !== 'development' || process.env.ENABLE_AUTH === '1') {
  app.use(basicAuth({
    users: { [process.env.SESSION_USER!]: process.env.SESSION_PASS! },
    challenge: true,
    realm: 'Development',
  }));
}
```

> Údaje přesunout do `.env` (ne hardcode jako dnes). Pro produkční launch
> ochranu buď odstranit, nebo nahradit reálným loginem.

---

## 13. Kontaktní formulář (HubSpot)

V layoutu je HubSpot embed. V Reactu jako komponenta, která načte HubSpot
script a vykreslí `hs-form-frame`:

```tsx
import { useEffect } from 'react';
export function ContactForm() {
  useEffect(() => {
    const s = document.createElement('script');
    s.src = 'https://js-eu1.hsforms.net/forms/embed/147434044.js';
    s.defer = true; document.body.appendChild(s);
    return () => { s.remove(); };
  }, []);
  return (
    <section id="contact-form" className="section-padding" style={{ backgroundColor: '#051125' }}>
      {/* ... wrapper ... */}
      <div className="hs-form-frame" data-region="eu1"
           data-form-id="8aa3bd5d-8122-47d2-ae62-fa002f6691ca" data-portal-id="147434044" />
    </section>
  );
}
```

---

## 14. SEO a meta tagy

- Titulek `{ifset title}... | datalayer.cz` → `meta()` export na každé route
  (viz blog výše); v `root.tsx` default title.
- Díky SSR (React Router framework mode) crawler dostane plné HTML.
- Doplnit `robots.txt` (přenést z `www/robots.txt`), případně `sitemap.xml`
  generovaný resource route z článků.
- Canonical/OG tagy přidat přes `meta()` u detailu článku.

---

## 15. Statická aktiva, fonty, favicon

- `www/favicon.ico`, `www/dl.png`, `www/robots.txt` → `public/`.
- Bootstrap / Font Awesome / fonty / highlight.js: ponechat z CDN (jako dnes),
  nebo nainstalovat jako npm balíčky a importovat (offline, verzování). Pro
  začátek stačí CDN — minimalizuje práci při migraci.
- `@nette/vite-plugin` a `main.js` se nahrazují standardním Vite z React Router
  šablony — `main.js` (pokud něco dělal) přepsat do Reactu nebo zahodit.

---

## 16. Lokální vývoj

```bash
cp .env.example .env     # doplň DATABASE_URL, SESSION_USER/PASS
npx prisma db pull && npx prisma generate
npm run dev              # Vite dev server + SSR, default http://localhost:3000
```

Tip: pro vývoj na kopii dat spusť lokální MySQL v Dockeru a naimportuj dump
produkční DB (viz [Migrace dat](#18-migrace-dat)).

---

## 17. Build a produkční běh (Express)

`server.ts` (vlastní Express server hostující React Router SSR):

```ts
import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import { createRequestHandler } from '@react-router/express';

const app = express();
app.use(compression());
app.use(morgan('tiny'));

// (volitelná) Basic Auth – viz kapitola 12
// app.use(basicAuth({ ... }));

app.use(express.static('build/client', { maxAge: '1h' }));

app.all('*', createRequestHandler({
  build: () => import('./build/server/index.js'),
}));

app.listen(process.env.PORT ?? 3000, () => console.log('běží'));
```

```bash
npm run build        # Vite build: build/client + build/server
NODE_ENV=production node server.js
```

Nasazení: kamkoli, kde běží Node (VPS, kontejner, PaaS). DB zůstává stávající
MySQL. Reverzní proxy (nginx) na port Node procesu, HTTPS přes Let's Encrypt.

---

## 18. Migrace dat

Data **nemigrujeme schématem** — připojíme se na stávající MySQL. Postup:

1. **Záloha:** `mysqldump` produkční DB (`articles`, `authors`) před jakýmkoli
   zásahem.
2. **Introspekce:** `prisma db pull` vygeneruje model dle reálných sloupců.
3. **Obsah článků:** jednorázový skript, který u řádků s Latte syntaxí v
   `content` převede obsah na čisté HTML (viz kapitola 10A) a zapíše zpět.
4. **Ověření:** porovnat vykreslení několika článků starým webem a novým.

> Pokud chceš starý a nový web provozovat paralelně, čti z DB read-only a
> migrační úpravu obsahu prováděj na kopii.

---

## 19. Mapování souborů PHP → Node

| PHP / Nette | Node / React |
|---|---|
| `www/index.php` + `Bootstrap.php` | `server.ts` |
| `app/Core/RouterFactory.php` | `app/routes.ts` |
| `app/Presentation/@layout.latte` | `app/root.tsx` + `app/app.css` + `components/{Navbar,Footer,ContactForm}.tsx` |
| `Home/HomePresenter.php` + `default.latte` | `app/routes/home.tsx` |
| `Services/ServicesPresenter.php` | `app/routes/services.tsx` + `services.$service.tsx` |
| `Blog/BlogPresenter.php` + `default.latte` | `app/routes/blog._index.tsx` |
| `Blog/detail.latte` | `app/routes/blog.$slug.tsx` |
| `Model/ArticleService.php` | `app/lib/articles.server.ts` |
| `Model/Article.php` | type `Article` (tamtéž) |
| `Components/DbContentControl*` | `app/components/ArticleContent.tsx` |
| `Error4xx/Error5xx` presentery | `ErrorBoundary` v `root.tsx` |
| `config/common.neon` (DB, mapping) | `.env` + `prisma/schema.prisma` |
| `BasePresenter` basic-auth gate | `express-basic-auth` middleware |
| Nette Database Explorer | Prisma Client (MySQL) |
| Latte filtry (`date`, `truncate`, `stripHtml`) | JS helpery (Intl/date-fns, vlastní funkce) |
| `@nette/vite-plugin` + `main.js` | standardní Vite (z RR7 šablony) |

---

## 20. Fázový plán a checklist

**Fáze 1 — skeleton**
- [ ] `create-react-router` projekt, Express server, basic-auth middleware
- [ ] `app.css` (přenesené CSS z layoutu), `root.tsx`, Navbar, Footer, ContactForm
- [ ] Routy v `app/routes.ts`, prázdné stránky + ErrorBoundary

**Fáze 2 — data**
- [ ] `.env` + DATABASE_URL, `prisma db pull` + `generate`
- [ ] `articles.server.ts` (`getAll`, `getBySlug`)

**Fáze 3 — stránky**
- [ ] Home (vč. hero SVG → JSX)
- [ ] Services + detaily (ga4/gtm/bigquery)
- [ ] Blog výpis (karty, perex přes stripHtml+truncate)
- [ ] Blog detail + `ArticleContent` (sanitizace, highlight, copy)
- [ ] Privacy stránka

**Fáze 4 — obsah a SEO**
- [ ] Migrace obsahu článků na HTML (kapitola 10A)
- [ ] `meta()` na všech routách, robots.txt, (sitemap)

**Fáze 5 — produkce**
- [ ] `npm run build`, běh přes `node server.js`
- [ ] Reverzní proxy + HTTPS, rozhodnout o ponechání/odebrání basic-auth
- [ ] Vizuální QA proti starému webu, kontrola URL (redirecty, pokud se mění)

---

## 21. Rizika a poznámky

- **Latte v obsahu článků** je hlavní neznámá — před migrací zkontroluj reálný
  obsah `articles.content`. Pokud obsahuje složitější Latte (cykly, podmínky),
  bude potřeba ruční převod konkrétních článků. Realisticky půjde většinou o HTML.
- **SEO/URL:** zachovej cesty `/blog/<slug>`. Pokud se mění `/sluzby` apod.,
  nastav 301 redirecty z původních URL.
- **Basic-auth (`vn`/`555`)** je dnes natvrdo v kódu — v novém projektu jen
  z `.env` a pro veřejný launch nahradit/odebrat.
- **Bezpečnost obsahu:** vždy sanitizovat HTML před `dangerouslySetInnerHTML`.
- **DB jen pro čtení:** web data jen čte; ujisti se, že DB uživatel pro web
  nemá zbytečná zápisová práva (kromě jednorázové migrace obsahu).
- **Tracy → logování:** Nette mělo Tracy s e-mail notifikací chyb. V Node lze
  použít `pino` (z minulého stacku) + případně e-mail/alerting dle potřeby.
- **Flash zprávy:** v kódu jsou připravené, ale zřejmě nevyužité. Přenášet jen
  pokud je reálně potřebuješ (vyžadovalo by session/cookie vrstvu).

---

*Postup je doporučený plán; konkrétní názvy rout (`/sluzby` vs `/services`),
ponechání CDN vs npm balíčků a rozsah migrace obsahu uprav dle skutečného stavu
databáze a preferencí.*
