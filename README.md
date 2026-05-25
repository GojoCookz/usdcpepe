# SafeNSound Design System

> Data-driven safety insights for families and women. Know Before You Go.

This design system captures the visual language, content voice, and component
patterns of **SafeNSound** — a public-safety intelligence platform that
computes and visualizes weighted safety scores across the United States.
It scores neighborhoods on a 0–100 "Safe Index" using H3 hexagonal heatmaps,
with specialized tools for school-radius safety and route-safety planning.

The system is dark, data-forward, and protective. It leans on a deep navy
canvas, a single cyan accent, and a six-stop diverging score gradient
(crimson → amber → teal) that does almost all of the brand's visual heavy
lifting. The mascot is a hard-hat helmet (⛑️) — warm, reassuring, almost
civic — paired with quiet typographic restraint.

---

## Sources

This system was distilled from the SafeNSound codebase. Open these to dig
deeper than what's mirrored here:

- **GitHub:** [GojoCookz/Secret-Repo](https://github.com/GojoCookz/Secret-Repo)
  (Next.js 16 App Router · React 19 · Deck.gl · MapLibre · Tailwind v4)
- Key files used as truth:
  - `src/app/globals.css` — palette, fonts, signature animations
  - `src/app/page.tsx` — landing-page composition + voice
  - `src/components/layout/Header.tsx` — brand chrome, glow toggles
  - `src/components/ui/{ScoreBadge,GradientBar,Toggle}.tsx` — atoms
  - `src/components/map/{MapLegend,EmergencyButton,MapTutorial}.tsx` — surfaces
  - `src/lib/map-styles.ts` — Safe-Index color stops
  - `src/lib/weights.ts` — scoring factors + per-factor colors

> If you have access to the repo, **read it.** Screenshots compress the
> truth; the source preserves the per-pixel inset shadows, drop-shadow
> stacks, and color tokens that make SafeNSound feel like itself.

---

## Index

```
SafeNSound Design System/
├── README.md                  ← this file
├── SKILL.md                   ← agent skill manifest
├── colors_and_type.css        ← all tokens (colors, type, radii, shadow, motion)
├── assets/
│   ├── hero-backdrop.mp4      ← the supplied backdrop video (used on Landing.html)
│   └── flags/{ca,ny,tx,fl}.png← sample US state flag pins
├── preview/                   ← Design System cards (registered for review)
├── ui_kits/
│   └── web/                   ← React UI kit for the SafeNSound web app
│       ├── README.md
│       ├── index.html         ← clickable hi-fi recreation of the product
│       └── *.jsx              ← Header, ScoreBadge, GradientBar, Toggle, …
└── Landing.html               ← sample landing page using the supplied video
```

---

## Content fundamentals

**Voice — "Know Before You Go."** Authoritative but not alarmist. SafeNSound
is built around contested public data (FBI NIBRS, sex-offender registries,
ICE detention sites, FEMA flood zones), and its copy works hard to stay
factual, dispassionate, and transparent. Every page that quantifies risk
also discloses what the score *is* and what it *isn't*.

**Person.** Second person ("you", "your") for product moments — *"Plan your
route…", "Search any address you live near"*. First-person plural ("we")
only for transparency / methodology disclosures — *"We believe in complete
transparency about how our insights are generated."* Never "I".

**Casing.** Title Case for nav, page titles, card headers, and the
six-tier Safe-Index labels (*Safe, Low Risk, Caution, Elevated Risk,
High Risk, Critical*). Sentence case for body, helper text, tooltips, and
form placeholders. ALL-CAPS only for eyebrows / legend captions with
`letter-spacing: 0.15em`. The wordmark is a single token: **Safe**N**Sound**
with a cyan capital N.

**Tone examples** (lifted from the codebase):

> *"Know Before You Go. Data-driven safety insights for families and women.
> Understand the safety landscape of any area in the United States using
> publicly available data."*
>
> *"Estimates only."* — dismiss-able disclaimer pill, bottom-right of every
> page, links to Methodology.
>
> *"All safety scores are estimates for educational purposes only."*
> — footer fine print.
>
> *"Welcome to SafeNSound. The hex map colors every neighborhood by safety
> score. Green = safer, red = higher risk."* — tutorial step 1.

**Numbers and stats** carry their own visual weight — the four-up stat row
on the homepage (*50 States · 44,891 Schools · 7 Factors · 100% Public
Data*) sets a high bar for any number to *earn* its place. No invented
metrics; no decorative percentages.

**Emoji.** Sparingly and *purposefully*. The codebase reserves emoji for
moments where a small, warm signal helps a cold-data product feel human:
- **⛑️** is the brand mascot and appears in the header logo with a
  one-shot spring-pop animation.
- The map tutorial uses one emoji per step (🔍 search, 🗺️ state, 🎛️ filters,
  📊 overview, 🏫 schools) as the icon for each card.
- Outside of those two surfaces, emoji are not used. Body copy is emoji-free.

**Disclaimer-first.** Every quantitative surface (score badge, factor bar,
school card) carries a context line: *"Score for 1-mile radius around this
school"*, *"Sample Data (Mock)"*, *"Note: current data is sample/mock data"*.
This is a load-bearing tone choice — uncertainty is named, not hidden.

---

## Visual foundations

### Palette

A **single-hue dark navy canvas** carries everything. Three near-black
backgrounds work in concert:

| Token | Hex | Used for |
|---|---|---|
| `--bg-app`    | `#0d1e35` | `<body>` background |
| `--bg-deep`   | `#0a1120` | Footer, transparency surfaces |
| `--bg-darker` | `#080f1e` | Mobile nav, blackest overlays |

On top, a 10-step **surface scale** (`surface-50…900`, identical to Tailwind
slate-blue but renamed) handles every UI shade — borders are
`surface-700/40-70`, panels are `surface-800/40-60`, text steps from
`surface-100` (titles) → `surface-600` (mutest hint).

The single accent is **cyan** (`primary-400 #22d3ee` / `primary-500 #06b6d4`).
It carries every actionable, every focus ring, every "active" state, and
every brand moment (the N in the wordmark, the tutorial arrow, the active
nav pill). There are no secondary brand colors — only the **Safe-Index
gradient** (six stops, crimson → red → amber → green → teal) which is data,
not decoration.

### Type

100% **Inter**. Weights 400 / 500 / 600 / 700 / 800. No serif, no display
face, no mono outside of code blocks and number-heavy legends (where
**JetBrains Mono** is acceptable). Tracking is tight (`-0.02em`) on
headlines, default elsewhere, and `0.15em` uppercase for eyebrows. Body
copy uses `leading-relaxed` (~1.6). The system is calm — no italic, no
oversized display sizes; the largest text in the product is the homepage
H1 at ~48px.

### Spacing

Tailwind's default 0.25rem step — no custom scale. Most cards use `p-6`
(24px), most stacks use `gap-4`/`gap-6` (16/24px), and the page container
is `max-w-7xl mx-auto px-4`. Vertical rhythm is bigger than horizontal:
section margins are `mb-16 md:mb-24`.

### Radii

```
6px   inputs
8px   buttons, primary CTAs
12px  cards (feature cards on home)
16px  large panels / score cards
20px  modal / tutorial card / pills
9999  toggles, badge dots, capsule chips
```

### Backgrounds & textures

- **No images, no patterns, no full-bleed photography** in the actual
  product. The only "texture" is the **map itself** — CARTO Dark Matter
  basemap covered in colored H3 hexagons that *are* the design.
- For the **landing page in this design-system** we use a supplied video
  loop as a backdrop, with a deep `rgba(13,28,50,0.85)` overlay and a
  blurred-glass content panel above it. Even with imagery present, the UI
  remains 95% solid dark surfaces — imagery is treated as ambient context,
  not content.
- **Gradients** are reserved for two things: the Safe-Index data scale,
  and the red emergency-button gradient (`#ef4444 → #b91c1c`). Decorative
  gradients on panels are forbidden — the dark UI looks crisper without.

### Animation

- **Easing.** Two curves do all the work: `cubic-bezier(0.4, 0, 0.2, 1)`
  for everyday motion, `cubic-bezier(0.34, 1.56, 0.64, 1)` for the
  signature "spring pop" (used on the helmet logo).
- **Durations.** 150–200ms for hover/state changes, 220–300ms for tutorial
  card entrances, 1100ms for the one-shot helmet pop on initial load.
- **Signatures.** *helmet-pop* — the ⛑️ scales from 0.5 → 1.3 → 1 with a
  warm gold drop-shadow that fades to neutral. *glow-pulse* — toggles
  with `box-shadow: 0 0 4px → 10px → 4px`. *pointer-float* — the tutorial
  arrow drifts ±10px vertically on a 2s loop. Tutorial step copy uses a
  `translateX(10px) → 0` slide-in.
- **No fade-only transitions.** Every entrance also moves slightly. No
  bounces beyond the helmet. No autoplaying loops outside of the
  attention-getting pulse-ring on the emergency button (stops after first
  interaction).

### Hover / press states

- **Hover.** Background lightens by ~6–10% opacity (`hover:bg-white/6`,
  `hover:bg-surface-700/60`). Text steps from `surface-400` → `surface-100`.
  Buttons gain a subtle scale (1.05) only on the toggle/emergency-button —
  static buttons swap background color instead.
- **Press.** `active:scale-95`. No press-color change.
- **Focus.** `focus-visible:outline-2 focus-visible:outline-offset-2
  focus-visible:outline-cyan-500` for everything keyboard-reachable.

### Borders

Always a `1px` rgba border with low alpha — `surface-700/40-70` or
`cyan-400/30` for accent. Borders are *darker than the panel* (subtractive)
so the UI reads as glass, not as outlined cards.

### Shadow system

Two layered patterns:

1. **Glass panel** — `inset 0 1px 0 rgba(255,255,255,0.07)` (a top
   "highlight" line) + `0 8px 32px rgba(0,0,0,0.45)` (a soft drop). Used
   for the header, the map legend, the tutorial card.
2. **Colored data shadow** — a tinted glow under any score-colored element.
   `box-shadow: 0 0 8px {scoreColor}60` for the gradient bars, score badges,
   and CTAs. The CTA itself gets `shadow-lg shadow-primary-500/20`.

The **emergency button** uses the brand's most dramatic shadow — a 4px+20px
red drop with a 1px inner-white highlight on a gradient red surface.

### Transparency & blur

Every floating surface (header, legend, popup, mobile nav, tutorial card)
is `backdrop-filter: blur(10–16px)` over a 90% alpha panel. This is a
defining trait — SafeNSound feels like cockpit glass, not solid chrome.
Background imagery (where present) shows through subtly. Static page
sections (cards in the body grid) are *not* blurred; they're flat dark
panels.

### Layout rules

- One column max-`7xl` (1280px) for content; the map page is full-bleed.
- Sticky `64px` header (`h-16`) with backdrop-blur and a hairline cyan
  bottom-glow.
- Right-anchored map overlays: legend (top-right), tutorial arrows
  (positioned over named landmarks), emergency button (bottom-right),
  disclaimer pill (also bottom-right, smaller, below the emergency
  button).
- The dismiss-able disclaimer pill in the corner is a brand-level fixture —
  even after dismissal, every page footer repeats the same disclosure.

### Imagery color vibe

When imagery does appear (e.g. the supplied hero video, the state-flag pin
PNGs), the brand pulls it toward the canvas:
- Heavy dark overlay (`rgba(13,28,50,0.80–0.92)`)
- Slight desaturation via `filter: saturate(0.85)`
- Cool color cast — no warm/golden imagery survives without correction
- No grain, no film texture

### Cards

```
background:    rgba(22, 32, 50, 0.40)      /* surface-800/40 */
border:        1px solid rgba(36,59,85,0.40)
border-radius: 12–16px
padding:       1.5rem (24px)
shadow:        none on body cards · panel-shadow on floating panels
hover:         bg → surface-800/60, border → surface-700/60 (or accent /40)
```

### Iconography

See **ICONOGRAPHY** below.

---

## Iconography

SafeNSound uses **Lucide** (`lucide-react`) as its sole icon set in the
codebase — strokes only, `1.5–2px` width, square join, rounded ends.
Common picks: `Map`, `GraduationCap`, `Route`, `Shield`, `Search`, `Menu`,
`X`. Icon sizes track the type next to them — `w-3 h-3` for inline-with-12px,
`w-4 h-4` next to body, `w-5 h-5` next to titles, `w-8 h-8` in feature
cards. Strokes are tinted the same color as the surrounding text (or the
feature's accent color).

No icon font; no SVG sprite. Icons are imported per-component from the
Lucide React package. In this design system we link **Lucide via CDN**
(`unpkg.com/lucide@latest`) and instantiate inline SVGs by name, which
preserves stroke fidelity and means we don't ship our own SVG copies.

**Emoji as iconography.** Two surfaces use emoji deliberately (see Content
Fundamentals above): the **⛑️** helmet in the brand wordmark, and one
**emoji-per-step** inside the map tutorial card. Outside of those two
narrow uses, emoji are not part of the icon system.

**State flags** (in `assets/flags/`) are raster pins used in the map's
state selector — sourced from public-domain Wikipedia SVGs and rasterized
to ~64px PNGs at build time. They are *imagery*, not icons.

> ⚠️ **Substitution flag.** The SafeNSound codebase declares `font-sans:
> Inter` but ships no Inter `.ttf`/`.woff2` — it relies on Next.js
> auto-loading via Google Fonts. This design system links Inter from
> Google Fonts as well. If you want local font files committed to this
> project, drop them in `fonts/` and update the `@import` in
> `colors_and_type.css`.

---

## Caveats / known gaps

- **Hero video.** The `assets/hero-backdrop.mp4` is the user-supplied loop
  used on the sample landing page. It is not part of the SafeNSound product
  itself — the real product has no hero video.
- **Map UI kit components.** The real product's map (`SafetyMap.tsx`,
  `FilterPanel.tsx`) is a 50k+ LOC Deck.gl/MapLibre integration. The UI
  kit in `ui_kits/web/` recreates the *chrome* (legend, tooltip, popup,
  filter sidebar, search) at high fidelity, but the actual interactive
  hex layer is a placeholder PNG/SVG composition, not real geospatial.
- **State flags.** Only CA / NY / TX / FL are checked in here as
  representative samples. The product ships all 50.

---

See **SKILL.md** for the agent-skill manifest. See **preview/** for the
registered design-system cards. See **ui_kits/web/** for the React UI
kit and **Landing.html** for the sample landing page that uses the
provided backdrop video.
