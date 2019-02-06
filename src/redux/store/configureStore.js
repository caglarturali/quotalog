import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Quotes } from '../reducers/quotes';
import { Colors } from '../reducers/colors';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      quotes: Quotes,
      colors: Colors
    }),
    applyMiddleware(thunk)
  );
  return store;
};
