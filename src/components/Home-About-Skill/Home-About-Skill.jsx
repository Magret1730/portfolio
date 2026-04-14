import "./Home-About-Skill.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Skills from "../Skills/Skills";
import posthog from "posthog-js";
import { useEffect } from "react";

const Home_About_Skill = () => {
  useEffect(() => {
    posthog.capture('home_about_skill_section_viewed', {
      page: window.location.pathname,
    });
  }, []);

  return (
    <section className="home-about-skill fade-in-up">
      <h3 className="home-about-skill__title fade-in-up">About Me</h3>
      <p className="home-about-skill__description fade-in-up stagger-1">
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
              I hold a Software Engineering certification from ALX Africa, completed the Full Stack
              Web Development Bootcamp at BrainStation, and earned the AWS Cloud Practitioner
              Certification. I have also advanced my skills through specialized training at
              Keyin College, further strengthening my technical foundation.
            </p>
            <p className="home-about-skill__detail fade-in-left stagger-2">
              I bring approximately three years of hands-on experience building web applications, 
              along with over a year of professional experience working on real-world software projects. 
              I’ve developed and maintained scalable, user-focused applications across both frontend 
              and backend systems, collaborating with teams to deliver reliable, high-performance solutions.
            </p>
            <p className="home-about-skill__detail fade-in-left stagger-2">
              Outside of work, I channel my creativity through video editing using tools like CapCut,
              crafting engaging stories and visuals. I’m passionate about writing clean, maintainable code and
              continuously improving my skills by exploring modern technologies and best practices in software
              development.
            </p>
          </div>

          <div className="home-about-skill__buttons">
            <Link to="/about">
              <Button
                className="fade-in-left stagger-3"
                name="More About Me"
                style="button__box"
                onClick={() => {
                  posthog.capture('cta_clicked', {
                    location: 'home_about_skill_section',
                    button_name: 'More About Me',
                  })
                }}
              />
            </Link>
            <Button
              name="Download CV"
              style="button__boxed"
              href="/Abiodun_Magret_Oyedele_Resume.pdf"
              download="Abiodun_Magret_Oyedele_Resume.pdf"
              className="fade-in-left stagger-3"
              onClick={() => {
                posthog.capture('cta_clicked', {
                  location: 'home_about_skill_section',
                  button_name: 'Download CV',
                })
              }}
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
