export default function BrandMark({ size = 40, className = '', spinning = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`brand-mark ${spinning ? 'spin' : ''} ${className}`}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="29" fill="none" stroke="currentColor" strokeOpacity="0.22" strokeWidth="2" />
      <circle cx="32" cy="32" r="29" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="182.2" strokeDashoffset="118" strokeLinecap="round" transform="rotate(-90 32 32)" />
      <g transform="rotate(-30 32 32)">
        <ellipse cx="32" cy="32" rx="12.5" ry="8.8" fill="var(--caramel, #B8753D)" />
        <ellipse cx="32" cy="32" rx="12.5" ry="8.8" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M32 27 c-4.2 3.2 0 6.4 0 9 c0 -2.6 4.2 -5.8 0 -9z" fill="currentColor" />
      </g>
      <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.85" />
    </svg>
  )
}