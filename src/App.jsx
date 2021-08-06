import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Education from "./components/education/Education"
import Internships from "./components/internships/Internships"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Skills from "./components/skills/Skills"
import './app.scss'
import { useState, useEffect, useRef } from "react"
import Menu from "./components/menu/Menu"
import { ifMobile } from "./utils/mobile";
import { Article } from "./components/article/Article";
import { ArticleData } from "./components/article/ArticleData";
import { SeparationKey } from "./utils/constants";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const path = window.location.pathname
  const defaultArticleID = "projects" + SeparationKey + "zheng_wen"
  var initialArticleID = defaultArticleID
  var initialArticleOpen = false
  if (path.length > 1 && path.substring(1) in ArticleData) {
    initialArticleID = path.substring(1)
    initialArticleOpen = true
  } else {
    window.history.pushState('', '', '/');
  }


  const [menuOpen, setMenuOpen] = useState(false)
  const [articleOpen, setArticleOpen] = useState(false)
  const [articleID, setArticleID] = useState(defaultArticleID)

  const article = useRef(0);

  const closeArticle = () => {
    setArticleID(defaultArticleID);
    window.history.pushState('', '', '/');
    article.current.scrollTo(0, 0)
    setArticleOpen(false);
  }

  const loadArticle = (id) => {
    if (id in ArticleData) {
      setArticleID(id);
      window.history.pushState('', '', '/' + id);
      article.current.scrollTo(0, 0)
      setArticleOpen(true);
    }
  }

  useEffect(() => {
    setArticleID(initialArticleID)
    setArticleOpen(initialArticleOpen)
  }, [initialArticleID, initialArticleOpen]);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <div style={articleOpen ? { display: "flex" } : { display: "none" }}>
              <Article data={ArticleData[articleID]} articleID={articleID} close={closeArticle} load={loadArticle} ref={article} />
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
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
