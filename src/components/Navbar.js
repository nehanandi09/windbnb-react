import React from "react";
import logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "baseline",
        justifyContent: "space-between",
      }}
    >
      <img src={logo} alt="logo" />
      <SearchBar />
    </nav>
  );
}

export default Navbar;
