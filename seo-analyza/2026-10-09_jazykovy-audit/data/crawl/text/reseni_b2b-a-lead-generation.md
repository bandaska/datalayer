# URL: https://datalayer.vitnovotny.cz/reseni/b2b-a-lead-generation

1. [Úvod](/)
2. B2B a lead generation

[ řešení pro B2B a lead generation ]

# Měření leadů od formuláře až po zakázku v CRM

Měření leadů propojí web, kde poptávka vznikne, CRM, kde obchod zjistí její kvalitu a hodnotu, a reklamní systémy, které z výsledku optimalizují. Formulář uloží zdroj a ID kliknutí do CRM a fáze obchodu putují zpět do Google Ads, Mety a LinkedInu jako offline konverze. Reklama se pak neučí z počtu formulářů, ale z poptávek, které obchod opravdu uzavřel.

[[ Probrat měření leadů ]](#kontakt)[[ Ukázat, jak to funguje ]](#jak-to-funguje)

Třicet minut zdarma · odpověď do jednoho pracovního dne

* Zakázky z CRM zpět v reklamách
* Cena leadu i zakázky po kanálech
* Osobní údaje jen jako hash a se souhlasem

[ symptomy ]

## Poznáváte se?

Měření do CRM dává smysl, když reklama přivádí poptávky, ale nikdo neví, které z nich končí zakázkou.

leady

### Hodně leadů, málo zakázek

Kampaně hlásí rekordní počet poptávek a obchod tvrdí, že polovina jsou studenti, konkurence a spam.

google ads

### Google Ads optimalizuje na formulář

Chytré nabídky se učí, že dobrý lead je jakýkoli lead, a přivádějí víc levných a horších.

crm

### V CRM chybí zdroj

Obchodník vidí jméno a telefon, ale ne kampaň, klíčové slovo ani to, že zákazník přišel z LinkedInu.

cyklus

### Obchodní cyklus trvá měsíce

Obchod uzavře zakázku po třech měsících a reklamní systém se o ní nikdy nedozví.

[ výstupy ]

## Co uděláme a co dostanete

Okruh od kliknutí po zakázku stojí na šesti stavebních blocích – od měření formulářů přes CRM po dashboard.

merici-plan.xlsx

### Měřicí plán a formuláře

Měříme začátek vyplňování, chyby i odeslání formuláře, takže uvidíte, na kterém poli lidé odcházejí.

crm

### Zdroj a ID kliknutí v CRM

Formulář automaticky vyplní v CRM zdroj, kampaň, ID kliknutí a ID leadu. Pole nastavíme sami, nebo je připravíme pro CRM admina.

mapa-fazi-leadu.pdf

### Mapa fází leadu

S obchodem dohodneme fáze, pravidla jejich změny a hodnoty a obchodníky krátce zaškolíme.

data manager · capi

### Konverze zpět do reklam

Kvalifikované leady a zakázky s hodnotou pošleme do Google Ads přes Data Manager a do Mety a LinkedInu přes Conversions API.

call tracking

### Měření telefonátů

Telefonáty měříme podle toho, kolik poptávek tvoří – od kliku na číslo po dynamická čísla, která hovor zapíšou do CRM.

dashboard

### Dashboard pipeline

Náklady, leady a fáze z CRM spojíme v BigQuery a dashboard ukáže cenu leadu, kvalifikovaného leadu i zakázky po kanálech.

[ jak to funguje ]

## Od kliknutí na reklamu po zakázku a zpět

Web, CRM a reklamní systémy tvoří jeden okruh. CRM vrací výsledek obchodu tam, kde lead vznikl.

reklama

* Google Ads
* Meta
* LinkedIn
* Sklik

klik nese ID kliknutí

web a formulář

* uloží ID kliknutí a UTM
* pošle lead do GA4 a reklam

CRM

* zdroj, ID kliknutí a ID leadu
* kvalifikace → nabídka → zakázka

návrat do reklam

* Google Ads přes Data Manager
* Meta a LinkedIn přes Conversions API

jednou denně

BigQuery a dashboard

* cena leadu a zakázky po kanálech

Klik na reklamu přinese na web ID kliknutí. Formulář pošle lead do GA4 a reklamních systémů a se zdrojem do CRM. Obchod v CRM mění fáze, jednou denně je vracíme do Google Ads, Mety a LinkedInu a BigQuery spojí náklady, leady a zakázky do dashboardu.

Na konkrétním CRM záleží méně, než se zdá – rozhoduje, jestli do něj dostaneme zdroj leadu a jestli z něj jde pravidelně exportovat fáze.

HubSpotSalesforcePipedriveRaynetMicrosoft Dynamics 365vlastní CRM nebo ERP

[ fáze leadu ]

## Fáze leadu: co kam posíláme

Rané fáze slouží reklamním systémům k rychlému učení, pozdní k ověření, že reklama vydělává.

lead

* GA4
* Google Ads – sekundární konverze
* Meta a LinkedIn

hned z webu, s odhadem hodnoty

kvalifikovaný lead

* GA4
* Google Ads – hlavní konverze při dlouhém cyklu
* Meta přes Conversions API

z CRM jednou denně

nabídka

* GA4
* Google Ads – sekundární konverze
* Meta volitelně

z CRM s hodnotou nabídky

zakázka

* GA4
* Google Ads – hlavní konverze při krátkém cyklu
* Meta a LinkedIn přes Conversions API

skutečná hodnota bez DPH

Časová osa fází leadu: odeslaný formulář nebo hovor odejde hned z webu, kvalifikovaný lead, nabídku i zakázku posíláme z CRM jednou denně. Diskvalifikované leady a prohrané zakázky do reklam neposíláme.

Google Ads přiřadí offline konverzi jen do devadesáti dní od kliknutí. U delších obchodů proto optimalizujeme na kvalifikovaný lead a zakázky sledujeme v reportu.

### Osobní údaje: co posíláme a co nikdy

* **Kontakty jen jako hash.** E-mail a telefon po normalizaci zahashujeme a pošleme jen do Google Ads, Mety a LinkedInu.
* **Jen se souhlasem.** Bez souhlasu `ad_user_data` v [Consent Mode v2](/sluzby/cookie-lista-consent-mode) hash neodejde.
* **Do GA4 nic čitelného.** E-mail, jméno ani telefon v GA4 nebudou, obsah zprávy a citlivé údaje neposíláme nikam.

[ srovnání ]

## Běžné měření leadů vs. měření až do CRM

Většina agentur měří odeslaný formulář. My měříme i to, co se s poptávkou stalo potom.

| Oblast | Běžné měření leadů | Měření až do CRM |
| --- | --- | --- |
| Co je konverze | odeslaný formulář | lead, kvalifikovaný lead i zakázka |
| Na co se učí reklama | na počet formulářů | na leady, ze kterých jsou zakázky |
| Zdroj leadu v CRM | chybí, nebo ho dopisuje obchodník | automaticky kampaň, klíčové slovo, ID kliknutí |
| Telefonáty | nikdo je neměří | podle zvolené úrovně call trackingu |
| Report | cena za lead | cena leadu, kvalifikovaného leadu i zakázky |

**286 Kč → 48 000 Kč**Meta: nejlevnější lead, ale nejdražší zakázka

**947 Kč → 9 000 Kč**LinkedIn: nejdražší lead, ale nejlevnější zakázka

Cena leadu → cena zakázky v ukázkovém příkladu s fiktivními daty za jedno čtvrtletí. Bez propojení s CRM byste rozpočet přesouvali opačným směrem.

[ postup ]

## Jak postupujeme

Stejných pět kroků jako u všech našich služeb. Mapu fází leadu, hodnoty a pravidla navrhneme s obchodem na krátkém workshopu.

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

   Upravíme formuláře a pole v CRM, napojíme Google Ads přes Data Manager a Metu s LinkedInem přes Conversions API, podle potřeby i call tracking.

   od vás: CRM admin, případně vývojář webu, a admin přístup do reklamních účtů
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.

   od vás: testovací objednávka a export z administrace
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

   od vás: předávací schůzka

[ kontrola ]

## Jak poznáte, že měření leadů funguje

Okruh ověříme na testovacích leadech. Zakázky uvidí reklamní systémy, až obchod uzavře první obchody z nového měření.

* každý nový lead má v CRM zdroj, kampaň a ID kliknutí
* testovací lead projde celým okruhem: web, GA4, CRM i reklamy
* Google Ads spáruje první offline konverze s kliknutím
* dashboard ukáže cenu leadu, kvalifikovaného leadu i zakázky po kanálech

[ FAQ ]

## Časté otázky

Nenašli jste odpověď? [Napište nám](#kontakt).

Technické detaily: mapa fází, identifikátory a call tracking

Ukázka mapy fází leadu

| Fáze v CRM | Událost GA4 | Reklamní systémy |
| --- | --- | --- |
| Odeslaný formulář nebo hovor | `generate_lead` | Google Ads sekundárně, Meta i LinkedIn jako `Lead` |
| Kontaktovaný | `working_lead` | jen GA4 |
| Kvalifikovaný, SQL | `qualify_lead` | Google Ads primárně při dlouhém cyklu, Meta vlastní `QualifiedLead` |
| Diskvalifikovaný | `disqualify_lead` | jen GA4 a BigQuery, ne jako konverze |
| Odeslaná nabídka | vlastní `proposal_sent` | Google Ads sekundárně, Meta volitelně |
| Vyhraná zakázka | `close_convert_lead` | Google Ads primárně při krátkém cyklu, Meta `Purchase` nebo vlastní `Won` |
| Prohraná zakázka | `close_unconvert_lead` | jen GA4 a BigQuery |

Web ukládá ID kliknutí `gclid`, u iOS `gbraid` nebo `wbraid`, dále `fbclid` a `li_fat_id` spolu s UTM, a to jen se souhlasem. E-mail a telefon před hashováním SHA-256 převedeme na malá písmena bez mezer a telefon do formátu +420. Raným fázím přiřazujeme očekávanou hodnotu – průměrnou zakázku × pravděpodobnost uzavření – a kontakty z jedné firmy párujeme na obchodní případ, aby report nezapočítal jednu zakázku třikrát.

Conversions API pro CRM u formulářů Lead Ads vyžaduje podle Mety alespoň 200 leadů měsíčně a denní nahrávání dat. Starší Offline Conversions API od verze Graph API v17.0 offline události nepřijímá, posíláme je proto přes Conversions API.

Telefonáty měříme na čtyřech úrovních: klik na číslo, volání z reklam Google Ads přes přesměrovací číslo, dynamická čísla od poskytovatele call trackingu a hovor jako lead v CRM. U dvou vyšších úrovní je potřeba volající informovat, pokud hovory nahráváte, a vybrat poskytovatele, který data zpracovává v EU.

Jak dostanete zakázky z CRM zpět do Google Ads?

U každého leadu uloží formulář do CRM ID kliknutí a hash e-mailu nebo telefonu. Fáze s hodnotou pak jednou denně posíláme přes Google Ads Data Manager – z HubSpotu a Salesforce přímo, z ostatních CRM přes BigQuery nebo tabulku. Kombinaci ID kliknutí a hashe Google říká rozšířené konverze pro potenciální zákazníky a pro nové implementace ji doporučuje, protože konverzi spáruje, i když ID kliknutí cestou zmizí. Od 15. června 2026 Google směruje nahrávání offline konverzí do Data Manager API, starší skripty proto převedeme.

Kolik to stojí a z čeho se cena skládá?

Cenu určuje počet formulářů a vstupních kanálů, třeba webu, telefonu nebo Lead Ads, dále CRM a jeho možnosti exportu, počet reklamních systémů, úroveň call trackingu a dashboard. Po úvodní konzultaci a krátkém auditu dostanete nabídku s pevným rozsahem, výstupy a termínem. Poplatky za call tracking nebo licence CRM platíte přímo poskytovatelům.

Jak dlouho to trvá a kdy uvidíme výsledky?

Termín dostanete spolu s nabídkou po krátkém auditu. Měření formulářů a zdroje v CRM funguje hned po implementaci, offline konverze uvidíte v reklamách, až obchodníci uzavřou první zakázky z nových leadů – podle délky cyklu za týdny až měsíce. Plný efekt počítejte po jednom až dvou obchodních cyklech.

Komu patří data, účty a nastavení?

Vám. Pracujeme přímo ve vašich účtech GA4, GTM, reklamních systémů i CRM a přístupy po skončení projektu odeberete. Pole a automatizace v CRM nastavíme sami, nebo je připravíme pro CRM admina, a mapu fází s dokumentací předáme.

Je posílání dat z CRM do Googlu a Mety v souladu s GDPR?

Technicky to nastavujeme konzervativně: kontaktní údaje jen jako hash, jen se souhlasem `ad_user_data`, žádné osobní údaje v GA4 a jen nezbytná pole. Vy jste správce údajů z CRM, Google u rozšířených konverzí vystupuje jako zpracovatel podle Google Ads Data Processing Terms a my jako zpracovatel podle zpracovatelské smlouvy. Právní titul pro předání údajů posoudí váš právník – nejsme advokátní kancelář, ale dodáme mu přesný popis datových toků.

Co od nás budete potřebovat?

Přístupy do GTM, GA4 a reklamních účtů a administrátora CRM, případně vývojáře webu pro úpravu formulářů. Hlavně ale krátký workshop s obchodem: bez dohody, co znamená „kvalifikovaný lead“ a kdy obchodník mění fázi, žádné měření fungovat nebude. Po spuštění je důležité, aby obchodníci fáze v CRM opravdu vyplňovali.

[ pokračujte ]

[**Měření konverzí**Ads, Meta, Sklik i Heureka vidí totéž](/sluzby/mereni-konverzi)[**BigQuery a datový sklad**surová data bez limitů GA4](/sluzby/bigquery)[**Dashboardy a reporting**Data Studio i Power BI](/sluzby/dashboardy-a-reporting)

[ Kontakt ]

## Pojďme zjistit, kolik vás stojí zakázka, ne lead

Na třicetiminutové konzultaci zdarma projdeme formuláře, CRM a kampaně a řekneme, co propojit jako první.

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