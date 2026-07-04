'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { business } from '@/data/business'

const stagger = { animate: { transition: { staggerChildren: 0.12 } } }
const item = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }

export default function Testimonials() {
  if (business.testimonials.length === 0) return null

  return (
    <section className="bg-cream-raised py-28 md:py-36 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-cta text-xs font-semibold uppercase tracking-[0.35em]">Our Customers</span>
          <h2 className="font-heading font-black text-secondary text-4xl md:text-5xl mt-4 tracking-tight">
            In Their Words
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
        >
          {business.testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="bg-cream rounded-3xl p-9 border border-secondary/[0.06]"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-cta text-cta" />
                ))}
              </div>
              <p className="text-secondary text-base leading-relaxed mb-8 italic">&ldquo;{t.text}&rdquo;</p>
              <div>
                <div className="font-heading font-bold text-secondary text-sm">{t.name}</div>
                <div className="text-ink-soft text-xs uppercase tracking-wider mt-0.5">{t.location}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
