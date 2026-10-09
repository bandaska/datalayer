# URL: https://datalayer.vitnovotny.cz/sluzby/bigquery

1. [Úvod](/)
2. [Služby](/sluzby)
3. BigQuery a datový sklad

[ bq · data a reporting ]

# BigQuery a datový sklad pro marketing

BigQuery je datový sklad Googlu, do kterého GA4 umí každý den nebo průběžně exportovat všechny události bez vzorkování. Surová data z GA4 v něm spojíme s náklady z Google Ads, Mety a Skliku a s objednávkami, maržemi a vratkami z e-shopu, CRM nebo ERP. Vše běží ve vašem Google Cloudu, s hlídanými náklady a dashboardem, kterému věří i finanční ředitel.

[[ Konzultovat BigQuery ]](#kontakt)[[ Ukázka datového modelu ]](#architektura)

Úvodní třicetiminutová konzultace zdarma · provoz BigQuery platíte přímo Googlu

* Data i fakturace ve vlastním Google Cloudu
* Limity a rozpočtové alerty od prvního dne
* Dokumentace a slovník metrik

[ symptomy ]

## Poznáváte se?

GA4 je dobrý nástroj na sběr dat. Na řízení marketingu podle peněz mu ale chybí data, která firma drží jinde.

retention

### Meziroční srovnání končí na čtrnácti měsících

V Průzkumech standardní GA4 vidíte událostní data nejvýš čtrnáct měsíců zpět, takže sezónnost a kohorty porovnáte jen obtížně.

margin

### ROAS počítáte z obratu, ne z marže

GA4 nezná nákupní ceny, storna ani vratky. Kampaň, která „vydělává“, může po odečtení vratek prodělávat.

costs

### Náklady sčítá někdo ručně

Každé pondělí kdosi stahuje náklady z Google Ads, Mety a Skliku do Excelu. Chyba v jednom řádku a porada řeší špatná čísla.

crm

### Lead z webu nikdo nespojí se zakázkou

Marketing vykazuje leady, obchod zakázky v CRM. Kolik tržeb přinesla která kampaň, neví nikdo.

[ výstupy ]

## Co uděláme a co dostanete

Nejdřív se domluvíme, jaká rozhodnutí mají data podpořit, teprve pak stavíme tabulky. Výstupy zůstávají u vás i po skončení spolupráce.

data-plan

### Měřicí plán pro data

Otázky, na které má sklad odpovídat, s metrikami, zdroji, klíči pro propojení a vlastníky v jednom dokumentu.

events\_\*

### Export GA4 do BigQuery

Denní, případně průběžný export v projektu na vašem účtu, s regionem dat a filtrem událostí. Ověříme ho proti datové vrstvě.

ads · meta · sklik

### Náklady a data firmy

Náklady z Google Ads, Mety a Skliku, data ze Search Console a objednávky, marže a vratky z e-shopu, ERP nebo CRM.

raw · staging · marts

### Datový model ve třech vrstvách

Reportovací tabulky pro konkrétní otázky a zdrojový kód transformací v Gitu – v Dataformu, dbt nebo plánovaných dotazech.

budget-alert

### Kontrola nákladů a přístupů

Partitioning, clustering, limity zpracovaných bajtů, rozpočtové alerty a role pro každý přístup.

metrics.md

### Slovník metrik a dashboard

Definice tržby, marže, POAS nebo CPL, napojení [dashboardu](/sluzby/dashboardy-a-reporting) v Data Studiu (dříve Looker Studio) nebo Power BI a školení týmu.

[ architektura ]

## Jak data tečou z webu a firemních systémů do reportu

Data držíme ve třech vrstvách: surová beze změn, očištěná se sjednocenými názvy, měnami a časovými pásmy a reportovací s tabulkami pro konkrétní otázky.

zdroje

* web: GTM a GA4
* Google Ads, Meta Ads, Sklik
* Search Console
* e-shop, ERP a CRM

BigQuery · raw

* events\_YYYYMMDD
* ads\_\* · meta\_\* · sklik\_\*
* erp\_orders · crm\_deals

Data beze změn, model kdykoli přepočítáme.

BigQuery · staging

* sjednocené typy a měny
* DPH a časová pásma
* odstranění duplicit

Transformace v Dataformu, dbt nebo plánovaných dotazech.

BigQuery · marts

* sessions
* channel\_daily
* orders\_margin
* leads\_to\_deals

Tabulky pro konkrétní otázky, nad nimi běží dashboardy.

výstupy

* Data Studio
* Power BI
* exporty zpět: marže do Ads, offline konverze

Schéma architektury: web posílá data přes GTM do GA4. GA4, reklamní systémy, Search Console, e-shop nebo ERP a CRM plní BigQuery, kde data držíme ve vrstvách raw, staging a marts. Z reportovacích tabulek čerpají dashboardy v Data Studiu nebo Power BI.

* **Jedno místo pravdy.** Chování na webu, náklady kampaní a data e-shopu či CRM v jednom modelu.
* **Každé číslo dohledáte** v dashboardu až ke zdrojové události.
* **Governance pod celým skladem.** Role, limity dotazů, rozpočtové alerty a expirace starých dat.

[ rozhodnutí ]

## Co v rozhraní GA4 nejde – a kdy BigQuery zatím nepotřebujete

BigQuery rozhraní GA4 nenahrazuje. Doplňuje ho o delší historii, úplná data a spojení s daty firmy.

### Co v rozhraní GA4 nejde, v BigQuery ano

* historie delší než čtrnáct měsíců, expiraci určujete vy
* surové události bez „(other)“ a přesné počty uživatelů a relací
* marže, storna a vratky z e-shopu nebo ERP
* automatické načítání nákladů z Mety a Skliku každý den
* spojení leadu se zakázkou v CRM, vlastní atribuce, kohorty a LTV

### Doporučíme počkat, když…

* máte jednotky až nízké desítky objednávek nebo leadů týdně→ stačí GA4 a dashboard nad přímými konektory
* GA4 nesedí s e-shopem o desítky procent→ nejdřív [audit měření](/sluzby/audit-mereni)
* podle dat ve firmě nikdo nebude rozhodovat→ začneme jedním reportem pro vedení

**6,25 dolaru**za TiB přečtených dat v režimu on-demand, první TiB měsíčně zdarma

**řádově 0,02 dolaru**za GiB aktivního úložiště měsíčně, prvních deset GiB zdarma

**jednotky dolarů**měsíčně v modelovém výpočtu pro e-shop se 100 000 událostmi v GA4 denně

Ceny podle ceníku Google Cloudu k říjnu 2026, bez DPH. Fakturu dostáváte přímo od Googlu – na začátku spočítáme odhad podle objemu dat a nastavíme limity.

[ postup ]

## Jak postupujeme

Stejných pět kroků jako u všech našich služeb. Export GA4 zapínáme hned na začátku, protože zpětně ho Google nedoplní – každý den navíc znamená den dat navíc.

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

   Propojíme GA4 s BigQuery, načteme náklady z reklamních systémů a data e-shopu, ERP či CRM, postavíme datový model a nastavíme limity, alerty a role.

   od vás: projekt v Google Cloudu s platebním účtem, roli Editor v GA4, přístupy pro čtení ke zdrojům a kontakt na vývojáře
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.

   od vás: testovací objednávka a export z administrace
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

   od vás: předávací schůzka

[ kontrola ]

## Jak poznáte, že sklad funguje

Než model předáme, porovnáme ho s účetnictvím a rozdíly proti rozhraní GA4 popíšeme ve srovnávací tabulce. Sběr dat, ze kterého sklad čerpá, pak může hlídat služba [Správa webu a měření](/sluzby/sprava-webu-a-mereni).

* tržby a počet objednávek v modelu sedí s účetnictvím za kontrolní měsíc
* export GA4 odpovídá datové vrstvě a každý rozdíl proti rozhraní umíme vysvětlit
* každé číslo v dashboardu má definici ve slovníku metrik
* limity dotazů a rozpočtové alerty hlídají, aby vás faktura nepřekvapila

[ FAQ ]

## Časté otázky

Nenašli jste odpověď? [Napište nám](#kontakt).

Technické detaily: ukázka SQL a poznámky ke zdrojům

Pro představu: dotaz spočítá z exportu GA4 relace a tržby podle zdroje za posledních sedm dní. Filtr na `_TABLE_SUFFIX` zajistí, že BigQuery přečte jen sedm denních tabulek, ne celou historii – i tak držíme náklady na uzdě.

sqlKopírovat

```
-- Relace a tržby podle zdroje za posledních sedm dní (GA4 export)
SELECT
  session_traffic_source_last_click.cross_channel_campaign.source AS zdroj,
  session_traffic_source_last_click.cross_channel_campaign.medium AS medium,
  COUNT(DISTINCT CONCAT(user_pseudo_id, '.',
    CAST((SELECT value.int_value FROM UNNEST(event_params)
          WHERE key = 'ga_session_id') AS STRING))) AS relace,
  ROUND(SUM(IF(event_name = 'purchase', ecommerce.purchase_revenue, 0)), 0) AS trzby
FROM `vas-projekt.analytics_123456789.events_*`
WHERE _TABLE_SUFFIX BETWEEN
      FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE('Europe/Prague'), INTERVAL 7 DAY))
  AND FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE('Europe/Prague'), INTERVAL 1 DAY))
GROUP BY zdroj, medium
ORDER BY trzby DESC;
```

Ukázka pracuje s poli session\_traffic\_source\_last\_click, event\_params.ga\_session\_id, user\_pseudo\_id a ecommerce.purchase\_revenue podle schématu exportu GA4.

### Co je dobré vědět o zdrojích a modelu

* **GA4:** denní export obsahuje všechny události za předchozí den, průběžný export plní během dne tabulku `events_intraday`. Standardní property má limit denního exportu milion událostí a při výrazném překročení může Google export pozastavit – proto zbytečné události vyřazujeme, nebo přejdeme na průběžný export, který limit nemá.
* **Meta Ads:** konektor Data Transfer Service má pevnou sadu tabulek a minimální interval 24 hodin. Druhá možnost je Marketing API.
* **Search Console:** hromadný export plní denně tabulky `searchdata_site_impression` a `searchdata_url_impression`, historii před zapnutím ale neobsahuje.
* **Rozdíly proti rozhraní GA4:** rozhraní odhaduje počty uživatelů a relací algoritmem HyperLogLog++ a může obsahovat modelovaná data, export obsahuje jen naměřené události. Denní tabulky může Google ještě až 72 hodin doplňovat.
* **Transformace:** pro tři až pět tabulek bez datového týmu stačí plánované dotazy, pro sklad s desítkami tabulek se hodí Dataform s verzováním v Gitu a testy. Když tým už pracuje v dbt, stavíme v dbt.

Kolik stojí projekt a provoz BigQuery?

Cenu projektu stanovíme po úvodní konzultaci jako pevnou částku – rozhoduje počet a typ zdrojů, rozsah modelu, stav měření a počet dashboardů. Provoz platíte přímo Googlu: první TiB dotazů a deset GiB úložiště měsíčně jsou zdarma a v našem modelovém výpočtu pro e-shop se 100 000 událostmi denně vychází na jednotky dolarů měsíčně. Na začátku ho spočítáme podle objemu dat a nastavíme limity, aby vás faktura nepřekvapila.

Jak dlouho to trvá a co od nás budete potřebovat?

Délka závisí hlavně na počtu a typu zdrojů – GA4 a Google Ads napojíme rychle, vlastní ERP bez API dá víc práce. Potřebujeme projekt v Google Cloudu s platebním účtem nebo souhlas ho založit, roli Editor v GA4, přístupy pro čtení do reklamních systémů, export nebo API k e-shopu, ERP či CRM a kontakt na vývojáře nebo IT. Od týmu pak jednu až dvě hodiny na úvodní workshop a kontrolní čísla z účetnictví.

Získáme i historická data z GA4?

Surová data na úrovni událostí začnou do BigQuery proudit až po propojení GA4 – zpětně je export nedoplní, proto ho zapínáme hned na začátku. Starší agregované reporty umí dodatečně načíst konektor Data Transfer Service pro GA4, a to tak daleko, jak dovolí uchovávání dat v GA4 property. Pro meziroční srovnání to obvykle stačí, pro analýzy jednotlivých relací ne.

Musíme umět SQL?

Ne. Pro běžnou práci připravíme reportovací tabulky a dashboard, ve kterém filtrujete a třídíte klikáním. Analytikovi, který chce jít do detailu, předáme dokumentaci tabulek a příklady dotazů, a když budete chtít, přidáme školení na vlastních datech.

Komu budou patřit data a účty?

Vám. Export i model stavíme v projektu Google Cloudu, který i s platebním účtem patří vaší organizaci, a zdrojový kód transformací předáme v repozitáři, ke kterému máte přístup. My dostaneme jen potřebné role, ideálně časově omezené, a po předání je můžete kdykoli odebrat. Žádná data neukládáme na vlastní infrastruktuře.

Jak je to s GDPR a osobními údaji v BigQuery?

Přímé identifikátory jako e-mail, telefon nebo jméno do skladu v čitelné podobě neposíláme. Pseudonymní identifikátory jako `user_pseudo_id` ale mohou patřit mezi osobní údaje, proto volíme umístění dat v EU, omezujeme přístupy rolemi a nastavujeme expiraci starých dat. Právní posouzení zajistí váš právník nebo pověřenec – nejsme advokátní kancelář.

[ pokračujte ]

[**Dashboardy a reporting**Data Studio i Power BI](/sluzby/dashboardy-a-reporting)[**Audit měření**zjistíme, kde data utíkají](/sluzby/audit-mereni)[**Měření konverzí**Ads, Meta, Sklik i Heureka vidí totéž](/sluzby/mereni-konverzi)[**GA4 → BigQuery export: nastavení, limity a cena**článek](/blog/ga4-bigquery-export)

[ Kontakt ]

## Pojďme spojit vaše data do jednoho místa

Na úvodní třicetiminutové konzultaci zdarma projdeme zdroje dat a řekneme, jestli BigQuery potřebujete už teď – a kolik by provoz stál u Googlu.

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