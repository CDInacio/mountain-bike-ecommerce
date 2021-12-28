import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { publicRequest } from "../../services/api";

import "./bottomNav.css";

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
  const history = useHistory();
  const [tag, setTag] = useState("");
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLoggedIn);
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);

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
    
  const searchHandler = (e) => {
    e.preventDefault();
    history.push(`/search/${tag}`);
  };

  return (
    <AppBar className={classes.appBar} elevation={0} position="static">
      <Toolbar className={classes.toolBar} variant="dense">
        <Typography variant="h6">
          <div className="logo">
            <Link to="/">Hard Line</Link>
          </div>
        </Typography>
        <form className={classes.search} onSubmit={searchHandler}>
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            label="Procurar..."
            onChange={(e) => setTag(e.target.value)}
            variant="standard"
          />
        </form>
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
              <MoreVert
                color="#fafafa
"
              />
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
  );
};

export default TopNav;
