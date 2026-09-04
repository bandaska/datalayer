# Shrnutí rešerše: kontinuální správa měření – odpovědi na původní otázky

Datum: 2026-09-04. Rozsah: 6 paralelních rešerší (ČR 45 subjektů, SK 24, EU 58, USA + ukázky dodávky, 45 nástrojů,
pain research), 352 cenových bodů, 530 důkazů, 313 výpovědí o rozbitém měření. Detail ve `reserse/00`–`09`, data v `data/`.

## Otázka 1: Jaká je férová cena za měsíční správu Google Analytics?

**Ne „tisíce“, ne paušálně 15 tisíc. Trh v ČR, SK i EU se nezávisle shoduje na mediánu 8–10 tis. Kč/měs za správu bez
BigQuery a horním kvartilu 16–23 tis. Kč. Správa s BigQuery je 3,7–5,5× dražší (35–45 tis. Kč).**

| Tier | Cena | Co za to | Pro koho |
|---|---|---|---|
| Hlídání | **8 900 Kč/měs** | denní automatické kontroly, triáž alertů, kvartální review, měsíční jednostránkový komentář, reakce další pracovní den | e-shop do ~20 mil., 1 web, bez BQ, agentury white-label |
| Správa | **19 900 Kč/měs** | + QA do 24 h po každém releasu, měsíční QA GTM/consent/konverzí + call, 3 h na změny, reakce do 8 h, changelog | e-shop 20–200 mil., releasy měsíčně, spend 50–500 tis. |
| Datová správa | **39 000 Kč/měs** | + kontrola BQ exportu, denní reconciliace GA4 vs. e-shop po transaction_id, anomálie, týdenní digest, reakce do 4 h | e-shop 100 mil.+, BQ export, sGTM, více zemí |
| Provoz sGTM | 1 500–6 000 Kč podle trafficu + hosting | oddělená položka | – |

Odvození třemi cestami (náklad × hodiny, tržní kvartily a veřejné body, kotvy klienta) v `reserse/08-pricing-synteza.md`.
Kotvy klienta: PPC správa 8–30 tis., sGTM produkty 800–3 000, SaaS monitoring 1 600–5 200, in-house analytik 88 tis. celkových nákladů.

## Otázka 2: Co je klíčový selling point a největší pain?

**Pain není „nemáme data“. Pain je: „měření se tiše rozbilo a zjistili jsme to za 2 týdny až 3 měsíce na CPA“.**
Doslova z výpovědí: „It fails silently by design“, „No warning email. No grace period.“, „They just stopped being counted.“
Nikdo z české konkurence to jako sdělení nepoužívá.

Pět nejčastějších spouštěčů (313 výpovědí): cookie lišta / consent mode (17 %), release webu (14 %), změna platformy Shoptet/Shopify/Google
bez zásahu e-shopu (13 %), rozjetá čísla GA4 vs. e-shop (12 %), zásah do GTM bez koordinace (7 %). Společný dopad: Smart Bidding
optimalizuje týdny na rozbitá data (60 000 USD/75 dní, CPA 15×, 184 vs. 291 objednávek).

Selling point = **„víme to za 24 hodin, opravíme a řekneme kolik konverzí chybělo“** s číslem reakční doby. Reakční dobu na výpadek
měření v ČR ani na SK nikdo veřejně neslibuje. Konkrétní formulace po segmentech v `reserse/09-navrh-nabidky.md` § 5.

## Otázka 3: Je služba nutně navázaná na BigQuery?

**Ne.** 75 % výpovědí o rozbitém měření je od klientů bez BigQuery a jejich painy jsou ty nejdražší. Správa bez BQ se prodává
v ČR (Digitální architekti, RobertNemec), SK (DASE) i EU (LEMONTEC, Manids, Amplio) a má jasný obsah: QA po releasu, hygiena
konverzí, konverze v Ads/Meta/Sklik, consent, údržba reportů, alert na propad přes GA4 Insights / Data API.

BigQuery mění **hloubku, ne seznam**: bez BQ nerozlišíte ztrátu od duplicit, nemáte baseline vs. backend po transaction_id,
nevidíte tichý propad objemu ani historii po ztrátě přístupu. Proto je BQ zlom do vyššího tieru s 3,7–5,5× cenou, ne podmínka vstupu.
Navíc BQ export bez správy „je další věc, kterou je třeba udržovat“ – BQ klient je přirozený upsell.

## Otázka 4: Jak vypadá dodávka a kdy k ní klient přistoupí?

**Jádro shodné napříč regiony:** QA po releasu, změny tagů, hygiena konverzí, provoz konverzí do ad platforem, alert na propad,
oprava, měsíční komentář, ad-hoc dotazy. **Rytmus:** denně automat → týdně digest → měsíčně člověk + komentář → kvartálně review.
**Artefakty**, které klient dostane: sada denních kontrol s prahy (vzor GOV.UK: tabulka přišla, ±5 % eventů, ±15 % per event),
checklist 10 bodů po releasu, jednostránkový komentář se 3–4 čísly, changelog GTM, kvartální review, číslo reakční doby.
V ČR nikdo tyto artefakty nepublikuje (katalog 31 ukázek je výhradně anglofonní).

**Kdy klient kupuje:** po incidentu (většina CZ poptávek: „přestalo fungovat měření konverzí… a pak pevný měsíční paušál“), před
redesignem / migrací, před deadlinem Googlu / Shopify / Shoptetu (známé dopředu), po auditu, po implementaci. **Proč odchází:**
ticho mezi reporty, „po nastavení to má prostě fungovat“, PPC agentura „má měření v ceně“.

## Otázka 5: Co s tím – nejlepší perpetuální služba na trhu

1. Pojmenovat **„Správa měření“**, ne „monitoring“ (SaaS za 79 USD) – tři veřejné ceny bez vazby; v ČR mají cenu 2 ze 45 subjektů.
2. Osy tierů: **kadence + reakční doba + BigQuery hloubka**; hodiny jen jako limit na změny.
3. Publikovat dodávku jako **artefakty**: „Co hlídáme“ (12 kontrol s prahy), checklist po releasu, ukázka komentáře, SLA.
4. **Diferenciátory zdarma** (nikdo v ČR): changelog, kvartální audit přístupů, sledování deadlinů Googlu a Shoptetu za klienta.
5. **Diferenciátory technické** (nikdo v ČR/SK): reconciliace po transaction_id, monitoring BQ exportu, tag monitoring přes sGTM;
   pro Shoptet / Sklik / Heureka neexistuje žádný nástroj – vlastní pole.
6. **Kanály:** stávající služby končí nabídkou správy; white-label pro PPC agentury (−15–20 %); outbound před deadliny.
7. **Validace:** 5–8 rozhovorů (otázky v `09` § 8, Van Westendorp na 8 900 / 19 900 / 39 000) + testovací stránka s cenami 30 dní.

## Co rešerše nezjistila (a jak to doplnit)

- Kvantifikace v Kč (promrhaný spend českého e-shopu) – žádný CZ příklad; doplnit rozhovory.
- Skutečný rozsah dodávky agentur „na dotaz“ (Optimics, Taste, Effectix…) – mystery shopping.
- České FB skupiny, LinkedIn, Webtrh nebyly z prostředí dostupné – CZ painy jsou z poptávek a blog komentářů.
- Vzorek CZ lidských cen je 15 řádků / 4 veřejné subjekty – pásmo sedí se SK/EU, ale je tenké.
- Vyhledávací limit každé session (200 dotazů) se vyčerpal v polovině u všech šesti fází; mezery jsou vyjmenované v § 5 každého reportu.
