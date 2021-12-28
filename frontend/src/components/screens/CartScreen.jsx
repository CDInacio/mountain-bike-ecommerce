import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import StripeCheckout from "react-stripe-checkout";
import { privateRequest } from "../../services/api";
import { clearCart } from "../../state/cartSlice";

import CartItem from "../CartItem";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";
import Footer from "../Footer";

import "../../assets/css/Cart.css";

import {
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  CircularProgress,
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

const stripePublishableKey =
  "pk_test_51K98XDHt0s8JSRoP1LABaCFLD1luz9nvapxS22BZHEB2BxMRXdYNgH9DmjczxXRDMfGvEcYI7M2SS8BT7zKUhcUN00jOHbspc4";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [stripeToken, setStripeToken] = useState(null);
  const classes = useStyles();

  let total = 0;
  cart.products.forEach((item) => {
    total += item.totalPrice;
  });

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const payRequest = async () => {
      try {
        const { data } = await privateRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: total * 100,
        });
        if (data) {
          dispatch(clearCart());
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (stripeToken && total >= 1) {
      payRequest();
    }
  }, [stripeToken]);

  return (
    <>
      <TopNav />
      <BottomNav />
      <Container maxWidth="md" className={classes.wrapper}>
        {cart.isLoading ? (
          <CircularProgress
            size={150}
            sx={{ position: "absolute", top: "30%", left: "40%" }}
          />
        ) : (
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
              <Typography sx={{ marginLeft: "25px" }}>
                Nome do produto
              </Typography>
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
            {cart.products?.map((item, i) => (
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
            <Grid
              item
              xs={6}
              sx={{
                marginTop: "30px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Paper variant="outlined" className={classes.continueCart}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "lighter",
                    marginBottom: "30px",
                  }}
                  variant="h4"
                >
                  Resumo pedido
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Total: R$ {total}
                </Typography>
                <StripeCheckout
                  locale="pt-BR"
                  name="Hard Line"
                  billingAddress
                  shippingAddress
                  description="Total da compra: 20 pila"
                  amount={total * 100}
                  token={onToken}
                  stripeKey={stripePublishableKey}
                >
                  <Button
                    sx={{ marginTop: "30px" }}
                    fullWidth={true}
                    variant="contained"
                    disabled={user.isLoggedIn ? false : true}
                  >
                    Realizar pagamento
                  </Button>
                </StripeCheckout>
              </Paper>
              {!user.isLoggedIn && (
                <Typography
                  sx={{ textAlign: "center", marginTop: "15px", color: "red" }}
                >
                  Você precisa estar logado para prosseguir com a compra.
                </Typography>
              )}
            </Grid>
          </Grid>
        )}
      </Container>
      <Footer />
    </>
  );
};
export default CartScreen;
