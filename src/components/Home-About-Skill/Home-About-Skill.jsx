import "./Home-About-Skill.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Skills from "../Skills/Skills";

const Home_About_Skill = () => {
  return (
    <section className="home-about-skill fade-in-up">
      <h3 className="home-about-skill__title fade-in-down">About Me</h3>
      <p className="home-about-skill__description fade-in stagger-1">
        Here's a bit about my background and what I do.
      </p>

      <div className="home-about-skill__details-box">
        {/* About Section */}
        <div className="home-about-skill__details-about">
          <div className="home-about-skill__details">
            <p className="home-about-skill__detail fade-in-left stagger-2">
              As a Full-Stack Software Developer with a background in Applied Geology and previous
              experience as both a teacher and fashion designer, I bring a unique blend of creativity,
              adaptability, and problem-solving to building efficient, user-friendly web applications.
              My transition from teaching into software development reflects both my passion for
              technology and my drive to create meaningful solutions.
            </p>
            <p className="home-about-skill__detail fade-in-left stagger-2">
              I hold a Software Engineering certification from ALX Africa and completed the Full Stack
              Web Development Bootcamp at BrainStation. I have also advanced my skills through
              specialized training at Keyin College, further strengthening my technical foundation.
            </p>
            <p className="home-about-skill__detail fade-in-left stagger-2">
              Professionally, I am currently working at Vifta Technology Limited as a Junior Software Developer,
              where I contribute to building and maintaining digital solutions that enhance user experience
              and business efficiency. I remain committed to continuous learning, always striving to
              combine creativity with technical expertise to deliver impactful digital products.
            </p>
            <p className="home-about-skill__detail fade-in-left stagger-2">
              Outside of work, I channel my creativity through video editing using tools like CapCut,
              crafting engaging stories and visuals. I am collaborative, adaptable, and open to learning
              new tools and technologies, bringing both technical skills and strong interpersonal qualities
              to every project I work on.
            </p>
          </div>

          <div className="home-about-skill__buttons">
            <Link to="/about">
              <Button
                className="fade-in-left stagger-3"
                name="More About Me"
                style="button__box"
              />
            </Link>
            <Button
              name="Download CV"
              style="button__boxed"
              href="/Abiodun_Magret_Oyedele_Resume.pdf"
              download="Abiodun_Magret_Oyedele_Resume.pdf"
              className="fade-in-left stagger-3"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="home-about-skill__details-skills">
          <h3 className="home-about-skill__skills-title fade-in-left stagger-3">My Skills</h3>
          <div className="home-about-skill__skills-skill">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_About_Skill;
