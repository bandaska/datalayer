# Deploy `datalayer-web` na Google Cloud Run — step by step

Konkrétní, copy-paste postup pro nasazení této aplikace (Express + React Router
SSR + Prisma) na **Cloud Run** s databází **Cloud SQL PostgreSQL** a credentials
v **Secret Manageru**. Aplikace je v podsložce `datalayer-web/` tohoto repa.

> Příkazy spouštěj z kořene repozitáře (kde je složka `datalayer-web/`), pokud
> není uvedeno jinak.

---

## 0. Předpoklady

- Účet GCP s fakturací a nainstalované **gcloud CLI** (`gcloud --version`).
- Přihlášení:
  ```bash
  gcloud auth login
  ```
- Lokálně Node.js 20+ (kvůli kroku 7 – aplikace schématu) a Docker (pokud chceš
  build ověřit lokálně; pro deploy není nutný).

---

## 1. Proměnné prostředí pro tento návod

```bash
export PROJECT_ID="datalayer-web"          # uprav dle sebe
export REGION="europe-west1"               # nebo europe-west3 (Frankfurt)
export SERVICE="datalayer-web"
export AR_REPO="datalayer"                 # Artifact Registry repo
export SQL_INSTANCE="datalayer-pg"
export DB_NAME="datalayer"
export DB_USER="app"
export DB_PASS="$(openssl rand -base64 24 | tr -d '/+=')"   # vygeneruj heslo

gcloud config set project "$PROJECT_ID"
# Connection name Cloud SQL instance (PROJECT:REGION:INSTANCE):
export CLOUDSQL="${PROJECT_ID}:${REGION}:${SQL_INSTANCE}"
echo "DB_PASS=$DB_PASS"   # poznamenej si
```

---

## 2. Povolení potřebných API

```bash
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com \
  sqladmin.googleapis.com \
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

---

## 4. Cloud SQL PostgreSQL

```bash
# Instance (nejmenší tier; pro produkci zvaž větší/HA):
gcloud sql instances create "$SQL_INSTANCE" \
  --database-version=POSTGRES_16 \
  --tier=db-f1-micro \
  --region="$REGION" \
  --storage-auto-increase

# Databáze a aplikační uživatel:
gcloud sql databases create "$DB_NAME" --instance="$SQL_INSTANCE"
gcloud sql users create "$DB_USER" --instance="$SQL_INSTANCE" --password="$DB_PASS"
```

---

## 5. Secret Manager — `DATABASE_URL`

Cloud Run se k Cloud SQL připojuje přes **unix socket** `/cloudsql/<CONNECTION>`.
Tomu odpovídá tvar `DATABASE_URL` (heslo musí být URL-enkódované, pokud obsahuje
speciální znaky — generované výše je bezpečné):

```bash
DATABASE_URL="postgresql://${DB_USER}:${DB_PASS}@localhost/${DB_NAME}?host=/cloudsql/${CLOUDSQL}&schema=public"

printf '%s' "$DATABASE_URL" | gcloud secrets create DATABASE_URL --data-file=-
# Při změně hodnoty později:
# printf '%s' "$DATABASE_URL" | gcloud secrets versions add DATABASE_URL --data-file=-
```

---

## 6. Service accounts a IAM

```bash
# Runtime service account pro Cloud Run:
gcloud iam service-accounts create datalayer-run \
  --display-name="datalayer-web runtime"
export RUN_SA="datalayer-run@${PROJECT_ID}.iam.gserviceaccount.com"

# Runtime SA: přístup k Cloud SQL a ke čtení secretu:
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${RUN_SA}" --role="roles/cloudsql.client"
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${RUN_SA}" --role="roles/secretmanager.secretAccessor"
```

> Pro deploy přes Cloud Build (kapitola 9) dostane i Cloud Build SA práva
> `run.admin` a `iam.serviceAccountUser` — viz tam.

---

## 7. Aplikace schématu na produkční DB (Prisma)

Schéma se na Cloud SQL nahraje z lokálu přes **Cloud SQL Auth Proxy**.

```bash
# Stáhni proxy (Linux x64; jiné platformy viz dokumentace):
curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.14.1/cloud-sql-proxy.linux.amd64
chmod +x cloud-sql-proxy

# Spusť proxy na localhost:5432 (běží v popředí, nech v samostatném terminálu):
./cloud-sql-proxy "$CLOUDSQL" --port 5432 &
PROXY_PID=$!

cd datalayer-web
npm ci

# Schéma + (volitelně) ukázková data přes TCP proxy:
export DATABASE_URL="postgresql://${DB_USER}:${DB_PASS}@localhost:5432/${DB_NAME}?schema=public"
npx prisma db push          # nebo: npx prisma migrate deploy (pokud používáš migrace)
npm run db:seed             # volitelné – ukázkové články

cd ..
kill $PROXY_PID             # vypni proxy
```

> Pozn.: tady je `DATABASE_URL` přes TCP (`localhost:5432`), zatímco Cloud Run
> používá unix socket (kapitola 5). To je v pořádku — jde o dvě různá prostředí.

---

## 8. Deploy — varianta A: přímo ze zdroje (rychlý start)

Nejjednodušší jednorázový/manuální deploy. Cloud Build z `Dockerfile` postaví
image a nasadí. Spouštěj **ze složky `datalayer-web/`**:

```bash
cd datalayer-web

gcloud run deploy "$SERVICE" \
  --source . \
  --region "$REGION" \
  --service-account "$RUN_SA" \
  --add-cloudsql-instances "$CLOUDSQL" \
  --set-secrets "DATABASE_URL=DATABASE_URL:latest" \
  --set-env-vars "NODE_ENV=production" \
  --port 8080 \
  --allow-unauthenticated \
  --cpu 1 --memory 512Mi --min-instances 0 --max-instances 5

cd ..
```

Po doběhnutí vypíše **Service URL** — otevři ji v prohlížeči.

---

## 9. Deploy — varianta B: automaticky z gitu (doporučeno)

Trvalé CI/CD: každý push do sledované větve spustí build dle
`datalayer-web/cloudbuild.yaml` (build z podsložky + deploy).

**9.1 Práva pro Cloud Build SA:**

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

**9.2 Propojení GitHub repa** (jednorázově, otevře autorizaci):

```bash
gcloud builds connections create github datalayer-conn --region="$REGION"
# Dokonči autorizaci dle vypsaného odkazu, pak připoj repozitář:
gcloud builds repositories create datalayer-repo \
  --connection=datalayer-conn --region="$REGION" \
  --remote-uri="https://github.com/bandaska/datalayer.git"
```

**9.3 Vytvoření triggeru** (build dle našeho `cloudbuild.yaml`):

```bash
gcloud builds triggers create github \
  --name="datalayer-web-deploy" \
  --region="$REGION" \
  --repository="projects/${PROJECT_ID}/locations/${REGION}/connections/datalayer-conn/repositories/datalayer-repo" \
  --branch-pattern="^main$" \
  --build-config="datalayer-web/cloudbuild.yaml" \
  --substitutions="_REGION=${REGION},_SERVICE=${SERVICE},_AR_REPO=${AR_REPO},_CLOUDSQL=${CLOUDSQL}"
```

> Alternativně lze trigger nakliknout v Console → Cloud Build → Triggers
> (Repository: bandaska/datalayer, Config: `datalayer-web/cloudbuild.yaml`,
> Substitutions jako výše).

**9.4 Spuštění:** push do `main` (nebo ruční `gcloud builds triggers run
datalayer-web-deploy --region="$REGION" --branch=main`).

> `cloudbuild.yaml` v deploy kroku **nepoužívá** `--service-account` (běží pod
> default runtime SA). Chceš-li runtime SA `datalayer-run`, přidej do deploy
> kroku `--service-account=${RUN_SA}` a do substitucí příslušnou hodnotu.

---

## 10. Ověření

```bash
export URL="$(gcloud run services describe "$SERVICE" --region "$REGION" --format='value(status.url)')"
echo "$URL"

curl -s -o /dev/null -w "home  %{http_code}\n" "$URL/"
curl -s -o /dev/null -w "blog  %{http_code}\n" "$URL/blog"
curl -s -o /dev/null -w "404   %{http_code}\n" "$URL/neexistuje"
```

Očekávané: `/` a `/blog` → 200, neexistující cesta → 404. Pokud `/blog` vrací
500, zkontroluj `DATABASE_URL` secret a připojení Cloud SQL (kapitola 14).

---

## 11. Vlastní doména

```bash
gcloud beta run domain-mappings create \
  --service "$SERVICE" --region "$REGION" --domain "www.datalayer.cz"
```

Poté nastav DNS záznamy dle výpisu příkazu (Google vydá certifikát automaticky).

---

## 12. Vývojová ochrana heslem (volitelné)

Aplikace umí HTTP Basic Auth (jako původní Nette web). Zapneš ji při deploy:

```bash
gcloud run services update "$SERVICE" --region "$REGION" \
  --set-env-vars "NODE_ENV=production,ENABLE_AUTH=1,SITE_USER=vn,SITE_PASS=tajne"
```

Vypnutí: `ENABLE_AUTH=0` (nebo proměnnou odebrat).

---

## 13. Aktualizace a rollback

```bash
# Nová revize (varianta A) – znovu deploy ze zdroje (viz kap. 8),
# nebo (varianta B) – push do main.

# Seznam revizí:
gcloud run revisions list --service "$SERVICE" --region "$REGION"

# Rollback na konkrétní revizi (100 % provozu):
gcloud run services update-traffic "$SERVICE" --region "$REGION" \
  --to-revisions REVISION_NAME=100
```

Změny DB schématu nasazuj přes Prisma (kapitola 7) **před** deployem revize,
která je vyžaduje.

---

## 14. Logy a troubleshooting

```bash
# Živé logy:
gcloud run services logs tail "$SERVICE" --region "$REGION"
```

Časté problémy:

| Symptom | Příčina / řešení |
|---|---|
| `/blog` vrací 500 | Špatný `DATABASE_URL` nebo chybí `--add-cloudsql-instances`. Ověř secret a connection name `$CLOUDSQL`. |
| `Environment variable not found: DATABASE_URL` | Secret nenamapován do služby (`--set-secrets`) nebo runtime SA nemá `secretmanager.secretAccessor`. |
| `permission denied for ... cloudsql` | Runtime SA chybí `roles/cloudsql.client`. |
| Kontejner nenastartuje / port | Aplikace poslouchá na `PORT` (Cloud Run = 8080). `server.js` to respektuje; neměň `--port`. |
| Build z gitu staví špatnou složku | Trigger musí mít config `datalayer-web/cloudbuild.yaml`; build kontext je `datalayer-web`. |
| Prisma engine chyba v image | Dockerfile instaluje `openssl` — neodstraňuj. |

---

## 15. Náklady a škálování

- `--min-instances 0` → **scale-to-zero**: při nečinnosti neplatíš za běh
  kontejneru (cena za první request je vyšší kvůli cold startu).
- Pro stálou odezvu nastav `--min-instances 1`.
- Cloud SQL `db-f1-micro` běží nepřetržitě (účtuje se i bez provozu); pro úsporu
  zvaž zastavování instance nebo menší prostředí pro testy.

---

## Rychlý souhrn (TL;DR)

```bash
# 1–6: nastav projekt, API, Artifact Registry, Cloud SQL, secret, IAM (viz výše)
# 7: schéma na DB přes Cloud SQL Auth Proxy + prisma db push (+ seed)
# 8: deploy
cd datalayer-web
gcloud run deploy datalayer-web --source . --region "$REGION" \
  --service-account "$RUN_SA" --add-cloudsql-instances "$CLOUDSQL" \
  --set-secrets DATABASE_URL=DATABASE_URL:latest \
  --set-env-vars NODE_ENV=production --port 8080 --allow-unauthenticated
```
