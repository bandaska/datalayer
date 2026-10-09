# /sluzby/bigquery

## Hlavička stránky (title, meta, OG)
- `title`: BigQuery a datový sklad pro marketing | datalayer.cz
- `meta:description`: GA4 v BigQuery spojíme s náklady z Ads, Meta a Skliku i s daty e-shopu a CRM. Datový model, hlídané náklady a dashboard nad čísly, které věříte.
- `meta:og:title`: BigQuery a datový sklad pro marketing | datalayer.cz
- `meta:og:description`: GA4 v BigQuery spojíme s náklady z Ads, Meta a Skliku i s daty e-shopu a CRM. Datový model, hlídané náklady a dashboard nad čísly, které věříte.
- `meta:twitter:title`: BigQuery a datový sklad pro marketing | datalayer.cz
- `meta:twitter:description`: GA4 v BigQuery spojíme s náklady z Ads, Meta a Skliku i s daty e-shopu a CRM. Datový model, hlídané náklady a dashboard nad čísly, které věříte.

## Strukturovaná data (JSON-LD) – texty
- `jsonld:itemListElement.name`: Úvod
- `jsonld:itemListElement.name`: Služby
- `jsonld:itemListElement.name`: BigQuery a datový sklad
- `jsonld:name`: BigQuery a datový sklad pro marketing
- `jsonld:serviceType`: Implementace BigQuery a datového skladu pro marketingová a e-commerce data
- `jsonld:description`: Export GA4 do Google BigQuery, napojení nákladů z Google Ads, Meta a Skliku a dat z e-shopu, CRM a ERP, datový model pro marketing s relacemi, atribucí, maržemi a vratkami, kontrola nákladů a napojení dashboardů.
- `jsonld:areaServed.name`: Česká republika
- `jsonld:audience.audienceType`: E-shopy, velké firmy, B2B firmy
- `jsonld:mainEntity.name`: Kolik stojí projekt a provoz BigQuery?
- `jsonld:mainEntity.acceptedAnswer.text`: Cenu projektu stanovíme po úvodní konzultaci jako pevnou částku – rozhoduje počet a typ zdrojů, rozsah modelu, stav měření a počet dashboardů. Provoz platíte přímo Googlu: první TiB dotazů a deset GiB úložiště měsíčně jsou zdarma a v našem modelovém výpočtu pro e-shop se 100 000 událostmi denně vychází na jednotky dolarů měsíčně. Na začátku ho spočítáme podle objemu dat a nastavíme limity, aby vás faktura nepřekvapila.
- `jsonld:mainEntity.name`: Jak dlouho to trvá a co od nás budete potřebovat?
- `jsonld:mainEntity.acceptedAnswer.text`: Délka závisí hlavně na počtu a typu zdrojů – GA4 a Google Ads napojíme rychle, vlastní ERP bez API dá víc práce. Potřebujeme projekt v Google Cloudu s platebním účtem nebo souhlas ho založit, roli Editor v GA4, přístupy pro čtení do reklamních systémů, export nebo API k e-shopu, ERP či CRM a kontakt na vývojáře nebo IT. Od týmu pak jednu až dvě hodiny na úvodní workshop a kontrolní čísla z účetnictví.
- `jsonld:mainEntity.name`: Získáme i historická data z GA4?
- `jsonld:mainEntity.acceptedAnswer.text`: Surová data na úrovni událostí začnou do BigQuery proudit až po propojení GA4 – zpětně je export nedoplní, proto ho zapínáme hned na začátku. Starší agregované reporty umí dodatečně načíst konektor Data Transfer Service pro GA4, a to tak daleko, jak dovolí uchovávání dat v GA4 property. Pro meziroční srovnání to obvykle stačí, pro analýzy jednotlivých relací ne.
- `jsonld:mainEntity.name`: Musíme umět SQL?
- `jsonld:mainEntity.acceptedAnswer.text`: Ne. Pro běžnou práci připravíme reportovací tabulky a dashboard, ve kterém filtrujete a třídíte klikáním. Analytikovi, který chce jít do detailu, předáme dokumentaci tabulek a příklady dotazů, a když budete chtít, přidáme školení na vlastních datech.
- `jsonld:mainEntity.name`: Komu budou patřit data a účty?
- `jsonld:mainEntity.acceptedAnswer.text`: Vám. Export i model stavíme v projektu Google Cloudu, který i s platebním účtem patří vaší organizaci, a zdrojový kód transformací předáme v repozitáři, ke kterému máte přístup. My dostaneme jen potřebné role, ideálně časově omezené, a po předání je můžete kdykoli odebrat. Žádná data neukládáme na vlastní infrastruktuře.
- `jsonld:mainEntity.name`: Jak je to s GDPR a osobními údaji v BigQuery?
- `jsonld:mainEntity.acceptedAnswer.text`: Přímé identifikátory jako e-mail, telefon nebo jméno do skladu v čitelné podobě neposíláme. Pseudonymní identifikátory jako user_pseudo_id ale mohou patřit mezi osobní údaje, proto volíme umístění dat v EU, omezujeme přístupy rolemi a nastavujeme expiraci starých dat. Právní posouzení zajistí váš právník nebo pověřenec – nejsme advokátní kancelář.

## Obsah stránky

### [sekce] 
- `a`: Přeskočit na obsah
- `a`: Úvod
- `a`: Služby
- `li`: BigQuery a datový sklad
- `p`: [ bq · data a reporting ]
- `h1`: BigQuery a datový sklad pro marketing
- `p`: BigQuery je datový sklad Googlu, do kterého GA4 umí každý den nebo průběžně exportovat všechny události bez vzorkování. Surová data z GA4 v něm spojíme s náklady z Google Ads, Mety a Skliku a s objednávkami, maržemi a vratkami z e-shopu, CRM nebo ERP. Vše běží ve vašem Google Cloudu, s hlídanými náklady a dashboardem, kterému věří i finanční ředitel.
- `a`: [ Konzultovat BigQuery ]
- `a`: [ Ukázka datového modelu ]
- `p`: Úvodní třicetiminutová konzultace zdarma · provoz BigQuery platíte přímo Googlu
- `li`: Data i fakturace ve vlastním Google Cloudu
- `li`: Limity a rozpočtové alerty od prvního dne
- `li`: Dokumentace a slovník metrik

### [sekce] Poznáváte se?
- `p`: [ symptomy ]
- `h2`: Poznáváte se?
- `p`: GA4 je dobrý nástroj na sběr dat. Na řízení marketingu podle peněz mu ale chybí data, která firma drží jinde.
- `span`: retention
- `h3`: Meziroční srovnání končí na čtrnácti měsících
- `div`: V Průzkumech standardní GA4 vidíte událostní data nejvýš čtrnáct měsíců zpět, takže sezónnost a kohorty porovnáte jen obtížně.
- `span`: margin
- `h3`: ROAS počítáte z obratu, ne z marže
- `div`: GA4 nezná nákupní ceny, storna ani vratky. Kampaň, která „vydělává“, může po odečtení vratek prodělávat.
- `span`: costs
- `h3`: Náklady sčítá někdo ručně
- `div`: Každé pondělí kdosi stahuje náklady z Google Ads, Mety a Skliku do Excelu. Chyba v jednom řádku a porada řeší špatná čísla.
- `span`: crm
- `h3`: Lead z webu nikdo nespojí se zakázkou
- `div`: Marketing vykazuje leady, obchod zakázky v CRM. Kolik tržeb přinesla která kampaň, neví nikdo.

### [sekce] Co uděláme a co dostanete
- `p`: [ výstupy ]
- `h2`: Co uděláme a co dostanete
- `p`: Nejdřív se domluvíme, jaká rozhodnutí mají data podpořit, teprve pak stavíme tabulky. Výstupy zůstávají u vás i po skončení spolupráce.
- `span`: data-plan
- `h3`: Měřicí plán pro data
- `div`: Otázky, na které má sklad odpovídat, s metrikami, zdroji, klíči pro propojení a vlastníky v jednom dokumentu.
- `span`: events_*
- `h3`: Export GA4 do BigQuery
- `div`: Denní, případně průběžný export v projektu na vašem účtu, s regionem dat a filtrem událostí. Ověříme ho proti datové vrstvě.
- `span`: ads · meta · sklik
- `h3`: Náklady a data firmy
- `div`: Náklady z Google Ads, Mety a Skliku, data ze Search Console a objednávky, marže a vratky z e-shopu, ERP nebo CRM.
- `span`: raw · staging · marts
- `h3`: Datový model ve třech vrstvách
- `div`: Reportovací tabulky pro konkrétní otázky a zdrojový kód transformací v Gitu – v Dataformu, dbt nebo plánovaných dotazech.
- `span`: budget-alert
- `h3`: Kontrola nákladů a přístupů
- `div`: Partitioning, clustering, limity zpracovaných bajtů, rozpočtové alerty a role pro každý přístup.
- `span`: metrics.md
- `h3`: Slovník metrik a dashboard
- `div`: Definice tržby, marže, POAS nebo CPL, napojení dashboardu v Data Studiu (dříve Looker Studio) nebo Power BI a školení týmu.
- `a`: dashboardu

### [sekce] Jak data tečou z webu a firemních systémů do reportu
- `p`: [ architektura ]
- `h2`: Jak data tečou z webu a firemních systémů do reportu
- `p`: Data držíme ve třech vrstvách: surová beze změn, očištěná se sjednocenými názvy, měnami a časovými pásmy a reportovací s tabulkami pro konkrétní otázky.
- `span`: zdroje
- `li`: web: GTM a GA4
- `li`: Google Ads, Meta Ads, Sklik
- `li`: Search Console
- `li`: e-shop, ERP a CRM
- `span`: BigQuery · raw
- `li`: events_YYYYMMDD
- `li`: ads_* · meta_* · sklik_*
- `li`: erp_orders · crm_deals
- `p`: Data beze změn, model kdykoli přepočítáme.
- `span`: BigQuery · staging
- `li`: sjednocené typy a měny
- `li`: DPH a časová pásma
- `li`: odstranění duplicit
- `p`: Transformace v Dataformu, dbt nebo plánovaných dotazech.
- `span`: BigQuery · marts
- `li`: sessions
- `li`: channel_daily
- `li`: orders_margin
- `li`: leads_to_deals
- `p`: Tabulky pro konkrétní otázky, nad nimi běží dashboardy.
- `span`: výstupy
- `li`: Data Studio
- `li`: Power BI
- `li`: exporty zpět: marže do Ads, offline konverze
- `figcaption`: Schéma architektury: web posílá data přes GTM do GA4. GA4, reklamní systémy, Search Console, e-shop nebo ERP a CRM plní BigQuery, kde data držíme ve vrstvách raw, staging a marts. Z reportovacích tabulek čerpají dashboardy v Data Studiu nebo Power BI.
- `li`: Jedno místo pravdy. Chování na webu, náklady kampaní a data e-shopu či CRM v jednom modelu.
- `li`: Každé číslo dohledáte v dashboardu až ke zdrojové události.
- `li`: Governance pod celým skladem. Role, limity dotazů, rozpočtové alerty a expirace starých dat.

### [sekce] Co v rozhraní GA4 nejde – a kdy BigQuery zatím nepotřebujete
- `p`: [ rozhodnutí ]
- `h2`: Co v rozhraní GA4 nejde – a kdy BigQuery zatím nepotřebujete
- `p`: BigQuery rozhraní GA4 nenahrazuje. Doplňuje ho o delší historii, úplná data a spojení s daty firmy.
- `h3`: Co v rozhraní GA4 nejde, v BigQuery ano
- `li`: historie delší než čtrnáct měsíců, expiraci určujete vy
- `li`: surové události bez „(other)“ a přesné počty uživatelů a relací
- `li`: marže, storna a vratky z e-shopu nebo ERP
- `li`: automatické načítání nákladů z Mety a Skliku každý den
- `li`: spojení leadu se zakázkou v CRM, vlastní atribuce, kohorty a LTV
- `h3`: Doporučíme počkat, když…
- `li`: máte jednotky až nízké desítky objednávek nebo leadů týdně → stačí GA4 a dashboard nad přímými konektory
- `li`: GA4 nesedí s e-shopem o desítky procent → nejdřív audit měření
- `a`: audit měření
- `li`: podle dat ve firmě nikdo nebude rozhodovat → začneme jedním reportem pro vedení
- `b`: 6,25 dolaru
- `span`: za TiB přečtených dat v režimu on-demand, první TiB měsíčně zdarma
- `b`: řádově 0,02 dolaru
- `span`: za GiB aktivního úložiště měsíčně, prvních deset GiB zdarma
- `b`: jednotky dolarů
- `span`: měsíčně v modelovém výpočtu pro e-shop se 100 000 událostmi v GA4 denně
- `p`: Ceny podle ceníku Google Cloudu k říjnu 2026, bez DPH. Fakturu dostáváte přímo od Googlu – na začátku spočítáme odhad podle objemu dat a nastavíme limity.

### [sekce] Jak postupujeme
- `p`: [ postup ]
- `h2`: Jak postupujeme
- `p`: Stejných pět kroků jako u všech našich služeb. Export GA4 zapínáme hned na začátku, protože zpětně ho Google nedoplní – každý den navíc znamená den dat navíc.
- `li`: 01 Audit Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací. od vás: přístupy pro čtení
- `h3`: Audit
- `p`: Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.
- `li`: 02 Měřicí plán Byznys cíle převedeme na události, parametry a pravidla pojmenování. od vás: hodinová schůzka a schválení plánu
- `h3`: Měřicí plán
- `p`: Byznys cíle převedeme na události, parametry a pravidla pojmenování.
- `li`: 03 Implementace Propojíme GA4 s BigQuery, načteme náklady z reklamních systémů a data e-shopu, ERP či CRM, postavíme datový model a nastavíme limity, alerty a role. od vás: projekt v Google Cloudu s platebním účtem, roli Editor v GA4, přístupy pro čtení ke zdrojům a kontakt na vývojáře
- `h3`: Implementace
- `p`: Propojíme GA4 s BigQuery, načteme náklady z reklamních systémů a data e-shopu, ERP či CRM, postavíme datový model a nastavíme limity, alerty a role.
- `li`: 04 Validace Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM. od vás: testovací objednávka a export z administrace
- `h3`: Validace
- `p`: Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.
- `li`: 05 Předání a podpora Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu. od vás: předávací schůzka
- `h3`: Předání a podpora
- `p`: Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

### [sekce] Jak poznáte, že sklad funguje
- `p`: [ kontrola ]
- `h2`: Jak poznáte, že sklad funguje
- `p`: Než model předáme, porovnáme ho s účetnictvím a rozdíly proti rozhraní GA4 popíšeme ve srovnávací tabulce. Sběr dat, ze kterého sklad čerpá, pak může hlídat služba Správa webu a měření.
- `a`: Správa webu a měření
- `li`: tržby a počet objednávek v modelu sedí s účetnictvím za kontrolní měsíc
- `li`: export GA4 odpovídá datové vrstvě a každý rozdíl proti rozhraní umíme vysvětlit
- `li`: každé číslo v dashboardu má definici ve slovníku metrik
- `li`: limity dotazů a rozpočtové alerty hlídají, aby vás faktura nepřekvapila

### [sekce] Časté otázky
- `p`: [ FAQ ]
- `h2`: Časté otázky
- `p`: Nenašli jste odpověď? Napište nám.
- `a`: Napište nám
- `summary`: Technické detaily: ukázka SQL a poznámky ke zdrojům
- `p`: Pro představu: dotaz spočítá z exportu GA4 relace a tržby podle zdroje za posledních sedm dní. Filtr na _TABLE_SUFFIX zajistí, že BigQuery přečte jen sedm denních tabulek, ne celou historii – i tak držíme náklady na uzdě.
- `span`: sql
- `button`: Kopírovat
- `pre`: -- Relace a tržby podle zdroje za posledních sedm dní (GA4 export) SELECT session_traffic_source_last_click.cross_channel_campaign.source AS zdroj, session_traffic_source_last_click.cross_channel_campaign.medium AS medium, COUNT(DISTINCT CONCAT(user_pseudo_id, '.', CAST((SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'ga_session_id') AS STRING))) AS relace, ROUND(SUM(IF(event_name = 'purchase', ecommerce.purchase_revenue, 0)), 0) AS trzby FROM `vas-projekt.analytics_123456789.events_*` WHERE _TABLE_SUFFIX BETWEEN FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE('Europe/Prague'), INTERVAL 7 DAY)) AND FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE('Europe/Prague'), INTERVAL 1 DAY)) GROUP BY zdroj, medium ORDER BY trzby DESC;
- `figcaption`: Ukázka pracuje s poli session_traffic_source_last_click, event_params.ga_session_id, user_pseudo_id a ecommerce.purchase_revenue podle schématu exportu GA4.
- `h3`: Co je dobré vědět o zdrojích a modelu
- `li`: GA4: denní export obsahuje všechny události za předchozí den, průběžný export plní během dne tabulku events_intraday. Standardní property má limit denního exportu milion událostí a při výrazném překročení může Google export pozastavit – proto zbytečné události vyřazujeme, nebo přejdeme na průběžný export, který limit nemá.
- `li`: Meta Ads: konektor Data Transfer Service má pevnou sadu tabulek a minimální interval 24 hodin. Druhá možnost je Marketing API.
- `li`: Search Console: hromadný export plní denně tabulky searchdata_site_impression a searchdata_url_impression, historii před zapnutím ale neobsahuje.
- `li`: Rozdíly proti rozhraní GA4: rozhraní odhaduje počty uživatelů a relací algoritmem HyperLogLog++ a může obsahovat modelovaná data, export obsahuje jen naměřené události. Denní tabulky může Google ještě až 72 hodin doplňovat.
- `li`: Transformace: pro tři až pět tabulek bez datového týmu stačí plánované dotazy, pro sklad s desítkami tabulek se hodí Dataform s verzováním v Gitu a testy. Když tým už pracuje v dbt, stavíme v dbt.
- `summary`: Kolik stojí projekt a provoz BigQuery?
- `div`: Cenu projektu stanovíme po úvodní konzultaci jako pevnou částku – rozhoduje počet a typ zdrojů, rozsah modelu, stav měření a počet dashboardů. Provoz platíte přímo Googlu: první TiB dotazů a deset GiB úložiště měsíčně jsou zdarma a v našem modelovém výpočtu pro e-shop se 100 000 událostmi denně vychází na jednotky dolarů měsíčně. Na začátku ho spočítáme podle objemu dat a nastavíme limity, aby vás faktura nepřekvapila.
- `summary`: Jak dlouho to trvá a co od nás budete potřebovat?
- `div`: Délka závisí hlavně na počtu a typu zdrojů – GA4 a Google Ads napojíme rychle, vlastní ERP bez API dá víc práce. Potřebujeme projekt v Google Cloudu s platebním účtem nebo souhlas ho založit, roli Editor v GA4, přístupy pro čtení do reklamních systémů, export nebo API k e-shopu, ERP či CRM a kontakt na vývojáře nebo IT. Od týmu pak jednu až dvě hodiny na úvodní workshop a kontrolní čísla z účetnictví.
- `summary`: Získáme i historická data z GA4?
- `div`: Surová data na úrovni událostí začnou do BigQuery proudit až po propojení GA4 – zpětně je export nedoplní, proto ho zapínáme hned na začátku. Starší agregované reporty umí dodatečně načíst konektor Data Transfer Service pro GA4, a to tak daleko, jak dovolí uchovávání dat v GA4 property. Pro meziroční srovnání to obvykle stačí, pro analýzy jednotlivých relací ne.
- `summary`: Musíme umět SQL?
- `div`: Ne. Pro běžnou práci připravíme reportovací tabulky a dashboard, ve kterém filtrujete a třídíte klikáním. Analytikovi, který chce jít do detailu, předáme dokumentaci tabulek a příklady dotazů, a když budete chtít, přidáme školení na vlastních datech.
- `summary`: Komu budou patřit data a účty?
- `div`: Vám. Export i model stavíme v projektu Google Cloudu, který i s platebním účtem patří vaší organizaci, a zdrojový kód transformací předáme v repozitáři, ke kterému máte přístup. My dostaneme jen potřebné role, ideálně časově omezené, a po předání je můžete kdykoli odebrat. Žádná data neukládáme na vlastní infrastruktuře.
- `summary`: Jak je to s GDPR a osobními údaji v BigQuery?
- `div`: Přímé identifikátory jako e-mail, telefon nebo jméno do skladu v čitelné podobě neposíláme. Pseudonymní identifikátory jako user_pseudo_id ale mohou patřit mezi osobní údaje, proto volíme umístění dat v EU, omezujeme přístupy rolemi a nastavujeme expiraci starých dat. Právní posouzení zajistí váš právník nebo pověřenec – nejsme advokátní kancelář.
- `code`: user_pseudo_id

### [sekce] 
- `p`: [ pokračujte ]
- `a`: Dashboardy a reporting Data Studio i Power BI
- `a`: Audit měření zjistíme, kde data utíkají
- `a`: Měření konverzí Ads, Meta, Sklik i Heureka vidí totéž
- `a`: GA4 → BigQuery export: nastavení, limity a cena článek

### [sekce] Pojďme spojit vaše data do jednoho místa
- `p`: [ Kontakt ]
- `h2`: Pojďme spojit vaše data do jednoho místa
- `p`: Na úvodní třicetiminutové konzultaci zdarma projdeme zdroje dat a řekneme, jestli BigQuery potřebujete už teď – a kolik by provoz stál u Googlu.
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

### [sekce] Pojďme spojit vaše data do jednoho místa
- `ol@aria-label`: Co se stane po odeslání