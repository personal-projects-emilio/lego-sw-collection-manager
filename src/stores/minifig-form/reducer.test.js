import reducer from ".";
import { types } from ".";
import minifigForm from '../../templates/minifigForm';

describe("minifigFormReducer", () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      template: minifigForm,
      formIsValid: false
    };
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should set the template", () => {
    const action = {
      type: types.SET_MINIFIGFORM,
      template: minifigForm
    };
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      template: minifigForm
    });
  });
});
