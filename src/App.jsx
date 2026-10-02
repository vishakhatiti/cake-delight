import React, { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cakes from "./components/Cakes";
import WhyChooseUs from "./components/WhyChooseUs";
import CustomCakeCTA from "./components/CustomCakeCTA";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Location from "./components/Location";
import OpeningHours from "./components/OpeningHours";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import MobileActionBar from "./components/MobileActionBar";

import { business } from "./data/business";

function App() {
  useEffect(() => {
    document.title = "Cake Delight | Cakes in Shewalewadi, Pune";

    const existingSchema = document.getElementById(
      "cake-delight-schema"
    );

    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "Bakery",
      name: business.name,
      telephone: business.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rukmini Complex, Shewale Chowk",
        addressLocality: "Shewalewadi",
        addressRegion: "Maharashtra",
        postalCode: "412307",
        addressCountry: "IN"
      },
      openingHoursSpecification:
        business.hours.map((item) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: item.schemaDay,
          opens: "10:00",
          closes: "00:00"
        })),
      sameAs: [business.instagram],
      url:
        typeof window !== "undefined"
          ? window.location.origin
          : undefined
    };

    const script = document.createElement("script");

    script.id = "cake-delight-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Cakes />

        <WhyChooseUs />

        <CustomCakeCTA />

        <Gallery />

        <Reviews />

        <About />

        <Location />

        <OpeningHours />

        <FinalCTA />
      </main>

      <Footer />

      <MobileActionBar />
    </>
  );
}

export default App;