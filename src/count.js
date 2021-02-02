import React, { Component } from "react";
class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c: 5,
      persone: ["chiheb", "habib", "hazem"],
      input1: "",
    };
  }

  updateC = () => {
    this.setState({ c: 10 });
  };

  OnChangeHandler = (e) => {
    this.setState({ input1: e.target.value });
  };

  AddPersone = () => {
    this.setState({ persone: [...this.state.persone, this.state.input1] });
  };

  render() {
    return (
      <div>
        <h2>Header</h2>
        <input type="button" value="Update C" onClick={this.updateC}></input>
        <h2>{this.state.c}</h2>
        {this.state.persone.map((p) => (
          <p>{p}</p>
        ))}
        <input type="text" onChange={this.OnChangeHandler}></input>
        <h2>{this.state.input1}</h2>
        <input type="submit" value="Submit" onClick={this.AddPersone} />
      </div>
    );
  }
}
export default Count;
