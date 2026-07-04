'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { business } from '@/data/business'

const links = [
  { href: '#menu', label: 'Menu' },
  { href: '#story', label: 'Our Story' },
  { href: '#visit', label: 'Visit Us' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md shadow-[0_2px_20px_rgba(42,37,33,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#" className="flex flex-col leading-none group">
          <span
            className={`font-heading font-black text-2xl tracking-[0.12em] transition-colors duration-500 ${
              scrolled ? 'text-primary' : 'text-cream'
            }`}
          >
            REWENA
          </span>
          <span
            className={`text-[9px] font-body font-semibold tracking-[0.35em] uppercase transition-colors duration-500 ${
              scrolled ? 'text-ink-soft' : 'text-cream/70'
            }`}
          >
            Bakehouse &middot; Est. 2019
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70 ${
                scrolled ? 'text-secondary' : 'text-cream'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#visit"
            className={`inline-flex items-center px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest border transition-all duration-300 ${
              scrolled
                ? 'border-primary text-primary hover:bg-primary hover:text-cream'
                : 'border-cream/60 text-cream hover:bg-cream hover:text-primary'
            }`}
          >
            Find Us
          </a>
        </nav>

        <button
          onClick={() => setOpen(true)}
          className={`md:hidden ${scrolled ? 'text-primary' : 'text-cream'}`}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-primary z-[60] flex flex-col items-center justify-center gap-8"
        >
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-cream" aria-label="Close menu">
            <X size={28} />
          </button>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream font-heading text-3xl font-bold tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${business.phone}`}
            onClick={() => setOpen(false)}
            className="mt-4 px-8 py-3 rounded-full border border-cream/60 text-cream text-sm uppercase tracking-widest"
          >
            Call {business.phone}
          </a>
        </motion.div>
      )}
    </header>
  )
}
