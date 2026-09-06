# Vzor měsíčního komentáře

Jedna strana. Tři až čtyři čísla. Co se stalo, proč, co s tím. Posílá se do pátého pracovního dne.

Rešerše ukázala, že dlouhé reporty klient neotevře a že odchází „v tichu mezi reporty", ne kvůli špatným
číslům. Dashboard má pořád k dispozici; tohle je to, co si přečte.

---

## Ukázka (anonymizovaná, e-shop ~40 mil. Kč obratu, tier Správa)

> **Měření za srpen 2026** — e-shop XY, zpracoval Jan Novák, 3. 9. 2026
>
> **Měření běželo celý měsíc bez výpadku.** Rozdíl mezi GA4 a administrací zůstal na 12 % (v červenci 13 %),
> což je pro váš poměr mobilního provozu a míry souhlasu normální stav.
>
> **Co se stalo**
>
> 1. **Release 12. 8. rozbil měření přidání do košíku na mobilu.** Automatický průchod to zachytil ve 14:10,
>    tentýž den v 16:40 opraveno (změnila se třída tlačítka). **Chybí 4 hodiny dat**, přibližně 60 událostí
>    `add_to_cart`. Nákupy to nezasáhlo.
> 2. **Google zpřísnil od 15. 8. požadavky na souhlas pro remarketing.** Zkontrolovali jsme lištu 8. 8., tedy
>    před termínem — předává správně, nic jsme neměnili. Publika v Ads běží dál.
> 3. **Podíl `(not set)` u zdroje stoupl z 4 % na 9 %.** Příčina: nová kampaň na srovnávači bez UTM parametrů.
>    Poslali jsme vašemu specialistovi na PPC konvenci označování, od 25. 8. je to zpět na 4 %.
>
> **Čísla, na která se díváme**
>
> | | Srpen | Červenec | Poznámka |
> |---|---|---|---|
> | Objednávky v administraci | 1 284 | 1 190 | |
> | Konverze v GA4 | 1 130 | 1 035 | rozdíl 12 %, stabilní |
> | Konverze v Google Ads | 412 | 398 | sedí s GA4 do 6 % |
> | Alerty celkem / z toho vyžadovaly zásah | 6 / 2 | 4 / 1 | |
>
> **Co doporučujeme na září**
>
> Před spuštěním nové kolekce (plánováno 15. 9.) si vyhraďte s vývojáři 30 minut na kontrolu dataLayeru
> na nových typech stránek. U poslední kolekce se šablona lišila a stálo nás to půl dne dohledávání.
>
> **Co je otevřené**
>
> Čekáme na přístup do administrace pro srovnávání objednávek po jednotlivých ID (zmiňováno 3. 8.).
> Do té doby porovnáváme jen součty, což neodhalí ztrátu maskovanou duplicitou.

---

## Pravidla pro psaní

**Vždy uvést i to, že se nic nestalo.** „Měření běželo bez výpadku" je informace, za kterou klient platí.
Měsíc bez incidentu není měsíc bez hodnoty — ale musí to být napsané, jinak to vypadá, že se nic nedělo.

**Každý incident má čas a číslo.** Ne „opravili jsme problém s košíkem", ale „zachyceno ve 14:10, opraveno
v 16:40, chybí 4 hodiny dat, přibližně 60 událostí".

**Rozdíl vůči e-shopu vždy s kontextem.** Číslo samo o sobě klienta vyděsí. Vždy „12 %, v červenci 13 %,
pro váš poměr mobilu a souhlasů je to normální".

**Doporučení musí být proveditelné příští měsíc.** Ne „zvažte server-side měření", ale „vyhraďte 30 minut
s vývojáři před spuštěním kolekce 15. 9.".

**Otevřené věci se opakují, dokud se nevyřeší.** Když čekáme na přístup tři měsíce, stojí to v komentáři
třikrát. Je to zároveň doklad, že blokace není na naší straně.

**Bez marketingových frází.** Ne „data, kterým můžete věřit". Ne „bez dat se nedá rozhodovat".
