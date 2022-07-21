import { useState } from "react";
import { useHistory } from "react-router-dom";

function SignupForm({ setUser }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmitSignUp(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        res.json().then((user) => setUser(user));
        // setEmail("");
        // setPassword("");
        // setPasswordConfirmation("");
        history.push("/home");
            console.log(e.target);

      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  // console.log('Hi')
  // function WhatsUp(e) {
  //   console.log(e.target)
  // }

  return (
    <div class="row mb-4">
      <div class="col d-flex justify-content-center">
        <form onSubmit={handleSubmitSignUp}>
          {/* Username Input */}
          <div class="form-outline mb-4">
            <input
              type="text"
              name={email}
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
              placeholder="Enter Password"
              id="form2Example2"
              class="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label class="form-label text-white" for="form2Example2">
              <strong>Password</strong>
            </label>
            <br />
            <br />
            <input
              type="password"
              placeholder="Re-enter Password"
              id="form2Example3"
              class="form-control"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <label class="form-label text-white" for="form2Example3">
              <strong>Password Confirmation</strong>
            </label>
          </div>
          <input
            type="submit"
            value="Submit"
            class="btn btn-light btn-block mb-4"
          />
        </form>
      </div>
    </div>
  );
}

export default SignupForm;

