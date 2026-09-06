# Vzor záznamu nálezu

Vzniká u každého incidentu. Slouží ke třem věcem: klient vidí, co se stalo; my víme, co jsme kdy měnili;
a ve sporu „kdo to rozbil" existuje časová osa.

## Struktura

```
NÁLEZ #2026-041
Klient:            e-shop XY
Zjištěno:          12. 8. 2026 14:10  (automatický průchod objednávkou)
Začátek problému:  12. 8. 2026 10:22  (nasazení verze 4.7.1)
Doba do zjištění:  3 h 48 min
Vyřešeno:          12. 8. 2026 16:40
Chybí data:        4 h, cca 60 událostí add_to_cart, nákupy nezasaženy

CO SE STALO
Po nasazení verze 4.7.1 přestala na mobilní verzi chodit událost add_to_cart.
Desktop nezasažen.

PROČ
Šablona produktové stránky změnila třídu tlačítka z .btn-cart na .btn-add.
Trigger v GTM byl navázaný na starou třídu. GTM u tagu hlásil "Succeeded",
protože se trigger vůbec nespustil — v rozhraní to nevypadalo jako chyba.

DOPAD
Chybí cca 60 událostí add_to_cart za 4 hodiny. Nákupy měřeny správně,
tržby nezasaženy. Publikum "opustili košík" bude o tyto uživatele menší.

CO JSME UDĚLALI
Trigger navázán na atribut data-action="add-to-cart" místo na třídu CSS
(odolné vůči změnám vzhledu). Ověřeno na mobilu i desktopu.

CO TOMU PŘÍŠTĚ ZABRÁNÍ
1. Vývojářům předána specifikace: měřicí prvky označovat atributem
   data-action, ne třídou (třídy se mění při každém redesignu).
2. Automatický průchod rozšířen o mobilní rozlišení (dosud jen desktop).

KDO O TOM VÍ
Klient (12. 8. 16:45, e-mail), vývojářský tým (12. 8. 15:30, Slack).
```

## Pravidla

**„Doba do zjištění" se měří vždy** — i když je nepříjemná. Je to jediné číslo, které dokazuje, že služba
funguje, a jediné, které ukáže, že nefunguje. Průměr za všechny klienty patří do kvartálního review.

**„Proč" musí být technická příčina, ne symptom.** Ne „nechodily události", ale „trigger byl navázaný na
třídu CSS, kterou redesign změnil".

**„Dopad" se vyčísluje v tom, co klienta zajímá** — objednávky, tržby, konverze — ne v událostech, pokud
to jde přepočítat.

**„Co tomu příště zabrání" je povinné.** Záznam bez tohoto bodu znamená, že se to stane znovu. Tady vzniká
většina hodnoty služby: každý incident zlepší odolnost měření.

**Když je příčina na straně klienta nebo vývojáře, napíše se to věcně**, bez obviňování — a s návrhem
postupu, který to do budoucna vyloučí.
