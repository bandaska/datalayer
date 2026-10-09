# URL: https://www.janpospisil.cz/blog/gdpr-a-marketing/

[Domů](/) / [Blog](/blog/) / [Články](/blog/clanky/)

# GDPR a marketing: Praktický průvodce pro online marketéry

GDPR a marketing v praxi: consent management, cookie lišta, emailový marketing a Google Consent Mode v2. Checklist pro soulad.

Jan Pospíšil

5. července 2026

8 min čtení

[Datová analytika](/blog/temata/datova-analytika/)

### Obsah

 

Souhrn článku

* GDPR vyžaduje aktivní souhlas s analytickými a marketingovými cookies, přičemž tlačítko „Odmítnout vše“ musí být stejně viditelné jako „Přijmout vše“.
* Stávajícím zákazníkům lze zasílat e-maily o podobných produktech i bez explicitního souhlasu na základě oprávněného zájmu, ale vždy s možností odhlášení.
* Google Consent Mode v2 je od března 2024 povinný pro personalizované reklamy v EU.

**GDPR (General Data Protection Regulation)** je nařízení EU o ochraně osobních údajů, které zásadně ovlivňuje, jak firmy sbírají, zpracovávají a využívají data v online marketingu. Nedodržení může vést k pokutám až 20 milionů EUR nebo 4 % celosvětového obratu. Pro marketéry je klíčové pochopit pravidla a implementovat je správně.

## Základy GDPR pro marketéry

GDPR se vztahuje na **jakékoliv zpracování osobních údajů** – a osobním údajem je i e-mailová adresa, IP adresa, cookie identifikátor nebo telefonní číslo.

| GDPR požadavek | Co to znamená pro marketing | Příklad |
| --- | --- | --- |
| Právní základ | Musíte mít důvod pro zpracování dat | Souhlas, oprávněný zájem, smlouva |
| Souhlas (consent) | Aktivní, svobodný, informovaný | Checkbox, cookie lišta |
| Právo na přístup | Uživatel může požádat o svá data | Export dat z CRM |
| Právo na výmaz | Uživatel může požádat o smazání | Odhlášení z newsletteru |
| Minimalizace dat | Sbírejte jen nezbytná data | Formulář jen s potřebnými poli |
| Transparentnost | Informujte o zpracování | Zásady ochrany osobních údajů |
| Data retention | Neukládejte data navždy | Automatické mazání po X měsících |

> **GDPR není překážka marketingu – je to rámec pro etický marketing.** Firmy, které GDPR dodržují, budují důvěru zákazníků. Transparentní přístup k datům je konkurenční výhoda, ne břemeno.

## Consent management a cookie lišta

**Consent Management Platform (CMP)** je nástroj pro správu souhlasů s cookies a zpracováním dat.

Požadavky na cookie lištu:

1. **Aktivní souhlas** – předem zaškrtnuté checkboxy nestačí
2. **Granulární volba** – uživatel musí moci vybrat kategorie cookies
3. **Snadné odmítnutí** – tlačítko „Odmítnout vše” musí být stejně viditelné jako „Přijmout vše”
4. **Bez cookie walls** – nesmíte podmiňovat přístup k obsahu souhlasem s cookies
5. **Evidence souhlasu** – uchovávejte záznamy o udělených souhlasech

**Kategorie cookies:**

* **Nezbytné** – funkčnost webu, nevyžadují souhlas
* **Analytické** – Google Analytics, heatmapy – vyžadují souhlas
* **Marketingové** – remarketing, sociální sítě – vyžadují souhlas
* **Personalizační** – preferenční nastavení – vyžadují souhlas

Populární CMP platformy: Cookiebot, CookieYes, Complianz, OneTrust.

## Emailový marketing a GDPR: Pravidla a výjimky

E-mailový marketing podléhá GDPR i zákonu o některých službách informační společnosti (č. 480/2004 Sb.).

**Pravidla pro e-mail marketing:**

* **Opt-in souhlas** – příjemce musí aktivně souhlasit s odběrem
* **Double opt-in** – doporučený (potvrzení e-mailem), ale ne povinný
* **Jednoduché odhlášení** – odkaz na odhlášení v každém e-mailu
* **Identifikace odesílatele** – jasná informace, kdo e-mail posílá
* **Evidence souhlasu** – uchovávejte datum, čas a způsob udělení souhlasu

**Výjimka pro stávající zákazníky:** Pokud zákazník u vás nakoupil, můžete mu zasílat e-maily o podobných produktech/službách i bez explicitního souhlasu (oprávněný zájem) – musíte ale nabídnout možnost odhlášení.

## Formuláře a sběr dat

Při sběru dat přes webové formuláře dodržujte:

* **Minimalizace dat** – sbírejte pouze údaje, které skutečně potřebujete
* **Účel zpracování** – informujte, k čemu data použijete
* **Oddělené souhlasy** – souhlas s obchodními podmínkami ≠ souhlas s newsletterem
* **Odkaz na zásady** – u každého formuláře odkaz na zásady ochrany osobních údajů
* **Bezpečný přenos** – formuláře pouze přes HTTPS

Pro lead generation formuláře: pokud sbíráte e-mail pro stažení e-booku, musíte jasně uvést, zda bude e-mail použit i pro další marketingovou komunikaci – a pro tu vyžadovat samostatný souhlas.

## Google Consent Mode

**Google Consent Mode** je technologie, která umožňuje přizpůsobit chování Google tagů (Analytics, Ads) podle souhlasu uživatele.

Jak funguje:

* Pokud uživatel **souhlasí** – tagy fungují standardně, sbírají plná data
* Pokud uživatel **nesouhlasí** – tagy odesílají anonymizované pingy bez cookies

Od března 2024 vyžaduje Google Consent Mode v2 pro zobrazování personalizovaných reklam v EU/EEA.

Implementace:

1. Nastavte CMP (Cookiebot, CookieYes…)
2. Implementujte Consent Mode v Google Tag Manageru
3. Propojte CMP s Consent Mode
4. Ověřte funkčnost v Google Tag Assistant

Consent Mode umožňuje zachovat přibližně 70 % dat pro [Google Analytics](/blog/google-analytics/) i od uživatelů, kteří odmítli cookies – díky modelování konverzí a behaviorálním signálům.

## Retence dat a práva subjektů

**Data retention** – jak dlouho data uchováváte:

* Nastavte automatické mazání dat v Google Analytics (26 měsíců je výchozí)
* E-mailové adresy neaktivních odběratelů mažte po 12–24 měsících neaktivity
* CRM data zákazníků: po dobu trvání obchodního vztahu + zákonná archivace
* Cookie data: maximálně 13 měsíců (doporučení ÚOOÚ)

**Práva subjektů údajů** – musíte umět reagovat na:

* Žádost o přístup k datům (do 30 dní)
* Žádost o výmaz (právo být zapomenut)
* Žádost o přenositelnost dat
* Námitka proti zpracování

Připravte si interní procesy pro vyřizování těchto žádostí.

## Praktický GDPR checklist pro online marketing

1. Implementujte cookie lištu s CMP (Consent Mode v2)
2. Aktualizujte zásady ochrany osobních údajů
3. Zkontrolujte všechny formuláře – oddělené souhlasy, minimalizace dat
4. Nastavte double opt-in pro e-mailový marketing
5. Ověřte data retention nastavení ve všech nástrojích
6. Zmapujte všechna zpracování osobních údajů (záznam o činnostech)
7. Zajistěte proces pro vyřizování žádostí subjektů údajů
8. Zkontrolujte smlouvy se zpracovateli (DPA – Data Processing Agreement)
9. Proškolte tým – každý, kdo pracuje s daty, musí znát základy GDPR
10. Pravidelně auditujte soulad (minimálně ročně)

## GDPR sankce a pokuty za porušení

Nedodržení GDPR může vést k pokutám:

* **Nižší úroveň:** až 10 mil. EUR nebo 2 % obratu – technická porušení
* **Vyšší úroveň:** až 20 mil. EUR nebo 4 % obratu – porušení základních principů

V Česku ÚOOÚ (Úřad pro ochranu osobních údajů) v posledních letech udělil pokuty v řádu stovek tisíc až jednotek milionů korun. Největší riziko je u nelegálního e-mail marketingu a chybějící cookie consent.

## Často kladené otázky

Potřebuji souhlas pro Google Analytics?

Ano, Google Analytics používá cookies a zpracovává osobní údaje (IP adresa, identifikátory), takže vyžaduje souhlas uživatele. S implementací Google Consent Mode můžete sbírat anonymizovaná data i bez souhlasu, ale plné měření vyžaduje souhlas s analytickými cookies.


Mohu posílat e-maily bez souhlasu?

Obecně ne, potřebujete souhlas (opt-in). Výjimkou jsou stávající zákazníci – těm můžete posílat e-maily o podobných produktech/službách na základě oprávněného zájmu, pokud jim dáte možnost se odhlásit. Pro B2B komunikaci na firemní e-maily existuje také výjimka oprávněného zájmu, ale doporučuje se souhlas.


Co je DPA a potřebuji ho?

DPA (Data Processing Agreement) je smlouva o zpracování osobních údajů mezi vámi (správcem) a dodavatelem (zpracovatelem). Potřebujete ho s každým dodavatelem, který zpracovává osobní údaje vašich zákazníků – hosting, e-mailová platforma, CRM, analytické nástroje, agentura. Většina velkých poskytovatelů (Google, Mailchimp, HubSpot) nabízí standardní DPA online.


Jak GDPR ovlivňuje remarketing?

Remarketing vyžaduje souhlas s marketingovými cookies. Bez souhlasu nesmíte ukládat remarketing cookies ani sbírat data pro cílení reklam. S Google Consent Mode v2 můžete využívat modelované konverze, ale přímý remarketing na konkrétní uživatele vyžaduje explicitní souhlas. Alternativou jsou kontextové kampaně, které nepotřebují cookies.

 [Spolupráce

### Chcete podobné výsledky?

Pomůžu vám s online marketingem a SEO. Ozvěte se mi a probereme to.

Nezávazná konzultace →](/kontakt/)  

![Jan Pospíšil](/images/profile/jan-pospisil.webp)

O autorovi

### Jan Pospíšil

Online marketing konzultant s 18+ lety praxe. Pomáhám e-commerce projektům růst pomocí dat, strategie a měřitelných výsledků.

18+ let praxe
  
50+ klientů

[Konzultace zdarma](/kontakt/) [Více o mně](/o-mne/) [LinkedIn](https://linkedin.com/in/jan-pospisil/)

## Podobné články

[![Google Search Console – bezplatný nástroj od Googlu](/images/blog/google-search-console.svg)

### Přihlášení do Google Search Console: návod 2026 + tipy

Jak se přihlásit do Google Search Console, ověřit web a využít GSC pro sledování pozic, indexace a Core Web Vitals.

Přečíst →](/blog/google-search-console/)[![Social media marketing pro firmy](/images/blog/social-media-marketing.svg)

### Social media marketing: Kompletní průvodce pro firmy v Česku

Social media marketing pro firmy: výběr platforem, obsahová strategie, metriky a organický vs.

Přečíst →](/blog/social-media-marketing/)[![Automatizace marketingových procesů](/images/blog/automatizace-marketingovych-procesu.svg)

### Automatizace marketingových procesů: Průvodce marketing automatizací

Automatizace marketingu ušetří 12,5 hodiny týdně.

Přečíst →](/blog/automatizace-marketingovych-procesu/)

## Související pojmy

[#### UTM parametry

UTM parametry jsou štítky v URL pro sledování zdrojů návštěvnosti.

→](/blog/utm-parametry/) [#### CPA (Cost Per Acquisition)

CPA neboli cost per acquisition měří náklady na jednu konverzi.

→](/blog/cpa/) [#### Bounce rate

Co je bounce rate? Míra okamžitého opuštění měří procento návštěvníků, kteří opustí web bez interakce.

→](/blog/bounce-rate/) [#### ROI

Co je ROI (Return on Investment)? Vzorec pro výpočet, benchmarky podle marketingových kanálů a rozdíl mezi ROI a ROAS.

→](/blog/roi/)

[← Všechny články](/blog/clanky/)