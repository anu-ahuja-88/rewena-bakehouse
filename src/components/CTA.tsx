'use client'

import { motion } from 'framer-motion'
import { business } from '@/data/business'

export default function CTA() {
  return (
    <section className="bg-secondary py-24 px-6 lg:px-10 text-center" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="font-heading font-black text-cream text-4xl md:text-5xl tracking-tight mb-6" style={{ textWrap: 'balance' as any }}>
          The oven starts at 4am. Come find out why it's worth it.
        </h2>
        <p className="text-cream/65 text-base mb-9">
          {business.address}
        </p>
        <motion.a
          href={`tel:${business.phone}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="inline-block px-10 py-4 rounded-full bg-cta text-secondary text-xs font-bold uppercase tracking-[0.25em] hover:brightness-110 transition-all duration-300"
        >
          Call {business.phone}
        </motion.a>
      </motion.div>
    </section>
  )
}
