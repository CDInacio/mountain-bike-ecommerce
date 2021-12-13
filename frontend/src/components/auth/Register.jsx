import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import useInput from "../../hooks/use-input";

import { register } from "../../store/actions/authActions";
import { resetNotification } from "../../store/ui-slice";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";

import "./login.css";

import {
  Typography,
  TextField,
  Button,
  Alert,
  AlertTitle,
  Card,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "30%",
    padding: "40px 70px",
  },
}));

const Register = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const message = useSelector((state) => state.ui.notification);

  const {
    value: enteredName,
    hasError: enteredNameHasError,
    reset: resetName,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredRegisterEmail,
    hasError: enteredRegisterEmailHasError,
    reset: resetenteredRegisterEmail,
    valueChangeHandler: enteredRegisterEmailChangeHandler,
    inputBlurHandler: enteredRegisterEmailBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    hasError: enteredPasswordHasError,
    reset: resetPassword,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredConfirmPassword,
    hasError: enteredConfirmPasswordHasError,
    reset: resetConfirmPassword,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const resetFields = () => {
    resetenteredRegisterEmail();
    resetName();
    resetPassword();
    resetConfirmPassword();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      !enteredName ||
      !enteredPassword ||
      !enteredRegisterEmail ||
      !enteredConfirmPassword
    ) {
      setError('Informe todos os campos');
      setOpen(true);
      return;
    }

    if (enteredPassword !== enteredConfirmPassword) {
      setError('Senhas diferentes');
      setOpen(true);
      return;
    }

    let values = {
      fullname: enteredName,
      email: enteredRegisterEmail,
      password: enteredPassword,
      history,
    };
    dispatch(register(values));
    resetFields();
  };

  useEffect(() => {
    dispatch(resetNotification());
  }, [])
  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="auth">
        <Card className={classes.card}>
          <form onSubmit={formSubmitHandler}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Cadastro
            </Typography>
            <TextField
              value={enteredRegisterEmail}
              error={enteredRegisterEmailHasError}
              helperText={enteredRegisterEmailHasError ? "Campo obrigatório" : ""}
              onChange={enteredRegisterEmailChangeHandler}
              onBlur={enteredRegisterEmailBlurHandler}
              size="small"
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Email"
              variant="standard"
            />
            <TextField
              value={enteredName}
              error={enteredNameHasError}
              helperText={enteredNameHasError ? "Campo obrigatório" : ""}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              size="small"
              sx={{ width: "100%", marginTop: "30px" }}
              id="outlined-basic"
              label="Nome completo"
              variant="standard"
            />
            <TextField
              type="password"
              value={enteredPassword}
              error={enteredPasswordHasError}
              helperText={enteredPasswordHasError ? "Campo obrigatório" : ""}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              size="small"
              sx={{ width: "100%", marginTop: "30px" }}
              id="outlined-basic"
              label="Senha"
              variant="standard"
            />
            <TextField
              type="password"
              value={enteredConfirmPassword}
              error={enteredConfirmPasswordHasError}
              helperText={enteredConfirmPasswordHasError ? "Campo obrigatório" : ""}
              onChange={confirmPasswordChangeHandler}
              onBlur={confirmPasswordBlurHandler}
              size="small"
              sx={{ width: "100%", marginTop: "30px" }}
              id="outlined-basic"
              label="Confirmar senha"
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
              Cadastrar
            </Button>
            {error && open && (
              <Alert
                onClose={() => setOpen(false)}
                sx={{ marginTop: "30px" }}
                severity="error"
              >
                <AlertTitle>Error</AlertTitle>
                {error}
              </Alert>
            )}
            {message && (
              <Alert sx={{ marginTop: "30px" }} severity={message.variant}>
                {message.message}
              </Alert>
            )}
          </form>
        </Card>
      </div>
    </>
  );
};

export default Register;
