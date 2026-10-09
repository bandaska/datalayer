# URL: https://nazakladedat.cz/jak-zalozit-google-analytics-4/

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

# Jak založit Google Analytics 4

22. 11. 2023

 

[Google Analytics 4](https://nazakladedat.cz/co-jsou-google-analytics-4/) (GA4) jsou **novou verzí Google Analytics**, kterou Google vypustil v říjnu 2020. Dnes už jsou i verzí jedinou, jelikož starší [Universal Analytics](https://nazakladedat.cz/co-jsou-google-analytics/) už skončily.

Jak je nasadit na tvůj web ti prozradí právě tento **návod.** Či se [mi ozvi](https://nazakladedat.cz/kontakt/) a rád ti pomohu.

Nastavení měření do nových Analytics s pomocí [Google Tag Manageru](https://nazakladedat.cz/co-je-google-tag-manager/) sestává ze čtyř kroků:

* [Vytvoření nové služby GA4](#vytvoreni_nove_sluzby)
* [Založení datového streamu](#zalozeni_datoveho_streamu)
* [Přidání značky v Google Tag Manageru](#pridani_znacky_v_gtm)
* [Konfigurace GA4](#konfigurace)

## Zkrácený cheklist

Pokud už GA4 znáš jako své boty, stačí ti polétnout tento **checklist**. Případně níže v článku najdeš bližší vysvětlení k jednotlivým bodům.

1. vytvoř novou službu v GA4
2. založ datový stream
3. ve vylepšeném měření vypni měření formulářů a nastav proměnnou pro interní vyhledávání, vypni co nepotřebuješ
4. v GTM založ novou značku GA4 – Config (Google Tag) a publikuj
5. aktivuj Google Signals
6. uchovávání dat změň na 14 měsíců
7. založ vlastní parametry
8. nastav propojení s Google Ads
9. naplánuj kontrolu dat
10. naplánuj označení konverzních událostí za klíčovou událost

## Vytvoření nové služby GA4

1) Pokud zatím **žádný [Analytics účet](https://nazakladedat.cz/struktura-uctu-google-analytics/) nemáš**, jdi na [analytics.google.com](https://analytics.google.com), přihlas se tam svým Google účtem a stiskni registruj se.

V případě, že už nějaké Analytics máš, přihlas se do nich a vlevo dole klikni na *Administrátor*. Vlevo nahoře pak klikni na tlačítko *Vytvořit* a vyber *Služba*.

![](https://nazakladedat.cz/wp-content/uploads/2023/11/Tlacitko-pro-zalozeni-nove-GA4-sluzby.jpg)

Tlačítko pro založení nové GA4 služby

2) Google Analytics 4 jsou již primární variantou pro založení nových GA. Stačí vyplnit **Název služby, vybrat časové pásmo a měnu.**

![](https://nazakladedat.cz/wp-content/uploads/2023/11/Vytvoreni-GA4-sluzby.jpg)

Vytvoření GA4 služby

3) V druhém kroku **vyber odvětví** webu a zodpověz další otázky.

![](https://nazakladedat.cz/wp-content/uploads/2023/11/Vyplneni-podrobnosti-o-firme.jpg)

Vyplnění podrobností o firmě

4) Nyní zaškrtni **obchodní cíl**, který chceš s pomocí GA4 měřit. Dle tohoto cíle se přednastaví standardní přehledy. Ty jsou kdyžtak později změnit.

![](https://nazakladedat.cz/wp-content/uploads/2023/11/Vyber-obchodniho-cile.jpg)

Výběr obchodního cíle

5) Klikni na **Vytvořit** a je to. Nové GA4 máš **založené**.

Nyní je však potřeba ještě nastavit **sbírání dat**

## Založení datového streamu

6) Po předchozím kroku se ti rovnou zobrazí možnost **vytvořit nový datový stream**. Klikni na možnost *Web*. Pokud tuto nabídku nevidíš, jdi do *Administrátor*, vyber *Shromažďování a úprava dat* a tam *Datové streamy*.

![](https://nazakladedat.cz/wp-content/uploads/2023/11/Zalozeni-datoveho-streamu-GA4.jpg)

Založení datového streamu do GA4

7) Vyplň **Adresu URL webu** a **Název streamu**.

![Nastavení datového streamu](https://nazakladedat.cz/wp-content/uploads/2020/05/Nastavení-datového-streamu-1.jpg)

Nastavení datového streamu

8) V sekci **Vylepšené měření** po kliknutí na ozubené kolečko lze přepínači upravit, co vše se mají Analytics pokusit měřit automaticky.

Doporučuji ti nechat **zapnuté jen to, co potřebuješ**. Pokud na webu nemáš vložená videa, soubory ke stažení či vyhledávací pole, je lepší dané části vypnout. Zatím jsem neviděl, že by automatické měření formulářů fungovalo dobře. Tak to vypni určitě.

![](https://nazakladedat.cz/wp-content/uploads/2023/11/Ukazka-nastaveni-vylepseneho-mereni-pro-nazakladedat.cz_-721x1024.jpg)

Ukázka nastavení vylepšeného měření pro nazakladedat.cz

U **Vyhledávání na webu** rozklikni rozšířená nastavení a vyplň tam parametr vyhledávacích dotazů u interního vyhledávání svého webu. Upozorňuji ještě, že vyhledávání na webu bude fungovat jen pokud se vyhledávaný výraz vkládá jako parametr do URL. Pokud ne, tak měření stejně nejspíš fungovat nebude a je ho potřeba ošetřit přes [Google Tag Manager.](https://nazakladedat.cz/co-je-google-tag-manager/)

**Interakce s videem** budou fungovat pouze pro videa vložená z YouTube s aktivovanou podporou JS API. Jiné přehrávače je opět potřeba řešit přes Google Tag Manager.

9) Po uložení si zkopíruj **ID měření** nově vygenerovaného datového streamu.

![](https://nazakladedat.cz/wp-content/uploads/2020/05/ID-měření-1.jpg)

ID měření

## Přidání značky v Google Tag Manageru

10) Přejdi do **[Google Tag Manageru](https://nazakladedat.cz/co-je-google-tag-manager/)** svého webu. Tam vytvoř **novou značku**.

Pojmenuj ji **GA4 – Config**, jako typ vyber **Google Tag** a do pole **Tag ID** vlož před chvílí zkopírované ID měření. Či ještě lépe založ novou konstantu a až do té ID umísti.

Jako **pravidlo spouštění** vyber Všechny stránky. Resp. takové, aby měření respektovalo souhlas udělený v cookies liště. To se liší web od webu a pokud váháš, [ozvi se mi](https://nazakladedat.cz/kontakt/) a rád pomohu.

![](https://nazakladedat.cz/wp-content/uploads/2023/11/Pridani-znacky-GA4-do-GTM.jpg)

Přidání značky GA4 do GTM

11) Ulož, v **preview módu** ověř, že se značka na webu skutečně spouští a vše **publikuj**.

Existují i **jiné možnosti,** jak měřící kód Google Analytics 4 na web dostat. Některé weby mají už v administraci připravenou kolonku, kam stačí vyplnit ID měření z datového streamu. Nebo u Shoptetu ti poslouží tento [návod na integraci GA4](https://podpora.shoptet.cz/hc/cs/articles/360003141272-Nastaven%C3%AD-Google-Analytics).

## Konfigurace GA4

12) Zpátky v Google Analytics jdi do ***Administrátor* –*****> Shromažďování a úprava dat** **-> Sběr dat*** a povol shromažďování údajů pro signály Google (Google Signals).

Pozor, že tato volba upraví **režim zpracovávaných dat** a k tomu je potřeba mít od uživatelů webu patřičný souhlas. Pokud nevíš, co s tím, [ozvi se mi](https://nazakladedat.cz/kontakt/) a poradím.

![](https://nazakladedat.cz/wp-content/uploads/2023/11/Aktivace-signalu-Google-1024x393.jpg)

Aktivace signálů Google

13) Nyní překlikni na ***Uchovávání dat*** a tam vyber co nejdelší dobu. Jinak se ti data budou mazat již po dvou měsících.

![](https://nazakladedat.cz/wp-content/uploads/2023/11/Nastaveni-doby-uchovavani-dat.jpg)

Nastavení doby uchovávání dat

14) Pokud se chystáš měřit i **události s vlastními parametry**, je potřeba tyto parametry nastavit.

Jdi do sekce *Zobrazení dat -> Vlastní definice* a vpravo nahoře klikni na **Vytvořit vlastní dimenzi.**

![](https://nazakladedat.cz/wp-content/uploads/2023/11/Vytvoreni-vlastnich-dimenzi-1.jpg)

Vytvoření vlastních dimenzí

Tam založ potřebné parametry.

Bez tohoto nastavení se parametry u události sice **budou ukládat**, ale nebudou se ve webovém rozhraní zobrazovat.

Nejlepší je tento krok udělat až **za pár dní** od nastavení událostí, protože se ti jednotlivé parametry budou u událostí samy nabízet.

15) Události, které jsou pro tebe nejdůležitější, **označ jako konverzi (klíčovou událost)**. Uděláš to přepínačem u konkrétní události na přehledu *Zobrazení dat -> Události*.

![Označení události jako konverze](https://nazakladedat.cz/wp-content/uploads/2020/06/Označení-události-jako-konverze.jpg)

Označení události jako konverze

Případně ještě uprav v *Zobrazení dat -> Konverze*, zda se má konverze počítat pokaždé, nebo jen **jednou za relaci** (návštěvu).

![](https://nazakladedat.cz/wp-content/uploads/2023/09/Metoda-pocitani-konverze.jpg)

Metoda počítání konverze

16) V případě, že na webu očekáváš **nižší návštěvnost**, jdi do *Zobrazení dat -> Identita pro přehledy* a tam vyber možnost *Založené na zařízení*. Ulehčí ti to pár nepříjemností při práci s daty v budoucnosti.

![](https://nazakladedat.cz/wp-content/uploads/2023/11/Vyber-identity-pro-prehledy-1024x430.jpg)

Výběr identity pro přehledy

17) Pokud na web vedeš **inzerci v [Google Ads](https://nazakladedat.cz/co-jsou-google-ads/)**, [propoj nově vytvořené GA4 s Google Ads účtem](https://nazakladedat.cz/jak-propojit-ga4-a-google-ads/).

18) V Konfiguraci nastavení značky u Povolení využívat údaje poskytnuté uživatelem deaktivuj možnost **Automaticky zjišťovat data poskytnutá uživatelem.**

![](https://nazakladedat.cz/wp-content/uploads/2023/11/Vypnuti-automatickeho-zjistovani-dat-o-uzivateli.jpg)

Vypnutí automatického zjišťování dat o uživateli

19) V některých případech je vhodné rovnou nastavit [propojení s](https://nazakladedat.cz/jak-nastavit-export-ga4-dat-do-bigquery/) **[Google BigQuery](https://nazakladedat.cz/jak-nastavit-export-ga4-dat-do-bigquery/).**

## Závěr

V sekci **V reálném čase** v nových Analytics si zkontroluj, zda se objevují první eventy.

![](https://nazakladedat.cz/wp-content/uploads/2023/11/Prehled-v-realnem-case-GA4-1024x442.jpg)

Přehled v reálném čase GA4

**Za několik dní** se pak ještě podívej, zda se data v nových Google Analytics skutečně sbírají. Především se podívej, zda se měří části z Vylepšeného měření tak, jak potřebuješ.

Prozkoumat pak můžeš jednotlivé **reporty**, které GA4 přináší.

A na závěr. Narazíš-li kdekoli v postupu **na problém**, tak mi [dej vědět](https://nazakladedat.cz/kontakt/). Rád poradím či návod upravím.

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