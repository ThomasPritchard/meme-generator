import React, { Component } from "react";
import Header from "./components/Header";
import MemeGen from "./components/MemeGen";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <MemeGen />
      </div>
    );
  }
}

export default App;
