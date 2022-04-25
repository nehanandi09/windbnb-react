import React from "react";
import Card from "./Card";
import "./CardLayout.css";
import stays from "./data/stays.json";

function CardLayout() {
  //   const staysData = stays.map((stay) => {
  //     return (
  //       <div>
  //         <h1>{stay.country}</h1>
  //         <h2>{stay.title}</h2>
  //       </div>
  //     );
  //   });
  return (
    <div className="CardLayout">
      {stays.map((stay) => (
        <Card
          photo={stay.photo}
          type={stay.type}
          beds={stay.beds}
          rating={stay.rating}
          title={stay.title}
        />
      ))}
    </div>
  );
}

export default CardLayout;
