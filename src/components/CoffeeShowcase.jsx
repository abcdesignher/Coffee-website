import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react'
import CoffeeArt from './CoffeeArt.jsx'
import { coffees, formatNaira } from '../data/coffees.js'

const sceneVariants = {
  enter: (dir) => ({ opacity: 0, x: 110 * dir, rotate: dir * 4, scale: 0.92 }),
  center: { opacity: 1, x: 0, rotate: 0, scale: 1 },
  exit: (dir) => ({ opacity: 0, x: -110 * dir, rotate: -dir * 3, scale: 0.94 }),
}

const bgFor = (c) =>
  c.style === 'dark'
    ? { background: 'radial-gradient(60% 60% at 50% 40%, #f4ebdd 0%, #ead9bf 60%, #d3bd9c 100%)' }
    : { background: 'radial-gradient(60% 60% at 50% 40%, #f7f1e5 0%, #efe1c8 55%, #dfc9a6 100%)' }

export default function CoffeeShowcase({ onOpenDetail }) {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const coffee = coffees[index]
  const total = coffees.length

  const go = useCallback(
    (next) => {
      setDir(next > index ? 1 : -1)
      setIndex(() =>
        next < 0 ? total - 1 : next >= total ? 0 : next
      )
    },
    [index, total]
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(index + 1)
      if (e.key === 'ArrowLeft') go(index - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, index])

  return (
    <section id="showcase" className="showcase">
      <motion.div
        className="showcase-bg"
        animate={bgFor(coffee)}
        transition={{ duration: 0.9 }}
      />
      <div className="showcase-inner">
        <div className="showcase-head">
          <div>
            <span className="label">// SELECT A RITUAL</span>
            <h2 className="display">
              Choose your <em style={{ fontStyle: 'italic', color: 'var(--caramel)' }}>ceremony</em>.
            </h2>
          </div>
          <div className="showcase-stats" aria-live="polite">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')} —{' '}
            {coffee.category[0]}
          </div>
        </div>

        <div className="showcase-stage" role="group" aria-label="Coffee showcase">
          <button
            className="showcase-nav-prev"
            onClick={() => go(index - 1)}
            aria-label="Previous coffee"
            data-hover
          >
            <ArrowLeft size={20} />
          </button>
          <button
            className="showcase-nav-next"
            onClick={() => go(index + 1)}
            aria-label="Next coffee"
            data-hover
          >
            <ArrowRight size={20} />
          </button>

          <AnimatePresence mode="popLayout" custom={dir} initial={false}>
            <motion.div
              key={coffee.id}
              custom={dir}
              variants={sceneVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="stage"
            >
              <button
                className="stage-art"
                data-cursor="view"
                onClick={() => onOpenDetail(coffee.id)}
                aria-label={`View ${coffee.name} details`}
                style={{ background: 'none', padding: 0 }}
              >
                <CoffeeArt coffee={coffee} />
              </button>

              <div className="stage-info left-big">
                <span className="stage-temp">{coffee.temperature}</span>
                <h3 className="stage-name">{coffee.name}</h3>
                <p className="stage-tag">{coffee.tagline}</p>
                <p className="stage-notes">{coffee.tastingNotes.join(' · ')}</p>
              </div>

              <div className="stage-info right-big">
                <div className="stage-price">{formatNaira(coffee.price)}</div>
                <div className="dots" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span key={n} className={n <= coffee.strength ? 'on' : 'off'}>
                      ●
                    </span>
                  ))}
                </div>
                <button className="btn btn-dark stage-order" data-hover onClick={() => onOpenDetail(coffee.id)}>
                  ORDER THIS COFFEE <ShoppingBag size={15} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="showcase-dots" role="tablist" aria-label="Coffees">
          {coffees.map((c, i) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={i === index}
              aria-label={c.name}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}