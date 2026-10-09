# URL: https://homoladigital.cz/migrace-drupal-7-na-11.html

[Úvod](/) / Migrace z Drupalu 7 na Drupal 11

Případová studie

# Migrace portálu z Drupalu 7 na Drupal 11

Odborný portál o nanotechnologiích běží od roku 2015. Za tu dobu přestaly dostávat bezpečnostní opravy obě vrstvy, na kterých stál: **Drupal 7** skončil bez podpory v lednu 2025, **PHP 5.6** už na konci roku 2018. Web přitom fungoval dál – a právě proto si toho nikdo nevšiml.

Po migraci na Drupal 11 a PHP 8.4 zůstalo funkčních **všech 199 adres** a nechybí **jediný soubor**.

nanokompozity.cz

![Náhled portálu nanokompozity.cz po migraci na Drupal 11](/assets/folio/nanokompozity-1400.webp)

[Otevřít nanokompozity.cz ↗](https://nanokompozity.cz)

## Co bylo v sázce

### Bezpečnost.

Software, který přestal dostávat bezpečnostní opravy, není jen starý. Chyby, které se v něm najdou, se veřejně popíšou – a nikdo je neopraví.

### Adresy.

Na portál vedou odkazy z vyhledávačů i z cizích webů. Kdyby se po migraci změnily adresy článků, přišel by o pozice, které si deset let budoval, a návštěvník by místo textu našel chybovou stránku.

### Obsah.

Deset let redakční práce: 121 obsahových stránek, 259 souborů a obrázků, vazby na autory a rubriky. Migrace, která něco z toho ztratí, se nedá vzít zpět.

### Provoz.

Původní web musel fungovat až do chvíle přepnutí. Odstavit ho na týden nepřicházelo v úvahu.

### Hosting bez příkazové řádky.

Na cílovém serveru nejde použít Composer, Drush ani vlastní příkazy. Celá migrace se proto musela připravit a vyzkoušet jinde a na hosting nasadit až hotová.

## Jak to proběhlo

1. 1

   ### Příprava

   Nejdřív jsem si postavil přesnou kopii cílového serveru u sebe – vývojové prostředí, ve kterém se dá zkoušet cokoli, aniž by se to dotklo běžícího webu. Na ní čistá instalace Drupalu 11 na PHP 8.4 a od začátku verzování, aby šel každý krok vrátit.
2. 2

   ### Převod obsahu

   Přenesly se všechny stránky, soubory, rubriky, uživatelé i adresy. Zásadní bylo zachovat číselné identifikátory stránek – díky tomu fungují i staré odkazy ve tvaru /node/85, na které se za deset let dá odkazovat z míst, o kterých nikdo neví.

   Při té příležitosti se opravily i zbytky kódu, které se do obsahu dostaly ještě za Drupalu 7, a autorské kontakty se z volného textu převedly do samostatných polí, se kterými se dá dál pracovat.
3. 3

   ### Vzhled

   Šablona z jádra Drupalu, všechny úpravy ve vlastní vrstvě vedle ní. Znamená to, že budoucí aktualizace šablony provedené změny nepřepíšou – a to je u webu, který má vydržet dalších deset let, důležitější než jakýkoli detail vzhledu.

   Ladění probíhalo v mnoha kolech, pokaždé s měřením na čtyřech šířkách obrazovky, od telefonu po velký monitor.
4. 4

   ### Úklid obsahu

   Migrace je vhodná chvíle sáhnout i na obsah. Prázdné články se skryly místo smazání, aby je redakce mohla kdykoli doplnit. Třiašedesát odstavců s ručně psanými odrážkami se převedlo na skutečné seznamy – vypadají stejně, ale rozumí jim odečítače i vyhledávače. E-mailové šablony se přeložily do češtiny a kontaktní formulář dostal ochranu proti robotům.
5. 5

   ### Nasazení

   Bez příkazové řádky na serveru, jen přes webové rozhraní. Po nasazení jsem prošel všech 199 adres jednu po druhé a u každé zkontroloval, že vede na tutéž stránku, že se text nerozpadl, že fungují odkazy a že se načetly obrázky. Ne vzorek – všechny. Pak přepnutí domény, přenos e-mailové schránky s téměř třemi gigabajty pošty, nastavení ověření odesílatele a certifikátu.

   Původní web zůstal zálohovaný jako pojistka pro případ zpětné kontroly.

## Výsledek

Portál běží na Drupalu 11 a PHP 8.4, tedy na verzích, které dostávají bezpečnostní opravy. **Všech 199 adres zůstalo funkčních** i s obsahem, odkazy a obrázky. E-mailová schránka se přenesla bez ztráty jediné zprávy. Výpadek ostrého webu se počítal na minuty.

Celý postup i všechna rozhodnutí jsou zdokumentované, takže se web dá udržovat i bez mého vysvětlování.

## Čísla

**121**převedených stránek

**259**převedených souborů

**199 z 199**zkontrolovaných adres

**~2,8 GB**přenesené pošty

**řádově minuty**výpadek ostrého webu

**0**ztracených dat

Recenze od zákazníka
★★★★★
> „Spolupráce s panem Homolou byla naprosto perfektní. Profesionální a zároveň lidský přístup; vše ohledně přechodu na Drupal 11 srozumitelně vysvětlil a všechno včas zpracoval. Hodně jsem se od něho naučil a rád se k němu budu vracet. Vřele doporučuji.“

**Vlastimil R.** · provozovatel odborného portálu · [recenze na Googlu](https://maps.app.goo.gl/oYi2c5tYqpndE9kh7), září 2026

## Běží váš web na verzi bez podpory?

Většina majitelů webů to neví, protože se to nijak neprojeví. Web funguje, objednávky chodí, všechno vypadá v pořádku. Zastaralá verze se projeví až ve chvíli, kdy je pozdě – únikem dat z formulářů, cizím obsahem, který se na webu objeví, nebo tím, že web odstaví hosting.

**Drupal 7 skončil bez podpory v lednu 2025** a weby na něm dodnes běží. Totéž platí pro starší verze PHP, WordPressu a jeho pluginů.

Zjistit, na čem váš web stojí, je práce na pár minut. **Pošlete mi adresu a napíšu vám, jaké verze pod ním běží, co z toho už nedostává bezpečnostní opravy a co s tím.** Zdarma a nezávazně – stejně jako každá vstupní analýza.

Začněme nezávazně

## Pošlete mi adresu webu. Zbytek zjistím sám.

[Prověřit můj web (zdarma) ↗](/#kontakt)