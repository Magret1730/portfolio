import { NavLink } from "react-router-dom";
import "./Nav.scss";
import Button from "../Button/Button";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Nav({ isDark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <section className="nav">
      <NavLink className="nav__icon" to="/" onClick={handleLinkClick}>
        {/* <img src="/logo64.svg" alt="Magret's Logo" className="nav__logo" /> */}
        Magret
      </NavLink>

      <div className={`nav__hamburger ${menuOpen ? "nav__hamburger--open" : ""}`}>
        <div>
          {isDark ? (
            <FiSun onClick={toggleTheme} className="nav__icon" />
          ) : (
            <FiMoon onClick={toggleTheme} className="nav__icon" />
          )}
        </div>

        <div
          className="nav__ham"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <ImCross className="nav__icon--ham" /> : <GiHamburgerMenu className="nav__icon--ham" />}
        </div>
      </div>

      <section className={menuOpen ? "nav__links--open" : "nav__links"}>
        <div className="nav__header">
          <NavLink className="nav__icon" to="/" onClick={handleLinkClick}>
            <img src="/logo64.svg" alt="Magret's Logo" className="nav__logo" />
            Magret
          </NavLink>

          <div className="nav__mobile">
            <div className="nav__theme-light">
                {isDark ? (
                  <FiSun onClick={toggleTheme} className="nav__icon" />
                ) : (
                  <FiMoon onClick={toggleTheme} className="nav__icon" />
                )}
            </div>
            <div
              className={`nav__hamburger ${menuOpen ? "nav__hamburger--open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <ImCross className="nav__icon--ham" /> : <GiHamburgerMenu className="nav__icon--ham" />}
            </div>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="nav__theme-desk">
          {isDark ? (
            <FiSun onClick={toggleTheme} className="nav__icon" />
          ) : (
            <FiMoon onClick={toggleTheme} className="nav__icon" />
          )}
        </div>

        {/* Navigation Links */}
        <div className={menuOpen ? "nav__navlinks--opened" : "nav__navlinks--closed"}>
          <NavLink
            className={({ isActive }) =>
              `nav__link${isActive ? " nav__link--active" : ""}`
            }
            to="/"
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav__link${isActive ? " nav__link--active" : ""}`
            }
            to="/about"
            onClick={handleLinkClick}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav__link${isActive ? " nav__link--active" : ""}`
            }
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
          <NavLink className="nav__link" to="/contact" onClick={handleLinkClick}>
            <Button name="Get in Touch" style="button__nav-box" />
        </NavLink>
        </div>
      </section>
    </section>
  );
}
