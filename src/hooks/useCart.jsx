import { createContext, useContext, useMemo, useState, useCallback, useEffect } from 'react'
import { formatNaira } from '../data/coffees'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [draft, setDraft] = useState(null)

  const addItem = useCallback(
    (coffee, { size, temperature, qty }) => {
      const unit = coffee.sizes[size] || coffee.price
      const key = `${coffee.id}::${size}::${temperature}`
      setItems((prev) => {
        const found = prev.find((i) => i.key === key)
        if (found) {
          return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + qty, unit } : i))
        }
        return [...prev, { key, coffee, size, temperature, qty, unit }]
      })
      setDraft({ coffee, size, temperature, qty })
      setIsOpen(true)
    },
    []
  )

  const removeItem = useCallback((key) => {
    setItems((prev) => prev.filter((i) => i.key !== key))
  }, [])

  const setQty = useCallback((key, qty) => {
    setItems((prev) =>
      prev.map((i) => (i.key === key ? { ...i, qty: Math.max(0, Math.min(20, qty)) } : i))
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const count = useMemo(() => items.reduce((n, i) => n + i.qty, 0), [items])
  const subtotal = useMemo(() => items.reduce((n, i) => n + i.qty * i.unit, 0), [items])

  useEffect(() => {
    if (draft !== null) {
      const t = setTimeout(() => setDraft(null), 2600)
      return () => clearTimeout(t)
    }
  }, [draft])

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      setQty,
      clearCart,
      isOpen,
      setIsOpen,
      draft,
      count,
      subtotal,
      subtotalLabel: formatNaira(subtotal),
    }),
    [items, addItem, removeItem, setQty, clearCart, isOpen, draft, count, subtotal]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}