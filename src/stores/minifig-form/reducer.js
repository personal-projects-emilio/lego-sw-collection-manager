import { types, cases } from ".";
import minifigForm from '../../templates/minifigForm';

const initialState = {
  template: minifigForm,
  formIsValid: false
};

const minifigFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MINIFIGFORM:
      return {...state, template: action.template}
    case types.UPDATE_INPUT:
      return cases.updateInput(state, action);
    default:
      return state;
  }
};

export default minifigFormReducer;
