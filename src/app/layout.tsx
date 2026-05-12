import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import content from '@/config/content';

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
    default: content.metadata.home.title,
    template: `%s | ${content.site.name}`,
  },
  description: content.metadata.home.description,
  keywords: content.site.keywords,
  authors: [{ name: content.site.name }],
  creator: content.site.name,
  metadataBase: new URL("https://portoporter.com"),
  openGraph: {
    type: "website",
    locale: "en_PT",
    url: "https://portoporter.com",
    siteName: content.site.name,
    title: content.metadata.home.title,
    description: content.metadata.home.description,
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${content.site.name} - Premium Artisan Gifts`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: content.metadata.home.title,
    description: content.metadata.home.description,
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
