import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF914D",
    },
  },
});

function Login({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm setUser={setUser} />
          <p>
            <p class="text-white"> Don't have an account? &nbsp; </p>
            <Button
              variant="contained"
              theme={theme}
              onClick={() => setShowLogin(false)}
            >
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignupForm setUser={setUser} />
          <p>
            <p class="text-white">Already have an account? &nbsp; </p>
            <Button
              variant="contained"
              theme={theme}
              onClick={() => setShowLogin(true)}
            >
              Log In
            </Button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
