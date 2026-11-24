# CLAUDE.md — FDC Webdesign website

Marketing website for **FDC Webdesign**, a one-person web agency in Wavre (Brabant wallon, Belgium) that builds and maintains websites for local SMEs and independents (trades, accountants, lawyers, dentists, etc.) on a **monthly subscription** model.

The site has two jobs:
1. Look credible when a prospect Googles FDC after a cold email.
2. Prove the craft: the site itself is the portfolio, so polish and motion matter.

Owner: Filip (French-speaking). **All site copy is in French (Belgian usage).** Code, comments and commit messages in English.

---

## Stack (do not change without asking)

- **Next.js (latest stable), App Router, TypeScript**
- **Static export** (`output: 'export'`): no server, no API routes, no middleware, no ISR, no `next/image` optimization
- **Tailwind CSS** for styling; design tokens below go in the Tailwind theme + CSS variables
- **Fonts:** `next/font/google`, Inter Tight (300/400/500/600) and JetBrains Mono (400/500), self-hosted by next/font
- **Hosting:** Cloudflare Pages, free plan, Git integration (push to `main` = deploy)
- **Contact form:** Web3Forms (or Formspree) via client-side `fetch`. No backend of our own.
- **Analytics:** Cloudflare Web Analytics (cookieless) only. No Google Analytics, no cookie banner needed.

### Hard constraints
- Never add anything that needs a Node server at runtime (route handlers, server actions, `cookies()`, dynamic rendering). `next build` must produce a fully static `out/` folder.
- Never collect payment card data on the site (Cloudflare free-plan terms forbid it). Payments, if ever needed, go to a hosted checkout (e.g. Stripe Payment Links).
- Do not deploy to Vercel (its Hobby plan forbids commercial use) or GitHub Pages (its terms forbid commercial use).
- No new dependencies without a clear reason. Motion is CSS keyframes first; reach for a library (e.g. `motion`) only if CSS truly can't do it.

---

## Commands

```bash
npm install
npm run dev        # local dev on http://localhost:3000
npm run build      # static export to ./out
npm run lint
npx serve out      # preview the exported site
```

`next.config.ts`:
```ts
import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,          // /offres/ -> out/offres/index.html, clean URLs on Pages
  images: { unoptimized: true },
};
export default nextConfig;
```

---

## Deployment — Cloudflare Pages

1. Push the repo to GitHub (private is fine).
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → select repo.
3. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npx next build`
   - Build output directory: `out`
   - Env var: `NODE_VERSION` = current LTS (e.g. `22`)
4. Custom domain: buy the `.be` at a cheap registrar (Above.com or IONOS), move its nameservers to Cloudflare (free DNS), then add the domain in Pages → Custom domains. Add both apex and `www` (redirect `www` → apex).
5. Add `public/_headers` (security headers + long cache for hashed assets) and `public/_redirects` if any URL changes.

Free-plan limits to respect: 500 builds/month, 20,000 files per site. Don't trigger builds in a loop.

Secrets: the Web3Forms access key is public by design (client-side), store it as `NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.local` and in Pages env vars. Never commit `.env*`.

---

## Design system — "Orbite" (Direction D)

Source of truth for the look: the Design canvas "FDC Webdesign — Website" (artboards *Site — Accueil / Réalisations / Offres / À propos / Contact*, plus *Composant — Navigation / Pied de page*). Match it closely; when in doubt, follow these tokens.

### Colors
| Token | Hex | Use |
|---|---|---|
| `ink` | `#0E0F12` | text, dark sections, primary dark buttons |
| `paper` | `#F3F3EF` | page background |
| `white` | `#FFFFFF` | cards |
| `mist` | `#A7A8A3` | second line of two-tone headlines (large text only) |
| `steel` | `#55575C` | secondary text, mono labels |
| `graphite` | `#44464B` | body text on paper |
| `line` | `#DEDED8` | borders, rings, dividers |
| `blue` | `#2B4BFF` | primary CTA (white text), links, mono accents |
| `volt` | `#C6F432` | highlight on ink only (badges, CTA on dark), never as text on paper |
| dark-section text | `#B9BAB4` / `#8A8C91` | secondary text on ink |

Contrast: body text must hit 4.5:1. `mist` is only for display-size text (≥ 32px).

### Typography
- Display: Inter Tight 400, very tight tracking (`-0.045em`), line-height ~0.98, fluid `clamp(44px, 7.4vw, 108px)` on the home hero.
- **Two-tone headline pattern:** line 1 in `ink`, line 2 in `mist`. Used on every page hero and section title.
- Body: Inter Tight 400, 16–19px, line-height 1.5–1.65.
- Labels: JetBrains Mono, 11–13px, uppercase, `letter-spacing: 0.08em`, written like `[ 01 — Méthode ]`.
- Logo: `fdc/webdesign` in JetBrains Mono 500, the slash in `blue` (on paper) or `volt` (on ink).

### Shape & layout
- Container `max-width: 1280px`, side padding 32px; sections ~120px vertical spacing.
- Radii: cards 20–24px, big panels 28px, buttons/pills fully rounded (`999px`).
- Thin 1px rings/circles as decoration (concentric rings in hero, footer and contact).
- Buttons ≥ 44px tall (52px for main CTAs).
- No gradient washes, no emoji, no left-border "accent" cards, no stock photos of handshakes.

### Motion (all must respect `prefers-reduced-motion: reduce` → disable)
- **Hero orbit:** 760px circle containing (a) two thin concentric rings, (b) a tick-mark dial (`repeating-conic-gradient` masked to a ring) rotating slowly in reverse (~120s), (c) 6 demo-project cards on a ring rotating ~70s, each counter-rotated so it stays upright, (d) a center "browser" card labelled `votre-entreprise.be — en construction` whose skeleton bars grow and shimmer. Scale down to ~0.5 under 760px.
- Marquee of sectors (Toiture ✳ Électricité ✳ Plomberie ✳ HVAC ✳ Rénovation ✳ Piscines ✳ Comptables ✳ Avocats ✳ Dentistes ✳ Immobilier), ~38s loop, duplicated content for a seamless loop.
- Pulsing dot (volt) next to the hero eyebrow label.
- Réalisations cards rise in with a stagger; lift 6px on hover.
- À propos: radar sweep (conic gradient) over concentric rings, centered on Wavre with a pinging blue dot and town labels.
- Contact: success state pops in after submit.
- Subtle scroll-reveal on section titles is welcome (IntersectionObserver + CSS class). Keep it tasteful; never block content behind animation.

---

## Information architecture

```
/                 Accueil
/realisations/    Réalisations
/offres/          Offres (tarifs, comparatif, FAQ)
/a-propos/        À propos
/contact/         Contact
/mentions-legales/
/confidentialite/
/conditions/      Conditions générales
```
Later (SEO growth): sector × town landing pages, e.g. `/site-web-electricien-wavre/`, generated statically from a data file. Don't build these until asked.

Shared components: `Nav` (logo, links Réalisations · Offres · À propos · Contact, CTA pill "Maquette gratuite →", active link underlined + `aria-current="page"`), `Footer` (dark, two-tone "Parlons de / votre site." + volt CTA, columns Pages / Contact / Légal, © + TVA line, decorative rings).

### Page content (copy is in the canvas; summary here)
- **Accueil:** eyebrow `Agence web · Brabant wallon & Bruxelles · 3 places de lancement` → H1 "Des sites qui travaillent / pendant que vous bossez." → subline → CTAs "Recevoir ma maquette gratuite" (blue) + "Voir les prix" (outline) → orbit → "Voir les réalisations →" → marquee → Méthode (4 cards: Maquette offerte / Vos retours / En ligne en 14 jours / On s'en occupe, the last one dark) → Offres teaser (3 plans + "Formule sans apport" dashed banner) → three promise circles (14 j / 0 € / 1) → footer.
- **Réalisations:** H1 "Ce qu'on construit. / Pour des métiers comme le vôtre." + honest note that these are demo projects with fictional businesses → 5 demo cards in browser frames (Toitures Lambert, Cabinet Moreau, Volt Électricité, Dr Leroy dentiste, Piscines du Brabant) with feature tags → dashed "Votre entreprise pourrait être ici." card → footer.
- **Offres:** H1 "Un prix par mois. / Tout est compris." → segmented toggle **Création + abonnement** / **Sans apport** (client component; updates the explanatory line and the per-plan setup line; Essentiel is "Non disponible sans apport") → 3 plan cards (Pro is dark with volt "Le plus choisi" badge) → comparison table (scrolls horizontally on mobile) → FAQ accordion (`<details>`) → footer.
- **À propos:** H1 "Une agence. / Un seul interlocuteur." + first-person intro from Filip + photo slot → 3 value cards (Local / Clair / Suivi) → zone d'intervention with town pills + radar → footer.
- **Contact:** H1 "Votre maquette, / gratuite, en 72 h." + J+0 / J+3 / J+17 timeline + contact details → dark form card: sector pills (single-select), nom, entreprise, e-mail, site actuel (optional), volt submit → success state "Merci ! / On s'y met." → footer.

### Placeholders — never invent these, keep them visibly bracketed until Filip provides them
`[59]` `[99]` `[149]` €/mois, `[790]` € création, `[EMAIL]`, `[TÉLÉPHONE]`, `[BE0XXX.XXX.XXX]` (TVA), Filip's bio paragraph, portrait photo, FAQ answers marked `[À préciser …]`, legal page contents. Keep all prices and contact details in **one** file (`src/content/site.ts`) so they change in one place.

---

## Content & honesty rules (important)

- **Do not mention AI anywhere on the site** (no "conçu avec l'IA", no AI badges, no AI FAQ). Filip asked for this explicitly.
- FDC has no clients yet. **No fake testimonials, ratings, client logos, "X clients satisfaits" counters or invented stats.** Demo projects are always labelled `démo` and the Réalisations page says the businesses are fictional.
- Promises shown on the site (14 jours, maquette en 72 h, 0 € maquette) are commitments — don't add new ones without asking.
- French copy: Belgian conventions (TVA, HTVA, "GSM" acceptable), proper typographic apostrophes (’) and non-breaking spaces before `€`, `?`, `!`, `:` where natural.

---

## SEO & quality bar

- Per-page `metadata` (title ≤ 60 chars, description ≤ 155 chars, French), canonical URLs, Open Graph image (static PNG in `public/`).
- `app/sitemap.ts` and `app/robots.ts` (both work with static export).
- JSON-LD `ProfessionalService`/`LocalBusiness` on the home page (name, area served: Brabant wallon & Bruxelles, Wavre address only if Filip confirms it). No `aggregateRating`.
- `<html lang="fr-BE">`.
- Accessibility: real `<a>`/`<button>`, labelled inputs, visible focus styles, `aria-hidden` on decorative rings/dials, `role="img"` + label on the radar, keyboard-usable toggle and sector pills (`aria-pressed`).
- Lighthouse targets on mobile: Performance ≥ 95, Accessibility 100, Best Practices 100, SEO 100. Check after every significant change.
- Mobile first: everything must work at 375px (nav wraps, orbit scales, table scrolls).

## Legal (Belgium / GDPR)
Mentions légales (company name, address, e-mail, TVA, hosting provider: Cloudflare, Inc.), politique de confidentialité (contact form data: purpose = reply to the request, processor = Web3Forms, retention, rights, contact), conditions générales (subscription terms, minimum duration for "sans apport", cancellation, site ownership). Draft them as clearly marked templates for Filip to validate; don't present them as legal advice.

---

## Project structure

```
src/
  app/
    layout.tsx            fonts, <html lang="fr-BE">, Nav + Footer
    page.tsx              Accueil
    realisations/page.tsx
    offres/page.tsx
    a-propos/page.tsx
    contact/page.tsx
    mentions-legales/page.tsx
    confidentialite/page.tsx
    conditions/page.tsx
    sitemap.ts
    robots.ts
    globals.css           tokens as CSS vars, keyframes, reduced-motion rules
  components/
    Nav.tsx  Footer.tsx  Orbit.tsx  Marquee.tsx  PlanCards.tsx
    PricingToggle.tsx (client)  ContactForm.tsx (client)  Radar.tsx  TwoToneHeading.tsx
  content/
    site.ts               prices, contact details, nav links
    projects.ts           demo projects (name, sector, colors, headline, CTA, tags)
public/
  _headers  og.png  favicon.svg
```

Keep client components to the minimum (toggle, form, scroll-reveal). Everything else is a server component rendered at build time.

## Workflow for Claude Code
- Work in small commits on a branch; don't push to `main` (that deploys) unless Filip says so.
- Before finishing a task: `npm run build` must succeed and `out/` must contain every route.
- When copy or a number is missing, use the bracketed placeholder and list it in your summary — never guess.
