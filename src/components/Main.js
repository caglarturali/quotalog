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
    return rgb;
  };

  render() {
    const { randomQuote } = this.state;

    const bgColor = this.getRandomColor();
    const bgColorStr = `rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]})`;
    let styles = {
      background: bgColorStr
    };

    return (
      <div className="App" style={styles}>
        <QuoteBox quote={randomQuote} getNewQuote={this.getRandomQuote} color={bgColorStr} />
        <GitHubButton />
      </div>
    );
  }
}
