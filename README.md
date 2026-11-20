# Hardware Engineering Portfolio

React + Vite single-page portfolio.

## Run locally
Requires Node.js 18+ (https://nodejs.org, LTS).

```
npm install
npm run dev        # http://localhost:5173
```

## Build & deploy
```
npm run build      # outputs static site to dist/
```
Upload `dist/` to any static host (Netlify drop, Vercel, GitHub Pages, Cloudflare Pages).

## Editing content
All text, projects, specs and image annotations are in `src/data.js`.

- Images go in `public/projects/<project>/`.
- Annotation markers: `hotspots: [{ x, y, label, note }]` where `x`/`y` are
  percentages of the image width/height.
- Deep link to a project: `https://your-site/#project-<id>`.
