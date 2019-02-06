//
// Quotes reducer.
//
import * as ActionTypes from '../ActionTypes';

const initialState = {
  isLoading: true,
  errMsg: null,
  quotes: [],
  randomQuote: {},
  randomQuotesShown: []
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
      let randomQuoteIndex = Math.floor(Math.random() * state.quotes.length);

      let shouldReset = state.quotes.length === state.randomQuotesShown.length;
      if (!shouldReset) {
        while (state.randomQuotesShown.includes(randomQuoteIndex)) {
          randomQuoteIndex = Math.floor(Math.random() * state.quotes.length);
        }
      }
      const randomQuote = state.quotes[randomQuoteIndex];
      const randomQuotesShown = shouldReset ? [randomQuoteIndex] : [...state.randomQuotesShown, randomQuoteIndex];

      return {
        ...state,
        randomQuote,
        randomQuotesShown
      };

    default:
      return state;
  }
};
