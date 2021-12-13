import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";

import useInput from "../../hooks/use-input";
import { resetNotification } from "../../store/ui-slice";

import { makeStyles } from "@material-ui/styles";

import { login } from "../../store/actions/authActions";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";

import {
  Card,
  Typography,
  TextField,
  Button,
  AlertTitle,
  Alert,
} from "@material-ui/core";

import "./login.css";

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

const LoginForm = () => {
  const history = useHistory();
  const message = useSelector((state) => state.ui.notification);
  const classes = useStyles();

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const {
    value: enteredEmail,
    hasError: enteredEmailHasError,
    // reset: resetEmail,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLoginPassword,
    hasError: enteredLoginPasswordHasError,
    // reset: resetLoginPassword,
    valueChangeHandler: enteredLoginPasswordChangeHandler,
    inputBlurHandler: enteredLoginPasswordBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const submitLoginFormHandler = (event) => {
    event.preventDefault();
    if (!enteredEmail || !enteredLoginPassword) {
      setError(true);
      setOpen(true);
      return;
    }
    let values = {
      email: enteredEmail,
      password: enteredLoginPassword,
      history,
    };
    dispatch(resetNotification());
    dispatch(login(values));
  };

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
              error={enteredEmailHasError}
              helperText={enteredEmailHasError ? "Campo obrigatório" : ""}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              size="small"
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Email"
              variant="standard"
            />
            <TextField
              type="password"
              error={enteredLoginPasswordHasError}
              onChange={enteredLoginPasswordChangeHandler}
              helperText={
                enteredLoginPasswordHasError ? "Campo obrigatório" : ""
              }
              onBlur={enteredLoginPasswordBlurHandler}
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
            {error && open && (
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
            )}
          </form>
        </Card>
      </section>
    </>
  );
};

export default LoginForm;
