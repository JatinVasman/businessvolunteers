# Business Volunteers — Next.js (App Router, static export)

Your site converted to **Next.js**, with every page as a real URL that ships
**server-rendered HTML** — so Google sees full content, not an empty shell.
Same content, same design, same interactions.

## Why this is better for SEO

Your old build was a client-only SPA: the homepage's HTML was an empty
`<div id="root">` and all content was drawn by JavaScript after load. Crawlers
and link previews saw nothing. Now each route is prerendered to static HTML
(the homepage alone ships ~10 KB of real text), and every section is its own
shareable URL.

## Routes

| URL | Page |
|---|---|
| `/` | Home |
| `/about`, `/founder`, `/co-founder`, `/why`, `/team` | About cluster |
| `/services` | Services |
| `/portfolio` | Portfolio |
| `/industries` + `/industries/[id]` | Industries (85 pages) |
| `/case-studies` | Case Studies |
| `/blog` + `/blog/[slug]` | Blog + articles |
| `/pricing` | Pricing |
| `/contact` | Contact |
| `/locations/[loc]` | Per-location pages (57) |

Each route exports its own `<title>` and meta description (and dynamic ones use
`generateMetadata`) — the real SEO payoff.

## Run / build / host

```bash
npm install
npm run dev        # local dev at http://localhost:3000
npm run build      # static export → ./out
```

`npm run build` writes a fully static site to `out/`. Upload the contents of
`out/` to any static host (or alongside your existing
`digital-marketing-services-<city>/` folders, `sitemap.xml`, `robots.txt`).
No Node server required (`output: "export"` in `next.config.mjs`).

## Project structure

```
app/                      one folder per route (server component + metadata)
├── layout.tsx            <html>, global metadata, wraps everything in <Shell>
├── globals.css           resets + keyframes (ticker, reveal) + scrollbar
├── page.tsx              Home
├── about/ founder/ …     static routes
├── industries/[id]/      dynamic route (generateStaticParams over all industries)
├── blog/[slug]/          dynamic route (generateStaticParams over all articles)
└── locations/[loc]/      dynamic route (generateStaticParams over LOCATIONS)

components/
├── Shell.tsx             "use client" — sticky Nav, Ticker, footer, WhatsApp widget
├── ui.tsx                "use client" — all shared components (Nav, FadeIn, Lightbox…)
└── pages/<Name>.tsx      "use client" — your original page components, one per file

lib/
├── data.tsx              theme, all data, helpers (server- & client-safe)
└── nav.ts                useGo() — maps go("services") → router.push("/services")

public/                   img0…img35 — your images, extracted from base64
```

## How navigation was preserved

Your components navigate by calling `go("services")` and `setInd(id)` etc. Rather
than rewrite every call, `lib/nav.ts` provides a `go()` that maps those page keys
to real route pushes, and the dynamic routes (industry id, blog slug) are wired in
each page's client wrapper. So the component code is unchanged — only moved into
modules and pointed at real URLs.

## One thing to decide: blog volume

`npm run build` currently generates **~3,400 blog article URLs** — your data
defines a templated article for every blog × every industry, and the export turns
each into its own page. That's a lot of near-duplicate pages, which is the same
"thin/duplicate content" risk we discussed for the city pages, and it's why the
build is large (~374 MB).

Three options, your call:
1. **Keep all** — maximum programmatic-SEO surface (but risks dilution/duplication).
2. **Pillar only** — generate just the 5 `GENERAL_BLOGS` articles; industry
   variants stop being separate URLs.
3. **Keep but `noindex`** the industry-variant articles so users can still reach
   them in-app, but Google indexes only the canonical ones.

Tell me which and I'll wire it (it's a small change in `app/blog/[slug]/page.tsx`).

## Notes

- The build skips type/lint blocking (`next.config.mjs`) to match your original
  loosely-typed setup (esbuild, `strict: false`). Your code is unchanged.
- Images use plain `<img>` with `/imgN.*` paths from `public/` (Next image
  optimization is off, since this is a static export).
- `gen_pages.py` (your city-page generator) is unaffected and not part of this app.
