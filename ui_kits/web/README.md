# SafeNSound Web UI Kit

Recreation of the SafeNSound web app's hi-fi component vocabulary, in
inline-JSX + React 18 so it's editable in this design surface.

Each `.jsx` file exposes one component to `window.*` (so multiple Babel
script tags can share a single React tree). The `index.html` wires them
into a faithful recreation of the **homepage** (`/`) — hero, three feature
cards, the "Transparent & Data-Driven" trust section with stat strip,
header, footer, the corner disclaimer pill, and the floating emergency
button. A second screen shows the **School Safety** result view
(score badge + factor breakdown + nearby counts) and a third shows the
**Map** chrome (legend + tutorial card + emergency button).

## Files

- `index.html` — entry point with three switchable screens
- `Header.jsx` — sticky glass header with helmet logo + nav pills
- `Footer.jsx` — three-col footer + estimate disclaimer
- `Hero.jsx` — homepage hero with CTAs
- `FeatureCard.jsx` — accent-bordered feature card
- `StatStrip.jsx` — four-up stats grid
- `ScoreBadge.jsx` — colored score circle
- `GradientBar.jsx` — per-factor progress bar
- `Toggle.jsx` — switch with cyan glow
- `MapLegend.jsx` — glass legend panel
- `TutorialCard.jsx` — overlay tutorial step card
- `EmergencyButton.jsx` — red glass-encased report button
- `DisclaimerPill.jsx` — corner "estimates only" pill
- `Icons.jsx` — Lucide-style inline SVG icons (Map, GraduationCap, Route, Shield, Search, Menu, X, ArrowRight)

## What's not included

The real SafetyMap / RouteMap / FilterPanel are >100k LOC of Deck.gl +
MapLibre. This kit recreates their **chrome** (legend, tutorial, popup,
filter sidebar buttons, search) at hi-fi but the hex layer underneath is
a static SVG composition, not real geospatial.
