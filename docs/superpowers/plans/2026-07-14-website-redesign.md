# CSIT Department Website Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the IEM Kolkata CSE/Cyber Security department site (React 19 + Tailwind v4 + Vite) from a generic Tailwind-template look to a professional "editorial academic + structured directory" hybrid, per `docs/superpowers/specs/2026-07-14-website-redesign-design.md`.

**Architecture:** No new routes, no new dependencies, no backend. Add a small design-token layer to `src/index.css` (Tailwind v4 `@theme`) and two Google Fonts, then rework each page's content components in place to use the new tokens/typography/layout described in the spec. One watermarked stock photo is cropped and wired in as the Home hero background.

**Tech Stack:** React 19, React Router 7, Tailwind CSS v4 (`@tailwindcss/vite`, CSS-first `@theme` config — no `tailwind.config.js`), lucide-react + react-icons for icons, Vite 8.

## Global Constraints

- Brand colors are fixed to Navy `#081F5C` and Blue `#2563EB` only — **no** additional accent color (a gold/brass accent was proposed and explicitly rejected by the user).
- Typography: **Fraunces** for display headlines only, **Inter** for body/UI (site default), **IBM Plex Mono** for eyebrows/date badges/index numbers only — never for paragraph body text. Loaded via Google Fonts `<link>` tags, no new npm packages.
- No fabricated statistics anywhere. The Home stat strip shows only "Est. 2021" and a live count derived from `faculty.length` in `src/data/faculty.js`.
- `iem_league_logo*.png`, the job-portal screenshots, and the exam-schedule PDFs in `src/assets/` are out of scope — do not wire them into any component.
- No test framework exists in this repo. Verification per task is `npm run build` (must succeed) plus a visual check via `npm run dev` in the browser — described per task.
- Windows/PowerShell environment. Use PowerShell for the one-off image-crop step (`System.Drawing`); Bash or PowerShell both fine for git/npm commands.
- Work builds on top of the current uncommitted working-tree state (Navbar, Footer, HODCard, ContactSection, Home already mid-edit, `ContactCard.jsx` already deleted) — every task below already reflects that current file content, not the last commit.

---

### Task 1: Design tokens and fonts

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`

**Interfaces:**
- Produces: Tailwind utilities `bg-ink` / `text-ink` / `border-ink` (`#081F5C`), `bg-signal` / `text-signal` / `border-signal` (`#2563EB`), `bg-paper` (`#F8F7F2`), `text-body` (`#475569`), `border-line` (`#E2E5EA`); `font-display` (Fraunces), `font-sans` (Inter, also the page default), `font-mono` (IBM Plex Mono). All later tasks consume these class names — do not rename them.

- [ ] **Step 1: Add Google Fonts links to `index.html`**

Insert this block right before `</head>` (after the existing `<!-- Web App Manifest -->` `<link>`):

```html
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=IBM+Plex+Mono:wght@500;600&family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
```

- [ ] **Step 2: Add the `@theme` token block to `src/index.css`**

Replace the first line of `src/index.css` (`@import "tailwindcss";`) with:

```css
@import "tailwindcss";

@theme {
  --color-ink: #081F5C;
  --color-signal: #2563EB;
  --color-paper: #F8F7F2;
  --color-body: #475569;
  --color-line: #E2E5EA;

  --font-display: "Fraunces", ui-serif, Georgia, serif;
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, "SFMono-Regular", monospace;
}

body {
  font-family: var(--font-sans);
  color: var(--color-body);
}
```

(Everything below this in `src/index.css` — the `@keyframes`, `.hero-*`, `.premium-card` rules — stays as-is for now; later tasks add to it.)

- [ ] **Step 3: Verify the build**

Run: `npm run build`
Expected: exits 0, no errors. Then run `Select-String -Path dist/assets/*.css -Pattern "Fraunces"` (PowerShell) — expected: at least one match, confirming the font tokens compiled into the CSS bundle.

- [ ] **Step 4: Commit**

```bash
git add index.html src/index.css
git commit -m "Add design tokens and font loading for redesign"
```

---

### Task 2: Crop the watermarked hero photo

**Files:**
- Create: `src/assets/images/campus-facade.jpg`

**Interfaces:**
- Produces: `src/assets/images/campus-facade.jpg`, a 1360×925 JPEG with no visible watermark, imported by Task 6's `Hero.jsx`.

**Context:** `src/assets/IEM Kolkata-Academic-studyriser-44.jpg` is 1360×1020 with a single "STUDYRISERR" watermark in the top-right corner only (confirmed by visual inspection). Cropping the top 95px removes it.

- [ ] **Step 1: Crop the image**

Run in PowerShell from the repo root:

```powershell
Add-Type -AssemblyName System.Drawing
$src = Resolve-Path "src/assets/IEM Kolkata-Academic-studyriser-44.jpg"
$img = [System.Drawing.Image]::FromFile($src)
$crop = New-Object System.Drawing.Rectangle(0, 95, $img.Width, $img.Height - 95)
$bmp = New-Object System.Drawing.Bitmap($crop.Width, $crop.Height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $crop.Width, $crop.Height)), $crop, [System.Drawing.GraphicsUnit]::Pixel)
$dst = Join-Path (Get-Location) "src/assets/images/campus-facade.jpg"
$bmp.Save($dst, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$g.Dispose(); $bmp.Dispose(); $img.Dispose()
Write-Output "Saved $($crop.Width)x$($crop.Height) -> $dst"
```

Expected output: `Saved 1360x925 -> ...src/assets/images/campus-facade.jpg`

- [ ] **Step 2: Visually verify the watermark is gone**

Read `src/assets/images/campus-facade.jpg` (e.g. with the Read tool, or open it in an image viewer). Check all four corners.

Expected: no "STUDYRISERR" text or shield-icon visible anywhere in the frame.

If a fragment of the watermark is still visible at the top: increase the `95` in Step 1 to `95 + 20` and re-run until clean. Do not proceed until confirmed clean — this is a copyright/professionalism requirement from the design spec, not a style preference.

- [ ] **Step 3: Commit**

```bash
git add src/assets/images/campus-facade.jpg
git commit -m "Add cropped, watermark-free campus photo for Home hero"
```

---

### Task 3: Shared primitives — CornerFrame, PageHero restyle, edge-card hover

**Files:**
- Create: `src/components/common/CornerFrame.jsx`
- Modify: `src/components/common/PageHero.jsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: tokens from Task 1 (`font-display`, `font-mono`, `bg-ink`, `text-signal`, etc.)
- Produces: `CornerFrame` component (default export, optional `className` prop, no children) — consumed by Task 6's `Hero.jsx`. `.edge-card` CSS class — consumed by Task 10's `ContactSection.jsx`. `PageHero` keeps its existing prop signature (`eyebrow`, `title`, `description`, `image`, `titleClassName`) — consumed unchanged by `About.jsx`, `Faculty.jsx`, `Events.jsx`, `Contact.jsx`.

- [ ] **Step 1: Create `src/components/common/CornerFrame.jsx`**

```jsx
function CornerFrame({ className = "" }) {
  const tick = "absolute w-5 h-5 border-signal";

  return (
    <div
      className={`pointer-events-none absolute inset-6 md:inset-8 ${className}`}
    >
      <span className={`${tick} top-0 left-0 border-t-2 border-l-2`} />
      <span className={`${tick} top-0 right-0 border-t-2 border-r-2`} />
      <span className={`${tick} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${tick} bottom-0 right-0 border-b-2 border-r-2`} />
    </div>
  );
}

export default CornerFrame;
```

- [ ] **Step 2: Rewrite `src/components/common/PageHero.jsx`**

```jsx
import buildingImg from "../../assets/images/building2.png";
import CornerFrame from "./CornerFrame";

function PageHero({
  eyebrow,
  title,
  description,
  image = buildingImg,
  titleClassName = "",
}) {
  return (
    <section className="relative h-[320px] md:h-[380px] lg:h-[430px] overflow-hidden bg-ink">
      <img
        src={image}
        alt={typeof title === "string" ? title : "Hero"}
        className="hero-image absolute inset-0 w-full h-full object-cover object-right"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,#081F5C 0%,#081F5C 34%,rgba(8,31,92,.86) 46%,rgba(8,31,92,.56) 60%,rgba(8,31,92,.22) 74%,transparent 88%)",
        }}
      />

      <CornerFrame />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16">
          {eyebrow && (
            <p className="hero-eyebrow font-mono uppercase tracking-[4px] md:tracking-[6px] text-[10px] md:text-[11px] text-blue-200 mb-3 md:mb-5">
              {eyebrow}
            </p>
          )}

          <h1
            className={`hero-title font-display font-semibold text-white leading-[1.08] tracking-[-0.01em] max-w-full md:max-w-[680px] break-words text-[32px] sm:text-[38px] md:text-[44px] ${
              titleClassName || "lg:text-[52px]"
            }`}
          >
            {title}
          </h1>

          {description && (
            <p className="hero-description mt-4 md:mt-5 max-w-full md:max-w-[520px] text-[15px] md:text-[17px] leading-7 text-gray-200 font-sans">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
```

(This also fixes a pre-existing bug: the old code built the responsive title class as `` lg:${titleClassName || "text-[50px]"} ``, which — because `titleClassName` values already included their own `lg:` prefix, e.g. `"lg:text-[40px] xl:text-[44px]"` — produced a malformed, Tailwind-unrecognizable class string. It's now a plain conditional.)

- [ ] **Step 3: Add `.edge-card` to `src/index.css`**

Append to the end of `src/index.css`:

```css
/* ================= EDGE CARD (restrained hover) ================= */

.edge-card {
  position: relative;
  overflow: hidden;
  background: #fff;
  border: 1px solid var(--color-line);
  border-radius: 12px;
  transition:
    transform .35s ease,
    box-shadow .35s ease,
    border-color .35s ease;
}

.edge-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 100%;
  background: var(--color-signal);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform .35s ease;
}

.edge-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-signal);
  box-shadow: 0 20px 40px rgba(8,31,92,.12);
}

.edge-card:hover::before {
  transform: scaleY(1);
}
```

- [ ] **Step 4: Visual check**

Run `npm run dev`. Open `/about` (or any of About/Faculty/Events/Contact — they all render `PageHero`) in the browser.

Expected: serif ("Fraunces") page title, small mono-caps eyebrow (if present) or plain title, thin blue corner brackets inset from the edges of the hero banner, no console errors, no layout overflow.

- [ ] **Step 5: Commit**

```bash
git add src/components/common/CornerFrame.jsx src/components/common/PageHero.jsx src/index.css
git commit -m "Restyle PageHero with new tokens, corner-frame signature, and edge-card hover"
```

---

### Task 4: Navbar redesign

**Files:**
- Modify: `src/components/layout/Navbar.jsx`

**Interfaces:**
- Consumes: tokens from Task 1.
- Produces: no exports consumed elsewhere (top-level route component).

- [ ] **Step 1: Rewrite `src/components/layout/Navbar.jsx`**

```jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/iem.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About the Department" },
  { to: "/faculty", label: "Faculty" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between">
        <NavLink to="/" onClick={closeMenu}>
          <img
            src={logo}
            alt="IEM Logo"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </NavLink>

        <div className="hidden lg:flex items-center gap-8 text-sm font-sans font-semibold">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative pb-1 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-signal after:transition-all after:duration-300 ${
                  isActive
                    ? "text-ink after:w-full"
                    : "text-gray-600 hover:text-ink after:w-0"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-ink"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-ink border-t border-white/10">
          <div className="flex flex-col py-4 font-sans">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-6 py-3 transition-colors duration-300 border-l-2 ${
                    isActive
                      ? "text-white bg-white/10 border-signal"
                      : "text-gray-200 border-transparent hover:bg-white/10"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
```

Note: added `end={link.to === "/"}` — the previous code had no `end` prop on any link, so React Router's prefix matching meant the "Home" link rendered as active on every single page (a real pre-existing bug). Fixed here since we're already touching this exact matching logic.

- [ ] **Step 2: Visual check**

Run `npm run dev`. Visit `/`, then `/about`.

Expected: On `/`, only "Home" has a blue underline. On `/about`, only "About the Department" has a blue underline (not Home). Resize to mobile width (<1024px), click the menu icon — menu opens with a left blue border on the active link, closes on link click.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Navbar.jsx
git commit -m "Redesign Navbar: underline active-state, fix always-active Home bug"
```

---

### Task 5: Footer redesign

**Files:**
- Modify: `src/components/layout/Footer.jsx`

**Interfaces:**
- Consumes: tokens from Task 1.
- Produces: none consumed elsewhere.

- [ ] **Step 1: Rewrite `src/components/layout/Footer.jsx`**

```jsx
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/faculty", label: "Faculty" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaLinkedinIn, label: "LinkedIn" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaTwitter, label: "Twitter" },
  { Icon: FaYoutube, label: "YouTube" },
];

function Footer() {
  return (
    <footer className="bg-ink text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center md:text-left">
          <h2 className="font-display text-2xl font-semibold mb-4">
            Department of CSE & CSIT
          </h2>

          <p className="text-blue-100 leading-7 text-sm font-sans">
            Institute of Engineering & Management
            <br />
            New Town, Kolkata - 700160
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-mono text-xs uppercase tracking-[3px] text-blue-300 mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-blue-100 font-sans">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-mono text-xs uppercase tracking-[3px] text-blue-300 mb-4">
            Follow Us
          </h3>

          <div className="flex justify-center md:justify-start gap-4">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="p-2 rounded-full bg-white/10 hover:bg-signal transition duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 text-center text-sm text-blue-100 font-sans">
          © 2026 Department of Cyber Security, Institute of Engineering &
          Management. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
```

- [ ] **Step 2: Visual check**

Run `npm run dev`. Scroll to the footer on any page. Tab through the social icons with keyboard.

Expected: "Department of CSE & CSIT" renders in serif; "Quick Links"/"Follow Us" render as small blue mono-caps labels; each social icon shows a visible focus ring when tabbed to (not suppressed).

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Footer.jsx
git commit -m "Redesign Footer typography and add accessible labels to social links"
```

---

### Task 6: Home — Hero, StatStrip, HODCard

**Files:**
- Modify: `src/components/home/Hero.jsx` (currently an empty, unused file)
- Create: `src/components/home/StatStrip.jsx`
- Modify: `src/components/home/HODCard.jsx`
- Modify: `src/pages/Home.jsx`

**Interfaces:**
- Consumes: `CornerFrame` (Task 3), `campus-facade.jpg` (Task 2), tokens (Task 1), `faculty` array from `src/data/faculty.js` (existing, shape `{ name, designation }[]`).
- Produces: `Hero`, `StatStrip` default exports, consumed only by `Home.jsx` in this task.

- [ ] **Step 1: Write `src/components/home/Hero.jsx`**

```jsx
import CornerFrame from "../common/CornerFrame";
import campusImg from "../../assets/images/campus-facade.jpg";

function Hero() {
  return (
    <section className="relative h-[440px] md:h-[520px] lg:h-[600px] overflow-hidden bg-ink">
      <img
        src={campusImg}
        alt="IEM Kolkata campus facade"
        className="hero-image absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,#081F5C 0%,#081F5C 30%,rgba(8,31,92,.82) 48%,rgba(8,31,92,.42) 68%,rgba(8,31,92,.12) 85%,transparent 100%)",
        }}
      />

      <CornerFrame />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16">
          <p className="hero-eyebrow font-mono uppercase tracking-[5px] text-[11px] text-blue-200 mb-4">
            Department of
          </p>

          <h1 className="hero-title font-display font-semibold text-white leading-[1.05] tracking-[-0.01em] text-[40px] sm:text-[48px] md:text-[58px] lg:text-[64px] max-w-[720px]">
            Cyber Security
          </h1>

          <p className="hero-description mt-6 max-w-[520px] text-[16px] md:text-[18px] leading-8 text-gray-200 font-sans">
            Empowering innovation through quality education, research and
            technology.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
```

- [ ] **Step 2: Write `src/components/home/StatStrip.jsx`**

```jsx
import faculty from "../../data/faculty";

const stats = [
  { label: "Established", value: "2021" },
  { label: "Faculty Members", value: String(faculty.length) },
];

function StatStrip() {
  return (
    <section className="bg-white border-b border-line">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center sm:justify-start gap-x-14 gap-y-6 py-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-baseline gap-3">
            <span className="font-mono text-3xl font-semibold text-ink">
              {stat.value}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[2px] text-body">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatStrip;
```

- [ ] **Step 3: Rewrite `src/components/home/HODCard.jsx`**

```jsx
import { useState } from "react";
import hodImage from "../../assets/images/pdep4.png";
import { ArrowRight, ChevronUp } from "lucide-react";

function HODCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-paper py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="group premium-card p-8 md:p-10 shadow-lg flex flex-col md:flex-row gap-10">
          <div className="flex-shrink-0 flex flex-col items-center md:items-start">
            <div className="relative overflow-hidden rounded-lg w-40 h-52 border-l-2 border-signal">
              <img
                src={hodImage}
                alt="Prof. Dr. Maumita Chakraborty, Head of the Department"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="font-mono text-[11px] uppercase tracking-[3px] text-signal transition-colors duration-500 group-hover:text-blue-200">
              Head of the Department
            </p>

            <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-ink transition-colors duration-500">
              Prof. Dr. Maumita Chakraborty
            </h3>

            <p className="mt-1 text-signal font-medium font-sans transition-colors duration-500 group-hover:text-blue-200">
              Professor & HOD, Cyber Security
            </p>

            <p className="mt-6 font-display italic text-lg leading-8 text-ink transition-colors duration-500 group-hover:text-white">
              &ldquo;Welcome to the Department of Cyber Security — dedicated
              to nurturing future innovators through quality education,
              research and industry collaboration.&rdquo;
            </p>

            <p className="mt-5 text-body leading-7 font-sans transition-colors duration-500">
              The department has experienced and well-qualified faculty
              members, well-equipped laboratories, research facilities and
              all other facilities to nurture the development of young
              engineers.
            </p>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                expanded
                  ? "max-h-[600px] opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-body leading-7 font-sans transition-colors duration-500">
                To inculcate excellent problem solving skills, the department
                always focuses on outcome based education through outcome
                based teaching and learning process. A large number of
                students pursue their projects in various departmental
                laboratories which provides them strong hands-on learning
                experience.
              </p>

              <p className="mt-4 text-body leading-7 font-sans transition-colors duration-500">
                The department is continuously growing since its
                establishment with the motto of preparing the students to
                excel in the industry and to be successful in higher
                studies. Innovation and research activities including
                conferences, seminars and technical talks prepare the
                students to excel in their career.
              </p>

              <p className="mt-4 text-body leading-7 font-sans transition-colors duration-500">
                In addition, continuous support and untiring efforts of the
                Training and Placement Cell help students build successful
                careers. Apart from academics, the department constantly
                motivates students to participate in various co-curricular
                activities including hands-on workshops, technical talks,
                seminars, technical competitions and start-up activities.
              </p>
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-7 inline-flex items-center gap-2 font-sans font-semibold text-signal transition-all duration-300 group-hover:text-white hover:gap-3"
            >
              {expanded ? "Show Less" : "Read More"}
              {expanded ? (
                <ChevronUp size={18} />
              ) : (
                <ArrowRight size={18} />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HODCard;
```

- [ ] **Step 4: Rewrite `src/pages/Home.jsx`**

```jsx
import Hero from "../components/home/Hero";
import StatStrip from "../components/home/StatStrip";
import HODCard from "../components/home/HODCard";

function Home() {
  return (
    <>
      <Hero />
      <StatStrip />
      <HODCard />
    </>
  );
}

export default Home;
```

- [ ] **Step 5: Visual check**

Run `npm run dev`. Visit `/`.

Expected: full-bleed campus photo hero with no visible watermark, corner brackets, serif "Cyber Security" headline; directly below, a white bar reading "2021 · Established" and "6 · Faculty Members" (or current `faculty.length`); below that, the HOD card with portrait on the left, italic serif pull-quote, and working "Read More"/"Show Less" toggle.

- [ ] **Step 6: Commit**

```bash
git add src/components/home/Hero.jsx src/components/home/StatStrip.jsx src/components/home/HODCard.jsx src/pages/Home.jsx
git commit -m "Redesign Home: bespoke photo hero, stat strip, editorial HOD card"
```

---

### Task 7: About page redesign

**Files:**
- Modify: `src/components/about/AboutContent.jsx`

**Interfaces:**
- Consumes: tokens from Task 1.
- Produces: none consumed elsewhere.

- [ ] **Step 1: Rewrite `src/components/about/AboutContent.jsx`**

```jsx
const mission = [
  "Deliver quality technical education with strong fundamentals.",
  "Encourage innovation, research and entrepreneurship.",
  "Promote industry collaboration and practical learning.",
  "Develop ethical, socially responsible engineers.",
];

const outcomes = [
  "Strong programming and analytical skills.",
  "Ability to design intelligent computing solutions.",
  "Excellent communication and teamwork.",
  "Readiness for higher education and research.",
  "Professional ethics and lifelong learning attitude.",
];

function AboutContent() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono uppercase tracking-[3px] text-[11px] text-signal mb-3">
          Est. 2021
        </p>

        <h2 className="font-display text-4xl font-semibold text-ink mb-6">
          About the Department
        </h2>

        <p className="text-body leading-8 font-sans max-w-3xl">
          The Department of Computer Science & Engineering was established
          with the vision of creating skilled professionals capable of
          addressing real-world technological challenges. The department
          emphasizes academic excellence, innovation, industry exposure and
          research-oriented learning.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-14 pt-14 border-t border-line">
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink mb-4">
              Mission
            </h3>
            <ul className="space-y-4 font-sans">
              {mission.map((item) => (
                <li key={item} className="flex gap-3 text-body leading-7">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:border-l md:border-line md:pl-10">
            <h3 className="font-display text-2xl font-semibold text-ink mb-4">
              Vision
            </h3>
            <p className="text-body leading-8 font-sans">
              To become a nationally recognized department producing
              competent professionals, innovators and researchers who
              contribute towards technological advancement and societal
              development.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-14 border-t border-line">
          <h3 className="font-display text-2xl font-semibold text-ink mb-6">
            Student Outcomes
          </h3>

          <ol className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
            {outcomes.map((item, index) => (
              <li key={item} className="flex gap-4">
                <span className="font-mono text-signal text-sm mt-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-body leading-7 font-sans">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default AboutContent;
```

- [ ] **Step 2: Visual check**

Run `npm run dev`. Visit `/about`.

Expected: lead paragraph directly under the "About the Department" heading (no boxed card around it); Mission (bulleted) and Vision side-by-side with a divider on desktop, stacked on mobile; Student Outcomes as a two-column list with `01`–`05` mono numerals, not bullet dots.

- [ ] **Step 3: Commit**

```bash
git add src/components/about/AboutContent.jsx
git commit -m "Redesign About page as two-column editorial layout"
```

---

### Task 8: Faculty directory redesign

**Files:**
- Modify: `src/components/faculty/FacultyGrid.jsx`
- Delete: `src/components/faculty/FacultyCard.jsx`

**Interfaces:**
- Consumes: `faculty` array from `src/data/faculty.js` (existing, unchanged, shape `{ name, designation }[]`).
- Produces: none consumed elsewhere. `FacultyCard` is deleted since `FacultyGrid` is its only consumer and this task removes that usage.

- [ ] **Step 1: Rewrite `src/components/faculty/FacultyGrid.jsx`**

```jsx
import faculty from "../../data/faculty";

function FacultyGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono uppercase tracking-[3px] text-[11px] text-signal mb-3">
            {faculty.length} Members
          </p>
          <h2 className="font-display text-4xl font-semibold text-ink">
            Faculty
          </h2>
          <p className="mt-3 text-body font-sans">
            Meet the dedicated educators driving excellence in our
            department.
          </p>
        </div>

        <ol className="divide-y divide-line border-t border-b border-line">
          {faculty.map((item, index) => (
            <li
              key={`${item.name}-${index}`}
              className="group flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-5 px-2 hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-signal"
            >
              <span className="font-mono text-sm text-body w-8 flex-shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg text-ink flex-1">
                {item.name}
              </span>
              <span className="font-sans text-xs uppercase tracking-[1.5px] text-body">
                {item.designation}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default FacultyGrid;
```

- [ ] **Step 2: Delete the now-unused card component**

```bash
git rm src/components/faculty/FacultyCard.jsx
```

- [ ] **Step 3: Visual check**

Run `npm run dev`. Visit `/faculty`.

Expected: a numbered directory list (not a card grid, no generic circular user-icon avatars); hovering a row indents it slightly and shows a left blue border; on mobile, name and designation stack under the index number.

- [ ] **Step 4: Commit**

```bash
git add src/components/faculty/FacultyGrid.jsx
git commit -m "Redesign Faculty as a structured directory list, remove fake-avatar cards"
```

---

### Task 9: Events timeline redesign

**Files:**
- Modify: `src/components/events/EventCard.jsx`
- Modify: `src/components/events/EventTimeline.jsx`

**Interfaces:**
- Consumes: tokens from Task 1.
- Produces: `EventCard` default export with props `{ month, day, title, subtitle, description }`, consumed by `EventTimeline.jsx` in this same task (signature unchanged from current code).

- [ ] **Step 1: Rewrite `src/components/events/EventCard.jsx`**

```jsx
import { ArrowRight } from "lucide-react";

export default function EventCard({
  month,
  day,
  title,
  subtitle,
  description,
}) {
  return (
    <div className="group relative pl-8 pb-10 border-l border-line last:border-transparent last:pb-0">
      <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-white border-2 border-signal transition-colors duration-300 group-hover:bg-signal" />

      <span className="font-mono text-xs uppercase tracking-[2px] text-signal">
        {month} {day}
      </span>

      <h3 className="mt-2 font-display text-xl font-semibold text-ink">
        {title}
      </h3>

      <p className="text-sm text-body font-sans mt-1">{subtitle}</p>

      {description && (
        <p className="mt-3 text-body leading-7 font-sans">{description}</p>
      )}

      <button className="mt-4 text-signal font-sans font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:gap-3">
        Learn More
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Rewrite `src/components/events/EventTimeline.jsx`**

```jsx
import { useState } from "react";
import EventCard from "./EventCard";

const eventData = {
  2023: [
    {
      month: "FEB",
      day: "18",
      title: "AI Awareness Seminar",
      subtitle: "February 18, 2023 | Seminar Hall",
      description:
        "An introductory seminar on Artificial Intelligence and emerging technologies.",
    },
    {
      month: "SEP",
      day: "12",
      title: "Tech Fest 2023",
      subtitle: "September 12, 2023",
      description:
        "Department-level technical festival with coding, robotics and quiz competitions.",
    },
  ],

  2024: [
    {
      month: "JAN",
      day: "22",
      title: "Python Bootcamp",
      subtitle: "January 22, 2024 | Offline",
      description:
        "Hands-on bootcamp covering Python programming fundamentals and projects.",
    },
    {
      month: "NOV",
      day: "08",
      title: "Cyber Security Workshop",
      subtitle: "November 8, 2024",
      description:
        "Workshop introducing ethical hacking, network security and cyber awareness.",
    },
  ],

  2025: [
    {
      month: "JUN",
      day: "20",
      title: "Even Semester",
      subtitle: "January – June 2025",
      description: "",
    },
    {
      month: "APR",
      day: "05",
      title: "Goal Extraction Challenge",
      subtitle: "9:00 AM – 5:00 PM | IEM UEM",
      description:
        "Open innovation event to develop creative, strong connected and long lasting ideas.",
    },
    {
      month: "MAR",
      day: "25",
      title: "Blockchain Technology Workshop",
      subtitle: "March 25, 2025 | Offline",
      description:
        "Hands-on workshop covering blockchain fundamentals, smart contracts and decentralized applications.",
    },
    {
      month: "JUL",
      day: "20",
      title: "Odd Semester",
      subtitle: "July – December 2025",
      description: "",
    },
    {
      month: "AUG",
      day: "10",
      title: "Coding Nexus",
      subtitle: "10:00 AM",
      description:
        "Sharpen your coding skills in this timed competitive programming contest.",
    },
  ],
};

function EventTimeline() {
  const [selectedYear, setSelectedYear] = useState("2025");

  const events =
    selectedYear === "All"
      ? [...eventData["2023"], ...eventData["2024"], ...eventData["2025"]]
      : eventData[selectedYear];

  const years = ["2023", "2024", "2025", "All"];

  return (
    <section className="py-20 bg-paper">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono uppercase tracking-[3px] text-[11px] text-signal mb-3">
            Timeline
          </p>
          <h2 className="font-display text-4xl font-semibold text-ink">
            Events {selectedYear !== "All" ? selectedYear : ""}
          </h2>
          <p className="mt-3 text-body font-sans">
            Explore academic and extracurricular events organized by the
            department.
          </p>

          <div className="flex gap-6 mt-8 border-b border-line">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`pb-3 font-sans text-sm font-semibold transition-colors duration-300 border-b-2 -mb-px ${
                  selectedYear === year
                    ? "text-ink border-signal"
                    : "text-body border-transparent hover:text-ink"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div>
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventTimeline;
```

- [ ] **Step 3: Visual check**

Run `npm run dev`. Visit `/events`.

Expected: vertical rule line down the left of each entry with a small circle marker per event, mono date labels (e.g. "AUG 10"), underline-style year tabs (not filled pill buttons) — clicking a year filters the list and moves the underline.

- [ ] **Step 4: Commit**

```bash
git add src/components/events/EventCard.jsx src/components/events/EventTimeline.jsx
git commit -m "Redesign Events as a vertical timeline with underline year tabs"
```

---

### Task 10: Contact page redesign

**Files:**
- Modify: `src/components/contact/ContactSection.jsx`

**Interfaces:**
- Consumes: `.edge-card` (Task 3), tokens (Task 1).
- Produces: none consumed elsewhere.

- [ ] **Step 1: Rewrite `src/components/contact/ContactSection.jsx`**

```jsx
import { MapPin, Mail, Phone } from "lucide-react";

const details = [
  {
    icon: MapPin,
    label: "Address",
    value: (
      <>
        Institute of Engineering & Management
        <br />
        New Town, Kolkata - 700160
      </>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    value: "cse.co@iem.edu.in",
  },
  {
    icon: Phone,
    label: "Landline",
    value: (
      <>
        033-2341-8440
        <br />
        033-2341-6412
      </>
    ),
  },
];

function ContactSection() {
  return (
    <section className="py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono uppercase tracking-[3px] text-[11px] text-signal mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl font-semibold text-ink">
            Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="edge-card p-8 md:p-10">
            <ul className="divide-y divide-line">
              {details.map(({ icon: Icon, label, value }) => (
                <li
                  key={label}
                  className="flex items-start gap-5 py-6 first:pt-0 last:pb-0"
                >
                  <Icon className="text-signal flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-mono uppercase tracking-[1.5px] text-xs text-body">
                      {label}
                    </h3>
                    <p className="mt-1.5 font-sans text-ink leading-7">
                      {value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="https://www.google.com/maps/place/Institute+of+Engineering+%26+Management,+New+Town/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-8 bg-ink text-white px-6 py-3 rounded-lg font-sans font-semibold transition-all duration-300 hover:bg-signal"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="edge-card overflow-hidden">
            <iframe
              title="IEM Campus"
              src="https://maps.google.com/maps?q=Institute%20of%20Engineering%20Management%20New%20Town%20Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
```

- [ ] **Step 2: Visual check**

Run `npm run dev`. Visit `/contact`.

Expected: one wide panel with Address/Email/Phone as icon+label rows (not three separate boxes), map next to it at equal height on desktop, stacked on mobile; "Open in Google Maps" button still links out correctly.

- [ ] **Step 3: Commit**

```bash
git add src/components/contact/ContactSection.jsx
git commit -m "Redesign Contact as a single detail panel beside the map"
```

---

### Task 11: Full-site verification pass

**Files:** none (verification only; fix-forward any issues found in the files touched above).

- [ ] **Step 1: Production build**

Run: `npm run build`
Expected: exits 0, no errors or warnings about missing assets.

- [ ] **Step 2: Responsive visual review**

Run `npm run dev`. Using the browser, visit all five routes (`/`, `/about`, `/faculty`, `/events`, `/contact`) at three widths: 375px (mobile), 768px (tablet), 1440px (desktop). For each page/width combination, check:
- No horizontal scrollbar / no element overflowing its container.
- Fraunces renders on all display headings (visually distinct serif, not falling back to system sans).
- IBM Plex Mono renders on eyebrows/date badges/index numbers (visually distinct monospace).
- No leftover "STUDYRISERR" watermark visible anywhere.
- Hover states (card lift, faculty row indent, timeline marker fill, nav underline) work with mouse.

- [ ] **Step 3: Keyboard accessibility spot-check**

On any page, press Tab repeatedly through the nav links, footer social icons, and any buttons (HOD "Read More", Events year tabs, Contact "Open in Google Maps").

Expected: a visible focus ring on every stop (not suppressed by any `outline-none` added in this redesign — none of the tasks above add one).

- [ ] **Step 4: Fix any issues found**

If Steps 1–3 surface problems, fix them in the relevant file from Tasks 1–10 and re-run the affected check before proceeding.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "Fix issues found in full-site verification pass"
```

(Skip this commit if Step 4 found nothing to fix.)
