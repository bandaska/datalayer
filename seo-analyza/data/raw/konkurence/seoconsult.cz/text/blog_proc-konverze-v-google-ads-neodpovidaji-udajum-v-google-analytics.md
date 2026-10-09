# URL: https://www.seoconsult.cz/blog/proc-konverze-v-google-ads-neodpovidaji-udajum-v-google-analytics

## Drobečková navigace

1. [Domů](/)
2. [Blog](/blog)
3. Proč konverze v Google Ads neodpovídají údajům v Google Analytics?

# Proč konverze v Google Ads neodpovídají údajům v Google Analytics?

[atribuce](/stitky/atribuce)

[PPC](/stitky/ppc)

![Analytics](/sites/default/files/styles/fullwidth/public/images/2023/06/laptop-g53c835c79_640.jpg.webp?itok=YHVQfMkC)

[![Profile picture for user Vlastimil Malík](/sites/default/files/styles/thumbnail/public/images/2025/12/vlastminil-malik.jpg.webp?itok=_46rHz7o)](/user/64)

Vlastimil Malík
| 16. 6. 2023

Správné zaznamenávání konverzí v PPC reklamě je naprosto klíčové pro měření účinnosti vašich reklamních kampaní a optimalizaci vašich inzerátů a cílových stránek. Jak na to?

## Co v článku najdete

* [Scénář 1](#sec-1)
* [Scénář 2](#sec-2)
* [Atribuce Google](#sec-3)
* [Závěrečné myšlenky](#sec-4)

Přesné sledování konverzí a jejich efektivní atribuce jsou dva největší problémy v PPC reklamě. Koneckonců, vaše optimalizační rozhodnutí jsou tak dobrá, jak dobrá jsou data spojená s vašimi kampaněmi. V průběhu let jsme pracovali s mnoha klienty, kteří sledování konverzí měli nainstalované špatně nebo vůbec, popřípadě se jim konverze zaznamenávaly duplicitně.

**Správné zaznamenávání konverzí v PPC reklamě** je přitom naprosto klíčové pro měření účinnosti vašich reklamních kampaní a optimalizaci vašich inzerátů a cílových stránek. Pokud zaznamenávání konverzí nepracuje správně, může to mít několik velmi nepříjemných důsledků:

* **Ztráta důležitých dat o výkonu reklamních kampaní** - Pokud se vaše zaznamenávání konverzí neprovádí správně, nemůžete získat přesné informace o tom, jak vaše reklamní kampaně fungují a kolik konverzí skutečně generují. Bez těchto dat se můžete spoléhat na nepřesné odhady a rozhodování na základě nedostatečných informací.
* **Nesprávné měření ROI -** Pokud nevíte přesně, kolik konverzí vaše reklamní kampaně generují, nemůžete získat přesné údaje o návratnosti investic (ROI). To může mít za následek špatné rozhodnutí o výdajích na reklamu a snížení ziskovosti vaší kampaně.
* **Špatné rozhodnutí o optimalizaci -** Pokud nemůžete získat přesné údaje o tom, co funguje a co ne, nemůžete si být jistí, že provádíte správné rozhodnutí o optimalizaci vaší reklamní kampaně. (respektive na základě nesprávných vstupních dat budou vaše rozhodnutí prakticky vždy špatná) To může vést k nízké účinnosti kampaně, nízkému počtu konverzí a vysokým nákladům na akvizici zákazníků.

Zkrátka, správné zaznamenávání konverzí je klíčové pro **[úspěšnou PPC reklamu](https://www.seoconsult.cz/ppc-reklama)**. Bez přesných dat o výkonu vaší kampaně nemůžete provádět správná rozhodnutí o optimalizaci, což bude mít negativní dopad na výkonnost vaší reklamní kampaně a celkově na váš byznys.

Nedávno jsem pracoval se dvěma značkami, které měly zřejmě problém se sledováním konverzí. Po dalším zkoumání se ukázalo, že obě značky měly různé nesrovnalosti v atribuci mezi službou Google Ads a Google Analytics, což je ve skutečnosti velmi časté. V tomto blogu vás seznámím s oběma těmito scénáři a s tím, jak vám **[Google Attribution](https://support.google.com/analytics/answer/9397590?hl=en#zippy=%2Cin-this-article)** (samostatný nástroj v rámci Google Analytics) může pomoci.

## Scénář 1

U jedné značky byly tržby vykazované v Google Ads vždy výrazně vyšší než ty, které vykazoval Analytics u návštěvnosti Google cpc. Abych tento nesoulad blíže prozkoumal, importoval jsem transakce z Google Analytics do Google Ads (s nastavením "Include In Convs" (Zahrnout do konverzí) nastaveným na hodnotu No (Ne), abych zabránil dvojímu vykazování).

Podle služby **Google Analytics** byl nižší počet transakcí a příjmy byly téměř o 300 tisíc Kč nižší než to, co vykazovaly statistiky v Google Ads. Kontaktoval jsem podporu společnosti Google, abych lépe pochopil rozdíly ve vykazování mezi službami Google Ads a Analytics. Odpověděli mi, že je to způsobeno **[rozdílnými atribučními modely](https://www.seoconsult.cz/blog/technologicke-limity-soucasne-digitalni-reklamy)**.

Tato odpověď mi nedávala úplný smysl, protože atribuční modely, by měly mít vliv pouze na to, jak se připisují kredity za konverze napříč kampaněmi v rámci uživatelského rozhraní Google Ads, což znamená, že celkové příjmy a/nebo celkové konverze připisované kampaním Google Ads (google / cpc v GA) by byly stejné. Pokračoval jsem v pátrání po této problematice, protože jsem stále neměl pocit, že mám úplnou odpověď.

## Scénář 2

V jiném účtu jsem importoval transakce z Analytics, abych opět pozoroval rozdíly. Přestože všechna nastavení, včetně zvoleného **atribučního modelu pro jednotlivé konverzní akce**, byla naprosto stejná, stále byl rozdíl v příjmech okolo 100 000 Kč. Pátral jsem tedy dál, až jsem dospěl k jasnému vysvětlení.

Problém spočívá v tom, že obě platformy používají **různé metody vykazování**. Služba Google Analytics používá vykazování "času konverze" (např. datum, kdy došlo k transakci), zatímco Google Ads používá vykazování "času interakce" (např. datum souvisejícího kliknutí na reklamu). Přestože jsou transakce zaznamenávány prostřednictvím značky Google Analytics, jakmile jsou importovány do Google Ads, systém automaticky převede vykazování těchto transakcí na "čas interakce".

Rozdíl mezi vykazováním **"času interakce" a "času konverze"** způsobuje tzv. zpoždění konverze. Pokud bych například kliknul na reklamu 1. května a později 6. května nakoupil, byla by tato transakce (a s ní spojený příjem) v systému Analytics vykázána 6. května a v Google Ads by byla vykázána 1. května. Zpoždění konverze můžete zjistit tak, že spustíte sestavu pomocí pole "dny do konverze".

Jak jsem zmínili u atribučních modelů, **celkové množství konverzí se neztrácí**, ale potenciálně se přesouvají mimo rozsah dat, který používáte při porovnávání obou platforem. Například importované transakce byly vytvořeny na konci května. V Google Ads jsou však hodnoty konverzí vykazovány již od března. Je to proto, že transakce probíhající nyní jsou přiřazeny k minulým datům, kdy došlo k posledním kliknutím.

Moje další otázka tedy zněla: "Co je správně: sledování Google Ads nebo sledování Google Analytics?".

Rozdíl je způsoben „deduplikaci“, kterou provádí služba Analytics. Sledování Google Ads je jednokanálové, což znamená, že si není vědomo zapojení jakýchkoli kanálů (Direct, Organic, jiné placené kanály atd.) mimo Google. Naproti tomu služba Google Analytics provádí dedukci, pokud je zapojeno více kanálů. Služba Analytics pracuje s modelem posledního nepřímého kliknutí (poslední kliknutí, ignoruje Direct, pokud to není jediný zapojený kanál).

Na otázku, který ze způsobů měření je správný, musím odpovědět, že ani jeden nefunguje přesně. Google Ads, jakožto jediný kanál, si bere příliš velký kredit. Služba Google Analytics, která provádí deduplikaci na základě modelu posledního kliknutí, připisuje příliš málo bodů. Pravda je někde uprostřed. Nejlepší způsob, jak o získat přesné informace, je prostřednictvím nového projektu **Attribution beta**, který najdete v levém navigačním menu služby Google Analytics. Ten umožňuje vybrat různé **atribuční modely** (například DDA), které se použijí na data služby Analytics, takže deduplikace není založena na posledním kliknutí. **Attribution beta** je oddělena od služby Analytics, takže nijak neovlivní ani nezmění vaše přehledy v Analytics. Místo toho se jedná o samostatné prostředí pro lepší atribuci dat. V rámci rozhraní můžete dokonce přepínat mezi vykazováním času konverze a času interakce.

Dobře, to je hodně. Pojďme si tedy projít různé faktory, které ovlivňují nesoulad mezi vykazováním konverzí v Google Ads a Google Analytics:

* Google Analytics dokáže zobrazit více atribučních modelů prostřednictvím nástroje Porovnání modelů, ale při exportu dat o konverzích do služby Google Ads odesílá konverze nebo prodeje připsané službě Google Ads pomocí posledního atribučního modelu bez přímého kliknutí.
* Google Analytics zohledňuje více kanálů, nejen Google.
* Pokud je tedy v systému Google Analytics do cesty konverze započítáno VÍCE kanálů, je méně pravděpodobné, že kampaň Google Ads bude posledním, nepřímým kliknutím (ve srovnání s omezeným zobrazením cesty konverze, které má Google Ads), a proto kampaně Google Ads dostanou v systému GA celkově méně kreditů, než jsou tato data exportována do Google Ads.
* Google Ads používá vykazování času interakce a Google Analytics používá vykazování času konverze. Vliv této skutečnosti na rozdíly ve vykazování se liší v závislosti na prodejním nebo konverzním cyklu. Čím delší je prodleva mezi kliknutím a konečnou konverzí, tím větší může být rozdíl mezi údaji o konverzích importovanými z aplikace Google Analytics do Google Ads a údaji o konverzích vykázanými přímo v Google Ads.

Nyní tedy chápeme rozdíly ve způsobu připisování příjmů a rozdíly mezi používáním reportingu Google Ads a reportingu Google Analytics. Které z nich byste měli používat pro **optimalizaci kampaní Google Ads**?

Zástupci Google tvrdí, že by vždy doporučili používat Google Ads, protože poskytují více datových bodů. To však také znamená, že pokud je vaše **ROAS** 415 % v Google Ads a pouze 330 % v Google Analytics, skutečné ROAS pravděpodobně leží někde uprostřed a měli byste to vzít v úvahu při stanovení cíle ROAS pro vaše kampaně.

## Atribuce Google

Vedoucí pracovník služby Analytics skutečně docela dobře zdůvodnil, proč prozkoumat beta verzi služby **Google Attribution**, abyste získali další informace o údajích o konverzích. Tuto beta verzi najdete ve svém účtu Analytics v postranní nabídce směrem dolů.

Důležitá rada: Abyste mohli vytvořit projekt Attribution, musíte mít přístup k úpravám na úrovni účtu. Po nastavení účtu bude nějakou dobu trvat, než se začnou vyplňovat data.

Jeden z hlavních rozdílů mezi **přehledy konverzních cest** Google Analytics a přehledy konverzních cest Google Attribution spočívá v tom, že Google Attribution zobrazuje přesné procento kreditu přiděleného kanálu v rámci konverzní cesty. V přehledu konverzní cesty služby Google Analytics se procenta nezobrazují.

## Závěrečné myšlenky

Co jsem se během této zkušenosti naučil? V Google Ads je rozdíl mezi používáním sledování webových stránek Google a importem transakcí z Analytics. Možná je lepší používat sledování Google Ads, protože poskytuje více datových bodů pro systém při automatickém nabízení nebo obecném rozhodování v účtu. Pokud však máte přísné cíle ROAS, možná budete chtít nastavit cíl o něco vyšší, zejména pokud služba Google Ads vykazuje výrazný rozdíl v příjmech ve srovnání se službou Analytics. A pokud mezi nimi vidíte významný rozdíl v příjmech nebo konverzích, mějte na paměti zpoždění, které vzniká při vykazování interakcí oproti vykazování času konverzí.

Zdroj: marketingland.com, facebook.com, cpcstrategy.com

Autor: Vlastimil Malík

Foto zdroj: pixabay.com

![Profile picture for user Vlastimil Malík](/sites/default/files/styles/kontakt/public/images/2025/12/vlastminil-malik.jpg.webp?itok=No2xkq9n)

### **Autor článku:** Vlastimil Malík

SEO manažer

**Vlastimil** patří mezi zkušené SEO specialisty s více než dvacetiletou praxí v online marketingu. Optimalizaci pro vyhledávače se věnuje již od roku **2001**, kdy bylo SEO teprve na začátku svého vývoje. Díky dlouholetým zkušenostem pomohl stovkám firem zvýšit návštěvnost webů, zlepšit pozice ve vyhledávačích a získat více zákazníků z organického vyhledávání. Specializuje se na komplexní SEO strategie, obsahový marketing, copywriting, tvorbu PR článků i optimalizaci webů pro moderní AI vyhledávače a asistenty. Má bohaté zkušenosti s tvorbou obsahu pro e-shopy, magazíny, firemní weby i rozsáhlé obsahové portály. Dokáže připravit odborné i prodejní texty na téměř jakékoli téma – od módy, stavebnictví a gastronomie až po automobilový průmysl nebo technické obory. Při své práci propojuje technické SEO, kvalitní obsah a marketingovou strategii tak, aby texty přinášely nejen lepší pozice ve vyhledávačích, ale především skutečné obchodní výsledky.

## Více článků z blogu

[![Umělá inteligence a obsah YMYL: Co nesmíte podcenit?](/sites/default/files/styles/upoutavka/public/images/2026/10/image-8-10-2026-09_38_25.jpg.webp?itok=CtAZdplY)](/blog/jak-tvorit-ymyl-obsah-ktery-budou-ai-vyhledavace-bez-obav-citovat)

### [Jak tvořit YMYL obsah, který budou AI vyhledávače bez obav citovat](/blog/jak-tvorit-ymyl-obsah-ktery-budou-ai-vyhledavace-bez-obav-citovat)

Martin Kulhánek
| 7. 10. 2026

Jaké signály důvěry musí vykazovat obsah s vysokým dopadem na život a zdraví (YMYL), aby se jej umělá inteligence nebála citovat jako prověřený zdroj?

[Přečíst článek](/blog/jak-tvorit-ymyl-obsah-ktery-budou-ai-vyhledavace-bez-obav-citovat)

[![Jak rozpumpovat linkbuilding ve věku umělé inteligence](/sites/default/files/styles/upoutavka/public/images/2026/10/image-8-10-2026-09_39_57.jpg.webp?itok=IV7sXWqm)](/blog/budovani-odkazu-v-ere-ai-nebojte-se-rozsirit-sve-page-obzory)

### [Budování odkazů v éře AI: Nebojte se rozšířit své off-page obzory](/blog/budovani-odkazu-v-ere-ai-nebojte-se-rozsirit-sve-page-obzory)

Martin Kulhánek
| 6. 10. 2026

Kvalitní obsah, online PR i oslovování těch správných partnerů: Posuňte budování zpětných odkazů do nové doby a udělejte ze své značky uznávanou autoritu.

[Přečíst článek](/blog/budovani-odkazu-v-ere-ai-nebojte-se-rozsirit-sve-page-obzory)

[![12 vylepšení pro reklamní platformu sítě Reddit](/sites/default/files/styles/upoutavka/public/images/2026/10/image-8-10-2026-09_41_42.jpg.webp?itok=3VhdZ2z3)](/blog/reklamni-system-platformy-reddit-12-tipu-jak-ho-udelat-pritazlivejsi)

### [Reklamní systém platformy Reddit: 12 tipů, jak ho udělat přitažlivější](/blog/reklamni-system-platformy-reddit-12-tipu-jak-ho-udelat-pritazlivejsi)

Martin Kulhánek
| 5. 10. 2026

Co chybí placené inzerci na globální komunitní platformě Reddit, aby mohla konkurovat zavedeným hráčům na trhu a stala se pro značky ještě atraktivnější?

[Přečíst článek](/blog/reklamni-system-platformy-reddit-12-tipu-jak-ho-udelat-pritazlivejsi)

[Zobrazit všechny články](/blog)

## Používáme tyto nástroje

![WordPress](/sites/default/files/images/2022/12/wordpress_logo.svg)

![PrestaShop](/sites/default/files/images/2022/12/prestashop-logo-vector.png)

![WooCommerce](/sites/default/files/images/2022/12/woocommerce_logo_woo_commerce.png)

![Shoptet](/sites/default/files/images/2022/12/shoptet-logo-1.png)

![Upgates](/sites/default/files/images/2022/12/upgates-logo.png)

![FastCentrik](/sites/default/files/images/2022/12/fastcentrik.png)

![GA4](/sites/default/files/images/2024/02/ga4.jpg)

![Google Merchant](/sites/default/files/images/2024/02/google-merchant-center.jpg)

![Google Tag Manager](/sites/default/files/images/2024/02/tag-manager.jpg)

![Collabim](/sites/default/files/images/2024/02/collabim.jpg)

![Marketing Miner](/sites/default/files/images/2024/02/marketing-miner.jpg)

![ahrefs](/sites/default/files/images/2024/02/ahrefs.jpg)

![Ecomail](/sites/default/files/images/2024/02/ecomail.jpg)

![Mailchimp](/sites/default/files/images/2024/02/mailchimp.jpg)