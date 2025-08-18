import "./Projects.scss";
import InstaloanXFrontpage from "../../assets/Images/Instaloanx-frontpage.png";
import Instock from "../../assets/Images/instock.png";
import Bookhive from "../../assets/Images/bookhive.png";
import TaskifyHub from "../../assets/Images/taskify-hub.png"; 
import SeamLess from "../../assets/Images/seamless.png";
import HarryPotter from "../../assets/Images/harry-potter.png";
import Project from "../../components/Project/Project";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Projects = ({all}) => {
  const projectData = [
    {
      image: InstaloanXFrontpage,
      title: "InstaloanX",
      description: "A loan management app allowing users to apply, repay, and track loans while enabling admins to update statuses efficiently.",
      skills: "React.js, Express.js, JWT, Bcrypt, Knex.js, MySQL, Sass",
      liveLink: "https://instaloanx.netlify.app/",
      githubLink: "https://github.com/Magret1730/instaloanx-app"
    },
    {
      image: Instock,
      title: "Instock",
      description: "A collaborative inventory management app that lets users manage warehouses and items through an intuitive interface.",
      skills: "React.js, Express.js, Node.js, Sass, Knex.js, MySQL",
      liveLink: "https://github.com/kngo/group2-instock",
      githubLink: "https://github.com/kngo/group2-instock"
    },
    {
      image: Bookhive,
      title: "Bookhive",
      description: "A backend platform for discovering and reviewing books with seamless access to a RESTful API for book data.",
      skills: "Node.js, Express.js, REST API, PostgreSQL, Sequelize ORM",
      liveLink: "https://github.com/Magret1730/BookHive-Portfolio-Project",
      githubLink: "https://github.com/Magret1730/BookHive-Portfolio-Project"
    },
    {
      image: TaskifyHub,
      title: "TaskifyHub",
      description: "A task management app that helps users organize, prioritize, and track tasks with responsive design and authentication.",
      skills: "Flask, Flask-Login, Flask-Bycrypt, Flask-Mail, Flask-SQLAlchemy, SQLite, itsdangerous",
      liveLink: "https://taskifyhub.pythonanywhere.com/",
      githubLink: "https://github.com/Magret1730/taskify-hub-portfolio-project"
    },
    {
      image: SeamLess,
      title: "SeamLess",
      description: "A transportation booking platform connecting users to local services with a simple and user-friendly interface.",
      skills: "React.js, Express.js, Node.js, MySQL, Sass",
      liveLink: "https://github.com/Magret1730/omnicoders-ip-client",
      githubLink: "https://github.com/Magret1730/omnicoders-ip-client"
    },
    {
      image: HarryPotter,
      title: "Harry Potter",
      description: "A fan-made website showcasing characters, spells, and information about the Harry Potter series.",
      skills: "HTML, CSS, JavaScript",
      liveLink: "https://github.com/AlexandriaBalkaran/Harry-Potter-Game",
      githubLink: "https://github.com/AlexandriaBalkaran/Harry-Potter-Game"
    }
    // Snaps, Keyin Second Semester Project (Context API)
  ];

  const displayedProjects = all ? projectData : projectData.slice(0, 4);

  return (
    <section className="projects">
      <h1 className="projects__header">Featured Projects</h1>
      {!all ?
        <p className="projects__description">Explore a selection of my work</p>
        : <p className="projects__description">Browse my portfolio and discover the technologies I use</p>
      }

      <div className="projects__cards">
        {displayedProjects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>

      { all === false &&
        <Link to="/projects" className="projects__button">
          <Button name="View All Projects" style="button__box" />
        </Link>
      }
    </section>
  );
}

export default Projects;