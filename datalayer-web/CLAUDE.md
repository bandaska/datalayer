# Pokyny pro Claude – datalayer-web

- Jazyk dokumentace, komentářů a všech textů pro uživatele: čeština. **Každý český text (web,
  administrace, články, hlášky) musí splňovat `docs/HARD-RULES.md`** – hlavně žádný trpný rod,
  uvozovky „…“, pomlčka –, číslovky slovy, data s měsícem slovy. Strojově ověřitelnou část hlídá
  `tests/content.test.ts`.
- Obsah webu vychází z SEO analýzy v `../seo-analyza/` (architektura `03_landing-pages/00_architektura-webu.md`,
  homepage `04_homepage-ux/`, formulář `05_formulare/`, články `06_clanky/`). Nevymýšlet čísla ani
  reference; podklady označené `[DOPLNIT]` vynechat, dokud je nedodá klient.
- Obsahové stránky (služby, řešení, jak pracujeme, o nás, kontakt) jsou typovaná data
  v `app/content/pages/` (typy `app/content/types.ts`, registr `app/content/registry.server.ts`,
  menu `app/content/menu.ts`). Nová stránka = soubor + registr + menu + případně route.
- SEO: meta tagy jen přes `seoMeta()` (`app/lib/seo.ts`) – canonical, OG, JSON-LD. Staré URL přesměrovat
  v `app/lib/redirects.ts` (301). Nová indexovatelná stránka patří do sitemapy.
- Kontaktní formulář: `app/components/ContactBlock.tsx` + `app/routes/api.kontakt.ts` (honeypot →
  limit → validace → Cloudflare Turnstile → uložení do Firestore → e-mail). Příjemci, GTM ID,
  telefon a LinkedIn se nastavují v administraci (`/admin/settings`, `app/lib/settings.server.ts`),
  tajemství (Turnstile, SMTP, tokeny) jen v env / Secret Manageru.
- **Měnit data nebo strukturu ve Firestore jde jen migrací** (`docs/migrace.md`): soubor
  `app/migrations/scripts/YYYYMMDD_nazev.ts` (idempotentní `run`) + řádek na konci
  `app/migrations/manifest.ts` ve stejném commitu (hlídá `tests/migrations.test.ts`). Import
  nových článků také migrací (`importArticle`). Nasazuje se tlačítkem na stránce Migrace nebo
  `GET /migrate?run=1` s `MIGRATION_TOKEN` – spouštět jen na výslovný pokyn, token si vždy
  vyžádat od uživatele a nikam ho nezapisovat.
- Web je zatím zamčený heslem (`ENABLE_AUTH=1`); dokud je, server posílá `X-Robots-Tag: noindex`.
  Heslo nevypínat bez výslovného pokynu.
- Před pushem vždy: `npm run typecheck && npm test && npm run build`.
