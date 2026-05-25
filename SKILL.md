---
name: safensound-design
description: Use this skill to generate well-branded interfaces and assets for SafeNSound, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the **README.md** file within this skill, and explore the other available files.

- `README.md` — full brand, content, and visual foundations
- `colors_and_type.css` — drop-in CSS tokens (colors, type, radii, shadows, motion)
- `assets/` — logos, flags, the hero backdrop video
- `preview/` — design-system cards (each one a small HTML page)
- `ui_kits/web/` — React UI kit for the web app (Header, FeatureCard, ScoreBadge, GradientBar, Toggle, MapLegend, EmergencyButton, TutorialCard, DisclaimerPill, SchoolSafetyView, MapView). Load order is documented in `ui_kits/web/README.md`.
- `Landing.html` — sample landing page using the supplied video as backdrop

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out and create static HTML files for the user to view. If working on
production code, you can copy assets and read the rules here to become an
expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they
want to build or design, ask some questions, and act as an expert designer
who outputs HTML artifacts *or* production code, depending on the need.

## Quick reference

- **Logo:** ⛑️ emoji + wordmark "Safe**N**Sound" (capital N in `#67e8f9`)
- **Primary accent:** `#22d3ee` (cyan-400)
- **Backgrounds:** `#0d1e35` body · `#0a1120` footer · `#080f1e` deepest
- **Safe Index gradient:** `#82123b → #be1c1c → #e82c2c → #fbbf24 → #22c55e → #34d399`
- **Type:** Inter (400 / 500 / 600 / 700 / 800), JetBrains Mono for numerals only
- **Icons:** Lucide (`lucide-react` in code; CDN `unpkg.com/lucide@latest` for prototypes)
- **Voice:** Authoritative, transparent, never alarmist. "Know Before You Go." Disclose uncertainty.
- **Never invent metrics** — every number should map to a real public dataset (FBI NIBRS, NCES, FEMA, EPA TRI, public registries).
