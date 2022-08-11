import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

function CardList({ monsters }) {
  return (
    <>
      {monsters.length === 0 && (
        <h1 className="no-monster">Sorry! no monster matched of your search</h1>
      )}
      {monsters.length >= 0 && (
        <div className="card-list">
          {monsters.map((monster) => (
            <Card key={monster.id} monster={monster}></Card>
          ))}
        </div>
      )}
    </>
  );
}

export default CardList;
