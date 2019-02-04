import React, { Component } from 'react';
import QuoteBox from './QuoteBox';
import GitHubButton from './GitHubButton.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const quotesUrl = 'https://cdn.jsdelivr.net/gh/caglarturali/quotalog/src/shared/quotes.json';

export default class Main extends Component {
  state = {
    quotes: [],
    randomQuote: {}
  };

  componentDidMount = () => {
    this.loadQuotes();
  };

  loadQuotes = () => {
    fetch(quotesUrl)
      .then(res => res.json())
      .then(res => {
        if (res.quotes) {
          this.setState(
            {
              quotes: res.quotes
            },
            () => {
              this.getRandomQuote();
            }
          );
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        // Use the local copy of the file.
        this.setState(
          {
            quotes: require('../shared/quotes.json').quotes
          },
          () => {
            this.getRandomQuote();
          }
        );
      });
  };

  getRandomQuote = () => {
    const randomQuote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
    this.setState({ randomQuote });
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
        {randomQuote.text && randomQuote.author ? (
          <React.Fragment>
            <QuoteBox quote={randomQuote} getRandomQuote={this.getRandomQuote} color={bgColor} />
            <GitHubButton />
          </React.Fragment>
        ) : (
          <FontAwesomeIcon icon="spinner" pulse style={{ color: 'white' }} size="2x" />
        )}
      </div>
    );
  }
}
