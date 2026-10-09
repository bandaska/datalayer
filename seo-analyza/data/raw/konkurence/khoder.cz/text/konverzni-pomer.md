# URL: https://www.khoder.cz/konverzni-pomer

1. [Domů](/)
2. Konverzní poměr e-shopu


Průvodce · E-commerce metriky

# Konverzní poměr e-shopu (conversion rate)

Vzorec znáte za minutu. Těžší je nenechat se zmást benchmarkem a sledovat konverzní poměr tam, kde rozhoduje — po kanálech a po marži, vedle čistého zisku.

[Rychlá odpověď](#rychla-odpoved)
[Jak ho sleduje náš report](/reporting-pro-eshopy)

Konverzní poměr se počítá z reálných dat e-shopu

![](assets/icon/shoptet-ico.png)Shoptet
![](assets/icon/ga.webp)Google Analytics 4
![](assets/icon/google-ads-icon.webp)Google Ads
![](assets/icon/sklik.png)Sklik
![](assets/icon/heureka-ico.png)Heuréka

Rychlá odpověď

Aktualizováno 15. 5. 2026 · Tomáš Khoder, e-commerce konzultant

## Jak spočítám konverzní poměr e-shopu a jaká hodnota je dobrá?

**Konverzní poměr** (anglicky **conversion rate**) je podíl návštěv, které skončí objednávkou: **objednávky ÷ návštěvy × 100**. U českých e-shopů se běžně pohybuje kolem **1–3 %**, ale samotné číslo nic neznamená bez kontextu — důležitější je konverzní poměr **po kanálech a po marži**.

Vysoká konverze na ztrátovém kanálu zisk nepřináší. Sledujte konverzní poměr proto vedle **čistého zisku a návratnosti reklamy**, ne izolovaně, a zlepšujte ho proti vlastní minulosti, ne proti cizímu benchmarku. Jestli některý placený kanál konverze spíš prodělává, odhalí to [PPC audit](/ppc-audit).

01 · Základ

## Co je konverzní poměr (conversion rate)

Konverzní poměr, anglicky **conversion rate**, vyjadřuje, jaká část návštěvníků udělá požadovanou akci — u e-shopu obvykle dokončí objednávku. Je to nejcitovanější metrika e-commerce a zároveň jedna z nejčastěji špatně interpretovaných.

### Vzorec a příklad

Konverzní poměr (%)

(počet objednávek ÷ počet návštěv) × 100

Příklad: 240 objednávek z 12 000 návštěv → (240 ÷ 12 000) × 100 = **2,0 %**. Klíčové: čitatel i jmenovatel musí být ze stejného zdroje dat — celý z GA4, nebo celý z reálných objednávek, ne kříženě.

### Jaký konverzní poměr je „dobrý” a proč je benchmark zrádný

U českých e-shopů se konverzní poměr běžně pohybuje kolem **1–3 %**. Cizí benchmark ale není cíl — liší se podle:

* **Oboru a ceny zboží** — drahé zboží a B2B konvertují jinak než rychloobrátka.
* **Podílu značkové (branded) návštěvnosti** — lidé, kteří už vás znají, konvertují výrazně lépe a zvedají průměr.
* **Zařízení a kanálu** — mobil vs desktop, organika vs e-mail vs PPC mají různé konverzní poměry.

Smysluplnější než honit cizí číslo je zlepšovat konverzní poměr **proti vlastní minulosti** a dívat se na něj v segmentech, ne jako na jeden průměr. Na e-shopu s nářadím třeba [konverzní poměr za první dva týdny po spuštění nové šablony vzrostl z 4,2 % na 4,9 %](/pripadova-studie-shoptet-sablona).

02 · Kontext

## Konverze po kanálech, ne celkově

### Proč celkový průměr lže

Jeden celkový konverzní poměr míchá dohromady značkovou návštěvnost (lidé, kteří jdou rovnou koupit) s chladnou návštěvností z reklamy. Když značkové návštěvy rostou, „konverzní poměr se zlepšil” — i když výkonnostní kampaně reálně oslabily. Proto se konverze čte **po kanálech, zařízeních a podle nový vs vracející se** zákazník.

### Konverze vs čistý zisk

Vyšší konverzní poměr nemusí znamenat vyšší zisk. Sleva zvedne konverzi a sníží marži. Kanál s konverzí 4 % může být ztrátový, pokud má drahé prokliky a nízkou marži. Proto konverzní poměr patří vedle **čistého zisku po všech nákladech** a **MER** — návratnosti přes všechny kanály po odečtení nákladů, ne vedle holého ROAS, který lže.

Souvislost rozebírám i v průvodci [break even point pro e-shop](/break-even-bod) — konverze a bod zlomu spolu úzce souvisí.

03 · V reportu · Přehled a Kampaně

## Konverzní poměr v kontextu, ne jako osamocené číslo.

Aby konverzní poměr něco říkal, musí být vedle tržeb, marže a návratnosti reklamy. V **e-commerce reportu** ho vidíte po kanálech a obdobích, s meziročním srovnáním rovnou vedle čísla — ne v pěti záložkách GA4.

* Konverze vedle čistého zisku a MER — ne izolovaně
* Srovnání s loňskem a předchozím obdobím rovnou vedle čísla
* Vychází z reálných objednávek (Shoptet / ERP), ne jen z modelu GA4

[Reporting pro e-shopyarrow\_outward](/reporting-pro-eshopy)

lockreport.khoder.cz/prehled

![Celkové shrnutí v e-commerce reportu: tržby, hrubý a čistý zisk, MER a predikce tržeb](assets/shots/overview-v3.webp)

Konverze
po kanálech

insights
Vedle čistého zisku

04 · Co s tím

## Co konverzní poměr zlepšuje a co ne

* **Reálně pomáhá:** [rychlost webu](/pripadova-studie-shoptet-sablona#rychlost), jasné ceny a dostupnost, zkrácený checkout, důvěryhodnost (recenze, doprava zdarma od částky), relevantní vstupní stránky pro daný dotaz.
* **Zdánlivě pomáhá, ale ne vždy:** plošné slevy — zvednou konverzi i sníží marži. Vždy je vyhodnoťte přes čistý zisk, ne přes konverzní poměr samotný.
* **Nesouvisí přímo:** více návštěv z chladné reklamy obvykle konverzní poměr *sníží* — což neznamená, že je kampaň špatná, pokud přivádí ziskové objednávky.

Konverzní poměr je diagnostická metrika, ne cíl. Cíl je **čistý zisk**. Náklady na získání zákazníka a jeho hodnotu v čase řeší navazující téma — udržení a hodnota zákazníka (LTV), na které se zaměřím v dalším průvodci. Jak konverzi sledovat v kontextu ukazuje [reporting pro e-shopy](/reporting-pro-eshopy). Metodiku měření konverzí popisuje i [nápověda Google Analytics](https://support.google.com/analytics/).

Případová studie · E-shop s nářadím

## Jak to vypadá v praxi.

![Titulní stránka e-shopu s nářadím v nové šabloně](assets/shots/shoptet-eshop-home-ostra.webp)

Případová studie

### [Jak nová Shoptet šablona zvýšila tržby e-⁠shopu s nářadím o 44 % ve druhém týdnu po spuštění](/pripadova-studie-shoptet-sablona)

+44 %tržeb ve druhém týdnu

99vlastních modulů na míru

+0,7 p. b.konverzního poměru

Číst studii

![Tomáš Khoder, e-commerce konzultant z Litoměřic](assets/khoder-transparent.webp)

Praxe
10+ let
v e-commerce

5,0

★★★★★

16 recenzí  
na Googlu

O mně · Kdo to počítá

## Tomáš Khoder.

Přes **10 let** se věnuji e-shopům — od placených kampaní přes analytiku po reporting. Konverzní poměr klientům nečtu izolovaně, ale vedle marže a čistého zisku.

* **10+ let** praxe v e-commerce
* Sídlo v **Litoměřicích** · klienti po celé ČR i SK
* **5,0 / 5,0** ze 16 hodnocení na Googlu

[Nezávazně poptat konzultaciarrow\_outward](/reporting-pro-eshopy#kontakt)
[Více o mně na khoder.cz](/)




Reference · Co říkají klienti

## Nejlepší argumenty vám dají moji klienti.

Hodnocení chodí přímo na Google — bez editace, bez filtrů. Čtěte si to samé, co vidí každý, kdo si mě vygoogluje před první schůzkou.

5,0

★★★★★

16 recenzíprůměr 5,0 přímo na Googlu

[Zobrazit všechny arrow\_outward](https://www.google.com/search?q=tom%C3%A1%C5%A1+khoder)

★★★★★

S panem Khoderem spolupracujeme už delší dobu a musím říct, že jsme naprosto spokojení. Pomáhá nám s nastavením měření konverzí, analytiky a přehledného reportingu pro naše klienty – všechno funguje perfektně a jeho reporting je opravdu na špičkové úrovni. Oceňuji hlavně jeho rychlost, preciznost a skvělou komunikaci. Na všem se dá domluvit a naše požadavky řeší doslova obratem. Díky tomu máme jistotu, že měření konverzí běží na 100 % správně, což je pro naši agenturu klíčové při správě kampaní. Děkujeme za spolupráci a určitě tě můžeme s klidným svědomím doporučit dál.

Číst celou recenzi →

T

Tomáš Veits

CEOPortine.czListopad 2025

★★★★★

Spolupráce s panem Khoderem je pro náš tým velkým přínosem. Jeho přístup je mimořádně profesionální a pragmatický – vždy se opírá o reálná data, vlastní zkušenosti a jasné argumenty. Od prvního převzetí našich marketingových kampaní se zaměřil na jejich efektivitu a návratnost, a výsledky na sebe nenechaly dlouho čekat. Výrazně se zlepšila výkonnost i přehlednost našich PPC aktivit. Pan Khoder nám navíc připravil velmi podrobnou analýzu e-shopu s návrhem desítek konkrétních vylepšení. Vše systematicky rozčlenil podle priorit a náročnosti implementace, což nám výrazně usnadnilo rozhodování o dalších krocích v rozvoji webu. Velmi si vážíme jeho schopnosti komunikovat složité věci srozumitelně, poskytovat kvalitní reporty a být skutečným partnerem, který přemýšlí v širším kontextu byznysu, ne jen v číslech z kampaní. Doporučujeme spolupráci s panem Khoderem každému, kdo to myslí s online marketingem a webem vážně.

Číst celou recenzi →

![RehaVitalCare s.r.o.](assets/logo-rehavita.png)

Martin Skala

ManažerRehaVitalCare s.r.o.Srpen 2025

★★★★★

Na spolupráci s panem Khoderem oceňuji především perfektně připravené podklady, podle kterých se i neprofesionál okamžitě orientuje a může dosáhnout vytyčeného cíle. Profesionálem je tady on. Určitě s ním budeme spolupracovat i v budoucnu a všem ostatním zájemcům můžeme jeho služby jedině doporučit. Pana Khodera jsme oslovili na základě doporučení, abychom zefektivnili měření a analytiku našich webů a kampaní. Jeho odborný přístup a detailní analýzy nás úspěšně dovedly k vytčenému cíli. Vedle stoprocentní profesionality oceňujeme i bezproblémovou komunikaci a bezchybné podklady, které nám umožnily implementovat potřebné změny hned napoprvé. Spolupráci s ním s klidným svědomím doporučujeme.

Číst celou recenzi →

P

Pavel Kuchár

DesignérJežek software s.r.o.Květen 2026

★★★★★

S Tomášem byla skvělá komunikace, vše trpělivě vysvětlil, nastavil a otestoval. Děkuju za přátelské jednání a myslím, že v budoucnu jeho služeb dál využiji.

Číst celou recenzi →

J

Jan Barančík

OwnerDronista.czBřezen 2026

★★★★★

S panem Khoderem máme výbornou zkušenost – je velmi vstřícný, nemá problém za námi kdykoliv osobně přijet, což si v dnešní době opravdu ceníme. Skvělé jsou především jeho perfektně zpracované reporty, které jsou přehledné, praktické a hned se s nimi dá pracovat. Má široký přehled v e-commerce, vždy přináší nové pohledy a je na něm vidět opravdová snaha posouvat věci směrem k maximální efektivitě. Spolupráce s ním je přínosná a rozhodně ho můžeme doporučit.

Číst celou recenzi →

J

Jan Kalista

JednatelHealth Brands s.r.o.Září 2025

★★★★★

Spolupráce s panem Tomášem Khoderem je vždy naprosto bezproblémová. Velice oceňujeme jeho rychlost, s jakou řeší vzniklé problémy na našem e-shopu, dále pak smysl pro detail a skutečné nasazení – vždy dokáže nabídnout funkční řešení. Doporučujeme pana Khodera jako spolehlivého partnera pro tvorbu i správu e-shopu.

Číst celou recenzi →

I

Ilona Kocmanová

JednatelkaZlatnictví ZlatíčkoListopad 2025

★★★★★

Děkuji Tomášovi za skvělý přístup a vhled při tvorbě webu, určitě se budu těšit na další spolupráci do budoucna. Výsledkem jsme nadšeni všichni ve firmě. Vřele doporučuji!

Číst celou recenzi →

R

Radka Balšánková

SpolečníkCITUS s.r.o.Duben 2025

★★★★★

Velice si vážím osobního přístupu a empatie ze strany pana Khodera. Kampaně jsou vždy navrženy s citem a dle potřeb zákazníka a fungují velmi dobře.

Číst celou recenzi →

R

Radek Ploc

JednatelStudio PLOC s.r.o.Listopad 2025



close

★★★★★




FAQ · Často kladené otázky

## Otázky kolem konverzního poměru.

Jak se počítá konverzní poměr e-shopu?expand\_more

**Konverzní poměr** (conversion rate) je podíl návštěv, které skončily objednávkou: **objednávky ÷ návštěvy × 100**. Příklad: 240 objednávek z 12 000 návštěv = 2 %. Důležité je počítat ho z jednoho zdroje dat — celý z GA4, nebo celý z reálných objednávek, ne kříženě.


Jaký konverzní poměr e-shopu je dobrý?expand\_more

U českých e-shopů se běžně pohybuje kolem **1–3 %**, ale samotné číslo bez kontextu nic neznamená. Liší se podle oboru, ceny zboží, podílu značkové návštěvnosti a zařízení. Smysluplnější než honit benchmark je zlepšovat konverzní poměr **proti vlastní minulosti** a sledovat ho po segmentech.


Proč mi sedí tržby v Shoptetu, ale ne v GA4?expand\_more

GA4 konverze **modeluje a atribuuje** podle session a souhlasu s cookies, Shoptet eviduje reálné objednávky. Rozdíl 10–30 % je běžný. Konverzní poměr počítejte konzistentně z jednoho zdroje a jako zdroj pravdy o tržbách berte objednávky ze Shoptetu nebo ERP.


Proč Google Ads ukazuje jiné konverze než GA4?expand\_more

Google Ads počítá konverzi podle prokliku reklamy a vlastního atribučního okna, GA4 podle posledního nepřímého kanálu. Každý nástroj proto přiřkne stejnou objednávku jinam. Pro rozhodování o rozpočtu je spolehlivější **celkový pohled (MER a čistý zisk)** než konverze v jednom rozhraní.


Proč je ROAS zavádějící a co sledovat místo něj?expand\_more

ROAS počítá obrat na korunu reklamy, ale ignoruje marži, dopravu a provize. Vysoký konverzní poměr na ztrátovém kanálu zisk nepřinese. Konverzní poměr proto sledujte vedle **čistého zisku a MER**. Souvislost rozebírám v průvodci [break even point](/break-even-bod).


Kolik procent tržeb dělají vracející se zákazníci?expand\_more

Liší se e-shop od e-shopu, ale u zavedených e-shopů tvoří vracející se zákazníci podstatnou část tržeb při nižších nákladech na získání. Proto konverzní poměr sledujte odděleně pro nové a vracející se návštěvníky — vracející se obvykle konvertují výrazně lépe a zkreslují celkový průměr.

Související

## Pokračujte dál

Navazující průvodci a služby. Kompletní přehled najdete v [rozcestníku služeb a průvodců](/rozcestnik).

trending\_up

#### [Break even point](/break-even-bod)

Bod zlomu, break-even ROAS i MER a proč ROAS lže.

diversity\_3

#### [Customer Lifetime Value](/customer-lifetime-value)

Hodnota zákazníka za život a poměr LTV/CAC.

analytics

#### [Reporting pro e-shopy](/reporting-pro-eshopy)

Čistý zisk po všech nákladech, kampaně i sklad v jednom reportu.

Začneme

## Chcete konverzi vidět v kontextu zisku?

Ukážu vám na vašich datech, jak by report ukazoval konverzní poměr po kanálech vedle čistého zisku a MER. Úvodní konzultace je zdarma a nezávazná.

[Domluvit konzultaciarrow\_outward](/reporting-pro-eshopy#kontakt)
[Napsat e-mail](mailto:tomas@khoder.cz)

Případová studie [Jak nová Shoptet šablona zvýšila tržby e-⁠shopu s nářadím o 44 % ve druhém týdnu po spuštění](/pripadova-studie-shoptet-sablona)