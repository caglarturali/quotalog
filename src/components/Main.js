import React, { Component } from 'react';
import QuoteBox from './QuoteBox';
import GitHubButton from './GitHubButton.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { fetchQuotes } from '../redux/actions/quotes';
import { getRandomColor } from '../redux/actions/colors';

class Main extends Component {
  componentDidMount = () => {
    this.props.getRandomColor();
    this.props.fetchQuotes();
  };

  render() {
    const { isLoading, randomColor } = this.props;

    const styles = {
      background: randomColor
    };

    return (
      <div className="App" style={styles}>
        {isLoading ? (
          <FontAwesomeIcon icon="spinner" pulse style={{ color: 'ghostwhite' }} size="2x" />
        ) : (
          <React.Fragment>
            <QuoteBox />
            <GitHubButton />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.quotes.isLoading,
  quotes: state.quotes.quotes,
  randomColor: state.colors.randomColor
});

const mapDispatchToProps = dispatch => ({
  fetchQuotes: () => {
    dispatch(fetchQuotes());
  },
  getRandomColor: () => {
    dispatch(getRandomColor());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
