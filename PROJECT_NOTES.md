# Andersens Audit NSW — Project Notes

Documentation of the redesign work done in June 2026. Written so any developer (or AI
session) can pick up the project cold.

---

## 1. Project overview

- **What:** Portfolio / lead-generation website for Andersens Audit NSW, a boutique
  Sydney audit & advisory firm led by Pran Rathod (Director — BA, FCPA, Registered
  Company Auditor, Big 4 background).
- **Goal:** New clients judge the firm by this site. Everything optimizes for trust,
  credibility, and converting executive visitors (CFOs, boards, NFP executives) into
  enquiries.
- **Stack:** React 19 + Vite 7 + Tailwind CSS v4 (via `@tailwindcss/vite`) +
  `react-router-dom` + `lucide-react` icons. Single page at `/` ([src/pages/Home.jsx](src/pages/Home.jsx)).
- **Node requirement:** Vite 7 needs **Node 20.19+ or 22.12+** (Node 22 LTS recommended).
  No `engines` field is pinned in package.json.
- **Deployed:** Cloudflare Workers — https://andersens-audit.prayasbm21.workers.dev/
  (deploys are manual by the owner; local changes here are **not auto-deployed**).
- **Old site (reference):** https://www.andersensauditnsw.com.au/ — source of the
  testimonial author titles and the required compliance line.
- **Dev server:** `npm run dev` (port 5173). `.claude/launch.json` exists for the
  Claude Code preview tool.

## 2. Design evolution (why the site looks like it does)

1. **Original state:** light single-page brochure. Issues found in the audit: contact
   form only `console.log`ged (lost leads), one stock photo reused for both About and
   the named director, brand name inconsistency (logo said "Andersens Assurance", site
   said "Andersens Audit NSW"), no SEO meta, three near-identical navy darks.
2. **Competitor gap analysis** (Deloitte, Grant Thornton; PwC/BDO blocked scraping):
   top firms have insights/thought leadership, sector pages, real photography,
   multiple conversion paths, visible credential logos. Old site's differentiators
   worth keeping: warmth ("Expertise with Empathy") and the personal partner angle.
3. **Concept round:** two mockups built — "Warm Authority" (light) vs "Bold Premium"
   (dark). Owner picked **Bold Premium**; full dark redesign was built.
4. **Trust/conversion elevation pass:** added Industries + Process sections, outcome
   boxes, credential chips, "What happens next" card, CTA standardization (details §4).
5. **Final pivot (current):** owner disliked the dark theme and hero → re-themed to a
   **light, soothing palette** with a **background-video hero**, and wired in the
   firm's real credential/client images for authenticity.

## 3. Current design system

- **Fonts** (chosen by owner after live comparison): **Newsreader** for headings
  (`--font-serif`), **Geist** for body (`--font-sans`). Set in [src/index.css](src/index.css).
- **Palette:** warm off-white `#faf8f5` alternating with `white` sections; brand navy
  `#0B1F3A` for headings/CTAs/footer; `blue-800` eyebrow labels; `slate-600` body;
  `slate-200` borders; soft `blue-100` glow blobs. Footer stays navy as brand anchor.
- **Buttons:** navy bg / white text, hover `blue-900`; secondary = white with
  `slate-300` border. Eyebrows: uppercase, tracking `0.34em`.
- **Cards:** white (or `#faf8f5`) + `border-slate-200` + small shadow + `rounded-2xl`.

## 4. Page structure (Home.jsx order) and what each section does

| # | Component | Purpose / notable features |
|---|-----------|---------------------------|
| 1 | `Navbar` | Fixed. Transparent over video (white wordmark/links) → white bg + real `logo.webp` on scroll. CTA "Request a consultation". |
| 2 | `Hero` | **Background video** (see §5) + navy gradient overlay, white headline "Assurance your board can rely on…", white CTA, glass stats band (20+ / Big 4 / 100% partner-led / Listed·NFP). Also renders the **credentials trust strip** (real CPA + ROC badges). |
| 3 | `Services` | Two columns (Audit & Assurance / Business Advisory), each ending in a highlighted **"The outcome"** box (outcomes, not activities). |
| 4 | `Industries` | 6 sector cards (Listed, Private/Family, Charities/NFP, Super, Education, Property & Construction) — regulator-literate copy (ASX, ACNC, SIS). |
| 5 | `About` | Firm story + proof points. Image is an **Unsplash placeholder**. |
| 6 | `Leadership` | Pran's bio, scannable credential chips, quote, specialisations, CTAs "Speak with Pran directly" + **"Connect on LinkedIn"**. Portrait is an **Unsplash placeholder**. |
| 7 | `Process` | "How We Engage" — 4 steps (Confidential scoping → Risk-focused planning → Partner-led fieldwork → Board-ready reporting), sticky left column with CTA. Addresses fee-surprise/junior-team fears. |
| 8 | `Testimonials` | "Trusted by the people who sign off." Carousel with **real client org logos** and full titles (see §6). |
| 9 | `Contact` | Live form (see §7), "What happens next" 3-step card, contact tiles, Google Maps embed. |
| 10 | `Footer` | Navy. CTA, quick links, contact, LinkedIn, compliance line. |

**Required compliance line** (restored from old site, in form + footer):
*"Liability limited by a scheme approved under professional standards legislation."*

## 5. Hero background video

- Stock clip: *"Business people signing a contract and shaking hands"* — Pexels (free licence):
  `https://videos.pexels.com/video-files/6952022/6952022-hd_1920_1080_25fps.mp4`
- Single constant `HERO_VIDEO` at the top of [src/components/Hero.jsx](src/components/Hero.jsx) — swap for real firm footage anytime.
- Autoplays muted, loops, `playsInline`; a `useEffect` retries `play()` on
  `visibilitychange` because browsers pause background video.
- Other verified-working Pexels alternates (same URL pattern): ids `3252063`
  (handshake in team meeting), `4428751` (meeting new client), `8170599`, `7821621`.

## 6. Real assets in `src/assets` — ⚠️ filenames are MISLABELED

| File | Actual content | Used where |
|------|----------------|-----------|
| `logo.webp` | Firm logo, **opaque white background** (won't work on dark via CSS invert) | Navbar (scrolled state) |
| `logo-inverse.webp` | **NOT a logo** — Australian Government *Registered Organisations Commission* crest | Hero trust strip |
| `Untitled-1.webp` | Official **CPA Practice badge** ("Andersens Assurance Pty. Ltd. is a CPA Practice") | Hero trust strip |
| `aipa_testimonial.webp` | AIPA (Australian & International Pilots Association) logo | Testimonial — Adam Susz (Former Treasurer, AIPA) |
| `cs_testimonial.webp` | Construction Specialist logo | Testimonial — Bill Maloukis (Director & GM) |
| `tavuni_testimonial.webp` | Tavuni Capital logo | Testimonial — Tau Kumar (CEO) |
| `AA+logo.webp` | **NSW Aboriginal Land Council** logo — likely a client | **UNUSED** — confirm with owner before displaying |

## 7. Contact form — LIVE (FormSubmit)

- **Service:** FormSubmit (formsubmit.co) — no account, no API key.
- **Endpoint:** `https://formsubmit.co/ajax/29380783c03d9aafcc2fd17c7d2c4ef0` in
  [src/components/Contact.jsx](src/components/Contact.jsx). The hash is a **private alias** for the target inbox so
  the raw email never appears in page source.
- **Current target inbox:** `pbmcognizant@gmail.com` (owner's **test** inbox).
  Activated 2026-06-11; deliveries verified end-to-end.
- **Subject is dynamic** — `Website enquiry — {name} ({organisation})` — so each
  enquiry lands as its own Gmail thread (a static subject made Gmail collapse them).
- Payload uses `_template: "table"`; FormSubmit auto-sets reply-to from the `email` field.
- UI states: idle → "Sending…" (disabled) → success panel ("Request received.") or
  inline error with direct-email fallback.
- **To switch to the firm's real address:** point the endpoint at
  `https://formsubmit.co/ajax/<new-email>`, submit once, click the activation link
  sent to that inbox, then replace the endpoint with the new alias FormSubmit issues.

## 8. LinkedIn

Pran's profile `https://www.linkedin.com/in/pran-rathod-973537256/` appears in:
- Leadership section — "Connect on LinkedIn" secondary button beside the main CTA.
- Footer contact column (with LinkedIn mark). Both open in a new tab.

## 9. Outstanding / pending

1. **Real photography:** About image and Pran's portrait are Unsplash placeholders;
   hero video is stock. Replace with real photos/footage of Pran, the Bella Vista
   office, and client work — currently the weakest trust link.
2. **SEO meta tags:** `index.html` has only a `<title>` — needs description, Open
   Graph/social-share tags, canonical URL.
3. **NSWALC logo** (`AA+logo.webp`): unused pending owner confirmation that NSW
   Aboriginal Land Council is a client; if so, add a client-logo strip.
4. **Form target email** is the test inbox — swap to the firm address before launch (§7).
5. **Git:** all of this work is **uncommitted** in the working tree; nothing pushed
   or deployed. Production still shows the old dark/original build until redeployed.
6. Brand naming: site standardizes on "Andersens Audit NSW" but the CPA badge and
   email domain say "Andersens Assurance Pty. Ltd." — fine (entity vs trading name),
   just be consistent in copy.

## 10. Dev environment quirks (Claude Code specific)

- Preview screenshot tool occasionally times out ("preview window stuck") — restarting
  the preview server (`preview_stop` → `preview_start`) fixes it.
- The headless preview pauses `<video>` autoplay (power saving); the Hero's
  `visibilitychange` retry handles real browsers.
- `npm install` was needed once to restore the missing `node_modules/.bin/vite` shim.
