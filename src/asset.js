// Resolves files in /public so the site works from any hosting sub-path.
export const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '')
