# URL: https://datanostro.com/cs/sklik-konverze/

🇨🇿
SEZNAM EVENT MEASUREMENT · SKLIK · CZ

# Seznam Event Measurement (SEM) *server-side* — nový standard měření Sklik & Zboží.cz přes S2S.

SEM je nový jednotný standard měření Seznamu — jeden skript sul.js nahrazuje staré retargetingové i konverzní kódy. SEM jede jako client + server: povinný sul.js v prohlížeči doplníme server-to-server voláním z našeho serveru na sem.seznam.cz pro úplnější a odolnější měření. Stejný event stream jako pro GA4, Meta CAPI a Google Ads.

1 skript

sul.js místo starých kódů

client + S2S

sul.js + sem.seznam.cz

349 Kč

/měsíc start

[Začít zdarma — 14 dní](/cs/accounts/signup/)
[Zobrazit ceník](/cs/pricing/)

Bez kreditní karty · EU servery · Setup za pět minut

PROČ SEZNAM EVENT MEASUREMENT (SEM) PŘES SERVER-SIDE

## Proč SEM patří do server-side stacku

### Client + server, ne jen S2S

SEM S2S není samostatné řešení — vyžaduje skript sul.js v prohlížeči (generuje cookies sid + udid a řeší consent). DataNostro nasadí obě vrstvy: sul.js na web + server-to-server volání, které doplní data, jež klient ztratí kvůli ad-blockerům a ITP (20–35 %).

### GA4 + SEM z jednoho event streamu

Stejný server-side "purchase" event jde do GA4 i do SEM. Stejné transaction\_id, stejná hodnota — Sklik a GA4 reporty se konečně shodnou.

### Server-to-server na sem.seznam.cz

Z našeho serveru čteme cookies sid + udid (které nastaví sul.js), osobní data hashujeme SHA-256 a posíláme event se samostatným S2S SEM ID na sem.seznam.cz/rtgconv — asynchronně, bez zdržení objednávky.

### CZ jurisdikce, CZ platba

Hetzner Falkenstein (EU). CZK fakturace, ISDOC pro Pohodu / Money S3. Žádný transfer dat do USA, žádný překlad faktury z dolarů.

SETUP

## Tři kroky a data tečou.

1. 1

   ### Registrace + GTM container

   14 dní zdarma. Setup wizard pozná Shoptet / Upgates / FastCentrik a vygeneruje GTM container s pre-konfigurovanými SEM tagy.
2. 2

   ### Nasaďte sul.js (povinné) + S2S SEM ID

   sul.js musí běžet na všech stránkách — generuje cookies sid + udid a řeší consent (ad\_storage). V `/dashboard/platforms/seznam-sklik/` vložíte samostatné SEM ID pro S2S (jiné než pro základní skript).
3. 3

   ### Měření přes SEM: client + server

   Klientský sul.js měří v prohlížeči, DataNostro to doplní server-to-server na sem.seznam.cz/rtgconv. Consent přes IAB TCF / Google Consent Mode. Test přes SEM debugger.

CO JE V CENĚ

## CZ market features, které jinde nenajdete

DataNostro je vyrobený pro český e-shop, ne přeložená US služba.

**SEM S2S**

Server-side na sem.seznam.cz.

**Heureka Ověřeno zákazníky**

First-party feed proxy.

**Comgate transakce**

CZ payment gateway events.

**Shoptet / Upgates**

Auto-detekce + GTM template.

**ISDOC fakturace**

Pohoda, Money S3, ABRA.

**Česká podpora**

Email + chat v CZ, do 4 h.

**EU residency**

Hetzner DE, žádný US transfer.

**ARES auto-fill**

IČO/DIČ z registru.

JEDEN TARIF — VŠECHNY PLATFORMY

## Bez per-pixel placení. *Neomezené platformy.*

Seznam Event Measurement (SEM) + 17 dalších platforem (Sklik, Heureka, GA4, Google Ads, TikTok…) v jednom STARTER plánu od **349 Kč/měsíc**. Bez příplatků za pixely.

[Zobrazit ceník](/cs/pricing/)
[Začít zdarma](/cs/accounts/signup/)

FAQ

## Časté otázky

Co je Seznam Event Measurement (SEM)?
+

SEM je nový standard měření Seznamu (rollout 2026), který jedním skriptem sul.js nahrazuje dřívější oddělené retargetingové (rc.js) a konverzní kódy. Podporuje víc typů událostí, automatický retargeting z eventů a consent přes IAB TCF / Google Consent Mode.



Jak funguje SEM server-to-server (S2S)?
+

Skript sul.js na webu nastaví cookies sid a udid (jen po consentu ad\_storage: granted). DataNostro je čte na serveru, osobní data hashuje SHA-256 a odešle event se samostatným S2S SEM ID na sem.seznam.cz/rtgconv — asynchronně na pozadí, takže to nezdržuje objednávku.



Stačí jen S2S bez klientského skriptu?
+

Ne. sul.js musí běžet v prohlížeči — bez něj nevzniknou cookies sid/udid a Seznam nespáruje identitu. S2S je doplněk klientského měření, ne náhrada. DataNostro proto nasazuje obě vrstvy (client + server).



Musím migrovat ze starého Sklik konverzního/retargetingového kódu?
+

Ano, SEM je nástupce starých kódů. DataNostro vám SEM nasadí rovnou — sul.js na web + S2S z našeho serveru. Staré rc.js / konverzní kódy můžete odstranit, jakmile SEM měří správně.



Můžu mít SEM paralelně s GA4 / Meta CAPI?
+

Ano — to je hlavní výhoda jednoho event streamu. Pošlete "purchase" event a my ho rozešleme zároveň do GA4, Meta CAPI, Google Ads, SEM i Heureky. Zdroj jeden, atribuce ve čtyřech ad systémech.



Kolik to stojí?
+

Od 349 Kč / měsíc (STARTER plán, 500k požadavků). SEM měření je zahrnuto bez příplatku — stejně jako Heureka, Comgate, GA4 a Meta CAPI.

## Další server-side integrace

Jeden sGTM kontejner, jeden plán — všechny vaše platformy server-side, mimo dosah ad-blockerů.

[**Nový v server-side trackingu?** Přečtěte si kompletního průvodce od základů →](/cs/docs/academy/academy-server-side-tracking-101/)

[Meta CAPI](/cs/meta-capi/)
[TikTok Events API](/cs/tiktok-events/)
[Microsoft Ads & Bing](/cs/microsoft-ads-tracking/)
[Pinterest CAPI](/cs/pinterest-capi/)
[Klaviyo Events API](/cs/klaviyo-events/)
[Awin server-to-server](/cs/awin-tracking/)
[Heureka](/cs/heureka/)
[WooCommerce](/cs/woocommerce-tracking/)
[Shoptet](/cs/shoptet-tracking/)
[Upgates](/cs/upgates-tracking/)

## SEM server-side, GA4 ve shodě, faktura v Kč

Seznam Event Measurement, Heureka, Comgate, ISDOC fakturace — vše v ceně každého plánu. Setup za pět minut.

[Začít zdarma — 14 dní](/cs/accounts/signup/)
[Mám otázky](/cs/contact/)