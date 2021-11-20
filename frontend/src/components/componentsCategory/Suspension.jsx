import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";

import styles from "./components.module.css";

import {
  Container,
  Grid,
  Typography,
  Card,
  CircularProgress,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

import { fetchSuspension } from "../../store/actions/productsActions";
import { clearSuspensions } from "../../store/product-slice";

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

const Suspension = () => {
  const classes = useStyles();
  const isLoading = useSelector((state) => state.ui.isFetching);
  const suspensions = useSelector((state) => state.products.suspensions);
  console.log(suspensions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSuspension());
    return () => {
      dispatch(clearSuspensions());
    };
  }, []);

  return (
    <>
      <TopNav />
      <BottomNav />
      <Container className={styles.container} maxWidth="xl">
        <div>
          <Typography>
            <Link to="/componentes">Componentes</Link> &gt;{" "}
            <Link to="/componente/suspensao">Suspensão</Link>
          </Typography>
        </div>
        {isLoading ? (
          <CircularProgress
            size={150}
            sx={{ position: "absolute", top: "30%", left: "40%" }}
          />
        ) : (
          <Grid container spacing={{ md: 2 }}>
            {suspensions.map((susp, i) => (
              <Grid key={i} className={styles.grid} item md={3}>
                <Card className={classes.card}>
                  <Link to={`/produto/${susp.productName}`}>
                    <div className={styles.image}>
                      <img src={susp.imageUrl} />
                      <Typography className={classes.name}>
                        {susp.productName.replaceAll("-", " ")}
                      </Typography>
                      <Typography className={styles.price}>
                        {`R$${susp.price}`}
                      </Typography>
                    </div>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Suspension;