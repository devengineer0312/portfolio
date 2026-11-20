import { useState } from 'react'
import { asset } from '../asset.js'

// Image with numbered engineering call-outs. Hover / tap a marker to see
// the note; the numbered legend below mirrors the markers for scanning.
export default function AnnotatedImage({ image, showAnnotations }) {
  const [active, setActive] = useState(null)
  const hotspots = image.hotspots || []
  const show = showAnnotations && hotspots.length > 0

  return (
    <figure className="annotated">
      <div className="annotated-frame">
        <img src={asset(image.src)} alt={image.caption} loading="lazy" />
        {show &&
          hotspots.map((h, i) => (
            <button
              key={i}
              type="button"
              className={`hotspot ${active === i ? 'is-active' : ''}`}
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              onClick={() => setActive(active === i ? null : i)}
              aria-label={`${i + 1}: ${h.label}`}
            >
              {i + 1}
              {active === i && (
                <span className={`hotspot-tip ${h.x > 60 ? 'tip-left' : ''} ${h.y > 70 ? 'tip-up' : ''}`}>
                  <strong>{h.label}</strong>
                  {h.note && <span>{h.note}</span>}
                </span>
              )}
            </button>
          ))}
      </div>
      <figcaption>
        <span className="mono">FIG.</span> {image.caption}
      </figcaption>
      {show && (
        <ol className="legend">
          {hotspots.map((h, i) => (
            <li
              key={i}
              className={active === i ? 'is-active' : ''}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <span className="legend-num">{i + 1}</span>
              <span>
                <strong>{h.label}</strong>
                {h.note && <em>{h.note}</em>}
              </span>
            </li>
          ))}
        </ol>
      )}
    </figure>
  )
}
