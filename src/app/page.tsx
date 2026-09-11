import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { RolesMarquee } from "@/components/portfolio/roles-marquee";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Education } from "@/components/portfolio/education";
import { Skills } from "@/components/portfolio/skills";
import { Achievements } from "@/components/portfolio/achievements";
import { Connect } from "@/components/portfolio/connect";
import { Footer } from "@/components/portfolio/footer";
import { profile } from "@/lib/portfolio-data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "General Secretary (Acting), Dhaka Commerce College Nature Study Club",
  description:
    "Student leader, club administrator and social activist based in Dhaka, Bangladesh.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Uttara Model Town, Dhaka",
    addressCountry: "Bangladesh",
  },
  affiliation: [
    { "@type": "Organization", name: "Rotaract Club of Dhaka Commerce College" },
    { "@type": "Organization", name: "Dhaka Commerce College Nature Study Club" },
    { "@type": "Organization", name: "Bangladesh National Cadet Corps" },
  ],
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Adamjee Cantonment Public School" },
    { "@type": "EducationalOrganization", name: "Dhaka Commerce College" },
  ],
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <RolesMarquee />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
