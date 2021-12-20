import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../../assets/css/singleProduct.css";

import { publicRequest } from "../../services/api";

import { addToCart } from "../../state/cartSlice";

import {
  Grid,
  Typography,
  CircularProgress,
  Button,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";

const ProductSreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const { data } = await publicRequest.get(`products/single/${id}`);
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  const addToCartHandler = () => {
    dispatch(addToCart(product));
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
              <img src={product.imageUrl} />
            </Grid>
            <Grid className="cart" item xs={5}>
              <Typography sx={{ marginBottom: "20px" }} variant="h5">
                {product.productName}
              </Typography>
              <Typography variant="h6">{"R$ " + product.price}</Typography>
              <Typography className="color">
                {"Cor: " + product.color}
              </Typography>
              <FormControl sx={{ minWidth: 80, marginTop: "20px" }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Qtd
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  autoWidth
                  label="Age"
                >
                  {[...Array(product.quantity).keys()].map((element, i) => (
                    <MenuItem key={i} value={element + 1}>
                      {element + 1}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {product.quantity > 0 ? (
                <Button
                  onClick={addToCartHandler}
                  sx={{ width: "100%", marginTop: "50px" }}
                  variant="contained"
                >
                  Comprar
                </Button>
              ) : (
                <Typography>Fora de estoque!</Typography>
              )}
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
