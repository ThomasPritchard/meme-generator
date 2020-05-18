import React, { Component } from "react";

class MemeGen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memeData: [],
      topText: this.props.topText,
      bottomText: this.props.bottomText,
    };
  }

  componentDidMount() {
    // Run the API request here.
    const url = "https://api.imgflip.com/get_memes";
    fetch(url)
      .then((response) => {
        return response.ok ? response.json() : console.log("Error");
      })
      .then((data) => {
        this.setState(() => {
          return {
            memeData: data.data.memes,
            topText: this.props.topText,
            bottomText: this.props.bottomText,
          };
        });
      });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.topText !== prevProps.topText ||
      this.props.bottomText !== prevProps.bottomText
    ) {
      this.setState((prevState) => {
        return {
          memeData: prevState.memeData,
          topText: this.props.topText,
          bottomText: this.props.bottomText,
        };
      });
    }
  }

  render() {
    const mappedMemeData = this.state.memeData.map((item) => {
      return item.url;
    });
    const url = mappedMemeData[1];
    return (
      <div className="container">
        <div
          className="img-container"
          style={{ backgroundImage: `url(${url})` }}
        >
          <div className="top-text">{this.state.topText}</div>
          <div className="bottom-text">{this.state.bottomText}</div>
        </div>
      </div>
    );
  }
}

export default MemeGen;
