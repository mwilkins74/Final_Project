import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Button from "@mui/material/Button";

function Login({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm setUser={setUser} />
          <p>
            <p class="text-white" > Don't have an account? &nbsp; </p>
            <Button variant="outlined" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignupForm setUser={setUser} />
          <p class="text-white">
            Already have an account? &nbsp;
            <button class="btn btn-light" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
