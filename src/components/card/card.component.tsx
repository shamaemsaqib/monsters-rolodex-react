import React from "react";

import "./card.styles.css";

import { Monsters } from "../../App";

type CardProps = {
  monster: Monsters;
};

const Card = ({ monster: { id, name, email } }: CardProps) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="Monster"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
