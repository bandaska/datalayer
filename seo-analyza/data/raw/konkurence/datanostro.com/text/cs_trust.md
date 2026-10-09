# URL: https://datanostro.com/cs/trust/

TRUST CENTER

# Bezpečnost, *transparentně.*

Stránka pro security a procurement týmy, které DataNostro hodnotí jako dodavatele. Najdete tu architekturu, sub-procesory, GDPR a compliance status, retention pravidla, incident response a předvyplněné odpovědi na SIG-Lite. Bez marketingových frází, bez slibů, které ještě nedržíme.

[Kontaktovat security tým](/cdn-cgi/l/email-protection#85f6e0e6f0f7ecf1fcc5e1e4f1e4ebeaf6f1f7eaabe6eae8)
[Stáhnout DPA](/cs/dpa/)

## Aktuální stav (live)

[OPERAČNÍ STAV

**Vše operační**

měřeno automatickým health-checkem každých 60s](/cs/status/)

DATOVÁ REZIDENCE

**EU / EHP**

EU Tier III datacenter (Německo)

ŠIFROVÁNÍ V TRANSITU

**TLS 1.2 / 1.3**

Let's Encrypt + HSTS, A+ na SSL Labs

ŠIFROVÁNÍ V KLIDU

**LUKS / AES-256**

Disk-level na všech nodách + Postgres

## Compliance status — co máme a co ne

Píšeme to rovnou: jsme český OSVČ s malým týmem, takže formální audity jsou drahé a teprve plánované. Pokud váš dodavatelský proces vyžaduje konkrétní cert, dejte nám vědět — buď to dořešíme, nebo upřímně řekneme, že tarif vašeho prospekta nedáváme.

| Standard | Stav | Detail |
| --- | --- | --- |
| GDPR (EU 2016/679) | ✓ Aktivní | [GDPR stránka](/cs/gdpr/) · [DPA](/cs/dpa/) |
| Standardní smluvní doložky (SCC EU 2021) | ✓ Modul 2+3 podepsané | Pouze pro Cloudflare jako sub-procesora; ostatní v EU/EHP |
| ISO 27001 | ✓ Inherited | Hostingová vrstva je ISO 27001 + 9001 certifikovaná |
| ISO 27001 (DataNostro) | Plánujeme | Cílový termín Q4 2026, výběr CAB v ČR (CQS / BSI Czech / TÜV NORD CZ) v procesu |
| SOC 2 Type I / II | — Nemáme | Pokud váš dodavatelský proces SOC 2 explicitně vyžaduje, řekněte nám — buď zrychlíme, nebo doporučíme jiného dodavatele |
| PCI DSS | ✓ N/A | Nezpracováváme platební karty (bankovní převody) |
| HIPAA / BAA | — Nepodporujeme | Pro healthcare data nepoužívejte — viz DPA, čl. 4 (zvláštní kategorie) |
| Schrems II | ✓ Compliance zajištěn | Tracking pipeline data nikdy neopouští EU; Cloudflare jen pro hlavní doménu se SCC |

## Bezpečnostní architektura

High-level. Detailní whitepaper na vyžádání pod NDA pro Enterprise klienty.

### Síťová izolace

* Per-tenant Docker network namespace + iptables
* Žádný přístup mezi sGTM kontejnery vzájemně
* Nginx reverse proxy s rate-limiting per IP a per tenant
* Pouze 80/443 exponované veřejně, vše ostatní za firewall

### Šifrování

* V tranzitu: TLS 1.2 / 1.3, Let's Encrypt auto-renewal, HSTS
* V klidu: LUKS disk encryption
* DB: PostgreSQL na šifrovaném disku, žádné application-level pole
* API klíče platforem: Fernet symetrické šifrování v DB, klíče v env

### Autentizace a přístupy

* PBKDF2-SHA256 password hashing (Django default, 600k iterací)
* MFA / TOTP volitelné pro každého uživatele
* Session timeout 14 dní, samostatné API klíče s manuální rotací (per-tenant Owner)
* RBAC: Owner / Admin / Member / Viewer per tenant
* SSO (SAML 2.0) pro Enterprise tarif

### Logging a audit

* Append-only audit log všech privilegovaných akcí (90 dní retention)
* Real-time event capture (15 dní) pro debugging
* Health-check + capacity monitoring s e-mail alerting
* Žádný PII v aplikačních logech (sanitized)

## Zpracování dat — co, kde, jak dlouho

Konkrétní odpovědi pro vendor questionnaire. Pokud chybí, napište — doplníme.

|  |  |
| --- | --- |
| Jaká data zpracováváme | Tracking data odeslaná z prohlížečů zákaznických koncových uživatelů (page\_view, purchase, atd.) — IP, user-agent, ID cookie, hodnota objednávky, položky košíku. Žádné kreditní karty, žádné citlivé osobní údaje (čl. 9 GDPR). |
| Kde data sídlí | Pouze EU — EU Tier III datacenter (Německo). Žádný přenos mimo EU/EHP pro tracking pipeline. |
| Jak dlouho data uchováváme | Surový tracking traffic: **není ukládán** (proxy do cílových platforem). Event capture pro debug: 15 dní. Agregované statistiky (request log per hodina): 24 měsíců. Faktury: 5 let dle § 35 zákona č. 563/1991 Sb. |
| Smazání dat na žádost | Self-service: /dashboard/nastaveni/ → Zrušit účet. Mazání proběhne do 30 dní (zákonná povinnost). Faktury zůstávají dle § 35 z. č. 563/1991 Sb. |
| Export dat | Self-service ZIP export z /dashboard/export/ — celá tenant konfigurace, eventy, GTM workspace JSON, faktury. Bez supportu, kdykoli. |
| Sub-procesoři | EU Tier III datacenter (Německo), Cloudflare Inc. (USA — pouze hlavní doména datanostro.com), Seznam.cz a.s. (CZ — odchozí transakční SMTP). Plný seznam včetně IČO a záruk v [DPA](/cs/dpa/). |
| Zálohy a DR | Denní pg\_dump do druhého EU regionu, retention 30 dní, restore měsíčně testován. RPO 24h, RTO 4h pro full restore. |
| Kontinuita po ukončení DataNostro | sGTM kontejnery jsou standardní Google obrazy, GTM workspace je standardní JSON. Migrace k jakémukoli jinému managed hosteru, vlastnímu serveru nebo cloudu řádově hodiny. Pro Enterprise tarif source-code escrow přes notáře — viz kontrakt. |

## Incident response a oznamovací povinnost

* **Detekce**

  Health-check každých 60s, capacity alerty při sustained breach (CPU/mem/disk/PG/queue), real-time error monitoring.
* **Eskalace**

  Alert e-mail → zakladatel (8/5 obvykle < 30 min reakce, mimo pracovní dobu < 2h).
* **Oznámení dle čl. 33 GDPR**

  ÚOOÚ do 72 h od zjištění. Klient (Správce) bezodkladně po potvrzení rozsahu, max do 48 h.
* **Public komunikace**

  Status update na [/status/](/cs/status/) + e-mail všem dotčeným tenantům. Post-mortem do 14 dní u významných incidentů.

## Hlášení zranitelností

Bug bounty zatím nemáme, ale responsible disclosure ano.

* Hlášení posílejte na [[email protected]](/cdn-cgi/l/email-protection#30435553454259444970545144515e5f4344425f1e535f5d), ideálně PGP šifrované (klíč na vyžádání).
* Reakce do 48 h, oprava dle závažnosti (kritická < 7 dní, vysoká < 30 dní, střední < 90 dní).
* Žádné právní kroky proti researcherům, kteří dodrží: nepoškozovat data, nepoužívat sociální inženýrství, nezveřejnit do opravy + 30 dní.
* Hall of Fame plánujeme až s prvním validním nálezem; do té doby pouze poděkování e-mailem.

## Dokumenty ke stažení

[**Obchodní podmínky**
Smlouva s klientem (VOP), v2.1](/cs/terms/)
[**DPA (čl. 28 GDPR)**
Smlouva o zpracování OÚ, v2.1](/cs/dpa/)
[**GDPR informace**
Práva subjektů, retention, sub-procesoři](/cs/gdpr/)
[**Acceptable Use Policy**
Zakázané případy užití, čistá legální půda](/cs/aup/)
[**Cookies policy**
Naše vlastní web — minimální použití](/cs/cookies/)
[**Reklamační řád**
Postup při reklamacích a vrácení](/cs/reklamacni-rad/)
[**Security Whitepaper**
Bezpečnostní architektura, 14 sekcí pro IT review](/cs/security-whitepaper/)
[**NDA šablona**
Vzájemná dohoda o mlčenlivosti k podpisu](/cs/nda/)
[**MSA (Enterprise)**
Rámcová smlouva s SLA penále a audit právy](/cs/msa/)

Detailní dokumenty (DR playbook, sub-processor risk assessment, ISMS dokumentace) sdílíme pod NDA pro Enterprise klienty. Externí pen-test plánujeme Q4 2026 a redacted report zpřístupníme po jeho dokončení — napište na [[email protected]](/cdn-cgi/l/email-protection#7b081e180e09120f023b1f1a0f1a1514080f091455181416).

## Předpřipravené odpovědi (SIG-Lite výtah)

Výběr nejčastěji ptaných otázek z vendor questionnaire (Shared Assessments SIG-Lite).

A. Risk management — máte zavedený ISMS?

Formální certifikovaný ISMS dle ISO 27001 zatím ne — plánujeme Q4 2026. Provozujeme dokumentovaný interní bezpečnostní rámec (technicko-organizační opatření čl. 32 GDPR), který je popsaný v [DPA](/cs/dpa/). Rizika reviewujeme čtvrtletně, dokumentace na vyžádání pod NDA.


B. Asset management — kdo má přístup ke produkčním systémům?

Pouze zakladatel (Jan Malatinský). SSH klíče s passphrase, MFA do admin rozhraní, audit log všech privilegovaných akcí (append-only, 90denní retention). Žádný third-party support má root přístup k tenant datům.


C. Network security — segmentace, firewally, DDoS?

Per-tenant Docker network namespace, iptables firewall, pouze 80/443 vystavené veřejně, vše ostatní za cloud firewall. DDoS ochrana přes Cloudflare na hlavní doméně. Rate-limiting per IP a per tenant na nginx vrstvě.


D. Application security — code review, SAST, dependency scan?

Všechen kód reviewován před mergem. Dependabot na security update kritických závislostí. Statická analýza přes pre-commit hooks. Penetration test plánujeme 2026 Q4 (po ISO 27001 readiness). Externí pen-test na vyžádání pro Enterprise.


E. Vulnerability management — patching, CVE response?

Auto-patching OS přes unattended-upgrades. Závislosti přes Dependabot s týdenní review. Kritické CVE řešíme do 7 dní, vysoké do 30 dní. Postupy popsané v sekci „Hlášení zranitelností" výše.


F. Business continuity — RTO, RPO, DR test?

RPO 24h (denní pg\_dump), RTO 4h pro full DB restore. DR runbook měsíčně testován. Backup do druhého EU regionu, retention 30 dní (denní) + měsíční offline kopie. DR plán v plné verzi pod NDA.


G. Insurance — máte pojištění odpovědnosti?

Smluvní limit odpovědnosti je upravený v hlavních VOP (čl. 19) a DPA. Standardní pojistná smlouva pro OSVČ a samostatná cyber-insurance jsou na naší straně otevřená položka — pokud váš dodavatelský proces vyžaduje konkrétní krytí, řekněte nám parametry a domluvíme se ve smlouvě.

## Otázka, která tady chybí?

Pokud váš security tým potřebuje konkrétní odpověď, dokument nebo NDA-protected whitepaper, napište přímo. Reakce typicky do jednoho pracovního dne.

[[email protected]](/cdn-cgi/l/email-protection#e99a8c8a9c9b809d90a98d889d8887869a9d9b86c78a8684)
[[email protected]](/cdn-cgi/l/email-protection#d6a6a4bfa0b7b5af96b2b7a2b7b8b9a5a2a4b9f8b5b9bb)