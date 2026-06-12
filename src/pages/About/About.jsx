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
			<section className="about__skills about__card">
				<h2 className="about__subheader">Skills</h2>
				<Skills />
			</section>

			{/* Professional Experience */}
			<section className="about__experience">
				<h2 className="about__subheader">Professional Experience</h2>

				<div className="about__section-grid fade-in-up">
					<article className="about__card about__exp-item">
						<h3 className="about__card-title">
							Software Developer - Collective Interchange
						</h3>

						<ul className="about__card-list">
							<li>
								Built and optimized the Newcomer Navigator NL platform using
								React, Next.js, and TypeScript, delivering scalable and
								responsive user interfaces.
							</li>
							<li>
								Developed reusable UI components and integrated APIs and
								third-party services to enhance application functionality and
								user experience.
							</li>
							<li>
								Improved application performance through debugging,
								optimization, and adherence to clean architecture principles.
							</li>
							<li>
								Collaborated in code reviews and Git-based workflows,
								contributing to maintainable and production-ready code.
							</li>
							<li>
								Maintained technical documentation to support team collaboration
								and long-term scalability.
							</li>
						</ul>
					</article>

					<article className="about__card about__exp-item fade-in-up">
						<h3 className="about__card-title">
							Software Developer – Vifta Technology Limited
						</h3>

						<ul className="about__card-list">
							<li>
								Built and styled 10+ responsive pages using Next.js, Material
								UI, and TypeScript, ensuring consistent design and
								accessibility.
							</li>
							<li>
								Developed backend features, including file uploads and dynamic
								email templates, with Node.js, TypeScript, and MongoDB.
							</li>
							<li>
								Enhanced SEO performance by improving metadata across multiple
								pages, boosting search engine visibility.
							</li>
							<li>
								Integrated PostHog analytics across multiple components,
								enabling detailed tracking of user interactions and supporting
								data-driven decision making.
							</li>
							<li>
								Collaborated with cross-functional teams to refine
								specifications and implement full-stack features aligned with
								business goals.
							</li>
						</ul>
					</article>
				</div>
			</section>

			{/* Education */}
			<section className="about__education fade-in-up">
				<h2 className="about__subheader">Education</h2>

				<div className="about__education-grid">
					<article className="about__card about__edu-item">
						<h3>Keyin College</h3>
						<p>Diploma, Software Development</p>
						<span>Jan 2025 - Apr 2026 | Canada</span>
					</article>

					<article className="about__card about__edu-item">
						<h3>BrainStation</h3>
						<p>Diploma, Software Engineering</p>
						<span>Jan 2025 - Mar 2025 | Canada</span>
					</article>

					<article className="about__card about__edu-item">
						<h3>ALX Africa</h3>
						<p>Software Engineering Certification</p>
						<span>Mar 2023 - Aug 2024 | Remote</span>
					</article>

					<article className="about__card about__edu-item">
						<h3>Federal University of Technology, Akure</h3>
						<p>B.Tech, Applied Geology</p>
						<span>Sept 2011 - Sept 2016 | Nigeria</span>
					</article>
				</div>
			</section>

			{/* Certifications */}
			<section className="about__certifications fade-in-up">
				<h2 className="about__subheader">Certifications</h2>

				<div className="about__certifications-grid">
					<article className="about__card about__cert-item">
						<h3>AWS Cloud Practitioner</h3>
						<p>Credential ID: 2b53579d816a4e45a097febfd7ae019f</p>
						<p>Sept 2025</p>
					</article>

					<article className="about__card about__cert-item">
						<h3>ICTC WIL – Cloud Computing</h3>
						<p>ICTC Canada — Issued Aug 2025</p>
					</article>
				</div>
			</section>

			{/* Volunteer Experience */}
			<section className="about__volunteer fade-in-up">
				<h2 className="about__subheader">Volunteer Experience</h2>

				<div className="about__volunteer-items">
					<article className="about__card about__volunteer-item">
						<h3>Mentor & Instructor Coordinator – TechNest Community</h3>

						<ul className="about__card-list">
							<li>
								Conduct interview sessions for prospective students and assess
								their suitability for the program.
							</li>
							<li>
								Coordinate instructors and mentors to support smooth program
								delivery and effective communication.
							</li>
							<li>
								Lead information sessions for mentors, students, and instructors
								to explain program expectations, structure, and next steps.
							</li>
							<li>
								Serve as a point of contact for mentors, students, and
								instructors, helping resolve challenges and escalating issues
								when necessary.
							</li>
							<li>
								Facilitate communication between instructors, mentors, and
								students to maintain a smooth and impactful learning experience.
							</li>
						</ul>
					</article>

					<article className="about__card about__volunteer-item">
						<h3>Video Editor – Da Refiner's Fire Drama Ministry</h3>

						<ul className="about__card-list">
							<li>
								Create and edit engaging video content for platforms including
								YouTube, Instagram, and TikTok.
							</li>
							<li>
								Transform raw footage into compelling visual stories using
								CapCut, applying dynamic cuts, transitions, and effects.
							</li>
							<li>
								Optimize content for multiple formats, from short-form vertical
								videos to long-form productions.
							</li>
							<li>
								Manage end-to-end production, from concept and editing to final
								delivery.
							</li>
						</ul>
					</article>
				</div>
			</section>
		</section>
	);
}
