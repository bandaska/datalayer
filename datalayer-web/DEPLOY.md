# Deploy `datalayer-web` na Google Cloud Run — step by step (CLI)

Konkrétní, copy-paste postup pro nasazení této aplikace (Express + React Router
SSR) na **Cloud Run** s úložištěm dat **Firestore (Native)**. Data (články +
landing pages) jsou ve Firestore — **žádná DB instance, žádné heslo, free tier**.
Aplikace je v podsložce `datalayer-web/` tohoto repa.

> Příkazy spouštěj z kořene repozitáře (kde je složka `datalayer-web/`), pokud
> není uvedeno jinak.

---

## 0. Předpoklady

- Účet GCP s fakturací a nainstalované **gcloud CLI** (`gcloud --version`).
- Přihlášení:
  ```bash
  gcloud auth login
  gcloud auth application-default login   # ADC pro lokální seed (kapitola 6)
  ```
- Lokálně Node.js 20+.

---

## 1. Proměnné prostředí pro tento návod

```bash
export PROJECT_ID="datalayer-web"          # uprav dle sebe
export REGION="europe-west1"               # nebo europe-west3 (Frankfurt)
export SERVICE="datalayer-web"
export AR_REPO="datalayer"                 # Artifact Registry repo

gcloud config set project "$PROJECT_ID"
```

---

## 2. Povolení potřebných API

```bash
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com \
  firestore.googleapis.com \
  secretmanager.googleapis.com
```

---

## 3. Artifact Registry (úložiště Docker image)

```bash
gcloud artifacts repositories create "$AR_REPO" \
  --repository-format=docker \
  --location="$REGION" \
  --description="Datalayer web images"
```

> Při deployi `--source` (kap. 7) se repo `cloud-run-source-deploy` vytvoří samo;
> tento krok je nutný hlavně pro CI/CD přes `cloudbuild.yaml`.

---

## 4. Firestore (Native) databáze

Firestore má **always-free** tier (cca 1 GiB úložiště, 50k čtení / 20k zápisů
denně) a škáluje na nulu.

```bash
# Vytvoř výchozí databázi v Native módu (jednorázově na projekt):
gcloud firestore databases create --location="$REGION"
```

> Lokace Firestore je trvalá. Zvol stejný region jako Cloud Run kvůli latenci.

---

## 5. Service account a IAM

```bash
# Runtime service account pro Cloud Run:
gcloud iam service-accounts create datalayer-run \
  --display-name="datalayer-web runtime"
export RUN_SA="datalayer-run@${PROJECT_ID}.iam.gserviceaccount.com"

# Přístup k Firestore (čtení/zápis):
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${RUN_SA}" --role="roles/datastore.user"

# Přístup ke čtení secretu SESSION_SECRET (podpis admin cookie):
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${RUN_SA}" --role="roles/secretmanager.secretAccessor"
```

> Firestore se autentizuje přes runtime SA (ADC), bez hesla v env. Jediný secret
> je `SESSION_SECRET` pro podpis admin session cookie (viz dále).

### 5.1 SESSION_SECRET (podpis admin cookie)

```bash
openssl rand -base64 32 | gcloud secrets create SESSION_SECRET --data-file=-
```

---

## 6. Naplnění dat a první admin

Lokálně, proti reálnému Firestore projektu (přes ADC z kroku 0):

```bash
cd datalayer-web
npm ci

# Ukázkové články + 1 landing page (volitelné):
GOOGLE_CLOUD_PROJECT="$PROJECT_ID" npm run db:seed

# První admin uživatel pro přihlášení do /admin:
GOOGLE_CLOUD_PROJECT="$PROJECT_ID" npm run admin:create -- mail@vit.cz HesloMin8znaku "Vít Novotný"
cd ..
```

> Pro lokální vývoj bez zápisu do produkce použij **Firestore emulátor**:
> `FIRESTORE_EMULATOR_HOST=localhost:8080 GOOGLE_CLOUD_PROJECT=demo npm run db:seed`.

---

## 7. Deploy — varianta A: přímo ze zdroje (rychlý start)

Spouštěj **ze složky `datalayer-web/`**:

```bash
cd datalayer-web

gcloud run deploy "$SERVICE" \
  --source . \
  --region "$REGION" \
  --service-account "$RUN_SA" \
  --set-env-vars "NODE_ENV=production,GOOGLE_CLOUD_PROJECT=${PROJECT_ID}" \
  --set-secrets "SESSION_SECRET=SESSION_SECRET:latest" \
  --port 8080 \
  --allow-unauthenticated \
  --cpu 1 --memory 512Mi --min-instances 0 --max-instances 5

cd ..
```

Po doběhnutí vypíše **Service URL**.

---

## 8. Deploy — varianta B: automaticky z gitu (doporučeno)

Každý push do sledované větve spustí build dle `datalayer-web/cloudbuild.yaml`.

**8.1 Práva pro Cloud Build SA:**

```bash
export PROJECT_NUMBER="$(gcloud projects describe "$PROJECT_ID" --format='value(projectNumber)')"
export CB_SA="${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com"

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${CB_SA}" --role="roles/run.admin"
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${CB_SA}" --role="roles/iam.serviceAccountUser"
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${CB_SA}" --role="roles/artifactregistry.writer"
```

**8.2 Propojení GitHub repa** (jednorázově):

```bash
gcloud builds connections create github datalayer-conn --region="$REGION"
# Dokonči autorizaci dle vypsaného odkazu, pak připoj repozitář:
gcloud builds repositories create datalayer-repo \
  --connection=datalayer-conn --region="$REGION" \
  --remote-uri="https://github.com/bandaska/datalayer.git"
```

**8.3 Vytvoření triggeru:**

```bash
gcloud builds triggers create github \
  --name="datalayer-web-deploy" \
  --region="$REGION" \
  --repository="projects/${PROJECT_ID}/locations/${REGION}/connections/datalayer-conn/repositories/datalayer-repo" \
  --branch-pattern="^main$" \
  --build-config="datalayer-web/cloudbuild.yaml" \
  --substitutions="_REGION=${REGION},_SERVICE=${SERVICE},_AR_REPO=${AR_REPO}"
```

**8.4 Spuštění:** push do `main` (nebo `gcloud builds triggers run
datalayer-web-deploy --region="$REGION" --branch=main`).

> `cloudbuild.yaml` deployuje pod default runtime SA. Chceš-li SA
> `datalayer-run` (s rolí `datastore.user`), přidej do deploy kroku
> `--service-account=...`; jinak přiřaď roli `datastore.user` i default
> compute SA.

---

## 9. Ověření

```bash
export URL="$(gcloud run services describe "$SERVICE" --region "$REGION" --format='value(status.url)')"
echo "$URL"

curl -s -o /dev/null -w "home   %{http_code}\n" "$URL/"
curl -s -o /dev/null -w "blog   %{http_code}\n" "$URL/blog"
curl -s -o /dev/null -w "lp     %{http_code}\n" "$URL/kampan-ga4"
curl -s -o /dev/null -w "404    %{http_code}\n" "$URL/neexistuje"
curl -s -o /dev/null -w "admin  %{http_code}\n" "$URL/admin"   # 302 → /admin/login
```

Admin je na `"$URL/admin"` — přihlas se uživatelem z kroku 6.

Očekávané: `/`, `/blog`, `/kampan-ga4` → 200; neexistující cesta → 404. Pokud
`/blog` vrací 500, zkontroluj Firestore (existuje databáze? má runtime SA roli
`datastore.user`? je nastaven `GOOGLE_CLOUD_PROJECT`?) — viz kapitola 12.

---

## 10. Vlastní doména

```bash
gcloud beta run domain-mappings create \
  --service "$SERVICE" --region "$REGION" --domain "www.datalayer.cz"
```

Poté nastav DNS záznamy dle výpisu (Google vydá certifikát automaticky).

---

## 11. Vývojová ochrana heslem (volitelné)

```bash
gcloud run services update "$SERVICE" --region "$REGION" \
  --set-env-vars "NODE_ENV=production,GOOGLE_CLOUD_PROJECT=${PROJECT_ID},ENABLE_AUTH=1,SITE_USER=vn,SITE_PASS=tajne"
```

---

## 12. Logy a troubleshooting

```bash
gcloud run services logs tail "$SERVICE" --region "$REGION"
```

| Symptom | Příčina / řešení |
|---|---|
| `/blog` vrací 500 | Firestore databáze neexistuje (`gcloud firestore databases create`), nebo runtime SA nemá `roles/datastore.user`. |
| `Could not load the default credentials` | Chybí runtime SA / ADC. Na Cloud Run nasaď s `--service-account`; lokálně `gcloud auth application-default login`. |
| `5 NOT_FOUND` / prázdný blog | Nenaplněná data — spusť seed (kapitola 6). |
| Kontejner nenastartuje / port | Aplikace poslouchá na `PORT` (Cloud Run = 8080). Neměň `--port`. |
| Build z gitu staví špatnou složku | Trigger musí mít config `datalayer-web/cloudbuild.yaml`; build kontext je `datalayer-web`. |

---

## 13. Náklady a škálování

- Cloud Run `--min-instances 0` → **scale-to-zero** (v klidu neplatíš za běh).
- **Firestore** běží ve free tieru — pro tento web prakticky **0 Kč**.
- Pro stálou odezvu nastav `--min-instances 1` (drobný stálý náklad za Cloud Run).

---

## Rychlý souhrn (TL;DR)

```bash
# 1–5: projekt, API (vč. secretmanager), Artifact Registry, Firestore databáze,
#      runtime SA + datastore.user + secretAccessor, secret SESSION_SECRET
# 6: seed dat + první admin
cd datalayer-web
GOOGLE_CLOUD_PROJECT=$PROJECT_ID npm run db:seed
GOOGLE_CLOUD_PROJECT=$PROJECT_ID npm run admin:create -- mail@vit.cz HesloMin8znaku "Vít"
# 7: deploy
gcloud run deploy datalayer-web --source . --region "$REGION" \
  --service-account "$RUN_SA" \
  --set-env-vars NODE_ENV=production,GOOGLE_CLOUD_PROJECT=$PROJECT_ID \
  --set-secrets SESSION_SECRET=SESSION_SECRET:latest \
  --port 8080 --allow-unauthenticated
```
