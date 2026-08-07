# Nexus MedXperts — Brand Guidelines

Brand and visual identity for **nexusmedxperts.ca**. Colours are derived directly
from the logo (`Med Xperts Logo/`) and implemented as design tokens in
`web/src/app/globals.css`.

---

## 1. Logo

The primary logo is the **NEXUS MEDXPERTS** wordmark with the "N‑ribbon" infinity
mark. The mark's teal→ocean→navy gradient is the heart of the brand.

| Asset | File | Use |
| :--- | :--- | :--- |
| Primary logo (SVG) | `web/public/brand/nexus-medxperts-logo.svg` | Print, scalable |
| Primary logo (PNG) | `web/public/brand/nexus-medxperts-logo.png` | Web header, light backgrounds |
| Small PNG | `web/public/brand/nexus-medxperts-logo-sm.png` | Small / retina fallback |
| CSS "N" mark | `web/src/components/Mark.tsx` | Dark surfaces, accents, favicon |

**Clear space:** keep at least the height of the "N" mark clear on all sides.
**Minimum size:** 120px wide (web) / 25mm (print).
**Don't:** recolour the wordmark, stretch it, add shadows, or place the raster
logo on a dark or busy background (use the white CSS wordmark instead).

---

## 2. Colour palette

The palette moves from **teal** (energy, care) through **ocean blue** (trust,
technology) into **deep navy** (authority, stability).

### Primary

| Token | Hex | Role |
| :--- | :--- | :--- |
| Navy 900 | `#001A35` | Footer, deepest backgrounds |
| **Navy 800** | `#002850` | **Primary brand navy** — headings, buttons, dark sections |
| Navy 700 | `#073A68` | Hover states, gradient stop |
| Navy 600 | `#0E4D84` | Secondary navy |

### Accent

| Token | Hex | Role |
| :--- | :--- | :--- |
| **Teal 500** | `#16B0B8` | **Primary accent** — highlights, CTAs, "MED" |
| Teal 600 | `#10A0A8` | Teal hover |
| Teal 400 | `#3EC6CC` | Light accent, glows |
| Ocean 500 | `#0090B8` | Gradient mid‑tone |
| Ocean 600 | `#007AAD` | Ocean hover |

### Neutrals

| Token | Hex | Role |
| :--- | :--- | :--- |
| Ink | `#0B1F36` | Body text |
| Muted | `#5A6B7E` | Secondary text |
| Surface | `#F4F8FB` | Section backgrounds |
| Surface‑2 | `#EAF2F7` | Cards, chips |
| Border | `#DDE7EF` | Hairlines, dividers |
| White | `#FFFFFF` | Base background |

### Signature gradient

```
linear-gradient(120deg, #16B0B8 0%, #0090B8 45%, #073A68 100%)
```

Used on the logo ribbon, key stats, and accent details
(`.brand-gradient` / `.brand-text-gradient` utilities).

---

## 3. Typography

- **Typeface:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
  (Google Fonts) — a geometric, modern sans that echoes the clean logo lettering.
- **Headings:** 700–800 weight, tight tracking (`-0.02em`), navy.
- **Body:** 400–500 weight, `muted` colour, generous line height (1.6).
- **Eyebrows / labels:** uppercase, wide tracking, teal, semibold.

---

## 4. Voice & tone

Trusted, professional, and human. We speak to healthcare professionals as
long‑term partners — confident but never cold.

- **Tagline:** *One trusted partner for every stage of a healthcare career.*
- **Positioning:** Canada's one‑stop healthcare business ecosystem.
- **Themes:** lifecycle, connection, trust, end‑to‑end.

---

## 5. UI conventions

- **Radius:** cards `1rem–1.5rem`, buttons fully rounded (`pill`).
- **Buttons:** primary = navy fill / white text; accent = teal fill; secondary =
  white with border, teal on hover. All lift slightly (`-translate-y-0.5`) on hover.
- **Sections:** alternate white ↔ `surface`; one deep‑navy section (Ecosystem)
  for contrast and rhythm.
- **Shadows:** soft, navy‑tinted, low opacity. No harsh black shadows.
- **Motion:** subtle fade‑up on entry; respect `prefers-reduced-motion`.
