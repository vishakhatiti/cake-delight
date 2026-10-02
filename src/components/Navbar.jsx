import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone
} from "lucide-react";

import Logo from "./Logo";
import { business } from "../data/business";

const links = [
  ["Home", "#home"],
  ["Cakes", "#cakes"],
  ["Gallery", "#gallery"],
  ["Reviews", "#reviews"],
  ["About", "#about"],
  ["Contact", "#contact"]
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="container navbar-inner">
        <Logo />

        <nav
          className={`desktop-nav ${
            open ? "desktop-nav-open" : ""
          }`}
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={business.phoneHref}
          className="button button-small navbar-call"
        >
          <Phone size={16} />
          Call Now
        </a>

        <button
          type="button"
          className="menu-button"
          aria-label={
            open ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      <div
        className={`mobile-menu ${
          open ? "mobile-menu-open" : ""
        }`}
      >
        <div className="container mobile-menu-inner">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}

          <a
            href={business.phoneHref}
            className="button"
            onClick={closeMenu}
          >
            <Phone size={17} />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;