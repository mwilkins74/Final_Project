import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home"
import Login from "./Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <div>
            <img
              src="https://user-images.githubusercontent.com/102488171/179615489-cab315df-aea6-4394-8644-affa77ea7a33.png"
              className="logo"
              alt="logo"
            />
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Login setUser={user} />
          </Route>
          <Route path="/home">
            <Home
              user={user}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
