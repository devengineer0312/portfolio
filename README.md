# Maria Monica Liola — Engineering Portfolio

Single-page React portfolio (Create React App / react-scripts, React 18, no UI libraries).

## Run locally

Requires Node.js 18+.

```
npm install
npm start          # http://localhost:3000
npm run build      # static site in build/
```

## Edit content

All text, projects, services, experience and tools live in [`src/data.js`](src/data.js).
Images live in `public/` — `public/profile.jpg` and `public/projects/<project-id>/`.

To add a project: copy its images into `public/projects/<new-id>/` and add an entry to the
`projects` array in `src/data.js` (`cover`, `images`, optional `video`).

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.

1. Push this folder to a GitHub repository.
2. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` (or run the workflow from the **Actions** tab).
   The site appears at `https://<username>.github.io/<repo>/`.

`"homepage": "."` in `package.json` keeps paths relative, so the site works under any repo name.
