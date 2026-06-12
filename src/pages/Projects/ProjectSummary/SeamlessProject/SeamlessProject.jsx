import React from "react";
import "./SeamlessProject.scss";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import posthog from "posthog-js";
import Button from "../../../../components/Button/Button";

const SeamlessProject = () => {
	const navigate = useNavigate();

	const features = [
		"Interactive multiple-choice quiz experience",
		"Instant feedback with AI-related explanations",
		"Score tracking and quiz summary at the end",
		"Responsive React interface for different screen sizes",
		"Question bank powered by a Node.js and Express backend",
		"Google Gemini integration for AI-generated answer analysis",
	];

	const technologies = [
		"React",
		"React Router",
		"SCSS",
		"React Hooks",
		"Node.js",
		"Express.js",
		"Google Gemini API",
		"REST API",
	];

	const frontendHighlights = [
		"Built an interactive quiz flow using React components and hooks",
		"Used React Router to manage navigation between app pages",
		"Implemented score tracking and result summary experience",
		"Created responsive UI styling with SCSS",
		"Connected the frontend to the backend API configuration",
	];

	const backendHighlights = [
		"Backend provides quiz question endpoints",
		"Supports question-specific explanations",
		"Uses Google Generative AI SDK for Gemini-powered responses",
		"Provides RESTful routes for quiz functionality",
		"Supports score analysis and answer feedback",
	];

	const endpoints = [
		{
			method: "GET",
			endpoint: "/questions",
			description: "Get all quiz questions",
		},
		{
			method: "GET",
			endpoint: "/questions/:id",
			description: "Get a specific quiz question",
		},
		{
			method: "GET",
			endpoint: "/explanation/:id",
			description: "Get explanation for a question",
		},
		{
			method: "GET",
			endpoint: "/ask-gemini",
			description: "Get AI-generated answer analysis",
		},
	];

	const contributors = [
		{
			name: "Anusha Dunaboyina",
			link: "https://github.com/AnushaDunaboyina",
		},
		{
			name: "Abiodun Magret Oyedele",
			link: "https://github.com/Magret1730",
		},
		{
			name: "Diya Sharma",
			link: "https://github.com/Sharma-Diya",
		},
		{
			name: "Khushbu Shukla",
			link: "https://github.com/KhushbuShukla008",
		},
		{
			name: "Inzer Haroon",
			link: "https://github.com/inzer-h",
		},
		{
			name: "Kristyna Cabanova",
			link: "https://github.com/Kcabanova",
		},
		{
			name: "Maria Reyes",
			link: "https://github.com/MariaReyesR",
		},
		{
			name: "Sara Chen",
			link: "https://github.com/saracdata",
		},
	];

	return (
		<main className="seamless-summary-page">
			<section className="seamless-summary-page__hero">
				<div className="seamless-summary-page__hero-content">
					<div className="seamless-summary-page__hero-header">
						<p className="seamless-summary-page__label">
							Collaborative AI Quiz Project
						</p>

						<div
							className="seamless-summary-page__back-link"
							onClick={() => {
								posthog.capture("cta_clicked", {
									location: "seamless_summary_page_hero_section",
									button_name: "Go Back",
								});

								navigate("/projects");
							}}
						>
							<FaArrowLeft />
							<span className="seamless-summary-page__back-link-text">
								Back to Projects
							</span>
						</div>
					</div>

					<h1 className="seamless-summary-page__title">SEAMLESS AI Quiz App</h1>

					<p className="seamless-summary-page__intro">
						An interactive quiz application designed to help users learn about
						AI tools and their real-life applications through multiple-choice
						questions, instant feedback, score tracking, and AI-powered
						explanations.
					</p>

					<div className="seamless-summary-page__actions">
						<a
							href="https://github.com/Magret1730/omnicoders-ip-client"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								name="View Frontend Code"
								style="button__home-contact"
								onClick={() => {
									posthog.capture("cta_clicked", {
										location: "seamless_summary_page_hero_section",
										button_name: "View Frontend Code",
									});
								}}
							/>
						</a>

						<a
							href="https://github.com/AnushaDunaboyina/omnicoders-ip-api"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								name="View Backend Code"
								style="button__home-contact"
								onClick={() => {
									posthog.capture("cta_clicked", {
										location: "seamless_summary_page_hero_section",
										button_name: "View Backend Code",
									});
								}}
							/>
						</a>
					</div>
				</div>
			</section>

			<section className="seamless-summary-page__content">
				<div className="seamless-summary-page__overview-grid">
					<article className="seamless-summary-page__card seamless-summary-page__card--large">
						<p className="seamless-summary-page__label">Overview</p>

						<h2 className="seamless-summary-page__section-title">
							Project Summary
						</h2>

						<p>
							SEAMLESS is an AI-focused quiz game that teaches users about AI
							tools and how they can be applied in everyday life. Users answer
							multiple-choice questions, receive feedback, and view a score
							summary at the end of the quiz.
						</p>

						<p>
							The frontend was built with React, React Router, React Hooks, and
							SCSS. The backend uses Node.js and Express, with Google Gemini
							integration to provide AI-generated explanations and answer
							analysis.
						</p>
					</article>

					<aside className="seamless-summary-page__card seamless-summary-page__quick-info">
						<p className="seamless-summary-page__label">Project Type</p>

						<h2 className="seamless-summary-page__section-title">
							AI Quiz App
						</h2>

						<div className="seamless-summary-page__info-list">
							<div>
								<span>Context</span>
								<strong>Collaborative Project</strong>
							</div>

							<div>
								<span>Focus</span>
								<strong>Quiz UI, API Integration, AI Explanations</strong>
							</div>

							<div>
								<span>AI Tool</span>
								<strong>Google Gemini</strong>
							</div>
						</div>
					</aside>
				</div>

				<section className="seamless-summary-page__section">
					<div className="seamless-summary-page__section-heading">
						<p className="seamless-summary-page__label">Features</p>

						<h2 className="seamless-summary-page__section-title">
							What the App Does
						</h2>
					</div>

					<div className="seamless-summary-page__feature-grid">
						{features.map((feature) => (
							<div
								className="seamless-summary-page__feature-card"
								key={feature}
							>
								<span aria-hidden="true">✓</span>
								<p>{feature}</p>
							</div>
						))}
					</div>
				</section>

				<section className="seamless-summary-page__section">
					<div className="seamless-summary-page__section-heading">
						<p className="seamless-summary-page__label">Tech Stack</p>

						<h2 className="seamless-summary-page__section-title">
							Tools and Technologies
						</h2>
					</div>

					<div className="seamless-summary-page__tech-stack">
						{technologies.map((technology) => (
							<span key={technology}>{technology}</span>
						))}
					</div>
				</section>

				<section className="seamless-summary-page__section">
					<div className="seamless-summary-page__contribution-card">
						<div>
							<p className="seamless-summary-page__label">Frontend Work</p>

							<h2 className="seamless-summary-page__section-title">
								User Experience and Quiz Flow
							</h2>

							<p>
								The frontend focuses on creating a smooth learning experience
								where users can move through quiz questions, receive feedback,
								track their score, and view their final result.
							</p>
						</div>

						<ul>
							{frontendHighlights.map((highlight) => (
								<li key={highlight}>{highlight}</li>
							))}
						</ul>
					</div>
				</section>

				<section className="seamless-summary-page__section">
					<div className="seamless-summary-page__contribution-card">
						<div>
							<p className="seamless-summary-page__label">Backend / AI</p>

							<h2 className="seamless-summary-page__section-title">
								API and Gemini Integration
							</h2>

							<p>
								The backend powers the quiz questions and explanation features,
								including endpoints for retrieving questions and generating
								AI-powered answer analysis through Gemini.
							</p>
						</div>

						<ul>
							{backendHighlights.map((highlight) => (
								<li key={highlight}>{highlight}</li>
							))}
						</ul>
					</div>
				</section>

				<section className="seamless-summary-page__section">
					<div className="seamless-summary-page__section-heading">
						<p className="seamless-summary-page__label">API Design</p>

						<h2 className="seamless-summary-page__section-title">
							Sample API Endpoints
						</h2>

						<p>
							The backend provides RESTful endpoints for retrieving quiz
							questions, fetching question explanations, and generating
							AI-powered answer feedback.
						</p>
					</div>

					<div className="seamless-summary-page__endpoint-card">
						{endpoints.map((endpoint) => (
							<div
								className="seamless-summary-page__endpoint-row"
								key={`${endpoint.method}-${endpoint.endpoint}`}
							>
								<span className="seamless-summary-page__endpoint-method">
									{endpoint.method}
								</span>

								<code>{endpoint.endpoint}</code>

								<p>{endpoint.description}</p>
							</div>
						))}
					</div>
				</section>

				<section className="seamless-summary-page__section">
					<div className="seamless-summary-page__collaboration-card">
						<div>
							<p className="seamless-summary-page__label">Collaboration</p>

							<h2 className="seamless-summary-page__section-title">
								Team Project Note
							</h2>

							<p>
								SEAMLESS was developed collaboratively by the OmniCoders team.
								The application combines frontend quiz interaction with a
								backend API and Gemini-powered explanations to create an
								educational AI learning experience.
							</p>
						</div>

						<div className="seamless-summary-page__contributors">
							{contributors.map((contributor) => (
								<a
									href={contributor.link}
									target="_blank"
									rel="noopener noreferrer"
									key={contributor.name}
								>
									{contributor.name}
								</a>
							))}
						</div>
					</div>
				</section>
			</section>
		</main>
	);
};

export default SeamlessProject;
