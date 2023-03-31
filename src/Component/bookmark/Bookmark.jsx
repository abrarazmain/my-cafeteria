import React from "react";
import BookmarkBlog from "../bookmarkBlog/BookmarkBlog";
import "./Bookmark.css";

const Bookmark = ({ readTime }) => {
  const resetTime = () => {
    localStorage.removeItem('readTime')
    window.location.reload()
  }
  console.log(readTime);
  const sum = localStorage.getItem("readTime");
  console.log(sum);
  return (
    <div className="bookmark-container">
      <div className="reading-time-container">
        <h2>Spent Time On Read:{sum} <button onClick={resetTime} className="reset">reset</button></h2>
      </div> 
      <div className="bookmark-title-container">
         <BookmarkBlog></BookmarkBlog>
      </div>
    </div>
  );
};

export default Bookmark;
