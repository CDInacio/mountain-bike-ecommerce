import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { privateRequest } from "./services/api";

import HomeScreen from "./components/screens/HomeScreen";
import ProductsScreen from "./components/screens/ProductsScreen";
import ProductSreen from "./components/screens/ProductSreen";
import CartScreen from "./components/screens/CartScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import LoginScreen from "./components/screens/LoginScreen";

export default function App() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  // useEffect(() => {
  //   const fetchCartData = async () => {
  //     try {
  //       const { data } = await privateRequest.get("/cart");
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   if (user.isLoggedIn) {
  //     fetchCartData();
  //   }
  // }, []);
  useEffect(() => {
    const addProductToCart = async (products) => {
      try {
        await privateRequest.post(
          "/cart/add",
          products
        );
      } catch (error) {
        console.log(error);
      }
    };
    if (cart.changed) {
      addProductToCart(cart.products);
    }
  }, [cart]);

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
          {user.isLoggedIn ? <Redirect to="/" /> : <LoginScreen />}
        </Route>
      </Switch>
    </React.Fragment>
  );
}
