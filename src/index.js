import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-less/semantic.less";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: "https://41be231c64f24c01a1a944812499526d@sentry.io/5184466",
});

ReactDOM.render(
  <Router>
    <SideBar>
      <App />
    </SideBar>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
