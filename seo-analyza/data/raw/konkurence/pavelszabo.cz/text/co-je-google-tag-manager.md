# URL: https://www.pavelszabo.cz/co-je-google-tag-manager/

# Google Tag Manager: co to je a jak ho nastavit

11. 5. 2026 · aktualizováno 6. 10. 2026

Google Tag Manager (GTM) je bezplatný nástroj od Googlu pro správu měřicích a marketingových kódů na webu. Místo aby vývojář po každé změně zasahoval do kódu webu, přidá marketér nový tag přímo v rozhraní GTM. Web má v hlavičce jeden kontejner a všechno ostatní ([Google Analytics](/co-je-google-analytics/), [Facebook Pixel](/co-je-facebook-pixel/), konverze Skliku) jde přes něj.

GTM je dnes můj standard. Používám ho u většiny klientů a beru ho jako výchozí volbu. Hlavní výhoda: poměrně jednoduché napojení na Cloudflare a server-side GTM jako bránu. Klient tím získá přesnější data a sníží závislost na blokovacích doplňcích v prohlížeči.

GTM stojí na čtyřech pojmech. Kontejner je schránka pro web. Tag je kód, který se má spustit (například měření konverze). Trigger určuje kdy (po načtení stránky, kliknutí na tlačítko, odeslání formuláře). Proměnná (variable) nese data, která se posílají dál. Datová vrstva (dataLayer) je javascriptové pole, kam web odesílá události typu nákup nebo přidání do košíku, a GTM je zpracuje.

Server-side GTM posouvá zpracování dat z prohlížeče na vlastní server. Pixely neběží v prohlížeči, kde je blokují adblockery a iOS. Data jdou na vaši subdoménu (třeba gtm.firma.cz) a teprve odtud do Mety, Googlu nebo Skliku. Výsledek: lepší kvalita dat, delší životnost [Cookies](/co-je-cookies/), méně chybějících konverzí. Provoz přes Cloudflare Workers vychází zhruba na 350-600 Kč měsíčně (15-25 USD). Alternativou je Google Cloud Run nebo placená služba Stape.

Pokud teprve zvažujete GTM, je dobré vědět, že čistý web se měří mnohem líp než takový, kde se kód lepí přes sebe. Když web stavím od základu, počítám s měřením rovnou ve struktuře, ne jako záplatu navrch. Jak k tomu přistupuju, popisuju u [tvorby webových stránek na míru →](/tvorba-webovych-stranek-na-miru/?utm_source=slovnik&utm_medium=inline_cta&utm_campaign=bridge).

Samotný GTM je zdarma. Náklady přicházejí s implementací (4-12 hodin u běžného [Nette](/co-je-nette/) projektu) a s případným hostingem [server-side kontejneru](https://www.pavelszabo.cz/tvorba-webovych-stranek-na-miru/). Pro typický český e-shop dává smysl začít klasickým webovým GTM. Jakmile začnou chybět data kvůli iOS a adblockerům, přejít na server-side variantu.

Proč u GTM zůstávám: jeden nástroj zvládne tracking pro [Google Analytics](/co-je-google-analytics/), [Facebook Pixel](/co-je-facebook-pixel/), [Facebook Conversions API](/co-je-facebook-conversions-api/) i Sklik konverze. Když přijde nová reklamní platforma, přidám ji bez zásahu do kódu webu. Pro klienta to znamená rychlejší změny a nižší účty za vývoj.

Pozor na souhlas s cookies. Consent Mode v2 je od března 2024 povinný pro každý web mířící na EU trh. Bez něj Google omezí remarketing a měření. Nasazení v GTM není jednoduché, ale je nutné.

Rád GTM nastavím pro váš web nebo e-shop. [Napište mi](/kontakt/), projdeme spolu vaše současné nastavení a navrhneme řešení od základního GTM po server-side bránu přes Cloudflare.

### Pavel Szabo

Programátor webů, eshopů a informačních systémů s více než 23 lety praxe. Pomáhám firmám i jednotlivcům s online podnikáním, automatizacemi a využitím AI v praxi.

[Domluvte si konzultaci zdarma](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3cb7o4ygSd93V6fS8czAiqECbvl0hyRcxCvu8YSPQE8s_Hbtplk8mTh08_KOUGt0wZJG8cxESc)

[![TOP firma 2025 — Firmy.cz](https://www.firmy.cz/top-firma/2025.svg)](https://www.firmy.cz/detail/13310134-pavel-szabo-tvorba-webovych-stranek-eshopu-a-redakcnich-systemu-vratimov.html)

Znáte někoho komu by článek mohl pomoct? Budu rád za sdílení!

## Článek, kde je Google Tag Manager zmíněno

[![Překlad webu: automatický překlad stránek přes API i AI](/storage_thumbs/article-normal-36.jpg)

Technologie — 9 minut čtení

## Překlad webu: automatický překlad stránek přes API i AI

Chcete zpřístupnit svůj web i zahraničním návštěvníkům? Automatický překlad webů je užitečný nástroj pro firmy, e-shopy i blogery, kteří chtějí oslovit…

Pokračujte ve čtení](/clanek-prekladejte-webovky-chytre-automaticky-preklad-webu-s-google-translate-api/)

[![Jak zjistit návštěvnost stránek zdarma (2026): 5 nástrojů](/storage_thumbs/article-normal-29.jpg)

Technologie — 10 minut čtení

## Jak zjistit návštěvnost stránek zdarma (2026): 5 nástrojů

Každý majitel webu by měl mít přehled o tom, kolik lidí jeho stránky navštíví, odkud přicházejí, jak dlouho na webu zůstávají a co na něm dělají. Pro získání…

Pokračujte ve čtení](/clanek-jak-zjistit-navstevnost-webu/)

[![Remarketing pro firmy a e-shopy: jak funguje a kdy se vyplatí](/storage_thumbs/article-normal-93.jpg)

Technologie — 13 minut čtení

## Remarketing pro firmy a e-shopy: jak funguje a kdy se vyplatí

Remarketing osloví lidi, kteří už váš web viděli, ale vyplatí se jen tehdy, když web spolehlivě měří a má dost návštěvníků. Zjistěte, kdy přinese zakázky a kdy…

Pokračujte ve čtení](/clanek-remarketing-pro-firmy-a-eshopy-jak-funguje-a-kdy-se-vyplati/)

## Nabídka služeb

Vyberte si z nabídky níže, co zrovna potřebujete nebo mi rovnou zavolejte a probereme Vaše potřeby.

### Weby a portály

[### Tvorba webových stránek na míru

✅ Specializuji se na tvorbu responzivních webových stránek s důrazem na moderní webdesign a SEO. Poskytujeme profesionální programování a tvorbu internetových www stránek na míru.](/tvorba-webovych-stranek-na-miru/)

[### Unikátní blogy a magazíny

✅ Nabízím vývoj unikátních obsahových webů s administrací vytvořeným na míru. Vaši čtenáři ocení možnost registrace, placený prémiový obsah i nejrůznější uživatelská nastavení.](/tvorba-unikatnich-blogu-a-magazinu/)

[### Firemní webové stránky na míru

✅ Vytvářím unikátní firemní weby, které skvěle prezentují vaši značku a cílí přímo na vaše klienty. Společně navrhneme nejen vizuálně poutavý web, ale také zajistíme, aby na něj proudili zákazníci.](/tvorba-firemnich-webovych-stranek-na-miru/)

[### Eshop na míru

✅ Vytvořím pro vás jednoduchý (b2b) eshop na míru. Díky know-how z milionových eshopů získáte nejenom skvělý eshop včetně unikátního designu, SEO, spoustu automatizací, ale i důležité rady a zkušenosti jak založit vlastní ziskový eshop.](/eshop-na-miru/)

[### Technický a projektový dozor tvorby webu

✅ Nabízím dohled nad technickou kvalitou a průběhem vašich webových projektů. Díky zkušenostem z programování a řízení zakázek zajistím, aby váš web či aplikace byly vyvíjeny správně, efektivně a v souladu s vašimi cíli.](/technicky-projektovy-dozor-tvorby-webovych-stranek/)

### Kódování a programování

[### Informační systém na míru pro firmy

✅ Programuji na míru šitá řešení pro podniky a firmy, která přesně odpovídají vašim požadavkům a potřebám.](/informacni-system-pro-podniky-a-firmy-redakcni-system-a-cms/)

[### Front-end kódování webu HTML

✅ Kóduji kvalitní responzivní HTML/CSS šablony s optimalizovanou rychlostí načítání pro webové stránky, e-shopy nebo IS systémy.   
Jsem front-end developer.](/frontend-kodovani-webu-html/)

[### Tvorba AI agentů a automatizací na míru

✅ Stavím firmám AI agenty, automatizace a digitalizaci procesů. První agent jako pilot za fixní cenu se stropem, správa od 5 000 Kč měsíčně.](/tvorba-ai-agentu-na-miru/)

[### Vývoj webových aplikací na míru

Vyvíjím webové aplikace a software na míru, který řídí reálné firemní procesy: objednávky, platby, rezervace, plánování i interní systémy. Postavím aplikaci podle vašeho procesu, propojím systémy, které spolu dnes nemluví, a u úloh, kde to pomůže, navrhnu i zapojení AI. Jednáte přímo s vývojářem, zdrojový kód i data zůstávají vaše.](/vyvoj-webovych-aplikaci-na-miru/)

### Marketing a obsah

[### Obsahový marketing a automatizace blogu

✅ Postavím vám automatizaci, která se stará o obsah na vašem blogu za vás. Píše nové články na témata, která vaši zákazníci opravdu hledají, a oživuje staré, co spadly v Googlu. Nemusíte hlídat copywritera ani termíny: běží to průběžně a vy řešíte jen schválení. Nemusíte mít jasno hned - rád vám poradím a navrhnu možnosti automatického obsahu na míru přesně pro váš případ.](/seo-copywriting/)

[### AI asistent pro e-mailovou komunikaci

✅ Postavím vám asistenta na míru, který hlídá vaši e-mailovou komunikaci s klienty. Upozorní vás, když někomu zapomenete odpovědět, když se blíží termín slibu, nebo když konverzace začne houstnout. Nic za vás neodepisuje, jen hlídá, aby vám žádný klient neutekl.](/ai-asistent-emailova-komunikace/)

[### Správa sociálních sítí a automatizace

✅ Postavím vám systém, který se postará o vaše sociální sítě za vás. Pravidelné příspěvky v tónu vaší značky, naplánované na správný čas, plus přehled o tom, co funguje. Vy získáte čas zpátky a sítě běží dál i bez vašeho každodenního dohledu.](/sprava-socialnich-siti/)

### AI školení a konzultace

[### Individuální AI mentoring s Claude Code

✅ Naučím vás pracovat s AI přímo na vašem projektu. Online lekce 1:1 přes Google Meet, 60 minut. Po několika lekcích pokračujete sami.](/individualni-konzultace-claude-code/)

[### Strategický AI workshop pro firmy

✅ Přijedu k vám, projdeme vaše procesy a odjedete s plánem, kde vám AI ušetří hodiny lidské práce. Živá ukázka na vašich datech, ne přednáška.](/strategicky-ai-workshop-pro-firmy/)

## Praha, Brno, Ostrava či zahraničí? Na tom nezáleží

Osobní schůzky jsou možné, ale většinu záležitostí — od tvorby webů po AI automatizace — lze vyřešit pohodlně přes videohovor. Působím po celé ČR, s klienty z mnoha měst: Praha, Brno, Ostrava, Jičín, Liberec, Olomouc, Hradec Králové, České Budějovice, Karviná, Frýdek-Místek, Opava, Třinec, Orlová, Český Těšín, Nový Jičín, Krnov, Bohumín, Kopřivnice, Bruntál...

Pro lepší porozumění vašim potřebám je ideální online hovor. Rezervujte si schůzku přes můj formulář nebo mě kontaktujte telefonicky. Můžeme se taky domluvit na výjezdu a osobní schůzce.

[Nezávazná konzultace ZDARMA](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3cb7o4ygSd93V6fS8czAiqECbvl0hyRcxCvu8YSPQE8s_Hbtplk8mTh08_KOUGt0wZJG8cxESc)

![Praha, Brno, Ostrava či zahraničí? Na tom nezáleží](/images/remote-team-animate.svg)