import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ImageLightbox } from "@/components/ImageLightbox";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://lilyliang.design";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lily Liang — Product Designer",
    template: "%s - Lily Liang",
  },
  description:
    "Product designer based in Philadelphia. Master of Integrated Product Design, Penn. Previously Georgia Tech Industrial Design.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Lily Liang Portfolio",
    title: "Lily Liang — Product Designer",
    description:
      "Product designer based in Philadelphia. Master of Integrated Product Design, Penn. Previously Georgia Tech Industrial Design.",
    url: SITE_URL,
    images: [
      {
        url: "/images/covers/cover-little-autonomy.webp",
        width: 1200,
        height: 900,
        alt: "Lily Liang — Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lily Liang — Product Designer",
    description:
      "Product designer based in Philadelphia. Master of Integrated Product Design, Penn. Previously Georgia Tech Industrial Design.",
    images: ["/images/covers/cover-little-autonomy.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="grain" aria-hidden="true" />
        <Nav />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <ImageLightbox />
      </body>
    </html>
  );
}
