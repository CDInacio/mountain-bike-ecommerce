import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { useHistory } from "react-router";

import { login } from "../../actions/userActions";

import { makeStyles } from "@material-ui/styles";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";

import {
  Card,
  Typography,
  TextField,
  Button,
  //   AlertTitle,
  //   Alert,
  CircularProgress,
} from "@material-ui/core";

import "../../assets/css/Auth.css";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    color: "black",
  },
  card: {
    width: "30%",
    padding: "40px 70px",
  },
}));

const LoginScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const userLoginData = useSelector((state) => state.userLogin);
  const { isLoading, userData, message } = userLoginData;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLoginFormHandler = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  console.log(userData);
  useEffect(() => {
    if (userData) {
      <Redirect to="/" />;
    }
  }, [userData]);

  return (
    <>
      <TopNav />
      <BottomNav />
      <section className="auth">
        <Card className={classes.card}>
          <form onSubmit={submitLoginFormHandler}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Entrar
            </Typography>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              size="small"
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Email"
              variant="standard"
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              size="small"
              sx={{ width: "100%", marginTop: "30px" }}
              id="outlined-basic"
              label="Senha"
              variant="standard"
            />
            <Button
              type="submit"
              color="primary"
              className={classes.authButton}
              sx={{
                marginTop: "60px",
                width: "100%",
              }}
              variant="contained"
            >
              Entrar
            </Button>
            {/* {error && open && (
              <Alert
                onClose={() => setOpen(false)}
                sx={{ marginTop: "30px" }}
                severity="error"
              >
                <AlertTitle>Error</AlertTitle>
                Por favor, preencha todos os campos!
              </Alert>
            )}
            {message && (
              <Alert sx={{ marginTop: "30px" }} severity={message.variant}>
                {message.message}
              </Alert>
            )} */}
          </form>
        </Card>
        {isLoading ? <CircularProgress
            size={50}
            sx={{ position: "absolute", top: "85%", left: "47%" }}
          />: ""}
      </section>
    </>
  );
};

export default LoginScreen;
