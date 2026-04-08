# Sanyi AI Akadémia

Interaktív, egyoldalas tananyag Sanyi számára — nulláról a saját élő weboldaláig Claude-dal.

**Élő verzió:** *(hamarosan)*

---

## Mi ez?

Egy single-page webapp, ami 7 fázisban, 32 leckén keresztül végigvisz a következőkön:

- **Fázis 0** — Indulás (vízió, használat, angol hangdiktálás)
- **Fázis 1** — Claude Desktop magabiztosan (Projects, CLAUDE.md, prompt alapok)
- **Fázis 2** — Tartalomgyártás (FB posztok, Canva, SVG, PDF)
- **Fázis 3** — Terminál + Claude Code (`--dangerously-skip-permissions`)
- **Fázis 4** — MCP szuperképességek (Filesystem, Context7, Supabase, Playwright, Meta)
- **Fázis 5** — GitHub + Cloudflare Pages (ingyenes élesítés)
- **Fázis 6** — Saját "Rólam" oldal megépítése és élesítése

## Technológia

- Vanilla HTML + CSS + JavaScript (semmi build, semmi framework)
- localStorage-ben mentett progressz
- Web Audio API (pop hang, harang)
- CSS animációk (konfetti, accordion, pulse)
- Vitality Gym arculat (kék / piros / arany, Orbitron / Oxanium / Outfit fontok)
- Mobil-barát, reduced-motion barát

## Fájlok

```
sanyi-akademia/
├── index.html          # Vázszerkezet
├── styles.css          # Teljes design system
├── app.js              # Teljes interaktivitás
├── data/
│   └── curriculum.js   # A 32 lecke tartalma
├── assets/             # (jövőbeli képek)
└── README.md
```

## Helyi futtatás

Csak nyisd meg az `index.html`-t bármelyik modern böngészőben. Semmi telepítés nem kell.

Vagy egyszerű lokális szerver Python-nal:

```bash
cd sanyi-akademia
python3 -m http.server 8080
# http://localhost:8080
```

## Élesítés

GitHub → Cloudflare Pages automatikus deploy.
Minden `git push` után 30-60 másodperc múlva él a változás.

## Szerkesztés

- **Új lecke** vagy **szöveg módosítás:** csak a `data/curriculum.js`-t kell szerkeszteni.
- **Szín / betűtípus:** a `styles.css` tetején a `:root` változókat.
- **Új interakció:** `app.js`.

---

© 2026 Vitality Gym · Készült Claude Code-dal · Gergely László András (Laci) és a Vitality Team
