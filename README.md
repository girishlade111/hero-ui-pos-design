# Hero UI POS Design

A complete point-of-sale (POS) UI demo built with Next.js — cashier screen with product grid, category sidebar and cart sidebar, checkout flow with a success/receipt page, plus a full admin dashboard (product, category, order, and analytics management) with inventory, discount, and customer modals.

![Next.js](https://img.shields.io/badge/Next.js-15-black) ![React](https://img.shields.io/badge/React-19-61dafb) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8)

**Live demo:** https://girishlade111.github.io/hero-ui-pos-design/

## What it does

**Cashier screen (`/`)**
- Searchable product grid with category sidebar (food, drinks, etc.)
- Cart sidebar with quantity controls, discounts, tax, and totals
- Customer selection modal (loyalty points, spend history)
- Checkout page and success page with receipt details

**Admin dashboard (`/admin`)**
- Product management (add/edit products, stock levels, pricing)
- Category management
- Order history with receipts
- Sales analytics/reports page

**Data layer** (`app/services/database.ts`) — in-memory mock database service with seed products (burgers, pizza, salads, drinks) so the whole demo works with zero backend. Cart state lives in React context (`app/context/cart-context.tsx`).

## Tech stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui (Radix UI primitives), `class-variance-authority`
- **State:** React Context (cart), in-memory mock service (database)
- **Icons:** Lucide React
- **Other:** `next-themes`, `@vercel/analytics`

## Quick start

Prerequisites: Node.js 18+ and npm.

```bash
# install dependencies
npm install --legacy-peer-deps

# start the dev server
npm run dev
# open http://localhost:3000
# Admin: http://localhost:3000/admin

# production build (static export to ./out)
npm run build
```

No environment variables are required — the demo runs fully client-side with an in-memory mock database (data resets on page reload).

## Project structure

```
hero-ui-pos-design/
├── app/
│   ├── page.tsx                 # Cashier screen (POSPage)
│   ├── admin/                   # Admin dashboard
│   │   ├── page.tsx             # Admin home
│   │   ├── products/            # Product management
│   │   ├── categories/          # Category management
│   │   ├── orders/              # Order history
│   │   └── analytics/           # Sales analytics
│   ├── checkout/page.tsx        # Checkout flow
│   ├── success/page.tsx         # Receipt / success page
│   ├── components/              # product-grid, cart-sidebar, category-sidebar,
│   │                            # customer/discount/inventory modals, sales-report
│   ├── context/cart-context.tsx # Cart state (React Context)
│   ├── services/database.ts     # Mock database service + seed data
│   └── data/products.tsx        # Seed product catalog
├── components/ui/               # shadcn/ui primitives
├── public/                      # Product images and static assets
├── next.config.mjs              # Static export (output: 'export') + basePath for GitHub Pages
└── components.json              # shadcn/ui config
```

## Making it real

To connect a real backend later: replace the functions in `app/services/database.ts` with API calls (REST/GraphQL) or swap in a real store — the components only consume the service's interface.

## Deployment

The site is statically exported (`output: 'export'` in `next.config.mjs`), so it can be hosted anywhere that serves static files:

- **GitHub Pages (current):** the `out/` directory from `npm run build` is published to the `gh-pages` branch → https://girishlade111.github.io/hero-ui-pos-design/
- **Note on `basePath`:** `next.config.mjs` sets `basePath: '/hero-ui-pos-design'` for the GitHub Pages subpath. Remove the `basePath` (and keep `output: 'export'`) if you deploy to a root domain or Vercel.

## Origin

Originally generated with [v0.app](https://v0.app) and customized afterward.

---

Built by Girish Lade — https://ladestack.in
