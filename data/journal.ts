export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  publishedDate: string;
  readTime: string;
  coverImage: string;
}

export const JOURNAL_POSTS: BlogPostItem[] = [
  {
    id: "post_1",
    title: "10 Essential Tips for Planning a Gujarati Wedding Photography Schedule",
    slug: "tips-for-planning-gujarati-wedding-photography",
    excerpt: "From early morning Ganesh Sthapana to late-night Pheras, here is how to structure your wedding timeline to get the best candid photos.",
    content: `
      Planning a multi-day wedding in Gujarat involves managing rituals, costume changes, and large family gatherings. To ensure your wedding photos turn out candid and relaxed, timing is key.

      ### 1. Allocate Buffer Time for Vidai
      The Vidai ceremony is one of the most emotional moments of any wedding. Avoid rushing this moment. Allocate at least 30-45 minutes of quiet coverage.

      ### 2. Schedule Couple Portraits Right After Pheras
      Right after the main ceremony while your outfits and garlands are fresh, set aside 20 minutes for intimate couple portraits in quiet natural light.

      ### 3. Communicate Custom Rituals
      Every family has unique traditional ceremonies. Informing your photography team beforehand ensures no sacred moment is missed.
    `,
    category: "Wedding Planning",
    publishedDate: "January 15, 2026",
    readTime: "4 min read",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "post_2",
    title: "How to Prepare for Your Outdoor Pre-Wedding Shoot",
    slug: "prepare-for-outdoor-pre-wedding-shoot",
    excerpt: "Everything you need to know about outfit selection, best light hours, and comfortable poses for an outdoor pre-wedding session.",
    content: `
      An outdoor pre-wedding shoot allows couples to capture their romance in a relaxed setting away from wedding day crowds. Here is our guide to preparing for your shoot.

      ### Outfit Coordination
      Choose complementary colors rather than matching outfits. Rich jewel tones or pastel colors work beautifully against Gujarat heritage locations.

      ### Golden Hour Lighting
      The best lighting for outdoor portraits is during the early morning sunrise or 1 hour before sunset (Golden Hour).
    `,
    category: "Pre-Wedding Tips",
    publishedDate: "February 2, 2026",
    readTime: "3 min read",
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
  },
];
