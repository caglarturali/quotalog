import React, { Component } from 'react';
import './styles/App.css';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/store/configureStore';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft, faQuoteRight, faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faQuoteLeft, faQuoteRight, faSpinner);

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
