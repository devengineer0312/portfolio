import { useCallback, useEffect, useState } from 'react'
import { profile, stats, projects, experience, education, skills, process, expertise, tools } from './data.js'
import Tools, { HeroToolbox } from './components/Tools.jsx'
import ProductCards from './components/ProductCards.jsx'
import Album from './components/Album.jsx'
import TraceBackground from './components/TraceBackground.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import SafeImage from './components/SafeImage.jsx'

const NAV = [
  ['about', 'About'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['skills', 'Tools'],
  ['process', 'Process'],
]

function Logo() {
  return (
    <SafeImage
      src={profile.logo}
      alt={`${profile.name} logo`}
      className="brand-logo"
      fallback={<span className="brand-chip mono">{profile.initials}</span>}
    />
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <Logo />
          <span>{profile.shortName}</span>
        </a>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${open ? 'is-open' : ''}`}>
          {NAV.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a className="btn btn-sm btn-primary" href={profile.upwork} target="_blank" rel="noreferrer">
              Hire on Upwork
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function Portrait() {
  return (
    <div className="portrait">
      <span className="portrait-pins top" />
      <span className="portrait-pins bottom" />
      <div className="portrait-frame">
        <SafeImage
          src={profile.photo}
          alt={profile.name}
          fallback={<span className="portrait-initials mono">{profile.initials}</span>}
        />
        {/* PCB-style overlay: alignment marks, grid and a silkscreen label */}
        <span className="portrait-grid" aria-hidden="true" />
        <span className="portrait-mark tl" aria-hidden="true" />
        <span className="portrait-mark tr" aria-hidden="true" />
        <span className="portrait-mark bl" aria-hidden="true" />
        <span className="portrait-mark br" aria-hidden="true" />
        <span className="portrait-tag mono" aria-hidden="true">
          <span className="dot" /> HW · EMBEDDED · RF
        </span>
      </div>
      <span className="portrait-label mono">U1 · {profile.shortName.toUpperCase()}</span>
    </div>
  )
}

function Hero() {
  return (
    <header className="hero" id="top">
      <TraceBackground />
      <div className="container hero-toolbox-wrap">
        <HeroToolbox groups={tools} />
      </div>
      <div className="container hero-grid">
      <Portrait />
      <div className="hero-inner">
        <p className="eyebrow mono">
          <span className="status-dot" /> Available for freelance hardware projects
        </p>
        <h1>
          {profile.name}
          <span className="hero-title">{profile.title}</span>
        </h1>
        <p className="hero-headline">{profile.headline}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href={profile.upwork} target="_blank" rel="noreferrer">
            Hire me on Upwork →
          </a>
          <a className="btn btn-ghost" href="#projects">
            View projects
          </a>
        </div>
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <dt className="mono">
                {s.value}
                {s.unit && <small> {s.unit}</small>}
              </dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      </div>
    </header>
  )
}

function SectionHead({ index, title, kicker }) {
  return (
    <div className="section-head">
      <span className="mono section-index">{index}</span>
      <div>
        <h2>{title}</h2>
        {kicker && <p className="muted">{kicker}</p>}
      </div>
    </div>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead index="01" title="About" kicker="Commercial product development — from concept through production." />
        <div className="about-grid">
          <div className="about-text">
            {profile.summary.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="edu card">
              <p className="mono eyebrow">Education</p>
              <strong>{education.degree}</strong>
              <span className="muted">
                {education.school} · {education.period}
              </span>
            </div>
          </div>
          <div className="card why">
            <h3 className="mono why-title">Why work with me</h3>
            {profile.whyMe.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <h4 className="mono why-sub">What you can expect</h4>
            <ul className="check-list">
              {profile.expect.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="section-label mono expertise-label">{'// Core engineering expertise'}</h3>
        <div className="expertise-grid">
          {expertise.map((g) => (
            <div className="card cap" key={g.title}>
              <h3>{g.title}</h3>
              <ul className="check-list">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects({ onOpen }) {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <SectionHead
          index="02"
          title="Project Albums"
          kicker="Click any photo to open the album — renders, layout views, specifications and design decisions."
        />
        <Album projects={projects} onOpen={onOpen} />
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead index="03" title="Commercial Product Development" kicker="Hardware shipped at TRACTIAN and Carmel Tecnologia." />
        <div className="timeline">
          {experience.map((job) => (
            <article className="job" key={job.company}>
              <div className="job-meta">
                <span className="mono period">{job.period}</span>
                <h3>{job.company}</h3>
                {job.focus && <p className="job-focus">{job.focus}</p>}
                <p className="muted">
                  {job.role}
                  <br />
                  {job.location}
                </p>
              </div>
              {job.products && <ProductCards products={job.products} />}
              <div className="job-items">
                {job.items.map((it) => (
                  <div className="job-item" key={it.title}>
                    <h4>{it.title}</h4>
                    <p>{it.text}</p>
                    {it.metrics.length > 0 && (
                      <div className="metrics">
                        {it.metrics.map((m) => (
                          <span key={m} className="metric mono">
                            {m}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <SectionHead index="04" title="Tools & Skills" kicker="The tool-chain from concept to certified product." />
        <Tools groups={tools} />
        <h3 className="section-label mono skills-label">{'// Full skill set'}</h3>
        <div className="skill-grid">
          {skills.map((s) => (
            <div className="card skill" key={s.group}>
              <h3 className="mono">{s.group}</h3>
              <div className="chips">
                {s.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHead index="05" title="How I Work" kicker="A predictable path from requirements to production." />
        <ol className="process">
          {process.map((p) => (
            <li key={p.step} className="process-step">
              <span className="mono step-num">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
        <div className="deliverables card">
          <h3 className="mono">Typical deliverables</h3>
          <div className="chips">
            {['Schematics (PDF + native)', 'Layout source files', 'Gerber / ODB++', 'BOM with alternates', 'Pick-and-place', 'Fab & assembly drawings', 'STEP 3D model', 'Stack-up & impedance report', 'Bring-up / test report'].map(
              (d) => (
                <span key={d} className="chip">
                  {d}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" id="start-project">
      <div className="container contact-inner">
        <p className="eyebrow mono">06 · Start a project</p>
        <h2>Have a board to design, fix or take to production?</h2>
        <p className="muted">
          Send me your requirements on Upwork — a block diagram, a datasheet list or just an idea. I'll reply
          with an architecture proposal, the risks I see and a clear quote.
        </p>
        <div className="hero-cta center">
          <a className="btn btn-primary" href={profile.upwork} target="_blank" rel="noreferrer">
            Hire me on Upwork →
          </a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  // Projects are deep-linkable: #project-<id> opens that case study.
  const fromHash = () => {
    const id = window.location.hash.replace('#project-', '')
    const i = projects.findIndex((p) => p.id === id)
    return i >= 0 ? i : null
  }
  const [openIndex, setOpenIndex] = useState(fromHash)
  useEffect(() => {
    const onHash = () => setOpenIndex(fromHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  const [openImage, setOpenImage] = useState(0)
  const open = useCallback((i, image = 0) => {
    window.history.replaceState(null, '', `#project-${projects[i].id}`)
    setOpenImage(image)
    setOpenIndex(i)
  }, [])
  const close = useCallback(() => {
    window.history.replaceState(null, '', '#projects')
    setOpenIndex(null)
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Projects onOpen={open} />
        <Experience />
        <Skills />
        <Process />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner mono">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{profile.location}</span>
        </div>
      </footer>
      {openIndex !== null && (
        <ProjectModal project={projects[openIndex]} index={openIndex} startImage={openImage} onClose={close} />
      )}
    </>
  )
}
