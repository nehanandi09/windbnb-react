import React from "react";
import Card from "./Card";
import "./CardLayout.css";

const CardLayout = ({ filteredData }) => {
  return (
    <div className="CardLayout">
      {filteredData.length !== 0 ? (
        filteredData.map((stay, index) => (
          <Card
            key={index}
            photo={stay.photo}
            type={stay.type}
            beds={stay.beds}
            rating={stay.rating}
            title={stay.title}
          />
        ))
      ) : (
        <h1 style={{ marginTop: 20, color: "#eb5757", fontSize: 35 }}>
          No such place exists. Try Helsini, Oulo, Vaasa, Turku
        </h1>
      )}
    </div>
  );
};

export default CardLayout;
