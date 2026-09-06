# Kontrola měření po releasu webu

Projde se po **každém** nasazení na produkci. Trvá 30–45 minut. Výsledek jde do changelogu a klientovi
jednou větou: „Po releasu 12. 9. měření běží" nebo „Po releasu 12. 9. přestal chodit `add_to_cart`, opraveno
13. 9. v 10:20, chybí data za 18 hodin."

Release webu je nejčastější příčina tichého rozbití hned po změně cookie lišty. GTM u rozbitého tagu
běžně hlásí **„Succeeded"** a přitom neodešle jediný požadavek — proto se kontroluje odchozí provoz,
ne stav v GTM.

| # | Co | Jak | Hotovo když |
|---|---|---|---|
| 1 | **Načte se kontejner** | otevřít web, Tag Assistant / Network filtr `gtm.js` | kontejner se načte a je to správné ID |
| 2 | **dataLayer má, co má** | konzole: `dataLayer` na klíčových stránkách | struktura sedí se specifikací, hodnoty nejsou `undefined` ani prázdný řetězec |
| 3 | **Zobrazení stránky** | Realtime v GA4 | událost dorazí do 30 s |
| 4 | **Průchod objednávkou** | projít reálný nákup (testovací produkt, hodnota > 0) | `view_item` → `add_to_cart` → `begin_checkout` → `purchase` dorazí všechny |
| 5 | **Purchase má správná čísla** | Network: požadavek na `/collect` nebo sGTM | `transaction_id` vyplněné, tržba > 0 a **sedí s objednávkou**, měna správně, položky mají ID a cenu |
| 6 | **Purchase se neposílá dvakrát** | obnovit děkovací stránku, vrátit se zpět | druhá událost nedorazí (nebo má stejné `transaction_id` a je deduplikovaná) |
| 7 | **Formuláře a další cíle** | odeslat každý sledovaný formulář | událost dorazí, `event_label` sedí |
| 8 | **UTM projdou až do konce** | otevřít web s `?utm_source=test&utm_medium=test`, projít až k objednávce | zdroj u konverze je `test / test`, ne `(direct)` |
| 9 | **Souhlas se respektuje** | odmítnout souhlas, projít znovu | tagy se buď nespustí, nebo běží v režimu bez souhlasu; s uděleným souhlasem měří normálně |
| 10 | **Konverze dorazí do reklamy** | Google Ads a Meta Events Manager | konverze se objeví do 24 h, Meta hlásí deduplikaci v pořádku |

**Automaticky (Správa a Datová správa):** body 1, 3, 4, 5 a 8 běží jako automatický průchod objednávkou
každé 2 hodiny, takže výpadek zachytíme i mezi releasy a o víkendu. Body 2, 6, 7, 9 a 10 dělá člověk.

## Když něco neprojde

1. Zapsat do záznamu nálezu (`vzor-zaznamu-nalezu.md`) — včetně času, kdy to začalo.
2. Určit, jestli to opravíme my (GTM, konfigurace) nebo to musí vývojář (dataLayer, šablona).
3. Klientovi zpráva do reakční doby jeho tieru: co nefunguje, od kdy, co s tím děláme, čeho se to týká
   v penězích.
4. Po opravě dopočítat, **kolik konverzí za tu dobu chybí** — to je číslo, které patří do měsíčního komentáře.
