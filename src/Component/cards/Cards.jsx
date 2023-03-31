import React, { useEffect, useState } from "react";
import SingleCard from "../singleCard/SingleCard";

const Cards = ({setReadTime,handleReadTime}) => {
  console.log(setReadTime);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div>
      {cards.map((singleCard) => (
          <SingleCard handleReadTime={handleReadTime} setReadTime = {setReadTime} card={singleCard} key={singleCard.id}></SingleCard>
      ))}
    </div>
  );
};

export default Cards;
