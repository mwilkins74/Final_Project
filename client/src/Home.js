import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReminderList from "./ReminderList";
import NewReminderForm from "./NewReminderForm";
// import ReminderListAgain from "./ReminderListAgain";
// import EditForm from "./EditForm";
import Button from "react-bootstrap/Button";

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

  function setRem(data) {
    setReminders(data);
  }

  if (!user && !user.email) {history.push("/")}
  
  return (
    <div className="home">
      <div>
        <img
          src="https://user-images.githubusercontent.com/102488171/179615489-cab315df-aea6-4394-8644-affa77ea7a33.png"
          className="home-logo"
          alt="logo"
        />
      </div>
      {/* <p>`Welcome to Remind Me ${email}!`</p> */}
      <style type="text/css">
        {`
    .btn-btn {
      color: black;
    `}
      </style>
      <Button
        onClick={handleLogout}
        variant="btn"
        style={{ backgroundColor: "#FF914D" }}
      >
        Log Out
      </Button>
      <br />
      <br />
      <br />
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

      <br />
      <br />
      <br />
      <Button
        onClick={handleForm}
        variant="btn"
        style={{ backgroundColor: "#FF914D" }}
      >
        {showForm ? "Hide New Reminder Form" : "Add New Reminder"}
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

     
    </div>
  );
}

export default Home;
