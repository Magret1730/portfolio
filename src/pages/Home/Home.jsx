import "./Home.scss";
import Hero from '../../components/Hero/Hero';
import Home_About_Skill from "../../components/Home-About-Skill/Home-About-Skill";
import Projects from '../Projects/Projects';
import HomeContact from "../../components/HomeContact/HomeContact";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Home_About_Skill />
      <Projects all={false}/>
      <HomeContact />
    </div>
  )
}

export default Home;