import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import CoffeeArt from './CoffeeArt.jsx'
import { formatNaira } from '../data/coffees.js'

export default function CoffeeDetail({ coffee, onClose, onAdd }) {
  const [size, setSize] = useState(coffee ? Object.keys(coffee.sizes)[1] : 'Medium')
  const [qty, setQty] = useState(1)
  const [temp, setTemp] = useState('Hot')

  useEffect(() => {
    if (coffee) {
      setSize(Object.keys(coffee.sizes)[1] || Object.keys(coffee.sizes)[0])
      setQty(1)
      setTemp(coffee.temperature === 'Hot' ? 'Hot' : coffee.temperature)
    }
  }, [coffee])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = coffee ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [coffee, onClose])

  if (!coffee) return null

  const sizes = Object.keys(coffee.sizes)
  const tempOptions = coffee.temperature === 'Hot' ? ['Hot', 'Iced'] : [coffee.temperature]
  const unit = coffee.sizes[size] || coffee.price
  const total = unit * qty

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${coffee.name} details`}
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose} aria-label="Close" data-hover>
            <X size={18} />
          </button>
          <div className="modal-grid">
            <div className="modal-art">
              <CoffeeArt coffee={coffee} />
            </div>
            <div className="modal-body">
              <span className="label">
                {String(sizes.indexOf(size)).padStart(2, '0')} — {coffee.category.join(' / ')}
              </span>
              <h3 className="modal-name">{coffee.name}</h3>
              <p className="modal-desc">{coffee.description}</p>

              <div className="modal-ing">
                <span className="label">Ingredients</span>
                <div className="ing-list">
                  {coffee.ingredients.map((i, n) => (
                    <span key={n}>
                      {n > 0 && <span style={{ color: 'var(--caramel)' }}> · </span>}
                      {i}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-tastes">
                <span className="label">Tasting notes</span>
                <div className="modal-tastes-list">
                  {coffee.tastingNotes.map((n) => (
                    <span key={n} className="taste-chip">
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <span className="opt-label">Strength</span>
                <div className="dots">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span key={n} className={n <= coffee.strength ? 'on' : 'off'}>
                      ●
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <span className="opt-label">Size</span>
                <div className="opt-group" role="radiogroup" aria-label="Size">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      role="radio"
                      aria-checked={size === s}
                      className={`chip ${size === s ? 'selected' : ''}`}
                      onClick={() => setSize(s)}
                    >
                      {s} — {formatNaira(coffee.sizes[s])}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <span className="opt-label">Temperature</span>
                  <div className="opt-group">
                    {tempOptions.map((t) => (
                      <button
                        key={t}
                        className={`chip ${temp === t ? 'selected' : ''}`}
                        onClick={() => setTemp(t)}
                        style={{ marginBottom: 0 }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="opt-label">Quantity</span>
                  <div className="qty-row">
                    <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity" data-hover>
                      <Minus size={14} />
                    </button>
                    <span className="qty-val">{qty}</span>
                    <button className="qty-btn" onClick={() => setQty(Math.min(20, qty + 1))} aria-label="Increase quantity" data-hover>
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="modal-tail">
                <div className="modal-total-row">
                  TOTAL
                  <span className="modal-total">{formatNaira(total)}</span>
                </div>
                <button
                  className="btn btn-solid"
                  data-cursor="order"
                  onClick={() => {
                    onAdd(coffee, { size, temperature: temp, qty })
                  }}
                >
                  ADD TO ORDER <ShoppingBag size={15} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}