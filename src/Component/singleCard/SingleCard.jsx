import React, { useState } from "react";
import "./SingleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleCard = ({ card, setReadTime, handleReadTime }) => {
  const { _id, name, pic, cover, date, reading_time, title, read_time_num } =
    card;
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
              {reading_time}{" "}
              <FontAwesomeIcon className="bookmark" icon={faBookmark} />
            </small>
          </p>
        </div>
      </div>
      <h2 className="blog-title">{title}</h2>
      <p
        onClick={() => {
          setReadTime(read_time_num);
          handleReadTime(read_time_num)
        }}
        className="read-mark"
      >
        Mark as read
      </p>
    </div>
  );
};

export default SingleCard;
