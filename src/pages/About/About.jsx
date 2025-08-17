import "./About.scss";
import Button from "../../components/Button/Button";

export default function About() {

  return (
    <section className="about" id="About">
      <h1 className="about__header">About</h1>
      <section className="about__texts">
        <div className="about__text">
          As a Full-Stack Software Developer with a background in Applied Geology—and previous
          experience as both a teacher and fashion designer—I bring a unique blend of creativity,
          adaptability, and problem-solving to building efficient, user-friendly web applications.
          My transition from teaching into software development reflects both my passion for
          technology and my drive to create meaningful solutions.
        </div>

        <div className="about__text">
          I hold a Software Engineering certification from ALX Africa and completed the Full Stack
          Web Development Bootcamp at BrainStation. I have also advanced my skills through
          specialized training at Keyin College, further strengthening my technical foundation.
        </div>

        <div>
          Professionally, I am currently gaining hands-on experience at Vifta Technology Limited,
          where I contribute to building and maintaining digital solutions that enhance user experience
          and business efficiency. I remain committed to continuous learning, always striving to
          combine creativity with technical expertise to deliver impactful digital products.
        </div>

        <div>
          Outside of work, I channel my creativity through video editing using tools like CapCut,
          crafting engaging stories and visuals. I am collaborative, adaptable, and open to learning
          new tools and technologies, bringing both technical skills and strong interpersonal qualities
          to every project I work on.
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