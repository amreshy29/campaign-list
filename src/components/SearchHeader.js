import React from "react";
import Date from "./Date";
import Search from "./Search/Search";
const SearchHeader = () => {
  return (
    <div className="search-header">
      <Date />
      <Search />
    </div>
  );
};

export default SearchHeader;
