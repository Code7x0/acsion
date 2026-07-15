import type { ProductStoryContent } from './productStoryContent';
import { ascensionCharmStory, buildDefaultProductStory } from './productStoryContent';

export type ProductVariant = {
  id: string;
  name: string;
  stone: string;
  swatch: string;
  image: string;
  available: boolean;
};

export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductTrustBadge = {
  label: string;
};

export type ProductDetail = {
  handle: string;
  collectionLabel: string;
  title: string;
  price: number;
  description: string[];
  variants: ProductVariant[];
  images: ProductImage[];
  trustBadges: ProductTrustBadge[];
  story: ProductStoryContent;
};

const sharedTrustBadges: ProductTrustBadge[] = [
  { label: 'Ships in 1–3 Days' },
  { label: 'Secure Checkout' },
  { label: 'Worldwide Shipping' },
];

const galleryLabels = ['Front view', 'Detail', 'Lifestyle', 'Alternate angle'];

function buildGalleryImages(primary: string, extras: string[], title: string): ProductImage[] {
  return [primary, ...extras].map((src, index) => ({
    src,
    alt: `${title} — ${galleryLabels[index] ?? `View ${index + 1}`}`,
  }));
}

const ascensionCharmImages = buildGalleryImages(
  '/images/products/ascension-charm/1.jpg',
  [
    '/images/products/ascension-charm/2.jpg',
    '/images/products/ascension-charm/3.jpg',
    '/images/products/ascension-charm/4.jpg',
  ],
  'Ascension Charm',
);

export const ascensionCharm: ProductDetail = {
  handle: 'ascension-charm',
  collectionLabel: 'Ascension Collection',
  title: 'Ascension Charm',
  price: 88,
  description: [
    'A daily reminder of presence. Each charm is hand-strung with intention, carrying the energy of its stone into your ritual.',
    'Wear it as you move through your day — a quiet anchor to the version of yourself you are becoming.',
  ],
  variants: [
    {
      id: 'liminal',
      name: 'Liminal',
      stone: 'Labradorite',
      swatch: 'linear-gradient(135deg, #5c6678 0%, #8b9bb5 45%, #3d4654 100%)',
      image: '/images/products/ascension-charm/1.jpg',
      available: true,
    },
    {
      id: 'solar',
      name: 'Solar',
      stone: 'Sunstone',
      swatch: 'linear-gradient(135deg, #d4843a 0%, #f0b56a 45%, #a85f20 100%)',
      image: '/images/products/ascension-charm/2.jpg',
      available: true,
    },
    {
      id: 'aether',
      name: 'Aether',
      stone: 'Clear Quartz',
      swatch: 'linear-gradient(135deg, #ece8e1 0%, #ffffff 45%, #c9c3ba 100%)',
      image: '/images/products/ascension-charm/3.jpg',
      available: true,
    },
  ],
  images: ascensionCharmImages,
  trustBadges: sharedTrustBadges,
  story: ascensionCharmStory,
};

function buildSimpleProduct(
  handle: string,
  title: string,
  price: number,
  collection: string,
  image: string,
  extraImages: string[] = [],
): ProductDetail {
  return {
    handle,
    collectionLabel: `${collection} Collection`,
    title,
    price,
    description: [
      'Thoughtfully designed for daily ritual. Each piece is created with intention and crafted to become part of your practice.',
    ],
    variants: [
      {
        id: 'default',
        name: collection,
        stone: 'Standard',
        swatch: 'linear-gradient(135deg, #5c6678 0%, #8b9bb5 100%)',
        image,
        available: true,
      },
    ],
    images: buildGalleryImages(image, extraImages, title),
    trustBadges: sharedTrustBadges,
    story: buildDefaultProductStory(title),
  };
}

export const practiceMat: ProductDetail = {
  handle: 'ascension-practice-mat',
  collectionLabel: 'Ascension Collection',
  title: 'Ascension Practice Mat',
  price: 198,
  description: [
    'The Ascension Practice Mat was designed to support movement, presence, and intentional living. Featuring sacred geometry inspired by the Flower of Life and the Ascension symbol, this premium mat serves as a visual reminder to return to yourself with every practice.',
    'Crafted with a soft printed surface and natural rubber base, the Practice Mat provides comfort, stability, and grip for yoga, meditation, stretching, breathwork, and everyday ritual.',
    'The central light motif symbolizes inner awareness, while the Flower of Life pattern reflects connection, harmony, and the unfolding journey of transformation.',
  ],
  variants: [
    {
      id: 'dawnlight',
      name: 'Dawnlight',
      stone: 'Dawnlight',
      swatch: 'linear-gradient(135deg, #2e1f5c 0%, #6b4f9c 45%, #c7a14a 100%)',
      image: '/images/products/ascension-practice-mat/1.jpg',
      available: true,
    },
  ],
  images: buildGalleryImages(
    '/images/products/ascension-practice-mat/1.jpg',
    [
      '/images/products/ascension-practice-mat/2.jpg',
      '/images/products/ascension-practice-mat/3.jpg',
      '/images/products/ascension-practice-mat/4.jpg',
    ],
    'Ascension Practice Mat',
  ),
  trustBadges: sharedTrustBadges,
  story: buildDefaultProductStory('Ascension Practice Mat'),
};

export const productsByHandle: Record<string, ProductDetail> = {
  'ascension-practice-mat': practiceMat,
  'ascension-yoga-mat': practiceMat,
  'ascension-charm': ascensionCharm,
  'ascension-wrap': buildSimpleProduct(
    'ascension-wrap',
    'Ascension Wrap',
    148,
    'Liminal',
    '/images/products/ascension-wrap/1.jpg',
    [
      '/images/products/ascension-wrap/2.jpg',
      '/images/products/ascension-wrap/3.jpg',
      '/images/products/ascension-wrap/4.jpg',
    ],
  ),
  'tshirt-black': buildSimpleProduct(
    'tshirt-black',
    'Tshirt-Black',
    46,
    'Aether',
    '/images/products/tshirt-black/1.jpg',
    [
      '/images/products/tshirt-black/2.jpg',
      '/images/products/tshirt-black/3.jpg',
      '/images/products/tshirt-black/4.jpg',
    ],
  ),
  'tshirt-white': buildSimpleProduct(
    'tshirt-white',
    'Tshirt-white',
    46,
    'Solar',
    '/images/products/tshirt-white/1.jpg',
    [
      '/images/products/tshirt-white/2.jpg',
      '/images/products/tshirt-white/3.jpg',
      '/images/products/tshirt-white/4.jpg',
      '/images/products/tshirt-white/5.jpg',
      '/images/products/tshirt-white/6.jpg',
    ],
  ),
};

export function getProductByHandle(handle: string | undefined): ProductDetail | undefined {
  if (!handle) return undefined;
  if (handle === 'intention-bracelet') return ascensionCharm;
  return productsByHandle[handle];
}
