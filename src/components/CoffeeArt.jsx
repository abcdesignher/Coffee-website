function Circles() {
  const rings = [
    { rx: 42, ry: 11 },
    { rx: 24, ry: 6 },
  ]
  return (
    <g className="cup-shadow">
      {rings.map((c, i) => (
        <ellipse
          key={i}
          cx={210}
          cy={498}
          rx={c.rx}
          ry={c.ry}
          fill="rgba(23,19,17,0.16)"
        />
      ))}
    </g>
  )
}

function Beans({ uid, n = 4 }) {
  const pos = [
    { x: 46, y: 380, r: 9, ry: 6.5, rot: 24 },
    { x: 372, y: 352, r: 11, ry: 8, rot: -18 },
    { x: 62, y: 150, r: 8, ry: 6, rot: 45 },
    { x: 356, y: 148, r: 7, ry: 5, rot: 12 },
  ].slice(0, n)
  return (
    <g>
      {pos.map((b, i) => (
        <g key={i} transform={`rotate(${b.rot} ${b.x} ${b.y})`}>
          <g className="float-bean" style={{ animationDelay: `${i * 1.3}s` }}>
            <ellipse cx={b.x} cy={b.y} rx={b.r} ry={b.ry} fill={`url(#${uid}-bean)`} />
            <path
              d={`M ${b.x - b.r * 0.55} ${b.y} Q ${b.x} ${b.y - b.ry * 0.7} ${b.x + b.r * 0.55} ${b.y}`}
              fill="none"
              stroke="#241510"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity="0.55"
            />
          </g>
        </g>
      ))}
    </g>
  )
}

function Steam({ uid, active, top }) {
  if (!active) return null
  const s = top - 14
  const curves = [
    `M 190 ${s} C 184 ${s - 20} 196 ${s - 30} 190 ${s - 50} C 184 ${s - 70} 196 ${s - 80} 190 ${s - 100}`,
    `M 214 ${s + 4} C 208 ${s - 18} 220 ${s - 26} 214 ${s - 48} C 208 ${s - 70} 220 ${s - 82} 214 ${s - 104}`,
    `M 236 ${s} C 231 ${s - 18} 241 ${s - 26} 236 ${s - 44} C 231 ${s - 62} 241 ${s - 70} 236 ${s - 88}`,
  ]
  return (
    <g>
      {curves.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={`url(#${uid}-steam)`}
          strokeWidth="6"
          strokeLinecap="round"
          className={`steam-l steam-${i + 1}`}
          style={{ animationDelay: `${i * 0.9}s` }}
        />
      ))}
    </g>
  )
}

function Ice({ uid, cx, cy }) {
  const cubes = [
    { x: -34, y: -24, w: 30, h: 26, rot: -8 },
    { x: 8, y: -32, w: 26, h: 24, rot: 6 },
    { x: -8, y: 8, w: 30, h: 25, rot: -4 },
    { x: 26, y: 0, w: 26, h: 26, rot: 10 },
  ]
  return (
    <g>
      {cubes.map((c, i) => (
        <g key={i} transform={`translate(${cx + c.x} ${cy + c.y}) rotate(${c.rot})`}>
          <rect x={-c.w / 2} y={-c.h / 2} width={c.w} height={c.h} rx="5" fill={`url(#${uid}-ice)`} />
          <line x1={-c.w / 2 + 4} y1={-c.h / 2 + 4} x2={-c.w / 2 + 12} y2={-c.h / 2 + 10} stroke="#fff" strokeOpacity="0.5" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      ))}
    </g>
  )
}

const TYPES = {
  espresso: {
    cup: 'demitasse',
    liquid: ['#6b432b', '#3a2318', '#241510'],
    crema: true,
    steam: true,
    ceramic: ['#3a2117', '#241510'],
    rim: '#8a5a38',
  },
  americano: {
    cup: 'demitasse',
    liquid: ['#8a5a38', '#5b3a26', '#412a1d'],
    crema: true,
    steam: true,
    ceramic: ['#3a2117', '#241510'],
    rim: '#a06b42',
  },
  cappuccino: {
    cup: 'mug',
    foam: '#E5D1B5',
    foamEdge: '#d9c09c',
    steam: true,
    ceramic: ['#fbf5ea', '#e9dcc5'],
    rim: '#E5D1B5',
    grain: true,
  },
  latte: {
    cup: 'mug',
    foam: '#E8D8BF',
    foamEdge: '#dcc79e',
    steam: true,
    ceramic: ['#fbf5ea', '#e9dcc5'],
    rim: '#E8D8BF',
  },
  'flat-white': {
    cup: 'mug',
    foam: '#EFE3CE',
    foamEdge: '#e2d0b2',
    steam: true,
    ceramic: ['#f8f1e3', '#eadcc4'],
    rim: '#EFE3CE',
  },
  mocha: {
    cup: 'mug',
    foam: '#241510',
    foamEdge: '#171311',
    steam: true,
    ceramic: ['#4A2C20', '#2a1810'],
    rim: '#241510',
    drizzle: '#B8753D',
    cream: true,
  },
  macchiato: {
    cup: 'mug',
    foam: '#E5D1B5',
    foamEdge: '#d9c09c',
    steam: true,
    ceramic: ['#f6e9d3', '#e7d3b3'],
    rim: '#E5D1B5',
    drizzle: '#B8753D',
    grain: true,
  },
  'cold-brew': {
    cup: 'glass',
    liquid: ['#2a1610', '#160c08', '#0d0705'],
    glassTop: '#241510',
    iced: true,
    straw: '#B8753D',
    ceramic: null,
  },
  'iced-latte': {
    cup: 'glass',
    layered: ['#E5D1B5', '#f4ecdf', '#5b3a26', '#241510'],
    glassTop: '#E5D1B5',
    iced: true,
    straw: '#C6D36A',
    ceramic: null,
  },
}

export default function CoffeeArt({ coffee, className = '' }) {
  const t = TYPES[coffee.art] || TYPES.espresso
  const uid = coffee.id

  const shape = t.cup
  const cx = 210
  let top, topRy, bottom, bottomRy, topRx, bottomRx, saucerCy
  if (shape === 'demitasse') {
    topRx = 96; topRy = 28; top = 316
    bottomRx = 74; bottomRy = 22; bottom = 448
    saucerCy = 456
  } else if (shape === 'mug') {
    topRx = 118; topRy = 32; top = 318
    bottomRx = 94; bottomRy = 26; bottom = 462
    saucerCy = 470
  } else {
    topRx = 92; topRy = 26; top = 246
    bottomRx = 68; bottomRy = 20; bottom = 458
    saucerCy = 458
  }

  const bodyPath = `M ${cx - topRx} ${top} A ${topRx} ${topRy} 0 0 0 ${cx + topRx} ${top} L ${cx + bottomRx} ${bottom} A ${bottomRx} ${bottomRy} 0 0 1 ${cx - bottomRx} ${bottom} Z`

  const rimFill = t.rim || t.foam || t.glassTop || '#E5D1B5'

  // glass liquid is drawn inside the body silhouette
  let glassLiquid = null
  if (t.cup === 'glass') {
    const layers = t.layered || t.liquid
    const seg = layers.length
    const total = bottom - top
    glassLiquid = layers.map((c, i) => {
      const topRed = total - ((i + 1) * total) / seg
      const h = total / seg + 4
      return (
        <path
          key={i}
          d={`M ${cx - bottomRx} ${top + topRed} L ${cx + bottomRx} ${top + topRed} L ${cx + bottomRx} ${Math.min(top + topRed + h, bottom)} L ${cx - bottomRx} ${Math.min(top + topRed + h, bottom)} Z`}
          fill={c}
          opacity={0.92}
        />
      )
    })
  }

  return (
    <svg
      viewBox="0 0 420 540"
      className={`coffee-art ${className}`}
      role="img"
      aria-label={`${coffee.name} visual`}
    >
      <defs>
        {t.cup === 'glass' ? (
          <>
            <linearGradient id={`${uid}-glass`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(23,19,17,0.05)" />
              <stop offset="55%" stopColor="rgba(255,255,255,0.24)" />
              <stop offset="100%" stopColor="rgba(23,19,17,0.1)" />
            </linearGradient>
          </>
        ) : (
          <linearGradient id={`${uid}-cup`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={t.ceramic[0]} />
            <stop offset="100%" stopColor={t.ceramic[1]} />
          </linearGradient>
        )}
        <linearGradient id={`${uid}-saucer`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={t.cup === 'glass' ? '#f3e8d5' : t.ceramic[0]} />
          <stop offset="100%" stopColor={t.cup === 'glass' ? '#ddc8a8' : t.ceramic[1]} />
        </linearGradient>
        {t.steam && (
          <linearGradient id={`${uid}-steam`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#f4ebdd" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#f4ebdd" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#f4ebdd" stopOpacity="0" />
          </linearGradient>
        )}
        {t.iced && (
          <linearGradient id={`${uid}-ice`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#d9c7ab" stopOpacity="0.85" />
          </linearGradient>
        )}
        {t.straw && (
          <linearGradient id={`${uid}-straw`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={t.straw} />
            <stop offset="100%" stopColor={t.straw === '#B8753D' ? '#8a4f24' : '#a3b052'} />
          </linearGradient>
        )}
        <linearGradient id={`${uid}-bean`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5b361f" />
          <stop offset="100%" stopColor="#241510" />
        </linearGradient>
        <radialGradient id={`${uid}-crema`} cx="0.5" cy="0.42" r="0.62">
          <stop offset="0%" stopColor="#c98a50" />
          <stop offset="55%" stopColor="#a56a3e" />
          <stop offset="100%" stopColor="#7c4b2c" />
        </radialGradient>
        {t.grain && (
          <filter id={`${uid}-grain`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.13 0 0 0 0 0.09 0 0 0 0.4 0" />
            <feComposite operator="in" in2="SourceGraphic" />
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
        )}
      </defs>

      <Circles />
      <Beans uid={uid} />

      {/* Saucer */}
      <ellipse cx={cx} cy={saucerCy} rx={topRx + 34} ry={26} fill={`url(#${uid}-saucer)`} />
      <ellipse cx={cx} cy={saucerCy} rx={topRx + 34} ry={26} fill="none" stroke="rgba(23,19,17,0.12)" strokeWidth="1.5" />
      <ellipse cx={cx} cy={saucerCy + 2} rx={topRx - 10} ry={20} fill="rgba(23,19,17,0.14)" />
      {shape !== 'glass' && <ellipse cx={cx} cy={saucerCy - 6} rx={bottomRx + 4} ry={18} fill="rgba(23,19,17,0.22)" />}

      {t.cup === 'glass' && (
        <>
          {/* back glass wall + straw behind */}
          {t.straw && <rect x={cx + 40} y={top - 128} width="13" height="150" rx="6.5" fill={`url(#${uid}-straw)`} transform={`rotate(8 ${cx + 46} ${top - 40})`} opacity="0.92" />}
          <path d={bodyPath} fill={`url(#${uid}-glass)`} />
          {glassLiquid}
          {/* front glass highlight */}
          <path d={`M ${cx - topRx * 0.62} ${top + 6} L ${cx - bottomRx * 0.5} ${bottom - 8} L ${cx - bottomRx * 0.5 + 12} ${bottom - 8} L ${cx - topRx * 0.62 + 10} ${top + 6} Z`} fill="#fff" opacity="0.28" />
          <path d={bodyPath} fill="none" stroke={`url(#${uid}-glass)`} strokeWidth="3" />
          {t.iced && <Ice uid={uid} cx={cx} cy={top + 42} />}
          {t.iced && <ellipse cx={cx} cy={top + 2} rx={topRx - 4} ry={topRy - 2} fill={t.glassTop} opacity="0.35" />}
        </>
      )}

      {t.cup !== 'glass' && (
        <>
          {/* back inner surface */}
          <ellipse cx={cx} cy={top} rx={topRx} ry={topRy} fill={rimFill} />
          {/* liquid / foam surface */}
          <ellipse cx={cx} cy={top + 1} rx={topRx - 6} ry={topRy - 4} fill={t.foam ? t.foam : `url(#${uid}-crema)`} />
          {t.grain && <ellipse cx={cx} cy={top + 1} rx={topRx - 6} ry={topRy - 4} filter={`url(#${uid}-grain)`} opacity="0.7" />}
          {t.cream && <ellipse cx={cx} cy={top + 2} rx={topRx - 16} ry={topRy - 8} fill="#6b432b" opacity="0.85" />}
          {t.cream && <ellipse cx={cx} cy={top + 3} rx={topRx - 42} ry={topRy - 12} fill="#b8753d" opacity="0.9" />}
          {/* cup body */}
          <path d={bodyPath} fill={`url(#${uid}-cup)`} />
          <ellipse cx={cx} cy={top} rx={topRx} ry={topRy} fill="none" stroke="rgba(23,19,17,0.18)" strokeWidth="2.5" />
          {/* ceramic highlight */}
          <path d={`M ${cx - topRx + 18} ${top + 8} C ${cx - topRx + 6} ${(top + bottom) / 2} ${cx - bottomRx + 6} ${bottom - 10} ${cx - bottomRx + 8} ${bottom - 4}`} fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="6" strokeLinecap="round" />
          {/* handle */}
          <path d={`M ${cx + bottomRx - 2} ${top + 26} C ${cx + topRx + 44} ${top + 24} ${cx + topRx + 46} ${bottom - 26} ${cx + bottomRx + 2} ${bottom - 12}`} fill={`url(#${uid}-cup)`} stroke="rgba(23,19,17,0.16)" strokeWidth="2" />
          {t.drizzle && (
            <g>
              {[0, 1, 2, 3].map((i) => (
                <path
                  key={i}
                  d={`M ${cx - topRx + 26 + i * 46} ${top + 4} q 12 -10 24 0 t 24 0`}
                  fill="none"
                  stroke={t.drizzle}
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.9"
                />
              ))}
            </g>
          )}
        </>
      )}

      <Steam uid={uid} active={t.steam} top={top} />
    </svg>
  )
}