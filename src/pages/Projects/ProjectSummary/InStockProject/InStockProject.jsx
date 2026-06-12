import React from "react";
import "./InStockProject.scss";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import posthog from "posthog-js";
import Button from "../../../../components/Button/Button";

const InStockProject = () => {
	const navigate = useNavigate();

	const features = [
		"View, add, edit, and delete warehouse records",
		"View inventory items across multiple warehouse locations",
		"Add, edit, and remove inventory items",
		"Track inventory status as In Stock or Out of Stock",
		"Responsive frontend interface for different screen sizes",
		"RESTful backend API with structured JSON responses",
	];

	const technologies = [
		"React",
		"React Router",
		"Axios",
		"SASS",
		"Vite",
		"Node.js",
		"Express.js",
		"MySQL",
		"Knex.js",
	];

	const backendHighlights = [
		"Created REST API endpoints for warehouses and inventory items",
		"Implemented CRUD operations for warehouse and inventory management",
		"Used MySQL and Knex.js for database queries, migrations, and seeds",
		"Added validation rules for warehouse and inventory form data",
		"Handled backend errors with structured API responses",
		"Supported frontend integration through CORS and JSON API responses",
	];

	const endpoints = [
		{
			method: "GET",
			endpoint: "/warehouses",
			description: "Get all warehouses",
		},
		{
			method: "POST",
			endpoint: "/warehouses",
			description: "Create a new warehouse",
		},
		{
			method: "PUT",
			endpoint: "/warehouses/:id",
			description: "Update a warehouse",
		},
		{
			method: "DELETE",
			endpoint: "/warehouses/:id",
			description: "Delete a warehouse",
		},
		{
			method: "GET",
			endpoint: "/inventories",
			description: "Get all inventory items",
		},
		{
			method: "POST",
			endpoint: "/inventories",
			description: "Create a new inventory item",
		},
	];

	const contributors = [
		{
			name: "Brigid Corey",
			link: "https://github.com/digibrigi",
		},
		{
			name: "Karen Ngo",
			link: "https://github.com/kngo",
		},
		{
			name: "Abiodun Magret Oyedele",
			link: "https://github.com/Magret1730",
		},
	];

	return (
		<main className="instock-summary-page">
			<section className="instock-summary-page__hero">
				<div className="instock-summary-page__hero-content">
					<div className="instock-summary-page__hero-header">
						<p className="instock-summary-page__label">
							Collaborative Full-Stack Project
						</p>

						<div
							className="instock-summary-page__back-link"
							onClick={() => {
								posthog.capture("cta_clicked", {
									location: "instock_summary_page_hero_section",
									button_name: "Go Back",
								});

								navigate("/projects");
							}}
						>
							<FaArrowLeft />
							<span className="instock-summary-page__back-link-text">
								Back to Projects
							</span>
						</div>
					</div>

					<h1 className="instock-summary-page__title">InStock</h1>

					<p className="instock-summary-page__intro">
						A warehouse inventory management system built as a collaborative
						BrainStation project. The application helps manage warehouses,
						inventory items, stock status, and warehouse-specific inventory
						records.
					</p>

					<div className="instock-summary-page__actions">
						<a
							href="https://github.com/Magret1730/group2-instock-api"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								name="View Backend Code"
								style="button__home-contact"
								onClick={() => {
									posthog.capture("cta_clicked", {
										location: "instock_summary_page_hero_section",
										button_name: "View Backend Code",
									});
								}}
							/>
						</a>

						<a
							href="https://github.com/kngo/group2-instock"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								name="View Frontend Repo"
								style="button__home-contact"
								onClick={() => {
									posthog.capture("cta_clicked", {
										location: "instock_summary_page_hero_section",
										button_name: "View Frontend Repo",
									});
								}}
							/>
						</a>
					</div>
				</div>
			</section>

			<section className="instock-summary-page__content">
				<div className="instock-summary-page__overview-grid">
					<article className="instock-summary-page__card instock-summary-page__card--large">
						<p className="instock-summary-page__label">Overview</p>

						<h2 className="instock-summary-page__section-title">
							Project Summary
						</h2>

						<p>
							InStock is a React-based warehouse inventory management system
							that provides tools for managing warehouse locations and inventory
							records across different locations.
						</p>

						<p>
							The frontend provides a clean user interface for warehouse and
							inventory tasks, while the backend API handles data management,
							validation, database operations, and structured responses for the
							client application.
						</p>
					</article>

					<aside className="instock-summary-page__card instock-summary-page__quick-info">
						<p className="instock-summary-page__label">Project Type</p>

						<h2 className="instock-summary-page__section-title">
							Full-Stack App
						</h2>

						<div className="instock-summary-page__info-list">
							<div>
								<span>Context</span>
								<strong>BrainStation Collaborative Project</strong>
							</div>

							<div>
								<span>My Focus</span>
								<strong>Backend API, Database, Validation</strong>
							</div>

							<div>
								<span>Stack</span>
								<strong>React, Node.js, Express, MySQL</strong>
							</div>
						</div>
					</aside>
				</div>

				<section className="instock-summary-page__section">
					<div className="instock-summary-page__section-heading">
						<p className="instock-summary-page__label">Features</p>

						<h2 className="instock-summary-page__section-title">
							What the System Does
						</h2>
					</div>

					<div className="instock-summary-page__feature-grid">
						{features.map((feature) => (
							<div className="instock-summary-page__feature-card" key={feature}>
								<span aria-hidden="true">✓</span>
								<p>{feature}</p>
							</div>
						))}
					</div>
				</section>

				<section className="instock-summary-page__section">
					<div className="instock-summary-page__section-heading">
						<p className="instock-summary-page__label">Tech Stack</p>

						<h2 className="instock-summary-page__section-title">
							Tools and Technologies
						</h2>
					</div>

					<div className="instock-summary-page__tech-stack">
						{technologies.map((technology) => (
							<span key={technology}>{technology}</span>
						))}
					</div>
				</section>

				<section className="instock-summary-page__section">
					<div className="instock-summary-page__contribution-card">
						<div>
							<p className="instock-summary-page__label">My Contribution</p>

							<h2 className="instock-summary-page__section-title">
								Backend API Development
							</h2>

							<p>
								My main contribution was on the backend side of the project,
								where I worked on the API structure, database operations,
								validation, and server-side functionality needed to support the
								warehouse and inventory management features.
							</p>
						</div>

						<ul>
							{backendHighlights.map((highlight) => (
								<li key={highlight}>{highlight}</li>
							))}
						</ul>
					</div>
				</section>

				<section className="instock-summary-page__section">
					<div className="instock-summary-page__section-heading">
						<p className="instock-summary-page__label">API Design</p>

						<h2 className="instock-summary-page__section-title">
							Sample Backend Endpoints
						</h2>

						<p>
							The backend API supports warehouse and inventory CRUD operations,
							allowing the frontend to create, retrieve, update, and delete
							records.
						</p>
					</div>

					<div className="instock-summary-page__endpoint-card">
						{endpoints.map((endpoint) => (
							<div
								className="instock-summary-page__endpoint-row"
								key={`${endpoint.method}-${endpoint.endpoint}`}
							>
								<span className="instock-summary-page__endpoint-method">
									{endpoint.method}
								</span>

								<code>{endpoint.endpoint}</code>

								<p>{endpoint.description}</p>
							</div>
						))}
					</div>
				</section>

				<section className="instock-summary-page__section">
					<div className="instock-summary-page__collaboration-card">
						<div>
							<p className="instock-summary-page__label">Collaboration</p>

							<h2 className="instock-summary-page__section-title">
								Team Project Note
							</h2>

							<p>
								This project was developed collaboratively at BrainStation. The
								frontend and backend were built as part of a team effort. My
								portfolio highlights my contribution to the backend API and the
								full project workflow.
							</p>
						</div>

						<div className="instock-summary-page__contributors">
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

export default InStockProject;
