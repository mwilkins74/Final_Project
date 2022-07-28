import React, { useState } from "react";

import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF914D",
    },
    shape: {
      borderRadius: 8,
    },
  },
});

function CategoryColors({ reminders, setReminders, className = "reminder" }) {
  const [activeCategory, setActiveCategory] = useState(false);

  // const [medical, setMedical] = useState(false);
  const [family, setFamily] = useState(false);

  function changeCategory(e) {
    console.log(e.target);
    setFamily(!family);
  }

  return (
    <div class="dropdown">
      <style type="text/css">
        {`
    .btn-btn {
      color: black;
    `}
      </style>
      <Button
        variant="btn"
        theme={theme}
        sx={{ boxShadow: 3 }}
        style={{ backgroundColor: "#FF914D" }}
      >
        Category
      </Button>
      <div class="dropdown-content">
        <a onClick="changeColor('red')" className="medical">
          Medical
        </a>
        <a onClick={changeCategory ? (className = "family") : ""}>Family</a>
        <a className="fitness" onClick={changeCategory}>
          Fitness
        </a>
        <a className="personal" onClick={changeCategory}>
          Personal
        </a>
        <a className="other" onClick={changeCategory}>
          Other
        </a>
      </div>
    </div>
  );
}

export default CategoryColors;
