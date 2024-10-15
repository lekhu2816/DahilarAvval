import React from "react";
import "./card.css";
import nature from "../../assets/nature.jpg";
const Card = ({info}) => {
  const{title,image,description}=info;
  return (
    <div className="card">
      <div className="section-image">
        <img src={image} alt="img" />
      </div>
     
      <div className="section-description">
      <div className="title">
        <h3>{title}</h3>
      </div>
      {description}
      </div>
    </div>
  );
};

export default Card;
