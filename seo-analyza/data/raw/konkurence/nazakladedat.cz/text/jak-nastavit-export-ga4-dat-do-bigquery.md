# URL: https://nazakladedat.cz/jak-nastavit-export-ga4-dat-do-bigquery/

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

# Jak nastavit export GA4 dat do BigQuery

29. 11. 2022

 

[Google Analytics 4](https://nazakladedat.cz/co-jsou-google-analytics-4/) umožňují zdarma exportovat data do databáze **[Google BigQuery](https://nazakladedat.cz/co-je-bigquery/)**, kde s nimi můžeš dle libosti dál pracovat. Ukážeme si krok za krokem, jak export nastavit.

## Založení projektu v Google Cloud

1) Jako první potřebujeme mít **projekt**, do kterého budou GA4 data ukládat.

Pokud zatím žádný projekt na **Google Cloud** nemáš, tak si tam nejprve pod svým Google účtem založ účet. Jdi na [cloud.google.com](https://cloud.google.com/) a registruj se.

Pokud už Google Cloud účet máš, přihlas se.

2) Klikni na rolovátko vlevo nahoře vedle loga Google Cloud. Pokud už máš vytvořenou organizaci pro lepší přehled nad jednotlivými projekty, tak ji vyber. Pak klikni na **Nový projekt.**

![](https://nazakladedat.cz/wp-content/uploads/2022/10/Zalozeni-noveho-projektu-v-Google-Cloud.jpg)

Založení nového projektu v Google Cloud

3) Vyplň **údaje o projektu**. Jako název doporučuji použít název tvého webu + GA4 export (např. rajtmajercz GA4 export). Upřesni případně organizaci a dej Vytvořit.

![](https://nazakladedat.cz/wp-content/uploads/2022/10/Udaje-o-novem-projektu.jpg)

Údaje o novém projektu

4) Po založení projektu se **do něj přepni** přes rolovátko vlevo nahoře vedle loga Google Cloud.

![](https://nazakladedat.cz/wp-content/uploads/2022/10/Prepnuti-do-projektu.jpg)

Přepnutí do projektu

5) Pro práci s **BigQuery** je potřeba ji nejprve v Google Cloud povolit.

Pokud zatím žádný BiqQuery projekt nemáš, vyber v levém menu nebo přes vyhledávací pole nahoře APIs & Services a tam klini na Library. Pod Google Cloud APIs najdi BigQuery API, klikni na něj a dej povolit.

![](https://nazakladedat.cz/wp-content/uploads/2022/10/Povoleni-Big-Query-API.jpg)

Povolení BigQuery API

## Nasdílení přístupu k projektu

Pokud bude s daty pracovat někdo jiný, např. tvůj [webový analytik](https://www.rajtmajer.cz/), bude potřebovat **nasdílet přístupy**. Bude pak za tebe moci udělat i samotné propojení GA4 s BigQuery.

6) Ujisti se, že jsi stále **ve správném projektu**, do kterého chceš přístup přidat. Viz bod 4) výše.

7) V levém menu vyber **IAM and admin**.

![](https://nazakladedat.cz/wp-content/uploads/2022/12/IAM-and-admin.jpg)

IAM and admin

8) Nahoře klikni na **Grant access**.

![](https://nazakladedat.cz/wp-content/uploads/2022/12/Grant-access.jpg)

Grant access

9) Vyplň **e-mail** zvaného uživatele a určit **práva**. Aby za tebe mohl pozvaný uživatel dokončit propojení s GA4, potřebuje oprávnění Owner.

![](https://nazakladedat.cz/wp-content/uploads/2022/12/Pridani-pristupu-do-Google-Cloud-projektu.jpg)

Přidání přístupu do Google Cloud projektu

## Propojení GA4 s BigQuery

10) Nyní jdi do svého GA4 účtu, který chceš s BigQuery propojit. V nastavení vyber ***Propojení služeb -> Propojení se službou BigQuery.***

![](https://nazakladedat.cz/wp-content/uploads/2023/11/Propojeni-s-BigQuery-v-Google-Analytics.jpg)

Propojení s BigQuery v Google Analytics

Pak klikni na modré tlačítko **Propojit**.

![](https://nazakladedat.cz/wp-content/uploads/2022/10/Tlacitko-Propojit.jpg)

Tlačítko Propojit

11) Vyber před chvílí vytvořený **projekt v BigQuery** a lokaci pro uložení dat.

![](https://nazakladedat.cz/wp-content/uploads/2022/10/Vyber-projektu-v-BigQuery.jpg)

Výběr projektu v BigQuery

12) V dalším kroku vyber, jaké data streamy chceš exportovat. Případně můžeš některé události z exportu vyloučit.

Volbou **Denně** povolíš dávkový export dat za předchozí den. To chceš.

Zaškrtnutím **Streamování** pak i export dat v reálném čase. To se hodí například pro debugování měření a tak jej povol také.

![](https://nazakladedat.cz/wp-content/uploads/2022/10/Konfigurace-propojeni.jpg)

Konfigurace propojení

13) Vše potvrď a máš **hotovo**.

![](https://nazakladedat.cz/wp-content/uploads/2022/10/Propojeni-vytvoreno.jpg)

Propojení vytvořeno

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