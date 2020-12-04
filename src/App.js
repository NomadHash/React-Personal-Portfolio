import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import AboutContainer from "./containers/AboutContainer";
import NavbarContainer from "./containers/NavBarContainer";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarContainer />
        <Switch>
          <Route path="/about" component={AboutContainer} />
          <Route path="/" component={HomeContainer} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
