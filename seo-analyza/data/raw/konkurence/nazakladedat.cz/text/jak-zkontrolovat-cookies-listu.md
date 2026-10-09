# URL: https://nazakladedat.cz/jak-zkontrolovat-cookies-listu/

Close

* [Newsletter](https://nazakladedat.cz/newsletter/)
* [GTM šablony](https://nazakladedat.cz/gtm-sablony/)
* [Rozcestník](https://nazakladedat.cz/rozcestnik/)
* [Kontakt](https://nazakladedat.cz/kontakt/)

##### Newsletter

[Přihlásit se k newsletteru](/newsletter/)
  
  

Přihlas se k odběru newsletteru. Jednou za čas ti pošlu odkaz na nový článek.

Vyhledávání



##### Nejnovější příspěvky

* [Co vše mám kontrolovat při redesignu webu z pohledu PPC reklam](https://nazakladedat.cz/co-vse-kontrolovat-pri-redesignu-webu-z-pohledu-ppc-reklam/)
* [Co jsou symboly značky](https://nazakladedat.cz/co-jsou-symboly-znacky/)
* [Co má obsahovat stránka o dopravě na e-shopu](https://nazakladedat.cz/co-ma-obsahovat-stranka-o-doprave-na-e-shopu/)
* [Co je Meta CAPI a kdy se vyplatí](https://nazakladedat.cz/co-je-meta-capi-a-kdy-se-vyplati/)
* [Jak přidat přístup k e-shopu v Mergadu](https://nazakladedat.cz/jak-pridat-uzivatele-do-mergada/)

### [nazakladedat.cz](https://nazakladedat.cz)

Návody pro PPC specialisty

* [Newsletter](https://nazakladedat.cz/newsletter/)
* [GTM šablony](https://nazakladedat.cz/gtm-sablony/)
* [Rozcestník](https://nazakladedat.cz/rozcestnik/)
* [Kontakt](https://nazakladedat.cz/kontakt/)

# Jak zkontrolovat fungování cookies lišty z pohledu analytiky

24. 3. 2023

 

Od 1. 1. 2022 platí v ČR změna ohledně cookies lišty. Zjednodušeně to znamená, že bez aktivního souhlasu návštěvníka webu **nesmíš v jeho prohlížeči uložit žádné cookie**s mimo těch technických nezbytných k fungování webu.

A protože většina **analytických a marketingových kódů** na webu s cookies pracuje, je potřeba toto ošetřit.

![Cookies lišta (je to obrázek, tak na něj neklikej)](https://nazakladedat.cz/wp-content/uploads/2022/03/cookies-lista-1024x259.jpg)

Cookies lišta (je to obrázek, tak na něj automaticky neklikej)

Následující checklist ti poslouží ke kontrole, zda na webu **cookies lišta funguje správně**. Nevěnuji se vzhledu lišty a textům v ní, ale soustředím se na její funkci z pohledu analytických a marketingových kódů. Právní požadavky si můžeš přečíst přímo [na stránkách ÚOOÚ.](https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies)

Pokud narazíš v některém kroku na nejasnosti, tak [se mi ozvi](https://nazakladedat.cz/kontakt/). Rád poradím.

## Checklist fungování cookies lišty

### 1) Lišta se zobrazuje

Otevři si web v **anonymním okně**. Zobrazí se cookies lišta?

Jedinou výjimkou je web, který žádné marketingové a analytické nástroje ukládající **cookies nepoužívá.** V takovém případě samozřejmě lišta na webu být nemusí.

### 2) Lišta obsahuje tlačítko Odmítnout

Na stejné úrovni jako je tlačítko souhlasím musí být i tlačítko Odmítnout. Nemusí být stejně výrazné, ale musí tam být a být s možností Povolit vyvážené.

### 3) Lišta je použitelná i na mobilu

Web si otevři i na **mobilním zařízení**, či si v DevTools prohlížeče zapni mobilní režim. Je lišta stále viditelná a použitelná?

### 4) Souhlas se přenáší na subdomény či sesterské weby

Pokud máš úzce související weby na subdoménách (např. blog.rajtmajer.cz u webu rajtmajer.cz) tak většinou dává smysl, aby když návštěvník odsouhlasí cookies na jednom z těchto webů, tak už lišta **nevyskočila na tom druhém.**

Použít to jde i napříč různými doménami, pokud všechny **patří jednomu subjektu** (např. rajtmajer.cz a rajtmajer.sk).

### 5) Před akceptací cookies v liště se žádné cookies neuloží

Dokud návštěvník v liště nevyjádří souhlas k ukládáním cookies, nesmí se žádné cookies **mimo těch nezbytných** uložit.

### 6) Po akceptaci se měření dopošle

Po stisknutí souhlasu se **okamžitě spustí** všechny zablokované měřící kódy. A to bez reloadu stránky.

### 7) Máš možnost souhlas změnit či odvolat

Zkontroluj, že na webu můžeš již udělený souhlas **odvolat či jej změnit.**

### 8) Měření respektuje úroveň uděleného souhlasu

Většina lišt nabízí volbu povolit jednotlivé **úrovně cookies**. Většinou jde o analytické, marketingové a personalizační. Otestuj, že při výběru jen analytických se ukládají jen analytické atd.

### 9) Měření interakcí neuloží cookies před jejich odsouhlasením

Někdy bývá měření navázané na interakci uživatele a ne načtení stránky. Jde například o měření **scrollování**, **časovače** či **klikání na tlačítka** jako přidat do košíku.

Pokud k této interakci dojde ještě předtím, než se v liště vyjádříš, opět se nesmí žádné cookies uložit.

### **10) Vidím seznam použitých cookies**

Někde na webu, nejčastěji přímo v cookies liště, jsou **vyjmenované všechny použité cookies** roztřízené do kategorií i s expirací a popisem jejich účelu.

### 11) Využívá se cookieless měření

Některé nástroje jako [Google Analytics 4](https://nazakladedat.cz/co-jsou-google-analytics-4/), [Google Ads](https://nazakladedat.cz/co-jsou-google-ads/) či [Sklik](https://nazakladedat.cz/co-je-sklik/) umožňují **měřit i bez cookies** v tzv. [cookieless režimu](https://nazakladedat.cz/cookieless-mereni-ga4/). V tom případě toto měření může probíhat ještě před udělením souhlasu nebo po jeho odmítnutí. Potřebovat k tomu budeš [Google Consent Mode.](https://nazakladedat.cz/jak-nastavit-google-consent-mode/) Ověř, zda je tato funkce nastavená a využívá se.

Je ještě něco, co na webu u cookies lišty kontroluješ? [Dej mi vědět](https://nazakladedat.cz/kontakt/) a checklist doplním.

Vyhledávání

##### Newsletter

[Přihlásit se k newsletteru](/newsletter/)
  
  

Přihlas se k odběru newsletteru. Jednou za čas ti pošlu odkaz na nový článek.

[![František Rajtmajer](https://nazakladedat.cz/wp-content/uploads/2019/06/frantisek_profilovka_svetla-300x279.jpg)](https://nazakladedat.cz/wp-content/uploads/2019/06/frantisek_profilovka_svetla.jpg)

Jsem František Rajtmajer a na volné noze pomáhám klientům jako [PPC specialista s přesahem do webové analytiky](https://www.rajtmajer.cz/).

Pokud máš nápad na vylepšení tohoto webu nebo ti tu něco chybí, [ozvi se mi](https://nazakladedat.cz/kontakt/).

[Zpět nahoru](#top)

Návody pro tebe tvoří František Rajtmajer. Jako [PPC specialista s přesahem do webové analytiky](https://www.rajtmajer.cz/) nastavuje měření, vyhodnocuje data, řídí PPC kampaně a pomáhám podnikatelům s rozhodováním na základě dat.   
[Zásady ochrany osobních údajů](/zasady-ochrany-osobnich-udaju/)  
[Používání cookies](/pouzivani-cookies/)

Search: