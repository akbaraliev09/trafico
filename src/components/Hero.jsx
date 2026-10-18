import { useState } from "react";
import Img from "./Img.jsx";
import { navLinks } from "../data.js";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="hero">
      <Img name="hero-bg.png" className="hero__bg" />

      <div className="wrap">
        <nav className="nav">
          <a href="#top" className="logo" onClick={closeMenu}>
            <Img name="logo.png" alt="" className="logo__icon" />
            TRAFICO.
          </a>
          <button
            className="burger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
          <div className={`nav__links ${menuOpen ? "is-open" : ""}`}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={closeMenu}>{l.label}</a>
            ))}
            <a href="#contact" className="btn" onClick={closeMenu}>Contact us</a>
          </div>
        </nav>

        <h1 id="top">Your awesome traffic permit consultant.</h1>
        <a href="#contact" className="btn">Get started &nbsp;⟶</a>
      </div>

      <Img name="hero-people.png" alt="Courier and customer" className="hero__people" />
      <Img name="hero-truck.png" alt="Delivery truck" className="hero__truck" />
    </header>
  );
}
