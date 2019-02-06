//
// Quotes actions/action creators.
//
import * as ActionTypes from '../ActionTypes';
import { BASE_URL } from '../../API';
import localFile from '../../shared/quotes.json';

export const fetchQuotes = () => dispatch => {
  dispatch(quotesLoading());

  return fetch(BASE_URL)
    .then(responseHandler, rejectHandler)
    .then(res => res.json())
    .then(quotes => dispatch(addQuotes(quotes.quotes)))
    .then(() => dispatch(getRandomQuote()))
    .catch(e => dispatch(quotesFailed(e.message, localFile.quotes)))
    .then(() => dispatch(getRandomQuote()));
};

export const addQuotes = quotes => ({
  type: ActionTypes.ADD_QUOTES,
  data: quotes
});

export const getRandomQuote = () => ({
  type: ActionTypes.GET_RANDOM_QUOTE
});

export const quotesLoading = () => ({
  type: ActionTypes.QUOTES_LOADING
});

export const quotesFailed = (errMsg, fallbackData) => ({
  type: ActionTypes.QUOTES_FAILED,
  data: { errMsg, fallbackData }
});

//
// Generic handlers.
//
const responseHandler = response => {
  if (!response.ok) {
    const error = new Error(`Error ${response.status}: ${response.statusText}`);
    error.response = response;
    throw error;
  }
  return response;
};

const rejectHandler = reject => {
  const error = new Error(reject.message);
  throw error;
};
