import "./Project.scss";
import Icon from "../Icon/ICon";
import { FaGithub, FaLink } from "react-icons/fa";

const Project = ({project}) => {
  const icons = [
    {
      component: <FaLink />,
      link: project.liveLink,
      style: "project__icon-button",
      linkStyle: "project__icon-button-link"
    },
    {
      component: <FaGithub />,
      link: project.githubLink,
      style: "project__icon-button",
      linkStyle: "project__icon-button-link"
    }
  ];

  return (
    <section className="project scale-in">
      <div className="project__image-wrapper">
        <img className="project__image" src={project.image} alt={project.title} />

        <div className="project__overlay">
          {icons.map((icon, index) => (
            <Icon key={index} {...icon} />
          ))}
        </div>
      </div>

      <section className="project__content">
        <h3 className="project__title">{project.title}</h3>
        <p className="project__description">{project.description}</p>
        <div className="project__skills">
          {project.skills.split(", ").map((skill, idx) => (
            <span key={idx} className="project__skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Project;