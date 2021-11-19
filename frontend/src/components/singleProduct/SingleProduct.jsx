import { useEffect } from "react";
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchSingleProduct } from "../../store/actions/productsActions";
import {  clearSingleProductSpec } from "../../store/product-slice";

import styles from "./singleProduct.module.css";
// import { makeStyles } from "@material-ui/styles";

import { Grid, Typography, Alert, AlertTitle } from "@material-ui/core";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";

// const useStyles = makeStyles((theme) => ({}));

const SingleProduct = () => {
  // const classes = useStyles();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.singleProduct);
  const productSpecs = useSelector((state) => state.products.singleProductSpec);
  const message = useSelector((state) => state.ui.notification);
  let { nomeProduto } = useParams();
    console.log(productSpecs)
    
  useEffect(() => {
    dispatch(fetchSingleProduct(nomeProduto));
    return(() => {
        // dispatch(clearSingleProduct());
        dispatch(clearSingleProductSpec());
    })
  }, []);

  return (
    <>
      <TopNav />
      <BottomNav />
      {message ? (
        <Alert severity={message.variant}>
          <AlertTitle>Error</AlertTitle>
          {message.message}
        </Alert>
      ) : (
        <Grid
          sx={{
            height: "500px",
            margin: "30px auto 0 auto",
          }}
          container
          maxWidth="lg"
        >
          <Grid
            sx={{ height: "100%", display: "flex", justifyContent: "center" }}
            className={styles.image}
            item
            xs={6}
          >
            <img src={product.imageUrl} />
          </Grid>
          <Grid className={styles.cart} item xs={6}>
            <Typography>{product.productName}</Typography>
          </Grid>
          <Grid className={styles.cart} item xs={6}>
            <Typography sx={{ margin: "50px 0 30px 0" }}>Descrição</Typography>
            <Typography>{product.discription}</Typography>
            <Typography sx={{ margin: "50px 0 10px 0" }}>
              Especificações
            </Typography>
            {productSpecs.map((spec, i) => (
                <Typography>
                {spec}
              </Typography>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default SingleProduct;
