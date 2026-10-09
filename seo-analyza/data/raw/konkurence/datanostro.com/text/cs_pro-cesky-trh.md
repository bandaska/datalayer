# URL: https://datanostro.com/cs/pro-cesky-trh/

PRO ČESKÝ A SLOVENSKÝ TRH

# Server-side tracking, *postavený doma.*

Managed sGTM pro CZ/SK e-shopy a agentury. Sklik a Heureka jako nativní konektory, faktury v Kč s ISDOC exportem (Pohoda, Money S3, ABRA), podpora česky, hosting v EU. Bez FX poplatků, bez custom HTTP requestů pro Seznam, bez čekání na anglický support v jiném časovém pásmu.

[Vyzkoušet 14 dní zdarma](/cs/accounts/signup/)
[Domluvit demo](/cs/contact/)

## Pokud něco z toho znáte, jste na správné stránce

Tohle slýcháme od týmů, které k nám přicházejí od zahraničních managed sGTM dodavatelů.

* **💸 Faktura v dolarech, banka strhává FX poplatky**

  Účetní každý měsíc přepočítává kurz, banka si bere 0,5–2 %, audit pak otázky o intra-komunitárním DPH režimu.
* **🇨🇿 Sklik a Heureka jsou „custom HTTP request"**

  Globální dodavatel nemá native konektor. Vy nebo agentura ho musíte sestavit ručně, a když Seznam mění API, řešíte to sami.
* **🌐 Support je anglicky a v jiném časovém pásmu**

  Ticket v 9:00 ráno se zpracovává po obědě, kdy je v US ráno. Komplexní problém = den ztracený.
* **📍 Servery možná v EU, ale fakturuje USA subjekt**

  Schrems II / GDPR audit ptá: kdo je fakturační smluvní strana? Pokud je to US LLC, váš právní tým má DPA komplikace.
* **🧾 Žádný ISDOC, žádný import do Pohody**

  PDF faktura → ruční přepis do účetního systému → chyba v IČO → reklamace 14 dní.
* **🛒 Heureka XML feed proxy musíte řešit zvlášť**

  Heureka Měřík objednávek vyžaduje server-side ping. U globálního hostera = další custom integrace.

## Co s DataNostro místo toho dostanete

Nevyřešíme všechno, co řeší globální hráči. Vyřešíme dobře to, co potřebuje český trh.

### 🇨🇿 Native CZ/SK konektory

* **Sklik / Seznam SEM** — konverze + retargeting
* **Heureka** — Měřík objednávek + XML feed proxy
* **Seznam Brand Builder** — audience signal
* **Comgate / GoPay** — purchase event s payment status
* **Fakturoid / Superfaktura** — lead → invoice automation

### 🧾 Účetnictví podle CZ pravidel

* Faktura v Kč (volitelně €)
* Neplátce DPH § 4 z.č. 235/2004 Sb.
* ISDOC 6.0.2 export pro Pohoda / Money / ABRA
* Bankovní převod, žádný platební procesor
* 5 let retention dle § 35 z.č. 563/1991 Sb.

[Detail pro účetní →](/cs/pro-ucetni/)

### 🇪🇺 EU-only datová rezidence

* EU Tier III datacenter (Německo)
* Tracking pipeline data nikdy mimo EU/EHP
* Schrems II compliance bez SCC akrobacie
* ISO 27001 + 9001 (infrastructure inherited)
* GDPR DPA z české právní jurisdikce

[Trust Center →](/cs/trust/)

### 💬 Česká podpora

* E-mail v češtině, reakce do 4 h pracovní doby
* Telefon pro Enterprise klienty
* Stejné časové pásmo, stejné svátky
* Odpovídá zakladatel nebo lidé, kteří kód píší
* Žádný first-line outsource v Indii / Manile

[Kdo to provozuje →](/cs/o-nas/)

## Co se obvykle stane v prvních 30 dnech

Realistické očekávání pro tým, který přechází od zahraničního managed dodavatele.

1. DEN 1

   **Paralelní setup, žádný výpadek**

   Postavíme DataNostro projekt na samostatné subdoméně. Stávající setup u dodavatele zatím poběží — přepojí se až po validaci.
2. DEN 2-4

   **Souběžný test pravdou objednávkou**

   Stejný test event do obou platforem. Porovnáme atribuci v Meta Test Events + GA4 DebugView. Sklik / Heureka konektory zapneme native (tj. zaškrtnutí v dashboardu).
3. DEN 5-7

   **DNS cutover**

   CNAME → DataNostro. Předchozího dodavatele necháte běžet 3 dny jako safety net, pak zrušíte předplatné.
4. DEN 8-30

   **Hyper-care + první faktura v Kč**

   Sledujeme match rate, latence a chybovost denně. První faktura přijde na začátku následujícího měsíce — v Kč, s ISDOC, s IČO. Účetní si oddychne.

[Care balík — uděláme to za vás](/cs/care/)

## Časté otázky

Co když přijdeme o data při migraci?

Tracking data jsou v cílových platformách (GA4, Meta, Sklik), ne v sGTM hostingu. sGTM jen forwarduje. Po migraci data dál tečou do stejných platforem, takže grafy jsou kontinuální. Konfigurace (GTM workspace) je standardní JSON, který se exportuje a importuje 1:1.


Co Power-Ups (Cookie Keeper, Anonymizer, Bot Detection)?

Máme 13 vlastních Power-Upů, které pokrývají to, co používá většina týmů u zahraničních hosterů — Cookie Keeper, Bot Detection, Anonymizer, Custom Loader, Click ID Restorer. [Plný přehled](/cs/dashboard/power-ups/) v dashboardu, aktivace jedním klikem.


Co když nemáme Sklik / Heureka, jen GA4 a Meta?

Cílové publikum jsou CZ/SK e-shopy, ale platforma je univerzální — GA4, Meta CAPI, Google Ads, TikTok, LinkedIn, Microsoft Ads, Klaviyo, Reddit, Pinterest, Snapchat. Sklik a Heureka jsou pro nás odlišovatel, ne podmínka. Pokud je nepoužíváte, ostatní platformy fungují stejně dobře.


Cena oproti tomu, co teď platíte?

Pro většinu CZ/SK eshopů (do ~2M requestů/měsíc) je DataNostro o 30–50 % levnější — díky Kč fakturaci bez FX poplatků a tarify nastaveným na lokální koupěschopnost. Pro vyšší objemy (5M+) doporučujeme srovnat 1:1 — někdy je globální hráč konkurenceschopnější. Cenu řekneme upřímně. [Ceník](/cs/pricing/)


Můžeme vyzkoušet bez závazku?

Ano. 14 dní zdarma bez kreditní karty. Po 14 dnech buď zaplatíte přes fakturu, nebo se nic neděje — projekt se uvede do read-only stavu a data můžete kdykoliv exportovat.


A co kdybyste zítra zkrachovali?

Spravedlivá otázka pro malý tým. Odpověď v kostce: data si stáhnete jako ZIP kdykoli, sGTM kontejner je standardní Google obraz, GTM workspace je standardní JSON. Migrace na cokoli jiného řádově hodiny. Pro Enterprise je v kontraktu source-code escrow přes notáře. Plný plán kontinuity na [/o-nas/](/cs/o-nas/).

## Začněte měřit přesně tak, jak český trh očekává.

14 dní zdarma. Bez kreditní karty. Žádné devizové faktury, žádné anglické tickety, žádné custom HTTP requesty pro Sklik.

[Vytvořit účet zdarma](/cs/accounts/signup/)
[Domluvit demo se zakladatelem](/cs/contact/)

Dnes hostujete u zahraničního providera? Migrace bez výpadku — [ze Stape](/cs/migrace-ze-stape/), [z Addingwell](/cs/migrace-z-addingwell/), [z Google Cloudu](/cs/migrace-z-google-cloud/) nebo [odjinud](/cs/migrate/).