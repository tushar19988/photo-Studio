"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  price?: string;
}

export function ServiceCard({ title, description, image, slug, price }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Link href={`/services/${slug}`} className="block group">
        <Card className="overflow-hidden border-border-custom hover:border-accent-primary transition-all duration-300">
          <div className="relative h-64 w-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
            />
            {price && (
              <div className="absolute top-4 right-4 bg-bg-primary/90 text-text-primary px-3 py-1 text-sm font-mono rounded backdrop-blur-sm shadow-md">
                {price}
              </div>
            )}
          </div>
          
          <CardHeader className="p-6 pb-2">
            <CardTitle className="text-2xl text-text-primary group-hover:text-accent-primary transition-colors">
              {title}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-6 pt-0">
            <p className="text-text-muted font-body text-sm line-clamp-2">{description}</p>
          </CardContent>

          <CardFooter className="p-6 pt-0 flex items-center text-accent-primary font-mono text-sm group-hover:gap-3 gap-2 transition-all">
            <span>Explore Packages</span>
            <ArrowRight size={16} />
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
