import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import User from "./pages/User";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/user" component={User} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
