import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThermometerSun, Snowflake, Plus } from 'lucide-react'
import CoffeeArt from './CoffeeArt.jsx'
import { coffees, CATEGORIES, formatNaira } from '../data/coffees.js'

function CoffeeCard({ coffee, onOpenDetail, onAdd }) {
  const TempIcon = coffee.temperature === 'Cold' || coffee.temperature === 'Iced' ? Snowflake : ThermometerSun
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 34 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 12 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="card"
      data-hover
    >
      <div className="card-art-wrap" onClick={() => onOpenDetail(coffee.id)} data-cursor="view">
        {coffee.featured && <span className="card-featured">Featured</span>}
        <CoffeeArt coffee={coffee} className="card-art" />
        <span className="card-view">View</span>
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3 className="card-name">{coffee.name}</h3>
          <span className="card-price">{formatNaira(coffee.price)}</span>
        </div>
        <p className="card-desc">{coffee.tagline}</p>
        <p className="card-notes">{coffee.tastingNotes.join(' · ')}</p>
        <div className="card-foot">
          <span className="card-temp">
            <TempIcon size={13} /> {coffee.temperature}
          </span>
          <button className="card-add" onClick={() => onAdd(coffee)} data-hover>
            ADD <Plus size={13} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default function Menu({ onOpenDetail, onAdd }) {
  const [active, setActive] = useState('ALL')
  const filtered =
    active === 'ALL' ? coffees : coffees.filter((c) => c.category.includes(active))

  return (
    <section id="menu" className="menu">
      <div className="menu-inner">
        <div className="menu-head">
          <span className="label">// FULL MENU</span>
          <h2 className="display">
            Nine ways to <em style={{ fontStyle: 'italic', color: 'var(--caramel)' }}>stop time</em>.
          </h2>
        </div>

        <div className="filter-row" role="tablist" aria-label="Coffee categories">
          {CATEGORIES.map((c) => (
            <motion.button
              key={c}
              role="tab"
              data-hover
              aria-selected={active === c}
              className={`filter-btn ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)}
              whileTap={{ scale: 0.96 }}
            >
              {c}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="menu-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                coffee={coffee}
                onOpenDetail={onOpenDetail}
                onAdd={onAdd}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}