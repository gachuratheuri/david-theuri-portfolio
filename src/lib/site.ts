export const siteConfig = {
  name: 'David Theuri',
  title: 'David Theuri | AI Governance & Privacy Law',
  description:
    'Kenyan-qualified legal professional specializing in privacy, data protection, and AI governance. LLM (QMUL).',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://david.theuri.com',
  email: process.env.CONTACT_EMAIL ?? 'gachura.theuri@gmail.com',
  social: {
    linkedin: 'https://linkedin.com/in/david-theuri-080a251a5',
  },
  cv: {
    privacyAiIntl: '/cv/david-theuri-privacy-ai-governance.pdf',
    legalComplianceIntl: '/cv/david-theuri-legal-compliance-international.pdf',
    legalComplianceKe: '/cv/david-theuri-legal-compliance-kenya.pdf',
  },
} as const
