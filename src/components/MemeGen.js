import React, { Component } from "react";

class MemeGen extends Component {
  constructor() {
    super();

    this.state = {
      memeData: {},
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
          };
        });
        console.log(this.state.memeData);
      });
  }

  render() {
    return (
      <div>
        <h2>Main content</h2>
      </div>
    );
  }
}

export default MemeGen;
