import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const initialState = {};

const middleware = [thunk];
// if (process.env.NODE_ENV !== "production") {
//   middleware.push(createLogger());
// }

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
