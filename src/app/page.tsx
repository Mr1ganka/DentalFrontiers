import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Blogs } from "@/components/sections/Blogs";
import { People } from "@/components/sections/People";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { Location } from "@/components/sections/Location";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dental Frontiers",
    "image": "https://dentalfrontiers.com/logo.png",
    "@id": "https://dentalfrontiers.com",
    "url": "https://dentalfrontiers.com",
    "telephone": "+917003372255",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ground Floor, D/63, Sammilani Park Road, Survey Park, Santoshpur",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700075",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      {/* <About /> */}
      <Services />
      <People />
      <Reviews />
      <Blogs />
      <Contact />
      <Location />
    </>
  );
}
