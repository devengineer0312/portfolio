import { profile } from '../data';

const core = ['SolidWorks', 'Ansys Mechanical', 'Ansys Fluent', 'Fusion 360', 'AutoCAD', 'MSC Adams', 'Altium', 'Siemens PLC'];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow">
            <span className="dot" /> {profile.role} · {profile.location}
          </p>
          <h1 className="hero__title">
            Maria Monica <span className="accent">Liola</span>
          </h1>
          <p className="hero__headline">{profile.headline}</p>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              View projects
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </a>
            <a href="#services" className="btn btn--ghost">
              What I do
            </a>
          </div>
          <dl className="hero__stats">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="hero__photo">
          <div className="hero__frame">
            <img src={profile.photo} alt="Portrait of Maria Monica Liola" />
            <span className="corner corner--tl" />
            <span className="corner corner--tr" />
            <span className="corner corner--bl" />
            <span className="corner corner--br" />
          </div>
          <figcaption className="titleblock">
            <div>
              <span>Engineer</span>
              <strong>M. M. Liola</strong>
            </div>
            <div>
              <span>Discipline</span>
              <strong>Mech · Mechatronics</strong>
            </div>
            <div>
              <span>Base</span>
              <strong>Brazil</strong>
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="container">
        <ul className="strip" aria-label="Core software">
          {core.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
