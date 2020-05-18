import React, { Component } from "react";

class CaptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  }

  render() {
    return (
      <div className="container">
        <form
          onSubmit={(event) =>
            this.props.submitChange(
              event,
              this.state.topText,
              this.state.bottomText
            )
          }
        >
          <input
            placeholder="top text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
          ></input>
          <input
            placeholder="bottom text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
          ></input>
          <button>Gen!</button>
        </form>
      </div>
    );
  }
}

export default CaptionForm;
