import BrandMark from './BrandMark.jsx'

export default function LoadingScreen() {
  return (
    <div className="loader-inner">
      <div className="loader-ring">
        <BrandMark size={64} />
      </div>
      <div className="loader-word" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <BrandMark size={22} spinning />
        ROAST&nbsp;&amp;&nbsp;RITUAL
      </div>
      <span className="label" style={{ color: 'rgba(244,235,221,0.4)' }}>
        brewing the ritual
      </span>
    </div>
  )
}