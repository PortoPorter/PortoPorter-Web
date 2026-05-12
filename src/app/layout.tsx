import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Porto Porter | Modern Concierge",
    template: "%s | Porto Porter",
  },
  description: "The best of Porto, hand-picked artisan crafts delivered to your Airbnb or Hotel. Authentic gifts for luxury travelers.",
  keywords: ["authentic Porto gifts", "Porto concierge delivery", "artisan crafts Porto", "luxury gift bundles Porto", "Porto souvenirs", "flight-friendly gifts"],
  authors: [{ name: "Porto Porter" }],
  creator: "Porto Porter",
  metadataBase: new URL("https://portoporter.com"),
  openGraph: {
    type: "website",
    locale: "en_PT",
    url: "https://portoporter.com",
    siteName: "Porto Porter",
    title: "Porto Porter | Modern Concierge",
    description: "Hand-picked Porto artisan crafts delivered to your accommodation. No tourist traps. Just authentic craft.",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Porto Porter - Premium Artisan Gifts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Porto Porter | Modern Concierge",
    description: "Hand-picked Porto artisan crafts delivered to your accommodation.",
    images: ["/assets/images/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
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
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
