import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";

import { clearMessage, loginRequestError } from "../../state/userSlice";
import { register } from "../../state/actions/authActions";

import "../../assets/css/Auth.css";

import {
  Typography,
  TextField,
  Button,
  Alert,
  AlertTitle,
  Card,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "30%",
    padding: "40px 70px",
  },
}));

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { isLoading, message } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const classes = useStyles();

  useEffect(() => {
    dispatch(clearMessage());
  }, []);

  const submitFormHandler = (e) => {
    e.preventDefault();
    register(dispatch, { name, email, password, confirmPassword });
  };
  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="auth">
        <Card className={classes.card}>
          <form onSubmit={submitFormHandler}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Cadastro
            </Typography>
            <TextField
              onChange={(e) => setName(e.target.value)}
              size="small"
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Nome"
              variant="standard"
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              size="small"
              sx={{ width: "100%", marginTop: "30px" }}
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
            <TextField
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              size="small"
              sx={{ width: "100%", marginTop: "30px" }}
              id="outlined-basic"
              label="Confirmar senha"
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
              Cadastrar
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
      </div>
    </>
  );
};

export default RegisterScreen;
