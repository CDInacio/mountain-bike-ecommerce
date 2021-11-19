import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import "./bottomNav.css";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    padding: "10px 0",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    color: "black",
  },
  item: {
    cursor: "pointer",
    padding: "10px 50px",
    transition: "200ms",
    "&:hover": {
      backgroundColor: "#bc6c25",
      color: "#fff",
    },
  },
}));

const BottomNav = () => {
  const [selectCompoenentColor, setSelectComponentColor] = useState(false);
  const [selectEquipmentColor, setSelectEquipmentColor] = useState(false);
  const [selectBikesColor, setSelectBikesColor] = useState(false);
  const [selectAccessoriesColor, setSelectAccessoriesColor] = useState(false);
  const [selectBrandColor, setSelectBrandColor] = useState(false);
  const [selectCasualColor, setSelectCasualColor] = useState(false);
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} elevation={0} position="static">
      <Toolbar className={classes.toolBar} variant="dense">
        <div
          onMouseEnter={() => setSelectComponentColor(true)}
          onMouseLeave={() => setSelectComponentColor(false)}
          className="dropdown"
        >
          <Typography
            sx={{ backgroundColor: selectCompoenentColor ? "#bc6c25" : "" }}
            className={classes.item}
          >
            <Link to="/componentes">Componentes</Link>
          </Typography>
          <div className="dropdown-content">
            <p>Suspensão</p>
            <p>Shock</p>
            <p>Quadro</p>
          </div>
        </div>
        <div
          onMouseEnter={() => setSelectEquipmentColor(true)}
          onMouseLeave={() => setSelectEquipmentColor(false)}
          className="dropdown"
        >
          <Typography
            sx={{
              backgroundColor: selectEquipmentColor ? "#bc6c25" : "",
              color: selectEquipmentColor ? "#fff" : "",
            }}
            className={classes.item}
          >
            Equipamentos
          </Typography>
          <div className="dropdown-content">
            <p>Relação</p>
            <p>Freio</p>
            <p>Guidão</p>
            <p>Roda</p>
          </div>
        </div>
        <div
          onMouseEnter={() => setSelectAccessoriesColor(true)}
          onMouseLeave={() => setSelectAccessoriesColor(false)}
          className="dropdown"
        >
          <Typography
            sx={{
              backgroundColor: selectAccessoriesColor ? "#bc6c25" : "",
              color: selectAccessoriesColor ? "#fff" : "",
            }}
            className={classes.item}
          >
            Acessórios
          </Typography>
          <div className="dropdown-content">
            <p>Hello World!</p>
          </div>
        </div>
        <div
          className="dropdown"
          onMouseEnter={() => setSelectCasualColor(true)}
          onMouseLeave={() => setSelectCasualColor(false)}
        >
          <Typography
            sx={{
              backgroundColor: selectCasualColor ? "#bc6c25" : "",
              color: selectCasualColor ? "#fff" : "",
            }}
            className={classes.item}
          >
            Casual
          </Typography>
          <div className="dropdown-content">
            <p>Camisa</p>
            <p>Calça</p>
          </div>
        </div>
        <div
          onMouseEnter={() => setSelectBikesColor(true)}
          onMouseLeave={() => setSelectBikesColor(false)}
          className="dropdown"
        >
          <Typography
            sx={{
              backgroundColor: selectBikesColor ? "#bc6c25" : "",
              color: selectBikesColor ? "#fff" : "",
            }}
            className={classes.item}
          >
            Bicicletas
          </Typography>
          <div className="dropdown-content">
            <p>Downhill</p>
            <p>Enduro</p>
            <p>XCO</p>
          </div>
        </div>
        <div
          onMouseEnter={() => setSelectBrandColor(true)}
          onMouseLeave={() => setSelectBrandColor(false)}
          className="dropdown"
        >
          <Typography
            sx={{
              backgroundColor: selectBrandColor ? "#bc6c25" : "",
              color: selectBrandColor ? "#fff" : "",
            }}
            className={classes.item}
          >
            Marcas
          </Typography>
          <div className="dropdown-content">
            <p>Fox</p>
            <p>Troy Lee Designs</p>
            <p>Rock Shox</p>
            <p>Race Face</p>
            <p>Sram</p>
            <p>Shimano</p>
            <p>Cannyon</p>
            <p>Santa Cruz</p>
            <p>Specialized</p>
            <p>Marzzochi</p>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default BottomNav;
