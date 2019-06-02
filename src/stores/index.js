import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import minifigsReducer from "./minifigs";
import minifigsFilterReducer from "./minifigs-filter";
import minifigFormReducer from "./minifig-form";
import authReducer from "./auth";
import framesReducer from './frames';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  minifigs: minifigsReducer,
  minifigsFilter: minifigsFilterReducer,
  minifigForm: minifigFormReducer,
  auth: authReducer,
  frames: framesReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, routerMiddleware(history)),
  )
);

export default store;