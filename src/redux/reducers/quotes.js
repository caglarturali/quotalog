//
// Quotes reducer.
//
import * as ActionTypes from '../ActionTypes';

const initialState = {
  isLoading: true,
  errMsg: null,
  quotes: [],
  quotesToChooseFrom: [],
  randomQuote: {}
};

export const Quotes = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_QUOTES:
      return {
        ...state,
        isLoading: false,
        quotes: action.data,
        quotesToChooseFrom: action.data
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
        quotes: action.data.fallbackData,
        quotesToChooseFrom: action.data.fallbackData
      };

    case ActionTypes.GET_RANDOM_QUOTE:
      let shouldReset = state.quotesToChooseFrom.length === 0;

      let randomQuote, quotesToChooseFrom;
      if (shouldReset) {
        // Select from all available quotes.
        let randomQuoteIndex = Math.floor(Math.random() * state.quotes.length);
        randomQuote = state.quotes[randomQuoteIndex];

        quotesToChooseFrom = state.quotes.filter(quote => {
          return quote.author !== randomQuote.author && quote.text !== randomQuote.text;
        });
      } else {
        // Chooses from quotesToChooseFrom array.
        let randomQuoteIndex = Math.floor(Math.random() * state.quotesToChooseFrom.length);
        randomQuote = state.quotesToChooseFrom[randomQuoteIndex];

        quotesToChooseFrom = state.quotesToChooseFrom.filter(quote => {
          return quote.author !== randomQuote.author && quote.text !== randomQuote.text;
        });
      }

      return {
        ...state,
        randomQuote,
        quotesToChooseFrom
      };

    default:
      return state;
  }
};
