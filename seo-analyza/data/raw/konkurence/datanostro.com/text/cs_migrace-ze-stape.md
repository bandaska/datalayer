# URL: https://datanostro.com/cs/migrace-ze-stape/

STAPE.IO → DATANOSTRO

# Stejné limity, *o 10 % a víc nižší cena.*

Stape je solidní globální hosting — pro CZ/SK firmu ale znamená fakturaci v dolarech, custom HTTP request pro Sklik a Heureku a anglický support v jiném časovém pásmu. DataNostro pokrývá funkčnost, kterou český e-shop reálně potřebuje, fakturuje v Kč, Sklik a Heureka má nativně a podpora odpovídá česky v pracovní době. Pokud potřebujete Stape specialitky (BigQuery UI, mobilní SDK, dedicated IP), řekněte nám — poradíme poctivě, případně i s tím, že u Stape máte zůstat.

Migrační bonus —
**STAPE-MIGRATION-15**
= dalších 15 % off na 3 měsíce

[Migrační concierge — Care](/cs/care/)
[Migrovat sám (wizard)](/cs/migrate/wizard/?source=stape)

První migrační konzultace zdarma. Bez závazků. Odpovídáme do 4 hodin.

PŘÍMÉ POROVNÁNÍ CEN

## Stejný limit, vždy levnější.

| Tarif (limit požadavků) | Stape.io | DataNostro | Úspora |
| --- | --- | --- | --- |
| **STARTER** — 500k req/měsíc | $17 / ~391 Kč | 349 Kč | −11 % |
| **PRO** — 5M req/měsíc | $83 / ~1 909 Kč | 1 690 Kč | −11 % |
| **BUSINESS** — 20M req/měsíc | $167 / ~3 841 Kč | 3 490 Kč | −9 % |
| **ENTERPRISE** — 50M+ req/měsíc | Custom | od 6 990 Kč | — |

Stape ceny dle veřejného ceníku k 2026-04, kurz $1 ≈ 23 Kč. Všechny ceny bez DPH.

PŘÍKLAD ROČNÍ ÚSPORY

### PRO tarif (5M req/měsíc): ušetříte ~2 600 Kč / rok

Stape Business: $83 × 12 = $996 ≈ 22 900 Kč. DataNostro PRO: 1 690 × 12 = 20 280 Kč. Plus žádné FX poplatky banky za platby v dolarech (~150–300 Kč/rok). S kódem STAPE-MIGRATION-15 prvních 3 měsíce dalších 15 % off.

[Plný ceník](/cs/pricing/)

FEATURE PARITA

## Co se kryje a v čem se lišíme

| Funkce | Stape.io | DataNostro |
| --- | --- | --- |
| Managed sGTM hosting | ✓ | ✓ |
| Custom doména + SSL | ✓ | ✓ |
| Multi-domain per kontejner | ✓ | ✓ |
| 13 power-upů (Cookie Keeper, Anonymizer, Custom Loader, …) | ✓ | ✓ |
| Meta CAPI + Pixel deduplication | ✓ | ✓ |
| Google Ads, TikTok, LinkedIn, Microsoft, Pinterest, Snapchat, Reddit CAPI | ✓ | ✓ |
| Klaviyo native + HubSpot/Pipedrive/Salesforce/Zoho CRM | částečně | ✓ |
| Stripe Events Forwarder | — | ✓ |
| Public roadmap s voting | — | ✓ |
| Smart Pause overlimit handling | — | ✓ |
| Consent Mode v2 enforcement | ✓ | ✓ |
| Setup Assistant (CMS detect) | základní | ✓ |
| České + EU specifika | | |
| Sklik / Seznam SEM native | — | ✓ |
| Seznam Brand Builder | — | ✓ |
| Heureka XML feed proxy | — | ✓ |
| ISDOC 6.0.2 export faktur | — | ✓ |
| Comgate / GoPay platby | — | ✓ |
| Fakturoid / Superfaktura napojení | — | ✓ |
| Fakturace v Kč i € | jen USD | ✓ |
| EU-only servery (EU Tier III datacenter (Německo)) | globální | ✓ |
| Česká podpora (mail + telefon) | — | ✓ |
| Managed migrace na klíč (Care) | přes partnery | ✓ |
| Co Stape umí a my zatím ne (poctivě) | | |
| BigQuery / Firestore service-account UI | ✓ | na roadmapu (2026 Q3) |
| Mobile SDK (iOS / Android) | ✓ | na roadmapu (2026 Q4) |
| Schedule Requests / Request Delay | ✓ | na roadmapu |
| Block Request by IP per tenant | ✓ | na roadmapu |
| Dedicated outbound IP | ✓ | — |
| SOC 2 Type II audit certifikace | ✓ | zatím ne — pokud váš procurement vyžaduje, řekněte nám a buď zrychlíme, nebo doporučíme alternativu |
| CMS pluginy (Shopify / WP / Magento app) | ✓ | [návody (WordPress / Shopify / PrestaShop)](/cs/docs/cms/), plug-iny zatím ne |
| Globální CDN (sub-50ms mimo EU) | ✓ | EU-only (záměr) |

Audit z 2026-05-06. [Aktuální roadmap](/cs/roadmap/). Pokud konkrétní fíčuru z pravé části tabulky potřebujete a nemáme ji, řekněte nám to — buď zrychlíme prioritu, nebo doporučíme Stape.

JAK MIGRACE PROBÍHÁ

## 5-7 dní, žádný výpadek trackingu.

Stape kontejner běží paralelně, dokud DataNostro nepotvrdíme jako primární. Cutover je DNS změna — 60 vteřin.

1. DEN 1

   ### Audit & sken

   Zkopírujeme váš Stape Container Config, poznačíme aktivní power-upy, platforms credentials.
2. DEN 2-3

   ### Paralelní setup

   Postavíme DataNostro projekt na samostatné subdoméně. Stape stále běží, přepojí se až po validaci.
3. DEN 4-5

   ### Souběžný test

   Stejný test event do obou platforem. Porovnáme atribuci v Meta Test Events + GA4 DebugView.
4. DEN 6-7

   ### DNS cutover

   CNAME → DataNostro. Stape necháte běžet 3 dny jako safety net, pak zrušíte billing.

[Detailní návod v Academy](/cs/docs/academy/academy-migrace-ze-stape-krok-za-krokem/)

FAQ

## Co se nejčastěji ptáte

Ztratím při migraci nějaká data nebo atribuci?

Ne. Stape kontejner běží paralelně až do DNS cutoveru. Cookies se přesunou na novou doménu během 24-48h, takže atribuční okno (90 dní pro Google Ads, 28 pro Meta) zůstává nedotčené. V audit logu vidíte každý forwardovaný event.


Můžu zachovat svoje access tokeny pro Meta/Google Ads/atd.?

Doporučujeme vygenerovat nové. Stape access tokeny mají Stape jako audience — funkčně jdou znovu použít, ale pokud máte podezření, že byly zkompromitované, je to ideální moment je rotovat.


Co když po cutoveru zjistím, že něco chybí?

Stape kontejner zrušte až 3-5 dní po cutoveru. Pokud problém objevíte, prostě otočíte DNS zpátky na Stape (TTL 60s, hotovo do minuty). V Care Premium balíku máte 30 dní hyper-care, kdy denně kontrolujeme, že data tečou správně.


Je migrace v ceně tarifu?

Self-service migrace pomocí wizardu + Academy návodu — zdarma. Managed migrace přes Care balík začíná na 19 900 Kč jednorázově (Standard) — to je 5-7 dní práce našeho týmu, který vám vše postaví, otestuje a předá hotové. Pokud cílíte výš než PRO tarifem, Care Premium za 39 900 Kč obsahuje 30denní hyper-care.


Co když mám custom Stape Container Config s vlastními tagy?

Container Config je standard — JSON od Googlu. DataNostro ho přijme 1:1, žádné transformace nepotřebujete. Tagy + triggery + variables se zobrazí ve stejné struktuře v Container view. Power-upy mají jiné názvy v UI (např. Stape „Cookie Keeper“ = DataNostro „Cookie Keeper“ — stejně), ale konfigurace je 1:1 mappable.


Můžu fakturovat firmě v EU mimo ČR?

Ano. Reverse-charge VAT pro plátce DPH v EU (zadáte VAT ID). Pro neplátce a třetí země posíláme fakturu s českou DPH 21 % nebo bez DPH dle zákonné úpravy. Faktury můžete stahovat v PDF i ISDOC 6.0.2 (auto import do Pohoda / Money / ABRA / Helios).

## První migrační konzultace *zdarma.*

30 minut audit nad vaším Stape setupem, návrat e-mailem s konkrétním migračním plánem. Žádné prodejní triky.

[Domluvit konzultaci](/cs/care/)
[Zkusit zdarma 14 dní](/cs/accounts/signup/?source=stape)

Zvažujete i jiné providers? [Stape vs Addingwell vs GCP vs DataNostro](/cs/blog/migrace/stape-addingwell-google-cloud-vs-datanostro-2026/) · [Migrace z Addingwell](/cs/migrace-z-addingwell/) · [Migrace z Google Cloud](/cs/migrace-z-google-cloud/)