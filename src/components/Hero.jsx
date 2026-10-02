import {
  ArrowDown,
  ArrowRight,
  MapPin,
  MessageCircle
} from "lucide-react";

import { business } from "../data/business";
import { cakeImages } from "../data/cakes";
import ImageFrame from "./ImageFrame";

function Hero() {
  const heroImage =
    cakeImages.find((item) => item.featured) ||
    cakeImages[0];

  return (
    <section id="home" className="hero">
      <div className="hero-decoration hero-decoration-one" />
      <div className="hero-decoration hero-decoration-two" />

      <div className="container hero-grid">
        <div className="hero-content reveal">
          <p className="eyebrow">
            {business.displayName}
          </p>

          <p className="hero-tagline">
            {business.tagline}
          </p>

          <h1>
            Beautiful Cakes
            <br />
            for Every{" "}
            <em>Celebration</em>
          </h1>

          <p className="hero-description">
            Discover beautiful cakes from Cake Delight,
            located at Shewale Chowk in Shewalewadi, Pune.
          </p>

          <div className="hero-actions">
            <a
              href="#cakes"
              className="button"
            >
              Explore Our Cakes
              <ArrowRight size={17} />
            </a>

            <a
              href={business.whatsappHref}
              className="button button-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>
          </div>

          <a
            href={business.googleMapsUrl}
            className="hero-location"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={16} />

            <span>
              Rukmini Complex, Shewale Chowk,
              Shewalewadi, Pune
            </span>
          </a>
        </div>

        <div className="hero-visual reveal reveal-delay">
          <div className="hero-image-wrap">
            <ImageFrame
              src={heroImage.image}
              alt={heroImage.alt}
              loading="eager"
            />

            <div className="hero-rating">
              <span>★★★★★</span>
              <strong>{business.googleRating}</strong>
              <small>Google Rating</small>
            </div>
          </div>

          <div className="hero-caption">
            <span>THE HOUSE OF</span>
            <strong>CAKES &amp; PASTRIES</strong>
          </div>
        </div>
      </div>

      <a
        href="#cakes"
        className="scroll-hint"
        aria-label="Scroll to cakes"
      >
        <span>Explore</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}

export default Hero;