# URL: https://nazakladedat.cz/duplicitni-transakce-v-google-analytics-jak-se-jich-zbavit/

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

# Jak se zbavit duplicitních transakcí v Google Analytics

9. 9. 2020

 

Duplicitní [transakce](https://nazakladedat.cz/co-jsou-transakce/) označují stav, kdy **jednu objednávku** na eshopu **uvidíš v Google Analytics několikrát**.

Tato situace občas nastává v **Universal Analytics** (Google Analytics 3). Novější [GA4](https://nazakladedat.cz/co-jsou-google-analytics-4/) si již umí s duplicitními transakcemi poradit.

Zda se tvého eshopu tento problém týká zjistíš nejsnáze tak, že si do svého účtu přidáš [**vlastní přehled pro duplicitní transakce.**](https://analytics.google.com/analytics/web/template?uid=CcMRFqogSEOldvepqHoFNA) Klikni na [tento odkaz](https://analytics.google.com/analytics/web/template?uid=CcMRFqogSEOldvepqHoFNA) a vyber si své Google Analytics.

Pokud v přehledu uvidíš u jednotlivých ID transakce ve sloupci Transakce čísla **vyšší než 1**, máš problém.

[![Duplicitní transakce v Google Analytics](https://nazakladedat.cz/wp-content/uploads/2018/10/Opakované-transakce-v-Google-Analytics.jpg)](https://nazakladedat.cz/wp-content/uploads/2018/10/Opakované-transakce-v-Google-Analytics.jpg)

Duplicitní transakce v Google Analytics

Některé transakce se ti totiž **započítávají opakovaně** a to navyšuje jak reportovaný počet transakcí, tak tržby.

V rámci jedné [návštěvy](https://nazakladedat.cz/definice-navstevy/) dokáží duplicitní transakce odhalit a **eliminovat samotné Google Analytics**. Avšak v případě ukončené návštěvy již ne (více v [článku o definici návštěvy](https://nazakladedat.cz/definice-navstevy/)). Proto musíš přijít na řadu ty a tento problém řešit.

Samotné řešení je však technicky náročnější a proto pokud je **podíl duplicitních transakcí minimální**, doporučuji ti se s tím radši smířit.

Pokud máš ale rád přesnost, mám pro tebe **návod**.

## Jak se zbavit duplicitních transakcí v Google Analytics

Zcela ideální je **zadat vývojáři eshopu**, aby celou záležitost s několikanásobnými objednávkami vyřešil on.

Stačí totiž, aby **děkovací stránka**, která obsahuje konverzní kódy, **nešla zobrazit vícekrát**. Kreativitě se meze nekladou a tak je možné si informaci o odeslaných konverzních kódech uložit do databáze a při opakovém načtení stránky již konverzní kódy neposílat. Nebo ihned po odeslání konverzních kódů uživatele přesměrovat na jinou stránku.

My si ale dnes ukážeme postup pracující s **cookie a [Google Tag Manageru](https://nazakladedat.cz/co-je-google-tag-manager/)**, který mi ve většině případů problém s opakovaným odesláním [transakce](https://nazakladedat.cz/co-jsou-transakce/) vyřeší. V krátkosti spočívá v:

1. po odeslání transakce se **uloží cookie s číslem objednávky**,
2. při každém odesílání transakce se nejprve **kontroluje, zda již cookie s číslem objednávky neexistuje**,
3. pokud cookie s číslem objednávky již existuje, **transakce se znova nepošle**.

## Nastavení krok po kroku

Jak už tomu při práci v [Google Tag Manageru](https://nazakladedat.cz/co-je-google-tag-manager/) bývá, můžeš toho hodně pokazit. Proto tento postup na zabránění duplicitním transakcí řeší **celý proces včetně testování**.

### 1) Založ **paralelní měření** návštěvnosti a transakcí

Vytvoř si v Google Analytics novou službu pro testování. Služba musí mít **identické nastavení** jako ta hlavní a to především nastavení služby, limit relace, [limit kampaně](https://nazakladedat.cz/campaign-timeout/) a [seznam vyloučených odkazujících zdrojů.](https://nazakladedat.cz/referral-exclusion-list/) U výběru dat pak shodně nastav všechna nastavení výběru dat, filtry a aktivuj elektronický obchod,

V GTM vytvoř **paralelní měření** návštěvnosti a transakcí do nově založené služby v GA. Bude stačit:

* nakopírovat **proměnnou UA settings** a změnit v ní UA id na službu, kterou jsi před chvíli založil,
* vytvořit kopii značky **UA – Pageview** a změnit v ní UA settings na testovací,
* vytvořit kopii značky **UA – Transaction** a také změnit UA settings.

Ostatní značky jako různé posílání eventů atp. kopírovat nemusíš. Nově vytvořené značky a proměnné jasně označ v názvu slovem *TEST řešení duplicitních transakcí*.

### 2) Ověř shodu dat

Po **5-7 dnech zkontroluj**, že v původní službě i v tvé testovací máš nasbírané **zcela stejné údaje**. Sedět by měli především uživatelé, návštěvy, transakce a počty duplicitních transakcí.

Pokud se čísla shodují, můžeš pokračovat.

### 3) Vytvoř dataLayer proměnnou transactionId

Ze všeho nejdříve si v [Google Tag Manageru](https://nazakladedat.cz/co-je-google-tag-manager/) založ proměnnou s názvem **dl.transactionId**. Ta bude odkazovat na proměnnou v [dataLayeru](https://nazakladedat.cz/co-je-datalayer/), ve které se skrývá ID objednávky na stránce s poděkováním za nákup.

Možná už takovou proměnnou v GTM máš, jen je jinak pojmenovaná. V tom případě použij ji a jen ve všech následujících kódech uprav odkaz na tuto proměnnou.

[![Nastavení dl.transactionId](https://nazakladedat.cz/wp-content/uploads/2018/10/Nastavení-dl.transactionId.jpg)](https://nazakladedat.cz/wp-content/uploads/2018/10/Nastavení-dl.transactionId.jpg)

Nastavení dl.transactionId

### 4) Založ cookie první strany

Obdobně vytvoř proměnnou **cookie.userTransactionIds** typu Soubor cookie první strany. Název samotné cookie bude **user\_transaction\_ids.**

[![Nastavení cookie.userTransactionIds](https://nazakladedat.cz/wp-content/uploads/2018/10/Nastavení-cookie.userTransactionIds.jpg)](https://nazakladedat.cz/wp-content/uploads/2018/10/Nastavení-cookie.userTransactionIds.jpg)

Nastavení cookie.userTransactionIds

### 5) Vytvoř vlastní JavaScript kód pro kontrolu cookie

Tato funkce ti vrátí true, pokud na dané stránce **již existuje cookie a obsahuje ID transakce**, kterou chceš odeslat. To využiješ tak, že pokud tato funce vrátí true, zablokuješ další odeslání transakce.

Vytvoř novou proměnnou, pojmenuj ji *js.isTransactionIdInCookie*, typ vyber Custom JavaScript a vlož do ní kód.

```
function() {
  return /(,|^){{dl.transactionId}}/.test({{cookie.userTransactionIds}});
}
```

Pokud jsi proměnné v předchozích krocích **pojmenoval jinak**, tak uprav jejich název v kódu.

[![Nastavení js.isTransactionIdInCookie](https://nazakladedat.cz/wp-content/uploads/2018/10/Nastavení-js.isTransactionIdInCookie.jpg)](https://nazakladedat.cz/wp-content/uploads/2018/10/Nastavení-js.isTransactionIdInCookie.jpg)

Nastavení js.isTransactionIdInCookie

### 6) Založ vlastní JavaScript kód pro nastavení cookie

Poslední proměnnou je JavaScript s názvem ***js.hitcallbackSetTransactionCookie***, který po úspěšném odeslání transakce vytvoří cookie s ID transakce.

Navíc budeš předpokládat, že uživatel může **nakoupit na eshopu vícekrát** a tak ID každé další transakce přidáš do cookie místo toho, abys zakládal cookie novou nebo ji přepsal.

Vytvoř proměnnou *js.hitcallbackSetTransactionCookie* typu Custom JavaScript a vlož do ní kód.

```
function() {
  return function() {
    var d, expires;
    var cvalue = '';
    // Run the code only if a transaction is found in the data layer
    if ({{dl.transactionId}}) {
      d = new Date();
      d.setTime(d.getTime() + 63072000000);
      expires = 'expires='+d.toUTCString();
      // If the cookie already exists, append not overwrite
      if ({{cookie.userTransactionIds}}) {
        cvalue = {{cookie.userTransactionIds}} + ',';
      }    
      document.cookie = 'user_transaction_ids=' + 
            cvalue + {{dl.transactionId}} + '; ' + 
            expires + '; path=/';
    }
  };
}
```

**Názvy proměnných** v kódu uprav, pokud jsi je pojmenoval jinak.

[![Nastavení js.hitcallbackSetTransactionCookie](https://nazakladedat.cz/wp-content/uploads/2018/10/Nastavení-js.hitcallbackSetTransactionCookie.jpg)](https://nazakladedat.cz/wp-content/uploads/2018/10/Nastavení-js.hitcallbackSetTransactionCookie.jpg)

Nastavení js.hitcallbackSetTransactionCookie

### 7) Vytvoř blokující pravidlo

Protože chceš**zabránit odeslání transakce** v případě, že cookie s ID transakce již existuje, vytvoř si blokující pravidlo.

Předpokládej, že stránka s poděkováním za objednávku se nachází na adrese /objednavka-odeslana. Vytvoř nové pravidlo spouštění s názvem **Transakce již byla odeslána**, typem **Zobrazení stránky** a přidej dvě podmínky

1. Page URL contains /objednavka-odeslana
2. js.isTransactionIdInCookie equals true

Pravidlo spouštění se tak aktivuje na děkovací stránce a jen pokud ID transakce již v cookie existuje.

[![Nastavení triggeru Transakce již byla odeslána](https://nazakladedat.cz/wp-content/uploads/2018/10/Nastavení-triggeru-Transakce-již-byla-odeslána.jpg)](https://nazakladedat.cz/wp-content/uploads/2018/10/Nastavení-triggeru-Transakce-již-byla-odeslána.jpg)

Nastavení pravidla spouštění Transakce již byla odeslána

### 8) Uprav spouštění značky s odesláním transakce

Nyní máš vše připraveno a již stačí pouze **změnit podmínky pro spouštění značky odesílající transakci** do Google Analytics. Pamatuj, že jako první vše nastavuješ jen u testovací značky.

Nejprve u značky v Další nastavení přidej nové pole k nastavení. Do pole **hitCallback** vyplň hodnotou **{{js.hitcallbackSetTransactionCookie}}**.

Čili po úspěšném odeslání transakce se spustí funkce js.hitcallbackSetTransactionCookie a ta vytvoří cookie.

[![Nastavení hitCallbacku](https://nazakladedat.cz/wp-content/uploads/2018/10/Nastavení-hitCallbacku.jpg)](https://nazakladedat.cz/wp-content/uploads/2018/10/Nastavení-hitCallbacku.jpg)

Nastavení hitCallbacku

U značky ještě přidej **blokující** pravidlo spouštění **Transakce již byla odeslána.**

[![Nastavení značky pro odeslání transakce](https://nazakladedat.cz/wp-content/uploads/2018/10/Nastavení-značky-pro-odeslání-transakce.jpg)](https://nazakladedat.cz/wp-content/uploads/2018/10/Nastavení-značky-pro-odeslání-transakce.jpg)

Nastavení značky pro odeslání transakce

### 9) Zkontroluj, že v testovací službě se duplicity neobjevují

Počkej dalších pár dní a zkontroluj, že v testovací službě se již **duplicitní transakce neobjevují**, ale jinak se počty návštěv a uživatelů shodují se službou hlavní.

Pokud tomu tak je, tak uprav i **posílání transakcí do hlavní služby** (krok 8).

Spočítej si, **o kolik se liší počet transakcí v původní a testovací službě**. Toto číslo udává, o kolik předtím Google Analytics transakce kvůli duplicitám nadhodnocovaly.

Do GA je pak o tom vhodné dát **poznámku**. Něco jako „*Implementováno řešení duplicitních transakcí. Dle testu lze očekávat 11% propad v počtu transakcí a tržeb od dnešního dne.*“

### 10) Finální ověření a ukončení testu

Když za několik dní **vše vypadá dobře** a v hlavní službě se již duplicitní transakce neobjevují. Můžeš test ukončit. To spočívá v:

* smazání testovací značky UA – Transaction,
* smazání testovací značky UA – Pageview,
* smazání testovací proměnné UA settings,
* smazání testovací služby v Analytics.

## Závěr

Ze zkušenosti mohu říci, že i při správné implementaci se ještě tu a tam **duplicitní transakce objeví.** Toto řešení totiž nepostihne situaci, kdy si děkovací stránku někdo otevře v jiném prohlížeči nebo smaže cookies. Avšak duplikovanost transakcí se výrazně sníží na nevýznamné hodnoty.

Celý tento postup na eliminaci duplicitních transakcí vychází ze článku [#GTMTips: Prevent Repeat Transactions](https://www.simoahava.com/gtm-tips/prevent-repeat-transactions/). Díky za inspiraci, Simo.

Pokud ti něco nefunguje či máš otázku, [dej mi vědět](https://nazakladedat.cz/kontakt/). Rád poradím.

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