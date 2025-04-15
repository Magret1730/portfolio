import './App.scss';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

function App() {
  const [ ellipsisCLick, setEllipsisClick ] = useState(false);

  const handleEllipsisClick = () => {
    setEllipsisClick(!ellipsisCLick);
  }

  return (
    <section className='app'>
      <Nav handleEllipsisClick={handleEllipsisClick} ellipsisCLick={ellipsisCLick}/>
      <Hero ellipsisCLick={ellipsisCLick}/>
      <About />
      <Skills />
    </section>
  )
}

export default App;