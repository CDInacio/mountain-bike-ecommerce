import { React, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import CartItemsList from "./CartItemsList";

import { isLoggedIn } from "../../store/actions/authActions";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";

import styles from "./CartItem.module.css";

import { Container, Grid, Typography, Paper, Button, Alert } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    "&:hover": {
      boxShadow:
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
    },
  },
  wrapper: {
    marginTop: "100px",
  },
  name: {
    opacity: "0.8",
  },
  price: {
    fontWeight: "bold",
  },
  continueCart: {
    width: "100%",
    padding: "10px",
  },
}));

const CartItems = () => {
  const history = useHistory();
  const isAuth = isLoggedIn();
  const cartItems = useSelector((state) => state.cart.items);
  const location = useLocation();
  const classes = useStyles();

  const [error, setError] = useState('');
  
  const getTotal = (cart) => {
    let total = 0;
    cart.map((item) => (total = total + item.totalPrice));
    return total;
  };

  let cartTotal;
  cartTotal = getTotal(cartItems);

  
const continueWithPurchaseHandler = () => {
  if (!isAuth) {
    setError('Você precisa estar logado para prosseguir com a compra.');
    return;
  } else if (cartItems.length === 0) {
    setError('Carrinho vazio');
    return;
  }
  // history.push('/');
}
  return (
    <>
      <TopNav />
      <BottomNav />
      <Container maxWidth="md" className={classes.wrapper}>
        <Grid container>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
            item
            xs={1}
          >
            <Typography>Foto</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography sx={{ marginLeft: "25px" }}>Nome do produto</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Quantidade</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Preço</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Subtotal</Typography>
          </Grid>
          <div className={styles.line}></div>
          {cartItems.map((item, i) => (
            <>
              <CartItemsList
                id={item.id}
                productName={item.productName}
                price={item.price}
                quantity={item.quantity}
                imageUrl={item.imageUrl}
                totalPrice={item.totalPrice}
              />
            </>
          ))}
          <Grid item xs={12} sx={{ marginTop: "30px" }}>
            <Paper
              elevation={2}
              className={classes.continueCart}
              sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}
            >
              <Typography>Total: R$ {cartTotal}</Typography>
              <Button onClick={continueWithPurchaseHandler} variant="outlined">Continuar</Button>
            </Paper>
          </Grid>
          {error ? <Alert sx={{marginTop: '15px'}} severity="error">{error}.</Alert> : ''}
        </Grid>
      </Container>
    </>
  );
};
export default CartItems;
