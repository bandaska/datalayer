# URL: https://datanostro.com/cs/pro-ucetni/

PRO ÚČETNÍ A FINANCE

# Faktura, *jak ji znáte.*

DataNostro vystavuje faktury v korunách, jako neplátce DPH dle § 4 zákona č. 235/2004 Sb., a posílá je s ISDOC 6.0.2 přílohou pro přímý import do Pohody, Money a ABRY. Žádný PayPal, žádný Stripe, žádné devizové přepočty od banky. Tahle stránka je pro vaše finanční oddělení — pošlete jim ji.

## Faktická tabulka

|  |  |
| --- | --- |
| Měna fakturace | Česká koruna (Kč) — primární. Euro (€) volitelně pro slovenské zákazníky. |
| Plátce DPH | Ne — DataNostro je neplátce DPH dle § 4 z.č. 235/2004 Sb. Faktury obsahují poznámku „Neplátce DPH". O případné registraci k DPH klienty informujeme s 30denním předstihem. |
| Forma faktury | PDF (lidské čtení) + ISDOC 6.0.2 XML (strojový import) v jednom e-mailu. Obojí lze stáhnout z dashboardu kdykoliv zpětně. |
| Ověřené účetní systémy | Pohoda (Stormware) · Money S3, S4, S5 (Solitea) · ABRA Flexi · MRP-K/S · Daňová evidence Premier. Stejný formát ISDOC 6.0.2 přijímá většina ostatních CZ ERP. |
| Platební metoda | Bankovní převod na CZ účet (Fio banka). Ve vyšších tarifech volitelně QR platba na faktuře. Žádný platební procesor, žádné poplatky platební brány. |
| Splatnost | Standardně 14 dní od vystavení. Pro Enterprise klienty po individuální dohodě (30 nebo 60 dní). Upomínky a pozdní platby řeší automatický workflow s e-mailovým upozorněním účetní + vlastníkovi účtu. |
| Faktura ke stažení | /dashboard/fakturace/ — všechny faktury, PDF + ISDOC, libovolný počet stažení. Platí i pro již zrušené účty (5 let dle § 35 zákona o účetnictví). |
| Identifikační údaje dodavatele | Jan Malatinský — OSVČ, IČO uvedeno na každé faktuře a v živnostenském rejstříku. Plný kontakt v patičce každé faktury. |
| Faktury v cizí měně | Pro projekty mimo ČR fakturujeme v EUR s reverse charge poznámkou (čl. 196 směrnice 2006/112/ES) pokud má klient platné DIČ pro intra-komunitární plnění; jinak bez DPH s odkazem na neplátce. |
| Storno / dobropis | Vystavujeme bez prodlení do 5 pracovních dní od oprávněné žádosti, posíláme PDF + ISDOC zpráva pro storno (typ dokumentu „CN", credit note). Sledujeme vazbu na původní fakturu pro audit trail. |

## Co je ISDOC a proč to chcete

ISDOC je standardizovaný český XML formát pro elektronickou výměnu faktur, vyvinutý spoluprací SPIS a ICT Unie. Verze 6.0.2 je dnes podporovaná všemi rozšířenými CZ ERP systémy. Místo přepisování řádků z PDF stačí vašemu programu otevřít přiložené XML.

### Pohoda (Stormware)

Soubor → Datová komunikace → Načtení dat z XML. Vyberte ISDOC, mapování načte automaticky. Faktura se objeví v Přijatých fakturách.

Testováno na Pohoda 13.x a vyšší.

### Money S3 / S4 / S5

Účetnictví → Přijaté faktury → Import → ISDOC. Money rozpozná verzi automaticky a doplní do správné agendy podle období.

Testováno na Money S3 21+ a S5 1.x.

### ABRA Flexi

Modul Faktury → Import → typ ISDOC. Flexi automaticky páruje dodavatele podle IČO a vyplní hlavičku včetně variabilního symbolu.

Funguje i přes REST API pro dávkové zpracování.

### Ostatní systémy

ISDOC 6.0.2 importují i Premier, MRP, Stereo, Helios a další. Pokud váš systém ISDOC nezná, PDF je vždy v příloze a obsahuje QR kód s platebními údaji.

Pokud import v něčem zaškobrtá, napište na [[email protected]](/cdn-cgi/l/email-protection#8ceaede7f8f9feedefe9cce8edf8ede2e3fff8fee3a2efe3e1) — ladíme a vystavíme náhradní soubor do hodiny.

## Když přicházíte od zahraničního managed dodavatele

Většina globálních sGTM hosterů fakturuje v USD nebo EUR, často přes platební procesor v USA. Pro české účetnictví to znamená několik kroků navíc, které u nás odpadají.

|  | DataNostro | Typický globální managed hosting |
| --- | --- | --- |
| Měna | Kč (volitelně €) | USD nebo € |
| Devizový přepočet | Žádný | Banka účtuje 0,5–2 % z částky + fixní poplatek |
| Reverse charge / DIČ | Není potřeba (neplátce) | Často vyžaduje DIČ pro intra-komunitární režim, jinak DPH 21 % na vstupu |
| Strojový import | ISDOC 6.0.2 | PDF / e-faktura PEPPOL u dražších tarifů |
| Platební procesor | Žádný — bankovní převod | Obvykle US-based platební brána (zadržuje data 30+ dní mimo EU) |
| Účetní souhlas s dodavatelem | Jednoduchý — CZ subjekt, IČO | Někdy stop pro veřejný sektor / banky / regulované odvětví |

Tabulka srovnává jen účetní stránku — funkční rozdíly závisí na konkrétním dodavateli.

## Otázky, které účetní nejčastěji ptají

Můžete mi vystavit fakturu zpětně za uplynulé období?

Ano. Napište na [[email protected]](/cdn-cgi/l/email-protection) s číslem účtu / IČO. Standardně řešíme do 1 pracovního dne. Pokud potřebujete vyúčtování za celé fiskální období (např. pro auditora), pošleme i konsolidovaný přehled v PDF + CSV.


Jak řešíte změny fakturačních údajů (změna IČO, sídla, plátcovství DPH)?

Vlastník účtu může údaje změnit v /dashboard/nastaveni/, nová faktura už jde s aktuálními daty. Pro retroaktivní opravu starých faktur (např. přidání DIČ po pozdější registraci) vystavíme dobropis + novou fakturu se stejnou datovou hodnotou.


Co když DataNostro v budoucnu bude plátce DPH? Jak se to projeví na faktuře?

Informujeme klienty alespoň 30 dní před plánovaným dnem registrace. Od dne registrace přibude na faktuře řádek DPH 21 % (CZ tenanti) nebo reverse charge dle čl. 196 (EU B2B s DIČ). Cena bez DPH se nemění — DPH se přičítá. Smluvně je tato možnost ošetřena ve VOP čl. 11.


Můžete fakturu vystavit jiné firmě (např. mateřské společnosti, fakturační skupině)?

Ano. V dashboardu lze nastavit fakturační údaje odlišné od kontaktních — typicky používáno u skupin, kde provoz účtu vede dceřiná společnost, ale fakturuje se na holding. Údaje na faktuře se nemění retroaktivně.


Jak dlouho uchováváte faktury po zrušení účtu?

5 let dle § 35 zákona č. 563/1991 Sb. o účetnictví. Po dobu uchování zůstává /dashboard/fakturace/ přístupné majiteli původního účtu pro samoobslužné stažení.


Posíláte e-faktury do datové schránky?

Standardně e-mailem (PDF + ISDOC). Do datové schránky posíláme na vyžádání ke konkrétní faktuře (uveďte ID DS). Pro Enterprise klienty lze nastavit jako default způsob doručení.

## Otázka, kterou vaše účetní potřebuje rozhodnout?

Pište přímo na fakturační kontakt — odpovídáme do jednoho pracovního dne, většinou rychleji.

[[email protected]](/cdn-cgi/l/email-protection#6600070d12131407050326020712070809151214094805090b)
[Datové zpracování (DPA)](/cs/dpa/)