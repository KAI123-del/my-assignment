import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useGlobalState } from "../store";
import { useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const { loginUser, jwtToken } = useGlobalState();
  const [success, setSuccess] = useState(false);
  let navigate = useNavigate();

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    loginUser({ email, password });
  };

  if (jwtToken) {
    setSuccess(true);
  }
  if (success) {
    navigate("/user");
  }

  return (
    <Grid
      container
      columns={12}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        minHeight: "100vh",
      }}>
      <Typography variant="h2" sx={{ mt: 20 }}>
        Login
      </Typography>
      <Grid item sx={{ width: "35%", mt: 6 }}>
        <TextField
          onChange={emailHandler}
          placeholder="E-mail"
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid item sx={{ width: "35%", mt: 4 }}>
        <TextField
          onChange={passwordHandler}
          placeholder="Password"
          type={"password"}
          sx={{ width: "100%" }}
        />
      </Grid>
      <Button
        onClick={submitHandler}
        variant="contained"
        sx={{ width: "35%", mt: 6, p: 2, fontSize: "18px", bgColor: "green" }}>
        Submit
      </Button>
    </Grid>
  );
}

export default Login;
