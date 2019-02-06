import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TweetButton from './TweetButton';
import TranslateButton from './TranslateButton';
import { connect } from 'react-redux';
import { getRandomQuote } from '../redux/actions/quotes';
import { getRandomColor } from '../redux/actions/colors';

class QuoteBox extends Component {
  state = {
    textClass: 'show',
    transitionInProgress: false
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.textClass !== 'show') {
      this.setState({
        textClass: 'show',
        transitionInProgress: false
      });
    }
  };

  handleNewQuoteClick = () => {
    if (this.state.transitionInProgress) {
      return;
    }

    this.setState({
      textClass: 'hide',
      transitionInProgress: true
    });
    setTimeout(() => {
      this.props.getRandomQuote();
      this.props.getRandomColor();
    }, 1000);
  };

  render() {
    const { text, author } = this.props.randomQuote;
    const { randomColor } = this.props;
    const { textClass, transitionInProgress } = this.state;

    const colorStyles = {
      color: randomColor
    };

    const newQuoteBtnStyle = {
      background: randomColor
    };

    const buttonBoxStyle = {
      borderTopColor: `${randomColor}`
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
              disabled={transitionInProgress}
            >
              New Quote
            </button>
          </div>
          <div className="right">
            <TweetButton quote={this.props.randomQuote} color={randomColor} />
            <TranslateButton quote={this.props.randomQuote} color={randomColor} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.quotes.isLoading,
  errMsg: state.quotes.errMsg,
  randomQuote: state.quotes.randomQuote,
  randomColor: state.colors.randomColor
});

const mapDispatchToProps = dispatch => ({
  getRandomQuote: () => {
    dispatch(getRandomQuote());
  },
  getRandomColor: () => {
    dispatch(getRandomColor());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteBox);
