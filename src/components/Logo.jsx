export default function Logo({ size = 'md', variant = 'light' }) {
  const sizes = {
    sm: { width: 120, height: 40 },
    md: { width: 160, height: 50 },
    lg: { width: 220, height: 65 },
  }

  const s = sizes[size] || sizes.md

  return (
    <img
      src="/gmnr-logo.png"
      alt="GMnR Consultants logo"
      width={s.width}
      height={s.height}
      style={{ objectFit: 'contain' }}
    />
  )
}
