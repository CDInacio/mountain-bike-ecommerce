import { useDispatch, useSelector } from "react-redux";

import { Grid, Typography } from "@material-ui/core";

import styles from "./CartItem.module.css";

import { removeItemFromCart, addItemToCart } from "../../store/cart-slice";

const CartItemsList = (props) => {
  const cart = useSelector((state) => state.cart.items);
  console.log(cart)
  const dispatch = useDispatch();
  const { imageUrl, productName, quantity, price, id, totalPrice } = props;

  const removeItemFromcartHandler = () => {
    dispatch(removeItemFromCart(id));
  };

  const addItemToCartHandler = () => {
      dispatch(addItemToCart({
          id: id,
          imageUrl: imageUrl,
          productName: productName,
          price: price,
          quantity: quantity
      }));
  }

  return (
    <>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        item
        xs={1}
      >
        <div className={styles.image}>
          <img src={imageUrl} alt="cart item" />
        </div>
      </Grid>
      <Grid item xs={5}>
        <Typography sx={{ fontWeight: "bold", marginLeft: "25px" }}>
          {productName}
        </Typography>
      </Grid>
      <Grid sx={{ display: "flex" }} item xs={2}>
        <span onClick={removeItemFromcartHandler} className={styles.remove}>
          -
        </span>
        <Typography>{quantity}</Typography>
        <span onClick={addItemToCartHandler} className={styles.add}> +</span>
      </Grid>
      <Grid item xs={2}>
        <Typography>{price}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{totalPrice}</Typography>
      </Grid>
    </>
  );
};

export default CartItemsList;
