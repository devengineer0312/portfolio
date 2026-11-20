// Decorative PCB-trace artwork for the hero: 45° routed traces, vias and
// a QFP footprint, with a few "signals" animating along the copper.
const traces = [
  'M0 120 H180 L240 180 H420 L470 230 H640',
  'M0 160 H150 L210 220 H400 L450 270 H640',
  'M0 400 H120 L180 340 H330 L380 290 H520',
  'M0 440 H160 L220 380 H340',
  'M1200 90 H1010 L960 140 H820 L780 180',
  'M1200 130 H1030 L980 180 H860',
  'M1200 470 H1040 L990 420 H880 L830 370 H760',
  'M1200 510 H1020 L970 460 H900',
  'M760 40 V110 L800 150 V230',
  'M860 560 V480 L900 440 V380',
]

const vias = [
  [640, 230], [640, 270], [520, 290], [340, 380], [780, 180], [860, 180],
  [760, 370], [900, 460], [800, 230], [900, 380],
]

export default function TraceBackground() {
  return (
    <svg className="trace-bg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="var(--grid)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="1200" height="600" fill="url(#grid)" />
      {traces.map((d, i) => (
        <g key={i}>
          <path d={d} className="trace" />
          {i % 3 === 0 && <path d={d} className="trace-signal" style={{ animationDelay: `${i * 0.7}s` }} />}
        </g>
      ))}
      {vias.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="7" className="via-ring" />
          <circle cx={x} cy={y} r="3" className="via-hole" />
        </g>
      ))}
      {/* QFP footprint */}
      <g transform="translate(980 250)" className="footprint">
        <rect x="0" y="0" width="110" height="110" rx="4" />
        {Array.from({ length: 9 }).map((_, i) => (
          <g key={i}>
            <rect x={10 + i * 11} y="-14" width="5" height="10" />
            <rect x={10 + i * 11} y="114" width="5" height="10" />
            <rect x="-14" y={10 + i * 11} width="10" height="5" />
            <rect x="114" y={10 + i * 11} width="10" height="5" />
          </g>
        ))}
        <circle cx="12" cy="12" r="3" />
      </g>
    </svg>
  )
}
