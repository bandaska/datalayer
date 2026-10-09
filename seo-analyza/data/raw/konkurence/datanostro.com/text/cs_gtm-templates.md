# URL: https://datanostro.com/cs/gtm-templates/

GTM Templates ke stažení

# Server-side GTM šablony pod značkou DataNostro

Kompatibilní se standardním sGTM API + snadná instalace. Download .tpl souboru → Import do GTM → Hotovo.

### 💡 Power-Ups: Žádná instalace GTM šablon

**13 Power-Upů** (Custom Loader, Cookie Keeper, Anonymizer, Bot Detection, GEO Headers, Click ID Restorer...) je **již zabudovaných** v DataNostro platformě.

Aktivace: Dashboard → Power-Ups → Klikněte na toggle → Hotovo. Žádné GTM šablony, žádná složitá konfigurace.

[Prozkoumat dokumentaci Power-Upů](/cs/docs/power-ups/)

Všechny (10)
📡 Clients (3)
🏷️ Tagy (5)
📦 Variables (2)

## 📡 GTM Clients

Přijímají requesty z webu a zpracují je v server-side kontejneru.

📊

client

### GA4 Client

GA4

Receives GA4 /g/collect requests in the sGTM container. Required for any GA4 server-side setup.

Beginner
5 min setup
↓ 185

[Stáhnout .tpl](/cs/gtm-templates/ga4-client/download/)
[Setup návod →](https://datanostro.com/cs/docs/setup/ga4/)

📘

client

### Meta Pixel Client

Meta

Receives Meta Pixel POSTs and forwards them through the container so the Meta CAPI tag can read the data.

Intermediate
8 min setup
↓ 185

[Stáhnout .tpl](/cs/gtm-templates/meta-client/download/)
[Setup návod →](https://datanostro.com/cs/docs/setup/meta-capi/)

🎬

client

### TikTok Pixel Client

TikTok

Routes TikTok pixel calls through the sGTM container.

Intermediate
8 min setup
↓ 236

[Stáhnout .tpl](/cs/gtm-templates/tiktok-client/download/)
[Setup návod →](https://datanostro.com/cs/docs/setup/tiktok/)

## 🏷️ GTM Tagy

Posílají data do platforem (GA4, Meta CAPI, Google Ads, Sklik, …).

📈

tag

### GA4 Event Tag

GA4

Forwards an event to GA4 Measurement Protocol. Pair with the GA4 Client to capture events from the front-end.

Beginner
5 min setup
↓ 175

[Stáhnout .tpl](/cs/gtm-templates/ga4-event-tag/download/)
[Setup návod →](https://datanostro.com/cs/docs/setup/ga4/)

💬

tag

### Meta Conversions API Tag

Meta

Server-side Meta CAPI tag with event\_id deduplication and SHA-256 hashing of email/phone before send.

Intermediate
10 min setup
↓ 173

[Stáhnout .tpl](/cs/gtm-templates/meta-capi-tag/download/)
[Setup návod →](https://datanostro.com/cs/docs/setup/meta-capi/)

🎯

tag

### Google Ads Enhanced Conversions

Google Ads

Hashed user identifiers (email, phone) sent to Google Ads. Boosts match rate by ~30% over click-only attribution.

Advanced
15 min setup
↓ 176

[Stáhnout .tpl](/cs/gtm-templates/google-ads-enhanced-conversions/download/)
[Setup návod →](https://datanostro.com/cs/docs/setup/google-ads/)

🎵

tag

### TikTok Events API Tag

TikTok

Server-side TikTok Events API v1.3. Pixel ID + Marketing API access token.

Intermediate
10 min setup
↓ 209

[Stáhnout .tpl](/cs/gtm-templates/tiktok-events-tag/download/)
[Setup návod →](https://datanostro.com/cs/docs/setup/tiktok/)

🇨🇿

tag

### Sklik Conversion (CZ)

Sklik

Seznam Sklik conversion tag for CZ e-commerce. SEM ID identifies the conversion goal in Sklik UI.

Beginner
5 min setup
↓ 176

[Stáhnout .tpl](/cs/gtm-templates/sklik-conversion-tag/download/)
[Setup návod →](https://datanostro.com/cs/docs/setup/sklik/)

## 📦 GTM Variables

Proměnné pro načtení cookies, session ID a dalších dat ze server-side requestu.

🍪

variable

### Cookie Value

Reads a single cookie value from the incoming request. Use anywhere a static variable is expected.

Beginner
2 min setup
↓ 180

[Stáhnout .tpl](/cs/gtm-templates/cookie-variable/download/)

🔗

variable

### GA4 Session ID

GA4

Extracts session id from \_ga\_<container> cookie. Useful for joining server events with GA4 sessions in BigQuery.

Intermediate
3 min setup
↓ 181

[Stáhnout .tpl](/cs/gtm-templates/ga4-session-id/download/)

## 📖 Jak nainstalovat GTM šablonu

1

### Stáhnout .tpl soubor

Klikněte na "Stáhnout .tpl" u vybrané šablony. Soubor se uloží do Downloads složky.

2

### Otevřít GTM Server-side kontejner

Přejděte na [tagmanager.google.com](https://tagmanager.google.com) a otevřete váš Server-side kontejner.

3

### Import šablony

Templates → New → V pravém horním rohu ⋮ (tři tečky) → Import → Vyberte stažený .tpl soubor → Save.

4

### Vytvořit Client/Tag/Variable

Vytvořte nový Client/Tag/Variable → Vyberte vaši DataNostro šablonu → Nakonfigurujte podle dokumentace.

5

### Testovat a Publish

Aktivujte Preview mode → otestujte funkcionalitu → publish kontejneru. Hotovo.

## 💬 Časté otázky

### Jsou tyto šablony zdarma?

Ano, všechny GTM šablony jsou zdarma. Power-Ups jsou však dostupné pouze v PRO+ plánech DataNostro.

### Jaký je rozdíl mezi GTM šablonami a Power-Ups?

**GTM šablony:** Musíte je ručně stáhnout, naimportovat do GTM, nakonfigurovat a publish kontejner.  
**Power-Ups:** Built-in funkce aktivovatelné jedním kliknutím v DataNostro dashboardu. Žádná instalace GTM šablon.

### Jsou šablony kompatibilní s jinými sGTM platformami?

Ano, všechny šablony používají standardní sGTM API a jsou kompatibilní s jakoukoliv sGTM platformou. Rozdíl je pouze v brandingu (DataNostro).

### Potřebuji technické znalosti?

Základní znalost GTM je doporučena. Pro začátečníky doporučujeme použít Power-Ups (aktivace jedním kliknutím bez GTM konfigurace).

## Potřebujete pomoc s instalací?

Náš tým vám rád pomůže s nastavením GTM šablon nebo Power-Upů.

[Kontaktovat podporu](/cs/contact/)