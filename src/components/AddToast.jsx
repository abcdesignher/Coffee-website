import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import CoffeeArt from './CoffeeArt.jsx'
import { useCart } from '../hooks/useCart.jsx'
import { formatNaira } from '../data/coffees.js'

export default function AddToast() {
  const { draft } = useCart()
  return (
    <AnimatePresence>
      {draft && (
        <motion.div
          className="toast"
          role="status"
          initial={{ opacity: 0, y: 30, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="toast-art">
            <CoffeeArt coffee={draft.coffee} />
          </div>
          <div className="toast-text">
            <b>ADDED — {draft.coffee.name.toUpperCase()}</b>
            <br />
            {draft.size} · {draft.temperature} · {draft.qty} × {formatNaira(draft.coffee.sizes[draft.size])}
          </div>
          <Check size={15} style={{ color: 'var(--chartreuse)' }} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}