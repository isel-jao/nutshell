import { combineReducers } from "redux";
import { createStore } from "redux";
import counterReducer from "./counter";
import userReducer from "./user";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
