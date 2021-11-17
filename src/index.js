import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Engineer from "./Components/Engineer"; //aslkdjalskdjlaskjd
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Login from "./Components/Login";
// import App from './App';

import { Provider } from "react-redux";
import store from "./Redux/store";

const AppWithRoute = () => {
  return (
    <Router>
      {/* <Route path="/" exact component={App} /> */}
      <Route path="/" exact component={Home} />

      <Route path="/user/login" exact component={Login} />
      <Route path="/engineer" exact component={Engineer} />
      <Route path="/engineer/:id_engineer" exact component={Profile} />
    </Router>
  );
};

const AppUsingRedux = () => {
  return (
    <Provider store={store}>
      <AppWithRoute />
    </Provider>
  );
};

ReactDOM.render(<AppUsingRedux />, document.getElementById("root"));
// ReactDOM.render(<App  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
