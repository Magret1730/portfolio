import './App.scss';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

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
    </section>
  )
}

export default App;