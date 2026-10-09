# URL: https://nazakladedat.cz/jak-nastavit-rozsirene-konverze-v-google-ads/

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

# Jak nastavit rozšířené konverze v Google Ads

7. 3. 2024

 

**Rozšířené konverze** pro [Google Ads](https://nazakladedat.cz/co-jsou-google-ads/) nabývají v dnešní době s omezenými cookies na významu. Někdy se jim také říká vylepšené konverze či anglicky **Enhanced Conversions**. Co jsou a jak je nastavit?

![](https://nazakladedat.cz/wp-content/uploads/2024/02/Diagnostika-kdyz-se-rozsirene-konverze-pouzivaji.jpg)

Hláška, že se rozšířené konverze používají

## Co jsou rozšířené konverze

Standardní měření konverzí nejen pro [Google Ads](https://nazakladedat.cz/co-jsou-google-ads/) spoléhá na **cookies**. Jenže ty podléhají [schválení v cookies liště](https://nazakladedat.cz/jak-zkontrolovat-cookies-listu/) a mohou být smazány či blokovány. Jsou tak méně a méně spolehlivé.

A tak přišel Google s řešením. Při měření konverze se společně s údaji o ní odešlou i **údaje vyplněné uživatelem**. Např. u objednávky na e-shopu to bývá jméno, příjmení, e-mail, telefon a adresa. Více se dozvíš v [nápovědě Google](https://support.google.com/google-ads/answer/9888656?hl=cs).

Díky tomu pak Google dokáže přiřadit více konverzí k proklikům reklam. Vezměme si **příklad**. Koukám se na videa na YouTube a protože jsem do něj přihlášený, Google ví, že jsem František Rajtmajer a které reklamy mi zobrazil. Řekněme, že mi ukázal reklamu na tvůj e-shop. Když pak na tvém e-shopu udělám objednávku, tak se díky rozšířeným konverzím do Googlu dostane informace, že objednávku udělal nějaký František Rajtmajer s telefonem [+420 732 757 452](tel:+420732757452) a mailem [frantisek@rajtmajer.cz](mailto:frantisek@rajtmajer.cz). To následně Google porovná s reklamami, které jsem viděl a vyreportuje, že jsem objednávku určitě udělal po tom, co jsem zhlédl tvou reklamu na YouTube.

Výhodou tohoto řešení je **nezávislost na cookies**. Funguje tak i v případě, že se cookie o prokliku reklamy již stihla ztratit. A dokonce i když konverzi udělám na úplně jiném zařízení, třeba tabletu mé ženy.

Možná tě napadá, zda je legální do Googlu posílat **osobní údaje** jako jména, e-maily a telefony. Podstatné je, že všechny tyto údaje se před odesláním hashují a hlavně o tomto používání osobních údajů samozřejmě své návštěvníky informuj a získej od nich k tomu aktivní souhlas. Třeba v cookies liště.

![](https://nazakladedat.cz/wp-content/uploads/2024/02/Ukazka-mozneho-souhlasu-v-liste.jpg)

Ukázka možného souhlasu v liště

## Jak rozšířené konverze nastavit s pomocí GTM

Předpokládám, že máš již v [Google Tag Manageru](https://nazakladedat.cz/co-je-google-tag-manager/) funkční klasické měření konverzí do Google Ads. Pokud ne, začni s tímto [návodem na nastavení Google Ads konverzí.](https://nazakladedat.cz/jak-merit-konverze-v-google-ads/)

Druhým předpokladem je dostupnost **údajů o uživateli** v datové vrstvě po uskutečnění konverze. To ověříš tak, že si uděláš testovací konverzi a ve zdrojovém kódu na děkovací stránce najdeš něco takového s údaji, které o sobě uživatel vyplnil.

![](https://nazakladedat.cz/wp-content/uploads/2024/03/Ukazka-kodu-s-udaji-o-uzivateli.jpg)

Ukázka kódu s údaji o uživateli

Pokud tam údaje nemáš, požádej vývojáře webu, aby do [dataLayeru](https://nazakladedat.cz/co-je-datalayer/) na stránce po uskutečnění konverze **doplnil tento kód**. Je potřeba jej vložit na správné místo, aby vše fungovalo.

```
<script>
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  user: {
      email: "test@seznam.cz",
      first_name: "Jan",
      last_name: "Novák",
      tel: "00420721456123",
      street: "Testovaci 1",
      city: "Testov",
      postalCode: "30000",
      country: "CZ"
  }
});
</script>
```

Až bude oboje připravené, tak už jen stačí **upravit nastavení značky konverze v GTM**. A to konkrétně aktivovat možnost *Zahrnout uživateli poskytnutá data z vašeho webu* a vybrat novou proměnnou s názvem např. *user\_data*.

![](https://nazakladedat.cz/wp-content/uploads/2024/03/Zahrnuti-dat-o-uzivateli-v-nastaveni-konverze.jpg)

Zahrnutí dat o uživateli v nastavení konverze

Tato proměnná je typu ***Data poskytnutá uživatelem*** a je nastavená takto.

![](https://nazakladedat.cz/wp-content/uploads/2024/03/Promenna-user_data-627x1024.jpg)

Proměnná user\_data

Jednotlivé proměnné je potřeba přizpůsobit podobě [dataLayeru](https://nazakladedat.cz/co-je-datalayer/) na tvém webu. Pokud v tom tápeš, [ozvi se mi](https://nazakladedat.cz/kontakt/).

## Aktivace rozšířených konverzí v rozhraní Google Ads

Aby [Google Ads](https://nazakladedat.cz/co-jsou-google-ads/) posílané údaje využily, je ještě potřeba rozšířené konverze v reklamním účtu aktivovat.

Tuto možnost najdeš u **nastavení konverzí**, kde zaškrtni *Zapnout rozšířené konverze* a jako metodu vyber *Správce značek Google*.

![](https://nazakladedat.cz/wp-content/uploads/2024/03/Zapnuti-rozsirenych-konverzi-v-Google-Ads-1024x547.jpg)

Zapnutí rozšířených konverzí v Google Ads

Zda všechno dobře funguje pak zjistíš za pár dní v *Diagnostice konverzí.*

![](https://nazakladedat.cz/wp-content/uploads/2024/03/Diagnostika-konverzi-1024x364.jpg)

Diagnostika konverzí

## Závěr

Díky vylepšeným konverzím dodáš **algoritmům Google Ads** zase o něco více dat, které mohou používat k vyhodnocování a [zlepšování výkonu PPC reklam](https://www.rajtmajer.cz/sprava-ppc/).

Další příležitostí k naměření více dat je [implementace měření dat z košíku](https://nazakladedat.cz/jak-nastavit-data-z-kosiku-v-google-ads/).

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