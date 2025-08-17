import { NavLink } from "react-router-dom";
import "./Nav.scss";
import Button from "../Button/Button";

export default function Nav() {
  return (
    <section className="nav">
      <NavLink className="nav__icon" to="/">
        <img src="/logo64.svg" alt="Magret's Logo" className="nav__logo" />
        Magret
      </NavLink>

      <section className="nav__links">
        <NavLink
          className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}
          to="/">
            Home
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}
          to="/about">
            About
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}
          to="/projects">
            Projects
        </NavLink>
        <a
          className="nav__link"
          href="/Abiodun_Magret_Oyedele_Resume.pdf"
          download="Abiodun_Magret_Oyedele_Resume.pdf">
            Download CV
        </a>
        <NavLink
          className="nav__link"
          to="/contact">
          <Button name="Get in Touch" style="button__nav-box" />
        </NavLink>
      </section>
    </section>
  )
}