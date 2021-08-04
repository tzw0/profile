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
import Article from "./components/article/Article";
import { ArticleData } from "./components/article/ArticleData";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [articleOpen, setArticleOpen] = useState(false)
  const [articleID, setArticleID] = useState("test")

  const loadHandler = () => {
    const swipeUp = new SwipeUp() //will init DOM and listeners,
    swipeUp.enable()              //but SwipeUp will not be displayed until you enable it explicitly 
  }

  const closeArticle = () => {
    setArticleOpen(false);
  }

  const loadArticle = (id) => {
    setArticleID(id);
    setArticleOpen(true);
  }

  useEffect(() => {
    window.addEventListener('load', loadHandler)
  }, []);

  return (
    <div className="app">
      <div style={articleOpen ? { display: "flex" } : { display: "none" }}>
        <Article data={ArticleData[articleID]} close={closeArticle} load={loadArticle} />
      </div>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={ifMobile("sections")}>
        <Intro />
        <Skills />
        <Education load={loadArticle} />
        <Projects load={loadArticle} />
        <Internships load={loadArticle} />
        <Contact />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
