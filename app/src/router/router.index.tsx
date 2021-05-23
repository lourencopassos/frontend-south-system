import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login/login.index";
import Main from "../pages/Main/main.index";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/main" component={Main}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
