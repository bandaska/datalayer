# datalayer.cz — SEO, UX a návrh textů celého webu

**Audit předprodukce:** https://datalayer.vitnovotny.cz/  
**Datum:** 2. listopadu 2026  
**Účel:** podklad pro úpravu obsahu a rozvržení před ostrým spuštěním.  
**Neměnit:** úvodní hero obrázek s diagramem na homepage. Jeho obsah, vzhled ani animaci tento návrh neupravuje. Text vedle něj upravit lze.

> Poznámka k uložení: dokument dodal klient 2. listopadu 2026 ve zprávě. Dorazily kapitoly 1–10;
> kapitoly ke stránkám E-shopy, B2B, O nás, Kontakt a právním stránkám v podkladu chybí.

## 1. Hlavní závěr

Web má dobrý odborný základ a rozumně zvolená témata služeb. Slabší je způsob, jakým nabídku vysvětluje: dlouhé technické úvody, opakované problémové scénáře, chybějící konkrétní lidé a několik příliš silných slibů. Návštěvník se dozví hodně o nástrojích, méně o tom, co si přesně objednává, kdo za práci odpovídá a jak bude spolupráce probíhat.

Souhlasím se směrem požadované změny. Samotné „Poznáváte se?“ není pro český trh automaticky špatně; bez uživatelského výzkumu nelze prohlásit, že takový způsob oslovení v ČR nefunguje. Na tomto webu však osmkrát opakuje stejnou prodejní šablonu a spolu s formulacemi „neprůstřelné“, „utíkají data“ a „nikdo neví“ působí méně věcně, než odpovídá odborné službě. Doporučuji klidný, konkrétní jazyk: situace → postup → výstup → další krok.

Největší přínos budou mít tyto změny:

1. **Vyjasnit nabídku a její hranice.** Audit zjišťuje stav; implementace nastavuje měření; konverze řeší předání a vyhodnocení v reklamních systémech; BigQuery propojuje data. E-shopy a B2B slouží jako rozcestníky podle typu firmy.
2. **Odstranit rozpory v příslibech.** Titulky slibují shodu s tržbami, FAQ vysvětluje, proč se čísla liší. Slibovat ověření, dokumentaci a vysvětlení rozdílů, nikoli totožná čísla ve všech systémech.
3. **Ukázat konkrétního dodavatele.** Na stránce O nás nyní chybí lidé, role i skutečné reference. V informacích o osobních údajích není správce identifikován konkrétním názvem.
4. **Zkrátit úvody a přesunout technické detaily níž.** Na mobilu úvod B2B nebo BigQuery zabírá téměř celou první obrazovku.
5. **Sjednotit FAQ a výzvy k akci.** Otázky formulovat neutrálně; odpovědi píše datalayer.cz. Nevyvolávat dojem, že tlačítko provede automatickou kontrolu nebo závaznou objednávku, když pouze posune na kontaktní formulář.

## 2. Rozsah, ověření a význam priorit

### Co bylo zkontrolováno

- Všech **13 obsahových URL** z navigace a XML sitemapy, jejich celé HTML texty včetně sbalených FAQ a všech šesti panelů e-shopových platforem.
- Titulky, meta descriptions, canonical, nadpisy, interní odkazy, strukturovaná data, HTTP odpovědi, robots.txt a sitemap.xml.
- Vizuální zobrazení všech 13 stránek; podrobnější kontrola společných šablon a interakcí. Mobilní náhled o šířce 390 px pro e-shopy, B2B, BigQuery a kontakt; desktopový náhled přibližně 1086 px.
- Otevření FAQ, mobilního menu a podmenu služeb, přepnutí platformy, odmítnutí cookies a opětovné otevření jejich nastavení.
- Validace prázdného kontaktního formuláře. Žádná skutečná poptávka nebyla odeslána.
- Ochrana bez přihlášení vrací 401; neexistující URL vrací skutečné 404; testovaná adresa služby s koncovým lomítkem přesměruje 301 na variantu bez lomítka.

### Co z tohoto auditu nelze tvrdit

Nejde o měření konverzního poměru, výzkum českých zákazníků ani analýzu hledanosti. Nebyla k dispozici Search Console, reklamní data, analytika ani produkční konfigurace. Nebyl proveden Lighthouse, měření Core Web Vitals, úplný audit přístupnosti nebo síťový audit všech měřicích tagů. Zobrazení formuláře a jeho validace neprokazují doručení zprávy. Technické a právní texty musí odpovídat skutečnému provozu; dostupný web nedokládá všechny popisované datové toky.

### Priority

| Priorita | Význam |
|---|---|
| P0 | Vyřešit před ostrým spuštěním: identita provozovatele, rozpory o datech a souhlasu, produkční indexace. |
| P1 | Hlavní obsahová a UX úprava: úvody, struktura služeb, FAQ, kontakty, doložení odbornosti. |
| P2 | Následné zlepšení: skutečné případové studie, doplňující odborný obsah, optimalizace podle dat. |

Texty v uvozovkách nebo citacích níže jsou návrhy k vložení. Pokyny mimo ně jsou pro realizátora. **Zástupné údaje `[DOPLNIT: …]` se nesmějí publikovat.** Týkají se faktů, které na webu nejsou ověřitelné; nenahrazovat je smyšlenými zkušenostmi, cenami či referencemi. Ostatní navržená textace je použitelná po potvrzení, že odpovídá reálně nabízené službě.

## 3. Společné úpravy webu

### G01 — Hlas značky a čeština · P1

Ponechat „my“ jako hlas značky a malé „vy/váš“ při oslovení. Nezaměňovat značku za doložený tým: počet lidí a jejich role musí vysvětlit stránka O datalayer.cz. Pokud jde výhradně o samostatného konzultanta, je možné převést celý web do jednotného čísla; nemíchat oba způsoby.

| Dnešní formulace | Náhrada / pravidlo |
|---|---|
| „Poznáváte se?“ | Konkrétní nadpis podle služby: „Kdy má audit smysl“, „Kdy upravit nastavení GA4 a GTM“ apod. Přesné nadpisy jsou níže. |
| „Stavíme neprůstřelné datové základy pro váš růst.“ | „Webová analytika pro e-shopy a B2B firmy“ |
| „Zjistíme, kde vám utíkají data“ | „Proberme vaše měření“ |
| „Zjistíme, kde vašemu e-shopu utíkají objednávky“ | „Proberme měření vašeho e-shopu“ — chybějící záznam objednávky neznamená ztracenou objednávku. |
| „Čísla sedí s tržbami“ | „Porovnáme data s objednávkami a vysvětlíme rozdíly.“ |
| „dashboard, kterému věří i finanční ředitel“ | „report s dohodnutými definicemi tržeb, nákladů a marže“ |
| „nikdo neví“, „vždy“, „každý rozdíl“, „žádná konverze dvakrát“ | Popis konkrétní kontroly a rozsahu; absolutní tvrzení používat jen tam, kde je lze garantovat. |
| „lead generation“, „release“, „property“, „backend“ | V hlavním textu „získávání poptávek“, „nasazení změn“, „služba GA4“, „serverová část systému“. Odborné názvy ponechat v technických detailech. |

Zkratky GA4, GTM a CRM ponechat, při prvním použití na stránce stručně vysvětlit. Nevypisovat v každém úvodu kompletní seznam všech technologií. Nepopisovat předchozí agentury jako zdroj „nánosů“ ani vlastní řešení jako něco, co „umí nic“.

**Pozor na zdánlivou chybu:** „Data Studio (dříve Looker Studio)“ je k datu auditu aktuální pojmenování. Google název změnil zpět v dubnu 2026. Neopravovat jej obráceně podle starších znalostí. [Dokumentace Google Cloud](https://docs.cloud.google.com/data-studio/welcome)

### G02 — Navigace, orientace a propojení · P1

Hlavní navigace: **Služby | Pro e-shopy | Pro B2B firmy | O datalayer.cz | Domluvit konzultaci**. Poslední položka zůstává hlavním tlačítkem; na obsahových stránkách vede na místní `#kontakt`, na právních stránkách na `/kontakt`.

Rozbalovací nabídka Služby v doporučeném pořadí:

1. Audit měření → `/sluzby/audit-mereni`
2. Nastavení GA4 a GTM → `/sluzby/implementace-ga4`
3. Cookie lišta a Consent Mode → `/sluzby/cookie-lista-consent-mode`
4. Měření konverzí → `/sluzby/mereni-konverzi`
5. Server-side měření → `/sluzby/server-side-tracking`
6. BigQuery a reporting → `/sluzby/bigquery`

Existující URL ponechat. Český text odkazu lze změnit bez změny adresy. Není důvod vyrábět další slabé stránky pro každé synonymum služby.

Nad H1 podstránek přidat drobečkovou navigaci **Úvod / [název stránky]**; odpovídá současné dvouúrovňové struktuře `BreadcrumbList`. Nevkládat neklikací „Služby“ jako odkaz na neexistující rozcestník. Na dlouhých stránkách služeb pod úvod přidat krátké kotvy: **Rozsah služby · Výstupy · Průběh · Cena a dotazy**.

Před závěrečným kontaktem vložit nejvýše dva až tři související odkazy s větou vysvětlující návaznost. Nemají opakovat celou patičku. Konkrétní cíle jsou u jednotlivých stránek.

### G03 — Opakovaná struktura služeb · P1

Na šesti stránkách služeb používat toto pořadí:

1. Krátký úvod: H1, dvě až tři věty, jedno hlavní CTA.
2. Kdy je služba vhodná: tři až čtyři věcné situace.
3. Rozsah a výstupy: co klient převezme, co vyžaduje jeho součinnost.
4. Ukázka výstupu nebo vysvětlení řešení. Případovou studii pouze se skutečnými podklady.
5. Průběh spolupráce: tři až čtyři kroky.
6. Cena a praktické dotazy.
7. Související služby a kontakt.

Základní společný blok průběhu, vložit po výstupech či ukázce:

> **Jak probíhá spolupráce**  
> **1. Upřesnění zadání.** Projdeme web, používané nástroje a otázky, které potřebujete vyřešit.  
> **2. Nabídka a součinnost.** Dostanete rozsah práce, cenu, výstupy a seznam potřebných přístupů. Domluvíme také zapojení vývojáře nebo agentury.  
> **3. Realizace a kontrola.** Provedeme dohodnuté práce a ověříme je na testovacích scénářích.  
> **4. Předání.** Projdeme výsledky a předáme dokumentaci. Další správu nebo monitoring sjednáme samostatně.

U auditu v kroku 3 použít „Provedeme kontrolu a připravíme nálezy s prioritami. Změny v měření jsou samostatně dohodnutá práce.“ U BigQuery použít konkrétní průběh uvedený v kapitole 10.

### G04 — FAQ a jednoznačný mluvčí · P1

Nadpis na službách **„Cena a praktické dotazy“**, na homepage **„Praktické informace o spolupráci“**. Otázky mají neutrální perspektivu: „Jaké přístupy jsou potřeba?“ místo „Co od nás budete potřebovat?“. Odpovídá dodavatel, tedy datalayer.cz. Vynechat zákaznické „my/náš“ v otázkách a neurčité „vy“ označující dodavatele.

Není potřeba každou odpověď podepisovat. Identitu musí vysvětlovat web jako celek. Odpověď začíná přímým sdělením, následují dvě až čtyři věty. Rozsáhlé API detaily a paragrafy přesunout z FAQ do technických poznámek nebo odkazovaných zdrojů.

Stávající rozbalování funguje. Zachovat skutečná tlačítka, rozbalený stav pro asistivní technologie a ovládání klávesnicí. Obsah musí zůstat dostupný v HTML. Přesné nové FAQ pro všech devět současných FAQ sekcí jsou v kapitolách stránek.

### G05 — Tlačítka a formulář · P1

- Odstranit dekorativní hranaté závorky kolem textů tlačítek. Značce mohou připomínat kód, ale návštěvníkovi nepřidávají informaci.
- „Objednat audit měření“ → **„Poptat audit měření“**. Formulář objednávku neuzavírá.
- „Zkontrolovat můj web“ → **„Probrat nastavení cookies“**; „Zkontrolovat moje konverze“ → **„Probrat měření konverzí“**. Kliknutí nespouští automatický test.
- Nad formulář vložit „Stačí stručně popsat situaci. Přístupy k účtům domluvíme až podle rozsahu práce.“

Společná pole v tomto pořadí:

| Pole | Popisek | Nápověda / chování |
|---|---|---|
| Jméno | „Jméno a příjmení“ | Povinné; alternativně lze po obchodním rozhodnutí ponechat pouze jméno. |
| E-mail | „Pracovní e-mail“ | Povinné; nezakazovat běžné osobní domény, podnikatel je může používat. |
| Web | „Adresa webu (nepovinné)“ | Nové skutečně viditelné pole; příklad „https://www.vasweb.cz“. |
| Telefon | „Telefon (nepovinné)“ | Zachovat `type=tel` a automatické doplňování. |
| Zpráva | „Co potřebujete vyřešit?“ | Povinné; nápověda mimo placeholder: „Například rozdíly v objednávkách, nové měření nebo propojení s CRM.“ |

**Implementační detail:** současné pole `website` s popiskem „Web firmy“ je skrytá ochrana proti spamu, nikoli dostupné pole pro návštěvníka. Nové pole pro URL musí mít jiný název, např. `web_url`; skrytou ochranu nepřeměňovat bez úpravy validace. V současném formuláři je adresa webu požadována pouze uvnitř nápovědy zprávy.

Tlačítko **„Odeslat poptávku“**. Text pod formulářem:

> Údaje z formuláře použijeme k vyřízení vaší poptávky. Informace o dalším zpracování najdete na stránce [Zpracování osobních údajů](/zpracovani-osobnich-udaju).

Současné „Údaje použijeme jen k odpovědi“ je v napětí s popsaným použitím otisku kontaktních údajů pro marketing. Odkaz nenahrazuje jasné vysvětlení dalších účelů na stránce ochrany údajů.

Hlášky:

- Jméno: „Vyplňte prosím jméno.“
- E-mail: „Zadejte prosím platný e-mail, na který vám můžeme odpovědět.“
- Zpráva: „Napište prosím stručně, co potřebujete vyřešit.“
- Odesílání: „Odesíláme poptávku…“
- Úspěch: „Děkujeme, poptávku jsme přijali. Ozveme se na uvedený e-mail.“
- Chyba: „Poptávku se nepodařilo odeslat. Zkuste to prosím znovu, nebo nám napište na one@datalayer.cz.“

Neslibovat odpověď do 24 hodin bez potvrzené kapacity. Po chybě zachovat vyplněný obsah. Chyby spojit s poli, úspěch oznámit čtečkám a měřit až po potvrzení serverem. Současný přesun fokusu na první chybné pole funguje; zachovat.

### G06 — Rozvržení a mobil · P1

- Na službách zkrátit úvod na přibližně 45–70 slov. Na B2B dnes úvod vysvětluje zároveň definici leadu, proces i technologie; rozdělit tyto informace do samostatných sekcí.
- Sjednotit boční odsazení. Při kontrolovaném desktopovém zobrazení mají podstránky obsah téměř u levého okraje, zatímco hlavička a homepage pracují s výraznějšími okraji. Použít společný kontejner a 24–32 px vnitřního odsazení; na telefonu přibližně 16–20 px.
- Na desktopu zvažovat dvě až tři karty v řádku místo čtyř u dlouhých textů. Zachovat jasné H3 a krátké odstavce; zbytečně nenatahovat výšku karet.
- Dekorativní velké ikony v úvodu služeb zmenšit nebo nahradit skutečnou ukázkou výstupu. **Netýká se to chráněného diagramu na homepage.**
- Kontakt a právní stránky potřebují kompaktní záhlaví. Na `/cookies` je velká mezera mezi tlačítkem nastavení a prvním odstavcem; na `/kontakt` mobilní hero zbytečně oddaluje formulář.
- Mobilní menu i přepínače platforem při kontrole fungovaly. Zachovat. Spodní lišta „Zavolat / Napsat“ se objevuje při scrollování; zajistit dostatečné spodní odsazení obsahu a nekřížení s cookie panelem nebo klávesnicí.
- Pro textové odkazy a malé tyrkysové prvky ověřit kontrast na světlém pozadí. Z pouhého snímku nelze označit číselné nesplnění kontrastu.
- Při implementaci kontrolovat 320, 390, 768 a 1440 px; žádné vodorovné přetékání celé stránky, viditelný fokus a klikací plochy pohodlné pro prst.

### G07 — Patička a důvěryhodnost · P0/P1

Zachovat služby, řešení, kontakty a nastavení cookies. Sloupec „O nás“ přejmenovat na **„datalayer.cz“**, pod něj „O datalayer.cz“ a „Kontakt“. Doplnit konkrétního provozovatele:

> Provozovatel: [DOPLNIT: celé obchodní jméno / jméno podnikatele], IČO [DOPLNIT], [DOPLNIT: sídlo].

Stejné údaje používat na kontaktu, v ochraně osobních údajů a v odpovídajících strukturovaných datech. Jméno vlastníka neodvozovat z předprodukční domény.

## 4. Úvodní stránka — `/`

**Úloha:** během několika vteřin vysvětlit nabídku a nasměrovat návštěvníka podle potřeby.  
**Priorita:** P1.  
**Pořadí:** hero → výběr služby → přístup k práci → konkrétní důkaz → průběh → FAQ → kontakt.

### H01 — Hero

Nahradit H1 a text vedle stávajícího diagramu:

> # Webová analytika pro e-shopy a B2B firmy
>
> Nastavíme a ověříme měření návštěvnosti, objednávek a poptávek. Propojíme data z webu, reklamních systémů a firemních nástrojů, abyste měli podklady pro vyhodnocení marketingu. Dostanete funkční nastavení, testy a dokumentaci.

Hlavní CTA: **„Domluvit konzultaci“** → `#kontakt`. Sekundární textový odkaz **„Vybrat službu“** → nová kotva `#sluzby`.

Diagram ponechat beze změny. Nedoplňovat přes něj text ani jej nahrazovat jiným vizuálem.

### H02 — Nahradit „Šest situací, se kterými za námi klienti chodí nejčastěji“

Nová sekce `#sluzby` s H2 **„S čím vám pomůžeme“**. Dnešní karty předjímají diagnózu a používají nedoložené konkrétní počty; nahradit je rozcestníkem:

| H3 karty | Přesný text | Odkaz |
|---|---|---|
| Audit měření | „Prověříme současné nastavení, popíšeme chyby a připravíme pořadí oprav.“ | „Co zahrnuje audit“ → `/sluzby/audit-mereni` |
| Nastavení GA4 a GTM | „Navrhneme měřicí plán, nastavíme události a otestujeme předávání dat.“ | „Nastavení analytiky“ → `/sluzby/implementace-ga4` |
| Cookie lišta a Consent Mode | „Propojíme volbu návštěvníka s měřicími nástroji a ověříme jejich chování.“ | „Nastavení souhlasů“ → `/sluzby/cookie-lista-consent-mode` |
| Měření konverzí | „Nastavíme objednávky a poptávky pro Google Ads, Metu, Sklik a další systémy.“ | „Měření reklamních konverzí“ → `/sluzby/mereni-konverzi` |
| Server-side měření | „Navrhneme předávání událostí přes server včetně správy souhlasů a provozu.“ | „Možnosti server-side měření“ → `/sluzby/server-side-tracking` |
| BigQuery a reporting | „Spojíme marketingová a firemní data do přehledů s dohodnutými metrikami.“ | „Datový sklad a reporty“ → `/sluzby/bigquery` |

Pod kartami dvě jednoduché volby: **„Řešení pro e-shopy“** a **„Řešení pro B2B firmy“** s odkazy na stávající stránky řešení.

### H03 — Nový blok za službami

> ## Co je součástí naší práce
>
> **Účty pod vaší správou.** Měření nastavujeme v účtech vaší firmy. Přístupy nám přidělujete podle rozsahu práce.
>
> **Ověřené scénáře.** Kontrolujeme nákup, formuláře a souhlasy podle dohodnutého testovacího plánu.
>
> **Dokumentace k předání.** Získáte popis nastavení a změn, na který může navázat váš tým nebo další dodavatel.

Za něj vložit jednu skutečnou případovou studii nebo konkrétní ukázku výstupu. Dokud není doložená reference, použít interní odkaz **„Prohlédnout modelovou ukázku auditu“** → `/sluzby/audit-mereni#ukazka-reportu`. Jasně označit, že jde o modelový příklad, nikoli klientský výsledek.

Poté vložit stručný blok průběhu G03.

### H04 — Nahradit celé současné FAQ „Než se ozvete“

**Je spolupráce vhodná i pro menší e-shop?**  
Ano. Rozsah navrhneme podle používaných nástrojů a potřeb e-shopu. Často stačí upravit základní měření; server-side řešení nebo datový sklad mají smysl až při konkrétním využití.

**Komu zůstávají účty a data?**  
Účty a projekty zůstávají pod správou vaší firmy. My pracujeme s přidělenými oprávněními. Součástí předání je dokumentace nastavení.

**Jak se stanovuje cena?**  
Podle rozsahu práce, počtu systémů a stavu současného nastavení. Před zahájením dostanete nabídku s cenou a seznamem výstupů. Případný provoz cloudu a licence uvádíme zvlášť.

**Lze zapojit stávajícího vývojáře nebo agenturu?**  
Ano. Domluvíme rozdělení práce, připravíme potřebné zadání a společně ověříme výsledek.

### H05 — Závěrečný kontakt

H2 **„Proberme vaše měření“**. Odstavec:

> Napište adresu webu a stručně popište, co potřebujete vyřešit. Na úvodní konzultaci upřesníme zadání a navrhneme další postup. Konzultace je nezávazná a zdarma.

Použít společný formulář G05. Netvrdit, že už při hovoru bez přístupů proběhne plnohodnotné prověření GA4.

## 5. Audit měření — `/sluzby/audit-mereni`

**Úloha:** prodat kontrolu stávajícího stavu a plán oprav, jasně oddělit nezávazný kontakt od placeného auditu. **P1.**

### A01 — Hero

H1 **„Audit webové analytiky a měření konverzí“**.

> Prověříme GA4, Google Tag Manager, cookie lištu a měření reklamních konverzí. Porovnáme dostupná data s objednávkami nebo CRM a rozlišíme chyby nastavení od přirozených rozdílů mezi systémy. Dostanete nálezy s prioritami a plán oprav.

CTA **„Poptat audit měření“** → `#kontakt`; vedle textový odkaz **„Ukázka výstupu auditu“** → `#ukazka-reportu`.

### A02 — Sekce místo „Poznáváte se?“

H2 **„Kdy má audit smysl“**. Úvod „Při nejasných rozdílech v datech i před změnou webu nebo dodavatele.“ Karty:

- **Rozdíly v objednávkách a konverzích.** „Potřebujete zjistit, co způsobuje rozdíl mezi administrací, GA4 a reklamními systémy.“
- **Změna cookie lišty.** „Po úpravě souhlasů se změnilo měření a chcete ověřit, zda nástroje reagují správně.“
- **Převzetí měření.** „Při změně dodavatele potřebujete přehled účtů, přístupů a nastavení.“
- **Nový web nebo migrace.** „Chcete znát stav měření před změnou a připravit kontrolu po spuštění.“

### A03 — „Co od nás dostanete“

Zachovat pět výstupů, upravit jejich texty:

1. **Shrnutí výsledků:** „Přehled hlavních zjištění pro marketing a vedení.“
2. **Seznam nálezů a plán oprav:** „U každého nálezu popis, důkaz, dopad a priorita. Doplníme doporučený postup a potřebnou součinnost.“
3. **Porovnání dostupných dat:** „Srovnání za dohodnuté období a vysvětlení zjištěných rozdílů. Neověřitelné příčiny označíme.“
4. **Kontrola GTM a testovací protokol:** „Přehled prověřených tagů a výsledky dohodnutých scénářů nákupu, formulářů a souhlasů.“
5. **Společné projití výsledků:** „Vysvětlíme priority a navrhneme další postup pro váš tým, vývojáře nebo agenturu.“

Pod výstupy doplnit: **„Audit obsahuje kontrolu a doporučení. Samotné opravy sjednáváme samostatně.“**

### A04 — Opravit „Jak vypadá report z auditu“

Současný text slibuje výřez tabulky s důkazem, pracností a odpovědností, ale návštěvník vidí pouze karty problémů. Nahradit skutečnou malou tabulkou:

> **Modelová ukázka výstupu auditu**  
> Následující příklady jsou smyšlené a ukazují formát výstupu. Nejde o výsledky konkrétního klienta.

| Priorita | Nález | Jak byl ověřen | Doporučená oprava | Součinnost |
|---|---|---|---|---|
| Vysoká | Testovací nákup se po návratu z brány nezapsal do GA4. | Průchod testovací objednávkou a kontrola odeslané události. | Upravit spouštění nákupní události a zopakovat test. | Vývojář + analytik |
| Vysoká | Dvě primární akce Google Ads měří tentýž nákup. | Kontrola akcí a jejich využití v kampaních. | Domluvit hlavní zdroj konverze a upravit nastavení. | PPC specialista + analytik |
| Střední | Část tagů nemá popsaný účel ani vlastníka. | Inventura kontejneru GTM. | Prověřit využití a doplnit dokumentaci. | Marketing + analytik |

Nedoplňovat fiktivní procenta ztracených nákupů ani odhad hodin vydávaný za skutečný nález. Použít slovní priority místo nevysvětlených A/B/C.

### A05 — Průběh, FAQ a kontakt

Vložit auditní variantu G03. FAQ nahradit:

**Jak se stanovuje cena auditu?**  
Podle počtu webů, systémů a hloubky kontroly. Před zahájením dostanete nabídku s přesným rozsahem a výstupy. Úvodní konzultace je zdarma; nenahrazuje audit s přístupy a testováním.

**Jaké přístupy jsou potřeba?**  
Pro kontrolu obvykle stačí oprávnění pro čtení. Podle rozsahu si vyžádáme také export objednávek bez nepotřebných osobních údajů a domluvíme testovací nákup. Přístupy se přidělují přes role, nikoli sdílením hesel.

**Obsahuje audit právní posouzení cookies?**  
Kontrolujeme technické chování lišty a měřicích nástrojů. Připravíme popis datových toků a zjištění pro právní posouzení. Právní stanovisko není součástí technického auditu.

**Kdo může doporučené opravy provést?**  
Váš vývojář, agentura nebo my podle domluveného rozsahu. Výstup připravíme tak, aby na něj mohl navázat další dodavatel.

Kontakt H2 **„Poptávka auditu měření“**, text **„Pošlete adresu webu, používané nástroje a důvod kontroly. Navrhneme rozsah auditu a potřebné přístupy.“** Odstranit povinné opisování fráze „Rychlá kontrola měření“ do zprávy. Pokud bezplatnou kontrolu zvenku zachovat, nabídnout ji jako explicitní volbu „Mám zájem o orientační kontrolu bez přístupů“ a uvést, že nejde o kompletní audit; neslibovat předem tři až pět závad.

Související odkazy: **Nastavení GA4 a GTM** a **Měření konverzí**.

## 6. Nastavení GA4 a GTM — `/sluzby/implementace-ga4`

**Úloha:** popsat realizaci analytiky a datové vrstvy, nikoli všechen reporting a provoz v jednom balíku. **P1.**

### GA01 — Hero

H1 **„Nastavení Google Analytics 4 a Google Tag Manageru“**.

> Navrhneme měřicí plán, nastavíme události v GA4 a uspořádáme Google Tag Manager. Připravíme zadání datové vrstvy pro vývojáře, ověříme nákupy a formuláře a předáme dokumentaci. Můžeme navázat na stávající měření i připravit nové.

CTA **„Probrat nastavení GA4 a GTM“**.

### GA02 — Místo „Poznáváte se?“

H2 **„Kdy upravit nastavení GA4 a GTM“**. Smazat tvrzení, že pouhé vložení kódu obvykle během prvních měsíců rozbije čísla. Karty:

- **Nový web nebo změna platformy.** „Připravíme měření před spuštěním a ověříme ho po nasazení.“
- **Neúplné nebo duplicitní události.** „Prověříme, které akce web odesílá a zda odpovídají měřicímu plánu.“
- **Nepřehledný Tag Manager.** „Zkontrolujeme účel tagů, spouštěče, proměnné a oprávnění.“
- **Chybějící měření formulářů.** „Nastavíme rozlišení formulářů a záznam jejich úspěšného odeslání.“

Pod kartami: **„Není jasné, co změnit? Začněte auditem měření.“** → `/sluzby/audit-mereni`.

### GA03 — Výstupy a rozsah

H2 **„Co zahrnuje implementace“**. Pět hlavních výstupů:

- **Měřicí plán.** „Události, jejich parametry a vazba na otázky, které potřebujete vyhodnocovat.“
- **Zadání datové vrstvy.** „Specifikace pro vývojáře s příklady dat a pravidly pro odesílání událostí.“
- **Nastavení GA4 a GTM.** „Události, klíčové akce, souhlasy a propojení podle dohodnutého rozsahu. Změny v GTM mají popis a verzi.“
- **Testy a porovnání dat.** „Ověření dohodnutých nákupních a formulářových scénářů a kontrola proti zdrojovým záznamům.“
- **Dokumentace a předání.** „Přehled účtů, událostí a nastavení pro správce webu a marketing.“

Dnešní „tři až osm klíčových událostí“ odstranit, pokud nejde o skutečný produktový limit. Počet určuje plán. Karty „Monitoring po releasech“ a „Školení, BigQuery nebo dashboard“ přesunout do menší sekce **„Navazující služby“**:

> Po dohodě doplníme školení, kontrolu měření po změnách webu nebo export do BigQuery. Rozsah a cenu těchto prací uvedeme samostatně.

Odkaz na BigQuery. Technickou chybu „(not set) způsobuje platební brána“ nepřebírat jako univerzální diagnózu; existuje více možných příčin a vyžaduje ověření.

### GA04 — FAQ a kontakt

**Jak se stanovuje cena implementace?**  
Podle stavu datové vrstvy, počtu webů a událostí a rozsahu úprav. Nabídka oddělí naši práci, součinnost vývoje a případné licence nebo provoz dalších nástrojů.

**Je nutné zakládat novou službu GA4?**  
Ne vždy. Nejprve posoudíme stávající nastavení, vlastnictví a použitelnost historie. Pokud je vhodné pokračovat v současné službě, opravíme ji a změny zdokumentujeme.

**Je potřeba zapojit vývojáře?**  
Záleží na platformě a dostupných integracích. Vývojář bývá potřeba pro datovou vrstvu a úpravy webu. Dostane konkrétní zadání; nastavení GA4 a GTM a kontrolu výsledku zajistíme my.

**Kdo spravuje účty po předání?**  
Vaše firma. Přístupy, dokumentaci a správu můžete ponechat internímu týmu nebo je svěřit dalšímu dodavateli. Průběžnou podporu lze domluvit samostatně.

Kontakt H2 **„Proberme nastavení analytiky“**; odstavec **„Napište, jaký web provozujete a co nyní měříte. Upřesníme potřebné události, zapojení vývojáře a rozsah práce.“**

Související odkazy: **Audit měření**, **Měření konverzí**, **BigQuery a reporting**.

## 7. Server-side měření — `/sluzby/server-side-tracking`

**Úloha:** vysvětlit přínos, vhodnost a provozní odpovědnost. **P1**, rozpory o souhlasu **P0**.

### SS01 — Hero

H1 **„Server-side tracking a měření přes vlastní server“**.

> Navrhneme a nastavíme předávání měřicích událostí přes server-side Google Tag Manager. Určíme, která data mají odcházet do jednotlivých nástrojů, jak se předává souhlas a kdo zajišťuje provoz. Předem posoudíme přínos i průběžné náklady.

CTA **„Probrat server-side měření“**. Zmizí předpoklad, že návštěvník už chce konzultovat „architekturu“.

### SS02 — Sloučit dvě dnešní sekce o vhodnosti

„Poznáváte se?“ a „Kdy se server-side měření vyplatí“ sloučit do jedné sekce hned za hero. H2 **„Kdy má server-side měření smysl“**:

> Především tehdy, když potřebujete řídit předávání dat více systémům nebo doplnit události ze serveru a CRM. Není automatickou náhradou správně nastaveného měření v prohlížeči.

Tři karty:

- **Data z webu i firemních systémů.** „Potřebujete předávat například dokončené platby nebo změny stavu poptávky.“
- **Kontrola předávaných údajů.** „Chcete sjednotit pravidla, podle kterých data odcházejí jednotlivým příjemcům.“
- **Napojení reklamních rozhraní.** „Potřebujete doplnit serverové konverze a ověřit jejich souběh s měřením v prohlížeči.“

Pod kartami menší blok:

> **Kdy začít jinak**  
> Pokud chybí měřicí plán, datová vrstva nebo správné předávání souhlasu, doporučíme nejdřív opravit tento základ. U jednoduššího zadání může stačit stávající integrace.

Odkazy na audit a cookies. Smazat paušální „Safari zkracuje cookies na sedm dní“, „bez prostředníka nemáte jak doložit“ a představu, že konkrétní reklamní platforma vždy vyžaduje právě server-side GTM. Hlavní obchodní text nemá záviset na rychle se měnících limitech prohlížečů a jediné implementační cestě.

### SS03 — Výstupy

H2 **„Co dostanete“**:

1. **Návrh řešení:** „Popis zdrojů dat, cílových systémů a rozdělení měření mezi prohlížeč a server.“
2. **Nastavené prostředí:** „Hosting, doménu a kontejnery podle dohodnutého provozního modelu. Kapacitu navrhneme podle zátěže.“
3. **Pravidla pro události:** „Identifikátory, hodnoty a deduplikaci podle požadavků jednotlivých systémů.“
4. **Předávání souhlasů:** „Mapu podmínek, za kterých se jednotlivé události a údaje smějí předat.“
5. **Testy a provozní dokumentaci:** „Ověření zpracování událostí, postup při chybě a rozdělení odpovědnosti za další provoz.“

Dnešní „Cloud Run s nejméně dvěma servery“ nepoužívat jako univerzální součást každé zakázky. Konkrétní kapacita, region, monitoring a odpovědnost mají být v nabídce. „Monitoring“ rozlišit na technické zprovoznění upozornění a placenou aktivní správu.

### SS04 — Schéma uprostřed stránky

Zachovat vysvětlující schéma této služby, zkrátit popisky do tří úrovní: **Web a firemní systémy → server-side GTM → analytika a reklama**. Dnešní vysvětlení „místo pěti skriptů jedna událost“ nahradit:

> Vybrané události z webu nebo firemního systému odešleme do server-side GTM. Ten je zpracuje a podle nastavených pravidel předá cílovým nástrojům. Část měření může dál zůstat v prohlížeči.

Pod schéma:

> Server-side řešení samo nezaručuje úplnost dat ani shodu reportů. Způsob předání údajů a respektování volby návštěvníka je nutné nastavit a otestovat.

Nahradit větu „Kdo cookies odmítne, toho neměříme ani touto cestou“ přesným popisem zvoleného režimu, ne univerzálním tvrzením. Hashování samo o sobě nečiní osobní údaje anonymními; neprezentovat „odstraníte nebo zahashujete“ jako rovnocenné z pohledu ochrany údajů. [Definice pseudonymizace v GDPR](https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELEX%3A32016R0679)

### SS05 — FAQ a kontakt

**Nahrazuje server-side řešení cookie lištu?**  
Ne. Změna technické cesty sama neřeší oprávnění k práci s údaji. Předávání dat nastavíme podle dohodnutých pravidel a volby návštěvníka; popis řešení dodáme i pro právní posouzení.

**Z čeho se skládá cena?**  
Z návrhu a implementace, provozu hostingu a případné průběžné správy. Odhad provozu připravíme podle objemu událostí, kapacity a poskytovatele. Tyto položky uvedeme v nabídce odděleně.

**Jaká součinnost je potřeba?**  
Přístupy do měřicích a reklamních účtů, správa domény a podle řešení také cloudový projekt a vývojář. Před zahájením upřesníme potřebné role i odpovědnost za provoz.

**Kdy stačí Google Tag Gateway?**  
Když zadání odpovídá jeho podporovaným možnostem pro Google tagy. Pokud potřebujete složitější řízení událostí, jiné příjemce nebo napojení firemních systémů, posoudíme server-side GTM či další integrační cestu. Výběr vychází z konkrétního zadání.

Odstranit univerzální cenové rozpětí 110–150 USD, které není sladěné s formulací na e-shopové stránce. Částky případně uvádět v datovaném modelovém rozpočtu s předpoklady a odkazem na ceník poskytovatele.

Kontakt H2 **„Posoudíme vhodnost server-side měření“**; text **„Napište, které nástroje používáte a co potřebujete propojit. Projdeme možnosti, potřebnou součinnost a provozní náklady.“**

## 8. Cookie lišta a Consent Mode — `/sluzby/cookie-lista-consent-mode`

**Úloha:** nabídnout technické nastavení a ověření souhlasů bez automatického slibu právního souladu. **P0/P1.**

### C01 — Hero

H1 **„Nastavení cookie lišty a Consent Mode v2“**.

> Propojíme cookie lištu s GA4, Google Tag Managerem a reklamními nástroji. Ověříme jejich chování před volbou návštěvníka, po souhlasu, odmítnutí i změně nastavení. Dostanete testovací protokol a popis předávání dat.

CTA **„Probrat nastavení cookies“**.

### C02 — Nahradit „Poznáváte se?“

H2 **„Co je potřeba ověřit“**. Čtyři karty:

- **Chování před volbou návštěvníka.** „Které nástroje se načítají a jaké požadavky web odesílá.“
- **Přijetí a odmítnutí cookies.** „Zda měřicí nástroje správně reagují na udělení i neudělení souhlasu.“
- **Změna a uložení volby.** „Zda lze nastavení snadno změnit a zda se volba respektuje při dalších návštěvách.“
- **Kódy mimo Tag Manager.** „Zda pravidla respektují i pluginy, vložená videa, chaty a přímé integrace.“

Odstranit hodnocení „web zbytečně běží v režimu basic“ i ztotožnění basic režimu s chybou. Basic a advanced jsou různé implementace s odlišným tokem dat. Advanced může odesílat požadavky bez cookies i bez uděleného souhlasu; nelze ho popsat jako pouhý stavový signál. [Přehled režimů od Googlu](https://developers.google.com/tag-platform/security/concepts/consent-mode)

### C03 — Zviditelnit dvě varianty služby

Místo jediné dlouhé mřížky „Co uděláme a co dostanete“ zobrazit nejdřív dvě vedlejší karty:

> **Kontrola stávajícího nastavení**  
> Prověříme lištu, nástroje a datové požadavky v dohodnutých scénářích. Dostanete nálezy a plán oprav.
>
> **Nové nastavení nebo změna lišty**  
> Posoudíme vhodné řešení, nastavíme předávání souhlasů a otestujeme navazující měřicí nástroje.

Pod nimi H2 **„Výstupy služby“** a čtyři body:

- **Inventura nástrojů:** „Přehled prověřených cookies, tagů a kódů včetně integrací mimo GTM.“
- **Mapa souhlasů:** „Přiřazení nástrojů k účelům a pravidlům spuštění.“
- **Nastavení a testy:** „Výsledky scénářů před volbou, po přijetí, odmítnutí a změně souhlasu.“
- **Dokumentace:** „Popis implementace, zjištěných datových toků a podklady pro právní texty.“

Detail Seznam Event Measurement přesunout do technické poznámky, pokud je součástí zakázky; netvořit z aktuálního produktu jeden z hlavních obchodních výstupů. „Nastavíme kteroukoli CMP“ změnit na „Nejprve ověříme možnosti zvolené CMP nebo lišty e-shopové platformy.“

### C04 — FAQ a kontakt

**Kdy je potřeba cookie lišta se souhlasem?**  
Rozhoduje, jaké technologie web používá a k jakým účelům. Prověříme technické chování webu a připravíme přehled pro právní posouzení. Samotná přítomnost lišty správné nastavení nezaručuje.

**Jaký je rozdíl mezi režimy basic a advanced?**  
V režimu basic se Google tagy bez souhlasu nespouštějí. V režimu advanced mohou předávat požadavky bez cookies i při neuděleném souhlasu. Vhodný režim zvolíme podle požadavků projektu a jeho právního posouzení.

**Proč se po změně lišty změnila data?**  
Část změny může souviset s volbou návštěvníků, část s implementací. Ověříme načasování výchozího stavu, aktualizaci souhlasu a chování jednotlivých nástrojů. Samotný pokles konverzí neprokazuje chybu.

**Co ovlivňuje cenu?**  
Počet domén, jazyků a nástrojů, stav současné lišty a rozsah úprav. Licenci poskytovatele lišty a naši práci uvedeme odděleně.

Kontakt H2 **„Proberme cookie lištu a měření“**; text **„Pošlete adresu webu a informaci, jakou lištu používáte. Upřesníme, zda potřebujete kontrolu současného stavu, opravu nebo nové nastavení.“**

Související odkazy: **Audit měření**, **Server-side měření**. V právních poznámkách stačí věcně odkázat na [otázky a odpovědi ÚOOÚ](https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies); neopakovat paragrafy ve všech sekcích.

## 9. Měření konverzí — `/sluzby/mereni-konverzi`

**Úloha:** vysvětlit, jak se definují a předávají konverze reklamním systémům. **P1**, rozpor o shodě čísel **P0**.

### K01 — Hero

H1 **„Měření konverzí pro Google Ads, Metu a Sklik“**. Heureku zachovat v podtitulu a rozsahu služby; současný seznam v H1 je zbytečně dlouhý.

> Nastavíme měření objednávek a poptávek pro reklamní systémy a srovnávače včetně Heureky. Sjednotíme definice konverzí, hodnoty a identifikátory a otestujeme jejich předání. Vysvětlíme, proč se výsledky jednotlivých platforem mohou lišit.

CTA **„Probrat měření konverzí“**.

### K02 — Sekce místo „Poznáváte se?“

H2 **„Co při nastavení konverzí řešíme“**:

- **Význam konverze.** „Která akce je hlavním výsledkem kampaně a které události slouží pouze jako doplňující informace.“
- **Hodnota objednávky.** „Zda se předává tržba, nebo jiná dohodnutá hodnota, v jaké měně a jak se pracuje s DPH.“
- **Duplicitní záznamy.** „Zda souběh integrací nebo opakované načtení stránky nezpůsobuje nesprávné započítání.“
- **Kvalita poptávek.** „Jak doplnit výsledek z CRM, aby bylo možné vyhodnotit i další fáze obchodu.“

### K03 — Výstupy

H2 **„Co bude výsledkem“**:

1. **Konverzní mapa:** „Seznam akcí, jejich významu, hodnot, zdrojů a použití v jednotlivých reklamních systémech.“
2. **Nastavení a potřebné zadání:** „Úpravy měřicích nástrojů a specifikace pro vývojáře, pokud je třeba doplnit web nebo serverovou integraci.“
3. **Ověření předávání:** „Testovací protokol pro dohodnuté systémy včetně identifikátorů, hodnot a souhlasů.“
4. **Porovnání a předání:** „Kontrola dostupných výsledků za domluvené období, vysvětlení rozdílů a dokumentace pro správu kampaní.“

V menším bloku **„Podle konkrétního zadání“** uvést serverová API, offline konverze, Heureku a další integrace. Oddělit měření konverzí pro Heureku od služby Ověřeno zákazníky: nejde o stejný účel, rozsah ani automaticky stejná pravidla práce s údaji.

Pevný slib porovnání po čtrnácti dnech změnit na „za domluvené období“; nízký objem a dlouhé konverzní cesty mohou vyžadovat jiný interval.

### K04 — Nový krátký vysvětlující blok před FAQ

> ## Proč reporty nemusí ukazovat stejné číslo
>
> Administrace eviduje objednávky, reklamní platformy si připisují konverze podle vlastních pravidel a nastavení. Rozdíly ovlivňuje také časové období, souhlasy a způsob zpracování dat. Cílem je správné předání událostí a srozumitelné vyhodnocení, nikoli vynucená shoda všech reportů.

### K05 — FAQ a kontakt

**Budou všechny systémy ukazovat stejné počty?**  
Ne nutně. Každý systém pracuje s jinou atribucí a může konverze zobrazovat za jiné období. Ověříme správnost předávání a vysvětlíme zjištěné rozdíly vůči zdrojovým datům.

**Je potřeba upravit současné měření Skliku a Seznamu?**  
Nejprve ověříme používanou integraci a aktuální možnosti daného účtu. Pokud je potřeba přechod na jiné řešení, připravíme postup a testy před přepnutím.

**Jaké přístupy a součinnost jsou potřeba?**  
Role v reklamních účtech a GTM a podle stavu webu také spolupráce vývojáře. Rozsah oprávnění stanovíme podle práce. Hesla si nepředáváme.

**Co ovlivňuje cenu?**  
Počet reklamních systémů, typy konverzí, stav datové vrstvy a napojení serveru nebo CRM. Případné provozní náklady jsou v nabídce zvlášť.

Současnou podrobnou informaci o termínu ukončení kódů Seznamu v roce 2027 přesunout do datované technické poznámky s oficiálním zdrojem, nebo vypustit. V tomto auditu nebyl její konkrétní harmonogram nezávisle potvrzen; nepovažovat ji automaticky za prokázanou chybu. Totéž platí pro tvrzení o modelování Mety a přesném dni přiřazení všech konverzí.

Kontakt H2 **„Proberme nastavení konverzí“**; text **„Napište, ve kterých systémech inzerujete a co má být hlavním výsledkem kampaní. Navrhneme rozsah kontroly nebo implementace.“**

Související odkazy: **Nastavení GA4 a GTM**, **Měření pro B2B firmy**, **Server-side měření**.

## 10. BigQuery a reporting — `/sluzby/bigquery`

**Úloha:** nabídnout společný datový model a reporting; vysvětlit vhodnost oproti jednoduchému reportu. **P1.**

### BQ01 — Hero

H1 **„BigQuery a reporting pro marketing a vedení firmy“**.

> Propojíme data z GA4, reklamních systémů, e-shopu a CRM. V BigQuery připravíme společný datový model a reporty v Data Studiu nebo Power BI. Dohodneme definice metrik, způsob aktualizace a kontrolu nákladů na provoz.

CTA **„Probrat firemní reporting“**. V technickém textu při prvním použití uvést „Data Studio, dříve Looker Studio“; jinak název zbytečně nevysvětlovat opakovaně.

### BQ02 — Místo „Poznáváte se?“

H2 **„Kdy propojit data do společného reportingu“**:

- **Více zdrojů a ruční příprava.** „Report vzniká skládáním exportů z reklamy, e-shopu a firemních systémů.“
- **Náklady, marže a vratky.** „Pro vyhodnocení potřebujete údaje, které samotná webová analytika neobsahuje.“
- **Poptávky a zakázky.** „Chcete spojit výdaje na marketing s výsledky obchodu v CRM.“
- **Vlastní historie a výpočty.** „Potřebujete dlouhodobě uchovávat exportovaná data a používat vlastní definice metrik.“

Nepoužívat tvrzení, že veškerá historie GA4 končí po 14 měsících. Současný text správně zmiňuje Průzkumy, ale pozdější srovnávací blok význam rozšiřuje. Ani export do BigQuery neobsahuje automaticky veškeré údaje a modelování z rozhraní GA4. [Rozdíly reportovacích prostředí](https://support.google.com/analytics/answer/13644080?hl=en), [omezení exportu](https://support.google.com/analytics/answer/9358801?hl=en)

### BQ03 — Zkrátit výstupy na šest srozumitelných položek

H2 **„Co dostanete“**:

1. **Zadání reportingu:** „Otázky pro vedení a marketing, seznam metrik a zdrojů dat.“
2. **Datové integrace:** „Napojení dohodnutých zdrojů a popis intervalů jejich aktualizace.“
3. **Datový model:** „Pravidla pro propojení záznamů, měny, DPH a zpracování storen nebo vratek.“
4. **Slovník metrik:** „Definice výpočtů, zdroj a odpovědnost za každou hlavní metriku.“
5. **Reporty:** „Přehledy podle potřeb uživatelů s filtrováním a informací o poslední aktualizaci.“
6. **Kontrola a předání:** „Porovnání vybraných výsledků se zdrojovými systémy, dokumentace a zaškolení.“

Samostatný blok **„Provoz a správa“**:

> Nastavíme přístupy a kontrolu nákladů podle dohodnutého provozního modelu. V nabídce oddělíme implementaci, cloud, konektory, licence a případnou průběžnou správu.

### BQ04 — Schéma a ukázka reportu

H2 schématu **„Jak se data dostanou do reportu“**. Hlavní popisky **Zdroje dat → sjednocení v BigQuery → reporty a další využití**. Názvy `raw`, `staging`, `marts`, tabulek a transformačních nástrojů ponechat do rozbalovacího bloku **„Technické uspořádání datového skladu“** pod schématem.

Odstranit „úplná data“, „přesné počty uživatelů“ a „každé číslo až ke zdrojové události“ jako bezpodmínečné sliby. Náhrada:

> U reportovaných metrik zdokumentujeme zdroje a výpočty. Kvalita výsledku závisí také na dostupnosti a kvalitě vstupních dat.

Pod schéma připravit **„Modelový přehled pro vedení“** s příkladem sloupců: období, náklady na reklamu, tržby po stornu, příspěvková marže, zdroj dat, poslední aktualizace. Bez konkrétních čísel, dokud nevznikne označený modelový dataset nebo skutečná anonymizovaná ukázka. Marži a zisk nezaměňovat; definici nákladů uvést u metriky.

### BQ05 — Průběh a vhodnost

Zde použít konkrétní průběh namísto G03:

> **1. Zadání a metriky.** Domluvíme otázky, zdroje a kontrolní údaje.  
> **2. Návrh přehledu.** Připravíme strukturu reportu a ověříme ji s budoucími uživateli.  
> **3. Napojení a kontrola.** Zprovozníme datové toky a porovnáme výsledky se zdrojovými systémy.  
> **4. Předání a provoz.** Předáme dokumentaci, vysvětlíme používání a domluvíme odpovědnost za údržbu.

Sekci „Co v rozhraní GA4 nejde…“ nahradit kratším H2 **„Kdy stačí jednodušší řešení“**:

> Pro jednoduchý přehled nad několika dostupnými zdroji může stačit report s přímými konektory. BigQuery doporučíme, pokud potřebujete vlastní datový model, spojení firemních dat nebo náročnější historii a výpočty. Rozhoduje využití reportu, nejen velikost firmy.

### BQ06 — FAQ a kontakt

**Co ovlivňuje cenu projektu a provozu?**  
Počet zdrojů, způsob jejich napojení, objem dat, složitost výpočtů a počet reportů. Cloud, konektory a případné licence uvedeme samostatně. Odhad provozu připravíme pro konkrétní řešení.

**Je vždy potřeba BigQuery?**  
Ne. Nejdřív posoudíme otázky a dostupné zdroje. Pokud stačí report nad přímým propojením nástrojů, navrhneme jednodušší variantu.

**Jakou součinnost potřebuje realizační tým?**  
Přístupy k dohodnutým zdrojům, odpovědnou osobu za definice metrik a kontrolní údaje. Potřebné role a exporty upřesníme před zahájením.

**Je pro práci s reporty potřeba SQL?**  
Pro běžné používání připravíme přehledy s filtry a vysvětlením metrik. Analytikům můžeme předat také datový model a příklady dotazů.

Kontakt H2 **„Proberme vaše reporty a zdroje dat“**; text **„Napište, jaké přehledy dnes připravujete a která data spojujete ručně. Navrhneme, zda stačí upravit reporting, nebo má smysl datový sklad.“**

Související odkazy: **Nastavení GA4 a GTM**, **Řešení pro e-shopy**, **Řešení pro B2B firmy**.
