import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TweetButton from './TweetButton';
import TranslateButton from './TranslateButton';

export default class QuoteBox extends Component {
  state = {
    toggleClasses: ''
  };

  componentWillReceiveProps = () => {
    this.setState({ toggleClasses: 'hide' });
    setTimeout(() => {
      this.setState({
        toggleClasses: 'show'
      });
    }, 100);
  };

  handleNewQuoteClick = () => {
    this.setState({ toggleClasses: 'hide' });
    setTimeout(() => {
      this.props.getRandomQuote();
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
        <div>
          <div>
            <FontAwesomeIcon icon="quote-left" size="lg" className={this.state.toggleClasses} />
          </div>
          <span id="text" className={this.state.toggleClasses}>
            {text}
          </span>
          <div>
            <FontAwesomeIcon icon="quote-right" size="lg" className={this.state.toggleClasses} />
          </div>
        </div>
        <span id="author" className={this.state.toggleClasses}>
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
