import React, { Component } from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from "./Main.js";
import UserProfile from "./UserProfile.js";
import rootReducer from "./rootReducer.js";
import Splash from "./Splash.js";

const middleware = [logger, thunk];

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Splash />
      </Provider>
    );
  }
}
