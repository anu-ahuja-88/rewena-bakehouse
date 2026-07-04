'use client'

import { motion } from 'framer-motion'
import { business } from '@/data/business'

const stagger = { animate: { transition: { staggerChildren: 0.15 } } }
const item = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } }

export default function Stats() {
  if (business.stats.length === 0) return null

  return (
    <section className="bg-primary py-24 px-6 lg:px-10">
      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center"
      >
        {business.stats.map((s) => (
          <motion.div key={s.label} variants={item} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div className="font-heading font-black text-cream text-6xl md:text-7xl tracking-tight">{s.value}</div>
            <div className="text-cream/70 text-xs font-semibold uppercase tracking-[0.2em] mt-3 max-w-[16ch] mx-auto">
              {s.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
