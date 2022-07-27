import React from "react";
import ReminderCard from "./ReminderCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ReminderList({ user, setUser, reminders, setReminders }) {

  return (
    <Container fluid className="">
      <Row xs={1} md={2} className="g-4 my-auto">
        {reminders.map((reminder) =>
          reminder.id ? (
            <Col xs={8} md={2} className="">
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
            </Col>
          ) : (
            ""
          )
        )}
      </Row>
    </Container>
  );
}

export default ReminderList;
