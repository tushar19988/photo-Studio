export const metadata = {
  title: "Terms & Conditions | Shree Shyam Studio",
  description: "Terms and conditions regarding photography services, bookings, and image rights at Shree Shyam Studio.",
};

export default function TermsPage() {
  return (
    <div className="pt-12 pb-24 max-w-[800px] mx-auto px-6">
      <h1 className="font-serif text-4xl text-text-primary mb-6">Terms & Conditions</h1>
      <div className="prose prose-lg dark:prose-invert text-text-secondary text-sm leading-relaxed space-y-4">
        <p>
          Welcome to Shree Shyam Studio. By accessing our website or booking our photography services, you agree to these standard terms.
        </p>
        <h2 className="font-serif text-xl text-text-primary pt-4">Booking & Confirmations</h2>
        <p>
          Event dates are officially reserved upon receipt of an advance booking deposit and signed agreement. Starting prices listed on our website are subject to final package scope.
        </p>
        <h2 className="font-serif text-xl text-text-primary pt-4">Image Rights & Usage</h2>
        <p>
          Shree Shyam Studio retains copyright of all photographs created, with clients granted full personal usage rights for print and digital sharing.
        </p>
      </div>
    </div>
  );
}
