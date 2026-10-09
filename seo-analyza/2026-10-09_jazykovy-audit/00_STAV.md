# Jazykový audit webu – stav práce

**Zadání (9. 10. 2026 15:47):** jazykový, stylistický a typografický audit všech textů webu datalayer.vitnovotny.cz podle podrobného zadání (role redaktora a korektora; oblasti A jazyk, B styl, C typografie; závažnost kritická / střední / nízká). Výstupy do této složky.

**Výstup:** `jazykovy-audit.md` (shrnutí, seznam stránek, nálezy po stránkách, opakující se vzorce vč. počtů znaků, ukázkové přepisy, mini stylová příručka) + `data/`

## Úkoly
| # | Úkol | Stav |
|---|---|---|
| 1 | Vytáhnout všechny texty (stránky, meta, OG, JSON-LD, formulář a jeho hlášení, cookie lišta a panel nastavení, 404, texty z JS) | ✅ 26 stránek + společné prvky, 31 888 slov |
| 2 | Automatické kontroly: typografické znaky, mezery, čísla, vzorce AI textu, terminologie | ✅ `data/typo_pocty.tsv`, `typo_nalezy.tsv`, `vzorce_nalezy.tsv`, `vzorce_pocty.json` |
| 3 | Redakční průchod stránku po stránce (A jazyk, B styl, C typografie) | ✅ 7 paralelních průchodů stránek služeb a řešení + vlastní průchod HP, společných prvků a právních stránek |
| 4 | Ověření citací (doslovnost) a sjednocení závažnosti | ✅ 558 citací strojově ověřeno, 2 chybné nálezy vyřazeny (Data Studio / Looker Studio), závažnost sjednocena |
| 5 | Opakující se vzorce, ukázkové přepisy, stylová příručka | ✅ 29 systémových jevů s počty a hromadným řešením, přepisy HP + 3 stránek, příručka s 23 náhradami |
| 6 | Sepsání a synchronizace | ✅ |

## Důležité
- Web se mezi dopolední UX kontrolou a tímto auditem změnil (stránky služeb už mají štíhlou strukturu). Audit je dělán na verzi k 9. 10. 2026, 16:00; snímek HTML je v `data/crawl/`.
- Formulář jsme ostře neodesílali; chybová hlášení jsme vyvolali s blokovaným odesláním, potvrzení a panel cookies jsou ze zdrojového kódu.

## Log
- 15:50 – start, složka založena.
- 16:05 – vytažení textů (Playwright), oprava mezer podle zdrojového HTML, snímek crawl.
- 16:20 – automatické kontroly: 91 středových teček, 0 dlouhých pomlček, 0 anglických uvozovek, 80 šipek, 225 hranatých závorek, 72× „zdarma“.
- 16:30–17:20 – redakční průchody (7 paralelních), vlastní průchod HP, menu, patičky, cookie lišty, formuláře, /cookies, /zpracovani-osobnich-udaju.
- 17:30 – konsolidace: 515 + 43 nálezů, ověření citací, oddělení 75 opakujících se výskytů do systémových vzorců.
- 17:50 – `jazykovy-audit.md` hotový (36 700 slov), synchronizace. **Audit dokončen.**
