# URL: https://www.datimo.ai/cz/pojmy/consent-mode-v2

1. [Domů](/cz)
2. [Znalostní báze](/cz/znalosti)
3. [Pojmy](/cz/znalosti/pojmy)
4. Consent Mode v2

# Consent Mode v2

Consent Mode v2 je Googlův mechanismus, kterým tagy Google Ads, GA4 a [GTM](/cz/pojmy/gtm) řídí, jaká data smí odejít ke Googlu podle souhlasu uživatele s cookies. Od 6. března 2024 je povinný pro firmy používající remarketing nebo personalizovanou reklamu přes Google vůči návštěvníkům z EU a UK. Bez správně nastavených signálů Google tiše přestane doplňovat remarketingové seznamy a personalizované reporty z evropského provozu, bez chybové hlášky.

Chci ověřit nastavení souhlasů

## Co Consent Mode v2 řeší

Consent Mode v2 je Googlův mechanismus, kterým tagy Google Ads, GA4 a Google Tag Manageru řídí, jaká data smí odejít ke Googlu podle toho, jaký souhlas s cookies uživatel dal. Od 6. března 2024 je povinný pro každou firmu, která používá remarketing nebo personalizovanou reklamu přes Google vůči návštěvníkům z Evropského hospodářského prostoru nebo Velké Británie.

### Čtyři signály, dva nové ve verzi 2

Consent Mode posílá čtyři parametry: ad\_storage a analytics\_storage z první verze, plus nové ad\_user\_data (smí se uživatelská data poslat Googlu na reklamní účely) a ad\_personalization (smí se zapnout personalizovaná reklama a remarketing). Bez těchto dvou nových signálů Google remarketingové a personalizované funkce pro evropský provoz jednoduše nedoplňuje.

### Basic, nebo Advanced mód

Basic mód úplně zablokuje googlovské tagy, dokud uživatel souhlas aktivně nedá, žádná data neodejdou ani anonymně. Advanced mód tagy načte hned při vstupu na web se signály nastavenými na zamítnuto a posílá takzvané cookieless pingy ještě před tím, než uživatel na cookie lištu vůbec klikne. Právě tyhle pingy jsou vstup pro modelování konverzí, které chybějící souhlas částečně dopočítá.

### Modelování má reálný práh dat

Aby Google Ads začal konverze u nesouhlasícího provozu modelovat, potřebuje zhruba 700 kliknutí na reklamu za 7 dní na danou zemi a doménu. GA4 pro behaviorální modelování potřebuje zhruba 1000 zamítnutých událostí denně. Pod těmito prahy modelování neběží a data z nesouhlasícího provozu v reportu chybí, ne jen jsou nepřesná.

## Kde firmy pálí peníze

Consent Mode v2 je od března 2024 povinný, ale řada firem má nastavenou jen starší verzi nebo konzumní lištu bez skutečného napojení na GTM, aniž by o tom věděla.

* ### Zůstala jen verze 1, remarketing v EU tiše přestal fungovat

  Firma implementovala Consent Mode před rokem 2024 a od té doby nic neaktualizovala. Chybí ad\_user\_data a ad\_personalization, takže Google remarketingové seznamy a personalizované reportování z evropského provozu jednoduše nenaplňuje, bez chybové hlášky, jen tiše chybějícími daty.
* ### Basic mód zvolený „pro klid“, bez pochopení ceny

  Basic mód se zavádí snáz a vypadá bezpečněji, ale zahazuje veškerá data od nesouhlasícího provozu, žádné cookieless pingy, žádné modelování. U weborů se slušným podílem odmítnutých souhlasů to znamená citelně méně konverzí v reportu, ne proto, že by nekonvertovaly, ale proto, že mód žádná data nesbírá.
* ### Cookie lišta, která se Consent Mode signály vůbec nemluví

  Firma má cookie lištu (CMP) nasazenou, ale ta buď není certifikovaná pro Google, nebo posílá signály jinak, než GTM čeká. Navenek to vypadá, že je vše v pořádku, ve skutečnosti Google žádný platný souhlas nedostává a chová se, jako by ho firma neměla vůbec.

## Jak se to týká práce, kterou dělá Datimo

1. 1

   ### Consent Mode je součástí GTM a server-side implementace, ne samostatný produkt

   Datimo nedodává cookie lištu (CMP) ani neposkytuje právní poradenství ke GDPR. Když ale stavíme nebo upravujeme měření přes GTM nebo server-side GTM, správné zapojení Consent Mode signálů do datové vrstvy je přirozená součást té práce, protože bez nich by měření, které stavíme, dávalo neúplný obraz.
2. 2

   ### Ověříme, že signály skutečně chodí, ne jen že lišta existuje

   V rámci revize měření kontrolujeme, jestli Consent Mode signály z cookie lišty reálně dorazí do GTM ve správném formátu, ne jen jestli lišta na webu vizuálně existuje.
3. 3

   ### Volba CMP a právní nastavení zůstává na firmě

   Který konkrétní cookie nástroj firma použije a jak přesně formuluje souhlas, je rozhodnutí právní a produktové, ne technické — do toho nezasahujeme, řešíme technickou stránku napojení na měření.

Pokud si nejste jistí, jestli máte Consent Mode v2 nastavený správně a jestli signály z cookie lišty skutečně dorazí do GTM, projdeme to s vámi.

Nezávazná konzultace

## Kam Consent Mode v2 navazuje

Consent Mode v2 je vrstva nad měřením, ne samostatný nástroj. Tohle jsou pojmy, do kterých reálně zapadá.

[Pojem

### GTM

Google Tag Manager, vrstva, přes kterou Consent Mode signály reálně proudí k jednotlivým tagům.](/cz/pojmy/gtm)[Pojem

### SGTM

Server-side měření, kam Consent Mode signály navazují stejně jako do klasického GTM.](/cz/pojmy/sgtm)[Pojem

### Server-side tracking

Proč čistě prohlížečové měření ztrácí konverze a jak se to liší od problému souhlasů.](/cz/pojmy/server-side-tracking)[Pojem

### Atribuční modelování

Jak modelování konverzí u nesouhlasícího provozu zapadá do širšího problému atribuce.](/cz/pojmy/atribucni-modelovani)