# Fragmenty CSV z paralelních rešerší

Každá fáze zapisuje do vlastních souborů `0X-pricing.csv`, `0X-evidence.csv`, `0X-pain.csv` (stejné hlavičky
jako v `../`). Po dokončení fáze se fragmenty sloučí do hlavních CSV v `../` skriptem `merge.sh`.
ID řádků mají prefix fáze (`P2-001`), aby se při slučování nesrážela.
