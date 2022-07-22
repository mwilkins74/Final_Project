import React from "react";
import ReminderCard from "./ReminderCard";
import Grid from "@mui/material/Button";
import Item from "@mui/material/Button";

function ReminderList({ user, reminders }) {
  const postReminders = reminders.map((reminder) => (
    <ReminderCard
      user={user}
      key={reminders.id}
      id={reminder.id}
      title={reminder.title}
      address={reminder.address}
      // time={time}
      // date={date}
    />
  ));

  let allReminders = reminders
  return (
    
    <Grid container spacing={4} columns={16}>
      <Grid item xs={6} md={8}>
        <Item>{postReminders}</Item>
      </Grid>
    </Grid>
  );
}

export default ReminderList;


