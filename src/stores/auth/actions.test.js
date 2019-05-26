import * as actions from "./actions";
import { types } from "./types";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { push } from "connected-react-router";

describe("actions/auth", () => {
  let dispatch;
  let mock;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    dispatch = jest.fn();
    jest.useFakeTimers();
    jest.clearAllTimers();
  });
  afterEach(() => {
    mock.restore();
  });
  it("should create an updateAuthInput action", () => {
    expect(actions.updateAuthInput("John Doe", "password")).toEqual({
      type: types.UPDATE_AUTH_INPUT,
      value: "John Doe",
      inputKey: "password"
    });
  });

  it("should create an authFail action", () => {
    expect(actions.authFail("error message")).toEqual({
      type: types.AUTH_FAIL,
      error: "error message"
    });
  });

  it("should logout", () => {
    actions.logout()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: types.AUTH_LOGOUT
    });
  });

  it("should create an authStart action", () => {
    expect(actions.authStart()).toEqual({
      type: types.AUTH_START
    });
  });

  it("should create a authSuccess ation", () => {
    expect(actions.authSuccess("token", "user")).toEqual({
      type: types.AUTH_SUCCESS,
      idToken: "token",
      userId: "user"
    });
  });

  it("should checkAuthTimeout", () => {
    actions.checkAuthTimeout(10)(dispatch);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
    jest.runAllTimers();
    expect(dispatch).toHaveBeenCalled();
  });

  it("should auth", async () => {
    const url = process.env.REACT_APP_AUTH_URL;
    const getState = jest.fn(() => ({
      auth: {
        template: {
          email: {
            value: "test@test.com"
          },
          password: {
            value: "password"
          }
        },
        authRedirectPath: "/test"
      }
    }));
    mock.onPost(url).reply(200, {
      idToken: "Some token",
      expiresIn: 100000,
      localId: "An user id"
    });
    await actions.authenticate()(dispatch, getState);
    expect(localStorage.setItem).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, push("/test"));
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      actions.authSuccess("Some token", "An user id")
    );
  });

  it("should manage auth error", async () => {
    const url = process.env.REACT_APP_AUTH_URL;
    const getState = jest.fn(() => ({
      auth: {
        template: {
          email: {
            value: "test@test.com"
          },
          password: {
            value: "password"
          }
        },
        authRedirectPath: "/test"
      }
    }));
    mock.onPost(url).reply(500, {
      error: {
        message: "Something went wrong!"
      }
    });
    await actions.authenticate()(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      actions.authFail({
        message: "Something went wrong!"
      })
    );
  });

  it("should set auth redirect path", () => {
    expect(actions.setAuthRedirectPath("/somewhere")).toEqual({
      type: types.SET_AUTH_REDIRECT_PATH,
      path: "/somewhere"
    });
  });

  it("should logout when no token in localstorage", () => {
    actions.authCheckState()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it("should logout when the expirationDate is passed", () => {
    const localStore = {
      token: '123456789',
      expirationDate: '2019/01/01',
    };
    window.localStorage.__proto__.getItem = jest.fn(key => localStore[key]);
    actions.authCheckState()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
  it("should logout when the expirationDate is passed", () => {
    const localStore = {
      token: '123456789',
      expirationDate: '2100/01/01',
      userId: 'Darth Vader'
    };
    window.localStorage.__proto__.getItem = jest.fn(key => localStore[key]);
    actions.authCheckState()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
