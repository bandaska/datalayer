# URL: https://www.advisio.cz/blog/jak-ukladat-data-v-bigquery/

**Obsah článku:**

* [1. Vytvořte si účet](#1-vytvorte-si-ucet)
* [2. Založte projekt](#2-zalozte-projekt)
* [3. Přidělte práva k editování](#3-pridelte-prava-k-editovani)
* [4. Propojte BigQuery s Google Analytics](#4-propojte-bigquery-s-google-analytics)
* [5. Nastavte správně platební údaje](#5-nastavte-spravne-platebni-udaje)
* [Data vždy pod kontrolou](#data-vzdy-pod-kontrolou)

BigQuery patří pod Google Cloud Platform a funguje na stejné technologii jako ukládání dat v Google Analytics, které si data uchovává po dobu 14 měsíců. Díky BigQuery ale můžete uchovávat a pracovat s mnohem staršími daty a za minimální cenu. Proto je tento nástroj efektivnější. A jak tedy data v BigQuery ukládat? Připravili jsme pro vás návod, který vás celým procesem snadno provede.

## 1. Vytvořte si účet

První krok je nejjednodušší – [potřebujete účet](https://cloud.google.com/) k nastavení služby BigQuery. Lze také využít váš již existující účet u společnosti Google.

[![](https://www.advisio.cz/wp-content/uploads/2022/12/1.png)](https://www.advisio.cz/wp-content/uploads/2022/12/1.png)

Po otevření odkazu se zobrazí obrazovka [viz obrázek]. Zvolíte možnost **Sign in/Přihlásit se**. Dále se budou kroky lehce lišit. Máte-li již vytvořený účet Google pro své podnikání přihlaste se jako do běžného e-mailu.

[![](https://www.advisio.cz/wp-content/uploads/2022/12/14-600x489.png)](https://www.advisio.cz/wp-content/uploads/2022/12/14.png)

V opačném případě si budete muset účet vytvořit. To zvládnete sami.

## 2. Založte projekt

Po vytvoření účtu je třeba se přepnout do konzole. Ta nahradila tlačítko přihlásit se v pravém horním rohu. Na nové stránce vybereme ‚select a project‘ a ve vyskakovacím okně ‚new project‘ [viz obrázek]. Lze i jednoduše využít následující [odkaz.](https://console.cloud.google.com/projectcreate)

[![](https://www.advisio.cz/wp-content/uploads/2022/12/2.png)](https://www.advisio.cz/wp-content/uploads/2022/12/2.png)

Vyplňte jméno projektu a pomocí tlačítka **Edit zkontrolujte ID**. Pokud ID obsahuje například testtest-123456, zkuste zaměnit za testtest nebo testtest-cz.

Ve jméně i ID Google klade určitá **omezení**. Do jména můžete zadávat malá i velká písmena, číslice, jednoduché uvozovky, mezery, pomlčky nebo vykřičníky. V ID máte možnost zadat jen malá písmena, číslice a pomlčky. ID musí začínat písmenem a končit písmenem nebo číslicí. **Location** budete měnit jen v případě, že máte vytvořenou vlastní organizaci. Dále už jen **CREATE.**

[![](https://www.advisio.cz/wp-content/uploads/2022/12/1.1.png)](https://www.advisio.cz/wp-content/uploads/2022/12/1.1.png)

## 3. Přidělte práva k editování

V navigačním menu vyberte „IAM & Admin“ a podsložku „IAM“. Tady je zapotřebí přidat uživatele přes položku **„Grant access“**. Do položky “New principals” vložte e-mail ppc@advisio.cz, jako roli nastavte Editor a uložte pomocí tlačítka „save“.

[![](https://www.advisio.cz/wp-content/uploads/2022/12/3-1.png)](https://www.advisio.cz/wp-content/uploads/2022/12/3-1.png)

## 4. Propojte BigQuery s Google Analytics

V dalším kroku propojíte GA4 a BQ. V GA4 přejděte na záložku vlevo a vyberte **„Administrátor“** a poté „Propojení se službou BigQuery“, tam klikněte na „Propojit“.

[![](https://www.advisio.cz/wp-content/uploads/2022/12/4.png)](https://www.advisio.cz/wp-content/uploads/2022/12/4.png)

[![](https://www.advisio.cz/wp-content/uploads/2022/12/5.png)](https://www.advisio.cz/wp-content/uploads/2022/12/5.png)

V **“Nastavení propojení”** vyberte projekt BigQuery [do vyhledávače napište 2 znaky z názvu nebo ID].

![](https://www.advisio.cz/wp-content/uploads/2022/12/3.1.png)

Pravděpodobně na vás vyskočí tento **oznamovací řádek**, vytučněná oprávnění jsou důležitá. V jednom z dalších kroků tato práva přiřadíme navíc, aby vše fungovalo.

![](https://www.advisio.cz/wp-content/uploads/2022/12/3.2.png)

**Vraťte se zpět do Google Cloud Platform**. V navigačním menu vyberte “IAM & Admin” a ve složce “Roles” vytvořte nové potřebné role [viz obrázek].

![](https://www.advisio.cz/wp-content/uploads/2022/12/3.3.png)

**Oprávnění** vytvoříte snadno.

1. Název a ID pojmenujte podle nového správce [například Advisio.cz]
2. Vymažte Description
3. Přidejte oprávnění “serviceusage.services.enable” kliknutím na “Add Permissions“
4. Vložte název [Advisio.cz] do připraveného okna
5. Zaškrtněte pravidlo
6. Klikněte na tlačítko”Add”

![](https://www.advisio.cz/wp-content/uploads/2022/12/3.4.png)

Do jedné stejné role přidejte také druhé a třetí povolení [“resourcemanager.projects.setlamPolicy” a “bigquery.datasets.update”]. Na závěr v “IAM & Admin” a ve složce “IAM” přidejte novému uživateli [ppc@advisio.cz] **druhou**, námi vytvořenou **roli** s názvem “advisio.cz”.

![](https://www.advisio.cz/wp-content/uploads/2022/12/3.5.png)

**Naším cílem je tarif zdarma**, což je 10 GB aktivních dat a 1 TB k selektování dat za měsíc. Pokud vznikne situace, že tyto limity překročíte, budou poplatky naprosto minimální. Proto v nastavení umístění dat vybírejte Evropskou unii.

Vše si jednoduše [vypočtěte na kalkulačce od Google](https://cloud.google.com/products/calculator). Abyste limity vyčerpali, nastavte si frekvenci denního ukládání dat. **Gratulujeme, máte propojeno.**

![](https://www.advisio.cz/wp-content/uploads/2022/12/4.0.png)

![](https://www.advisio.cz/wp-content/uploads/2022/12/4.1.png)

## 5. Nastavte správně platební údaje

Po dokončení těchto nastavení vám BigQuery pracuje jako **free-verze, která skončí po 60 dnech**. Abyste uchovávali data i nadále, potřebujete vytvořit **platební profil s platební kartou** [pokud už platební účet máte vytvořený, tento krok se vás netýká – jen stačí propojit stávající účet viz bod č. 5.1]. Nejsnadněji to uděláte prostřednictvím vyskakovací lišty, kterou jste celou dobu přehlíželi. Teď ji ale využijete. Stačí kliknout na “Start free”.

[![](https://www.advisio.cz/wp-content/uploads/2022/12/6.png)](https://www.advisio.cz/wp-content/uploads/2022/12/6.png)

[![](https://www.advisio.cz/wp-content/uploads/2022/12/7.png)](https://www.advisio.cz/wp-content/uploads/2022/12/7.png)

Nejdůležitější část [vyplnění platební karty] najdete na konci nastavování.

![](https://www.advisio.cz/wp-content/uploads/2022/12/5.2..png)

### 5.1 Přiřaďte stávající platební účet k projektu

Provedete to přes navigační menu **“Billing” a “Manage billing account”**.

[![](https://www.advisio.cz/wp-content/uploads/2022/12/9-1.png)](https://www.advisio.cz/wp-content/uploads/2022/12/9-1.png)

V liště se překlikněte na **“My project”**. Ve výběru klikněte na 3 tečky u vašeho projektu a zvolte “Change billing”.

![](https://www.advisio.cz/wp-content/uploads/2022/12/8-2.png)

V roletce vyberte vámi vytvořený platební účet a klikem na “Set account” jej potvrďte.

![](https://www.advisio.cz/wp-content/uploads/2022/12/9.png)

Dále musíte **předejít situaci, že se vám data po 60 dnech přepíšou**. V navigačním menu vyberte “BigQuery”, dále podsložku “BigQuery Studio”. Zobrazí se vám důležité informace.

[![](https://www.advisio.cz/wp-content/uploads/2022/12/10.png)](https://www.advisio.cz/wp-content/uploads/2022/12/10.png)

Pozor!

Dobu expirace je ale možné přepsat asi až za 2-3 dny po tom, co založíte BigQuery a reálně začnete ukládat svá data.

V navigaci projděte přes jméno projektu a “External connection” na analytics\_123456789. V pravé části je 7 řádků, ale pro vás je nejdůležitější řádek **“Default table expiration”**. Pokud je v něm cokoli „jiného než **výraz Never”**, je to špatně. Pokud tam máte například 60 days, změňte to přes tlačítko “Edit detail”.

[![](https://www.advisio.cz/wp-content/uploads/2022/12/11.png)](https://www.advisio.cz/wp-content/uploads/2022/12/11.png)

**Zrušte  označení “Enable table expiration” a uložte.** Podobně to proveďte o úroveň níž events\_ (1).

[![](https://www.advisio.cz/wp-content/uploads/2022/12/12.png)](https://www.advisio.cz/wp-content/uploads/2022/12/12.png)

1) Rozklikněte events\_(1)

2) Otevřete “Details”

3) Pokud v řádku “Table expiration” JE “Never”, nepokračujete v dalším kroku.

4) Pokud je tam cokoli jiného, otevřete “Edit detail”, přepněte nastavení na “None”.

5) Uložte

[![](https://www.advisio.cz/wp-content/uploads/2022/12/13.png)](https://www.advisio.cz/wp-content/uploads/2022/12/13.png)

**[Áčkový tip]** Máte starší tabulky? Překontrolujte i ty a případně změňte data. Nyní máte vše správně nastaveno.

## Data vždy pod kontrolou

Líbil se vám náš návod? Pracujte s BigQuery a mějte všechna svá data pohromadě. Pořád nevíte, jak na to? [Zeptejte se](https://www.advisio.cz/kontakt/) našich áček na analytiku.

[Chci vědět více](https://www.advisio.cz/datova-analytika/)

**Štítky:**
[BigQuery](https://www.advisio.cz/blog/stitek/bigquery/) [datová analytika](https://www.advisio.cz/blog/stitek/datova-analytika/) [google analytics](https://www.advisio.cz/blog/stitek/google-analytics/) [jak propojit BIgQuery s Google Analytics](https://www.advisio.cz/blog/stitek/jak-propojit-bigquery-s-google-analytics/)

**Sdílejte článek:**

![fotografie Jan Malatinský](https://www.advisio.cz/wp-content/uploads/2024/04/Navrh-bez-nazvu-47.png)

**Jan Malatinský** [1]  
[1] Senior Data Analyst

[Napište si autorovi o radu](mailto:blog@advisio.cz)

Datový analytik - hlavou v datech, srdcem ve sportu.