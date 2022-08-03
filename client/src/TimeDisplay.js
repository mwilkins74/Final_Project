import React, { useState, useEffect } from "react";

function TimeDisplay() {
  const [clockFace, setClockFace] = useState("");

  const locale = "en";
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];

  // Date and Time
  useEffect(() => {
    const timer = setInterval(() => {
      setClockFace(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
          <h1 className="clockFace">
            <strong>{clockFace}</strong>
          </h1>
  );
}

export default TimeDisplay;
