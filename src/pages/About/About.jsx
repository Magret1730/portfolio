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
					<img
						src={PersonalImage2}
						alt="Magret's Picture"
						className="about__img scale-in"
					/>
				</div>

				<div className="about__intro">
					<h3 className="about__subheader fade-in-down">Who I am</h3>
					<div className="about__text fade-in-right">
						Before transitioning into software development, my career path moved
						through several different spaces — from Applied Geology to teaching
						and fashion design. While those experiences may seem unrelated, they
						all shaped the way I think: creatively, analytically, and with a
						strong focus on solving real problems for people.
					</div>

					<div className="about__text fade-in-right">
						What started as a transition into tech has grown into a career
						focused on building scalable, user-friendly web applications. I’ve
						spent the past few years developing my skills across both frontend
						and backend technologies, working with tools like React, TypeScript,
						Node.js, Javascript, cloud platforms, and modern development
						workflows.
					</div>

					<div className="about__text fade-in-right">
						I completed the Software Engineering program at ALX Africa, the Full
						Stack Web Development Bootcamp at BrainStation, and recently earned
						an Honours Diploma in Software Development from Keyin College. I
						also hold the AWS Certified Cloud Practitioner certification, which
						further strengthened my understanding of cloud technologies and
						scalable systems.
					</div>

					<div className="about__text fade-in-right">
						With over three years of hands-on experience building web
						applications and more than a year of professional software
						development experience, I’ve worked across both frontend and backend
						systems, collaborating with teams to build scalable applications,
						integrate APIs, resolve production issues, and deliver reliable,
						high-performance software solutions.
					</div>

					<div className="about__text fade-in-right">
						Outside of software development, I enjoy video editing and visual
						storytelling using tools like CapCut, Adobe Premiere Pro. Whether
						through code or creative media, I’m passionate about building
						experiences that connect with people while continuously improving my
						craft as a developer.
					</div>

					<div className="about__actions">
						<div className="about__buttons fade-in-down">
							<Link to="/contact">
								<Button
									name="Get in Touch"
									style="button__box about__button"
									onClick={() => {
										posthog.capture("cta_clicked", {
											location: "about_section",
											button_name: "Get in Touch",
										});
									}}
								/>
							</Link>
							<Button
								name="Download CV"
								style="button__boxed about__button"
								href="/Abiodun_Magret_Oyedele_Resume.pdf"
								download="Abiodun_Magret_Oyedele_Resume.pdf"
								onClick={() => {
									posthog.capture("cta_clicked", {
										location: "about_section",
										button_name: "Download CV",
									});
								}}
							/>
						</div>

						<div className="about__links fade-in-left">
							{icons.map((icon, index) => (
								<Icon
									key={index}
									{...icon}
									onClick={() => {
										posthog.capture("about_icon_clicked", {
											icon_name:
												icon.component.type.displayName ||
												icon.component.type.name,
											location: "about_section",
										});
									}}
								/>
							))}
						</div>
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
					<h2 className="about__subheader">Professional Experience</h2>
					<div className="about__exp-item">
						<h3 className="fade-in-left stagger-1">
							Software Developer - Collective Interchange
						</h3>

						<p className="fade-in-left stagger-1">
							Built and optimized the Newcomer Navigator NL platform using
							React, Next.js, and TypeScript, delivering scalable and responsive
							user interfaces.
						</p>

						<p className="fade-in-left stagger-1">
							Developed reusable UI components and integrated APIs and
							third-party services to enhance application functionality and user
							experience.
						</p>

						<p className="fade-in-left stagger-1">
							Improved application performance through debugging, optimization,
							and adherence to clean architecture principles.
						</p>

						<p className="fade-in-left stagger-1">
							Collaborated in code reviews and Git-based workflows, contributing
							to maintainable and production-ready code.
						</p>

						<p className="fade-in-left stagger-1">
							Maintained technical documentation to support team collaboration
							and long-term scalability.
						</p>
					</div>
					<div className="about__exp-item">
						<h3 className="fade-in-left stagger-1">
							Software Developer – Vifta Technology Limited
						</h3>
						<p className="fade-in-left stagger-1">
							Built and styled 10+ responsive pages using Next.js, MaterialUI
							and TypeScript, ensuring consistent design and accessibility.
						</p>
						<p className="fade-in-left stagger-1">
							Developed backend features, including file uploads and dynamic
							email templates, with Node.js, TypeScript, and MongoDB.
						</p>
						<p className="fade-in-left stagger-1">
							Enhanced SEO performance by improving metadata across multiple
							pages, boosting search engine visibility.
						</p>
						<p className="fade-in-left stagger-1">
							Integrated PostHog analytics across multiple components of the
							codebase, enabling detailed tracking of user interactions and
							surfacing insights on the dashboard to support data-driven
							decision making.
						</p>
						<p className="fade-in-left stagger-1">
							Collaborated with cross-functional teams to refine specifications
							and implement full-stack features aligned with business goals.
						</p>
					</div>
				</div>

				<div className="about__experience-divider">
					<div className="about__experience-column">
						<h2 className="about__subheader">Education</h2>
						<div className="about__edu-item">
							<h3 className="fade-in-left stagger-1">
								Keyin College | Diploma, Software Development
							</h3>
							<p className="fade-in-left stagger-1">
								Jan 2025 - Apr 2026 | Canada
							</p>
						</div>
						<div className="about__edu-item">
							<h3 className="fade-in-left stagger-1">
								BrainStation | Diploma, Software Engineering
							</h3>
							<p className="fade-in-left stagger-1">
								Jan 2025 - Mar 2025 | Canada
							</p>
						</div>
						<div className="about__edu-item">
							<h3 className="fade-in-left stagger-1">
								ALX Africa | Software Engineering Certification
							</h3>
							<p className="fade-in-left stagger-1">
								Mar 2023 - Aug 2024 | Remote
							</p>
						</div>
						<div className="about__edu-item">
							<h3 className="fade-in-left stagger-1">
								Federal University of Technology, Akure | B.Tech, Applied
								Geology
							</h3>
							<p className="fade-in-left stagger-1">
								Sept 2011 - Sept 2016 | Nigeria
							</p>
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
							<h3 className="fade-in-left stagger-1">
								ICTC WIL – Cloud Computing
							</h3>
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
								Conduct interview sessions for prospective students and assess
								their suitability for the program.
							</p>

							<p className="fade-in-left stagger-1">
								Coordinate instructors and mentors to support smooth program
								delivery and effective communication.
							</p>

							<p className="fade-in-left stagger-1">
								Lead information sessions for mentors, students, and instructors
								to explain program expectations, structure, and next steps.
							</p>

							<p className="fade-in-left stagger-1">
								Serve as a point of contact for mentors, students, and
								instructors, helping resolve challenges and escalating issues
								when necessary.
							</p>

							<p className="fade-in-left stagger-1">
								Facilitate communication between instructors, mentors, and
								students to maintain a smooth and impactful learning experience.
							</p>
						</div>

						<div className="about__volunteer-item">
							<h3 className="fade-in-left stagger-1">
								Video Editor – Da Refiner's Fire Drama Ministry
							</h3>

							<p className="fade-in-left stagger-1">
								Create and edit engaging video content for platforms including
								YouTube, Instagram, and TikTok, helping reach and grow a broader
								digital audience.
							</p>

							<p className="fade-in-left stagger-1">
								Transform raw footage into compelling visual stories using
								CapCut, applying dynamic cuts, transitions, and effects.
							</p>

							<p className="fade-in-left stagger-1">
								Optimize content for multiple formats, from short-form vertical
								videos to long-form productions.
							</p>

							<p className="fade-in-left stagger-1">
								Manage end-to-end production, from concept and editing to final
								delivery.
							</p>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
