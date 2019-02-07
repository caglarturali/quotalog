import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import posed, { PoseGroup } from 'react-pose';
import TweetButton from './TweetButton';
import TranslateButton from './TranslateButton';
import Loading from './Loading';
import { connect } from 'react-redux';
import { getRandomQuote } from '../redux/actions/quotes';
import { getRandomColor } from '../redux/actions/colors';

const QuoteDisplay = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 500 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

class QuoteBox extends Component {
  state = {
    isVisible: false
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (!prevState.isVisible) {
      this.setState({
        isVisible: true
      });
    }
  };

  handleNewQuoteClick = () => {
    this.setState({
      isVisible: false
    });
    setTimeout(() => {
      this.props.getRandomQuote();
      this.props.getRandomColor();
    }, 500);
  };

  render() {
    const { text, author } = this.props.randomQuote;
    const { randomColor } = this.props;
    const { isVisible } = this.state;

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
        <PoseGroup>
          {isVisible && (
            <QuoteDisplay key="quote-display">
              <div>
                <FontAwesomeIcon icon="quote-left" size="lg" />
              </div>
              <span id="text">{text}</span>
              <div>
                <FontAwesomeIcon icon="quote-right" size="lg" />
              </div>
              <span id="author">{author}</span>
            </QuoteDisplay>
          )}
        </PoseGroup>
        {!isVisible && <Loading key="loading" color={randomColor} />}
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
