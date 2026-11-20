import { useEffect, useState } from 'react'
import AnnotatedImage from './AnnotatedImage.jsx'
import { asset } from '../asset.js'

export default function ProjectModal({ project, index, onClose }) {
  const [current, setCurrent] = useState(0)
  const [annotate, setAnnotate] = useState(true)
  const image = project.gallery[current]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % project.gallery.length)
      if (e.key === 'ArrowLeft') setCurrent((c) => (c - 1 + project.gallery.length) % project.gallery.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, project.gallery.length])

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
            <AnnotatedImage key={image.src} image={image} showAnnotations={annotate} />
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
                    {g.hotspots && <span className="thumb-tag mono">ANN</span>}
                  </button>
                ))}
              </div>
              {image.hotspots && (
                <label className="toggle mono">
                  <input type="checkbox" checked={annotate} onChange={(e) => setAnnotate(e.target.checked)} />
                  <span className="toggle-track" />
                  Annotations
                </label>
              )}
            </div>
          </section>

          <aside className="modal-info">
            <p className="lead">{project.summary}</p>

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
