import React from "react";

import {
  MapPin,
  MessageCircle,
  Phone
} from "lucide-react";

import { business } from "../data/business";

function MobileActionBar() {
  return (
    <div className="mobile-action-bar">
      <a href={business.phoneHref}>
        <Phone size={17} />
        <span>Call</span>
      </a>

      <a
        href={business.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={17} />
        <span>WhatsApp</span>
      </a>

      <a
        href={business.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MapPin size={17} />
        <span>Directions</span>
      </a>
    </div>
  );
}

export default MobileActionBar;