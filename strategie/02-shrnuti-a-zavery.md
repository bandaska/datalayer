# Shrnutí rešerše: kontinuální správa měření – odpovědi na původní otázky

**Verze 2 (2026-09-05)** – po druhém kole ověření a po datové hygieně. Verze 1 (2026-09-04) obsahovala čísla
vypočtená z neuklizeného datasetu; co se změnilo, je v § 6.

Rozsah: dvě kola rešerše, 40 agentů. **Kolo 1**: ČR 45 subjektů, SK 24, EU 58, USA, 45 nástrojů, pain research.
**Kolo 2**: 126 nosných tvrzení znovu ověřeno u zdroje (90 potvrzeno, 29 vyvráceno nebo změněno, 7 nedostupných)
a 13 vyjmenovaných mezer doplněno. Dataset: **749 cenových řádků** (685 platných po vyřazení 16 vyvrácených,
12 nahrazených a 36 duplicitních), 1 118 důkazů, 536 výpovědí o rozbitém měření.
Detail: `reserse/00`–`10`, data v `data/`, úklid `data/clean-dataset.py`.

---

## Otázka 1: Jaká je férová cena za měsíční správu Google Analytics?

**Doporučení: 8 900 / 19 900 / 39 000 Kč bez DPH podle tieru.** Ale je to **rozhodnutí, ne tržní nález** –
a rozdíl je podstatný.

| Tier | Cena | Co za to | Pro koho |
|---|---|---|---|
| Hlídání | **8 900 Kč/měs** | denní automatické kontroly + součtové srovnání objednávek vs. konverzí, triáž alertů, kvartální review, měsíční jednostránkový komentář, reakce další pracovní den | e-shop do ~20 mil., 1 web, bez BQ |
| Správa | **19 900 Kč/měs** | + QA do 24 h po každém releasu, měsíční QA GTM/consent/konverzí + call, 3 h na změny, reakce do 8 h, changelog | e-shop 20–200 mil., releasy měsíčně, spend 50–500 tis. |
| Datová správa | **39 000 Kč/měs** | + kontrola BQ exportu, denní diff GA4 vs. e-shop po transaction_id, anomálie, týdenní digest, reakce do 4 h | e-shop 100 mil.+, BQ export, sGTM, více zemí |
| Provoz sGTM | 800–3 000 Kč + hosting | oddělená položka podle trafficu | – |

**Jak dobře je která cena podložená:**

- **19 900 Kč je nejlépe podepřený tier** – šest nezávislých subjektů v pásmu 17 500–23 750 Kč
  (RobertNemec, DASE, Amplio, YAG, ADS-Tracking, Elevar).
- **8 900 Kč leží pod evropským mediánem vstupních tierů (11 250 Kč), ale osm z patnácti evropských subjektů
  je levnějších** (3 350–7 800 Kč). Není to nejlevnější nabídka na trhu; rozdíl musí obhájit obsah.
- **39 000 Kč nemá tržní oporu.** Dva veřejné evropské lidské body s BigQuery jsou 11 250 a 45 000 Kč –
  rozptyl 4×, n = 2. Tier se obhajuje obsahem a marží, ne srovnáním.
- **Česká data na odvození nestačí.** Veřejnou měsíční cenu za práci na měření má v ČR **jeden subjekt**
  (RobertNemec.com: 9 250 / 18 500 / 31 200 Kč); druhý český řádek je údržba reportu za 2 500 Kč.
  Jediná nezávislá opora je evropský vzorek (n = 25, medián 12 250 Kč).

**Kotvy, které klient zná:** SaaS detekce 3 225 Kč (CZ medián), PPC paušál 13 900 Kč (CZ medián),
in-house analytik 86 185 Kč měsíčních nákladů. Hrubá marže navržených tierů je 43–65 % při skutečném
nákladu 700 Kč/h – **ale odhad hodin (4–6 / 9–13 / 16–23 h) nebyl ověřen proti reálné dodávce.**

## Otázka 2: Co je klíčový selling point a největší pain?

**Pain platí a je nově doložen z primární dokumentace, ne z anekdot.** GTM hlásí u tagu „Succeeded“ a
neodešle jediný request. GA4 při pozastavení BigQuery exportu předchozí dny nedopočítá. Looker Studio alert
se při rozbitém zdroji **sám vypne**. Google Ads označí tag za neaktivní až po **7 dnech** bez konverze –
doložená příčina, proč odhalení trvá týdny. Medián doby do odhalení je 21 dní (ze 77 vyčíslitelných výpovědí).

**Ale sdělení už není volné pole.** Verze 1 tvrdila, že to v ČR nikdo neříká. To je vyvráceno:
Signals Bar používá doslova „rozbité měření“ a „tiché výpadky“ za 2 500 Kč/měs, ga4monitor.com prodává
kontinuální audit s alerty za 667 Kč, LEMONTEC (AT) slibuje odhalení do 24 hodin za 4 975 Kč.

**Detekce je od roku 2026 komodita. Prodejné zůstává to, co nástroj neumí:** triáž (co to způsobilo),
oprava, číslo chybějících konverzí, komunikace s vývojáři a garantovaná reakční doba. Reakční dobu na
výpadek měření v ČR ani na SK veřejně neslibuje nikdo.

**Pro české publikum je přesnější jiná formulace než pro globální.** V českém a slovenském vzorku převažují
kódy „nikdy to nebylo pořádně nastavené“ (`gtm_change_dev`, `unknown_owner`) stejně silně jako tiché
rozbití. Vstupní věta proto zní spíš „zkontrolujeme, jestli měříte správně, a pak to hlídáme“ než
„vaše měření se tiše rozbilo“.

**Kvantifikace v korunách stále neexistuje.** Čtyři české částky, které rešerše našla, jsou po kontrole něco
jiného, než jak vypadají. Nejlevnější cesta k doložené částce vede přes vlastní fakturaci DataLayer.cz.

## Otázka 3: Je služba nutně navázaná na BigQuery?

**Ne, a po druhém kole je to jistější.** 409 z 536 výpovědí (76 %, resp. 88 % z těch, kde je stav BQ známý)
pochází od klientů bez BigQuery a jejich painy jsou ty nejdražší.

**Násobek za BigQuery je ale ≈ 2×, ne 4×,** jak tvrdila verze 1. Doloženo třikrát nezávisle: Amplio
Maintained→Managed 2,6×, Funnel.io 2,0×, evropský vzorek 1,5–2,6×. Tím padá původní odvození ceny tieru 3
(3,7–5,5 × 8–10 tis.); po opravě by dalo 13–26 tis. Kč.

BigQuery mění **hloubku, ne seznam aktivit**: bez něj nerozlišíte ztrátu od duplicit (pět ztracených a pět
duplicitních purchase dá v součtu „perfektní shodu“), nemáte baseline vůči backendu po `transaction_id`,
nevidíte tichý propad objemu ani historii po ztrátě přístupu.

## Otázka 4: Jak vypadá dodávka a kdy k ní klient přistoupí?

**Jádro shodné napříč regiony:** QA po releasu, změny tagů, hygiena konverzí, provoz konverzí do ad platforem,
alert na propad, oprava, měsíční komentář, ad-hoc dotazy. **Rytmus:** denně automat → týdně digest →
měsíčně člověk + komentář → kvartálně review.

**Prahy pro srovnání s backendem jsou nově z českých zdrojů:** do 10 % ticho, 10–30 % sledovat, nad 30 %
volat. Verze 1 používala 15 % převzatých z anglofonního fóra – v ČR je rozdíl 10–30 % norma, takže takový
alert by pálil denně.

**Prostředí se mění doložitelně:** ≈188 datovaných změn za 32 měsíců, z toho **57 mění sběr dat** – jedna
každé 2,5 týdne. Samotné řízení změn vychází na 2,5–7 h měsíčně.

**Kdy klient kupuje:** po incidentu, před redesignem či migrací, před deadlinem Googlu nebo platformy,
po auditu. **Proč odchází:** ticho mezi reporty, „po nastavení to má prostě fungovat“, PPC agentura, která
měření „má v ceně“.

## Otázka 5: Co s tím – nejlepší perpetuální služba na trhu

1. Pojmenovat **„Správa měření“**, ne „monitoring“ (ten klient koupí za 667 Kč).
2. Tři veřejné ceny bez vazby; prezentovat je jako **naše rozhodnutí**, ne jako tržní cenu.
3. Publikovat dodávku jako **artefakty**: seznam kontrol s prahy, checklist po releasu, ukázka komentáře, SLA.
4. **Diferenciátory zdarma** (nikdo v ČR): changelog, kvartální audit přístupů, sledování deadlinů za klienta.
5. **Diferenciátory technické** (nikdo v ČR/SK): diff po transaction_id, monitoring BQ exportu, tag monitoring.
6. Vstupní tier musí v nabídce **explicitně odpovědět**, čím se liší od Signals Bar za 2 500 Kč a od PPC
   balíčku za 10 000 Kč, který měření „obsahuje“.

## Otázka 6 (nová po 2. kole): Uživí se to vůbec?

**Nevíme, a je to největší otevřená otázka.** Existuje protievidence, kterou verze 1 neměla:

- Z **53 poptávek** v kategorii Analytika na Shoptet Partnerech **žádná** nežádá monitoring ani alerting.
- Z USA doslova: „*this is not something you can sell on a retainer. Analytics setup and troubleshooting is
  a one-off service.*“ Agentura Analytics Pros to zkusila a skončila prodejem reklamní agentuře.
- V ČR neexistuje **žádný** subjekt, který by kontinuální správu měření prodával jako produkt s cenou.

Prázdná pozice může znamenat příležitost, nebo hřbitov. **To žádná další rešerše nerozhodne** – rozhodne to
test. Proto se ve verzi 2 mění pořadí validace: nejdřív **white-label pilot s PPC agenturou** (kritérium:
podepsaný pilot, ne „vzali bychom to“), pak test poptávky dvěma landing stránkami, pak ekonomika dodávky
na vlastních datech, teprve potom cena.

## 6. Co se změnilo mezi verzí 1 a 2

| # | Verze 1 | Verze 2 |
|---|---|---|
| 1 | „Medián 8–10 tis. potvrzují nezávisle tři regiony“ | Nezávislá je **jen EU**; ČR má 2 subjekty s veřejnou měsíční cenou |
| 2 | Správa s BigQuery je 3,5–5× dražší | **≈ 2×**, doloženo třikrát nezávisle |
| 3 | Tři nezávislé odvozovací cesty se shodly | Nezávislé jsou **dvě**; nákladová cesta počítala s tržní sazbou jako s nákladem |
| 4 | „Nikdo z české konkurence to jako sdělení nepoužívá“ | **Vyvráceno** – Signals Bar, ga4monitor, LEMONTEC |
| 5 | „8 900 leží pod nejlevnějším lidským balíčkem“ | **Faktická chyba** – 8 z 15 evropských subjektů je levnějších |
| 6 | „Jeden týden bez alertu stojí víc než rok správy“ | **Vypuštěno** – aritmeticky nepravdivé pro daný segment |
| 7 | Práh reconciliace 15 % | **10 / 30 %** podle českých zdrojů |
| 8 | Poptávka po samostatné správě brána jako daná | **Neověřená hypotéza s protievidencí** |
| 9 | Dataset 352 řádků bez příznaků | 749 řádků se `status` a `scope_class`; 64 vyřazeno z výpočtů |

**Ceny se nezměnily. Změnilo se, čím se dají obhájit, a co o nich smíme tvrdit.**

## Co rešerše nezjistila (a jak to doplnit)

Seřazeno podle toho, jak moc by to změnilo doporučení. Plný seznam v `reserse/10-doplneni-a-overeni-r2.md` § 6.

| Priorita | Co chybí | Jak to získat |
|---|---|---|
| **A** | Existuje vůbec poptávka po samostatné správě měření? | white-label pilot + test dvěma landing stránkami (4 týdny) |
| **A** | Ekonomika dodávky – hodiny, utilizace, souběh incidentů při plošné změně | zpětně změřit 3–5 vlastních zakázek |
| **A** | Ochota platit | 5–8 rozhovorů + Van Westendorp, druhé rameno: hybridní model |
| **A** | Proveditelnost denní reconciliace na Shoptet/Upgates API | veřejná dokumentace, 0,5 dne |
| **B** | Realizované (ne ceníkové) české ceny | registr smluv.gov.cz – povinný nad 50 tis. Kč, plné texty |
| **B** | Horní polovina českého trhu (subjekty „na dotaz“) | mystery shopping u 6–10 subjektů s jednotným zadáním |
| **B** | Kotvy ochoty platit ze sousedních oborů | IT podpora, managed hosting, účetní paušál – 15–20 bodů |
| **C** | Doložená česká ztráta v Kč | vlastní fakturace a výkazy za 12–24 měsíců |
| **C** | Právní a smluvní vrstva (odpovědnost za škodu, SLA kredity) | blokuje publikaci slibu reakční doby |
| **C** | Analýza přežití – kdo to zkusil a přestal | Wayback na 20–30 subjektů zpět do 2019 |
