import "./About.scss";
import Button from "../../components/Button/Button";
import PersonalImage from "../../assets/Images/magret.png";
import PersonalImage2 from "../../assets/Images/magret3.png";
import Skills from "../../components/Skills/Skills";
import { Link } from "react-router-dom";
import posthog from "posthog-js";
import { useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Icon from "../../components/Icon/Icon";

export default function About() {
  useEffect(() => {
    posthog.capture('about_page_viewed', {
      page: window.location.pathname,
    });
  }, []);

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
    <section className="about" id="About">

      {/* Top Section */}
      <section className="about__top">
        <div className="about__image">
          <img src={PersonalImage2} alt="Magret's Picture" className="about__img scale-in" />
        </div>

        <div className="about__intro">
          <h3 className="about__subheader fade-in-down">Who I am</h3>
          <div className="about__text fade-in-right">
            As a Full-Stack Software Developer with a background in Applied Geology and previous
            experience as both a teacher and fashion designer, I bring a unique blend of creativity,
            adaptability, and problem-solving to building efficient, user-friendly web applications.
            My transition from teaching into software development reflects both my passion for
            technology and my drive to create meaningful solutions.
          </div>

          <div className="about__text fade-in-right">
            I hold a Software Engineering certification from ALX Africa and completed the Full Stack
            Web Development Bootcamp at BrainStation. I have also advanced my skills through
            specialized training at Keyin College, further strengthening my technical foundation.
          </div>

          <div className="about__text fade-in-right">
            I bring approximately three years of hands-on experience building web applications, 
            along with over a year of professional experience working on real-world software projects. 
            I’ve developed and maintained scalable, user-focused applications across both frontend 
            and backend systems, collaborating with teams to deliver reliable, high-performance solutions.
          </div>

          <div className="about__text fade-in-right">
            Outside of work, I channel my creativity through video editing using tools like CapCut,
            Adobe Premiere Pro, crafting engaging stories and visuals. I’m passionate about writing clean,
            maintainable code and continuously improving my skills by exploring modern technologies and best
            practices in software development.
          </div>

          <div className="about__links fade-in-left">
            {icons.map((icon, index) => (
              <Icon
                key={index}
                {...icon}
                onClick={() => {
                  posthog.capture('about_icon_clicked', {
                    icon_name: icon.component.type.displayName || icon.component.type.name,
                    location: 'about_section',
                  });
                }}
              />
            ))}
          </div>

          <div className="about__buttons fade-in-down">
            <Link to="/contact">
              <Button
                name="Get in Touch"
                style="button__box"
                onClick={() => {
                  posthog.capture('cta_clicked', {
                    location: 'about_section',
                    button_name: 'Get in Touch',
                  })
                }}
              />
            </Link>
            <Button
              name="Download CV"
              style="button__boxed"
              href="/Abiodun_Magret_Oyedele_Resume.pdf"
              download="Abiodun_Magret_Oyedele_Resume.pdf"
              onClick={() => {
                posthog.capture('cta_clicked', {
                  location: 'about_section',
                  button_name: 'Download CV',
                })
              }}
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
            <h3 className="fade-in-left stagger-1">
              Software Developer – Collective Interchange
            </h3>

            <p className="fade-in-left stagger-1">
              Built and optimized the Newcomer Navigator NL platform using React, Next.js, and TypeScript, 
              delivering scalable and responsive user interfaces.
            </p>

            <p className="fade-in-left stagger-1">
              Developed reusable UI components and integrated APIs and third-party services to enhance 
              application functionality and user experience.
            </p>

            <p className="fade-in-left stagger-1">
              Improved application performance through debugging, optimization, and adherence to clean 
              architecture principles.
            </p>

            <p className="fade-in-left stagger-1">
              Collaborated in code reviews and Git-based workflows, contributing to maintainable and 
              production-ready code.
            </p>

            <p className="fade-in-left stagger-1">
              Maintained technical documentation to support team collaboration and long-term scalability.
            </p>
          </div>
          <div className="about__exp-item">
            <h3 className="fade-in-left stagger-1">Software Developer – Vifta Technology Limited</h3>
            <p className="fade-in-left stagger-1">
              Built and styled 10+ responsive pages using Next.js, MaterialUI and TypeScript,
              ensuring consistent design and accessibility.
            </p>
            <p className="fade-in-left stagger-1">
              Developed backend features, including file uploads and dynamic email templates,
              with Node.js, TypeScript, and MongoDB.
            </p>
            <p className="fade-in-left stagger-1">
              Enhanced SEO performance by improving metadata across multiple pages, boosting
              search engine visibility.
            </p>
            <p className="fade-in-left stagger-1">
              Integrated PostHog analytics across multiple components of the codebase, enabling
              detailed tracking of user interactions and surfacing insights on the dashboard to
              support data-driven decision making.
            </p>
            <p className="fade-in-left stagger-1">
              Collaborated with cross-functional teams to refine specifications and implement
              full-stack features aligned with business goals.
            </p>
          </div>
        </div>

        <div className="about__experience-divider">
          <div className="about__experience-column">
            <h2 className="about__subheader">Education</h2>
            <div className="about__edu-item">
              <h3 className="fade-in-left stagger-1">Keyin College</h3>
              <p className="fade-in-left stagger-1">Diploma, Software Development</p>
            </div>
            <div className="about__edu-item">
              <h3 className="fade-in-left stagger-1">BrainStation Canada</h3>
              <p className="fade-in-left stagger-1">Diploma, Software Engineering</p>
            </div>
            <div className="about__edu-item">
              <h3 className="fade-in-left stagger-1">ALX Africa</h3>
              <p className="fade-in-left stagger-1">Software Engineering Certification</p>
            </div>
          </div>

          <div className="about__experience-certifications">
            <h2 className="about__subheader">Certifications</h2>
            <div className="about__cert-item">
              <h3 className="fade-in-left stagger-1">AWS Cloud Practitioner</h3>
              <p className="fade-in-left stagger-1">
                Credential ID: <span>2b53579d816a4e45a097febfd7ae019f</span>
              </p>
            </div>
            <div className="about__cert-item">
              <h3 className="fade-in-left stagger-1">ICTC WIL – Cloud Computing</h3>
              <p className="fade-in-left stagger-1">
                ICTC Canada — Issued <span>Aug 2025</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Experience */}
      <section className="about__volunteer">
        <h2 className="about__subheader">Volunteer Experience</h2>
        <div className="about__volunteer-items">
          <div>
            <div className="about__volunteer-item">
              <h3 className="fade-in-left stagger-1">
                Mentor & Instructor Coordinator – TechNest Community
              </h3>

              <p className="fade-in-left stagger-1">
                Support the growth of aspiring developers through structured mentorship and training programs.
              </p>

              <p className="fade-in-left stagger-1">
                Coordinate instructors and contribute to curriculum planning to ensure effective learning delivery.
              </p>

              <p className="fade-in-left stagger-1">
                Conduct interviews and evaluate prospective students to ensure they meet program requirements and are well-positioned for success.
              </p>

              <p className="fade-in-left stagger-1">
                Mentor students in technical and career development, helping them build real-world skills.
              </p>

              <p className="fade-in-left stagger-1">
                Facilitate communication between instructors, mentors, and students to maintain a smooth and impactful learning experience.
              </p>
            </div>

            <div className="about__volunteer-item">
              <h3 className="fade-in-left stagger-1">
                Video Editor – Da Refiner's Fire Drama Ministry
              </h3>

              <p className="fade-in-left stagger-1">
                Create and edit engaging video content for platforms including YouTube, Instagram, and TikTok, 
                helping reach and grow a broader digital audience.
              </p>

              <p className="fade-in-left stagger-1">
                Transform raw footage into compelling visual stories using CapCut, applying dynamic cuts, 
                transitions, and effects.
              </p>

              <p className="fade-in-left stagger-1">
                Optimize content for multiple formats, from short-form vertical videos to long-form productions.
              </p>

              <p className="fade-in-left stagger-1">
                Manage end-to-end production, from concept and editing to final delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
