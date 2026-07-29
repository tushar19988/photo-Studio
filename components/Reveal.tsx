"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  variant?: "fadeUp" | "fadeDown" | "fadeIn" | "scale" | "clip";
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  variant = "fadeUp",
  duration = 0.6,
  delay = 0,
  className = "",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });

  const getVariants = () => {
    switch (variant) {
      case "fadeUp":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
      case "fadeDown":
        return {
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        };
      case "fadeIn":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.96 },
          visible: { opacity: 1, scale: 1 },
        };
      case "clip":
        return {
          hidden: { opacity: 0, clipPath: "inset(10% 0 10% 0)" },
          visible: { opacity: 1, clipPath: "inset(0% 0 0% 0)" },
        };
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration,
          delay,
          ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
