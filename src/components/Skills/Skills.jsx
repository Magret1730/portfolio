import "./Skills.scss";
import Button from "../Button/Button";

export default function Skills() {
    const skills = [
      "React.js", "HTML", "CSS", "Bootstrap", "Node.js", "Express.js", "Flask", "Sequelize",
      "Next.js", "Typescript", "Sass", "Knex.js", "MongoDB",
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
            />
          );
        })}
      </section>
    )
}