import React from "react";
import "./BookHiveProject.scss";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import posthog from "posthog-js";
import Button from "../../../../components/Button/Button";

const BookHiveProject = () => {
	const navigate = useNavigate();

	const features = [
		"User registration and login with token-based authentication",
		"Password hashing so user passwords are not stored in plain text",
		"Password reset flow using Nodemailer",
		"Admin book management for adding, updating, and removing books",
		"User borrowing and returning functionality",
		"Book browsing and search by title, author, or genre",
	];

	const technologies = [
		"Node.js",
		"Express.js",
		"PostgreSQL",
		"Sequelize ORM",
		"bcrypt",
		"JWT",
		"Nodemailer",
		"REST API",
	];

	const backendHighlights = [
		"Built a RESTful backend API for a library management system",
		"Implemented authentication using bcrypt and JSON Web Tokens",
		"Created admin-protected routes for managing books and users",
		"Added user routes for borrowing, returning, and viewing borrow history",
		"Implemented password reset functionality using Nodemailer",
		"Used Sequelize ORM with PostgreSQL for database models and queries",
	];

	const endpoints = [
		{
			method: "POST",
			endpoint: "/api/v1/users/register",
			description: "Register a new user",
		},
		{
			method: "POST",
			endpoint: "/api/v1/users/login",
			description: "Log in and receive authentication token",
		},
		{
			method: "PUT",
			endpoint: "/api/v1/users/forgotPassword",
			description: "Request password reset link",
		},
		{
			method: "GET",
			endpoint: "/api/v1/books",
			description: "Get all books",
		},
		{
			method: "GET",
			endpoint: "/api/v1/books/search",
			description: "Search books by title, author, or genre",
		},
		{
			method: "POST",
			endpoint: "/api/v1/books/addBook",
			description: "Admin route to add a new book",
		},
		{
			method: "POST",
			endpoint: "/api/v1/borrow/:bookId",
			description: "Borrow a book",
		},
		{
			method: "PUT",
			endpoint: "/api/v1/borrow/:bookId",
			description: "Return a borrowed book",
		},
	];

	return (
		<main className="bookhive-summary-page">
			<section className="bookhive-summary-page__hero">
				<div className="bookhive-summary-page__hero-content">
					<div className="bookhive-summary-page__hero-header">
						<p className="bookhive-summary-page__label">
							Backend Library API Project
						</p>

						<div
							className="bookhive-summary-page__back-link"
							onClick={() => {
								posthog.capture("cta_clicked", {
									location: "bookhive_summary_page_hero_section",
									button_name: "Go Back",
								});

								navigate("/projects");
							}}
						>
							<FaArrowLeft />
							<span className="bookhive-summary-page__back-link-text">
								Back to Projects
							</span>
						</div>
					</div>

					<h1 className="bookhive-summary-page__title">BookHive</h1>

					<p className="bookhive-summary-page__intro">
						A backend library management API built with Node.js, Express,
						Sequelize, and PostgreSQL. The system allows users to browse,
						borrow, return, and review books, while admins can manage books and
						user records.
					</p>

					<div className="bookhive-summary-page__actions">
						<a
							href="https://github.com/Magret1730/BookHive-Portfolio-Project"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								name="View GitHub"
								style="button__home-contact"
								onClick={() => {
									posthog.capture("cta_clicked", {
										location: "bookhive_summary_page_hero_section",
										button_name: "View GitHub",
									});
								}}
							/>
						</a>
					</div>
				</div>
			</section>

			<section className="bookhive-summary-page__content">
				<div className="bookhive-summary-page__overview-grid">
					<article className="bookhive-summary-page__card bookhive-summary-page__card--large">
						<p className="bookhive-summary-page__label">Overview</p>

						<h2 className="bookhive-summary-page__section-title">
							Project Summary
						</h2>

						<p>
							BookHive is a backend library interface that provides API
							functionality for users and admins. Users can register, log in,
							browse books, borrow books, return books, reset their password,
							and update their profile details.
						</p>

						<p>
							Admins have additional permissions to manage books and view users.
							The backend uses PostgreSQL with Sequelize ORM for data handling,
							bcrypt for password hashing, and JSON Web Tokens for
							authentication.
						</p>
					</article>

					<aside className="bookhive-summary-page__card bookhive-summary-page__quick-info">
						<p className="bookhive-summary-page__label">Project Type</p>

						<h2 className="bookhive-summary-page__section-title">
							Backend API
						</h2>

						<div className="bookhive-summary-page__info-list">
							<div>
								<span>Role</span>
								<strong>Backend Developer</strong>
							</div>

							<div>
								<span>Focus</span>
								<strong>Authentication, API Routes, Database</strong>
							</div>

							<div>
								<span>Database</span>
								<strong>PostgreSQL with Sequelize</strong>
							</div>
						</div>
					</aside>
				</div>

				<section className="bookhive-summary-page__section">
					<div className="bookhive-summary-page__section-heading">
						<p className="bookhive-summary-page__label">Features</p>

						<h2 className="bookhive-summary-page__section-title">
							What the API Supports
						</h2>
					</div>

					<div className="bookhive-summary-page__feature-grid">
						{features.map((feature) => (
							<div
								className="bookhive-summary-page__feature-card"
								key={feature}
							>
								<span aria-hidden="true">✓</span>
								<p>{feature}</p>
							</div>
						))}
					</div>
				</section>

				<section className="bookhive-summary-page__section">
					<div className="bookhive-summary-page__section-heading">
						<p className="bookhive-summary-page__label">Tech Stack</p>

						<h2 className="bookhive-summary-page__section-title">
							Tools and Technologies
						</h2>
					</div>

					<div className="bookhive-summary-page__tech-stack">
						{technologies.map((technology) => (
							<span key={technology}>{technology}</span>
						))}
					</div>
				</section>

				<section className="bookhive-summary-page__section">
					<div className="bookhive-summary-page__contribution-card">
						<div>
							<p className="bookhive-summary-page__label">My Contribution</p>

							<h2 className="bookhive-summary-page__section-title">
								Backend API Development
							</h2>

							<p>
								I built the backend functionality for the BookHive library
								system, focusing on authentication, protected routes, user and
								admin flows, book management, borrowing logic, and database
								integration.
							</p>
						</div>

						<ul>
							{backendHighlights.map((highlight) => (
								<li key={highlight}>{highlight}</li>
							))}
						</ul>
					</div>
				</section>

				<section className="bookhive-summary-page__section">
					<div className="bookhive-summary-page__section-heading">
						<p className="bookhive-summary-page__label">API Design</p>

						<h2 className="bookhive-summary-page__section-title">
							Sample API Endpoints
						</h2>

						<p>
							The API includes routes for users, books, and borrowing. Some
							routes are available to both users and admins, while admin-only
							routes protect book and user management features.
						</p>
					</div>

					<div className="bookhive-summary-page__endpoint-card">
						{endpoints.map((endpoint) => (
							<div
								className="bookhive-summary-page__endpoint-row"
								key={`${endpoint.method}-${endpoint.endpoint}`}
							>
								<span className="bookhive-summary-page__endpoint-method">
									{endpoint.method}
								</span>

								<code>{endpoint.endpoint}</code>

								<p>{endpoint.description}</p>
							</div>
						))}
					</div>
				</section>

				<section className="bookhive-summary-page__section">
					<div className="bookhive-summary-page__security-card">
						<div>
							<p className="bookhive-summary-page__label">Security</p>

							<h2 className="bookhive-summary-page__section-title">
								Authentication and Password Handling
							</h2>
						</div>

						<p>
							BookHive uses bcrypt to hash passwords before storing them in the
							database and JSON Web Tokens for token-based authentication. It
							also supports a password reset flow through Nodemailer, allowing
							users to reset their password securely.
						</p>
					</div>
				</section>
			</section>
		</main>
	);
};

export default BookHiveProject;
