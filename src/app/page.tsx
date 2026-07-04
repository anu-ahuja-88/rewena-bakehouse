import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Philosophy from '@/components/Philosophy'
import Menu from '@/components/Menu'
import Gallery from '@/components/Gallery'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import VisitUs from '@/components/VisitUs'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Philosophy />
      <Menu />
      <Gallery />
      <Stats />
      <Testimonials />
      <VisitUs />
      <CTA />
      <Footer />
    </main>
  )
}
