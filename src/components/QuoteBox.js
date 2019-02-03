import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TweetButton from './TweetButton';
import TranslateButton from './TranslateButton';

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

    const colorStyles = {
      color: color
    };

    const newQuoteBtnStyle = {
      background: color
    };

    const buttonBoxStyle = {
      borderTopColor: `${color}`
    };

    if (!text || !author) {
      return <FontAwesomeIcon icon="spinner" pulse style={{ color: 'white' }} size="2x" />;
    }

    return (
      <div id="quote-box" style={colorStyles}>
        <span id="text" className={this.state.textClasses}>
          <FontAwesomeIcon icon="quote-left" />
          <br />
          {text}
          <br />
          <FontAwesomeIcon icon="quote-right" />
        </span>
        <span id="author" className={this.state.textClasses}>
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
            <TweetButton quote={this.props.quote} customStyle={colorStyles} />
            <TranslateButton quote={this.props.quote} customStyle={colorStyles} />
          </div>
        </div>
      </div>
    );
  }
}
