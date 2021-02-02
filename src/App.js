import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import Count from "./count";
import Home from "./home";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/count" component={Count} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>

      <h2>Ines</h2>
      <Header nom="New Header" />
    </div>
  );
}

export default App;
