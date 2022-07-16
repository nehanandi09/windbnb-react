import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CardLayoutHeading from "./components/CardLayoutHeading";
import CardLayout from "./components/CardLayout";
import data from "./components/data/data.json";

function App() {
  const [stays, setStays] = useState(data);
  const [filteredData, setFilteredData] = useState(stays);

  return (
    <div className="App">
      <Navbar
        stays={stays}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <CardLayoutHeading />
      <CardLayout filteredData={filteredData} />
    </div>
  );
}

export default App;

// Components
// 1. Navbar
// 2. Main layout
// 3. Heading
// 4. Card
// 4.1. Card image
// 4.2. Card content
