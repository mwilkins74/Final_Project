import React, { useEffect, useState } from "react";
import EditForm from "./EditForm";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
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
  design,
  reminder,
  reminders,
  setReminders,
  setUser,
}) {
  function handleDelete() {
    fetch(`/my-reminders/${reminder.id}`, { method: "DELETE" }).then((res) =>
      res.json().then((data) => {
        setReminders(reminders.filter((rem) => rem.id !== data.id));
      })
    );
  }

  const [showEditForm, setShowEditForm] = useState(false);
  const [complete, setComplete] = useState(false);
  const [updateTime, setUpdateTime] = useState("");

  function editForm(e) {
    setShowEditForm(!showEditForm);
  }

  function handleComplete() {
    setComplete(!complete);
  }

  const adjustTime = () => {
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

    setUpdateTime(timeValue);
  };

  useEffect(() => {
    adjustTime();
    console.log(updateTime);
  }, []);

  return (
    <div>
      <div>
        <Card Card sx={{ minWidth: 275 }} class="card__face card__face--front">
          <CardContent className={design}>
            <span class="emoji">📍</span>

            <Typography
              sx={{ fontSize: 24 }}
              color="text.secondary"
              gutterBottom
            >
              <strong>{title}</strong>
            </Typography>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              <strong>{address}</strong>
            </Typography>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              {date}
            </Typography>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              {updateTime}
            </Typography>
            <br />
            <style type="text/css">
              {`
    .btn-btn {
      color: black;
    `}
            </style>
            <br />
            {/* Edit Form */}
            <Button
              onClick={editForm}
              variant="btn"
              theme={theme}
              sx={{ boxShadow: 3 }}
              style={{ backgroundColor: "#FF914D" }}
            >
              <strong>{showEditForm ? "Hide Edit" : "Edit"}</strong>
            </Button>
            <br />
            <br />
            
            {/* Delete Button */}
            <Button
              onClick={() => handleDelete()}
              variant="btn"
              theme={theme}
              sx={{ boxShadow: 3 }}
              style={{ backgroundColor: "#FF914D" }}
            >
              <strong>Delete</strong>
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
          </CardContent>
          <div class="card__face card__face--back"></div>
        </Card>
      </div>
    </div>
  );
}

export default ReminderCard;
