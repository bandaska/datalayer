# HARD-RULES.md – tvrdá jazyková a typografická pravidla

> Závazná pravidla **pro všechny texty obou větví** (článek i landing page).
> Writer a copywriter je dodržují od první věty, editor a lp-editor je vymáhají,
> verifier a claims-checker v nich drží své opravy. Týkají se **jen formy
> a jazyka** – informace ani jejich vyznění se nikdy nemění. Regenerace stylu
> (skill `style-extract`) na tenhle soubor **nesahá**.

## Gramatika a styl

- **Trpný rod je zakázaný za každých okolností.** Vždy ho přepiš na činný.
  - „Zákon byl upraven." → „Zákonodárci zákon upravili."
  - „Disky jsou vyráběny." → „Disky vyrábí …" / „… vyrábějí disky."
- Žádný formální ani úřednický jazyk.
- Místo zkrácených přechodníkových/participiálních tvarů použij vztažné věty:
  „vysvětlující" → „který vysvětluje". Ale v jedné větě ne příliš mnoho vztažných
  zájmen.
- Místo 7. pádu „je metodou" použij 1. pád „je metoda".
- Spojka **„než"**, ne nesprávné „jak" (větší **než**, ne větší jak).
- Vyhýbej se nadbytku přivlastňovacích zájmen (váš, vám, vašemu…).
- Omez závorky – kde to jde, větu přeformuluj a závorky vynech.

## Čísla, měny, data, typografie

- **České uvozovky:** páruj počáteční „ (U+201E) a koncové " (U+201C), i
  v citacích a názvech. **Výjimka:** rovná " jako znak palců zůstává (13", 13"
  displej).
- Opravuj zbylé typografické chyby (mezery, neoddělitelné mezery).
- Pomlčky: jen en-dash (–), nikdy em-dash (—).
- *Pozn.: uvozovky a pomlčky navíc deterministicky srovná `finalize.py` (viz
  `docs/decisions/12-typography-finalize-pass.md`) – tato pravidla jsou vodítko,
  ne jediná pojistka.*
- Číslovku, kterou lze vyjádřit jedním slovem, napiš slovy: „čtrnáct",
  „desetkrát". (Výjimka: nedělej to v datech.)
- Data piš s měsícem slovy: „16. února 2024".
- Skloňuj měny: „123 eur", „123 dolarů", ale „123,9 eura", „123,9 dolaru".
- Verzálky používej jen u zkratek; jinak velké pouze první písmeno.
