import type { ContactIconName } from '../components/ui/ContactIcon';

export const contactHero = {
  label: 'Contact',
  heading: ['Connection', 'is the beginning', 'of everything.'],
  body: "We're here to support you, answer your questions, and explore meaningful opportunities together.",
  image: '/images/contact/hero.jpg',
  imageAlt:
    'Sunlit stone and natural plaster room with a large arch opening onto a distant mountain valley at dawn',
  objectPosition: 'center right',
  objectPositionMobile: '68% center',
};

export const contactIntro = {
  heading: ['We believe in meaningful conversations', 'and lasting relationships.'],
  body: ["Whether you're a customer, collaborator, or future partner,", "we'd love to hear from you."],
  showDivider: true,
  showLotus: true,
};

type ContactMethod = {
  id: string;
  icon: ContactIconName;
  heading: string;
  primaryType: 'email' | 'address' | 'text';
  primary: string;
  addressLines?: string[];
  description: string[];
};

export const contactForm = {
  image: '/images/contact/form.jpg',
  imageAlt:
    'Sunlit natural plaster wall with a ceramic vase of dried botanicals on a stone pedestal, soft botanical shadows',
  label: 'Get in touch',
  heading: "Let's talk.",
  body: ["Send us a message and", "we'll get back to you", 'as soon as possible.'],
  subjectOptions: [
    'General Question',
    'Order Support',
    'Wholesale',
    'Collaboration',
    'Media',
    'Other',
  ],
  buttonText: 'Send message',
  success: {
    heading: 'Thank you.',
    body: "We've received your message and will respond as soon as possible.",
  },
  showLotus: true,
};

export const contactStudio = {
  label: 'Business Address',
  heading: ['8606 Marburg Manor Dr', 'Lutherville, MD 21093'],
  body: ['Open by appointment only.', 'We look forward to welcoming you.'],
  image: '/images/contact/studio.jpg',
  imageAlt:
    'Warm plaster studio wall with a large ceramic vase of dry botanical branches and a stone bowl on a natural oak table in morning sunlight',
  showDivider: true,
  showLotus: true,
  enableZoom: true,
};

export const contactMethods: ContactMethod[] = [
  {
    id: 'general',
    icon: 'lotus',
    heading: 'General Inquiries',
    primaryType: 'email',
    primary: 'greetings@ascensionritual.com',
    description: ['For product questions,', 'orders, and general support.'],
  },
  {
    id: 'retail',
    icon: 'geometry',
    heading: 'Retail & Spa Partnerships',
    primaryType: 'email',
    primary: 'wholesale@ascensionritual.com',
    description: ['Interested in carrying', 'Ascension?', '', "Let's connect."],
  },
  {
    id: 'visit',
    icon: 'pin',
    heading: 'Visit Us',
    primaryType: 'address',
    primary: '8606 Marburg Manor Dr, Lutherville, MD 21093',
    addressLines: ['8606 Marburg Manor Dr', 'Lutherville, MD 21093'],
    description: ['Open by appointment only.'],
  },
  {
    id: 'internal',
    icon: 'envelope',
    heading: 'Internal Inquiries',
    primaryType: 'email',
    primary: 'liz@ascensionritual.com',
    description: ['For team, media,', 'or internal matters.'],
  },
];
