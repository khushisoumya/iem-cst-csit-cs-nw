# CSIT Department Website — Professional Redesign

**Date:** 2026-07-14
**Status:** Approved by user, ready for implementation planning

## Context

The site is a React 19 + Tailwind v4 + Vite app for the Department of CSE / Cyber
Security at IEM Kolkata (New Town), with five routes (Home, About, Faculty,
Events, Contact) sharing a Navbar/Footer. The current implementation is
functional but reads as a generic Tailwind template: centered headings with an
underline bar, repeated card grids, and one hover effect (`.premium-card` —
navy overlay + white text) applied identically to every card type across every
page regardless of content.

The working tree already had in-progress uncommitted edits (Navbar, Footer,
HODCard, ContactSection, Home, deleted ContactCard.jsx) — this redesign builds
on top of that state rather than reverting it.

Content is genuinely thin in places: Faculty entries are name + designation
only (no photos/bios), Events descriptions are 1–2 sentences. The design must
look intentional at this content density, not stretch generic cards to fill
space.

## Asset Audit Findings

- Four new campus photos (`IEM Kolkata-*-studyriser-*.jpg`) carry a visible
  **"STUDYRISERR" third-party watermark** (scraped from studyriser.com, not
  official photography). Two of the five (`-96` Sports Complex, `-63` Academic)
  have watermarks in **two corners** (top-right + bottom-right); the other
  three (`-39`, `-44`, `-75`) have a single top-right watermark.
- **Decision:** crop watermarks out before use. Single-corner images can be
  cropped by shifting the visible frame away from that corner. Two-corner
  images need a tighter center-band crop (loses more of the frame) — if that
  crop guts the composition, fall back to excluding that specific photo rather
  than shipping a visible third-party watermark.
- The seven `iem_league_logo*.png` files are a generic, unrelated icon set
  (shield + document icon, "IEM LEAGUE" wordmark) — **excluded** from this
  redesign, not part of the CSIT department's identity.
- `iem.png` (existing, already wired into Navbar) is the correct department/
  institute logo and stays as-is. `uem.png` is a washed-out/near-invisible
  watermark image — not usable as a logo asset.

## Design Tokens

**Color** (5 named values — navy/blue are the fixed institutional brand;
gold/accent color explicitly rejected by user, kept strictly to navy + blue +
neutrals):

| Token | Hex | Use |
|---|---|---|
| `ink` (Navy) | `#081F5C` | Brand primary — dark sections, headline text, nav |
| `signal` (Blue) | `#2563EB` | Accent — links, CTAs, rules, eyebrows, hover states |
| `paper` | `#F8F7F2` | Warm-neutral alternate section background (replaces cold `#f8fafc`) |
| `slate` | `#475569` | Body copy (softer than pure black) |
| `hairline` | `#E2E5EA` | Borders / dividers |

**Typography** (3 roles, deliberately paired — not the Tailwind default sans
for everything):

- **Display — Fraunces**: large headlines only (hero, section H1/H2). Used with
  restraint — never for body copy or UI chrome.
- **Body/UI — Inter**: paragraphs, nav, buttons, form-like content. Carries
  the page everywhere the serif doesn't.
- **Utility — IBM Plex Mono** (small-caps/uppercase, wide tracking): eyebrows,
  event date badges, faculty index numbers, stat-strip numerals. A "technical
  precision" accent appropriate to an engineering/cyber-security department,
  used sparingly (never for body paragraphs).

Loaded via Google Fonts `@import` in `index.css`.

**Layout signature:** thin blue rule-lines with small corner brackets (like
crop marks on a technical/blueprint drawing) framing the hero image and
featured cards — a nod to "Institute of *Engineering*" rather than a generic
gradient-blob or numbered-badge motif. Used on a handful of key elements, not
scattered across every card (per restraint principle — one memorable device,
quiet everywhere else).

The existing `.premium-card` navy-flood hover (every card, every page) is
retired as a blanket default. Replace with a quieter hover per component type
(see below) — reserve a stronger navy-flood treatment for at most one or two
genuinely featured elements (e.g. HOD card), not the whole site.

## Page-by-Page Approach

### Navbar
Keep white sticky bar. Replace bold/color-only active-state with a thin blue
underline indicator beneath the active link. Otherwise restyle typography
(Inter, proper tracking) and clean up spacing/structure (existing file has
some dead code/comments to remove).

### Footer
Keep navy background. Refine grid spacing and typography (Inter for body,
Plex Mono for the "Quick Links" eyebrow label), tidy up the social icon row.

### Home
- **Hero**: full-bleed cropped campus photo (watermark-free) with a navy
  gradient scrim, Fraunces display headline, thin blueprint corner-bracket
  frame on the image. Replaces the current `PageHero` navy-block-with-
  right-image layout with something more editorial.
- **Stat strip**: horizontal bar bridging hero → HOD section, showing only
  verified facts — **"Est. 2021"** and **faculty count** (currently 6, driven
  from `data/faculty.js` length so it stays accurate if the roster changes) —
  in Plex Mono numerals. No fabricated stats (no student counts, rankings,
  placement %, etc. — none of that is in the codebase or provided).
- **HOD section**: redesigned away from the centered `premium-card` block —
  portrait on one side with a thin blue rule, Fraunces italic pull-quote
  intro line, Inter body copy, existing expand/collapse "Read more"
  interaction kept.

### About
Two-column editorial restructure instead of 4 identical stacked cards:
- "Established in 2021" becomes a lead paragraph directly under the page
  heading (not its own boxed card).
- Mission & Vision presented side-by-side as a comparison (two columns,
  shared visual treatment) rather than two separate full-width stacked cards.
- Student Outcomes becomes a distinctive checklist using Plex Mono numerals
  (01, 02, 03…) instead of plain bullet dots — legitimate here since these
  are enumerated outcomes, not decoration for decoration's sake.

### Faculty
Replace the card-grid-with-generic-user-icon (which looks like a placeholder
because it *is* one — no real photos exist) with a clean structured
directory/list: Plex Mono index number, name in Fraunces, designation in
small-caps Inter, subtle blue accent bar on hover. This suits the actual data
shape (name + title, nothing else) instead of pretending to be a richer
card than the content supports.

### Events
Keep the timeline concept — order is real chronological information here, so
date/number markers are legitimate (not decorative). Restyle: vertical rule
line down the timeline, Plex Mono date badges (replacing the current filled
blue box), underline-style year-filter tabs instead of filled pill buttons.

### Contact
Replace the 3 identical centered icon-cards (Address/Email/Phone) with a
single wide panel listing them as icon+label rows, given equal visual weight
to the embedded map alongside it (currently the map is a bit of an
afterthought below three cards).

## Technical Notes

- Tailwind v4 config extended with the 5 color tokens and 3 font-family
  tokens (`font-display`, `font-sans`, `font-mono`) so components reference
  semantic names, not raw hex/font strings.
- Watermark cropping is a pre-processing step on the affected JPEGs (done
  once, before wiring them into components) — not a runtime CSS trick, since
  two of the five images need pixel crops on both corners.
- No test framework currently exists in the repo (no unit/e2e tests). Success
  criteria for this work is visual: `npm run dev` reviewed page-by-page at
  mobile/tablet/desktop widths, plus `npm run build` passing.
- No backend/form submission exists on Contact — it's static info + an
  embedded Google Maps iframe, so no error-handling/data-flow design is
  needed there beyond what's already working.

## Out of Scope

- `iem_league_logo*` assets, job-portal screenshots, exam-schedule PDFs —
  not used anywhere in this pass.
- No new pages/routes; no content rewrites beyond what's noted above (e.g.
  About/HOD copy stays as currently written unless it's part of a layout
  change like the Established paragraph).
- No backend, form handling, or CMS work.
