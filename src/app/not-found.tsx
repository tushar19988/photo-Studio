import React from "react";
import Link from "next/link";
import { Camera, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 text-center py-32">
      <div className="max-w-md mx-auto">
        <Camera className="w-12 h-12 text-amber-600 dark:text-amber-400 mx-auto mb-6 opacity-80" />
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-foreground mb-4">
          THIS MOMENT DOESN'T EXIST.
        </h1>
        <p className="text-sm font-light text-muted-foreground leading-relaxed mb-8">
          The page you are looking for may have moved or no longer exists.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-amber-700 dark:bg-amber-500 text-white dark:text-neutral-950 font-semibold text-xs uppercase tracking-wider transition-all"
          >
            Back Home
          </Link>
          <Link
            href="/portfolio"
            className="px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-foreground font-semibold text-xs uppercase tracking-wider transition-all"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
