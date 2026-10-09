# URL: https://www.datimo.ai/cz/integrace/shoptet-bigquery

1. [Domů](/cz)
2. [Znalostní báze](/cz/znalosti)
3. [Integrace](/cz/znalosti/integrace)
4. Shoptet a BigQuery

# Objednávky ze Shoptetu v BigQuery, propojené s marží a reklamou

Shoptet je česká SaaS platforma pro provoz e-shopu. Nechte nás napojit objednávky, katalog a zákazníky ze Shoptetu do datového skladu. Marže, reklama a chování zákazníků pak uvidíte na jednom místě, bez ručních exportů.

Zajímá mě to víc

## K čemu propojení slouží

Objednávky, katalog produktů a zákazníci z e-shopu pravidelně tečou do BigQuery, propojené s daty z reklamy a ze skladu nebo účetnictví.

### Objednávky a katalog na jednom místě

Objednávky, produkty a zákazníci ze Shoptetu se ukládají do [datového skladu](/cz/pojmy/datovy-sklad) ve struktuře, se kterou se dá dál počítat.

### Kde se data dál používají

[Segmentace produktů v Google Ads](/cz/segmentace-produktu-gads), maržový report a analýza průchodnosti košíkem pracují se stejným zdrojem, takže čísla v kampaních sedí s tím, co se reálně prodává.

## Na co si dát pozor

U tohoto typu propojení se běžně počítá s několika omezeními. Je lepší je znát dopředu než je řešit až v reportu.

* ### Kódy produktů v e-shopu a v účetnictví nebo skladu

  Katalog v Shoptetu se často liší od číselníku v účetnictví nebo skladu. Bez mapování marže nesedí na konkrétní produkty v kampaních. Shoptet navíc modeluje varianty (třeba barvu nebo velikost) přes samostatný objekt variantních parametrů, který musí v e-shopu existovat dřív, než se použije k definici konkrétní varianty produktu – při mapování na sklad je dobré s touhle strukturou počítat.
* ### Shoptet API limituje zátěž vlastním mechanismem, ne pevným počtem požadavků

  Shoptet REST API pracuje s tokenovou autorizací (API token v hlavičce, u veřejných aplikací i OAuth2) a při přetížení vrací HTTP 429. Pro průběžnou synchronizaci proto Shoptet doporučuje spíš webhooky a dávkové operace než časté opakované dotazování.
* ### Skokový nárůst dat při výprodejích a sezóně

  Objem objednávek a návštěv se během výprodejů a sezónních špiček násobí. Synchronizace na to musí být připravená dopředu, ne řešená až za provozu.
* ### Feed pro reklamu a data pro report musí sedět

  Pokud [produktový feed](/cz/pojmy/produktovy-feed) pro Google Ads, Heureku nebo Zboží žije vlastním životem odděleně od datového skladu, čísla v kampaních a v reportu se postupně rozejdou.

## Jak to Datimo řeší

1. 1

   ### Vlastní konektor pro váš e-shop

   Napojení se nastaví podle konkrétní verze a nastavení Shoptetu, včetně případných doplňků a rozšíření, která používáte.
2. 2

   ### Pravidelná synchronizace

   Objednávky, katalog a zákazníci se aktualizují podle domluveného intervalu, případně přes webhooky, které Shoptet [API](/cz/pojmy/api) nabízí pro rychlejší reakci na změnu, ne jednou za měsíc ručním exportem.
3. 3

   ### Rychlé reporty i nad historií

   Datový sklad je připravený tak, aby dotazy přes sezóny a roky fungovaly plynule a náklady na úložiště zůstávaly pod kontrolou.
4. 4

   ### Správa napojení v ceně

   Technickou správu, údržbu při změnách API i aktivní monitoring hlídáme za vás, v rámci ceny.
5. 5

   ### Modulární rozsah dat

   Napojení stavíme z modulů podle toho, co potřebujete reportovat, ne jako pevně daný balíček tabulek.

Pokud zvažujete propojení Shoptetu s datovým skladem, projdeme s vámi rozsah dat a technická omezení konkrétního nasazení.

Nezávazná konzultace

## Kam data ze Shoptetu reálně jdou

Propojení samo o sobě nic nerozhodne. Tohle jsou moduly a články, které nad daty ze Shoptetu navazují.

[Produkt

### Segmentace produktů v Google Ads

Kampaně rozdělené podle marže a výkonu produktů, ne podle kategorií z e-shopu.](/cz/segmentace-produktu-gads)[Produkt

### Maržové řízení

Reporting postavený na skutečné marži, ne na obratu.](/cz/marzove-rizeni)[Produkt

### Analýza průchodnosti košíkem

Kde v nákupním procesu zákazníci reálně odpadají.](/cz/analyza-pruchodnosti-kosikem)[Článek

### Segmentace produktů v Google Ads

Proč plošné kampaně na celý katalog nefungují a jak segmentovat podle marže.](/cz/blog/google-ads-segmentace-produktu)[Článek

### Vyloučení produktů z Heureka/Zboží feedu

Jak dostat ztrátové nebo vyprodané produkty z feedu ven, dřív než stojí peníze.](/cz/blog/heureka-zbozi-vylouceni-feedu)[Článek

### Import akvizice a retence

Jak z dat e-shopu rozpoznat nové a vracející se zákazníky a počítat s nimi v reportech.](/cz/blog/import-akvizice-retence)