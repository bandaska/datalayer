# URL: https://www.pavelszabo.cz/clanek-pavluv-tydennik-6-server-side-tracking-customer-match-chatgpt-reklama-ppc-2026/

**Pavel Szabo** — 5. 6. 2026 · aktualizováno 9. 6. 2026

# Pavlův týdenník #6: vaše reklamní čísla lžou víc, než si myslíte

Měření v placené reklamě se rozjíždí špatným směrem. Vaše čísla skoro jistě ukazují míň objednávek, než kolik reklama opravdu přinesla. Co se děje a co s tím.

![Pavlův týdenník #6: vaše reklamní čísla lžou víc, než si myslíte](/storage_thumbs/article-big-63.jpg)

Foto: [Carlos Muza](https://unsplash.com/@kmuza?utm_source=pavelszabo&utm_medium=referral) / [Unsplash](https://unsplash.com)

Tenhle týden se v placené reklamě sešly tři věci a překvapivě spolu souvisí. Měření přestává být spolehlivé. Vaše vlastní data o zákaznících mají najednou větší cenu než dřív. A vzniká nový kanál, kde se dá inzerovat. Pokud máte e-shop nebo službu a posíláte peníze do reklamy, čtěte dál. Týká se vás to přímo.

## Proč vám reklamní účet ukazuje míň, než je pravda

Většina firem měří objednávky přes takzvaný pixel. Je to malý kód, který běží v prohlížeči návštěvníka a hlásí reklamnímu systému, že někdo nakoupil. Potíž je, že prohlížeče dnes blokují, co můžou. Blokovače reklam, ochrana soukromí v Safari, kratší životnost [Cookies](/co-je-cookies/). Výsledek? Měření přes prohlížeč mine podle oborových odhadů zhruba 20 až 35 procent nákupů.

Čísla ve vašem účtu jsou tedy nejspíš horší, než jak reklama doopravdy funguje. Řešení se jmenuje server-side tracking. Místo prohlížeče měří váš vlastní server a posílá data reklamnímu systému přímo, mimo dosah blokovačů. U reklam na Facebooku a Instagramu tomu odpovídá Conversions [API](/co-je-api/). Kdo ho zapne, vidí v praxi typicky kolem 37 procent objednávek navíc, které se předtím ztrácely, a spárování dat přes 90 procent místo 60 až 70 u samotného pixelu. Přesná čísla se liší podle oboru a nastavení, jde o oborové odhady a zdroje k nim najdete na konci článku. Meta sama od jara 2026 doporučuje jet pixel a Conversions API společně.

Vezměte e-shop s obrazy, který v reklamě vidí 30 objednávek za měsíc. Po zapnutí server-side měření jich systém modelově napočítá 40. Stejná realita, akorát konečně vidíte celý obrázek a algoritmus má z čeho se učit, komu reklamu ukazovat. Co udělat tenhle týden: zeptejte se svého správce reklam, jestli máte Conversions API zapnuté. Pokud nemáte, je to první věc na řadě. Rozepsal jsem to v [článku o Facebook Conversions API](https://www.pavelszabo.cz/clanek-proc-je-implementace-facebook-conversions-api-capi-naprosto-klicova-pro-vykon-reklamy/).

## Vaše databáze zákazníků je teď výhoda, kterou nikdo jiný nemá

Když měření přes prohlížeč slábne, roste cena dat, která má jen vaše firma. Google na to má funkci Customer Match. Nahrajete svůj seznam zákazníků, většinou e-mailové adresy, a Google podle něj líp cílí i vyhodnocuje. Je to logické. Vaše data o zákaznících nemá konkurence, takže je to nejsilnější páka, jak Googlu napovědět, komu reklamu ukazovat. Jedna důležitá věc na začátek: nahrávat smíte jen e-maily lidí, kteří vám k tomu dali souhlas, ne cokoli, co máte v databázi. Než seznam pošlete, projděte si podmínky Customer Match přímo u Googlu, ať víte, jaké kontakty tam patří a jaké ne.

Pro přímé cílení Google oficiálně chce 50 tisíc dolarů útraty za celou historii účtu, což menší firma většinou nesplní. I tak se to vyplatí. Nahraný seznam totiž slouží jako signál pro automatické kampaně a chytré licitování, i když na přímé cílení nedosáhnete. Najdete to v [Google Ads](/co-je-google-ads/) pod Nástroje a Data Manager, případně přes Audience Manager, když chcete nahrát soubor.

Představte si jazykovku s databází pěti set studentů. Nahraje e-maily do Google Ads a reklama na nový kurz se přednostně ukáže lidem, kteří se podobají jejím skutečným studentům. Ne náhodným kolemjdoucím. Co udělat tenhle týden: vyexportujte si zákazníky z fakturačního systému nebo e-shopu a mějte seznam připravený. I když ho hned nepoužijete, hodí se ho mít po ruce.

## Objevil se nový reklamní kanál: [ChatGPT](/co-je-chatgpt/)

[OpenAI](/co-je-openai/) začátkem roku 2026 spustilo reklamu přímo v ChatGPT. Vidí ji zatím jen lidé, kteří ChatGPT používají zdarma nebo v levnějším tarifu Go. Začalo to v USA, ale postupně se rozjíždí dál - Kanada, Austrálie, Nový Zéland a od června 2026 i Velká Británie, první evropský trh. Reklama se ukáže v jasně označeném rámečku pod odpovědí a podle OpenAI neovlivňuje, co vám ChatGPT odpoví. Necílí na klíčová slova jako klasické vyhledávání, ale na to, o čem se zrovna bavíte.

Od května 2026 si inzerci nastavíte sami přes OpenAI Ads Manager, bez minimální útraty, s měřením přes pixel i Conversions API. Zájem je obrovský. Podle dostupných údajů platforma za prvních šest týdnů vydělala kolem sta milionů dolarů. Pro českou firmu to zatím není kanál k akci, Česko mezi spuštěnými trhy ještě není. Rozšiřování po Evropě ale začalo, takže má smysl ho sledovat víc než dřív a být připravený, až řada přijde i na nás. Pokud už teď přemýšlíte, jak ChatGPT zapojit do firmy i jinde než v reklamě, dá se začít [napojením ChatGPT na vaše procesy](https://www.pavelszabo.cz/implementace-chat-gpt-api-na-miru/).

Sesbírat data z více zdrojů a poskládat z nich smysluplný report nad reklamními čísly je přesně práce, kterou napojím na AI agenta, aby běžela sama. Jak takovou automatizaci na míru stavím, popisuju u [AI agentů a automatizací na míru →](/tvorba-ai-agentu-na-miru/?utm_source=slovnik&utm_medium=inline_cta&utm_campaign=bridge).

## Co si z toho odnést

Ty tři věci spolu drží. Měření přes prohlížeč slábne, takže potřebujete server-side. Vlastní data o zákaznících jsou nová výhoda, tak si je dejte do pořádku. A reklamní svět se rozšiřuje o nové kanály, takže má smysl sledovat, kam se to hýbe. Ani jedno není o velkém rozpočtu. Jde o základy, které máte plně pod kontrolou.

Konkrétně tenhle týden: ověřte si Conversions API u reklam na Metě, připravte export zákazníků pro Google Customer Match a poznamenejte si hlídat reklamu v ChatGPT. Jestli tyhle základy chcete nastavit jednou a pořádně a pak se věnovat byznysu, ozvěte se mi. Pomůžu s [napojením a automatizací](https://www.pavelszabo.cz/automatizace-procesu-ai-workflow-n8n/) nebo s [e-shopem na míru](https://www.pavelszabo.cz/eshop-na-miru/). První konzultace je zdarma a nezávazná.

## Často kladené otázky

**Co je server-side tracking polopatě?**  
Měření nákupů a poptávek na vašem serveru místo v prohlížeči zákazníka. Reklamní systém tak dostane data i od lidí, kterým prohlížeč běžné měření zablokuje.

**Potřebuju na Customer Match velký rozpočet?**  
Na přímé cílení ano, padesát tisíc dolarů za historii účtu. Menší firmě ale nahraný seznam pomůže i tak, jako signál pro automatické kampaně.

**Mám teď inzerovat v ChatGPT?**  
V Česku reklama zatím nejede, takže napřímo ne. Běží v USA, Kanadě, Austrálii, na Novém Zélandu a od června 2026 i ve Velké Británii. Rozšiřuje se rychle, tak sledujte vývoj a mějte to připravené.

## Zdroje

* [PPC Hero: Why Server-Side Tracking Is No Longer Optional for Paid Media](https://ppchero.com/why-server-side-tracking-is-no-longer-optional-for-paid-media/)
* [Search Engine Land: Your #1 competitive advantage in Google Ads: Customer Match](https://searchengineland.com/google-ads-customer-match-competitive-advantage-479428)
* [PPC Hero: ChatGPT Ads Are Here: Everything We Know So Far](https://ppchero.com/chatgpt-ads-are-here-everything-we-know-so-far/)
* [OpenAI: Reklama v ChatGPT (oficiální nápověda a dostupnost podle zemí)](https://help.openai.com/en/articles/20001047-ads-in-chatgpt)

AI řešení pro firmy

### Stavím firmám AI agenty a automatizace na míru

AI pomocník napojený na vaše data a systémy

Automatizace rutiny: odpovědi zákazníkům, zpracování poptávek, třídění dokumentů

Na míru vašim procesům, postavené na Claude

Od návrhu přes nasazení po údržbu

[Nezávazná konzultace zdarma](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3cb7o4ygSd93V6fS8czAiqECbvl0hyRcxCvu8YSPQE8s_Hbtplk8mTh08_KOUGt0wZJG8cxESc)

[Chcete to zvládnout sami? Individuální AI mentoring → 2 000 Kč / lekce 60 minut · online 1:1](/individualni-konzultace-claude-code/) [Chcete posunout celou firmu? Strategický AI workshop → od 18 000 Kč · u vás nebo online](/strategicky-ai-workshop-pro-firmy/)

### Pavel Szabo

Programátor webů, eshopů a informačních systémů s více než 23 lety praxe. Pomáhám firmám i jednotlivcům s online podnikáním, automatizacemi a využitím AI v praxi.

[Domluvte si konzultaci zdarma](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3cb7o4ygSd93V6fS8czAiqECbvl0hyRcxCvu8YSPQE8s_Hbtplk8mTh08_KOUGt0wZJG8cxESc)

[![TOP firma 2025 — Firmy.cz](https://www.firmy.cz/top-firma/2025.svg)](https://www.firmy.cz/detail/13310134-pavel-szabo-tvorba-webovych-stranek-eshopu-a-redakcnich-systemu-vratimov.html)

Znáte někoho komu by článek mohl pomoct? Budu rád za sdílení!

Mohlo by vás zajímat:

[![Analýza webu: co odhalí a co opravit jako první, když web nepřivádí poptávky](/storage_thumbs/article-normal-92.jpg)

Technologie — 11 minut čtení

## Analýza webu: co odhalí a co opravit jako první, když web nepřivádí poptávky

Web má návštěvníky, ale poptávky nechodí? Analýza webu ukáže, které nálezy stojí firmu poptávky nejvíc, co opravit jako první a kdy opravy nestačí a vyplatí se…

Pokračujte ve čtení](/clanek-analyza-webu-co-opravit-jako-prvni-kdyz-web-neprivadi-poptavky/)

[![Remarketing pro firmy a e-shopy: jak funguje a kdy se vyplatí](/storage_thumbs/article-normal-93.jpg)

Technologie — 13 minut čtení

## Remarketing pro firmy a e-shopy: jak funguje a kdy se vyplatí

Remarketing osloví lidi, kteří už váš web viděli, ale vyplatí se jen tehdy, když web spolehlivě měří a má dost návštěvníků. Zjistěte, kdy přinese zakázky a kdy…

Pokračujte ve čtení](/clanek-remarketing-pro-firmy-a-eshopy-jak-funguje-a-kdy-se-vyplati/)

[![Pavlův týdenník #24: hledání značky v Googlu, vymyšlení autoři a vracející se návštěvníci](/storage_thumbs/article-normal-91.jpg)

Technologie — 7 minut čtení

## Pavlův týdenník #24: hledání značky v Googlu, vymyšlení autoři a vracející se návštěvníci

Co Google ukazuje, když někdo zadá název vaší firmy, proč označil vymyšlené autory za klamání a co dělat s lidmi, kteří se na váš web vracejí.

Pokračujte ve čtení](/clanek-pavluv-tydennik-24-hledani-znacky-google-autori-obsahu-vracejici-se-navstevnici/)

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