# URL: https://nazakladedat.cz/jak-merit-konverze-v-skliku/

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

# Jak měřit konverze v Skliku

25. 4. 2025

 

Měření konverzí je nezbytné pro správné řízení a optimalizaci kampaní v [Skliku](https://nazakladedat.cz/co-je-sklik/). Bez měření konverzí nemůžeš efektivně vyhodnotit úspěšnost kampaní. Proces nastavení měření konverzí se podobně jako u [měření konverzí v Google Ads](https://nazakladedat.cz/jak-merit-konverze-v-google-ads/) skládá ze tří hlavních kroků:

1. [Určení, co měřit jako konverzi](#definice-konverze)
2. [Vytvoření konverze v Skliku](#vytvoreni-konverze)
3. [Nastavení konverze na webu či v GTM](#nastaveni-v-gtm)
4. [Kontrola](#kontrola)
5. [Přepočet cizích měn](#prepocet_men)

## Definice, co a jak měřit

Stejně jako ve všech inzertních systémech je prvním krokem uvědomit si a určit, **co vlastně chceš měřit** jako konverzi. U e-shopu to bude většinou objednávka, u B2B webu to bude často vyplněný formulář.

Je výhodné měřit tu samou konverzi i do [Google Analytics](https://nazakladedat.cz/co-jsou-google-analytics-4/) pro lepší vyhodnocování dat v kontextu celkové návštěvnosti webu.

Jakmile to máš, můžeš přejít na další krok.

## Vytvoření konverze v Skliku

1) Přihlas se do [Skliku](https://www.sklik.cz/).

2) V horním menu klikni na **Nástroje -> Sledování konverzí**.

![](https://nazakladedat.cz/wp-content/uploads/2024/07/Sledovani-konverzi-v-menu-Skliku.jpg)

Sledování konverzí v menu Skliku

3) Klikni na tlačítko **Vytvořit konverzi.**

![](https://nazakladedat.cz/wp-content/uploads/2024/07/Tlacitko-Vytvorit-konverzi.jpg)

Tlačítko Vytvořit konverzi

4) Konverzi pojmenuj, nastav její typ a dej Uložit. Hodnotu konverze v tomto kroku nastavovat nemusíš.

![](https://nazakladedat.cz/wp-content/uploads/2024/07/Nastaveni-konverze-v-Skliku.jpg)

Nastavení konverze v Skliku

Tím se ti vygeneruje měřící kód. Zkopíruj si jej.

![](https://nazakladedat.cz/wp-content/uploads/2024/07/Vygenerovany-konverzni-kod.jpg)

Vygenerovaný konverzní kód

## Nastavení konverze na webu či v GTM

Měřící kód lze vložit přímo do zdrojového kódu webu. Ve většině případů je ale výhodnější využít k měření [Google Tag Manager (GTM).](https://nazakladedat.cz/co-je-google-tag-manager/)

1) Přejdi do [Google Tag Manageru.](https://tagmanager.google.com/?hl=cs#/home)

2) Vytvoř novou značku **typu HTML.**

3) Do ní vlož vygenerovaný **kód ze Skliku.**

![](https://nazakladedat.cz/wp-content/uploads/2024/07/Nastaveni-Sklik-mereni-konverze-v-GTM-1024x592.jpg)

Nastavení Sklik měření konverze v GTM

V kódu je potřeba nastavit ještě určité **proměnné**. Protože měříme objednávku na e-shopu, vyplňujeme hlavně proměnnou *orderId*, *value* a *consent*. Proměnnou *eid* v tomto článku neřešíme.

* V ***orderId*** nastav ID realizované konverze. Nejde o měřící ID Skliku, ale ID daného odeslání konverze. Např. u objednávky na e-shopu to bude číslo té objednávky. Toto ID musí být pro každou konverzi unikátní a díky němu pak Sklik bude schopen odfiltrovat duplicitně změřené konverze.
* Proměnná ***value*** obsahuje hodnotu konverze v korunách. Pokud je např. hodnota konverze 5 000 Kč, tak zde bude číslo 5000. U objednávky na e-shopu použij hodnotu objednávky bez částky za dopravu a platbu a bez DPH.
* V proměnné ***consent*** uveď, zda je daná konverze změřena se souhlasem k použití marketingových cookies v cookies liště, nebo ne. Více v článku [K čemu slouží consent proměnná v Sklik kódech](https://nazakladedat.cz/consent-promenna-v-sklik-kodech/).

Nezapomeň též měření upravit tak, aby správně fungovalo **s cookies lištou**. Pokud si s napojením jednotlivých proměnných nevíš rady, [neboj se mi ozvat](https://nazakladedat.cz/kontakt/).

4) Vyber správné **pravidlo spouštění**.

5) Nezapomeň vše otestovat a publikovat změny v GTM.

## Kontrola

Po nastavení měření je vhodné se za pár dní podívat do samotného Skliku, jestli se konverze měří správně.

Je také výhodné si z měřené konverze vytvořit samostatné remarketingové publikum s délkou trvání 30 a 360 dní, aby šlo nadále pracovat s uživateli, kteří již konverzi udělali.

## Přepočet cizích měn

Na rozdíl od snad všech reklamních systémů neumí měření konverzí v Skliku **pracovat s měnou u hodnoty změřené konverze**. Je to asi proto, že Sklik je zaměřený na Českou republiku a tak s měřením v jiných měnách nepočítá.

Jenže co v případě, že máš na svém e-shopu možnost **přepnout si měnu třeba na eura**? Bez úpravy měření se pak do Skliku při objednávce v hodnotě 100 eur změří jen číslo 100 a v rozhraní Skliku se tato konverze ukáže s hodnotou 100 Kč. A to není pro vyhodnocení kampaní a jejich návratnosti úplně ideální.

Naštěstí si s tím s pomocí Google Tag Manageru dokážeme poradit. Trik spočívá v tom, že v proměnné *value* v měřícím kódu konverze nepošleme přímo číselnou hodnotu, ale místo ní vložíme **GTM proměnnou typu vlastní JavaScript.**

![](https://nazakladedat.cz/wp-content/uploads/2024/07/Prepocet-cizi-meny-v-mericim-kodu-Sklik.jpg)

Přepočet cizí měny v měřícím kódu Sklik

Tato proměnná pak bude obsahovat tento kód, který v závislosti na hodnotě v *ecommerce.currency* provede přepočet. Čili v případě eur vynásobí hodnotu číslem 25. Takže se do Skliku objednávka za 100 eur změří s hodnotou 2 500 Kč.

![](https://nazakladedat.cz/wp-content/uploads/2024/07/Obsah-promenne-pro-prepocet-meny.jpg)

Obsah proměnné pro přepočet měny

Kód jde samozřejmě rozšířit i o **další měny** či dynamické získávání **směnného kurzu** místo konstanty 25. Pokud s tím zápasíš, [dej vědět a rád pomohu](https://nazakladedat.cz/kontakt/).

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