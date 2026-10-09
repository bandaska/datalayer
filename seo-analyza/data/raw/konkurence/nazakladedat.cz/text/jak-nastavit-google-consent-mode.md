# URL: https://nazakladedat.cz/jak-nastavit-google-consent-mode/

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

# Jak nastavit Google Consent Mode

1. 2. 2024

 

**Google Consent Mode** je způsob, jak měřícím kódům od Googlu předat informaci o uděleném **souhlasu v cookies liště**. S jeho pomocí se tak měřící značky pro [Google Ads](https://nazakladedat.cz/co-jsou-google-ads/) či [Google Analytics 4](https://nazakladedat.cz/co-jsou-google-analytics-4/) dozví, v jakém režimu mohou měřit a zpracovávat data a zda mohou v prohlížeči návštěvníka ukládat cookies.

Implementace Google Consent Mode je nezbytným předpokladem pro správnou funkci [**cookieless měření**](https://nazakladedat.cz/cookieless-mereni-ga4/) v GA4 či Google Ads.

Jeho příkazy umí číst i [Google Tag Manager](https://nazakladedat.cz/co-je-google-tag-manager/) a dle nich pak při správném nastavení řídit i spouštění ostatních značek **nejen od Googlu**.

Jeho obdobou je [consent proměnné v Sklik měřících kódech](https://nazakladedat.cz/consent-promenna-v-sklik-kodech/).

## Princip fungování

Samotný Google Consent Mode žádné měření nespouští ani **nevyvolává cookies lištu**, která se návštěvníkovi zobrazuje. Je pouze komunikačním prostředkem mezi cookies lištou a měřícími kódy.

Příkazy Google Consent Modu vyvolává buď přímo **zdrojový kód webu**, nebo cookies lišta.

Google Consent Mode využívá proměnné zvané ***storage*** k rozlišení jednotlivých úrovní souhlasu. Nejčastěji se v oblasti online marketingu setkáš s těmito, byť jich existuje více.

* **analytics\_storage** = souhlas s analytickými cookies
* **ad\_storage** = souhlas s marketingovými cookies
* **ad\_user\_data** = souhlas s využitím first-party dat
* **ad\_personalization** = souhlas s personalizací reklamy a remarketingem

Tyto jednotlivé *storages* nabývají hodnot ***denied***, pokud souhlas nemáme a ***granted*** pro souhlas udělený.

Pokud tak například **na tomto blogu** v nastavení cookies lišty zaškrtnu, že s analytickými cookies souhlasím, ale s marketingovými ne, nastaví se *analytics\_storage* na *granted* a *ad\_storage* na *denied*.

![](https://nazakladedat.cz/wp-content/uploads/2023/11/Vyber-urovne-souhlasu-v-cookies-liste.jpg)

Výběr úrovně souhlasu v cookies liště

A podle hodnot v jednotlivých storages se pak **řídí spouštění měřících značek**. Například měření pro [Google Ads](https://nazakladedat.cz/co-jsou-google-ads/) se spustí jen v případě, že *ad\_storage* je *granted*.

## Příkazy default a update

Google Consent Mode se skládá ze dvou základních částí. Z příkazů *default* a *update*.

### Default consent

Příkaz *default* slouží k úvodnímu nastavení souhlasů při každém načtení stránky. Kód vypadá takto.

```
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied'
  });
</script>
```

V jednotlivých *storage* proměnných jsou **hodnoty *denied* nebo *granted*** dle toho, zda již návštěvník souhlas s touto třídou cookies udělil. *Denied* znamená odmítnutí, *granted* udělení souhlasu.

Důležité je, aby tento kód a nastavení *storage* proměnných proběhlo ještě **před načtením Google Tag Manageru** resp. měřících značek. Aby v okamžiku spuštění značek už bylo možné stavy číst. Pokud to nejde, tak i to jde řešit. [Ozvi se mi](https://nazakladedat.cz/kontakt/).

### Update consent

Příkaz *update* se spouští v momentě, kdy uživatel změní úroveň souhlasu. To může být při prvním vyjádření se v liště či později když chce souhlas změnit.

V takovém případě se spouští tento kód.

```
<script>
  gtag('consent', 'update', {
    'ad_storage': 'granted',
    'analytics_storage': 'granted',
    'ad_user_data': 'granted',
    'ad_personalization': 'granted'
  });
</script>
```

U příkazu *update* je vhodné ještě doplnit [dataLayer](https://nazakladedat.cz/co-je-datalayer/) **event *update\_consent***. Ten pak bude sloužit ke spouštění neGooglích značek v GTM.

Výsledný kód při vyjádření se v liště tak bude vypadat.

```
<script>
  gtag('consent', 'update', {
    'ad_storage': 'granted',
    'analytics_storage': 'granted',
    'ad_user_data': 'granted',
    'ad_personalization': 'granted'
  });
  window.dataLayer.push({
    event: "update_consent"
 });
</script>
```

## Příklad

Správně nasazený Google Consent Mode bude fungovat takto. Pro jednoduchost bereme do úvahy práci jen s proměnnými *ad\_storage* a *analytics\_storage*.

**První příchod na web a udělení souhlasu**

1. Při prvním příchodu na web se zobrazí cookies lišta a vykoná se *default* příkaz s hodnotami *denied*.
2. Následně návštěvník v liště udělí souhlas se všemi cookies. V ten okamžik se vykoná *update* příkaz s hodnotami *granted*.
3. Návštěvník pak přejde na jinou stránku webu. Tam se vykoná *default* příkaz s hodnotami *granted*. Stejně tak i na každé další stránce webu.

**První příchod na web a odmítnutí souhlasu**

1. Při prvním příchodu na web se zobrazí cookies lišta a vykoná se *default* příkaz s hodnotami *denied*.
2. Následně návštěvník v liště odmítne souhlas se všemi cookies. Stav se nezměnil, *update* příkaz se tedy nespouští.
3. Návštěvník pak přejde na jinou stránku webu. Tam se vykoná *default* příkaz s hodnotami *denied*. Stejně tak i na každé další stránce webu.

**První příchod na web a povolení jen některých cookies**

1. Při prvním příchodu na web se zobrazí cookies lišta a vykoná se *default* příkaz s hodnotami *denied*.
2. Následně návštěvník v liště udělí souhlas jen s analytickými cookies. V ten okamžik se vykoná *update* příkaz s hodnotou *granted* pro *analytics\_storage* a hodnotou *denied* pro *ad\_storage*.
3. Návštěvník pak přejde na jinou stránku webu. Vykoná se *default* příkaz s hodnotou *granted* pro *analytics\_storage* a hodnotou *denied* pro *ad\_storage*.

**Návrat na web a změna souhlasu**

1. Návštěvník se vrací na web a minule udělil souhlas se všemi cookies. Cookies lišta se tak nezobrazuje a vykoná se *default* příkaz s hodnotami *granted*.
2. Následně návštěvník kliká na možnost upravit souhlas a odmítá všechny cookies. V ten okamžik se vykoná *update* příkaz s hodnotami *denied*.
3. Návštěvník pak přejde na jinou stránku webu a tam se vykoná *default* příkaz s hodnotami *denied*.

## Co je potřeba ohlídat

V implementaci Google Consent Mode vídám často **chyby**. Ty pak způsobují, že celé měření nefunguje či nefunguje správně. Proto si raději ohlídej, že:

* *Default* příkaz je ještě před kódem GTM či Google značek.
* *Update* příkaz se spouští i při pozdější změně souhlasu uživatelem.
* GTM je donastavený, aby Google Consent Mode respektoval a využíval.
* Cookies lišta neblokuje žádné měřící skripty ani GTM.
* Při udělení či změně souhlasu nedochází ke znovunačtení stránky. Jinak se ztratí informace o zdroji návštěvy.

Pro kontrolu správné funkce cookies lišty ti poslouží tento návod [Kontrola fungování cookies lišty](https://nazakladedat.cz/jak-zkontrolovat-cookies-listu/).

## Způsob implementace

Většina pokročilejších cookies lišt jako např. [Cookies-Script](https://cookie-script.com/)či [Cookiebot](https://cookiebot.com/) podporuje Google Consent Mode a tak jej jen stačí **v nastavení lišty aktivovat.**

U vlastních či open-source řešení pak nebývá tak těžké jej s pomocí programátora dodělat.

## Kdy Google Consent Mode použít

Google Consent Mode má smysl implementovat, pokud se chystáš využít možnosti **[cookieless](https://nazakladedat.cz/cookieless-mereni-ga4/)** měření do Googlích nástrojů.

Vyplatí se ale též i při **nové implementaci měření.** Pro zkušeného analytika není tak těžké jej rozchodit a řízení spouštění měření v GTM je pak díky němu jednoduché.

Pokud s Google Consent Mode bojuješ či jej chceš na svůj web, nestyď se [mě kontaktovat](https://nazakladedat.cz/kontakt/).

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