import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReminderList from "./ReminderList";
import NewReminderForm from "./NewReminderForm";

import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF914D",
    },
  },
});

function Home({ user, setUser }) {
  const [reminders, setReminders] = useState([]);
  const [showForm, setShowForm] = useState(false);
  
  let history = useHistory();

  useEffect(() => {
    fetch("/reminders")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReminders(data);
      });
  }, []);

  function handleForm(e) {
    setShowForm(!showForm);
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/");
      }
    });
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
      <ReminderList
        user={user}
        setUser={setUser}
        reminders={reminders}
        setReminders={setReminders}
      />
      <Button onClick={handleForm} variant="contained" theme={theme}>
        {showForm ? "Hide New Reminder Form" : "Add New Reminder"}
      </Button>
      <br />
      <br />
      <br />
      {showForm ? (
        <NewReminderForm
          user={user}
          reminders={reminders}
          setReminders={setReminders}
        />
      ) : null}
    </div>
  );
}

export default Home;
