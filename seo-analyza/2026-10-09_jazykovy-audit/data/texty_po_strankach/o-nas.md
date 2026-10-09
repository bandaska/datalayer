# /o-nas

## Hlavička stránky (title, meta, OG)
- `title`: O nás: Vít Novotný a tým datalayer.cz
- `meta:description`: Kdo stojí za datalayer.cz, jak pracujeme s daty klientů a co od vás budeme potřebovat. Technický tým pro GA4, GTM, server-side, consent a BigQuery.
- `meta:og:title`: O nás: Vít Novotný a tým datalayer.cz
- `meta:og:description`: Kdo stojí za datalayer.cz, jak pracujeme s daty klientů a co od vás budeme potřebovat. Technický tým pro GA4, GTM, server-side, consent a BigQuery.
- `meta:twitter:title`: O nás: Vít Novotný a tým datalayer.cz
- `meta:twitter:description`: Kdo stojí za datalayer.cz, jak pracujeme s daty klientů a co od vás budeme potřebovat. Technický tým pro GA4, GTM, server-side, consent a BigQuery.

## Strukturovaná data (JSON-LD) – texty
- `jsonld:itemListElement.name`: Úvod
- `jsonld:itemListElement.name`: O nás
- `jsonld:mainEntity.name`: Kdo odpoví na moji zprávu?
- `jsonld:mainEntity.acceptedAnswer.text`: Přímo Vít Novotný, tracking & data engineer. Ozve se do jednoho pracovního dne.
- `jsonld:mainEntity.name`: Komu patří účty a data?
- `jsonld:mainEntity.acceptedAnswer.text`: Vám. GA4, Tag Manager, Google Cloud i reklamní účty zakládáme na vaši firmu a my dostáváme jen přístup, který můžete kdykoli odebrat. Po skončení spolupráce nic nemigrujete.
- `jsonld:mainEntity.name`: Může po vás pokračovat někdo jiný?
- `jsonld:mainEntity.acceptedAnswer.text`: Ano. Stavíme na standardních nástrojích a dokumentace je výstup každého projektu. Podle ní může pokračovat interní tým i jiný dodavatel.
- `jsonld:mainEntity.name`: Posíláte osobní údaje do GA4?
- `jsonld:mainEntity.acceptedAnswer.text`: Ne. Do GA4 neposíláme e-maily ani telefony. Do reklamních systémů je posíláme jen jako hash SHA-256 a jen se souhlasem návštěvníka.
- `jsonld:mainEntity.name`: Řešíte i právní stránku cookies a souhlasu?
- `jsonld:mainEntity.acceptedAnswer.text`: Měření nastavujeme podle zákona o elektronických komunikacích a doporučení ÚOOÚ. Nejsme ale advokátní kancelář, takže právní posouzení konkrétního zpracování zajišťuje váš právník.

## Obsah stránky

### [sekce] 
- `a`: Přeskočit na obsah
- `a`: Úvod
- `li`: O nás
- `p`: [ o nás ]
- `h1`: Kdo stojí za datalayer.cz a jak pracujeme s daty
- `p`: Za datalayer.cz stojí Vít Novotný, tracking & data engineer. Stavíme a ověřujeme měření pro e-shopy, B2B a velké firmy – od datové vrstvy přes Tag Manager, GA4 a souhlasy po server-side tracking a BigQuery. Pracujeme ve vašich účtech a každou implementaci předáme s dokumentací.
- `a`: [ Napsat Vítovi ]
- `a`: [ Jak pracujeme ]
- `p`: Odpovídá přímo Vít Novotný · odpověď do jednoho pracovního dne
- `li`: Účty a data zakládáme na vaši firmu
- `li`: Validace před každým předáním
- `li`: Standardní nástroje, žádné černé skříňky

### [sekce] Proč začínáme u datové vrstvy
- `p`: [ přístup ]
- `h2`: Proč začínáme u datové vrstvy
- `p`: Když firma rozhoduje o reklamě podle dat, kterým nikdo nevěří, problém většinou není v nástroji.
- `p`: Problém bývá ve spodní vrstvě: v tom, jak web data sbírá, jestli respektuje souhlas a jestli někdo ověřil, že čísla sedí. Proto začínáme u datové vrstvy, podle které nese jméno i datalayer.cz.
- `p`: Nasadit kód pro nás neznamená konec projektu. Končíme až ve chvíli, kdy čísla sedí s tržbami nebo s CRM a rozdíly umíme vysvětlit.
- `p`: Neprodáváme krabicové nástroje. Měření stavíme ve vašich účtech a předáváme ho s dokumentací, podle které může pokračovat kdokoli.

### [sekce] Pro koho pracujeme
- `p`: [ pro koho ]
- `h2`: Pro koho pracujeme
- `p`: E-shop potřebuje jiná data než firma, která prodává přes obchodníky.
- `h3`: E-shopy
- `div`: Pro e-shopy, kterým GA4 ukazuje jiné tržby než administrace. Stavíme e-commerce měření podle schématu GA4, aby Google Ads, Meta, Sklik i Heureka dostaly stejnou hodnotu objednávky.
- `a`: Měření pro e-shopy →
- `h3`: B2B a lead generation
- `div`: Víte, kolik přišlo poptávek, ale ne, které z nich se změnily v zakázku. Propojíme formuláře s CRM a reklamním systémům pošleme i to, co se s poptávkou stalo dál.
- `a`: Měření pro B2B a lead generation →
- `h3`: Velké firmy
- `div`: Více domén, týmů a dodavatelů a každý měří trochu jinak. Zavedeme měřicí plán, názvosloví a verzování jako standard. Server-side a BigQuery postavíme ve vašem Google Cloudu.
- `a`: Měření pro velké firmy →

### [sekce] Jak zacházíme s daty – vašimi i vašich zákazníků
- `p`: [ principy ]
- `h2`: Jak zacházíme s daty – vašimi i vašich zákazníků
- `p`: Čtyři pravidla, která platí pro každý projekt.
- `li`: Data patří vám. Účty, kontejnery, projekty v Google Cloudu i data zakládáme na vaši firmu. My máme jen přístup, který můžete kdykoli odebrat.
- `li`: Souhlas je podmínka, ne překážka. Měření nastavujeme podle § 89 odst. 3 zákona o elektronických komunikacích a doporučení ÚOOÚ. Odmítnutí musí být stejně snadné jako přijetí.
- `li`: Osobní údaje nikdy v čitelné podobě. Do GA4 neposíláme e-maily ani telefony, do reklamních systémů jen hash a jen se souhlasem.
- `li`: Žádné černé skříňky. Stavíme na standardních nástrojích jako GTM, GA4 a BigQuery, takže po nás může pokračovat kdokoli.
- `p`: Nejsme advokátní kancelář, právní posouzení konkrétního zpracování zajišťuje váš právník. Postup spolupráce a to, co od vás v jednotlivých krocích budeme potřebovat, popisuje stránka Jak pracujeme.
- `a`: Jak pracujeme

### [sekce] Časté otázky
- `p`: [ FAQ ]
- `h2`: Časté otázky
- `p`: Nenašli jste odpověď? Napište nám.
- `a`: Napište nám
- `summary`: Kdo odpoví na moji zprávu?
- `div`: Přímo Vít Novotný, tracking & data engineer. Ozve se do jednoho pracovního dne.
- `summary`: Komu patří účty a data?
- `div`: Vám. GA4, Tag Manager, Google Cloud i reklamní účty zakládáme na vaši firmu a my dostáváme jen přístup, který můžete kdykoli odebrat. Po skončení spolupráce nic nemigrujete.
- `summary`: Může po vás pokračovat někdo jiný?
- `div`: Ano. Stavíme na standardních nástrojích a dokumentace je výstup každého projektu. Podle ní může pokračovat interní tým i jiný dodavatel.
- `summary`: Posíláte osobní údaje do GA4?
- `div`: Ne. Do GA4 neposíláme e-maily ani telefony. Do reklamních systémů je posíláme jen jako hash SHA-256 a jen se souhlasem návštěvníka.
- `summary`: Řešíte i právní stránku cookies a souhlasu?
- `div`: Měření nastavujeme podle zákona o elektronických komunikacích a doporučení ÚOOÚ. Nejsme ale advokátní kancelář, takže právní posouzení konkrétního zpracování zajišťuje váš právník.

### [sekce] 
- `p`: [ pokračujte ]
- `a`: Jak pracujeme od konzultace po předání měření
- `a`: Audit měření zjistíme, kde data utíkají
- `a`: Kontakt odpověď do jednoho pracovního dne

### [sekce] Chcete nás nejdřív poznat? Napište Vítovi
- `p`: [ Kontakt ]
- `h2`: Chcete nás nejdřív poznat? Napište Vítovi
- `p`: Napište nám e-mail, nebo vyplňte formulář. Odpovídá přímo Vít Novotný.
- `li`: E-mail one@datalayer.cz
- `a`: one@datalayer.cz
- `span`: VN
- `span`: Odpovídá Vít Novotný
- `span`: obvykle do jednoho pracovního dne
- `li`: Do jednoho pracovního dne navrhneme termín.
- `li`: Na třicet minut projdeme web a cíle.
- `li`: Do dvou pracovních dnů po konzultaci dostanete shrnutí a návrh dalšího kroku.

### [sekce] 
- `nav@aria-label`: Drobečková navigace

### [sekce] Chcete nás nejdřív poznat? Napište Vítovi
- `ol@aria-label`: Co se stane po odeslání