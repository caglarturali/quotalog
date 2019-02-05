import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TweetButton from './TweetButton';
import TranslateButton from './TranslateButton';

export default class QuoteBox extends Component {
  state = {
    textClass: 'show'
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.textClass !== 'show') {
      this.setState({
        textClass: 'show'
      });
    }
  };

  handleNewQuoteClick = () => {
    this.setState({ textClass: 'hide' });
    setTimeout(() => {
      this.props.getRandomQuote();
    }, 1000);
  };

  render() {
    const { text, author } = this.props.quote;
    const { color } = this.props;
    const { textClass } = this.state;

    const colorStyles = {
      color: color
    };

    const newQuoteBtnStyle = {
      background: color
    };

    const buttonBoxStyle = {
      borderTopColor: `${color}`
    };

    return (
      <div id="quote-box" style={colorStyles}>
        <div>
          <div>
            <FontAwesomeIcon icon="quote-left" size="lg" className={textClass} />
          </div>
          <span id="text" className={textClass}>
            {text}
          </span>
          <div>
            <FontAwesomeIcon icon="quote-right" size="lg" className={textClass} />
          </div>
        </div>
        <span id="author" className={textClass}>
          {author}
        </span>
        <div className="buttons" style={buttonBoxStyle}>
          <div className="left">
            <button
              id="new-quote"
              className="new-quote-btn"
              style={newQuoteBtnStyle}
              onClick={this.handleNewQuoteClick}
            >
              New Quote
            </button>
          </div>
          <div className="right">
            <TweetButton quote={this.props.quote} color={color} />
            <TranslateButton quote={this.props.quote} color={color} />
          </div>
        </div>
      </div>
    );
  }
}
