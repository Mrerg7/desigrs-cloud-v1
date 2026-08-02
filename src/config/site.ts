export const SITE = {
  name: 'desigrs.cloud',
  host: 'desigrs.cloud',
  url: 'https://desigrs.cloud',
  title: 'desigrs.cloud | Cloud-Native Design Infrastructure',
  description:
    'desigrs.cloud is the premium domain for cloud-native design platforms, collaborative design systems, and AI-powered creative infrastructure. Available for acquisition.',
  email: 'sales@desertrich.com',
  askingPrice: 7500,
  askingPriceLabel: '$7,500',
  locale: 'en_US',
  publishedDate: '2026-08-02',
  googleSiteVerification: '',
} as const;

export const HERO_IMAGE = '/hero.jpg';
export const OG_IMAGE = `${SITE.url}/og.svg`;

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  'desigrs.cloud Domain Acquisition Inquiry',
)}&body=${encodeURIComponent(
  'Hello,\n\nI am interested in acquiring desigrs.cloud.\n\nIntended use:\nBudget range:\nTimeline:\n\nThank you.',
)}`;
