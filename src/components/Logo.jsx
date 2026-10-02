import React from "react";

import { CakeSlice } from "lucide-react";

import { business } from "../data/business";

function Logo() {
  return (
    <a
      href="#home"
      className="brand-logo"
      aria-label="Cake Delight - Home"
    >
      <span className="brand-icon">
        <CakeSlice size={17} strokeWidth={1.8} />
      </span>

      <span>
        <strong>{business.displayName}</strong>
        <small>{business.tagline}</small>
      </span>
    </a>
  );
}

export default Logo;