import { GalleryGrid } from "@/components/GalleryGrid";

// MOCK DATA for layout testing
const MOCK_GALLERY = [
  { id: "1", url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", metadata: "f/1.8 · 1/500s · ISO 100", category: "wedding" },
  { id: "2", url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070&auto=format&fit=crop", metadata: "f/2.8 · 1/250s · ISO 400", category: "wedding" },
  { id: "3", url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070&auto=format&fit=crop", metadata: "f/1.4 · 1/1000s · ISO 100", category: "prewedding" },
  { id: "4", url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop", metadata: "f/4.0 · 1/125s · ISO 800", category: "wedding" },
  { id: "5", url: "https://images.unsplash.com/photo-1530103862676-de8892bc952f?q=80&w=2070&auto=format&fit=crop", metadata: "f/2.0 · 1/400s · ISO 200", category: "birthday" },
];

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl md:text-7xl text-text-primary mb-6">The Gallery</h1>
          <p className="text-text-muted font-body text-xl">
            A curated selection of our finest work. Each frame is a story waiting to be told.
          </p>
        </div>
      </div>
      
      <GalleryGrid photos={MOCK_GALLERY} />
    </div>
  );
}
