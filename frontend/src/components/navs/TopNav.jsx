import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Badge,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";

import { clearCart } from "../../state/cartSlice";

import { logoutRequest, logoutRequestSuccess } from "../../state/userSlice";
import { ShoppingCart, MoreVert } from "@material-ui/icons";

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
    dispatch(clearCart());
    dispatch(logoutRequest());
    dispatch(logoutRequestSuccess());
    localStorage.removeItem("persist:root");
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const clickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeHandler = () => {
    setAnchorEl(null);
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
          <Link to="/cart">
            <Badge badgeContent={qty} color="primary">
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
                {isLogged ? <span onClick={logout}>Sair</span> : <Link to="/login">Entrar</Link>}
              </MenuItem>
              <MenuItem onClick={closeHandler}>
                <Link to="/signup">Criar conta</Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
