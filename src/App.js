import NavigationHeader from "./components/NavigationHeader"
import Main from "./components/Main"
import AboutMe from "./components/AboutMe"
import Portfolios from "./components/Portfolios"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <NavigationHeader />

      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" exact>
        <Portfolios />
      </Route>

      <Route path="/" exact>
        <Main />
        <AboutMe />
        <Portfolios />
        <Contact />
      </Route>
      <Footer />
    </Router>
  )
}

export default App
