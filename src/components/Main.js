import React, { Component } from 'react';
import QuoteBox from './QuoteBox';
import GitHubButton from './GitHubButton.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { fetchQuotes } from '../redux/actions/quotes';

class Main extends Component {
  componentDidMount = () => {
    this.props.fetchQuotes();
  };

  getRandomColor = () => {
    const rgb = [];
    for (let i = 0; i < 3; i++) {
      rgb.push(Math.floor(Math.random() * (192 - 64) + 64));
    }
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  };

  render() {
    const { isLoading } = this.props;

    const bgColor = this.getRandomColor();
    let styles = {
      background: bgColor
    };

    return (
      <div className="App" style={styles}>
        {isLoading ? (
          <FontAwesomeIcon icon="spinner" pulse style={{ color: 'white' }} size="2x" />
        ) : (
          <React.Fragment>
            <QuoteBox color={bgColor} />
            <GitHubButton />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchQuotes: () => {
    dispatch(fetchQuotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
