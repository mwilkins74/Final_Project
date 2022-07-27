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

function Search({ onNewSearch }) {
  const [newSearch, setNewSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    onNewSearch(newSearch);
  }

  return (
    <form onSubmit={handleSearch}>
      <div class="input-group rounded border border-dark">
        <input
          class="form-control rounded"
          type="text"
          id="search"
          placeholder="Search..."
          value={newSearch}
          onChange={(e) => setNewSearch(e.target.value)}
        />
        <Button
          class="input-group-text border-0 fas fa-search"
          type="submit"
          variant="btn"
          theme={theme}
          sx={{ boxShadow: 3 }}
          style={{ backgroundColor: "lightblue" }}
        >
          🔎
        </Button>
        <Button
          onClick={(e) => setNewSearch("")}
          variant="btn"
          theme={theme}
          sx={{ boxShadow: 3 }}
          style={{ backgroundColor: "#FF914D" }}
        >
          <strong>Clear</strong>
        </Button>
      </div>
    </form>
  );
}

export default Search;