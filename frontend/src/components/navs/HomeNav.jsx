import { useState, useEffect } from "react";
import { useHistory } from "react-router";

import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

// import { isLoggedIn } from "../../store/actions/authActions";

import { Link } from "react-router-dom";

import { ShoppingCart  } from "@material-ui/icons";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-between",
  },

  auth: {
    display: "flex",
  },
  register: {
    marginTop: "10px",
  },
  items: {
    display: "flex",
    alignItems: "center",
  },
  item: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#bc6c25",
      color: "#fff",
    },
  },
  enter: {
    "&hover": {
      backgroundColor: "#bc6c25",
      color: "#fff",
    },
  },
  appBar: {
    transition: "500ms ease"
  },
  icons: {
    display: "flex"
  }
}));

const HomeNav = () => {
  const history = useHistory();
  const [nav, setNav] = useState(true);
  // const isAuth = isLoggedIn();

  const changeAppBarCollorOnScrollHandler = () => {
    if (window.pageYOffset < 300) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeAppBarCollorOnScrollHandler);
    return () => window.removeEventListener("scrool", changeAppBarCollorOnScrollHandler);
  }, [])

  const logout = () => {
    localStorage.removeItem("userToken");
    history.push("/login");
  };

  const classes = useStyles();
  return (
    <>
      <AppBar
        style={{ backgroundColor: nav ? "transparent"  : "white" , boxShadow: "none" }}
        className={classes.appBar}
        elevation={0}
      >
        <Toolbar sx={{color: nav ? "white" : "black"}} className={classes.toolBar} variant="dense">
          <div className={classes.items}>
            <Typography sx={{ marginRight: "50px" }} variant="h5">
              Marca
            </Typography>
            <Typography
              className={classes.item}
              sx={{ marginRight: "10px", padding: "10px" }}
            >
              <Link to="/products/department/componentes">Componentes</Link>
            </Typography>
            <Typography
              className={classes.item}
              sx={{ marginRight: "10px", padding: "10px" }}
            >
              Equipamentos
            </Typography>
            <Typography
              className={classes.item}
              sx={{ marginRight: "10px", padding: "10px" }}
            >
              <Link to="/acessorios">Acessórios</Link>
            </Typography>
            <Typography
              className={classes.item}
              sx={{ marginRight: "10px", padding: "10px" }}
            >
              Casual
            </Typography>
            <Typography
              className={classes.item}
              sx={{ marginRight: "10px", padding: "10px" }}
            >
              Bicicletas
            </Typography>
            <Typography
              className={classes.item}
              sx={{ marginRight: "10px", padding: "10px" }}
            >
              Marcas
            </Typography>
          </div>
          {/* <div className={classes.auth}>
            {isAuth ? (
              <div className={classes.icons}>
                <Typography
                onClick={logout}
                sx={{ marginRight: "30px", cursor: "pointer" }}
              >
                Sair
                </Typography>
                <ShoppingCart />
              </div>
            ) : (
              <div className={classes.auth}>
                <Typography
                  className={classes.enter}
                  sx={{
                    marginRight: "30px",
                    border: nav ? "1px solid white" : "1px solid black",
                    padding: "5px 20px",
                  }}
                >
                  <Link to="/cadastro">Cadastrar</Link>
                </Typography>
                <Typography
                  sx={{
                    marginRight: "30px",
                    border: nav ? "1px solid white" : "1px solid black",
                    padding: "5px 20px",
                  }}
                >
                  <Link to="/login">Entrar</Link>
                </Typography>
                <ShoppingCart />
              </div>
            )}
          </div> */}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HomeNav;
