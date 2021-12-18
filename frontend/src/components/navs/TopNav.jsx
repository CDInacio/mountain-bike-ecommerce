import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Badge,
} from "@material-ui/core";

import { logoutRequest, logoutRequestSuccess } from "../../state/userSlice";
import { logout } from "../../state/actions/authActions";
import { ShoppingCart } from "@material-ui/icons";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    color: "black",
  },
  search: {
    width: "76%",
  },
  enter: {
    display: "flex",
  },
  authButton: {
    backgroundColor: "#21b6ae",
  },
  user: {
    marginRight: "30px",
  },
  auth: {
    display: "flex",
  },
  amount: {
    backgroundColor: "orange",
    minHeight: "20px",
    minWidth: "20px",
    textAlign: "center",
    color: "#fff",
    borderRadius: "20px",
    padding: "2px",
  },
  icons: {
    display: "flex",
  },
}));

const TopNav = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLoggedIn);
  const classes = useStyles();
  const qty = useSelector((state) => state.cart.totalQuantity);

  const logout = () => {
    dispatch(logoutRequest());
    localStorage.removeItem("persist:root");
    dispatch(logoutRequestSuccess());
  };

  return (
    <AppBar className={classes.appBar} elevation={0} position="static">
      <Toolbar className={classes.toolBar} variant="dense">
        <Typography variant="h6">MARCA</Typography>
        <TextField
          className={classes.search}
          id="standard-basic"
          label="Procurar..."
          variant="standard"
        />
        <div className={classes.auth}>
          {isLogged ? (
            <>
              <Typography sx={{ marginRight: "30px", cursor: "pointer" }}>
                <span onClick={logout}>Sair</span>
              </Typography>
              <Link to="/cart">
                <Badge badgeContent={qty} color="primary">
                  <ShoppingCart />
                </Badge>
              </Link>
            </>
          ) : (
            <div className={classes.auth}>
              <Typography sx={{ marginRight: "30px" }}>
                <Link to="/signup">Cadastrar</Link>
              </Typography>
              <Typography sx={{ marginRight: "30px" }}>
                <Link to="/login">Entrar</Link>
              </Typography>
              <Link to="/cart">
                <Badge badgeContent={qty} color="primary">
                  <ShoppingCart />
                </Badge>
              </Link>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
