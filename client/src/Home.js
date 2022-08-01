import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReminderList from "./ReminderList";
import NewReminderForm from "./NewReminderForm";
import Search from "./Search";
import NavBar from "./NavBar";

import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import TimeDisplay from "./TimeDisplay";

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

  // Logout 
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

  // Descending Order of Reminders
  function handleDesc() {
    fetch("/desc-reminders")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReminders(data);
      });
  }

  // Ascending Order of Reminders
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

  // Search Result Display
  const displayReminder = reminders.filter((reminder) => {
    return reminder.title.toLowerCase().includes(search.toLocaleLowerCase());
  });

  if (!user && !user.email) {
    history.push("/");
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

      {/* <NavBar /> */}
      {/* Date & Time Display */}
      <TimeDisplay />

      {/* Search Bar */}
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
        <p>User has no reminders</p>
      )}
    </div>
  );
}

export default Home;
