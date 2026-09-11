import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("http://localhost:3000"),
  title: "Md. Eram Hossain Ratul | Student Leader & Social Activist",
  description:
    "Portfolio of Md. Eram Hossain Ratul — General Secretary (Acting) of Dhaka Commerce College Nature Study Club, Chief Sergeant-at-Arms of Rotaract Club of Dhaka Commerce College, and Cadet Lance Corporal at Bangladesh National Cadet Corps. Based in Uttara, Dhaka, Bangladesh.",
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
    images: ["/hero-portrait.jpg"],
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
