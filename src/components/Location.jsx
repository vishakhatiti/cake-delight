import {
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Phone
} from "lucide-react";

import { business } from "../data/business";
import { storefrontImage } from "../data/cakes";
import ImageFrame from "./ImageFrame";

function Location() {
  return (
    <section
      id="contact"
      className="section location-section"
    >
      <div className="container">
        <div className="location-card">
          <div className="location-image">
            <ImageFrame
              src={storefrontImage.image}
              alt={storefrontImage.alt}
            />
          </div>

          <div className="location-content">
            <p className="eyebrow">Find Us</p>

            <h2>
              Visit
              <br />
              <em>Cake Delight</em>
            </h2>

            <div className="location-detail">
              <MapPin size={20} />

              <address>
                {business.address.map(
                  (line) => (
                    <span key={line}>
                      {line}
                    </span>
                  )
                )}
              </address>
            </div>

            <a
              href={business.phoneHref}
              className="location-phone"
            >
              <Phone size={17} />
              {business.phone}
            </a>

            <div className="location-actions">
              <a
                href={business.phoneHref}
                className="button"
              >
                <Phone size={16} />
                Call Now
              </a>

              <a
                href={business.whatsappHref}
                className="button button-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>

              <a
                href={business.googleMapsUrl}
                className="button button-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;