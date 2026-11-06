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
    "telephone": "+1234567890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Smile Street",
      "addressLocality": "London",
      "postalCode": "W1 2AB",
      "addressCountry": "UK"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Services />
      <People />
      <Reviews />
      <Blogs />
      <Contact />
      <Location />
    </>
  );
}
