export const shopHero = {
  label: 'Shop',
  heading: ['Objects created', 'with intention.'],
  subtext: 'Designed to become part of your ritual.',
  buttonLabel: 'Explore Collection',
  buttonLink: '/#collections',
  image: '/images/shop/hero.jpg',
  imageAlt:
    'Man in black Ascension tee overlooking a golden mountain valley at sunset',
  objectPosition: '72% center',
  objectPositionMobile: '85% center',
};

export const shopPhilosophy = {
  label: 'Shop Philosophy',
  heading: ['Every object carries energy.', 'Every ritual begins with intention.'],
  copy:
    'Ascension creates thoughtfully designed objects that quietly accompany your daily rituals, bringing presence, reflection and intention into everyday life.',
  backgroundColor: '#F7F3EC',
  showWatermark: true,
};

export type ShopProduct = {
  id: string;
  title: string;
  price: number;
  image: string;
  hoverImage?: string;
  href: string;
  collection: string;
  available: boolean;
  createdAt?: number;
};

export const shopProducts: ShopProduct[] = [
  {
    id: 'ascension-wrap',
    title: 'Ascension Wrap',
    price: 148,
    image: '/images/products/ascension-wrap.jpg',
    href: '#',
    collection: 'LIMINAL',
    available: true,
    createdAt: 5,
  },
  {
    id: 'ascension-yoga-mat',
    title: 'Ascension Yoga Mat',
    price: 128,
    image: '/images/products/ascension-yoga-mat.jpg',
    href: '#',
    collection: 'AETHER',
    available: true,
    createdAt: 4,
  },
  {
    id: 'ascension-charm',
    title: 'Ascension Charm',
    price: 88,
    image: '/images/products/ascension-charm.png',
    href: '#',
    collection: 'LIMINAL',
    available: true,
    createdAt: 3,
  },
  {
    id: 'tshirt-black',
    title: 'Tshirt-Black',
    price: 46,
    image: '/images/products/tshirt-black.png',
    href: '#',
    collection: 'AETHER',
    available: true,
    createdAt: 2,
  },
  {
    id: 'tshirt-white',
    title: 'Tshirt-white',
    price: 46,
    image: '/images/products/tshirt-white.png',
    href: '#',
    collection: 'SOLAR',
    available: true,
    createdAt: 1,
  },
];

export const shopProductGrid = {
  emptyMessage: 'There are currently no products available.',
  emptyCtaLabel: 'Return Home',
  emptyCtaLink: '/',
  sortOptions: [
    { id: 'all' as const, label: 'All Products' },
    { id: 'newest' as const, label: 'Newest' },
    { id: 'price-asc' as const, label: 'Price: Low to High' },
    { id: 'price-desc' as const, label: 'Price: High to Low' },
    { id: 'availability' as const, label: 'Availability' },
  ],
  productsPerPage: 12,
};
