import React, { Component } from "react";
import Header from "./components/Header";
import CaptionForm from "./components/CaptionForm";
import MemeGen from "./components/MemeGen";

class App extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, topText, bottomText) {
    event.preventDefault(); // Prevents a refresh of the browser.
    this.setState({
      topText: topText,
      bottomText: bottomText,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <CaptionForm submitChange={this.handleChange} />
        <MemeGen
          topText={this.state.topText}
          bottomText={this.state.bottomText}
        />
      </div>
    );
  }
}

export default App;
