'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { business } from '@/data/business'

const gridImages = [
  { src: 'https://images.unsplash.com/photo-1549590143-d5855148a9d5?auto=format&fit=crop&q=80&w=500', alt: 'Hands kneading sourdough on a floured wooden bench' },
  { src: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80&w=500', alt: 'A tray of fresh butter croissants' },
  { src: 'https://images.unsplash.com/photo-1711672284661-bd70e38f31b2?auto=format&fit=crop&q=80&w=500', alt: 'Bakery display case with pastries and chalkboard labels' },
  { src: 'https://images.unsplash.com/photo-1705972018470-a89eda1c6ce4?auto=format&fit=crop&q=80&w=500', alt: 'Warm-lit bakery shelves stacked with fresh bread' },
  { src: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?auto=format&fit=crop&q=80&w=500', alt: 'Sliced sourdough showing an open crumb' },
  { src: 'https://images.unsplash.com/photo-1676300186098-9b5ae9916e3c?auto=format&fit=crop&q=80&w=500', alt: 'A slice of carrot cake on a plate' },
]

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
}
const item = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export default function Philosophy() {
  return (
    <section className="bg-cream py-28 md:py-36 px-6 lg:px-10" id="story">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-cta text-xs font-semibold uppercase tracking-[0.35em]">Our Philosophy</span>
          <h2 className="font-heading font-black text-secondary text-5xl md:text-6xl mt-4 mb-8 tracking-tight" style={{ textWrap: 'balance' as any }}>
            {business.about.headline}
          </h2>
          <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-lg">
            {business.about.body}
          </p>
          <a
            href="#menu"
            className="inline-block mt-9 px-8 py-3.5 rounded-full border border-primary/30 text-primary text-xs font-semibold uppercase tracking-[0.25em] hover:bg-primary hover:text-cream hover:border-primary transition-all duration-300"
          >
            Explore The Range
          </a>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-3 gap-3"
        >
          {gridImages.map((img, i) => (
            <motion.div
              key={img.src}
              variants={item}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl overflow-hidden aspect-square ${i === 1 || i === 4 ? 'mt-6' : ''}`}
            >
              <Image src={img.src} alt={img.alt} fill sizes="200px" className="object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
