import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/pages/home";
import Components from './components/pages/Components'
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import SingleProduct from "./components/singleProduct/SingleProduct";

export default function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/componentes">
          <Components />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cadastro">
          <Register />
        </Route>
        <Route path ="/produto/:nomeProduto">
          <SingleProduct />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
