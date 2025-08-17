import "./About.scss";
import Button from "../../components/Button/Button";
import PersonalImage from "../../assets/Images/magret.png";
import Skills from "../../components/Skills/Skills";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about" id="About">
      {/* <h1 className="about__header">About Me</h1> */}

      {/* Top Section */}
      <section className="about__top">
        <div className="about__image">
          <img src={PersonalImage } alt="Magret portrait" className="about__img" />
        </div>

        <div className="about__intro">
          <h3 className="about__subheader">Who I am</h3>
          <div className="about__text">
            As a Full-Stack Software Developer with a background in Applied Geology and previous
            experience as both a teacher and fashion designer, I bring a unique blend of creativity,
            adaptability, and problem-solving to building efficient, user-friendly web applications.
            My transition from teaching into software development reflects both my passion for
            technology and my drive to create meaningful solutions.
          </div>

          <div className="about__text">
            I hold a Software Engineering certification from ALX Africa and completed the Full Stack
            Web Development Bootcamp at BrainStation. I have also advanced my skills through
            specialized training at Keyin College, further strengthening my technical foundation.
          </div>

          <div className="about__text">
            Professionally, I am currently gaining hands-on experience at Vifta Technology Limited,
            where I contribute to building and maintaining digital solutions that enhance user experience
            and business efficiency. I remain committed to continuous learning, always striving to
            combine creativity with technical expertise to deliver impactful digital products.
          </div>

          <div className="about__text">
            Outside of work, I channel my creativity through video editing using tools like CapCut,
            crafting engaging stories and visuals. I am collaborative, adaptable, and open to learning
            new tools and technologies, bringing both technical skills and strong interpersonal qualities
            to every project I work on.
          </div>

          <div className="about__buttons">

            <Link to="/contact">
              <Button
                name="Get in Touch"
                style="button__box"
                className="about__button"
              />
            </Link>
            <Button
              name="Download CV"
              style="button__boxed"
              href="/Abiodun_Magret_Oyedele_Resume.pdf"
              download="Abiodun_Magret_Oyedele_Resume.pdf"
            />
          </div>
        </div>
      </section>

      {/* Skills Section  */}
      <section className="about__skills">
        <h2 className="about__subheader">Skills</h2>
        <Skills />
      </section>

      {/* Experience & Education */}
      <section className="about__experience">
        <div className="about__experience-column">
          <h2 className="about__subheader">Experience</h2>
          <div className="about__exp-item">
            <h3>Software Developer – Vifta Technology Limited</h3>
            <p>
              Built and styled 10+ responsive pages using Next.js, MaterialUI and TypeScript,
              ensuring consistent design and accessibility.
            </p>
            <p>
              Developed backend features, including file uploads and dynamic email templates,
              with Node.js, TypeScript, and MongoDB.
            </p>
            <p>
              Enhanced SEO performance by improving metadata across multiple pages, boosting
              search engine visibility.
            </p>
            <p>
              Integrated PostHog analytics across multiple components of the codebase, enabling
              detailed tracking of user interactions and surfacing insights on the dashboard to
              support data-driven decision making.
            </p>
            <p>
              Collaborated with cross-functional teams to refine specifications and implement
              full-stack features aligned with business goals.
            </p>
          </div>
        </div>

        <div className="about__experience-column">
          <h2 className="about__subheader">Education</h2>
          <div className="about__edu-item">
            <h3>ALX Africa</h3>
            <p>Software Engineering Certification</p>
          </div>
          <div className="about__edu-item">
            <h3>BrainStation Canada</h3>
            <p>Diploma, Software Engineering</p>
          </div>
          <div className="about__edu-item">
            <h3>Keyin College</h3>
            <p>Diploma, Software Development</p>
          </div>
        </div>
      </section>
    </section>
  );
}
