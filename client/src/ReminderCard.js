import React, { useState } from "react";
import EditForm from "./EditForm";

import Card from "react-bootstrap/Card";

import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF914D",
    },
  },
});

function ReminderCard({
  id,
  user,
  title,
  date,
  time,
  incomplete,
  address,
  category, 
  reminder,
  reminders,
  setReminders,
  setUser,
})

{
  function handleDelete() {
    console.log("delete called");
    fetch(`/my-reminders/${reminder.id}`, { method: "DELETE" }).then((res) =>
      res.json().then((data) => {
        setReminders(reminders.filter((rem) => rem.id !== data.id));
      })
    );
  }

  const [showEditForm, setShowEditForm] = useState(false);
  const [complete, setComplete] = useState(false);


  function editForm(e) {
    setShowEditForm(!showEditForm);
  }

  function handleComplete() {
    setComplete(!complete);
  }

  return (
    <Card border="secondary" style={{ width: "18rem" }}>
      <Card.Body className={!complete ? "incomplete" : "complete"}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{address}</Card.Text>
        <Card.Text>{date}</Card.Text>
        <Card.Text>{time}</Card.Text>
        {/* <Card.Text>{reminder.incomplete}</Card.Text> */}
        <style type="text/css">
          {`
    .btn-btn {
      color: black;
    `}
        </style>

        {/* Delete Button */}
        <Button
          onClick={() => handleDelete()}
          variant="btn"
          theme={theme}
          sx={{ boxShadow: 3 }}
          style={{ backgroundColor: "#FF914D" }}
        >
          💣
        </Button>

        {/* Edit Form */}
        <Button
          onClick={editForm}
          variant="btn"
          theme={theme}
          sx={{ boxShadow: 3 }}
          style={{ backgroundColor: "#FF914D" }}
        >
          {showEditForm ? "Hide Edit" : "Edit"}
        </Button>
        <br />
        <br />
        <br />
        {showEditForm ? (
          <EditForm
            user={user}
            reminder={reminder}
            reminders={reminders}
            setReminders={setReminders}
          />
        ) : null}
        
        {/* Complete Button */}
        <Button
          onClick={handleComplete}
          variant="btn"
          theme={theme}
          sx={{ boxShadow: 3 }}
          style={{ backgroundColor: "#FF914D" }}
        >
          {complete ? "✔" : "Done!"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ReminderCard;
