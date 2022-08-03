import React, { useEffect, useState } from "react";
import "./index.css";

import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF914D",
    },
  },
});

function NewReminderForm({ user, reminders, setRem, setChange }) {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [design, setDesign] = useState("");
  const [newReminder, setNewReminder] = useState();

  // useEffect(() => {
  //   fetch("/reminders")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setRem(data);
  //     });
  // }, []);

  // console.log(type)
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
        design: design,
        user_id: user.id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setNewReminder(res);
      })
      .then((change) => setChange(!change))
      .catch((err) => console.error(err));
  }

  return (
    <div class="container">
      <div >
        <form onSubmit={(e) => handleNewReminder(e)}>
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
            <label
            // class="form-label text-white"
            // for="form2Example1"
            ></label>
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
            />
            <label class="form-label text-white" for="form2Example2"></label>
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
            />
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
            />
          </div>
          <br />

          {/* Type Input */}
          <div class="dropdown">
            <style type="text/css">
              {`
    .btn-btn {
      color: black;
    `}
            </style>
            <div>
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
          </div>
          <br />
          <br />
          <Button
            id="add-btn"
            type="submit"
            variant="btn"
            theme={theme}
            sx={{ boxShadow: 3 }}
            style={{ backgroundColor: "lightblue" }}
          >
            <strong>+ Reminder</strong>
          </Button>
          <br />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default NewReminderForm;
