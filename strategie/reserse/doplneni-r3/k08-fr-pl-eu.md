# K08 – Francie a Polsko: doplnění evropského vzorku

**3. kolo, úkol K08.** Datum přístupu ke všem zdrojům: **2026-09-06**. Zdroj zadání: `10-doplneni-a-overeni-r2.md` § 6, priorita D1.
Data: `data/fragments/r3-k08-pricing.csv` (31 řádků, `PK8-001`–`PK8-031`),
`data/fragments/r3-k08-evidence.csv` (25 řádků, `EK8-001`–`EK8-025`, `phase=12`).

Prozkoumáno **71 evropských subjektů** v 7 zemích (FR 36, BE 20, PL 8, RO 2, HU 2, NL 2, CH 1),
z toho **58 s nějakou veřejnou cenou** (jakoukoli – jednorázovou, hodinovou i měsíční). Žádná firma nebyla kontaktována; vše z veřejných stránek.

---

## 1. Shrnutí (10 bodů)

1. **Odpověď na hlavní otázku: Francie evropský vzorek nezachrání – potvrzuje ho. Ve 36 francouzských
   subjektech existuje přesně JEDNA veřejná měsíční cena za správu měření (Junto, „Dès 1 335 €/mois“
   = 33 375 Kč), a ta jako první evropský lidský bod s BigQuery leží mezi dosud známými 11 250 a 45 000 Kč.**
   Polsko dostalo první veřejnou měsíční cenu na straně dodavatele (Paweł Piekarski, „Opieka analityczna
   od 3 000 zł netto/mies.“ = 17 400 Kč).
2. **Čtyři nové evropské lidské paušály mají medián 12 600 Kč** (NL 6 250 · CH 7 800 · PL 17 400 · FR 33 375).
   To je **do 3 % od publikovaného evropského mediánu 12 250 Kč** z 1. kola. Nezávislý vzorek, nezávislé země,
   stejné číslo – evropská kotva se tímto kolem zpevnila, nikoli posunula.
3. **Tier 39 000 Kč poprvé dostal třetí evropský bod s BigQuery.** Bylo `n = 2` (11 250 a 45 000, rozptyl 4×),
   je `n = 3` (11 250 / **33 375** / 45 000). Medián = 33 375 Kč. Tier 39 000 už není mezi dvěma
   nesouvisejícími čísly, ale 17 % nad mediánem tří.
4. **Tier 8 900 Kč se dalším měřením dostal ještě výš proti evropské podlaze.** Nové body pod ním:
   NL „doorlopende ondersteuning vanaf 250 €/maand“ = 6 250 Kč, CH „maintenance et évolution
   CHF 300–500/mois“ = 7 800 Kč, RO server-side tracking 40 €/měs = 1 000 Kč. Tvrzení „8 900 není
   nejlevnější nabídka na trhu“ z verze 2 se potvrzuje ve třech dalších zemích.
5. **Francouzský trh oceňuje měření PROJEKTOVĚ, ne paušálně.** 14 francouzských agentur na Sortlist.fr
   uvádí minimální **rozpočet zakázky** (modus 1 000 €, 7 z 14), ani jedna měsíční cenu. Stejně 20 belgických
   agentur (modus 1 000 €, 10 z 20). Maďarský cenový přehled 2026 oceňuje PPC, SEO, obsah i sociální sítě
   **měsíčně**, ale „mérés és analitika“ jako jediné **projektově**. Polský agregátor cen (7 poskytovatelů)
   nemá kategorii měsíční správy měření vůbec.
6. **Prázdná pozice v ČR není česká anomálie, ale evropská norma.** Ze 71 subjektů má veřejnou měsíční cenu
   za *lidskou* správu měření **5** (7 %): Junto (FR), Piekarski (PL), Webie (CH), Performance Marketing
   Support (NL, citovaný), CodeMix (RO, ale de facto hosting). Produkt existuje skoro všude –
   `Accompagnement mensuel` (FR), `Opieka analityczna` (PL), `mentenanță lunară` (RO),
   `Folyamatos tanácsadás (retainer)` (HU), `doorlopend beheer` (NL) – **ale téměř nikde nemá cenu.**
7. **Junto je jediný nalezený evropský dodavatel, který prodává v paušálu automatizované regresní testy
   dataLayeru.** Doslova: „Tests de non régression automatisés du datalayer“, „Tests de parcours automatisés“,
   „Maintenance de la data quality“, plus vlastní „entrepôt BigQuery de 145 champs documentés“. Je to
   nejbližší veřejná obdoba navrhovaného tieru 3, jakou rešerše v Evropě našla.
8. **Reakční dobu neslibuje číslem ani jeden ze 71 subjektů.** Nejblíž jsou slovní sliby: Junto „Support
   réactif“, Umane „disponibilité quotidienne“, Conversion.pl „szybkie reagowanie na nagłe sytuacje,
   np. błędy w danych“. Zjištění 2. kola („reakční dobu na výpadek měření v ČR ani na SK veřejně neslibuje
   nikdo“) tedy platí i pro FR, PL, BE, RO, HU, NL a CH.
9. **Osa cenění se v Polsku liší od české.** Conversion.pl (největší PL analytická agentura, ověřeno znovu
   2026-09-06) prodává kapacitu ve **dnech v týdnu** („1 lub 2 dni w tygodniu“ = 32–64 h/měs), ne v hodinách
   v paušálu. To je 5–13× víc kapacity, než počítají tiery DataLayer – jde o jiný produkt, ne o jinou cenu.
10. **Francouzská hodinová hladina je 2,5× nad českou.** Deset veřejných TJM na Malt.fr: 400–750 €/den,
    medián 450 €/den = 56 €/h = **1 406 Kč/h**. Nizozemský přehled: 60–150 €/h (průměr 105–120 €/h).
    Maďarsko: 6 000–30 000 Ft/h. Bez PPP korekce (mezera D2 z 2. kola) se české tiery proti FR/NL
    opticky podceňují.

---

## 2. FAKTA

### 2.1 Veřejné MĚSÍČNÍ ceny nalezené v tomto kole

| Země | Subjekt | Název služby doslova | Cena | Kč/měs | BQ | SLA | Evidence |
|---|---|---|---|---|---|---|---|
| FR | Junto | „Fiabilisez votre data et votre tracking“ | **Dès 1 335 €/mois** | **33 375** | ano | ne (jen „Support réactif“) | `EK8-016` / `PK8-020` |
| PL | Paweł Piekarski | „Opieka analityczna“ | **od 3 000 zł netto/mies.** | **17 400** | neuveden | ne | `EK8-007` / `PK8-009` |
| CH | Webie | „La maintenance et l'évolution“ | **CHF 300–500/mois** | **7 800**–13 000 | ne | ne | `EK8-001` / `PK8-001` |
| NL | Performance Marketing Support | „doorlopende ondersteuning“ | **vanaf €250/maand** | **6 250** | ne | ne | `EK8-020` / `PK8-026` |
| RO | CodeMix | „Tracking Server-Side“ | **40 €/lună** (+100 € jednorázově) | **1 000** | ne | ne | `EK8-018` / `PK8-023` |
| FR | Addingwell | hosting sGTM, 1 M requestů | 90 €/mois | 2 250 | ne | ne | `EK8-005` / `PK8-006` |
| NL | GA4 Support | „Serverside tagging Advanced“ | vanaf €20/mnd | 500 | ne | ne | `EK8-021` / `PK8-028` |
| PL | Double Digital | správa Google Ads, e-commerce | od 2 990 zł netto/mies. | 17 342 | ne | ne | `EK8-014` / `PK8-019` |

Poslední tři řádky **nejsou správa měření** (infrastruktura, resp. PPC paušál) – jsou v tabulce jako kotvy.

> **Junto (FR), doslova:** „**Fiabilisez votre data et votre tracking – Une donnée juste pour décider.
> Dès 1 335 € / mois.**“ … „Monitoring: **Maintenance de la data quality; Tests de non régression automatisés
> du datalayer; Tests de parcours automatisés.**“ … „Support / TMA: **Banque d'heures personnalisée; Support
> réactif; Consommation au quart d'heure.**“ … „un entrepôt BigQuery de **145 champs documentés**“ …
> „à partir de **2 000 €** pour un audit ou setup“ (`EK8-016`)

> **Paweł Piekarski (PL), doslova:** „Wdrożenie analityki – **od 1 500 zł netto**. Opieka analityczna –
> **od 3 000 zł netto/mies.** Wizualizacja danych – od 1 500 zł netto. … Konkretną wycenę daję po rozmowie.“
> (`EK8-007`)

> **Webie (CH), doslova:** „Une mise en place complète (mesure + tableau de bord + reporting automatisé)
> démarre à **CHF 3'000–5'000**. **La maintenance et l'évolution sont ensuite de CHF 300–500/mois** selon la
> complexité.“ (`EK8-001`)

### 2.2 Produkt existuje, cena ne – „měsíční správa na dotaz“ v pěti zemích

| Země | Subjekt | Název produktu doslova | Cena |
|---|---|---|---|
| FR | Ninjads | „**Accompagnement mensuel**“ · „Maintenance et évolution mensuelle de votre écosystème data“ | **SUR DEVIS** (`EK8-002`) |
| FR | Dékuple | „**05 Optimisation continue & Support** … On assure la maintenance“ | neuvedena (`EK8-003`) |
| FR | Christophe Dubois | „en **forfait mensuel d'accompagnement** selon vos besoins“ | neuvedena (`EK8-015`) |
| PL | Conversion.pl | „**Opieka analityczna** … rezerwujemy czas pracy zespołu w wysokości **1 lub 2 dni w tygodniu**“ | neuvedena (`EK8-025`) |
| PL | mbridge | „**Obsługa danych dla biznesu**“ | neuvedena (`EK8-010`) |
| RO | OmniMedia | „**mentenanță lunară** pentru clienții care doresc monitorizare continuă, depanare și actualizarea rapoartelor“ | neuvedena (`EK8-019`) |
| HU | iWebma | „**Folyamatos tanácsadás (retainer)** … rendszeres adatminőség-ellenőrzés, havi karbantartás“ | neuvedena (`EK8-023`) |
| FR | Converteo, Empirik, GAlytics, Growix, WebAnalyste | různé | neuvedena (`EK8-024`, `EK8-015`) |

### 2.3 Projektové ceny: jak trh měření skutečně oceňuje

| Zdroj | Co je oceněno | Hodnota | Evidence |
|---|---|---|---|
| Sortlist.fr, 14 agentur | minimální **rozpočet zakázky** web analytics | modus **1 000 €** (7×), dále 3 000 € (4×), 10 000 € (2×), 20 000 € (1×), min. 850 € | `EK8-009` |
| Sortlist.be, 20 agentur | totéž, Belgie | modus **1 000 €** (10×), 3 000 € (4×), 5 000 € (4×), 10 000 € (1×) | `EK8-011` |
| cenauslug.pl, agregace 7 poskytovatelů | konfigurace GA4, PL, 2026 | **průměr 2 386 zł** (13 839 Kč), 1 800 zł Katowice – 2 800 zł Varšava | `EK8-012` |
| Ninjads (FR) | „Setup Premium“ vč. sGTM a Looker Studio | 1 290 € HT; audit 590 € HT | `EK8-002` |
| Umane (FR) | sGTM + Meta CAPI + enhanced conv. + consent v2 | **800–2 500 €** | `EK8-006` |
| WEBIAPROD (FR) | kompletní implementace | **1 500–4 000 €**; samotný audit 600–1 200 € | `EK8-017` |
| DevaGroup (PL) | implementace GA4 e-commerce | od **2 999 zł**; služby 1 599 zł | `EK8-013` |
| CodeMix (RO) | „Tracking Lite“ | **125 €** | `EK8-018` |
| Webma.hu (HU) | „Mérés és analitika“ | **150 000–500 000 Ft projekt alapon** | `EK8-022` |

> **Webma.hu (HU), doslova:** „Mérés és analitika: **150.000–500.000 Ft projekt alapon** – az integráció
> mélységétől függően“ … a přitom ve stejném přehledu „PPC kampánykezelés: **150.000–500.000 Ft/hó**“,
> „SEO: **200.000–800.000 Ft/hó**“, „Komplex havidíjak: **200.000–3.000.000 Ft/hó**“. (`EK8-022`)
> **Měření je v maďarském přehledu jediná disciplína bez měsíční sazby.**

### 2.4 Hodinové a denní sazby (proxy, ne paušály)

| Země | Zdroj | Sazba | Kč/h | Evidence |
|---|---|---|---|---|
| FR | Malt.fr, 10 profilů GA4/GTM | 400–750 €/den, medián **450 €/den** | 1 250–2 344, medián **1 406** | `EK8-004` |
| NL | webanalist.com, přehled trhu | 60–150 €/h, průměr **105–120 €/h** | 1 500–3 750 | `EK8-020` |
| HU | webma.hu | 6 000–30 000 Ft/h (junior→senior) | kurz HUF není v zadání | `EK8-022` |

> **Malt.fr, doslova (výběr):** „Edouard – 🚀 Expert GA4 Google Analytics Google Tag Manager – **750 €/jour**“;
> „Mathieu – Consultant SEA & Tracking (GTM / Server-Side) – **700 €/jour**“; „Johanna – ⭐️ Experte GA4
> Google Analytics/Google Tag Manager – **600 €/jour**“; „Noé – 📊 Tracking, Google Analytics, Google Tag
> Manager – **400 €/jour**“. (`EK8-004`)

### 2.5 Rozsah dodávky doslova – použitelné formulace

> **OmniMedia (RO):** „Oferim atât implementări «One-time» (proiect fix de setup/audit), cât și **mentenanță
> lunară pentru clienții care doresc monitorizare continuă, depanare și actualizarea rapoartelor**.“ (`EK8-019`)
> → tři aktivity = `G1` + `G7` + `F1`. Nejpřesnější veřejná definice vstupního tieru v celém korpusu.

> **Dékuple (FR):** „L'analytics, ce n'est jamais fini. Les outils évoluent, vos besoins changent, les lois se
> durcissent. On assure la maintenance : **ajout de nouveaux trackings, corrections, améliorations, veille
> réglementaire, et accompagnement au quotidien.**“ (`EK8-003`) → `A2` + `A1` + `B3` + `H3`.

> **iWebma (HU):** „Folyamatos tanácsadás (retainer). Hosszú távú együttműködés: **rendszeres
> adatminőség-ellenőrzés, havi karbantartás, proaktív stratégiai javaslatok.**“ (`EK8-023`)

> **WEBIAPROD (FR):** „Une **lecture commentée trimestrielle** est incluse la première année … Un **suivi
> trimestriel** optionnel existe ensuite.“ (`EK8-017`) → komentovaný report jako akviziční bonus prvního roku,
> a rytmus **kvartální**, ne měsíční.

### 2.6 Negativní a strukturální nálezy

- **Semahead (PL)** – jedna z cílových agentur ze zadání – **už nemá vlastní web**: `semahead.agency`
  se trvale (301) přesměrovává na `wenet.pl`. Relevantní pro analýzu přežití (priorita C5 z 2. kola). (`EK8-008`)
- **Converteo (FR)**, vlajková loď francouzského data consultingu: **žádná cena, žádný TJM, žádné rozpočtové
  pásmo a žádná pojmenovaná kontinuální služba** na webu. Horní polovina francouzského trhu je stejně neznámá
  jako česká – mezera B2 z 2. kola platí i pro Francii. (`EK8-024`)
- **Fifty-Five, Digimood, JVWEB, Search Foresight, Adventori, Eskimoz** – neověřeny (viz § 4).
- **Bluerank, Grupa TENSE, Sembot, Fast Tony, Whites** – nedostupné (404 / 503 / DNS). (§ 4)

---

## 3. INTERPRETACE: co to mění na závěrech verze 2

### 3.1 Pásmo 8 900 Kč – **oslabuje se dál, potřetí**

Verze 2 už opravila tvrzení „8 900 leží pod nejlevnějším lidským balíčkem“ na „osm z patnácti evropských
subjektů je levnějších“. Toto kolo přidává **tři další levnější body ze tří dalších zemí**: NL 6 250 Kč
(„doorlopende ondersteuning vanaf €250/maand“ – doslova pravidelné kontroly a pomoc s trackingovými
problémy, tj. přesně obsah tieru 1), CH 7 800 Kč a RO 1 000 Kč.

**Doporučení k textu nabídky:** vstupní tier nesmí argumentovat cenou. Musí argumentovat tím, co
konkurence za 6 250 Kč nedělá – a to je podle sebraných textů **triáž a oprava** (`G7`), protože všechny
levné evropské nabídky slibují jen „kontroly“ a „podporu“. Zůstává v platnosti požadavek z verze 2
odpovědět v nabídce explicitně na Signals Bar za 2 500 Kč; nově k tomu přibývá i argument proti
evropské podlaze, kterou český klient najde do pěti minut hledáním v angličtině.

### 3.2 Pásmo 19 900 Kč – **posiluje, nově i z Polska**

Piekarski „od 3 000 zł netto/mies.“ = **17 400 Kč** padá přímo do pásma šesti subjektů 17 500–23 750 Kč,
o které se tier 2 opírá. Je to **první bod z Polska** a první, kde je měsíční cena za analytickou správu
vyjádřená veřejně a jako produkt (ne jako kapacita ani jako součást PPC).

Výhrada, kterou je nutné přiznat: rozsah Piekarského „opieky“ je **širší** než správa měření – zahrnuje
UX audity a rozpočty kampaní (`I1`), tedy analytickou práci. Není to čistý ekvivalent DataLayer tieru 2.
Ve stejném směru působí Conversion.pl: jejich „opieka“ je 32–64 h/měsíc, tedy 5–13× víc kapacity než
odhad 9–13 h pro tier 2. **V Evropě se „správa analytiky“ prodává jako kapacita analytika, ne jako hlídání
měření.** To je jiný produkt a je to argument pro to, aby DataLayer svůj tier 2 v nabídce ostře odlišil.

### 3.3 Pásmo 39 000 Kč – **poprvé má třetí bod, a tier přežívá**

Toto je nejvýznamnější změna kola. Verze 2 říká doslova: *„39 000 Kč nemá tržní oporu. Dva veřejné evropské
lidské body s BigQuery jsou 11 250 a 45 000 Kč – rozptyl 4×, n = 2.“*

Nově: **Junto (FR), „Fiabilisez votre data et votre tracking“, dès 1 335 €/mois = 33 375 Kč, s vlastním
BigQuery skladem, automatizovanými regresními testy dataLayeru a testy nákupních cest.**

| | verze 2 | po K08 |
|---|---|---|
| Evropské lidské body s BQ | 11 250 · 45 000 | 11 250 · **33 375** · 45 000 |
| n | 2 | **3** |
| medián | (28 125 – průměr dvou) | **33 375** |
| rozptyl max/min | 4,0× | 4,0× (nezměněn) |
| pozice 39 000 Kč | mezi dvěma nesouvisejícími čísly | **17 % nad mediánem tří** |

Tvrzení „tier 3 nemá tržní oporu“ je nutné **zmírnit**, ne zrušit: opora je slabá (n = 3, rozptyl stále 4×),
ale už existuje a je to nejbližší srovnatelná dodávka, jakou rešerše našla – včetně BigQuery, včetně
automatizovaného testování, včetně banky hodin. Odvození „19 900 × 2,0 = 39 800“ z verze 2 tím dostává
externí kontrolu: **33 375 Kč je od 39 000 Kč vzdáleno 14 %**, což je uvnitř šumu.

**Zároveň to dává tieru 3 konkrétní obsahový vzor:** „tests de non régression automatisés du datalayer“
je aktivita, kterou dnes návrh DataLayer nemá pojmenovanou, a je to jediný nalezený evropský případ, kdy
někdo automatizované regresní testy měření prodává v paušálu.

### 3.4 Evropský medián – **potvrzen nezávisle**

Čtyři nové evropské lidské paušály (6 250 · 7 800 · 17 400 · 33 375) mají medián **12 600 Kč**.
Publikovaný evropský medián z 1. kola je 12 250 Kč (n = 25). Shoda do 3 % u vzorku ze čtyř zemí, které
v původním vzorku nebyly (FR, NL nově, CH a PL nově s paušálem). **Evropská kotva – jediná nezávislá opora
celého cenového doporučení – se tímto kolem prokázala jako stabilní.** To je jediné tvrzení verze 2,
které toto kolo posiluje bez výhrad.

### 3.5 Otevřená otázka „existuje poptávka?“ – **odpověď se mění z „nevíme“ na „ne v této formě“**

Toto kolo nepřineslo poptávkovou evidenci (žádné české ani zahraniční poptávky), ale přineslo silnou
**nabídkovou strukturální evidenci ze sedmi zemí**, která ukazuje jedním směrem:

1. **Kde trh ceníkuje, ceníkuje projekt.** 34 agentur (14 FR + 20 BE) uvádí minimální rozpočet *zakázky*.
   Ani jedna neuvádí měsíční cenu. Polský agregátor cen ze 7 poskytovatelů nemá měsíční kategorii vůbec.
   Maďarský cenový přehled 2026 dává měsíční sazbu PPC, SEO, obsahu i sociálním sítím – **měření jedinému
   ne**.
2. **Kde produkt existuje, nemá cenu.** Sedm subjektů ve čtyřech zemích (FR 3, PL 2, RO 1, HU 1) má
   kontinuální správu měření pojmenovanou jako produkt – `Accompagnement mensuel`, `forfait mensuel
   d'accompagnement`, `Optimisation continue & Support`, `Opieka analityczna`, `Obsługa danych dla biznesu`,
   `mentenanță lunară`, `Folyamatos tanácsadás (retainer)` – a **ani jeden z nich neuvádí cenu**.
3. **Poměr je drtivý:** ze 71 evropských subjektů má veřejnou měsíční cenu za lidskou správu měření **5**,
   tj. **7 %**. U jednorázové implementace je to většina.

**Co to znamená pro závěr verze 2 („0 CZ subjektů s kontinuální správou měření jako produktem s cenou“):**
tento nález přestává být důkazem o *českém* trhu. **Je to evropská norma.** Prázdná pozice v ČR není
mezera, kterou český trh přehlédl – je to stav, do kterého dospěla i Francie, Belgie, Polsko, Rumunsko,
Maďarsko a Nizozemsko. Interpretačně to táhne k **hřbitovu spíš než k příležitosti**: sedm trhů nezávisle
na sobě dospělo k tomu, že se měření prodává jako projekt a správa se dohaduje individuálně.

**Ale zároveň to otupuje nejtvrdší protievidenci verze 2.** Americké „this is not something you can sell
on a retainer“ neplatí v Evropě doslova: **Junto, Piekarski, Webie a nizozemský Performance Marketing
Support to na retaineru prodávají a mají za to zveřejněnou cenu.** Kategorie tedy není nemožná – je
vzácná. Přesnější formulace otevřené otázky proto zní: *není otázka, jestli se to dá prodávat na paušál,
ale jestli se to dá prodávat na paušál s veřejnou cenou a bez toho, aby paušál obsahoval kapacitu
analytika (Conversion.pl: 1–2 dny v týdnu) nebo celý performance dispositif (Junto).*

**Priorita A2 z 2. kola (test poptávky dvěma landing stránkami) tím nabývá na naléhavosti, ne ubývá** –
a nově má srovnávací materiál: Junto a Piekarski jsou dva evropské referenční body, jejichž stránky
se dají použít jako vzor toho, co u zveřejněné ceny funguje.

### 3.6 Co se nezměnilo

- **Reakční doba zůstává volným polem.** 71 subjektů, 7 zemí, **nula veřejných čísel**. Diferenciátor
  „garantovaná reakční doba“ z verze 2 platí a je nově ověřen na mnohem větším vzorku.
- **Násobek za BigQuery ≈ 2×** – toto kolo ho nevyvrací ani nepotvrzuje; Junto BigQuery obsahuje, ale
  nemá levnější variantu bez něj, takže vnitrododavatelský násobek se z něj spočítat nedá.
- **Detekce jako komodita** – RO CodeMix za 40 €/měs a NL server-side od 20 €/měs to potvrzují z další strany.

---

## 4. MEZERY, které zůstávají

| # | Mezera | Proč se nezavřela | Jak ji zavřít |
|---|---|---|---|
| 1 | **Realizované (zaplacené) FR a PL ceny** – žádná | Registr veřejných zakázek jsme v tomto úkolu neotevírali; francouzské BOAMP/AIFE a polský BZP mají veřejné texty | BOAMP.fr a bzp.uzp.gov.pl dotazy „Google Analytics“, „tag manager“, „web analytics“ – obdoba úkolu K01 |
| 2 | **Hodiny v paušálu** – ze 71 subjektů je uvedl **jeden** (Conversion.pl: 1–2 dny v týdnu) | Nikdo jiný objem práce nepublikuje | mystery shopping (priorita B2), tentokrát i u Junto a Piekarski |
| 3 | **Rozsah Junto 1 335 €/mois** – stránka název a bullety monitoringu má, ale nerozpadá dispositiv na položky | Detail je patrně za kontaktním formulářem | stažení PDF nabídky / mystery shopping; **do té doby brát 33 375 Kč jako bod s nejistým rozsahem** |
| 4 | **Kurzy HUF a RON nejsou v zadání** | Řádky `PK8-029`, `PK8-030` mají prázdné `price_czk_month` záměrně, aby se do výpočtů nedostal odhad | doplnit kurz do metodiky datasetu a přepočítat |
| 5 | **Nepokryté cílové subjekty ze zadání**: FR Digimood, JVWEB, Search Foresight, Adventori, Fifty-Five (404 na `/fr/expertises`), Eskimoz (redirect na `.co.uk`), Datashake, Hunotte; PL Bluerank (404 na všech zkoušených cestách), Grupa TENSE (503), Sembot (503), Fast Tony, Whites (DNS, nedostupné i ve 2. kole) | technická nedostupnost nebo neexistující URL | zkusit přes Wayback (`web.archive.org/web/2026/<url>`) a sitemapy; Whites je nedostupný dvě kola po sobě – uzavřít jako zaniklý |
| 6 | **Severské země (NO, FI, SE) a Portugalsko** – 0 bodů | Sortlist tyto trhy nepokrývá, portugalský pokus (ASCMI) skončil bez čísel | vlastní hledání v NO/FI/SE; nízká priorita, jde o drahé trhy mimo srovnatelnost s ČR |
| 7 | **Poptávková strana ve FR a PL** – 0 bodů | Codeur.com i Oferteo.pl vracejí 404 na všech zkoušených cestách (patrně blokace robotů) | prohlížeč s JS, nebo Useme.com API; **toto je jediná cesta, jak na otevřenou otázku odpovědět daty místo strukturou** |
| 8 | **PPP korekce (mezera D2 z 2. kola)** – neprovedena | není součástí tohoto úkolu, ale bez ní jsou FR (1 406 Kč/h) a NL (1 500–3 750 Kč/10 h) body opticky nesrovnatelné s ČR | Eurostat PLI služeb, jedna tabulka |
