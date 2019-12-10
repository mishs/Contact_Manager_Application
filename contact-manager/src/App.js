import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contacts";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="Mish"
          email="xyz@gmail.com phone"
          phone="0027 000 0000"
        />

        <Contact
          name="Chris"
          email="jacks@gmail.com phone"
          phone="0027 111 0000"
        />
      </div>
    );
  }
  // what's actually happening under the hood

  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "This is an app")
  // );
}

export default App;
