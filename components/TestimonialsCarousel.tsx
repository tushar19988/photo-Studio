"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
}

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {testimonials.map((t) => (
            <div key={t.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
              <div className="bg-bg-secondary p-8 rounded-lg h-full border border-border-custom flex flex-col justify-between cursor-grab active:cursor-grabbing">
                <div>
                  <div className="flex gap-1 mb-6 text-accent-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < t.rating ? "currentColor" : "none"} className={i < t.rating ? "" : "text-border-custom"} />
                    ))}
                  </div>
                  <p className="text-text-primary font-body text-lg italic mb-8">&quot;{t.content}&quot;</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-text-primary">{t.name}</h4>
                  {t.role && <p className="text-text-muted font-mono text-sm mt-1">{t.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex justify-end gap-4 mt-8">
        <button 
          onClick={scrollPrev} 
          className="w-12 h-12 rounded-full border border-border-custom flex items-center justify-center hover:bg-accent-primary hover:text-bg-primary hover:border-transparent transition-all"
        >
          &larr;
        </button>
        <button 
          onClick={scrollNext} 
          className="w-12 h-12 rounded-full border border-border-custom flex items-center justify-center hover:bg-accent-primary hover:text-bg-primary hover:border-transparent transition-all"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
