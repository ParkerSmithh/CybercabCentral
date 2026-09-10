# Features

## Shared across all pages (`js/main.js`, `css/style.css`)

- Sticky, blurred glass header with a sliding gold-to-cyan indicator under the active nav link (`CCC.initNav`)
- "Link Tesla Account" modal — local-only ownership simulation that sets a `localStorage` flag, fires a confetti burst, and permanently swaps the header button into a gold "Verified Fleet Scout" badge on every page
- Scroll-triggered reveal animations (`IntersectionObserver`) with staggered delays via `data-delay`
- Ambient floating particle background + radial gradient mesh
- Reusable "Submit Sighting" slide-over drawer, wired once in `main.js` and available from every page's header
- Toast notifications for confirmations (sighting logged, pad registered, vote cast, account linked)
- Animated number counters (`CCC.animateCounter`) with easing, used for stats, ETAs, and financial outputs
- Custom dark-themed scrollbar, magnetic gold/cyan hover glow on buttons, pulsing "live" indicators

## Command Deck (`index.html`)

- Hero section with live-telemetry pill and Cybercab hero image
- Auto-scrolling marquee ticker of simulated telemetry/sighting events
- Animated stat bar (total spots, active cybercabs, unsupervised rate, leading expansion vote)
- Interactive dark-mode Leaflet map (CartoDB DarkMatter tiles) centered on Austin/Dallas with:
  - Gold pulsing markers for Cybercabs, silver for Model Ys, cyan for inductive pads, purple for depots
  - Glassmorphic popups showing vehicle ID, battery, status, and last-seen time
- Recent Check-Ins feed rendered from seed + user-submitted sightings, with staggered card entrance
- Submit Sighting drawer: logs a new sighting to `localStorage` and prepends it to the feed instantly

## Dispatch Comparison Simulator (`dispatch-comparison.html`)

- Sliders: Active Cybercabs (1–500, default 43), Active Model Y Fleet (1–500, default 100), Service Radius (5–50 sq mi)
- Passenger Demand toggle: Low (0.8×) / Normal (1.0×) / Surge (1.5×)
- Live-animated ETA "stopwatch" displays for both fleets using `ETA = k × √(Area / Fleet) × Demand`
- Dual-colored (gold vs. crimson) Arrival Odds bar computed as `fleetA / (fleetA + fleetB)`
- Radar-sweep graphic per fleet whose spin speed scales with that fleet's ETA

## Fleet Investor ROI Sandbox (`fleet-calculator.html`)

- Inputs: fleet size (1–100), electricity rate, daily miles/cab, passenger fare, Tesla Network cut (10–30%), cost per Cybercab, and an inductive-loss toggle (8% default)
- Animated output cards: Monthly Energy Overhead, Gross Fleet Revenue, Net Operating Income
- Glowing breakeven-timeline meter (24-month reference window)
- "Export Investment Prospectus" button with a ripple effect — downloads a `.txt` summary of the current inputs/outputs (client-side `Blob`, no server)

## Depots & Inductive PadSpotter (`infrastructure.html`)

- Combined Leaflet map showing pads (status-colored), depots, and red "charging dead-zone" overlay circles
- Inductive pad list with status pills: Operational (green), Obstructed (pulsing orange), Under Construction (dim blue)
- Depot & Turnaround Radar: animated capacity bars per depot
- "Register Inductive Pad" modal with a live photo preview (`FileReader`) and instant addition to the list/map

## Proof-of-Sighting Verification Hub (`verify.html`)

- Drag-and-drop dropzone with an animated scanning laser line
- Simulated client-side "Analyzing Telemetry…" progress bar, ending in a confidence score derived from file metadata
- Stamped "VERIFIED SIGHTING" badge (≥85% confidence) with a confetti burst, or a lower-confidence variant otherwise
- Bounty Board: cards with SVG progress rings and watt-badge rewards

## Community (`community.html`)

- "Where Next?" City Showdown: animated vote bars for Austin/Miami/Las Vegas/Dallas with an upvote button per city, persisted to `localStorage`
- Cybercab Bingo: interactive 3×3 grid, tiles light up gold neon on click and persist across reloads
- Spotter Leaderboard sorted by score, with gold/silver/bronze glow badges for the top 3
