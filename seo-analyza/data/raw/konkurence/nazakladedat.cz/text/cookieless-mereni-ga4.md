# URL: https://nazakladedat.cz/cookieless-mereni-ga4/

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

# Co je cookieless měření v GA4

7. 3. 2023

 

Od ledna 2022 je povinnost mít na webech cookies lištu a cookies pro analytické či marketingové účely tak smíme uložit až **po aktivním souhlasu uživatele**.

Jenže co když uživatel v liště souhlas neudělí nebo cookies lištu ignoruje? V tom případě nám zákon **nezakazuje uživatele nadále měřit**, jen nesmíme v jeho prohlížeči uložit žádné cookies (ani jiný identifikátor).

![](https://nazakladedat.cz/wp-content/uploads/2023/03/moje-cookies-lista-1024x196.jpg)

Ukázka cookies lišty. Je to obrázek, takže na tlačítka automaticky neklikej, stejně nezmizí

## K čemu cookies v analytice slouží?

Cookies slouží v analytice k **propojení jednotlivých událostí** změřených na webu (zobrazení stránky, kliknutí na tlačítko, přidání do košíku, nákup…) do jedné návštěvy a jejich přiřazení k jednomu uživateli.

Pokud cookies nemáme, analytický nástroj pak **nemá podle čeho poznat**, že jednotlivé události patří jednomu uživateli a tvoří dohromady jednu návštěvu.

V případě nesouhlasu s cookies je jednou možností nic neměřit. Druhou možností je jednotlivé události změřit, ale **nepoužít k tomu žádné cookies.** Tomu se říká cookieless měření.

## Jakou výhodu má cookieless měření do GA4?

[Google Analytics 4](https://nazakladedat.cz/co-jsou-google-analytics-4/) jsou jedním z nástrojů, který **cookieless měření podporuje**. Pokud jej správně nastavíš, budou i při nesouhlasu s cookies jednotlivé události měřit, pouze k tomu nepoužijí cookies. Takže je to v souladu se zákonem.

Nad těmito daty sesbíranými bez cookies pak Google provede **modelování** a pokusí se odhadnout, jak by asi vypadalo chování uživatelů, pokud by souhlas udělili.

V ideálním případě pak v rozhraní GA4 vidíme **celková čísla**, jako kdyby na webu žádná cookies lišta nebyla.

## Jak cookiless měření v GA4 funguje?

Představ si to tak, že nám např. na web přijde **1 000 reálných lidí** a v cookies liště nám dá souhlas 70 % z nich. Čili 700 uživatelů se měří klasicky s cookies a 300 uživatelů bez cookies.

Google pak vidí v [GA4](https://nazakladedat.cz/co-jsou-google-analytics-4/) dvě množiny dat. Jednu **s cookies,** kde má informace o návštěvách, zdrojích návštěv a tom, jak postupně uživatel procházel webem.

V druhé skupině dat **bez cookies** má jen nepropojené údaje o tom, kolikrát se zobrazila která stránka, kolik bylo jednotlivých událostí či třeba objednávek. Tyto události ale nejsou nijak propojené, takže není poznat z jakého zdroje přišla daná objednávka a které stránky daný uživatel na webu viděl.

Google spustí **strojové učení** na množině dat se souhlasem a nad ní natrénuje model toho, jak se běžně lidé na webu chovají. Tento model pak aplikuje na data bez cookies a tím domodeluje, jak by se asi chovali.

V rozhraní GA4 pak Google propojí tyto dvě množiny dat dohromady a ukáže nám **celkové výsledky.**

Bez cookieless měření by tak ve statistikách bylo jen 700 uživatelů. Díky modelování tam ale bude číslo **okolo 1 000**. Jak moc přesně se Google trefí záleží na množství nasbíraných dat. Čím více dat máme a čím vyšší je poměr souhlasů, tím lépe.

## Jak poznám, že je na webu cookieless měření aktivní?

Aby modelování dat bez souhlasu fungovalo, tak je potřeba **splnit dvě podmínky.**

Zaprvé je potřeba mít cookiless měření na webu **správně nastavené**. Informace o tom, zda mají GA4 měřit s cookies nebo bez cookies jim předáš prostřednictvím [Google Consent Mode](https://nazakladedat.cz/jak-nastavit-google-consent-mode/). Ten laicky řečeno měřícímu kódu GA4 řekne, zda smí cookies použít či ne. O vše ostatní už se měřící kód postárá automaticky sám.

Zadruhé pak musí mít Google **dostatek dat**, aby bylo modelování statisticky spolehlivé.

Že je dat dostatek si můžeš **ověřit v nastavení GA4.** Jdi do Správce a v menu ve druhém sloupci klikni na Identita pro přehledy.

![](https://nazakladedat.cz/wp-content/uploads/2023/03/Identita-pro-prehledy.jpg)

Identita pro přehledy

Když pak rozklikneš Smíšenou metodu, tak jedním z prvků, které tato metoda využívá je i **modelování**. A ta je buď aktivní, a nebo jako na následujícím obrázku nedostupná.

![](https://nazakladedat.cz/wp-content/uploads/2023/03/Modelovani-dat.jpg)

Informace o nedostupnosti modelování dat

Pokud je modelování aktivní, tak i přímo v reportech a průzkumech se ti začne ukazovat u názvu přehledu hláška **Včetně odhadovaných uživatelských dat**.

![](https://nazakladedat.cz/wp-content/uploads/2023/03/Hlaska-o-aktivnim-modelovani-dat-1024x413.jpg)

Hláška o aktivním modelování dat

Pokud se ti zdá, že na webu nefunguje cookieless měření správně, klidně se [mi ozvi](https://nazakladedat.cz/kontakt/) a podíváme se na to společně.

## Najdu cookieless data v BigQuery?

Pokud využíváš automatický **[export dat z GA4 do BigQuery](https://nazakladedat.cz/jak-nastavit-export-ga4-dat-do-bigquery/)**, tak ano. V [BigQuery](https://nazakladedat.cz/co-je-bigquery/) budeš mít všechna data změřená na webu, takže jak ta změřená se souhlasem a tudíž s použitím cookies, tak ta bez cookies.

U dat změřených bez cookies ale budou pochopitelně **chybět údaje na cookies závislé**, konkrétně *user\_pseudo\_id* a *ga\_session\_id*.

## Využívají cookieless měření i další systémy?

Ano, měřit konverze bez použití cookies a chybějící data domodelovat umí i [Google Ads](https://ads.google.com/intl/cs_cz/home/) či [Seznam Sklik](https://nazakladedat.cz/co-je-sklik/).

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