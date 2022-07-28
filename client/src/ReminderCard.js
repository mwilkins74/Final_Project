import React, { useEffect, useState } from "react";
import EditForm from "./EditForm";
// import CategoryColors from "./CategoryColors";

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
  category,
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
    // console.log(time);
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
  };

  useEffect(() => {
    adjustTime();
    console.log(updateTime);
  }, []);

  return (
    <Card Card sx={{ minWidth: 275 }}>
      <CardContent
        className={!complete ? "incomplete" : "complete"}
        // className="reminder"
      >
        <span class="emoji">📍</span>

        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          <strong>{title}</strong>
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          <strong>{address}</strong>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {updateTime}
        </Typography>
        {/* <CategoryColors /> */}
        <br />
        <style type="text/css">
          {`
    .btn-btn {
      color: black;
    `}
        </style>
        <br />

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
      </CardContent>
    </Card>
  );
}

export default ReminderCard;
