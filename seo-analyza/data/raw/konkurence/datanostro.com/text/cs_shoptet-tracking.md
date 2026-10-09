# URL: https://datanostro.com/cs/shoptet-tracking/

🛍️
SHOPTET · CZ E-SHOP PLATFORMA

# Server-side tracking *pro Shoptet* — bez úprav šablony, bez vývojáře.

Shoptet má vestavěný GTM tag manager, ale klient-side tracking se rozbíjí na ITP, ad-blockerech a iOS aktualizacích. DataNostro vám pošle pre-konfigurovaný GTM container pro Shoptet — naimportujete dvěma kliky a všechny eventy (purchase, add\_to\_cart, view\_item) jdou server-side přes vlastní subdoménu. Consent Mode v2 i Shoptet cookie lišta jsou plně podporované — bez zásahů do šablony.

5 min

setup time

+25 %

recovered conversions

0 ×

zásahů do šablony

[Začít zdarma — 14 dní](/cs/accounts/signup/)
[Zobrazit ceník](/cs/pricing/)

Bez kreditní karty · EU servery · Setup za pět minut

PROČ SHOPTET PŘES SERVER-SIDE

## Proč Shoptet potřebuje server-side

### Pre-konfigurovaný GTM container

Setup Assistant pozná Shoptet a vygeneruje GTM container s tagy pro purchase, add\_to\_cart, view\_item, search a všechny standardní e-commerce eventy. Stačí naimportovat do GTM.

### Seznam SEM a Heureka native

Seznam Event Measurement (SEM) přes server-to-server i Heureka feed jsou v DataNostro built-in platformy. Pro CZ Shoptet e-shop je to v ceně každého plánu.

### Consent Mode v2 + cookie lišta

Shoptet má vlastní cookie lištu; DataNostro z ní čte souhlas a propisuje ho do Google Consent Mode v2 (ad\_storage, analytics\_storage). Server-side tagy se spustí jen tam, kde máte souhlas — GDPR i Google requirements splněné.

### Bez zásahů do šablony

Cookie Keeper, Custom Loader a všech 13 power-upů běží na serveru. Šablonu Shoptetu se ani nedotknete — DataNostro tracking pracuje skrz GTM container.

### Comgate transactions

Comgate webhook → DataNostro → GA4 + Meta CAPI + Sklik. Refund / cancel eventy automaticky propagovány. Heureka transactions s order ID.

SETUP

## Tři kroky a data tečou.

1. 1

   ### Stáhněte si GTM container

   Setup Assistant vygeneruje Shoptet-ready GTM container ve 5 vteřinách. JSON soubor s předkonfigurovanými tagy a triggery.
2. 2

   ### Naimportujte do GTM

   V Google Tag Manager → Admin → Import Container → vyberte stažený JSON. Container je nakonfigurovaný pro vaši doménu.
3. 3

   ### Připojte tracking subdoménu

   V Shoptet admin → Marketing → Google Tag Manager → vložte naši subdoménu (např. `tracking.vase-domena.cz`). DNS CNAME přidáme my, SSL vyřídíme automaticky.

CO JE V CENĚ

## CZ Shoptet stack v jednom plánu

Vše ve STARTER plánu od 349 Kč. Žádné per-platforma poplatky.

**Sklik (SEM)**

Server-to-server měření

**Heureka Ověřeno**

Pixel + first-party feed

**GA4 + Google Ads**

S2S deduplikace

**Meta CAPI**

Pixel + CAPI parallel

**Comgate webhooks**

Auto-routing do platforem

**ISDOC fakturace**

Pohoda, Money S3

**Cookie Keeper**

ITP-resistant cookies

**Bot Detection**

Filtrace špinavých dat

JEDEN TARIF — VŠECHNY PLATFORMY

## Bez per-pixel placení. *Neomezené platformy.*

Shoptet + 17 dalších platforem (Sklik, Heureka, GA4, Google Ads, TikTok…) v jednom STARTER plánu od **349 Kč/měsíc**. Bez příplatků za pixely.

[Zobrazit ceník](/cs/pricing/)
[Začít zdarma](/cs/accounts/signup/)

FAQ

## Časté otázky

Jak na Consent Mode v2 na Shoptetu?
+

Shoptet má vlastní cookie lištu, ze které DataNostro čte souhlas a propisuje ho do Google Consent Mode v2 (ad\_storage, analytics\_storage). Server-side tagy i SEM se spustí jen s odpovídajícím souhlasem — splníte GDPR i Google Consent Mode v2 requirement, bez ručního dolepování dataLayeru do šablony.



Co když používám Shoptet Premium / vlastní šablonu?
+

DataNostro tracking pracuje přes GTM container — Shoptet šablonu (i custom) se nedotýká. Funguje na všech Shoptet tarifech.



Funguje to s Shoptet B2B?
+

Ano. Pošleme i lead.created eventy z Shoptet B2B přihlašovacích formulářů + integrace do CRM (HubSpot / Pipedrive / Zoho).



Heureka feed pro Shoptet je už built-in v Shoptetu?
+

Shoptet má základní Heureka feed, ale není first-party (běží přes Shoptet servers). DataNostro generuje first-party feed na vaší doméně — Heureka má lepší cache, vy máte vlastnictví URL.



Můžu používat Shoptet GTM zároveň s DataNostro?
+

Ano — Shoptet GTM container běží paralelně s naším server-side. Shoptet posílá pixel eventy, my server-side. Stejný event\_id = deduplikace u GA4 / Meta.

## Další server-side integrace

Jeden sGTM kontejner, jeden plán — všechny vaše platformy server-side, mimo dosah ad-blockerů.

[**Nový v server-side trackingu?** Přečtěte si kompletního průvodce od základů →](/cs/docs/academy/academy-server-side-tracking-101/)

[Meta CAPI](/cs/meta-capi/)
[TikTok Events API](/cs/tiktok-events/)
[Microsoft Ads & Bing](/cs/microsoft-ads-tracking/)
[Pinterest CAPI](/cs/pinterest-capi/)
[Klaviyo Events API](/cs/klaviyo-events/)
[Awin server-to-server](/cs/awin-tracking/)
[Sklik & Seznam SEM](/cs/sklik-konverze/)
[Heureka](/cs/heureka/)
[WooCommerce](/cs/woocommerce-tracking/)
[Upgates](/cs/upgates-tracking/)

## Shoptet + DataNostro = 5 minut

Žádný vývojář, žádné zásahy do šablony. Naimportujete GTM container a běží to. 14 dní zdarma, bez kreditní karty.

[Začít zdarma — 14 dní](/cs/accounts/signup/)
[Mám otázky](/cs/contact/)