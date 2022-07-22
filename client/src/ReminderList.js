import React from "react";
import ReminderCard from "./ReminderCard";
import Grid from "@mui/material/Button";
import Item from "@mui/material/Button";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF914D",
    },
  },
});

function ReminderList({ user, setUser, reminders, setReminders }) {
  const postReminders = reminders.map((reminder) => (
    <ReminderCard
      user={user}
      setUser={setUser}
      reminder={reminder}
      reminders={reminders}
      setReminders={setReminders}
      key={reminders.id}
      id={reminder.id}
      title={reminder.title}
      address={reminder.address}
      // time={time}
      // date={date}
    />
  ));

  let allReminders = reminders;
  return (
    <div>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={6} md={8}>
          <Item>{postReminders}</Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default ReminderList;
