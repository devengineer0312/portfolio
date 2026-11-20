// Resolves files in /public so the site works from any hosting sub-path.
// PUBLIC_URL comes from "homepage" in package.json ("." = relative paths).
export const asset = (path) => `${process.env.PUBLIC_URL || ''}/${path.replace(/^\//, '')}`
