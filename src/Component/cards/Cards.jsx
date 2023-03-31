import React, { useEffect, useState } from "react";
import SingleCard from "../singleCard/SingleCard";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div>
      {cards.map((singleCard) => (
          <SingleCard card={singleCard} key={singleCard.id}></SingleCard>
      ))}
    </div>
  );
};

export default Cards;
