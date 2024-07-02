import React from "react";
import "./Card.css";

const Card = ({ name, image, description }) => {
  return (
    <div className="character-card">
      <img src={image} alt={name} className="character-card__image" />
      <h2 className="character-card__name">{name}</h2>
      <p className="character-card__description">{description}</p>
    </div>
  );
};

export default Card;
