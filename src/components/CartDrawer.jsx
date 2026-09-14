import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, Trash2, ShoppingBag, Check, ArrowRight } from 'lucide-react'
import CoffeeArt from './CoffeeArt.jsx'
import { useCart } from '../hooks/useCart.jsx'
import { formatNaira } from '../data/coffees.js'

function CartItemRow({ item }) {
  const { setQty, removeItem } = useCart()
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      className="cart-item"
    >
      <div className="cart-item-art">
        <CoffeeArt coffee={item.coffee} />
      </div>
      <div style={{ minWidth: 0 }}>
        <h4 className="cart-item-name">{item.coffee.name}</h4>
        <p className="cart-item-meta">
          {item.size} · {item.temperature}
        </p>
        <div className="cart-item-qty">
          <button className="cart-qty-btn" onClick={() => setQty(item.key, item.qty - 1)} aria-label="Decrease quantity" data-hover>
            <Minus size={11} />
          </button>
          <span className="qty-val" style={{ fontSize: 13, minWidth: 22 }}>
            {item.qty}
          </span>
          <button className="cart-qty-btn" onClick={() => setQty(item.key, item.qty + 1)} aria-label="Increase quantity" data-hover>
            <Plus size={11} />
          </button>
          <button className="cart-remove" onClick={() => removeItem(item.key)} data-hover>
            Remove
          </button>
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div className="cart-item-price">{formatNaira(item.unit * item.qty)}</div>
        <button
          className="cart-remove"
          style={{ marginTop: 16 }}
          onClick={() => removeItem(item.key)}
          aria-label={`Remove ${item.coffee.name}`}
        >
          <Trash2 size={13} style={{ display: 'inline' }} />
        </button>
      </div>
    </motion.div>
  )
}

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, subtotal, subtotalLabel, clearCart } = useCart()
  const [placed, setPlaced] = useState(false)

  const close = () => {
    setIsOpen(false)
    setTimeout(() => setPlaced(false), 400)
  }

  const placeOrder = () => {
    setPlaced(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal-overlay"
            style={{ background: 'rgba(23,19,17,0.4)', zIndex: 1550 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <motion.aside
            className="cart-drawer"
            role="dialog"
            aria-label="Your order"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cart-head">
              <h3 className="cart-title">
                <ShoppingBag size={19} /> YOUR ORDER
                {items.length > 0 && <span className="cart-count-badge">{items.length}</span>}
              </h3>
              <button className="cart-close" onClick={close} aria-label="Close cart" data-hover>
                <X size={16} />
              </button>
            </div>

            <div className="cart-items">
              {items.length === 0 ? (
                <div className="cart-empty">
                  <div>
                    <div className="display">Your ritual is empty.</div>
                    <p style={{ marginTop: 10 }}>Add a coffee to begin the ceremony.</p>
                    <p style={{ marginTop: 24 }}>
                      <ArrowRight size={0} />
                    </p>
                  </div>
                </div>
              ) : (
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <CartItemRow key={item.key} item={item} />
                  ))}
                </AnimatePresence>
              )}
            </div>

            {items.length > 0 && (
              <div className="cart-foot">
                <AnimatePresence mode="wait">
                  {placed ? (
                    <motion.div
                      key="confirm"
                      className="cart-confirm"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="display" style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
                        <Check size={20} style={{ color: 'var(--chartreuse)' }} /> ORDER RECEIVED
                      </div>
                      <p>Your coffee ritual has been queued. This is a demo — no order was placed.</p>
                      <button
                        className="btn btn-ghost"
                        style={{ marginTop: 16, fontSize: 11 }}
                        onClick={() => {
                          clearCart()
                          setPlaced(false)
                        }}
                      >
                        START A NEW ORDER
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="summary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="cart-row">
                        <span>Subtotal</span>
                        <span>{subtotalLabel}</span>
                      </div>
                      <div className="cart-row">
                        <span>Service demo fee</span>
                        <span>₦0</span>
                      </div>
                      <div className="cart-total">
                        <span>TOTAL</span>
                        <span>{subtotalLabel}</span>
                      </div>
                      <button className="btn btn-solid cart-checkout" data-cursor="order" onClick={placeOrder}>
                        QUEUE ORDER <ArrowRight className="btn-arrow" size={15} />
                      </button>
                      <button
                        className="btn btn-ghost"
                        style={{ width: '100%', justifyContent: 'center', marginTop: 10, fontSize: 11 }}
                        onClick={clearCart}
                        data-hover
                      >
                        CLEAR CART
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}