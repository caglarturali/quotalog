import React, { Component } from 'react';

const tweet_base_url = 'https://twitter.com/intent/tweet?hashtags=quotes,fCC&related=freecodecamp&text=';
const translate_base_url = 'https://translate.google.com/#view=home&op=translate&sl=en&tl=tr&text=';

export default class QuoteBox extends Component {
  state = {
    textClasses: ''
  };

  componentWillReceiveProps = () => {
    setTimeout(() => {
      this.setState({
        textClasses: 'show'
      });
    }, 100);
  };

  handleNewQuoteClick = () => {
    this.setState({ textClasses: 'hide' });
    setTimeout(() => {
      this.props.getNewQuote();
    }, 1000);
  };

  render() {
    const { text, author } = this.props.quote;
    const { color } = this.props;

    const styles = {
      color: color
    };

    return (
      <div id="quote-box" style={styles}>
        <span id="text" className={this.state.textClasses}>
          {text}
        </span>
        <span id="author">{author}</span>
        <div className="buttons">
          <button id="new-quote" onClick={this.handleNewQuoteClick}>
            New Quote
          </button>
          <a id="tweet-quote" href={`${tweet_base_url}${text} ${author}`} target="_blank" rel="noopener noreferrer">
            Tweet Quote
          </a>
          <a id="tweet-quote" href={`${translate_base_url}${text}`} target="_blank" rel="noopener noreferrer">
            Translate Quote
          </a>
        </div>
      </div>
    );
  }
}
