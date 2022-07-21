import React from "react";
import ReminderCard from "./ReminderCard";
import { SpringGrid } from "react-stonecutter";

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
  return <div>{postReminders}</div>;
}

export default ReminderList;
