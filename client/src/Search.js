import React, { useState } from "react";

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
    <div >
      <div >
        <div >
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
          <form class="search_form" onSubmit={handleSearch}>
            <div>
              <br/>
              <br/>
              <input
                class="input_search"
                type="text"
                placeholder="Search..."
                value={newSearch}
                onChange={(e) => setNewSearch(e.target.value)}
              />
              <i class="fa fa-search"></i>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
