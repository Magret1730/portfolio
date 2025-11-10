import "./Project.scss";
import Icon from "../Icon/Icon";
import { FaGithub, FaLink } from "react-icons/fa";
import posthog from "posthog-js";
import { useEffect } from "react";

const Project = ({project, isDark}) => {
  useEffect(() => {
    posthog.capture('project_page_viewed', {
      page: window.location.pathname,
    });
  }, []);

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
      <div className={`project__image-wrapper ${isDark ? "project__image--dark" : ""}`}>
        <img className="project__image" src={project.image} alt={project.title} />

        <div className="project__overlay">
          {icons.map((icon, index) => (
            <Icon key={index} {...icon} onClick={() => {
              posthog.capture('project_icon_clicked', {
                icon_type: icon.component.type.displayName || icon.component.type.name,
                project_title: project.title,
                page: window.location.pathname,
              });
            }} />
          ))}
        </div>
      </div>

      <section className="project__content">
        <h3 className="project__title">{project.title}</h3>
        <p className="project__description">{project.description}</p>
        <div className="project__skills">
          {project.skills.split(", ").map((skill, idx) => (
            <span key={idx} className={`project__skill-badge ${isDark ? "project__skill-badge--dark" : ""}`}>
              {skill}
            </span>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Project;