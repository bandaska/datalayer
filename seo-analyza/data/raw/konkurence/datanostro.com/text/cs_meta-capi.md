# URL: https://datanostro.com/cs/meta-capi/

📘
META CAPI · FACEBOOK · INSTAGRAM

# Posílejte konverze Meta CAPI *server-side* a obnovte 25 % ztracených dat.

iOS 17.5+ a Safari 17 ITP utlumují Meta Pixel přímo v prohlížeči. Server-side CAPI obchází ad-blockery, používá first-party cookies a vrací atribuci, kterou jste tiše ztráceli. DataNostro pošle každý event s deduplikací a hashovanými PII přímo do Meta — ne přes JavaScript.

+25 %

recovered conversions

−13 %

CPA improvement

EMQ 9+

Event Match Quality

[Začít zdarma — 14 dní](/cs/accounts/signup/)
[Zobrazit ceník](/cs/pricing/)

Bez kreditní karty · EU servery · Setup za pět minut

PROČ META CAPI PŘES SERVER-SIDE

## Co se změní, když přestanete spoléhat na pixel

### Ad-blockery a ITP přestanou bolet

Pixel se v Brave / Firefox / Safari / iOS s adblockerem prostě nenahraje. Server-side request jde z vaší domény přes vás server — nelze blokovat klasickými pravidly.

### Lepší Event Match Quality

Server-side má přístup ke všem PII (email, telefon, externí ID), které browser pixel posílá hashované jen někdy. Match rate s Meta uživateli reálně skočí o 15-30 %.

### Automatická deduplikace

Posíláme stejný event\_id přes pixel i CAPI — Meta deduplikuje. Žádné dvojí počítání, žádné rozhozené ROAS čísla v Ads Manageru.

### PII anonymizér v ceně

Email, telefon, IP, user\_agent — všechno hashujeme/anonymizujeme přesně podle Meta CAPI specifikace. GDPR-friendly bez další konfigurace.

### Click ID Restorer

fbclid restaurujeme i pro uživatele, kteří klikli z reklamy a vrátili se po 7+ dnech. Atribuce přes ITP-okno, kterou pixel ztrácí.

### Test Events s replay

Každý odeslaný event vidíte v debug konzoli — payload, Meta response, EMQ score, deduplikační stav. Replay tlačítko pro opětovné odeslání bez zákazníka.

SETUP

## Tři kroky a data tečou.

1. 1

   ### Vytvořte si DataNostro účet

   Registrace je zdarma, 14 dní trial bez kreditní karty. Setup wizard se zeptá na CMS a generuje GTM container — stačí naimportovat.
2. 2

   ### V dashboardu zadejte Pixel ID + Access Token

   V `/dashboard/platforms/meta-capi/` vložíte Meta Pixel ID, Conversion API Access Token z Events Manager → Settings → Conversions API a Test Event Code (volitelně). Hotovo, pipe žije.
3. 3

   ### Zkontrolujte EMQ v Test Events

   V Meta Events Manager → Test Events uvidíte server-side eventy s EMQ skóre. V naší debug konzoli vidíte raw payload + response. Pokud něco nesedí, ladíte v reálném čase.

CO JE V CENĚ

## Vše v jednom plánu

Meta CAPI plus 17 dalších platforem (GA4, Google Ads, TikTok, Sklik, Heureka, Klaviyo…) v STARTER plánu od 349 Kč. Žádné per-pixel poplatky.

**Pixel + CAPI deduplikace**

Stejný event\_id přes oba kanály.

**Hashovaná PII**

SHA-256 podle Meta specifikace.

**Test Event Code**

Sandbox mode pro QA.

**EMQ monitoring**

Score per-event v debug konzoli.

**Click ID Restorer**

fbclid přes ITP období.

**User-data hashing**

Email, phone, IP, UA.

**Custom Audiences**

Server-side hash + upload.

**Lead Ads CRM**

Forwarder do HubSpotu / Pipedrivu.

JEDEN TARIF — VŠECHNY PLATFORMY

## Bez per-pixel placení. *Neomezené platformy.*

Meta CAPI + 17 dalších platforem (Sklik, Heureka, GA4, Google Ads, TikTok…) v jednom STARTER plánu od **349 Kč/měsíc**. Bez příplatků za pixely.

[Zobrazit ceník](/cs/pricing/)
[Začít zdarma](/cs/accounts/signup/)

FAQ

## Časté otázky

Potřebuji ještě klasický Meta Pixel, když mám CAPI?
+

Ano. Meta doporučuje oba běžet paralelně se stejným event\_id (deduplikace). Pixel pokrývá Conversion Lift měření a custom audiences pre-iOS 14, CAPI obchází ad-blockery a ITP. Posíláme oba zároveň automaticky.



Jak velký je dopad iOS 17.5+ na pixel data?
+

Záleží na podílu iOS uživatelů — typicky 35-45 % e-shopů z CZ. Z toho cca 60-70 % má aktivní Intelligent Tracking Prevention. Reálný dopad: 15-25 % konverzí mizí z Ads Manageru. CAPI přes server-side toto vrátí.



Co Conversion Leads API pro Lead Ads kampaně?
+

Podporujeme. V dashboardu nastavíte mapping Lead → CRM (HubSpot / Pipedrive / Salesforce / Zoho) a my ho doručujeme s deduplikací a původním zdrojem (UTM, click ID).



Kde běží servery?
+

Hetzner Falkenstein (DE) — EU jurisdikce, GDPR-only, žádný transfer do USA. Pro Enterprise plán nabízíme volbu zóny (DE / FI).



Kolik to stojí?
+

Od 349 Kč / měsíc (STARTER, 500k požadavků). PRO 1 690 Kč zahrnuje multi-domain a všech 13 power-upů. Žádné per-pixel poplatky — máte Meta CAPI + Sklik + Heureka + GA4 + 14 dalších v jednom plánu.

## Další server-side integrace

Jeden sGTM kontejner, jeden plán — všechny vaše platformy server-side, mimo dosah ad-blockerů.

[**Nový v server-side trackingu?** Přečtěte si kompletního průvodce od základů →](/cs/docs/academy/academy-server-side-tracking-101/)

[TikTok Events API](/cs/tiktok-events/)
[Microsoft Ads & Bing](/cs/microsoft-ads-tracking/)
[Pinterest CAPI](/cs/pinterest-capi/)
[Klaviyo Events API](/cs/klaviyo-events/)
[Awin server-to-server](/cs/awin-tracking/)
[Sklik & Seznam SEM](/cs/sklik-konverze/)
[Heureka](/cs/heureka/)
[WooCommerce](/cs/woocommerce-tracking/)
[Shoptet](/cs/shoptet-tracking/)
[Upgates](/cs/upgates-tracking/)

## Připravte se na další iOS update

Každý nový iOS / Safari release uřízne další kus pixel atribuce. Server-side CAPI přes DataNostro vám stabilizuje data dlouhodobě. 14 dní zdarma, bez závazku, setup za pět minut.

[Začít zdarma — 14 dní](/cs/accounts/signup/)
[Mám otázky](/cs/contact/)