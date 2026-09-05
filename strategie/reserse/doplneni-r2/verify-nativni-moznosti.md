# 2. kolo – ověření: nativní možnosti nástrojů (co umí platforma zdarma vs. co musí dělat člověk)

Role: ověřovatel „nativní-možnosti“. Datum přístupu ke všem zdrojům: **2026-09-04**.
Ověřováno proti `reserse/05-nastroje-monitoring.md` § 2b a § 3a a proti závěrům v `02-shrnuti-a-zavery.md`.
Data: `data/fragments/r2-v5-evidence.csv` (31 řádků, EV5-001…EV5-031, phase=11),
`data/fragments/r2-v5-pricing.csv` (5 řádků, PV5-001…PV5-005 – jen opravené a nově nalezené ceny).

Metoda: každý zdroj otevřen znovu přímo (WebFetch; u JS stránek `curl` + extrakce textu, u facebook.com textový mirror
`r.jina.ai`). Kde číslo nebo věta na stránce dnes není, je verdikt `refuted` nebo `unreachable`, ne `confirmed`.
U tvrzení o **absenci** (např. „Google neposílá notifikaci“) bylo raw HTML prohledáno grepem na klíčová slova
`notif|alert|email|webhook`, aby šlo o doložené, ne domnělé „nic“.

---

## 1. Tabulka ověření

| # | Tvrzení (1. kolo) | Verdikt | Co je na zdroji dnes doslova | URL | Poznámka |
|---|---|---|---|---|---|
| 1a | GA4 custom insights: limit **50 na property** | **confirmed** | „You can create up to 50 custom insights per property.“ | https://support.google.com/analytics/answer/9443595 | číslo je na stránce doslova |
| 1b | Frekvence **hourly / daily / weekly / monthly**, hourly jen web | **confirmed** | „Choose how often data is evaluated per the condition you create: Hourly, Daily, Weekly, Monthly. Hourly evaluation is available only for web data.“ + „Hourly custom insights for app events are unavailable at this time“ | tamtéž | Google jako důvod uvádí, že zpoždění app eventů by vedlo k „false notifications“ |
| 1c | Posílá e-mail; kdo ho dostane | **confirmed** | „By default, all users on a property see all triggered custom insights in the Insight dashboard. If there are users who want to notify by email, then enter their email addresses.“ | tamtéž | **Výchozí stav = žádný e-mail.** Adresy se zadávají ručně, jiný kanál (Slack, webhook) v dokumentaci není. Retence insightů 1 rok. Podmínka „Has anomaly“ potvrzena. |
| 2 | Google **neposílá žádnou notifikaci** při zpoždění / nedoručení denního BQ exportu | **changed** | Stránka o exportu neobsahuje ani jednou slovo `notification`, `alert` ani `email` (ověřeno grepem raw HTML). Zůstává jen: „Typically exports mid-afternoon … but can be delayed until later in the day or the next day“ a „Streaming export is a best-effort operation“. **ALE** existuje sekce, kterou 1. kolo nezachytilo: „If you use the Daily or Fresh Daily export **with a 360 property**, Google Analytics sends a completeness signal that informs you when all of the previous day's data has been exported. … You can view the Completeness Signal in the Log Router section of Cloud Logging, which can be pushed to Cloud Pub/Sub topics.“ | https://support.google.com/analytics/answer/9358801 | Notifikace o **selhání** opravdu neexistuje. Existuje pozitivní log „export complete“, ale **jen pro GA4 360** a hlídat se musí jeho *nepřítomnost* – tj. E1 pořád potřebuje vlastní dotaz/alert. Pro standardní property (drtivá většina klientů DataLayer.cz) platí původní tvrzení beze změny. |
| 3a | BQ scheduled queries: e-mail při selhání + Pub/Sub | **confirmed** | „Check Send email notifications to allow email notifications of transfer run failures.“ / „For Pub/Sub topic, enter your Pub/Sub topic name…“ / „The minimum duration between scheduled queries is 5 minutes.“ | https://docs.cloud.google.com/bigquery/docs/scheduling-queries | e-mail jen o **selhání běhu**, ne o obsahu dat – potvrzeno |
| 3b | Dataform assertions a jejich alerting | **confirmed s upřesněním** | „An assertion is a data quality test query that finds rows that violate one or more conditions…“ / „Dataform runs assertions every time it updates your workflow and it alerts you if any assertions fail.“ / typy `nonNull`, `rowConditions`, `uniqueKey`, `uniqueKeys` | https://docs.cloud.google.com/dataform/docs/assertions | Dokumentace **neuvádí žádný notifikační kanál**. „Alerts you“ = selhání workflow v execution logs. Doručení do e-mailu/Slacku je další konfigurace (Cloud Logging + alerting policy). |
| 4a | GCP budget alerts – free tier, jak nastavit alert na náklady BQ | **confirmed (nově ověřeno)** | „the default alert thresholds are set at 50%, 90%, and 100% of the budget amount“ / „Services: In the Services field, select one or more services that you want to apply the budget alert to.“ / „sends alert emails to Billing Account Administrators and Billing Account Users“ / „You can also use Pub/Sub for programmatic notifications (for example, to forward your budget messages to other mediums such as Slack…)“ / „up to 50,000 budgets“ | https://docs.cloud.google.com/billing/docs/how-to/budgets | 1. kolo mělo „neověřeno“. **Rozpočet lze omezit jen na BigQuery** → E2 jde nativně a zdarma. Stránka neuvádí žádný poplatek. Zásadní věta: „**Setting an alerts-only budget doesn't automatically cap Google Cloud … usage or spending**“ – alert nezastaví utrácení. |
| 4b | Cloud Monitoring: cena alerting policies, účinnost 1. 9. 2027 | **changed / oprava** | „**Starting no sooner than September 1, 2027**, Cloud Monitoring will begin charging for alerting. … $0.35 per month for each metric reference in an alerting policy. $0.50 per 1,000,000 points…“ + „Execution of Monitoring uptime checks $0.30/1,000 executions \| 1 million executions per Google Cloud project“ + „First 50 GiB/project/month“ | https://cloud.google.com/stackdriver/pricing | 1. kolo psalo „nejasné, zda platí už teď“. **Neplatí – alerting je dnes zdarma.** Kompletní monitoring sGTM na Cloud Run vyjde na 0 Kč až do 9/2027. Zapsáno jako PV5-002. |
| 5a | Looker Studio Pro umí alerty na hodnoty | **confirmed** | „You can set up an alert that will notify you and your stakeholders when a chart on your Data Studio report meets criteria that you specify.“ / „The features and functionality described in this page are available to Data Studio Pro users.“ / „sends an email notification from looker-studio-noreply@google.com to all recipients“ / „Alert conditions don't support OR logic.“ | https://docs.cloud.google.com/looker/docs/studio/create-alerts-on-a-chart | Frekvence = pole **Repeat** (denně/týdně/měsíčně/Custom) → **žádná hodinová detekce**, slabší než GA4 custom insights |
| 5b | Cena Looker Studio Pro per user – v 1. kole „neuvedena“ | **changed / oprava** | „Looker Studio – No charge“ … „Looker Studio Pro (Project subscription) … **$9 per user per project per month**“ | https://cloud.google.com/looker-studio | Cena JE veřejná, jen ne v docs. **207 Kč/uživatel/projekt/měs** (kurz 23). Oprava P6-125, zapsáno jako PV5-001. |
| 5c | Umí Looker Studio upozornit na **rozbitý zdroj dat**? | **refuted (opačně, než by člověk čekal)** | „If the report changes such that the alert condition would no longer have the same meaning, Data Studio Pro **deactivates the alert** the next time the alert runs… The following changes can trigger alert deactivation: **The alert condition query failed to run.** … **The underlying data source of an alert condition was deleted.** … A field in the alert condition was deleted from the underlying data source.“ | tamtéž | **Nejsilnější nález 2. kola k F1.** Když se zdroj rozbije, alert se sám vypne. Majitel dostane jediný e-mail o deaktivaci a pak už nic. Nástroj, který měl hlídat, přestane hlídat právě ve chvíli, kdy je potřeba. |
| 6a | Google Ads: existují stavy konverzních akcí („Tag inactive“, „No recent conversions“) | **confirmed – mezera 1. kola zaplněna** | „**Unverified:** We haven't verified that your tag has been put on your website yet.“ / „**No recent conversions:** We've seen your conversion tracking tag, but haven't recorded any conversions **in the last 7 days**.“ / „**Recording conversions:** We've seen your conversion tag and recorded conversions within the last 7 days.“ / „**Tag inactive:** We no longer see your tag, and haven't recorded any conversions in the last 7 days.“ / „If we recorded conversions before, but they stopped, something may have changed with your website or ad campaigns.“ | https://support.google.com/sa360/answer/9780742 | 1. kolo stránku nenašlo. Stejné definice platí pro Google Ads. **Prahem je 7 dní.** |
| 6b | Notifikují stavy e-mailem? | **refuted** | Kategorie e-mailových notifikací Google Ads: „Performance reporting … Newsletter … Google market research … Customized help and performance suggestions … Special offers … Campaign maintenance … Disapproved ads and policy alerts … Reports … Billing alerts“ | https://support.google.com/google-ads/answer/1704338 | **Žádná kategorie pro měření konverzí ani pro nefunkční tag.** Zamítnutou reklamu a fakturu Google pošle mailem, mrtvý purchase tag ne. |
| 6c | Diagnostika rozšířených konverzí | **confirmed (nově)** | stavy „Excellent / Good / Needs attention / **No recent data** – enhanced conversions have not recorded data in the last 7 days“; „The alerts displayed in the diagnostic report are based on the past one day of data unless there isn't enough data…“ | https://support.google.com/google-ads/answer/11956168 | denní okno, ale zase **jen obrazovka**, kterou musí někdo otevřít |
| 7a | Meta Events Manager: diagnostika a EMQ existují | **confirmed** | „Event Match Quality is scored from 1 to 10 … aim for an Event Match Quality score of 6.0 or higher“ / „Rate of Events Deduplicated“ / „a warning will appear when your deduplication rate is too low“ | https://developers.facebook.com/documentation/ads-commerce/conversions-api/verifying-setup | varování se „objeví“ v UI, nikam se neposílá |
| 7b | Diagnostics tab – jak funguje | **confirmed (nově doloženo)** | „**Active**: If an issue has been detected in the last 24 hours…“ / „**Previously detected**: If you don't interact with an issue within 3 days of first detection, the issue will appear in Previously detected. **When the issue is moved to Previously detected, instructions to resolve the issue are removed.** We suggest regularly monitoring your diagnostics issues…“ | https://www.facebook.com/business/help/667164051342757 | Meta po 3 dnech nečinnosti **odebere návod na opravu**. Explicitně počítá s lidskou rutinou. |
| 7c | Meta **neposílá** notifikace při výpadku eventů | **refuted** | „**You may receive alerts about a significant drop in website event traffic from the Meta Pixel. We send these notifications only when event counts used in campaigns or audiences drop substantially compared to one week ago and the seven-day average.**“ | https://www.facebook.com/business/help/254018658815388 | **Tvrzení 1. kola neplatí.** Meta notifikace posílá – ale jen při „substantial“ propadu, jen pro eventy použité v kampaních/publikách, proti týdnu zpět a 7dennímu průměru. Částečný výpadek jednoho eventu ani pokles o 20 % takto nechytíte a citlivost se nedá nastavit. |
| 8a | GTM: **žádný webhook** na publish | **confirmed** | Dokumentace GTM API v2 obsahuje „create, preview and publish a Version“ a **nula** výskytů slov `webhook`, `notification`, `subscription`, `push` | https://developers.google.com/tag-platform/tag-manager/api/v2 | strojově se publish dá zjistit jen pollingem API |
| 8b | „Kdo hlídá publish, musí pollovat API“ / kdo dostane e-mail o změně kontejneru | **refuted (podstatná oprava)** | „**A version is published** … **A new version is created but not published** … A workspace is sent for approval … **Notifications are sent as emails addressed to your Google user account.** … Each Tag Manager user can turn on and adjust their own notification preferences. … notifications will be sent only when a container is published to your live production environment (i.e. not a custom environment such as ‚QA‘ or ‚Dev‘).“ | https://support.google.com/tagmanager/answer/9713667 | **GTM e-mailové container notifications existují** a pokrývají i vytvoření nepublikované verze. Jsou **per-uživatel, defaultně vypnuté**, lze nastavit globální default pro všechny kontejnery, ke kterým má člověk přístup. Pro DataLayer.cz to znamená: A3 se dá pokrýt na 0 Kč bez pollingu – stačí být uživatelem kontejneru a zapnout to. Zapsáno jako PV5-005. |
| 9a | Sklik / Seznam: **žádná diagnostika měření** („Sklik nemá žádný nástroj – ruční“) | **refuted** | „**Diagnostika měření** vám pomáhá zkontrolovat kvalitu dat, která odesíláte do Skliku prostřednictvím SEM hitů. … Diagnostika zobrazuje agregované statistiky **za posledních 30 dní (vždy do půlnoci předchozího dne)**. … Podíl hitů se souhlasem … Podíl hitů s identitou … **Chyby validace** … **Data jsou dostupná se zpožděním** (do půlnoci předchozího dne). … Při zjištění problému: Zkontrolujte implementaci měření. Ověřte nastavení souhlasů (CMP). **Kontaktujte svého analytika nebo vývojáře.**“ | https://napoveda.sklik.cz/merici-skripty/seznam-event-measurement/zaciname-se-sem/diagnostika-mereni/ | **Tvrzení 1. kola je vyvráceno.** Sklik má v novém Seznam Event Measurement plnou diagnostiku (na webu označena „Nové“). Ale: jen UI, agregace 30 dní, data do půlnoci předchozího dne, **žádná notifikace**. A Sklik sám v doporučeních píše „Kontaktujte svého analytika nebo vývojáře“ – tedy předpokládá, že takového člověka klient má. Zapsáno jako PV5-004 (0 Kč). |
| 9b | Sklik: jakákoli notifikace o měření | **confirmed (že není)** | „Systém Sklik rozesílá **dva typy** informačních zpráv… Zpráva o **zablokování reklamy** … Zpráva o **poklesu kreditu** ve vaší Peněžence pod hranici 10 Kč“ | https://napoveda.sklik.cz/sklik-ucet/emailova-oznameni/ | Přesně dva typy e-mailů. O měření, konverzích ani chybách SEM hitů nic. Stejný vzorec jako Google Ads: **peníze a reklama = e-mail, měření = ticho.** |
| 9c | Seznam Event Measurement jako CZ deadline / spouštěč | **nové** | „SEM můžete aktivovat přímo v administraci e-shopu pomocí nativního modulu… stačí doplnit identifikátor a zapnout měření.“ + „Při přesunu provozovny do jiného Sklik účtu **kombinované SEM ID zaniká**. Budete na to upozorněni a budete muset aktualizovat SEM ID ve své implementaci.“ | https://napoveda.sklik.cz/…/e-commerce-platformy/ , https://napoveda.sklik.cz/…/sprava-konverzi/ | Migrace na SEM je česká obdoba „consent mode v2 deadlinu“ – dá se hlídat za klienta. Zánik SEM ID při přesunu provozovny je ryze český `ad_platform_change` spouštěč, na který neexistuje nástroj. |
| 10a | Shoptet: nativní GA4/GTM napojení a co se rozbíjí | **confirmed + doplněno** | „Pokud vidíte návštěvy, ale chybí některé události (např. purchase), **nejčastější příčinou je duplicitní nebo konfliktní měření**. … Měřicí kód může být nasazen: V administraci Shoptetu … Pomocí HTML editoru … Přes Google Tag Manager. **Napojení přes administraci Shoptetu již zajišťuje správné vložení měřicích kódů, proto není potřeba a je nežádoucí je přidávat i jinými způsoby.**“ + „Před nasazením nové cookie lišty (od 1. 1. 2022) se data zpravidla rozcházely maximálně o 10 %. Po nasazení nové cookies lišty může být rozdíl ještě vyšší…“ | https://podpora.shoptet.cz/nastaveni-google-analytics/ | Shoptet sám učí e-shopaře, že rozdíl GA4 vs. e-shop je normální → `revenue_mismatch` se schová a `time_to_notice` se prodlouží. Nativní dataLayer je vlastní formát `dataLayer[0].shoptet` (pageType, currency, cart, product), **ne** GA4 ecommerce – mapování v GTM je vždy práce a je citlivé na změnu šablony (https://developers.shoptet.com/shoptet-tools/data-layer/). |
| 10b | Shoptet: **existuje changelog pro partnery?** | **confirmed – ano, včetně strojově čitelných feedů** | „Stay updated with the latest news from our developer portal through our **machine-readable RSS and JSON feeds**. API News: RSS Feed, JSON Feed. Frontend News: RSS Feed, JSON Feed.“ + každé vydání má sekci „**Breaking Changes**“ (např. „Frontend News from July 21, 2026: Breaking changes – Legacy mobile header removal (via Deferred Template Updates)“) | https://developers.shoptet.com/news/ (feedy: `/category/api/feed`, `/category/frontend-unsorted/feed`) | Navíc veřejný changelog https://www.shoptet.cz/novinky-a-changelog/ a status stránka https://www.shoptetstatus.com. **„Hlídání deadlinů Shoptetu za klienta“ je reálně zautomatizovatelné** – a v ČR to podle 1. kola nikdo nenabízí. |
| 10c | Upgates: nativní GA4/GTM napojení | **confirmed + doplněno** | „Naše propojení je řešené přes javascript, **nejedná se o server-side**. … Podporované události GA4: view_item, purchase, add_to_cart, view_cart, begin_checkout, add_shipping_info, add_payment_info“ + u GTM: „Do dataLayeru posíláme: Zobrazení detailu produktu. Přidání/odebrání produktu do/z košíku. Dokončení objednávky (Purchase).“ + „Při použití GTM a zároveň Global site tag (GST) … by mohlo docházet k chybnému zpracování dat v systémech Googlu – **duplikaci konverzí, používání nesprávných částek** apod.“ + „**Pozor!** při implementaci vlastních scriptů může dojít ke kolizi se systémovými scripty, která může zapříčinit **nefunkčnost … dokončení objednávky**.“ | https://www.upgates.cz/a/pruvodce-propojeni-google , https://www.upgates.cz/a/propojeni-s-google-tag-managerem | Nativně jen 7 GA4 událostí (chybí `view_item_list`, `select_item`, `remove_from_cart`, `refund`, `login`…), přes GTM jen 3. **Nápověda Upgates navíc dodnes instruuje zkopírovat ID ve tvaru `UA-12345678-1`**, tedy formát zrušené Universal Analytics – dokumentace platformy je zastaralá. |
| 10d | Upgates: changelog pro partnery | **confirmed částečně** | „Aktualizace systému verze 36 … verze 35.1 … verze 35 – Dokončený redesign administrace…“ | https://www.upgates.cz/aktualizace-2026 | Veřejný changelog po verzích + stránka dostupnosti ano, ale **žádný vývojářský portál s RSS/JSON ani sekce „Breaking changes“** – sledování změn Upgates je ruční práce. |

**Souhrn verdiktů (26 ověřovaných tvrzení):** 18 confirmed, 8 refuted / changed (2, 4b, 5b, 5c, 6b, 7c, 8b, 9a), 0 unreachable.
Žádný zdroj nezůstal nedostupný – u čtyř URL z 1. kola bylo nutné najít novou adresu (viz § 4).

---

## 2. Co se v obrazu „nástroj vs. člověk“ mění

### 2.1 Tři tvrzení 1. kola, která už neplatí

1. **„Meta neposílá žádné push notifikace“ → neplatí.** Meta posílá alert při „significant drop“ eventů. Nabídka
   DataLayer.cz nesmí tvrdit, že Meta mlčí. Správná formulace: *„Meta vás upozorní, až když objem propadne výrazně
   proti týdnu zpět – ne když se rozbije jeden event nebo když přestanou chodit hodnoty.“*
2. **„GTM nemá žádnou notifikaci při publish, musí se pollovat API“ → neplatí.** GTM umí e-mailové container
   notifications na publish i na vytvoření verze. Webhook opravdu neexistuje, ale polling API není potřeba.
   Pro službu to je **zlevnění**, ne oslabení: A3 se dá pokrýt zdarma zapnutím notifikací u všech klientských
   kontejnerů. Diferenciátor zůstává **changelog v lidské řeči a review cizího publishe**, ne detekce.
3. **„Sklik nemá žádný nástroj, D3 je čistě ruční“ → neplatí.** Sklik má Diagnostiku měření v SEM. Diferenciátor
   se posouvá z „jediní to vidíme“ na „**jediní se na to koukáme každý den a reagujeme**“ – protože diagnostika je
   jen obrazovka s daty do půlnoci předchozího dne a Sklik k ní sám dopisuje „Kontaktujte svého analytika“.

### 2.2 Dva nálezy, které argument naopak zesilují

1. **Looker Studio alert se při rozbitém zdroji vypne** („The alert condition query failed to run“ → deaktivace).
   To je nejlepší doslovný důkaz H2 z celého 2. kola: nástroj, který měl hlídat, přestane hlídat právě tehdy, když
   se něco rozbilo. Použitelné jako věta na web.
2. **Prahy platforem jsou 7denní.** Google Ads označí tag za „Tag inactive“ až po 7 dnech bez konverze; Meta
   porovnává s týdnem zpět a 7denním průměrem; enhanced conversions hlásí „No recent data“ po 7 dnech. Tvrzení
   1. kola „zjistili jsme to za 2 týdny až 3 měsíce“ má tedy **strukturální příčinu doloženou dokumentací**, ne jen
   anekdotu: nejrychlejší nativní signál je z principu týdenní a je to obrazovka, ne zpráva.

### 2.3 Aktualizace tabulky § 2b reportu 05 (co se mění)

| Řádek § 2b | Bylo | Má být |
|---|---|---|
| GA4 → BQ export | „Google neposílá žádnou notifikaci o zpoždění/výpadku“ | totéž pro **standardní** property; pro **360** existuje completeness signal v Cloud Logging (push do Pub/Sub), hlídá se jeho nepřítomnost |
| Cloud Monitoring | „alerting 0,35 USD/měs za metric reference (účinnost 1. 9. 2027)“ | **alerting je dnes zdarma**, zpoplatnění „no sooner than September 1, 2027“ |
| Looker Studio / Pro | „cena per user neuvedena – ověřit“ | **9 USD/uživatel/projekt/měs**; alerty jen Pro; frekvence denně a řidčeji; **při rozbitém zdroji se alert deaktivuje** |
| GTM verze + API v2 | „žádný webhook/push na publish – nutno pollovat API“ | webhook ne, **e-mailové container notifications ano** (publish i nepublikovaná verze, per-uživatel opt-in, volitelně jen live) |
| Google Ads – stav konverzní akce | „stránku se stavy se nepodařilo najít – neověřeno“ | **ověřeno**: Unverified / No recent conversions / Recording conversions / Tag inactive, práh **7 dní**; v e-mailových kategoriích Google Ads **není** kategorie pro měření |
| Meta Events Manager | „dokument nezmiňuje žádné push notifikace → kontrola je ruční“ | **alerty na výrazný propad eventů existují** (proti týdnu zpět a 7dennímu průměru, jen pro eventy v kampaních/publikách); EMQ, dedup a freshness notifikace nemají; nevyřešené issues po 3 dnech ztratí návod na opravu |
| (nový řádek) Sklik / SEM | – | **Diagnostika měření**: hity dle event_name, podíl se souhlasem, podíl s identitou, chyby validace; 30 dní agregovaně, data do půlnoci předchozího dne, **bez notifikací**; e-mailem Sklik posílá jen 2 typy zpráv |
| (nový řádek) GCP budget alerts | „neověřeno“ | prahy 50/90/100 %, **rozpočet lze omezit jen na BigQuery**, e-mail billing adminům, Pub/Sub → Slack; **alert neutne utrácení** |

### 2.4 Aktualizace sloupce „Auto“ v § 3a

- **A3 (verzování GTM, changelog): Č → Č, ale detekce je nově A** (container notifications zdarma). Člověku zůstává
  popis verze, changelog pro klienta a review cizího publishe.
- **D1 (Google Ads import/EC): Č potvrzeno**, nově doloženo: stav konverzní akce + diagnostika EC zdarma, ale
  s 7denním/denním oknem a bez notifikace.
- **D2 (Meta): Č → Č s tím, že detekce hrubého propadu je A** (Meta alert), ale detekce částečné ztráty zůstává N.
- **D3 (Sklik): N → Č.** Diagnostika existuje, reakce a denní kontrola ne.
- **E2 (náklady BQ): A potvrzeno a zlevněno** – budget alert na službu BigQuery zdarma; reakce (optimalizace dotazu)
  zůstává člověku a alert sám utrácení nezastaví.
- **F1 (údržba dashboardů): Č → N pro detekci rozbitého zdroje.** Looker Studio Pro rozbitý zdroj nejen nehlásí,
  ale kvůli němu vypne i existující alerty. Hlídání funkčnosti reportů je čistě lidská práce (nebo vlastní kontrola).
- **G5 (uptime sGTM): A a zdarma do 9/2027** (uptime checky 1 mil./měs + alerting policies dnes bez poplatku).

---

## 3. Dopad na závěry

### 3.1 Mění se cenová pásma 8–10 / 16–23 / 35–45 tis. Kč?

**Ne.** Žádný z 31 ověřených bodů není cena lidské správy – všechny jsou ceny nebo vlastnosti **nástrojů**.
Pásma z 1. kola stojí na 352 cenových bodech od agentur a freelancerů v ČR/SK/EU a 2. kolo v této roli s nimi
nehýbe. Konkrétně:

- **8 900 / 19 900 / 39 000 Kč zůstává beze změny.**
- Mění se jen **nákladová strana tierů**, a to směrem dolů: Cloud Monitoring alerting je dnes zdarma
  (ne 0,35 USD/metric reference), GTM container notifications jsou zdarma a nahrazují polling API, GCP budget
  alerts jsou zdarma a lze je zúžit na BigQuery, Sklik diagnostika je zdarma. Interní odhad „náklady na nástroje
  do 3 000 Kč/klient/měs“ (doporučení 5 v reportu 05) je tím spíš potvrzený – u tieru bez BQ se dá vystačit
  s nižšími stovkami korun.
- Jediná **nová** položka na straně nákladů: pokud by DataLayer.cz stavěl reporting na Looker Studio Pro kvůli
  alertům, je to **207 Kč/uživatel/projekt/měs** – zanedbatelné, ale zároveň je to nástroj, který se při rozbitém
  zdroji vypne, takže se na něj jako na alerting vrstvu **nedá spolehnout**. Doporučení: alerty držet v GA4 custom
  insights (hourly, zdarma) a v BQ scheduled queries, ne v Looker Studiu.

### 3.2 Mění se hranice „nástroj vs. služba“ (H5)?

**Ne, potvrzuje se – ale posouvá se argument.** Nativní detekce je ještě širší a levnější, než 1. kolo tvrdilo
(Sklik, Meta, GTM, budget alerts). Tím ale **klesá hodnota tvrzení „my to uvidíme“** a roste hodnota tří věcí,
které dokumentace platforem doslova nechává na člověku:

1. **Rychlost proti 7dennímu prahu platforem.** Google Ads, Meta i enhanced conversions pracují se 7denním oknem.
   Slib „víme to do 24 hodin“ je tím kvantifikovatelně lepší než všechno, co platforma nabídne zdarma.
2. **Doručení a příjemce.** GA4 insights defaultně neposílá nikomu, GTM notifikace jsou defaultně vypnuté,
   Sklik diagnostika je jen obrazovka, Meta issue po 3 dnech ztratí návod. **Nastavit, komu to chodí, a číst to** je
   služba, ne funkce.
3. **Reakce (G7).** Potvrzeno nově i doslovným textem dodavatelů: Sklik píše „Kontaktujte svého analytika nebo
   vývojáře“, Meta „We suggest regularly monitoring your diagnostics issues“, GCP „alerts-only budget doesn't
   automatically cap … spending“. Všechny tři platformy explicitně počítají s tím, že za obrazovkou stojí člověk.

### 3.3 Mění se závěr „BigQuery je zlom mezi tiery, ne podmínka vstupu“?

**Ne, zesiluje se.** Bez BQ jde nativně a zdarma pokrýt: G1/G3/C4/D4 (GA4 custom insights, hourly), A3 (GTM
notifikace), G5/A5 (Cloud Monitoring), D1 (stavy konverzí Google Ads), D2 (Meta alert + diagnostika), D3 (Sklik
diagnostika). To je **plnohodnotný obsah tieru Hlídání za 8 900 Kč** postavený na 0 Kč nástrojů – marže tieru je
tedy zdravá a cena obhajitelná prací, ne licencemi.
BigQuery zůstává zlom pro E1/E2/G2/G6 a pro forenzní dohledání – a nově s nuancí, že i **completeness signál
existuje jen pro GA4 360**, takže standardní BQ klient si monitoring exportu musí postavit sám (nebo koupit).

### 3.4 Co z toho jde rovnou použít v nabídce

- Věta na web: *„Google Ads označí váš měřicí tag za neaktivní až po 7 dnech bez konverze. Meta vás upozorní,
  až když objem propadne výrazně proti minulému týdnu. Sklik vám ukáže chyby měření na obrazovce, kterou nikdo
  neotevírá. My se díváme každý den.“* (vše doložené EV5-013, EV5-017, EV5-021)
- Věta k reportům: *„Alert v Looker Studiu se při rozbitém zdroji sám vypne.“* (EV5-012)
- Do onboardingu zařadit **zapnutí GTM container notifications** a **zadání adres u GA4 custom insights** jako
  první dva kroky – obojí je zdarma a bez toho nefunguje ani nativní vrstva.
- Do „hlídáme deadliny za vás“ zařadit strojově: RSS/JSON feedy Shoptet Developers (`Breaking Changes`) a
  ručně stránku Aktualizace systému Upgates; do CZ kalendáře přidat migraci Seznam Event Measurement.

---

## 4. Zdroje nedostupné nebo problémové

| Zdroj | Stav | Co s tím |
|---|---|---|
| `https://cloud.google.com/looker-studio/pricing` | **404** | cena nalezena na `https://cloud.google.com/looker-studio` |
| `https://docs.cloud.google.com/looker/docs/studio/looker-studio-pro-pricing` a `.../looker-studio-pro-billing` | **404** | dtto |
| `https://support.google.com/google-ads/answer/2998031` a `/12674892` | 200, ale **definice stavů tam nejsou** | definice nalezeny v SA360 nápovědě `/sa360/answer/9780742` (identické znění) |
| `https://www.facebook.com/business/help/*` | přes WebFetch vrací **jen titulek** (JS) | staženo přes textový mirror `r.jina.ai`; mirror později začal vracet 401 (rate limit) – pro reprodukci použít prohlížeč |
| `https://napoveda.sklik.cz/mereni-konverzi/` (URL z 1. kola) | **404** | struktura nápovědy se změnila; platné jsou `/merici-skripty/…` a `/mereni-uspesnosti/…` |
| `https://napoveda.shoptet.cz/…` | **301 → podpora.shoptet.cz** | doména nápovědy Shoptetu se přesunula |
| `https://cloud.google.com/bigquery/docs/scheduling-queries`, `/dataform/docs/assertions` | **301 → docs.cloud.google.com** | obsah shodný |
| Cloud Observability pricing přes WebFetch | vráceno **zkrácené** („Content truncated“) | staženo `curl` + extrakce textu; čísla ověřena v raw HTML |

## 5. Co zůstalo neověřené

- **Kolik e-mailových adres lze zadat u jednoho GA4 custom insightu** – dokumentace limit neuvádí.
- **Zda Meta alert o propadu chodí e-mailem, do Business Suite notifikací, nebo obojí** – stránka říká jen
  „You may receive alerts“, kanál nespecifikuje.
- **Frekvence vyhodnocení Looker Studio alertu pod úrovní „denně“** – pole Repeat nabízí denně/týdně/měsíčně/Custom,
  dokumentace neuvádí, zda Custom umožňuje i vícekrát denně.
- **Zda Shoptet mění nativní dataLayer bez ohlášení ve Frontend News** – feed sekci „Breaking changes“ má, ale
  historii změn dataLayeru jsme neprocházeli (mimo rozsah 2. kola).
- **Upgates: zda existuje neveřejný partnerský changelog** – veřejně jen stránka Aktualizace systému.
