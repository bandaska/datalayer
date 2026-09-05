# Kolo 2 – Ověření českých cenových tvrzení z 1. kola

Role: ověřovatel (cz-ceny). Datum přístupu u všech zdrojů: **2026-09-04**.
Metoda: u každého tvrzení stažen zdrojový HTML přes `curl` (User-Agent prohlížeče), odstraněny `<script>`/`<style>`,
převedeno na text a hledán doslovný řetězec. Tam, kde 1. kolo vycházelo ze shrnutí WebFetch, byl výslovně
ověřen **raw HTML**, ne shrnutí. Nové/opravené cenové řádky: `data/fragments/r2-v1-pricing.csv` (PV1-001 – PV1-018).

Výsledek z 27 ověřovaných tvrzení: **24 potvrzeno, 1 vyvráceno (Softmedia), 1 změněno/upřesněno (charakter stránky Digitálních architektů), 1 nedostupné (období rozpočtových pásem DA)**.

---

## 1. Tabulka ověření

| Tvrzení (1. kolo) | Verdikt | Co je na zdroji dnes (doslova) | URL | Poznámka |
|---|---|---|---|---|
| RobertNemec.com: měsíční práce **od 9 250 Kč** | confirmed | „Měsíční práce na webové analytice (tak, aby měla smysl) začínají na 9 250 Kč, nejběžnější cena je 18 500 Kč a 31 200 Kč.“ | robertnemec.com/umime/digitalni-analytika/webova-analytika/ | – |
| RobertNemec.com: **18 500 Kč** jako nejběžnější | confirmed | tatáž věta | tamtéž | doslova jde o **dvě** „nejběžnější“ ceny, ne o jednu |
| RobertNemec.com: **sporná varianta 31 200 Kč** | **confirmed** | „…nejběžnější cena je 18 500 Kč **a 31 200 Kč**.“ – nalezeno v raw HTML, ne jen ve WebFetch shrnutí | tamtéž | **Klíčové ověření kola 2.** Výhrada z 1. kola („v curl výřezu nepotvrzen“) padá; opraveno v PV1-001. Není to horní varianta jednoho tieru, ale druhá běžná cena vedle 18 500 Kč |
| RobertNemec.com: hodinová sazba 1 850 Kč/h | confirmed | „Cena je cena 1 850 Kč/h.“ | tamtéž | 18 500 Kč ≈ 10 h, 31 200 Kč ≈ 17 h |
| Khoder: „E-commerce report – měsíční správa“ **2 500 Kč/měs** | confirmed | „e-commerce reporting od 4 500 Kč (**správa od 2 500 Kč měsíčně**)“; v ceníkové tabulce řádek „E-commerce report … Tvorba 4 500 Kč / Měsíční správa 2 500 Kč“ | khoder.cz | – |
| Khoder: tvorba reportu **4 500 Kč** | confirmed | „e-commerce reporting od 4 500 Kč“ | khoder.cz | – |
| Khoder: **GTM e-shop 7 500 Kč** | confirmed | „Nastavení GTM pro e-shop … 7 500 Kč“, resp. „nastavení měření přes GTM od 7 500 Kč“ | khoder.cz | v tabulce má sloupec „Měsíční správa“ hodnotu **„—“** |
| Khoder: **950 Kč/h** | confirmed | „Hodinová konzultace pak stojí 950 Kč.“ | khoder.cz | úvodní konzultace zdarma |
| Khoder: práh **„od 500 000 Kč obratu měsíčně“** | confirmed | „Spolupráce dává smysl zhruba **od 500 000 Kč obratu měsíčně**, kdy se už vyplatí řídit reklamu podle dat, ne odhadem.“ | khoder.cz | – |
| Ráš: **13 000 Kč/MD**, minimum 2 MD/měs | confirmed (s upřesněním) | „Dlouhodobá spolupráce (**více než 2 dny měsíčně**) 13 000 Kč/MD“ | dataras.cz | Doslova „více než 2 dny“ → 26 000 Kč je **spodní odhad**, ne uvedené minimum; ceník žádnou měsíční částku neuvádí |
| Ráš: **2 400 Kč/h** | confirmed | „Krátkodobá spolupráce 2 400 Kč/h“ | dataras.cz | úvodní konzultace 4 000 Kč (1–2 h) |
| Ráš: implementace GTM+GA4+BQ **5 700 Kč** | confirmed | „Základní implementace měření (GTM, GA4, BigQuery): 5 700 Kč“ | dataras.cz | potvrzuje BQ-first: BQ i v základním balíčku |
| Digitální architekti: pásma **5–10 / 11–20 / 21–40 / 41+ tis. Kč** | confirmed | select „Očekávaný rozpočet *“: „5 000 – 10 000 Kč / 11 000 – 20 000 Kč / 21 000 – 40 000 Kč / 41 000 Kč a více“ | digitalniarchitekti.cz/spravujeme-gtm-pro-klicove-hrace-ceske-ecommerce/ | jde o poptávkový formulář, ne ceník |
| Digitální architekti: pásma **30–100+ tis. Kč** | confirmed | „30 000 – 50 000 Kč / 50 001 – 100 000 Kč / 100 001 Kč a více“ | digitalniarchitekti.cz/mobilni-a-webova-analytika/ | do CSV doplněno jako PV1-018 (v 1. kole jen v textu) |
| Digitální architekti: **jde o měsíční, nebo projektové pásmo?** | **unreachable** | Na stránce není žádné určení období. Label je pouze „Očekávaný rozpočet *“, `name` pole je `obrat`. Navazující dotazník `/dotaznik-pro-webovou-analytiku/` se načítá JS (bez JS 2 řádky textu) | tamtéž | `scope=unknown` zůstává; z veřejných zdrojů nelze rozhodnout |
| Digitální architekti: stránka „Pravidelná údržba a monitoring měření“ = **produkt** | **changed** (upřesnění) | Stránka je **článek**, ne produktová karta: „V tomto článku se zaměříme na pravidelnou údržbu a monitoring měření…“, bez ceny, bez formuláře, bez definice rozsahu. Doslova zůstává „V praxi se stanoví týdenní nebo měsíční kontroly (dle velikosti webu, zaměření a požadavků).“ | digitalniarchitekti.cz/produkty/pravidelna-udrzba-a-monitoring-mereni/ | „Pravidelná údržba a monitoring měření“ **není** v navigaci Produkty (ta má: Webová analytika, Marketingová analytika, Pokročilá měření, Reporting a analýzy, Zákaznická zkušenost a CRO, Školení a mentoring). Tvrzení „jediný CZ subjekt, který kontinuální správu pojmenovává jako produkt“ je tím **slabší**, ne silnější |
| Advisio DataPlus: **800 / 1 500 / 3 000 Kč/měs** dle 150k/300k událostí | confirmed | „do 150 000 událostí měsíčně **od 800 Kč/měsíc**“; „150 000 až 300 000 událostí měsíčně **od 1 500 Kč/měsíc**“; „nad 300 000 událostí měsíčně **od 3 000 Kč/měsíc**“ | dataplus.advisio.cz | Navíc doslova: „Cena je vždy individuální, záleží na objemu vašich dat. **Cenové rozpětí je přibližně jeden až tři tisíce korun měsíčně.**“ |
| Softmedia: provoz sGTM **1 000 / 2 500–4 000 / 6 000–8 000 Kč/měs** | **refuted** | Článek je k dnešnímu dni **přepsán** (datum 10. 6. 2026) a neobsahuje **žádnou** cenu. Doslova jen: „Postavíme serverový GTM kontejner na vlastní infrastruktuře… **Infrastrukturu dál hlídáme a aktualizujeme.** Vy nebo vaše agentura pracujete s daty, provoz neřešíte.“ | softmedia.cz/novinky-ze-softmedia/serverove-gtm-pro-presnejsi-data/ | Wayback nemá žádný snapshot URL (`archived_snapshots: {}`), číslo nelze doložit. **Vyřadit z distribuce sGTM cen** (PV1-010 – PV1-012) |
| Marketing Makers: **2 100 Kč/h** analytika | confirmed | „Jednorázové konzultace, webová analytika, automatizace **2100 Kč**“ | marketingmakers.net/my-a-nas-tym/cenik-a-kapacity/ | sazba bez DPH |
| Marketing Makers: **1 600 Kč/h** PPC | confirmed | „Výkonnostní kampaně, SEO **1600 Kč**“ | tamtéž | – |
| Marketing Makers: odhad hodin analytiky **5 / 15 / 30 h** | confirmed | „Malé B2C nebo e-shop (kredit do 20.000 Kč) 6 4 **5** / Střední (kredit do 100.000) 12 8 **15** / Velké (kredit do 500.000) 30 15 **30**“ | tamtéž | Sloupce: nastavení / **měsíční správa** / webová analytika. Doplněn chybějící řádek „**B2B 15 8 10**“ (PV1-013) |
| Marketing Makers: PPC tiery **4 / 8 / 14 h** | confirmed | „Úplný základ **4 h měsíčně**“, „Rosteme **8 h měsíčně**“, „Jsme součástí týmu **14 h měsíčně**“ | tamtéž | pozor: v tabulce nad tím je sloupec měsíční správy 4 / 8 / **15** h – u velkého klienta se karty a tabulka rozcházejí o 1 h |
| MarketingPPC: nasazení GA4 **od 3 900 / 7 800 / 19 000 Kč** | confirmed | „Menší inzerenti a OSVČ … Cena od 3.900 Kč (160 €)“; „Běžné e-shopy a SMB … od 7.800 Kč (430 €)“; „Větší firmy … od 19.000 Kč (760 €)“ | marketingppc.cz/sluzby/ga4/ | jednorázové ceny; € přepočty na stránce nejsou konzistentní |
| MarketingPPC: PPC správa **8–30 tis. Kč/měs** nebo **15–25 % spendu** | confirmed | „Hodinová sazba se pohybuje mezi **800-2000 Kč**… Měsíční paušál je běžnější – typicky **8-30 tis. měsíčně** podle složitosti kampaní. Velké firmy někdy platí procento z útraty (**15-25%**).“ | marketingppc.cz/faq/kolik-stoji-google-ads/ | Nově navíc: „Někdy se platí zvlášť poplatek za nastavení za první měsíc (**5-15 tis.**)“ a „Agentura se vyplatí od útraty zhruba **30 tis. měsíčně** na reklamy“ (PV1-014) |
| Jiří Kroužek: **1 150 Kč/h** | confirmed | „Hodinová sazba **1 150 Kč / hod**“; „Webová analytika – dle hodinové sazby“; školení 1 600 Kč/h | jirikrouzek.cz/cenik.html | Nově: „PPC reklamy **od 8 000 Kč / měsíc, dle rozsahu**“ – měsíční cenu má u PPC, u analytiky ne (PV1-015) |
| Zbyněk Hyrák: **2 000 / 3 000 Kč/h** | confirmed | „Ceník: osobní konzultace v Praze **3.000 Kč** bez DPH za hodinu, online konzultace a odborné práce **2.000 Kč** bez DPH za hodinu.“ | navolnenoze.cz/prezentace/zbynek-hyrak/ | – |
| WebPrezent: **790 Kč/h** a balíčky **5 h / 15 h** | confirmed | „Základní hodinová sazba – odborné práce **790,- Kč / hod**“; „5 hodin … **3 450,- Kč** … 690 Kč“; „15 hodin … **9 600,- Kč** … 640 Kč“ | webprezent.cz/cenik/ | Nově třetí stupeň „25 hodin … **14 750,- Kč** … 590 Kč“ (PV1-016) a měsíční položka „Bezpečnostní aktualizace“ 100 / 340 / **890 Kč/měs** (PV1-017) |

---

## 2. Co se změnilo v datech

**Opravené řádky** (`r2-v1-pricing.csv`):

| ID | Nahrazuje | Změna |
|---|---|---|
| PV1-001 | P2-003 | RN 31 200 Kč/měs – z „údaj z WebFetch, nepotvrzen“ na **doslovně ověřeno**; jde o druhou běžnou cenu vedle 18 500 Kč, ne o horní variantu |
| PV1-010 – PV1-012 | P2-034 – P2-036 | Softmedia sGTM – **vyřadit z cenové distribuce**, zdroj dnes ceny neobsahuje a nelze je doložit ani z archivu |

**Nové řádky:** PV1-002/003 (RN projektové ceny 9 250 / 20–40 tis. / ~100 tis.), PV1-004/005 (Khoder měsíční správa kampaní
4 500 a 3 500 Kč), PV1-006 (Khoder GTM web 2 500 Kč), PV1-007–009 (Ráš 16 900 / 4 300 / 7 200 Kč), PV1-013 (MM B2B 10 h),
PV1-014 (MarketingPPC setup fee 5–15 tis.), PV1-015 (Kroužek PPC od 8 000 Kč/měs), PV1-016/017 (WebPrezent 25 h a 890 Kč/měs),
PV1-018 (DA pásma 30–100+ tis.).

---

## 3. Dopad na závěry

### 3.1 Mění se pásma 8–10 / 16–23 / 35–45 tis. Kč?

**Medián 8–10 tis. Kč/měs za správu bez BigQuery: potvrzeno, nemění se.** Nosné body zůstávají – RN „začínají na 9 250 Kč“
(doslova ověřeno) a odvození z hodin (5 h × 1 500–2 400 Kč = 7 500–12 000 Kč) stojí na sazbách, které se všechny potvrdily
do koruny (2 400 / 2 100 / 2 000 / 1 850 / 1 150 / 950 / 790 Kč/h). Nový bod Kroužek „PPC od 8 000 Kč/měsíc“ padá přesně
do pásma a potvrzuje, že 8–10 tis. je částka, kterou český klient za měsíční službu běžně platí.

**Horní kvartil 16–23 tis. Kč: potvrzeno, ale strop je výš, než report uváděl.** RN 18 500 Kč sedí uprostřed pásma.
Potvrzení 31 200 Kč ale znamená, že **nejběžnější ceny jednoho dodavatele jsou dvě: 18 500 a 31 200 Kč** – tedy horní běžná
cena za měsíční analytickou práci **bez BigQuery** je v ČR ~31 tis. Kč, ne ~23 tis. Doporučení: pásmo horního kvartilu nechat,
ale připsat, že veřejný **strop lidské správy bez BQ je 31 200 Kč** (RN) a 26 000 Kč+ (Ráš, „více než 2 dny měsíčně“).

**Pásmo s BigQuery 35–45 tis. Kč: nepřímo oslabeno.** Vzdálenost mezi horní běžnou cenou bez BQ (31 200 Kč) a dolní hranicí
tieru s BQ (35 000 Kč) je jen ~12 %, ne 3,7–5,5×. Násobek 3,7–5,5× platí proti **mediánu** (8–10 tis.), ne proti hornímu
kvartilu – v reportu je formulace „správa s BigQuery je 3,7–5,5× dražší“ použitelná jen s doplňkem „oproti mediánu“.

**Navržené tiery 8 900 / 19 900 / 39 000 Kč: obhajitelné beze změny.** 8 900 Kč sedí těsně pod RN „od 9 250 Kč“ (což je
prodejní výhoda: nejlevnější veřejná měsíční analytická služba v ČR), 19 900 Kč sedí těsně nad RN 18 500 Kč,
39 000 Kč je mezi RN 31 200 Kč a Ráš 26 000+ Kč rozšířeným o BQ vrstvu. Jediné, co je potřeba doplnit v argumentaci:
proti 39 000 Kč stojí veřejný bod 31 200 Kč **bez** BQ, takže prémie třetího tieru se musí opírat o BQ obsah
(reconciliace, monitoring exportu), ne o „vyšší senioritu“.

### 3.2 Co se mění mimo pásma

1. **Provoz sGTM 1 500–6 000 Kč/měs jako oddělená položka: horní hranice ztratila oporu.** Softmedia (1 000 / 2 500–4 000 /
   6 000–8 000 Kč) je vyvrácena. Zbývající veřejné CZ body jsou Advisio DataPlus **800 / 1 500 / 3 000 Kč** (potvrzeno,
   navíc doslova „přibližně jeden až tři tisíce korun měsíčně“), Szabo 350–600 Kč a MM ~300 Kč infrastruktury.
   Doporučení: **posunout položku provozu sGTM na 800–3 000 Kč + hosting**, jinak je nabídka proti jedinému živému
   veřejnému produktu (DataPlus) 2× dražší bez viditelného důvodu.

2. **Teze „kontinuální správu měření v ČR nikdo neprodává“ zesílila.** Nejsilnější nový důkaz je ceník Khodera: má dnes
   explicitní sloupec „Měsíční správa“ s cenami u Google Nákupů (4 500 Kč), Facebook Ads (3 500 Kč) a e-commerce reportu
   (2 500 Kč) – a u obou položek nastavení měření (GTM web 2 500 Kč, GTM e-shop 7 500 Kč) má v tomto sloupci **pomlčku**.
   Tj. dodavatel, který měsíční správu umí naceňovat, ji u měření vědomě nenabízí. Stejný vzorec u Kroužka
   (PPC od 8 000 Kč/měs, analytika „dle hodinové sazby“).

3. **Digitální architekti nejsou protipříklad, jak se v 1. kole zdálo.** Jejich „Pravidelná údržba a monitoring měření“
   je blogový článek pod `/produkty/`, ne produkt v nabídce, bez ceny a bez rozsahu. Počet CZ subjektů s kontinuální
   správou měření **jako pojmenovaným produktem s cenou tak klesá na 0**; s pojmenováním bez ceny na ~1 (a i to je článek).

4. **Rozpočtová pásma DA zůstávají nepoužitelná jako cenový bod** (období neuvedeno, `name` pole je dokonce `obrat`).
   Doporučuji je v syntéze pricingu nepoužívat jako oporu pro „11–20 / 21–40 tis. Kč měsíčně“ a nechat je jen jako
   indikaci velikosti zakázky.

5. **Kotva „klient je zvyklý platit paušál za údržbu“ získala nový bod:** WebPrezent účtuje 100 / 340 / 890 Kč/měs
   za bezpečnostní aktualizace webu. Řádově je to desetina ceny hlídání měření – užitečné pro argumentaci
   „údržbu webu platíte, údržbu měření ne“.

### 3.3 Co zůstává neověřitelné

- **Období rozpočtových pásem Digitálních architektů** – bez JS se dotazník nenačte, na stránce žádné určení není.
- **Historické ceny Softmedia** – Wayback nemá snapshot, nelze doložit, že tam čísla někdy byla.
- Ceny agentur „na dotaz“ (Optimics, Taste, Effectix, WEBUI, MeasureDesign) – beze změny, veřejně neexistují;
  jediná cesta je mystery shopping (viz mezera z 1. kola).
