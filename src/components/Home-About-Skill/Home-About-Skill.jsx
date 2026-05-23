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
							My journey into software development has been anything but
							traditional. With a background in Applied Geology and previous
							experience as a teacher and fashion designer, I transitioned into
							tech driven by a passion for creativity, problem-solving, and
							building impactful solutions.
						</p>
						<p className="home-about-skill__detail fade-in-left stagger-2">
							Today, I’m a Full-Stack Software Developer with over three years
							of hands-on experience building web applications and more than a
							year of professional software development experience. I work
							across frontend and backend technologies including React,
							TypeScript, Node.js, Javascript and cloud technologies.
						</p>
						<p className="home-about-skill__detail fade-in-left stagger-2">
							I hold an Honours Diploma in Software Development from Keyin
							College, completed the Software Engineering program at ALX Africa
							and the Full Stack Web Development Bootcamp at BrainStation, and
							earned the AWS Certified Cloud Practitioner certification.
						</p>
						<p className="home-about-skill__detail fade-in-left stagger-2">
							Beyond coding, I enjoy video editing and visual storytelling,
							combining creativity and technology to build meaningful digital
							experiences.
						</p>
					</div>

					<div className="home-about-skill__buttons">
						<Link to="/about">
							<Button
								className="fade-in-left stagger-3"
								name="More About Me"
								style="button__box"
								onClick={() => {
									posthog.capture("cta_clicked", {
										location: "home_about_skill_section",
										button_name: "More About Me",
									});
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
								posthog.capture("cta_clicked", {
									location: "home_about_skill_section",
									button_name: "Download CV",
								});
							}}
						/>
					</div>
				</div>

				{/* Skills Section */}
				<div className="home-about-skill__details-skills">
					<h3 className="home-about-skill__skills-title fade-in-left stagger-3">
						My Skills
					</h3>
					<div className="home-about-skill__skills-skill">
						<Skills />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home_About_Skill;
