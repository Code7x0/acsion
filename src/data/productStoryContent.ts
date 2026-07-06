export type ProductAccordionItem = {
  id: string;
  title: string;
  content: string;
};

export type ProductStoryContent = {
  label: string;
  heading: string[];
  body: string[];
  lifestyleImage: string;
  lifestyleImageAlt: string;
  showDivider: boolean;
  defaultOpenId?: string;
  accordion: ProductAccordionItem[];
};

export const defaultProductStoryAccordion: ProductAccordionItem[] = [
  {
    id: 'materials',
    title: 'Materials',
    content: [
      'Thoughtfully sourced materials',
      'Signature Ascension emblem',
      'Designed for everyday ritual',
    ].join('\n'),
  },
  {
    id: 'care',
    title: 'Care',
    content: [
      'Avoid prolonged exposure to water.',
      'Store in a dry place when not in use.',
      'Clean gently using a soft cloth.',
    ].join('\n'),
  },
  {
    id: 'dimensions',
    title: 'Dimensions',
    content: [
      'See product details for sizing.',
      'Comfortable everyday wear',
    ].join('\n'),
  },
  {
    id: 'shipping',
    title: 'Shipping',
    content: [
      'Ships in 1–3 business days.',
      'Worldwide shipping available.',
      'Tracking provided after dispatch.',
    ].join('\n'),
  },
  {
    id: 'returns',
    title: 'Returns & Exchanges',
    content: [
      '30-day returns.',
      'Unused condition.',
      'Original packaging required.',
    ].join('\n'),
  },
];

export const ascensionCharmAccordion: ProductAccordionItem[] = [
  {
    id: 'materials',
    title: 'Materials',
    content: [
      'Natural gemstone beads',
      '8mm bead size',
      'Stretch cord',
      'Signature Ascension emblem',
      'Includes crystal guide card',
      'Includes QR meditation',
    ].join('\n'),
  },
  {
    id: 'care',
    title: 'Care',
    content: [
      'Avoid prolonged exposure to water.',
      'Store inside the provided pouch.',
      'Clean gently using a soft cloth.',
    ].join('\n'),
  },
  {
    id: 'dimensions',
    title: 'Dimensions',
    content: [
      'One Size Fits Most',
      'Approx. 7–7.5 inches',
      'Stretch design',
      'Comfortable everyday wear',
    ].join('\n'),
  },
  {
    id: 'shipping',
    title: 'Shipping',
    content: [
      'Ships in 1–3 business days.',
      'Worldwide shipping available.',
      'Tracking provided after dispatch.',
    ].join('\n'),
  },
  {
    id: 'returns',
    title: 'Returns & Exchanges',
    content: [
      '30-day returns.',
      'Unused condition.',
      'Original packaging required.',
    ].join('\n'),
  },
];

export const ascensionCharmStory: ProductStoryContent = {
  label: 'The Story Behind This Piece',
  heading: ['Every object', 'carries intention.'],
  body: [
    'The Ascension Charm was designed as a daily reminder of presence, purpose, and personal growth.',
    'Each charm represents one of three foundational energies—Liminal, Solar, or Aether—offering a tangible reminder to pause, reflect, and reconnect.',
    'Wear it as a quiet companion on your journey, or gift it as an expression of encouragement and intention.',
  ],
  lifestyleImage: '/images/products/story/lifestyle.jpg',
  lifestyleImageAlt: 'Gold Ascension charm on weathered wood and stone',
  showDivider: true,
  defaultOpenId: 'materials',
  accordion: ascensionCharmAccordion,
};

export function buildDefaultProductStory(title: string): ProductStoryContent {
  return {
    label: 'The Story Behind This Piece',
    heading: ['Every object', 'carries intention.'],
    body: [
      `${title} was designed as a daily reminder of presence, purpose, and personal growth.`,
      'Each piece is created with intention—offering a tangible reminder to pause, reflect, and reconnect with what matters.',
      'Wear it as a quiet companion on your journey, or gift it as an expression of encouragement and intention.',
    ],
    lifestyleImage: '/images/products/story/lifestyle.jpg',
    lifestyleImageAlt: 'Ascension piece styled on natural stone and wood',
    showDivider: true,
    defaultOpenId: 'materials',
    accordion: defaultProductStoryAccordion,
  };
}
