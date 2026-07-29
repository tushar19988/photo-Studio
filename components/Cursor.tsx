"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-config";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop / non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Show cursor initially hidden
    gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 1 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleHoverEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if interactive element
      const isClickable = target.closest("a, button, input, [role='button']");
      const isGalleryImage = target.closest("[data-gallery-image='true']");

      if (isGalleryImage) {
        gsap.to(cursor, {
          scale: 4,
          duration: 0.3,
          ease: "power2.out",
        });
        if (textRef.current) {
          gsap.to(textRef.current, { opacity: 1, duration: 0.2 });
        }
      } else if (isClickable) {
        gsap.to(cursor, {
          scale: 1.5,
          backgroundColor: "var(--accent-primary)",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleHoverLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "var(--accent-secondary)", // Or antique gold
        duration: 0.3,
        ease: "power2.out",
      });
      if (textRef.current) {
        gsap.to(textRef.current, { opacity: 0, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseover", handleHoverEnter);
    document.body.addEventListener("mouseout", handleHoverLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseover", handleHoverEnter);
      document.body.removeEventListener("mouseout", handleHoverLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor fixed top-0 left-0 w-2 h-2 rounded-full bg-accent-secondary flex items-center justify-center font-body text-[0.25rem] font-semibold tracking-wider text-bg-primary"
      style={{ opacity: 1 }}
    >
      <div ref={textRef} className="opacity-0 uppercase">View</div>
    </div>
  );
}
