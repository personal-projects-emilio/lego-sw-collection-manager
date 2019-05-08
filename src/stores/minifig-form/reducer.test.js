import reducer from ".";
import { types } from ".";

describe("minifigFormReducer", () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      minifigForm: null,
      formIsValid: false
    };
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should set the minifigForm", () => {
    const action = {
      type: types.SET.MINIFIGFORM,
      minifigForm: 'This is a test'
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      minifigForm: 'This is a test'
    });
  });
});
