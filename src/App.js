import React, { Component } from 'react';
import './styles/App.css';
import Main from './components/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLanguage, faQuoteLeft, faQuoteRight, faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faLanguage, faQuoteLeft, faQuoteRight, faSpinner);

class App extends Component {
  render() {
    return <Main />;
  }
}

export default App;
