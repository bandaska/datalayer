# URL: https://nazakladedat.cz/checklist-pro-kontrolu-gtm/

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

# Checklist pro kontrolu GTM

21. 1. 2025

 

Podobně jako je dobré udělat kontrolu [Google Analytics dle checklistu](https://nazakladedat.cz/checklist-spravneho-nastaveni-ga4/) při přebírání nového účtu, tak i u [Google Tag Manageru](https://nazakladedat.cz/co-je-google-tag-manager/) ti doporučuji projít následující nastavení.

### 1) Mají přístupová práva jen správní lidé?

Mají přístup **pouze vhodní lidé**? GTMkem se dá web i shodit a tak pokud někdo nepotřebuje přístup nebo mu stačí nižší práva, je vhodné po domluvě s majitelem webu tato práva snížit.

**Přístup Správce** by měli mít alespoň dva lidé. Kdyby totiž jeden přišel o svůj přístup ke Google účtu, poslouží ten druhý jako záloha.

Pokud není **klient odborník**, nastav mu práva Správce pouze na úrovni účtu, ale u jednotlivých kontejnerů mu dej pouze právo Čtení. Pokud GTM rozumí, bude vědět, jak si práva navýšit. A minimalizuje se tím množství neodborných zásahů.

![](https://nazakladedat.cz/wp-content/uploads/2019/06/Pridani-pristupovych-prav-v-GTM-1-1024x485.jpg)

Přidání přístupových práv v GTM

### 2) Je kód na webu správně umístěn?

Vizuálně zkontroluj ve zdrojovém kódu webu, že kód GTM se nachází **před koncem <head>** a noscript část kódu hned za **otevírací značkou <body>**.

### 3) Co se vkládá do dataLayeru?

Rovněž v kódu stránky zkontroluj, zda je [**dataLayer**](https://nazakladedat.cz/co-je-datalayer/) inicializován před GTM snippetem (jinak to nebude fungovat správně) a podívej se, co se do [dataLayeru](https://nazakladedat.cz/co-je-datalayer/) vkládá. K tomu ti poslouží režim náhledu ve kterém proklikáš web.

### 4) Jsou proměnné v GTM použité a správně pojmenované?

Zpět v rozhraní Google Tag Manageru si proklikej **jednotlivé vlastní proměnné**, zda jsou vhodně pojmenované a zda je v nich to, co očekáváš.

Proměnné typu [dataLayer](https://nazakladedat.cz/co-je-datalayer/) doporučuji pojmenovávat tak, **jak k nim v dataLayeru vede cesta.**

![](https://nazakladedat.cz/wp-content/uploads/2019/06/Priklad-nazvu-promennych.jpg)

Příklad názvů proměnných

### 5) Je nastavení všech značek v pořádku?

Obdobně u každé značky se podívej, zda její název dodržuje **jmenné konvence.**

Dále pak zkoukni **obsah každé značky** a její **spouštěcí pravidla.**

Důležité je ověřit, že do všech marketingových a analytických nástrojů se posílají **stejné hodnoty**. Tedy že hodnota konverze pro [Google Analytics](https://nazakladedat.cz/co-jsou-google-analytics-4/), [Sklik](https://nazakladedat.cz/co-je-sklik/), Metu i [Google Ads](https://nazakladedat.cz/co-jsou-google-ads/) je stejná.

V případě, že je v kontejneru [měření konverzí pro Google Ads](https://nazakladedat.cz/jak-merit-konverze-v-google-ads/), ověř, že je tam zároveň i **Propojovač konverzí** (Conversion Linker).

### 6) Pracuje se s režimem souhlasu?

Ověř, že je nastavena **spolupráce měření s cookies lištou** a že se žádné identifikátory jako jsou cookies neukládají bez souhlasu uživatele. K tomu ti poslouží návod [Jak zkontrolovat fungování cookies lišty z pohledu analytiky](https://nazakladedat.cz/jak-zkontrolovat-cookies-listu/).

## Závěr

Obzvláště u složitějších webů se při **komplexní kontrole GTM** zapotíš. Je potřeba otestovat všechny možné situace a nastavení a ověřit, že z webu odchází měření tak čisté, jak jen to jde. Pokud si někde nevíš rady, [ozvi se mi a rád pomohu.](https://nazakladedat.cz/kontakt/)

Jsi odborník na GTM? Pokud máš další tipy na kontrolu, budu rád, když mi [o tom dáš vědět](https://nazakladedat.cz/kontakt/). Rád to do checklistu přidám. Díky.

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