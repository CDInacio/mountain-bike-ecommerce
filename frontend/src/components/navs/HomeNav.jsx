import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";

import "./bottomNav.css";

import { clearCart } from "../../state/cartSlice";
import { logoutRequest, logoutRequestSuccess } from "../../state/userSlice";

import { Link } from "react-router-dom";

import { ShoppingCart, MoreVert } from "@material-ui/icons";

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
      backgroundColor: "#24292F",
      borderRadius: "3px",
      color: "#fff",
    },
  },
  enter: {
    "&hover": {
      backgroundColor: "#24292F",
      color: "#fff",
    },
  },
  appBar: {
    transition: "500ms ease",
  },
  icons: {
    display: "flex",
  },
}));

const HomeNav = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  const [nav, setNav] = useState(true);
  // const isAuth = isLoggedIn();

  const changeAppBarCollorOnScrollHandler = () => {
    if (window.pageYOffset < 190) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeAppBarCollorOnScrollHandler);
    return () =>
      window.removeEventListener("scrool", changeAppBarCollorOnScrollHandler);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const clickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeHandler = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch(clearCart());
    dispatch(logoutRequest());
    dispatch(logoutRequestSuccess());
    localStorage.removeItem("persist:root");
  };

  const classes = useStyles();
  return (
    <>
      <AppBar
        style={{
          backgroundColor: nav ? "transparent" : "white",
          boxShadow: "none",
        }}
        className={classes.appBar}
        elevation={0}
      >
        <Toolbar
          sx={{ color: nav ? "white" : "black" }}
          className={classes.toolBar}
          variant="dense"
        >
          <div className={classes.items}>
            <Typography sx={{ marginRight: "30px" }} variant="h6">
              <div className="logo">
                <Link to="/">Hard Line</Link>
              </div>
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
              <Link to="/products/department/casual">Casual</Link>
            </Typography>
            <Typography
              className={classes.item}
              sx={{ marginRight: "10px", padding: "10px" }}
            >
              <Link to="/products/department/bicicletas">Bicicletas</Link>
            </Typography>
            <Typography
              className={classes.item}
              sx={{ marginRight: "10px", padding: "10px" }}
            >
              <Link to="/products/brands">Marcas</Link>
            </Typography>
          </div>
          <div className={classes.auth}>
            <Link to="/cart">
              <Badge badgeContent={cart.products?.length} color="primary">
                <ShoppingCart />
              </Badge>
            </Link>
            <div>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls="long-menu"
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={clickHandler}
              >
                <MoreVert />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={closeHandler}
                PaperProps={{
                  style: {
                    width: "20ch",
                  },
                }}
              >
                <MenuItem onClick={closeHandler}>
                  {isLogged ? (
                    <span onClick={logout}>Sair</span>
                  ) : (
                    <Link to="/login">Entrar</Link>
                  )}
                </MenuItem>
                <MenuItem onClick={closeHandler}>
                  <Link to="/signup">Criar conta</Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HomeNav;
