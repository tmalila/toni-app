import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./Root";
import { Store } from "redux";
import { createStore } from "./services/redux";
import {
  getMiddlewares,
  getReducers,
  getEnhancers,
  getSagaMiddleware
} from "./config/redux";
import { getInitialState } from "./config/state";
import rootSaga from "./sagas/root";
// import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<Root />, document.getElementById("root"));

const initialState = getInitialState();

const store: Store = createStore(
  getReducers(),
  getMiddlewares(),
  getEnhancers(),
  initialState
);

const sagaMiddleware = getSagaMiddleware();
sagaMiddleware.run(rootSaga);

function render(Component: typeof Root, rootElement: HTMLElement) {
  ReactDOM.render(<Component store={store} />, rootElement); // Uncomment when store is ready
  // ReactDOM.render(<Component />, rootElement);
}

const rootElement = document.getElementById("app");
if (!rootElement) {
  throw new Error("Could not find root element!");
}

render(Root, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
