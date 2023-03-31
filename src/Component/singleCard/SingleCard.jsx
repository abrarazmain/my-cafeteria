import React from "react";
import "./SingleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleCard = ({ card }) => {
  const { _id, name, pic, cover, date, reading_time, title } = card;
  console.log(_id, name, pic, cover, date, reading_time, title);
  console.log(card);
  return (
    <div className="card-container">
      <img className="card-img" src={cover} alt="" />
      <div className="author-container">
        <div className="test2">
          <div>
            <img className="author-pic" src={pic} alt="" />
          </div>
          <div>
            <p className="author-name">{name}</p>
            <p className="blog-time">
              <small>{date}</small>
            </p>
          </div>
        </div>
        <div>
          <p className="reading-time">
            <small>
              {reading_time} <FontAwesomeIcon icon={faBookmark} />
            </small>
          </p>
        </div>
      </div>
      <h2 className="blog-title">{title}</h2>
      <p className="read-mark">Mark as read</p>
    </div>
  );
};

export default SingleCard;
