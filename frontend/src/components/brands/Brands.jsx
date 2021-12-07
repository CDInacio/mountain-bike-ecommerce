import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";
import ItemsGrid from "../grid/ItensGrid";
import { fetchByBrand } from "../../store/actions/productsActions";
import { clearBrandProduct } from "../../store/product-slice";
import { resetNotification } from "../../store/ui-slice";

import styles from "../componentsCategory/components.module.css";

import { Container, Typography, CircularProgress, Alert, AlertTitle } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    "&:hover": {
      boxShadow:
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
    },
  },
  grid: {
    marginTop: "10%",
  },
  name: {
    opacity: "0.8",
  },
  price: {
    fontWeight: "bold",
  },
}));

const Brands = () => {
  let { brand } = useParams();
  console.log(brand)
  const brandProduct = useSelector((state) => state.products.brandProduct);
  const isLoading = useSelector((state) => state.ui.isFetching);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchByBrand(brand));
    dispatch(resetNotification())
    return () => {
      dispatch(clearBrandProduct());
    };
  }, [brand]);
  let error;
  const setFalse = () => {
      error = true
  }
  if(notification != null) {
    setFalse()
  }
  const resetNum = () =>{
      error = false
  }
  return (
    <>
      <TopNav />
      <BottomNav />
      <Container className={styles.container} maxWidth="xl">
        <div>
          <Typography>
            <Link to="/componentes">Marcas</Link> &gt;{" "}
            <Link to="/componente/quadro">{brand}</Link>
          </Typography>
        </div>
        {isLoading ? (
          <CircularProgress
            size={150}
            sx={{ position: "absolute", top: "30%", left: "40%" }}
          />
        ) : (
          <ItemsGrid items={brandProduct} />
        )}
        {notification ? (
          <Alert sx={{marginTop: "30px"}} severity={notification.variant}>
            <AlertTitle>Error</AlertTitle>
            {notification.message}
          </Alert>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default Brands;
