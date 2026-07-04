import { Instagram, Facebook } from 'lucide-react'
import { business } from '@/data/business'

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-cream/10 pt-16 pb-8 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
        <div>
          <span className="font-heading font-black text-cream text-xl tracking-[0.1em]">REWENA</span>
          <span className="block text-[9px] font-semibold tracking-[0.35em] uppercase text-cream/50 mt-1">
            Bakehouse &middot; Est. 2019
          </span>
          <p className="text-cream/50 text-sm mt-5 leading-relaxed max-w-xs">{business.description}</p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Rewena Bakehouse on Instagram" className="text-cream/50 hover:text-cream transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Rewena Bakehouse on Facebook" className="text-cream/50 hover:text-cream transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <div className="text-cream text-xs font-semibold uppercase tracking-widest mb-4">Explore</div>
          <div className="flex flex-col gap-2.5">
            <a href="#menu" className="text-cream/60 text-sm hover:text-cream transition-colors">Menu</a>
            <a href="#story" className="text-cream/60 text-sm hover:text-cream transition-colors">Our Story</a>
            <a href="#visit" className="text-cream/60 text-sm hover:text-cream transition-colors">Visit Us</a>
            <a href="#contact" className="text-cream/60 text-sm hover:text-cream transition-colors">Contact</a>
          </div>
        </div>

        <div>
          <div className="text-cream text-xs font-semibold uppercase tracking-widest mb-4">We Serve</div>
          <div className="flex flex-col gap-2.5">
            {business.serviceAreas.map((a) => (
              <span key={a} className="text-cream/60 text-sm">{a}</span>
            ))}
          </div>
        </div>

        <div>
          <div className="text-cream text-xs font-semibold uppercase tracking-widest mb-4">Get In Touch</div>
          <div className="flex flex-col gap-2.5">
            <a href={`tel:${business.phone}`} className="text-cream/60 text-sm hover:text-cream transition-colors">{business.phone}</a>
            <a href={`mailto:${business.email}`} className="text-cream/60 text-sm hover:text-cream transition-colors">{business.email}</a>
            <span className="text-cream/60 text-sm">{business.address}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-cream/10 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="text-cream/40 text-xs">&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</span>
        <a
          href="https://verrawebstudio.co.nz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity"
          style={{ color: 'rgba(247,241,230,0.55)' }}
        >
          Built by <span className="font-semibold text-cream">Verra Web Studio</span>
        </a>
      </div>
    </footer>
  )
}
