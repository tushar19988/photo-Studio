export const metadata = {
  title: "Privacy Policy | Shree Shyam Studio",
  description: "Privacy policy regarding customer data and photography enquiries at Shree Shyam Studio.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-12 pb-24 max-w-[800px] mx-auto px-6">
      <h1 className="font-serif text-4xl text-text-primary mb-6">Privacy Policy</h1>
      <div className="prose prose-lg dark:prose-invert text-text-secondary text-sm leading-relaxed space-y-4">
        <p>
          At Shree Shyam Studio, we respect your personal privacy and are committed to protecting the information you share when submitting photography enquiries or visiting our website.
        </p>
        <h2 className="font-serif text-xl text-text-primary pt-4">Information Collection</h2>
        <p>
          We only collect personal information such as your name, phone number, email address, and event details when you voluntarily submit an enquiry or booking request.
        </p>
        <h2 className="font-serif text-xl text-text-primary pt-4">Use of Information</h2>
        <p>
          Your information is strictly used to communicate regarding date availability, package pricing, and event photography arrangements. We never sell or share customer contact information with third parties.
        </p>
      </div>
    </div>
  );
}
