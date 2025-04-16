import "./Projects.scss";
import InstaloanXFrontpage from "../../assets/Images/Instaloanx-frontpage.png";
import Instock from "../../assets/Images/instock.png";
import Bookhive from "../../assets/Images/bookhive.png";
import TaskifyHub from "../../assets/Images/taskify-hub.png"; 
import SeamLess from "../../assets/Images/seamless.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import HarryPotter from "../../assets/Images/harry-potter.png";

const Projects = () => {
    return (
        <section className="projects" id="Projects">
            <h1 className="projects__header">Projects</h1>

            <section className="projects__box">
                <section className="projects-cards">
                    {/* Seamless(Hackathon, Industrial Project), HarryPotter(Hackathon),
                        Snaps, Bookhive, TaskifyHub  */}

                    <section className="projects-card">
                        <img className="projects-card__image" src={InstaloanXFrontpage} alt="" />

                        <section className="projects-card__content">
                            <h3 className="project-card__title">InstaloanX</h3>

                            <div className="projects-card__description">
                                InstaloanX is a loan management application with authentication where users can apply and repay
                                loans and admins can change the status of a loan.
                            </div>
                            <div className="projects-card__skills">
                                React, Express.js, JWT, Brcypt, Knex.js, MySQL, Sass
                            </div>

                            <div className="projects-card__links">
                                <a
                                    href="https://instaloanx.netlify.app/"
                                    alt="InstaloanX Application"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projects-card__button">
                                    Live App <FaExternalLinkAlt /> 
                                </a>
                                <a
                                    href="https://github.com/Magret1730/instaloanx-app"
                                    alt="InstaloanX Application"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projects-card__button">
                                    Github <FaGithub /> 
                                </a>
                            </div>
                        </section>
                    </section>

                    <section className="projects-card">
                        <img className="projects-card__image" src={Instock} alt="Instock FrontPage Image" />

                        <section className="projects-card__content">
                            <h3 className="project-card__title">Instock</h3>

                            <div className="projects-card__description">
                                InStock is a full-stack inventory management application built with React and Express.js.
                                Developed in collaboration with two other team members, the app enables users to manage
                                warehouses and inventory items through a user-friendly interface with full CRUD functionality.
                            </div>
                            <div className="projects-card__skills">
                                React, Express.js, Node.js, Sass, Knex.js, MySQL
                            </div>

                            <div className="projects-card__links">
                                <a
                                    href="https://github.com/kngo/group2-instock"
                                    alt="Instock"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projects-card__button">
                                    Github <FaGithub /> 
                                </a>
                            </div>
                        </section>
                    </section>

                    <section className="projects-card">
                        <img className="projects-card__image" src={Bookhive} alt="Bookhive Application Image" />

                        <section className="projects-card__content">
                            <h3 className="project-card__title">Bookhive – Library Management Backend</h3>

                            <div className="projects-card__description">
                                Bookhive is a backend library management system that allows users to browse, review, and
                                borrow books, while admins can manage the book catalog. It features secure user authentication,
                                password reset via email, and role-based access for users and admins.
                            </div>
                            <div className="projects-card__skills">
                                Node.js, Express.js, JWT, Brcypt, Sequelize, PostgreSQL
                            </div>

                            <div className="projects-card__links">
                                <a
                                    href="https://github.com/Magret1730/BookHive-Portfolio-Project"
                                    alt="Bookhive Application"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projects-card__button">
                                    Github <FaGithub /> 
                                </a>
                            </div>
                        </section>
                    </section>

                    <section className="projects-card">
                        <img className="projects-card__image" src={TaskifyHub} alt="Taskify Hub Application" />

                        <section className="projects-card__content">
                            <h3 className="project-card__title">Taskify Hub</h3>

                            <div className="projects-card__description">
                                Taskify Hub is a task management web application designed to help users organize their tasks
                                efficiently. With Taskify Hub, users can create, update, and delete tasks, set due dates,
                                mark tasks as complete, and more.
                            </div>
                            <div className="projects-card__skills">
                                HTML, CSS, Bootstrap, Flask, SQLite, Python
                            </div>

                            <div className="projects-card__links">
                                <a
                                    href="https://taskifyhub.pythonanywhere.com/"
                                    alt="Taskify Hub Application"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projects-card__button">
                                    Live App <FaExternalLinkAlt /> 
                                </a>
                                <a
                                    href="https://github.com/Magret1730/taskify-hub-portfolio-project"
                                    alt="Taskify Hub Application"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projects-card__button">
                                    Github <FaGithub /> 
                                </a>
                            </div>
                        </section>
                    </section>

                    <section className="projects-card">
                        <img className="projects-card__image" src={SeamLess} alt="Bookhive Application Image" />

                        <section className="projects-card__content">
                            <h3 className="project-card__title">SeamLess</h3>

                            <div className="projects-card__description">
                                SEAMLESS is an hackathon project. It is an interactive quiz game designed to educate users
                                about AI tools and their real-life applications. The game presents daily activity-based
                                questions and provides insights into how AI enhances various aspects of life.
                            </div>
                            <div className="projects-card__skills">
                                Node.js, Express.js, MySQL, Sass, React, Knex.js
                            </div>

                            <div className="projects-card__links">
                                <a
                                    href="https://github.com/Magret1730/omnicoders-ip-client"
                                    alt="SeamLess Application"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projects-card__button">
                                    Github <FaGithub /> 
                                </a>
                            </div>
                        </section>
                    </section>

                    <section className="projects-card">
                        <img className="projects-card__image" src={HarryPotter} alt="HarryPotter Application Image" />

                        <section className="projects-card__content">
                            <h3 className="project-card__title">HarryPotter</h3>

                            <div className="projects-card__description">
                                This is a fun and interactive web-based game where players guess the names of Harry Potter
                                characters based on their images. It was developed as part of a hackathon project, showcasing
                                creativity, problem-solving, and technical skills.
                            </div>
                            <div className="projects-card__skills">
                                HTML, CSS, Sass, Javascript
                            </div>

                            <div className="projects-card__links">
                                <a
                                    href="https://github.com/AlexandriaBalkaran/Harry-Potter-Game"
                                    alt="HarryPotter Application"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projects-card__button">
                                    Github <FaGithub /> 
                                </a>
                            </div>
                        </section>
                    </section>

                </section>
            </section>
        </section>
    )
}

export default Projects;