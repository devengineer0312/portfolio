import { useEffect, useRef, useState } from 'react';
import './lightbox.css';

const pad = (n) => String(n).padStart(2, '0');

export default function ProjectModal({ project, index, total, onClose, onNav }) {
  const media = [
    ...project.images.map((src) => ({ type: 'img', src })),
    ...(project.video ? [{ type: 'video', src: project.video }] : []),
  ];
  const [cur, setCur] = useState(0);
  // Notes panel starts open on wide screens, closed on phones/tablets
  const [info, setInfo] = useState(() => window.innerWidth >= 1100);
  const rootRef = useRef(null);
  const stripRef = useRef(null);
  const touch = useRef(null);

  const count = media.length;
  const safeCur = Math.min(cur, count - 1);
  const item = media[safeCur];
  const step = (d) => setCur((c) => (c + d + count) % count);

  // Back to the first image whenever the project changes
  useEffect(() => {
    setCur(0);
  }, [project.id]);

  // Lock page scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    rootRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Keyboard: ←/→ images, Esc close, I notes
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') setCur((c) => (c + 1) % count);
      else if (e.key === 'ArrowLeft') setCur((c) => (c - 1 + count) % count);
      else if (e.key === 'i' || e.key === 'I') setInfo((v) => !v);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [count, onClose]);

  // Keep the active thumbnail centred in the filmstrip
  useEffect(() => {
    const strip = stripRef.current;
    const el = strip?.children[safeCur];
    if (strip && el) {
      strip.scrollTo({ left: el.offsetLeft - strip.clientWidth / 2 + el.clientWidth / 2, behavior: 'smooth' });
    }
  }, [safeCur, project.id]);

  // Preload neighbours so swiping feels instant
  useEffect(() => {
    [1, -1].forEach((d) => {
      const m = media[(safeCur + d + count) % count];
      if (m && m.type === 'img') new Image().src = m.src;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeCur, project.id]);

  // Swipe on touch screens
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) step(dx < 0 ? 1 : -1);
  };

  return (
    <div
      className={`lb ${info ? 'lb--info' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      tabIndex={-1}
      ref={rootRef}
    >
      <header className="lb__top">
        <div className="lb__title">
          <span className="lb__index">
            {pad(index + 1)} / {pad(total)}
          </span>
          <strong>{project.title}</strong>
        </div>
        <div className="lb__actions">
          <button className="lb__btn lb__btn--text" onClick={() => onNav(-1)} aria-label="Previous project">
            ← <span>Prev project</span>
          </button>
          <button className="lb__btn lb__btn--text" onClick={() => onNav(1)} aria-label="Next project">
            <span>Next project</span> →
          </button>
          <button
            className={`lb__btn ${info ? 'is-on' : ''}`}
            onClick={() => setInfo((v) => !v)}
            aria-label="Toggle project notes"
            aria-pressed={info}
            title="Project notes (I)"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
              <circle cx="10" cy="10" r="8.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 9v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              <circle cx="10" cy="6.2" r="1.1" fill="currentColor" />
            </svg>
          </button>
          <button className="lb__btn" onClick={onClose} aria-label="Close" title="Close (Esc)">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <div className="lb__body">
        <div className="lb__stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {item.type === 'img' ? (
            <img key={project.id + item.src} src={item.src} alt={`${project.title} — view ${safeCur + 1}`} draggable="false" />
          ) : (
            <video key={item.src} src={item.src} controls autoPlay muted loop playsInline />
          )}

          {count > 1 && (
            <>
              <button className="lb__arrow lb__arrow--l" onClick={() => step(-1)} aria-label="Previous image">
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <button className="lb__arrow lb__arrow--r" onClick={() => step(1)} aria-label="Next image">
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </>
          )}

          <span className="lb__counter">
            {pad(safeCur + 1)} <i>/</i> {pad(count)}
          </span>
        </div>

        <aside className="lb__panel" aria-hidden={!info}>
          <div className="lb__panel-inner">
            <p className="lb__eyebrow">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="lb__role">{project.role}</p>
            <p className="lb__summary">{project.summary}</p>

            <dl className="lb__specs">
              {project.specs.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>

            <h4>Engineering focus</h4>
            <ul className="lb__focus">
              {project.focus.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <ul className="lb__tags">
              {project.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {count > 1 && (
        <div className="lb__strip" ref={stripRef}>
          {media.map((m, i) => (
            <button
              key={m.src}
              className={i === safeCur ? 'is-active' : ''}
              onClick={() => setCur(i)}
              aria-label={m.type === 'video' ? 'Show video' : `Show image ${i + 1}`}
            >
              {m.type === 'img' ? (
                <img src={m.src} alt="" loading="lazy" draggable="false" />
              ) : (
                <span className="lb__thumb-video">
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M3 1.5v11l9-5.5z" fill="currentColor" />
                  </svg>
                  Video
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
