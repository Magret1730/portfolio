import "./Skills.scss";
import Button from "../Button/Button";

export default function Skills() {
    // const frontEndSkills = ["HTML", "CSS", "Sass", "Bootstrap", "JavaScript", "React"];
    // const backEndSkills = ["Node.js", "Express.js", "Python", "Flask", "PostgreSQL", "MySQL", "Knex.js", "Sequelize"];
    // const others = ["Git", "Github", "RESTful-API", "Responsive-Web-Design", "Agile"];

    const skillsFrontBacks = ["HTML", "CSS", "Sass", "Bootstrap", "JavaScript", "React", "Node.js", "Express.js", "Python", "Flask", "PostgreSQL", "MySQL", "Knex.js", "Sequelize", "Git", "Github", "RESTful-API", "Responsive-Web-Design", "Agile"];

    return (
        <section className="skills">
            <h1 className="skills__header">Skills</h1>
            {/* <section className="skills__frontend">
                {frontEndSkills.map((frontendSkill, index) =>  {
                    return <Button name={frontendSkill} key={index}/>
                })}
            </section>
            <section className="skills__frontend">
                {backEndSkills.map((frontendSkill, index) =>  {
                    return <Button name={frontendSkill} key={index}/>
                })}
            </section>
            <section className="skills__frontend">
                {others.map((frontendSkill, index) =>  {
                    return <Button className="skills__frontend-button" name={frontendSkill} key={index}/>
                })}
            </section> */}
            <section className="skills__frontend">
                {skillsFrontBacks.map((skillsFrontBack, index) =>  {
                    return <Button className="skills__frontend-button" name={skillsFrontBack} key={index}/>
                })}
            </section>
        </section>
    )
}