import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { clearMessage, loginRequestError } from "../../state/userSlice";

import { login } from "../../state/actions/authActions";

import { makeStyles } from "@material-ui/styles";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";

import { Card, Typography, TextField, Button, Alert } from "@material-ui/core";

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
  const { isLoading, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const submitFormHandler = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  useEffect(() => {
    dispatch(clearMessage());
  }, []);

  return (
    <>
      <TopNav />
      <BottomNav />
      <section className="auth">
        <Card className={classes.card}>
          <form onSubmit={submitFormHandler}>
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
              disabled={isLoading ? true : false}
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
            {message && (
              <Alert
                sx={{ marginTop: "20px" }}
                variant="filled"
                severity={message.severity}
              >
                {message.message}
              </Alert>
            )}
          </form>
        </Card>
      </section>
    </>
  );
};

export default LoginScreen;
