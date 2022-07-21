import React from "react";
import { SpringGrid } from "react-stonecutter";

function ReminderCard({id, user, title, address}) {
    return (
      
            <div className="reminders">
              <h6>{title}</h6>
              <h4>{address}</h4>
              <h4>Date</h4>
              <h4>Time</h4>
            </div>
      
    );
}

export default ReminderCard
