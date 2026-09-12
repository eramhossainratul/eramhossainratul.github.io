# Md. Eram Hossain Ratul's Personal Portfolio

<p align="center">
  <img src="public/logo.svg" alt="Md. Eram Hossain Ratul Logo" width="100" height="100" />
</p>

<p align="center">
  <strong>Student Leader · Club Administrator · Social Activist</strong><br>
  <em>Based in Dhaka, Bangladesh</em>
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js" alt="Next.js" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19.0.0-61dafb?style=flat-square&logo=react" alt="React" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript" alt="TypeScript" /></a>
  <a href="https://www.framer.com/motion"><img src="https://img.shields.io/badge/Framer_Motion-12.23-black?style=flat-square&logo=framer" alt="Framer Motion" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-amber?style=flat-square" alt="License" /></a>
</p>

<p align="center">
  <sub>Developed by <a href="https://maherukhislam.github.io">Maherukh Islam</a></sub>
</p>

---

## 🌟 Overview

This repository hosts the official personal portfolio website for **Md. Eram Hossain Ratul**, highlighting his leadership journey across organizations such as the **Dhaka Commerce College Nature Study Club**, the **Rotaract Club of Dhaka Commerce College**, and the **Bangladesh National Cadet Corps (BNCC)**.

Designed with a warm copper/amber and deep stone aesthetic, the website combines typographic elegance, fluid micro-interactions, responsive mobile navigation, and semantic SEO structured data.

---

## ✨ Features

- **Cinematic Fullscreen Hero**: Full-bleed portrait backdrop with gradient blending, bold typography, status eyebrow, and live Asia/Dhaka time clock.
- **Interactive Experience Hub**: Multi-organization role timelines with interactive tabs and expandable contribution accordions.
- **Sanitized & Structured Data**: Centralized profile data architecture (`src/lib/portfolio-data.ts`) separating content from presentation.
- **Achievements & Awards**: Card grid showcasing leadership recognitions, training certificates, and community initiatives.
- **Accessible & Responsive**: Fully responsive layout from mobile (390px) to ultra-wide displays with accessible Radix UI primitives.
- **Modern Performance**: Server-side rendering with Next.js App Router, Tailwind CSS v4, and optimized typography via `next/font`.
- **Structured Schema (JSON-LD)**: Complete Person schema integration for enhanced search engine indexing and discoverability.

---

## 🛠️ Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) | App Router, Server Components & React 19 |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict static typing and type safety |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first CSS engine with `@theme inline` |
| **UI Primitives** | [Radix UI](https://www.radix-ui.com/) | Accessible headless components (Dialog, Tabs, Accordion) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Smooth viewport reveals and staggered transitions |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent iconography |
| **Fonts** | `Playfair Display` & `Inter` | Next.js Google Fonts integration |

---

## 📁 Repository Structure

```text
.
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI workflow
├── public/
│   ├── hero-portrait.jpg        # Optimized hero portrait image
│   ├── logo.svg                 # Custom ER luxury vector monogram
│   └── robots.txt               # SEO crawler directives
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind CSS v4 design tokens & theme
│   │   ├── layout.tsx           # Root layout, metadata & fonts
│   │   └── page.tsx             # Main portfolio landing page & JSON-LD
│   ├── components/
│   │   ├── portfolio/           # Portfolio section components
│   │   │   ├── about.tsx        # Bio & quick facts
│   │   │   ├── achievements.tsx # Awards & honors grid
│   │   │   ├── connect.tsx      # Contact & social presence
│   │   │   ├── education.tsx    # Academic background
│   │   │   ├── experience.tsx   # Organizational leadership timeline
│   │   │   ├── footer.tsx       # Site footer
│   │   │   ├── hero.tsx         # Full-bleed hero banner
│   │   │   ├── navbar.tsx       # Aceternity-style resizable pill nav with live clock
│   │   │   ├── reveal.tsx       # Scroll-triggered entrance animation wrapper
│   │   │   └── section-heading.tsx # Uniform section header typography
│   │   └── ui/                  # Reusable accessible UI components
│   │       ├── accordion.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── cover.tsx              # Aceternity "cover" heading highlight
│   │       ├── glowing-effect.tsx     # Aceternity cursor-tracking card glow
│   │       ├── hover-border-gradient.tsx # Aceternity animated-border CTA
│   │       ├── infinite-moving-cards.tsx # Aceternity roles marquee
│   │       ├── lamp.tsx               # Aceternity lamp section header
│   │       ├── pointer-highlight.tsx  # Aceternity scroll-in text highlight
│   │       ├── resizable-navbar.tsx   # Aceternity resizable navbar kit
│   │       ├── sheet.tsx
│   │       ├── sparkles.tsx           # Sparkle canvas used by the Cover
│   │       ├── tabs.tsx
│   │       ├── text-generate-effect.tsx  # Aceternity word-by-word fade-in
│   │       ├── text-hover-effect.tsx  # Aceternity outlined brand hover
│   │       └── timeline.tsx           # Aceternity scroll progress timeline
│   ├── hooks/
│   │   └── use-mobile.ts        # Responsive breakpoint hook
│   └── lib/
│       ├── portfolio-data.ts    # Centralized profile & organization content
│       └── utils.ts             # Tailwind class merging utility
├── .env.example                 # Example environment variables
├── .gitattributes               # Cross-platform LF line ending rules
├── .gitignore                   # Standard Next.js & OS ignore patterns
├── components.json              # shadcn/ui configuration
├── LICENSE                      # MIT License
├── next.config.ts               # Next.js configuration
├── package.json                 # Project dependencies & scripts
├── postcss.config.mjs           # PostCSS configuration
└── tsconfig.json                # TypeScript compiler configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.0.0` or later (`v22+` recommended)
- **Package Manager**: `npm`, `pnpm`, or `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/eram-portfolio.git
   cd eram-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Launches Next.js in development mode on port 3000 |
| `npm run build` | Compiles the production-optimized build |
| `npm run start` | Runs the compiled production server |
| `npm run lint` | Runs Next.js ESLint checks |
| `npm run typecheck` | Validates TypeScript types across the codebase |

---

## 🎨 Customization

### Updating Profile Data
All text content, roles, dates, honors, and bio details are maintained in a single data file:
- Edit [`src/lib/portfolio-data.ts`](src/lib/portfolio-data.ts) to update personal info, roles, education, or achievements.

### Updating the Hero Portrait
- Replace [`public/hero-portrait.jpg`](public/hero-portrait.jpg) with a high-resolution portrait (recommended resolution: `1672×941` or similar aspect ratio).

### Modifying the Color Palette
- Edit [`src/app/globals.css`](src/app/globals.css) to adjust the OKLCH color tokens for primary, background, card, and accent tones.

---

## 🚀 Deployment (GitHub Pages)

This project is pre-configured for automated continuous deployment to **GitHub Pages** via GitHub Actions.

### 1. Enable GitHub Pages in your Repository Settings
1. On GitHub, navigate to your repository.
2. Go to **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions** (instead of "Deploy from a branch").

### 2. Push to `main`
Whenever you push changes to the `main` branch, the workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) will automatically:
1. Check out your code.
2. Configure the correct base path for your repository.
3. Install dependencies and compile a static export to `./out`.
4. Deploy the static build to GitHub Pages.

Your live portfolio will be available at:
```text
https://<your-github-username>.github.io/<repository-name>/
```

> [!TIP]
> **Custom Domain**: If you are using a custom domain (e.g. `eramratul.com`), simply configure it under **Settings > Pages > Custom domain**. The deployment workflow and base path logic will automatically adapt without requiring manual code changes!

---

## 📄 License

This project is licensed under the terms of the [MIT License](LICENSE).

---

Developed by [Maherukh Islam](https://maherukhislam.github.io).
