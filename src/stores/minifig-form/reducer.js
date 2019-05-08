import { types } from ".";

const initialState = {
  minifigForm: null,
  formIsValid: false
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET.MINIFIGFORM:
      return {...state, minifigForm: action.minifigForm}
    default:
      return state;
  }
};

export default counterReducer;
