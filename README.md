# Hardware Engineering Portfolio

React single-page portfolio (Create React App / `react-scripts`).

## Run locally
Requires Node.js 18+ (https://nodejs.org, LTS).

```
npm install
npm start          # http://localhost:3000
```

## Build & deploy
```
npm run build      # outputs static site to build/
```
Upload `build/` to any static host (Netlify drop, Vercel, GitHub Pages, Cloudflare Pages).
`"homepage": "."` in `package.json` makes all paths relative, so the site also works
from a sub-path such as `https://<user>.github.io/portfolio/`.

## Project structure
```
public/
  index.html        page template
  profile.jpg       main photo (opening section)
  logo.png          optional logo for the menu bar (falls back to initials)
  projects/         project images
  products/         commercial product images
  tools/            tool logos (Simple Icons)
src/
  index.js          entry point
  App.jsx           page sections
  data.js           ALL text, projects and tools
  components/       UI components
  styles.css        theme and layout
```

## Editing content
All text, projects, specs and tools are in `src/data.js`.

- Images go in `public/projects/<project>/`.
- Deep link to a project: `https://your-site/#project-<id>`.
