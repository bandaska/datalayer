# Migrace Firestore – připravené změny dat jedním kliknutím

Převzato z reportingu (`visibilitycz/reporting`, `docs/10-probe-a-migrace.md`), upraveno pro web,
který jako jediné úložiště používá Firestore.

**Pravidlo:** data ani strukturu ve Firestore neměníme ručně v konzoli ani jednorázovým skriptem
z počítače. Každá připravená změna (nastavení, import nových článků, hromadná úprava obsahu,
přejmenování pole…) je **migrace v repozitáři**: prošla pull requestem a testy a nasazuje se
tlačítkem v administraci. Běžná práce s obsahem (úprava jednoho článku, nová landing page,
nastavení příjemců formuláře) zůstává v administraci – migrace jsou pro změny, které připravuje
vývoj.

| | |
|---|---|
| Manifest (pořadí) | `app/migrations/manifest.ts` |
| Migrace | `app/migrations/scripts/YYYYMMDD_nazev.ts` |
| Pomocné funkce | `app/migrations/helpers.ts` (`importArticle`, `importPage`, `replaceAll`) |
| Runner | `app/migrations/runner.ts` |
| Evidence a zámek | Firestore `_migrations/state` a `_migrations/lock` |
| Nasazení | administrace **Migrace** (`/admin/migrations`, jen role admin) nebo `GET /migrate?run=1` |
| Kontrola | `tests/migrations.test.ts` (každý soubor je v manifestu a naopak) |

## Jak přidat migraci

1. Soubor `app/migrations/scripts/YYYYMMDD_nazev.ts` (malá písmena, číslice, `_`) s exportem
   `migration` – `id` = název souboru, `description` česky (zobrazuje se v administraci),
   `targets: ['firestore']` a `run(ctx)`. Vzory jsou v `app/migrations/scripts/README.md`.
2. **Ve stejném commitu** import a řádek **na konec** `app/migrations/manifest.ts`. Bez toho ji
   tlačítko ani URL nikdy nepustí – chybějící záznam shodí `npm test`.
3. `run` musí být **idempotentní** – běh může spadnout uprostřed a pak se pouští znovu:
   `set(…, { merge: true })`, nebo přečíst a zapsat jen chybějící / změněné; mazání jen
   s podmínkou, která po prvním běhu nic nenajde; dávky po nejvýš 500 zápisech.
4. Dlouhé změny rozdělit – běh jede uvnitř HTTP požadavku a Cloud Run ho utne po 300 s.
5. Návratový text `run` je shrnutí výsledku – ukáže se v administraci a uloží do evidence.

## Import nových článků

Text článku patří do `app/migrations/content/<slug>.html` (HTML jako z editoru: `code-container`,
`infobox`…) a migrace ho načte přes `?raw` a založí funkcí `importArticle`. Existující článek
nepřepíše (mohl ho mezitím někdo upravit v administraci); přepis jen výslovně v nové migraci
s `{ overwrite: true }`. Texty článků musí splňovat pravidla v `docs/HARD-RULES.md`.

## Nové stránky a hromadné úpravy obsahu webu

Obsah webu (stránky, menu, texty) žije ve Firestore a běžně se upravuje v administraci
([`cms.md`](./cms.md)). Když vývoj připraví celou novou stránku, třeba novou službu podle SEO
analýzy, patří do repozitáře jako data podle schématu `app/content/schema.ts` a na web ji dostane
migrace funkcí `importPage`:

```ts
import { importPage } from '../helpers';
import { page } from '../content/meta-conversions-api'; // export const page: PageInput = { … }

export const migration: Migration = {
  id: '20261101_stranka_meta_capi',
  description: 'Nová stránka služby Meta Conversions API (koncept, zveřejní ji editor).',
  targets: ['firestore'],
  async run(ctx) {
    return `stránka: ${await importPage(ctx, { ...page, published: false })}`;
  },
};
```

`importPage` projde stránku schématem a čištěním HTML jako editor, existující stránku nepřepíše
(jen s `{ overwrite: true }`) a zapíše ji ve formátu pro Firestore (pole v poli neumí). Odkaz
v menu doplní editor v sekci Menu a patička, nebo další migrace.

První import obsahu z kódu do administrace dělá migrace `20261009_cms_content_import`: uloží
všechny výchozí stránky, menu a texty, které v databázi ještě nejsou, a přepne web na obsah jen
z databáze (`content/meta.initialized`).

Přestavbu existujících stránek ukazuje `20261009_lp_stihla_sablona`: stránku přepíše jen tehdy,
když se liší od nového znění, původní dokument předtím uloží do `pages_backup/{id}@{id migrace}`
a stav zveřejnění převezme z databáze. Texty a menu mění jen tam, kde zůstalo původní výchozí
znění – úpravy z administrace nechá být. Stejný postup pro všechny výchozí stránky najednou nabízí
`syncPagesWithDefaults` v `app/migrations/helpers.ts` (používá ho `20261009_jazykovy_audit`
a `20261009_ux_redukce`). Zrušenou stránku migrace před smazáním uloží do `pages_backup`
(vzor v `20261009_ux_redukce`) a její adresu přesměruje `app/lib/redirects.ts`.

## Nasazení

Po merge do `main` a nasazení (Cloud Build):

- **Administrace → Migrace** – tabulka se stavem (čeká / aplikovaná / selhala / změněná),
  tlačítko **Nasadit čekající** a u aplikovaných **Spustit znovu**.
- **Migrační URL**, když je na Cloud Run nastavený `MIGRATION_TOKEN` (min. 32 znaků):

  ```bash
  curl -H "X-Service-Token: $MIGRATION_TOKEN" "$URL/migrate"                          # stav, nic nemění
  curl -H "X-Service-Token: $MIGRATION_TOKEN" "$URL/migrate?run=1"                    # čekající
  curl -H "X-Service-Token: $MIGRATION_TOKEN" "$URL/migrate?run=1&id=20261009_nazev"  # vynutí jednu
  ```

  Bez proměnné nebo se špatným tokenem vrací **404** (schválně, ať endpoint nejde odhalit).
  Při selhání vrací 500 s výsledky, při souběhu 409. Spustit umí **jen** migrace z manifestu.
  `/migrate` nevyžaduje heslo webu (`ENABLE_AUTH`), chrání ho token. Proměnnou nastavit jen na
  dobu, kdy je potřeba, a pak odebrat (`gcloud run services update … --remove-env-vars MIGRATION_TOKEN`).
  Token nikdy nezapisovat do repozitáře, dokumentace ani commitu.

## Pravidla běhu

- pořadí manifestu je závazné, **běh se zastaví na první chybě**; chyba se zaeviduje a ukáže
  v administraci, další běh selhanou migraci zkusí znovu,
- aplikované migrace se přeskakují; **změněná** migrace (jiný kód nebo popis než při aplikaci) se
  jen ohlásí a znovu se pustí až na vyžádání (*Spustit znovu* / `&id=`),
- souběhu brání zámek `_migrations/lock` (vzniká atomicky přes `create()`); druhý běh dostane 409,
  zámek starší 15 minut (spadlá instance) se převezme,
- evidence `_migrations/state` – kdo, kdy, za jak dlouho, shrnutí, poslední chyba. Nemazat:
  smazání znamená „nic není aplikované“ a vše se pustí znovu (proto idempotence).

Co migrace smí, určuje IAM runtime service accountu (`roles/datastore.user`).
