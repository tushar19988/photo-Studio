import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { STUDIO_INFO } from "@/data/content";

export const metadata = {
  title: "Contact Us & Book a Shoot | Shree Shyam Studio Sanand",
  description: "Contact Shree Shyam Studio at 097243 22046 or visit our Sanand studio at 101 Shubham Elite, Eklingji Road to book your wedding photography.",
};

export default function ContactPage() {
  return (
    <div className="pt-12 pb-24">
      {/* Header */}
      <section className="px-6 max-w-[1200px] mx-auto text-center mb-16">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-accent block mb-3">
          Get In Touch
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-text-primary font-normal mb-6">
          Start Your Story
        </h1>
        <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          We&apos;d love to discuss your upcoming wedding or celebration. Reach out via form, direct call, or visit our studio in Sanand.
        </p>
      </section>

      {/* Grid: Contact Info + Form */}
      <section className="px-6 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Info Column */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="bg-bg-secondary p-8 rounded-2xl border border-border-custom flex flex-col gap-6">
            <h2 className="font-serif text-2xl text-text-primary">Studio Information</h2>

            {/* Address */}
            <div className="flex items-start gap-4 text-text-secondary">
              <MapPin size={20} className="text-accent shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-sm text-text-primary">Studio Address</div>
                <div className="text-xs leading-relaxed mt-1">
                  101 Shubham Elite, Eklingji Road,<br />
                  Behind Somnath Bus Stand,<br />
                  Sanand, Gujarat 382110
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 text-text-secondary">
              <Phone size={20} className="text-accent shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-sm text-text-primary">Direct Call</div>
                <a href="tel:09724322046" className="text-xs font-mono text-accent hover:underline block mt-1">
                  097243 22046
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 text-text-secondary">
              <MessageCircle size={20} className="text-accent shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-sm text-text-primary">WhatsApp Enquiry</div>
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=Hello%20Shree%20Shyam%20Studio`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:underline block mt-1"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Map Embed or Directions Box */}
          <div className="bg-bg-secondary p-8 rounded-2xl border border-border-custom text-center flex flex-col items-center gap-4">
            <h3 className="font-serif text-xl text-text-primary">Visit Our Studio</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              We welcome clients for in-person consultations to showcase our printed luxury sample albums.
            </p>
            <a
              href="https://maps.google.com/?q=101+Shubham+Elite+Sanand+Gujarat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-border-custom bg-bg-surface text-xs font-semibold uppercase tracking-wider text-text-primary hover:border-accent"
            >
              Get Directions on Google Maps
            </a>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
