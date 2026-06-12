import React from "react";
import "./GymManagementProject.scss";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import { FaArrowLeft } from "react-icons/fa";
import posthog from "posthog-js";

const GymManagementProject = () => {
  const navigate = useNavigate();

	const features = [
		"Role-based access for Admins, Trainers, and Members",
		"Secure registration and login with BCrypt password hashing",
		"PostgreSQL database integration for persistent data storage",
		"CRUD operations for users, memberships, workout classes, and merchandise",
		"DAO and Service layer structure for cleaner backend organization",
		"Console-based menu system with user-friendly prompts",
	];

	const technologies = [
		"Java",
		"PostgreSQL",
		"BCrypt",
		"DAO Pattern",
		"Service Layer",
		"Javadocs",
		"Git/GitHub",
	];

	const contributions = [
		"Built DAO classes for users, admins, trainers, members, memberships, workout classes, and merchandise",
		"Implemented SQL CRUD operations using prepared statements",
		"Created password hashing and verification logic using BCrypt",
		"Worked on the console-based application flow in Main.java",
		"Contributed to the database schema, testing, documentation, and Javadocs",
	];

	return (
		<main className="gym-summary-page">
			<section className="gym-summary-page__hero">
				<div className="gym-summary-page__hero-content">
					<div className="gym-summary-page__hero-header">
						<p className="gym-summary-page__label">Java Backend Project</p>
						<div
							className="gym-summary-page__back-link"
							onClick={() => {
								posthog.capture("cta_clicked", {
									location: "gym_summary_page_hero_section",
									button_name: "Go Back",
								});

								navigate("/projects");
							}}
						>
							<FaArrowLeft />
							<span className="gym-summary-page__back-link-text">
								Back to Projects
							</span>
						</div>
					</div>

					<h1 className="gym-summary-page__title">Gym Management System</h1>

					<p className="gym-summary-page__intro">
						A console-based Java application for managing gym users,
						memberships, workout classes, and merchandise using role-based
						access and PostgreSQL database storage.
					</p>

					<div className="gym-summary-page__actions">
						<Link to="#demo">
							<Button
								name="Watch Demo"
								style="button__home-contact"
								onClick={() => {
									posthog.capture("cta_clicked", {
										location: "gym_summary_page_hero_section",
										button_name: "Watch Demo",
									});
								}}
							/>
						</Link>
						<Link to="https://github.com/CactusTournament/JavaFinalWinter2025">
							<Button
								name="View GitHub"
								style="button__home-contact"
								onClick={() => {
									posthog.capture("cta_clicked", {
										location: "gym_summary_page_hero_section",
										button_name: "View GitHub",
									});
								}}
							/>
						</Link>
					</div>
				</div>
			</section>

			<section className="gym-summary-page__content">
				<div className="gym-summary-page__overview-grid">
					<article className="gym-summary-page__card gym-summary-page__card--large">
						<p className="gym-summary-page__label">Overview</p>

						<h2>Project Summary</h2>

						<p>
							The Gym Management System was built to support basic gym
							operations through a text-based menu system. Users can register,
							log in, and access different actions depending on whether they are
							an Admin, Trainer, or Member.
						</p>

						<p>
							The application stores user, membership, workout class, and
							merchandise data in PostgreSQL. It also uses BCrypt to protect
							passwords and follows a layered structure with Models, DAOs,
							Services, Utilities, and a Main application entry point.
						</p>
					</article>

					<aside className="gym-summary-page__card gym-summary-page__quick-info">
						<p className="gym-summary-page__label">Project Type</p>
						<h2>Console App</h2>

						<div className="gym-summary-page__info-list">
							<div>
								<span>Role</span>
								<strong>Backend / Java Developer</strong>
							</div>

							<div>
								<span>Focus</span>
								<strong>Database, Security, CRUD, Testing</strong>
							</div>

							<div>
								<span>Database</span>
								<strong>PostgreSQL</strong>
							</div>
						</div>
					</aside>
				</div>

				<section className="gym-summary-page__section">
					<div className="gym-summary-page__section-heading">
						<p className="gym-summary-page__label">Features</p>
						<h2>What the System Does</h2>
					</div>

					<div className="gym-summary-page__feature-grid">
						{features.map((feature) => (
							<div className="gym-summary-page__feature-card" key={feature}>
								<span aria-hidden="true">✓</span>
								<p>{feature}</p>
							</div>
						))}
					</div>
				</section>

				<section className="gym-summary-page__section">
					<div className="gym-summary-page__section-heading">
						<p className="gym-summary-page__label">Tech Stack</p>
						<h2>Tools and Technologies</h2>
					</div>

					<div className="gym-summary-page__tech-stack">
						{technologies.map((technology) => (
							<span key={technology}>{technology}</span>
						))}
					</div>
				</section>

				<section className="gym-summary-page__section">
					<div className="gym-summary-page__contribution-card">
						<div>
							<p className="gym-summary-page__label">My Contribution</p>
							<h2>What I Worked On</h2>

							<p>
								My main contribution was building the data access foundation and
								supporting backend logic for the application. I worked on the
								DAO layer, password security, database operations, testing, and
								documentation.
							</p>
						</div>

						<ul>
							{contributions.map((contribution) => (
								<li key={contribution}>{contribution}</li>
							))}
						</ul>
					</div>
				</section>

				<section className="gym-summary-page__section" id="demo">
					<div className="gym-summary-page__section-heading">
						<p className="gym-summary-page__label">Demo</p>
						<h2>Project Walkthrough</h2>
						<p>
							The video below gives a walkthrough of the project, including the
							console menu flow, role-based actions, and database-driven
							features.
						</p>
					</div>

					<div className="gym-summary-page__video-card">
						<div className="gym-summary-page__video-wrapper">
							<iframe
								src="https://www.youtube.com/embed/Ut9ake7GVQg"
								title="Gym Management System Demo"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					</div>
				</section>
			</section>
		</main>
	);
};

export default GymManagementProject;
