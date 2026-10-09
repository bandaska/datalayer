# Obsah webu v administraci

Celý obsah webu upravuje editor v administraci, kód obsahuje jen šablony. Platí to pro všechny
stránky včetně homepage, rozcestníku služeb a zásad, pro menu s patičkou i pro drobné texty
formuláře, cookie lišty nebo chybové stránky.

## Co kde upravit

| Sekce administrace | Co obsahuje |
|---|---|
| **Stránky** (`/admin/pages`) | homepage, služby, řešení, jak pracujeme, o nás, kontakt, zásady a cookies – hero, sekce s bloky, FAQ, kontaktní blok, související stránky a články, SEO, strukturovaná data |
| **Menu a patička** (`/admin/navigation`) | hlavní menu a rozbalovací sloupce, tlačítko v menu, patička, lišta s tlačítky na mobilu |
| **Texty webu** (`/admin/texts`) | kontaktní formulář (včetně fotky osoby a kroků „co se stane po odeslání“), cookie lišta, postup spolupráce (pět kroků pro celý web), společné texty stránek (nadpis FAQ, pruh Pokračujte), úvod blogu, děkovací stránka, stránka 404, popis firmy pro vyhledávače |
| **Články** (`/admin/articles`) | blog |
| **Nastavení** (`/admin/settings`) | příjemci formuláře, telefon, LinkedIn, ID Google Tag Manageru, provozovatel webu (jméno nebo firma, IČO, sídlo, zápis v rejstříku) |

Uložená stránka platí na webu hned. Menu a texty web drží v paměti nejvýš půl minuty.

## Stránka

Stránka má adresu, druh (homepage, služba, řešení, stránka, zásady), krátký název pro menu
a drobečkovou navigaci, piktogram a stav:

- **koncept** – vidí ho jen přihlášený editor, návštěvník dostane 404,
- **zveřejněná** – web ji zobrazí a sitemapa ji uvede,
- **noindex** – web ji zobrazí, ale vyhledávačům ji zakáže a sitemapa ji vynechá.

Obsah tvoří **hero** (nadpis H1, jeden úvodní odstavec, tlačítka, nejvýš tři body důvěry),
**sekce** a v nich **bloky**. Sekce má kotvu (`/stranka#kotva`), nadpis, úvod, pozadí (světle
šedé, bílé, tmavé, tmavě modré) a rozvržení (nadpis nahoře, nebo vlevo a bloky vpravo). Skrytá
sekce zůstane v administraci, web ji ale nevykreslí – hodí se pro obsah, který čeká na nasazení
(např. „Jak měříme vlastní web“ do spuštění GTM). Typy bloků:

| Blok | K čemu |
|---|---|
| Odstavce | běžný text, inline HTML (`<strong>`, `<em>`, `<code>`, odkaz) |
| Seznam | odrážky s volitelným nadpisem |
| Karty | mřížka karet s piktogramem, textem, odrážkami, štítky a odkazem; vzhled Symptomy = na mobilu kompaktní seznam, u víc než čtyř karet tři a tlačítko „Zobrazit další“ |
| Kroky | postup s výstupem, délkou a tím, co dodá klient; karty vedle sebe, nebo pod sebou s podkroky (stránka Jak pracujeme) |
| Postup spolupráce | jednotných pět kroků z Textů webu, u služby jde upravit popis kroku 3 |
| Rozhodnutí ✓ / ✕ | dva sloupce: kdy služba dává smysl a kdy doporučíme počkat |
| Čísla v boxech | dvě až čtyři čísla (např. náklady provozu) s poznámkou a zdrojem |
| Tabulka | srovnání, zvýrazněný sloupec |
| Schéma toku | sloupce se šipkami (jak tečou data) |
| Upozornění | zvýrazněný box |
| Kód | ukázka kódu se zvýrazněním syntaxe (obarví server) a tlačítkem Kopírovat |
| Záložky | obsah pro e-shop / B2B / velkou firmu apod. |
| Volný text | HTML z vizuálního editoru (zásady, starší stránky) |
| Štítky | platformy a nástroje, volitelně s odkazem |
| Nejnovější články | výpis posledních článků z blogu; dokud jich blog nemá aspoň minimální počet (výchozí tři), web blok i celou sekci skryje |
| Přehled z menu | dlaždice služeb nebo řešení podle menu (rozcestník, homepage) |
| Nastavení cookies | tlačítko, které otevře volbu souhlasu |
| Provozovatel webu | jméno nebo firma, IČO, sídlo a e-mail z Nastavení; bez vyplněného jména se nezobrazí |
| Osoba za webem | jméno, role, praxe a nástroje z bloku, fotka z Textů webu (Kontakt), LinkedIn z Nastavení; bez fotky i bez textu o praxi se nezobrazí |

Sekci, ve které by žádný blok nic neukázal (osoba bez podkladů, provozovatel bez údajů, články
pod minimálním počtem), web vynechá celou.

Pod sekcemi šablona sama přidá **FAQ** (vlevo nadpis a sbalené **Technické detaily** – obsah pro
technické čtenáře, který jednou poputuje do článku), pruh **Pokračujte** (navazující stránky
a existující články k tématu) a **kontaktní blok** – na konci stránky, nebo hned pod úvodem
(stránka Kontakt).

### Štíhlá šablona služeb a řešení

Podle vyhodnocení webu (`seo-analyza/09_vyhodnoceni/vyhodnoceni-webu.md`, kap. 3.1) má stránka
služby nebo řešení posloužit k rozhodnutí a poptávce, hloubka patří do Technických detailů
a článků. U výchozího obsahu to hlídá `tests/content.test.ts`:

- nejvýš sedm sekcí z obsahu, FAQ pět až šest otázek, nejvýš tři body důvěry,
- nejvýš jedna viditelná tabulka (tři sloupce, šest řádků), žádný kód v sekcích,
- blok symptomů a blok Postup spolupráce, žádné ručně psané kroky ani záložky segmentů,
- do 1 900 slov bez Technických detailů, v pruhu Pokračujte nejvýš tři stránky a tři články.

Editor hlídá:

- **schéma** – povinná pole, délky, bezpečné odkazy (`/…`, `#…`, `https://…`, `mailto:`,
  `tel:`), unikátní kotvy, které se nekříží s kotvami šablony (`kontakt`, `faq`…),
- **adresy aplikace** – stránka nesmí obsadit `/admin`, `/blog`, `/api`, `/dekujeme` a další,
- **pravidla českých textů** z `docs/HARD-RULES.md` – panel Kontrola textů ukazuje chyby
  (rovné uvozovky, dlouhá pomlčka, zástupný text, zakázané formulace) a upozornění na možný
  trpný rod nebo číslovky. Stejnou kontrolu (`app/lib/textRules.ts`) pouští testy.

HTML v polích, která to dovolují, server při uložení vyčistí (`app/lib/cms/sanitize.server.ts`),
takže skript ani obsluha událostí na web neprojde.

## Uvnitř

| Firestore | Obsah |
|---|---|
| `pages/{id}` | stránka podle schématu `app/content/schema.ts`; ID = cesta, lomítko jako `__` (`sluzby__bigquery`), homepage `home` |
| `content/navigation` | menu, tlačítko, patička, lišta na mobilu |
| `content/texts` | texty formuláře, cookie lišty, blogu, děkovací stránky, 404 a popis firmy |
| `content/meta` | `initialized: true` po importu obsahu z kódu |
| `pages_backup/{id}` | záloha starší stránky, kterou import nahradil (jen když nastala kolize cest) |
| `pages_backup/{id}@{migrace}` | původní znění stránky, kterou přepsala obsahová migrace (např. `20261009_lp_stihla_sablona`) |

- Čtení a zápis: `app/lib/cms/` – `pages.server.ts` (stránky), `singletons.server.ts` (menu
  a texty), `loadPage.server.ts` (data pro vykreslení), `codec.ts` (převod pro Firestore).
- Vykreslení: `app/routes/home.tsx` a `app/routes/page.tsx` (všechny ostatní cesty), šablona
  `app/components/landing/`. Menu a patička: `Navbar.tsx`, `Footer.tsx`.
- **Firestore neumí pole v poli** (řádky tabulky). Zápis proto vede vždy přes `pageToDoc` /
  `encodeNested`, které vnořené pole zabalí do `{ cells: […] }`; čtení ho rozbalí.
- Starší stránky z dřívější administrace (`title`, `perex`, `content`) web převede za běhu na
  stránku s jedním blokem volného textu. Editor je při uložení zapíše v novém formátu.

### Výchozí obsah a import

Obsah, který na web připravil vývoj podle SEO analýzy, leží v `app/content/defaults/`. Do
databáze ho přesune migrace **`20261009_cms_content_import`** (administrace → Migrace):

- uloží každou výchozí stránku, menu a texty, které v databázi ještě nejsou – co už editor
  uložil, nechá beze změny,
- nastaví `content/meta.initialized`.

Dokud migrace neproběhne, web doplní chybějící stránky, menu a texty z kódu a editor je může
upravovat už teď – první uložení je přenese do databáze. Po importu web bere obsah jen
z databáze, takže smazaná stránka zůstane smazaná a úprava souborů v `defaults/` web nezmění.

Hromadnou změnu obsahu proto přináší další migrace. **`20261009_lp_stihla_sablona`** přepíše
stránky novým zněním ze štíhlé šablony (původní uloží do `pages_backup`, stav zveřejnění nechá,
smazanou stránku nezaloží) a zkrátí text cookie lišty a popisek Dashboardů v menu – jen pokud
je nikdo neupravil. Nová pole textů webu doplní schéma při čtení výchozími hodnotami.

## Pro vývoj

- **Nová stránka připravená v kódu** (např. nová služba): data podle `PageInput` a migrace
  s `importPage` – postup v [`migrace.md`](./migrace.md).
- **Nový typ bloku**: schéma (`blockSchema` v `app/content/schema.ts`), vykreslení
  (`app/components/landing/Blocks.tsx`), editor (`app/components/admin/BlockEditor.tsx` – popis,
  výchozí hodnota, formulář), čištění HTML (`app/lib/cms/sanitize.server.ts`), texty pro kontrolu
  (`app/lib/textRules.ts`) a test.
- **Lokálně** proti emulátoru Firestore: `npm run db:seed`, `npm run admin:create -- …`, potom
  v administraci Migrace → Nasadit čekající. Bez importu web jede z výchozího obsahu.
- Testy: `tests/content.test.ts` (výchozí obsah, odkazy, kotvy, pravidla textů) a
  `tests/cms.test.ts` (čtení, uložení, převod, import).
