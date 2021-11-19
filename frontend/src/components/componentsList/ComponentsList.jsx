import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";

import { fetchByDepartment } from "../../store/actions/productsActions";
import { clearProductsByDep } from "../../store/product-slice";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";

import styles from "./components.module.css";

import { Container, Grid, Typography, Card } from "@material-ui/core";

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
  const [colorFilter, setColorFilter] = useState("");
  const products = useSelector((state) => state.products.productsByDep);
  const dispatch = useDispatch();
  const location = useLocation();
  const classes = useStyles();
  const pathName = location.pathname.replace("/", "");

  const getColorFilter = (products) => {
    let colors = [];
    for(let key in products) {
      if (!colors.includes(products[key].color)) {
        colors.push(products[key].color)
      }
    }
    return colors;
  }

  const colors = getColorFilter(products);
  
  const getCategoryFilter = (products) => {
    let category = [];
    for(let key in products) {
      if (!category.includes(products[key].category)) {
        category.push(products[key].category)
      }
    }
    return category;
  }

  const categories = getCategoryFilter(products);


  useEffect(() => {
    dispatch(fetchByDepartment(pathName));
    return () => {
      dispatch(clearProductsByDep());
    };
  }, []);

  return (
    <>
      <TopNav />
      <BottomNav />
      <div className={styles.bannerImage}>
        <img src="https://i.imgur.com/9YsXoYd.jpg" />
        <h2>Componentes</h2>
      </div>
      <Container className={styles.container} maxWidth="xl">
        <div className={styles.filterWrapper}>
          <div className={styles.color}>
            <label className={styles.colorLabel} htmlFor="colors">
              Cor
            </label>
            <select
              onChange={(e) => setColorFilter(e.target.value)}
              className={styles.colorSelect}
              name="colors"
              id="cars"
            >
              {colors.map((color, i) => (
                <option key={i} value={color}>{color}</option>
              ))}
            </select>
          </div>
          <div className={styles.size}>
            <label className={styles.sizeLabel} htmlFor="category">
              Categoria
            </label>
            <select name="category" id="cacategoryrs">
              {categories.map((category, i) => (
                <option key={i} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className={styles.brand}>
            <label className={styles.sizeLabel} htmlFor="brand">
              Marca
            </label>
            <select name="brand" id="cars">
              {products.map((brand, i) => (
                <option key={i} value={brand.brand}>{brand.brand}</option>
              ))}
            </select>
          </div>
        </div>
        <Grid container spacing={{ md: 2 }}>
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
        </Grid>
      </Container>
    </>
  );
};
export default ComponentsList;
