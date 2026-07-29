export const STUDIO_INFO = {
  name: "Shree Shyam Studio",
  tagline: "Stories That Live Forever.",
  subtitle: "Premium Wedding, Engagement & Event Photography Studio",
  address: "101 Shubham Elite, Eklingji Road, Behind Somnath Bus Stand, Sanand, Gujarat 382110",
  phone: "097243 22046",
  phoneRaw: "+919724322046",
  whatsapp: "919724322046",
  email: "contact@shreeshyamstudio.com",
  instagram: "@_shreeshyamstudio_",
  locationCity: "Sanand",
  locationState: "Gujarat",
};

export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  startingPrice: string;
  rawPrice: number;
  shortDescription: string;
  description: string;
  heroImage: string;
  inclusions: string[];
  idealFor: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "serv_wedding",
    name: "Wedding Photography",
    slug: "wedding-photography",
    startingPrice: "₹25,000 onwards",
    rawPrice: 25000,
    shortDescription: "Capturing the beauty, emotion, and grand significance of your wedding day with editorial precision.",
    description: "Our Wedding Photography Services are designed to preserve every sacred ritual, emotional glance, and joyous celebration. From intimate Haldi and Mehendi ceremonies to the majestic Pheras and Grand Reception, we tell your love story cinematically.",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    inclusions: [
      "Candid & Traditional Photography",
      "Cinematic Highlights Video",
      "High-Resolution Edited Digital Album",
      "Online Interactive Client Gallery",
      "Drone Aerial Coverage (Optional)",
    ],
    idealFor: "Weddings, Receptions, Multi-day Royal Ceremonies",
  },
  {
    id: "serv_engagement",
    name: "Engagement Photography",
    slug: "engagement-photography",
    startingPrice: "₹12,000 onwards",
    rawPrice: 12000,
    shortDescription: "Celebrating your ring ceremony and formal commitment with intimate, elegant storytelling.",
    description: "Our Engagement Photography Services are crafted to celebrate your love and commitment in a personal and elegant way. We capture authentic moments, emotional family blessings, and ring exchange rituals.",
    heroImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1600&auto=format&fit=crop",
    inclusions: [
      "Couples Ring Exchange Coverage",
      "Intimate Couple Portrait Session",
      "Edited Color-Graded Photos",
      "Digital Album Delivery",
    ],
    idealFor: "Engagement Ceremonies, Ring Exchanges, Roka Functions",
  },
  {
    id: "serv_birthday",
    name: "Birthday Photography",
    slug: "birthday-photography",
    startingPrice: "₹10,000 onwards",
    rawPrice: 10000,
    shortDescription: "Joyful and vibrant milestone photography preserving family memories and party celebrations.",
    description: "Our Birthday Photography Services capture the joy and excitement of your special day with high-quality images. We document candid smiles, decor details, cake cutting moments, and warm family togetherness.",
    heroImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1600&auto=format&fit=crop",
    inclusions: [
      "Full Party & Decor Coverage",
      "Candid Family & Guest Portraits",
      "Cake Cutting & Celebration Highlights",
      "Quick Digital Delivery",
    ],
    idealFor: "1st Birthdays, Milestone Celebrations, Theme Parties",
  },
  {
    id: "serv_prewedding",
    name: "Pre-Wedding Shoot",
    slug: "pre-wedding",
    startingPrice: "₹15,000 onwards",
    rawPrice: 15000,
    shortDescription: "Cinematic, romantic outdoor sessions before the wedding madness begins.",
    description: "Relaxed, artistic pre-wedding photo and video shoots at scenic resort locations or outdoor landscapes. Perfect for wedding save-the-date invites and wedding decor slideshows.",
    heroImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop",
    inclusions: [
      "Multiple Costume Changes",
      "Cinematic Teaser Reel (30-60 sec)",
      "High-Resolution Retouched Photos",
      "Location Assistance",
    ],
    idealFor: "To-be-wed couples looking for romantic outdoor portraits",
  },
  {
    id: "serv_event",
    name: "Event & Party Photography",
    slug: "event-photography",
    startingPrice: "₹8,000 onwards",
    rawPrice: 8000,
    shortDescription: "Professional coverage for anniversaries, baby showers, and cultural gatherings.",
    description: "Comprehensive event coverage capturing guest interactions, ritual highlights, and cultural ambiance with sharp professionalism.",
    heroImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop",
    inclusions: [
      "Event Ambience & Decor Shots",
      "Candid & Stage Group Photos",
      "Digital High-Res Image Gallery",
    ],
    idealFor: "Anniversaries, Srimant / Baby Showers, Housewarming",
  },
];

export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  category: "Weddings" | "Engagements" | "Birthdays" | "Pre-Wedding" | "Events" | "Portraits";
  location: string;
  date: string;
  coverImage: string;
  images: string[];
  description: string;
}

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "port_1",
    title: "The Royal Sanand Wedding",
    slug: "royal-sanand-wedding",
    category: "Weddings",
    location: "Shubham Elite, Sanand",
    date: "November 2025",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    ],
    description: "A grand multi-day Gujarati wedding affair filled with vibrant Pheras, emotional Vidai moments, and unforgettable family celebrations.",
  },
  {
    id: "port_2",
    title: "Sunset Engagement Story",
    slug: "sunset-engagement-story",
    category: "Engagements",
    location: "Sanand Countryside",
    date: "December 2025",
    coverImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
    ],
    description: "An intimate ring exchange ceremony surrounded by close family, bathed in warm golden-hour light.",
  },
  {
    id: "port_3",
    title: "Aarav's 1st Birthday Bash",
    slug: "aarav-first-birthday",
    category: "Birthdays",
    location: "Sanand Club, Gujarat",
    date: "January 2026",
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop",
    ],
    description: "A joyful jungle-themed 1st birthday celebration full of playful giggles and happy family moments.",
  },
  {
    id: "port_4",
    title: "Heritage Resort Pre-Wedding",
    slug: "heritage-resort-pre-wedding",
    category: "Pre-Wedding",
    location: "Heritage Resort, Gujarat",
    date: "February 2026",
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    ],
    description: "Cinematic pre-wedding portraits blending traditional royal architecture with modern romance.",
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  review: string;
  eventType: string;
  location: string;
  rating: number;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test_1",
    name: "Patel Family",
    review: "Shree Shyam Studio captured our daughter's wedding so beautifully. Every emotion during the Vidai and every grand moment of the Pheras was preserved perfectly. Highly recommended in Sanand!",
    eventType: "Wedding Photography",
    location: "Sanand, Gujarat",
    rating: 5,
  },
  {
    id: "test_2",
    name: "Rahul & Pooja",
    review: "Our engagement shoot was comfortable and stress-free. The photos turned out elegant and cinematic. Thank you for making our special day memorable!",
    eventType: "Engagement Shoot",
    location: "Ahmedabad / Sanand",
    rating: 5,
  },
  {
    id: "test_3",
    name: "Jignesh Shah",
    review: "Professionalism and quality at its best. They covered my son's 1st birthday party and delivered the album earlier than promised.",
    eventType: "Birthday Celebration",
    location: "Sanand",
    rating: 5,
  },
];

export const FAQ_DATA = [
  {
    question: "Where is Shree Shyam Studio located?",
    answer: "We are located at 101 Shubham Elite, Eklingji Road, behind Somnath Bus Stand, Sanand, Gujarat 382110. You can visit our studio or call us at 097243 22046.",
  },
  {
    question: "What photography services do you offer?",
    answer: "We specialize in Wedding Photography (₹25,000+), Engagement Ceremonies (₹12,000+), Birthday Parties (₹10,000+), Pre-Wedding Outdoor Shoots, and Special Event Coverage.",
  },
  {
    question: "How do I book a shoot for my wedding date?",
    answer: "You can send us an enquiry directly through our website booking form, click our WhatsApp button, or call us at 097243 22046 to check date availability.",
  },
  {
    question: "Do you travel outside Sanand for wedding shoots?",
    answer: "Yes, we cover weddings and events across Sanand, Ahmedabad, Gandhinagar, and surrounding districts of Gujarat.",
  },
  {
    question: "How long does album delivery take?",
    answer: "We provide quick digital previews within 3-5 days of the event, and full color-graded edited high-resolution albums within 2-3 weeks.",
  },
];
