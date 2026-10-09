# URL: https://datalayer.vitnovotny.cz/reseni/b2b-a-lead-generation

1. [Úvod](/)
2. B2B a lead generation

řešení pro B2B a lead generation

# Měření leadů od formuláře až po zakázku v CRM

Lead je poptávka potenciálního zákazníka – z formuláře na webu nebo z telefonu. Měření leadů propojí web, kde poptávka vznikne, CRM, kde obchod zjistí její kvalitu a hodnotu, a reklamní systémy, které podle výsledku optimalizují kampaně. Formulář uloží do CRM zdroj a ID kliknutí a fáze obchodu putují zpět do Google Ads, Mety a LinkedInu jako offline konverze. Reklama se pak neučí z počtu formulářů, ale z poptávek, které obchod opravdu uzavřel.

[Probrat měření leadů](#kontakt)[Ukázat, jak to funguje](#jak-to-funguje)

Úvodní konzultace zdarma a nezávazně

* Zakázky z CRM zpět v reklamních systémech
* Cena poptávky i zakázky podle kanálů
* Osobní údaje jen jako hash a se souhlasem

symptomy

## Poznáváte se?

Měření až do CRM má smysl, když reklama přivádí poptávky, ale nikdo neví, které z nich končí zakázkou.

poptávky

### Hodně poptávek, málo zakázek

Kampaně hlásí rekordní počet poptávek a obchod tvrdí, že polovinu tvoří studenti, konkurence a spam.

google ads

### Google Ads se řídí počtem formulářů

Chytré nabídky se učí, že dobrá poptávka je jakákoli poptávka, a přivádějí jich víc – levnějších, ale horších.

crm

### V CRM chybí zdroj

Obchodník vidí jméno a telefon, ale ne kampaň, klíčové slovo ani to, že zákazník přišel z LinkedInu.

cyklus

### Obchodní cyklus trvá měsíce

Obchod uzavře zakázku po třech měsících a reklamní systém se o ní nikdy nedozví.

výstupy

## Co uděláme a co dostanete

Uzavřený okruh od kliknutí po zakázku a zpět stojí na šesti částech – od měření formulářů přes CRM po dashboard.

merici-plan.xlsx

### Měřicí plán a formuláře

Měříme začátek vyplňování, chyby i odeslání formuláře, takže uvidíte, na kterém poli lidé odcházejí.

crm

### Zdroj a ID kliknutí v CRM

Formulář automaticky vyplní v CRM zdroj, kampaň, ID kliknutí a ID poptávky. Pole nastavíme sami, nebo je připravíme pro správce CRM.

mapa-fazi-poptavky.pdf

### Mapa fází poptávky

S obchodem dohodneme fáze, jejich hodnoty a pravidla pro změnu fáze; obchodníky krátce zaškolíme.

offline konverze

### Konverze zpět do reklamních systémů

Kvalifikované poptávky a zakázky s hodnotou pošleme do Google Ads přes Data Manager a do Mety a LinkedInu přes Conversions API.

call tracking

### Měření telefonátů

Úroveň měření zvolíme podle toho, kolik poptávek přichází telefonem – od kliknutí na číslo po dynamická čísla, která hovor zapíšou do CRM.

dashboard

### Dashboard od poptávky po zakázku

Náklady, poptávky a fáze z CRM spojíme v BigQuery a dashboard ukáže cenu poptávky, kvalifikované poptávky i zakázky podle kanálů.

jak to funguje

## Od kliknutí na reklamu po zakázku a zpět

Web, CRM a reklamní systémy tvoří jeden uzavřený okruh. CRM vrací výsledek obchodu tam, kde poptávka vznikla.

reklama

* Google Ads
* Meta
* LinkedIn
* Sklik

každé kliknutí má své ID

web a formulář

* uloží ID kliknutí a UTM
* pošle poptávku do GA4 a reklamních systémů

CRM

* zdroj, ID kliknutí a ID poptávky
* fáze: kvalifikace, nabídka, zakázka

návrat do reklamních systémů

* Google Ads přes Data Manager
* Meta a LinkedIn přes Conversions API

jednou denně

BigQuery a dashboard

* cena poptávky a zakázky podle kanálů

Po kliknutí na reklamu přijde návštěvník na web s ID kliknutí. Formulář pošle poptávku do GA4 a reklamních systémů a spolu se zdrojem do CRM. Obchod v CRM mění fáze a my je jednou denně vracíme do Google Ads, Mety a LinkedInu. BigQuery pak spojí náklady, poptávky a zakázky do dashboardu.

Na konkrétním CRM záleží méně, než se zdá – rozhoduje, jestli do něj dostaneme zdroj poptávky a jestli z něj jde pravidelně exportovat fáze.

HubSpotSalesforcePipedriveRaynetMicrosoft Dynamics 365vlastní CRM nebo ERP

fáze poptávky

## Co kam posíláme v jednotlivých fázích poptávky

Rané fáze slouží reklamním systémům k rychlému učení, pozdní k ověření, že reklama vydělává.

poptávka

* GA4
* Google Ads – sekundární konverze
* Meta a LinkedIn

hned z webu, s odhadem hodnoty

kvalifikovaná poptávka

* GA4
* Google Ads – primární konverze při dlouhém cyklu
* Meta přes Conversions API

z CRM jednou denně

nabídka

* GA4
* Google Ads – sekundární konverze
* Meta volitelně

z CRM s hodnotou nabídky

zakázka

* GA4
* Google Ads – primární konverze při krátkém cyklu
* Meta a LinkedIn přes Conversions API

skutečná hodnota bez DPH

Časová osa fází poptávky: odeslaný formulář nebo hovor odejde hned z webu; kvalifikovanou poptávku, nabídku i zakázku posíláme z CRM jednou denně. Diskvalifikované poptávky a prohrané zakázky do reklamních systémů neposíláme.

Google Ads přiřadí offline konverzi jen do devadesáti dní od kliknutí. U delších obchodů proto jako primární konverzi nastavíme kvalifikovanou poptávku a zakázky sledujeme v reportu.

### Jaké osobní údaje posíláme a jaké nikdy

* **Kontakty jen jako hash.** E-mail a telefon po normalizaci zahashujeme a pošleme jen do Google Ads, Mety a LinkedInu.
* **Jen se souhlasem.** Bez souhlasu `ad_user_data` v [Consent Mode v2](/sluzby/cookie-lista-consent-mode) hash neodejde.
* **Do GA4 nic čitelného.** E-mail, jméno ani telefon v GA4 nebudou; obsah zprávy a citlivé údaje neposíláme nikam.

srovnání

## Běžné měření poptávek vs. měření až do CRM

Většina agentur měří odeslaný formulář. My měříme i to, co se s poptávkou stalo potom.

| Oblast | Běžné měření poptávek | Měření až do CRM |
| --- | --- | --- |
| Co je konverze | odeslaný formulář | poptávka, kvalifikovaná poptávka i zakázka |
| Na co se učí reklama | na počet formulářů | na poptávky, ze kterých jsou zakázky |
| Zdroj poptávky v CRM | chybí, nebo ho dopisuje obchodník | automaticky kampaň, klíčové slovo, ID kliknutí |
| Telefonáty | v měření obvykle chybí | podle zvolené úrovně měření telefonátů |
| Report | cena poptávky | cena poptávky, kvalifikované poptávky i zakázky |

**286 Kč a 48 000 Kč**Meta: nejlevnější poptávka, ale nejdražší zakázka

**947 Kč a 9 000 Kč**LinkedIn: nejdražší poptávka, ale nejlevnější zakázka

Cena poptávky a cena zakázky v příkladu s fiktivními daty za jedno čtvrtletí. Bez propojení s CRM byste rozpočet přesouvali opačným směrem.

postup

## Jak postupujeme

Stejných pět kroků jako u všech našich služeb. Mapu fází poptávky, jejich hodnoty a pravidla navrhneme s obchodem na krátkém workshopu.

1. 01

   ### Audit

   Projdeme GA4, Google Tag Manager (GTM), souhlas a reklamní systémy a porovnáme je s CRM.

   Od vás: přístupy pro čtení
2. 02

   ### Měřicí plán

   Obchodní cíle převedeme na události, parametry a pravidla pojmenování.

   Od vás: hodinová schůzka a schválení plánu
3. 03

   ### Implementace

   Upravíme formuláře a pole v CRM, napojíme Google Ads přes Data Manager a Metu s LinkedInem přes Conversions API, podle potřeby i měření telefonátů.

   Od vás: správce CRM, případně vývojář webu, a přístup správce do reklamních účtů
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s CRM.

   Od vás: testovací poptávka a export z CRM
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a budeme hlídat, aby měření po dalším releasu nepřestalo fungovat.

   Od vás: předávací schůzka

kontrola

## Jak poznáte, že měření leadů funguje

Celý okruh ověříme na testovacích poptávkách. Reklamní systémy uvidí první zakázky z nového měření, až je obchodníci uzavřou.

* Každá nová poptávka má v CRM zdroj, kampaň a ID kliknutí.
* Testovací poptávka projde celým okruhem: web, GA4, CRM i reklamní systémy.
* Google Ads spáruje první offline konverze s kliknutím.
* Dashboard ukáže cenu poptávky, kvalifikované poptávky i zakázky podle kanálů.

FAQ

## Časté otázky

Technické detailyMapa fází, identifikátory kliknutí a měření telefonátů

Ukázka mapy fází poptávky

| Fáze v CRM | Událost GA4 | Reklamní systémy |
| --- | --- | --- |
| Odeslaný formulář nebo hovor | `generate_lead` | Google Ads sekundárně, Meta i LinkedIn jako `Lead` |
| Kontaktovaná | `working_lead` | jen GA4 |
| Kvalifikovaná (SQL – sales qualified lead) | `qualify_lead` | Google Ads primárně při dlouhém cyklu, Meta vlastní `QualifiedLead` |
| Diskvalifikovaná | `disqualify_lead` | jen GA4 a BigQuery, ne jako konverze |
| Odeslaná nabídka | vlastní `proposal_sent` | Google Ads sekundárně, Meta volitelně |
| Vyhraná zakázka | `close_convert_lead` | Google Ads primárně při krátkém cyklu, Meta `Purchase` nebo vlastní `Won` |
| Prohraná zakázka | `close_unconvert_lead` | jen GA4 a BigQuery |

Web ukládá ID kliknutí `gclid`, u iOS `gbraid` nebo `wbraid`, dále `fbclid` a `li_fat_id` spolu s UTM, a to jen se souhlasem. E-mail před hashováním SHA-256 převedeme na malá písmena bez mezer, telefon do mezinárodního formátu s předvolbou, třeba +420. Raným fázím přiřazujeme očekávanou hodnotu – průměrnou zakázku × pravděpodobnost uzavření – a kontakty z jedné firmy spojujeme do jednoho obchodního případu, aby report nezapočítal jednu zakázku třikrát.

U formulářů Lead Ads vyžaduje Conversions API pro CRM podle Mety alespoň 200 leadů měsíčně a denní nahrávání dat. Starší Offline Conversions API od verze Graph API v17.0 offline události nepřijímá, posíláme je proto přes Conversions API.

Telefonáty měříme na čtyřech úrovních: kliknutí na číslo, volání z reklam Google Ads přes přesměrovací číslo, dynamická čísla od poskytovatele call trackingu a hovor jako poptávka v CRM. U dvou vyšších úrovní je potřeba volající informovat, pokud hovory nahráváte, a vybrat poskytovatele, který data zpracovává v EU.

Jak dostaneme zakázky z CRM zpět do Google Ads?

U každé poptávky formulář do CRM uloží ID kliknutí a hash e-mailu nebo telefonu. Fáze s hodnotou pak jednou denně posíláme přes Google Ads Data Manager – z HubSpotu a Salesforce přímo, z ostatních CRM přes BigQuery nebo tabulku. Kombinaci ID kliknutí a hashe Google nazývá „rozšířené konverze pro potenciální zákazníky“ a pro nové implementace ji doporučuje, protože konverzi spáruje, i když ID kliknutí cestou zmizí. Od 15. června 2026 Google směruje nahrávání offline konverzí do Data Manager API, starší skripty proto převedeme.

Kolik to stojí a z čeho se cena skládá?

Cenu určuje počet formulářů a vstupních kanálů, třeba webu, telefonu nebo Lead Ads, dále CRM a jeho možnosti exportu, počet reklamních systémů, úroveň měření telefonátů a dashboard. Po úvodní konzultaci a krátkém auditu dostanete nabídku s pevným rozsahem, výstupy a termínem. Poplatky za call tracking nebo licence CRM platíte přímo poskytovatelům.

Jak dlouho to trvá a kdy uvidíme výsledky?

Termín dostanete spolu s nabídkou po krátkém auditu. Měření formulářů a zdroje v CRM funguje hned po implementaci, offline konverze uvidíte v reklamních systémech, až obchodníci uzavřou první zakázky z nových poptávek – podle délky cyklu za týdny až měsíce. S plným efektem počítejte po jednom až dvou obchodních cyklech.

Komu patří data, účty a nastavení?

Vám. Pracujeme přímo ve vašich účtech v GA4, GTM, reklamních systémech i CRM a přístupy po skončení projektu odeberete. Pole a automatizace v CRM nastavíme sami, nebo je připravíme pro správce CRM, a mapu fází s dokumentací předáme.

Je posílání dat z CRM do Googlu a Mety v souladu s GDPR?

Technicky to nastavujeme konzervativně: kontaktní údaje jen jako hash, jen se souhlasem `ad_user_data`, žádné osobní údaje v GA4 a jen nezbytná pole. Vy jste správce osobních údajů z CRM, Google u rozšířených konverzí vystupuje jako zpracovatel podle smluvních podmínek Google Ads Data Processing Terms a my jako zpracovatel podle zpracovatelské smlouvy. Právní titul pro předání údajů posoudí váš právník – nejsme advokátní kancelář, ale dodáme mu přesný popis datových toků.

Co od nás budete potřebovat?

Přístupy do GTM, GA4 a reklamních účtů, součinnost správce CRM a případně vývojáře webu pro úpravu formulářů. Hlavně ale krátký workshop s obchodem: bez dohody, co znamená „kvalifikovaná poptávka“ a kdy obchodník mění fázi, žádné měření fungovat nebude. Po spuštění je důležité, aby obchodníci fáze v CRM opravdu vyplňovali.

pokračujte

[**Měření konverzí**Google Ads, Meta, Sklik i Heureka vidí totéž](/sluzby/mereni-konverzi)[**BigQuery a datový sklad**surová data bez limitů GA4](/sluzby/bigquery)[**Dashboardy a reporting**Data Studio i Power BI](/sluzby/dashboardy-a-reporting)

Kontakt

## Zjistíme, kolik vás doopravdy stojí jedna zakázka

Na úvodní konzultaci projdeme formuláře, CRM a kampaně a řekneme, co propojit jako první.

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