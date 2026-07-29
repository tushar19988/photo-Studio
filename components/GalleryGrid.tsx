"use client";

import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap-config";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Photo {
  id: string;
  url: string;
  caption?: string;
  metadata?: string; // e.g. f/2.8 · 1/200s · ISO 400
}

interface GalleryGridProps {
  photos: Photo[];
}

export function GalleryGrid({ photos }: GalleryGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray<HTMLElement>(".gallery-item");
      images.forEach((img) => {
        gsap.fromTo(img, 
          { scale: 1.05, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, [photos]);

  const slides = photos.map(p => ({ src: p.url }));

  return (
    <>
      <div ref={containerRef} className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {photos.map((photo, idx) => (
          <div 
            key={photo.id} 
            className="gallery-item relative group break-inside-avoid cursor-none overflow-hidden rounded-md"
            data-gallery-image="true"
            onClick={() => {
              setPhotoIndex(idx);
              setLightboxOpen(true);
            }}
          >
            <img 
              src={photo.url} 
              alt={photo.caption || "Gallery Photo"} 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {photo.metadata && (
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-bg-primary/80 backdrop-blur-md px-3 py-1.5 rounded-sm border border-border-custom shadow-xl">
                  <span className="font-mono text-[10px] sm:text-xs text-text-muted tracking-wide">
                    {photo.metadata}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={slides}
      />
    </>
  );
}
