import { useDispatch } from "react-redux";

import { Grid, Typography } from "@material-ui/core";

import { addToCart } from "../state/cartSlice";
import { removeFromCart } from "../state/cartSlice";

import "../assets/css/Cart.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, imageUrl, productName, quantity, price, totalPrice } = props;

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: id,
        productName: productName,
        price: price,
        quantity: quantity,
        totalPrice: totalPrice,
        imageUrl: imageUrl,
      })
    );
  };

  const removeFromCartHandler = () => {
    dispatch(removeFromCart({ id: id }));
  };

  return (
    <>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        item
        xs={2}
      >
        <div className="cartImage">
          <img src={imageUrl} alt="cart item" />
        </div>
      </Grid>
      <Grid item xs={4}>
        <Typography sx={{ fontWeight: "bold", marginLeft: "25px" }}>
          {productName}
        </Typography>
      </Grid>
      <Grid sx={{ display: "flex" }} item xs={2}>
        <span onClick={removeFromCartHandler} className="remove">-</span>
        <Typography>{quantity}</Typography>
        <span onClick={addToCartHandler} className="add">
          {" "}
          +
        </span>
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

export default CartItem;
