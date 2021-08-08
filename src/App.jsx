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
import { Helmet } from "react-helmet";

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [articleOpen, setArticleOpen] = useState(false)
  const [articleID, setArticleID] = useState("projects" + SeparationKey + "zheng_wen")
  const [articleHistory, setArticleHistory] = useState([])
  const [articlePointer, setArticlePointer] = useState(-1)

  const article = useRef(0);

  const closeArticle = () => {
    window.history.pushState('', '', '/');
    article.current.scrollTo(0, 0)
    setArticleOpen(false);
    setArticleHistory([]);
    setArticlePointer(-1);
  }

  const getArticle = (id) => {
    setArticleID(id);
    window.history.pushState('', '', '/');
    window.history.pushState('', '', '#' + id);
    article.current.scrollTo(0, 0)
    setArticleOpen(true);
  }

  const loadArticle = (id) => {
    if (id in ArticleData) {
      getArticle(id)

      setArticleHistory(articleHistory.slice(0, articlePointer + 1).concat(id)) //clears any future articles and appends current loaded article
      setArticlePointer(articlePointer + 1)
    }
  }

  const previousArticle = () => {
    if (articlePointer === 0) {
      closeArticle()
      return
    }

    getArticle(articleHistory[articlePointer - 1])
    setArticlePointer(articlePointer - 1)
  }

  const nextArticle = () => {
    if (articlePointer === articleHistory.length - 1) {
      return
    }

    setArticlePointer(articlePointer + 1)
    getArticle(articleHistory[articlePointer])
  }

  useEffect(() => {
    const fullPath = window.location.href
    const fullPathSplit = fullPath.split("/")
    const pathKey = fullPathSplit[fullPathSplit.length - 1]
    const defaultArticleID = "projects" + SeparationKey + "zheng_wen"
    var initialArticleID = defaultArticleID
    var initialArticleOpen = false
    var initialArticleHistory = []
    var initialArticlePointer = -1
    if (pathKey.length > 1 && pathKey.substring(1) in ArticleData) {
      initialArticleID = pathKey.substring(1)
      initialArticleOpen = true
      initialArticleHistory = [initialArticleID]
      initialArticlePointer = 0
    }
    setArticleID(initialArticleID)
    setArticleOpen(initialArticleOpen)
    setArticleHistory(initialArticleHistory)
    setArticlePointer(initialArticlePointer)
  }, []);

  return (
    <div className="app">
      <Helmet
        meta={[
          {
            name: `theme-color`,
            content: 'rgb(23, 17, 25)',
            color: '#fff'
          },
        ]}>
      </Helmet>

      <div style={articleOpen ? { display: "flex" } : { display: "none" }}>
        <Article data={ArticleData[articleID]} articleID={articleID} close={closeArticle} load={loadArticle} prev={previousArticle} next={nextArticle} ref={article} />
      </div>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={ifMobile("sections")}>
        <Intro />
        <Education load={loadArticle} />
        <Projects load={loadArticle} />
        <Internships load={loadArticle} />
        <div className="no-scroll-snap">
          <Skills />
          <Contact />
        </div>
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
