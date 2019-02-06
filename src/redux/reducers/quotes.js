//
// Quotes reducer.
//
import * as ActionTypes from '../ActionTypes';

const initialState = {
  isLoading: true,
  errMsg: null,
  quotes: [],
  randomQuote: {}
};

export const Quotes = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_QUOTES:
      return {
        ...state,
        isLoading: false,
        quotes: action.data
      };

    case ActionTypes.QUOTES_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case ActionTypes.QUOTES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.data.errMsg,
        quotes: action.data.fallbackData
      };

    case ActionTypes.GET_RANDOM_QUOTE:
      const randomQuoteIndex = Math.floor(Math.random() * state.quotes.length);
      const randomQuote = state.quotes[randomQuoteIndex];

      const quotes = state.quotes.filter(quote => {
        return quote.author !== randomQuote.author && quote.text !== randomQuote.text;
      });

      return {
        ...state,
        randomQuote,
        quotes
      };

    default:
      return state;
  }
};
