# UX audit: co z webu datalayer.cz odebrat

**Datum:** 9. 10. 2026
**Web:** staging datalayer.vitnovotny.cz, snímek stažený v 18:35 po deployi z 18:32 (24 stránek)
**Zařízení:** desktop 1 440 px, mobil 390 px, hero navíc na tabletu 768 px
**Zadání:** odebrat maximum bloků a prvků, které nevedou ke kliknutí na formulář; zachovat SVG diagram v hero úvodní stránky; posoudit, které vstupní stránky mají smysl.

Žádný z obrázků „po“ není kresba – všechny vznikly tak, že se navržené škrty aplikovaly přímo na stránky stagingu (skript `navrhy/src/redukce.js`) a výsledek se vyfotil. Vzhled, písmo a komponenty jsou tedy skutečné; mění se jen to, co v dokumentu popisuji.

---

## Shrnutí

1. Web je postavený jako katalog: 24 stránek, z toho 14 vstupních stránek se stejnou šablonou o 10–11 sekcích a zhruba 1 500–2 100 slovech; na osmi vstupních stránkách, které navrhuji ponechat, je formulář na mobilu v průměru na {{FY_PRED}}. pixelu, tedy až na dvanácté obrazovce.
2. Obsah se neopakuje doslova, ale tematicky: datová vrstva a BigQuery se vysvětlují na všech 14 vstupních stránkách, Consent Mode na 11, stejných pět kroků spolupráce je na 15 stránkách.
3. Navrhuji zúžit web na 13 stránek: 6 služeb, 2 segmenty (e-shopy, B2B), úvod, O nás, Kontakt a dvě právní stránky; 3 stránky sloučit, 5 zrušit s přesměrováním, blog se dvěma články skrýt.
4. U technického auditu, správy webu a dashboardů tvoří hledanost dotazy, které datalayer.cz neobslouží (UX audit, správa webu obecně, kurzy Power BI); datová vrstva a velké firmy vlastní poptávku nemají; GTM poptávku má, ale prodává se spolu s GA4, a sloučená stránka proto cílí na oba dotazy.
5. Úvodní stránka se zkrátí z 8 na 4 bloky: hero se zachovaným SVG diagramem, šest situací bez konzolí, 4 otázky a kontakt – na desktopu o 51 %, na mobilu o 54 %.
6. Vstupní stránky si nechají 5–7 sekcí: hero s jedním CTA, „Poznáváte se?“, „Co uděláme“, u server-side a BigQuery jedno schéma a rozhodovací blok ano/ne, 4 otázky a formulář.
7. Z celého webu mizí prvky, které nic nedělají: nadtitulky (185), mikrotexty pod CTA, „trust“ body, druhá CTA, mono štítky a čipy (368 včetně formuláře), mockupy konzole, „Technické detaily“, pás „Pokračujte“ a drobečková navigace.
8. Formulář se zkrátí z 5 polí a 7 čipů na 4 pole; téma poptávky už nese skryté pole `form_id`, které posílá každá stránka.
9. Opravuji i chybu z vašeho snímku: tlačítko v hero se do 991 px roztahuje na celou šířku kvůli pravidlu pro menu; stačí ho omezit na tlačítko v menu.
10. Na 11 ponechaných stránkách klesne délka na desktopu o 48 %, na mobilu o 52 %, počet viditelných slov o 59 % a počet klikacích prvků v obsahu o 57 %.

---

## 1. Podle čeho škrtám

Blok zůstává jen tehdy, když splní aspoň jednu ze tří podmínek:

| Podmínka | Otázka | Příklad, co projde |
|---|---|---|
| Vede k formuláři | Klikne po něm návštěvník spíš na CTA? | hero s jedním CTA, kontaktní blok |
| Bez něj by formulář nevyplnil | Odpovídá na pochybnost, která by ho zastavila? | „Poznáváte se?“, „Co dostanete“, ano/ne „Kdy se vyplatí“, 4 otázky |
| Bez něj nepochopí službu | Je služba bez vysvětlení nesrozumitelná? | schéma u server-side a BigQuery |

Nestačí, že je blok pravdivý, hezký nebo „pro SEO“. Vše, co návštěvník musí přečíst, než se dostane k formuláři, je cena, kterou za kontakt platí.

---

## 2. Vaše konkrétní požadavky

| Požadavek | Kde je dnes | Návrh | Obrázek |
|---|---|---|---|
| Pryč „Jak pracujeme“ v hero | druhé CTA na úvodní stránce | z hero mizí druhé CTA na všech 18 stránkách, které ho mají | 03, 09, 10 |
| „Konzultovat projekt“ přes celou šířku | `.btn-cta{display:block;width:100%}` pod 992 px | CSS omezit na tlačítko v menu (kap. 6.1) | 03 |
| Pryč tagy na úvodní stránce | 28 štítků a čipů (10 u segmentů, 18 v „S čím pracujeme“) a 7 čipů ve formuláři | bloky se štítky mizí celé, štítky i z ostatních karet | 01, 04 |
| Pryč „Webová analytika a měření pro e-shopy, B2B a velké firmy“ | nadtitulek hero (po deployi už bez teček, ale pořád navíc) | pryč; publikum přechází do podtitulu | 03 |
| Pryč „GA4 purchase 812 / e-shop objednávky 1 046 / ⚠ rozdíl −22 %“ a další mockupy | 6 konzolí v „Šest situací“ + poznámka „Čísla v ukázkách jsou ilustrativní.“ | konzole, poznámka i tlačítko „Zobrazit další (3)“ pryč; všech 6 karet je vidět hned | 04 |
| Pryč tlačítko „Ukázka datového modelu“ | druhé CTA na BigQuery | pryč (jako všechna druhá CTA) | 09 |
| Pryč popisky typu „Úvodní konzultace zdarma, provoz BigQuery platíte přímo Googlu“ | mikrotext pod CTA na 18 stránkách | pryč; „zdarma a nezávazně“ zůstává jen v textu u formuláře na úvodní stránce a v perexu stránky Kontakt (na vstupních stránkách viz kap. 6.3) | 09, 10 |
| Zachovat SVG diagram v hero | úvodní stránka | beze změny; na mobilu se díky kratšímu textu dostane do první obrazovky | 03 |
| Posoudit vstupní stránky („content stuffing“) | 14 vstupních stránek + rozcestník | 6 služeb + 2 segmenty, ostatní sloučit nebo zrušit (kap. 3) | 00 |

---

## 3. Stránky: hodnota, nebo vata?

![Mapa webu před a po](00_mapa-webu_pred-po.png)

### 3.1 Co mají vstupní stránky společné

- **Jedna šablona pro všechno.** Každá ze 14 vstupních stránek má hero s nadtitulkem, dvěma CTA, mikrotextem a třemi „trust“ body, pak 9–10 sekcí včetně kontaktu a zhruba 1 500–2 100 slov (počítáno z HTML včetně zavřených odpovědí FAQ a záložek; kapitola 7 počítá jen viditelný text, proto tam vycházejí nižší čísla). Sekce „Jak postupujeme“ s pěti stejnými kroky je na 15 stránkách, pás „Pokračujte“ na 18.
- **Stejná témata pořád dokola.** Doslovné opakování je nízké (2–8 % textu stránky), protože texty jsou psané zvlášť. Opakují se ale témata:

| Téma | Na kolika vstupních stránkách (ze 14) | Zmínek celkem |
|---|---:|---:|
| datová vrstva / dataLayer | 14 | {{T:datová vrstva / dataLayer}} |
| BigQuery | 14 | {{T:BigQuery}} |
| server-side | 14 | {{T:server-side}} |
| měřicí plán | 14 | {{T:měřicí plán}} |
| Sklik | 13 | {{T:Sklik}} |
| Consent Mode | 11 | {{T:Consent Mode}} |
| porovnání s administrací | 11 | {{T:validace / porovnání s administrací}} |
| Heureka | 11 | {{T:Heureka}} |
| Meta CAPI / Conversions API | 7 | {{T:Meta CAPI / Conversions API}} |

- **FAQ tvoří třetinu stránky.** Sekce „Časté otázky“ má na vstupních stránkách 480–770 slov včetně rozbalovacích „Technických detailů“ s tabulkami.
- **Poptávka je u většiny stránek malá nebo cizí.** Čísla jsou měsíční hledanost z analýzy klíčových slov (kapitola 02 projektu): první sloupec jsou dotazy, kde člověk hledá službu, druhý všechny namapované dotazy.

### 3.2 Rozhodnutí po stránkách

| Stránka | Poptávka služba / celkem | Co ve skutečnosti hledají | Rozhodnutí | Co převzít |
|---|---:|---|---|---|
| Úvodní stránka | 10 / 670 | značka, obecné dotazy | **zůstává**, 4 bloky | – |
| Implementace GA4 | 250 / 860 | „nastavení google analytics“ | **zůstává** jako „GA4 a Google Tag Manager“ | ze stránky GTM symptom „Desítky tagů, které nikdo nezná“, z datové vrstvy výstup „specifikace datové vrstvy“ |
| Google Tag Manager | 370 / 4 170 | „návrh google tag manager“, „nastavení gtm“ | sloučit → GA4 a GTM | poptávku má, ale služba se prodává s GA4; H1 a title sloučené stránky cílí i na GTM |
| Datová vrstva | 0 / 90 | – | sloučit → GA4 a GTM | jedna karta ve „Co dostanete“ |
| Server-side tracking | 90 / 460 | server-side tracking, sGTM | **zůstává** | jedna ze dvou stránek se schématem (vedle BigQuery) |
| Cookie lišta a Consent Mode | 850 / 1 550 | „cookie lišta“, „consent mode v2“ | **zůstává** | nejsilnější relevantní poptávka webu |
| Měření konverzí | 190 / 1 340 | „měření konverzí“ | **zůstává** | – |
| BigQuery | 0 / 1 880 | informační dotazy (cena, export) | **zůstává** jako „BigQuery a dashboardy“ | dashboardy jako výstup |
| Dashboardy a reporting | 870 / 22 040 | kurzy a školení Power BI | sloučit → BigQuery | poptávka je cizí: lidé hledají kurz, ne dodavatele |
| Audit měření | 90 / 90 | „audit webové analytiky“ | **zůstává** | „rychlá kontrola“ jako krátký text u formuláře |
| Technický audit webu | 480 / 3 700 | „ux audit“, „audit webu zdarma“ | zrušit, 301 → Audit měření | mimo hlavní nabídku; poptávka je cizí |
| Správa webu a měření | 780 / 940 | „správa webu“, „správa webu ceník“ | zrušit, 301 → úvod | hlídání měření jako karta „Monitoring“ ve výstupech |
| Rozcestník Služby | – | – | zrušit, 301 → úvod | menu stačí |
| E-shopy | 0 / 640 | – | **zůstává** | hlavní publikum; jediný obsah pro platformy (Shoptet, Upgates…) |
| B2B a lead generation | 50 / 100 | „crm integrace“ | **zůstává** | jediná stránka o CRM a offline konverzích |
| Velké firmy | bez namapovaných dotazů | – | zrušit, 301 → úvod | otázka „Pracujete i s velkými firmami?“ zůstává ve FAQ úvodu |
| Jak pracujeme | – | – | zrušit, 301 → O nás | proces neprodává; co bude po odeslání, říká text u formuláře |
| O nás | – | – | **zůstává**, 3 bloky + kontakt | – |
| Kontakt | – | – | **zůstává**, jen formulář a kontakty | – |
| Blog + 2 články | – | 68 a 92 slov obsahu | skrýt (z menu, patičky a sitemapy) | články přesměrovat na BigQuery a Server-side; blog vrátit, až budou aspoň 3 skutečné články |
| Cookies, Zpracování osobních údajů | – | – | beze změny | – |

**K e-shopům a B2B:** SEO jim mnoho nepřinese (0 a 50 hledání měsíčně). Obhajuje je jen to, že mluví k hlavnímu publiku a mají obsah, který jinde není. Pokud na ně nepovede reklama ani odkazy z obchodní komunikace, jsou dalším kandidátem na škrt.

### 3.3 Přesměrování

Pokud stránky ještě nejsou v produkci, stačí je nevytvářet. 301 potřebují jen adresy, které už veřejně existují nebo jsou zaindexované.

| Stará adresa | Kam | Kód |
|---|---|---|
| `/sluzby/google-tag-manager` | `/sluzby/implementace-ga4` | 301 |
| `/sluzby/datova-vrstva` | `/sluzby/implementace-ga4` | 301 |
| `/sluzby/dashboardy-a-reporting` | `/sluzby/bigquery` | 301 |
| `/sluzby/technicky-audit-webu` | `/sluzby/audit-mereni` | 301 |
| `/sluzby/sprava-webu-a-mereni` | `/` | 301 |
| `/sluzby` | `/` | 301 |
| `/reseni/velke-firmy` | `/` | 301 |
| `/jak-pracujeme` | `/o-nas` | 301 |
| `/blog` | `/` | 302 (dočasně, než blog vrátíte) |
| `/blog/ga4-bigquery-export` | `/sluzby/bigquery` | 302 |
| `/blog/server-side-gtm-uvod` | `/sluzby/server-side-tracking` | 302 |

Současně upravit interní odkazy (karty a seznamy, které dnes vedou na rušené stránky), sitemapu a drobečkovou navigaci ve strukturovaných datech (bez úrovně „Služby“).

---

## 4. Úvodní stránka

![Úvodní stránka – desktop před a po](01_uvodni-stranka_desktop_pred-po.png)

| Blok | Slov dnes | Rozhodnutí | Proč |
|---|---:|---|---|
| Hero | 67 | **zůstává**: H1, podtitul, jedno CTA, SVG diagram | nadtitulek, druhé CTA „Jak pracujeme“ a mikrotext pryč |
| Měření podle toho, jak vyděláváte (3 segmenty) | 158 | pryč | segmenty jsou v menu; štítky platforem nic nedělají |
| Šest situací | 286 | **zůstává** bez konzolí | nejsilnější blok: návštěvník pozná svůj problém a karta vede na službu |
| Od sběru dat po report (11 služeb ve 3 vrstvách) | 133 | pryč | opakuje menu |
| Pět kroků | 134 | pryč | k formuláři nevede |
| S čím pracujeme (18 čipů) | 30 | pryč | výčet nástrojů; 17 čipů odkazuje na služby, které má i menu |
| Než se ozvete (FAQ) | 194 | **zůstává**, 4 otázky | otázku o GDPR u server-side přesunout na stránku server-side |
| Kontakt | 102 | **zůstává**, zkrácený | kap. 6.3 |

**Podtitul hero (návrh textu).** Nadtitulek dnes nese publikum („pro e-shopy, B2B a velké firmy“). Když zmizí, publikum se přesune do podtitulu a výčet nástrojů z něj vypadne – ukazuje ho diagram:

> Navrhneme, nasadíme a ověříme měření pro e-shopy a B2B firmy – od datové vrstvy po BigQuery. S dokumentací a s daty, která vlastníte vy.

H1 nechávám beze změny.

![Úvodní stránka – mobil před a po](02_uvodni-stranka_mobil_pred-po.png)

![Hero na mobilu a tabletu před a po](03_hero_mobil-tablet_pred-po.png)

![Blok Šest situací před a po](04_uvodni-stranka_sest-situaci_pred-po.png)

U karet „Šest situací“ se mění jen jeden odkaz: „Google Tag Manager →“ vede na sloučenou stránku „GA4 a Google Tag Manager“.

---

## 5. Vstupní stránky

### 5.1 Nová šablona

| Pořadí | Blok | Kde | Co v něm zůstává |
|---:|---|---|---|
| 1 | Hero | všude | H1, podtitul, jedno CTA; obrázek vpravo jen na desktopu (jako dnes) |
| 2 | Poznáváte se? | všude | 4 karty: piktogram, nadpis, věta |
| 3 | Co uděláme a co dostanete | všude | 6 karet bez názvů souborů |
| 4 | Schéma | server-side, BigQuery | jedno schéma toku dat |
| 5 | Kdy se vyplatí / kdy počkat | server-side, BigQuery | dva sloupce ano/ne s odkazy „nejdřív…“, bez tabulky a cen |
| 6 | Časté otázky | všude | nejvýš 4 otázky; přesunout sem i to podstatné z rušených sekcí (stará vs. nová property, basic vs. advanced, právní rámec) |
| 7 | Kontakt | všude | kap. 6.3 |

Mizí ze všech vstupních stránek: nadtitulky, drobečková navigace (zůstává ve strukturovaných datech), mikrotext a „trust“ body v hero, druhé CTA, mono štítky na kartách, „Jak postupujeme“, „Jak poznáte, že … funguje“, „Technické detaily“, tabulky, pás „Pokračujte“.

**Ceny.** Server-side dnes uvádí „zhruba 45 dolarů“, „110–150 dolarů“ a „od 349 Kč“ za provoz. Je to cena třetích stran, ale na vstupní stránce působí jako ceník a odporuje zásadě „bez cen na LP“. V návrhu mizí s tabulkou; jedna věta zůstává v odpovědi na otázku o ceně.

![Vstupní stránka server-side – desktop před a po](07_lp-server-side_desktop_pred-po.png)

![Vstupní stránka server-side – mobil před a po](08_lp-server-side_mobil_pred-po.png)

![Hero vstupní stránky BigQuery před a po](09_lp-hero_bigquery_pred-po.png)

![Hero vstupní stránky e-shopy na mobilu před a po](10_lp-hero_e-shopy_mobil_pred-po.png)

![Blok Kdy se vyplatí před a po](11_lp-kdy-se-vyplati_pred-po.png)

### 5.2 Rozhodnutí po sekcích

Tabulky pokrývají všech 11 ponechaných stránek. Sloučené stránky (GTM, datová vrstva, dashboardy) přispějí jen tím, co je v kap. 3.2 ve sloupci „Co převzít“.
{{SEKCE_TABULKY}}

Celé stránky „po“ jsou ve složce `navrhy/po/` (desktop i mobil).

---

## 6. Společné prvky

### 6.1 Hero a tlačítko přes celou šířku

V `app.css` je v `@media (max-width: 991px)` pravidlo z navigace, které platí pro všechna tlačítka `.btn-cta`:

```css
/* dnes */
@media (max-width: 991px) { … .btn-cta { display: block; width: 100%; } … }

/* návrh: jen tlačítko v rozbaleném menu */
@media (max-width: 991px) { .site-menu__cta .btn-cta { display: block; width: 100%; } }
```

Na tabletu 768 px má dnes CTA v hero 696 px, po opravě 230 px (obrázek 03). Na mobilu 390 px má po opravě tlačítko šířku podle textu; když budete chtít na úzkém mobilu tlačítko přes celou šířku, dejte to jako samostatné pravidlo do `max-width: 575px` – ne do pravidla pro menu.

### 6.2 Menu

| | Dnes | Návrh |
|---|---|---|
| Služby | 11 služeb ve 3 skupinách, s piktogramy a podtitulky, odkaz „Všechny služby“ | 6 služeb, jen názvy |
| Řešení | rozbalovací menu: E-shopy, B2B, Velké firmy, Jak pracujeme | dva přímé odkazy „E-shopy“ a „B2B“ |
| Blog | odkaz | pryč, dokud nebudou články |
| Ovládacích prvků v menu | 21 | 11 |

![Menu na desktopu před a po](12_menu_desktop_pred-po.png)

![Menu na mobilu před a po](13_menu_mobil_pred-po.png)

### 6.3 Kontaktní blok a formulář

| Prvek | Dnes | Návrh | Proč |
|---|---|---|---|
| Nadtitulek „Kontakt“ | ano | pryč | H2 stačí |
| Nadpis a jedna až dvě věty | ano | **zůstává** | na úvodní stránce nese i „nezávazně a zdarma“; na vstupních stránkách tato zmínka chybí – pokud ji chcete, stačí věta „Úvodní konzultace je zdarma.“ nad tlačítkem |
| E-mail a telefon | ano | **zůstává** | rovnocenné cesty ke kontaktu |
| Tři kroky „Domluvíme termín callu / Projdeme web a cíle / Připravíme návrh na míru“ | ano | pryč | opakují úvodní větu |
| Jméno, e-mail | povinné | **zůstává** | – |
| Telefon | nepovinné | **zůstává** | – |
| Web | nepovinné | pryč | adresu napíše do zprávy; placeholder zprávy ji připomíná |
| „Co řešíte?“ – 7 čipů | nepovinné | pryč | téma nese skryté pole `form_id` (např. `lp-server-side`) |
| Zpráva | povinná | **zůstává** | placeholder: „Adresa webu a co řešíte, např. …“ |
| Právní text | 2 věty + „Žádný newsletter, žádný spam.“ | „Údaje použijeme jen k odpovědi. Jak s nimi zacházíme“ | – |

Na `/kontakt` navíc mizí druhý nadpis „Napište nám, co řešíte“ a úvodní věta pod ním (opakují H1 a perex), sekce „Jak se připravit na konzultaci“ a FAQ. Perex dostane větu „Konzultace je zdarma a nezávazná.“, která nahradí otázku „Je konzultace opravdu zdarma?“.

![Kontakt na desktopu před a po](05_kontakt-formular_desktop_pred-po.png)

![Kontakt na mobilu před a po](06_kontakt-formular_mobil_pred-po.png)

### 6.4 Spodní lišta „Zavolat / Napsat“ na mobilu

Lišta zůstává – obě tlačítka vedou ke kontaktu. Dnes ale svítí už v první obrazovce, kde je zároveň CTA v hero, takže návštěvník vidí tři tlačítka najednou. Návrh: ukázat lištu, až hero odjede z obrazovky (v `redukce.js` je to osm řádků s posluchačem scrollu; v produkci lépe `IntersectionObserver`).

### 6.5 Patička

| | Dnes | Návrh |
|---|---|---|
| Popis firmy pod logem | 1 odstavec | pryč |
| Služby | 11 | 6 |
| Řešení → Pro koho | E-shopy, B2B, Velké firmy, Jak pracujeme | E-shopy, B2B a lead generation |
| O nás | Blog, O nás, Kontakt | O nás, Kontakt |
| Odkazů celkem | 23 | 15 |

![Patička před a po](14_paticka_pred-po.png)

### 6.6 Prvky, které mizí z celého webu

Počty na všech 24 stránkách dnes a na 11 ponechaných stránkách po úpravě (stejné selektory, změřeno na stagingu):

| Prvek | Dnes (24 stránek) | Po (11 stránek) |
|---|---:|---:|
| Nadtitulky (`.eyebrow`) | 185 | 0 |
| Mikrotext pod CTA | 18 | 0 |
| „Trust“ body v hero | 53 | 0 |
| Druhé CTA v hero | 18 | 0 |
| Štítky a čipy mimo formulář | 214 | 0 |
| Čipy „Co řešíte?“ ve formuláři (7 × 22 formulářů) | 154 | 0 |
| Mockupy konzole a ukázky kódu | 16 | 0 |
| „Technické detaily“ | 15 | 0 |
| Kroky procesu | 75 | 0 |
| Odkazy v pásu „Pokračujte“ | 52 | 0 |
| Otázky FAQ | 107 | {{P:faq}} |
| Tabulky | 18 | {{P:tables}} |
| Záložky | 31 | {{P:tabs}} (platformy na e-shopech) |
| Schémata | 33 | {{P:figures}} (server-side, BigQuery) |
| Poznámky pod bloky | 17 | {{P:notes}} (odkazy „nejdřív…“ u ano/ne) |
| Drobečková navigace (viditelná) | 23 | 0 |

---

## 7. Výsledek v číslech

Měřeno na stagingu před úpravou a po aplikaci `redukce.js` (včetně CSS opravy z kap. 6.1, kterou skript provede přepsáním selektoru přímo ve stylech webu). Slova = viditelný text v `<main>` (bez menu a patičky; obsah zavřených otázek se nepočítá). Klikací prvky = viditelné odkazy, tlačítka, otázky, záložky a pole v `<main>`.

{{METRIKY}}

Na mobilu se formulář na osmi ponechaných vstupních stránkách posune v průměru z {{FY_PRED}} px na {{FY_PO}} px – z dvanácté obrazovky (844 px) na pátou.

---

## 8. Postup pro vývoj

Pořadí podle dopadu a pracnosti:

1. **CSS oprava CTA** (kap. 6.1) – jeden řádek, hned.
2. **Hero na všech stránkách:** bez nadtitulku, mikrotextu, „trust“ bodů a druhého CTA; nový podtitul úvodní stránky.
3. **Komponenty karet:** bez mono štítků a čipů; na úvodní stránce karty „Šest situací“ bez konzolí, poznámky a tlačítka „Zobrazit další“.
4. **Šablona vstupní stránky:** vypnout sekce „Jak postupujeme“, „Jak poznáte…“, „Technické detaily“, „Pokračujte“; FAQ nejvýš 4 otázky.
5. **Formulář:** bez pole Web, bez čipů, kratší právní text; zkontrolovat, že `form_id` a `page` dál jdou do e-mailu i do události `generate_lead`.
6. **Menu a patička** podle kap. 6.2 a 6.5.
7. **Stránky:** sloučit obsah (kap. 3.2), přesměrování (kap. 3.3), sitemap, interní odkazy, drobečky ve strukturovaných datech, FAQ ve strukturovaných datech jen pro ponechané otázky.
8. **Spodní lišta** na mobilu až za hero.

**Co ověřit po nasazení:** události `cta_click`, `contact_click`, `faq_open`, `lead_form_start`, `lead_form_error` a `generate_lead` dál chodí (zmizí jen `tab_select` a `code_copy` tam, kde nejsou záložky a kód); formulář na každé stránce posílá správné `form_id`; staré adresy vracejí 301 na cíl, ne řetěz přesměrování.

---

## 9. Na vašem rozhodnutí

- **Hranaté závorky v tlačítkách** („[ Konzultovat projekt ]“). V obrázcích jsem je nechal, aby bylo vidět jen škrtání. Jako prvek značky fungují, ale na tlačítku jsou šum navíc a čtečky je čtou.
- **H1 úvodní stránky** („Stavíme neprůstřelné datové základy pro váš růst.“) nechávám. Neříká ale, co přesně děláte a pro koho – to teď nese podtitul.
- **Piktogramy na kartách „Poznáváte se?“** nechávám, protože pomáhají rychle projet karty očima. Bez nich by stránka byla ještě o kus klidnější.
- **Záložky platforem na e-shopech** (6 záložek, 354 slov) jsou jediný obsah, který je opravdu jen pro e-shopy. Zvažte převod na krátký seznam „umí / chybí“ bez záložek.
- **Blog** vracet, až budou aspoň tři články, které mají víc než stovku slov a odpovídají na skutečné dotazy klientů.

---

## Příloha: soubory

| Soubor | Co obsahuje |
|---|---|
| `ux-redukce.md` | tento dokument |
| `navrhy/00–14_*.png` | srovnání před a po použitá v dokumentu |
| `navrhy/po/` | celé stránky po úpravě, desktop a mobil (11 stránek) |
| `navrhy/render/` | všechny surové snímky před a po včetně výřezů bloků |
| `navrhy/src/redukce.js` | všechny navržené zásahy jako skript; vložte ho do konzole prohlížeče na stagingu a zavolejte např. `__redukce({keep: ['hero','symptomy','vystupy','faq','kontakt']})` – stránka se změní na navrženou podobu |
| `navrhy/src/render.py` | konfigurace ponechaných sekcí po stránkách a skript, který vyrobil snímky |
| `navrhy/src/mapa-webu.html` | zdroj mapy webu (obrázek 00) |
| `screenshots/` | snímky všech 24 stránek po deployi z 18:32 (desktop i mobil) |
| `data/` | crawl, inventura prvků (`prvky.json`), struktura sekcí, tematický překryv, poptávka po stránkách, metriky před a po |
