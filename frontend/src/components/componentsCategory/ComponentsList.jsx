import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";

import { fetchByDepartment } from "../../store/actions/productsActions";
import { clearProductsByDep } from "../../store/product-slice";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";
import Banner from "../Banner";

import styles from "./components.module.css";

import { Container, Grid, Typography, Card, CircularProgress } from "@material-ui/core";

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

const ComponentsList = () => {
  const products = useSelector((state) => state.products.productsByDep);
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoading = useSelector((state) => state.ui.isFetching);
  const classes = useStyles();
  const pathName = location.pathname.replace("/", "");


  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchByDepartment(pathName));
    }
    return () => {
      isMounted = false;
      dispatch(clearProductsByDep());
    };
  }, []);

  return (
    <>
      <TopNav />
      <BottomNav />
      <Banner imageUrl="https://i.imgur.com/9YsXoYd.jpg" department="Componentes" />
      <Container className={styles.container} maxWidth="xl">
        {isLoading ? <CircularProgress size={150} sx={{position: "absolute", top: "70%", left: "40%"}} /> : <Grid container spacing={{ md: 2 }}>
          {products.map((product, i) => (
            <Grid key={i} className={styles.grid} item md={3}>
              <Card className={classes.card}>
                <Link to={`/produto/${product.productName}`}>
                  <div className={styles.image}>
                    <img src={product.imageUrl} />
                    <Typography className={classes.name}>
                      {product.productName.replaceAll("-", " ")}
                    </Typography>
                    <Typography className={styles.price}>
                      {`R$${product.price}`}
                    </Typography>
                  </div>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>}
        
      </Container>
    </>
  );
};
export default ComponentsList;
