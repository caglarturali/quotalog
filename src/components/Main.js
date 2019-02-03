import React, { Component } from 'react';
import quotes from '../shared/quotes.json';
import QuoteBox from './QuoteBox';
import GitHubButton from './GitHubButton.js';

export default class Main extends Component {
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

  getRandomColor = () => {
    const rgb = [];
    for (let i = 0; i < 3; i++) {
      rgb.push(Math.floor(Math.random() * (192 - 64) + 64));
    }
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  };

  render() {
    const { randomQuote } = this.state;

    const bgColor = this.getRandomColor();
    let styles = {
      background: bgColor
    };

    return (
      <div className="App" style={styles}>
        <QuoteBox quote={randomQuote} getRandomQuote={this.getRandomQuote} color={bgColor} />
        <GitHubButton />
      </div>
    );
  }
}
