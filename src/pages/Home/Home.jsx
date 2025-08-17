import "./Home.scss";
import Hero from '../../components/Hero/Hero';
import Home_About_Skill from "../../components/Home-About-Skill/Home-About-Skill";
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Home_About_Skill />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home;