import React, { Component } from "react";
import Header from "./header";
import axios from "axios";

class Listusers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persone: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const b = response.data;
      this.setState({ persone: b });
    });
  }

  render() {
    return (
      <div>
        <div className="App">
          {this.state.persone.map((element, index) => (
            //if index == (2eme element) then {affiche element} sinon {rien}
            <div>
              <div>{index == 1 ? <p>{element.username}</p> : null}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Listusers;
