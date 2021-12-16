import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";

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
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "30%",
    padding: "40px 70px",
  },
}));

const RegisterScreen = () => {
  const classes = useStyles();
  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="auth">
        <Card className={classes.card}>
          <form >
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Cadastro
            </Typography>
            <TextField
              size="small"
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Email"
              variant="standard"
            />
            <TextField
              size="small"
              sx={{ width: "100%", marginTop: "30px" }}
              id="outlined-basic"
              label="Nome completo"
              variant="standard"
            />
            <TextField
              type="password"
              size="small"
              sx={{ width: "100%", marginTop: "30px" }}
              id="outlined-basic"
              label="Senha"
              variant="standard"
            />
            <TextField
              type="password"
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
            {/* {error && open && (
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
            )} */}
          </form>
        </Card>
      </div>
    </>
  );
};

export default RegisterScreen;
