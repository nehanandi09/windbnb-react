import React from "react";
import logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";

function Navbar({ stays, filteredData, setFilteredData }) {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "baseline",
        justifyContent: "space-between",
        padding: "4rem",
      }}
    >
      <img src={logo} alt="logo" />
      <SearchBar
        stays={stays}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
    </nav>
  );
}

export default Navbar;
