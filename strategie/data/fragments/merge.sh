#!/usr/bin/env bash
# Sloučí fragmenty do hlavních CSV (hlavička jen jednou). Spouštět ze složky strategie/data/.
set -euo pipefail
cd "$(dirname "$0")/.."
for kind in pricing evidence pain; do
  target="$kind-dataset.csv"; [ "$kind" = "pricing" ] || target="$kind-log.csv"
  head -1 "$target" > "$target.tmp"
  for f in fragments/*-"$kind".csv; do [ -f "$f" ] && tail -n +2 "$f" | sed -e '$a\' >> "$target.tmp"; done
  mv "$target.tmp" "$target"
  echo "$target: $(($(wc -l < "$target") - 1)) rows"
done
