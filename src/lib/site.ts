export const siteConfig = {
  name: 'David Theuri',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://davidtheuri.com',

  title: 'David Theuri | Technology Lawyer, IT Transactions, Privacy & AI Governance',
  description:
    'Kenyan-qualified Advocate with an LLM in Technology, Media & Telecommunications (QMUL) and IAPP certifications (CIPP/E, CIPM, AIGP), supporting regulated organisations across Africa, the UK and Europe.',

  email: process.env.CONTACT_EMAIL ?? 'gachura.theuri@gmail.com',
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL ?? '',

  social: {
    linkedin: 'https://linkedin.com/in/david-theuri-080a251a5',
  },

  nav: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Writing', href: '/insights' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
} as const
