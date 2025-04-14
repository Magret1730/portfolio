import "./About.scss";
import Button from "../Button/Button";

export default function About() {
    const frontEndSkills = ["HTML", "CSS", "Sass", "Bootstrap", "JavaScript", "React"];
    console.log(frontEndSkills);
    // const backendSkills = ["Node.js", "Express.js", "Python", "Flask", "PostgreSQL"];
    // const versionControl = ["Git", "Github"];
    // const others = ["RESTful-API", "Responsive-Web-Design", "Agile"];

    return (
        <>
            <section>
                <p>
                    As a Full-Stack Software Developer with a background in Applied Geology,
                    I bring a unique perspective to creating efficient and user-friendly web
                    applications. My journey from teaching to software development reflects
                    my passion for technology and problem-solving.
                </p>

                <p>I hold a Software Engineering certification from ALX Africa and have further
                    enhanced my skills through the Full Stack Web Development Bootcamp at BrainStation.
                    I am committed to continuous learning and growth, aiming to develop impactful
                    digital solutions that blend creativity with technical expertise.
                </p>

                <p>
                    Feel free to explore my projects and contributions on my GitHub [link-ca;; to action].
                </p>
            </section>

            <section className="skills">
                <section className="skills__frontend">
                    console.log(frontEndSkills);
                    {frontEndSkills.map((frontendSkill, index) =>  {
                        console.log(frontendSkill);
                        return <Button name={frontendSkill} key={index}/>
                    })}
                </section>
            </section>
        </>
    )
}