import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "../../assets/css/singleProduct.css";

import { publicRequest } from "../../services/api";

import { addToCart } from "../../state/cartSlice";

import { Grid, Typography, CircularProgress, Button } from "@material-ui/core";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";
import Footer from "../Footer";

const ProductSreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const { data } = await publicRequest.get(`/products/single/${id}`);
        setProduct({
          id: data._id,
          ...data,
        });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  const addToCartHandler = () => {
    dispatch(addToCart(product));
    history.push("/cart");
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
        <>
          <Grid
            sx={{
              height: "500px",
              margin: "50px auto 0 auto",
            }}
            container
            maxWidth="lg"
          >
            <Grid
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              className="singleImage"
              item
              xs={7}
            >
              <div id="imageContainer" className="imageContainer">
                <img src={product.imageUrl} />
              </div>
            </Grid>
            <Grid className="cart" item xs={5}>
              <Typography sx={{ marginBottom: "20px" }} variant="h5">
                {product.productName}
              </Typography>
              {product.quantity > 0 ? (
                <span className="inStock">Em estoque</span>
              ) : (
                <span className="outOfStock">Fora de estoque</span>
              )}
              <Typography sx={{ marginTop: "15px" }} variant="h6">
                <strong>Preço: </strong>R$ {product.price}
              </Typography>
              {product.brand && (
                <Typography>
                  <strong>Marca: </strong>
                  {product.brand}
                </Typography>
              )}
              {product.color && (
                <Typography>
                  <strong>Cor: </strong>
                  {product.color}
                </Typography>
              )}
              {product.usage && (
                <Typography>
                  <strong>Uso recomendado: </strong>
                  {product.usage}
                </Typography>
              )}
              <Button
                disabled={product.quantity > 0 ? false : true}
                onClick={addToCartHandler}
                sx={{ width: "100%", marginTop: "50px" }}
                variant="contained"
              >
                Comprar
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ margin: "50px 0 30px 0" }}>
                Descrição
              </Typography>
              <Typography>{product.discription}</Typography>
              <Typography sx={{ margin: "50px 0 10px 0" }}>
                Especificações
              </Typography>
              {product.specification?.map((spec, i) => (
                <Typography key={i}>{spec}</Typography>
              ))}
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default ProductSreen;
