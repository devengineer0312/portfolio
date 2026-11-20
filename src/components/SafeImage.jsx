import { useEffect, useRef, useState } from 'react'
import { asset } from '../asset.js'

// Image that renders `fallback` when the file is missing or fails to load.
// Also catches the case where the image errored before React attached its
// onError handler (common in production builds with fast 404s).
export default function SafeImage({ src, alt, className, fallback }) {
  const [failed, setFailed] = useState(!src)
  const ref = useRef(null)

  useEffect(() => {
    const img = ref.current
    if (img && img.complete && img.naturalWidth === 0) setFailed(true)
  }, [src])

  if (failed) return fallback
  return <img ref={ref} className={className} src={asset(src)} alt={alt} onError={() => setFailed(true)} />
}
