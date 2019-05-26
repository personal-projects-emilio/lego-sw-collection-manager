import reducer from ".";
import { types } from ".";
import authForm from "../../templates/auth";

describe("authReducer", () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      template: authForm,
      formIsValid: false,
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/"
    };
  });

  it("should update an input", () => {
    const state = {
      ...initialState,
      template: {
        key1: {
          value: "test",
          valid: true,
          touched: true,
          errorText: null,
          validation: {
            required: true
          }
        }
      },
      formIsValid: true
    };
    const action = {
      type: types.UPDATE_AUTH_INPUT,
      value: "",
      inputKey: "key1"
    };
    expect(reducer(state, action)).toEqual({
      ...initialState,
      template: {
        key1: {
          ...state.template.key1,
          value: "",
          valid: false,
          errorText: "This field is required"
        }
      },
      formIsValid: false
    });
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should start the auth", () => {
    const action = {
      type: types.AUTH_START
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: true
    });
  });
  it("should set the store after an auth success", () => {
    initialState.loading = true;
    const action = {
      type: types.AUTH_SUCCESS,
      idToken: "This is a token",
      userID: "This is a user"
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      token: action.idToken,
      userId: action.userId,
      error: null,
      loading: false
    });
  });
  it("should set the error when failing the auth", () => {
    initialState.loading = true;
    const action = {
      type: types.AUTH_FAIL,
      error: "This is not working as it should....",
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      error: action.error,
      loading: false
    });
  });
  it("should reset the store after a logout", () => {
    const action = {
      type: types.AUTH_LOGOUT,
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
  it("should set the redirect path", () => {
    const action = {
      type: types.SET_AUTH_REDIRECT_PATH,
      path: "/here",
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      authRedirectPath: action.path,
    });
  });
});
