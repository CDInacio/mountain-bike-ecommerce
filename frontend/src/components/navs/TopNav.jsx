import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
} from "@material-ui/core";

import { ShoppingCart, AccountCircle } from "@material-ui/icons";

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
}));

const TopNav = () => {
  const classes = useStyles();
  // const history = useHistory();
  // const dispatch = useDispatch();
  const isAuth = localStorage.getItem("userToken");

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
              <div>
                <AccountCircle sx={{ marginRight: "30px" }} />
                <ShoppingCart />
                <p></p>
              </div>
              <div className={classes.amount}>0</div>
            </>
          ) : (
            <div className={classes.auth}>
              <Typography sx={{ marginRight: "30px" }}>
                <Link to="/cadastro">Cadastrar</Link>
              </Typography>
              <Typography sx={{ marginRight: "30px" }}>
                <Link to="/login">Entrar</Link>
              </Typography>
              <ShoppingCart />
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
