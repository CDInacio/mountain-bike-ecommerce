import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";
import Banner from "../Banner";

import {publicRequest} from "../../services/api";

import "../../assets/css/Components.css";

import {
  Container,
  Grid,
  Typography,
  Card,
  CircularProgress,
} from "@material-ui/core";

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

const CetegoryScreen = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const path = useLocation();
  const name = path.pathname.split("/")[2];
  const classes = useStyles();

  useEffect(() => {
    const fetchProductsByDepartment = async () => {
      try {
        setIsLoading(true)
        const { data } = await publicRequest.get(`products?category=${name}`);
        setProducts(data);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductsByDepartment();
  }, [name]);

  return (
    <>
      <TopNav />
      <BottomNav />
      <Banner
        imageUrl="https://i.imgur.com/9YsXoYd.jpg"
        department="Componentes"
      />
      <Container className="container" maxWidth="xl">
        {isLoading ? (
          <CircularProgress
            size={150}
            sx={{ position: "absolute", top: "70%", left: "40%" }}
          />
        ) : (
          <Grid container spacing={{ md: 2 }}>
            {products.map((product, i) => (
              <Grid key={i} className="grid" item md={3}>
                <Card className={classes.card}>
                  <Link to={`/produto/${product._id}`}>
                    <div className="image">
                      <img src={product.imageUrl} />
                      <Typography className={classes.name}>
                        {product.productName.replaceAll("-", " ")}
                      </Typography>
                      <Typography className="price">
                        {`R$${product.price}`}
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
export default CetegoryScreen;
