# CalculatorCluster

Hyper-optimized Next.js 14 static export delivering US-focused calculators for payroll, tax, retirement, health, and science.

## Getting started locally

```bash
npm install
npm run dev
```

* Visit http://localhost:3000 to preview calculators and guides.
* `npm run lint` ensures ESLint compliance before committing.

## Production build + export

```bash
npm run build
npm run export
```

The static site is emitted to the `out/` directory. Serve it with any static host or upload to a CDN.

## Deploying to Vercel

1. Create a new Vercel project and link this repository.
2. Set `NEXT_PUBLIC_ADSENSE_CLIENT_ID` in Project Settings if you use Google AdSense.
3. Use the default Next.js build command (`npm run build`) and output directory `.next` (Vercel handles export automatically).

## Deploying to Hostinger static hosting

1. Run `npm run build && npm run export` locally.
2. Zip the generated `out/` folder contents.
3. Upload the archive through Hostinger’s file manager or FTP to the desired public directory.
4. Ensure the root contains `index.html`, `sitemap.xml`, and asset folders.

## Project structure

```
app/          # App Router routes (pages, calculators, guides, legal pages)
components/   # Shared UI components (header, cards, ads, calculators)
lib/          # SEO helpers, calculator config, rich content data
public/       # Static assets like the logo
styles/       # Tailwind-powered global styles
```

All calculators are static-compatible client components, while marketing and guide pages are server components for maximal performance.
