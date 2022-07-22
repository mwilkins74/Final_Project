import React, { useState } from 'react';

import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#FF914D",
    },
  },
});

function EditForm({ user, reminder, reminders, setReminders }) {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
    
    function handleReminderEdit(url) {
      fetch(`/reminders/${reminder.id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          title: title,
          address: address,
          date: date,
          time: time,
        }),
      })
        .then((r) => r.json())
        .then((data) => setReminders(data));
    }

  return (
    <div class="row mb-4">
      <div class="col d-flex justify-content-center">
        <form onSubmit={handleReminderEdit}>
                  
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
            <label class="form-label text-white" for="form2Example1">
              <strong>Title</strong>
            </label>
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
            <label class="form-label text-white" for="form2Example2">
              <strong>Address</strong>
            </label>
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
            <label class="form-label text-white" for="form2Example2">
              <strong>Date</strong>
            </label>
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
            <label class="form-label text-white" for="form2Example2">
              <strong>Time</strong>
            </label>
          </div>

          {/* Submit Button */}
          <Button type="submit" variant="contained" theme={theme}>
            + Reminder
          </Button>
        </form>
      </div>
    </div>
  );
}

export default EditForm;