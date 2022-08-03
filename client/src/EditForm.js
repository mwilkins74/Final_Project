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
  const [design, setDesign] = useState("");
  const [newReminder, setNewReminder] = useState();

    
    function handleReminderEdit() {
      fetch(`/reminders/${reminder.id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          title: title,
          address: address,
          date: date,
          time: time,
          design: design,
        }),
      })
        .then((r) => r.json())
        .then((data) => setReminders(data));
    }

  return (
    <div class="container">
      <div>
        <form onSubmit={handleReminderEdit}>
          {/* Title */}
          <div>
            <input
              class="form_inputs"
              type="title"
              value={title}
              placeholder="Please enter Title"
              onChange={(e) => setTitle(e.target.value)}
              // id="form2Example1"
              // class="form-control"
            />
            <label></label>
          </div>
          <br />

          {/* Address Input */}
          <div>
            <input
              class="form_inputs"
              type="address"
              value={address}
              placeholder="Enter Address"
              onChange={(e) => setAddress(e.target.value)}
              // id="form2Example2"
              // class="form-control"
            />
            <label></label>
          </div>
          <br />

          {/* Date Input */}
          <div>
            <input
              class="form_inputs"
              type="date"
              value={date}
              placeholder="Enter Date"
              onChange={(e) => setDate(e.target.value)}
              // id="form2Example2"
              // class="form-control"
            />
            <label></label>
          </div>
          <br />

          {/* Time Input */}
          <div>
            <input
              class="form_inputs"
              type="time"
              value={time}
              placeholder="Enter Time"
              onChange={(e) => setTime(e.target.value)}
              // id="form2Example2"
              // class="form-control"
            />
            <label></label>
          </div>
          <br />

          <div class="edit-dropdown">
            <select onChange={(e) => setDesign(e.target.value)}>
              <option className="medical" value="medical">
                Medical
              </option>
              <option className="family" value="family">
                Family
              </option>
              <option className="fitness" value="fitness">
                Fitness
              </option>
              <option className="personal" value="personal">
                Personal
              </option>
              <option className="other" value="other">
                Other
              </option>
            </select>
          </div>
          <br />

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