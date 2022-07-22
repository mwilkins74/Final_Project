import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReminderList from "./ReminderList";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF914D",
    },
  },
});


function Home({ user, setUser }) {
  const [reminders, setReminders] = useState([]);
  let history = useHistory()

  useEffect(() => {
    fetch("/reminders")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReminders(data);
      });
  }, []);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE"
    })
      .then((r) => {
        if (r.ok) {
          setUser(null)
          history.push("/")
      }
    })
  }

  return (
    <div className="home">
      <div>
        <img
          src="https://user-images.githubusercontent.com/102488171/179615489-cab315df-aea6-4394-8644-affa77ea7a33.png"
          className="home-logo"
          alt="logo"
        />
      </div>
      <Button variant="contained" theme={theme} onClick={handleLogout}>
        Log Out
      </Button>
      <ReminderList user={user} reminders={reminders} />

      <Button variant="contained" theme={theme} >
        + New Reminder
      </Button>
    </div>
  );
}

export default Home;
