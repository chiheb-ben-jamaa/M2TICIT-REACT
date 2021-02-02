import React, { Component } from "react";
import Header from "./header";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h2>habib and hazem and ines!</h2>
          <Header />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/count">Count</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;
