import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import { isLoggedIn } from "../../store/actions/authActions";
import { cleanCart } from "../../store/cart-slice";
import { setIsLogged, resetUserInfo } from "../../store/user-slice";
// import { logout } from "../../store/actions/authActions";
import { AppBar, Toolbar, Typography, TextField } from "@material-ui/core";

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
  const cart = useSelector((state) => state.cart.items);
  const history = useHistory();
  const classes = useStyles();
  let isAuth = isLoggedIn();
  const logout = () => {
    localStorage.removeItem("userToken");
    dispatch(setIsLogged());
    dispatch(resetUserInfo());
    dispatch(cleanCart());
    history.push("/");
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
          {isAuth ? (
            <>
              <Typography
                onClick={logout}
                sx={{ marginRight: "30px", cursor: "pointer" }}
              >
                Sair
              </Typography>
              <Link to="/carrinho">
                <ShoppingCart />
              </Link>
            </>
          ) : (
            <div className={classes.auth}>
              <Typography sx={{ marginRight: "30px" }}>
                <Link to="/cadastro">Cadastrar</Link>
              </Typography>
              <Typography sx={{ marginRight: "30px" }}>
                <Link to="/login">Entrar</Link>
              </Typography>
              <Link to="/carrinho">
                <ShoppingCart />
              </Link>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
