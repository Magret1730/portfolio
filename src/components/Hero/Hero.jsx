import "./Hero.scss";
import PersonalImage from "../../assets/Images/magret.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Hero() {

  return (
    <div className="hero fade-in-left">
      <section className="hero__box fade-in-left">
        <h1 className="hero__header fade-in-left">Hello! I am</h1>
        <h1 className="hero__subheader fade-in-left">Abiodun Magret Oyedele</h1>
        <h1 className="hero__title fade-in-left">FullStack Software Developer</h1>
        <p className="hero__texts fade-in-left">
            I excel at building efficient, user-focused web applications
            by seamlessly integrating front-end and back-end technologies.
        </p>

        <div className="hero__buttons fade-in-left">
          <Link to="/contact">
            <Button name="Get in Touch" style="button__box fade-in-left" />
          </Link>
          <Link to="/projects">
            <Button name="View my Work" style="button__boxed fade-in-left" />
          </Link>
        </div>

        <div className="hero__socials fade-in-left">
          <a
            href="https://github.com/Magret1730"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social fade-in-left"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/oyedele-abiodun/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social fade-in-left"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </section>

      <div className="hero__images scale-in">
        <img className="hero__image " src={PersonalImage} alt="Personal Picture" />
      </div>
    </div>
  )
}