import { NavLink } from "react-router-dom";
import "./Nav.scss";
import Button from "../Button/Button";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // closes menu when any link is clicked
  };

  return (
    <section className="nav">
      <NavLink
        className="nav__icon"
        to="/"
        onClick={handleLinkClick}
      >
        <img src="/logo64.svg" alt="Magret's Logo" className="nav__logo" />
        Magret
      </NavLink>

      <div
        className={`nav__hamburger ${menuOpen ? "nav__hamburger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <ImCross /> : <GiHamburgerMenu />}
      </div>

      <section className={`${menuOpen ? "nav__links--open" : "nav__links"}`}>
        <div className="nav__header">
          <NavLink
            className="nav__icon"
            to="/"
            onClick={handleLinkClick}
          >
            <img src="/logo64.svg" alt="Magret's Logo" className="nav__logo" />
            Magret
          </NavLink>

          <div
            className={`nav__hamburger ${menuOpen ? "nav__hamburger--open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <ImCross /> : <GiHamburgerMenu />}
          </div>
        </div>

        <NavLink
          className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}
          to="/"
          onClick={handleLinkClick}
        >
            Home
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}
          to="/about"
          onClick={handleLinkClick}
        >
            About
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}
          to="/projects"
          onClick={handleLinkClick}
        >
            Projects
        </NavLink>
        <a
          className="nav__link"
          href="/Abiodun_Magret_Oyedele_Resume.pdf"
          download="Abiodun_Magret_Oyedele_Resume.pdf"
          onClick={handleLinkClick}
        >
            Download CV
        </a>
        <NavLink
          className="nav__link"
          to="/contact"
          onClick={handleLinkClick}
        >
          <Button name="Get in Touch" style="button__nav-box" />
        </NavLink>
      </section>
    </section>
  )
}

