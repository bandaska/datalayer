# URL: https://datanostro.com/cs/eu-residency/

🇪🇺
EU DATA RESIDENCY · GDPR-ONLY

# Server-side tracking *kompletně* hostovaný v Evropské unii.

Každý sGTM kontejner, každá log řádka, každý záznam zákazníka zůstává uvnitř EU — fyzicky, právně i provozně. Provozuje česká firma na evropské infrastruktuře (Německo). Žádné Schrems II riziko, žádný americký sub-processor v datové vrstvě, žádný „regionální fallback do *us-east-1* ve špičce".

100 %

EU datová vrstva

DE 🇩🇪

EU Tier III datacentrum (Německo)

CZ 🇨🇿

Český provozovatel

[Spustit zkušební verzi zdarma](/cs/accounts/signup/)
[Trust Center](/cs/trust/)

PROČ TO ROZHODUJE

## EU residency je dnes vstupní podmínka, ne checkbox.

Po rozsudku Schrems II (2020) se standardní přenos dat EU → USA stal právně nejistý. Procurement týmy v Německu, Rakousku, Francii i Nizozemsku blokují SaaS dodavatele s americkou matkou bez ohledu na to, kde jsou data „nastavena". DataNostro tuto otázku úplně odstraňuje.

### EU jurisdikce, bez výjimek

Provozovatel je český plátce DPH, infrastrukturu poskytuje provozovatel Tier III datacentra v Německu. Žádná americká mateřská firma, žádné FISA 702 riziko, žádný dosah CLOUD Act.

### Jeden hostingový region

EU Tier III datacentrum (Německo). Tam běží každý zákaznický kontejner. Žádná multi-regionální replikace, která by mohla při failoveru přelít data mimo EU.

### DPA + SCC v ceně

Smlouva o zpracování osobních údajů (DPA) se podepisuje při registraci, žádné papírování navíc. Standard Contractual Clauses pro velmi úzký okruh EU → EU sub-processorů (Cloudflare pouze pro CDN marketingového webu).

### Tracking provoz se neukládá

DataNostro je proxy — přeposíláme vaše eventy na platformy, které si nastavíte (GA4, Meta atd.), a tělo requestu neukládáme. Jen debug capture (15denní retence, opt-in) a SLA monitoring.

### Disky šifrované LUKS

Každý datový svazek je šifrovaný LUKS / AES-256 at-rest. Postgres zálohy šifrované PGP, retence 30 dní, obnova testovaná měsíčně.

### Compliance roadmapa veřejně

ISO 27001 zděděna na úrovni infrastruktury; vlastní audit ISO 27001 pro DataNostro je naplánovaný na Q4 2026. Trust Center udržuje aktuální stav každého tvrzení.

SUB-PROCESSOŘI

## Tři. A nic víc.

Pro srovnání: typický SaaS dodavatel jich má 30+, půlka v USA.

| Sub-processor | Účel | Země | EU/SCC |
| --- | --- | --- | --- |
| **EU Tier III datacentrum (Německo)** | Compute, storage, síť pro sGTM kontejnery + databázi | 🇩🇪 Německo (Tier III DC) | EU jurisdikce |
| **Cloudflare, Inc.** | CDN pro marketingový web `datanostro.com` — nikdy pro tracking provoz | 🇺🇸 USA (s EU edge) | SCC + DPA podepsané |
| **Seznam.cz, a.s.** | Doručování transakčních e-mailů (SMTP) | 🇨🇿 Česká republika | EU jurisdikce |

Nápadně chybí: AWS, GCP, Vercel, Supabase, Clerk, PostHog, Segment, Stripe data-pipeline. Tyto služby nepoužíváme.

ARCHITEKTURA

## Jak tracking event prochází DataNostrem.

1. 1

   ### Prohlížeč zavolá vaši tracking subdoménu

   Např. `track.vas-eshop.cz` — CNAME míří na `*.sst.datanostro.com` do EU Tier III datacentra (Německo). TLS terminuje na evropské půdě.
2. 2

   ### Váš sGTM kontejner event zpracuje

   Izolace per tenant pomocí Docker network namespace + iptables. Paměť i CPU jsou omezené kvótami, takže hlučný soused vám nesebere zdroje. V tomto kroku běží i power-ups (Anonymizer, Bot Detection, Click ID Restorer).
3. 3

   ### Event putuje na nastavené ad / analytics platformy

   GA4, Meta CAPI, Google Ads, TikTok Events API, Sklik, Heureka — co máte nastavené. Od tohoto bodu jsou data na infrastruktuře dané platformy a podléhají vašim stávajícím DPA s touto platformou. **DataNostro tělo requestu neukládá.**
4. 4

   ### Volitelně: 15denní debug capture (opt-in)

   Při prvních týdnech nasazení obvykle potřebujete vidět plné payloady. Zapněte *Debug capture*; uložíme celý request + dispatch trace do EU Postgresu na 15 dní a pak smažeme. Ve výchozím stavu vypnuté.

FAQ

## Otázky pro procurement, srozumitelné odpovědi.

Kde jsou data fyzicky uložená?

EU Tier III datacentrum (Německo). Jeden region. Zálohy na samostatném EU svazku ve stejném regionu. Mimo region nereplikujeme. Konkrétní lokalita uvedena v DPA (seznam sub-processorů).


Týká se vás Schrems II?

Ne — datová vrstva nemá žádné americké sub-processory. Marketingový web (datanostro.com landing pages) jede přes Cloudflare s EU edge + SCC, což je známé a omezené vystavení. Tracking data zákazníků se Cloudflare nikdy nedotknou.


Podepisujete DPA?

Ano. Standardní DPA je automaticky součástí registrace; pro Enterprise zákazníky podepisujeme upravenou DPA na míru. Viz [naše DPA](/cs/dpa/) a [Trust Center](/cs/trust/).


Kdo firmu vlastní?

DataNostro provozuje Jan Malatinský, OSVČ s českým DIČ (IČO 19152361, sídlo Karviná, CZ). Bootstrap, žádní zahraniční investoři, žádná americká matka. Výpisy z rejstříku pro váš procurement na vyžádání dodáme.


A co ISO 27001 / SOC 2?

ISO 27001 zděděno na úrovni infrastruktury. Vlastní audit ISO 27001 pro DataNostro je naplánován na Q4 2026 — aktuální stav vidíte v [Trust Center](/cs/trust/). SOC 2 zatím v plánu nemáme (americký standard, evropští zákazníci ho nepožadují).


Můžeme udělat vendor risk assessment?

Ano — [Trust Center](/cs/trust/) pokryje ~70 % standardních SIG-Lite otázek rovnou. Na zbytek napište na [[email protected]](/cdn-cgi/l/email-protection#e794828492958e939ea783869386898894939588c984888a) s vaším dotazníkem a odpovíme do 3 pracovních dní.

## Připraveni, až bude připravený váš procurement.

14denní zkušební verze zdarma, EU residency od prvního dne. Technické nasazení zahájíte paralelně s tím, jak váš právní tým prochází DPA.

[Spustit zkušební verzi zdarma](/cs/accounts/signup/)
[Promluvit s enterprise sales](/cs/contact/?topic=enterprise)