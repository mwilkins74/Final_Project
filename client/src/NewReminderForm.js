import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
// import CategoryColors from "./CategoryColors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF914D",
    },
  },
});

function NewReminderForm({ user, reminders, setReminders, setRem, setChange }) {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("");
  const [newReminder, setNewReminder] = useState();

  useEffect(() => {
    fetch("/reminders")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRem(data);
      });
  }, []);

  function handleNewReminder(e) {
    e.preventDefault();
    fetch("/reminders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        address: address,
        date: date,
        time: time, 
        type: type,
        user_id: user.id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setNewReminder(res);
      }).then((change) => setChange(!change))
      .catch((err) => console.error(err));
  }

  return (
    <div class="row mb-4">
      <div class="col d-flex justify-content-center">
        <form onSubmit={(e) => handleNewReminder(e)}>
          {/* Title */}
          <div class="form-outline mb-4">
            <input
              type="title"
              value={title}
              placeholder="Please enter Title"
              onChange={(e) => setTitle(e.target.value)}
              id="form2Example1"
              class="form-control"
            />
            <label class="form-label text-white" for="form2Example1"></label>
          </div>

          {/* Address Input */}
          <div class="form-outline mb-4">
            <input
              type="address"
              value={address}
              id="form2Example2"
              class="form-control"
              placeholder="Enter Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <label class="form-label text-white" for="form2Example2"></label>
          </div>

          {/* Date Input */}
          <div class="form-outline mb-4">
            <input
              type="date"
              value={date}
              id="form2Example2"
              class="form-control"
              placeholder="Enter Date"
              onChange={(e) => setDate(e.target.value)}
            />
            <label class="form-label text-white" for="form2Example2"></label>
          </div>

          {/* Time Input */}
          <div class="form-outline mb-4">
            <input
              type="time"
              value={time}
              id="form2Example2"
              class="form-control"
              placeholder="Enter Time"
              onChange={(e) => setTime(e.target.value)}
            />
            <label class="form-label text-white" for="form2Example2"></label>

            {/* Type Input */}
            {/* <CategoryColors setType={setType} /> */}
          </div>

          <Button
            type="submit"
            variant="btn"
            theme={theme}
            sx={{ boxShadow: 3 }}
            style={{ backgroundColor: "lightblue" }}
          >
            <strong>+ Reminder</strong>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default NewReminderForm;
