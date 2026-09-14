import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react'
import BrandMark from './BrandMark.jsx'
import { useCart } from '../hooks/useCart.jsx'

const LINKS = [
  { href: '#menu', label: 'MENU', num: '01' },
  { href: '#story', label: 'STORY', num: '02' },
  { href: '#showcase', label: 'ORDER', num: '03' },
]

export default function Navbar() {
  const { count, setIsOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [bump, setBump] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (count === 0) return
    setBump(true)
    const t = setTimeout(() => setBump(false), 500)
    return () => clearTimeout(t)
  }, [count])

  return (
    <>
      <header className={`nav ${scrolled ? 'solid' : ''}`}>
        <div className="nav-inner">
          <motion.a
            href="#top"
            className="nav-brand"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <BrandMark size={30} />
            <span className="nav-word">Roast&nbsp;&amp;&nbsp;Ritual</span>
          </motion.a>

          <nav aria-label="Primary">
            <ul className="nav-links">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.22 + i * 0.08 }}
                >
                  <a className="nav-link" href={l.href}>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="nav-right">
            <motion.button
              className="nav-cart"
              data-hover
              onClick={() => setIsOpen(true)}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <ShoppingBag size={17} aria-hidden="true" />
              <span className="nav-cart-text label">ORDER</span>
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key="count"
                    className="nav-cart-count"
                    initial={{ scale: bump ? 1.4 : 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 16 }}
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
            <motion.button
              className="nav-burger"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <MenuIcon size={22} />
            </motion.button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              className="modal-close"
              style={{ background: 'transparent', color: 'var(--cream)', borderColor: 'rgba(244,235,221,0.25)' }}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="mobile-menu-link"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.09, duration: 0.5 }}
              >
                <span>{l.num}</span>
                {l.label}
              </motion.a>
            ))}
            <motion.div
              style={{ marginTop: 'auto', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.24em', color: 'rgba(244,235,221,0.45)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              LAGOS — YABA · OPEN DAILY 07:00 — 20:00
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}