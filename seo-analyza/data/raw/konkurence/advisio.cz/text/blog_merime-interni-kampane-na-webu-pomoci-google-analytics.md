# URL: https://www.advisio.cz/blog/merime-interni-kampane-na-webu-pomoci-google-analytics/

**Obsah článku:**

* [Jak to dělat správně?](#jak-to-delat-spravne)
* [Kde události v Google Analytics najdete?](#kde-udalosti-v-google-analytics-najdete)

Čím dál častěji se setkávám s tím, že většina webů/e-shopů měří naprosto nevhodně své interní kampaně (bannery, textové odkazy apod.). Buď je tedy neměří vůbec, nebo využívají taggovaní pomocí utm\_ parametrů, což je naproste špatně.

Bannery tak bývají velmi často označovány například takto:

*<a href=“http://www.test.cz/test/?utm\_source=banner-hp&utm\_medium=banner&utm\_campaign=kampan“>*

Nejenže si tímto zkreslujete své statistiky, ale hlavně nenávratně přicházíte o původní zdroj návštěvy. Takže, pokud na web přijde uživatel přes fulltextový vyhledávač a následně klikne na některý takto „otaggovaný“ banner v Google Analytics už nezjistíme, že původně přišel právě z fulltextového vyhledávače, což je velká škoda. Zásluhy na konverzi budou přisuzovány právě danému banneru. Kampaňové parametry by tak měly sloužit pouze k označení externích kampaní (PPC, [display reklama](https://www.advisio.cz/blog/display-reklama-dobry-sluha-spatny-pan/) apod.).

## Jak to dělat správně?

Sledování pomocí utm\_ parametrů lze nahradit tzv. even-trackingem, což v překladu znamená sledování událostí. U banneru můžete event tracking připravit navázáním události onclick na příslušný banner:

*<a href=“http://www.example.cz/test/“ onclick=“\_gaq.push([‚\_trackEvent‘, ‚Banner‘, ‚banner-hp‘, ‚nazev-banneru‘]);“>*

Tři poslední parametry přitom postupně určují a upřesňují, o kterou kampaň se vlastně jedná, abyste kliknutí na banner rozlišili od dalších událostí na vašem webu, které sledujete. První parametr obecně určuje, že se jedná o jakýkoliv selfpromo banner (něco jako utm\_source) – tento parametr doporučuji nechat napříč všemi bannery na webu stejné, abyste jednoznačně vždy rozlišili interní bannery. Druhý parametr pak určuje konkrétní pozici či typ banneru – změňte podle sebe pro každou pozici. Třetí parametr pak určuje momentální obsah či cíl daného banneru – měňte tak, abyste i zpětně dokázali určit, o který banner se minulosti jednalo.

Parametrů je sice celkem 5, nicméně pro měření selfpromo [bannerů](https://www.advisio.cz/blog/rozmery-banneru-a-responzivnich-reklam/) bohatě postačí tyto tři.

V případě, že si chcete ušetřit práci a nechcete pokaždé manuálně doplňovat poslední parametr, můžete si do toho parametru nechat automaticky doplňovat cíl odkazu, což by mohlo vypadat například takto:

*<a href=“http://www.test.cz/kategorie/“ onclick=“\_gaq.push([‚\_trackEvent‘, ‚Banner‘, ‚banner-hp‘, this.href]);“>*

V podstatě by se mohly doplňovat všechny tyto parametry automaticky. Jde jen o to, udělat si v administraci e-shopu/webu vhodnou úpravu, která by tohle zvládla.

Event tracking se dá samozřejme navázat i na další události, které vyžadují nějakou akci z pohledu uživatele a která se neprojeví v rámci URL. Pomocí událostí tak můžeme sledovat například rychlost načítání stránky, různé vyplnování formulářů či sledování chybových stránek (404, 500). O tom, ale zase až příště :-).

## Kde události v Google Analytics najdete?

V záložce Chování a zde pak Události. Tato sekce je dále rozdělena na celkový přehled a další přidružené přehledy rozdělené podle metrik.

[![udalosti-1](https://www.advisio.cz/wp-content/uploads/2020/02/udalosti-1.png)](https://www.advisio.cz/wp-content/uploads/2020/02/udalosti-1.png)

### Důležité odkazy:

[Event Tracking Guide](https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide)

**Štítky:**
[banners](https://www.advisio.cz/blog/stitek/banners/) [bannery](https://www.advisio.cz/blog/stitek/bannery/) [google analytics](https://www.advisio.cz/blog/stitek/google-analytics/)

**Sdílejte článek:**

![fotografie Radim Vašíček](https://www.advisio.cz/wp-content/uploads/2020/01/fotky-v-kolecku-17.png)

**Radim Vašíček** [1]  
[1] Founder

[Napište si autorovi o radu](mailto:blog@advisio.cz)

Majitel, jednatel, rybář, fanoušek MMA a amatérský boxer.

[## Je Google Ads a Sklik vaším druhým domovem?

Přidejte se k našemu [áčkovému] týmu

Chci do [A] týmu

![](https://www.advisio.cz/wp-content/themes/advisio/img/join.jpg)](/kariera/)