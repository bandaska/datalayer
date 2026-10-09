# URL: https://datanostro.com/cs/platform/seznam-sklik/

[Domů](/cs/)
/
[Platformy](/cs/platform/)
/
Seznam Sklik
Seznam Sklik

# Server-side Seznam Sklik konverze pro český trh

Posílejte Sklik konverze přes server-side GTM a získejte přesnější data pro optimalizaci kampaní na Seznamu.

[Vyzkoušet zdarma](/cs/pricing/)
[Kontaktujte nás](/cs/contact/)

## Proč SEM přes DataNostro?

Seznam Event Measurement (SEM) je nový jednotný standard měření Seznamu — jeden skript `sul.js` nahrazuje dřívější oddělené retargetingové (rc.js) a konverzní kódy. Klientský sul.js sám ztrácí 20–35 % událostí kvůli ad-blockerům a Safari ITP. Server-to-server vrstva tyto ztráty doplní — sul.js ale musí běžet i tak.

## SEM jede jako client + server

S2S není samostatné řešení. Skript `sul.js` musí běžet v prohlížeči — nastaví cookies `sid` a `udid` (jen po consentu ad\_storage) a měří klientsky. DataNostro pak tyto cookies čte na serveru, osobní data hashuje SHA-256 a odešle event se **samostatným S2S SEM ID** na `sem.seznam.cz/rtgconv` — asynchronně, bez zdržení objednávky. Klient + server dohromady = úplnější a odolnější měření.

## Co SEM přináší oproti starým kódům

* Jeden skript místo samostatného retargetingu a konverzí
* Více typů událostí s detailním reportingem
* Automatický retargeting z eventů (žádné ruční seznamy)
* Consent přes IAB TCF nebo Google Consent Mode
* Server-to-server doplněk klientského měření (vyžaduje sul.js)

## Nastavení v DataNostro

Propojíte Sklik účet, nasadíte sul.js a vložíte samostatné SEM ID pro S2S. Stejný „purchase" event posíláme zároveň do GA4, Meta CAPI, Google Ads i SEM — jeden zdroj, atribuce ve všech systémech. Funguje s Shoptet, WooCommerce i Shopify.

[Podrobný návod
Jak nastavit Seznam Sklik server-side — krok za krokem](/cs/docs/platformy/seznam-sklik/)

PROČ SEZNAM SKLIK

## Proč Seznam Sklik přes DataNostro?

🇨🇿

### Pro český trh

Nativní podpora Seznam Sklik — konverze, retargeting, product feed.

📊

### Přesnější data

Až 30 % více konverzních dat díky obejití ad-blockerů.

🔗

### Retargeting

Server-side retargeting data pro přesnější cílení na Seznamu.

⚡

### Snadné nastavení

Hotovo za 5 minut — jen propojte Sklik konverzní kódy.

DALŠÍ PLATFORMY

## Server-side tracking pro všechny platformy

Jeden sGTM kontejner — všechny integrace na jednom místě.

[Awin
server-side tracking](/cs/platform/awin/)
[Google Ads
server-side tracking](/cs/platform/google-ads/)
[Google Analytics 4
server-side tracking](/cs/platform/google-analytics-4/)
[Klaviyo
server-side tracking](/cs/platform/klaviyo/)
[Meta CAPI
server-side tracking](/cs/platform/meta-conversions-api/)
[Microsoft Ads
server-side tracking](/cs/platform/microsoft-ads/)
[Pinterest
server-side tracking](/cs/platform/pinterest/)
[Shopify
server-side tracking](/cs/platform/shopify/)
[TikTok
server-side tracking](/cs/platform/tiktok-events-api/)
[WooCommerce
server-side tracking](/cs/platform/woocommerce/)

[Všechny platformy](/cs/platform/)

FAQ

## Časté otázky

Podporuje DataNostro Sklik retargeting?
+

Ano. Server-side eventy posílají retargeting data přímo do Sklik API pro přesnější cílení.



Funguje to s Zbožím.cz?
+

Ano. DataNostro podporuje i konverzní tracking pro Zboží.cz a Firmy.cz.

## Optimalizujte Sklik kampaně s přesnějšími daty

Server-side Seznam Sklik za 5 minut. Bez vlastního serveru.

[Vyzkoušet zdarma](/cs/pricing/)