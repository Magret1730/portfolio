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

function App() {
  // const [isDark, setIsDark] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    // optional: read saved preference or system preference
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggleTheme = () => setIsDark(d => !d);


  // const toggleTheme = () => {
  //   setIsDark(!isDark);
  // };

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

  // useEffect(() => {
  //   document.body.className = isDark ? "dark" : "light";
  //   console.log("Body class:", document.body.className);
  // }, [isDark]);
//   useEffect(() => {
//   if (isDark) {
//     document.body.classList.add("dark");
//     document.body.classList.remove("light");
//   } else {
//     document.body.classList.add("light");
//     document.body.classList.remove("dark");
//   }
// }, [isDark]);

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