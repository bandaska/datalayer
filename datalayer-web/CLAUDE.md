# Pokyny pro Claude – datalayer-web

- Jazyk dokumentace, komentářů a všech textů pro uživatele: čeština. **Každý český text (web,
  administrace, články, hlášky) musí splňovat `docs/HARD-RULES.md`** – hlavně žádný trpný rod,
  uvozovky „…“, pomlčka –, číslovky slovy, data s měsícem slovy. Strojově ověřitelnou část hlídá
  `app/lib/textRules.ts` – v editoru administrace i v `tests/content.test.ts`.
- Obsah webu vychází z SEO analýzy v `../seo-analyza/` (architektura `03_landing-pages/00_architektura-webu.md`,
  homepage `04_homepage-ux/`, formulář `05_formulare/`, články `06_clanky/`). Nevymýšlet čísla ani
  reference; podklady označené `[DOPLNIT]` vynechat, dokud je nedodá klient.
- **Veškerý obsah webu je v administraci** (`docs/cms.md`): stránky včetně homepage a zásad
  (kolekce `pages`), menu s patičkou a texty webu (`content/*`). Schéma `app/content/schema.ts`,
  vykreslení `app/components/landing/`, čtení a zápis `app/lib/cms/`. Výchozí obsah
  v `app/content/defaults/` slouží jen jako zdroj migrací (`20261009_cms_content_import`,
  `20261009_lp_stihla_sablona`, `20261009_jazykovy_audit`, `20261009_ux_redukce`) a záloha, než je někdo nasadí – jeho úprava produkční web
  nezmění. Novou stránku nebo hromadnou změnu obsahu připravit jako migraci (`importPage`
  v `app/migrations/helpers.ts`, přepis všech výchozích stránek se zálohou `syncPagesWithDefaults`), obsah
  se do šablon natvrdo nepíše. Firestore neumí pole v poli: stránky zapisovat jen přes `pageToDoc` /
  `encodeNested` (`app/lib/cms/codec.ts`).
- SEO: meta tagy jen přes `seoMeta()` (`app/lib/seo.ts`) – canonical, OG, JSON-LD. Staré URL přesměrovat
  v `app/lib/redirects.ts` (301). Sitemapa bere zveřejněné stránky bez noindex z administrace sama.
- Web po UX redukci (`../seo-analyza/2026-10-09_ux-redukce/`): třináct stránek, každý blok musí vést
  k formuláři. Nadtitulky, druhá tlačítka, mikrotexty, štítky karet, Technické detaily a pruh Pokračujte
  šablona nemá; FAQ nejvýš čtyři otázky. Blog je skrytý (`BLOG_PUBLIC` v `app/lib/site.ts`).
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
