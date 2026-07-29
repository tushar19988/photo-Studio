import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import argon2 from 'argon2';

const url = process.env.DATABASE_URL || 'file:./dev.db';
const adapter = new PrismaBetterSqlite3({ url });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding Shree Shyam Studio database...');

  // 1. Create Default Site Settings
  await prisma.siteSettings.upsert({
    where: { id: 'default' },
    update: {},
    create: {
      id: 'default',
      studioName: 'Shree Shyam Studio',
      address: '101 Shubham Elite, Eklingji Road, behind Somnath Bus Stand, Sanand, Gujarat 382110',
      phone: '097243 22046',
      email: 'contact@shreeshyamstudio.com',
      whatsappNumber: '919724322046',
      googleMapsUrl: 'https://maps.google.com/?q=Shree+Shyam+Studio+Sanand',
      instagramUrl: 'https://instagram.com',
      facebookUrl: 'https://facebook.com',
      youtubeUrl: 'https://youtube.com',
    },
  });

  // 2. Admin User
  const passwordHash = await argon2.hash('ShreeShyamAdmin2026!');
  await prisma.user.upsert({
    where: { email: 'admin@shreeshyamstudio.com' },
    update: { passwordHash },
    create: {
      name: 'Studio Owner',
      email: 'admin@shreeshyamstudio.com',
      passwordHash,
      role: 'SUPER_ADMIN',
    },
  });

  // 3. Services & Packages
  const weddingService = await prisma.service.upsert({
    where: { slug: 'wedding-photography' },
    update: {},
    create: {
      name: 'Wedding Photography',
      slug: 'wedding-photography',
      shortDescription: 'Documenting the emotion, grandeur, and sacred moments of your big day with candid and editorial photography.',
      description: 'Our Wedding Photography Services are designed to capture the beauty, emotion, and significance of your big day. We document every key moment, from intimate rituals and emotional candid portraits to grand celebrations.',
      startingPrice: 25000,
      heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
      featured: true,
      sortOrder: 1,
    },
  });

  const birthdayService = await prisma.service.upsert({
    where: { slug: 'birthday-photography' },
    update: {},
    create: {
      name: 'Birthday Photography',
      slug: 'birthday-photography',
      shortDescription: 'Capturing the joy, laughter, and vibrant celebrations of your loved one’s birthday milestones.',
      description: 'Our Birthday Photography Services capture the joy and excitement of your special day with high-quality images. We document candid moments, party details, family memories, and celebrations.',
      startingPrice: 10000,
      heroImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1600&auto=format&fit=crop',
      featured: true,
      sortOrder: 2,
    },
  });

  const engagementService = await prisma.service.upsert({
    where: { slug: 'engagement-photography' },
    update: {},
    create: {
      name: 'Engagement Photography',
      slug: 'engagement-photography',
      shortDescription: 'Celebrate your love story with romantic, cinematic engagement portraits and ring ceremony documentation.',
      description: 'Our Engagement Photography Services are crafted to celebrate your love and commitment in a personal and elegant way. We capture authentic moments, emotions, and details that tell your story.',
      startingPrice: 12000,
      heroImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop',
      featured: true,
      sortOrder: 3,
    },
  });

  await prisma.service.upsert({
    where: { slug: 'pre-wedding-photography' },
    update: {},
    create: {
      name: 'Pre-Wedding Shoot',
      slug: 'pre-wedding-photography',
      shortDescription: 'Cinematic destination and concept pre-wedding photography showcasing your unique romance.',
      description: 'Create timeless pre-wedding visual stories in scenic indoor and outdoor locations crafted around your couple aesthetic.',
      startingPrice: 18000,
      heroImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop',
      featured: true,
      sortOrder: 4,
    },
  });

  // Packages for Wedding
  const existingPkgCount = await prisma.package.count();
  if (existingPkgCount === 0) {
    await prisma.package.createMany({
      data: [
        {
          serviceId: weddingService.id,
          name: 'Essential Wedding',
          startingPrice: 25000,
          description: 'Ideal for 1-day wedding celebrations & rituals',
          sortOrder: 1,
        },
        {
          serviceId: weddingService.id,
          name: 'Royal Heritage Wedding',
          startingPrice: 45000,
          description: 'Complete 2-day wedding coverage including Mandap, Sangeet & Reception',
          sortOrder: 2,
        },
        {
          serviceId: birthdayService.id,
          name: 'Joyful Celebration',
          startingPrice: 10000,
          description: 'Full party coverage, candid guest photos & high-res edited album',
          sortOrder: 1,
        },
        {
          serviceId: engagementService.id,
          name: 'Forever Ring Ceremony',
          startingPrice: 12000,
          description: 'Ring exchange ceremony, family portrait sessions & digital gallery',
          sortOrder: 1,
        },
      ],
    });
  }

  // 4. Categories
  const catWeddings = await prisma.portfolioCategory.upsert({
    where: { slug: 'weddings' },
    update: {},
    create: { name: 'Weddings', slug: 'weddings', description: 'Royal Indian Wedding Stories', sortOrder: 1 },
  });

  const catEngagements = await prisma.portfolioCategory.upsert({
    where: { slug: 'engagements' },
    update: {},
    create: { name: 'Engagements', slug: 'engagements', description: 'Love stories & Ring Ceremonies', sortOrder: 2 },
  });

  const catBirthdays = await prisma.portfolioCategory.upsert({
    where: { slug: 'birthdays' },
    update: {},
    create: { name: 'Birthdays', slug: 'birthdays', description: 'Milestone Celebrations & Parties', sortOrder: 3 },
  });

  await prisma.portfolioCategory.upsert({
    where: { slug: 'pre-wedding' },
    update: {},
    create: { name: 'Pre-Wedding', slug: 'pre-wedding', description: 'Cinematic Outdoor Shoots', sortOrder: 4 },
  });

  // 5. Portfolio Projects & Images
  await prisma.portfolioProject.upsert({
    where: { slug: 'arav-and-ananya-wedding-sanand' },
    update: {},
    create: {
      title: 'Arav & Ananya — Royal Wedding Story',
      slug: 'arav-and-ananya-wedding-sanand',
      categoryId: catWeddings.id,
      location: 'Sanand Heritage Palace, Gujarat',
      eventDate: new Date('2026-01-15'),
      description: 'A breathtaking celebration filled with intricate bridal details, royal Varmala rituals, and heartfelt family moments.',
      coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
      featured: true,
      sortOrder: 1,
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop', alt: 'Bridal Portrait', caption: 'Editorial Bridal Portrait', sortOrder: 1 },
          { url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop', alt: 'Varmala Moment', caption: 'Traditional Varmala Ritual', sortOrder: 2 },
          { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop', alt: 'Couple Sunset Portrait', caption: 'Golden Hour Couple Portrait', sortOrder: 3 },
        ],
      },
    },
  });

  await prisma.portfolioProject.upsert({
    where: { slug: 'rohan-and-priya-engagement' },
    update: {},
    create: {
      title: 'Rohan & Priya — Engagement Ceremony',
      slug: 'rohan-and-priya-engagement',
      categoryId: catEngagements.id,
      location: 'Shubham Greens, Sanand',
      eventDate: new Date('2026-02-10'),
      description: 'An elegant evening ring exchange captured with warm lighting, genuine smiles, and timeless portraits.',
      coverImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop',
      featured: true,
      sortOrder: 2,
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop', alt: 'Ring Exchange', caption: 'The Emotional Ring Exchange', sortOrder: 1 },
          { url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1600&auto=format&fit=crop', alt: 'Decor & Details', caption: 'Floral Decor Details', sortOrder: 2 },
        ],
      },
    },
  });

  await prisma.portfolioProject.upsert({
    where: { slug: 'vivan-1st-birthday-bash' },
    update: {},
    create: {
      title: 'Vivan’s 1st Birthday Celebration',
      slug: 'vivan-1st-birthday-bash',
      categoryId: catBirthdays.id,
      location: 'Sanand Club, Ahmedabad Road',
      eventDate: new Date('2026-03-05'),
      description: 'A vibrant pastel-themed 1st birthday event full of candid child laughter, cake smash, and grand family photos.',
      coverImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1600&auto=format&fit=crop',
      featured: true,
      sortOrder: 3,
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1600&auto=format&fit=crop', alt: 'Birthday Cake Moment', caption: 'Cake Smash & Joyful Smiles', sortOrder: 1 },
        ],
      },
    },
  });

  // 6. Testimonials
  const existingTestimonialCount = await prisma.testimonial.count();
  if (existingTestimonialCount === 0) {
    await prisma.testimonial.createMany({
      data: [
        {
          clientName: 'Patel Family (Sanand)',
          review: 'Shree Shyam Studio captured our daughter’s wedding beyond our expectations. Every photograph feels like a frame from a classic movie!',
          eventType: 'Wedding Photography',
          location: 'Sanand',
          rating: 5,
          photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
          sortOrder: 1,
        },
        {
          clientName: 'Karan & Meera Shah',
          review: 'Super professional team! They made us so comfortable during our engagement shoot. Their attention to detail is unbelievable.',
          eventType: 'Engagement Shoot',
          location: 'Ahmedabad',
          rating: 5,
          photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
          sortOrder: 2,
        },
        {
          clientName: 'Hardik Sharma',
          review: 'We booked them for our son’s 1st birthday party. The candid shots of kids and family were amazing. Highly recommended studio in Sanand!',
          eventType: 'Birthday Party',
          location: 'Sanand',
          rating: 5,
          photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
          sortOrder: 3,
        },
      ],
    });
  }

  // 7. Blog Categories & Posts
  const blogCat = await prisma.blogCategory.upsert({
    where: { slug: 'wedding-guides' },
    update: {},
    create: { name: 'Wedding Guides', slug: 'wedding-guides' },
  });

  await prisma.blogPost.upsert({
    where: { slug: 'top-wedding-photography-locations-sanand-ahmedabad' },
    update: {},
    create: {
      title: 'Top 7 Pre-Wedding & Wedding Photography Locations Near Sanand',
      slug: 'top-wedding-photography-locations-sanand-ahmedabad',
      excerpt: 'Discover the most scenic heritage sites, lush green resorts, and sunset spots around Sanand and Ahmedabad for your couple shoot.',
      content: `Planning a pre-wedding or wedding shoot in Sanand? Choosing the right backdrop makes all the difference for your photos. Here are the top locations recommended by Shree Shyam Studio...`,
      coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      author: 'Shree Shyam Studio Team',
      categoryId: blogCat.id,
      published: true,
    },
  });

  console.log('Database seeding finished successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
