import React, { Component } from 'react';

const base_url = 'https://twitter.com/intent/tweet?hashtags=quotes,fCC&related=freecodecamp&text=';

export default class QuoteBox extends Component {

  render() {
    const { text, author } = this.props.quote;
    const { getNewQuote } = this.props;

    return (
      <div id="quote-box">
        <p id="text">{text}</p>
        <p id="author">{author}</p>
        <button id="new-quote" onClick={getNewQuote}>
          New Quote
        </button>
        <a id="tweet-quote" href={`${base_url}${text} ${author}`}>
          Tweet Quote
        </a>
      </div>
    );
  }
}
