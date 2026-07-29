// Placeholder API fetchers since backend is not yet available.
// This will simulate the Node.js/MySQL responses.

const MOCK_SERVICES = [
  { slug: "wedding", title: "Wedding Photography", price: "₹25,000", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" },
  { slug: "birthday", title: "Birthday Photography", price: "₹10,000", image: "https://images.unsplash.com/photo-1530103862676-de88927954da?auto=format&fit=crop&q=80" },
  { slug: "engagement", title: "Engagement Photography", price: "₹12,000", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80" },
];

const MOCK_GALLERY = [
  { id: 1, url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80", metadata: "f/2.8 · 1/200s · ISO 400 · Sanand" },
  { id: 2, url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80", metadata: "f/1.8 · 1/500s · ISO 100 · Ahmedabad" },
  { id: 3, url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80", metadata: "f/4.0 · 1/60s · ISO 800 · Sanand" },
  { id: 4, url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80", metadata: "f/2.8 · 1/125s · ISO 200 · Gujarat" },
];

export async function getServices() {
  // Simulate network delay
  // await new Promise(resolve => setTimeout(resolve, 500));
  return MOCK_SERVICES;
}

export async function getServiceBySlug(slug: string) {
  return MOCK_SERVICES.find(s => s.slug === slug);
}

export async function getGallery() {
  return MOCK_GALLERY;
}

export async function getTestimonials() {
  return [
    { id: 1, name: "Rahul & Priya", text: "The team at Shree Shyam Studio captured our wedding beautifully. The cinematic touch is surreal!", rating: 5 },
    { id: 2, name: "Amit Kumar", text: "Booked them for my daughter's first birthday. Very professional and amazing candid shots.", rating: 5 },
  ];
}
