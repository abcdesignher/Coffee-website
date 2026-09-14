import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function BrandStory() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0.25, 1, 1])

  const mask = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.14 },
    }),
  }

  return (
    <section id="story" className="story" ref={ref}>
      <div className="story-ring" />
      <motion.div style={{ y, opacity }} className="story-inner">
        <motion.span className="label" variants={mask} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true, amount: 0.4 }}>
          // OUR IDEA
        </motion.span>
        <motion.span
          className="story-line"
          variants={mask}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true, amount: 0.4 }}
        >
          <em>Coffee is a pause.</em>
        </motion.span>
        <motion.span
          className="story-line alt"
          variants={mask}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true, amount: 0.4 }}
        >
          Not a pill to swallow.
        </motion.span>
        <motion.p
          className="story-copy"
          variants={mask}
          initial="hidden"
          whileInView="visible"
          custom={3}
          viewport={{ once: true, amount: 0.4 }}
        >
          ROAST &amp; RITUAL sees coffee as a ceremony worth experiencing rather than a drink
          to rush through. Every cup is roasted, ground and pulled with attention — so you
          can give it yours.
        </motion.p>
      </motion.div>
    </section>
  )
}