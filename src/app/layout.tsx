import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/animations/custom-cursor";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shree Shyam Studio — Premium Wedding & Event Photography Sanand",
    template: "%s | Shree Shyam Studio",
  },
  description:
    "Shree Shyam Studio is a luxury wedding, engagement, and event photography studio in Sanand, Gujarat. Capturing timeless emotional stories with candid and editorial photography.",
  keywords: [
    "Wedding Photographer Sanand",
    "Photography Studio in Sanand",
    "Wedding Photography Sanand",
    "Engagement Photography Sanand",
    "Birthday Photographer Sanand",
    "Pre Wedding Photographer Sanand",
    "Shree Shyam Studio",
  ],
  authors: [{ name: "Shree Shyam Studio" }],
  creator: "Shree Shyam Studio",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shreeshyamstudio.com",
    siteName: "Shree Shyam Studio",
    title: "Shree Shyam Studio — Premium Wedding & Event Photography Sanand",
    description:
      "Stories That Live Forever. Luxury wedding, engagement, and birthday photography studio based in Sanand, Gujarat.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Shree Shyam Studio Photography",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${serifFont.variable} ${sansFont.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col selection:bg-amber-500/20 selection:text-amber-800 dark:selection:text-amber-300"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
