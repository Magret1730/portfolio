import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Footer.scss";
import Icon from "../Icon/Icon";

const Footer = () => {
  const icons = [
    {
      component: <FaGithub />,
      link: "https://github.com/Magret1730",
      style: "hero__social fade-in-left",
      linkStyle: "hero__social-link"
    },
    {
      component: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/oyedele-abiodun/",
      style: "hero__social fade-in-left",
      linkStyle: "hero__social-link"
    }
  ];
  return (
    <footer className="footer">
      <div className="footer__top fade-in-up">
        <div className="footer__brand">
          <h2 className="footer__brand-title">Magret</h2>
          <p className="footer__brand-description">
            Passionate developer creating impactful digital solutions.
          </p>
          <div className="footer__socials">
            {icons.map((icon, index) => (
              <Icon key={index} {...icon} />
            ))}
          </div>
        </div>

        <div className="footer__contact fade-in-up stagger-1">
          <h3 className="footer__contact-title">Contact</h3>
          <p className="footer__contact-info">
            <strong>Email:</strong> <a href="mailto:belloabiodun17@gmail.com" className="footer__contact-link">belloabiodun17@gmail.com</a>
          </p>
          <p className="footer__contact-info">
            <strong>Location:</strong> Mount Pearl, Newfoundland and Labrador, Canada
          </p>
        </div>
      </div>

      <div className="footer__bottom fade-in-up stagger-1">
        © 2025 Magret. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
