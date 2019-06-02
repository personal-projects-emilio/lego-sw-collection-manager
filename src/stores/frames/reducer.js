import { types } from ".";

const initialState = {
  frames: null
};

const framesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FRAMES:
      return { ...state, frames: action.frames };
    default:
      return state;
  }
};

export default framesReducer;
