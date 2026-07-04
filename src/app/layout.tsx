import type { Metadata } from 'next'
import { business } from '@/data/business'
import './globals.css'

export const metadata: Metadata = {
  title: business.seo.title,
  description: business.seo.description,
  keywords: business.seo.keywords,
  openGraph: {
    title: business.seo.title,
    description: business.seo.description,
    siteName: business.name,
    type: 'website',
    locale: 'en_NZ',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: business.name,
  description: business.seo.description,
  telephone: business.phone,
  email: business.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: business.location,
    addressCountry: 'NZ',
  },
  areaServed: business.serviceAreas,
  priceRange: '$$',
}

// Tailwind's `/opacity` colour modifier (e.g. text-cream/60) only works if the
// CSS variable holds space-separated RGB channels, not a hex string. Converting
// here keeps business.ts readable (plain hex) while making every opacity utility
// used across components actually render instead of silently failing invisible.
function hexToRgbChannels(hex: string): string {
  const clean = hex.replace('#', '')
  const r = parseInt(clean.substring(0, 2), 16)
  const g = parseInt(clean.substring(2, 4), 16)
  const b = parseInt(clean.substring(4, 6), 16)
  return `${r} ${g} ${b}`
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cssVars = `
    :root {
      --color-primary: ${hexToRgbChannels(business.design.primaryColor)};
      --color-secondary: ${hexToRgbChannels(business.design.secondaryColor)};
      --color-cta: ${hexToRgbChannels(business.design.ctaColor)};
      --color-cream: ${hexToRgbChannels(business.design.creamColor)};
      --color-cream-raised: ${hexToRgbChannels(business.design.creamRaisedColor)};
      --color-ink-soft: ${hexToRgbChannels(business.design.inkSoftColor)};
      --font-heading: '${business.design.headingFont}', serif;
      --font-body: '${business.design.bodyFont}', sans-serif;
    }
  `

  return (
    <html lang="en-NZ">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href={business.design.googleFontsUrl} rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: cssVars }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
