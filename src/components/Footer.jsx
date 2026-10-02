import {
  ArrowUpRight,
  Instagram,
  MapPin,
  MessageCircle,
  Phone
} from "lucide-react";

import Logo from "./Logo";
import { business } from "../data/business";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />

            <p>
              Beautiful cakes for celebrations in
              Shewalewadi, Pune.
            </p>

            <a
              href={business.instagram}
              className="instagram-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={17} />
              @cake_delight_shewalwadi
            </a>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#cakes">Cakes</a>
            <a href="#gallery">Gallery</a>
            <a href="#reviews">Reviews</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>

            <a href={business.phoneHref}>
              <Phone size={15} />
              {business.phone}
            </a>

            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>

            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={15} />
              Get Directions
              <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="footer-column">
            <h3>Visit</h3>

            <address>
              {business.address.map(
                (line) => (
                  <span key={line}>
                    {line}
                  </span>
                )
              )}
            </address>

            <p>
              <strong>
                10:00 AM – 12:00 AM
              </strong>
              <br />
              Daily
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 Cake Delight. All rights reserved.
          </span>

          <span>
            Shewalewadi, Pune
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;