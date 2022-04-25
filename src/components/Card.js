import React from "react";
import "./Card.css";
import { MdStar } from "react-icons/md";

function Card({ photo, type, beds, rating, title }) {
  return (
    <div className="Card">
      <img src={photo} className="Card__image" />
      <div className="Card__description">
        {beds > 1 ? <span className="Card__host">Super host</span> : ""}

        <h2 className="Card__apartment">
          {type} {beds ? `. ${beds} beds` : ""}
        </h2>
        <p className="Card__rating">
          <MdStar
            style={{
              color: "#EB5757",
              fontSize: "20px",
              top: "4px",
              position: "relative",
            }}
          />{" "}
          {rating}
        </p>
      </div>
      <h3 className="Card__subtitle">{title}</h3>
    </div>
  );
}

export default Card;
