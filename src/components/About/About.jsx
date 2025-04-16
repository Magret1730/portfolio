import "./About.scss";
import Button from "../Button/Button";

export default function About() {

    return (
        <section className="about" id="About">
            <h1 className="about__header">About</h1>
            <section className="about__texts">
                <div className="about__text">
                    As a Full-Stack Software Developer with a background in Applied Geology,
                    I bring a unique perspective to creating efficient and user-friendly web
                    applications. My journey from teaching to software development reflects
                    my passion for technology and problem-solving.
                </div>

                <div className="about__text">
                    I hold a Software Engineering certification from ALX Africa and have further
                    enhanced my skills through the Full Stack Web Development Bootcamp at BrainStation.
                    I am committed to continuous learning and growth, aiming to develop impactful
                    digital solutions that blend creativity with technical expertise.
                </div>

                <div className="about__text">
                    Feel free to explore my projects and contributions on my GitHub
                    <Button className="about__text-button" name={<a className="about__text-link" href="https://github.com/Magret1730">My Github </a>}/>
                    {/* <a className="about__text-link" href="https://github.com/Magret1730">My Github </a>. */}
                </div>
            </section>
        </section>
    )
}