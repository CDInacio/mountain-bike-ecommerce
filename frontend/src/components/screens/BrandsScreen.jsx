import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";
import Footer from "../Footer";

import "../../assets/css/Brand.css";

import { Card, Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
const BrandsScreen = () => {
  return (
    <>
      <TopNav />
      <BottomNav />
      <Container>
          <Typography>Nossas principais marcas</Typography>
        <Grid container>
          <Grid item xs={12}>
            <Link to="/products/brand/Fox">
              <Card
                className="brandImage"
                sx={{ marginTop: "50px", position: "relative" }}
              >
                <Typography
                  className="brand"
                  variant="h1"
                  sx={{
                    fontStyle: "italic",
                    position: "absolute",
                    color: "white",
                    top: "30%",
                    left: "5%",
                    zIndex: "2",
                  }}
                >
                  Fox
                </Typography>
                <img src="https://i.imgur.com/3dtRk2S.jpg" />
              </Card>
            </Link>
            <Link to="/products/brand/Rock Shox">
              <Card
                className="brandImage"
                sx={{ marginTop: "50px", position: "relative" }}
              >
                <Typography
                  className="brand"
                  variant="h1"
                  sx={{
                    fontStyle: "italic",
                    position: "absolute",
                    color: "white",
                    top: "30%",
                    left: "5%",
                    zIndex: "2",
                  }}
                >
                  Rock Shox
                </Typography>
                <img src="https://i.imgur.com/PSweuNK.jpg" />
              </Card>
            </Link>
            <Link to="/products/brand/Shimano">
              <Card
                className="brandImage"
                sx={{ marginTop: "50px", position: "relative" }}
              >
                <Typography
                  className="brand"
                  variant="h1"
                  sx={{
                    fontStyle: "italic",
                    position: "absolute",
                    color: "white",
                    top: "30%",
                    left: "5%",
                    zIndex: "2",
                  }}
                >
                  Shimano
                </Typography>
                <img src="https://i.imgur.com/ovBILo1.jpg" />
              </Card>
            </Link>
            <Link to="/products/brand/Santa Cruz">
              <Card
                className="brandImage"
                sx={{ marginTop: "50px", position: "relative" }}
              >
                <Typography
                  className="brand"
                  variant="h1"
                  sx={{
                    fontStyle: "italic",
                    position: "absolute",
                    color: "white",
                    top: "30%",
                    left: "5%",
                    zIndex: "2",
                  }}
                >
                  Santa Cruz
                </Typography>
                <img src="https://i.imgur.com/7DCQOuv.jpg" />
              </Card>
            </Link>
            <Link to="/products/brand/Race Face">
              <Card
                className="brandImage"
                sx={{ marginTop: "50px", position: "relative" }}
              >
                <Typography
                  className="brand"
                  variant="h1"
                  sx={{
                    fontStyle: "italic",
                    position: "absolute",
                    color: "white",
                    top: "30%",
                    left: "5%",
                    zIndex: "2",
                  }}
                >
                  Race Face
                </Typography>
                <img src="https://i.imgur.com/0GK7E6Y.jpg" />
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default BrandsScreen;
