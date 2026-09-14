import { Instagram, MapPin, Clock, Mail } from 'lucide-react'
import BrandMark from './BrandMark.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <BrandMark size={560} className="footer-mark" />
      <div className="footer-inner">
        <h2 className="footer-tag display">
          Coffee worth <em>slowing down</em> for.
        </h2>

        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <BrandMark size={40} />
              <span className="nav-word">ROAST&nbsp;&amp;&nbsp;RITUAL</span>
            </div>
            <p className="footer-meta" style={{ marginTop: 18, maxWidth: 320 }}>
              An experimental coffee room in Lagos. Single origins, deliberate methods,
              unhurried conversations.
            </p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            {[
              ['MENU', '#menu'],
              ['STORY', '#story'],
              ['ORDER', '#menu'],
            ].map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="footer-links" style={{ color: 'rgba(244,235,221,0.9)' }}>
            <p>
              <Clock size={14} style={{ display: 'inline', verticalAlign: '-3px', color: 'var(--caramel)', marginRight: 8 }} />
              OPENING HOURS
            </p>
            <p className="footer-meta" style={{ marginTop: 8 }}>
              MON — FRI · 07:00 — 20:00
              <br />
              SAT — SUN · 08:00 — 21:00
            </p>
          </div>
          <div style={{ color: 'rgba(244,235,221,0.9)' }}>
            <p>
              <MapPin size={14} style={{ display: 'inline', verticalAlign: '-3px', color: 'var(--caramel)', marginRight: 8 }} />
              LOCATION
            </p>
            <p className="footer-meta" style={{ marginTop: 8 }}>
              14 Awolowo Rd, Yaba
              <br />
              Lagos, Nigeria
            </p>
            <p style={{ marginTop: 18 }}>
              <Instagram size={14} style={{ display: 'inline', verticalAlign: '-3px', color: 'var(--caramel)', marginRight: 8 }} />
              CONTACT
            </p>
            <p className="footer-meta" style={{ marginTop: 8 }}>
              <a href="mailto:hello@roastandritual.ng" style={{ color: 'inherit' }}>
                hello@roastandritual.ng
              </a>
              <br />@roastandritual
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 ROAST &amp; RITUAL</span>
          <span>LAGOS — A FRONTEND PROTOTYPE</span>
          <span>
            <Mail size={12} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 6 }} />
            NO REAL ORDERS
          </span>
        </div>
      </div>
    </footer>
  )
}