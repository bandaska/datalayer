# UX audit – maximální redukce webu – stav práce

**Zadání (9. 10. 2026 18:27):** detailní UX audit s cílem odebrat maximum nepotřebných bloků a UX prvků („čistit a čistit“). Kritérium: vede blok ke kliknutí na formulář? Jediné, co zůstává povinně, je SVG diagram v hero bloku HP. Výslovně odstranit: nadtitulek „Webová analytika a měření · e-shopy · B2B · velké firmy“, tagy na HP, mockupy konzole („GA4 purchase 812…“), tlačítko „Ukázka datového modelu“, druhé CTA „Jak pracujeme“ v hero; opravit CTA přes celou šířku. Zhodnotit všechny LP – hodnota, nebo content stuffing.

**Výstup:** strukturovaný MD + navržené změny vyrenderované z HTML jako obrázky (`navrhy/`).

## Úkoly
| # | Úkol | Stav |
|---|---|---|
| 1 | Snímek aktuálního webu a inventura bloků | ✅ |
| 2 | Portfolio stránek – hodnota vs. content stuffing | ✅ |
| 3 | Rozhodnutí blok po bloku | ✅ |
| 4 | Render navržených podob (HTML → PNG) | ✅ |
| 5 | MD dokument, ověření, synchronizace | ✅ |

## Log
- 18:30 – start, složka založena.

- 18:35 – po deployi (18:32) web stažen znovu: 24 stránek, změny jsou jazykové (opravy z jazykového auditu), struktura bloků beze změny. Starý snímek odložen do `_zastarale_1829/` (jen v pracovním prostoru).
- 18:50 – hotové: inventura prvků, mapa sekcí, překryv témat, render před/po přes skript `redukce.js` (úpravy aplikované přímo na staging), menu, tablet, výřezy bloků.
- dál: srovnávací obrázky, mapa webu před/po, MD dokument `ux-redukce.md`, kontrola, synchronizace.
- 19:15 – HOTOVO. `ux-redukce.md` (11 kapitol, 15 obrázků před/po), `navrhy/po/` (11 stránek po úpravě, desktop + mobil), `navrhy/render/` (surové snímky), `navrhy/src/redukce.js` (všechny zásahy jako skript pro konzoli stagingu). Čísla a tvrzení ověřil nezávislý kontrolor; 5 věcných chyb a 10 nesrovnalostí opraveno.
