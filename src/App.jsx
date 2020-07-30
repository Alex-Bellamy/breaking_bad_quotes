import React, { Component } from "react";

class App extends Component {
  state = {
    quotes: [],
    Loaded: false,
  };

  componentDidMount() {
    fetch("https://www.breakingbadapi.com/api/quotes")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          Loaded: true,
          quotes: json,
        });
      });
  }
  render() {
    return <div></div>;
  }
}

export default App;
