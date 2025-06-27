import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DraggableWhatsAppButton from "./components/DraggableWhatsAppButton";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import Analytics from "./components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Top Interior Designer in Lucknow | NQ Designs",
  description: "NQ Designs is a top-rated architecture and interior design company in Lucknow. We offer home renovation, furniture design, and turnkey construction services.",
  keywords: [
    "interior design Lucknow",
    "architecture firm Lucknow",
    "home renovation",
    "best interior designer",
    "kitchen interior ideas",
    "furniture design Lucknow"
  ],
  openGraph: {
    title: "NQ Designs | Interior & Architecture in Lucknow",
    description: "Best interior design, construction and furniture solutions in Lucknow by NQ Designs.",
    url: "https://nqdesigns.co",
    siteName: "NQ Designs",
    images: [
      {
        url: "https://nqdesigns.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NQ Designs - Interior & Construction Services in Lucknow",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NQ Designs | Interior & Architecture",
    description: "Interior, furniture, and architecture design in Lucknow.",
    images: ["https://nqdesigns.co/og-image.jpg"],
    creator: "@nqdesigns"
  },
  metadataBase: new URL("https://nqdesigns.co"),
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <DraggableWhatsAppButton />
        <Footer/>
        <MobileNav/>
        <Analytics/>
      </body>
    </html>
  );
}
