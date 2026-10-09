# URL: https://digitalniarchitekti.cz/produkty/datova-vrstva/

# ******Datová vrstva******

**Datová vrstva je aktuálně nejskloňovanějším tématem poslední doby.** Pokud jste v roce 2021 (a dále) začali pracovat na novém technologickém řešení pro váš **elektronický obchod**, pravděpodobně vám analytik, osvícený marketingový specialista nebo vývojář, doporučil zvážit rovnou od začátku implementaci datové vrstvy.

Pokud tomu tak není, **doporučujeme** tuto **technologii** a filozofii do projektu ideálně ihned **zapracovat**. Po spuštění nového řešení vás mohou jinak čekat nemilé vícepráce, až budou **marketingové agentury potřebovat data pro marketingové a analytické nástroje**.

## **Co je datová vrstva?**

Princip datové vrstvy není technologicky úplně nic převratného. Ať už konkrétně objektu dataLayer či celkové filozofie datového objektu obsahujícího informace o uživateli, stránce a produktech.

***Jedná se o JavaScriptový objekt, nad kterým je pomocí knihovny Google Tag Manageru vytvořena fronta, díky které jsou jednotlivá data (tzv. pushe či eventy) odbavovány do analytických a marketingových systémů.***

Často je výchozí podoba datové vrstvy vytvořena ještě před inicializací Google Tag Manageru. Obsahuje údaje o aktuální stránce (její typ, kategorii apod.), o uživateli (jeho ID, skupinu, počet nákupů apod.) či produktech (zobrazené produkty na stránce, jejich ID a ceny apod.). V průběhu procházení uživatele stránkou (datová vrstva se vymaže při obnovení stránky či přechodu na stránku další) se doplňuje ať už automaticky nebo pomocí právě tzv. pushů o další informace (např. odeslání formuláře, úspěšné přihlášení, proklik čehosi apod.).

## **Proč je datová vrstva důležitá již při vývoji řešení?**

Pokud váš technologický dodavatel vhodně zapracuje datovou vrstvu již při vývoji řešení, ušetříte si do bodoucna množství starostí a úprav existující verze webu. Množství marketingových značek a dat pro ně totiž získáte a nastavíte právě na základě událostí v datové vrstvě. Především v případě, že je datová vrstva zobecněná (někteří analytici používají slovo sémantická – to znamená, že usnadňuje orientaci a poskytuje vhodný kontext), můžete finální podobu dat pro jednotlivé pixely vytvořit pomocí JavaScriptu přímo v Google Tag Manageru.

Vývojáři tedy nemusí natvrdo přímo do webu připravovat 6 variant stejných informací pouze v jiné struktuře, což je zase usnadnění pro ně.

## **Jak si to celé představit?**

Představme si, že uživatel přijde na web. Do datové vrstvy se zapíší údaje o typu stránky (kategorie, detail produktu apod.). I údaj o tom, zda uživatel je či není přihlášený. Údaje se doplní o informace o produktech, které jsou na stránce vidět. Před načtením [Google Tag Manageru](/clanek/google-tag-manager/) provede vývojář následující JavaScriptový kód:

```
dataLayer.push({

user: {

type: 'uzivatel',

},

page: {

type: 'homepage',

}

products: [{

id: '1234',

price: '100',

category: 'Jídlo',

}

,

{...}]

});
```

Tyto informace mohou po patřičných souhlasech uživatele (viz článek “[Tipy ke cookies z praxe analytika](/clanek/tipy-ke-cookies-z-praxe-analytika/)”) pomocí příslušných marketingových a analytických tagů odejít do daných systémů.

Datová vrstva (potažmo Google Tag Manager) poté vyčkává na další událost.

Tou může být například přidání produktu do košíku. Ta může velmi zjednodušeně vypadat takto:

```
dataLayer.push({

event: 'addToCart',

add: [{

    id: '1234'

    name: 'Rohlík',

    category: 'pečivo',

}],

});
```

Opět tato informace poté odchází do systémů a celý proces se opakuje.

## **Jaký je ideální stav?**

Až do roku 2020 (a samozřejmě i nyní) je velmi často jako výchozí používaná struktura datové vrstvy, která byla využívána pro Enhanced Ecommerce pro [Google Analytics](/clanek/google-analytics/) 3 (Universal Analytics). Dlouhou dobu to byla víceméně jediná podoba datové vrstvy. Ještě spolu s objektem google\_tag\_params, kterou jste na webech (především e-shopech) vídali.

S rozvojem marketingových a analytických technologií se datová vrstva stávala čím dál tím žádanější. Tak vznikaly nadstavby nad GA3 ecommerce objekt. Začaly se objevovat objekty user, page a další. Ty přidávají do datové vrstvy potřebný kontext bez nutnosti scrapovat data z DOM objektu. To přineslo v rámci implementací výrazné usnadnění.

S otevřením GA4 veřejnosti se začala situace komplikovat. GA4 totiž ve výchozím stavu vyžaduje jinou strukturu dat, než GA3 EEC měření. Zkušenější vědí, že v GTM existují šablony proměnných, které EEC GA3 model převedou na nová data požadovaná GA4 ecommerce měřením. Otázka ale stále zůstává, jak k datové vrstvě a její struktuře přistoupit.

Pro vývojáře, nabízející svá řešení klientům i pro nově vznikající e-shopy, je rozhodně tou ideální cestou **zobecněná (tzv. sémantická) struktura datové vrstvy**. V té neřešíte strukturu objektů dle GA3, GA4 ani jiného systému. Jen nazýváte prvky tak, abyste se v nich co nejlépe vyznali a reflektovali i datový model používaný v eshopu. Převod do finální podoby řešíte až následně. Z jedné vrstvy tedy snadno připravíte objekty pro GA3, GA4, Criteo, Glami či jiný hojně rozšířený systém.

Vše samozřejmě záleží na životním cyklu vašeho aktuálního řešení. Zobecněná datová vrstva může být velký skok i pro již zaběhlé eshopy. Těm kompletní předělání celé vrstvy přináší nutnost předělat celé měření většinou postavené na GA3 modelu. Vhodnější se jeví situace postavit zobecněnou vrstvu vedle aktuálně existujících objektů a pushů a postupně na ni přecházet.

**Pokud potřebujete s návrhem datové vrstvy, její dokumentací či** [**dlouhodobu údržbou**](/produkty/monitoring-audit-validace-datove-vrstvy/)**, pomoci,  obraťte se na naše profesionály.**

---

## **Pro agentury a vývojáře**

Především u e-shopových řešení, které dále distribuujete svým klientům, je robustní a perfektně zdokumentovaná datová vrstva připravená na GA4 obrovskou konkurenční výhodou. Obraťte se na nás, pokud potřebujete pomoci s jejím návrhem i tvorbou šablon a business cases. Ty můžete následně distribuovat vašim klientům.