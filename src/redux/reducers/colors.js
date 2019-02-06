//
// Colors reducer.
//
import * as ActionTypes from '../ActionTypes';

const initialState = {
  randomColor: ''
};

export const Colors = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_RANDOM_COLOR:
      const rgb = [];
      for (let i = 0; i < 3; i++) {
        rgb.push(Math.floor(Math.random() * (192 - 64) + 64));
      }
      const rgbStr = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
      return {
        randomColor: rgbStr
      };

    default:
      return state;
  }
};
