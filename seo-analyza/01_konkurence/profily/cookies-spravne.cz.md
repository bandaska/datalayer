# Cookies správně (cookies-spravne.cz)
**Typ:** SaaS-nástroj (česká CMP / cookie lišta s klientskou zónou; produkt komunikační agentury CRS a.s., Praha 8; existuje i .sk verze a dokumentace docs.cookies-spravne.cz) · **Relevance pro datalayer.cz:** částečný konkurent + potenciální partner – konkuruje ve službě „cookie lišta + Consent Mode v2“ (vlastní implementace na klíč za 3 000 Kč), měření jako takové nedělá; obsahově silný konkurent na „cookie lišta“ (pozice 4–9), „consent mode v2 nastavení“ (4.) a „cookie lišta gdpr zákon“ (3.).

## Pozicionování a USP
- H1: „Cookies a souhlasy vyřešeny. Vše správně a snadno i pro vaše weby“; nadtitulek „Česká cookie lišta a správa souhlasů“; výslovně „alternativa ke Cookiebot a CookieYes“.
- 4 benefity pod hero: 14 dní zdarma bez karty, „Vyladěno pro Google“, česká podpora po telefonu (Po–Pá 9–17, „robot u nás jen vaří kafe“), data v EU (bez ukládání IP a user agentu).
- Hlavní myšlenka: „Nejde jen o cookies. Důležitý je consent management“ – lišta posílá granted/denied do dataLayeru a Google Consent Mode v2, aby Google Ads, GA4 i Sklik věděly, co smí měřit.
- Odlišení („Šest věcí, které děláme jinak“): česká podpora, klientská zóna, adaptace na českou i EU legislativu, platba za souhlasy (ne podstránky/zobrazení), **jednorázová platba bez uložené karty i na fakturu**, 6 jazyků lišty; srovnávací tabulka vs. Cookiebot a CookieYes.
- Komu: malé i velké weby, e-shopy, firemní weby; samostatná větev pro agentury a tvůrce webů.

## Nabídka služeb
Web má jen 11 URL (vše v sitemapě). Počty slov = text těla stránky.

| Služba | URL | Slov na stránce (cca) | Klíčové prvky stránky |
|---|---|---|---|
| Cookie lišta (produkt, homepage) | / | 1 150 | hero + 2 CTA, 4 benefity, logo pás „Používají nás malí i velcí“, „consent management“ blok, 6 USP, srovnávací tabulka vs. Cookiebot/CookieYes, 4 kroky „Jak to funguje“, 6 funkcí klientské zóny, 3 cesty nasazení, ceník (2 tarify), reference (Coolhousing), agentury, CTA + telefon |
| Implementace (3 způsoby nasazení) | /implementace | 840 | 3 karty (GTM šablona / jeden skript / text/plain), **srovnávací tabulka cest** (pro koho, kam se vkládá kód, Consent Mode v2, měření bez cookies před souhlasem, potřeba programátora), checklist „Než to vypustíte do světa“, FAQ |
| Ceník | /cenik | 970 | tarify Pro / Enterprise, platba GoPay, doklad, doplňkové služby |
| Nastavení cookie lišty na klíč | /cookie-lista-na-klic | 680 | cena 3 000 Kč, „Co pro vás uděláme“ (6 kroků vč. Consent Mode v2 a ověření), průběh ve 4 krocích, co od vás potřebujeme, CTA e-mail/telefon |
| Pro agentury | /pro-agentury | 650 | slevy 20/30 %, tabulka cen podle počtu licencí, fakturace, 3 kroky |
| Google Consent Mode v2 (průvodce + produkt) | /google-consent-mode-v2 | 930 | definice, **tabulka signálů** (analytics_storage, ad_storage, ad_user_data, ad_personalization, security_storage → kategorie lišty), basic vs. advanced, návod GTM v 5 krocích, „proč dva spouštěče“, varianty bez GTM, FAQ (6) |
| Je cookie lišta povinná? (legislativa) | /je-cookie-lista-povinna | 940 | odpověď hned v perexu, zákon a novela, **tabulka typů cookies × souhlas**, 6 požadavků ÚOOÚ, 8 nejčastějších chyb z kontrol ÚOOÚ, sankce s čísly, řešení, FAQ, „stav k 21. 9. 2026“ |
| Cookie lišta pro WordPress | /cookie-lista-wordpress | 1 040 | platformová LP (co lištu na WP rozbíjí) |
| Kontakt | /kontakt | 330 | telefon, e-mail, provozovatel |

## Anatomie hlavní landing page služby
**/google-consent-mode-v2** (nejrelevantnější pro datalayer.cz; shora dolů):
1. Nadtitulek „Google Consent Mode v2“, H1 „Consent Mode v2 bez starostí“, perex s problémem (bez CMv2 přicházíte o remarketing a část konverzí) a řešením (lišta posílá signály automaticky, oficiální GTM šablona), CTA „Návod v dokumentaci“.
2. „Co je Google Consent Mode v2“ – 2 odstavce (v2 přidala ad_user_data a ad_personalization; pro EHP vyžadováno).
3. **Tabulka signálů** → co určuje → kategorie v liště (security_storage vždy granted); default denied.
4. „Dva režimy“ – 2 karty Základní / Pokročilý.
5. „Nastavení v GTM v pěti krocích“ (šablona z galerie → tag s licenčním klíčem → Consent Initialization – All Pages → ostatní tagy: Meta/Sklik/Clarity se 2 spouštěči All Pages + gtm_consent_update → test v náhledu).
6. „Proč dva spouštěče“ – vysvětlení častého problému (tag se spustí až po reloadu).
7. „Nepoužíváte GTM?“ – 2 alternativy (skripty v administraci / text/plain jako záložní řešení bez cookieless pingů).
8. Upsell „Nechcete to řešit? Implementace za 3 000 Kč“.
9. FAQ (6 otázek: CMv2 bez inzerce, jak ověřit, tag až po obnovení, bez GTM, Sklik, migrace na oficiální šablonu).
10. Závěrečné CTA „Vyzkoušejte si nás“ + telefon.
Vizuální prvky: tabulky, číslované kroky, karty, žádné screenshoty ani video (návody se screenshoty jsou v dokumentaci). Čistý, textový design, mikro-nadtitulky nad H2.

## Důvěryhodnost
- 1 citace klienta (Filip Bršťák, Coolhousing – zákazník od 2022), pás log „Používají nás malí i velcí“ (loga nezjištěna v textu).
- Provozovatel CRS a.s. s plnými firemními údaji; česká telefonní podpora.
- Oficiální šablona v Galerii šablon GTM (důkaz technické integrace).
- Odkazy přímo na ÚOOÚ (Q&A k cookies, tisková zpráva o kontrolách a pokutách) – opírají obsah o primární zdroje; „Tento text není právní radou. Stav k 21. 9. 2026.“
- Certifikace Google CMP Partner / IAB TCF: nezjištěno. Recenze, média, případové studie: nezjištěno.

## Ceny
Ano, plně veřejné (bez DPH):
- **Pro: 2 390 Kč/rok nebo 239 Kč/měs.** (1 doména, všechny funkce, do 50 000 souhlasů měsíčně, 14 dní zdarma).
- **Enterprise: od 3 990 Kč/rok** (nad 50 000 souhlasů/měs., vlastní texty, individuální fakturace).
- **Implementace na klíč 3 000 Kč** jednorázově (sken, kategorizace, vzhled, nasazení přes GTM nebo kód, Consent Mode v2, ověření spouštění skriptů); vlastní texty / nová jazyková mutace 3 000 Kč.
- Agentury: 20 % sleva od 3 licencí (1 912 Kč/licence/rok), 30 % od 7 licencí (1 673 Kč).
- Platba předem přes GoPay (karta, bankovní tlačítko, Google/Apple Pay), bez automatického strhávání; reverse charge pro zahraniční VAT ID.

## Konverze a kontakt
- CTA: „Vyzkoušet zdarma“ (registrace do dashboardu), „Jak to funguje“, „Chci lištu na klíč“ (mailto), „Zavolat +420 778 468 809“, „Domluvit spolupráci“ (agentury, mailto), „Ozvěte se nám“ (Enterprise).
- **Žádný webový formulář** – konverze = registrace účtu (e-mail) nebo mailto (chci@cookies-spravne.cz, podpora@cookies-spravne.cz) a telefon Po–Pá 9–17. Kalendář nezjištěn.
- Lead magnety: 14denní trial bez karty, automatický sken webu (během 2 minut zjistíte, jaké cookies web nastavuje), dokumentace zdarma. E-booky/webináře nejsou.

## Obsah a blog
- Blog nemá. Obsah = 4 „průvodcovské“ stránky v patičce (Je cookie lišta povinná?, Google Consent Mode v2, Cookie lišta pro WordPress, Nastavení na klíč) + dokumentace na subdoméně (Implementace, Administrace, API, Řešení potíží – návody pro GTM, Sklik, migraci šablony).
- Poslední změny: lastmod 21.–23. 9. 2026, homepage 5. 10. 2026 (web je čerstvě přepsaný).
- Nejsilnější stránky:
  - https://cookies-spravne.cz/je-cookie-lista-povinna
  - https://cookies-spravne.cz/google-consent-mode-v2
  - https://cookies-spravne.cz/implementace
  - https://cookies-spravne.cz/cookie-lista-wordpress
  - https://cookies-spravne.cz/ (pozice 4 na „cookie lišta“, 2 na „cookie lišta zdarma“ dle Ahrefs)
- Formát: „odpověď hned v perexu“, tabulky, číslované kroky, FAQ, odkazy na primární zdroje, datace stavu – vhodné pro AI odpovědi.

## Jak vysvětlují legislativu a consent
Parafráze k ověření:
- Právní základ: **zákon č. 127/2005 Sb., o elektronických komunikacích, § 89 odst. 3**; novela **č. 374/2021 Sb.** od 1. 1. 2022 změnila informační povinnost na **předchozí prokazatelný souhlas**; pokud cookies zpracovávají osobní údaje, platí i GDPR.
- Souhlas netřeba jen pro technické (nezbytné) cookies (košík, přihlášení, uložení volby lišty); **GA4, Hotjar, Google Ads, Sklik, Meta pixel, personalizace = souhlas potřeba**. Lišta je povinná, i když máte „jen Google Analytics“; malé weby/živnostníci nejsou výjimkou; lišta „Rozumím“ nestačí.
- 6 podmínek souhlasu podle Q&A **ÚOOÚ**: odmítnutí stejně snadné jako přijetí (v 1. vrstvě), žádná předzaškrtnutá políčka, web přístupný bez souhlasu (bez cookie wall), aktivní projev vůle (zavření lišty ani nastavení prohlížeče není souhlas), stejně snadné odvolání, doložitelnost.
- 8 nejčastějších chyb z monitoringu ÚOOÚ (1. pol. 2022): cookies před souhlasem, chybí odmítnutí, nerovná viditelnost tlačítek, špatná kategorizace, chybí výpis cookies, nepřiměřená platnost, cizí jazyk, lišta brání čtení.
- Sankce: ÚOOÚ v praxi trestá jako zpracování bez právního titulu podle GDPR a zák. č. 110/2019 Sb. (strop 20 mil. EUR / 4 % obratu); reálně 2023 pokuty za cookies souhrnem 4 443 000 Kč, z toho 1 640 000 Kč pravomocně, nejvyšší pravomocná 898 000 Kč; úřad nejdřív vyzývá k nápravě.
- Platnost souhlasu: zákon lhůtu nestanoví, ÚOOÚ doporučuje 12 měsíců a po odmítnutí se ptát nejdříve za 6 měsíců (jejich lišta ukládá volbu na 6 měsíců).
- **Consent Mode v2**: Google ho pro návštěvníky z EHP vyžaduje; bez něj nefunguje remarketing ani personalizace a měření je omezené. Když neinzerujete a používáte jen GA4, „stačí signál analytics_storage“; pro Google Ads, remarketing a publika všechny 4 signály. **Basic** = tagy se nenačtou do souhlasu, **Advanced** = tagy se načtou a bez souhlasu posílají anonymní signály bez cookies pro dopočet konverzí. Metoda text/plain neumí cookieless pingy.
- **Sklik** má vlastní parametr souhlasu (návod v dokumentaci).
- Co lze měřit bez souhlasu: jen přes advanced consent mode (cookieless pingy) – jinak nic; server-side ani cookieless analytiku neřeší.

## Technické SEO postřehy
- CMS pravděpodobně October CMS / Laravel (cesty /storage/app/media/), vlastní GTM-5MKHX7X2, žádné externí skripty kromě vlastní lišty.
- Title vzor: „[Téma/otázka] | Cookies správně“ (např. „Je cookie lišta povinná? Pravidla pro cookies v ČR | Cookies správně“, „Google Consent Mode v2: nastavení v GTM | Cookies správně“); meta description s konkrétními fakty a cenou („Cookie lišta od 239 Kč měsíčně…“).
- URL ploché, krátké, česky (/je-cookie-lista-povinna, /cookie-lista-na-klic).
- Strukturovaná data: WebPage / ContactPage + Organization (s PostalAddress) na každé stránce; **FAQPage schema chybí** přesto, že FAQ jsou na stránkách.
- Malý web (11 URL), ale každá stránka cílí na jednu intenci; patičkové prolinkování „Průvodce“; dokumentace na subdoméně (link equity mimo hlavní doménu).

## Silné stránky / slabiny / co převzít / mezera pro datalayer.cz
**Silné stránky**
- Nejpřesnější a nejaktuálnější český výklad legislativy z analyzovaných webů (primární zdroje ÚOOÚ, čísla zákonů, reálné pokuty, datace stavu).
- Transparentní nízké ceny a jasný produkt; srovnání s Cookiebot/CookieYes; česká telefonní podpora; oficiální GTM šablona.
- Praktické technické detaily (Consent Initialization, gtm_consent_update, druhý příchod, text/plain bez pingů).

**Slabiny**
- Žádné případové studie, recenze ani čísla (consent rate, ztráta dat); jen 1 reference.
- Řeší jen lištu a signály – ne kvalitu měření (GA4, konverze, server-side, Enhanced Conversions, modelování); u 3 000 Kč „na klíč“ jde o nasazení lišty, ne o audit tagů.
- Žádný blog → omezený long-tail; FAQ bez schema.

**Co převzít**
- Formát legislativní stránky: odpověď v perexu, tabulka „typ cookies × souhlas“, požadavky ÚOOÚ s odkazem na zdroj, sankce s reálnými čísly, „stav k [datum], není právní rada“.
- Tabulka signálů Consent Mode → kategorie lišty; srovnávací tabulka způsobů nasazení; checklist „Než to vypustíte do světa“ (test druhého příchodu).
- Jasná cena „na klíč“ přímo v H1/perexu služby.

**Mezera pro datalayer.cz**
- Navazující služba „po liště“: audit, že tagy skutečně respektují souhlas, Consent Mode v2 advanced + modelování, Enhanced Conversions, server-side, Sklik consent – Cookies správně končí nasazením lišty.
- Partnerství: datalayer.cz může lištu Cookies správně doporučovat/implementovat (agenturní slevy 20–30 %) a přidat hodnotu v měření; nebo nabízet CMP-agnostickou implementaci (Cookiebot, CookieYes, Cookies správně, Consentio).
- Obsah s daty: consent rate benchmarky, kolik konverzí se ztrácí bez advanced mode, případovky – tady Cookies správně nemá nic.
