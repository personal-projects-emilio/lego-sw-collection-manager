import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import minifigsReducer from "./minifigs";
import minifigsSorterReducer from "./minifigs-sorter";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  minifigs: minifigsReducer,
  minifigsSorter: minifigsSorterReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, routerMiddleware(history)),
  )
);

export default store;