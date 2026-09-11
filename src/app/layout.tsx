import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Canonical origin of the deployed site (GitHub Pages project site).
// If a custom domain is configured later, update this value accordingly.
const siteUrl = "https://maherukhislam.github.io";
// next/image string sources don't get the basePath applied in static export,
// so relative asset URLs (e.g. OpenGraph images) must include it explicitly.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
  openGraph: {
    title: "Md. Eram Hossain Ratul | Student Leader & Social Activist",
    description:
      "Student leader, club administrator and social activist based in Dhaka, Bangladesh.",
    type: "website",
    images: [`${basePath}/hero-portrait.jpg`],
  },
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
