'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { business } from '@/data/business'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1613396874083-2d5fbe59ae79?auto=format&fit=crop&q=80&w=2400')",
        }}
        role="img"
        aria-label="Hands holding a freshly baked sourdough loaf wrapped in linen"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-primary/45 to-secondary/75" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.span
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-cta text-xs font-semibold uppercase tracking-[0.4em] mb-6"
        >
          Aro Valley, Wellington
        </motion.span>

        <motion.h1
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="font-heading font-black text-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] max-w-5xl"
          style={{ textWrap: 'balance' as any }}
        >
          {business.hero.headline}
        </motion.h1>

        <motion.p
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-7 text-cream/85 text-base sm:text-lg max-w-xl leading-relaxed font-light"
        >
          {business.hero.subheadline}
        </motion.p>

        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="px-9 py-4 rounded-full border border-cream/70 text-cream text-xs font-semibold uppercase tracking-[0.25em] hover:bg-cream hover:text-primary transition-colors duration-300"
          >
            {business.hero.ctaPrimary}
          </motion.a>
          <a
            href="#visit"
            className="text-cream/80 text-xs font-semibold uppercase tracking-[0.25em] hover:text-cream transition-colors duration-300"
          >
            {business.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream/70"
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  )
}
