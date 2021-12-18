import { useDispatch, useSelector } from "react-redux";

import { Grid, Typography } from "@material-ui/core";

import "../assets/css/Cart.css";

const CartItem = (props) => {
  const { imageUrl, productName, quantity, price, totalPrice } = props;

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
        <span className="remove">-</span>
        <Typography>{quantity}</Typography>
        <span className="add"> +</span>
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
