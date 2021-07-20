import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Education from "./components/education/Education"
import Internships from "./components/internships/Internships"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Skills from "./components/skills/Skills"
import './app.scss'
import { useState } from "react"
import Menu from "./components/menu/Menu"
import About from "./components/about/About";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Skills />
        <Education />
        <Projects />
        <Internships />
        <Contact />
        <About />
      </div>
    </div>
  );
}

export default App;
