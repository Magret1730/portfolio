import { NavLink } from "react-router-dom";
import "./Nav.scss";
import Button from "../Button/Button";

export default function Nav() {
  return (
    <section className="nav">
      <NavLink className="nav__icon" to="/">Oyedele</NavLink>

      <section className="nav__links">
        <NavLink className="nav__link" to="/">Home</NavLink>
        <NavLink className="nav__link" to="/about">About</NavLink>
        <NavLink className="nav__link" to="/projects">Projects</NavLink>
        {/* <NavLink className="nav__link" to="/resume">Resume</NavLink> */}
        <NavLink className="nav__link" to="/contact">
          <Button name="Get in Touch" style="button__nav-box" />
        </NavLink>
      </section>
    </section>
  )
}