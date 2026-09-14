import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [label, setLabel] = useState(null)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 220, damping: 24 })
  const ry = useSpring(y, { stiffness: 220, damping: 24 })
  const dx = useSpring(x, { stiffness: 500, damping: 30 })
  const dy = useSpring(y, { stiffness: 500, damping: 30 })
  const visible = useRef(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const update = () => setEnabled(fine.matches)
    update()
    fine.addEventListener('change', update)
    return () => fine.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const body = document.body
    body.classList.add('cursor-hidden')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!visible.current) {
        visible.current = true
      }
    }
    const over = (e) => {
      const t = e.target
      const withLabel = t.closest('[data-cursor="view"], [data-cursor="order"]')
      const interactive = t.closest('button, a, [data-hover], .card-art-wrap, input')
      setHovering(!!interactive)
      setLabel(
        withLabel
          ? withLabel.getAttribute('data-cursor') === 'view'
            ? 'VIEW'
            : 'ORDER'
          : null
      )
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      body.classList.remove('cursor-hidden')
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div className="cursor-dot" style={{ x: dx, y: dy }} />
      <motion.div
        className={`cursor-ring ${hovering ? 'hover' : ''} ${label ? 'labeled' : ''}`}
        style={{ x: rx, y: ry, opacity: visible.current ? 1 : 0 }}
      />
      {label && (
        <motion.div
          className="cursor-label"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {label}
        </motion.div>
      )}
    </>
  )
}