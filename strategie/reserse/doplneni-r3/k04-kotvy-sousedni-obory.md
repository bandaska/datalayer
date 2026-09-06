# K04 – Kotvy ochoty platit ze sousedních českých oborů

3. kolo, úkol B4 ze seznamu `10-doplneni-a-overeni-r2.md` § 6. Datum přístupu u všech zdrojů: **2026-09-06**.
Data: `data/fragments/r3-k04-pricing.csv` (52 řádků, `PK4-001`–`PK4-052`),
`data/fragments/r3-k04-evidence.csv` (18 důkazů, `EK4-001`–`EK4-018`, `phase=12`).
**30 z 52 cenových řádků má cenu i číselně vyjádřenou reakční dobu** (cíl byl 20–25).

Metoda: pouze veřejné ceníky, žádný kontakt s dodavatelem. Ceny za uživatele/stanici jsou v `price_czk_month`
normalizované na referenční firmu s **10 stanicemi** a normalizace je u každého řádku uvedena v `scope_notes`.
Hodinové sazby jsou přepočteny jako **sazba × 10 h** (`proxy 10 h`), podle zadání.

---

## 1. Shrnutí

**Odpověď na hlavní otázku: český trh si za garantovanou reakční dobu účtuje medián 1,6× za každý stupeň
zkrácení a 2,6× za celý žebřík od „příští pracovní den“ po „do 15 minut až 1 hodiny“ – a v absolutních
číslech stojí paušál s reakcí do 4 hodin 3 000–13 000 Kč/měs, což je přesně pásmo, do kterého DataLayer
staví celý tier 1 za 8 900 Kč.**

1. **Reakční doba je v ČR samostatně ceněná osa a existuje na ni čistý experiment.** Externí IT prodává
   jednu a tutéž vzdálenou IT podporu ve třech sazbách, kde se mění **jen** slíbená reakce:
   590 Kč/h (do 5 pracovních dní) → 890 Kč/h (do 24 h) → 1 450 Kč/h (do 2 h). `EK4-001`
2. **Druhý čistý žebřík**: SKOMATECH účtuje za PC měsíčně 300 Kč (reakce 4 h, SLA 95 %), 450 Kč (1 h, 99 %),
   650 Kč (15 min, 99,9 %). Zkrácení ze 4 h na 15 minut = 2,17×. `EK4-014`
3. **Medián přirážky za jeden stupeň SLA je 1,63×** (rozptyl 1,44–2,62×, n = 9 přechodů u 5 dodavatelů);
   za celý žebřík **2,61×** (2,17–4,94×, n = 5). Navržené skoky DataLayer (2,24× a 1,96×, celkem 4,38×)
   leží **u horní hranice** českého zvyku, ne uprostřed.
4. **Absolutní kotva pro tier 1 je zdrcující: 8 900 Kč/měs je v ČR cena celého firemního IT.**
   Externí IT: „menší firma s 8–10 stanicemi + 1 serverem vychází zhruba na **9 000 Kč / měsíc**“ `EK4-002`.
   ITHOPE: „Typická firma 10–30 zaměstnanců platí **8 000–18 000 Kč/měsíc** za kompletní paušál v rámci
   sjednaného SLA“ `EK4-003`. ICT-GROUP: firma s 8 lidmi **12 910 Kč/měs** s neomezenou podporou `EK4-004`.
5. **A reakční doba, kterou tier 1 slibuje (další pracovní den), je v sousedních oborech ta NEJLEVNĚJŠÍ
   úroveň** – prodává se za 790–4 400 Kč/měs (SiteCare Základ 790 Kč, WPDistro Basic 3 000 Kč,
   Externí IT Základ ~4 400 Kč). Reakční doba tedy cenu 8 900 Kč neobhájí; musí ji obhájit obsah.
6. **Tier 3 za 39 000 Kč naopak dostal první domácí oporu, jen z jiného oboru:** Trendii má veřejný ceník
   správy sociálních sítí **18 000 / 32 000 / 43 000 Kč/měs** `EK4-015`, nezávisle potvrzený tržním
   přehledem („menší agentura … často 20–50 tis. Kč měsíčně“) `EK4-016`. Marketingový paušál nad 40 tis. Kč
   je v ČR běžný a ceníkovaný – pro **malou** firmu.
7. **Ale rozpočtový strop to relativizuje**: celý měsíční marketingový rozpočet menší české firmy je
   20–80 tis. Kč **včetně reklamy**; 80–300 tis. Kč má až firma střední `EK4-016`. Tier 3 by menší firmě
   sebral polovinu až celý marketing.
8. **Účetní paušál – ten, který klient platí a umí porovnat – je 1 499–7 500 Kč/měs** (Finela 1 499/2 499/3 499,
   Victory Point 2 500/4 500/7 500) `EK4-012`, `EK4-013`. Navrhovaných 8 900 Kč je **víc než nejdražší
   veřejný účetní paušál v ČR**.
9. **Dva slibované diferenciátory DataLayer jsou v sousedních oborech zdarma.** „Hlídání termínů za klienta“
   dává Victory Point v ceně každého tarifu („Proaktivní hlídání: Upozorníme vás, pokud se blížíte limitu
   DPH … My hlídáme termíny“) `EK4-012`. Sdělení „víme o problému dřív než vy“ používá ICT-GROUP doslova:
   „Problémy vidíme dřív než vaši lidé a řešíme je dřív, než je poznáte“ `EK4-011`.
10. **K otevřené otázce o poptávce: forma je ověřená, předmět ne.** Český malý a střední podnik běžně kupuje
    měsíční paušál s reakční dobou – v IT, hostingu, správě webu, účetnictví i marketingu, v pásmu
    790–43 000 Kč. Ale v nejúplnějším českém přehledu cen online marketingu je **měření vedeno výhradně
    jako jednorázová položka 2,5–15 tis. Kč** a měsíční cena za jeho správu tam neexistuje `EK4-016`.

---

## 2. FAKTA

### 2.1 Cena reakční doby – žebříky u jednoho dodavatele

Tabulka srovnává jen ty případy, kde **týž dodavatel** prodává **totéž** a mění se reakční doba.

| Dodavatel | Služba | Nejpomalejší | Střední | Nejrychlejší | Celý žebřík | Řádky |
|---|---|---|---|---|---|---|
| Externí IT | vzdálená IT podpora (hodinovka) | 5 prac. dní – **590 Kč/h** | 24 h – **890 Kč/h** (1,51×) | 2 h – **1 450 Kč/h** (1,63×) | **2,46×** | `PK4-001`–`003` |
| Externí IT | paušál za stanici | 24 h – **390–490 Kč** | SLA 4 h – **650–850 Kč** (1,70×) | SLA 1 h – **1 000–1 300 Kč** (1,53×) | **2,61×** | `PK4-004`–`006` |
| SKOMATECH | paušál za PC | 4 h, SLA 95 % – **300 Kč** | 1 h, SLA 99 % – **450 Kč** (1,50×) | 15 min, SLA 99,9 % – **650 Kč** (1,44×) | **2,17×** | `PK4-037`–`039` |
| WPDistro | správa webu | 24 h – **3 000 Kč/měs** | 4 h – **6 000 Kč/měs** (2,00×) | 1 h + kompenzace – **12 000 Kč/měs** (2,00×) | **4,00×** | `PK4-017`–`019` |
| SiteCare | správa WordPressu | 24 h – **790 Kč/měs** | 24 h – **1 490 Kč/měs** | 4 h + SLA smlouva – **3 900 Kč/měs** (2,62×) | **4,94×** | `PK4-020`–`022` |
| ITHOPE | akutní výjezd do 2 h | nesmluvní – **2 600 Kč** | – | smluvní – **1 300 Kč** (0,50×) | **2,00×** | `PK4-009` |

**Medián přirážky za jeden stupeň zkrácení reakce: 1,63×** (n = 9; 1,44 / 1,50 / 1,51 / 1,53 / 1,63 / 1,70 /
2,00 / 2,00 / 2,62). **Medián za celý žebřík: 2,61×** (n = 5; 2,17 / 2,46 / 2,61 / 4,00 / 4,94).

> „Rychlost se vyplatí. Potřebujete zásah do 2 hodin? Naši technici jsou připraveni. **Za prémiovou rychlost
> platíte prémiovou cenu** – ale váš provoz nestojí. … Trpělivost se vrátí. Plánovaná práce do 5 pracovních
> dní? **Ušetříte až 40 % oproti express sazbě.**“ — Externí IT `EK4-001`

> „START od 300 Kč za PC / měsíc: Helpdesk Po-Pá 8-18 h, **Reakce do 4 hodin**, SLA 95 % | PROFI od 450 Kč:
> Helpdesk Po-Pá 8-20 h, **Reakce do 1 hodiny**, SLA 99 % | PREMIUM od 650 Kč: Helpdesk 24/7 (i víkendy),
> **Reakce do 15 minut**, Prioritní přístup + týdenní reporty, SLA 99,9 %“ — SKOMATECH `EK4-014`

> „Autopilot Basic 3 000 Kč / měsíc … E-mailová podpora (**do 24 hodin**) | Autopilot Standard 6 000 Kč / měsíc
> … Prioritní podpora (**do 4 hodin**) | Autopilot Premium 12 000 Kč / měsíc … **SLA garance s kompenzací** —
> dedikovaná podpora **do 1 hodiny**“ — WPDistro `EK4-006`

### 2.2 Kolik stojí konkrétní úroveň reakce (absolutně, měsíčně)

| Slíbená reakce | Kdo a za kolik (Kč/měs bez DPH) | Medián |
|---|---|---|
| **další pracovní den / 24 h** | SiteCare Základ 790 · SiteCare Byznys 1 490 · WPDistro Basic 3 000 · Externí IT Základ ≈ 4 400 (10 stanic) · Trendii 18 000–43 000 (marketing) | **≈ 2 200 Kč** (mimo marketing) |
| **4 hodiny** | SKOMATECH START 3 000 (10 PC) · SiteCare Agentury 3 900 · WPDistro Standard 6 000 · Externí IT Standard ≈ 7 500 (10 stanic) · ITHOPE 8 000–18 000 | **≈ 6 000 Kč** |
| **1 hodina** | SKOMATECH PROFI 4 500 (10 PC) · Externí IT Prémium ≈ 11 500 (10 stanic) · WPDistro Premium 12 000 | **≈ 11 500 Kč** |
| **15–30 minut** | SKOMATECH PREMIUM 6 500 (10 PC) · ICT-GROUP „90 % do 30 minut“ 2 990–12 910 podle velikosti firmy | **≈ 6 500–12 900 Kč** |
| **sekundy / minuty, cena na dotaz** | vshosting: telefon do 60 s, tickety průměrně 15 min, oprava HW do 60 min — **„Cena: Na vyžádání“** `EK4-018` | – |

### 2.3 Co platí česká firma za celé firemní IT

| Dodavatel | Rozsah | Cena/měs bez DPH | Reakce | Řádek |
|---|---|---|---|---|
| Externí IT | 8–10 stanic + 1 server | **≈ 9 000 Kč** | SLA 4 h | `PK4-007` |
| ITHOPE | firma 10–30 zaměstnanců, kompletní paušál | **8 000–18 000 Kč** | 4 h v pracovní době | `PK4-008` |
| ICT-GROUP | firma s 8 lidmi, hodinová podpora | **5 702 Kč** | 90 % do 30 min | `PK4-015` |
| ICT-GROUP | firma s 8 lidmi, neomezená podpora | **12 910 Kč** | 90 % do 30 min | `PK4-015` |
| SKOMATECH | firma s 30 PC, outsourcing celkem | **9 000–19 500 Kč** | dle tieru | `PK4-040` |
| ICT-GROUP | základ správy podle velikosti | 2 990 (1–5) / 4 990 (6–20) / 6 990 (21–50) / 9 990 (50–100) / **11 990 Kč (100+)** | 90 % do 30 min | `PK4-010`–`013` |

> „Cena má dvě části. Základ správy podle velikosti firmy: 2 990 Kč měsíčně pro 1–5 lidí, 4 990 Kč pro 6–20,
> 6 990 Kč pro 21–50, 9 990 Kč pro 50–100 a 11 990 Kč pro 100+ lidí. … **Firma s 8 lidmi tak vyjde na
> 5 702 Kč měsíčně s hodinovou podporou, nebo 12 910 Kč s neomezenou.** … Reakce: 90 % požadavků řešíme
> do 30 minut.“ — ICT-GROUP `EK4-004`

Pozoruhodné: mezi firmou o 5 lidech a firmou o 100+ lidech je rozdíl v ceně jen **4,0×**, ačkoli počet
uživatelů roste 20× a víc. Cena paušálu roste s velikostí klienta **výrazně pomaleji než jeho rozsah**.

### 2.4 Správa webu a WordPress paušály

| Dodavatel | Tier | Cena/měs | Reakce | Hodiny v ceně | Řádek |
|---|---|---|---|---|---|
| SiteCare | Základ | 790 Kč | 24 h | – | `PK4-020` |
| SiteCare | Byznys | 1 490 Kč | 24 h | 60 min | `PK4-021` |
| SiteCare | Agentury / Portály | 3 900 Kč | **4 h + SLA smlouva** | 3 h | `PK4-022` |
| WPDistro | Autopilot Basic | 3 000 Kč | 24 h | – | `PK4-017` |
| WPDistro | Autopilot Standard | 6 000 Kč | **4 h** | – | `PK4-018` |
| WPDistro | Autopilot Premium | 12 000 Kč | **1 h + SLA s kompenzací** | – | `PK4-019` |
| CARE4WEB | Základní / Standardní / Pokročilá | 1 000 / 2 500 / 5 000 Kč | neuvedeno | 1 / 3 / 6 h | `PK4-023`–`025` |

CARE4WEB je protipól: tiery se odstupňovávají **objemem hodin**, ne rychlostí, a nejvyšší tier slibuje
jen „**Monitoring 24/7 a rychlý zásah při výpadku**“ – bez čísla `EK4-008`. Implicitní sazba v jeho paušálu
je 833–1 000 Kč/h.

### 2.5 Managed hosting a správa serverů

| Dodavatel | Služba | Cena/měs bez DPH | Reakce | Řádek |
|---|---|---|---|---|
| COMPARA | správa 1 serveru Linux (1 h prací v ceně) | od 2 500 Kč | „reakční doba“, podpora 5x8 – **bez čísla** | `PK4-026` |
| COMPARA | správa 1 serveru Windows (3 h prací) | od 3 500 Kč | totéž | `PK4-027` |
| COMPARA | správa prostředí Hyper-V (3 h prací) | od 5 000 Kč | totéž | `PK4-028` |
| ZServer (Zoner) | Základní Managed VPS | 1 500 Kč | neuvedeno | `PK4-029` |
| WEDOS | SLA úrovně podpory k WEDOS Protection | **cena doplňků neuvedena** | Bronze 1 prac. den (zdarma) → Silver 4 h → Gold 1 h (24/7) → Platinum 15 min (24/7) | `EK4-017` |
| vshosting | Managed servery | **na vyžádání** | telefon do 60 s, tickety ~15 min | `EK4-018` |

> „Konečná cena se odvíjí od: struktury a složitosti sítě a počtu serverů; **nároků na zajištění požadované
> úrovně SLA**.“ — COMPARA `EK4-009`

> „Doby odezvy podpory. **Bronze je součástí všech plánů. Vyšší úrovně jsou k dispozici jako placené doplňky.**
> Bronze: pracovní doba, Response: 1 pracovní den. Silver: pracovní doba, Response: 4 hodiny. Gold: 24/7,
> Response: 1 hodina. Platinum: 24/7, Response: 15 minut. | Servisní kredity: ≥ 99,99 % – 10 % měsíčního
> poplatku; ≥ 99,90 % – 25 %; ≥ 99,50 % – 100 %; < 99,50 % – 100 % + revize. … Žádosti musí obsahovat časové
> značky, dotčené služby a podpůrnou dokumentaci.“ — WEDOS `EK4-017`

### 2.6 Účetní paušál – paušál, který klient už platí

| Dodavatel | Tier | Cena/měs bez DPH | Osa odstupňování | Řádek |
|---|---|---|---|---|
| Finela | start / standard / premium | 1 499 / 2 499 / 3 499 Kč | 50 / 100 / 150 dokladů | `PK4-034`–`036` |
| Victory Point | START / STANDARD / PREMIUM | 2 500 / 4 500 / 7 500 Kč | 1–50 / 51–100 / 101–200 položek | `PK4-031`–`033` |
| Victory Point | ENTERPRISE | **Individuální** | nad 200 položek, dedikovaný tým, „expresní zpracování“ | – |

Reakční dobu neslibuje **ani jeden** účetní dodavatel. Cena se obhajuje odpovědností:

> „**Chyba v daních může stát miliony. Naše cena zahrnuje nejen zpracování, ale především zodpovědnost
> a garanci správnosti.**“ + „Pojištěno do 5 mil. Kč“ + „Co je zahrnuto v ceně každého tarifu? … **Proaktivní
> hlídání: Upozorníme vás, pokud se blížíte limitu DPH nebo paušálu. My hlídáme termíny.**“ — Victory Point `EK4-012`

### 2.7 Marketingové paušály (sociální sítě, SEO, PPC)

| Dodavatel / zdroj | Služba | Cena/měs | Reakce | Řádek |
|---|---|---|---|---|
| Trendii | Základ / Růst / Maximum | **18 000 / 32 000 / 43 000 Kč** (konečné, neplátce DPH) | do 24 h v pracovní dny | `PK4-041`–`043` |
| Trendii | nastavení a správa reklamy | od 6 990 Kč za kanál | do 24 h | `PK4-044` |
| Medly (cit. Trendii) | správa IG + FB | ≈ 9 900 Kč | – | `PK4-047` |
| Grou.cz (cit. Trendii) | základní balíček | od 3 950 Kč | – | `PK4-046` |
| ReelsVideo.cz (cit. Trendii) | Full Service | od 59 900 Kč | – | `PK4-045` |
| Hasalík (přehled trhu) | pravidelná SEO práce | 10–40 tis. Kč | – | `PK4-048` |
| Hasalík (přehled trhu) | běžná agenturní správa PPC | 8–30 tis. Kč | – | `PK4-049` |
| Hasalík (přehled trhu) | sociální sítě, menší agentura | 20–50 tis. Kč | – | `PK4-050` |
| Hasalík (přehled trhu) | správa zbožového srovnávače | 2–8 tis. Kč | – | `PK4-051` |
| Hasalík (přehled trhu) | **celý měsíční marketing menší firmy vč. reklamy** | **20–80 tis. Kč** | – | `PK4-052` |

> „Kdy pro vás nejsme správná volba … Potřebujete odpovídat na zprávy v řádu minut od rána do noci.
> **Jsme dva a držíme odpověď do 24 hodin v pracovní dny.**“ — Trendii `EK4-015`

> „Měření a vyhodnocování (webová analytika, GA4 a GTM) – **2,5–15 tis. Kč+ jednorázově**. Základní nastavení
> měření prezentačního webu: přibližně 2,5–7 tis. Kč. E-shop, GA4, GTM a e-commerce události: přibližně
> 7,5–15 tis. Kč. Nastavení pokročilého měření pomocí BigQuery: 10+ tis. Kč.“ — Radim Hasalík `EK4-016`

### 2.8 Hodinové sazby jako kontext k nákladovému modelu

| Zdroj | Segment | Sazba |
|---|---|---|
| ICT-GROUP `EK4-005` | živnostník | 300–900 Kč/h |
| ICT-GROUP | menší IT firma | 600–1 200 Kč/h |
| ICT-GROUP | střední IT firma | 1 000–1 600 Kč/h |
| ICT-GROUP | velká IT firma | 2 000–8 000 Kč/h |
| ICT-GROUP `PK4-030` | práce nad rámec paušálu | 1 390 Kč/h |
| ITHOPE | technik smluvní / nesmluvní | 1 000 / 1 300–1 700 Kč/h |
| Externí IT | L3 senior infrastruktura | 1 990 Kč/h |
| ICT-GROUP `PK4-016` | „hodinový IT ředitel“, min. 5 h/měs | 2 999 Kč/h = 14 995 Kč/měs |

Sazba **700 Kč/h**, se kterou počítá nákladový model DataLayer, odpovídá pásmu OSVČ až menší IT firmy.

---

## 3. INTERPRETACE – co to mění na závěrech verze 2

### 3.1 Na pásmu 8 900 Kč (tier „Hlídání“) – **oslabuje ho, a to výrazně**

Verze 2 říká, že 8 900 Kč leží pod evropským mediánem, ale osm z patnácti evropských subjektů je levnějších.
Domácí kotvy to zhoršují ze tří stran:

- **8 900 Kč ≈ cena celého firemního IT** malé české firmy (Externí IT 9 000, ITHOPE 8 000–18 000,
  ICT-GROUP 12 910 s neomezenou podporou). Klient tedy porovnává „hlídání jednoho měřicího stacku“
  s „staráme se o všechny počítače, servery, e-maily, zálohy a bezpečnost vaší firmy“.
- **8 900 Kč > nejdražší veřejný účetní paušál v ČR** (7 500 Kč, Victory Point PREMIUM). Účetnictví je
  přitom paušál s právní odpovědností a pojištěním do 5 mil. Kč.
- **Slíbená reakce „další pracovní den“ je v sousedních oborech ta nejlevnější, vstupní, best-effort
  úroveň** a stojí 790–4 400 Kč/měs. Reakční doba tedy pro tier 1 **není argument** – je to úroveň,
  kterou konkurenční obory dávají zdarma jako výchozí.

**Důsledek:** tier 1 buď musí obhájit obsahem doslova formulovaným proti těmto kotvám, nebo se cena musí
posunout dolů, nebo se reakční doba musí zkrátit (do 4 h je v ČR cena ≈ 6 000 Kč/měs – teprve pak je
8 900 Kč se slíbenou reakcí obhajitelné jako mírně nadprůměrné).

### 3.2 Na pásmu 19 900 Kč (tier „Správa“) – **beze změny, ale skok je na horní hranici zvyku**

19 900 Kč zůstává nejlépe podepřeným tierem (šest subjektů v pásmu 17 500–23 750 Kč). Nové je jen tohle:
skok 8 900 → 19 900 je **2,24×**, zatímco český medián za jeden stupeň zkrácení reakce je **1,63×** a jen
dva z devíti pozorovaných přechodů jsou 2,0× nebo víc (WPDistro, SiteCare). Skok DataLayer je tedy
obhajitelný, ale **není typický** – a musí být obhájen víc než jen změnou SLA z „další pracovní den“ na 8 h.
Podle domácího zvyku by se za samotné zkrácení reakce mělo účtovat ≈ 1,6×, tj. ≈ 14 500 Kč; zbytek skoku
je za obsah (QA po releasu, měsíční audit, 3 h změn) a musí být jako takový prezentován.

### 3.3 Na pásmu 39 000 Kč (tier „Datová správa“) – **poprvé má domácí oporu, ale jiného druhu**

Verze 2 tvrdí: „39 000 Kč nemá tržní oporu. Dva veřejné evropské lidské body s BigQuery jsou 11 250 a
45 000 Kč – rozptyl 4×, n = 2.“ **To zůstává pravda pro správu měření.** Ale nově platí:

- **V ČR existuje veřejně ceníkovaný měsíční marketingový paušál za 43 000 Kč** (Trendii Maximum) a nezávislý
  tržní přehled to potvrzuje (menší agentura 20–50 tis. Kč, komplexní obsah 50 tis.+). Pravidelná SEO práce
  10–40 tis. Kč. Tvrzení „taková částka je v ČR za jednu měsíční službu nevídaná“ tedy **neplatí**.
- **Ale rozpočtový strop mění cílení.** Celý měsíční marketing menší české firmy je 20–80 tis. Kč **včetně
  reklamního rozpočtu**; 80–300 tis. Kč má až firma střední. Tier 3 za 39 000 Kč je proto prodejný
  **výhradně** firmě z pásma „střední“ – což se shoduje s definovaným cílem (e-shop 100 mil.+), ale znamená,
  že celé pásmo má v ČR **řádově menší počet potenciálních klientů** než tier 1 a 2.
- **Reakce do 4 h u tieru 3 stojí v sousedních oborech ≈ 6 000 Kč/měs.** V nabídce za 39 000 Kč je to
  položka o hodnotě zhruba 15 % ceny – nesmí být prezentována jako hlavní důvod ceny.

### 3.4 Na otevřené otázce „existuje vůbec poptávka?“ – **posunuje ji, ale nerozhoduje**

**Co to zlepšuje:**

- **Forma je ověřená.** Týž kupující (česká firma o 8–30 lidech, e-shop) rutinně kupuje měsíční paušál
  s garantovanou reakční dobou v pěti různých oborech naráz: IT podpora, hosting, správa webu, účetnictví,
  marketing. Pásmo 790–43 000 Kč/měs. Nákupní vzorec „platím měsíčně za to, že se něco hlídá a někdo
  reaguje“ **nemusí DataLayer vytvářet** – klient v něm už žije.
- **Sdělení je ověřené jako prodejné.** ICT-GROUP prodává přesně tu větu, kterou DataLayer chce používat:
  „Problémy vidíme dřív než vaši lidé a řešíme je dřív, než je poznáte“ `EK4-011` – a bere za ni
  3–13 tis. Kč/měs. To je silnější podpora H2 než cokoli z 1. kola.
- **Model, který snese „nic se nestalo“, existuje a je zaplacený.** IT paušál se prodává právě jako
  pojistka, ne jako předplacené hodiny: ITHOPE dává smluvnímu klientovi akutní výjezd do 2 h za polovinu
  a výslovně píše „priorita jde paušálním klientům“ `EK4-003`.

**Co to zhoršuje:**

- **Nejúplnější český veřejný přehled cen online marketingu vede měření výhradně jako jednorázovou položku
  2,5–15 tis. Kč a měsíční cenu za jeho správu neuvádí vůbec** `EK4-016`. To je **nezávislé potvrzení**
  protievidence z 2. kola (0 z 53 poptávek na Shoptet Partnerech, americké „this is not something you can
  sell on a retainer“) – tentokrát z domácího zdroje psaného pro klienty, ne pro dodavatele. Týž autor
  doporučuje ptát se, zda kampaňový paušál obsahuje „strategii, **měření**, konzultace…“ – tedy měření je
  v ČR vnímáno jako **součást jiné služby**, ne jako služba.
- **Dva slibované diferenciátory jsou v sousedních oborech zdarma.** „Sledování deadlinů za klienta“ dává
  Victory Point v ceně každého tarifu `EK4-012`; týdenní reporty dává SKOMATECH v nejvyšším tieru za
  650 Kč/PC `EK4-014`. Musí se z nabídky přesunout z „diferenciátor“ do „hygiena“.
- **Riziko churnu je v oboru pojmenované a známé.** ICT-GROUP má na stránce sekci „**Tichý první měsíc**“
  a píše rovnou: „u firmy, která volá dvakrát za rok, by byl paušál dražší než užitek“ a „Nikoho do paušálu
  netlačíme“ `EK4-004`. To je přesně důvod odchodu, který 2. kolo našlo („ticho mezi reporty“). Dodavatelé,
  kteří v ČR paušály prodávají úspěšně, řeší to **otevřeným přiznáním, kdy se paušál nevyplatí**.

**Závěr k otázce:** kotvy poptávku **nepotvrzují ani nevyvracejí**. Potvrzují, že cena, forma a sdělení jsou
v ČR prodejné. Nepotvrzují, že klient vnímá měření jako věc, která potřebuje průběžnou péči. Pořadí validace
z verze 2 (nejdřív white-label pilot, pak test dvěma landing stránkami) **zůstává správné**.

### 3.5 Tři konkrétní věci do nabídky, které z kotev plynou

1. **Publikovat ceník je v ČR konkurenční výhoda, ne slabina.** ICT-GROUP: „Ceník je v téhle branži často až
   výsledek schůzky s obchodníkem — **my ho máme veřejně**“ `EK4-004`. Externí IT: „Transparentní ceny bez
   skrytých poplatků“ `EK4-001`. Zároveň platí, že **nejrychlejší česká reakční doba se neceníkuje**
   (vshosting, WEDOS placené doplňky bez ceny) – veřejný ceník je proto výhoda jen do určité úrovně slibu.
2. **Převzít vzor SLA kreditů od WEDOS** `EK4-017`: kompenzace v procentech měsíčního poplatku (10 / 25 / 100 %),
   lhůta 15 dnů na uplatnění, povinná dokumentace s časovými značkami, ověření proti vlastním monitorovacím
   záznamům, kredit na budoucí faktury. Tím se řeší část mezery C4 z verze 2, aniž by šlo o právní poradenství.
3. **Vypůjčit si od ICT-GROUP kontrolní seznam „co musí paušál obsahovat, ať porovnáváte srovnatelné“**
   `EK4-004`, kde je jedna z položek doslova „**Helpdesk s jasnou reakční dobou**“ a věta „‚paušál‘ bez
   definice obsahu je jen slovo — dvě stejné částky se můžou lišit o polovinu práce“. Je to hotový nástroj
   pro odpověď na otázku, čím se DataLayer liší od Signals Bar za 2 500 Kč a od PPC balíčku, který měření
   „obsahuje“ (bod 6 v Otázce 5 verze 2).

---

## 4. MEZERY, které zůstávají

| # | Co chybí | Proč to vadí | Jak to doplnit |
|---|---|---|---|
| 1 | **Cena SLA doplňků u WEDOS** (Silver / Gold / Platinum) | Byl by to jediný český bod, kde je reakční doba samostatná placená položka **s cenou**. Veřejná stránka SLA ji neuvádí – nedostupné. | Objednávkový proces v klientské zóně nebo ceník produktu WEDOS Protection; není přístupné bez účtu |
| 2 | **Ceny horní poloviny trhu** (vshosting, Master Internet, Sentia, Blueghost, velké IT domy) | Všechny nalezené body pocházejí od malých a produktizovaných dodavatelů – vzorek je stejně vychýlený dolů jako u analytiky ve 2. kole. vshosting slibuje reakci v sekundách a cenu má na dotaz. | Mystery shopping (mimo rozsah tohoto úkolu – zákaz kontaktu) nebo registr smluv |
| 3 | **Reálně zaplacené ceny za IT paušál**, ne ceníkové | Všech 52 řádků jsou ceníky, většina se slovem „od“. U analytiky tuto mezeru řeší registr smluv (úkol K01); u IT podpory ji nikdo nezavřel. | smlouvy.gov.cz, dotazy „správa IT“, „servisní smlouva“, „outsourcing IT“ |
| 4 | **Reakční doby u účetních paušálů** | Účetnictví je nejlepší srovnávací paušál (klient ho platí), ale reakční dobu neslibuje ani jeden z prověřených dodavatelů – nelze tedy porovnat cenu SLA napříč obory až sem. | Obchodní podmínky účetních firem, ne ceníkové stránky |
| 5 | **Jak často se paušál v ČR reálně čerpá** | ICT-GROUP tvrdí „většina firem provolá 1–3 hodiny měsíčně“; ITHOPE počítá 0,5 h nutných úkonů + 0,25 h supportu na stanici měsíčně. Obojí je tvrzení dodavatele, nikoli měření. Přitom je to přímá analogie k mezeře A3 (ekonomika dodávky). | Vlastní data DataLayer.cz; případně anonymizované výkazy MSP dodavatele |
| 6 | **Churn a přežití paušálů v sousedních oborech** | „Tichý první měsíc“ je pojmenované riziko, ale nikdo neuvádí, kolik klientů kvůli němu odejde. Přenositelnost na správu měření je proto jen hypotéza. | Wayback na ceníky MSP dodavatelů 2019–2026; recenze na Firmy.cz / Google |
| 7 | **Ceny SK trhu ve stejných oborech** | Úkol byl zadán pro ČR. Slovenské kotvy chybí, přitom SK je v datasetu jinak pokryto. | Táž metoda, `Accept-Language: sk,cs` |
| 8 | **Normalizace „za stanici“ na 10 stanic je konvence tohoto úkolu, ne tržní údaj** | U šesti řádků (`PK4-004`–`006`, `PK4-037`–`039`) je `price_czk_month` odvozený. Při slučování do hlavního datasetu je nutné je označit `scope_class`, jinak zkreslí medián. | Označit při merge; hodnota za jednotku je v `price_original` |
