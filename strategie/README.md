# Strategie DataLayer.cz – produkt, pricing, pozicování

Tato složka je oddělený pracovní prostor pro přemýšlení o **službě DataLayer.cz jako produktu**:
co prodáváme, komu, za kolik a proti komu. Není to kód webu – je to sdílená paměť
strategických rozhodnutí a rešerší, na kterých se postupně pracuje v dalších sessions.

## Aktuální téma

**Kontinuální (perpetuální) správa analytiky** – měsíčně placená služba, u které chceme vědět:

1. co přesně za ni klient na trhu dostává (dodávka, reporty, SLA),
2. jaká je férová cena v ČR/SK, v Evropě a v USA a jak se strukturují tiery,
3. jaký konkrétní problém klienta řeší (bez obecných frází) a kdy k ní klient přistoupí,
4. jestli je nutně navázaná na BigQuery export, nebo existuje i nad nativními konektory,
5. jak má vypadat nejlepší a nejrelevantnější nabídka DataLayer.cz.

Detailní plán: [`01-plan-reserse-kontinualni-sprava-analytiky.md`](./01-plan-reserse-kontinualni-sprava-analytiky.md)

## Struktura složky

```
strategie/
  README.md                                     tento soubor
  01-plan-reserse-kontinualni-sprava-analytiky.md  plán rešerše krok za krokem (fáze 0–10)
  reserse/                                      výstupy jednotlivých kroků (1 krok = 1 soubor, číslováno podle fáze)
  data/
    pricing-dataset.csv                         každá nalezená cena = 1 řádek (normalizace do CZK/měsíc)
    evidence-log.csv                            každý důkaz/citát/zdroj = 1 řádek (URL, datum, doslovný citát)
    pain-log.csv                                každý konkrétní pojmenovaný pain = 1 řádek s důkazem
  sablony/
    profil-konkurenta.md                        šablona profilu konkurenta/agentury
    profil-nastroje.md                          šablona profilu SaaS nástroje (monitoring/kvalita dat)
```

## Pravidla práce

- **Důkaz, ne dojem.** Každé tvrzení o trhu má řádek v `evidence-log.csv` (URL, datum přístupu, doslovný citát).
  Tvrzení bez zdroje se označí `[hypotéza]`.
- **Žádné obecné fráze.** „Bez dat se nedá rozhodovat“ není pain. Pain je: „po redesignu nám 3 týdny
  nechodily purchase eventy a utratili jsme 400 tis. v PPC na slepo.“ Cíl je seznam takto konkrétních problémů.
- **Ceny normalizujeme.** Vždy uvádíme původní měnu i přepočet na CZK/měsíc, plus co je v ceně (hodiny, počet
  property, počet platforem, SLA). Bez rozsahu je cena bezcenná.
- **Rozlišujeme model dodávky.** Retainer hodin vs. fixní balíček vs. SaaS monitoring vs. % z media spendu.
- **Jedna fáze = jeden výstupní soubor** v `reserse/`. Na konci každé fáze krátké shrnutí „co jsme se dozvěděli
  a co to mění na hypotéze“.
- Jazyk dokumentů: čeština. Citáty zdrojů v původním jazyce.
