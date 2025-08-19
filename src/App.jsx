import './App.scss';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import "./styles/partials/_global.scss";
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react';

const saved = localStorage.getItem("theme");
if (saved === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark"); // ensures light theme on first visit
}

function App() {
  // Initialize from localStorage (or default to false/light)
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");

  const toggleTheme = () => setIsDark(d => !d);

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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <section className='app'>
      <Nav isDark={isDark} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home isDark={isDark} />} />
        <Route path="/about" element={<About isDark={isDark} />} />
        <Route path="/contact" element={<Contact isDark={isDark} />} />
        <Route path="/projects" element={<Projects all={true} isDark={isDark} />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </section>
  )
}

export default App;