import "./Home.scss";
import Hero from '../../components/Hero/Hero';
import Home_About_Skill from "../../components/Home-About-Skill/Home-About-Skill";
import Projects from '../Projects/Projects';
import HomeContact from "../../components/HomeContact/HomeContact";
import posthog from "posthog-js";
import { useEffect } from "react";

const Home = ({isDark}) => {
  useEffect(() => {
    posthog.capture('home_page_viewed', {
      page: window.location.pathname,
    });
  }, []);

  return (
    <div className="home">
      <Hero />
      <Home_About_Skill />
      <Projects all={false} isDark={isDark} />
      <HomeContact isDark={isDark} />
    </div>
  )
}

export default Home;