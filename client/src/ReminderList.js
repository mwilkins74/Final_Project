import React from "react";
import ReminderCard from "./ReminderCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function ReminderList({ user, setUser, reminders, setReminders, change, setChange }) {
  
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
      date={reminder.date}
      time={reminder.time}
      incomplete={reminder.incomplete}
    />
  ));

  return (
    <Container className="list">
      <Row class="fw-bolder row gx-5 row gy-5 p-3">
        {reminders.map((reminder) =>
          reminder.id ? (
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
              date={reminder.date}
              time={reminder.time}
              incomplete={reminder.incomplete}
            />
            
          ) : (
            ""
          )
        )}
      </Row>
    </Container>
  );
}

export default ReminderList;
