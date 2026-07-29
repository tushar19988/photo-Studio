import React from "react";

export const metadata = {
  title: "Terms & Conditions — Shree Shyam Studio",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4">
      <h1 className="font-serif text-4xl font-bold text-foreground mb-6">Terms & Conditions</h1>
      <div className="prose dark:prose-invert text-muted-foreground text-sm font-light leading-relaxed space-y-4">
        <p>
          Welcome to Shree Shyam Studio. By accessing our website or booking our photography services, you agree to comply with the following terms.
        </p>
        <h3 className="text-lg font-bold text-foreground pt-4">1. Booking & Advance Payment</h3>
        <p>
          A 30% advance deposit is required to lock in event dates. Dates remain open until the deposit is received and confirmed by the studio.
        </p>
        <h3 className="text-lg font-bold text-foreground pt-4">2. Deliverables & Editing</h3>
        <p>
          Standard turnaround for digital album previews is 5–7 days. Complete master edited photo albums and print layouts are delivered within 3-4 weeks.
        </p>
        <h3 className="text-lg font-bold text-foreground pt-4">3. Copyright</h3>
        <p>
          All photographs created by Shree Shyam Studio remain the intellectual property of the studio. Clients receive personal reproduction rights for print and personal digital sharing.
        </p>
      </div>
    </div>
  );
}
