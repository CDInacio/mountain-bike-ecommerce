import { Grid, Container, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

import Hero from "../hero/Hero";
import HomeNav from "../navs/HomeNav";

import "./Home.css";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "white",
    color: "red",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <HomeNav />
      <Hero />
      <Container maxWidth="xl">
        <Grid sx={{ marginTop: "30px" }} container spacing={1}>
          <Grid className="components" item xs={7}>
            <img src="https://i.imgur.com/wsWPYMj.jpg" />
            <div className="components-txt components-txt-pos ">
              <span>Componentes</span>
              <Button
                style={{
                  backgroundColor: "#bc6c25",
                }}
                variant="contained"
              >
                Ver mais
              </Button>
            </div>
          </Grid>
          <Grid className="equipments" item xs={5}>
            <img src="https://i.imgur.com/jLM1wa9.jpg" />
            <div className="equipments-txt equipments-txt-pos">
              <span>Equipamentos</span>
              <Button style={{
                  backgroundColor: "#bc6c25",
                }} variant="contained">Ver mais</Button>
            </div>
          </Grid>
          <Grid className="accessories" item xs={4}>
            <img src="https://i.imgur.com/o1zToIr.jpg" />
            <div className="accessories-txt accessories-txt-pos">
              <span>Acessórios</span>
              <Button style={{
                  backgroundColor: "#bc6c25",
                }} variant="contained">Ver mais</Button>
            </div>
          </Grid>
          <Grid className="bikes" item xs={4}>
            <img src="https://i.imgur.com/saGnSU1.jpg" />
            <div className="bikes-txt bikes-txt-pos">
              <span>Bicicletas</span>
              <Button style={{
                  backgroundColor: "#bc6c25",
                }} variant="contained">Ver mais</Button>
            </div>
          </Grid>
          <Grid className="casual" item xs={4}>
            <img src="https://i.imgur.com/e1lbuEI.jpg" />
            <div className="casual-txt casual-txt-pos">
              <span>Roupa Casual</span>
              <Button style={{
                  backgroundColor: "#bc6c25",
                }} variant="contained">Ver mais</Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
