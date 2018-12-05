import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../css/main.css";

let button = {
  padding: "20px",
  background: "#4dc0b5",
  position: "absolute",
  top: "0",
  right: "570px",
  marginTop: "50px",
  cursor: "pointer",
  borderRadius: "5px"
};

export default class Layout extends Component {
  constructor() {
    super()
    this.state = {
      color: "indigo"
    }
    this.letterColor = this.letterColor.bind(this);
  }

  letterColor() {
    if (this.state.color === "indigo") {
      this.setState({color: "green"})
    } else if (this.state.color === "green") {
      this.setState({color: "indigo"})
    }
    console.log("We work it");
  }

  render() {
    return (
        <div id="starter">
          <h1  className={`${this.state.color}`}>This React App is Live</h1>
          <div onClick={this.letterColor} style={button}>Click Me To Change Color</div>
        </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
