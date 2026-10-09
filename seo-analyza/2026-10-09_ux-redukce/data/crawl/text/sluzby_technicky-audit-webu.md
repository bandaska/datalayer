# URL: https://datalayer.vitnovotny.cz/sluzby/technicky-audit-webu

1. [Úvod](/)
2. [Služby](/sluzby)
3. Technický audit webu

audity a správa

# Technický audit webu – rychlost, tagy a technické SEO

Technický audit webu je kontrola toho, jak web funguje uvnitř: rychlost a Core Web Vitals, dopad měřicích a reklamních skriptů, indexace a strukturovaná data, bezpečnostní hlavičky, přístupnost formulářů a měření. Výstupem jsou konkrétní úkoly pro vývojáře s prioritou podle dopadu. Po opravě ověříme, že web opravdu zrychlil a měření funguje dál.

[Objednat technický audit](#kontakt)[Co audit kontroluje](#oblasti)

Úvodní konzultace zdarma a nezávazně

* Úkoly pro vývojáře, ne PDF z nástroje
* Data reálných návštěvníků i laboratorní test
* Po opravách ověříme výsledek

symptomy

## Poznáváte se?

Technický audit se vyplatí, když web zpomaluje, stránky chybí v indexu nebo mizí poptávky – a také před redesignem či migrací.

rychlost

### Search Console hlásí špatné Core Web Vitals

Na mobilu vidíte skupiny URL „Je třeba zlepšit“ nebo „Špatné“ a nikdo neví, co přesně je zpomaluje.

tagy

### Každý nový pixel web zpomalí

Chat, heatmapy, A/B test, další reklamní pixel – každý přidal pár set milisekund a nikdo neví, kolik dohromady.

index

### Stránky nejsou v indexu

Search Console ukazuje stovky URL, které Google prošel, ale nezaindexoval, nebo duplicity z filtrů a parametrů e-shopu.

formulář

### Formulář, který odrazuje

Chybová hláška není u pole, formulář nejde vyplnit klávesnicí a odeslání nikdo neměří – poptávky mizí a nevíte kde.

oblasti auditu

## Šest oblastí, které audit kontroluje

Oblasti se vyplatí kombinovat – třeba kvůli zrychlení, které nerozbije měření.

Výkon a Core Web VitalsMěřicí skripty a tagyTechnické SEOBezpečnostní hlavičky a soukromíPřístupnost formulářůKontrola měření

**Co kontrolujeme:** tři metriky Core Web Vitals na 75. percentilu návštěv – **LCP** do 2,5 s, **INP** do 200 ms a **CLS** do 0,1. INP v březnu 2024 nahradil FID. Data reálných návštěvníků ze Search Console a Chrome UX Reportu porovnáme s laboratorním testem pro každý typ stránky.

**Kde se rychlost potkává s měřením:** když web spustí měřicí skripty příliš brzy, soupeří skripty s hlavním obsahem o síť i procesor a zhorší LCP i INP. Když je spustí příliš pozdě, část dat chybí.

**Ukázkový nález:** cookie lišta, kterou vkládá Google Tag Manager (GTM), posouvá obsah produktové stránky na mobilu a laboratorní test ukazuje CLS 0,24.

**Oblast, kterou SEO audity obvykle vynechávají.** U každého skriptu třetí strany – GTM, Google tag, Meta Pixel, Sklik, Hotjar, chat nebo A/B test – zjistíme velikost, čas hlavního vlákna a okamžik spuštění.

Hledáme duplicity, třeba GA4 přes gtag i GTM zároveň, mrtvé tagy v kontejneru a marketingové tagy, které web spouští před souhlasem. Doporučení vychází z návodů Googlu na web.dev.

**Ukázkový nález:** chatovací widget zabírá na všech stránkách 380 ms hlavního vlákna, přitom by stačilo načíst ho až po interakci.

**Co kontrolujeme:** indexaci v Search Console, `robots.txt`, canonical, přesměrování, stavové kódy a sitemapu, duplicity z filtrů e-shopu, vykreslování JavaScriptu, `hreflang` a validaci strukturovaných dat.

**Co víme k říjnu 2026:** Google od 7. května 2026 rozšířený výsledek FAQ nezobrazuje a Google Search soubor `llms.txt` nepotřebuje. Takové věci vám nebudeme prodávat jako „SEO zlepšení“.

**Ukázkový nález:** filtry kategorií vytvářejí 12 000 indexovatelných kombinací URL bez canonical.

**Co kontrolujeme:** HTTPS, `Strict-Transport-Security`, `Referrer-Policy`, `Permissions-Policy`, ochranu proti vložení do rámu, smíšený obsah a `Content-Security-Policy`, která má povolit jen potřebné domény a neblokovat měření. Zjistíme také, které cookies a požadavky web pošle třetím stranám ještě **před** souhlasem.

**Vymezení:** nejde o penetrační test. Hlavičky navrhneme podle doporučení OWASP a nejdřív je otestujeme v režimu „report-only“, aby nerozbily tagy.

**Ukázkový nález:** Meta Pixel nastavuje cookie `_fbp` ještě před volbou v cookie liště.

**Co kontrolujeme:** popisky a chybové hlášky polí, které přečte čtečka obrazovky, ovládání klávesnicí, fokus, kontrast a dotykové plochy podle WCAG 2.2 na úrovni AA. Ověříme i měření – `lead_form_start`, chyby validace a `generate_lead` bez čitelných osobních údajů.

**Proč i právně:** zákon č. 424/2023 Sb. se od 28. června 2025 vztahuje mimo jiné na služby elektronického obchodování pro spotřebitele, ne však na mikropodniky, které poskytují služby. Zda se týká i vás, posoudí váš právník – nejde o právní radu.

**Ukázkový nález:** formulář ukazuje chyby jen barvou pole, takže je čtečka nepřečte a měření nezaznamená, kde lidé odpadají.

**Co kontrolujeme rychle:** načtení GA4 a GTM, datovou vrstvu, klíčové události jako nákup nebo odeslání poptávky bez duplicit a výchozí stav i aktualizaci signálů Consent Mode.

**Kdy jít hlouběji:** když GA4 nesedí s e-shopem nebo CRM o desítky procent, doporučíme [audit měření](/sluzby/audit-mereni). Technický audit ho nenahrazuje.

výstupy

## Co uděláme a co dostanete

Ukázku inventury tagů a vzorového úkolu pro vývojáře najdete v Technických detailech u častých otázek.

report

### Shrnutí a technická analýza

Jedna strana pro vedení s pěti hlavními nálezy a podrobné nálezy podle šablon stránek s důkazy z měření a DevTools.

úkoly

### Úkoly pro vývojáře

Priorita, reprodukce, doporučení a akceptační kritérium v nástroji, který používáte – Jira, GitHub, GitLab, Trello nebo tabulka.

inventura tagů

### Inventura tagů

Všechny skripty třetích stran s doporučením ponechat, odložit, sloučit, odstranit, nebo přesunout na server.

rozpočet, hlavičky

### Opatření, aby web znovu nezpomalil

Výkonnostní rozpočet pro LCP, INP, CLS a JavaScript na šablonu, bezpečnostní hlavičky v režimu „report-only“ a kontrolní seznam přístupnosti formulářů.

retest

### Prezentace a ověření po opravách

Šedesát až devadesát minut s vývojáři, po opravách laboratorní retest, kontrola měření a krátký závěrečný report.

vymezení

## Co technický audit zahrnuje a co ne

Jsme technici měření a webu, ne SEO agentura. Díváme se na to, jak web funguje v prohlížeči a pro roboty – obsah a odkazy nechte specialistům.

### Co uděláme

* změříme rychlost na datech reálných návštěvníků i v laboratoři
* najdeme skripty, které web brzdí, a navrhneme, jak je načítat
* zkontrolujeme indexaci, hlavičky, formuláře, měření a souhlas
* připravíme úkoly pro vývojáře a po opravě je zkontrolujeme

### Co neděláme

* analýzu klíčových slov a obsahovou strategii – výstup rádi předáme vaší SEO agentuře
* psaní textů a linkbuilding
* dlouhodobou správu SEO a UX výzkum s uživateli
* penetrační testy – bezpečnostní hlavičky ano, hledání zranitelností ne

**SEO audit, technický audit a audit měření** odpovídají každý na jinou otázku.

### SEO audit

Potřebujete ho, když řešíte, proč nemáte víc návštěv z vyhledávání – klíčová slova, obsah, konkurenci a odkazy. Dělá ho SEO agentura.

### Technický audit webu

Potřebujete ho, když chcete vědět, co web zpomaluje a co mu technicky brání v indexaci a měření – včetně dopadu měřicích skriptů.

[Co audit kontroluje](#oblasti)

### Audit měření

Potřebujete ho, když nesedí data a nevíte, kde mizí konverze. Prověří do hloubky GA4, GTM, datovou vrstvu i reklamní systémy.

[Audit měření](/sluzby/audit-mereni)

postup

## Jak audit probíhá

Postup má stejných pět kroků jako ostatní služby, jejich obsah ale odpovídá technickému auditu. Data reálných návštěv doplníme laboratorním měřením.

1. 01

   ### Audit

   Vybereme šablony a hlavní cesty, jako je nákup nebo formulář, a projdeme na nich rychlost, skripty, indexaci, hlavičky, formuláře a měření.

   Od vás: přístupy pro čtení do Search Console, GA4 a GTM a seznam hlavních typů stránek
2. 02

   ### Měřicí plán

   Nálezy seřadíme podle dopadu, převedeme je na úkoly pro vývojáře a projdeme je s nimi na prezentaci.

   Od vás: kontakt na vývojáře
3. 03

   ### Implementace

   Opravy v GTM, nastavení měření a Consent Mode uděláme sami. Změny v šablonách, na serveru nebo v CDN převezmou vývojáři jako úkoly s akceptačním kritériem.

   Od vás: vývojáři pro změny v šablonách, na serveru nebo v CDN
4. 04

   ### Validace

   Po opravách zopakujeme laboratorní test, zkontrolujeme měření a sepíšeme krátký závěrečný report.

   Od vás: adresa testovacího prostředí, pokud ho máte
5. 05

   ### Předání a podpora

   Předáme výkonnostní rozpočet a kontrolní seznamy, podle kterých tým udrží web rychlý i po dalších releasech.

   Od vás: předávací schůzka

vlastní kontrola

## Analýza webu, kterou zvládnete sami

Těchto pět kontrol vám zabere asi půl hodiny. Nástroje řeknou, *že* je problém, ale ne vždy *proč* – výsledky proto rádi projdeme na úvodní konzultaci.

* **PageSpeed Insights.** Nahoře ukáže data reálných návštěvníků, dole laboratorní test s doporučeními.
* **Search Console, přehled Core Web Vitals.** Zjistíte, které skupiny stránek jsou na mobilu „Špatné“.
* **Search Console, přehled Indexování stránek.** Uvidíte, kolik URL chybí v indexu a proč.
* **Rich Results Test.** Ověří, jestli produktové stránky mají validní strukturovaná data o produktu a ceně.
* **Karta Network v anonymním okně.** Ukáže, co web posílá Googlu a Metě před volbou v cookie liště.

FAQ

## Časté otázky

Technické detailyUkázka inventury tagů a úkolu pro vývojáře

Ukázková data: na mobilu prohlížeč vykreslí hlavní obrázek produktové stránky až za 3,8 s. Mezitím GTM vloží cookie lištu, která posune obsah, a na řadu přijdou Meta Pixel, retargeting Skliku, heatmapy a chat, který doběhne až za 4,2 s. Po optimalizaci je lišta přímo v HTML, heatmapy a chat přijdou na řadu až po načtení stránky nebo po interakci a LCP klesne na 2,1 s.

Inventura tagů: výřez s ukázkovými daty

| Skript | Hlavní vlákno | Doporučení |
| --- | --- | --- |
| `gtm.js` | 120 ms | ponechat, vyčistit třiadvacet nepoužívaných tagů |
| `gtag/js` – GA4 | 160 ms | odstranit duplicitní vložení v šabloně |
| `fbevents.js` – Meta | 110 ms | ponechat přes GTM, zvážit Conversions API přes server |
| `hotjar-*.js` | 290 ms | spouštět jen na vybraných šablonách a po načtení stránky |
| `chat-widget.js` | 380 ms | načítat až po kliknutí na ikonu chatu |
| Custom HTML „starý remarketing“ | 40 ms | **odstranit**, nefunguje od roku 2023 |

textKopírovat

```
[PERF-07] Cookie lišta posouvá obsah na mobilu (CLS)
Šablony: produkt, kategorie
Priorita: vysoká
Náročnost: S, do jednoho dne

Jak reprodukovat:
  Chrome DevTools, panel Performance, profil mobil, první návštěva bez souhlasu.
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

Kolik technický audit stojí a děláte analýzu webu zdarma?

Cenu stanovíme předem jako pevnou částku podle počtu typů stránek a domén, platformy a počtu tagů v kontejneru – a podle toho, jestli chcete ověření po opravách a pomoc s implementací. Úvodní konzultace nic nestojí: projdeme na ní výsledky z PageSpeed Insights a Search Console a řekneme, jestli má smysl jít hlouběji.

Jak dlouho audit trvá a co od nás potřebujete?

Délka závisí hlavně na počtu typů stránek a domén; termín domluvíme spolu s rozsahem. Potřebujeme přístup do Search Console, kde stačí omezený uživatel, čtení v GA4 a GTM, seznam hlavních typů stránek a cest návštěvníků, adresu testovacího prostředí, pokud ho máte, a kontakt na vývojáře. Na konci věnujeme šedesát až devadesát minut prezentaci s vývojáři.

Kontrolujete i cookie lištu a souhlas?

Zkontrolujeme, které cookies web nastaví a jaké požadavky pošle třetím stranám ještě před volbou v cookie liště, a ověříme výchozí stav Consent Mode. Nastavení lišty a Consent Mode pak řeší služba [Cookie lišta a Consent Mode](/sluzby/cookie-lista-consent-mode). Jde o technickou kontrolu, ne o právní radu – texty lišty posoudí váš právník.

Zpomalují měřicí kódy web? Musíme se jich vzdát?

Každý skript třetí strany stojí přenesená data a čas procesoru. Měření se ale obvykle vzdávat nemusíte. Většinu zpomalení způsobují duplicitní vložení, staré nefunkční tagy, těžké skripty jako chat nebo heatmapy, které web spouští hned na všech stránkách, a cookie lišta, kterou vkládá GTM. V auditu každý skript změříme a navrhneme, jestli ho ponechat, odložit, sloučit, odstranit, nebo přesunout na server.

Může optimalizace rychlosti rozbít měření?

Ano, a stává se to často: web odloží GTM tak pozdě, že nestihne zachytit nákup, minifikace rozbije datovou vrstvu nebo nová bezpečnostní hlavička zablokuje domény měření. Proto každé doporučení v auditu obsahuje i kontrolu měření po opravě. Retest ověří obojí – že web zrychlil a že data tečou dál.

Opravíte chyby z auditu i sami?

Úpravy v GTM, nastavení měření, Consent Mode a strukturovaná data, která web vkládá přes tagy, uděláme sami. Změny v kódu šablon, serveru nebo CDN obvykle dělají vaši vývojáři – dodáme jim přesné zadání, odpovíme na dotazy a po nasazení vše ověříme.

pokračujte

[**Audit měření**zjistíme, kde data utíkají](/sluzby/audit-mereni)[**Správa webu a měření**hlídáme, aby měření nepřestalo fungovat](/sluzby/sprava-webu-a-mereni)[**Server-side tracking**měření na vaší doméně](/sluzby/server-side-tracking)

Kontakt

## Zjistíme, co brzdí váš web

Stačí adresa webu a jedna věta o tom, co vás trápí. Na úvodní konzultaci navrhneme rozsah auditu.

* E-mail[one@datalayer.cz](mailto:one@datalayer.cz)
* Telefon[+420 704 664 774](tel:+420704664774)

1. Domluvíme termín callu
2. Projdeme web a cíle
3. Připravíme návrh na míru

Web firmy

Jméno a příjmeníE-mail

Telefon (nepovinné)Web (nepovinné)

Co řešíte? (nepovinné)

GA4 a GTMServer-side měřeníCookie lišta a souhlasKonverze a reklamyBigQuery a reportingAuditJiné

S čím vám můžeme pomoci?

Údaje použijeme jen k odpovědi na zprávu a případné nabídce. [Jak s nimi zacházíme](/zpracovani-osobnich-udaju). Žádný newsletter, žádný spam.

Odeslat zprávu