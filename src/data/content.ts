export const site = {
  name: 'Ascension',
  tagline: 'Frequency-inspired living for those becoming.',
  nav: [
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/#collections' },
    { label: 'Our Story', href: '/about' },
    { label: 'Contact', href: '/#newsletter' },
  ],
  footerTagline: 'Frequency happens within',
  footerMenus: [
    {
      heading: 'Shop',
      links: [
        { label: 'All Products', href: '/#products' },
        { label: 'Apparel', href: '/#products' },
        { label: 'Lifestyle', href: '/#products' },
        { label: 'Accessories', href: '/#products' },
      ],
    },
    {
      heading: 'Collections',
      links: [
        { label: 'Liminal', href: '/#collections' },
        { label: 'Solar', href: '/#collections' },
        { label: 'Aether', href: '/#collections' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'Our Story', href: '/about' },
        { label: 'Contact', href: '/#newsletter' },
        { label: 'FAQs', href: '#' },
      ],
    },
  ],
  footerLegal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
  copyright: `© ${new Date().getFullYear()} Ascension. All rights reserved.`,
};

export const hero = {
  image: '/images/hero-desktop.jpg',
  overlayOpacity: 0.2,
  height: 95,
  heading: 'Ascension',
  subheading: 'Frequency-inspired living',
  tagline: 'Transformation begins within.',
  buttonLabel: 'Explore the collection',
  buttonLink: '#collections',
};

export const philosophy = {
  label: 'Our philosophy',
  heading: ['Thoughtful design.', 'Meaningful living.'],
  description:
    'In a world filled with distraction and noise, Ascension offers meaningful reminders to slow down, reconnect, and live with intention.',
  buttonLabel: 'Learn our story',
  buttonLink: '#philosophy',
  image: '/images/philosophy-editorial.jpg',
  imageAlt: 'Flowing fabric backlit by sunrise over misty mountains',
};

export const collectionStory = {
  label: 'Our foundation collections',
  heading: 'Three paths. One journey.',
  cardHeight: 38,
  cardGap: 32,
  cards: [
    {
      title: 'Liminal',
      subtitle: 'The threshold',
      ctaLabel: 'Explore',
      href: '#collections',
      overlayOpacity: 0.25,
      image:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Solar',
      subtitle: 'The illumination',
      ctaLabel: 'Explore',
      href: '#collections',
      overlayOpacity: 0.2,
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Aether',
      subtitle: 'The expansion',
      ctaLabel: 'Explore',
      href: '#collections',
      overlayOpacity: 0.25,
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    },
  ],
};

export const featuredProducts = {
  label: 'Everyday reminders',
  heading: 'Essentials for presence and intention.',
  viewAllLabel: 'View all products',
  viewAllLink: '#products',
  products: [
    {
      title: 'Ascension Wrap',
      price: 148,
      image: '/images/products/ascension-wrap.jpg',
      href: '#',
    },
    {
      title: 'Ascension Yoga Mat',
      price: 128,
      image: '/images/products/ascension-yoga-mat.jpg',
      href: '#',
    },
    {
      title: 'Ascension Charm',
      price: 88,
      image: '/images/products/ascension-charm.png',
      href: '#',
    },
    {
      title: 'Tshirt-Black',
      price: 46,
      image: '/images/products/tshirt-black.png',
      href: '#',
    },
    {
      title: 'Tshirt-white',
      price: 46,
      image: '/images/products/tshirt-white.png',
      href: '#',
    },
  ],
};

export const editorialGrid = {
  stripHeight: 28,
  blocks: [
    {
      type: 'image' as const,
      size: 'medium' as const,
      image: '/images/editorial/ocean-coastline.jpg',
      alt: 'Ocean waves on rocky coastline at sunset',
    },
    {
      type: 'image' as const,
      size: 'medium' as const,
      image: '/images/editorial/woman-landscape.jpg',
      alt: 'Woman overlooking a mountain landscape at golden hour',
    },
    {
      type: 'text' as const,
      heading: ['Designed to', 'support the life', 'you are becoming.'],
      body: ['Apparel. Rituals. Objects.', 'Created with intention.'],
      buttonLabel: 'Explore the journey',
      buttonLink: '#products',
    },
    {
      type: 'image' as const,
      size: 'medium' as const,
      image: '/images/editorial/ascension-label.jpg',
      alt: 'Ascension woven label on natural fabric',
    },
    {
      type: 'image' as const,
      size: 'medium' as const,
      image: '/images/editorial/crystal-bracelets.jpg',
      alt: 'Crystal bracelets on wrist',
    },
  ],
};

export const newsletter = {
  backgroundImage: '/images/newsletter-bg.jpg',
  overlayOpacity: 0.48,
  label: 'Join the Ascension community',
  heading: 'Stay connected. Live intentionally.',
  subtext: 'Be the first to know about new collections, journal entries, and offerings.',
  placeholder: 'Enter your email',
  buttonLabel: 'Join the journey',
  successMessage: 'Thank you for joining. We will be in touch soon.',
};
