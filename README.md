# Malera Studio

> We just build good stuff.

**Malera Studio** is a creative digital studio based in Pristina, Kosovo. We build websites, apps, brands, and video - end-to-end digital solutions crafted with precision.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI | [React 19](https://react.dev), [Tailwind CSS v4](https://tailwindcss.com) |
| 3D / VFX | [Three.js](https://threejs.org) via [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) |
| Type Safety | [TypeScript 5](https://www.typescriptlang.org) |
| Linting | [ESLint 9](https://eslint.org) + [`eslint-config-next`](https://nextjs.org/docs/app/api-reference/config/eslint) |
| Hosting | Static Export → any CDN / Cloudflare Pages |

---

## 📁 Project Structure

```
malera/
├── app/                          # Next.js App Router - routes & layouts
│   ├── globals.css               # Global styles & Tailwind utilities
│   ├── layout.tsx                # Root layout (fonts, providers, background)
│   ├── page.tsx                  # Home page
│   ├── privacy/page.tsx          # Privacy policy
│   └── terms/page.tsx            # Terms of service
│
├── src/
│   ├── features/                 # Feature modules (grouped by domain)
│   │   ├── home/                 # Home page sections
│   │   │   ├── components/       # Hero, Services, Portfolio, Pricing, Contact
│   │   │   └── dynamic.tsx       # Client-side lazy-loading barrel
│   │   ├── layout/               # Shared layout primitives
│   │   │   └── components/       # Navbar, Footer, GlassDivider
│   │   └── effects/              # 3D / visual effects
│   │       ├── components/       # AnimatedBackground, ShatteringShards
│   │       └── dynamic.tsx       # Client-side lazy-loading barrel
│   └── shared/                   # Cross-cutting utilities
│       ├── context/              # React context providers
│       └── types/                # Shared TypeScript type definitions
│
├── public/                       # Static assets (images, fonts, headers)
├── next.config.ts                # Next.js configuration (static export)
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.mjs             # ESLint configuration
├── postcss.config.mjs            # PostCSS / Tailwind configuration
└── package.json                  # Dependencies & scripts
```

### Feature Organization

Each feature module under `src/features/` encapsulates a distinct domain:

- **`home`** - All page sections: Hero, Services, Portfolio, Pricing, Contact.
- **`layout`** - Reusable shell components: Navbar, Footer, GlassDivider.
- **`effects`** - Three.js powered visuals: animated background, shattering shards.

Client-only components are lazy-loaded via `dynamic.tsx` barrel files that act as `"use client"` boundaries.

---

## 🛠️ Development

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install

```bash
npm install
```

### Build (required for preview)

This project uses `output: "export"` for static generation. `npm run dev` is **not supported** - build and serve locally instead:

```bash
npm run build
cd out && python3 -m http.server 3000
```

Then open [http://localhost:3000](http://localhost:3000).

### Lint

```bash
npm run lint
```

---

## 🚢 Deployment

The project outputs a fully static site to the `out/` directory. Deploy to any static host:

- **Cloudflare Pages** - connect the GitHub repo, set build command to `npm run build` and output directory to `out`.
- **Vercel** - auto-detects Next.js; add `output: "export"` override if needed.
- **Any CDN** - point it at the `out/` directory.

---

## 📄 Legal

- [Privacy Policy](/privacy)
- [Terms of Service](/terms)

---

## 📧 Contact

**Malera Studio** - Pristina, Kosovo  
[hello@malera.studio](mailto:hello@malera.studio)  
[@malera.studio](https://instagram.com)
