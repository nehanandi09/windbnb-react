import React from "react";
import "./SearchBar.css";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  return (
    <form>
      <div className="SearchBar">
        <input
          className="search-input"
          type="text"
          value="Helsinki, Finland"
        ></input>
        <input
          className="search-input"
          type="text"
          placeholder="Add guests"
        ></input>
        <button
          className="search-button"
          style={{ color: "#EB5757", fontSize: "20px" }}
        >
          <MdSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
