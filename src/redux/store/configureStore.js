import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Quotes } from '../reducers/quotes';

export const ConfigureStore = () => {
  const store = createStore(Quotes, applyMiddleware(thunk));
  return store;
};
