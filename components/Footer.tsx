import Link from "next/link";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bg-secondary text-text-primary pt-20 pb-12 px-6 border-t border-border-custom mt-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="font-serif text-2xl font-bold tracking-wide">
            SHREE SHYAM <span className="font-light text-accent">STUDIO</span>
          </Link>
          <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
            Stories That Live Forever. Premium Wedding, Engagement & Event Photography Studio in Sanand, Gujarat.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent hover:underline"
            >
              <span>Start Your Story</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-3">
          <h4 className="font-serif text-lg font-semibold text-text-primary mb-2">Services</h4>
          <Link href="/services/wedding-photography" className="text-sm text-text-secondary hover:text-accent transition-colors">
            Wedding Photography
          </Link>
          <Link href="/services/engagement-photography" className="text-sm text-text-secondary hover:text-accent transition-colors">
            Engagement Photography
          </Link>
          <Link href="/services/birthday-photography" className="text-sm text-text-secondary hover:text-accent transition-colors">
            Birthday Photography
          </Link>
          <Link href="/services/pre-wedding" className="text-sm text-text-secondary hover:text-accent transition-colors">
            Pre-Wedding Sessions
          </Link>
          <Link href="/services/event-photography" className="text-sm text-text-secondary hover:text-accent transition-colors">
            Event & Celebrations
          </Link>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-3">
          <h4 className="font-serif text-lg font-semibold text-text-primary mb-2">Navigation</h4>
          <Link href="/about" className="text-sm text-text-secondary hover:text-accent transition-colors">
            About Studio
          </Link>
          <Link href="/portfolio" className="text-sm text-text-secondary hover:text-accent transition-colors">
            Portfolio Gallery
          </Link>
          <Link href="/packages" className="text-sm text-text-secondary hover:text-accent transition-colors">
            Packages & Pricing
          </Link>
          <Link href="/journal" className="text-sm text-text-secondary hover:text-accent transition-colors">
            Journal & Stories
          </Link>
          <Link href="/contact" className="text-sm text-text-secondary hover:text-accent transition-colors">
            Book a Shoot
          </Link>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg font-semibold text-text-primary mb-2">Studio Location</h4>
          <div className="flex items-start gap-3 text-text-secondary text-sm">
            <MapPin size={18} className="shrink-0 text-accent mt-0.5" />
            <span className="leading-relaxed">
              101 Shubham Elite, Eklingji Road,<br />
              Behind Somnath Bus Stand,<br />
              Sanand, Gujarat 382110
            </span>
          </div>
          <a
            href="tel:+919724322046"
            className="flex items-center gap-3 text-text-secondary hover:text-accent text-sm transition-colors pt-2"
          >
            <Phone size={18} className="text-accent" />
            <span className="font-mono text-sm">097243 22046</span>
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto pt-8 border-t border-border-custom flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted text-xs">
        <p>&copy; {new Date().getFullYear()} Shree Shyam Studio. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy-policy" className="hover:text-text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-text-primary transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/admin/login" className="hover:text-accent transition-colors">
            Admin Portal
          </Link>
        </div>
      </div>
    </footer>
  );
}
