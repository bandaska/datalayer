# /sluzby/sprava-webu-a-mereni

## Hlavička stránky (title, meta, OG)
- `title`: Správa webu a měření – tagy, consent, SLA | datalayer.cz
- `meta:description`: Správa webu, která hlídá i měření: monitoring tagů a dataLayeru po každém releasu, kontrola consentu, aktualizace, měsíční report kvality dat a SLA.
- `meta:og:title`: Správa webu a měření – tagy, consent, SLA | datalayer.cz
- `meta:og:description`: Správa webu, která hlídá i měření: monitoring tagů a dataLayeru po každém releasu, kontrola consentu, aktualizace, měsíční report kvality dat a SLA.
- `meta:twitter:title`: Správa webu a měření – tagy, consent, SLA | datalayer.cz
- `meta:twitter:description`: Správa webu, která hlídá i měření: monitoring tagů a dataLayeru po každém releasu, kontrola consentu, aktualizace, měsíční report kvality dat a SLA.

## Strukturovaná data (JSON-LD) – texty
- `jsonld:itemListElement.name`: Úvod
- `jsonld:itemListElement.name`: Služby
- `jsonld:itemListElement.name`: Správa webu a měření
- `jsonld:name`: Správa webu a měření
- `jsonld:serviceType`: Průběžná technická správa webu a monitoring tagů, dataLayeru a consentu se SLA
- `jsonld:description`: Monitoring tagů a datové vrstvy po každém releasu, kontrola souhlasu a Consent Mode, aktualizace a technická údržba webu, release checklist, měsíční report kvality dat a SLA.
- `jsonld:areaServed.name`: Česká republika
- `jsonld:audience.audienceType`: E-shopy, B2B firmy, velké firmy s vlastním nebo externím vývojem
- `jsonld:mainEntity.name`: Co dělá správce webu a čím se liší vaše správa?
- `jsonld:mainEntity.acceptedAnswer.text`: Správce webu se stará, aby web technicky fungoval: aktualizuje systém a doplňky, zálohuje, hlídá dostupnost a bezpečnost a často upravuje i obsah. Naše správa míří jinam – obsah a grafiku neděláme, zato hlídáme, že po každé změně webu dál fungují měřicí kódy, datová vrstva a souhlas s cookies. Nové stránky a funkce zkontrolujeme před nasazením i po něm, aby správně měřily.
- `jsonld:mainEntity.name`: Kolik stojí správa webu a z čeho se skládá cena?
- `jsonld:mainEntity.acceptedAnswer.text`: Ceník neuvádíme, protože weby se liší víc než ceníkové balíčky – po vstupní kontrole dostanete pevnou měsíční částku. Rozhoduje počet webů, domén a jazykových verzí, platforma, kolik cest a konverzí hlídáme, jak často vydáváte nové verze, zvolené moduly, úroveň SLA a rozsah drobných úprav měření. Nástroje a infrastrukturu na vašich účtech, třeba hosting, Google Cloud nebo BigQuery, platíte přímo dodavatelům.
- `jsonld:mainEntity.name`: Jak rychle hlídání začne a co od vás potřebujeme?
- `jsonld:mainEntity.acceptedAnswer.text`: Začínáme vstupní kontrolou a opravou chyb, které najde, takže délka záleží hlavně na jejich rozsahu. Pokud jsme vám měření nasazovali my, je vstupní kontrola kratší, protože výchozí stav známe. Potřebujeme přístupy do GA4, GTM, Search Console a reklamních systémů, testovací prostředí a testovací režim objednávky.
- `jsonld:mainEntity.name`: Web nám vyvíjí jiná agentura. Jak spolupráce funguje?
- `jsonld:mainEntity.acceptedAnswer.text`: Agentura dál vyvíjí, my jí dodáme release checklist a zadání datové vrstvy pro nové funkce a po každém nasazení zkontrolujeme měření. Když najdeme chybu v kódu, pošleme přesný popis s reprodukcí a po opravě ji ověříme. V GTM nastavíme pravidla, kdo smí publikovat, aby se práce nepřekrývala.
- `jsonld:mainEntity.name`: Hlídáte i cookie lištu a souhlas?
- `jsonld:mainEntity.acceptedAnswer.text`: Ano, technicky. Měsíčně a po každé změně lišty kontrolujeme výchozí stav Consent Mode a jeho aktualizaci po volbě návštěvníka, marketingové tagy před souhlasem a nové cookies nebo domény třetích stran. Nejsme ale advokátní kancelář – soulad textů lišty a zásad s právem posoudí váš právník a nastavení lišty řešíme ve službě Cookie lišta a Consent Mode.
- `jsonld:mainEntity.name`: Komu patří účty a co se stane po ukončení spolupráce?
- `jsonld:mainEntity.acceptedAnswer.text`: Všechny účty – GA4, GTM, Search Console, reklamní systémy i Google Cloud – zůstávají vaše a my v nich máme jen uživatelské přístupy s potřebnou rolí. Testy a skripty pro hlídání běží na vaší infrastruktuře, nebo je při ukončení předáme. Po skončení si přístupy odeberete a dostanete předávací balíček: dokumentaci, release checklist, nastavení upozornění a poslední report.

## Obsah stránky

### [sekce] 
- `a`: Přeskočit na obsah
- `a`: Úvod
- `a`: Služby
- `li`: Správa webu a měření
- `p`: [ audity a správa ]
- `h1`: Technická správa webu, která hlídá i měření
- `p`: Správa webu a měření je průběžná technická péče o web: aktualizace, zálohy a dostupnost a k tomu hlídání tagů, datové vrstvy a souhlasu po každém releasu. Chybu v měření zachytí automatické testy a denní kontrola dat, opravíme ji podle SLA a jednou měsíčně dostanete report kvality dat. Když měření přestane fungovat, víte to týž den, ne za měsíc z propadu v reportu.
- `a`: [ Domluvit správu webu ]
- `a`: [ Co hlídáme ]
- `p`: Úvodní konzultace zdarma · online po celé ČR · nejsme webové studio, grafiku a texty neděláme
- `li`: Automatický test měření po každém nasazení
- `li`: Reakční doby podle priority ve smlouvě
- `li`: Účty, přístupy a data zůstávají vaše

### [sekce] Znáte to?
- `p`: [ symptomy ]
- `h2`: Znáte to?
- `p`: Správa s hlídáním měření dává smysl, když se web často mění a nikdo nekontroluje, jestli po změně dál měří.
- `span`: release
- `h3`: Měření přestalo fungovat a nikdo si nevšiml
- `div`: Po releasu přestaly do GA4 chodit nákupy, někdo si toho všiml až za tři týdny a reklamní systémy mezitím optimalizovaly naslepo.
- `span`: consent
- `h3`: Cookie lišta po aktualizaci přestala fungovat
- `div`: Nová verze lišty nebo šablony a web najednou spouští tagy před souhlasem, nebo naopak vůbec.
- `span`: gtm
- `h3`: V GTM publikuje kdokoli
- `div`: Agentura, PPC specialista i vývojář – nikdo neví, co se v které verzi změnilo, a starých tagů přibývá.
- `span`: vývoj
- `h3`: Web dělá agentura, za data neodpovídá nikdo
- `div`: Vývojáři řeší funkce, marketing kampaně a měření mezi nimi padá pokaždé, když se něco mění.

### [sekce] Co hlídáme: tři moduly, které lze kombinovat
- `p`: [ moduly ]
- `h2`: Co hlídáme: tři moduly, které lze kombinovat
- `p`: Modul A je základ služby, moduly B a C přidáme podle toho, kdo web vyvíjí a jak často se mění.
- `span`: modul A · základ
- `h3`: Hlídání měření
- `div`: Funguje na jakékoli platformě, protože testujeme výsledný web v prohlížeči a data v GA4.
- `li`: test produktu, košíku, objednávky a formuláře po nasazení i denně
- `li`: denní srovnání událostí s průměrem a s objednávkami v e-shopu
- `li`: kontrola souhlasu měsíčně a po každé změně cookie lišty
- `li`: pořádek v GTM, měsíční report a drobné úpravy měření
- `span`: modul B
- `h3`: Technická správa webu
- `div`: Aktualizace a údržba vždy s kontrolou měření, rozsah domluvíme podle platformy a hostingu.
- `li`: aktualizace nejdřív na testovacím prostředí, pak v produkci
- `li`: pravidelné zálohy, hlídání dostupnosti, certifikátu a domény
- `li`: bezpečnostní hlavičky v souladu s tagy na webu
- `li`: Core Web Vitals a výkonnostní rozpočet každý měsíc
- `span`: modul C
- `h3`: Release partner
- `div`: Pro firmy s vlastním nebo externím vývojem.
- `li`: release checklist pro vývojáře a kontrola na stagingu
- `li`: regresní test měření po každém nasazení
- `li`: zadání datové vrstvy pro nové funkce dřív, než vývoj začne
- `li`: konzultace pro vývojáře v dohodnutém rozsahu

### [sekce] Jak hlídání funguje: od releasu po report
- `p`: [ smyčka ]
- `h2`: Jak hlídání funguje: od releasu po report
- `p`: Hlídání má dvě vrstvy. Testy v prohlížeči zachytí chybu hned po nasazení, ještě než se projeví v datech, a kontrola dat odhalí to, co testy nepokryjí – třeba chybu jen na některém zařízení nebo v jiné jazykové verzi.
- `span`: release
- `li`: vývojáři nebo agentura
- `li`: release checklist a test na stagingu
- `li`: nasazení do produkce
- `span`: test po nasazení
- `li`: produkt → košík → objednávka
- `li`: formulář → lead
- `li`: datová vrstva, tagy a souhlas
- `p`: když něco chybí, přijde alert
- `span`: denní kontrola dat
- `li`: GA4 nebo BigQuery proti průměru
- `li`: GA4 proti objednávkám v e-shopu
- `p`: při anomálii přijde alert
- `span`: alert a oprava
- `li`: alert e-mailem nebo do Slacku
- `li`: incident podle priority v SLA
- `li`: oprava: GTM my, kód vývojáři
- `li`: ověření a záznam do reportu
- `figcaption`: Smyčka hlídání měření: po releasu projde automatický test klíčové cesty a denní kontrola porovná data s průměrem a s objednávkami v e-shopu. Když něco nesedí, přijde alert, opravu ověříme a zapíšeme do měsíčního reportu.
- `li`: Alert ještě týž den. Přijde e-mailem nebo do Slacku, jakmile test nebo kontrola dat najde chybu.
- `li`: Testy hlídají i souhlas. Ověří, že web spouští tagy jen po souhlasu návštěvníka.
- `li`: Každý incident má záznam. Skončí v logu a v měsíčním reportu kvality dat.

### [sekce] Čím se lišíme od běžné správy webu
- `p`: [ srovnání ]
- `h2`: Čím se lišíme od běžné správy webu
- `p`: Běžná správa se stará, aby web běžel a byl aktuální, my k tomu hlídáme, aby dál správně měřil. Texty, grafiku a nové funkce neděláme, takže správu u studia si můžete nechat a vzít si od nás jen hlídání měření.
- `h3`: Typická správa webu u studia
- `li`: aktualizace systému a pluginů, zálohy
- `li`: obvykle i monitoring dostupnosti a certifikátu
- `li`: úpravy textů, obrázků a nových stránek
- `li`: grafika a vývoj nových funkcí
- `li`: měsíčně výkaz odpracovaných hodin
- `h3`: Správa webu a měření u nás
- `li`: aktualizace s testem na stagingu a kontrolou měření
- `li`: automatická kontrola tagů a datové vrstvy po každém releasu
- `li`: kontrola souhlasu měsíčně a po každé změně lišty
- `li`: pořádek v GTM, hlídání anomálií a release checklist
- `li`: report kvality dat s doporučením místo výkazu hodin
- `p`: Popisujeme typickou nabídku, konkrétní studia se liší.

### [sekce] Jak začínáme
- `p`: [ postup ]
- `h2`: Jak začínáme
- `p`: Hlídat má smysl jen funkční měření, proto začínáme vstupní kontrolou – pokud jsme vám měření nasazovali my, je kratší. Chcete nejdřív jen jednorázovou kontrolu? Začněte auditem měření.
- `a`: auditem měření
- `li`: 01 Audit Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací. od vás: přístupy pro čtení
- `h3`: Audit
- `p`: Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.
- `li`: 02 Měřicí plán Byznys cíle převedeme na události, parametry a pravidla pojmenování. od vás: hodinová schůzka a schválení plánu
- `h3`: Měřicí plán
- `p`: Byznys cíle převedeme na události, parametry a pravidla pojmenování.
- `li`: 03 Implementace Opravíme chyby ze vstupní kontroly a nastavíme hlídání: automatické testy, alerty, vlastní statistiky v GA4 a notifikace z GTM. Na jedné schůzce domluvíme release proces, kontakty a priority chyb. od vás: součinnost vývojářů, testovací režim objednávky a kanál pro alerty
- `h3`: Implementace
- `p`: Opravíme chyby ze vstupní kontroly a nastavíme hlídání: automatické testy, alerty, vlastní statistiky v GA4 a notifikace z GTM. Na jedné schůzce domluvíme release proces, kontakty a priority chyb.
- `li`: 04 Validace Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM. od vás: testovací objednávka a export z administrace
- `h3`: Validace
- `p`: Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.
- `li`: 05 Předání a podpora Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu. od vás: předávací schůzka
- `h3`: Předání a podpora
- `p`: Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

### [sekce] Release checklist a SLA
- `p`: [ release a SLA ]
- `h2`: Release checklist a SLA
- `p`: Vývojáři dostanou release checklist o dvanácti kontrolách – šest před nasazením a šest po něm, většinu z nich hlídá automatický test. Priority, reakční doby a cíle řešení sepíšeme do smlouvy.
- `h3`: Pět kontrol z dvanácti
- `li`: Datová vrstva na testovacím prostředí odpovídá specifikaci.
- `li`: Web načítá GTM a konzole neukazuje chyby JavaScriptu.
- `li`: Před souhlasem web nespustí žádný marketingový tag.
- `li`: Testovací nákup nebo formulář v produkci dorazí do GA4.
- `li`: Počty klíčových událostí první den po releasu odpovídají průměru.
- `p`: Celý checklist upravíme na míru platformě a release procesu a dostanete ho jako šablonu v Markdownu, Confluence nebo Jiře. Všech dvanáct kontrol najdete v Technických detailech u častých otázek.
- `a`: častých otázek
- `caption`: Priority incidentů ve smlouvě
- `th`: Priorita
- `th`: Příklady
- `th`: P1 – kritická
- `td`: web neměří nákupy ani leady, tagy běží bez souhlasu, u modulu B i výpadek webu
- `th`: P2 – závažná
- `td`: jeden reklamní systém nepřijímá konverze, chybí parametry nebo nefunguje část formulářů
- `th`: P3 – běžná
- `td`: nová událost, úprava konverze, drobné nesrovnalosti v datech
- `p`: Opravy v kódu webu závisejí na vývojářích – garantujeme diagnostiku, přesné zadání a ověření po nasazení.

### [sekce] Co dostáváte každý měsíc
- `p`: [ report ]
- `h2`: Co dostáváte každý měsíc
- `p`: Report kvality dat a třicetiminutový hovor nad ním. Report není výkaz odpracovaných hodin – odpovídá na otázku, jestli se můžete na data spolehnout, a co udělat příští měsíc. Jednou za čtvrtletí upravíme testy a hranice upozornění.
- `b`: 86,4 %
- `span`: shoda objednávek v GA4 a e-shopu, cíl aspoň 85 %
- `b`: 71 %
- `span`: relací se souhlasem, po změně lišty o dva procentní body méně
- `b`: 99,98 %
- `span`: dostupnost webu za měsíc
- `p`: Ukázková data z reportu za září 2026.
- `li`: incidenty: co se stalo, jak rychle jsme reagovali, příčina a prevence
- `li`: shoda dat: GA4 proti e-shopu nebo CRM a reklamní systémy proti GA4
- `li`: změny: verze webu a GTM, nové cookies a domény a úklid tagů
- `li`: Core Web Vitals podle šablon a doporučení na další měsíc

### [sekce] Časté otázky
- `p`: [ FAQ ]
- `h2`: Časté otázky
- `p`: Nenašli jste odpověď? Napište nám.
- `a`: Napište nám
- `summary`: Technické detaily: celý release checklist a co testy kontrolují
- `h3`: Před nasazením, na testovacím prostředí
- `li`: Vývojáři nám dají vědět předem, když release mění šablony, které odesílají purchase, generate_lead nebo jinou klíčovou událost.
- `li`: Datová vrstva odpovídá specifikaci: názvy událostí, povinné parametry, datové typy.
- `li`: Web načítá kontejner GTM a konzole neukazuje chyby JavaScriptu.
- `li`: Cookie lišta má výchozí stav souhlasu „denied“, po volbě ho aktualizuje a před souhlasem nespustí žádný marketingový tag.
- `li`: Formuláře validují vstup, odeslání funguje a generate_lead neposílá osobní údaje v čitelné podobě.
- `li`: Nové skripty třetích stran prošly schválením vývoje i naším: výkon, souhlas, bezpečnostní hlavičky.
- `h3`: Po nasazení, v produkci
- `li`: Testovací nákup nebo formulář dorazil do GA4 – ověříme to v DebugView nebo v přehledu v reálném čase.
- `li`: Google Ads, Meta a Sklik přijímají konverze, u server-side kontrolujeme deduplikaci přes event_id.
- `li`: Změněné URL mají přesměrování a canonical a sitemap je aktuální.
- `li`: Core Web Vitals šablon v laboratorním testu nepřekračují výkonnostní rozpočet.
- `li`: Počty klíčových událostí v první hodině a první den odpovídají průměru.
- `li`: Release log obsahuje verzi webu a GTM a kdo co změnil.
- `p`: Automatický test projde v headless prohlížeči produkt, košík, objednávku v testovacím režimu a formulář. Ověří, že web načte GTM, že datová vrstva obsahuje očekávané události a parametry, třeba purchase s transaction_id, value a items, a že tagy běží jen po souhlasu.
- `p`: U souhlasu kontrolujeme výchozí stav a aktualizaci signálů ad_storage, analytics_storage, ad_user_data a ad_personalization. Jako levnou první vrstvu hlídání dat nastavíme vlastní statistiky v GA4 s upozorněním e-mailem – Google jich dovoluje až padesát na property.
- `summary`: Co dělá správce webu a čím se liší vaše správa?
- `div`: Správce webu se stará, aby web technicky fungoval: aktualizuje systém a doplňky, zálohuje, hlídá dostupnost a bezpečnost a často upravuje i obsah. Naše správa míří jinam – obsah a grafiku neděláme, zato hlídáme, že po každé změně webu dál fungují měřicí kódy, datová vrstva a souhlas s cookies. Nové stránky a funkce zkontrolujeme před nasazením i po něm, aby správně měřily.
- `summary`: Kolik stojí správa webu a z čeho se skládá cena?
- `div`: Ceník neuvádíme, protože weby se liší víc než ceníkové balíčky – po vstupní kontrole dostanete pevnou měsíční částku. Rozhoduje počet webů, domén a jazykových verzí, platforma, kolik cest a konverzí hlídáme, jak často vydáváte nové verze, zvolené moduly, úroveň SLA a rozsah drobných úprav měření. Nástroje a infrastrukturu na vašich účtech, třeba hosting, Google Cloud nebo BigQuery, platíte přímo dodavatelům.
- `summary`: Jak rychle hlídání začne a co od vás potřebujeme?
- `div`: Začínáme vstupní kontrolou a opravou chyb, které najde, takže délka záleží hlavně na jejich rozsahu. Pokud jsme vám měření nasazovali my, je vstupní kontrola kratší, protože výchozí stav známe. Potřebujeme přístupy do GA4, GTM, Search Console a reklamních systémů, testovací prostředí a testovací režim objednávky.
- `summary`: Web nám vyvíjí jiná agentura. Jak spolupráce funguje?
- `div`: Agentura dál vyvíjí, my jí dodáme release checklist a zadání datové vrstvy pro nové funkce a po každém nasazení zkontrolujeme měření. Když najdeme chybu v kódu, pošleme přesný popis s reprodukcí a po opravě ji ověříme. V GTM nastavíme pravidla, kdo smí publikovat, aby se práce nepřekrývala.
- `summary`: Hlídáte i cookie lištu a souhlas?
- `div`: Ano, technicky. Měsíčně a po každé změně lišty kontrolujeme výchozí stav Consent Mode a jeho aktualizaci po volbě návštěvníka, marketingové tagy před souhlasem a nové cookies nebo domény třetích stran. Nejsme ale advokátní kancelář – soulad textů lišty a zásad s právem posoudí váš právník a nastavení lišty řešíme ve službě Cookie lišta a Consent Mode.
- `a`: Cookie lišta a Consent Mode
- `summary`: Komu patří účty a co se stane po ukončení spolupráce?
- `div`: Všechny účty – GA4, GTM, Search Console, reklamní systémy i Google Cloud – zůstávají vaše a my v nich máme jen uživatelské přístupy s potřebnou rolí. Testy a skripty pro hlídání běží na vaší infrastruktuře, nebo je při ukončení předáme. Po skončení si přístupy odeberete a dostanete předávací balíček: dokumentaci, release checklist, nastavení upozornění a poslední report.

### [sekce] 
- `p`: [ pokračujte ]
- `a`: Audit měření zjistíme, kde data utíkají
- `a`: Technický audit webu rychlost, tagy a technické SEO
- `a`: Google Tag Manager pořádek v tazích a verzích

### [sekce] Ať měření po dalším releasu nepřestane fungovat
- `p`: [ Kontakt ]
- `h2`: Ať měření po dalším releasu nepřestane fungovat
- `p`: Na úvodní třicetiminutové konzultaci zdarma zjistíme, kdo web vyvíjí, jak často vydáváte nové verze a co je potřeba hlídat. Pak navrhneme rozsah správy.
- `li`: E-mail one@datalayer.cz
- `a`: one@datalayer.cz
- `span`: VN
- `span`: Odpovídá Vít Novotný
- `span`: obvykle do jednoho pracovního dne
- `li`: Do jednoho pracovního dne navrhneme termín.
- `li`: Na třicet minut projdeme web a cíle.
- `li`: Do dvou pracovních dnů po konzultaci dostanete shrnutí a návrh dalšího kroku.

### [sekce] 
- `nav@aria-label`: Drobečková navigace

### [sekce] Release checklist a SLA
- `div@aria-label`: Priority incidentů ve smlouvě
- `td@data-label`: Příklady
- `td@data-label`: Příklady
- `td@data-label`: Příklady

### [sekce] Ať měření po dalším releasu nepřestane fungovat
- `ol@aria-label`: Co se stane po odeslání