import { useMemo, useState } from 'react'
import { asset } from '../asset.js'

// Album-style project gallery: each project is a compact "album" showing a
// large cover plus a mosaic of its other images. Clicking any photo opens
// the project viewer at that image. Category filters keep a long list tidy.
export default function Album({ projects, onOpen }) {
  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], [projects])
  const [filter, setFilter] = useState('All')
  const totalPhotos = projects.reduce((n, p) => n + p.gallery.length, 0)

  return (
    <div className="album-wrap">
      <div className="album-bar">
        <div className="album-filters" role="tablist" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              className={`album-filter mono ${filter === c ? 'is-active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
              <span>{c === 'All' ? projects.length : projects.filter((p) => p.category === c).length}</span>
            </button>
          ))}
        </div>
        <span className="album-count mono">
          {projects.length} albums · {totalPhotos} photos
        </span>
      </div>

      <div className="album-grid">
        {projects.map((p, i) => {
          if (filter !== 'All' && p.category !== filter) return null
          const [cover, ...rest] = p.gallery
          const side = rest.slice(0, 2)
          const more = p.gallery.length - 1 - side.length
          return (
            <article key={p.id} className="album">
              <div className="album-mosaic">
                <button className="album-photo album-cover" onClick={() => onOpen(i, 0)} aria-label={`${p.title}: ${cover.caption}`}>
                  <img src={asset(cover.src)} alt="" loading="lazy" />
                  <span className="cover-tag mono">PRJ-{String(i + 1).padStart(2, '0')}</span>
                  {p.kind && <span className="kind-tag mono">{p.kind}</span>}
                </button>
                {side.length > 0 && (
                  <div className="album-side">
                    {side.map((g, k) => (
                      <button key={g.src} className="album-photo" onClick={() => onOpen(i, k + 1)} aria-label={`${p.title}: ${g.caption}`}>
                        <img src={asset(g.src)} alt="" loading="lazy" />
                        {k === side.length - 1 && more > 0 && <span className="album-more mono">+{more}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button className="album-info" onClick={() => onOpen(i, 0)}>
                <span className="eyebrow mono">
                  {p.category} · {p.gallery.length} photos
                </span>
                <h3>{p.title}</h3>
                <p className="muted">{p.subtitle}</p>
                <span className="chips">
                  {p.tools.slice(0, 3).map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </span>
                <span className="card-foot mono">
                  Open album <span className="arrow">→</span>
                </span>
              </button>
              {p.links && (
                <div className="album-links mono">
                  {p.links.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </article>
          )
        })}
      </div>
    </div>
  )
}
