'use client'

import { motion } from 'framer-motion'
import { Wheat, CookingPot, Croissant, CakeSlice, UtensilsCrossed, Sparkles, ArrowRight, type LucideIcon } from 'lucide-react'
import { business } from '@/data/business'

const icons: Record<string, LucideIcon> = {
  Wheat,
  CookingPot,
  Croissant,
  CakeSlice,
  UtensilsCrossed,
  Sparkles,
}

const stagger = {
  animate: { transition: { staggerChildren: 0.09 } },
}
const item = {
  initial: { opacity: 0, y: 34 },
  animate: { opacity: 1, y: 0 },
}

export default function Menu() {
  return (
    <section className="bg-cream-raised py-28 md:py-36 px-6 lg:px-10" id="menu">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <span className="text-cta text-xs font-semibold uppercase tracking-[0.35em]">What We Bake</span>
          <h2 className="font-heading font-black text-secondary text-4xl md:text-5xl mt-4 tracking-tight">
            Our Range
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {business.services.map((s) => {
            const Icon = icons[s.icon] ?? Sparkles
            return (
              <motion.div
                key={s.title}
                variants={item}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-cream rounded-3xl p-9 border border-secondary/[0.06] hover:border-primary/25 transition-colors duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                  <Icon size={22} className="text-primary group-hover:text-cream transition-colors duration-500" />
                </div>
                <h3 className="font-heading font-bold text-secondary text-xl mb-3">{s.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed mb-6">{s.description}</p>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read more <ArrowRight size={14} />
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
