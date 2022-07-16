import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import { MdSearch } from "react-icons/md";

const SearchBar = ({ stays, filteredData, setFilteredData }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    if (search.length > 0) {
      const newData = stays.filter((item) => {
        return item.city.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredData(newData);
    } else {
      setFilteredData(stays);
    }
  };

  if (!search) {
    setFilteredData(stays);
  }

  return (
    <div className="SearchBar">
      <form className="search-form">
        <input
          onChange={handleChange}
          value={search}
          className="search-input"
          type="text"
          placeholder="Search City"
        />

        <button
          className="search-button"
          type="submit"
          style={{ color: "#EB5757", fontSize: "20px" }}
        >
          <MdSearch className="icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
