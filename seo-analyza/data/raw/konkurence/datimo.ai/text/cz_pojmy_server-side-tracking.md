# URL: https://www.datimo.ai/cz/pojmy/server-side-tracking

1. [Domů](/cz)
2. [Znalostní báze](/cz/znalosti)
3. [Pojmy](/cz/znalosti/pojmy)
4. Server-side tracking

# Server-side tracking

Měření, které místo prohlížeče návštěvníka posílá data přes server, takže neztrácíte konverze jen kvůli adblocku nebo omezením cookies. Čím víc konverzí uteče mezi prohlížečem a reportingem, tím naslepo optimalizují kampaně, které na těch datech stojí — tady je vysvětlené, kde se data reálně ztrácí a proč to samotná CDN vrstva jako Google Tag Gateway nevyřeší celé.

Chci probrat měření dat

## Kampaně jsou jen tak dobré, jak dobrá jsou data pod nimi

Smart Bidding, ROAS cíle nebo PMax segmentace nejsou magie, jsou to algoritmy, které se učí z konverzí, jež jim nahlásíte. Když část reálných nákupů do systému nedorazí, algoritmus se neučí z chyby, učí se z neúplného obrazu a podle něj rozděluje rozpočet.

### Smart Bidding optimalizuje nad tím, co vidí, ne nad tím, co se skutečně stalo

Pokud Google Ads nebo Meta nedostanou signál o části konverzí, model si to nedomyslí. Prostě s tou objednávkou nepočítá a podle toho rozhoduje, kam dál posílat rozpočet.

### Chybějící konverze vypadají jako slabá kampaň, ne jako díra v měření

Kampaň, která reálně vydělává, se v datech tváří jako podprůměrná, protože část jejích konverzí do reportingu nedorazila. Rozhodnutí o útlumu nebo škálování se pak dělá nad zkresleným číslem, ne nad realitou.

### Bez marže v datech se optimalizuje na obrat, ne na zisk

I bezchybně změřená konverze bez informace o marži produktu vede algoritmus k honbě za tržbami. Aby PMax nebo Smart Bidding uměly upřednostnit produkty, které skutečně vydělávají, potřebují marži jako součást signálu, ne jen počet objednávek.

## Kde firmy pálí peníze

Nejde jen o firmy, které měření podceňují. Čím dál častější je opačná chyba: nasadit jednoduchou vrstvu, o které se firma domnívá, že problém vyřešila, a dál se rozhodovat nad daty, která jsou pořád děravá.

* ### Adblockery a Safari ITP tiší i běžné měření

  Rozšíření a seznamy pro blokování reklam, spolu s omezením životnosti cookies v Safari (ITP), snižují množství konverzí, které se do GA4, Google Ads nebo Meta vůbec dostanou, pokud měření běží čistě v prohlížeči návštěvníka.
* ### "First-party" vrstva na CDN vyřeší jen část problému

  Google Tag Gateway (First-Party Mode) přes Cloudflare nebo podobnou CDN vrstvu schová měřicí volání pod vlastní doménu. To je užitečná vrstva, ale sama o sobě data nečistí ani nedoplňuje, a bez ručního doladění dokáže do reportingu zamíchat i provoz administrace webu jako běžné návštěvy.
* ### Adblock seznamy kontrolují cesty, ne jen domény

  I po přesunu měření pod vlastní doménu mohou seznamy jako EasyPrivacy blokovat podle konkrétní cesty (například /gtm.js), ne jen podle domény. Část návštěvníků tak zůstává v datech neviditelná i s first-party vrstvou.
* ### Přesun pod vlastní doménu cookies sám neprodlouží

  To, že měření běží pod vaší doménou, neznamená, že Safari ITP přestane zkracovat životnost cookies u čistě client-side měření přes proxy. Cookies pod větší kontrolou dostanete až tehdy, když je řídí server, ne jen síťová vrstva před ním.

## Pořádný server-side setup, ne jen proxy vrstva

### Server, který data nejdřív zastaví a vyčistí, teprve pak pošle dál

Spolehlivé měření stojí na serverové vrstvě (SGTM), která požadavek zastaví, vyčistí osobní údaje a až poté odešle událost do GA4, Google Ads a přes Conversions API do Mety. Vrstva na CDN typu Google Tag Gateway může být užitečný doplněk na hraně sítě, sama ale tuhle práci neodvede.

### Čištění PII a spolehlivé CAPI

Než event opustí server, projde čištěním osobních údajů a napojením na obchodní data, třeba marži nebo typ zákazníka. Do Google Ads nebo Meta jde konverze, na kterou se dá spoléhat, ne surová kopie toho, co odeslal prohlížeč.

### Kvalita nastavení rozhoduje víc než konkrétní vrstva vpředu

Ať měření vede přes Cloudflare, jinou CDN, nebo přímo, výsledek stojí na tom, jak spolehlivě je server-side vrstva postavená, kolik dat opravdu doputuje, jak jsou čistá a jak se s nimi dál pracuje. Konkrétní zapojení, kompatibilitu a rozsah dat najdete na stránce Server-side tracking.

Pokud řešíte, kolik konverzí vám dnes v datech chybí nebo jestli aktuální měření dává algoritmům dost informací k rozhodování, probereme s vámi konkrétní zdroje dat a to, jaká server-side architektura dává smysl pro váš provoz.

Nezávazná konzultace

## Kam se server-side data reálně propojují

Tenhle pojem vysvětluje, proč a kde se data ztrácí. Konkrétní architekturu, kompatibilitu a ceník najdete na produktové stránce.

[Produkt

### Server-side tracking

Server-side infrastruktura napojená na GA4, Google Ads a Meta, včetně marže a dalších obchodních dat. Konkrétní architektura, kompatibilita a ceník.](/cz/server-side-tracking)[Produkt

### AI kampaně (segmentace produktů)

Segmentace produktů v Google Ads PMax podle skutečné ziskovosti, ne podle průměrného PNO za celý účet.](/cz/segmentace-produktu-gads)[Produkt

### Maržové řízení

Optimalizace kampaní podle skutečné marže, ne podle obratu. Staví na stejných datech, která posílá server-side měření.](/cz/marzove-rizeni)[Článek

### Google Tag Gateway a Cloudflare

Proč first-party vrstva na CDN nenahrazuje plnohodnotný SGTM a kde v praxi drhne, od administrace po adblock a ITP.](/cz/blog/google-tag-gateway-cloudflare)