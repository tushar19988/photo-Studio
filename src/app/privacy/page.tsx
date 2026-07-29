import React from "react";

export const metadata = {
  title: "Privacy Policy — Shree Shyam Studio",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4">
      <h1 className="font-serif text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
      <div className="prose dark:prose-invert text-muted-foreground text-sm font-light leading-relaxed space-y-4">
        <p>
          At Shree Shyam Studio ("we", "our", "us"), we respect your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website or fill out an enquiry form.
        </p>
        <h3 className="text-lg font-bold text-foreground pt-4">1. Information We Collect</h3>
        <p>
          When you fill out our Enquiry Form or contact us, we collect your name, phone number, email address, event dates, and event location details solely for providing photography quotes and consultations.
        </p>
        <h3 className="text-lg font-bold text-foreground pt-4">2. Photography Rights & Consent</h3>
        <p>
          Photographs taken during commissioned wedding and event shoots may be showcased in our portfolio with client permission. We never publish sensitive or unapproved client media.
        </p>
        <h3 className="text-lg font-bold text-foreground pt-4">3. Contact Us</h3>
        <p>
          For privacy inquiries, please contact us at 097243 22046 or visit 101 Shubham Elite, Eklingji Road, behind Somnath Bus Stand, Sanand, Gujarat 382110.
        </p>
      </div>
    </div>
  );
}
