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
      backgroundColor: "#24292F",
      borderRadius: "3px",
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
            sx={{
              backgroundColor: selectCompoenentColor ? "#24292F" : "",
              color: selectCompoenentColor ? "#fff" : "",
            }}
            className={classes.item}
          >
            <Link to="/products/department/componentes">Componentes</Link>
          </Typography>
          <div className="dropdown-content">
            <Link to="/products/category/Suspensao">
              <p>Suspensão</p>
            </Link>
            <p>Shock</p>
            <Link to="/products/category/Quadro">
              <p>Quadro</p>
            </Link>
          </div>
        </div>
        <div
          onMouseEnter={() => setSelectEquipmentColor(true)}
          onMouseLeave={() => setSelectEquipmentColor(false)}
          className="dropdown"
        >
          <Typography
            sx={{
              backgroundColor: selectEquipmentColor ? "#24292F" : "",
              color: selectEquipmentColor ? "#fff" : "",
            }}
            className={classes.item}
          >
            <Link to="/products/department/equipamentos">Equipamentos</Link>
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
              backgroundColor: selectAccessoriesColor ? "#24292F" : "",
              color: selectAccessoriesColor ? "#fff" : "",
            }}
            className={classes.item}
          >
            <Link to="/products/department/acessorios">Acessórios</Link>
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
              backgroundColor: selectCasualColor ? "#24292F" : "",
              color: selectCasualColor ? "#fff" : "",
            }}
            className={classes.item}
          >
            <Link to="/products/department/casual">Casual</Link>
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
              backgroundColor: selectBikesColor ? "#24292F" : "",
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
              backgroundColor: selectBrandColor ? "#24292F" : "",
              color: selectBrandColor ? "#fff" : "",
            }}
            className={classes.item}
          >
            Marcas
          </Typography>
          <div className="dropdown-content">
            <Link to="/marca/fox"><p>Fox</p></Link>
            <Link to="/marca/troy-lee"><p>Troy Lee Designs</p></Link>
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
