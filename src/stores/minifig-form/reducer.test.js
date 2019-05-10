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

  it("should update an input", () => {
    const state = {
      template: {
        key1: {
          value: 'test',
          valid: true,
          touched: true,
          errorText: null,
          validation: {
            required: true
          }
        }
      },
      formIsValid: true
    }
    const action = {
      type: types.UPDATE_INPUT,
      value: '',
      inputKey: 'key1'
    };
    expect(reducer(state, action)).toEqual({
      template: {
        key1: {
          ...state.template.key1,
          value: '',
          valid: false,
          errorText: 'This field is required'
        }
      },
      formIsValid: false
    });
  });
});
