import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          console.log(user);
          history.push("/home");
        });
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }

    return (
      <div class="row mb-4">
        <div class="col d-flex justify-content-center">
          <form onSubmit={handleSubmit}>
            {/* Username Input */}
            <div class="form-outline mb-4">
              <input
                type="email"
                value={email}
                placeholder="Please enter your Email"
                onChange={(e) => setEmail(e.target.value)}
                id="form2Example1"
                class="form-control"
              />
              <label class="form-label text-white" for="form2Example1">
                <strong>Email</strong>
              </label>
            </div>

            {/* Password Input */}
            <div class="form-outline mb-4">
              <input
                type="password"
                id="form2Example2"
                class="form-control"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label class="form-label text-white" for="form2Example2">
                <strong>Password</strong>
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" class="btn btn-light btn-block mb-4">
              {isLoading ? "Loading..." : "Login"}
            </button>
            {errors.map((err) => (
              <alert key={err}>"Invalid information"</alert>
            ))}
          </form>
        </div>
      </div>
    );
}

export default LoginForm;
