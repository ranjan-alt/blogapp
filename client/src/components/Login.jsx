import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const signUpInitialValues = {
  name: "",
  username: "",
  password: "",
};

const Login = () => {
  const imageUrl =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  const [account, toggleAccount] = useState("login");
  const [signUp, setSignUp] = useState(signUpInitialValues);
  console.log(signUp);

  const toggleSignUp = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const onInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    // setSignUp(e.target.name, e.target.value) //is tarike se hmare values override ho jaenge
    setSignUp({ ...signUp, [e.target.name]: e.target.value });  //yahan pe old values ...signup me hoga and e.target.name ab as a key kaam krega kyuki hme values pass karwani hai object me 
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
              name="name"
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              id="standard-basic"
              label="Enter username"
              variant="standard"
              style={{ marginTop: "20px" }}
              name="username"
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              id="standard-basic"
              label="Enter password"
              variant="standard"
              name="password"
              style={{ marginTop: "20px" }}
              onChange={(e) => onInputChange(e)}
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
