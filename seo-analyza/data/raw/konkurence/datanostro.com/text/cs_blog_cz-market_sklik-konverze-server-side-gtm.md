# URL: https://datanostro.com/cs/blog/cz-market/sklik-konverze-server-side-gtm/

[BLOG](/cs/blog/)
/
[CZ TRH](/cs/blog/cz-market/)

# Seznam Event Measurement (SEM): server-side konverze pro Sklik a Zboží.cz

Jediný funkční postup, jak nasadit Sklik konverze na server-side GTM. Co Stape, Addingwell ani Google Cloud nemají. Krok za krokem včetně deduplikace s pixel kódem.

T

Tým DataNostro

9. 5. 2026 · 9 min · Středně pokročilý

Seznam mění způsob měření kampaní. **Seznam Event Measurement (SEM)** je nový jednotný standard, který nahrazuje dosavadní oddělené retargetingové a konverzní kódy. Tady je, co to znamená a jak SEM rozjet server-side.

## Co je SEM a proč vznikl

Dřív jste na web dávali zvlášť retargetingový kód (rc.js) a zvlášť konverzní kódy — každá konverze vlastní snippet. SEM tohle sjednocuje do **jednoho skriptu `sul.js`**, který obstará retargeting i konverze a umí víc typů událostí s detailním reportingem. Aktivace SEM probíhá v roce 2026.

## Co se mění oproti starým kódům

* Jeden skript `sul.js` místo samostatného retargetingu a konverzí
* Více typů událostí + automatický retargeting přímo z eventů (žádné ruční seznamy)
* Souhlas přes IAB TCF nebo Google Consent Mode
* **Nově server-to-server (S2S)** měření přes `sem.seznam.cz`

## Jak SEM funguje server-to-server

S2S je klíčová novinka pro každého, komu klientské měření ujídají ad-blockery a Safari ITP (typicky 20–35 % událostí). Princip:

* `sul.js` na webu vygeneruje first-party cookies `sid` a `udid` — podle nich Seznam páruje identitu.
* Váš server (resp. server-side GTM) tyto cookies přečte, osobní data zahashuje **SHA-256** a odešle event se svým **SEM ID** na `sem.seznam.cz/rtgconv`.
* Volání běží asynchronně na pozadí (timeout 3–5 s), takže nezdržuje zpracování objednávky.

**Pozor:** S2S není samostatné řešení — `sul.js` musí běžet v prohlížeči (bez něj nevzniknou cookies sid/udid a Seznam nespáruje identitu). Server-to-server je *doplněk* klientského měření: serverové volání samo ad-blocker neblokne, takže kombinace client + server doplní data, která čistě klientský sul.js ztratí.

## Proč to řešit server-side

Sklik Smart bidding i retargeting jsou tak dobré, jak dobrá jsou data. Když klientsky ztrácíte pětinu až třetinu konverzí, optimalizace jede na neúplných číslech a CPA roste. SEM S2S tu díru zavírá a Sklik i GA4 reporty se konečně shodnou (stejné `transaction_id`, stejná hodnota).

## Jak na SEM s DataNostro

DataNostro nasadí SEM rovnou v server-side režimu: `sul.js` na web, čtení `sid`/`udid` na serveru, SHA-256 hashování a odeslání na `sem.seznam.cz/rtgconv` s vaším SEM ID. Stejný „purchase" event posíláme zároveň do GA4, Meta CAPI, Google Ads i SEM — jeden zdroj, atribuce ve všech systémech. Staré rc.js a konverzní kódy odstraníte, jakmile SEM měří správně.

Sdílet

### Nový článek 1× měsíčně

Hloubkové návody pro server-side tracking + případové studie z CZ trhu. Žádný spam, jen 1 e-mail za měsíc. Odhlásit kdykoli.

Odebírat

[Zpět na CZ trh](/cs/blog/cz-market/)

DALŠÍ V TÉTO KATEGORII

[### Heureka Ověřeno zákazníky přes server-side: 25 % více recenzí, žádný iframe blok

Heureka pixel běží jako iframe a 25 % CZ návštěvníků ho má v ad-blockeru. Server-side přes DataNostro pošle …](/cs/blog/cz-market/heureka-overeno-zakazniky-server-side/)