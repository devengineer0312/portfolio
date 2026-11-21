import Icon from './Icons.jsx'
import { asset } from '../asset.js'

// Commercial products shipped at an employer, shown above the job details.
// Each card leads with a 16:10 product image; without one, a device icon.
export default function ProductCards({ products, projects = [] }) {
  const titleOf = (id) => projects.find((p) => p.id === id)?.title
  return (
    <div className="products">
      {products.map((p) => (
        <article key={p.name} className="product">
          <div className="product-visual">
            {p.image ? (
              <img src={asset(p.image)} alt={p.name} loading="lazy" />
            ) : (
              <span className="product-icon">
                <Icon name={p.icon || 'chip'} size={56} />
              </span>
            )}
          </div>
          <div className="product-body">
            <p className="eyebrow mono">{p.kind}</p>
            <h4>{p.name}</h4>
            {p.pitch && <p className="product-pitch">{p.pitch}</p>}
            <ul className="product-facts">
              {p.facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="metrics">
              {p.contribution.map((c) => (
                <span key={c} className="metric mono">
                  {c}
                </span>
              ))}
            </div>
            {p.related?.some(titleOf) && (
              <div className="product-related">
                <span className="mono">Related portfolio work</span>
                {p.related.filter(titleOf).map((id) => (
                  <a key={id} href={`#project-${id}`}>
                    {titleOf(id)} →
                  </a>
                ))}
              </div>
            )}
            {(p.credit || p.link) && (
              <div className="product-foot mono">
                {p.credit && <span>{p.credit}</span>}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer">
                    {p.linkLabel || 'Product page'} ↗
                  </a>
                )}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
