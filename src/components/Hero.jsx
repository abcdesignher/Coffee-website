import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import CoffeeArt from './CoffeeArt.jsx'
import { coffees } from '../data/coffees.js'

const variants = {
  container: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 34 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.1, ease: 'easeOut' } },
  },
}

export default function Hero() {
  const heroRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 16 })
  const sy = useSpring(my, { stiffness: 60, damping: 16 })
  const rotY = useTransform(sx, [-0.5, 0.5], [11, -11])
  const rotX = useTransform(sy, [-0.5, 0.5], [-8, 8])

  const onMove = (e) => {
    const el = heroRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  const hero = coffees[0]

  return (
    <section id="top" className="hero" ref={heroRef} onMouseMove={onMove}>
      <div className="hero-ring hero-deco" />
      <div className="hero-ring2 hero-deco" />

      <motion.div
        className="hero-inner"
        variants={variants.container}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.div className="hero-eyebrow label" variants={variants.fadeUp}>
            EST. 2021 — LAGOS
          </motion.div>
          <motion.h1 className="display" variants={variants.fadeUp}>
            Coffee worth
            <br />
            <em>slowing&nbsp;down</em> for.
          </motion.h1>
          <motion.p className="hero-sub" variants={variants.fadeUp}>
            ROAST &amp; RITUAL treats coffee the way it deserves — as a pause. A small
            ceremony of heat, grind and foam, made to be felt, not rushed.
          </motion.p>
          <motion.div className="hero-cta" variants={variants.fadeUp}>
            <a href="#menu" className="btn btn-solid" data-hover>
              EXPLORE THE MENU <ArrowRight className="btn-arrow" size={15} />
            </a>
            <a href="#showcase" className="btn btn-ghost" data-hover>
              ORDER A COFFEE
            </a>
          </motion.div>
        </div>

        <motion.div className="hero-art-wrap" variants={variants.fadeUp}>
          <motion.div
            style={{ rotateY: rotY, rotateX: rotX, transformStyle: 'preserve-3d', perspective: 1000 }}
            initial={{ opacity: 0, y: 90, rotate: -4, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            data-cursor="view"
          >
            <CoffeeArt coffee={hero} className="hero-art" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span>SCROLL</span>
        <span className="hero-scroll-line" />
      </motion.div>
    </section>
  )
}