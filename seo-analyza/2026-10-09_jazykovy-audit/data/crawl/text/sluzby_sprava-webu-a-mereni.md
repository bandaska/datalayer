# URL: https://datalayer.vitnovotny.cz/sluzby/sprava-webu-a-mereni

1. [Úvod](/)
2. [Služby](/sluzby)
3. Správa webu a měření

[ audity a správa ]

# Technická správa webu, která hlídá i měření

Správa webu a měření je průběžná technická péče o web: aktualizace, zálohy a dostupnost a k tomu hlídání tagů, datové vrstvy a souhlasu po každém releasu. Chybu v měření zachytí automatické testy a denní kontrola dat, opravíme ji podle SLA a jednou měsíčně dostanete report kvality dat. Když měření přestane fungovat, víte to týž den, ne za měsíc z propadu v reportu.

[[ Domluvit správu webu ]](#kontakt)[[ Co hlídáme ]](#co-hlidame)

Úvodní konzultace zdarma · online po celé ČR · nejsme webové studio, grafiku a texty neděláme

* Automatický test měření po každém nasazení
* Reakční doby podle priority ve smlouvě
* Účty, přístupy a data zůstávají vaše

[ symptomy ]

## Znáte to?

Správa s hlídáním měření dává smysl, když se web často mění a nikdo nekontroluje, jestli po změně dál měří.

release

### Měření přestalo fungovat a nikdo si nevšiml

Po releasu přestaly do GA4 chodit nákupy, někdo si toho všiml až za tři týdny a reklamní systémy mezitím optimalizovaly naslepo.

consent

### Cookie lišta po aktualizaci přestala fungovat

Nová verze lišty nebo šablony a web najednou spouští tagy před souhlasem, nebo naopak vůbec.

gtm

### V GTM publikuje kdokoli

Agentura, PPC specialista i vývojář – nikdo neví, co se v které verzi změnilo, a starých tagů přibývá.

vývoj

### Web dělá agentura, za data neodpovídá nikdo

Vývojáři řeší funkce, marketing kampaně a měření mezi nimi padá pokaždé, když se něco mění.

[ moduly ]

## Co hlídáme: tři moduly, které lze kombinovat

Modul A je základ služby, moduly B a C přidáme podle toho, kdo web vyvíjí a jak často se mění.

modul A · základ

### Hlídání měření

Funguje na jakékoli platformě, protože testujeme výsledný web v prohlížeči a data v GA4.

* test produktu, košíku, objednávky a formuláře po nasazení i denně
* denní srovnání událostí s průměrem a s objednávkami v e-shopu
* kontrola souhlasu měsíčně a po každé změně cookie lišty
* pořádek v GTM, měsíční report a drobné úpravy měření

modul B

### Technická správa webu

Aktualizace a údržba vždy s kontrolou měření, rozsah domluvíme podle platformy a hostingu.

* aktualizace nejdřív na testovacím prostředí, pak v produkci
* pravidelné zálohy, hlídání dostupnosti, certifikátu a domény
* bezpečnostní hlavičky v souladu s tagy na webu
* Core Web Vitals a výkonnostní rozpočet každý měsíc

modul C

### Release partner

Pro firmy s vlastním nebo externím vývojem.

* release checklist pro vývojáře a kontrola na stagingu
* regresní test měření po každém nasazení
* zadání datové vrstvy pro nové funkce dřív, než vývoj začne
* konzultace pro vývojáře v dohodnutém rozsahu

[ smyčka ]

## Jak hlídání funguje: od releasu po report

Hlídání má dvě vrstvy. Testy v prohlížeči zachytí chybu hned po nasazení, ještě než se projeví v datech, a kontrola dat odhalí to, co testy nepokryjí – třeba chybu jen na některém zařízení nebo v jiné jazykové verzi.

release

* vývojáři nebo agentura
* release checklist a test na stagingu
* nasazení do produkce

test po nasazení

* produkt → košík → objednávka
* formulář → lead
* datová vrstva, tagy a souhlas

když něco chybí, přijde alert

denní kontrola dat

* GA4 nebo BigQuery proti průměru
* GA4 proti objednávkám v e-shopu

při anomálii přijde alert

alert a oprava

* alert e-mailem nebo do Slacku
* incident podle priority v SLA
* oprava: GTM my, kód vývojáři
* ověření a záznam do reportu

Smyčka hlídání měření: po releasu projde automatický test klíčové cesty a denní kontrola porovná data s průměrem a s objednávkami v e-shopu. Když něco nesedí, přijde alert, opravu ověříme a zapíšeme do měsíčního reportu.

* **Alert ještě týž den.** Přijde e-mailem nebo do Slacku, jakmile test nebo kontrola dat najde chybu.
* **Testy hlídají i souhlas.** Ověří, že web spouští tagy jen po souhlasu návštěvníka.
* **Každý incident má záznam.** Skončí v logu a v měsíčním reportu kvality dat.

[ srovnání ]

## Čím se lišíme od běžné správy webu

Běžná správa se stará, aby web běžel a byl aktuální, my k tomu hlídáme, aby dál správně měřil. Texty, grafiku a nové funkce neděláme, takže správu u studia si můžete nechat a vzít si od nás jen hlídání měření.

### Typická správa webu u studia

* aktualizace systému a pluginů, zálohy
* obvykle i monitoring dostupnosti a certifikátu
* úpravy textů, obrázků a nových stránek
* grafika a vývoj nových funkcí
* měsíčně výkaz odpracovaných hodin

### Správa webu a měření u nás

* aktualizace s testem na stagingu a kontrolou měření
* automatická kontrola tagů a datové vrstvy po každém releasu
* kontrola souhlasu měsíčně a po každé změně lišty
* pořádek v GTM, hlídání anomálií a release checklist
* report kvality dat s doporučením místo výkazu hodin

Popisujeme typickou nabídku, konkrétní studia se liší.

[ postup ]

## Jak začínáme

Hlídat má smysl jen funkční měření, proto začínáme vstupní kontrolou – pokud jsme vám měření nasazovali my, je kratší. Chcete nejdřív jen jednorázovou kontrolu? Začněte [auditem měření](/sluzby/audit-mereni).

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

   Opravíme chyby ze vstupní kontroly a nastavíme hlídání: automatické testy, alerty, vlastní statistiky v GA4 a notifikace z GTM. Na jedné schůzce domluvíme release proces, kontakty a priority chyb.

   od vás: součinnost vývojářů, testovací režim objednávky a kanál pro alerty
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.

   od vás: testovací objednávka a export z administrace
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

   od vás: předávací schůzka

[ release a SLA ]

## Release checklist a SLA

Vývojáři dostanou release checklist o dvanácti kontrolách – šest před nasazením a šest po něm, většinu z nich hlídá automatický test. Priority, reakční doby a cíle řešení sepíšeme do smlouvy.

### Pět kontrol z dvanácti

* Datová vrstva na testovacím prostředí odpovídá specifikaci.
* Web načítá GTM a konzole neukazuje chyby JavaScriptu.
* Před souhlasem web nespustí žádný marketingový tag.
* Testovací nákup nebo formulář v produkci dorazí do GA4.
* Počty klíčových událostí první den po releasu odpovídají průměru.

Celý checklist upravíme na míru platformě a release procesu a dostanete ho jako šablonu v Markdownu, Confluence nebo Jiře. Všech dvanáct kontrol najdete v Technických detailech u [častých otázek](#faq).

Priority incidentů ve smlouvě

| Priorita | Příklady |
| --- | --- |
| **P1 – kritická** | web neměří nákupy ani leady, tagy běží bez souhlasu, u modulu B i výpadek webu |
| **P2 – závažná** | jeden reklamní systém nepřijímá konverze, chybí parametry nebo nefunguje část formulářů |
| **P3 – běžná** | nová událost, úprava konverze, drobné nesrovnalosti v datech |

Opravy v kódu webu závisejí na vývojářích – garantujeme diagnostiku, přesné zadání a ověření po nasazení.

[ report ]

## Co dostáváte každý měsíc

Report kvality dat a třicetiminutový hovor nad ním. Report není výkaz odpracovaných hodin – odpovídá na otázku, jestli se můžete na data spolehnout, a co udělat příští měsíc. Jednou za čtvrtletí upravíme testy a hranice upozornění.

**86,4 %**shoda objednávek v GA4 a e-shopu, cíl aspoň 85 %

**71 %**relací se souhlasem, po změně lišty o dva procentní body méně

**99,98 %**dostupnost webu za měsíc

Ukázková data z reportu za září 2026.

* incidenty: co se stalo, jak rychle jsme reagovali, příčina a prevence
* shoda dat: GA4 proti e-shopu nebo CRM a reklamní systémy proti GA4
* změny: verze webu a GTM, nové cookies a domény a úklid tagů
* Core Web Vitals podle šablon a doporučení na další měsíc

[ FAQ ]

## Časté otázky

Nenašli jste odpověď? [Napište nám](#kontakt).

Technické detaily: celý release checklist a co testy kontrolují

### Před nasazením, na testovacím prostředí

* Vývojáři nám dají vědět předem, když release mění šablony, které odesílají `purchase`, `generate_lead` nebo jinou klíčovou událost.
* Datová vrstva odpovídá specifikaci: názvy událostí, povinné parametry, datové typy.
* Web načítá kontejner GTM a konzole neukazuje chyby JavaScriptu.
* Cookie lišta má výchozí stav souhlasu „denied“, po volbě ho aktualizuje a před souhlasem nespustí žádný marketingový tag.
* Formuláře validují vstup, odeslání funguje a `generate_lead` neposílá osobní údaje v čitelné podobě.
* Nové skripty třetích stran prošly schválením vývoje i naším: výkon, souhlas, bezpečnostní hlavičky.

### Po nasazení, v produkci

* Testovací nákup nebo formulář dorazil do GA4 – ověříme to v DebugView nebo v přehledu v reálném čase.
* Google Ads, Meta a Sklik přijímají konverze, u server-side kontrolujeme deduplikaci přes `event_id`.
* Změněné URL mají přesměrování a canonical a sitemap je aktuální.
* Core Web Vitals šablon v laboratorním testu nepřekračují výkonnostní rozpočet.
* Počty klíčových událostí v první hodině a první den odpovídají průměru.
* Release log obsahuje verzi webu a GTM a kdo co změnil.

Automatický test projde v headless prohlížeči produkt, košík, objednávku v testovacím režimu a formulář. Ověří, že web načte GTM, že datová vrstva obsahuje očekávané události a parametry, třeba `purchase` s `transaction_id`, `value` a `items`, a že tagy běží jen po souhlasu.

U souhlasu kontrolujeme výchozí stav a aktualizaci signálů `ad_storage`, `analytics_storage`, `ad_user_data` a `ad_personalization`. Jako levnou první vrstvu hlídání dat nastavíme vlastní statistiky v GA4 s upozorněním e-mailem – Google jich dovoluje až padesát na property.

Co dělá správce webu a čím se liší vaše správa?

Správce webu se stará, aby web technicky fungoval: aktualizuje systém a doplňky, zálohuje, hlídá dostupnost a bezpečnost a často upravuje i obsah. Naše správa míří jinam – obsah a grafiku neděláme, zato hlídáme, že po každé změně webu dál fungují měřicí kódy, datová vrstva a souhlas s cookies. Nové stránky a funkce zkontrolujeme před nasazením i po něm, aby správně měřily.

Kolik stojí správa webu a z čeho se skládá cena?

Ceník neuvádíme, protože weby se liší víc než ceníkové balíčky – po vstupní kontrole dostanete pevnou měsíční částku. Rozhoduje počet webů, domén a jazykových verzí, platforma, kolik cest a konverzí hlídáme, jak často vydáváte nové verze, zvolené moduly, úroveň SLA a rozsah drobných úprav měření. Nástroje a infrastrukturu na vašich účtech, třeba hosting, Google Cloud nebo BigQuery, platíte přímo dodavatelům.

Jak rychle hlídání začne a co od vás potřebujeme?

Začínáme vstupní kontrolou a opravou chyb, které najde, takže délka záleží hlavně na jejich rozsahu. Pokud jsme vám měření nasazovali my, je vstupní kontrola kratší, protože výchozí stav známe. Potřebujeme přístupy do GA4, GTM, Search Console a reklamních systémů, testovací prostředí a testovací režim objednávky.

Web nám vyvíjí jiná agentura. Jak spolupráce funguje?

Agentura dál vyvíjí, my jí dodáme release checklist a zadání datové vrstvy pro nové funkce a po každém nasazení zkontrolujeme měření. Když najdeme chybu v kódu, pošleme přesný popis s reprodukcí a po opravě ji ověříme. V GTM nastavíme pravidla, kdo smí publikovat, aby se práce nepřekrývala.

Hlídáte i cookie lištu a souhlas?

Ano, technicky. Měsíčně a po každé změně lišty kontrolujeme výchozí stav Consent Mode a jeho aktualizaci po volbě návštěvníka, marketingové tagy před souhlasem a nové cookies nebo domény třetích stran. Nejsme ale advokátní kancelář – soulad textů lišty a zásad s právem posoudí váš právník a nastavení lišty řešíme ve službě [Cookie lišta a Consent Mode](/sluzby/cookie-lista-consent-mode).

Komu patří účty a co se stane po ukončení spolupráce?

Všechny účty – GA4, GTM, Search Console, reklamní systémy i Google Cloud – zůstávají vaše a my v nich máme jen uživatelské přístupy s potřebnou rolí. Testy a skripty pro hlídání běží na vaší infrastruktuře, nebo je při ukončení předáme. Po skončení si přístupy odeberete a dostanete předávací balíček: dokumentaci, release checklist, nastavení upozornění a poslední report.

[ pokračujte ]

[**Audit měření**zjistíme, kde data utíkají](/sluzby/audit-mereni)[**Technický audit webu**rychlost, tagy a technické SEO](/sluzby/technicky-audit-webu)[**Google Tag Manager**pořádek v tazích a verzích](/sluzby/google-tag-manager)

[ Kontakt ]

## Ať měření po dalším releasu nepřestane fungovat

Na úvodní třicetiminutové konzultaci zdarma zjistíme, kdo web vyvíjí, jak často vydáváte nové verze a co je potřeba hlídat. Pak navrhneme rozsah správy.

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