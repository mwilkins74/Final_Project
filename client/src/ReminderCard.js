import React, { useEffect, useState } from "react";
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
  const [updateTime, setUpdateTime] = useState("")

  function editForm(e) {
    setShowEditForm(!showEditForm);
  }

  function handleComplete() {
    setComplete(!complete);
  }


  const changeTime = () => {
    let time = reminder.time;
    time = time.split(":");


    let hours = Number(time[0]);
    let minutes = Number(time[1]);

    let timeValue;

    if (hours > 0 && hours <= 12) {
      timeValue = "" + hours;
    } else if (hours > 12) {
      timeValue = "" + (hours - 12);
    } else if (hours === 0) {
      timeValue = "12";
    }

    timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes;
    timeValue += hours >= 12 ? " P.M." : " A.M.";

    
    setUpdateTime(timeValue)
  }

  useEffect(() => {
    changeTime()
    console.log(updateTime)
  }, [])


  }
    
  return (
    <div>
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Body className={!complete ? "incomplete" : "complete"}>
          <span class="emoji">📍</span>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{address}</Card.Text>
          <Card.Text>{date}</Card.Text>

          <Card.Text>{updateTime}</Card.Text>

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
    </div>
  );
}

export default ReminderCard;
