# URL: https://datalayer.vitnovotny.cz/jak-pracujeme

1. [Úvod](/)
2. Jak pracujeme

postup spolupráce

# Pět kroků od úvodní konzultace po předané měření

Každý projekt má stejnou kostru o pěti krocích. Nejdřív zjistíme, co dnes měříte, pak se dohodneme, co má měření sledovat, a teprve potom nastavujeme tagy. Na konci dostanete funkční měření, důkaz, že funguje, a dokumentaci, se kterou si poradí kdokoli.

[Konzultovat projekt](#kontakt)[Pět kroků spolupráce](#postup)

Úvodní konzultace zdarma a nezávazně

* Ke každému kroku konkrétní výstup
* Účty, kontejnery i data zůstávají vám
* Validace porovnáním s administrací nebo CRM

principy

## Pět pravidel, podle kterých pracujeme

Stejná pravidla platí pro audit, implementaci i správu měření.

01

### Nejdřív měřicí plán, pak tagy

Měříme jen to, co někdo použije k rozhodnutí.

02

### Pracujeme ve vašich účtech

GA4, Google Tag Manager (GTM), Google Cloud i data patří vám.

03

### Souhlas je vstupní podmínka

Souhlas pro nás není překážka. Bez něj marketingová data neposíláme.

04

### Nic nepředáme bez validace

Měření vždy porovnáme s administrací nebo CRM a projdeme testovací scénáře.

05

### Dokumentace je výstup projektu

Není to bonus. Kdokoli po nás musí umět pokračovat.

postup

## Pět kroků od auditu po předané měření

Stejné kroky uvidíte u všech služeb. Před prvním z nich proběhne úvodní konzultace zdarma: projdeme web, cíle a největší problém a doporučíme, čím začít.

1. 01

   ### Audit

   Zjistíme, co dnes měříte a kde data utíkají. Čísla porovnáme s administrací nebo CRM.

   * GTM a GA4: kontejnery, události a nastavení
   * cookie lišta a Consent Mode
   * reklamní systémy a datová vrstva
   * porovnání čísel s administrací nebo CRM

   Výstup: audit-report.pdf – nálezy s prioritou podle dopadu, doporučení a odhad rozsahu oprav

   Od vás: Přístupy pro čtení – jaké role a kde je udělíte, najdete u častých otázek v Technických detailech
2. 02

   ### Měřicí plán

   Obchodní otázky převedeme na ukazatele (KPI), události a parametry a rozhodneme, která data kam odcházejí. Z plánu potom napíšeme zadání pro vývojáře.

   * KPI, události, parametry a cílové systémy
   * pravidla pojmenování a souhlas, který událost potřebuje
   * specifikace datové vrstvy s příklady JSON a akceptačními kritérii
   * u platforem s vlastním dataLayerem mapování místo specifikace

   Výstup: merici-plan.xlsx ke schválení a datalayer-spec.md s testovacími scénáři

   Od vás: Hodinová schůzka, schválení plánu a kontakt na vývojáře nebo podporu platformy
3. 03

   ### Implementace

   Nastavíme GTM na webu, případně i na serveru, dále GA4, Consent Mode v2, reklamní systémy a BigQuery. Vývojáři mezitím doplní datovou vrstvu.

   * webový kontejner GTM, případně i serverový
   * GA4 a Consent Mode v2
   * konverze v reklamních systémech
   * BigQuery a další napojení podle měřicího plánu

   Výstup: Kontejnery s jasným pojmenováním a historií verzí, funkční nastavení účtů

   Od vás: Datová vrstva od vašich vývojářů, DNS záznam pro server-side a přístupy pro úpravy
4. 04

   ### Validace

   Měření ověříme na testovacích scénářích a potom jeho čísla porovnáme s administrací nebo CRM.

   * testovací scénáře v GTM Preview a GA4 DebugView
   * test souhlasu: přijetí, odmítnutí i stav bez volby
   * testovací objednávky nebo poptávky
   * souběžný běh a porovnání čísel s administrací nebo CRM

   Výstup: validace-protokol.pdf – co jsme testovali, výsledky a vysvětlení rozdílů

   Od vás: Testovací objednávka nebo poptávka a export z administrace nebo CRM
5. 05

   ### Předání a podpora

   Na předávací schůzce se záznamem projdeme dokumentaci a přístupy. Po spuštění podle dohody pokračujeme správou a monitoringem.

   * dokumentace architektury a datových toků
   * seznam přístupů a vlastníků
   * předávací schůzka se záznamem
   * u správy upozornění při výpadku a měsíční report kvality dat

   Výstup: dokumentace.pdf, záznam schůzky a access-list.xlsx

   Od vás: Hodina až hodina a půl času lidí, kteří budou měření používat, a kontaktní osoba

Kolik to bude stát?

Cenu stanovíme po úvodní konzultaci, nejpozději po auditu. Dostanete nabídku s pevným rozsahem, výstupy a termíny. Provoz Google Cloudu a licence nástrojů platíte přímo poskytovatelům. Audit si můžete objednat i samostatně jako službu [Audit měření](/sluzby/audit-mereni).

podle typu firmy

## Jak se postup liší podle typu firmy

Kroky zůstávají stejné. Mění se hlavně to, s čím čísla porovnáváme a kam data posíláme.

### E-shopy

Měřicí plán stavíme na událostech e-commerce v GA4 a čísla porovnáváme s administrací e-shopu. Google Ads, Meta, Sklik i Heureka dostanou stejnou hodnotu objednávky.

[Měření pro e-shopy](/reseni/e-shopy)

### B2B a lead generation

Měření nekončí odesláním formuláře. Poptávky porovnáváme se záznamy v CRM a reklamním systémům posíláme i to, co se s poptávkou stalo dál.

[Měření pro B2B a lead generation](/reseni/b2b-a-lead-generation)

### Velké firmy

Na začátku přibude úvodní analýza (discovery) s rozhovory a pilotní nasazení. Měřicí plán, názvosloví a verzování zavedeme jako standard pro všechny weby a týmy.

[Měření pro velké firmy](/reseni/velke-firmy)

ukázky výstupů

## Jak vypadají výstupy, které dostanete

Výřezy ze čtyř dokumentů, které při projektu vzniknou. Příklady používají smyšlená data.

Měřicí plánSpecifikace dataLayerProtokol validaceDokumentace

Každý řádek plánu začíná obchodní otázkou. K ní teprve přiřadíme KPI, událost, parametry, cílové systémy a souhlas, který událost potřebuje.

* **Které kampaně přinášejí ziskové objednávky?** KPI: hrubý zisk z kampaně. Událost `purchase` s parametry `transaction_id`, `value`, `currency`, `items[]`, `shipping` a `coupon`. Cíl: GA4, Google Ads, Meta Conversions API (CAPI) a Sklik. Souhlas: analytický i marketingový.
* **Kde lidé opouštějí pokladnu?** KPI: míra dokončení pokladny. Události `begin_checkout`, `add_shipping_info` a `add_payment_info`. Cíl: GA4. Souhlas: analytický.
* **Které formuláře přinášejí kvalitní poptávky?** KPI: podíl kvalifikovaných poptávek. Událost `generate_lead` s parametry `form_id`, `lead_id` a `lead_topics`. Cíl: GA4, Google Ads a CRM. Souhlas: analytický i marketingový.

Specifikace vývojářům přesně říká, kdy a s jakými daty událost poslat a jak poznat, že funguje. Výřez pro událost `purchase`:

* **Kdy:** po potvrzení objednávky na děkovací stránce, právě jednou pro dané `transaction_id`.
* **Povinné:** `transaction_id` jako text, `value` jako číslo bez DPH a bez dopravy, `currency` podle ISO 4217 a aspoň jedna položka v `items[]`.
* **Akceptační kritérium:** obnovení stránky událost znovu neodešle.

Protokol ukazuje, co jsme testovali, co jsme čekali a jaký byl výsledek. Příklady testů:

* `CNS-01` Návštěva bez interakce s lištou: žádný marketingový požadavek, výchozí stav souhlasu `denied`.
* `CNS-02` Volba „Odmítnout vše“: žádné cookies `_ga` ani `_fbp`, Meta CAPI nic neodešle.
* `ECM-05` Obnovení děkovací stránky: událost `purchase` odejde jen jednou.
* `CMP-12` GA4 proti administraci: každý rozdíl má vysvětlení, třeba souhlas, testovací objednávky nebo storna.

Dokumentace popisuje celé měření tak, aby po nás mohl pokračovat kdokoli. Obsahuje tyto kapitoly:

* Architektura a schéma
* Inventář datových toků
* GTM: konvence a přehled tagů
* GA4: nastavení, vlastní definice a klíčové události
* Souhlas a Consent Mode: konfigurace a testy
* Reklamní systémy
* Server-side: infrastruktura a náklady
* Přístupy a vlastníci
* Postup při výpadku
* Historie změn

jsKopírovat

```
dataLayer.push({ ecommerce: null });
dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: '2026-10458',
    value: 808.26,
    currency: 'CZK',
    shipping: 73.55,
    tax: 169.73,
    items: [
      { item_id: 'BTL-0420', item_name: 'Termoska 0,5 l', item_category: 'Outdoor', price: 404.13, quantity: 2 }
    ]
  }
});
```

Výřez ze specifikace: událost purchase se smyšlenými daty

FAQ

## Časté otázky

Technické detailyJaké přístupy potřebujeme a kde je udělíte

Nepotřebujeme vaše hesla. Přístupy udělíte na náš pracovní e-mail a po skončení projektu je jedním kliknutím odeberete. Pro audit stačí čtení, pro implementaci potřebujeme práva k úpravám.

Jaké role potřebujeme pro audit a pro implementaci

| Nástroj | Audit | Implementace | Kde přístup udělíte |
| --- | --- | --- | --- |
| Google Tag Manager | Čtení v kontejneru | Publikace v kontejneru, v účtu role Uživatel | Správce → Správa uživatelů |
| Google Analytics 4 | Čtenář | Editor na úrovni property | Správce → Správa přístupu k property |
| Google Ads | Jen čtení | Standardní | Správce → Přístup a zabezpečení |
| Merchant Center | Standardní | Správce, jen pokud řešíme produktový feed nebo data z košíku | Nastavení → Lidé a přístup |
| Meta Business | Events Manager – zobrazit | Events Manager – spravovat | Firemní nastavení → Zdroje dat → Datové sady |
| Sklik/Seznam | Čtení | Úpravy | Nastavení účtu → Přístupy |
| Google Cloud | `roles/viewer` na projekt | Podle úkolu, třeba Cloud Run Admin nebo BigQuery Admin | IAM a správa → IAM |
| Administrace e-shopu nebo CMS | Uživatel s nastavením marketingu | Totéž | Podle platformy |
| CRM | Čtení obchodních případů (pipeline) | Správce pro pole a automatizace, nebo spolupráce s vaším správcem CRM | Podle CRM |

NDA podepíšeme ještě před udělením přístupů, pokud o to stojíte. Zpracovatelskou smlouvu uzavíráme vždy, když pracujeme s osobními údaji, třeba v CRM.

Jak dlouho trvá typický projekt?

Záleží hlavně na dvou věcech: jak rychle vývojáři doplní datovou vrstvu a jak dlouho musí měření běžet, abychom ho mohli porovnat s administrací nebo CRM. Naše vlastní práce obvykle není to, co trvá nejdéle. Termíny najdete v nabídce, kterou dostanete po úvodní konzultaci, nejpozději po auditu.

Kdo bude na projektu pracovat?

Na začátku projektu znáte jména lidí, kteří na něm pracují, a víte, s kým mluvíte. Projekty nepředáváme subdodavatelům bez vašeho souhlasu.

Co když nemáme vlastního vývojáře?

Na Shoptetu, Upgates, Shopify a u většiny webů na WordPressu zvládneme větší část práce přes administraci a GTM. U vlastních řešení potřebujeme někoho, kdo do webu doplní [datovou vrstvu](/sluzby/datova-vrstva). Dodáme mu přesné zadání a výsledek otestujeme.

Spolupracujete s naší PPC nebo marketingovou agenturou?

Ano, je to běžné. Agentura dál spravuje kampaně a my zajistíme, aby měla správná data. Domluvíme se, kdo smí v GTM co měnit, a agentura dostane dokumentaci a přístupy podle potřeby.

Co když se měření po předání rozbije?

Chyby, které způsobíme my, opravíme. Pokud se měření rozbije později kvůli změně webu, pomůžeme v rámci [správy webu a měření](/sluzby/sprava-webu-a-mereni) nebo jednorázově. Doporučujeme monitoring, který na výpadek upozorní.

Podepíšete NDA a zpracovatelskou smlouvu?

Ano. NDA i před první schůzkou, zpracovatelskou smlouvu vždy, když pracujeme s osobními údaji, třeba s CRM nebo se zákaznickými daty v BigQuery.

pokračujte

[**Audit měření**zjistíme, kde data utíkají](/sluzby/audit-mereni)[**Datová vrstva**zadání pro vývojáře, které funguje](/sluzby/datova-vrstva)[**Správa webu a měření**hlídáme, aby měření nepřestalo fungovat](/sluzby/sprava-webu-a-mereni)

Kontakt

## Začněme úvodní konzultací

Napište nám e-mail nebo vyplňte formulář. Na konzultaci projdeme váš web a řekneme, kterým krokem začít.

* E-mail[one@datalayer.cz](mailto:one@datalayer.cz)
* Telefon[+420 704 664 774](tel:+420704664774)

1. Domluvíme termín callu
2. Projdeme web a cíle
3. Připravíme návrh na míru

Web firmy

Jméno a příjmeníE-mail

Telefon (nepovinné)Web (nepovinné)

Co řešíte? (nepovinné)

GA4 a GTMServer-side měřeníCookie lišta a souhlasKonverze a reklamyBigQuery a reportingAuditJiné

S čím vám můžeme pomoci?

Údaje použijeme jen k odpovědi na zprávu a případné nabídce. [Jak s nimi zacházíme](/zpracovani-osobnich-udaju). Žádný newsletter, žádný spam.

Odeslat zprávu