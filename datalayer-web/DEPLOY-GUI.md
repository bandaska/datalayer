# Deploy `datalayer-web` na Cloud Run přes GUI (Google Cloud Console)

Step-by-step nasazení této aplikace **kliknutím v prohlížeči**, s úložištěm dat
**Firestore (Native)** (free tier, bez DB instance a bez hesla). CLI varianta je
v [`DEPLOY.md`](./DEPLOY.md).

Console: <https://console.cloud.google.com>

> Pojmy, které budeš používat:
> - **Project ID:** `datalayer-web` (nebo vlastní)
> - **Region:** `europe-west1`
> - **Služba Cloud Run:** `datalayer-web`

---

## 1. Projekt a fakturace

1. Vlevo nahoře **výběr projektu** → **New Project** → Name: `datalayer-web` →
   **Create**, pak projekt **vyber**.
2. Menu (☰) → **Billing** → propoj fakturační účet.

---

## 2. Povolení API

Menu (☰) → **APIs & Services** → **Enable APIs and Services**. Vyhledej a
**Enable** u každého:

- **Cloud Run Admin API**
- **Cloud Build API**
- **Artifact Registry API**
- **Cloud Firestore API**

---

## 3. Firestore (Native) databáze

1. Menu (☰) → **Firestore**.
2. **Create database**.
3. **Native mode** (ne Datastore mode).
4. **Location:** `europe-west1` (stejný region jako Cloud Run; lokace je trvalá).
5. **Create**.

> Firestore má always-free tier (~1 GiB, 50k čtení / 20k zápisů denně) a škáluje
> na nulu — pro tento web prakticky zdarma.

---

## 4. Naplnění dat + první admin přes Cloud Shell

Data (kolekce `articles`, `pages`) a prvního admin uživatele vytvoříme skripty:

1. Vpravo nahoře klikni na **Activate Cloud Shell** (`>_`).
2. V terminálu:

   ```bash
   git clone https://github.com/bandaska/datalayer.git
   cd datalayer/datalayer-web
   npm ci
   export GOOGLE_CLOUD_PROJECT="$(gcloud config get-value project)"

   # Ukázkové články + landing page (volitelné):
   npm run db:seed

   # První admin pro přihlášení do /admin (heslo min. 8 znaků):
   npm run admin:create -- mail@vit.cz HesloMin8znaku "Vít Novotný"
   ```

3. Hláška „Seed hotov…" a „Admin vytvořen…" = hotovo. Data uvidíš v Console →
   **Firestore** → **Data** (kolekce `articles`, `pages`, `users`).

> Obsah můžeš později editovat přímo v Console (Firestore → Data) nebo vlastním
> adminem — bez redeploye aplikace.

---

## 5. Deploy na Cloud Run z GitHubu (continuous deployment)

Menu (☰) → **Cloud Run** → **Deploy container** → **Service**.

1. Zvol **Continuously deploy from a repository (source or function)** →
   **Set up with Cloud Build**.
2. **Repository provider:** GitHub → **Authenticate** a vyber repozitář
   `bandaska/datalayer` (případně nejprve „Manage connected repositories" a
   nainstaluj Google Cloud Build GitHub App).
3. **Branch:** `^main$`.
4. **Build Type:** **Dockerfile**.
   - **Dockerfile path:** `datalayer-web/Dockerfile`
   - **Build context directory:** `/datalayer-web`
5. **Save**.

### 5.1 Nastavení služby

- **Service name:** `datalayer-web`
- **Region:** `europe-west1`
- **Authentication:** **Allow unauthenticated invocations**.
- **CPU allocation:** „CPU is only allocated during request processing".

### 5.2 Container (rozbal „Container(s), Volumes, Networking, Security")

**Karta Container → Settings:**
- **Container port:** `8080`
- **Memory:** `512 MiB`, **CPU:** `1`.

**Karta Container → Variables & Secrets → Environment variables → Add variable:**
- `NODE_ENV` = `production`
- `GOOGLE_CLOUD_PROJECT` = `<tvé Project ID>`
- `SESSION_SECRET` = `<náhodný řetězec>` (podpis admin cookie; vygeneruj např.
  v Cloud Shell `openssl rand -base64 32`)
- (volitelně `ENABLE_AUTH` = `1`, `SITE_USER`, `SITE_PASS` pro ochranu celého webu heslem)

> Firestore se autentizuje přes service account služby — žádný DB secret ani
> Cloud SQL connection. `SESSION_SECRET` lze místo env proměnné uložit do Secret
> Manageru a připojit přes „Reference a secret" (bezpečnější).

**Autoscaling:** Min `0` (scale-to-zero) / Max `5`.

6. **Create**.

---

## 6. Oprávnění k Firestore

Cloud Run služba běží pod service accountem, který potřebuje přístup k Firestore:

1. Menu (☰) → **IAM & Admin** → **IAM**.
2. Najdi service account běžící služby (ve výchozím stavu
   `PROJECT_NUMBER-compute@developer.gserviceaccount.com`, nebo vlastní, pokud
   jsi ho nastavil) → **Edit (tužka)** → **Add another role** →
   **Cloud Datastore User** → **Save**.

> Pokud build/deploy spadne na právech Cloud Build, přidej SA
> `...@cloudbuild.gserviceaccount.com` role **Cloud Run Admin** a
> **Service Account User**.

---

## 7. Ověření

1. Cloud Run → služba `datalayer-web` → nahoře **URL**.
2. Otevři:
   - `URL/` (úvod),
   - `URL/blog` (články z Firestore),
   - `URL/kampan-ga4` (ukázková landing page z kolekce `pages`),
   - `URL/sluzby/ga4` (služba),
   - `URL/admin` (přihlas se admin uživatelem z kroku 4).
3. Když `/blog` hlásí 500: zkontroluj, že existuje Firestore databáze (krok 3),
   že má service account roli **Cloud Datastore User** (krok 6) a že je
   nastavena env `GOOGLE_CLOUD_PROJECT` (krok 5.2). Detail v kartě **Logs**.

---

## 8. Vlastní doména

Cloud Run → **Manage Custom Domains** → **Add Mapping** → vyber službu a zadej
doménu (`www.datalayer.cz`). Nastav vypsané **DNS záznamy** u registrátora;
certifikát Google vystaví automaticky.

---

## 9. Další nasazení, rollback a editace obsahu

- **Nové nasazení:** **push do `main`** → trigger znovu postaví a nasadí
  (stav: Cloud Build → **History**).
- **Rollback:** Cloud Run → služba → **Revisions** → u revize **⋮ → Manage
  traffic** → 100 % na vybranou revizi → **Save**.
- **Editace obsahu** (články/LP): Console → **Firestore → Data** (uprav dokument
  v kolekci `articles` / `pages`) — projeví se hned, **bez redeploye**.

---

## Shrnutí pořadí

1. Projekt + fakturace → 2. Povolit API → 3. Firestore (Native) databáze →
4. Seed dat přes Cloud Shell → 5. Cloud Run „Continuously deploy from
repository" (Dockerfile v `datalayer-web/`, port 8080, env `NODE_ENV` +
`GOOGLE_CLOUD_PROJECT`) → 6. role **Cloud Datastore User** pro SA služby →
7. ověřit URL → 8. doména.
