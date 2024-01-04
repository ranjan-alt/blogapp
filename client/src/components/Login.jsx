import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Login = () => {
  const imageUrl =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  const [account, toggleAccount] = useState("login");

  const toggleSignUp = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };
  return (
    <>
      <Box //box is a replacement of div
        style={{
          width: "400px",
          margin: "auto",
          boxShadow: "5px 2px 5px 2px rgb(0 0 0 /0.6)",
        }}
      >
        <img
          src={imageUrl}
          alt="Login"
          style={{
            width: "100px",
            display: "flex",
            margin: "auto",
            padding: "50px 0 0",
          }}
        />
        {account === "login" ? (
          <Box
            style={{
              padding: "25px 35px",
              display: "flex",
              flex: "1",
              flexDirection: "column",
            }}
          >
            <TextField
              id="standard-basic"
              label="Enter username"
              variant="standard"
              style={{ marginTop: "20px" }}
            />
            <TextField
              id="standard-basic"
              label="Enter password"
              variant="standard"
              style={{ marginTop: "20px" }}
            />
            <Button
              variant="contained"
              style={{ marginTop: "20px", background: "#FB641B" }}
            >
              Login
            </Button>
            <Typography style={{ marginTop: "20px", textAlign: "center" }}>
              OR
            </Typography>
            <Button
              variant=""
              style={{ marginTop: "20px" }}
              onClick={() => toggleSignUp()}
            >
              Create an account
            </Button>
          </Box>
        ) : (
          <Box
            style={{
              padding: "25px 35px",
              display: "flex",
              flex: "1",
              flexDirection: "column",
            }}
          >
            <TextField
              id="standard-basic"
              label="Enter name"
              variant="standard"
              style={{ marginTop: "20px" }}
            />
            <TextField
              id="standard-basic"
              label="Enter username"
              variant="standard"
              style={{ marginTop: "20px" }}
            />
            <TextField
              id="standard-basic"
              label="Enter password"
              variant="standard"
              style={{ marginTop: "20px" }}
            />
            <Button
              variant="contained"
              style={{ marginTop: "20px", background: "#FB641B" }}
            >
              SignUp
            </Button>
            <Typography style={{ marginTop: "20px", textAlign: "center" }}>
              OR
            </Typography>
            <Button
              variant=""
              style={{ marginTop: "20px" }}
              onClick={() => toggleSignUp()}
            >
              Already have an account
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Login;
