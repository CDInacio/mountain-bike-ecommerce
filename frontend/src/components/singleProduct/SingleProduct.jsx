import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchSingleProduct } from "../../store/actions/productsActions";
import { clearSingleProductSpec } from "../../store/product-slice";

import { addItemToCart } from "../../store/cart-slice";

import styles from "./singleProduct.module.css";
// import { makeStyles } from "@material-ui/styles";

import { Grid, Typography, CircularProgress, Button } from "@material-ui/core";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";

// const useStyles = makeStyles((theme) => ({}));

const SingleProduct = () => {
  // const classes = useStyles();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.singleProduct);
  const isLoading = useSelector((state) => state.ui.isFetching);
  const productSpecs = useSelector((state) => state.products.singleProductSpec);
  // const message = useSelector((state) => state.ui.notification);
  let { nomeProduto } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(nomeProduto));
    return () => {
      // dispatch(clearSingleProduct());
      dispatch(clearSingleProductSpec());
    };
  }, []);

  const addItemToCartHandler = () => {
    dispatch(
      addItemToCart({
        id: product.id,
        productName: product.productName,
        price: product.price,
        imageUrl: product.imageUrl,
      })
    );
  };

  return (
    <>
      <TopNav />
      <BottomNav />
      {isLoading ? (
        <CircularProgress
          size={150}
          sx={{ position: "absolute", top: "30%", left: "40%" }}
        />
      ) : (
        <Grid
          sx={{
            height: "500px",
            margin: "50px auto 0 auto",
          }}
          container
          maxWidth="lg"
        >
          <Grid
            sx={{ height: "100%", display: "flex", justifyContent: "center" }}
            className={styles.image}
            item
            xs={7}
          >
            <img src={product.imageUrl} />
          </Grid>
          <Grid className={styles.cart} item xs={5}>
            <Typography sx={{ marginBottom: "20px" }} variant="h5">
              {product.productName}
            </Typography>
            <Typography variant="h6">{"R$ " + product.price}</Typography>
            <Typography className={styles.color}>
              {"Cor: " + product.color}
            </Typography>
            <Button
              onClick={addItemToCartHandler}
              sx={{ width: "100%", marginTop: "50px" }}
              variant="contained"
            >
              Comprar
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ margin: "50px 0 30px 0" }}>Descrição</Typography>
            <Typography>{product.discription}</Typography>
            <Typography sx={{ margin: "50px 0 10px 0" }}>
              Especificações
            </Typography>
            {productSpecs.map((spec, i) => (
              <Typography key={i}>{spec}</Typography>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default SingleProduct;
