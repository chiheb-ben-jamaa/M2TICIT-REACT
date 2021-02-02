import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.nom}</h2>
        {/*
            <h1>{this.props.p}</h1>
            <h1>{this.props.age}</h1>
        */}
      </div>
    );
  }
}
export default Header;
