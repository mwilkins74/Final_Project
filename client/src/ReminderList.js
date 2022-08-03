import React from "react";
import ReminderCard from "./ReminderCard";
import "./index.css";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";


const Item = styled(Card)(({ theme }) => ({
  textAlign: "center",  
  color: theme.palette.text.secondary,
}));

function ReminderList({ user, setUser, reminders, setReminders }) {
  return (
    
      <Card sx={{ minWidth: 20 }}><div >
        <Grid className="cont-background" container spacing={4}>
          {reminders.map((reminder) =>
            reminder.id ? (
              <Grid item xs={12} sm={6} md={2.4} >
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
                  />
                </Item>
              </Grid>
            ) : (
              ""
            )
          )}
        </Grid></div>
      </Card>
    
  );
}

export default ReminderList;

