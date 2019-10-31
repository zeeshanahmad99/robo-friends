import React from "react";

import './card.styles.css';
const Card = ({ robot }) => (
  <div className="card">
    <img src={`https://robohash.org/${robot.id}?size=200x200`} alt="robot" />
    <h2>{robot.name}</h2>
    <p>{robot.email}</p>
  </div>
);

export default Card;
