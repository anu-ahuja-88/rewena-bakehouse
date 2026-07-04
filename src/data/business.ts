// ============================================================
// BUSINESS DATA. Rewena Bakehouse
// This is a CONCEPT/EXAMPLE build, not a real client.
// Business, owner, testimonials, and stats are all invented
// for demonstration purposes only. Copy is written in a real,
// grounded voice regardless.
// ============================================================

export interface BusinessData {
  name: string
  slug: string
  tagline: string
  description: string
  industry: string
  location: string

  phone: string
  email: string
  address: string
  bookingUrl?: string

  hero: {
    headline: string
    subheadline: string
    ctaPrimary: string
    ctaSecondary: string
    badge?: string
    cyclingWords: string[]
  }

  stats: Array<{ value: string; label: string }>

  services: Array<{
    icon: string
    title: string
    description: string
  }>

  about: {
    headline: string
    body: string
    credentials: string[]
  }

  process: Array<{
    step: string
    title: string
    description: string
  }>

  testimonials: Array<{
    name: string
    location: string
    rating: number
    text: string
  }>

  serviceAreas: string[]

  design: {
    primaryColor: string
    secondaryColor: string
    ctaColor: string
    creamColor: string
    creamRaisedColor: string
    inkSoftColor: string
    headingFont: string
    bodyFont: string
    googleFontsUrl: string
  }

  seo: {
    title: string
    description: string
    keywords: string
  }

  clientEmail?: string
  clientName?: string
}

export const business: BusinessData = {
  name: "Rewena Bakehouse",
  slug: "rewena-bakehouse",
  tagline: "Proper bread, made slow.",
  description:
    "A small Aro Valley bakery baking long-fermented sourdough and traditional rewena bread alongside French-style pastry, all from a single wood-fired oven.",
  industry: "Bakery",
  location: "Aro Valley, Wellington, New Zealand",

  phone: "022 483 1190",
  email: "hello@rewenabakehouse.co.nz",
  address: "14 Aro Street, Aro Valley, Wellington 6021",

  hero: {
    headline: "PROPER BREAD, MADE SLOW",
    subheadline:
      "Long-fermented sourdough and traditional rewena bread, baked fresh every morning in Aro Valley. No shortcuts, no additives, just flour, water, salt and time.",
    ctaPrimary: "View The Range",
    ctaSecondary: "Find Us",
    cyclingWords: ["Sourdough", "Rewena", "Viennoiserie"],
  },

  stats: [
    { value: "6", label: "Years Baking In Aro Valley" },
    { value: "40+", label: "Loaves Baked Fresh Daily" },
    { value: "500+", label: "Regulars Through The Door Each Week" },
  ],

  services: [
    {
      icon: "Wheat",
      title: "Sourdough",
      description: "Naturally leavened, 24-hour proved, baked in small batches every morning. Boule, sandwich loaf, and a rotating grain special.",
    },
    {
      icon: "CookingPot",
      title: "Rewena Bread",
      description: "Our take on the traditional Maori potato bread, made with a live rewena bug that's been going since we opened.",
    },
    {
      icon: "Croissant",
      title: "Viennoiserie",
      description: "Butter croissants, pain au chocolat, and a seasonal filled twist, laminated by hand three days a week.",
    },
    {
      icon: "CakeSlice",
      title: "Cakes & Slices",
      description: "Simple, honest bakes. Carrot cake, lemon slice, and whatever's in season, made in small trays so nothing sits around.",
    },
    {
      icon: "UtensilsCrossed",
      title: "Savouries",
      description: "Sausage rolls, pies, and a rotating focaccia topped with whatever came in from the Wednesday market that week.",
    },
    {
      icon: "Sparkles",
      title: "Seasonal Specials",
      description: "A short list that changes with the season. Follow along on Instagram to see what's coming out of the oven this week.",
    },
  ],

  about: {
    headline: "Slow. Local. Honest.",
    body:
      "Mona started Rewena Bakehouse in 2019 with one oven and her nan's rewena recipe. We proof our sourdough for the best part of a day because that's how long it actually takes to taste right. Our flour comes from a mill in the Wairarapa, our butter from Otaki, and our rewena bug has been fed every day since we opened the doors. Nothing here is rushed and nothing here is fake. If a loaf doesn't meet the bar, it doesn't go out. That's the whole business plan.",
    credentials: [],
  },

  process: [],

  testimonials: [
    {
      name: "Grant Ferris",
      location: "Brooklyn",
      rating: 5,
      text: "Been getting the sourdough boule every Friday for two years now. Same quality every single time, which is rarer than it should be.",
    },
    {
      name: "Aria Thompson",
      location: "Mount Cook",
      rating: 5,
      text: "Their croissants ruined every other croissant in Wellington for me. Get there before 8am on weekends or they're gone.",
    },
    {
      name: "Deepak Nair",
      location: "Wellington Central",
      rating: 5,
      text: "The rewena loaf on a Saturday is the closest thing to my own nan's bread I've found anywhere in the city. Worth the walk from town.",
    },
  ],

  serviceAreas: ["Aro Valley", "Brooklyn", "Mount Cook", "Wellington Central"],

  design: {
    primaryColor: "#9C4A32",
    secondaryColor: "#2A2521",
    ctaColor: "#B8863A",
    creamColor: "#F7F1E6",
    creamRaisedColor: "#FBF6EC",
    inkSoftColor: "#6B6058",
    headingFont: "Roboto Slab",
    bodyFont: "Poppins",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700;800;900&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap",
  },

  seo: {
    title: "Sourdough & Rewena Bakery Wellington | Rewena Bakehouse",
    description:
      "Long-fermented sourdough and traditional rewena bread, baked fresh daily in Aro Valley, Wellington. No shortcuts, no additives, just flour, water, salt and time.",
    keywords:
      "bakery aro valley, sourdough wellington, rewena bread wellington, artisan bakery wellington, wellington bakery",
  },

  clientEmail: "hello@rewenabakehouse.co.nz",
  clientName: "Mona Qi",
}
