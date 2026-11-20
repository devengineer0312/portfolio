import Icon from './Icons.jsx'
import { asset } from '../asset.js'

// Commercial products shipped at an employer, shown above the job details.
export default function ProductCards({ products }) {
  return (
    <div className="products">
      {products.map((p) => (
        <article key={p.name} className="product">
          <div className={`product-visual ${p.imageFit === 'photo' ? 'is-photo' : ''}`}>
            {p.image ? (
              <img src={asset(p.image)} alt={p.name} loading="lazy" />
            ) : (
              <span className="product-icon">
                <Icon name={p.icon || 'chip'} size={64} />
              </span>
            )}
          </div>
          <div className="product-body">
            <p className="eyebrow mono">{p.kind}</p>
            <h4>{p.name}</h4>
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
            <div className="product-foot mono">
              {p.credit && <span>{p.credit}</span>}
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer">
                  {p.linkLabel || 'Product page'} ↗
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
