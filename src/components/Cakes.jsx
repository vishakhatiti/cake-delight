import { ArrowUpRight } from "lucide-react";

import { cakes } from "../data/cakes";
import { business } from "../data/business";
import ImageFrame from "./ImageFrame";

function Cakes() {
  return (
    <section id="cakes" className="section cakes-section">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Our Cakes</p>

          <h2>
            Made for the moments
            <br />
            <em>worth celebrating.</em>
          </h2>

          <p>
            Explore our cake collection through real
            photographs from Cake Delight.
          </p>
        </div>

        <div className="cake-grid">
          {cakes.slice(0, 6).map((cake, index) => (
            <article
              className={`cake-card ${
                index === 0 ? "cake-card-featured" : ""
              }`}
              key={cake.image}
            >
              <ImageFrame
                src={cake.image}
                alt={cake.alt}
              />

              {(cake.name ||
                cake.description ||
                cake.price) && (
                <div className="cake-card-info">
                  {cake.name && (
                    <h3>{cake.name}</h3>
                  )}

                  {cake.description && (
                    <p>{cake.description}</p>
                  )}

                  {cake.price && (
                    <strong>{cake.price}</strong>
                  )}
                </div>
              )}

              <a
                href={business.whatsappHref}
                className="cake-enquiry"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enquire about this cake on WhatsApp"
              >
                <span>Enquire</span>
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>

        <div className="center-action">
          <a
            href="#gallery"
            className="text-link"
          >
            View the full gallery
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cakes;