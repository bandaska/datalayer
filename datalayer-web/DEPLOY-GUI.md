# Deploy `datalayer-web` na Cloud Run přes GUI (Google Cloud Console)

Step-by-step nasazení této aplikace **kliknutím v prohlížeči** (Google Cloud
Console), bez `gcloud` příkazů na vlastním počítači. CLI varianta je v
[`DEPLOY.md`](./DEPLOY.md).

Console: <https://console.cloud.google.com>

> Pojmy, které budeš zadávat (drž se jich konzistentně):
> - **Project ID:** `datalayer-web` (nebo vlastní)
> - **Region:** `europe-west1`
> - **Cloud SQL instance:** `datalayer-pg`
> - **Databáze:** `datalayer`, **uživatel:** `app`
> - **Služba Cloud Run:** `datalayer-web`

---

## 1. Projekt a fakturace

1. Vlevo nahoře klikni na **výběr projektu** → **New Project**.
2. Name: `datalayer-web` → **Create**.
3. Po vytvoření projekt **vyber** (musí být aktivní v horní liště).
4. Menu (☰) → **Billing** → ověř/propoj fakturační účet (`Link a billing account`).

---

## 2. Povolení API

Menu (☰) → **APIs & Services** → **Enabled APIs & services** → **+ Enable APIs
and Services**. Postupně vyhledej a u každého klikni **Enable**:

- **Cloud Run Admin API**
- **Cloud SQL Admin API**
- **Cloud Build API**
- **Artifact Registry API**
- **Secret Manager API**

> Tip: při prvním otevření Cloud Run / Cloud SQL Console často nabídne „Enable"
> sama — stačí potvrdit.

---

## 3. Cloud SQL — PostgreSQL instance

1. Menu (☰) → **SQL** → **Create Instance** → **PostgreSQL** → **Choose
   PostgreSQL**.
2. Vyplň:
   - **Instance ID:** `datalayer-pg`
   - **Password** pro uživatele `postgres`: zvol silné heslo (poznamenej si).
   - **Database version:** PostgreSQL 16
   - **Edition / preset:** pro start **Enterprise → Sandbox/Development**
     (nejlevnější; pro produkci zvyš).
   - **Region:** `europe-west1`, **Single zone** (pro start).
3. **Create Instance** (vytvoření trvá pár minut).

### 3.1 Databáze a aplikační uživatel

Po vytvoření otevři instanci `datalayer-pg`:

1. Karta **Databases** → **Create database** → Name: `datalayer` → **Create**.
2. Karta **Users** → **Add user account** →
   - Username: `app`, nastav **heslo** (poznamenej si jako `DB_PASS`) → **Add**.
3. Karta **Overview** → zkopíruj **Connection name** ve tvaru
   `PROJECT_ID:europe-west1:datalayer-pg` (budeš ho potřebovat). Označ jako
   `CLOUDSQL`.

---

## 4. Secret Manager — `DATABASE_URL`

Cloud Run se k DB připojuje přes unix socket `/cloudsql/<CLOUDSQL>`.

1. Menu (☰) → **Security** → **Secret Manager** → **Create Secret**.
2. **Name:** `DATABASE_URL`
3. **Secret value:** vlož (nahraď `DB_PASS` a `CLOUDSQL`):
   ```
   postgresql://app:DB_PASS@localhost/datalayer?host=/cloudsql/CLOUDSQL&schema=public
   ```
   Příklad:
   ```
   postgresql://app:Tajne123@localhost/datalayer?host=/cloudsql/datalayer-web:europe-west1:datalayer-pg&schema=public
   ```
   > Pokud heslo obsahuje speciální znaky (`@ : / ? & %`), musíš je
   > URL-enkódovat (např. `@` → `%40`). Nejjednodušší je zvolit heslo bez nich.
4. **Create Secret**.

---

## 5. Nahrání databázového schématu (Cloud Shell)

Schéma (tabulky `articles`, `authors`) je potřeba vytvořit **před** prvním
deployem. Nejpohodlněji přes **Cloud Shell** (terminál v prohlížeči):

1. Vpravo nahoře klikni na ikonu **Activate Cloud Shell** (`>_`).
2. V terminálu spusť (nahraď `CLOUDSQL`, `DB_PASS`):

   ```bash
   git clone https://github.com/bandaska/datalayer.git
   cd datalayer/datalayer-web
   npm ci

   # Cloud SQL Auth Proxy (v Cloud Shell je předinstalovaný jako `cloud-sql-proxy`):
   cloud-sql-proxy CLOUDSQL --port 5432 &

   export DATABASE_URL="postgresql://app:DB_PASS@localhost:5432/datalayer?schema=public"
   npx prisma db push        # vytvoří tabulky
   npm run db:seed           # volitelné: ukázkové články
   ```

3. Až proběhne „Your database is now in sync", schéma je hotové (proxy můžeš
   ukončit `kill %1`).

> Alternativa bez terminálu: Cloud SQL → instance → **Cloud SQL Studio**, přihlas
> se a spusť ekvivalentní `CREATE TABLE` SQL ručně. Cloud Shell je ale snazší.

---

## 6. Deploy na Cloud Run z GitHubu (continuous deployment)

Menu (☰) → **Cloud Run** → **Deploy container** → **Service**.

1. Zvol **Continuously deploy from a repository (source or function)** →
   **Set up with Cloud Build**.
2. **Repository provider:** GitHub → **Authenticate** a vyber repozitář
   `bandaska/datalayer` (případně nejdřív „Manage connected repositories"
   a nainstaluj Google Cloud Build GitHub App).
3. **Branch:** `^main$` (nebo tvá produkční větev).
4. **Build Type:** **Dockerfile**.
   - **Source location / Dockerfile path:** `datalayer-web/Dockerfile`
   - **Build context directory:** `/datalayer-web`
   - (Tím se postaví image z podsložky aplikace.)
5. **Save / Next**.

### 6.1 Nastavení služby

- **Service name:** `datalayer-web`
- **Region:** `europe-west1`
- **Authentication:** **Allow unauthenticated invocations** (veřejný web).
- **CPU allocation:** „CPU is only allocated during request processing" (levnější).

### 6.2 Container, Networking, Security (rozbal „Container(s), Volumes, …")

**Karta Container → Settings:**
- **Container port:** `8080`
- **Resources:** Memory `512 MiB`, CPU `1`.

**Karta Container → Variables & Secrets:**
- **Environment variables → Add variable:** `NODE_ENV` = `production`
  - (volitelně `ENABLE_AUTH` = `1`, `SITE_USER`, `SITE_PASS` pro ochranu heslem)
- **Secrets → Reference a secret:**
  - Secret: `DATABASE_URL`, Version: `latest`,
  - **Exposed as:** Environment variable, Name: `DATABASE_URL`.

**Karta Connections (Cloud SQL connections):**
- **Add connection** → vyber instanci `datalayer-pg`.
  (Tím Cloud Run připojí socket `/cloudsql/CLOUDSQL`, na který míří `DATABASE_URL`.)

**Autoscaling:** Min instances `0` (scale-to-zero) / Max `5`.

3. **Create** (nebo **Deploy**).

> První build z gitu chvíli trvá. Cloud Build automaticky vytvoří i Artifact
> Registry repo — nemusíš ho zakládat ručně.

---

## 7. Oprávnění (pokud deploy hlásí chybu s právy)

Pokud build/deploy spadne na oprávněních:

1. Menu (☰) → **IAM & Admin** → **IAM**.
2. Najdi service account **Cloud Build** (`...@cloudbuild.gserviceaccount.com`)
   → **Edit (tužka)** → **Add another role**:
   - **Cloud Run Admin**
   - **Service Account User**
3. Pro připojení DB ze secretu má runtime SA (default
   `...-compute@developer.gserviceaccount.com`) obvykle práva automaticky; pokud
   ne, přidej mu **Secret Manager Secret Accessor** a **Cloud SQL Client**.

---

## 8. Ověření

1. Cloud Run → služba `datalayer-web` → nahoře **URL** (např.
   `https://datalayer-web-xxxx.run.app`).
2. Otevři `URL/` (úvod), `URL/blog` (výpis článků), `URL/sluzby/ga4`.
3. Pokud `/blog` hlásí chybu (500): zkontroluj
   - secret `DATABASE_URL` (správný tvar a Cloud SQL connection),
   - že je v sekci **Connections** přidaná instance,
   - logy: služba → karta **Logs**.

---

## 9. Vlastní doména

Cloud Run → **Manage Custom Domains** → **Add Mapping** → vyber službu a zadej
doménu (`www.datalayer.cz`). Console vypíše **DNS záznamy** — nastav je u svého
registrátora. Certifikát Google vystaví automaticky.

---

## 10. Další nasazení a rollback

- **Nové nasazení:** stačí **push do `main`** — trigger z kroku 6 znovu postaví
  a nasadí. Stav buildů: **Cloud Build → History**.
- **Rollback:** Cloud Run → služba → karta **Revisions** → u starší revize
  **⋮ → Manage traffic** → nastav 100 % na vybranou revizi → **Save**.
- **Změna schématu DB:** spusť znovu krok 5 (Cloud Shell + `prisma db push`)
  **před** nasazením revize, která změnu vyžaduje.

---

## Shrnutí pořadí

1. Projekt + fakturace → 2. Povolit API → 3. Cloud SQL (instance, DB, user,
   connection name) → 4. Secret `DATABASE_URL` → 5. Schéma přes Cloud Shell →
   6. Cloud Run „Continuously deploy from repository" (Dockerfile v
   `datalayer-web/`, port 8080, env `NODE_ENV`, secret `DATABASE_URL`, Cloud SQL
   connection) → 7. případně doplnit IAM → 8. ověřit URL → 9. doména.
