import { types } from ".";
import { updateInput } from "../../services/form";
import authForm from "../../templates/auth";

const initialState = {
  template: authForm,
  formIsValid: false,
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: "/"
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_AUTH_INPUT:
      return updateInput(state, action);
    case types.AUTH_START:
      return { ...state, error: null, loading: true };
    case types.AUTH_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
      };
    case types.AUTH_FAIL:
      return { ...state, error: action.error, loading: false };
    case types.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        template: authForm,
        formIsValid: false
      };
    case types.SET_AUTH_REDIRECT_PATH:
      return { ...state, authRedirectPath: action.path };
    default:
      return state;
  }
};

export default authReducer;
