import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";

import { sendCartData } from "../src/store/actions/cartActions";
import { isLoggedIn } from "./store/actions/authActions";
import { fetchUser } from "./store/actions/authActions";
import { fetchCartData } from "../src/store/actions/cartActions";

import Home from "./components/pages/home";
import Components from "./components/pages/Components";
import Login from "./components/auth/LoginForm";
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
  const user = useSelector((state) => state.user.userInfo)
  const location = useLocation();
  const isAuth = isLoggedIn();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (!isAuth) {
      return;
    }
    if (isInitial) {
      isInitial = false;
      return;
    }
      if (cart.changed) {
        dispatch(sendCartData(cart));
      }
  }, [cart]);

  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/componentes" exact>
          <Components />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/cadastro" exact>
          <Register />
        </Route>
        <Route path="/produto/:nomeProduto" exact>
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
