import {
  ArrowUpRight,
  MessageCircle,
  Phone
} from "lucide-react";

import { business } from "../data/business";

function CustomCakeCTA() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-card">
          <div>
            <p className="eyebrow eyebrow-light">
              Cake Enquiry
            </p>

            <h2>
              Have a Cake
              <br />
              <em>in Mind?</em>
            </h2>

            <p>
              Share your idea with us and let us create
              something special for your celebration.
            </p>
          </div>

          <div className="cta-actions">
            <a
              href={business.whatsappHref}
              className="button button-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} />
              WhatsApp Us
              <ArrowUpRight size={16} />
            </a>

            <a
              href={business.phoneHref}
              className="button button-transparent"
            >
              <Phone size={17} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomCakeCTA;