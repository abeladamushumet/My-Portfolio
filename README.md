# My-Portfolio

A modern personal-portfolio experience built with React, TypeScript, Tailwind CSS, and an Express backend that powers the dev server, Vite integration, and future API endpoints. The project showcases work, highlights skills, and provides a polished contact channel driven by EmailJS.

## Features

- Responsive hero, experience, and work sections powered by custom UI components
- Animated transitions and interactions using Tailwind CSS utilities and Framer Motion
- Highly accessible component library built on Radix UI primitives
- Contact form wired to EmailJS for instant inbox delivery
- Downloadable CV with graceful fallbacks and toast notifications
- Backend-ready Express server (TypeScript) prepared for future APIs, asset serving, and Vite middleware

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Radix UI, Lucide Icons
- **State & Forms:** React Hook Form, Zod validation, TanStack Query
- **Animations:** Framer Motion, Tailwind Animate
- **Email & Communication:** EmailJS (client), Nodemailer-ready Express route (optional SMTP)
- **Backend:** Express 4, Node 20+, tsx runtime, Drizzle ORM-ready configuration

## Project Structure

```
My-Portfolio/
├── client/                 # Vite React app
│   ├── public/             # Static assets (e.g., abela.pdf)
│   └── src/
│       ├── components/     # UI sections & shared components
│       ├── hooks/          # Reusable hooks (e.g., useToast)
│       └── pages/          # Page-level layouts
├── server/                 # Express server (dev + prod asset serving)
│   ├── index.ts            # App entry point
│   ├── routes.ts           # API endpoints (contact template, etc.)
│   └── vite.ts             # Vite middleware & static serving helpers
├── shared/                 # Cross-cutting utilities/types
├── drizzle.config.ts       # Drizzle ORM configuration
├── tailwind.config.ts      # Tailwind customization
├── vite.config.ts          # Vite configured to use client/ as root
└── package.json            # Unified scripts + dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ (20 LTS recommended)
- npm 9+ (or pnpm/yarn if preferred)

### Installation

```bash
git clone https://github.com/abeladamushumet/My-Portfolio.git
cd My-Portfolio
npm install
```

### Environment Variables

Because Vite’s root is `client/`, keep frontend secrets in `client/.env` (or `.env.local`). Minimum configuration:

```env
# client/.env
VITE_EMAILJS_SERVICE_ID=****
VITE_EMAILJS_TEMPLATE_ID=****
VITE_EMAILJS_PUBLIC_KEY=****
```

### Scripts

| Command        | Description |
| -------------- | ----------- |
| `npm run dev`  | Starts the Express server with Vite middleware (tsx). Visit the printed local URL (commonly http://localhost:5000). |
| `npm run build`| Builds the Vite client and bundles the server entry via esbuild into `dist/`. |
| `npm run start`| Serves the production build (`node dist/index.js`). |
| `npm run check`| Runs TypeScript type-checking across client and server code. |
| `npm run db:push` | Executes pending Drizzle migrations (if database features are enabled). |

### Local Development

```bash
npm run dev

# In a browser, open the URL logged by the server (e.g., http://localhost:5000).
# Vite handles HMR for client code while Express proxies API calls.
```

To download/update the CV, place `abela.pdf` (or your renamed CV) inside `client/public/` and update `ContactSection.tsx` or related components if you change the file name.

## Customization

1. **Branding & Content**
   - `client/src/components/HeroSection.tsx`: name, tagline, CTA links.
   - `client/src/components/ContactSection.tsx`: contact details, EmailJS keys, downloadable CV label.
   - `client/src/pages/portfolio.tsx` (or equivalent page entry): reorder sections.

2. **Styling**
   - Tailwind tokens live in `tailwind.config.ts` and `src/styles` (if present).
   - Reusable UI primitives are under `client/src/components/ui`.

3. **Backend / APIs**
   - Extend `server/routes.ts` with new API routes (authentication, newsletter, etc.).
   - Use `.env` to supply database URLs and SMTP credentials. Drizzle config is ready for Neon/Postgres.

## Deployment

1. Build the client and server bundle:
   ```bash
   npm run build
   ```
2. Deploy the contents of `dist/` to your Node hosting provider (Render, Railway, Fly.io, etc.).
3. Ensure production environment variables mirror your local `.env` files (EmailJS client vars can be baked at build time; server envs should be provided at runtime).

## Contributing

Issues and PRs are welcome! For larger changes, open an issue to discuss direction first. Please run `npm run check` before submitting code.

## Contact

- **Author:** Abel Adamu Shumet
- **Email:** abeladamushumet@gmail.com
- **LinkedIn:** https://linkedin.com/in/abeladamushumet
- **GitHub:** https://github.com/abeladamushumet

If you end up customizing this portfolio, feel free to keep attribution or add your own credit line.
