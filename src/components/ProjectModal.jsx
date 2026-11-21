import { useEffect, useState } from 'react'
import { asset } from '../asset.js'

export default function ProjectModal({ project, index, startImage = 0, onClose }) {
  const [current, setCurrent] = useState(startImage)
  const image = project.gallery[current]
  const count = project.gallery.length
  const step = (d) => setCurrent((c) => (c + d + count) % count)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % count)
      if (e.key === 'ArrowLeft') setCurrent((c) => (c - 1 + count) % count)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, count])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <article className="modal" role="dialog" aria-modal="true" aria-label={project.title} onClick={(e) => e.stopPropagation()}>
        <header className="modal-head">
          <div>
            <p className="eyebrow mono">
              PRJ-{String(index + 1).padStart(2, '0')} · {project.category}
            </p>
            <h2>{project.title}</h2>
            <p className="muted">{project.subtitle}</p>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </header>

        <div className="modal-body">
          <section className="modal-media">
            <figure className="viewer">
              <div className="viewer-frame">
                <img key={image.src} src={asset(image.src)} alt={image.caption} />
                {count > 1 && (
                  <>
                    <button className="viewer-nav prev" onClick={() => step(-1)} aria-label="Previous photo">
                      ‹
                    </button>
                    <button className="viewer-nav next" onClick={() => step(1)} aria-label="Next photo">
                      ›
                    </button>
                  </>
                )}
                <span className="viewer-count mono">
                  {current + 1} / {count}
                </span>
              </div>
              <figcaption>
                <span className="mono">FIG.</span> {image.caption}
              </figcaption>
            </figure>
            <div className="media-bar">
              <div className="thumbs">
                {project.gallery.map((g, i) => (
                  <button
                    key={g.src}
                    className={`thumb ${i === current ? 'is-active' : ''}`}
                    onClick={() => setCurrent(i)}
                    aria-label={g.caption}
                  >
                    <img src={asset(g.src)} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </section>

          <aside className="modal-info">
            <p className="lead">{project.summary}</p>
            {project.links && (
              <div className="modal-links">
                {project.links.map((l, k) => (
                  <a key={l.url} className={k === 0 ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'} href={l.url} target="_blank" rel="noreferrer">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}

            <h3 className="section-label mono">{'// Specifications'}</h3>
            <table className="spec-table">
              <tbody>
                {project.specs.map(([k, v]) => (
                  <tr key={k}>
                    <th>{k}</th>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="section-label mono">{'// Design decisions'}</h3>
            <ul className="check-list">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="chips">
              {project.tools.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </article>
    </div>
  )
}
