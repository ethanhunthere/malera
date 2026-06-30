# Malera Studio

> We just build good stuff.

**Malera Studio** is a creative digital studio based in Pristina, Kosovo.
We build websites, apps, and video — end-to-end digital solutions crafted with precision.

---

## 🚀 Tech Stack

| Layer         | Technology                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------------- |
| Framework     | [Next.js 16](https://nextjs.org) (App Router, Turbopack)                                       |
| UI            | [React 19](https://react.dev), [Tailwind CSS v4](https://tailwindcss.com)                      |
| 3D / VFX      | [Three.js](https://threejs.org) via [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) |
| Type Safety   | [TypeScript 5](https://www.typescriptlang.org)                                                |
| Linting       | [ESLint 9](https://eslint.org) + [`eslint-config-next`](https://nextjs.org/docs/app/api-reference/config/eslint) |
| Hosting       | Static Export → Cloudflare Pages                                                              |

---

## 📁 Project Structure

```
malera/
├── app/                              # Next.js App Router
│   ├── globals.css                   # Design system (glass tiers, orbs, base styles)
│   ├── layout.tsx                    # Root layout — fonts, metadata, background, shell
│   ├── page.tsx                      # Home page — composes all sections with structured data
│   ├── privacy/page.tsx              # Privacy policy
│   ├── terms/page.tsx                # Terms of service
│   ├── starterdetails/page.tsx       # Starter plan scope of work
│   ├── prodetails/page.tsx           # Pro plan scope of work
│   ├── businessdetails/page.tsx      # Business plan scope of work
│   └── enterprisedetails/page.tsx    # Enterprise engagement model
│
├── src/
│   └── features/
│       ├── effects/                  # Visual effects
│       │   ├── components/
│       │   │   ├── AnimatedBackground.tsx  # Three.js Codestream + Architect scene
│       │   │   └── GoldenTrail.tsx         # Canvas-based golden cursor trail
│       │   └── lazy.tsx                    # Lazy-loads the 3D background
│       │
│       ├── home/                     # Home page sections
│       │   ├── components/
│       │   │   ├── Hero.tsx           # Hero animation with character fly-in
│       │   │   ├── Services.tsx       # Services grid with neural network SVG
│       │   │   ├── Portfolio.tsx      # Project showcase with live previews
│       │   │   ├── Pricing.tsx        # Tiered pricing cards
│       │   │   ├── Contact.tsx        # Contact section with form + social links
│       │   │   └── ContactForm.tsx    # AJAX contact form → Gmail
│       │   └── lazy.tsx               # Lazy-loads Portfolio, Pricing, Contact
│       │
│       └── layout/                   # Shared shell components
│           └── components/
│               ├── Navbar.tsx         # Sticky navigation with mobile menu
│               ├── Footer.tsx         # Site footer with links and contact
│               ├── Container.tsx      # Responsive max-width container
│               └── GlassDivider.tsx   # Section divider with glass effect
│
├── public/                           # Static assets
│   ├── malera-transparent.webp       # Logo
│   ├── favicon.ico, favicon-32.png   # Favicons (optimized from 2000px source)
│   ├── icon-192.png, icon-512.png    # PWA icons
│   └── manifest.json                 # PWA manifest
│
├── scripts/
│   └── inject-preloads.sh            # Post-build preload injection
│
├── next.config.ts                    # Static export config + bundle analyzer
├── tsconfig.json                     # TypeScript configuration
├── eslint.config.mjs                 # ESLint configuration
├── postcss.config.mjs                # PostCSS / Tailwind configuration
└── package.json                      # Dependencies & scripts
```

### Feature Organization

Each feature under `src/features/` encapsulates a distinct domain with its own components.
`lazy.tsx` barrel files are `"use client"` boundaries that wrap heavy components in
`next/dynamic` for code splitting.

| Feature  | Responsibility                                     |
| -------- | -------------------------------------------------- |
| `home`   | Page sections — Hero, Services, Portfolio, Pricing, Contact |
| `layout` | Shell primitives — Navbar, Footer, Container, GlassDivider  |
| `effects`| Visual effects — 3D background, golden cursor trail          |

### Import Convention

All imports use the `@/*` path alias (maps to project root):

```tsx
import Container from "@/src/features/layout/components/Container";
import Hero from "@/src/features/home/components/Hero";
import AnimatedBackground from "@/src/features/effects/lazy";
```

---

## 🛠️ Development

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install

```bash
npm install
```

### Build & Preview

This project uses `output: "export"` for static generation. `npm run dev` is **not supported** — build and serve locally instead:

```bash
npm run build
cd out && python3 -m http.server 3000
```

Open [http://localhost:3000](http://localhost:3000).

### Lint

```bash
npm run lint
```

### Analyze Bundle

```bash
npm run analyze
```

---

## 🚢 Deployment

The project outputs a fully static site to `out/`. Deploy to Cloudflare Pages:

1. Connect the GitHub repo
2. Set build command: `npm run build`
3. Set output directory: `out`

Also works with Vercel or any static CDN.

---

## 📄 Legal

- [Privacy Policy](/privacy)
- [Terms of Service](/terms)

---

## 📧 Contact

**Malera Studio** — Pristina, Kosovo
[hello@malera.studio](mailto:hello@malera.studio)
[@malera.studio](https://instagram.com/malera.studio)
