export default function Logo({ size = 'md', variant = 'light' }) {
  const sizes = {
    sm: { width: 120, height: 40, textSize: 28, tagSize: 7, tagY: 38 },
    md: { width: 160, height: 50, textSize: 36, tagSize: 8, tagY: 48 },
    lg: { width: 220, height: 65, textSize: 48, tagSize: 10, tagY: 62 },
  }

  const s = sizes[size] || sizes.md

  const colors = variant === 'light'
    ? { gm: '#ffffff', n: 'rgba(255,255,255,0.45)', r: '#c8a250', accent: '#c8a250', tag: 'rgba(255,255,255,0.3)' }
    : { gm: '#1a2332', n: 'rgba(26,35,50,0.4)', r: '#c8a250', accent: '#c8a250', tag: 'rgba(26,35,50,0.4)' }

  return (
    <svg
      width={s.width}
      height={s.height}
      viewBox={`0 0 ${s.width} ${s.height}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="GMnR Consultants logo"
    >
      {/* Accent bar */}
      <rect x="0" y="0" width="3" height={s.textSize + 4} rx="1.5" fill={colors.accent} />

      {/* GM */}
      <text
        x="12"
        y={s.textSize}
        fontFamily="'DM Sans', 'Inter', Arial, sans-serif"
        fontSize={s.textSize}
        fontWeight="700"
        letterSpacing="1"
        fill={colors.gm}
      >
        GM
      </text>

      {/* n - lighter weight, different color */}
      <text
        x={s.textSize * 2.05 + 12}
        y={s.textSize}
        fontFamily="'DM Sans', 'Inter', Arial, sans-serif"
        fontSize={s.textSize * 0.85}
        fontWeight="400"
        fontStyle="italic"
        fill={colors.n}
      >
        n
      </text>

      {/* R - gold, bold */}
      <text
        x={s.textSize * 2.55 + 12}
        y={s.textSize}
        fontFamily="'DM Sans', 'Inter', Arial, sans-serif"
        fontSize={s.textSize}
        fontWeight="700"
        letterSpacing="1"
        fill={colors.r}
      >
        R
      </text>

      {/* Tagline */}
      <text
        x="14"
        y={s.tagY}
        fontFamily="'Inter', 'DM Sans', Arial, sans-serif"
        fontSize={s.tagSize}
        fontWeight="400"
        letterSpacing="3"
        fill={colors.tag}
        textTransform="uppercase"
      >
        CONSULTANTS
      </text>
    </svg>
  )
}
