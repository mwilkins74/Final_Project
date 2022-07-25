import React from "react";
import ReminderCard from "./ReminderCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function ReminderListAgain({ user, setUser, reminders, setReminders }) {
  console.log(reminders);

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
      category={reminder.category}
      // time={time}
      // date={date}
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
              category={reminder.category}
              // time={time}
              // date={date}
            />
          ) : (
            ""
          )
        )}
      </Row>
    </Container>
  );
}

export default ReminderListAgain;
