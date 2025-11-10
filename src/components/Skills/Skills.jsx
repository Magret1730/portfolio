import "./Skills.scss";
import Button from "../Button/Button";
import posthog from "posthog-js";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    posthog.capture('skills_section_viewed', {
      page: window.location.pathname,
    });
  }, []);

    const skills = [
      "React.js", "HTML", "CSS", "Bootstrap", "Node.js", "Express.js", "Flask", "Sequelize",
      "Next.js", "Typescript", "Sass", "Knex.js", "MongoDB", "AWS",
      "PostgreSQL", "MySQL", "JavaScript", "Python", "Git", "GitHub", "VSCode", "Postman", "Jira",
      "Adaptability", "Collaboration", "Creativity", "Continuous Learning", "Communication",
    ];

    return (
      <section className="skills scale-in stagger-3" id="Skills" >
        {skills.map((skill, index) => {
          return (
            <Button
              key={index}
              name={skill}
              style="button__skills"
              onClick={() => {
                posthog.capture('skill_clicked', {
                  button_name: skill,
                  page: window.location.pathname,
                });
              }}
            />
          );
        })}
      </section>
    )
}