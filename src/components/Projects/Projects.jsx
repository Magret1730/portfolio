import "./Projects.scss";
import InstaloanXFrontpage from "../../assets/Images/Instaloanx-frontpage.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    return (
        <section className="projects">
            <h1 className="projects__header">Projects</h1>

            <section className="projects__box">
                <section className="projects-cards">
                    {/* InstalaonX, Instock(collaboration), Seamless(Hackathon, Industrial Project), HarryPotter(Hackathon),
                        Bandsite, Coffee shop, Bookhive, TaskifyHub  */}

                    <section className="projects-card">
                        <img className="projects-card__image" src={InstaloanXFrontpage} alt="" />

                        <section className="projects-card__content">
                            <h3 className="project-card__title">InstaloanX</h3>

                            <div className="projects-card__description">
                                InstaloanX is a loan management application with authentication where users can apply and repay
                                loans and admins can change the status of a loan.
                            </div>
                            <div className="projects-card__skills">
                                React, Express.js, JWT, Brcypt, Knex.js, MySQL
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
                        <img className="projects-card__image" src={InstaloanXFrontpage} alt="" />

                        <section className="projects-card__content">
                            <h3 className="project-card__title">InstaloanX</h3>

                            <div className="projects-card__description">
                                InstaloanX is a loan management application with authentication where users can apply and repay
                                loans and admins can change the status of a loan.
                            </div>
                            <div className="projects-card__skills">
                                React, Express.js, JWT, Brcypt, Knex.js, MySQL
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
                        <img className="projects-card__image" src={InstaloanXFrontpage} alt="" />

                        <section className="projects-card__content">
                            <h3 className="project-card__title">InstaloanX</h3>

                            <div className="projects-card__description">
                                InstaloanX is a loan management application with authentication where users can apply and repay
                                loans and admins can change the status of a loan.
                            </div>
                            <div className="projects-card__skills">
                                React, Express.js, JWT, Brcypt, Knex.js, MySQL
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
                </section>
            </section>
        </section>
    )
}

export default Projects;