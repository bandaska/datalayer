# URL: https://datanostro.com/cs/

PRO ČESKÉ A SLOVENSKÉ FIRMY · CZ / SK

# Tracking, který *doručí* konverze.

Server-side GTM hosting pro Meta, Google Ads, Sklik a GA4. Vrátí vám konverze, které ad-blockery a iOS ITP berou. Bez DevOps, fakturace v Kč, spuštění za 5 minut.

[Začít zdarma](/cs/accounts/signup/)
[Zobrazit ceník](/cs/pricing/)

[**Vše operační**
·
**125K+** requestů / 24h
·
**100,0%** match rate
live status →](/cs/status/ "Otevřít stránku se stavem platformy")

* ⊙ 14 dní zdarma
* ⊙ Bez kreditní karty
* ⊙ Setup do 5 minut
* ⊙ Roční předplatné = 2 měsíce zdarma
* ⊙ EU servery, fakturace v Kč

[→ Co je server-side tagging? (5 min čtení)](/cs/docs/academy/academy-server-side-tracking-101/)
[→ Jste teď u zahraničního dodavatele?](/cs/pro-cesky-trh/)
[→ Spočítejte dopad na svůj ROAS (30 s)](/cs/tools/roas-calculator/)

app.datanostro.com / demo

ukázková data · reálná po prvním eventu

REQUESTŮ / 24H

125K+

↓ -32,6%

MATCH RATE

99,9%

úspěšně doručeno na platformy

REGION

EU 🇪🇺

GDPR-only data plane

SERVER-SIDE EVENTS / 7D

— events

PŘÍKLAD EVENTŮ
ukázka platforem

15:17:56.381
GA4
purchase · ord\_8421
4 290 Kč

15:17:56.381
META
Purchase · fb\_a91x
4 290 Kč

15:17:55.381
ADS
conversion · gclid...
4 290 Kč

15:17:54.381
SKLIK
conversion · sk\_447
4 290 Kč

15:17:51.381
TIKTOK
CompletePayment · tt\_51
4 290 Kč

**Hledáme prvních 5 partnerů.**
3 měsíce zdarma + Care migrace + vliv na roadmap.
[Early Adopter Program →](/cs/early-adopters/)

PROČ SGTM

sGTM = server-side Google Tag Manager — tracking, který běží na vašem serveru místo v prohlížeči návštěvníka.
[Co to znamená? →](/cs/docs/academy/academy-server-side-tracking-101/)

## Až 40 % vašich dat *tiše* mizí.

Ad-blockery, ITP a omezení cookies škrtí client-side tracking. Server-side to obchází přímo z vaší domény — a vrací zpátky data, která vám tiše ujížděla.

40%

Ad-blocked

klientů blokuje GTM. Konverze, audience, optimalizace — pryč.

7d

ITP cookie cap

Safari/Firefox řežou first-party cookies na 7 dní. Atribuce padá.

20-30%

GA4 ztráta

typický rozdíl mezi tím, co GA4 vidí, a tím, co váš e-shop reálně prodal.

+25–35 %

Match rate ↑

typický uplift na Meta CAPI při přechodu z client-side pixelu na server-side tagging (Meta benchmark, 2024).

PLATFORMY

## Jeden kontejner. *Všechny* platformy.

[Všechny platformy](/cs/platform/)

![](/static/img/platforms/ga4.3f1f6ec96b61.svg)

### Google Analytics 4

MEASUREMENT PROTOCOL

* ✓ Server-side eventy
* ✓ First-party cookies (2 roky)
* ✓ Custom dimensions
* ✓ Multi-property duplikace

![](/static/img/platforms/meta.bd3f0f85e97b.svg)

### Meta Conversions API

FACEBOOK · INSTAGRAM

* ✓ Vyšší Event Match Quality
* ✓ Auto-hash (email, telefon)
* ✓ Browser-pixel deduplikace
* ✓ Test event codes

[Zjistit více →](/cs/meta-capi/)

![](/static/img/platforms/google-ads.501d87d1b27d.svg)

### Google Ads

CONVERSION TRACKING

* ✓ Enhanced conversions
* ✓ Offline conversions API
* ✓ GCLID / GBRAID
* ✓ Lepší Smart Bidding

![](/static/img/platforms/tiktok.83249280b5ca.svg)

### TikTok Events API

PERFORMANCE ADS

* ✓ Purchase / Lead / ATC
* ✓ Identity matching
* ✓ Test event codes
* ✓ Server pixel

[Zjistit více →](/cs/tiktok-events/)

CZ UNIKÁTNÍ

![](/static/img/platforms/seznam.55454ff03e57.png)

### Seznam Sklik

SEZNAM EVENT MEASUREMENT · SEM

* ✓ SEM client + server (S2S)
* ✓ sem.seznam.cz/rtgconv
* ✓ Jediná sGTM platforma
* ✓ s CZ podporou

[Zjistit více →](/cs/sklik-konverze/)
[Dokumentace SEM](https://napoveda.sklik.cz/merici-skripty/seznam-event-measurement/)

![](/static/img/platforms/hotjar.b0dfec3b0ad9.svg)
![](/static/img/platforms/clarity.4f9f47791d83.png)
![](/static/img/platforms/linkedin.699ee0fef091.svg)

### Další platformy

HOTJAR · CLARITY · LINKEDIN

* ✓ Microsoft Clarity
* ✓ Hotjar tracking
* ✓ LinkedIn Insight Tag
* ✓ Custom webhooky

[Všechny platformy →](/cs/platform/)

SERVER-SIDE PRO KAŽDOU PLATFORMU

[Meta CAPI server-side](/cs/meta-capi/)
[TikTok Events API server-side](/cs/tiktok-events/)
[Microsoft Ads & Bing server-side](/cs/microsoft-ads-tracking/)
[Pinterest Conversions API](/cs/pinterest-capi/)
[Klaviyo Events API server-side](/cs/klaviyo-events/)
[Awin server-to-server tracking](/cs/awin-tracking/)
[Sklik & Seznam SEM](/cs/sklik-konverze/)
[Heureka Ověřeno zákazníky](/cs/heureka/)
[WooCommerce server-side tracking](/cs/woocommerce-tracking/)
[Shoptet server-side tracking](/cs/shoptet-tracking/)
[Upgates server-side tracking](/cs/upgates-tracking/)

JAK TO FUNGUJE

## Provoz *plyne* přes vaši doménu.

Custom loader z vaší subdomény, dedikovaný kontejner v EU datacentru (DE), výstup do platforem. Bez Cloud Run, bez Load Balancerů, bez pondělí strávených laděním SSL.

01

### Návštěvník

Browser, mobilní app, server-to-server

visitor

02

### Loader z vaší domény

gtm.eshop.cz/load.js — anti-adblock

gtm.eshop.cz

03

### sGTM kontejner

EU · Docker · Nginx + SSL

eu-central

04

### Platformy

GA4 · Meta · Ads · TikTok · Sklik

5+ outputs

DOPLŇKY

## 13 rozšíření. *Jeden* kliknutí.

Detekce botů, restaurace Click ID, GEO obohacení, anonymizace — přesně to, co vašemu sGTM chybí.

[Všechny doplňky](/cs/features/)

[### Custom Loader

Vlastní doména pro GTM loader — first-party origin, který ad-blockery a iOS ITP neořezávají jako third-party skripty.](/cs/features/)
[### Cookie Keeper

First-party cookie persistence — bez ITP/ETP ztrát.](/cs/features/)
[### Anonymizer

30+ granulárních pravidel pro PII — GDPR-ready.](/cs/features/)
[### Bot Detection

Filtruje automatický traffic — čistší data pro reporty i Smart Bidding.](/cs/features/)
[### GEO Enrichment

MaxMind Geo — Country/Region/City do každého requestu.](/cs/features/)
[### Click ID Restorer

gclid / fbclid přežijí iOS tracking prevention.](/cs/features/)

POSTAVÍME ZA VÁS

### DataNostro *Care*

Náš tým vám sGTM nastaví, otestuje a předá hotové. Tři balíky od 19 900 Kč, 5-7 dní od podpisu po live tracking, 30 dní hyper-care.

* GA4 + Meta CAPI + Google Ads + Sklik konfigurace
* Power-Ups (Cookie Keeper, Anonymizer, Custom Loader)
* Consent Mode v2 + GDPR review (Premium)

[Vybrat balík Care](/cs/care/)

NAUČTE SE TO SAMI

### DataNostro *Academy*

Tutorialy v češtině — server-side tracking, sGTM, Consent Mode v2, Meta CAPI deduplication, GDPR checklist. Od základů po pokročilé scénáře.

* Server-side tracking 101
* Consent Mode v2 prakticky bez právničiny
* GDPR tracking checklist (kontrolováno právníkem)

[Otevřít Academy](/cs/docs/academy/)

PROČ K NÁM

## Důvěryhodný partner pro *vážný server-side tracking.*

Bez závazků, bez výmluv, nic vás u nás nedrží. Devět konkrétních důvodů, proč to zkusit.

### Česká podpora s reálným člověkem

Žádné call centrum ani roboti. Napíšete a odpoví vám přímo člověk z týmu, který Datanostro staví — do 4 hodin v pracovní dny.

[### Roční předplatné = 2 měsíce zdarma

Platíte 10 měsíců, používáte 12. Až 6 000 Kč úspora ročně na tarifu BUSINESS.](/cs/rocni-platba/)


### U nás vás nic nedrží

Kdykoli si stáhnete všechna svoje data i celé nastavení v jednom ZIP souboru a odejdete. Bez výpovědní lhůty, bez podmínek.

### Vaše data zůstávají v EU

Běžíme ve špičkovém datacentru v Německu. Data neputují do USA, splňujeme GDPR a podepíšeme s vámi zpracovatelskou smlouvu.

### Faktury, které sednou vašemu účetnímu

Faktury v korunách i eurech, naimportujete je jedním klikem do Pohody, Money nebo ABRA. Žádné bankovní poplatky za směnu měn.

### Sklik, Heureka i Seznam — nativně

České a slovenské reklamní platformy zvládneme stejně dobře jako Google nebo Meta. To, co zahraniční konkurence pro český trh nenabízí.

[### Postavíme to za vás (Care)

Nastavení necháte na nás. Od podpisu po funkční měření za 5–7 dní a měsíc intenzivní péče navrch. Od 19 900 Kč.](/cs/care/)

[### Veřejná roadmapa s hlasováním

Vidíte dopředu, co chystáme, a hlasujete, co se má udělat dřív. Žádné rozhodování za zavřenými dveřmi.](/cs/roadmap/)


### Bezpečné přihlášení a přehled o změnách

Přihlášení přes ověřovací appku, Passkey nebo firemní účet (SSO). Každá změna ve vašem účtu zůstává zaznamenaná.

PRŮVODCI

## Naučte se server-side tracking *do hloubky*

[Všechny články](/cs/blog/)

[### Server-side tracking: kompletní průvodce 2026

Co je server-side tracking, jak funguje, kdy se vyplatí a jak ho nasadit. Srozumitelné vysvětlení od základů po praktické nasazení přes server-side …

Číst průvodce 
12 min](/cs/blog/tracking/server-side-tracking-kompletni-pruvodce-2026/)
[### Consent Mode v2 a server-side GTM: GDPR prakticky

Co po vás EU u Consent Mode v2 vlastně chce, jak ho nastavit se server-side GTM a co se stane, když návštěvník …

Číst průvodce 
11 min](/cs/blog/tracking/consent-mode-v2-server-side-gdpr/)
[### ITP, iOS a ad-blockery: kolik konverzí ztrácíte a jak je vrátit

Safari ITP zkracuje životnost cookies na 7 dní, ad-blockery blokují pixely a iOS omezuje měření. Jak velké ztráty to dělá a jak …

Číst průvodce 
10 min](/cs/blog/tracking/itp-ios-adblock-ztracene-konverze/)
[### Kolik stojí server-side tracking? Rozpočet pro rok 2026

Holý Google Cloud, nebo managed hosting? Z čeho se skládá cena server-side trackingu, kde jsou skryté náklady a kdy se vyplatí managed …

Číst průvodce 
9 min](/cs/blog/tracking/kolik-stoji-server-side-tracking-2026/)
[### Server-side vs. client-side tracking: kdy stačí jedno a kdy potřebujete druhé

Jaký je rozdíl mezi client-side a server-side trackingem, co každý umí a kdy se vyplatí přejít. Přehledné srovnání bez technického žargonu.

Číst průvodce 
8 min](/cs/blog/tracking/server-side-vs-client-side-tracking-rozdily/)
[### Meta Conversions API: kompletní průvodce 2026

Jak funguje Meta Conversions API, proč zlepšuje Event Match Quality a jak ji nasadit server-side bez duplicit. Od user\_data po deduplikaci přes …

Číst průvodce 
9 min](/cs/blog/tracking/meta-conversions-api-kompletni-pruvodce/)

PŘIPRAVENI?

## Začněte sbírat *data, která mizí.*

14 dní zdarma. Bez kreditní karty. Spuštění do pěti minut.

[Vytvořit účet zdarma](/cs/accounts/signup/)
[Promluvit s námi](/cs/contact/)

* ● EU servery, soulad s GDPR
* ● [99,5 % SLA (Enterprise 99,95 %)](/cs/status/ "Live status platformy")
* ● Podpora v češtině