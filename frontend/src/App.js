import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { privateRequest } from "./services/api";
import { updateCart } from "./state/cartSlice";

import { setLoading } from "./state/cartSlice";

import HomeScreen from "./components/screens/HomeScreen";
import ProductsScreen from "./components/screens/ProductsScreen";
import ProductSreen from "./components/screens/ProductSreen";
import CartScreen from "./components/screens/CartScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import LoginScreen from "./components/screens/LoginScreen";
import SearchScreen from './components/screens/SearchScreen';
import BrandsScreen from "./components/screens/BrandsScreen";

let isInitial = true;

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchCartData = async () => {
      dispatch(setLoading(true));
      try {
        const { data } = await privateRequest.get("/cart");
        console.log(data);
        let updatedCart = [];
        data.forEach((value, key) => {
          updatedCart = value.products;
        });
        dispatch(updateCart(updatedCart));
        dispatch(setLoading(false));
      } catch (error) {
        console.log(error);
      }
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (user.isLoggedIn) {
      fetchCartData();
    }
  }, []);

  console.log(cart)

  useEffect(() => {
    const addProductToCart = async (products) => {
      try {
        await privateRequest.post("/cart/add", products);
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
        <Route path="/search/:query">
          <SearchScreen />
        </Route>
        <Route path="/products/brands">
          <BrandsScreen />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
