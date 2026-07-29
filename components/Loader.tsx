"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      },
    });

    // Simple text reveal for the logo
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).to(loaderRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
      ease: "power2.inOut",
    });

  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary text-text-primary"
    >
      <div
        ref={textRef}
        className="font-display text-4xl font-bold tracking-tighter"
      >
        Shree Shyam
      </div>
    </div>
  );
}
