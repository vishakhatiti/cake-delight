import {
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Phone
} from "lucide-react";

import { business } from "../data/business";

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <p className="eyebrow eyebrow-light">
          Cake Delight Shewalewadi
        </p>

        <h2>
          Planning Something
          <br />
          <em>Special?</em>
        </h2>

        <p>
          Make your celebration a little sweeter.
        </p>

        <div className="final-actions">
          <a
            href={business.whatsappHref}
            className="button button-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={17} />
            WhatsApp Us
          </a>

          <a
            href={business.phoneHref}
            className="button button-transparent"
          >
            <Phone size={17} />
            Call Now
          </a>

          <a
            href={business.googleMapsUrl}
            className="button button-transparent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={17} />
            Get Directions
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;