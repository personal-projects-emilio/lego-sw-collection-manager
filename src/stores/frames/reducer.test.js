import reducer from ".";
import { types } from ".";

describe("framesReducer", () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      frames: null,
    };
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should set the template", () => {
    const action = {
      type: types.SET_FRAMES,
      frames: 'Test'
    };
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      frames: 'Test'
    });
  });
});
