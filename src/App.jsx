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
    const { Loaded, quotes } = this.state;

    if (!Loaded) {
      return <div>Quotes loading!</div>;
    } else {
      return (
        <div>
          <ul>
            {quotes.map((quote) => (
              <li key={quote.id}>
                {quote.quote}<i>(id:{quote.quote_id}, author - {quote.author})</i>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;