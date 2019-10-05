import axios from "axios";
import { types } from ".";
import { push } from "connected-react-router";

export const updateAuthInput = (value, inputKey) => ({
  type: types.UPDATE_AUTH_INPUT,
  value,
  inputKey
});

export const authFail = error => ({
  type: types.AUTH_FAIL,
  error
});

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  dispatch({
    type: types.AUTH_LOGOUT
  });
};

export const authStart = () => ({
  type: types.AUTH_START
});

export const authSuccess = (idToken, userId) => ({
  type: types.AUTH_SUCCESS,
  idToken,
  userId
});

export const checkAuthTimeout = expirationTime => dispatch => {
  setTimeout(() => {
    dispatch(logout());
  }, expirationTime * 1000);
};

export const authenticate = () => async (dispatch, getState) => {
  const state = getState();
  const { template, authRedirectPath } = state.auth;
  const authData = {
    email: template.email.value,
    password: template.password.value,
    returnSecureToken: true
  }
  try {
    const res = await axios.post(process.env.REACT_APP_AUTH_URL, authData);
    const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
    localStorage.setItem('token', res.data.idToken);
    localStorage.setItem('expirationDate', expirationDate);
    localStorage.setItem('userId', res.data.localId);
    dispatch(push(authRedirectPath))
    dispatch(authSuccess(res.data.idToken, res.data.localId));
    dispatch(checkAuthTimeout(res.data.expiresIn));
  } catch(err) {
    dispatch(authFail(err.response.data.error))
  };
};

export const setAuthRedirectPath = path => ({
  type: types.SET_AUTH_REDIRECT_PATH,
  path
});

export const authCheckState = () => dispatch => {
  const token = localStorage.getItem("token");
  if (!token) {
    dispatch(logout());
  } else {
    const expirationDate = new Date(localStorage.getItem("expirationDate"));
    if (expirationDate <= new Date()) {
      dispatch(logout());
    } else {
      const userId = localStorage.getItem("userId");
      dispatch(authSuccess(token, userId));
      dispatch(
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
};
