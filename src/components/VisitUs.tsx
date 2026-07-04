'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Clock, Phone } from 'lucide-react'
import { business } from '@/data/business'

const hours = [
  { day: 'Tuesday – Friday', time: '7:00am – 2:00pm' },
  { day: 'Saturday – Sunday', time: '7:30am – 1:00pm' },
  { day: 'Monday', time: 'Closed' },
]

export default function VisitUs() {
  return (
    <section className="relative py-28 md:py-36 px-6 lg:px-10 overflow-hidden" id="visit">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1711672284661-bd70e38f31b2?auto=format&fit=crop&q=80&w=2000')",
        }}
        role="img"
        aria-label="Bakery display case with fresh pastries and chalkboard labels"
      />
      <div className="absolute inset-0 bg-secondary/80" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-cream rounded-[32px] p-10 md:p-14 shadow-2xl"
        >
          <span className="text-cta text-xs font-semibold uppercase tracking-[0.35em]">Visit Us</span>
          <h2 className="font-heading font-black text-secondary text-4xl md:text-5xl mt-4 mb-10 tracking-tight">
            Come Say Hi
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <MapPin size={22} className="text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-heading font-bold text-secondary text-sm mb-1">Where to find us</div>
                <div className="text-ink-soft text-sm leading-relaxed">{business.address}</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone size={22} className="text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-heading font-bold text-secondary text-sm mb-1">Give us a call</div>
                <a href={`tel:${business.phone}`} className="text-ink-soft text-sm hover:text-primary transition-colors">
                  {business.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-4 sm:col-span-2">
              <Clock size={22} className="text-primary shrink-0 mt-0.5" />
              <div className="w-full">
                <div className="font-heading font-bold text-secondary text-sm mb-2">Opening hours</div>
                <div className="grid gap-1.5">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm text-ink-soft max-w-xs">
                      <span>{h.day}</span>
                      <span className="font-medium text-secondary">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
