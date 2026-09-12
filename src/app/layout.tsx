import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Canonical origin of the deployed site (GitHub Pages project site). The
// repository deploys under /Eram_portfolio/, so the base path must be folded
// into the origin — otherwise every absolute URL we emit (canonical, OpenGraph
// image, sitemap) points at the bare domain and 404s for scrapers. If a
// custom domain is configured later, update the origin accordingly.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = `https://maherukhislam.github.io${basePath}`;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Md. Eram Hossain Ratul | Student Leader & Social Activist",
  description:
    "Portfolio of Md. Eram Hossain Ratul, General Secretary (Acting) of Dhaka Commerce College Nature Study Club, Chief Sergeant-at-Arms of Rotaract Club of Dhaka Commerce College, and Cadet Lance Corporal at Bangladesh National Cadet Corps. Based in Uttara, Dhaka, Bangladesh.",
  keywords: [
    "Md. Eram Hossain Ratul",
    "Eram Hossain Ratul",
    "Rotaract Club of Dhaka Commerce College",
    "Dhaka Commerce College Nature Study Club",
    "BNCC",
    "Student Leader",
    "Social Activist",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: "Md. Eram Hossain Ratul" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Md. Eram Hossain Ratul | Student Leader & Social Activist",
    description:
      "Student leader, club administrator and social activist based in Dhaka, Bangladesh.",
    url: "/",
    siteName: "Md. Eram Hossain Ratul",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${basePath}/hero-portrait.jpg`,
        alt: "Portrait of Md. Eram Hossain Ratul under warm spotlight lighting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Eram Hossain Ratul | Student Leader & Social Activist",
    description:
      "Student leader, club administrator and social activist based in Dhaka, Bangladesh.",
    images: [`${basePath}/hero-portrait.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// The hero opens on the dark stone backdrop, so the browser UI should match
// it on mobile rather than flashing the light page background.
export const viewport: Viewport = {
  themeColor: "#0c0a09",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
