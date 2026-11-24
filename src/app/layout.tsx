import type { Metadata, Viewport } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { site } from "@/content/site";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "FDC Webdesign — Sites web sur abonnement, Wavre",
    template: "%s · FDC Webdesign",
  },
  description:
    "Agence web à Wavre : des sites rapides et entretenus pour les indépendants et PME du Brabant wallon et de Bruxelles. Maquette gratuite en 72 h.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    siteName: "FDC Webdesign",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "FDC Webdesign" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#F3F3EF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-BE" className={`${interTight.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-3 focus:text-white">
          Aller au contenu
        </a>
        <Nav />
        <main id="contenu">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
