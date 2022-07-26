import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReminderList from "./ReminderList";
import NewReminderForm from "./NewReminderForm";
// import ReminderListAgain from "./ReminderListAgain";
// import EditForm from "./EditForm";

// import Button from "react-bootstrap/Button";

import { positions } from "@mui/system";
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
  const [change, setChange] = useState(false);

  console.log(user);
  let history = useHistory();

  function handleForm(e) {
    setShowForm(!showForm);
  }
  
  useEffect(() => {
    fetch("/reminders")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReminders(data);
      });
  }, [change]);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser({});
        history.push("/");
      }
    });
  }

  function handleDesc() {
    fetch("/desc-reminders")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReminders(data);
      });
  }

  function handleAsc() {
    fetch("/asc-reminders")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReminders(data);
      });
  }

  function setRem(data) {
    setReminders(data);
  }

  if (!user && !user.email) { history.push("/") }

  return (
    <div className="home">
      <div>
        <img
          src="https://user-images.githubusercontent.com/102488171/179615489-cab315df-aea6-4394-8644-affa77ea7a33.png"
          className="home-logo"
          alt="logo"
        />
      </div>
      <div className="up-down">
        <div className="Asc_Desc">
          <Button
            onClick={handleAsc}
            style={{ backgroundColor: "lightblue" }}
            sx={{
              position: "absolute",
              top: 90,
              left: "30%",
              zIndex: "tooltip",
            }}
          >
            <span class="emojiArrow">⬆</span>
          </Button>
        </div>
        <br />
        <div className="Asc_Desc">
          <Button
            onClick={handleDesc}
            style={{ backgroundColor: "lightblue" }}
            sx={{
              position: "absolute",
              top: 150,
              left: "30%",
              zIndex: "tooltip",
            }}
          >
            <h6></h6>
            <span class="emojiArrow">⬇</span>
          </Button>
        </div>
      </div>
      <style type="text/css">
        {`
    .btn-btn {
      color: black;
      border: solid 1px;
      border-radius: 1px 0 3px 4px;
      
    `}
      </style>
      <Button
        onClick={handleLogout}
        variant="btn"
        theme={theme}
        sx={{ boxShadow: 3 }}
        style={{ backgroundColor: "lightblue" }}
      >
        <strong>Log Out</strong>
      </Button>
      <br />
      <br />
      <br />
      <Button
        onClick={handleForm}
        variant="btn"
        theme={theme}
        sx={{ boxShadow: 3 }}
        style={{ backgroundColor: "lightblue" }}
      >
        {showForm ? (
          <strong>Hide New Reminder Form</strong>
        ) : (
          <strong>Add New Reminder</strong>
        )}
      </Button>
      <br />
      <br />
      <br />
      {showForm ? (
        <NewReminderForm
          change={change}
          setChange={setChange}
          user={user}
          reminders={reminders}
          setRem={setRem}
        />
      ) : null}
      {reminders ? (
        <ReminderList
          user={user}
          setUser={setUser}
          reminders={reminders}
          setReminders={setReminders}
          change={change}
          setChange={setChange}
        />
      ) : (
        <p>User have no reminders</p>
      )}
    </div>
  );
}

export default Home;
