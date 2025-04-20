import './App.scss';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [ ellipsisCLick, setEllipsisClick ] = useState(false);

  const showToast = (type, message) => {
    if (type === "success") {
      toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
  } else if (type === "error") {
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleEllipsisClick = () => {
    setEllipsisClick(!ellipsisCLick);
  }

  return (
    <section className='app'>
      <Nav handleEllipsisClick={handleEllipsisClick} ellipsisCLick={ellipsisCLick}/>
      <Hero ellipsisCLick={ellipsisCLick}/>
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* ToastContainer to render toasts notifications */}
      <ToastContainer />
    </section>

    // <>
    //   <Routes>
    //     <Route path="/about" element={} />
    //   </Routes>
    // </>
  )
}

export default App;