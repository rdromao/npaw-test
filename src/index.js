import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/searchBar";
import Results from "./components/results";
import thunkMiddleware from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";

import "./styles.css";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>iTunes Search</h1>
        <SearchBar />
        <Results />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
