import React from "react";

import "./card-list.styles.css";

import Card from "../card/card.component";
import { Monsters } from "../../App";

type CardListProps = {
  monsters: Monsters[];
};

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div>
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
    </div>
  );
};

export default CardList;
