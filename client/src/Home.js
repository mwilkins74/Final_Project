import React, { useState, useEffect } from "react";
import ReminderList from "./ReminderList";
// import ReminderList from "./ReminderList"

function Home({ user }) {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    fetch("/reminders")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReminders(data);
      });
  }, []);

  return (
    <div>
      <ReminderList user={user} reminders={reminders} />
    </div>
  );
}

export default Home;
