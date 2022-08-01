import React, { useState, useEffect } from 'react';

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
    <div>
      <div className="date_container">
        <div className="date">
          <h2 className="day">{day}</h2>
          <h3 className="clockFace">{clockFace}</h3>
        </div>
      </div>
      <br />
    </div>
  );
}

export default TimeDisplay