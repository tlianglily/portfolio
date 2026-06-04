import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ImageLightbox } from "@/components/ImageLightbox";

export const metadata: Metadata = {
  title: "Lily Liang Portfolio",
  description:
    "Product designer based in Philadelphia. Master of Integrated Product Design, Penn. Previously Georgia Tech Industrial Design.",
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
