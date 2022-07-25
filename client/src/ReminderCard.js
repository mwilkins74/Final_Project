import React, { useState } from "react";
import EditForm from "./EditForm";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
    <Card style={{ width: "18rem" }}>
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
          style={{ backgroundColor: "#FF914D" }}
        >
          🗑
        </Button>

        {/* Edit Form */}
        <Button
          onClick={editForm}
          variant="btn"
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
        <br />
        <br />
        <br />
        {/* Complete Button */}
        <Button
          onClick={handleComplete}
          variant="btn"
          style={{ backgroundColor: "#FF914D" }}
        >
          {complete ? "✔" : "Done!"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ReminderCard;
