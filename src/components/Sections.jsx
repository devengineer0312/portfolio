import { services, process, experience, tools, deliverables } from '../data';

export function Process() {
  return (
    <section className="section section--tight" aria-label="How I work">
      <div className="container">
        <ol className="process" data-reveal>
          {process.map((p, i) => (
            <li key={p.step}>
              <span className="process__num">{String(i + 1).padStart(2, '0')}</span>
              <strong>{p.step}</strong>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section section--dark" id="services">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow">Capabilities</p>
          <h2>Complete systems, not isolated components.</h2>
          <p className="section__lead">
            Mechanical design, simulation, electronics and controls in one workflow — so the motor fits the gearbox, the
            PCB fits the enclosure, and the machine is ready for the shop floor.
          </p>
        </div>
        <div className="services">
          {services.map((s, i) => (
            <article className="service" key={s.code} data-reveal style={{ '--delay': `${(i % 3) * 70}ms` }}>
              <span className="service__code">{s.code}</span>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="deliverables" data-reveal>
          <h3>What you receive</h3>
          <ul>
            {deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container exp">
        <div className="section__head" data-reveal>
          <p className="eyebrow">Experience</p>
          <h2>In industry since 2021.</h2>
          <p className="section__lead">
            Consulting engineering and industrial hardware development in Brazil, built on a degree in mechanical
            engineering.
          </p>
        </div>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.title} data-reveal>
              <span className="timeline__period">{e.period}</span>
              <div>
                <h3>{e.title}</h3>
                <p>{e.org}</p>
              </div>
              <span className={`timeline__type timeline__type--${e.type.toLowerCase()}`}>{e.type}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Tools() {
  return (
    <section className="section section--alt" id="tools">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow">Toolkit</p>
          <h2>The software behind the work.</h2>
        </div>
        <div className="tools">
          {tools.map((g, i) => (
            <div className="tools__group" key={g.group} data-reveal style={{ '--delay': `${(i % 3) * 70}ms` }}>
              <h3>{g.group}</h3>
              <ul>
                {g.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <strong>Maria Monica Liola</strong>
          <span>Mechanical & Mechatronics Engineer · Brazil</span>
        </div>
        <span className="footer__copy">© {new Date().getFullYear()}</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
