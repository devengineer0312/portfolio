import Icon from './Icons.jsx'
import { asset } from '../asset.js'

// Brand colour (and optional second colour for a two-tone gradient) as CSS vars.
const brandVars = (t) => ({ '--brand': t.color, '--brand2': t.color2 || t.color })

function ToolMark({ tool, size = 30 }) {
  if (tool.logo) {
    // Logo SVGs are single-colour; a CSS mask lets us tint them per brand.
    const url = `url(${asset(`/tools/${tool.logo}.svg`)})`
    return <span className="tool-logo" style={{ WebkitMaskImage: url, maskImage: url, width: size, height: size }} />
  }
  if (tool.icon === 'monogram')
    return (
      <span className="tool-mono mono" style={{ width: size, height: size, fontSize: size * 0.4 }}>
        {tool.mono}
      </span>
    )
  return <Icon name={tool.icon} size={size} />
}

// One-row toolbox at the top of the opening section, flowing automatically
// from right to left. The list is rendered twice so the loop is seamless;
// hovering pauses it.
export function HeroToolbox({ groups }) {
  const all = groups.flatMap((g) => g.items)
  const chips = (copy) =>
    all.map((t) => (
      <li key={`${copy}-${t.name}`} className="tool-chip" style={brandVars(t)} aria-hidden={copy > 0}>
        <ToolMark tool={t} size={18} />
        <span>{t.name}</span>
      </li>
    ))

  return (
    <section className="hero-toolbox" aria-label="Tools I use">
      <a href="#skills" className="hero-toolbox-label mono">
        Toolbox
      </a>
      <div className="marquee-viewport">
        <ul className="marquee-track">
          {chips(0)}
          {chips(1)}
        </ul>
      </div>
    </section>
  )
}

export default function Tools({ groups }) {
  return (
    <div className="tools">
      {groups.map((g) => (
        <div key={g.group} className={`tool-group ${g.wide ? 'is-wide' : ''}`} style={{ '--cols': g.items.length }}>
          <h3 className="mono tool-group-title">{g.group}</h3>
          <div className="tool-grid">
            {g.items.map((t) => (
              <div key={t.name} className="tool" style={brandVars(t)}>
                <div className="tool-mark">
                  <ToolMark tool={t} />
                </div>
                <span className="tool-name">{t.name}</span>
                {t.level && <span className="tool-badge mono">{t.level}</span>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
