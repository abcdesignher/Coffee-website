import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { motion } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CoffeeShowcase from './components/CoffeeShowcase.jsx'
import Menu from './components/Menu.jsx'
import CoffeeDetail from './components/CoffeeDetail.jsx'
import BrandStory from './components/BrandStory.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import AddToast from './components/AddToast.jsx'
import { useCart } from './hooks/useCart.jsx'
import { coffees } from './data/coffees.js'

export default function App() {
  const { addItem } = useCart()
  const [loading, setLoading] = useState(true)
  const [detailId, setDetailId] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, anchors: true })
    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  const detail = coffees.find((c) => c.id === detailId) || null

  const handleAddQuick = (coffee) => {
    addItem(coffee, { size: Object.keys(coffee.sizes)[1], temperature: coffee.temperature, qty: 1 })
  }

  const handleAddDetailed = (coffee, opts) => {
    addItem(coffee, opts)
    setDetailId(null)
  }

  return (
    <div className="grain">
      <CustomCursor />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.25 }}
      >
        <Hero />
        <CoffeeShowcase onOpenDetail={(id) => setDetailId(id)} />
        <Menu onOpenDetail={(id) => setDetailId(id)} onAdd={handleAddQuick} />
        <BrandStory />
      </motion.main>
      <Footer />
      <CoffeeDetail coffee={detail} onClose={() => setDetailId(null)} onAdd={handleAddDetailed} />
      <CartDrawer />
      <AddToast />

      {loading && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.9, ease: 'easeInOut' }}
          onAnimationComplete={() => setLoading(false)}
        >
          <LoadingScreen />
        </motion.div>
      )}
    </div>
  )
}