import { types, cases } from ".";

const initialState = {
  template: null,
  formIsValid: false
};

const minifigFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MINIFIGFORM:
      return {...state, template: action.template}
    case types.UPDATE_INPUT:
      return cases.updateInput(state, action);
    case types.RESET_MINIFIGFORM:
      return {...state, template: null, formIsValid: false}
    default:
      return state;
  }
};

export default minifigFormReducer;
