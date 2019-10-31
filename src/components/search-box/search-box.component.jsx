import React from "react";

import "./search-box.styles.css";

const SearchBox = ({ handleChange }) => (
  <input
    className="search-box"
    type="search"
    onChange={handleChange}
    placeholder="search robots"
  />
);

export default SearchBox;
