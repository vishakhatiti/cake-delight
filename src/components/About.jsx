import { ArrowUpRight } from "lucide-react";

import { business } from "../data/business";
import { storefrontImage } from "../data/cakes";
import ImageFrame from "./ImageFrame";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-image">
          <ImageFrame
            src={storefrontImage.image}
            alt={storefrontImage.alt}
          />

          <span className="about-image-label">
            Shewalewadi, Pune
          </span>
        </div>

        <div className="about-content">
          <p className="eyebrow">About Cake Delight</p>

          <h2>
            A local cake shop
            <br />
            <em>for sweet moments.</em>
          </h2>

          <p>
            Cake Delight is a local cake shop serving
            the Shewalewadi area of Pune.
          </p>

          <div className="about-brand">
            <strong>{business.displayName}</strong>
            <span>{business.tagline}</span>
          </div>

          <a
            href="#contact"
            className="text-link"
          >
            Visit the shop
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;