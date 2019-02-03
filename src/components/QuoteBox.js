import React, { Component } from 'react';
import TweetButton from './TweetButton';
import TranslateButton from './TranslateButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    if (!text || !author) {
      return <FontAwesomeIcon icon="spinner" pulse style={{ color: 'white' }} size="2x" />;
    }

    return (
      <div id="quote-box" style={styles}>
        <span id="text" className={this.state.textClasses}>
          <FontAwesomeIcon icon="quote-left" />
          <br />
          {text}
          <br />
          <FontAwesomeIcon icon="quote-right" />
        </span>
        <span id="author">{author}</span>
        <div className="buttons">
          <button id="new-quote" onClick={this.handleNewQuoteClick}>
            New Quote
          </button>
          <TweetButton quote={this.props.quote} />
          <TranslateButton quote={this.props.quote} />
        </div>
      </div>
    );
  }
}
