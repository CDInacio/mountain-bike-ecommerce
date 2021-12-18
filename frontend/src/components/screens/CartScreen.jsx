import { React } from "react";
import { useSelector } from "react-redux";

import CartItem from "../CartItem";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";

import "../../assets/css/Cart.css";

import {
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  //   Alert,
} from "@material-ui/core";

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

const CartScreen = () => {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
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
            xs={2}
          >
            <Typography>Foto</Typography>
          </Grid>
          <Grid item xs={4}>
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
          <div className="line"></div>
          {cart.products.map((item, i) => (
            <>
              <CartItem
                key={i}
                id={item.id}
                productName={item.productName}
                price={item.price}
                quantity={item.quantity}
                imageUrl={item.imageUrl}
                totalPrice={item.totalPrice}
              />
            </>
          ))}
          <Grid item xs={6} sx={{ marginTop: "30px", marginLeft: 'auto', marginRight:'auto' }}>
            <Paper
              variant="outlined"
              elevation={2}
              className={classes.continueCart}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
                <Typography variant="h4" sx={{fontWeight: "lighter"}}>Resumo pedido</Typography>
              <Button variant="outlined">Continuar</Button>
            </Paper>
          </Grid>
          {/* {error ? (
            <Alert sx={{ marginTop: "15px" }} severity="error">
              {error}.
            </Alert>
          ) : (
            ""
          )} */}
        </Grid>
      </Container>
    </>
  );
};
export default CartScreen;
