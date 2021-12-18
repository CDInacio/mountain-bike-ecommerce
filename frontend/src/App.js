import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import HomeScreen from "./components/screens/HomeScreen";
import ProductsScreen from "./components/screens/ProductsScreen";
import ProductSreen from "./components/screens/ProductSreen";
import CartScreen from "./components/screens/CartScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import LoginScreen from "./components/screens/LoginScreen";

export default function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <HomeScreen />
        </Route>
        <Route path="/products/:tipo/:compName">
          <ProductsScreen />
        </Route>
        <Route path="/product/:id">
          <ProductSreen />
        </Route>
        <Route path="/cart">
          <CartScreen />
        </Route>
        <Route path="/signup">
          <RegisterScreen />
        </Route>
        <Route path="/login">
          {isLoggedIn ? <Redirect to="/" /> : <LoginScreen />}
        </Route>
      </Switch>
    </React.Fragment>
  );
}
