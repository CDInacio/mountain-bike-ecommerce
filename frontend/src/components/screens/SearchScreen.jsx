import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";
import Footer from "../Footer";

import { publicRequest } from "../../services/api";

import "../../assets/css/Components.css";

import {
  Container,
  Grid,
  Typography,
  Card,
  CircularProgress,
  Alert,
  AlertTitle,
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

const SearchScreen = () => {
  const { query } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();
  
  const search = async (query) => {
    setIsLoading(true);
    try {
      const { data } = await publicRequest.get(`/products/search/${query}`);
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    search(query);
  }, [query]);

  return (
    <div className="page-container">
      <TopNav />
      <BottomNav />
      <Container className="container" maxWidth="xl">
        {isLoading ? (
          <CircularProgress
            size={150}
            sx={{ position: "absolute", top: "70%", left: "40%" }}
          />
        ) : (
          <>
            {query && <Typography>Você pesquisou por: {query}</Typography>}
            {products.length > 0 ? (
              <Grid container spacing={{ md: 2 }}>
                {products.map((product, i) => (
                  <Grid key={i} className="grid" item md={2}>
                    <Card className={classes.card}>
                      <Link to={`/product/${product._id}`}>
                        <div className="image">
                          <img src={product.imageUrl} alt="product" />
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
            ) : (
              <Alert sx={{ marginTop: "15px" }} severity="error">
                <AlertTitle>Erro 404</AlertTitle>
                Nenhum produto encontrado :(
              </Alert>
            )}
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
};
export default SearchScreen;
