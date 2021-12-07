import { Link } from "react-router-dom";

import styles from "../componentsCategory/components.module.css";

import { Typography, Grid, Card } from "@material-ui/core";

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

const ItemsGrid = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={{ md: 2 }}>
      {props.items.map((item, i) => (
        <Grid key={i} className={styles.grid} item md={3}>
          <Card className={classes.card}>
            <Link to={`/produto/${item.productName}`}>
              <div className={styles.image}>
                <img src={item.imageUrl} />
                <Typography className={classes.name}>
                  {item.productName.replaceAll("-", " ")}
                </Typography>
                <Typography className={styles.price}>
                  {`R$${item.price}`}
                </Typography>
              </div>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemsGrid;
