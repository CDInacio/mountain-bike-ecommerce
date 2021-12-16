import React from "react";
import { Route, Switch } from "react-router-dom";

import HomeScreen from "./components/screens/HomeScreen";
import ProductsScreen from "./components/screens/ProductsScreen";
import ProductSreen from './components/screens/ProductSreen';
import CartScreen from "./components/screens/CartScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import LoginScreen from "./components/screens/LoginScreen";

export default function App() {

  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <HomeScreen />
        </Route>
        <Route path="/products/:tipo/:compName" >
          <ProductsScreen />
        </Route>
        <Route path="/product/:id" >
          <ProductSreen />
        </Route>
        {/* <Route path="/carrinho/:nome">
            <CartScreen />
        </Route> */}
        <Route path="/cadastro">
            <RegisterScreen />
        </Route>
        <Route path="/login">
            <LoginScreen />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
