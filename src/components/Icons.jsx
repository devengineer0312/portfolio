// Line icons (24×24, stroke = currentColor) for tools and devices that have
// no brand logo.
const paths = {
  cube: (
    <>
      <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7z" />
      <path d="M3.5 7 12 11.5 20.5 7M12 11.5v10" />
    </>
  ),
  chip: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <rect x="9.5" y="9.5" width="5" height="5" />
      <path d="M9 2.5V6M12 2.5V6M15 2.5V6M9 18v3.5M12 18v3.5M15 18v3.5M2.5 9H6M2.5 12H6M2.5 15H6M18 9h3.5M18 12h3.5M18 15h3.5" />
    </>
  ),
  scope: (
    <>
      <rect x="2.5" y="4" width="19" height="14" rx="1.5" />
      <path d="M2.5 11h19M12 4v14" strokeOpacity=".35" />
      <path d="M4.5 11c1.2 0 1.6-4 2.8-4s1.6 8 2.8 8 1.6-8 2.8-8 1.6 8 2.8 8 1.6-4 2.8-4" />
      <path d="M8 21h8" />
    </>
  ),
  spectrum: (
    <>
      <path d="M3 20.5h18M3 20.5V3.5" />
      <path d="M5 19v-2M7.5 19v-4M10 19V9M12.5 19V5M15 19v-7M17.5 19v-3M20 19v-1.5" />
    </>
  ),
  logic: (
    <>
      <path d="M3 6h3v-2.5h4V6h4V3.5h4V6h3" />
      <path d="M3 12.5h5V10h6v2.5h7" />
      <path d="M3 19h2v-2.5h3V19h4v-2.5h3V19h6" />
    </>
  ),
  hil: (
    <>
      <rect x="2.5" y="8" width="7" height="8" rx="1" />
      <rect x="14.5" y="8" width="7" height="8" rx="1" />
      <path d="M9.5 10.5h5M14.5 13.5h-5" />
      <path d="m12.5 9 2 1.5-2 1.5M11.5 12l-2 1.5 2 1.5" />
    </>
  ),
  emc: (
    <>
      <path d="M12 3 4 6v5.5c0 4.6 3.4 8.3 8 9.5 4.6-1.2 8-4.9 8-9.5V6z" />
      <path d="M8 12.5c.8 0 .9-2 1.8-2s.9 4 1.9 4 .9-4 1.8-4 .9 2 1.8 2" />
    </>
  ),
  // FEA mesh on a bracket: stands in for simulation tools (Ansys).
  fea: (
    <>
      <path d="M3 20.5V5.5h6v9h12v6z" />
      <path d="M3 10.5h6M3 15.5h6M9 14.5v6M15 14.5v6" strokeOpacity=".55" />
      <path d="M3 5.5l6 5M3 10.5l6 4M3 15.5l6 5M9 14.5l6 6M15 14.5l6 6" strokeOpacity=".55" />
      <circle cx="21" cy="17.5" r="1" fill="currentColor" />
    </>
  ),
  // System-on-module seated on a carrier board.
  som: (
    <>
      <rect x="2.5" y="9" width="19" height="11" rx="1.2" />
      <rect x="6.5" y="4" width="11" height="8" rx="1" />
      <rect x="10" y="6" width="4" height="4" />
      <path d="M5 17h3M10 17h2M16 15.5v3M18.5 15.5v3" />
    </>
  ),
  // Data-acquisition module: sensor inputs feeding a sampled waveform.
  daq: (
    <>
      <rect x="6" y="4" width="15.5" height="16" rx="1.5" />
      <path d="M2.5 8H6M2.5 12H6M2.5 16H6" />
      <path d="M8.5 14.5l2-4 2 6 2-8 2 5 2-2" />
      <circle cx="18.5" cy="6.8" r=".8" fill="currentColor" />
    </>
  ),
  meter: (
    <>
      <rect x="4" y="2.5" width="16" height="19" rx="2" />
      <rect x="7" y="5.5" width="10" height="5" rx=".8" />
      <path d="M9 8h1.5M12 8h1M14.5 8h1" />
      <path d="m12.8 13-2.3 3.5h3l-2.3 3.5" />
    </>
  ),
  // Datalogger with a cellular antenna and signal waves.
  logger: (
    <>
      <rect x="3" y="10" width="15" height="10.5" rx="1.5" />
      <path d="M15 10V4.5" />
      <path d="M18 3.5c1 .9 1.5 2 1.5 3.2S19 9 18 9.9M20.2 1.8c1.5 1.3 2.3 3 2.3 4.9s-.8 3.6-2.3 4.9" />
      <path d="M6 16.5l2-2.5 2 1.5 2-3 2.5 2" />
    </>
  ),




  gateway: (
    <>
      <rect x="3" y="11" width="18" height="9" rx="1.5" />
      <path d="M7 11V4M12 11V6M17 11V4" />
      <circle cx="7" cy="15.5" r=".8" fill="currentColor" />
      <circle cx="10" cy="15.5" r=".8" fill="currentColor" />
      <path d="M14 15.5h4" />
    </>
  ),
}

export default function Icon({ name, size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
