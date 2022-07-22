import React, { useState } from "react";
import EditForm from "./EditForm";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF914D",
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
  width: theme.spacing(32),
}));

function ReminderCard({
  id,
  user,
  title,
  address,
  reminder,
  reminders,
  setReminders,
  setUser,
})

{
  function handleDelete() {
    console.log("delete called");
    fetch(`/my-reminders/${reminder.id}`, { method: "DELETE" }).then((res) =>
      res.json().then((data) => {
        setReminders(reminders.filter((rem) => rem.id !== data.id));
      })
    );
  }

  const [showEditForm, setShowEditForm] = useState(false);

  function editForm(e) {
    setShowEditForm(!showEditForm);
  }

  return (
    <div className="cards">
      <Grid container spacing={16} columns={16}>
        <Grid item xs={6} md={8}>
          <Item>
            {title}
            <br />
            <br />
            {address}
            <br />
            Date
            <br />
            Time
          </Item>
        </Grid>
      </Grid>
      <Button variant="contained" theme={theme} onClick={() => handleDelete()}>
        🗑
      </Button>
      <Button onClick={editForm} variant="contained" theme={theme}>
        {showEditForm ? "Hide" : "Edit"}
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
    </div>
  );
}

export default ReminderCard;
