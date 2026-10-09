# URL: https://datalayer.vitnovotny.cz/sluzby/technicky-audit-webu

1. [Úvod](/)
2. [Služby](/sluzby)
3. Technický audit webu

[ perf · audity a správa ]

# Technický audit webu: rychlost, tagy a technické SEO

Technický audit webu je kontrola toho, jak web funguje pod kapotou: rychlost a Core Web Vitals, dopad měřicích a reklamních skriptů, indexace a strukturovaná data, bezpečnostní hlavičky, přístupnost formulářů a měření. Na konci nedostanete obecná doporučení, ale konkrétní úkoly pro vývojáře s prioritou podle dopadu. Po opravě ověříme, že web opravdu zrychlil a měření funguje dál.

[[ Objednat technický audit ]](#kontakt)[[ Co audit kontroluje ]](#oblasti)

Nejsme SEO agentura: auditujeme techniku, ne obsah a odkazy · Úvodní třicetiminutová konzultace zdarma

* Úkoly pro vývojáře, ne PDF z nástroje
* Data reálných návštěvníků, ne jen laboratorní test
* Po opravách ověříme výsledek

[ symptomy ]

## Poznáváte se?

Technický audit dává smysl, když web zpomaluje, stránky chybí v indexu nebo mizí leady – a také před redesignem či migrací.

cwv

### Search Console hlásí špatné Core Web Vitals

U mobilu vidíte skupiny URL „Je třeba zlepšit“ nebo „Špatné“ a nikdo neví, co přesně je zpomaluje.

tagy

### Každý nový pixel web zpomalí

Chat, heatmapy, A/B test, další reklamní pixel – každý přidal pár set milisekund a nikdo neví, kolik dohromady.

index

### Stránky nejsou v indexu

Search Console ukazuje stovky URL, které Google prošel, ale nezaindexoval, nebo duplicity z filtrů a parametrů e-shopu.

formulář

### Formulář, který odrazuje

Chybová hláška není u pole, formulář nejde vyplnit klávesnicí a odeslání nikdo neměří – leady mizí a nevíte kde.

[ oblasti auditu ]

## Co audit kontroluje: šest oblastí

Oblasti se vyplatí kombinovat – třeba kvůli zrychlení, které nerozbije měření.

Výkon a Core Web VitalsMěřicí skripty a tagyTechnické SEOBezpečnostní hlavičky a soukromíPřístupnost formulářůKontrola měření

**Co kontrolujeme:** tři metriky Core Web Vitals na 75. percentilu návštěv – **LCP** do 2,5 s, **INP** do 200 ms, který v březnu 2024 nahradil FID, a **CLS** do 0,1. Data reálných návštěvníků ze Search Console a Chrome UX Reportu porovnáme s laboratorním testem pro každý typ stránky.

**Kde se rychlost potkává s měřením:** když web spustí měřicí skripty příliš brzy, soupeří s hlavním obsahem o síť i procesor a zhorší LCP i INP. Když je spustí příliš pozdě, část dat chybí.

**Ukázkový nález:** cookie lišta, kterou vkládá GTM, posouvá obsah produktové stránky na mobilu a laboratorní test ukazuje CLS 0,24.

**Oblast, kterou SEO audity obvykle vynechávají.** U každého skriptu třetí strany – GTM, Google tag, Meta Pixel, Sklik, Hotjar, chat nebo A/B test – zjistíme velikost, čas hlavního vlákna a okamžik spuštění.

Hledáme duplicity, třeba GA4 přes gtag i GTM zároveň, mrtvé tagy v kontejneru a marketingové tagy, které web spouští před souhlasem. Doporučení vychází z návodů Googlu na web.dev.

**Ukázkový nález:** chatovací widget zabírá na všech stránkách 380 ms hlavního vlákna, přitom stačí ho načíst po interakci.

**Co kontrolujeme:** indexaci v Search Console, `robots.txt`, canonical, přesměrování, stavové kódy a sitemapu, duplicity z filtrů e-shopu, vykreslování JavaScriptu, `hreflang` a validaci strukturovaných dat.

**Co víme k říjnu 2026:** rozšířený výsledek FAQ Google od 7. května 2026 nezobrazuje a soubor `llms.txt` Google Search nepotřebuje. Takové věci vám nebudeme prodávat jako „SEO zlepšení“.

**Ukázkový nález:** filtry kategorií vytvářejí 12 000 indexovatelných kombinací URL bez canonical.

**Co kontrolujeme:** HTTPS, `Strict-Transport-Security`, `Referrer-Policy`, `Permissions-Policy`, ochranu proti vložení do rámu, smíšený obsah a `Content-Security-Policy`, která má povolit jen potřebné domény a neblokovat měření. Zjistíme také, které cookies a požadavky web pošle třetím stranám ještě **před** souhlasem.

**Vymezení:** nejde o penetrační test. Hlavičky navrhneme podle doporučení OWASP a nejdřív je otestujeme v režimu „report-only“, aby nerozbily tagy.

**Ukázkový nález:** Meta Pixel nastavuje cookie `_fbp` ještě před volbou v cookie liště.

**Co kontrolujeme:** popisky a chybové hlášky polí, které přečte čtečka obrazovky, ovládání klávesnicí, fokus, kontrast a dotykové plochy podle WCAG 2.2 na úrovni AA. Ověříme i měření – `lead_form_start`, chyby validace a `generate_lead` bez čitelných osobních údajů.

**Proč i právně:** zákon č. 424/2023 Sb. se od 28. června 2025 vztahuje mimo jiné na služby elektronického obchodování pro spotřebitele, ne však na mikropodniky, které poskytují služby. Zda se týká vás, posoudí váš právník, nejde o právní radu.

**Ukázkový nález:** formulář ukazuje chyby jen barvou pole, takže je čtečka nepřečte a měření nezaznamená, kde lidé odpadají.

**Co kontrolujeme rychle:** načtení GA4 a GTM, datovou vrstvu, klíčové události jako nákup nebo lead bez duplicit a výchozí stav i aktualizaci signálů Consent Mode.

**Kdy jít hlouběji:** když GA4 nesedí s e-shopem nebo CRM o desítky procent, doporučíme [audit měření](/sluzby/audit-mereni). Technický audit ho nenahrazuje.

[ výstupy ]

## Co uděláme a co dostanete

Výstup jako úkoly pro vývojáře, ne PDF s 200 chybami z nástroje. Ukázku inventury tagů a vzorového úkolu najdete v Technických detailech u častých otázek.

report

### Shrnutí a technická analýza

Jedna strana pro vedení s pěti hlavními nálezy a podrobné nálezy podle šablon stránek s důkazy z měření a DevTools.

tickety

### Úkoly pro vývojáře

Priorita, reprodukce, doporučení a akceptační kritérium v nástroji, který používáte – Jira, GitHub, GitLab, Trello nebo tabulka.

inventura tagů

### Inventura tagů

Všechny skripty třetích stran s doporučením ponechat, odložit, sloučit, odstranit, nebo přesunout na server.

rozpočet · hlavičky

### Návrhy, aby web znovu nezpomalil

Výkonnostní rozpočet pro LCP, INP, CLS a JavaScript na šablonu, bezpečnostní hlavičky v režimu „report-only“ a checklist přístupnosti formulářů.

re-test

### Prezentace a ověření po opravách

Šedesát až devadesát minut s vývojáři, po opravách laboratorní re-test, kontrola měření a krátký závěrečný report.

[ vymezení ]

## Technický audit, ne SEO kampaň

Jsme technici měření a webu, ne SEO agentura. Díváme se na to, jak web funguje v prohlížeči a pro roboty – obsah a odkazy nechte specialistům.

### Co uděláme

* změříme rychlost na datech reálných návštěvníků i v laboratoři
* najdeme skripty, které web brzdí, a navrhneme, jak je načítat
* zkontrolujeme indexaci, hlavičky, formuláře, měření a souhlas
* připravíme úkoly pro vývojáře a po opravě je zkontrolujeme

### Co neděláme

* analýzu klíčových slov a obsahovou strategii→ výstup rádi předáme vaší SEO agentuře
* psaní textů a linkbuilding
* dlouhodobou správu SEO a UX výzkum s uživateli
* penetrační testybezpečnostní hlavičky ano, hledání zranitelností ne

**SEO audit, technický audit, nebo audit měření?** Každý odpovídá na jinou otázku.

### SEO audit

Potřebujete, když řešíte, proč nemáte víc návštěv z vyhledávání – klíčová slova, obsah, konkurenci a odkazy. Dělá ho SEO agentura.

### Technický audit webu

Potřebujete, když chcete vědět, co web zpomaluje a co mu technicky brání – včetně dopadu měřicích skriptů.

[Co audit kontroluje →](#oblasti)

### Audit měření

Potřebujete, když nesedí data a nevíte, kde mizí konverze. Prověří do hloubky GA4, GTM, datovou vrstvu i reklamní systémy.

[Audit měření →](/sluzby/audit-mereni)

[ postup ]

## Jak audit probíhá

Stejných pět kroků jako u všech našich služeb. Na začátku vybereme šablony a klíčové cesty, jako je nákup nebo formulář, a data reálných návštěv doplníme laboratorním měřením.

1. 01

   ### Audit

   Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.

   od vás: přístupy pro čtení
2. 02

   ### Měřicí plán

   Byznys cíle převedeme na události, parametry a pravidla pojmenování.

   od vás: hodinová schůzka a schválení plánu
3. 03

   ### Implementace

   Opravy v GTM, nastavení měření a Consent Mode uděláme sami, změny v šablonách, na serveru nebo v CDN převezmou vývojáři jako úkoly s akceptačním kritériem.

   od vás: vývojáři pro změny v šablonách, serveru nebo CDN
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.

   od vás: testovací objednávka a export z administrace
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

   od vás: předávací schůzka

[ zdarma ]

## Analýza webu zdarma: co si zkontrolujete sami

Těchto pět kontrol zvládnete za půl hodiny. Nástroje řeknou, *že* je problém, ale ne vždy *proč* – výsledky proto rádi projdeme na úvodní konzultaci zdarma.

* **PageSpeed Insights:** nahoře data reálných návštěvníků, dole laboratorní test s doporučeními
* **Search Console → Core Web Vitals:** které skupiny stránek jsou na mobilu „Špatné“
* **Search Console → Indexování stránek:** kolik URL chybí v indexu a proč
* **Rich Results Test:** jestli produkty mají validní data o produktu a ceně
* **Karta Network v anonymním okně:** co web posílá Googlu a Metě před volbou v cookie liště

[ FAQ ]

## Časté otázky

Nenašli jste odpověď? [Napište nám](#kontakt).

Technické detaily: ukázka inventury tagů a úkolu pro vývojáře

Ukázková data: na mobilu prohlížeč vykreslí hlavní obrázek produktové stránky až za 3,8 s. Mezitím GTM vloží cookie lištu, která posune obsah, a na řadu přijdou Meta Pixel, retargeting Skliku, heatmapy a chat, který doběhne až za 4,2 s. Po optimalizaci je lišta přímo v HTML, heatmapy a chat přijdou na řadu až po načtení stránky nebo po interakci a LCP klesne na 2,1 s.

Inventura tagů: výřez s ukázkovými daty

| Skript | Hlavní vlákno | Doporučení |
| --- | --- | --- |
| `gtm.js` | 120 ms | ponechat, vyčistit 23 nepoužívaných tagů |
| `gtag/js` – GA4 | 160 ms | odstranit duplicitní vložení v šabloně |
| `fbevents.js` – Meta | 110 ms | ponechat přes GTM, zvážit Conversions API přes server |
| `hotjar-*.js` | 290 ms | spouštět jen na vybraných šablonách a po načtení stránky |
| `chat-widget.js` | 380 ms | načítat až po kliknutí na ikonu chatu |
| Custom HTML „starý remarketing“ | 40 ms | **odstranit**, nefunguje od roku 2023 |

textKopírovat

```
[PERF-07] Cookie lišta posouvá obsah na mobilu (CLS)
Šablony: produkt, kategorie · Priorita: vysoká · Náročnost: S, do jednoho dne

Jak reprodukovat:
  Chrome DevTools → Performance, profil mobil, první návštěva bez souhlasu.
Zjištění:
  GTM vkládá lištu až po načtení stránky. Lišta posune obsah o 180 px,
  laboratorní test ukazuje CLS 0,24.
Doporučení:
  Vykreslit lištu přímo v HTML šablony, ne přes GTM, a to jako překryv,
  kterému šablona předem vyhradí místo. Logiku Consent Mode, tedy
  default a update, nechat beze změny.
Akceptační kritérium:
  CLS < 0,1 v laboratorním testu na obou šablonách. Po nasbírání dat
  z reálných návštěv skupina URL „Dobré“ v přehledu Core Web Vitals.
Kontrola měření po opravě:
  V GTM Preview ověřit událost cookie_consent_update a stav souhlasu
  před volbou a po ní. GTM spouští GA4 a reklamní tagy jen po souhlasu.
```

Vzorový úkol pro vývojáře, ukázková data

Kolik technický audit stojí a děláte analýzu zdarma?

Cenu stanovíme předem jako pevnou částku podle počtu typů stránek a domén, platformy a počtu tagů v kontejneru – a podle toho, jestli chcete ověření po opravách a pomoc s implementací. Úvodní třicetiminutová konzultace je zdarma: projdeme výsledky z PageSpeed Insights a Search Console a řekneme, jestli má smysl jít hlouběji.

Jak dlouho audit trvá a co od nás potřebujete?

Délka závisí hlavně na počtu typů stránek a domén, termín domluvíme spolu s rozsahem. Potřebujeme přístup do Search Console, kde stačí omezený uživatel, čtení v GA4 a GTM, seznam hlavních typů stránek a klíčových cest, adresu testovacího prostředí, pokud ho máte, a kontakt na vývojáře. Na konci si dáme šedesát až devadesát minut na prezentaci s vývojáři.

Kontrolujete i cookie lištu a souhlas?

Zkontrolujeme, které cookies web nastaví a jaké požadavky pošle třetím stranám ještě před volbou v cookie liště, a ověříme výchozí stav Consent Mode. Nastavení lišty a Consent Mode pak řeší služba [Cookie lišta a Consent Mode](/sluzby/cookie-lista-consent-mode). Jde o technickou kontrolu, ne o právní radu – texty lišty posoudí váš právník.

Zpomalují měřicí kódy web? Musíme se jich vzdát?

Každý skript třetí strany stojí síť a čas procesoru, měření se ale obvykle vzdávat nemusíte. Většinu zpomalení způsobují duplicitní vložení, staré nefunkční tagy, těžké skripty jako chat nebo heatmapy, které web spouští hned na všech stránkách, a cookie lišta, kterou vkládá tag manager. V auditu každý skript změříme a navrhneme, jestli ho ponechat, odložit, sloučit, odstranit, nebo přesunout na server.

Může optimalizace rychlosti rozbít měření?

Ano, a stává se to často: web odloží GTM tak pozdě, že nestihne zachytit nákup, minifikace rozbije datovou vrstvu nebo nová bezpečnostní hlavička zablokuje domény měření. Proto každé doporučení v auditu obsahuje i kontrolu měření po opravě. Re-test ověří obojí – že web zrychlil a že data tečou dál.

Opravíte chyby z auditu i sami?

Úpravy v Google Tag Manageru, nastavení měření, Consent Mode a strukturovaná data, která web vkládá přes tagy, uděláme sami. Změny v kódu šablon, serveru nebo CDN obvykle dělají vaši vývojáři – dodáme jim přesné zadání, odpovíme na dotazy a po nasazení vše ověříme.

[ pokračujte ]

[**Audit měření**zjistíme, kde data utíkají](/sluzby/audit-mereni)[**Správa webu a měření**hlídáme, aby měření nepřestalo fungovat](/sluzby/sprava-webu-a-mereni)[**Server-side tracking**měření na vaší doméně](/sluzby/server-side-tracking)

[ Kontakt ]

## Zjistěte, co brzdí váš web

Stačí adresa webu a jedna věta o tom, co vás trápí. Na úvodní konzultaci zdarma projdeme výsledky z PageSpeed Insights a Search Console a navrhneme rozsah auditu.

* E-mail[one@datalayer.cz](mailto:one@datalayer.cz)

VNOdpovídá Vít Novotnýobvykle do jednoho pracovního dne

1. Do jednoho pracovního dne navrhneme termín.
2. Na třicet minut projdeme web a cíle.
3. Do dvou pracovních dnů po konzultaci dostanete shrnutí a návrh dalšího kroku.

Web firmy

Jméno a příjmeníE-mail

Co řešíte? (nepovinné)

GA4 a Tag ManagerServer-sideCookie lišta a consentKonverze a reklamyBigQuery a reportingAuditJiné

S čím vám můžeme pomoci?+ Přidat telefon a web (nepovinné)

Telefon (nepovinné)Web (nepovinné)

Údaje použijeme jen k odpovědi na zprávu a případné nabídce. [Jak s nimi zacházíme](/zpracovani-osobnich-udaju). Žádný newsletter, žádný spam.

[ Odeslat zprávu ]

Ozveme se do jednoho pracovního dne.