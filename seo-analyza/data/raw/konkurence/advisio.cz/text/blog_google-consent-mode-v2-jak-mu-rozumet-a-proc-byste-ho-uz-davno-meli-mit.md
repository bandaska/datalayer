# URL: https://www.advisio.cz/blog/google-consent-mode-v2-jak-mu-rozumet-a-proc-byste-ho-uz-davno-meli-mit/

**Obsah článku:**

* [Co je to consent mode?](#co-je-to-consent-mode)
* [Rozdíl mezi Google Consent Mode V1 a V2](#rozdil-mezi-google-consent-mode-v1-a-v2)
* [Jak funguje Google Consent Mode a jak ho implementovat](#jak-funguje-google-consent-mode-a-jak-ho-implementovat)
* [Jak zjistit, jestli je Google Consent Mode aktivní?](#jak-zjistit-jestli-je-google-consent-mode-aktivni)
* [Google Consent Mode běží, stačí to?](#google-consent-mode-bezi-staci-to)

**Používáte Google Ads? Oslovujete zákazníky remarketingem? A nastavili jste si správně consent mode, abyste o tyhle možnosti nepřišli?**

S příchodem GDPR a dalších regulací na ochranu osobních údajů se firmy musely adaptovat na nová pravidla. Balancují na hraně respektování soukromí uživatelů a zachování funkčních [online reklam](https://www.advisio.cz/ppc/). Aby pravidla dodržely a o jednu z nejúčinnějších cest k platícím zákazníkům nepřišly, **nastavily si od 1. března 2024 revoluční nástroj – Google Consent Mode.** Máte ho už taky? Víte, co to consent mode je a co se stane, když si ho neimplementujete?

## Co je to consent mode?

Díky consent mode, neboli režimu souhlasu, může každý uživatel aktivně a vědomě určovat, která data a jak o něm budou na webových stránkách shromažďována a využívána. Třeba pro účely cílené reklamy nebo remarketingu. Většina provozovatelů využívala pro sběr dat o návštěvnících svých webů Google Consent Mode V1, **to se ale na začátku března změnilo.**

Povinně musely implementovat nový režim souhlasu Google Consent Mode V2. A tím odpovídáme na nejčastější otázku nejen našich klientů – **je consent mode povinný? Ano, je.** Změny vychází z Digital Markets Act, který stanovila Evropská unie, a týkají se těch nejznámějších společností. **Bez implementace režimu souhlasu nesmíte do platforem Microsoft, Meta a především Google žádná data poskytovat.** Přesně tak, ani do Google Analytics 4, Google Ads nebo Google Nákupů, které jsou pro e-shopy nepostradatelné.

[Chci áčkové PPC](https://www.advisio.cz/ppc/)

Google se k dodržení nařízení postavil právě spuštěním Google Consent Mode V2, bez kterého e-shopům postupně přestává remarketing fungovat. **Od návštěvníků webu je teď nutné získat výslovný souhlas s využíváním dat**, třeba pro reklamní systémy, skrze cookie lištu. Automatické přijetí všech cookies je minulostí, uživatel si může vybrat, které informace o sobě poskytne, a které ne.

## Rozdíl mezi Google Consent Mode V1 a V2

Parametry Google Consent Mode V2 jsou o něco bohatší než ve verzi 1. **Umožňují ještě přesnější řízení zpracování údajů.** Verze 2 přináší vylepšené integrace s nástroji pro správu souhlasu a poskytuje webovým vývojářům a marketérům jasnější informace o tom, jak uživatelé pracují s žádostmi o souhlas. Dobrá zpráva je, že automaticky funguje při propojení na nejznámější e-shopové platformy, jako je Shoptet nebo Upgates.

**Google navíc přidal povinnost zasílat dva typy nových souhlasů:**

* *AD\_USER\_DATA*[1][1]  
  Souhlas s poskytnutím uživatelských dat nástrojům Google.
* *AD\_PERSONALIZATION*[1][1]  
  Souhlas s cílením personalizovaných reklam.

## Jak funguje Google Consent Mode a jak ho implementovat

Pokud jste zaspali a za posledního čtvrt roku nové pravidlo nedodrželi, udělejte to co nejdříve. Základní [implementace Google Consent Mode](https://www.advisio.cz/datova-analytika/) vyžaduje několik kroků. **Zaprvé vložte do webové stránky skript, který propojí consent mode s požadovanými nastaveními.**

**Jak by měl vypadat skript:**

window.gtag = function() { dataLayer.push(arguments); }

window.gtag(‚consent‘, ‚default‘, {

ad\_storage: ‚denied‘,

analytics\_storage: ‚denied‘,

ad\_user\_data: ‚denied‘,

ad\_personalization: ‚denied‘,

wait\_for\_update: 500

});

Tento kód nastaví výchozí hodnoty pro všechny parametry na *denied*, což znamená, že bez uděleného souhlasu nebudou Google služby ukládat cookies pro reklamní ani analytické účely. Toto nastavení by mělo platit pro země Evropského hospodářského sektoru.

**Pro integraci s řešením pro správu souhlasu můžete následně updatovat nastavení Google Consent Mode na základě uděleného souhlasu uživatelem:**

const updateConsent = newConsentStates => {

window.gtag(‚consent‘, ‚update‘, newConsentStates);

writeStatesToStorage(newConsentStates);

};

A pokud využíváte Google Tag Manager, doporučujeme využít [šablonu](https://www.simoahava.com/custom-templates/consent-mode/) od Simo Ahavy.

## Jak zjistit, jestli je Google Consent Mode aktivní?

K tomu vám pomůže nástroj Developer Tool. Tam se dostanete touto cestou:

Tlačítko F12 nebo CTRL + SHIFT + I

Pravé tlačítko myši > Prozkoumat

Tři tečky vpravo nahoře > Další nástroje > Nástroje pro vývojáře

V pásu karet zvolte Network a vyhledejte “collect”.

![](https://www.advisio.cz/wp-content/uploads/2024/06/consent-mode-v2-clanek-novy-600x431.png)

**GCS (consent mode v1):**

![](https://www.advisio.cz/wp-content/uploads/2024/06/consent-tabulka1-600x204.png)

**GCD (consent mode v2):**

![](https://www.advisio.cz/wp-content/uploads/2024/06/consent-tabulka2-559x600.png)

## Google Consent Mode běží, stačí to?

**Nestačí**, je to jen jeden krok z celého balíčku opatření na funkční a rostoucí byznys v době, kdy dochází k významné změně v oblasti získávání dat online – **Google Chrome ukončí na začátku roku 2025 podporu cookies třetích stran.** To ovlivní fungování online reklamy a sledování uživatelů napříč weby.

*„Bez cookies 3. stran přestanou fungovat kampaně pro dynamický retargeting nebo třeba opuštěný košík. Už nebudeme moci vytvořit publikum předchozích návštěvníků, abychom je zpětně oslovili remarketingem. Další komplikace nastává u měření konverzí. V případě strojového učení Google je zásadní mít co nejvíce dat pro vyhodnocování kampaní. Bez cookies 3. stran to však nebude možné,”* doplnila **Markéta Gramesová**, PPC Team Leader Advisio.

Co jsou cookies třetích stran už jsme si vysvětlili v [předchozím článku](https://www.advisio.cz/blog/co-jsou-cookies-tretich-stran-a-jak-jejich-konec-ovlivni-e-shopy/). Jak se ale na takové změny připravit a jaké jsou další možnosti sběru dat?

**Jak nepřijít o cenná data? Implementujte na váš e-shop [*[DataPlus]*](https://dataplus.advisio.cz/)**

Úbytek dat o zákaznících je patrný už nyní. Vede k tomu rozmach adblockerů, omezování cookies 3. stran i zmiňovaná GDPR pravidla. Snižuje se efektivita reklam, analytici nemají relevantní reporty pro rozumné rozdělování rozpočtů a zákazníci přicházející z onlinu ubývají. A s nimi tržby.

**Advisio se na změny připravuje s velkým předstihem a výsledkem je vlastní řešení – DataPlus.** To díky technologii server-side tagging doměří až 99 % dat nutných pro oslovení relevantních zákazníků a dlouhodobý růst. Pak je bezpečně posílá do Google Analytics 4, Google Ads nebo META systémů.

Společně s [DataPlus](https://dataplus.advisio.cz/) můžete využít alternativní metody pro shromažďování dat a cílení reklamy, které nabízí marketingové platformy:

* **Google Ads Rozšířené konverze:** Zasílání šifrovaných informací o zákazníkovi (např. e-mail) do Googlu pro zpřesnění dat o konverzích.
* **Facebook Conversions API:** Kombinace serverového a klientského sledování pro [komplexní analýzu chování uživatelů](https://www.advisio.cz/blog/conversion-api-jak-se-letos-zmenily-moznosti-reportovani/) a efektivity reklam na Facebooku.
* **Seznam retargeting Rozšířená identifikace:** Zasílání šifrované e-mailové adresy do Seznamu pro zpřesnění cílení reklamy.

**Řešením je také využívání dat prvních stran, kontextové cílení reklamy a budování SEO.** O tom všem píšeme ve [zbrusu novém rozcestníku](https://www.advisio.cz/konec-cookies-3-stran/). Právě tam najdete různé možnosti přípravy vašeho e-commerce byznysu na marketingovou revoluci, které se v onlinu nikdo nevyhne.

**Sdílejte článek:**

![fotografie Jan Malatinský](https://www.advisio.cz/wp-content/uploads/2024/04/Navrh-bez-nazvu-47.png)

**Jan Malatinský** [1]  
[1] Senior Data Analyst

[Napište si autorovi o radu](mailto:blog@advisio.cz)

Datový analytik - hlavou v datech, srdcem ve sportu.