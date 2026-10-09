# /sluzby/technicky-audit-webu

## Hlavička stránky (title, meta, OG)
- `title`: Technický audit webu – rychlost, tagy, SEO | datalayer.cz
- `meta:description`: Technický audit a analýza webu: Core Web Vitals, dopad tagů na rychlost, indexace, strukturovaná data, hlavičky, formuláře a měření. S prioritami oprav.
- `meta:og:title`: Technický audit webu – rychlost, tagy, SEO | datalayer.cz
- `meta:og:description`: Technický audit a analýza webu: Core Web Vitals, dopad tagů na rychlost, indexace, strukturovaná data, hlavičky, formuláře a měření. S prioritami oprav.
- `meta:twitter:title`: Technický audit webu – rychlost, tagy, SEO | datalayer.cz
- `meta:twitter:description`: Technický audit a analýza webu: Core Web Vitals, dopad tagů na rychlost, indexace, strukturovaná data, hlavičky, formuláře a měření. S prioritami oprav.

## Strukturovaná data (JSON-LD) – texty
- `jsonld:itemListElement.name`: Úvod
- `jsonld:itemListElement.name`: Služby
- `jsonld:itemListElement.name`: Technický audit webu
- `jsonld:name`: Technický audit webu
- `jsonld:serviceType`: Technický audit webu: výkon a Core Web Vitals, dopad měřicích skriptů, technické SEO, bezpečnostní hlavičky, přístupnost formulářů a kontrola měření
- `jsonld:description`: Technická analýza webu, která končí úkoly pro vývojáře s prioritou podle dopadu a ověřením po opravách.
- `jsonld:areaServed.name`: Česká republika
- `jsonld:audience.audienceType`: E-shopy, B2B firmy, velké firmy
- `jsonld:mainEntity.name`: Kolik technický audit stojí a děláte analýzu zdarma?
- `jsonld:mainEntity.acceptedAnswer.text`: Cenu stanovíme předem jako pevnou částku podle počtu typů stránek a domén, platformy a počtu tagů v kontejneru – a podle toho, jestli chcete ověření po opravách a pomoc s implementací. Úvodní třicetiminutová konzultace je zdarma: projdeme výsledky z PageSpeed Insights a Search Console a řekneme, jestli má smysl jít hlouběji.
- `jsonld:mainEntity.name`: Jak dlouho audit trvá a co od nás potřebujete?
- `jsonld:mainEntity.acceptedAnswer.text`: Délka závisí hlavně na počtu typů stránek a domén, termín domluvíme spolu s rozsahem. Potřebujeme přístup do Search Console, kde stačí omezený uživatel, čtení v GA4 a GTM, seznam hlavních typů stránek a klíčových cest, adresu testovacího prostředí, pokud ho máte, a kontakt na vývojáře. Na konci si dáme šedesát až devadesát minut na prezentaci s vývojáři.
- `jsonld:mainEntity.name`: Kontrolujete i cookie lištu a souhlas?
- `jsonld:mainEntity.acceptedAnswer.text`: Zkontrolujeme, které cookies web nastaví a jaké požadavky pošle třetím stranám ještě před volbou v cookie liště, a ověříme výchozí stav Consent Mode. Nastavení lišty a Consent Mode pak řeší služba Cookie lišta a Consent Mode. Jde o technickou kontrolu, ne o právní radu – texty lišty posoudí váš právník.
- `jsonld:mainEntity.name`: Zpomalují měřicí kódy web? Musíme se jich vzdát?
- `jsonld:mainEntity.acceptedAnswer.text`: Každý skript třetí strany stojí síť a čas procesoru, měření se ale obvykle vzdávat nemusíte. Většinu zpomalení způsobují duplicitní vložení, staré nefunkční tagy, těžké skripty jako chat nebo heatmapy, které web spouští hned na všech stránkách, a cookie lišta, kterou vkládá tag manager. V auditu každý skript změříme a navrhneme, jestli ho ponechat, odložit, sloučit, odstranit, nebo přesunout na server.
- `jsonld:mainEntity.name`: Může optimalizace rychlosti rozbít měření?
- `jsonld:mainEntity.acceptedAnswer.text`: Ano, a stává se to často: web odloží GTM tak pozdě, že nestihne zachytit nákup, minifikace rozbije datovou vrstvu nebo nová bezpečnostní hlavička zablokuje domény měření. Proto každé doporučení v auditu obsahuje i kontrolu měření po opravě. Re-test ověří obojí – že web zrychlil a že data tečou dál.
- `jsonld:mainEntity.name`: Opravíte chyby z auditu i sami?
- `jsonld:mainEntity.acceptedAnswer.text`: Úpravy v Google Tag Manageru, nastavení měření, Consent Mode a strukturovaná data, která web vkládá přes tagy, uděláme sami. Změny v kódu šablon, serveru nebo CDN obvykle dělají vaši vývojáři – dodáme jim přesné zadání, odpovíme na dotazy a po nasazení vše ověříme.

## Obsah stránky

### [sekce] 
- `a`: Přeskočit na obsah
- `a`: Úvod
- `a`: Služby
- `li`: Technický audit webu
- `p`: [ perf · audity a správa ]
- `h1`: Technický audit webu: rychlost, tagy a technické SEO
- `p`: Technický audit webu je kontrola toho, jak web funguje pod kapotou: rychlost a Core Web Vitals, dopad měřicích a reklamních skriptů, indexace a strukturovaná data, bezpečnostní hlavičky, přístupnost formulářů a měření. Na konci nedostanete obecná doporučení, ale konkrétní úkoly pro vývojáře s prioritou podle dopadu. Po opravě ověříme, že web opravdu zrychlil a měření funguje dál.
- `a`: [ Objednat technický audit ]
- `a`: [ Co audit kontroluje ]
- `p`: Nejsme SEO agentura: auditujeme techniku, ne obsah a odkazy · Úvodní třicetiminutová konzultace zdarma
- `li`: Úkoly pro vývojáře, ne PDF z nástroje
- `li`: Data reálných návštěvníků, ne jen laboratorní test
- `li`: Po opravách ověříme výsledek

### [sekce] Poznáváte se?
- `p`: [ symptomy ]
- `h2`: Poznáváte se?
- `p`: Technický audit dává smysl, když web zpomaluje, stránky chybí v indexu nebo mizí leady – a také před redesignem či migrací.
- `span`: cwv
- `h3`: Search Console hlásí špatné Core Web Vitals
- `div`: U mobilu vidíte skupiny URL „Je třeba zlepšit“ nebo „Špatné“ a nikdo neví, co přesně je zpomaluje.
- `span`: tagy
- `h3`: Každý nový pixel web zpomalí
- `div`: Chat, heatmapy, A/B test, další reklamní pixel – každý přidal pár set milisekund a nikdo neví, kolik dohromady.
- `span`: index
- `h3`: Stránky nejsou v indexu
- `div`: Search Console ukazuje stovky URL, které Google prošel, ale nezaindexoval, nebo duplicity z filtrů a parametrů e-shopu.
- `span`: formulář
- `h3`: Formulář, který odrazuje
- `div`: Chybová hláška není u pole, formulář nejde vyplnit klávesnicí a odeslání nikdo neměří – leady mizí a nevíte kde.

### [sekce] Co audit kontroluje: šest oblastí
- `p`: [ oblasti auditu ]
- `h2`: Co audit kontroluje: šest oblastí
- `p`: Oblasti se vyplatí kombinovat – třeba kvůli zrychlení, které nerozbije měření.
- `button`: Výkon a Core Web Vitals
- `button`: Měřicí skripty a tagy
- `button`: Technické SEO
- `button`: Bezpečnostní hlavičky a soukromí
- `button`: Přístupnost formulářů
- `button`: Kontrola měření
- `p`: Co kontrolujeme: tři metriky Core Web Vitals na 75. percentilu návštěv – LCP do 2,5 s, INP do 200 ms, který v březnu 2024 nahradil FID, a CLS do 0,1. Data reálných návštěvníků ze Search Console a Chrome UX Reportu porovnáme s laboratorním testem pro každý typ stránky.
- `p`: Kde se rychlost potkává s měřením: když web spustí měřicí skripty příliš brzy, soupeří s hlavním obsahem o síť i procesor a zhorší LCP i INP. Když je spustí příliš pozdě, část dat chybí.
- `p`: Ukázkový nález: cookie lišta, kterou vkládá GTM, posouvá obsah produktové stránky na mobilu a laboratorní test ukazuje CLS 0,24.
- `p` (skryté): Oblast, kterou SEO audity obvykle vynechávají. U každého skriptu třetí strany – GTM, Google tag, Meta Pixel, Sklik, Hotjar, chat nebo A/B test – zjistíme velikost, čas hlavního vlákna a okamžik spuštění.
- `p` (skryté): Hledáme duplicity, třeba GA4 přes gtag i GTM zároveň, mrtvé tagy v kontejneru a marketingové tagy, které web spouští před souhlasem. Doporučení vychází z návodů Googlu na web.dev.
- `p` (skryté): Ukázkový nález: chatovací widget zabírá na všech stránkách 380 ms hlavního vlákna, přitom stačí ho načíst po interakci.
- `p` (skryté): Co kontrolujeme: indexaci v Search Console, robots.txt, canonical, přesměrování, stavové kódy a sitemapu, duplicity z filtrů e-shopu, vykreslování JavaScriptu, hreflang a validaci strukturovaných dat.
- `p` (skryté): Co víme k říjnu 2026: rozšířený výsledek FAQ Google od 7. května 2026 nezobrazuje a soubor llms.txt Google Search nepotřebuje. Takové věci vám nebudeme prodávat jako „SEO zlepšení“.
- `p` (skryté): Ukázkový nález: filtry kategorií vytvářejí 12 000 indexovatelných kombinací URL bez canonical.
- `p` (skryté): Co kontrolujeme: HTTPS, Strict-Transport-Security, Referrer-Policy, Permissions-Policy, ochranu proti vložení do rámu, smíšený obsah a Content-Security-Policy, která má povolit jen potřebné domény a neblokovat měření. Zjistíme také, které cookies a požadavky web pošle třetím stranám ještě před souhlasem.
- `p` (skryté): Vymezení: nejde o penetrační test. Hlavičky navrhneme podle doporučení OWASP a nejdřív je otestujeme v režimu „report-only“, aby nerozbily tagy.
- `p` (skryté): Ukázkový nález: Meta Pixel nastavuje cookie _fbp ještě před volbou v cookie liště.
- `p` (skryté): Co kontrolujeme: popisky a chybové hlášky polí, které přečte čtečka obrazovky, ovládání klávesnicí, fokus, kontrast a dotykové plochy podle WCAG 2.2 na úrovni AA. Ověříme i měření – lead_form_start, chyby validace a generate_lead bez čitelných osobních údajů.
- `p` (skryté): Proč i právně: zákon č. 424/2023 Sb. se od 28. června 2025 vztahuje mimo jiné na služby elektronického obchodování pro spotřebitele, ne však na mikropodniky, které poskytují služby. Zda se týká vás, posoudí váš právník, nejde o právní radu.
- `p` (skryté): Ukázkový nález: formulář ukazuje chyby jen barvou pole, takže je čtečka nepřečte a měření nezaznamená, kde lidé odpadají.
- `p` (skryté): Co kontrolujeme rychle: načtení GA4 a GTM, datovou vrstvu, klíčové události jako nákup nebo lead bez duplicit a výchozí stav i aktualizaci signálů Consent Mode.
- `p` (skryté): Kdy jít hlouběji: když GA4 nesedí s e-shopem nebo CRM o desítky procent, doporučíme audit měření. Technický audit ho nenahrazuje.
- `a` (skryté): audit měření

### [sekce] Co uděláme a co dostanete
- `p`: [ výstupy ]
- `h2`: Co uděláme a co dostanete
- `p`: Výstup jako úkoly pro vývojáře, ne PDF s 200 chybami z nástroje. Ukázku inventury tagů a vzorového úkolu najdete v Technických detailech u častých otázek.
- `span`: report
- `h3`: Shrnutí a technická analýza
- `div`: Jedna strana pro vedení s pěti hlavními nálezy a podrobné nálezy podle šablon stránek s důkazy z měření a DevTools.
- `span`: tickety
- `h3`: Úkoly pro vývojáře
- `div`: Priorita, reprodukce, doporučení a akceptační kritérium v nástroji, který používáte – Jira, GitHub, GitLab, Trello nebo tabulka.
- `span`: inventura tagů
- `h3`: Inventura tagů
- `div`: Všechny skripty třetích stran s doporučením ponechat, odložit, sloučit, odstranit, nebo přesunout na server.
- `span`: rozpočet · hlavičky
- `h3`: Návrhy, aby web znovu nezpomalil
- `div`: Výkonnostní rozpočet pro LCP, INP, CLS a JavaScript na šablonu, bezpečnostní hlavičky v režimu „report-only“ a checklist přístupnosti formulářů.
- `span`: re-test
- `h3`: Prezentace a ověření po opravách
- `div`: Šedesát až devadesát minut s vývojáři, po opravách laboratorní re-test, kontrola měření a krátký závěrečný report.

### [sekce] Technický audit, ne SEO kampaň
- `p`: [ vymezení ]
- `h2`: Technický audit, ne SEO kampaň
- `p`: Jsme technici měření a webu, ne SEO agentura. Díváme se na to, jak web funguje v prohlížeči a pro roboty – obsah a odkazy nechte specialistům.
- `h3`: Co uděláme
- `li`: změříme rychlost na datech reálných návštěvníků i v laboratoři
- `li`: najdeme skripty, které web brzdí, a navrhneme, jak je načítat
- `li`: zkontrolujeme indexaci, hlavičky, formuláře, měření a souhlas
- `li`: připravíme úkoly pro vývojáře a po opravě je zkontrolujeme
- `h3`: Co neděláme
- `li`: analýzu klíčových slov a obsahovou strategii → výstup rádi předáme vaší SEO agentuře
- `li`: psaní textů a linkbuilding
- `li`: dlouhodobou správu SEO a UX výzkum s uživateli
- `li`: penetrační testy bezpečnostní hlavičky ano, hledání zranitelností ne
- `p`: SEO audit, technický audit, nebo audit měření? Každý odpovídá na jinou otázku.
- `h3`: SEO audit
- `div`: Potřebujete, když řešíte, proč nemáte víc návštěv z vyhledávání – klíčová slova, obsah, konkurenci a odkazy. Dělá ho SEO agentura.
- `h3`: Technický audit webu
- `div`: Potřebujete, když chcete vědět, co web zpomaluje a co mu technicky brání – včetně dopadu měřicích skriptů.
- `a`: Co audit kontroluje →
- `h3`: Audit měření
- `div`: Potřebujete, když nesedí data a nevíte, kde mizí konverze. Prověří do hloubky GA4, GTM, datovou vrstvu i reklamní systémy.
- `a`: Audit měření →

### [sekce] Jak audit probíhá
- `p`: [ postup ]
- `h2`: Jak audit probíhá
- `p`: Stejných pět kroků jako u všech našich služeb. Na začátku vybereme šablony a klíčové cesty, jako je nákup nebo formulář, a data reálných návštěv doplníme laboratorním měřením.
- `li`: 01 Audit Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací. od vás: přístupy pro čtení
- `h3`: Audit
- `p`: Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.
- `li`: 02 Měřicí plán Byznys cíle převedeme na události, parametry a pravidla pojmenování. od vás: hodinová schůzka a schválení plánu
- `h3`: Měřicí plán
- `p`: Byznys cíle převedeme na události, parametry a pravidla pojmenování.
- `li`: 03 Implementace Opravy v GTM, nastavení měření a Consent Mode uděláme sami, změny v šablonách, na serveru nebo v CDN převezmou vývojáři jako úkoly s akceptačním kritériem. od vás: vývojáři pro změny v šablonách, serveru nebo CDN
- `h3`: Implementace
- `p`: Opravy v GTM, nastavení měření a Consent Mode uděláme sami, změny v šablonách, na serveru nebo v CDN převezmou vývojáři jako úkoly s akceptačním kritériem.
- `li`: 04 Validace Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM. od vás: testovací objednávka a export z administrace
- `h3`: Validace
- `p`: Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.
- `li`: 05 Předání a podpora Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu. od vás: předávací schůzka
- `h3`: Předání a podpora
- `p`: Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

### [sekce] Analýza webu zdarma: co si zkontrolujete sami
- `p`: [ zdarma ]
- `h2`: Analýza webu zdarma: co si zkontrolujete sami
- `p`: Těchto pět kontrol zvládnete za půl hodiny. Nástroje řeknou, že je problém, ale ne vždy proč – výsledky proto rádi projdeme na úvodní konzultaci zdarma.
- `li`: PageSpeed Insights: nahoře data reálných návštěvníků, dole laboratorní test s doporučeními
- `li`: Search Console → Core Web Vitals: které skupiny stránek jsou na mobilu „Špatné“
- `li`: Search Console → Indexování stránek: kolik URL chybí v indexu a proč
- `li`: Rich Results Test: jestli produkty mají validní data o produktu a ceně
- `li`: Karta Network v anonymním okně: co web posílá Googlu a Metě před volbou v cookie liště

### [sekce] Časté otázky
- `p`: [ FAQ ]
- `h2`: Časté otázky
- `p`: Nenašli jste odpověď? Napište nám.
- `a`: Napište nám
- `summary`: Technické detaily: ukázka inventury tagů a úkolu pro vývojáře
- `p`: Ukázková data: na mobilu prohlížeč vykreslí hlavní obrázek produktové stránky až za 3,8 s. Mezitím GTM vloží cookie lištu, která posune obsah, a na řadu přijdou Meta Pixel, retargeting Skliku, heatmapy a chat, který doběhne až za 4,2 s. Po optimalizaci je lišta přímo v HTML, heatmapy a chat přijdou na řadu až po načtení stránky nebo po interakci a LCP klesne na 2,1 s.
- `caption`: Inventura tagů: výřez s ukázkovými daty
- `th`: Skript
- `th`: Hlavní vlákno
- `th`: Doporučení
- `th`: gtm.js
- `td`: 120 ms
- `td`: ponechat, vyčistit 23 nepoužívaných tagů
- `th`: gtag/js – GA4
- `td`: 160 ms
- `td`: odstranit duplicitní vložení v šabloně
- `th`: fbevents.js – Meta
- `td`: 110 ms
- `td`: ponechat přes GTM, zvážit Conversions API přes server
- `th`: hotjar-*.js
- `td`: 290 ms
- `td`: spouštět jen na vybraných šablonách a po načtení stránky
- `th`: chat-widget.js
- `td`: 380 ms
- `td`: načítat až po kliknutí na ikonu chatu
- `th`: Custom HTML „starý remarketing“
- `td`: 40 ms
- `td`: odstranit, nefunguje od roku 2023
- `span`: text
- `button`: Kopírovat
- `pre`: [PERF-07] Cookie lišta posouvá obsah na mobilu (CLS) Šablony: produkt, kategorie · Priorita: vysoká · Náročnost: S, do jednoho dne Jak reprodukovat: Chrome DevTools → Performance, profil mobil, první návštěva bez souhlasu. Zjištění: GTM vkládá lištu až po načtení stránky. Lišta posune obsah o 180 px, laboratorní test ukazuje CLS 0,24. Doporučení: Vykreslit lištu přímo v HTML šablony, ne přes GTM, a to jako překryv, kterému šablona předem vyhradí místo. Logiku Consent Mode, tedy default a update, nechat beze změny. Akceptační kritérium: CLS < 0,1 v laboratorním testu na obou šablonách. Po nasbírání dat z reálných návštěv skupina URL „Dobré“ v přehledu Core Web Vitals. Kontrola měření po opravě: V GTM Preview ověřit událost cookie_consent_update a stav souhlasu před volbou a po ní. GTM spouští GA4 a reklamní tagy jen po souhlasu.
- `figcaption`: Vzorový úkol pro vývojáře, ukázková data
- `summary`: Kolik technický audit stojí a děláte analýzu zdarma?
- `div`: Cenu stanovíme předem jako pevnou částku podle počtu typů stránek a domén, platformy a počtu tagů v kontejneru – a podle toho, jestli chcete ověření po opravách a pomoc s implementací. Úvodní třicetiminutová konzultace je zdarma: projdeme výsledky z PageSpeed Insights a Search Console a řekneme, jestli má smysl jít hlouběji.
- `summary`: Jak dlouho audit trvá a co od nás potřebujete?
- `div`: Délka závisí hlavně na počtu typů stránek a domén, termín domluvíme spolu s rozsahem. Potřebujeme přístup do Search Console, kde stačí omezený uživatel, čtení v GA4 a GTM, seznam hlavních typů stránek a klíčových cest, adresu testovacího prostředí, pokud ho máte, a kontakt na vývojáře. Na konci si dáme šedesát až devadesát minut na prezentaci s vývojáři.
- `summary`: Kontrolujete i cookie lištu a souhlas?
- `div`: Zkontrolujeme, které cookies web nastaví a jaké požadavky pošle třetím stranám ještě před volbou v cookie liště, a ověříme výchozí stav Consent Mode. Nastavení lišty a Consent Mode pak řeší služba Cookie lišta a Consent Mode. Jde o technickou kontrolu, ne o právní radu – texty lišty posoudí váš právník.
- `a`: Cookie lišta a Consent Mode
- `summary`: Zpomalují měřicí kódy web? Musíme se jich vzdát?
- `div`: Každý skript třetí strany stojí síť a čas procesoru, měření se ale obvykle vzdávat nemusíte. Většinu zpomalení způsobují duplicitní vložení, staré nefunkční tagy, těžké skripty jako chat nebo heatmapy, které web spouští hned na všech stránkách, a cookie lišta, kterou vkládá tag manager. V auditu každý skript změříme a navrhneme, jestli ho ponechat, odložit, sloučit, odstranit, nebo přesunout na server.
- `summary`: Může optimalizace rychlosti rozbít měření?
- `div`: Ano, a stává se to často: web odloží GTM tak pozdě, že nestihne zachytit nákup, minifikace rozbije datovou vrstvu nebo nová bezpečnostní hlavička zablokuje domény měření. Proto každé doporučení v auditu obsahuje i kontrolu měření po opravě. Re-test ověří obojí – že web zrychlil a že data tečou dál.
- `summary`: Opravíte chyby z auditu i sami?
- `div`: Úpravy v Google Tag Manageru, nastavení měření, Consent Mode a strukturovaná data, která web vkládá přes tagy, uděláme sami. Změny v kódu šablon, serveru nebo CDN obvykle dělají vaši vývojáři – dodáme jim přesné zadání, odpovíme na dotazy a po nasazení vše ověříme.

### [sekce] 
- `p`: [ pokračujte ]
- `a`: Audit měření zjistíme, kde data utíkají
- `a`: Správa webu a měření hlídáme, aby měření nepřestalo fungovat
- `a`: Server-side tracking měření na vaší doméně

### [sekce] Zjistěte, co brzdí váš web
- `p`: [ Kontakt ]
- `h2`: Zjistěte, co brzdí váš web
- `p`: Stačí adresa webu a jedna věta o tom, co vás trápí. Na úvodní konzultaci zdarma projdeme výsledky z PageSpeed Insights a Search Console a navrhneme rozsah auditu.
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

### [sekce] Časté otázky
- `div@aria-label`: Inventura tagů: výřez s ukázkovými daty
- `td@data-label`: Hlavní vlákno
- `td@data-label`: Doporučení
- `td@data-label`: Hlavní vlákno
- `td@data-label`: Doporučení
- `td@data-label`: Hlavní vlákno
- `td@data-label`: Doporučení
- `td@data-label`: Hlavní vlákno
- `td@data-label`: Doporučení
- `td@data-label`: Hlavní vlákno
- `td@data-label`: Doporučení
- `td@data-label`: Hlavní vlákno
- `td@data-label`: Doporučení

### [sekce] Zjistěte, co brzdí váš web
- `ol@aria-label`: Co se stane po odeslání