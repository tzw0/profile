import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Education from "./components/education/Education"
import Internships from "./components/internships/Internships"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Skills from "./components/skills/Skills"
import './app.scss'
import { useState, useEffect } from "react"
import Menu from "./components/menu/Menu"
import { ifMobile } from "./utils/mobile";
import SwipeUp from 'swipe-up'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const loadHandler = () => {
    const swipeUp = new SwipeUp() //will init DOM and listeners,
    swipeUp.enable()              //but SwipeUp will not be displayed until you enable it explicitly 
  }


  useEffect(() => {
    window.addEventListener('load', loadHandler)
  }, []);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={ifMobile("sections")}>
        <Intro />
        <Skills />
        <Education />
        <Projects />
        <Internships />
        <Contact />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
