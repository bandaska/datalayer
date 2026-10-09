# Kontrola kvality podkladů – datalayer.cz

**Datum kontroly:** 8. 10. 2026 · **Kontrolor:** nezávislý fact-check (bez znalosti vzniku podkladů)
**Rozsah:** `03_landing-pages/` (00–15), `04_homepage-ux/`, `05_formulare/`, `06_clanky/` (plán + A1–H3), `01_konkurence/00_…`, `02_klicova-slova/00_…`, `07_audit-webu-klienta/`.
**Metoda:** (1) výběr rizikových tvrzení z textu a ze sekcí „Zdroje / Fakta a zdroje“, (2) přímé načtení primárního zdroje (WebFetch, příp. `curl` na stavový kód), (3) skript v Pythonu na porovnání URL, (4) grep na názvosloví, události a `[DOPLNIT…]`.
**Omezení:** WebSearch byl vyčerpaný – ověřovalo se jen načtením známých URL. Nedostupné k automatickému ověření: zakonyprolidi.cz (chyba načtení), curia.europa.eu (aplikace v JS), edpb.europa.eu – stránka pokynů (503; PDF načteno), regionální ceník BigQuery (ceny podle regionu se načítají dynamicky). Stránka Meta o Offline Conversions API vracela chyby 429 a 5xx a pak přesměrovala na dokumentaci CAPI.
**Dokumenty jsem neupravoval**, opravy jen navrhuji (kap. 5).

Legenda: ✅ potvrzeno · ⚠️ nepřesné, navrhuji opravu · ❌ chybné, oprava · ❓ neověřitelné. „ř.“ = číslo řádku v souboru (přibližné).

---

## 1 Shrnutí

Podklady jsou celkově **velmi pečlivé**. U většiny tvrzení je uvedený primární zdroj s datem a nejisté údaje jsou poctivě označené („ověřit“, „nepoužívat“). Z 25 nejrizikovějších tvrzení:

| Verdikt | Počet | Tvrzení (č. v tabulce kap. 2) |
|---|---|---|
| ✅ potvrzeno | 18 | 1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 15, 16, 20, 21, 23, 24, 25 |
| ✅ s neověřitelnou částí | 1 | 22 (regionální ceny BigQuery Frankfurt/Varšava ❓) |
| ⚠️ nepřesné | 4 | 11 (GTG „11 %“), 17 (Meta OCAPI „květen 2025“), 18 (rozsah blokace Google Ads API v E2), 19 (rozšířené konverze „od 4/2026 jedno nastavení“) |
| ❌ chybné | 2 | 4 (datum přijetí pokynů EDPB 2/2023 v LP 04/05), 14 (LP 06 „Seznam datum konce starých kódů neuvádí“) |

**Nejdůležitější nálezy:**
1. ❌ **EDPB Pokyny 2/2023**: LP 04 (ř. 720) a LP 05 (ř. 638) uvádějí „přijaty 16. 10. 2024“. Správně: **verze 2.0 přijata 7. 10. 2024** (verze 1.0: 14. 11. 2023). Články A1, A2 a A5 mají datum správně.
2. ❌ / ⚠️ **Konec starých kódů Skliku**: nápověda Skliku (Časté dotazy) uvádí: „Podpora původních konverzních a retargetingových kódů však bude ukončena **v průběhu roku 2027**.“ LP 06 ve Zdrojích tvrdí, že Seznam datum neuvádí, a LP 04, 05 a 06 v textu píší jen „oznámí s předstihem“. Článek B6 to má správně.
3. ⚠️ **Meta Offline Conversions API „ukončeno v květnu 2025“** (LP 13, E3, F4): měsíc jsem v primární dokumentaci nenašel. Meta uvádí, že OCAPI od Graph API v17.0 nepodporuje offline události, a vede ji jako „legacy API“. Doporučuji psát bez měsíce.
4. ⚠️ **Rozšířené konverze „od 4/2026 jedno nastavení“** (LP 06, LP 13, plán, E1, F4): nápověda Google Ads (16884284) uvádí duben 2026 pro příjem dat z více zdrojů a **červen 2026** pro jeden přepínač. Článek E2 to rozlišuje správně.
5. **Rozpory mezi dokumenty:** náklady na Cloud Run (LP 04 „90–100 USD“ × B1 „95–150 USD“ × B3/B4 „~95 USD“), „11 %“ u Google Tag Gateway (LP 04 ho používá, B4 ho zakazuje jako „jen sekundární“, přitom ho Google uvádí v primárním zdroji), „first-party mode“ (LP 04 „neověřeno“, B4 s datem 8. 5. 2025 – primárně potvrzeno), Shoptet (LP 05 „neověřeno“ × A4/LP 12/D4 se zdroji Shoptetu).
6. **Názvy a události:** `lead_form_start` se používá jednotně. A3 ale v ukázce kódu používá `event: 'form_submit'` (ř. 124, 148), což je rezervovaný název GA4 a odporuje `05_formulare` (kap. 4 = `generate_lead`). Homepage (ř. 271) má `form_error` místo `lead_form_error`. Podobu „Data Studio (dříve Looker Studio)“ nedodržuje 11 souborů (LP 01, 12, 13, 14, 15, E1, E4, H1, H2, H3 a architektura ř. 23/173).
7. **URL:** všechny odkazy `/sluzby/…`, `/reseni/…`, `/blog/…` a `/nastroje/…` existují v architektuře nebo v obsahovém plánu (40/40 článků sedí s TSV i MD plánem). Odchylky jsou jen u slovníku: `/slovnik/gclid` (A1, A3, A7) proti definovanému `/slovnik/gclid-gbraid-wbraid` (LP 15) a 28 slugů hesel 13–40 bez definice. Dále `/blog/autor/vit-novotny` (LP 15) chybí v architektuře.
8. **Podklady od klienta:** 410 výskytů `[DOPLNIT…]` (254 unikátních) v 57 souborech. Deduplikovaný seznam podle témat je v kap. 4. Nejvíc blokují **případové studie a čísla z praxe** (všech 14 LP), **firemní údaje a bio** (LP 15) a **SLA/smluvní podmínky** (LP 11, LP 14).

---

## 2 Ověření tvrzení – tabulka

| # | Soubor + místo | Tvrzení v podkladech | Verdikt | Primární zdroj (načteno 8. 10. 2026) | Zjištění / návrh opravy |
|---|---|---|---|---|---|
| 1 | LP 05 ř. 419, 633; LP 04 ř. 269, 717; A2 ř. 75–85, FAQ; A5 FAQ; LP 01 ř. 423 | § 89 odst. 3 ZEK: k ukládání/přístupu do zařízení je potřeba předem prokazatelný souhlas, výjimka jen technicky nezbytné ukládání; novela 374/2021 Sb. (vyhlášena 18. 10. 2021), opt-in od 1. 1. 2022 | ✅ (doslovné znění ❓) | uoou.gov.cz/novinky/vse/cookies-od-zacatku-roku-2022-pouze-se-souhlasem (25. 11. 2021: „s účinností k 1. lednu 2022“, výjimka jen technické cookies); uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies; psp.cz/sqw/sbirka.sqw?cz=374&r=2021 (částka 166 z 18. 10. 2021) | Obsah potvrzen přes ÚOOÚ. zakonyprolidi.cz nešlo načíst → **doslovnou citaci** § 89 odst. 3 (A2) před publikací ručně porovnat s e-Sbírkou. |
| 2 | LP 05 ř. 419–423; A2 ř. 136, 172, 189, FAQ ř. 320; A4 ř. 78 | ÚOOÚ: přiměřená platnost souhlasu 12 měsíců, po odmítnutí se neptat aspoň 6 měsíců; zavření lišty ani nastavení prohlížeče není souhlas; odmítnutí v 1. vrstvě, vyvážená tlačítka; pravidla platí i pro fingerprinting; oprávněný zájem jen pro následné zpracování (analytika 1. strany) | ✅ | uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies | Vše odpovídá. |
| 3 | A2 ř. 147, 272, FAQ ř. 323; LP 05 ř. 429, 637 | ÚOOÚ 2023: pokuty v souvislosti s cookies 4 443 000 Kč, z toho 1 640 000 Kč pravomocně, nejvyšší 898 000 Kč | ✅ | uoou.gov.cz/udeleny-pokuty-ve-vysi-temer-45-mil-kc (2. 8. 2023) | Potvrzeno. Úřad pokutoval **za porušení GDPR** (ne ZEK) – A2 to tak uvádí správně. |
| 4 | LP 04 ř. 720 (Zdroje); LP 05 ř. 638 (Zdroje) | EDPB Guidelines 2/2023 k čl. 5 odst. 3 ePrivacy „přijaty 16. 10. 2024“ | ❌ | edpb.europa.eu/system/files/2024-10/edpb_guidelines_202302_…_v2_en_0.pdf: „Adopted on 7 October 2024“; v1.0 14. 11. 2023 | Opravit na **„verze 2.0 přijata 7. 10. 2024“**. Obsah (pixel, URL tracking, JS = „gaining access“, odst. 33, 50–51) ✅. A1 ř. 110, A2 ř. 116 a A5 ř. 79 mají datum správně. |
| 5 | A1 ř. 107, 123, FAQ ř. 484–488; LP 05 (basic/advanced, ř. 43–228) | Basic: tagy až po souhlasu, bez souhlasu se do Googlu nepošle nic, ani stav souhlasu. Advanced: pingy bez cookies (časové razítko, user agent, referrer, stav souhlasu, info o prokliku). Při `ad_storage: denied` Google Ads zkracuje IP adresy, požadavky jdou přes jinou doménu, sbírá se plná URL s GCLID. `ad_user_data: denied` vypne hashovaná data rozšířených konverzí. | ✅ | developers.google.com/tag-platform/security/concepts/consent-mode (akt. 30. 7. 2026); support.google.com/google-ads/answer/10000067 | Potvrzeno, včetně „Ads products truncate IP addresses at collection“. Volitelné zpřesnění A1 FAQ: ping obsahuje také **náhodné číslo generované při každém načtení stránky** a informaci o CMP. |
| 6 | A1 ř. 49, 88, FAQ ř. 481; LP 05 FAQ 2 ř. 497–498; A3 ř. 123 | Consent Mode v2 není zákonná povinnost, je to podmínka Googlu pro uživatele z EHP. Bez signálů od začátku března 2024 jsou v publikách jen uživatelé mimo EHP. Customer Match v EHP vyžaduje oba souhlasy. | ✅ | support.google.com/analytics/answer/14275483 („only end users outside the EEA will be included in audiences“ od začátku března 2024; notifikace se aktualizují 48–72 h) | Formulace sedí. Google nikde neříká „povinný“. Datum vynucování 21. 7. 2025 je v podkladech správně označené jako neověřené. |
| 7 | LP 05 ř. 24, 291; A1 ř. 44, 65, 150, 153; A3 ř. 84 + FAQ | Od 15. 6. 2026 je Consent Mode jedinou kontrolou dat GA4 pro reklamu a Google Signals řídí jen asociaci s přihlášenými uživateli pro reporting. `ad_personalization` a šifrované předávání IP do Google Ads přijdou „později v roce 2026“. | ✅ | support.google.com/analytics/answer/17016975 („starting June 15, 2026 … Consent Mode … as the single control“; „exact dates … will be shared later this year“) | Potvrzeno. Google k 8. 10. 2026 termín pro `ad_personalization` a IP stále neuvedl → **ověřit v týdnu publikace**. |
| 8 | A1 ř. 43, 137–147; LP 05 (Zdroje) | Modelování: GA4 ≥ 1 000 událostí/den s `analytics_storage=denied` po 7 dní a ≥ 1 000 uživatelů/den s `granted` 7 z 28 dní, jen advanced, identita Blended, modelovaná data nejsou v BigQuery. Google Ads: 700 prokliků za 7 dní na zemi a skupinu domén, modelované konverze ve sloupci Konverze. | ✅ | support.google.com/analytics/answer/11161109; support.google.com/google-ads/answer/10548233 | Potvrzeno. |
| 9 | A7 ř. 76–77, 206–207, FAQ; LP 04 (Zdroje ř. 725); plán ř. 18 | Chrome 22. 4. 2025: zachová současnou volbu uživatele u cookies třetích stran, bez nového dialogu; anonymní režim je blokuje ve výchozím stavu. 17. 10. 2025: konec Topics, Protected Audience, Attribution Reporting, IP Protection, RWS aj.; zůstává CHIPS, FedCM a PST. | ✅ | privacysandbox.google.com/blog/privacy-sandbox-next-steps (22. 4. 2025); privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies (17. 10. 2025) | Potvrzeno beze změn. |
| 10 | A7 ř. 46, 92, 94–95, 110, FAQ; B1 (Zdroje); LP 04 ř. 250, 566, 724; LP 06; A5 ř. 140, 290 | Safari ITP: blokuje všechny cookies třetích stran (od Safari 13.1, 24. 3. 2020); cookies z JS a skriptové úložiště 7 dní; 24 h při link decoration; 7 dní pro cookies z odpovědí při CNAME cloakingu a „third-party IP“; Safari 26 omezuje známé fingerprintingové skripty | ✅ | webkit.org/tracking-prevention/ (upr. 27. 4. 2023); webkit.org/blog/10218/ (24. 3. 2020); bugs.webkit.org 246477 (commit 21. 10. 2022); webkit.org/blog/17333/ (15. 9. 2025) | Potvrzeno. Verze Safari (16.4) u limitu „third-party IP“ je jen ze sekundárního zdroje a blog k Safari 26 neuvádí, zda ochrana platí pro veškeré prohlížení → ponechat označení „ověřit“ (A7 ř. 173). |
| 11 | LP 04 ř. 439 (text), ř. 726 (Zdroje); B4 ř. 273 | GTG: „inzerenti s gateway zaznamenali **v průměru** o 11 % víc signálů (data z dubna 2025)“ (LP 04) × „čísla 11 %, 14 % jen sekundární – nepoužívat“ (B4) | ⚠️ | support.google.com/google-ads/answer/16214371 (oznámení 2. 5. 2025): „saw an 11% uplift in signals“; poznámka: srovnání načtení Google tagu, **7denní klouzavý medián 9.–16. 4. 2025** | Číslo v primárním zdroji je, ale nejde o průměr a měří se načtení skriptu. LP 04 → „Podle Googlu měli inzerenti s gateway o 11 % víc signálů (načtení Google tagu, medián za 9.–16. 4. 2025)“. B4 → změnit stav na „11 % = primární zdroj 16214371; 14 % neověřeno“. |
| 12 | LP 04 ř. 425, 727; B4 ř. 14, 35, 44, 60 | GTG je dříve „first-party mode“, pro všechny dostupné od 8. 5. 2025; integrace zdarma, platí se load balancer, dodatečné zpracování hradí Google Ads, classic ALB nepodporován | ✅ | support.google.com/tagmanager/answer/4620708 (8. 5. 2025: „Google tag gateway for advertisers (previously first-party mode) is now available for everyone“); support.google.com/google-ads/answer/16816376 | Potvrzeno. **LP 04 ř. 727** má stav „neověřeno v primárním zdroji (embryo.com)“ → změnit na ověřeno s odkazem na release notes GTM. |
| 13 | LP 05 ř. 400; LP 06 ř. 230, 255, 573; LP 04 ř. 363, 729–731; B6 ř. 68, 79–82 | SEM: `sul.js` nahrazuje retargetingový a konverzní kód Skliku i Seznam Nákupy; štítek BETA; S2S `POST sem.seznam.cz/rtgconv`, i při S2S povinný `sul.js`, `sid`/`udid` až po `ad_storage: granted`, SHA-256, deduplikace „v přípravě“; zdarma; přepnutí nevratné; představeno 18. 5. 2026, přepnutí účtů očekáváno v červnu 2026; Shoptet, Upgates a Shopify SEM „vyvíjejí“ | ✅ | napoveda.sklik.cz/merici-skripty/seznam-event-measurement/ (+ …/server-to-server-s2s-mereni/, …/nasazeni-a-prechod-na-sem/: „Přepnutí nelze vrátit zpět“); blog.seznam.cz/2026/05/predstavujeme-seznam-event-measurement-… (18. 5. 2026); o-seznam.cz/reklama/seznam-event-measurement/ („plně zdarma“, „Samotné přepnutí je nevratné“) | Potvrzeno. Blog Seznamu slovo „beta“ nepoužívá, štítek „BETA“ je v nápovědě. B6 ř. 169 („Shoptet… ověřit“) lze doplnit podle o-seznam.cz („vyvíjejí SEM“), stejně jako LP 06. |
| 14 | LP 06 ř. 576 (Zdroje), ř. 255, 447; LP 05 ř. 400, 655; LP 04 ř. 731 | „Konec skriptu Skliku 2027 – **neověřeno, Seznam datum neuvádí**; na LP nepoužívat“ a v textu „datum konce starých kódů Seznam oznámí s předstihem“ | ❌ (LP 06 Zdroje) / ⚠️ (texty LP 04–06) | napoveda.sklik.cz/merici-skripty/seznam-event-measurement/zaciname-se-sem/caste-dotazy/: „Podpora původních konverzních a retargetingových kódů však bude ukončena v průběhu roku 2027. O přesném termínu vás budeme s předstihem informovat.“ | Opravit na „Seznam ukončí podporu původních kódů **v průběhu roku 2027**, přesný termín oznámí s předstihem“. B6 ř. 82, 481 je správně. |
| 15 | A1 ř. 312, 452 | Sklik: kódy musí od 1. 8. 2024 obsahovat parametr `consent` | ✅ | blog.seznam.cz/en/2024/07/as-of-august-sklik-ad-codes-have-to-include-the-consent-parameter/ (10. 7. 2024) | Potvrzeno. |
| 16 | LP 04, 06 ř. 229–268; LP 13 ř. 418; B5; E3 ř. 183, 236 | Meta: deduplikace pixel ↔ CAPI přes `event_name` + `event_id` (příp. `fbp`/`external_id`), okno 48 h, doporučeno pixel + CAPI. CAPI pro CRM: jen Lead Ads, ≥ 200 leadů/měsíc, upload aspoň 1× denně, fáze do 28 dní, konverzní poměr 1–40 %. | ✅ | developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/; developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration | Potvrzeno. |
| 17 | LP 13 ř. 25, 418, 555; E3 ř. 177–178, 366; F4 ř. 348 | „Meta zrušila Offline Conversions API (**květen 2025**)“ | ⚠️ (❓ měsíc) | developers.facebook.com/docs/graph-api/changelog/version17.0/ („Starting with Graph API v17.0, the Offline Conversions API will no longer support offline events“, ukončení očekávané ve Q3 2024); …/conversions-api/offline-events (OCAPI = „legacy API“, CAPI = doporučená metoda; offline události do 62 dní, deduplikace 7 dní) | Podstata platí: offline události se posílají přes CAPI. **Měsíc „květen 2025“ v primárních zdrojích není.** Formulovat bez data („Meta starší Offline Conversions API nahradila Conversions API“), nebo měsíc ověřit ručně. |
| 18 | LP 06 ř. 245, 444; LP 13 ř. 25, 409, 544; E2 ř. 84, 94, 221, 278; E3 ř. 91, 106, 282, 365; E1 ř. 479 | Od 15. 6. 2026 jdou import offline konverzí a rozšířené konverze pro leady přes Data Manager API a v Google Ads API jsou blokované. E2: „pro vývojářské tokeny bez předchozího použití (**leden–červen 2026**)“; chybový kód „dle ppc.land, ověřit“. | ✅ / ⚠️ (E2) | support.google.com/google-ads/answer/15713840 a 16884284; developers.google.com/google-ads/api/docs/deprecations („Developer tokens with no offline conversion upload requests between **December 17, 2025 and June 15, 2026**“ → `CUSTOMER_NOT_ALLOWLISTED_FOR_THIS_FEATURE`; session attributes/IP od 2. 2. 2026) | LP 13 je přesné. **E2 ř. 94:** „leden–červen 2026“ → „17. 12. 2025 – 15. 6. 2026“. Chybový kód je v primárním zdroji → v E2 ř. 278 a E3 ř. 365 nahradit ppc.land odkazem na deprecations. |
| 19 | LP 06 ř. 23, 444, 546, 567; LP 13 ř. 25; plán ř. 18; E1 ř. 52, 663; F4 ř. 346 | „Od dubna 2026 je v Google Ads **jedno nastavení** rozšířených konverzí pro web i leady“ | ⚠️ | support.google.com/google-ads/answer/16884284 („Starting in April 2026“ = data z tagu, Data Manageru a API současně; „**Starting in June 2026**“ = jeden přepínač); 15713840 uvádí obojí k dubnu 2026 | Zdroje Googlu se liší. Sjednotit podle E2 (ř. 84–94): „od dubna 2026 přijímá data z více zdrojů, od června 2026 jeden přepínač“, nebo obecně „od jara 2026“. |
| 20 | E2 ř. 107, 301; E3 ř. 67, 97–98; LP 13 ř. 542, 549; LP 15 (F5 slovník) | Import: GCLID do 90 dní, uživatelská data do 63 dní, úpravy do 55 dní, nahrávat aspoň denně, tROAS 6 týdnů; Data Manager: okna 14 nebo 90 dní podle zdroje; po založení akce čekat 4–6 h; GCLID rozlišuje velikost písmen; novým uživatelům Google doporučuje rozšířené konverze pro leady | ✅ | support.google.com/google-ads/answer/10029210; support.google.com/google-ads/answer/7012522 | Potvrzeno: GCS/S3/HTTP/SFTP/Sheets 90 dní; Salesforce/HubSpot 14 dní při prvním běhu; BigQuery/Redshift/Snowflake/MySQL/PostgreSQL 14 dní. |
| 21 | LP 07 ř. 13, 232, 236, 364, 476–477; F1 ř. 88–89, 151, 158, 338; F5; LP 12 ř. 285 | GA4: retence 2 nebo 14 měsíců (360: 26/38/50) a týká se jen průzkumů a trychtýřů. Export do BigQuery: standard 1 mil. událostí/den (při překročení se denní export pozastaví a zpětně nezpracuje), 360 až 20 mld., streaming bez limitu za 0,05 USD/GB (≈ 600 000 událostí/GB), Fresh Daily jen 360, export nelze zopakovat, wbraid/gbraid se neexportují, data do 24 h po propojení | ✅ | support.google.com/analytics/answer/7667196; …/9358801; …/9823238 | Potvrzeno. F1 ř. 122 popisuje změnu regionu správně (smazat propojení, zálohovat, znovu propojit, nebo replikace). |
| 22 | LP 07 ř. 395, 401, 468, 614–615; F1 ř. 131–133, 258; F5 ř. 60, 71–78, 89, 156, 260, 298; F2 ř. 75 | BigQuery: on-demand 6,25 USD/TiB, 1 TiB/měsíc zdarma, min. 10 MB na dotaz a tabulku, 10 GiB úložiště zdarma, Storage Write API 0,025 USD/GiB (2 TiB zdarma), DTS konektory Google Ads a GA4 zdarma. Sandbox: **doživotní** limit 10 GiB (smazáním se neobnoví), 1 TiB/měsíc, expirace 60 dní, bez streamingu, DML a DTS. Frankfurt/Varšava 8,125 USD/TiB. | ✅ (❓ regiony) | cloud.google.com/bigquery/pricing; docs.cloud.google.com/bigquery/docs/sandbox („lifetime limit of 10 GiB … not refunded upon data deletion“) | Základní ceny a sandbox jsou potvrzené. **8,125 USD/TiB a regionální sazby úložiště nešlo ověřit** – ceník je načítá dynamicky. Ověřit v Pricing Calculatoru (F5 ř. 317 to už uvádí). |
| 23 | G1 ř. 4, 14, 75, 82, 96–103; LP 07 ř. 630; LP 08 ř. 4, 466–467, 609; architektura ř. 183; HP ř. 154; plán ř. 18 | Looker Studio se v dubnu 2026 opět jmenuje Data Studio (blog 10. 4. 2026, release notes 16. 4. 2026); lookerstudio.google.com přesměrovává na datastudio.google.com; Data Studio Pro 9 USD/uživatel/projekt/měsíc (liší se podle délky předplatného), 30denní trial | ✅ | cloud.google.com/blog/products/data-analytics/looker-studio-is-data-studio (10. 4. 2026); docs.cloud.google.com/data-studio/release-notes (16. 4. 2026); docs.cloud.google.com/data-studio/welcome; cloud.google.com/data-studio; docs.cloud.google.com/data-studio/about-pro; `curl` lookerstudio.google.com → 301 datastudio.google.com | Potvrzeno, stejně jako další data z G1 (Conversational Analytics GA 30. 7. 2026, viewer refresh 18. 6. 2026, konektory 24. 9. 2026). |
| 24 | LP 15 ř. 22, 954; architektura ř. 212; HP ř. 198; LP 12 ř. 671; LP 07 ř. 631; plán ř. 18 | Google od 7. 5. 2026 nezobrazuje FAQ rich results; dokumentace odstraněna 15. 6. 2026 | ✅ | developers.google.com/search/updates (8. 5. 2026: „no longer appear … starting May 7, 2026“; 15. 6. 2026: dokumentace odstraněna) | Potvrzeno. **Citovaná URL `…/structured-data/faqpage` dnes vrací 301** na `/search/updates#removing-faq-rich-result` → ve Zdrojích ji nahradit. |
| 25 | LP 04 ř. 415, 570, 722; B1 ř. 158–162, 290, 331–333, 373; B3 ř. 65, 82, 102, 250; B4 ř. 150, 232; LP 12 ř. 667; LP 14 ř. 268, 565; LP 15 ř. 956 | sGTM na Cloud Run: ~45 USD/server/měsíc, 1 vCPU + 0,5 GB, CPU vždy alokované, min. 2 instance kvůli riziku ztráty dat, 2–10 serverů = 35–350 req/s, logování drahé nad ~1 mil. požadavků (akt. 12. 5. 2026). Ceník instance-based 0,000018 USD/vCPU-s a 0,000002 USD/GiB-s, free tier 240 000 vCPU-s a 450 000 GiB-s; europe-west3 = Tier 2; forwarding rule 0,025 USD/h | ✅ | developers.google.com/tag-platform/tag-manager/server-side/cloud-run-setup-guide; cloud.google.com/run/pricing; developers.google.com/tag-platform/learn/sst-fundamentals/7-planning-infrastructure („approximately USD 50 per instance per month“, akt. 9. 10. 2024) | Jednotlivá čísla sedí. **Součty se mezi dokumenty liší** (kap. 3.2, bod 1) – sjednotit. |

**Další ověřená tvrzení mimo 25 (pro úplnost):**
- `form_start` a `form_submit` jsou rezervované názvy událostí GA4 pro web ✅ (support.google.com/analytics/answer/13316687).
- GA4 neloguje ani neukládá IP. U EU/CH/UK probíhá zjištění polohy na serverech v regionu a IP se hned zahodí ✅ (answer/2763052, 12017362).
- Shopify: termín přechodu děkovací stránky u plánů mimo Plus byl 26. 8. 2026 ✅ (help.shopify.com/…/upgrade-thank-you-order-status).
- A3 FAQ o DPF (Tribunál T-553/23, odvolání C-703/25 P) ❓ – curia.europa.eu nejde načíst automaticky, ověřit ručně.

---

## 3 Konzistence napříč dokumenty

### 3.1 URL (skript v Pythonu)

**Postup:** z `00_architektura-webu.md` kap. 1 (strom + 1.1 přesměrování) a z `06_clanky/obsahovy-plan.tsv` i `00_obsahovy-plan.md` jsem sestavil seznam platných URL. Pak jsem ve všech `.md` (03, 04, 05, 06, 07 a analýzách 01, 02, bez profilů a dat) vyhledal regexem `/(sluzby|reseni|blog|nastroje)/…`, včetně `datalayer.cz/…` a velkých písmen.

**Výsledek:**
- **Blog:** plán obsahuje 40 URL a TSV i MD verze se shodují. Všechny odkazy `/blog/…` v LP, briefech, homepage i formulářích na ně vedou. Cílové LP v TSV (`cilova_lp`) odpovídají řádku „Cílová LP“ ve všech 40 briefech.
- **Služby, řešení, nástroje:** všechny odkazy existují v architektuře. Hodnoty `form_id` v LP a briefech odpovídají seznamu v `05_formulare` (17 hodnot).
- **URL mimo architekturu:**

| URL | Kde | Stav | Návrh |
|---|---|---|---|
| `/sluzby/ga4`, `/sluzby/gtm`, `/sluzby/dataLayer`, `/sluzby/serverSide`, `/sluzby/audit`, `/blog/server-side-gtm-uvod` | LP 01, 02, 03, 04, 09, B1 | jen jako zdroj 301 | OK |
| `/sluzby/datalayer` (malými písmeny) | LP 03 ř. 32, 520 | 301 není v tabulce 1.1 (pokrývá ho jen obecné pravidlo lowercase) | doplnit do arch. 1.1 |
| `/reseni/e-shopy/shopify`, `/sluzby/firemni-skoleni-ga4-gtm` | LP 12 ř. 67, LP 14 ř. 56 | fáze 2, podmíněně | OK (`/sluzby/firemni-skoleni-ga4-gtm` doplnit do arch. „Fáze 2“) |
| `/blog/autor/vit-novotny` | LP 15 ř. 533 | v architektuře chybí | doplnit do stromu (`/blog/autor/{slug}`), nebo odkaz vypustit |
| `/sluzby/audit-mereni-ga4` | `07_audit-webu-klienta/audit-stagingu.md` ř. 62 | rozpor s architekturou (`/sluzby/audit-mereni`) | v auditu sjednotit na `/sluzby/audit-mereni` |

- **Slovník (`/slovnik/…`):**
  - `/slovnik/gclid` (A1 ř. 471, A3 ř. 368, A7 ř. 235) × v LP 15 (F5) definované `/slovnik/gclid-gbraid-wbraid` → **sjednotit na `/slovnik/gclid-gbraid-wbraid`**.
  - LP 15 F4 definuje slug jen u hesel 1–12, hesla 13–40 mají `/slovnik/{slug}`. Briefy a LP už používají těchto **28 slugů**, které je potřeba v LP 15 F4 závazně zapsat: atribucni-model, bigquery, client-id, cmp, cookieless-ping, cross-domain-mereni, datovy-sklad, deduplikace, event-match-quality, first-party-cookie, first-party-data*, gclid-gbraid-wbraid, interni-navstevnost, itp, klicova-udalost, kontejner-gtm, looker-studio, measurement-protocol, modelovani-konverzi, offline-konverze, power-bi, rozsirene-konverze, spoustec, tag, thresholding, udalost, user-id (+ gclid → sloučit). *`first-party-data` (E4) v seznamu 40 hesel není → doplnit, nebo odkaz vypustit.
  - `/slovnik/looker-studio` (LP 07, LP 08) a heslo „Looker Studio“ (plán kap. 4, LP 15 ř. 773) → heslo pojmenovat „Data Studio (dříve Looker Studio)“. Slug lze ponechat kvůli hledanosti, nebo zavést `/slovnik/data-studio` s 301.

### 3.2 Rozporná tvrzení

| # | Téma | Rozpor | Správně podle primárního zdroje | Návrh |
|---|---|---|---|---|
| 1 | **Náklady Cloud Run (sGTM)** | LP 04 ř. 415, 570: „2 × ~45 USD + preview → **90–100 USD**“; B1 ř. 158, 290, 373: „**45–50 USD za instanci**, realisticky **95–150 USD**“; B3 ř. 65, 250 a B4 ř. 150, 232: „**~95 USD** za dvě instance“; B3 ř. 157: „95–145 USD“ | Google uvádí ~45 USD/server (setup guide 12. 5. 2026) a ~50 USD/instanci (kurz SST fundamentals 9. 10. 2024), min. 2 instance; LB ~18 USD/měsíc (0,025 USD/h); logování navíc | Jeden vzorec ve všech dokumentech: „2 instance × ~45–50 USD ≈ 90–100 USD; s load balancerem (~18 USD) a logy realisticky **cca 110–150 USD/měsíc**; europe-west3 je Tier 2 (dražší)“. |
| 2 | **Datum EDPB 2/2023** | LP 04, LP 05: 16. 10. 2024 × A1, A2, A5: 7. 10. 2024 | 7. 10. 2024 (v2.0) | opravit LP 04 a LP 05 |
| 3 | **Konec starých kódů Skliku** | B6: „v průběhu roku 2027“ × LP 04, 05, 06: „oznámí s předstihem“, LP 06 Zdroje: „datum neuvádí“ | nápověda Skliku: v průběhu roku 2027 | sjednotit podle B6 |
| 4 | **SEM a Shoptet** | LP 06 ř. 573: Shoptet „ve vývoji“ (o-seznam.cz) × B6 ř. 169, 500: „ověřit“ | o-seznam.cz: Shoptet, Upgates, Shopify „vyvíjejí SEM“ | B6 doplnit podle LP 06 |
| 5 | **Lišta Shoptetu** | LP 05 ř. 513, 660: „neověřeno – ověřit“ × A4 ř. 97, 287, LP 12 ř. 357 a D4 ř. 100, 198: Consent Mode v2 ve vestavěné liště (`ad_user_data`, `ad_personalization` pod souhlasem „Profilace“), externí CMP lze, `default`/`update` do GTM, souhlas 6 měsíců | zdroje Shoptetu uvedené v A4/D4 (blog.shoptet.cz/google-consent-mode-v2, akt. 6. 10. 2025; podpora.shoptet.cz/cookies) – samostatně jsem je neověřoval | LP 05 FAQ 7 přepsat podle A4 a uvést zdroj; v D4 zvýraznit, že platnost 6 měsíců je nastavení Shoptetu (ÚOOÚ doporučuje 12) |
| 6 | **Shopify – termíny** | D4 ř. 67: „additional scripts a script tagy nahradit do 28. 8. 2025“ (jen Plus) × LP 12 ř. 359, 378, 497 a C2 ř. 281: Plus 28. 8. 2025, ostatní plány 26. 8. 2026 | help.shopify.com: non-Plus 26. 8. 2026 | D4 doplnit termín pro ostatní plány |
| 7 | **GTG „11 %“** | LP 04 číslo používá × B4 ř. 273 „jen sekundární – nepoužívat“ | primární zdroj support 16214371 (medián načtení tagu) | sjednotit (kap. 2, č. 11) |
| 8 | **GTG = dříve first-party mode** | LP 04 ř. 727: „neověřeno v primárním zdroji“ × B4 ř. 35: „8. 5. 2025“ | release notes GTM 8. 5. 2025 | LP 04 Zdroje aktualizovat |
| 9 | **Rozšířené konverze** | E2: 4/2026 data z více zdrojů + 6/2026 jeden přepínač × LP 06, LP 13, plán, E1, F4: „od 4/2026 jedno nastavení“ | support 16884284 (červen 2026) | sjednotit podle E2 |
| 10 | **Okno blokace Google Ads API** | LP 13 ř. 544: 17. 12. 2025 – 15. 6. 2026 × E2 ř. 94: „leden–červen 2026“ | deprecations: 17. 12. 2025 – 15. 6. 2026 | opravit E2 |
| 11 | **Seznam Nákupy / Zboží.cz** | LP 05, LP 06: „Seznam Nákupy (dříve Zboží.cz)“ × LP 12 ř. 10, 85, 288, 316, 338, 357–360, 405: jen „Zboží“ / „Zboží.cz“ | nápověda Skliku: „Seznam Nákupy“ | LP 12 sjednotit |
| 12 | **Datum Data Studio** | 10. 4. 2026 (blog) × 16. 4. 2026 (release notes) | obojí správně | OK – v textech „v dubnu 2026“ |
| 13 | **Spuštění GTG** | LP 04: „květen 2025“, Zdroje „oznámení 2. 5. 2025“ × B4: 8. 5. 2025 | oznámení 2. 5., dostupnost pro všechny 8. 5. 2025 | OK – případně uvádět obě data |

### 3.3 Názvosloví a události

**`lead_form_start` vs. `form_start`:**
- ✅ `lead_form_start` se pro vlastní událost používá jednotně (18 souborů: architektura, LP 01, 02, 04, 07, 08, 10–15, HP, formuláře, A3, C5, E1, E4). Výskyty `form_start` jsou jen v upozorněních, že jde o rezervovaný název GA4 (to je potvrzené, answer/13316687).
- ⚠️ **A3 ř. 124 a 148**: ukázka kódu `{ event: 'form_submit', … user_data }` s tvrzením „dataLayer podle specifikace formulářů klienta“. Specifikace (`05_formulare` kap. 4) ale používá `generate_lead` s `user_data`. `form_submit` se v ní objevuje jen v popisu vzoru annanovotna.cz (ř. 34) a je to rezervovaný název GA4. → v A3 změnit na `generate_lead`.
- ⚠️ **Homepage ř. 271**: `form_error` → `lead_form_error` (architektura ř. 226, formuláře kap. 4).
- ℹ️ `05_formulare` ř. 34 (vzor annanovotna.cz) používá `form_submit`. Jde o popis cizího webu, ale doporučuji doplnit poznámku, že datalayer.cz použije `generate_lead`.

**„Data Studio (dříve Looker Studio)“** (pravidlo v architektuře ř. 183):
- ✅ Dodržuje: LP 07, LP 08, HP, plán (zčásti), F1, F5, G1, G2, G3, B6.
- ⚠️ **Nedodržuje** (v textu jen „Looker Studio“): LP 01 ř. 242, 287 · LP 12 ř. 291, 320, 338 · LP 13 ř. 287, 318, 320, 377 · LP 14 ř. 241, 359, 453 · LP 15 ř. 773, 775 (slovník) · E1 ř. 569 · E4 ř. 304 · H1 ř. 123 · H2 ř. 111 · H3 ř. 212 · architektura ř. 23 (strom webu: „08 Dashboardy a reporting (Looker Studio, Power BI)“) a ř. 173 · plán kap. 4 (heslo „Looker Studio“) · F5 ř. 289 a G3 ř. 284 („Looker Studio (Data Studio)“ – obrácené pořadí).
- ℹ️ Slugy `/blog/looker-studio-pruvodce` a `/blog/looker-studio-vs-power-bi` kvůli hledanosti ponechat (v souladu s pravidlem „v titulcích ponechat i Looker Studio“).

---

## 4 Podklady od klienta (`[DOPLNIT…]`)

**Rozsah:** 410 výskytů, 254 unikátních znění, 57 souborů (nejvíc LP 15 = 45, LP 14 = 26, LP 11 = 21, LP 04 = 20, LP 05 = 19). Mimo hranaté závorky: LP 15 ř. 195 (`DOPLNIT: sgtm.datalayer.cz`) a A7 ř. 220 (podíl Safari).
**Zkratky:** LP xx = `03_landing-pages/xx_…`, HP = `04_homepage-ux/…`, FORM = `05_formulare/…`, A1–H3 = `06_clanky/…`.

### 4.1 Čísla, statistiky a případové studie
| Co dodat | Soubory |
|---|---|
| **Případová studie s čísly** (klient/obor · problém · příčina · oprava · výsledek před/po s obdobím a zdrojem dat · krátký výsledkový titulek · citace se souhlasem) – jedna na LP | LP 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14; šablona a plán prvních studií LP 15 (ř. 672–692); pás studií HP ř. 167 |
| **Mini-případovky v článcích** (jen reálná čísla, jinak vynechat) | A1 (podíl konverzí vrácený po opravě), A6 (anonymizovaný projekt, 90 dní), B1 (podíl zachycených nákupů), B2 (deduplikace/EMQ), B5 (EMQ před/po), D1 (podíl platebních bran ve zdrojích), D6 (inkrementalita), E1, E2 (pokrytí rozšířených konverzí), E3, E4, F1, F2 (podíl duplicitních nákupů), F3 (náklady na modely), F4 (POAS), G1 (kvóty → BigQuery), G3 (PNO → POAS), H1 (lock-in), H2 (nález z auditu), B6 (migrace na SEM), B3 (migrace hostingu), A3 (nález PII) |
| **Social proof – počty** (implementace, kontejnery, specifikace, SST nasazení „od roku“, audity, BigQuery projekty, dashboardy, spravované weby, e-shopy, B2B projekty, enterprise projekty a největší objem událostí, roky praxe) | LP 01, 02, 03, 04, 05 (N auditů + „od roku“), 06, 07, 08, 09, 10, 11, 12, 13, 14 |
| **Agregované statistiky z auditů** (jen doložitelné + metodika: N, období, definice) | LP 05 (3 procenta + metodika), A1 (pořadí chyb), A5, A6 (medián consent rate podle typu webu, zařízení a prohlížeče), C2 (tolerance proti administraci), C4 („X z Y kontejnerů“), D2 (medián rozdílu GA4 vs. administrace), D3 (podíl auditů s duplicitami / chybným consentem), F4 (rozpětí match rate), H2 („X z Y webů posílalo data před souhlasem“), E5 (podíl telefonických poptávek), A7 (podíl Safari z GA4 klienta / StatCounter CZ), LP 12 (nejčastější úroveň vyspělosti), LP 09 („62 kontrol“, „16 % chybějících nákupů“) |
| **Ukázky a screenshoty** (anonymizované, CZ rozhraní) | A1 (`gcs=G100`), B1 (2×), B2, D1, D3, E1 (3×), E2 (5×), E3 (2×), F1 (2×), F3 (DAG), G1 (dashboardy), G2 (Power BI vs. Data Studio), G3, LP 01 (ukázka výstupu), LP 04, LP 08, LP 09 (PDF report), LP 10, LP 11, LP 15 (screenshoty z produkce) |
| **Loga klientů** (jen měřicí projekty, se souhlasem) | LP 01, 02, 04, 12, 14 |
| **Externí data** | H1 (veřejný mzdový průzkum 2026 – platy.cz/Hays/Grafton), F5 (kurz USD/Kč k datu publikace, modelový e-shop), E5 (ruční kontrola SERP „call tracking“) |

### 4.2 Kontakty, osoby a firma
| Co dodat | Soubory |
|---|---|
| **Vít Novotný:** role, fotka, LinkedIn, telefon, roky v oboru, předchozí role a firmy, osobní motivace, rok založení, přednášky a články, certifikace (jen existující) | LP 04 ř. 629; LP 15 ř. 474–490; LP 14 (certifikace) |
| **Firemní údaje:** obchodní firma, IČO, DIČ (`vatID`), sídlo (`addressLocality`), zápis v rejstříku, telefon; LinkedIn firmy | LP 15 ř. 444–445, 527 |
| **Tým:** složení a role (např. Vít jako hlavní kontakt a tracking engineer + analytik), popis týmu pro výběrová řízení | LP 15 ř. 253; LP 14 ř. 414 |
| **Kontakt pro přístupy** (např. access@datalayer.cz), místo osobních schůzek (Praha / dle dohody) | LP 15 |
| **Citace klientů** se jménem a funkcí (se souhlasem) | LP 04, 07, 08, 13 (obchodní ředitel) |
| **Partneři:** advokátní kancelář / DPO (recenze právních textů), webové studio, SEO partner, vývojářský partner, poskytovatel call trackingu, CMP (Cookies správně), hosting sGTM (Stape/DataNostro), e-shopové platformy | A1, A2, A3, A5, LP 05 (advokát); LP 11; LP 10; LP 15 ř. 229; LP 13; A4; LP 04, B3; D4 |

### 4.3 Procesy, délky, SLA a smluvní podmínky
| Co dodat | Soubory |
|---|---|
| **Délky kroků a projektů** (audit, specifikace, implementace, validace; SST, BigQuery, dashboardy, e-shop/B2B/velká firma) | HP ř. 33, 175–178; LP 07, 08, 11, 12, 13 (3.14), 15; B1 (2×); C1, C4, C5; F3, F4; H2; LP 09 („do X pracovních dnů“) |
| **SLA a reakční doby** (P1–P3, např. 4 pracovní hodiny / 1 den / 3 dny; varianty Standard/Rozšířené, pohotovost) | LP 02, LP 11 ř. 470, LP 14 ř. 344–345, 517, 545 |
| **Smluvní podmínky:** minimální délka spolupráce a výpovědní lhůta (návrh 1 měsíc), platební podmínky (audit jednorázově, implementace po etapách nebo 50/50, správa měsíčně), započtení ceny auditu | LP 11 ř. 471; LP 15; LP 09 |
| **Školení:** zda se nabízí, formát a délka (návrh 3–4 h, online/osobně) | LP 01 (2×), LP 02, LP 14 ř. 519, C3 |
| **Monitoring:** počet kontrol měsíčně, technologie hlídání | LP 09, LP 11 ř. 472 |

### 4.4 Rozhodnutí klienta
| Rozhodnutí | Soubory |
|---|---|
| **Lead magnety** – volně, nebo za e-mail; kdo je připraví (PDF GTM, šablona specifikace, checklist auditu, šablona měřicího plánu, šablona dashboardu, slovník metrik, šablona sběrového plánu, PDF auditu, GitHub/Gist účet pro SQL) | LP 02, C1, C4, C5, G1 (2×), G3, E4, H2, F2 |
| **Rozsah služeb:** přímé úpravy kódu webu, modul B (technická správa – platformy), Power BI a následná údržba, infrastruktura jako kód (Terraform), GTG jako samostatná služba, aktivace dat (Data Manager/CAPI) jako služba, oddělené objednání oblastí auditu, malé weby a správa, správa kampaní (potvrdit „ne“) | LP 10, LP 11, LP 08, LP 04, B4, F4, LP 15 ř. 400, 409 |
| **Technologické preference:** hosting sGTM podle segmentů, same-origin přes Cloudflare/LB jako standard, šablona Šabatky vs. vlastní pro SEM, Dataform vs. dbt, doporučení pro Microsoft stack, typické CRM (pořadí v tabulce), platformy a CRM se zkušeností | B3, B1, B6, F3, LP 07, G2, E3, LP 07, 08, 12, 13 |
| **Hodnoty a prahy:** hodnota leadu v `generate_lead`, hodnoty konverzí audit / quick_check, prahy kalkulačky (≤ 5 % / 5–15 % / > 15 %), výchozí podíl odmítnutí, uložení výsledků nástroje (bez ukládání / 24 h) | E1, LP 09, LP 15 ř. 893, 912, 926–928 |
| **Obchodní formulace:** „bez přirážky“ u nákladů Google Cloud, „nejsme reseller GA4 360“, politika uchování dat doporučovaná klientům, transparentnost partnerství a provizí | F5 (2×), LP 14, F1 (2×), LP 04, A4, B3, D4 |
| **Nástroje `/nastroje`:** termín spuštění (do té doby odkazy skrýt) | A1, C1, LP 03 |

### 4.5 Technické nasazení na vlastním webu datalayer.cz
| Co dodat / změřit | Soubory |
|---|---|
| GA4 measurement ID, stav Consent Mode a sGTM na produkci (audit stagingu: web zatím nemá GTM ani lištu) | E1, LP 04 ř. 227 |
| Režim Consent Mode na vlastním webu (basic/advanced) | LP 15 ř. 204 |
| sGTM: subdoména (`sgtm.datalayer.cz`) a region (`europe-west3` – pozn.: Tier 2, dražší než europe-west1/4) | LP 15 ř. 195, 208 |
| Měření vlastní lišty (velikost skriptu v kB, vliv na LCP), odkaz „ověřte si v DevTools“ | A4 (2×) |
| Test cookies v Safari s GTG | B4 |
| WebPageTest před/po (mobil, 4G, medián 9 běhů) a CrUX po 28 dnech; tabulka zdrojů blokujících render | H3 ř. 193–197, 270, 335 |
| Filtrování testovacích zpráv formuláře, screenshoty GTM Preview a DebugView z produkce | E1 |
| Testovací prostředí: obchody Shoptet, Upgates, WooCommerce a Shopify; testovací Google Ads účet / MCC; demo kontejner GTM | D4, E3, C3 |
| Domény platebních bran (ACS banky) pro vyloučení z referralů | D1 |

### 4.6 Právní
| Co dodat | Soubory |
|---|---|
| **Jméno partnerského advokáta / DPO** pro recenzi právních pasáží (disclaimer „nejsme advokátní kancelář“ zůstává) | A1, A2, A3, A5, LP 05 (2×) |
| **Souhlas majitelky annanovotna.cz** se zmínkou jako referenční lišty | LP 05, A4 |
| **Souhlasy klientů** se zveřejněním jmen, log, citací a názvů CRM | LP 04, 05, 07, 12, 13 ř. 502, 14 ř. 521 |
| **Smluvní dokumentace pro enterprise:** vzor zpracovatelské smlouvy, seznam subzpracovatelů, pojištění odpovědnosti, přehled pro IT a bezpečnost (PDF) | LP 14 ř. 299, 414, 515–516 |
| **Transparentnost** partnerství a provizí (Stape, DataNostro, Cookies správně, hostingy, platformy) | LP 04, A4, B3, D4 |

---

## 5 Doporučené opravy podle priority

### P1 – před publikací (faktické chyby a nepřesnosti)
| # | Soubor (místo) | Co změnit |
|---|---|---|
| 1 | `03_landing-pages/04_server-side-tracking.md` ř. 720; `05_cookie-lista-consent-mode.md` ř. 638 | „přijaty 16. 10. 2024“ → „verze 2.0 přijata 7. 10. 2024“ |
| 2 | `03_landing-pages/06_mereni-konverzi.md` ř. 576 | řádek „Konec skriptu Skliku 2027 – neověřeno – Seznam datum neuvádí“ nahradit: „Podpora původních kódů skončí v průběhu roku 2027, termín Seznam oznámí s předstihem – napoveda.sklik.cz/…/zaciname-se-sem/caste-dotazy/ – ověřeno 10/2026“ |
| 3 | LP 06 ř. 255, 447; LP 05 ř. 400, 655; LP 04 ř. 731 | „datum konce starých kódů Seznam oznámí s předstihem“ → „Seznam ukončí podporu původních kódů v průběhu roku 2027; přesný termín oznámí s předstihem“ |
| 4 | LP 13 ř. 25, 418, 555; `06_clanky/E3_…` ř. 177–178, 366; `F4_…` ř. 348 | odstranit „(květen 2025)“ / „v květnu 2025“ → „Meta starší Offline Conversions API už nepodporuje (od Graph API v17.0 nepřijímá offline události, dokumentace ji vede jako legacy); offline a CRM události se posílají přes Conversions API“. Zdroj: changelog v17.0 + …/conversions-api/offline-events. Měsíc uvést jen po ručním ověření. |
| 5 | LP 04 ř. 439 | „v průměru o 11 % víc signálů (data z dubna 2025)“ → „podle Googlu o 11 % víc signálů (měřeno načtením Google tagu, medián za 9.–16. 4. 2025)“ |
| 6 | `06_clanky/B4_…` ř. 273 | „jen sekundární zdroje – nepoužívat“ → „11 %: support.google.com/google-ads/answer/16214371 (vlastní metrika Googlu, medián 9.–16. 4. 2025) – použít jen s touto výhradou; 14 % neověřeno – nepoužívat“ |
| 7 | `06_clanky/A3_…` ř. 124, 148 | `event: 'form_submit'` → `event: 'generate_lead'` (podle `05_formulare` kap. 4; `form_submit` je rezervovaný název GA4) |
| 8 | `06_clanky/E2_…` ř. 94 | „pro vývojářské tokeny bez předchozího použití (leden–červen 2026)“ → „pro vývojářské tokeny bez nahrávání offline konverzí v období 17. 12. 2025 – 15. 6. 2026“ |
| 9 | E2 ř. 278, 330; E3 ř. 365 | chybový kód `CUSTOMER_NOT_ALLOWLISTED_FOR_THIS_FEATURE` → zdroj developers.google.com/google-ads/api/docs/deprecations (primární), odstranit „dle ppc.land, ověřit“ |
| 10 | LP 06 ř. 23, 444, 546, 567; LP 13 ř. 25; `00_obsahovy-plan.md` ř. 18; E1 ř. 52, 663; F4 ř. 346 | „od 4/2026 jedno nastavení“ → „od dubna 2026 Google Ads přijímá uživatelská data z tagu, Data Manageru i API současně, od června 2026 je pro web i leady jeden přepínač“ (support 16884284), nebo „od jara 2026“ |

### P2 – konzistence a odkazy
| # | Soubor (místo) | Co změnit |
|---|---|---|
| 11 | LP 04 ř. 415, 570; B1 ř. 158, 290, 373; B3 ř. 65, 157, 250; B4 ř. 150, 232 | sjednotit náklady na Cloud Run: „2 instance × ~45–50 USD ≈ 90–100 USD; s load balancerem (~18 USD) a logy realisticky cca 110–150 USD měsíčně“ + poznámka „europe-west3 = Tier 2“ |
| 12 | LP 04 ř. 727 (a ř. 425) | stav „Gateway dříve first-party mode – neověřeno“ → „ověřeno: support.google.com/tagmanager/answer/4620708 (8. 5. 2025, ‚previously first-party mode‘)“; v textu ř. 425 „Google ji dřív nazýval first-party mode“ |
| 13 | LP 05 ř. 513, 660 | FAQ 7 a Zdroje: místo „[OVĚŘIT…]“ použít tvrzení z A4 ř. 97/287 se zdrojem blog.shoptet.cz/google-consent-mode-v2 (akt. 6. 10. 2025); stejné znění v LP 05, LP 12, A4 a D4 |
| 14 | `06_clanky/B6_…` ř. 169, 500 | Shoptet, Upgates, Shopify: „podle Seznamu SEM vyvíjejí (o-seznam.cz, 10/2026)“ |
| 15 | `06_clanky/D4_…` ř. 67 | doplnit „u ostatních plánů Shopify termín 26. 8. 2026, poté automatický upgrade“ |
| 16 | LP 12 ř. 10, 85, 288, 316, 338, 357–360, 405 | „Zboží / Zboží.cz“ → „Seznam Nákupy (dříve Zboží.cz)“ při první zmínce, dál „Seznam Nákupy“ |
| 17 | LP 01 ř. 242, 287; LP 12 ř. 291, 320, 338; LP 13 ř. 287, 318, 320, 377; LP 14 ř. 241, 359, 453; LP 15 ř. 773, 775; E1 ř. 569; E4 ř. 304; H1 ř. 123; H2 ř. 111; H3 ř. 212; architektura ř. 23, 173; plán kap. 4; F5 ř. 289; G3 ř. 284 | „Looker Studio“ → „Data Studio (dříve Looker Studio)“ při první zmínce, dál „Data Studio“ (v diagramech stačí „Data Studio“) |
| 18 | A1 ř. 471; A3 ř. 368; A7 ř. 235 | `/slovnik/gclid` → `/slovnik/gclid-gbraid-wbraid` |
| 19 | LP 15 kap. F4 (ř. 773) | rozepsat hesla 13–40 se závaznými slugy (28 slugů v kap. 3.1); doplnit `first-party-data` (E4), nebo odkaz v E4 vypustit; heslo „Looker Studio“ přejmenovat na „Data Studio (dříve Looker Studio)“ |
| 20 | `04_homepage-ux/homepage-audit-a-navrh.md` ř. 271 | `form_error` → `lead_form_error` |
| 21 | `03_landing-pages/00_architektura-webu.md` kap. 1 / 1.1 | doplnit 301 `/sluzby/datalayer` → `/sluzby/datova-vrstva`; doplnit `/blog/autor/{slug}` (nebo odkaz v LP 15 ř. 533 vypustit); do „Fáze 2“ doplnit `/sluzby/firemni-skoleni-ga4-gtm` |
| 22 | `07_audit-webu-klienta/audit-stagingu.md` ř. 62 | `/sluzby/audit-mereni-ga4` → `/sluzby/audit-mereni` (podle architektury) |
| 23 | architektura ř. 212; LP 15 ř. 954; LP 12 ř. 671; HP ř. 198 | odkaz `…/structured-data/faqpage` (dnes 301) → `https://developers.google.com/search/updates` (záznamy 8. 5. 2026 a 15. 6. 2026) |

### P3 – zpřesnění a ruční ověření před publikací
| # | Soubor (místo) | Co udělat |
|---|---|---|
| 24 | A2 (citace § 89 odst. 3), všechny Zdroje se zakonyprolidi.cz | doslovné znění ručně porovnat s e-Sbírkou (e-sbirka.cz/sb/2005/127) – automaticky nebylo dostupné |
| 25 | LP 05 ř. 24, 291; A1 ř. 44, 65; A3 ř. 84 + FAQ | termín Googlu pro `ad_personalization` a IP do Google Ads („later this year“) ověřit v týdnu publikace |
| 26 | F1 ř. 132, 340; F5 ř. 73, 156, 260 | ceny Frankfurt/Varšava (8,125 USD/TiB, úložiště 0,023/0,016) ověřit v Google Cloud Pricing Calculatoru |
| 27 | A1 FAQ ř. ~484–488 | volitelně doplnit obsah pingu: náhodné číslo při každém načtení stránky a informace o CMP |
| 28 | A3 FAQ (DPF, T-553/23, C-703/25 P) | ověřit ručně na curia.europa.eu (stránka v JS) |
| 29 | A7 ř. 173 (AFP pro veškeré prohlížení), B1/A7 (Safari 16.4 a third-party IP) | ponechat označení „ověřit“; primární zdroje rozsah ani verzi neuvádějí |
| 30 | LP 15 ř. 208 (region sGTM) | zvážit europe-west1 nebo europe-west4 (Tier 1, levnější), nebo uvést důvod pro europe-west3 (data v DE) |
| 31 | D4 ř. 100 | „souhlas 6 měs.“ (nastavení lišty Shoptetu) doplnit poznámkou, že ÚOOÚ považuje za přiměřené 12 měsíců – ať čtenář nezamění údaje |

---

## 6 Provedené opravy (8. 10. 2026)

Opravy P1 (#1–10) a P2 (#11–23) z kap. 5 zapracoval editor 8. 10. 2026. Čísla řádků odpovídají stavu před úpravou (kap. 2–5), po úpravách se mohla posunout. Kde se stejná chyba objevila i mimo uvedené řádky téhož souboru, je to v tabulce uvedené jako „navíc“.

| # | Soubory | Stav |
|---|---|---|
| 1 | LP 04 (Zdroje ř. 720), LP 05 (Zdroje ř. 638) | ✅ provedeno – „verze 2.0 přijata 7. 10. 2024“ |
| 2 | LP 06 (Zdroje ř. 576) | ✅ provedeno – řádek „khoder.cz / neověřeno“ nahrazen zdrojem napoveda.sklik.cz/…/zaciname-se-sem/caste-dotazy/ (ověřeno 10/2026) |
| 3 | LP 06 ř. 255, 447; LP 05 ř. 400, 655; LP 04 ř. 731 | ✅ provedeno – „Seznam ukončí podporu původních kódů v průběhu roku 2027; přesný termín oznámí s předstihem“; ve Zdrojích LP 04 a LP 05 doplněn odkaz na Časté dotazy Skliku |
| 4 | LP 13 ř. 25, 418, 555; E3 ř. 178, 366; F4 ř. 348 | ✅ provedeno – bez měsíce, zdroje: Graph API changelog v17.0 + …/conversions-api/offline-events; navíc E3 ř. 39 („5/2025“) a F4 Zdroje ř. 521 („5/2025“) |
| 5 | LP 04 ř. 439 | ✅ provedeno – „podle Googlu o 11 % víc signálů (měřeno načtením Google tagu, medián za 9.–16. 4. 2025)“ |
| 6 | B4 ř. 273 | ✅ provedeno |
| 7 | A3 ř. 124, 148 | ✅ provedeno – `generate_lead`; navíc A3 ř. 232 („`form_submit` / `generate_lead`“ → `generate_lead`) |
| 8 | E2 ř. 94 | ✅ provedeno – „17. 12. 2025 – 15. 6. 2026“, do zdroje přidán deprecations; navíc stejná chyba v E3 ř. 107 („leden–červen 2026“) |
| 9 | E2 ř. 278, 330; E3 ř. 365 | ✅ provedeno – chybový kód má vlastní řádek se zdrojem developers.google.com/google-ads/api/docs/deprecations; ppc.land zůstává jen u data spuštění Data Manager API (9. 12. 2025, sekundární) |
| 10 | LP 06 ř. 23, 444, 546, 567; LP 13 ř. 25; plán ř. 18; E1 ř. 52, 663; F4 ř. 346 | ✅ provedeno – „od 4/2026 data z tagu, Data Manageru i API současně, od 6/2026 jeden přepínač“; navíc LP 06 ř. 228 (tabulka platforem) a ř. 241, do Zdrojů LP 06 přidán answer/16884284. Pozn.: mimo tabulku zůstává „od 4/2026 jedno nastavení“ v E2 (ř. 67, 304, 307, 329, 366) a „od 4/2026 sjednocené“ v F4 Zdrojích (ř. 518) – sjednotit při revizi E2/F4 |
| 11 | LP 04 ř. 415, 570; B1 ř. 158, 290, 373; B3 ř. 65, 157, 250; B4 ř. 150, 232 | ✅ provedeno – jednotně „2 instance × ~45–50 USD ≈ 90–100 USD měsíčně; s load balancerem (~18 USD) a logy realisticky cca 110–150 USD měsíčně (ceník Google Cloud, ověřeno 10/2026)“, poznámka „europe-west3 = Tier 2“ v LP 04 a B1; navíc B3 ř. 126, 156, 175–177. Výpočet v tabulce T3 (B1, 94,6 USD) a popis grafu v B3 ř. 196 (~95 USD) ponechány – odpovídají výpočtu |
| 12 | LP 04 ř. 425, 727 | ✅ provedeno – „Google ji dřív nazýval first-party mode“; Zdroje: support.google.com/tagmanager/answer/4620708 (8. 5. 2025) |
| 13 | LP 05 ř. 513, 660 | ✅ provedeno – FAQ 7 a Zdroje podle A4 (blog.shoptet.cz/google-consent-mode-v2, akt. 6. 10. 2025). LP 12, A4 a D4 už tvrzení obsahují ve shodném smyslu, neupravovány. Zdroj Shoptetu kontrolor samostatně neověřoval |
| 14 | B6 ř. 169, 500 | ✅ provedeno |
| 15 | D4 ř. 67 | ✅ provedeno |
| 16 | LP 12 ř. 10, 85, 288, 316, 338, 357–360, 405 | ✅ provedeno – „Seznam Nákupy (dříve Zboží.cz)“ v briefu (ř. 10) a při první zmínce v textu stránky (ř. 288), jinde „Seznam Nákupy“; navíc ř. 435, 454, 512, 520–521. Zdroje ř. 651 (názvy integrací Shoptetu) ponechány |
| 17 | LP 01, 12, 13, 14, 15; E1, E4, H1, H2, H3; architektura ř. 23, 173 (navíc ř. 131); plán kap. 4; F5 ř. 289; G3 ř. 284 | ✅ provedeno – první zmínka „Data Studio (dříve Looker Studio)“, dál „Data Studio“, v diagramech „Data Studio“. Ponechány: klíčová slova (LP 13 ř. 65), titulky článků G1/G2 v odkazech (plán ř. 40, 86; F5 ř. 288; G3 ř. 283), URL a vysvětlení přejmenování (plán ř. 18, architektura ř. 183) |
| 18 | A1 ř. 471, A3 ř. 368, A7 ř. 235 | ✅ provedeno |
| 19 | LP 15 kap. F (F0, F4) | ✅ provedeno – hesla 13–41 po řádcích se závaznými slugy, nové heslo 42 `/slovnik/first-party-data` (E4); nové slugy `ga4`, `promenna`, `not-set-unassigned`; heslo „Data Studio (dříve Looker Studio)“ ponechává slug `/slovnik/looker-studio` (hledanost, odkazy v LP 07/08). Původní řádek 13–40 obsahoval 29 hesel → 1. vlna = 42 hesel (F0 a nadpis F4 upraveny). Kategorie, LP a článek u hesel 13–42 přiřadil editor – zkontrolovat. Kontrola odkazů `/slovnik/…` v 03–07 proti F4: 0 nesouladů |
| 20 | HP ř. 271 | ✅ provedeno |
| 21 | architektura kap. 1 a 1.1 | ✅ provedeno – 301 `/sluzby/datalayer`, `/blog/autor/{slug}` ve stromu, `/sluzby/firemni-skoleni-ga4-gtm` ve Fázi 2 |
| 22 | audit stagingu ř. 62 | ✅ provedeno |
| 23 | architektura ř. 212, LP 15 ř. 954, LP 12 ř. 671, HP ř. 198 | ✅ provedeno – https://developers.google.com/search/updates (záznamy 8. 5. 2026 a 15. 6. 2026) |
| 24–31 | P3 | neprováděno – ruční ověření před publikací podle kap. 5 (P3) |
