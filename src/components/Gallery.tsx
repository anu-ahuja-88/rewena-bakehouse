'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const favourites = [
  {
    title: 'Sourdough Boule',
    note: 'Our best seller, gone most days by 10am.',
    src: 'https://images.unsplash.com/photo-1549413468-cd78edb7e75c?auto=format&fit=crop&q=80&w=900',
    alt: 'A rustic dark-crusted sourdough boule on a wooden board',
  },
  {
    title: 'Weekend Ritual',
    note: 'Flat white and a warm croissant. Come sit in.',
    src: 'https://images.unsplash.com/photo-1529942458412-eda69f76291d?auto=format&fit=crop&q=80&w=900',
    alt: 'Coffee and a pastry on a cafe table',
  },
  {
    title: 'In The Bakehouse',
    note: 'Everything baked fresh before sunrise.',
    src: 'https://images.unsplash.com/photo-1705972018470-a89eda1c6ce4?auto=format&fit=crop&q=80&w=900',
    alt: 'Warm-lit bakery shelves stacked with fresh bread',
  },
]

const stagger = { animate: { transition: { staggerChildren: 0.12 } } }
const item = { initial: { opacity: 0, y: 36 }, animate: { opacity: 1, y: 0 } }

export default function Gallery() {
  return (
    <section className="bg-cream py-28 md:py-36 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black text-secondary text-4xl md:text-5xl tracking-tight mb-14 text-center"
        >
          What People Come Back For
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
        >
          {favourites.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[28px] overflow-hidden aspect-[4/5]"
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="font-heading font-bold text-cream text-2xl mb-1.5">{f.title}</h3>
                <p className="text-cream/75 text-sm leading-relaxed">{f.note}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
