import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReminderList from "./ReminderList";
import NewReminderForm from "./NewReminderForm";
import Search from "./Search";
// import ReminderListAgain from "./ReminderListAgain";
// import EditForm from "./EditForm";

import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF914D",
    },
    shape: {
      borderRadius: 8,
    },
  },
});

function Home({ user, setUser }) {
  const [reminders, setReminders] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [change, setChange] = useState(false);
  const [search, setSearch] = useState("");

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

  const displayReminder = reminders.filter((reminder) => {
    return reminder.title.toLowerCase().includes(search.toLocaleLowerCase());
  });

  if (!user && !user.email) {
    history.push("/");
  }
  
  const currentD = new Date()
  const date = `${
    currentD.getMonth() + 1
    }/${currentD.getDate()}/${currentD.getFullYear()}`
  
  const today = new Date()
  const clock = `${
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
  }`


  return (
    <div className="home">
      <div>
        <img
          src="https://user-images.githubusercontent.com/102488171/179615489-cab315df-aea6-4394-8644-affa77ea7a33.png"
          className="home-logo"
          alt="logo"
        />
      </div>
      <div className="date">
        <div>
          <h3 className="value">{date}</h3>
          <h3 className="clock-value">{clock}</h3>
        </div>
      </div>
      <br />
      <div className="search-bar">
        <Search search={search} onNewSearch={setSearch} />
      </div>

      {/* Ascending & Descending Buttons */}
      <div className="up-down">
        <div>
          <Button
            onClick={handleAsc}
            variant="btn"
            theme={theme}
            style={{
              backgroundColor: "lightblue",
              maxWidth: "130px",
              maxHeight: "130px",
              minWidth: "130px",
              minHeight: "130px",
            }}
            sx={{
              position: "absolute",
              top: 20,
              left: "30%",
              zIndex: "tooltip",
              boxShadow: 3,
            }}
          >
            <span class="emojiArrow">
              <h6>
                Ascending <br /> Order
              </h6>
              ⬆
            </span>
          </Button>
        </div>
        <br />
        <div>
          <Button
            onClick={handleDesc}
            variant="btn"
            theme={theme}
            style={{
              backgroundColor: "lightblue",
              maxWidth: "130px",
              maxHeight: "130px",
              minWidth: "130px",
              minHeight: "130px",
            }}
            sx={{
              position: "absolute",
              top: 160,
              left: "30%",
              zIndex: "tooltip",
              boxShadow: 3,
            }}
          >
            <span class="emojiArrow">
              <h6>
                Descending <br /> Order
              </h6>
              ⬇
            </span>
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
        style={{ backgroundColor: "pink" }}
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
          reminders={displayReminder}
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
