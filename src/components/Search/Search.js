import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div>
      <div className="searchContainer">
        <input
          className="searchBox"
          type="search"
          name="search"
          placeholder="Search..."
        />
        <i className="fa fa-search searchIcon" />
      </div>
    </div>
  );
};

export default Search;
