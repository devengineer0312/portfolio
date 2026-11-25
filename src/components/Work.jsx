import { useState } from 'react';
import { projects } from '../data';
import ProjectModal from './ProjectModal';

export default function Work() {
  const [active, setActive] = useState(null);

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow">Selected work</p>
          <h2>Machines, products and systems — designed to be built.</h2>
          <p className="section__lead">
            From stainless food-processing equipment to 3D-printed electronics enclosures. Open any project for the full
            gallery and engineering notes.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((p, i) => (
            <button
              key={p.id}
              className="card"
              onClick={() => setActive(i)}
              data-reveal
              style={{ '--delay': `${(i % 2) * 90}ms` }}
            >
              <div className="card__media">
                <img src={p.cover} alt={p.title} loading="lazy" />
                <span className="card__count">
                  {p.images.length} {p.images.length === 1 ? 'view' : 'views'}
                  {p.video ? ' + video' : ''}
                </span>
              </div>
              <div className="card__body">
                <p className="card__meta">
                  <span>{String(i + 1).padStart(2, '0')}</span> {p.category}
                </p>
                <h3>{p.title}</h3>
                <p className="card__sub">{p.subtitle}</p>
                <ul className="tags">
                  {p.tags.slice(0, 3).map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <span className="card__cta">
                  Open project
                  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <ProjectModal
          project={projects[active]}
          index={active}
          total={projects.length}
          onClose={() => setActive(null)}
          onNav={(d) => setActive((a) => (a + d + projects.length) % projects.length)}
        />
      )}
    </section>
  );
}
