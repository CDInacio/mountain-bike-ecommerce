import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";
import Banner from "../Banner";

import { publicRequest } from "../../services/api";

import "../../assets/css/Components.css";

import {
  Container,
  Grid,
  Typography,
  Card,
  CircularProgress,
  LinearProgress,
  Alert,
  AlertTitle
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

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const path = useLocation();
  const type = path.pathname.split("/")[2];
  const name = path.pathname.split("/")[3];
  const classes = useStyles();

  useEffect(() => {
    const fetchProductsByDepartment = async () => {
      try {
        setIsLoading(true);
        const { data } = await publicRequest.get(`products?${type}=${name}`);
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductsByDepartment();
  }, [name]);

  let bannerImg = null;
  let bannerName;
  if (name === "componentes") {
    bannerImg = "https://i.imgur.com/9YsXoYd.jpg";
    bannerName = "Componentes";
  } else if (name === "equipamentos") {
    bannerImg = "https://i.imgur.com/BCGRSS9.jpg";
    bannerName = "Equipamentos";
  } else if (name === "casual") {
    bannerImg = "https://i.imgur.com/zEoGFrG.jpg";
    bannerName = "Casual";
  } else if (name === "acessorios") {
    bannerImg = "https://i.imgur.com/sreQWT9.jpg";
    bannerName = "Acessórios";
  }

  let showBanner = true;

  if (type === "category") {
    showBanner = false;
  } else {
    showBanner = true;
  }

  return (
    <>
      <TopNav />
      <BottomNav />
      {bannerImg ? <Banner imageUrl={bannerImg} department={bannerName} /> : <LinearProgress />}
      {!showBanner && (
        <Typography>
          {type} &gt; {name}
        </Typography>
      )}
      <Container className="container" maxWidth="xl">
        {isLoading ? (
          <CircularProgress
            size={150}
            sx={{ position: "absolute", top: "70%", left: "40%" }}
          />
        ) : (
          <>
            {products.length > 0 ? (
              <Grid container spacing={{ md: 2 }}>
                {products.map((product, i) => (
                  <Grid key={i} className="grid" item md={3}>
                    <Card className={classes.card}>
                      <Link to={`/product/${product._id}`}>
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
            ) : (
              <Alert severity="error">
                <AlertTitle>Erro 404</AlertTitle>
                Nenhum produto encontrado :(
              </Alert>
            )}
          </>
        )}
      </Container>
    </>
  );
};
export default ProductsScreen;
