# URL: https://www.mariemullerova.cz/seo/jak-funguji-vyhledavace/

1. [Domů](/) /
2. [SEO](/seo/) /
3. Jak fungují vyhledávače: crawling, indexace, ranking

# Jak fungují vyhledávače: crawling, indexace, ranking

![](/_astro/marie-portret.CxDjTv2c_Z1z1LNd.webp) [Marie Müllerová](/o-mne/)   **Aktualizováno** 4. září 2026

Obsah článku

1. [Jak fungují vyhledávače ve zkratce](#jak-fungují-vyhledávače-ve-zkratce)
2. [Crawling: jak vyhledávač objevuje stránky](#crawling-jak-vyhledávač-objevuje-stránky)
3. [Indexace: proč se stránka dostane nebo nedostane do indexu](#indexace-proč-se-stránka-dostane-nebo-nedostane-do-indexu)
4. [Ranking: podle čeho vyhledávač řadí výsledky](#ranking-podle-čeho-vyhledávač-řadí-výsledky)
5. [Crawling vs. indexace vs. ranking: přehledná tabulka](#crawling-vs-indexace-vs-ranking-přehledná-tabulka)
6. [Proč se stránka nezobrazuje ve vyhledávání](#proč-se-stránka-nezobrazuje-ve-vyhledávání)
7. [Jak zjistit, jestli Google stránku prošel a zaindexoval](#jak-zjistit-jestli-google-stránku-prošel-a-zaindexoval)
8. [Co ovlivňuje ranking v praxi](#co-ovlivňuje-ranking-v-praxi)
9. [Google, Seznam a AI výsledky: co se mění a co zůstává](#google-seznam-a-ai-výsledky-co-se-mění-a-co-zůstává)
10. [Praktický checklist pro majitele webu](#praktický-checklist-pro-majitele-webu)

Vyhledávač musí stránku nejdřív najít, potom ji zpracovat do indexu a až nakonec ji může zařadit do výsledků pro konkrétní dotaz. Google tento postup popisuje jako crawling, indexaci a serving výsledků. U každé URL se může zastavit v jiné fázi.

Pro majitele webu je tento rozdíl praktický. Stránka, kterou Googlebot nebo SeznamBot neprojde, se nemá z čeho dostat do indexu. Stránka, kterou robot navštíví, se do indexu dostat nemusí, pokud má `noindex`, duplicitní obsah nebo špatně nastavený canonical. A stránka v indexu ještě nemusí přivádět návštěvnost. Ranking se počítá až pro konkrétní dotaz, podle relevance, kvality, odkazů, použitelnosti a kontextu hledání.

## Jak fungují vyhledávače ve zkratce

Vyhledávač není kompletní knihovna internetu. Je to výběr stránek, které robot našel, systém zpracoval a algoritmus vyhodnotil jako vhodné pro dotaz. Google ve své dokumentaci uvádí, že ne všechny stránky projdou všemi třemi fázemi vyhledávání. Nezaručuje procházení, indexaci ani zobrazení stránky ve výsledcích, i když web splňuje technické požadavky Google Search Essentials. Za častější crawling ani lepší organické pořadí Google nepřijímá platbu.

Základní tok:

1. **Crawling**: robot najde URL a stáhne její obsah. Google používá Googlebot, Seznam používá SeznamBot. SeznamBot se podle nápovědy Seznamu v logu identifikuje řetězcem `Mozilla/5.0 (compatible; SeznamBot/4.0; +https://o-seznam.cz/napoveda/vyhledavani/en/seznambot-crawler/)`.
2. **Indexace**: vyhledávač stránku zpracuje, vyhodnotí obsah, duplicity, kanonickou URL a instrukce typu `noindex`.
3. **Ranking**: při hledání vybírá a řadí výsledky pro konkrétní dotaz. Google mezi signály jmenuje význam dotazu, relevanci obsahu, kvalitu obsahu, použitelnost stránky a kontext uživatele.

Na českém trhu sledujte Google i Seznam. Podle StatCounteru měl Google v České republice v srpnu 2026 podíl 79,33 %, Seznam 15,63 % a Bing 3,93 %. U desktopového vyhledávání ve stejném měsíci StatCounter uvádí Google 74,66 %, Seznam 15,64 % a Bing 8,14 %. Google bude pro většinu webů hlavní zdroj organické návštěvnosti. Seznam ale u českých projektů stále není zanedbatelný.

Základní pojmy a širší kontext SEO najdete v článku SEO: kompletní průvodce optimalizací.

## Crawling: jak vyhledávač objevuje stránky

Crawling znamená procházení webu robotem. Robot začíná u známých URL, sleduje odkazy, čte sitemapu a vrací se na stránky, které už zná. Google uvádí, že většina stránek v jeho výsledcích nebyla ručně odeslaná. Objevil je automaticky při procházení webu.

Vyhledávač se k URL dostane hlavně těmito cestami:

* přes interní odkaz z jiné stránky webu,
* přes externí odkaz z cizího webu,
* přes `sitemap.xml`,
* přes Google Search Console nebo Seznam Webmaster,
* u Seznamu také přes přidávací formulář nebo protokol IndexNow.

Interní odkazy nejsou jen navigace pro lidi. Google ve svých doporučeních k odkazům píše, že odkazy používá také k objevování nových stránek a k pochopení relevance. Stránka bez interních odkazů může být v sitemapě, ale vyhledávač z ní hůř pozná, kam na webu patří.

Soubor `robots.txt` říká, které URL smí crawler navštívit. Google výslovně uvádí, že `robots.txt` slouží hlavně ke správě crawler trafficu a nehodí se pro skrytí stránky z výsledků. Google zpracovává `robots.txt` jen do velikosti 500 KiB; obsah za touto hranicí ignoruje. Běžný firemní web na limit nenarazí. U rozsáhlého e-shopu s tisíci pravidel už to problém být může.

Sitemap má vlastní limity. Podle Googlu může jeden sitemap soubor obsahovat nejvýš 50 000 URL nebo 50 MB v nekomprimované podobě. Větší weby musí sitemapu rozdělit a použít sitemap index. Sitemapa indexaci negarantuje, ale pomáhá robotovi najít nové a změněné URL.

Detailní nastavení robota patří do samostatného návodu Robots.txt: návod a příklady.

## Indexace: proč se stránka dostane nebo nedostane do indexu

Indexace znamená, že vyhledávač stránku zpracoval a může ji použít ve výsledcích. Samotná návštěva crawlerem nestačí. Google při indexaci analyzuje obsah stránky, metadata, obrázky, videa, duplicity a kanonickou verzi. U podobných nebo duplicitních URL vybírá reprezentativní canonical.

Stránka z indexu vypadne nebo se do něj vůbec nedostane například kvůli meta tagu `noindex`, duplicitě, chybě serveru, blokaci před crawlováním nebo slabému obsahu. U `noindex` je důležitý detail z dokumentace Googlu: aby crawler instrukci `noindex` viděl, stránka nesmí být zároveň blokovaná v `robots.txt`. Když robot na stránku nesmí, nemůže si její meta tag přečíst.

Canonical je častý zdroj nedorozumění. Značka `rel="canonical"` vyhledávači říká, kterou podobu podobného nebo duplicitního obsahu preferujete. Google ji ale bere jako signál, ne jako absolutní příkaz. Seznam ve své nápovědě popisuje podobný princip: canonical robotovi říká, kterou podobu má v ideálním případě zařadit do vyhledávání, a zároveň označuje duplicity.

V praxi se indexace často rozbije u filtrů e-shopu, parametrických URL, stránkování, tagů, prázdných kategorií a článků bez interních odkazů. U technického SEO jsem opakovaně viděla, že problém nebývá jedna velká chyba. Častější je několik instrukcí proti sobě: sitemap obsahuje URL, canonical ukazuje jinam, stránka má slabý obsah a interně na ni vede jeden odkaz z archivu.

Google Search Console má pro indexaci samostatný Page indexing report. Ukazuje stav URL, které Google zná v dané službě. Pro jednu konkrétní URL slouží URL Inspection. V něm Google zobrazuje indexační stav, kanonickou URL, informace o crawlování a možnost testovat živou stránku.

Praktické řešení indexačních problémů rozebírám zvlášť v článku Indexace stránek v Google: jak na ni.

## Ranking: podle čeho vyhledávač řadí výsledky

Ranking je řazení výsledků pro konkrétní dotaz. Google neřadí celý web jedním číslem. V dokumentaci k rankingovým systémům uvádí, že systémy pracují hlavně na úrovni stránky, i když používají také webové signály a klasifikátory. Silný web tedy automaticky neznamená, že každá jeho stránka bude vysoko.

Google veřejně popisuje několik skupin signálů: význam dotazu, relevance obsahu, kvalita obsahu, použitelnost stránky, kontext a nastavení uživatele. U aktuálních zpráv má čerstvost větší váhu než u slovníkové definice. U lokálního dotazu může rozhodovat poloha uživatele. U odborného tématu vyhledávač řeší důvěryhodnost zdroje a shodu s hledaným záměrem.

SERP (Search Engine Results Page, stránka výsledků vyhledávání) není jen seznam modrých odkazů. Může obsahovat organické výsledky, placenou reklamu, mapy, obrázky, videa, nákupní výsledky, featured snippets a u Googlu také AI prvky. První organická pozice proto nemusí mít stejnou viditelnost u všech dotazů.

Ranking neoddělujte od indexace. Stránka může být v indexu a přesto nerankovat, protože odpovídá špatnému intentu, má slabší obsah než konkurence, chybí jí interní odkazy, nemá externí autoritu nebo technicky nefunguje dobře na mobilu. Google řadí použitelnost stránky mezi signály. Rychlost webu ale nepřebije špatný obsah. Technické problémy spíš snižují šanci dobrého obsahu uspět.

Pro orientaci v pojmech jako SERP, canonical, crawler nebo search intent se hodí [SEO slovníček: 50 pojmů vysvětleno](/seo/seo-slovnik/).

## Crawling vs. indexace vs. ranking: přehledná tabulka

Rozdíl mezi crawlingem, indexací a rankingem je nejlépe vidět na diagnostice. Google Search Console rozděluje kontrolu mezi URL Inspection a Page indexing report. Seznam Webmaster podle nápovědy ukazuje, kolik stránek navštívil Seznam robot, kolik jich má ve vyhledávacím indexu, kolik má přesměrování a kolik hlásí chybu.

| Fáze | Co se děje | Co může selhat | Jak to ověřit | SEO dopad |
| --- | --- | --- | --- | --- |
| Crawling | Googlebot nebo SeznamBot stáhne URL | Blokace v `robots.txt`, chybějící odkazy, chyby 4xx/5xx, přetížený server | URL Inspection, Page indexing report, serverové logy, Seznam Webmaster | Bez crawlování není běžná indexace |
| Indexace | Vyhledávač stránku zpracuje a rozhodne, zda ji zařadí do indexu | `noindex`, špatný canonical, duplicita, slabý obsah, nedostupná stránka | URL Inspection, Page indexing report, `site:` operátor orientačně | Bez indexace stránka nemůže získat organickou návštěvnost z daného vyhledávače |
| Ranking | Vyhledávač vybírá pořadí pro dotaz | Nesoulad s intentem, slabá relevance, nízká autorita, horší použitelnost | Měření dotazů v Search Console, kontrola SERPu, SEO nástroje | Stránka je viditelná jen na dotazy, kde ji algoritmus vyhodnotí jako vhodný výsledek |

Tabulka ukazuje i to, proč hláška „stránka není na Googlu“ nestačí. Může jít o čtyři různé situace: Google ji nezná, Google ji nemůže projít, Google ji nechce indexovat, nebo ji indexuje, ale neřadí na dotaz, který sledujete.

Sitemapu jako vstupní mapu pro crawl řeší samostatný článek Sitemap.xml: jak vytvořit a odeslat.

## Proč se stránka nezobrazuje ve vyhledávání

Když se stránka nezobrazuje ve vyhledávání, nezačínejte pozicemi. Nejdřív zjistěte, ve které fázi vypadla. Google ve své dokumentaci popisuje tři fáze procesu a uvádí, že ne každá stránka projde všemi. Seznam ve Webmasteru podobně odděluje návštěvy robota, indexované stránky, přesměrování a chyby.

Nejčastější scénáře:

* **Stránka není procházená.** Nemá interní odkazy, není v sitemapě, blokuje ji `robots.txt`, vrací chybu nebo leží příliš hluboko ve struktuře. U velkých webů může hrát roli i crawl budget.
* **Stránka je procházená, ale není indexovaná.** Má `noindex`, canonical ukazuje na jinou URL, obsah je duplicitní nebo vyhledávač nevidí dost dobrý důvod ji zařadit.
* **Stránka je indexovaná, ale nerankuje.** Tady už nejde o technickou dostupnost, ale o relevanci, kvalitu, autoritu a intent.
* **Stránka rankuje na jiné dotazy.** Často se to stává, když nadpis, obsah a interní anchor texty míří k jinému tématu než primární klíčové slovo.

Crawl budget držte při zemi. Google v aktualizované dokumentaci z 22. července 2026 píše, že průvodce crawl budgetem je určený pro velmi velké a často aktualizované weby. Pokud web nemá velký počet rychle se měnících stránek a nové URL se procházejí v den publikace, stačí udržovat sitemapu a kontrolovat Page indexing report.

U e-shopu s desetitisíci URL už je situace jiná. Parametry, filtry a prázdné kategorie mohou spotřebovat pozornost crawleru na stránky, které nechcete ve výsledcích. V takovém případě rozhoduje kombinace interních odkazů, canonicalů, `noindex`, čisté `sitemap.xml` a pravidel v `robots.txt`.

Časté zkratky a omyly k viditelnosti ve vyhledávání shrnuje článek [10 nejčastějších SEO mýtů](/seo/seo-myty/).

## Jak zjistit, jestli Google stránku prošel a zaindexoval

U Googlu začněte v Google Search Console. URL Inspection podle nápovědy Googlu ukazuje informace o indexované verzi konkrétní stránky a dovolí otestovat, jestli je živá URL indexovatelná. Součástí jsou data o crawlování, indexovatelnosti, kanonické URL, strukturovaných datech a dalších prvcích.

Postup pro jednu URL:

1. Vložte přesnou URL do URL Inspection.
2. Zkontrolujte stav indexace.
3. Podívejte se na poslední crawl a zjištěnou kanonickou URL.
4. Spusťte test živé URL, pokud jste stránku nedávno opravili.
5. Po opravě požádejte o nové procházení, pokud to dává smysl.

Pro více URL použijte Page indexing report. Podle nápovědy Googlu ukazuje indexační stav všech URL, které Google v dané službě zná. Rozdíl mezi reportem a URL Inspection může vzniknout tím, že report vychází z posledního crawlu. Když jste problém opravili až po něm, musíte počkat na nové zpracování nebo použít test živé URL.

Operátor `site:` berte jen jako orientační kontrolu. Hodí se pro rychlé zjištění, zda Google nějaké URL z domény zobrazuje, ale není to přesný indexační audit. Pro vážnou diagnostiku používejte Search Console, serverové logy a crawler typu Screaming Frog nebo Sitebulb. U českého webu přidejte Seznam Webmaster, protože ukazuje samostatná data Seznam robota a indexu.

V obsahovém provozu s tisíci publikovaných článků se bez oddělení těchto kontrol nedá pracovat přesně. Jinak se technická dostupnost, indexace a ranking smrsknou do jedné věty: „SEO nefunguje.“ Ta věta neříká nic použitelného.

## Co ovlivňuje ranking v praxi

Ranking v praxi stojí na tom, jestli stránka odpovídá na konkrétní hledání lépe než jiné dostupné výsledky. Google mezi veřejně popsanými signály uvádí význam dotazu, relevanci, kvalitu, použitelnost, odbornost zdrojů, polohu a nastavení uživatele. V dokumentaci k rankingovým systémům zároveň píše, že používá řadu systémů a signálů, ne jeden jednoduchý faktor.

U běžného firemního webu nebo e-shopu hlídejte hlavně tyto oblasti:

* **Search intent**: stránka musí odpovídat tomu, co člověk hledá. Dotaz „jak fungují vyhledávače“ potřebuje výklad principu, ne nabídku SEO služby.
* **Obsah a struktura**: nadpisy, odstavce, tabulky a odpovědi mají pomoci rychle pochopit téma.
* **Interní odkazy**: Google používá odkazy k objevování stránek a pochopení relevance. Osamocený článek bez prolinkování má horší vstupní pozici.
* **Externí odkazy a autorita**: odkazy z důvěryhodných webů pomáhají vyhledávači vyhodnotit význam a důvěryhodnost stránky.
* **Technický stav**: stránka musí být dostupná, indexovatelná, rychlá, použitelná na mobilu a bez rozporů v canonicalech.

Pozor na mechanické seznamy ranking faktorů. Google nezveřejňuje přesný váhový model a váha signálů se mění podle dotazu. U aktuálního tématu může rozhodovat čerstvost, u evergreen návodu detail a stabilita, u lokální služby poloha a důvěryhodnost firmy.

Technické SEO je předpoklad, ne konkurenční výhoda samo o sobě. Rychlá stránka s prázdným obsahem nebude dobrý výsledek. Výborný článek schovaný za špatným canonicalem se zase nemusí dostat do hry vůbec.

## Google, Seznam a AI výsledky: co se mění a co zůstává

Google a Seznam používají podobný princip: robot prochází stránky, vyhledávač je zpracovává do indexu a při hledání řadí výsledky. Liší se nástroje, rychlost objevování, práce s českým trhem i podoba výsledků. StatCounter v srpnu 2026 uvádí pro Českou republiku Google 79,33 % a Seznam 15,63 %. U českých projektů se proto Seznam nevyplatí ignorovat.

SeznamBot má vlastní dokumentaci a vlastní User-Agent. Seznam Webmaster ukazuje čtyři praktické skupiny dat: návštěvy robota, stránky ve vyhledávacím indexu, přesměrování a chyby. Seznam také podporuje IndexNow, protokol pro oznámení změn obsahu vyhledávačům. V nápovědě Seznamu stojí, že ve většině případů není nutné přidávat každou stránku ručně. Stačí odkaz z jiné stránky, kterou SeznamBot zná.

AI výsledky mění podobu SERPu, ne základní technický řetězec. Google v dokumentaci k AI funkcím uvádí, že AI Overviews a AI Mode z pohledu vlastníka webu vycházejí ze Search systémů. Doporučení pro generativní AI vyhledávání staví na stejných základech jako SEO. Google také v květnu 2024 oznámil rozšíření AI Overviews v USA a plán dostat funkci k více než miliardě uživatelů do konce roku 2024.

Pro obsah to má praktický dopad. Opsaná definice pojmu nestačí. Stránka potřebuje jasnou odpověď, vlastní úhel, srozumitelnou strukturu, zdroje a autoritu. AI odpovědi mohou uživateli část informací shrnout přímo v SERPu. O to víc záleží na přesnosti, citovatelnosti a užitečnosti po rychlém přečtení.

Sklik není malý Google Ads a Seznam není malý Google. U organického vyhledávání platí totéž: principy se překrývají, ale diagnostiku dělejte zvlášť pro Google Search Console a zvlášť pro Seznam Webmaster.

## Praktický checklist pro majitele webu

Checklist použijte jako rychlé rozdělení problému. Google Search Console, Seznam Webmaster, `sitemap.xml`, `robots.txt`, canonical a `noindex` kontrolujte v tomto pořadí, protože každá vrstva závisí na předchozí.

1. **Ověřte, že stránka existuje a vrací správný HTTP kód.** Stránka pro indexaci má vracet 200 OK, ne 404, 500 nebo nekonečné přesměrování.
2. **Zkontrolujte `robots.txt`.** Google používá soubor hlavně pro řízení crawler trafficu. Pro skrytí stránky z indexu použijte `noindex`, ne zákaz v `robots.txt`.
3. **Zkontrolujte `noindex`.** Google podporuje `noindex` v meta tagu nebo HTTP hlavičce. Aby fungoval, crawler musí stránku smět navštívit.
4. **Zkontrolujte canonical.** Pokud canonical ukazuje na jinou URL, vyhledávač může indexovat jinou verzi.
5. **Podívejte se do `sitemap.xml`.** Jeden sitemap soubor má limit 50 000 URL nebo 50 MB nekomprimovaně. Do sitemapy dávejte jen URL, které chcete indexovat.
6. **Zkontrolujte interní odkazy.** Na důležité stránky má vést odkaz z relevantních míst webu. Odkaz v patičce není totéž jako odkaz z tematicky blízkého článku nebo kategorie.
7. **Použijte URL Inspection.** U jedné URL ověřte indexační stav, poslední crawl, kanonickou URL a možnost indexace živé stránky.
8. **Použijte Page indexing report.** U většího webu sledujte typy vyloučení a chyby v souhrnu, ne URL po URL.
9. **Pro Seznam zkontrolujte Seznam Webmaster.** Sledujte návštěvy Seznam robota, stránky v indexu, přesměrování a chyby.
10. **Až nakonec řešte ranking.** Pokud je stránka procházená a indexovaná, porovnejte obsah se SERPem, intentem, interními odkazy a autoritou konkurence.

Největší chyba je přeskočit diagnostiku a rovnou přepisovat text. Když stránka vůbec nevstoupila do indexu, lepší nadpis problém nevyřeší. Když je stránka indexovaná, ale odpovídá jinému intentu, technická oprava sama návštěvnost nepřinese.

Vyhledávače fungují jako postupný filtr. Nejdřív musí URL najít, potom ji musí chtít zařadit do indexu a až poté ji mohou vybrat pro konkrétní dotaz. SEO má smysl teprve ve chvíli, kdy víte, ve které fázi problém vznikl.

## Zdroje

* [Google Search Central: In-depth guide to how Google Search works](https://developers.google.com/search/docs/fundamentals/how-search-works)
* [Google Search Central: Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
* [Google Search Central: Introduction to robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
* [Google: How Google interprets robots.txt specification](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec)
* [Google Search Central: Block Search indexing with noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
* [Google Search Central: Canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
* [Google Search Central: Link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
* [Google Search Console Help: URL Inspection tool](https://support.google.com/webmasters/answer/9012289)
* [Google Search Console Help: Page indexing report](https://support.google.com/webmasters/answer/7440203)
* [Google Search: How ranking results are determined](https://www.google.com/intl/en_us/search/howsearchworks/how-search-works/ranking-results/)
* [Google Search Central: Guide to Search ranking systems](https://developers.google.com/search/docs/appearance/ranking-systems-guide)
* [Google Search Central: Optimize your crawl budget](https://developers.google.com/crawling/docs/crawl-budget)
* [Seznam.cz: SeznamBot](https://o-seznam.cz/napoveda/vyhledavani/seznambot/)
* [Seznam.cz: Seznam Webmaster](https://o-seznam.cz/napoveda/vyhledavani/seznam-webmaster/)
* [Seznam.cz: Nejčastější dotazy k vyhledávání](https://o-seznam.cz/napoveda/vyhledavani/nejcastejsi-dotazy/)
* [Seznam.cz: Protokol IndexNow](https://o-seznam.cz/napoveda/vyhledavani/seznambot/protokol-indexnow/)
* [StatCounter: Search engine market share Czech Republic, srpen 2026](https://gs.statcounter.com/search-engine-market-share/all/czech-republic)
* [Google Search Central: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
* [Google Search Central: Generative AI optimization guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

 ![Marie Müllerová](/_astro/marie-portret.CxDjTv2c_Z2nS1wq.webp)

[Marie Müllerová](/o-mne/)

Marketingu se věnuje přes šest let. Zaměřuje se na SEO a PPC reklamu v Google Ads a Seznam Sklik. K oboru se dostala v porovnávači cen Srovnáme, ve firmě Converso se vypracovala z asistentky na marketingovou specialistku a dodnes vede projekt Recenzer.cz. Za tu dobu spravovala přes 2 000 PPC kampaní, spolupracovala se 40+ affiliate partnery a stojí za více než 5 000 publikovanými články.

## Komentáře

Máte k článku dotaz nebo vlastní zkušenost? Napište mi a já vám ráda odpovím.

Načítám komentáře…

Přidat komentář

Jméno
  
E-mail

Komentář
  

Odeslat komentář

 

Doporučené

1. [1Co je AEO a GEO: SEO pro éru AI](/seo/aeo-geo/)
2. [2Nejlepší SEO nástroje 2026: velké srovnání](/seo/nejlepsi-seo-nastroje/)
3. [3SEO slovníček: 50 pojmů vysvětleno](/seo/seo-slovnik/)