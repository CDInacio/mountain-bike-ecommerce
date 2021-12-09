import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { sendCartData } from "../src/store/actions/cartActions";
import { fetchUser } from "./store/actions/authActions";
import { isLoggedIn } from "./store/actions/authActions";

import Home from "./components/pages/home";
import Components from "./components/pages/Components";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import SingleProduct from "./components/singleProduct/SingleProduct";
import Suspension from "./components/componentsCategory/Suspension";
import Frame from "./components/componentsCategory/Frame";
import Brands from "./components/brands/Brands";
import Cart from "./components/pages/Cart";
import Equipments from "./components/equipments/Equipments";
import Accessories from "./components/accessories/Accessories";
import Casual from "./components/casual/Casual";

let isInitial = true;

export default function App() {
  const isAuth = isLoggedIn();
  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchUser());
    }
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!isAuth) {
      return;
    }
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart, user.id));
  }, [cart]);

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
        <Route path="/produto/:nomeProduto">
          <SingleProduct />
        </Route>
        <Route path="/componente/suspensao" exact>
          <Suspension />
        </Route>
        <Route path="/componente/quadro" exact>
          <Frame />
        </Route>
        <Route path="/marca/:brand" exact>
          <Brands />
        </Route>
        <Route path="/carrinho" exact>
          <Cart />
        </Route>
        <Route path="/equipamentos" exact>
          <Equipments />
        </Route>
        <Route path="/acessorios" exact>
          <Accessories />
        </Route>
        <Route path="/casual" exact>
          <Casual />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
