import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/pages/home";
import Components from './components/pages/Components'
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import SingleProduct from "./components/singleProduct/SingleProduct";
import Suspension from "./components/componentsCategory/Suspension";
import Frame from "./components/componentsCategory/Frame";

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
        <Route path="/componentes" exact>
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
        <Route path ="/componente/suspensao" exact>
          <Suspension />
        </Route>
        <Route path ="/componente/quadro" exact>
          <Frame />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
