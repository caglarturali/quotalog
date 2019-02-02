import React, { Component } from 'react';
import './styles/App.css';
import quotes from './shared/quotes.json';
import QuoteBox from './components/QuoteBox';

class App extends Component {
  state = {
    quotes: [],
    randomQuote: {}
  };

  componentDidMount = () => {
    this.loadQuotes();
  };

  loadQuotes = () => {
    this.setState(
      {
        quotes
      },
      () => {
        this.getRandomQuote();
      }
    );
  };

  getRandomQuote = () => {
    const randomQuoteArr = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
    const quote = {
      text: randomQuoteArr[0],
      author: randomQuoteArr[1]
    };
    this.setState({ randomQuote: quote });
  };

  getRandomBGColor = () => {
    const rgb = [];
    for (let i = 0; i < 3; i++) {
      rgb.push(Math.floor(Math.random() * 255));
    }
    return rgb;
  };

  render() {
    const { randomQuote: quote } = this.state;

    const bgColor = this.getRandomBGColor();
    const bgColorStr = `rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]})`;
    let styles = {
      background: bgColorStr
    };

    return (
      <div className="App" style={styles}>
        {quote ? <QuoteBox quote={quote} getNewQuote={this.getRandomQuote} /> : <span>Loading...</span>}
      </div>
    );
  }
}

export default App;
