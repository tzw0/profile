import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Education from "./components/education/Education"
import Internships from "./components/internships/Internships"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Background from "./components/background/Background"
import './app.scss'
import { useState } from "react"
import Menu from "./components/menu/Menu"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Background />
        <Intro />
        <Education />
        <Projects />
        <Internships />
        <Contact />
      </div>
    </div>
  );
}

export default App;