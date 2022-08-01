import React from "react";
import ReminderCard from "./ReminderCard";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import "./index.css";

const Item = styled(Card)(({ theme }) => ({
  // padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ReminderList({ user, setUser, reminders, setReminders }) {
  return (
    <Card sx={{ minWidth: 20 }}>
      <Grid className="cont-background" container spacing={4}>
        {reminders.map((reminder) =>
          reminder.id ? (
            <Grid item xs={12} sm={6} md={3} lg={1.5}>
              <Item>
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
                  design={reminder.design}
                  // link={reminder.link}
                />
              </Item>
            </Grid>
          ) : (
            ""
          )
        )}
      </Grid>
    </Card>
  );
}

export default ReminderList;
